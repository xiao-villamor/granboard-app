<script lang="ts">
  import type { Segment } from '@/services/boardinfo';
  import type { RawBleEvent } from '@/services/granboard';

  export interface DebugEvent {
    type: 'HIT' | 'DBNC' | 'IGNR';
    segment: string;
    ts: number;
  }

  interface Props {
    connectionState: string;
    lastHit: Segment | null;
    hitIndex: number;
    dartCount: number;
    events: DebugEvent[];
    rawEventCount?: number;
    rawBleEvents?: RawBleEvent[];
  }

  let { connectionState, lastHit, hitIndex, dartCount, events, rawEventCount = 0, rawBleEvents = [] }: Props = $props();

  // ─── Drag logic ────────────────────────────────────────────────
  let x = $state(16);
  let y = $state(16);
  let dragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  function onPointerDown(e: PointerEvent) {
    dragging = true;
    dragOffsetX = e.clientX - x;
    dragOffsetY = e.clientY - y;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: PointerEvent) {
    if (!dragging) return;
    x = e.clientX - dragOffsetX;
    y = e.clientY - dragOffsetY;
  }

  function onPointerUp() {
    dragging = false;
  }

  // ─── Colour helpers ────────────────────────────────────────────
  function connColor(state: string) {
    if (state === 'connected') return '#4ade80';
    if (state === 'connecting') return '#facc15';
    if (state === 'error') return '#f87171';
    return '#94a3b8';
  }

  function rawEventColor(type: string) {
    if (type === 'hit') return '#4ade80';
    if (type === 'separator') return '#818cf8';
    return '#f87171';
  }

  function eventColor(type: string) {
    if (type === 'HIT') return '#4ade80';
    if (type === 'DBNC') return '#facc15';
    return '#94a3b8';
  }

  // Keep at most 30 events shown
  let recentEvents = $derived(events.slice(-30).reverse());
  let recentRawEvents = $derived(rawBleEvents.slice(-50).reverse());
</script>

<!-- Portal target: appended directly to body so overflow:hidden on <main> cannot clip it -->
<svelte:body
  onpointermove={onPointerMove}
  onpointerup={onPointerUp}
/>

<div
  role="dialog"
  aria-label="Bluetooth debug panel"
  style="
    position: fixed;
    left: {x}px;
    top: {y}px;
    z-index: 10001;
    width: 320px;
    background: rgba(15, 23, 42, 0.92);
    border: 1px solid rgba(99, 102, 241, 0.5);
    border-radius: 10px;
    font-family: monospace;
    font-size: 11px;
    color: #e2e8f0;
    user-select: none;
    box-shadow: 0 8px 32px rgba(0,0,0,0.6);
    backdrop-filter: blur(8px);
    max-height: 90vh;
    overflow-y: auto;
  "
>
  <!-- Header / drag handle -->
  <div
    role="button"
    tabindex="0"
    aria-label="Drag Bluetooth debug panel"
    style="
      padding: 6px 10px;
      background: rgba(99, 102, 241, 0.25);
      border-radius: 9px 9px 0 0;
      cursor: grab;
      display: flex;
      align-items: center;
      gap: 6px;
    "
    onpointerdown={onPointerDown}
    onkeydown={() => {}}
  >
    <span style="font-size: 13px;">BT</span>
    <span style="flex: 1; font-weight: bold; letter-spacing: 0.05em;">BLE Debug</span>
    <span
      style="
        width: 8px; height: 8px; border-radius: 50%;
        background: {connColor(connectionState)};
        flex-shrink: 0;
      "
    ></span>
    <span style="color: {connColor(connectionState)};">{connectionState}</span>
  </div>

  <!-- Stats row -->
  <div style="display: flex; gap: 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
    <div style="flex: 1; padding: 5px 10px; border-right: 1px solid rgba(255,255,255,0.08);">
      <div style="color: #94a3b8; font-size: 10px;">LAST HIT</div>
      <div style="font-size: 15px; font-weight: bold; color: #f8fafc;">{lastHit?.ShortName ?? '—'}</div>
    </div>
    <div style="flex: 1; padding: 5px 10px; border-right: 1px solid rgba(255,255,255,0.08);">
      <div style="color: #94a3b8; font-size: 10px;">HIT #</div>
      <div style="font-size: 15px; font-weight: bold; color: #818cf8;">{hitIndex}</div>
    </div>
    <div style="flex: 1; padding: 5px 10px; border-right: 1px solid rgba(255,255,255,0.08);">
      <div style="color: #94a3b8; font-size: 10px;">DARTS</div>
      <div style="font-size: 15px; font-weight: bold; color: #f8fafc;">{dartCount}/3</div>
    </div>
    <div style="flex: 1; padding: 5px 10px;">
      <div style="color: #94a3b8; font-size: 10px;">RAW BLE</div>
      <div style="font-size: 15px; font-weight: bold; color: #fbbf24;">{rawEventCount}</div>
    </div>
  </div>

  <!-- Raw BLE event log -->
  <div style="padding: 6px 10px 4px; color: #fbbf24; font-size: 10px; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.04);">
    RAW BLE EVENTS (characteristicvaluechanged)
  </div>
  <div style="max-height: 150px; overflow-y: auto; padding: 0 6px 6px;">
    {#each recentRawEvents as ev, i (ev.ts + i)}
      <div style="display: flex; gap: 6px; padding: 2px 4px; border-radius: 4px; align-items: center;">
        <span style="color: {rawEventColor(ev.type)}; font-weight: bold; min-width: 40px; font-size: 10px;">{ev.type.toUpperCase()}</span>
        <span style="flex: 1; color: #e2e8f0; font-size: 10px;">{ev.segmentName || ev.segmentUID || '0x00'}</span>
        <span style="color: #475569; font-size: 9px;">[{ev.bytes.join(',')}]</span>
        <span style="color: #475569; font-size: 9px;">{new Date(ev.ts).toISOString().slice(11, 23)}</span>
      </div>
    {:else}
      <div style="padding: 4px; color: #475569;">No raw BLE events yet</div>
    {/each}
  </div>

  <!-- Game event log -->
  <div style="padding: 6px 10px 4px; color: #94a3b8; font-size: 10px; letter-spacing: 0.05em;">GAME EVENT LOG</div>
  <div style="max-height: 120px; overflow-y: auto; padding: 0 6px 6px;">
    {#each recentEvents as ev (ev.ts)}
      <div style="display: flex; gap: 6px; padding: 2px 4px; border-radius: 4px; align-items: center;">
        <span style="color: {eventColor(ev.type)}; font-weight: bold; min-width: 34px;">{ev.type}</span>
        <span style="flex: 1; color: #e2e8f0;">{ev.segment}</span>
        <span style="color: #475569; font-size: 10px;">{new Date(ev.ts).toISOString().slice(11, 23)}</span>
      </div>
    {:else}
      <div style="padding: 4px; color: #475569;">No events yet</div>
    {/each}
  </div>
</div>
