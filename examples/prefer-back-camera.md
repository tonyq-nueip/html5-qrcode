# Prefer Back Camera Feature

This feature allows the QR code scanner to automatically select and start using a back-facing (rear/environment) camera if available, providing a better user experience for mobile devices.

## Usage

Simply set `preferBackCamera: true` in the scanner configuration:

```javascript
import { Html5QrcodeScanner } from "html5-qrcode";

const scanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250,
    preferBackCamera: true  // Enable back camera preference
});

scanner.render(onScanSuccess, onScanError);
```

## Behavior

When `preferBackCamera` is enabled:

1. **Camera Selection Priority**:
   - First tries to find cameras with labels containing: "back", "rear", or "environment"
   - If not found, selects cameras without "front", "user", or "face" in their labels
   - Falls back to previously used camera if no back camera patterns match
   - Finally defaults to the first available camera

2. **Auto-Start**:
   - Automatically clicks the "Start Scanning" button
   - No user interaction needed to begin scanning
   - Works the same as when only one camera is available

3. **User Can Still Switch**:
   - Camera selection dropdown remains available
   - User can manually switch to a different camera
   - Selection is persisted for future sessions

## Camera Detection Strategy

The feature uses a **scoring system** to intelligently select the best camera:

### Scoring Rules

1. **Explicit Back Camera Labels** (+100 points)
   - English: `back`, `rear`, `environment`
   - Chinese: `後置` (Traditional), `后置` (Simplified)
   - Examples: "Back Camera", "Rear Camera", "後置相機", "Camera 2 (back)"

2. **Explicit Front Camera Labels** (-100 points)
   - English: `front`, `user`, `face`
   - Chinese: `前置`
   - Examples: "Front Camera", "FaceTime HD Camera", "前置相機", "User Facing"

3. **Position-Based Heuristic** (for unlabeled cameras)
   - **First camera** with empty label: -10 points (likely front on mobile)
   - **Second+ camera** with empty label: +10 points (likely back on mobile)
   - Only applies when 2+ cameras are available

### Why This Works on Apple Devices

Apple devices (iPhone/iPad) typically:
- List cameras in order: `[Front, Back, ...]`
- May have empty or minimal labels depending on iOS version
- The **second camera** is usually the back/rear camera

The scoring system ensures:
- ✅ Explicit labels are always prioritized
- ✅ Position-based heuristic helps when labels are missing
- ✅ Works across different iOS versions and browsers

## Example Scenarios

### iPhone/iPad (iOS Safari)
```
Available cameras:
1. "" (id: abc123) - Score: -10
2. "" (id: def456) - Score: +10

Result: Selects Camera 2 (def456) ✅
Reason: Position-based heuristic (2nd camera is likely back)
```

### Android Phone (English)
```
Available cameras:
1. "Front Camera" (id: abc123) - Score: -100
2. "Back Camera" (id: def456) - Score: +100

Result: Selects "Back Camera" (def456) ✅
Reason: Explicit label match
```

### Android Phone (Chinese)
```
Available cameras:
1. "前置相機" (id: abc123) - Score: -100
2. "後置相機" (id: def456) - Score: +100

Result: Selects "後置相機" (def456) ✅
Reason: Explicit label match (Chinese characters)
```

### Laptop with External Webcam
```
Available cameras:
1. "FaceTime HD Camera" (id: xyz789) - Score: -100
2. "USB Camera" (id: usb001) - Score: 0

Result: Selects "USB Camera" (usb001) ✅
Reason: Higher score (avoids "face" pattern)
```

### iPhone with Labeled Cameras (newer iOS)
```
Available cameras:
1. "Front Camera" (id: abc123) - Score: -100
2. "Back Camera" (id: def456) - Score: +100

Result: Selects "Back Camera" (def456) ✅
Reason: Explicit label match (highest priority)
```

### Single Camera Device
```
Available cameras:
1. "Integrated Webcam" (id: camera0) - Score: 0

Result: Selects "Integrated Webcam" (camera0)
Reason: Only option available
```

## Configuration Options

```typescript
interface Html5QrcodeScannerConfig {
    // ... other options

    /**
     * If `true`, the scanner will automatically select and start using
     * a back-facing camera (environment camera) if available when permissions
     * are already granted. Users can still switch cameras after scanning starts.
     *
     * Note: default value is `false`.
     */
    preferBackCamera?: boolean;
}
```

## Complete Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>QR Scanner - Back Camera</title>
</head>
<body>
    <div id="reader"></div>

    <script type="module">
        import { Html5QrcodeScanner } from "html5-qrcode";

        const scanner = new Html5QrcodeScanner("reader", {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            preferBackCamera: true,
            showTorchButtonIfSupported: true
        });

        scanner.render(
            (decodedText) => {
                console.log("Scanned:", decodedText);
            },
            (errorMessage) => {
                // Handle error
            }
        );
    </script>
</body>
</html>
```

## Benefits

- ✅ **Better UX on Mobile**: Back camera is typically better quality for scanning
- ✅ **Faster Start**: No need to manually select camera and click start
- ✅ **Still Flexible**: Users can switch cameras if needed
- ✅ **Smart Fallback**: Works even when camera labels are not clear
- ✅ **Apple Device Support**: Position-based heuristic handles iOS/Safari quirks
- ✅ **Cross-Platform**: Works on Android, iOS, and desktop browsers

## Notes

- This feature requires camera permissions to be granted
- Uses intelligent scoring system combining label matching and position heuristics
- On Apple devices without labels, assumes typical camera order: [Front, Back]
- The selected camera is persisted, so subsequent visits will remember user's choice
- Compatible with all other scanner configuration options
- If all cameras score negative (all are front cameras), will fall back to first camera

## Debugging Camera Selection

To debug which camera is being selected, you can check the browser console:

```javascript
const scanner = new Html5QrcodeScanner("reader", {
    preferBackCamera: true,
    verbose: true  // Enable logging
});
```

Or manually inspect available cameras:

```javascript
Html5Qrcode.getCameras().then(cameras => {
    console.log("Available cameras:", cameras);
    cameras.forEach((camera, index) => {
        console.log(`Camera ${index}:`, {
            id: camera.id,
            label: camera.label
        });
    });
});
```
