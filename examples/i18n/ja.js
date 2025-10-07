/**
 * Japanese language pack for html5-qrcode
 * 日本語言語パック
 *
 * Usage:
 * import { ja } from './i18n/ja.js';
 *
 * const scanner = new Html5QrcodeScanner("reader", {
 *   fps: 10,
 *   qrbox: 250,
 *   languagePack: ja
 * });
 */

export const ja = {
    // Html5QrcodeStrings - エラーメッセージ
    codeParseError: (exception) => `QRコード解析エラー、エラー = ${exception}`,
    errorGettingUserMedia: (error) => `ユーザーメディア取得エラー、エラー = ${error}`,
    onlyDeviceSupportedError: "このデバイスはnavigator.mediaDevicesをサポートしていません。この場合、deviceIdパラメータ（文字列）のみがサポートされます。",
    cameraStreamingNotSupported: "ブラウザはカメラストリーミングをサポートしていません。",
    unableToQuerySupportedDevices: "サポートされているデバイスを照会できません。不明なエラーです。",
    insecureContextCameraQueryError: "カメラアクセスはhttpsやlocalhostなどの安全なコンテキストでのみサポートされています。",
    scannerPaused: "スキャナーが一時停止しました",

    // Html5QrcodeScannerStrings - スキャナーステータス
    scanningStatus: "スキャン中",
    idleStatus: "アイドル",
    errorStatus: "エラー",
    permissionStatus: "権限",
    noCameraFoundErrorStatus: "カメラなし",
    lastMatch: (decodedText) => `最後のマッチ：${decodedText}`,

    // タイトルとメッセージ
    codeScannerTitle: "コードスキャナー",
    cameraPermissionTitle: "カメラ権限をリクエスト",
    cameraPermissionRequesting: "カメラ権限をリクエスト中...",
    noCameraFound: "カメラが見つかりません",

    // ボタンテキスト
    scanButtonStopScanningText: "スキャン停止",
    scanButtonStartScanningText: "スキャン開始",
    scanButtonScanningStarting: "カメラ起動中...",
    torchOnButton: "フラッシュオン",
    torchOffButton: "フラッシュオフ",
    torchOnFailedMessage: "フラッシュをオンにできませんでした",
    torchOffFailedMessage: "フラッシュをオフにできませんでした",

    // スキャンモード切替
    textIfCameraScanSelected: "画像ファイルをスキャン",
    textIfFileScanSelected: "カメラで直接スキャン",
    selectCamera: "カメラを選択",

    // ファイル選択
    fileSelectionChooseImage: "画像を選択",
    fileSelectionChooseAnother: "別のを選択",
    fileSelectionNoImageSelected: "画像が選択されていません",
    dragAndDropMessage: "または画像をドロップしてスキャン",
    dragAndDropMessageOnlyImages: "または画像をドロップしてスキャン（他のファイルはサポートされていません）",
    loadingImage: "画像読み込み中...",

    // その他
    anonymousCameraPrefix: "匿名カメラ",
    zoom: "ズーム",
    cameraScanAltText: "カメラベースのスキャン",
    fileScanAltText: "ファイルベースのスキャン",

    // LibraryInfoStrings
    poweredBy: "提供：",
    reportIssues: "問題を報告",
};
