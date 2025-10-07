/**
 * @fileoverview
 * i18n Manager for html5-qrcode
 */

import { LanguagePack } from "./index";
import { Html5QrcodeStrings, Html5QrcodeScannerStrings, LibraryInfoStrings } from "../strings";

export class Html5QrcodeI18n {
    /**
     * Set the language pack for all strings in the library
     * @param languagePack - Language pack object with translations
     * @example
     * Html5QrcodeI18n.setLanguage({
     *   scanningStatus: "掃描中",
     *   scanButtonStartScanningText: "開始掃描",
     *   scanButtonStopScanningText: "停止掃描"
     * });
     */
    public static setLanguage(languagePack: LanguagePack): void {
        // Apply to Html5QrcodeStrings
        Html5QrcodeStrings.setLang({
            codeParseError: languagePack.codeParseError,
            errorGettingUserMedia: languagePack.errorGettingUserMedia,
            onlyDeviceSupportedError: languagePack.onlyDeviceSupportedError,
            cameraStreamingNotSupported: languagePack.cameraStreamingNotSupported,
            unableToQuerySupportedDevices: languagePack.unableToQuerySupportedDevices,
            insecureContextCameraQueryError: languagePack.insecureContextCameraQueryError,
            scannerPaused: languagePack.scannerPaused,
        });

        // Apply to Html5QrcodeScannerStrings
        Html5QrcodeScannerStrings.setLang({
            scanningStatus: languagePack.scanningStatus,
            idleStatus: languagePack.idleStatus,
            errorStatus: languagePack.errorStatus,
            permissionStatus: languagePack.permissionStatus,
            noCameraFoundErrorStatus: languagePack.noCameraFoundErrorStatus,
            lastMatch: languagePack.lastMatch,
            codeScannerTitle: languagePack.codeScannerTitle,
            cameraPermissionTitle: languagePack.cameraPermissionTitle,
            cameraPermissionRequesting: languagePack.cameraPermissionRequesting,
            noCameraFound: languagePack.noCameraFound,
            scanButtonStopScanningText: languagePack.scanButtonStopScanningText,
            scanButtonStartScanningText: languagePack.scanButtonStartScanningText,
            torchOnButton: languagePack.torchOnButton,
            torchOffButton: languagePack.torchOffButton,
            torchOnFailedMessage: languagePack.torchOnFailedMessage,
            torchOffFailedMessage: languagePack.torchOffFailedMessage,
            scanButtonScanningStarting: languagePack.scanButtonScanningStarting,
            textIfCameraScanSelected: languagePack.textIfCameraScanSelected,
            textIfFileScanSelected: languagePack.textIfFileScanSelected,
            selectCamera: languagePack.selectCamera,
            fileSelectionChooseImage: languagePack.fileSelectionChooseImage,
            fileSelectionChooseAnother: languagePack.fileSelectionChooseAnother,
            fileSelectionNoImageSelected: languagePack.fileSelectionNoImageSelected,
            anonymousCameraPrefix: languagePack.anonymousCameraPrefix,
            dragAndDropMessage: languagePack.dragAndDropMessage,
            dragAndDropMessageOnlyImages: languagePack.dragAndDropMessageOnlyImages,
            zoom: languagePack.zoom,
            loadingImage: languagePack.loadingImage,
            cameraScanAltText: languagePack.cameraScanAltText,
            fileScanAltText: languagePack.fileScanAltText,
        });

        // Apply to LibraryInfoStrings
        LibraryInfoStrings.setLang({
            poweredBy: languagePack.poweredBy,
            reportIssues: languagePack.reportIssues,
        });
    }

    /**
     * Reset to default language (English)
     * This will clear all custom translations and use built-in English defaults
     */
    public static reset(): void {
        Html5QrcodeStrings.setLang({});
        Html5QrcodeScannerStrings.setLang({});
        LibraryInfoStrings.setLang({});
    }
}
