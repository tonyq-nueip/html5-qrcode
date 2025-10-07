/**
 * Simplified Chinese (China) language pack for html5-qrcode
 * 简体中文（中国）语言包
 *
 * Usage:
 * import { zhCN } from './i18n/zh-CN.js';
 *
 * const scanner = new Html5QrcodeScanner("reader", {
 *   fps: 10,
 *   qrbox: 250,
 *   languagePack: zhCN
 * });
 */

export const zhCN = {
    // Html5QrcodeStrings - 错误信息
    codeParseError: (exception) => `QR code 解析错误，错误信息 = ${exception}`,
    errorGettingUserMedia: (error) => `获取用户媒体错误，错误信息 = ${error}`,
    onlyDeviceSupportedError: "此设备不支持 navigator.mediaDevices，在此情况下仅支持 deviceId 参数（字符串）。",
    cameraStreamingNotSupported: "浏览器不支持相机流。",
    unableToQuerySupportedDevices: "无法查询支持的设备，未知错误。",
    insecureContextCameraQueryError: "相机访问仅支持在安全的环境中使用，例如 https 或 localhost。",
    scannerPaused: "扫描器已暂停",

    // Html5QrcodeScannerStrings - 扫描器状态
    scanningStatus: "扫描中",
    idleStatus: "闲置",
    errorStatus: "错误",
    permissionStatus: "权限",
    noCameraFoundErrorStatus: "无相机",
    lastMatch: (decodedText) => `最后一次扫描：${decodedText}`,

    // 标题和信息
    codeScannerTitle: "条码扫描器",
    cameraPermissionTitle: "请求相机权限",
    cameraPermissionRequesting: "正在请求相机权限...",
    noCameraFound: "找不到相机",

    // 按钮文字
    scanButtonStopScanningText: "停止扫描",
    scanButtonStartScanningText: "开始扫描",
    scanButtonScanningStarting: "正在启动相机...",
    torchOnButton: "开启闪光灯",
    torchOffButton: "关闭闪光灯",
    torchOnFailedMessage: "无法开启闪光灯",
    torchOffFailedMessage: "无法关闭闪光灯",

    // 扫描模式切换
    textIfCameraScanSelected: "扫描图片文件",
    textIfFileScanSelected: "直接使用相机扫描",
    selectCamera: "选择相机",

    // 文件选择
    fileSelectionChooseImage: "选择图片",
    fileSelectionChooseAnother: "选择另一个",
    fileSelectionNoImageSelected: "未选择图片",
    dragAndDropMessage: "或拖放图片以扫描",
    dragAndDropMessageOnlyImages: "或拖放图片以扫描（不支持其他文件）",
    loadingImage: "载入图片中...",

    // 其他
    anonymousCameraPrefix: "匿名相机",
    zoom: "缩放",
    cameraScanAltText: "基于相机的扫描",
    fileScanAltText: "基于文件的扫描",

    // LibraryInfoStrings
    poweredBy: "技术支持：",
    reportIssues: "报告问题",
};
