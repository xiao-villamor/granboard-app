import { CreateSegment, Segment, SegmentID } from "./boardinfo";

const GRANBOARD_UUID = "442f1570-8a00-9a28-cbe1-e1d4212d53eb";

const SEGMENT_MAPPING = {
  "50-46-51-64": SegmentID.INNER_1,
  "50-46-52-64": SegmentID.TRP_1,
  "50-46-53-64": SegmentID.OUTER_1,
  "50-46-54-64": SegmentID.DBL_1,
  "57-46-49-64": SegmentID.INNER_2,
  "57-46-48-64": SegmentID.TRP_2,
  "57-46-50-64": SegmentID.OUTER_2,
  "56-46-50-64": SegmentID.DBL_2,
  "55-46-49-64": SegmentID.INNER_3,
  "55-46-48-64": SegmentID.TRP_3,
  "55-46-50-64": SegmentID.OUTER_3,
  "56-46-52-64": SegmentID.DBL_3,
  "48-46-49-64": SegmentID.INNER_4,
  "48-46-51-64": SegmentID.TRP_4,
  "48-46-53-64": SegmentID.OUTER_4,
  "48-46-54-64": SegmentID.DBL_4,
  "53-46-49-64": SegmentID.INNER_5,
  "53-46-50-64": SegmentID.TRP_5,
  "53-46-52-64": SegmentID.OUTER_5,
  "52-46-54-64": SegmentID.DBL_5,
  "49-46-48-64": SegmentID.INNER_6,
  "49-46-49-64": SegmentID.TRP_6,
  "49-46-51-64": SegmentID.OUTER_6,
  "52-46-52-64": SegmentID.DBL_6,
  "49-49-46-49-64": SegmentID.INNER_7,
  "49-49-46-50-64": SegmentID.TRP_7,
  "49-49-46-52-64": SegmentID.OUTER_7,
  "56-46-54-64": SegmentID.DBL_7,
  "54-46-50-64": SegmentID.INNER_8,
  "54-46-52-64": SegmentID.TRP_8,
  "54-46-53-64": SegmentID.OUTER_8,
  "54-46-54-64": SegmentID.DBL_8,
  "57-46-51-64": SegmentID.INNER_9,
  "57-46-52-64": SegmentID.TRP_9,
  "57-46-53-64": SegmentID.OUTER_9,
  "57-46-54-64": SegmentID.DBL_9,
  "50-46-48-64": SegmentID.INNER_10,
  "50-46-49-64": SegmentID.TRP_10,
  "50-46-50-64": SegmentID.OUTER_10,
  "52-46-51-64": SegmentID.DBL_10,
  "55-46-51-64": SegmentID.INNER_11,
  "55-46-52-64": SegmentID.TRP_11,
  "55-46-53-64": SegmentID.OUTER_11,
  "55-46-54-64": SegmentID.DBL_11,
  "53-46-48-64": SegmentID.INNER_12,
  "53-46-51-64": SegmentID.TRP_12,
  "53-46-53-64": SegmentID.OUTER_12,
  "53-46-54-64": SegmentID.DBL_12,
  "48-46-48-64": SegmentID.INNER_13,
  "48-46-50-64": SegmentID.TRP_13,
  "48-46-52-64": SegmentID.OUTER_13,
  "52-46-53-64": SegmentID.DBL_13,
  "49-48-46-51-64": SegmentID.INNER_14,
  "49-48-46-52-64": SegmentID.TRP_14,
  "49-48-46-53-64": SegmentID.OUTER_14,
  "49-48-46-54-64": SegmentID.DBL_14,
  "51-46-48-64": SegmentID.INNER_15,
  "51-46-49-64": SegmentID.TRP_15,
  "51-46-50-64": SegmentID.OUTER_15,
  "52-46-50-64": SegmentID.DBL_15,
  "49-49-46-48-64": SegmentID.INNER_16,
  "49-49-46-51-64": SegmentID.TRP_16,
  "49-49-46-53-64": SegmentID.OUTER_16,
  "49-49-46-54-64": SegmentID.DBL_16,
  "49-48-46-49-64": SegmentID.INNER_17,
  "49-48-46-48-64": SegmentID.TRP_17,
  "49-48-46-50-64": SegmentID.OUTER_17,
  "56-46-51-64": SegmentID.DBL_17,
  "49-46-50-64": SegmentID.INNER_18,
  "49-46-52-64": SegmentID.TRP_18,
  "49-46-53-64": SegmentID.OUTER_18,
  "49-46-54-64": SegmentID.DBL_18,
  "54-46-49-64": SegmentID.INNER_19,
  "54-46-48-64": SegmentID.TRP_19,
  "54-46-51-64": SegmentID.OUTER_19,
  "56-46-53-64": SegmentID.DBL_19,
  "51-46-51-64": SegmentID.INNER_20,
  "51-46-52-64": SegmentID.TRP_20,
  "51-46-53-64": SegmentID.OUTER_20,
  "51-46-54-64": SegmentID.DBL_20,
  "56-46-48-64": SegmentID.BULL,
  "52-46-48-64": SegmentID.DBL_BULL,
  "66-84-78-64": SegmentID.RESET_BUTTON,
};

/** Raw BLE event info for diagnostics */
export interface RawBleEvent {
  ts: number;
  bytes: number[];
  segmentUID: string;
  type: 'separator' | 'hit' | 'unknown';
  segmentName?: string;
}

export class Granboard {
  private readonly bluetoothConnection: BluetoothRemoteGATTCharacteristic;
  private readonly writeCharacteristic?: BluetoothRemoteGATTCharacteristic;
  private readonly connectionTime: number;
  private readonly device?: BluetoothDevice;
  private _disconnected = false;

  /** Total count of characteristicvaluechanged events received (including separators) */
  private _rawEventCount = 0;

  public segmentHitCallback?: (segment: Segment) => void;
  public onDisconnect?: () => void;
  /** Called for EVERY characteristicvaluechanged event for diagnostics */
  public onRawBleEvent?: (event: RawBleEvent) => void;

  public get rawEventCount(): number {
    return this._rawEventCount;
  }

  /** Whether the underlying BLE connection has been lost */
  public get disconnected(): boolean {
    return this._disconnected;
  }

  /**
   * Try to reconnect to a previously authorized Granboard automatically.
   * Uses the Web Bluetooth getDevices() API + watchAdvertisements() if available,
   * with a timeout so it doesn't hang forever.
   */
  public static async TryAutoConnect(timeoutMs = 8000): Promise<Granboard | null> {
    try {
      // Check if browser supports getDevices (not all browsers do)
      if (!navigator.bluetooth?.getDevices) {
        console.log("[Granboard] Browser doesn't support getDevices() - auto-reconnect unavailable");
        return null;
      }

      const devices = await navigator.bluetooth.getDevices();
      const device = devices.find((d) =>
        d.name?.toLowerCase().includes("gran")
      );

      if (!device || !device.gatt) {
        console.log("[Granboard] No previously authorized Granboard found");
        return null;
      }

      console.log("[Granboard] Found authorized device:", device.name);

      // If already connected (e.g. from a previous page), reuse it
      if (device.gatt.connected) {
        console.log("[Granboard] Device GATT already connected, reusing");
        return await Granboard.setupFromGatt(device);
      }

      // Try direct connect first (works if device is advertising)
      try {
        const connectPromise = device.gatt.connect();
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Connect timeout")), timeoutMs)
        );
        await Promise.race([connectPromise, timeoutPromise]);
        console.log("[Granboard] Direct GATT connect succeeded");
        return await Granboard.setupFromGatt(device);
      } catch (directError) {
        console.log("[Granboard] Direct connect failed:", directError);
      }

      // If direct connect failed, try watchAdvertisements (Chrome-specific)
      if ('watchAdvertisements' in device) {
        console.log("[Granboard] Trying watchAdvertisements...");
        try {
          const board = await new Promise<Granboard | null>((resolve) => {
            const timer = setTimeout(() => {
              console.log("[Granboard] watchAdvertisements timed out");
              resolve(null);
            }, timeoutMs);

            device.addEventListener("advertisementreceived", async () => {
              clearTimeout(timer);
              try {
                await device.gatt!.connect();
                console.log("[Granboard] Connected via watchAdvertisements");
                resolve(await Granboard.setupFromGatt(device));
              } catch (err) {
                console.error("[Granboard] Connect after advertisement failed:", err);
                resolve(null);
              }
            }, { once: true });

            (device as any).watchAdvertisements({ signal: AbortSignal.timeout(timeoutMs) }).catch(() => {
              clearTimeout(timer);
              resolve(null);
            });
          });
          if (board) return board;
        } catch {
          // watchAdvertisements not fully supported, fall through
        }
      }

      console.log("[Granboard] Auto-reconnect exhausted all strategies");
      return null;
    } catch (error) {
      console.error("[Granboard] Auto-reconnect failed:", error);
      return null;
    }
  }

  /**
   * Set up Granboard from an already-connected GATT device
   */
  private static async setupFromGatt(device: BluetoothDevice): Promise<Granboard> {
    const service = await device.gatt!.getPrimaryService(GRANBOARD_UUID);
    const characteristics = await service.getCharacteristics();

    const boardCharacteristic = characteristics.find(
      (c) => c.properties.notify
    );
    if (!boardCharacteristic) {
      throw new Error("Could not find notify characteristic on dartboard");
    }

    const writeCharacteristic = characteristics.find(
      (c) => c.properties.write || c.properties.writeWithoutResponse
    );

    const board = new Granboard(boardCharacteristic, writeCharacteristic, device);
    await boardCharacteristic.startNotifications();
    console.log("[Granboard] Notifications started");
    return board;
  }

  /**
   * Connect to a Granboard with user interaction (shows browser pairing dialog)
   */
  public static async ConnectToBoard(): Promise<Granboard> {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ services: [GRANBOARD_UUID] }],
    });

    if (!device || !device.gatt) {
      throw new Error("Could not find matching service on bluetooth dartboard");
    }

    if (!device.gatt.connected) {
      await device.gatt.connect();
    }

    return await Granboard.setupFromGatt(device);
  }

  private constructor(
    bluetoothConnection: BluetoothRemoteGATTCharacteristic,
    writeCharacteristic?: BluetoothRemoteGATTCharacteristic,
    device?: BluetoothDevice
  ) {
    this.bluetoothConnection = bluetoothConnection;
    this.writeCharacteristic = writeCharacteristic;
    this.device = device;
    this.connectionTime = Date.now();

    this.bluetoothConnection.addEventListener(
      "characteristicvaluechanged",
      this.onSegmentHit.bind(this)
    );

    // Listen for disconnection
    if (device) {
      device.addEventListener("gattserverdisconnected", () => {
        console.log("[Granboard] BLE device disconnected");
        this._disconnected = true;
        this.onDisconnect?.();
      });
    }
  }

  private onSegmentHit() {
    this._rawEventCount++;

    if (!this.bluetoothConnection.value) {
      console.log(`[Granboard] Event #${this._rawEventCount}: no value`);
      this.onRawBleEvent?.({ ts: Date.now(), bytes: [], segmentUID: '', type: 'unknown' });
      return; // There is no new value
    }

    // Ignore events in the first 500ms after connection to avoid false triggers
    const timeSinceConnection = Date.now() - this.connectionTime;
    if (timeSinceConnection < 500) {
      console.log(`[Granboard] Event #${this._rawEventCount}: ignoring (${timeSinceConnection}ms after connection) - warming up`);
      return;
    }

    // Snapshot the current value immediately.
    // NOTE: Do NOT call readValue() here. The notify characteristic (442f1571)
    // is NOTIFY-only with no read permission on the ESP32 GATT server. Calling
    // readValue() sends a GATT Read Request that the firmware rejects with
    // ATT_ERROR_READ_NOT_PERMITTED. While that error round-trip is in flight,
    // subsequent BLE notifications can be queued/dropped by Chrome's Bluetooth
    // stack. The firmware's sequence counter solves Chrome's dedup — readValue
    // is unnecessary and harmful.
    const rawBytes = new Uint8Array(this.bluetoothConnection.value.buffer.slice(0));

    // The firmware appends a monotonic sequence counter byte after the 0x40
    // ('@') terminator to guarantee every notification is byte-unique (Chrome
    // deduplicates consecutive identical GATT payloads).  Strip any bytes
    // after the first 0x40 (inclusive of 0x40) to recover the original
    // GranBoard segment code for lookup.
    //
    // Also still handle legacy {0x00} separator packets from older firmware.
    if (rawBytes.length === 1 && rawBytes[0] === 0x00) {
      console.log(`[Granboard] Event #${this._rawEventCount}: 0x00 separator — discarding`);
      this.onRawBleEvent?.({ ts: Date.now(), bytes: [0], segmentUID: '0', type: 'separator' });
      return;
    }

    // Find the 0x40 ('@') terminator and keep bytes up to and including it.
    // This strips the trailing sequence counter byte added by the firmware.
    const terminatorIdx = rawBytes.indexOf(0x40);
    const segmentBytes = terminatorIdx >= 0
      ? rawBytes.slice(0, terminatorIdx + 1)
      : rawBytes;

    const segmentUID = Array.from(segmentBytes).join("-");
    const segmentID = (SEGMENT_MAPPING as any)[segmentUID];

    console.log(`[Granboard] Event #${this._rawEventCount}: raw=[${rawBytes}] seg=[${segmentBytes}] key="${segmentUID}" -> ${segmentID !== undefined ? segmentID : "UNKNOWN"}`);

    if (segmentID !== undefined) {
      const segment = CreateSegment(segmentID);
      this.onRawBleEvent?.({ ts: Date.now(), bytes: Array.from(rawBytes), segmentUID, type: 'hit', segmentName: segment.ShortName });
      this.segmentHitCallback?.(segment);
    } else {
      // Treat unknown segments as MISS (out of bounds)
      console.log(`[Granboard] Unknown segment UID: ${segmentUID} - treating as MISS`);
      this.onRawBleEvent?.({ ts: Date.now(), bytes: Array.from(rawBytes), segmentUID, type: 'unknown' });
      this.segmentHitCallback?.(CreateSegment(SegmentID.MISS));
    }
  }

  /**
   * Light up specific segments on the Granboard 3s
   * @param segments Array of segment numbers to light up (e.g., [15, 16, 17, 18, 19, 20, 25] for Cricket)
   */
  public async setLEDs(_segments: number[]): Promise<void> {
    // TODO: implement Granboard 3s LED protocol
  }

  /**
   * Turn off all LEDs
   */
  public async clearLEDs(): Promise<void> {
    // TODO: implement Granboard 3s LED protocol
  }
}
