/**
 * Traditional Chinese (Taiwan) language pack for html5-qrcode
 * 繁體中文（台灣）語言包
 *
 * Usage:
 * import { zhTW } from './i18n/zh-TW.js';
 *
 * const scanner = new Html5QrcodeScanner("reader", {
 *   fps: 10,
 *   qrbox: 250,
 *   languagePack: zhTW
 * });
 */

export const zhTW = {
    // Html5QrcodeStrings - 錯誤訊息
    codeParseError: (exception) => `QR code 解析錯誤，錯誤訊息 = ${exception}`,
    errorGettingUserMedia: (error) => `取得使用者媒體錯誤，錯誤訊息 = ${error}`,
    onlyDeviceSupportedError: "此裝置不支援 navigator.mediaDevices，在此情況下僅支援 deviceId 參數（字串）。",
    cameraStreamingNotSupported: "瀏覽器不支援相機串流。",
    unableToQuerySupportedDevices: "無法查詢支援的裝置，未知錯誤。",
    insecureContextCameraQueryError: "相機存取僅支援在安全的環境中使用，例如 https 或 localhost。",
    scannerPaused: "掃描器已暫停",

    // Html5QrcodeScannerStrings - 掃描器狀態
    scanningStatus: "掃描中",
    idleStatus: "閒置",
    errorStatus: "錯誤",
    permissionStatus: "權限",
    noCameraFoundErrorStatus: "無相機",
    lastMatch: (decodedText) => `最後一次掃描：${decodedText}`,

    // 標題和訊息
    codeScannerTitle: "條碼掃描器",
    cameraPermissionTitle: "請求相機權限",
    cameraPermissionRequesting: "正在請求相機權限...",
    noCameraFound: "找不到相機",

    // 按鈕文字
    scanButtonStopScanningText: "停止掃描",
    scanButtonStartScanningText: "開始掃描",
    scanButtonScanningStarting: "正在啟動相機...",
    torchOnButton: "開啟閃光燈",
    torchOffButton: "關閉閃光燈",
    torchOnFailedMessage: "無法開啟閃光燈",
    torchOffFailedMessage: "無法關閉閃光燈",

    // 掃描模式切換
    textIfCameraScanSelected: "掃描圖片檔案",
    textIfFileScanSelected: "直接使用相機掃描",
    selectCamera: "選擇相機",

    // 檔案選擇
    fileSelectionChooseImage: "選擇圖片",
    fileSelectionChooseAnother: "選擇另一個",
    fileSelectionNoImageSelected: "未選擇圖片",
    dragAndDropMessage: "或拖放圖片以掃描",
    dragAndDropMessageOnlyImages: "或拖放圖片以掃描（不支援其他檔案）",
    loadingImage: "載入圖片中...",

    // 其他
    anonymousCameraPrefix: "匿名相機",
    zoom: "縮放",
    cameraScanAltText: "基於相機的掃描",
    fileScanAltText: "基於檔案的掃描",

    // LibraryInfoStrings
    poweredBy: "技術支援：",
    reportIssues: "回報問題",
};
