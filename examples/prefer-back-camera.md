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

## Camera Detection Patterns

The feature uses pattern matching on camera labels to identify back cameras:

### Back Camera Patterns (preferred)
- `back` - e.g., "Back Camera", "Camera 2 (back)"
- `rear` - e.g., "Rear Camera"
- `environment` - e.g., "Environment Facing Camera"

### Front Camera Patterns (avoided)
- `front` - e.g., "Front Camera"
- `user` - e.g., "User Facing Camera"
- `face` - e.g., "FaceTime Camera"

## Example Scenarios

### Mobile Phone (Typical)
```
Available cameras:
1. "Front Camera" (id: abc123)
2. "Back Camera" (id: def456)

Result: Selects "Back Camera" (def456) ✅
```

### Laptop with External Webcam
```
Available cameras:
1. "FaceTime HD Camera" (id: xyz789)
2. "USB Camera" (id: usb001)

Result: Selects "USB Camera" (usb001) ✅
(Avoids "FaceTime" which contains face pattern)
```

### Device with Unlabeled Cameras
```
Available cameras:
1. "" (id: camera0)
2. "" (id: camera1)

Result: Selects first camera (camera0)
(No labels to match patterns, uses default)
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

## Notes

- This feature requires camera permissions to be granted
- Pattern matching may not work perfectly on all devices due to varying camera label formats
- The selected camera is persisted, so subsequent visits will remember user's choice
- Compatible with all other scanner configuration options
