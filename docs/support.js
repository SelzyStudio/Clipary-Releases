// Public profile links only. Account ownership, onboarding and payout status
// must be verified by the owner before enabling either destination.
const PROVIDERS = Object.freeze({
  githubSponsors: {
    label: 'GitHub Sponsors',
    linkId: 'support-github-sponsors',
    host: 'github.com',
    pattern: /^https:\/\/github\.com\/sponsors\/[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?\/?$/,
  },
  koFi: {
    label: 'Ko-fi',
    linkId: 'support-ko-fi',
    host: 'ko-fi.com',
    pattern: /^https:\/\/ko-fi\.com\/[a-zA-Z0-9][a-zA-Z0-9_-]*\/?$/,
  },
})

const PREPARATION_MESSAGE = '외부 후원 링크를 준비하고 있습니다. 국내 후원은 아래 카카오페이 QR을 이용할 수 있습니다.'

function hasExactKeys(value, keys) {
  return value !== null && typeof value === 'object' && !Array.isArray(value) &&
    Object.keys(value).length === keys.length &&
    keys.every((key) => Object.hasOwn(value, key))
}

/** Accept canonical HTTPS profile URLs, including no explicit default port. */
export function validateSupportDestination(id, value) {
  if (!Object.hasOwn(PROVIDERS, id) || typeof value !== 'string' || value.length > 2048) return null
  const provider = PROVIDERS[id]
  // Validate the raw spelling before URL normalization can erase a :443 port,
  // dot segment, escaped character, or leading/trailing whitespace.
  if (value !== value.trim() || /[\u0000-\u0020\u007f]/.test(value) || !provider.pattern.test(value)) return null
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' || url.hostname !== provider.host ||
      url.username || url.password || url.port || url.search || url.hash) return null
    return url.href
  } catch {
    return null
  }
}

/** One invalid/duplicate entry closes every link, including previously shown links. */
export function validateSupportConfig(config) {
  const invalid = () => ({ valid: false, activeDestinations: [] })
  if (!hasExactKeys(config, ['version', 'providers']) || config.version !== 2 ||
    !Array.isArray(config.providers) || config.providers.length !== 2) return invalid()
  const seenIds = new Set()
  const seenUrls = new Set()
  const activeDestinations = []
  for (const entry of config.providers) {
    if (!hasExactKeys(entry, ['id', 'enabled', 'url']) || typeof entry.id !== 'string' ||
      !Object.hasOwn(PROVIDERS, entry.id) || seenIds.has(entry.id) ||
      typeof entry.enabled !== 'boolean' || typeof entry.url !== 'string') return invalid()
    seenIds.add(entry.id)
    if (entry.url === '') {
      if (entry.enabled) return invalid()
      continue
    }
    const url = validateSupportDestination(entry.id, entry.url)
    if (!url || seenUrls.has(url)) return invalid()
    seenUrls.add(url)
    if (entry.enabled) activeDestinations.push({ id: entry.id, url })
  }
  return { valid: true, activeDestinations }
}

export function renderSupportDestinations(config, root = globalThis.document) {
  if (!root) return
  const status = root.getElementById('support-status')
  const container = root.getElementById('support-links')
  const links = Object.fromEntries(Object.entries(PROVIDERS).map(([id, provider]) =>
    [id, root.getElementById(provider.linkId)]))
  for (const link of Object.values(links)) {
    if (!link) continue
    link.hidden = true
    link.removeAttribute('href')
  }
  if (container) container.hidden = true
  if (status) status.textContent = PREPARATION_MESSAGE
  const result = validateSupportConfig(config)
  if (!result.valid || !status || !container || Object.values(links).some((link) => !link)) return
  if (!result.activeDestinations.length) return
  for (const destination of result.activeDestinations) {
    links[destination.id].href = destination.url
    links[destination.id].hidden = false
  }
  container.hidden = false
  const names = result.activeDestinations.map(({ id }) => PROVIDERS[id].label).join(' · ')
  status.textContent = `외부 후원 제공업체 ${names}로 이동합니다. 결제 전에 수취인, 금액·통화와 취소·환불 조건을 확인해 주세요. Ko-fi는 일회성 후원만 제공하며, 한국 PayPal 경로는 해외 후원용으로 국내 결제는 지원하지 않습니다. 국내 후원은 별도의 카카오페이 QR을 선택해 주세요.`
}

export async function loadSupportDestinations(root = globalThis.document, fetchConfig = globalThis.fetch) {
  if (!root) return
  renderSupportDestinations(null, root)
  try {
    const response = await fetchConfig('/Clipary-Releases/support-config.json', { cache: 'no-store' })
    if (!response.ok) return
    renderSupportDestinations(await response.json(), root)
  } catch {
    // Missing, malformed or invalid configuration keeps all links hidden.
  }
}

if (typeof document !== 'undefined') void loadSupportDestinations()
