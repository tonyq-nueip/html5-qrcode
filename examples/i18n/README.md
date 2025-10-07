# html5-qrcode Language Packs

This directory contains example language packs for internationalization (i18n) support in html5-qrcode.

## Available Languages

- **zh-TW.js** - Traditional Chinese (Taiwan) / 繁體中文（台灣）
- **zh-CN.js** - Simplified Chinese (China) / 简体中文（中国）
- **ja.js** - Japanese / 日本語

## Usage

### Basic Usage

```javascript
import { Html5QrcodeScanner } from "html5-qrcode";
import { zhTW } from "./i18n/zh-TW.js";

const scanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250,
    languagePack: zhTW
});

scanner.render(onScanSuccess, onScanError);
```

### Custom Language Pack

You can create your own language pack by following this structure:

```javascript
export const myLanguage = {
    // Error messages
    codeParseError: (exception) => `Custom error message: ${exception}`,
    errorGettingUserMedia: (error) => `Custom media error: ${error}`,

    // Status messages
    scanningStatus: "Custom scanning text",
    idleStatus: "Custom idle text",

    // Buttons
    scanButtonStartScanningText: "Start",
    scanButtonStopScanningText: "Stop",

    // ... other strings (all optional)
};
```

### Partial Translation

You only need to provide translations for the strings you want to customize. Untranslated strings will default to English:

```javascript
const partialLanguage = {
    scanButtonStartScanningText: "開始",
    scanButtonStopScanningText: "停止",
    selectCamera: "選擇相機"
};

const scanner = new Html5QrcodeScanner("reader", {
    languagePack: partialLanguage
});
```

## Complete Language Pack Interface

```typescript
interface LanguagePack {
    // Html5QrcodeStrings
    codeParseError?: (exception: any) => string;
    errorGettingUserMedia?: (error: any) => string;
    onlyDeviceSupportedError?: string;
    cameraStreamingNotSupported?: string;
    unableToQuerySupportedDevices?: string;
    insecureContextCameraQueryError?: string;
    scannerPaused?: string;

    // Html5QrcodeScannerStrings
    scanningStatus?: string;
    idleStatus?: string;
    errorStatus?: string;
    permissionStatus?: string;
    noCameraFoundErrorStatus?: string;
    lastMatch?: (decodedText: string) => string;
    codeScannerTitle?: string;
    cameraPermissionTitle?: string;
    cameraPermissionRequesting?: string;
    noCameraFound?: string;
    scanButtonStopScanningText?: string;
    scanButtonStartScanningText?: string;
    torchOnButton?: string;
    torchOffButton?: string;
    torchOnFailedMessage?: string;
    torchOffFailedMessage?: string;
    scanButtonScanningStarting?: string;
    textIfCameraScanSelected?: string;
    textIfFileScanSelected?: string;
    selectCamera?: string;
    fileSelectionChooseImage?: string;
    fileSelectionChooseAnother?: string;
    fileSelectionNoImageSelected?: string;
    anonymousCameraPrefix?: string;
    dragAndDropMessage?: string;
    dragAndDropMessageOnlyImages?: string;
    zoom?: string;
    loadingImage?: string;
    cameraScanAltText?: string;
    fileScanAltText?: string;

    // LibraryInfoStrings
    poweredBy?: string;
    reportIssues?: string;
}
```

## Contributing

We welcome contributions for additional language packs! To contribute:

1. Copy one of the existing language files (e.g., `zh-TW.js`)
2. Translate all strings to your target language
3. Test your language pack
4. Submit a pull request

## Notes

- All language pack properties are optional
- English is used as the default for any missing translations
- Language pack must be provided in the config when creating the scanner instance
- Function properties (like `codeParseError`) receive parameters and should return translated strings
