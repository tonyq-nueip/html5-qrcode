/**
 * @fileoverview
 * Internationalization (i18n) support for html5-qrcode
 */

export interface LanguagePack {
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

export { Html5QrcodeI18n } from "./manager";
