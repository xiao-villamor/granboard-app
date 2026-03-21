import type { Component } from 'svelte';

export type Theme = 'light' | 'dark' | 'system';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyThemeToDOM(effectiveTheme: 'light' | 'dark') {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(effectiveTheme);
}

function createSettingsStore() {
  // Volume
  let volume = $state(0.5);
  let soundEnabled = $state(true);

  // Theme
  let theme = $state<Theme>('system');
  let resolvedTheme = $state<'light' | 'dark'>('dark');

  // Dialog
  let isDialogOpen = $state(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customDialogComponent = $state<Component<any> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customDialogProps = $state<Record<string, any>>({});

  function resolveAndApplyTheme(newTheme: Theme) {
    const effective = newTheme === 'system' ? getSystemTheme() : newTheme;
    resolvedTheme = effective;
    applyThemeToDOM(effective);
  }

  function setVolume(newVolume: number) {
    volume = newVolume;
    localStorage.setItem('granboard_volume', newVolume.toString());
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('granboard_sound_enabled', soundEnabled.toString());
  }

  function setTheme(newTheme: Theme) {
    theme = newTheme;
    localStorage.setItem('granboard_theme', newTheme);
    resolveAndApplyTheme(newTheme);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function openDialog(component?: Component<any> | null, props?: Record<string, any>) {
    customDialogComponent = component ?? null;
    customDialogProps = props ?? {};
    isDialogOpen = true;
  }

  function closeDialog() {
    isDialogOpen = false;
    customDialogComponent = null;
    customDialogProps = {};
  }

  /** Call once from root component's onMount to hydrate from localStorage */
  function init() {
    const savedVolume = localStorage.getItem('granboard_volume');
    const savedSoundEnabled = localStorage.getItem('granboard_sound_enabled');
    const savedTheme = localStorage.getItem('granboard_theme') as Theme | null;
    const shouldReopenSettings = localStorage.getItem('granboard_reopen_settings');

    if (savedVolume) {
      volume = parseFloat(savedVolume);
    }
    if (savedSoundEnabled) {
      soundEnabled = savedSoundEnabled === 'true';
    }
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      theme = savedTheme;
      resolveAndApplyTheme(savedTheme);
    } else {
      resolveAndApplyTheme('system');
    }

    if (shouldReopenSettings === 'true') {
      localStorage.removeItem('granboard_reopen_settings');
      isDialogOpen = true;
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        resolveAndApplyTheme('system');
      }
    };
    mediaQuery.addEventListener('change', handleChange);

    // Return cleanup function
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }

  return {
    get volume() { return volume; },
    get soundEnabled() { return soundEnabled; },
    get theme() { return theme; },
    get resolvedTheme() { return resolvedTheme; },
    get isDialogOpen() { return isDialogOpen; },
    get customDialogComponent() { return customDialogComponent; },
    get customDialogProps() { return customDialogProps; },
    setVolume,
    toggleSound,
    setTheme,
    openDialog,
    closeDialog,
    init,
  };
}

export const settings = createSettingsStore();
