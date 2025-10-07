/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 *
 * @author mebjas <minhazav@gmail.com>
 *
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

export interface Html5QrcodeStringsLang {
    codeParseError?: (exception: any) => string;
    errorGettingUserMedia?: (error: any) => string;
    onlyDeviceSupportedError?: string;
    cameraStreamingNotSupported?: string;
    unableToQuerySupportedDevices?: string;
    insecureContextCameraQueryError?: string;
    scannerPaused?: string;
}

/**
 * Strings used in {@class Html5Qrcode}.
 *
 * Supports internationalization through lang object.
 */
export class Html5QrcodeStrings {
    private static lang?: Html5QrcodeStringsLang;

    public static setLang(lang: Html5QrcodeStringsLang): void {
        this.lang = lang;
    }

    public static codeParseError(exception: any): string {
        if (this.lang?.codeParseError) {
            return this.lang.codeParseError(exception);
        }
        return `QR code parse error, error = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        if (this.lang?.errorGettingUserMedia) {
            return this.lang.errorGettingUserMedia(error);
        }
        return `Error getting userMedia, error = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        if (this.lang?.onlyDeviceSupportedError) {
            return this.lang.onlyDeviceSupportedError;
        }
        return "The device doesn't support navigator.mediaDevices , only "
        + "supported cameraIdOrConfig in this case is deviceId parameter "
        + "(string).";
    }

    public static cameraStreamingNotSupported(): string {
        if (this.lang?.cameraStreamingNotSupported) {
            return this.lang.cameraStreamingNotSupported;
        }
        return "Camera streaming not supported by the browser.";
    }

    public static unableToQuerySupportedDevices(): string {
        if (this.lang?.unableToQuerySupportedDevices) {
            return this.lang.unableToQuerySupportedDevices;
        }
        return "Unable to query supported devices, unknown error.";
    }

    public static insecureContextCameraQueryError(): string {
        if (this.lang?.insecureContextCameraQueryError) {
            return this.lang.insecureContextCameraQueryError;
        }
        return "Camera access is only supported in secure context like https "
        + "or localhost.";
    }

    public static scannerPaused(): string {
        if (this.lang?.scannerPaused) {
            return this.lang.scannerPaused;
        }
        return "Scanner paused";
    }
}

export interface Html5QrcodeScannerStringsLang {
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
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 *
 * Supports internationalization through lang object.
 */
export class Html5QrcodeScannerStrings {
    private static lang?: Html5QrcodeScannerStringsLang;

    public static setLang(lang: Html5QrcodeScannerStringsLang): void {
        this.lang = lang;
    }

    public static scanningStatus(): string {
        return this.lang?.scanningStatus || "Scanning";
    }

    public static idleStatus(): string {
        return this.lang?.idleStatus || "Idle";
    }

    public static errorStatus(): string {
        return this.lang?.errorStatus || "Error";
    }

    public static permissionStatus(): string {
        return this.lang?.permissionStatus || "Permission";
    }

    public static noCameraFoundErrorStatus(): string {
        return this.lang?.noCameraFoundErrorStatus || "No Cameras";
    }

    public static lastMatch(decodedText: string): string {
        if (this.lang?.lastMatch) {
            return this.lang.lastMatch(decodedText);
        }
        return `Last Match: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return this.lang?.codeScannerTitle || "Code Scanner";
    }

    public static cameraPermissionTitle(): string {
        return this.lang?.cameraPermissionTitle || "Request Camera Permissions";
    }

    public static cameraPermissionRequesting(): string {
        return this.lang?.cameraPermissionRequesting || "Requesting camera permissions...";
    }

    public static noCameraFound(): string {
        return this.lang?.noCameraFound || "No camera found";
    }

    public static scanButtonStopScanningText(): string {
        return this.lang?.scanButtonStopScanningText || "Stop Scanning";
    }

    public static scanButtonStartScanningText(): string {
        return this.lang?.scanButtonStartScanningText || "Start Scanning";
    }

    public static torchOnButton(): string {
        return this.lang?.torchOnButton || "Switch On Torch";
    }

    public static torchOffButton(): string {
        return this.lang?.torchOffButton || "Switch Off Torch";
    }

    public static torchOnFailedMessage(): string {
        return this.lang?.torchOnFailedMessage || "Failed to turn on torch";
    }

    public static torchOffFailedMessage(): string {
        return this.lang?.torchOffFailedMessage || "Failed to turn off torch";
    }

    public static scanButtonScanningStarting(): string {
        return this.lang?.scanButtonScanningStarting || "Launching Camera...";
    }

    /**
     * Text to show when camera scan is selected.
     *
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return this.lang?.textIfCameraScanSelected || "Scan an Image File";
    }

    /**
     * Text to show when file based scan is selected.
     *
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return this.lang?.textIfFileScanSelected || "Scan using camera directly";
    }

    public static selectCamera(): string {
        return this.lang?.selectCamera || "Select Camera";
    }

    public static fileSelectionChooseImage(): string {
        return this.lang?.fileSelectionChooseImage || "Choose Image";
    }

    public static fileSelectionChooseAnother(): string {
        return this.lang?.fileSelectionChooseAnother || "Choose Another";
    }

    public static fileSelectionNoImageSelected(): string {
        return this.lang?.fileSelectionNoImageSelected || "No image choosen";
    }

    /** Prefix to be given to anonymous cameras. */
    public static anonymousCameraPrefix(): string {
        return this.lang?.anonymousCameraPrefix || "Anonymous Camera";
    }

    public static dragAndDropMessage(): string {
        return this.lang?.dragAndDropMessage || "Or drop an image to scan";
    }

    public static dragAndDropMessageOnlyImages(): string {
        return this.lang?.dragAndDropMessageOnlyImages || "Or drop an image to scan (other files not supported)";
    }

    /** Value for zoom. */
    public static zoom(): string {
        return this.lang?.zoom || "zoom";
    }

    public static loadingImage(): string {
        return this.lang?.loadingImage || "Loading image...";
    }

    public static cameraScanAltText(): string {
        return this.lang?.cameraScanAltText || "Camera based scan";
    }

    public static fileScanAltText(): string {
        return this.lang?.fileScanAltText || "Fule based scan";
    }
}

export interface LibraryInfoStringsLang {
    poweredBy?: string;
    reportIssues?: string;
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {
    private static lang?: LibraryInfoStringsLang;

    public static setLang(lang: LibraryInfoStringsLang): void {
        this.lang = lang;
    }

    public static poweredBy(): string {
        return this.lang?.poweredBy || "Powered by ";
    }

    public static reportIssues(): string {
        return this.lang?.reportIssues || "Report issues";
    }
}
