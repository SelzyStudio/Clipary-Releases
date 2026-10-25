# CLIPARY — capture, explain and keep your screen work

[한국어](README.md) · **English**

A free Windows 10/11 64-bit app for screenshots, image stitching, annotations, screen recording, video editing, OCR and Markdown notes. Turn a screen into a clear bug report, a how-to video or a reusable note.

**[Free download for Windows](https://get.microsoft.com/installer/download/9NCFQVN0QZJC?referrer=appbadge&source=github.com)** · [Website & quick start](https://selzystudio.github.io/Clipary-Releases/)

[Three practical tutorials with short videos](https://selzystudio.github.io/Clipary-Releases/guides/) — screenshot annotations, MP4/GIF editing, and OCR-to-Markdown notes

## Quick start: your first capture

1. Install and launch CLIPARY.
2. Press `Ctrl+Shift+P`, then drag a region or click a window.
3. Add an arrow or a label if needed; use `Ctrl+Shift+C` to copy the edited result and `Ctrl+V` to paste it.

## Features, in the order you are likely to use them

### 1. Capture what matters and paste it anywhere

Capture a region or window for a message, document or support request. Copy it to the clipboard, use a capture delay, or capture the last region again.

1. Press Ctrl+Shift+P.
2. Drag to select a region or click a window.
3. Paste into your document or messenger with Ctrl+V.

### 2. Explain with arrows, numbered steps and mosaic

Make bug reports, design feedback and instructions easier to follow. Add arrows, text, highlighter, shapes, numbered markers and a spotlight. Select areas to obscure with mosaic before sharing.

1. Open a capture or image in the editor.
2. Add arrows, labels and numbered steps; obscure areas as needed.
3. Save with Ctrl+S or copy with Ctrl+Shift+C.

![Explain with arrows, numbered steps and mosaic](docs/assets/screenshots/01-image-annotations.png)

### 3. Turn a long page into one image

Combine overlapping captures of articles, documents, conversations or wide dashboards. Choose automatic alignment, vertical or horizontal scroll stitching, or join images without overlap.

1. Scroll the page yourself and capture adjacent sections with 20–40% overlap.
2. Arrange the images in order and choose a stitching mode.
3. Click the merge button, check the result and save.

### 4. Record a task and make an MP4 or GIF guide

Show an action instead of describing it. Record a monitor, window or region, trim on a timeline, and add arrows, speech bubbles, emphasis, obscuring effects, numbered markers or a voiceover. Adjust MP4 resolution, quality and target size, or GIF width and frame rate.

1. Choose a monitor, window or region from Record and start recording.
2. Stop to open the editor; split with Ctrl+B and trim with Q/W.
3. Add instructional effects and export as MP4 or GIF.

![Record a task and make an MP4 or GIF guide](docs/assets/screenshots/02-video-timeline.png)

### 5. Extract text instead of typing it again

Read Korean and English text with built-in OCR. Copy an error message, a paragraph from an image or study material. Built-in OCR runs on your PC, and you can edit the recognized result.

1. Open Text recognition for the result image.
2. Select built-in OCR and run it.
3. Review and edit the result, then copy it or save it in a note.

![Extract text instead of typing it again](docs/assets/screenshots/04-offline-ocr.png)

### 6. Keep captures and explanations in Markdown notes

Save captures, context and OCR results together. Find them by folder, tag, topic or search. Use [[note links]], backlinks, side-by-side notes, daily notes and templates. Notes are local Markdown files, and you can use an Obsidian vault.

1. Choose the note action from an image result.
2. Enter a title and context; include OCR text if useful.
3. Find it in Notes or connect it to related notes with links.

![Keep captures and explanations in Markdown notes](docs/assets/screenshots/03-capture-notes.png)

### 7. Arrange comparisons and collages on a canvas

Put before/after images, product pictures or several steps of a guide on one canvas. Move, resize and rotate images; set the background, spacing, transparency and canvas size.

1. Drag image files into the app or use the file picker.
2. Open the simple collage mode and set the canvas size and background.
3. Arrange the images, add annotations and save.

### 8. Use external AI only when you choose

Optional AI organization turns a capture into a Korean Markdown summary. It requires a separately installed and signed-in Claude Code, Codex CLI or Gemini CLI. After confirmation, the selected image and instructions go to that provider.

1. Connect a provider tool and account in AI settings.
2. Choose AI organization for the image and confirm the transfer.
3. Review and edit the result before saving it in a note.

## Useful shortcuts

| Default shortcut | Action |
|---|---|
| `Ctrl+Shift+P` | Capture a region/window |
| `Ctrl+F12` | Start/stop recording the default monitor |
| `Ctrl+F11` | Start/stop recording the last region |
| `Ctrl+S` / `Ctrl+Shift+C` | Save/copy an image result |
| `Ctrl+B` / `Q` / `W` | Split/trim in the video editor |
| `F1` | Open in-app help |

Shortcuts can be changed in Settings. Scrolling capture means you capture overlapping sections yourself, then stitch them; it does not automatically scroll a page. Alignment depends on overlap, content and scale. Check OCR results and areas you obscure before sharing.

## Free, with optional external AI

Core capture, stitching, editing, recording, built-in OCR and notes run on your PC without a purchase or support payment. Optional external AI needs its own account/tool and may have provider charges or limits; selected content is sent only after confirmation. The AI summary is currently Korean Markdown. The interface supports Korean, English, Japanese and Simplified Chinese.

This public repository contains installers, documentation and third-party corresponding sources. **The CLIPARY application source is private.**

<a id="download"></a>

## Downloads

### Recommended download

**[Free download for Windows — official Microsoft web installer](https://get.microsoft.com/installer/download/9NCFQVN0QZJC?referrer=appbadge&source=github.com)**

Download the Microsoft-signed web installer directly from Microsoft's servers. An internet connection is required to download and install the Store edition of CLIPARY. Microsoft Store manages subsequent updates.

[Microsoft Store listing](https://apps.microsoft.com/detail/9NCFQVN0QZJC?hl=en-US) · [Official website](https://selzystudio.github.io/Clipary-Releases/)

### Alternative download

[Direct GitHub installer — CLIPARY 1.0.0](https://github.com/SelzyStudio/Clipary-Releases/releases/tag/v1.0.0)

The direct GitHub installer has no Authenticode certificate, so Windows may display publisher/SmartScreen warnings. Compare its SHA256 with the release's SHA256SUMS.txt. In-app updates for the GitHub edition verify a separate Tauri cryptographic signature.

No purchase, contribution or license key is required for ordinary features. Optional external AI requires a separate CLI/sign-in and is subject to provider terms and charges.

## Support development

- [Ko-fi](https://ko-fi.com/selzystudio) — one-time support from outside South Korea
- [Support information](https://selzystudio.github.io/Clipary-Releases/support.html) — choose Ko-fi or KakaoPay

Existing support controls in About/Settings are available from the start. An additional button beside Settings appears after **three distinct days of active use**. GitHub Sponsors will be added when its public page is ready.

Contributions do not change features, usage duration or advertising. They do not purchase source disclosure, specific updates or priority support. Microsoft does not solicit or organize this support.

## Third-party components and privacy

[Corresponding sources/build materials](https://github.com/SelzyStudio/Clipary-Releases/releases/tag/v1.0.0-sources) cover the controlled FFmpeg, Hugin and Tesseract builds and their libraries, with original sources, patches, configuration/build instructions and original notices. Required notices and MPL source archives are also installed with the app. Rights to obtain source, modify or redistribute covered components follow their own licenses independently of CLIPARY's private application source policy.

[Terms](https://selzystudio.github.io/Clipary-Releases/legal/en/terms.html) · [Privacy](https://selzystudio.github.io/Clipary-Releases/legal/en/privacy.html) · [Support/refunds](https://selzystudio.github.io/Clipary-Releases/legal/en/refund.html)

Ordinary work is processed locally. Optional AI sends selected images/instructions to your chosen provider after confirmation. Inquiry emails/attachments are deleted within 90 days after resolution, except legally retained records.

## Contact

[Issues](https://github.com/SelzyStudio/Clipary-Releases/issues) · [selzystudio@gmail.com](mailto:selzystudio@gmail.com)

Do not post personal information, original work documents, credentials or sensitive captures in public issues.
