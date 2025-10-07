# html5-qrcode i18n Support

This document explains how to use internationalization (i18n) features in html5-qrcode.

## Quick Start

```javascript
import { Html5QrcodeScanner } from "html5-qrcode";

// Define your language pack
const zhTW = {
    scanningStatus: "掃描中",
    scanButtonStartScanningText: "開始掃描",
    scanButtonStopScanningText: "停止掃描",
    selectCamera: "選擇相機"
};

// Pass language pack in config
const scanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250,
    languagePack: zhTW
});

scanner.render(onScanSuccess, onScanError);
```

## Features

- ✅ **External Language Packs** - Load language files from your own project
- ✅ **Partial Translation** - Only translate the strings you need
- ✅ **English Default** - Untranslated strings automatically fall back to English
- ✅ **Type Safe** - Full TypeScript support with `LanguagePack` interface

## Using Example Language Packs

We provide example language packs in the `examples/i18n/` directory:

```javascript
// Traditional Chinese
import { zhTW } from "html5-qrcode/examples/i18n/zh-TW.js";

// Simplified Chinese
import { zhCN } from "html5-qrcode/examples/i18n/zh-CN.js";

// Japanese
import { ja } from "html5-qrcode/examples/i18n/ja.js";

const scanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250,
    languagePack: zhTW  // or zhCN, ja
});
```

## Creating Custom Language Pack

### Complete Language Pack

```javascript
export const myLanguage = {
    // Error messages
    codeParseError: (exception) => `Parse error: ${exception}`,
    errorGettingUserMedia: (error) => `Media error: ${error}`,
    onlyDeviceSupportedError: "Device not supported message",
    cameraStreamingNotSupported: "Camera not supported message",
    unableToQuerySupportedDevices: "Cannot query devices message",
    insecureContextCameraQueryError: "Insecure context message",
    scannerPaused: "Paused",

    // Scanner status
    scanningStatus: "Scanning",
    idleStatus: "Idle",
    errorStatus: "Error",
    permissionStatus: "Permission",
    noCameraFoundErrorStatus: "No Camera",
    lastMatch: (decodedText) => `Last: ${decodedText}`,

    // Titles
    codeScannerTitle: "Scanner",
    cameraPermissionTitle: "Camera Permission",
    cameraPermissionRequesting: "Requesting permission...",
    noCameraFound: "No camera",

    // Buttons
    scanButtonStopScanningText: "Stop",
    scanButtonStartScanningText: "Start",
    scanButtonScanningStarting: "Starting...",
    torchOnButton: "Flash On",
    torchOffButton: "Flash Off",
    torchOnFailedMessage: "Flash on failed",
    torchOffFailedMessage: "Flash off failed",

    // Scan mode
    textIfCameraScanSelected: "Scan Image",
    textIfFileScanSelected: "Use Camera",
    selectCamera: "Select Camera",

    // File selection
    fileSelectionChooseImage: "Choose Image",
    fileSelectionChooseAnother: "Choose Another",
    fileSelectionNoImageSelected: "No image",
    dragAndDropMessage: "Drop image to scan",
    dragAndDropMessageOnlyImages: "Drop image (images only)",
    loadingImage: "Loading...",

    // Other
    anonymousCameraPrefix: "Camera",
    zoom: "zoom",
    cameraScanAltText: "Camera scan",
    fileScanAltText: "File scan",

    // Library info
    poweredBy: "Powered by ",
    reportIssues: "Report issues"
};
```

### Partial Language Pack

You only need to define the strings you want to customize:

```javascript
const partialLanguage = {
    scanButtonStartScanningText: "開始",
    scanButtonStopScanningText: "停止",
    selectCamera: "選擇相機",
    scanningStatus: "掃描中"
};

const scanner = new Html5QrcodeScanner("reader", {
    languagePack: partialLanguage
});
```

## TypeScript Support

```typescript
import { Html5QrcodeScanner, LanguagePack } from "html5-qrcode";

const myLanguage: LanguagePack = {
    scanningStatus: "掃描中",
    scanButtonStartScanningText: "開始掃描",
    // TypeScript will provide autocomplete and type checking
};

const scanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250,
    languagePack: myLanguage
});
```

## API Reference

### Config Option

Add `languagePack` to your `Html5QrcodeScannerConfig`:

```typescript
interface Html5QrcodeScannerConfig {
    // ... other config options
    languagePack?: LanguagePack;
}
```

### LanguagePack Interface

```typescript
export interface LanguagePack {
    // All properties are optional
    // See complete list in "Creating Custom Language Pack" section
}
```

### Html5QrcodeI18n Class

For advanced usage, you can also use the `Html5QrcodeI18n` class directly:

```typescript
import { Html5QrcodeI18n } from "html5-qrcode";

// Set language globally
Html5QrcodeI18n.setLanguage(myLanguagePack);

// Reset to English
Html5QrcodeI18n.reset();
```

## Examples

### Example 1: Simple Translation

```html
<!DOCTYPE html>
<html>
<head>
    <title>QR Scanner - 繁體中文</title>
</head>
<body>
    <div id="reader"></div>

    <script type="module">
        import { Html5QrcodeScanner } from "html5-qrcode";

        const zhTW = {
            scanningStatus: "掃描中",
            scanButtonStartScanningText: "開始掃描",
            scanButtonStopScanningText: "停止掃描",
            selectCamera: "選擇相機"
        };

        const scanner = new Html5QrcodeScanner("reader", {
            fps: 10,
            qrbox: 250,
            languagePack: zhTW
        });

        scanner.render(
            (decodedText) => console.log("掃描結果:", decodedText),
            (error) => console.warn(error)
        );
    </script>
</body>
</html>
```

### Example 2: Dynamic Language Switching

```javascript
import { Html5QrcodeI18n } from "html5-qrcode";
import { zhTW } from "./i18n/zh-TW.js";
import { ja } from "./i18n/ja.js";

// Language selector
document.getElementById("lang-select").addEventListener("change", (e) => {
    const lang = e.target.value;

    if (lang === "zh-TW") {
        Html5QrcodeI18n.setLanguage(zhTW);
    } else if (lang === "ja") {
        Html5QrcodeI18n.setLanguage(ja);
    } else {
        Html5QrcodeI18n.reset(); // English
    }

    // Recreate scanner to apply new language
    recreateScanner();
});
```

### Example 3: Load Language from Server

```javascript
async function loadLanguage(locale) {
    const response = await fetch(`/api/i18n/${locale}.json`);
    const languagePack = await response.json();

    const scanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: 250,
        languagePack: languagePack
    });

    scanner.render(onScanSuccess, onScanError);
}

loadLanguage("zh-TW");
```

## Notes

- Language pack must be provided when creating the scanner instance
- All properties in `LanguagePack` are optional
- Missing translations will fall back to English defaults
- For best results, set language pack before calling `scanner.render()`
- Function properties (like `codeParseError`) should return translated strings

## Contributing

We welcome contributions for additional language packs! Check the `examples/i18n/` directory for examples and feel free to submit pull requests with new languages.
