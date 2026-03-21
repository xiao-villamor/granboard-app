module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/contexts/SettingsContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsProvider",
    ()=>SettingsProvider,
    "useSettings",
    ()=>useSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SettingsProvider({ children }) {
    const [volume, setVolumeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const [soundEnabled, setSoundEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('system');
    const [resolvedTheme, setResolvedTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customContent, setCustomContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    // Get system theme preference
    const getSystemTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return 'dark';
        //TURBOPACK unreachable
        ;
    }, []);
    // Apply theme to document
    const applyTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newTheme)=>{
        const root = document.documentElement;
        const effectiveTheme = newTheme === 'system' ? getSystemTheme() : newTheme;
        setResolvedTheme(effectiveTheme);
        if (effectiveTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [
        getSystemTheme
    ]);
    // Load settings from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedVolume = localStorage.getItem('granboard_volume');
        const savedSoundEnabled = localStorage.getItem('granboard_sound_enabled');
        const savedTheme = localStorage.getItem('granboard_theme');
        const shouldReopenSettings = localStorage.getItem('granboard_reopen_settings');
        /* eslint-disable react-hooks/set-state-in-effect */ if (savedVolume) {
            setVolumeState(parseFloat(savedVolume));
        }
        if (savedSoundEnabled) {
            setSoundEnabled(savedSoundEnabled === 'true');
        }
        if (savedTheme && [
            'light',
            'dark',
            'system'
        ].includes(savedTheme)) {
            setThemeState(savedTheme);
            applyTheme(savedTheme);
        } else {
            // Default to system theme
            applyTheme('system');
        }
        // Reopen settings dialog if it was open before language change
        if (shouldReopenSettings === 'true') {
            localStorage.removeItem('granboard_reopen_settings');
            setIsDialogOpen(true);
        }
    /* eslint-enable react-hooks/set-state-in-effect */ }, [
        applyTheme
    ]);
    // Listen for system theme changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (theme !== 'system') return;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = ()=>{
            applyTheme('system');
        };
        mediaQuery.addEventListener('change', handleChange);
        return ()=>mediaQuery.removeEventListener('change', handleChange);
    }, [
        theme,
        applyTheme
    ]);
    const setVolume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newVolume)=>{
        setVolumeState(newVolume);
        localStorage.setItem('granboard_volume', newVolume.toString());
    }, []);
    const toggleSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSoundEnabled((prev)=>{
            const newValue = !prev;
            localStorage.setItem('granboard_sound_enabled', newValue.toString());
            return newValue;
        });
    }, []);
    const setTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newTheme)=>{
        setThemeState(newTheme);
        localStorage.setItem('granboard_theme', newTheme);
        applyTheme(newTheme);
    }, [
        applyTheme
    ]);
    const openDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((customContent)=>{
        setCustomContent(customContent);
        setIsDialogOpen(true);
    }, []);
    const closeDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsDialogOpen(false);
        setCustomContent(undefined);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
        value: {
            volume,
            soundEnabled,
            setVolume,
            toggleSound,
            theme,
            setTheme,
            resolvedTheme,
            isDialogOpen,
            openDialog,
            closeDialog,
            customContent
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/contexts/SettingsContext.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
function useSettings() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
}
}),
"[project]/i18n/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "localeNames",
    ()=>localeNames,
    "locales",
    ()=>locales
]);
const locales = [
    'en',
    'es'
];
const defaultLocale = 'en';
const localeNames = {
    en: 'English',
    es: 'Español'
};
}),
"[project]/app/components/LanguageSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/use-intl@4.4.0_react@19.2.0/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LanguageSelector() {
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$intl$40$4$2e$4$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const changeLanguage = (newLocale)=>{
        startTransition(async ()=>{
            // Set cookie
            document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`; // 1 year
            // Save dialog state to reopen after reload
            localStorage.setItem('granboard_reopen_settings', 'true');
            // Refresh the page to apply the new locale
            window.location.reload();
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "data-testid": "language-selector-button",
                onClick: ()=>setIsOpen(!isOpen),
                disabled: isPending,
                className: "px-4 py-2 bg-theme-interactive text-theme-interactive hover:bg-theme-interactive-hover rounded-lg transition-all flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "uppercase font-medium",
                        children: locale
                    }, void 0, false, {
                        fileName: "[project]/app/components/LanguageSelector.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/LanguageSelector.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LanguageSelector.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/LanguageSelector.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-40",
                        onClick: ()=>setIsOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LanguageSelector.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-testid": "language-dropdown",
                        className: "absolute right-0 top-full mt-2 z-50 bg-theme-card rounded-lg shadow-xl border border-theme-card overflow-hidden min-w-[150px]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locales"].map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-testid": `language-option-${loc}`,
                                onClick: ()=>changeLanguage(loc),
                                disabled: isPending,
                                className: `w-full px-4 py-3 text-left transition-all flex items-center gap-3 ${locale === loc ? "bg-theme-interactive text-theme-primary font-medium" : "text-theme-secondary hover:bg-theme-interactive"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "uppercase text-sm font-bold text-theme-muted",
                                        children: loc
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/LanguageSelector.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeNames"][loc]
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/LanguageSelector.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    locale === loc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-accent",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/LanguageSelector.tsx",
                                            lineNumber: 83,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/LanguageSelector.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, loc, true, {
                                fileName: "[project]/app/components/LanguageSelector.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/LanguageSelector.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/LanguageSelector.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/GlobalSettingsDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalSettingsDialog",
    ()=>GlobalSettingsDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contexts/SettingsContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/LanguageSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+react-fontawesome@3.1.0_@fortawesome+fontawesome-svg-core@7.1.0_react@19.2.0/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function GlobalSettingsDialog() {
    const { isDialogOpen, closeDialog, volume, soundEnabled, setVolume, toggleSound, theme, setTheme, customContent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    if (!isDialogOpen) return null;
    const handleVolumeChange = (e)=>{
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-testid": "settings-dialog",
            className: "rounded-2xl max-w-md w-full overflow-hidden max-h-[90vh] flex flex-col",
            style: {
                backgroundColor: 'var(--hud-glass-bg)',
                backdropFilter: 'blur(var(--hud-glass-blur))',
                outline: '1px solid rgba(69, 70, 77, 0.12)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 flex justify-between items-center p-6 pb-4",
                    style: {
                        borderBottom: '1px solid rgba(69, 70, 77, 0.12)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-2xl",
                            style: {
                                color: 'var(--hud-on-surface)'
                            },
                            children: t('settings.title')
                        }, void 0, false, {
                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-testid": "settings-close-button",
                            onClick: closeDialog,
                            className: "text-2xl font-bold px-3 py-1 rounded-lg transition-colors hover:opacity-80",
                            style: {
                                backgroundColor: 'var(--hud-surface-container-high)',
                                color: 'var(--hud-tertiary)'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.color = 'var(--hud-on-surface)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.color = 'var(--hud-tertiary)';
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faXmark"]
                            }, void 0, false, {
                                fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl p-4",
                            style: {
                                backgroundColor: 'var(--hud-surface-container-high)',
                                outline: '1px solid rgba(69, 70, 77, 0.12)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "font-bold text-base flex items-center gap-2",
                                        style: {
                                            color: 'var(--hud-on-surface)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: soundEnabled ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faVolumeHigh"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faVolumeMute"]
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            t('settings.sound.label')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "data-testid": "sound-toggle-button",
                                        onClick: toggleSound,
                                        className: "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                                        style: soundEnabled ? {
                                            backgroundColor: 'var(--hud-secondary)',
                                            color: '#1a1a1a'
                                        } : {
                                            backgroundColor: 'var(--hud-surface-container-highest)',
                                            color: 'var(--hud-on-surface)'
                                        },
                                        children: t(soundEnabled ? 'settings.sound.enabled' : 'settings.sound.disabled')
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl p-4",
                            style: {
                                backgroundColor: 'var(--hud-surface-container-high)',
                                outline: '1px solid rgba(69, 70, 77, 0.12)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-bold text-base flex items-center gap-2",
                                            style: {
                                                color: 'var(--hud-on-surface)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faVolumeHigh"]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                t('settings.volume.label')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-sm",
                                            style: {
                                                color: 'var(--hud-on-surface)'
                                            },
                                            children: [
                                                Math.round(volume * 100),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    "data-testid": "volume-slider",
                                    type: "range",
                                    min: "0",
                                    max: "1",
                                    step: "0.01",
                                    value: volume,
                                    onChange: handleVolumeChange,
                                    disabled: !soundEnabled,
                                    className: "w-full h-3 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:shadow-xl [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:hover:scale-110 [&::-moz-range-thumb]:shadow-xl",
                                    style: {
                                        backgroundColor: 'var(--hud-surface-container-highest)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                    children: `
              [data-testid="volume-slider"]::-webkit-slider-thumb {
                background-color: var(--hud-primary);
                border: 2px solid var(--hud-outline-variant);
              }
              [data-testid="volume-slider"]::-moz-range-thumb {
                background-color: var(--hud-primary);
                border: 2px solid var(--hud-outline-variant);
              }
            `
                                }, void 0, false, {
                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                !soundEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs mt-2 text-center",
                                    style: {
                                        color: 'var(--hud-tertiary)'
                                    },
                                    children: t('settings.volume.enableSoundFirst')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl p-4",
                            style: {
                                backgroundColor: 'var(--hud-surface-container-high)',
                                outline: '1px solid rgba(69, 70, 77, 0.12)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "font-bold text-base flex items-center gap-2 mb-3",
                                    style: {
                                        color: 'var(--hud-on-surface)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: theme === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faMoon"] : theme === 'light' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faSun"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faDesktop"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        t('settings.theme.label')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTheme('light'),
                                            className: "px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2",
                                            style: theme === 'light' ? {
                                                backgroundColor: 'var(--hud-primary)',
                                                color: '#1a1a1a'
                                            } : {
                                                backgroundColor: 'var(--hud-surface-container-high)',
                                                color: 'var(--hud-on-surface)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faSun"],
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: t('settings.theme.light')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTheme('dark'),
                                            className: "px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2",
                                            style: theme === 'dark' ? {
                                                backgroundColor: 'var(--hud-surface-container-highest)',
                                                color: 'var(--hud-on-surface)'
                                            } : {
                                                backgroundColor: 'var(--hud-surface-container-high)',
                                                color: 'var(--hud-on-surface)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faMoon"],
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: t('settings.theme.dark')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTheme('system'),
                                            className: "px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2",
                                            style: theme === 'system' ? {
                                                backgroundColor: 'var(--hud-secondary)',
                                                color: '#1a1a1a'
                                            } : {
                                                backgroundColor: 'var(--hud-surface-container-high)',
                                                color: 'var(--hud-on-surface)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faDesktop"],
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: t('settings.theme.system')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl p-4",
                            style: {
                                backgroundColor: 'var(--hud-surface-container-high)',
                                outline: '1px solid rgba(69, 70, 77, 0.12)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "font-bold text-base flex items-center gap-2",
                                        style: {
                                            color: 'var(--hud-on-surface)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faGlobe"]
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            t('settings.language.label')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSelector"], {}, void 0, false, {
                                        fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        customContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4",
                            style: {
                                borderTop: '1px solid rgba(69, 70, 77, 0.12)'
                            },
                            children: customContent
                        }, void 0, false, {
                            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 p-6 pt-4",
                    style: {
                        borderTop: '1px solid rgba(69, 70, 77, 0.12)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: closeDialog,
                        className: "w-full px-6 py-3 rounded-xl hover:opacity-90 font-bold transition-all shadow-lg",
                        style: {
                            background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
                            color: 'var(--hud-on-primary)'
                        },
                        children: t('settings.close')
                    }, void 0, false, {
                        fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/GlobalSettingsDialog.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/ClientLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientLayout",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contexts/SettingsContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GlobalSettingsDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GlobalSettingsDialog.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsProvider"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GlobalSettingsDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobalSettingsDialog"], {}, void 0, false, {
                fileName: "[project]/app/components/ClientLayout.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ClientLayout.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/messages/fr.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"common\":{\"back\":\"Retour\",\"add\":\"Ajouter\",\"remove\":\"Retirer\",\"start\":\"Commencer la partie\",\"bluetooth\":\"Bluetooth\",\"loading\":\"Chargement...\",\"connectionState\":{\"waiting\":\"en attente\",\"connecting\":\"connexion\",\"connected\":\"connecté\",\"error\":\"erreur\"},\"status\":\"Statut\",\"connect\":\"Connecter\",\"reconnect\":\"Reconnecter\"},\"settings\":{\"title\":\"Paramètres\",\"close\":\"Fermer\",\"sound\":{\"label\":\"Son\",\"enabled\":\"Activé\",\"disabled\":\"Désactivé\"},\"volume\":{\"label\":\"Volume\",\"enableSoundFirst\":\"Activez le son pour régler le volume\"},\"theme\":{\"label\":\"Thème\",\"light\":\"Clair\",\"dark\":\"Sombre\",\"system\":\"Système\"},\"language\":{\"label\":\"Langue\"}},\"home\":{\"title\":\"GRANBOARD\",\"selectSession\":\"Choisissez votre\",\"sessionHighlight\":\"session.\",\"subtitle\":\"Choisissez un jeu classique ou perfectionnez vos compétences au Lab.\",\"enterLab\":\"Entrer au Lab\",\"modes\":{\"01\":\"Jeux 01\",\"cricket\":\"Cricket\",\"training\":\"Lab Pratique\"}},\"animations\":{\"threeMiss\":\"BÊÊÊÊÊ!\",\"threeTriple\":\"LICORNE!\",\"threeTripleSubtitle\":\"3 Triples! Magique!\",\"victory\":\"VICTOIRE!\",\"victorySubtitle\":\"Félicitations!\"},\"cricket\":{\"title\":\"CRICKET\",\"subtitle\":\"Configuration\",\"setupDescription\":\"Configurez votre session de Cricket. Choisissez votre mode de jeu et ajoutez des adversaires.\",\"players\":{\"title\":\"Joueurs\",\"placeholder\":\"Nom du joueur\",\"count\":\"{count} joueur\",\"count_plural\":\"{count} joueurs\",\"minRequired\":\"Ajoutez au moins 1 joueur pour commencer la partie\"},\"gameMode\":{\"title\":\"Mode de jeu\",\"standard\":{\"title\":\"Cricket Standard\",\"description\":\"Marquez des points pour vous-même\"},\"cutThroat\":{\"title\":\"Cricket Cut Throat\",\"description\":\"Donnez des points aux adversaires\"}},\"rounds\":{\"title\":\"Nombre de tours\",\"description\":\"tours par partie (chaque joueur lance 3 fléchettes par tour)\"},\"rules\":{\"title\":\"Règles du Cricket {mode}\",\"mode\":{\"standard\":\"Standard\",\"cutThroat\":\"Cut Throat\"},\"common\":[\"Cibles: 15, 16, 17, 18, 19, 20 et Bull (25)\",\"Fermez chaque cible en la touchant 3 fois\",\"Simple = 1 marque, Double = 2 marques, Triple = 3 marques\"],\"standard\":{\"title\":\"Mode Standard:\",\"rules\":[\"Marquez des points pour VOUS sur vos cibles fermées\",\"Gagnant: Fermer toutes les cibles ET avoir le PLUS de points\"]},\"cutThroat\":{\"title\":\"Mode Cut Throat:\",\"rules\":[\"Donnez des points aux ADVERSAIRES sur vos cibles fermées\",\"Gagnant: Fermer toutes les cibles ET avoir le MOINS de points\"]}},\"errors\":{\"minPlayers\":\"Il faut au moins 1 joueur pour commencer!\",\"connectionFailed\":\"Impossible de se connecter à la Granboard. Assurez-vous qu'elle est allumée et réessayez.\"},\"game\":{\"round\":\"Tour\",\"rounds\":\"tours\",\"scores\":\"Scores\",\"currentPlayer\":\"Joueur actuel\",\"marks\":\"Marques\",\"points\":\"Points\",\"mpr\":\"MPR\",\"undo\":\"Annuler\",\"quit\":\"Quitter\",\"settings\":\"Paramètres\",\"legend\":\"Légende\",\"gameOver\":\"Partie terminée\",\"winner\":\"Gagnant\",\"newGame\":\"Nouvelle partie\",\"dart\":\"Fléchette\",\"darts\":\"fléchettes\",\"nextPlayer\":\"Joueur suivant\",\"undoLastMove\":\"Annuler le dernier coup\",\"nextPlayerTooltip\":\"Passer au joueur suivant\",\"showLegend\":\"Afficher la légende\",\"connected\":\"Connecté\",\"connecting\":\"Connexion...\",\"errorRetry\":\"Erreur - Réessayer\",\"connectGranboard\":\"Connecter Granboard\",\"turnCompleted\":\"Tour terminé\",\"wonGame\":\"{name} a gagné!\",\"gameEndedAfter\":\"Partie terminée après {rounds} {roundsLabel}\",\"gameStats\":\"Statistiques de la partie\",\"rank\":\"Rang\",\"player\":\"Joueur\",\"close\":\"Fermer\",\"history\":\"Historique\",\"inProgress\":\"en cours\",\"noCompletedTurns\":\"Aucun tour complété\"},\"legend\":{\"title\":\"Légende\",\"marksSymbols\":\"Symboles de marques\",\"oneMark\":\"1 marque (Simple)\",\"twoMarks\":\"2 marques (Double)\",\"closed\":\"Fermé (3 marques)\",\"closedByAll\":\"Fermé par tous\",\"mprTitle\":\"MPR (Marks Per Round)\",\"mprDesc\":\"Nombre moyen de marques par tour. Un bon joueur atteint 3+ MPR.\",\"single\":\"Simple = 1 marque\",\"double\":\"Double = 2 marques\",\"triple\":\"Triple = 3 marques\",\"standardTitle\":\"Mode Standard\",\"standardDesc\":\"Fermez vos numéros (3 marques) puis scorez des points en continuant à viser ces numéros. Le joueur avec le plus de points gagne !\",\"cutThroatTitle\":\"Mode Cut Throat\",\"cutThroatDesc\":\"Les points (affichés en rouge) sont MAUVAIS ! Quand vous touchez un numéro fermé par vous mais pas par vos adversaires, vous leur donnez des points. Fermez vos cibles rapidement pour éviter de recevoir des points. Le joueur avec le MOINS de points gagne !\",\"close\":\"Fermer\",\"legendTitle\":\"Légende:\"},\"playerOrder\":{\"dialog\":{\"title\":\"Choisir l'ordre des joueurs\",\"subtitle\":\"Comment souhaitez-vous déterminer l'ordre des joueurs ?\",\"throwForOrder\":\"Lancer pour l'ordre\",\"throwForOrderDesc\":\"Le score le plus élevé commence\",\"manualOrder\":\"Ordre manuel\",\"manualOrderDesc\":\"Définir l'ordre vous-même\",\"manualTitle\":\"Définir l'ordre manuellement\",\"manualSubtitle\":\"Utilisez les flèches pour organiser l'ordre des joueurs\",\"confirm\":\"Valider l'ordre\",\"randomOrder\":\"Ordre aléatoire\",\"randomOrderDesc\":\"Mélange automatique des joueurs\",\"currentOrder\":\"Ordre actuel\",\"currentOrderDesc\":\"Conserver l'ordre d'ajout des joueurs\"},\"modal\":{\"title\":\"Lancer pour l'ordre\",\"subtitle\":\"Chaque joueur lance une fléchette. Le score le plus élevé commence!\",\"currentTurn\":\"Au tour de: {player}\",\"waiting\":\"En attente...\",\"throwDart\":\"Lancez votre fléchette!\",\"hit\":\"a touché {segment}\",\"score\":\"Score\",\"results\":\"Résultats des lancers\",\"retry\":\"Relancer\",\"confirm\":\"Valider l'ordre\"}}},\"zeroOne\":{\"title\":\"01\",\"subtitle\":\"Configuration\",\"setupDescription\":\"Configurez votre session. Sélectionnez votre score de départ et invitez vos adversaires.\",\"players\":{\"title\":\"Joueurs\",\"placeholder\":\"Nom du joueur\",\"count\":\"{count} joueur\",\"count_plural\":\"{count} joueurs\",\"minRequired\":\"Ajoutez au moins 1 joueur pour commencer la partie\"},\"gameMode\":{\"title\":\"Score de départ\",\"short\":\"Partie courte\",\"standard\":\"Partie standard\",\"long\":\"Partie longue\"},\"options\":{\"title\":\"Options\",\"doubleOut\":{\"title\":\"Double Out\",\"description\":\"Il faut finir exactement sur 0 avec un double\"}},\"rounds\":{\"title\":\"Nombre de tours\",\"description\":\"tours par partie (0 = illimité)\",\"unlimited\":\"Illimité\"},\"rules\":{\"title\":\"Règles du 01\",\"common\":[\"Commencez avec un score de 301, 501 ou 701\",\"Soustrayez vos points du score restant\",\"Le premier à atteindre exactement 0 gagne\",\"Si vous dépassez 0 ou arrivez à 1, c'est un 'bust' et votre tour est perdu\"],\"doubleOut\":{\"title\":\"Double Out:\",\"rules\":[\"Vous DEVEZ finir sur un double pour gagner\",\"Finir sur autre chose qu'un double est un 'bust'\"]}},\"errors\":{\"minPlayers\":\"Il faut au moins 1 joueur pour commencer!\",\"connectionFailed\":\"Impossible de se connecter à la Granboard. Assurez-vous qu'elle est allumée et réessayez.\"},\"game\":{\"round\":\"Tour\",\"rounds\":\"tours\",\"remaining\":\"Restant\",\"average\":\"Moyenne\",\"dart\":\"Fléchette\",\"darts\":\"Fléchettes\",\"quit\":\"Quitter\",\"settings\":\"Paramètres\",\"newGame\":\"Nouvelle partie\",\"gameStats\":\"Statistiques de la partie\",\"suggestedCheckout\":\"Sortie suggérée\"},\"legend\":{\"title\":\"Légende et Règles\",\"close\":\"Fermer\",\"objectiveTitle\":\"Objectif\",\"objectiveDesc\":\"Soustrayez vos points du score de départ pour atteindre exactement 0\",\"ppdTitle\":\"PPD (Points Par Dart)\",\"ppdDesc\":\"Moyenne de points marqués par fléchette (Total des points marqués ÷ Nombre de fléchettes lancées)\",\"averageTitle\":\"Moyenne\",\"averageDesc\":\"Moyenne de points marqués par tour de 3 fléchettes\",\"bustTitle\":\"Bust\",\"bustDesc\":\"Si vous dépassez 0 ou arrivez à 1, c'est un bust. Votre tour est perdu et votre score reste inchangé.\",\"doubleOutTitle\":\"Double Out\",\"doubleOutDesc\":\"Quand activé, vous DEVEZ finir sur un double pour gagner. Finir sur autre chose qu'un double est un bust.\"}},\"debug\":{\"sounds\":{\"title\":\"Debug Sons\",\"subtitle\":\"Testez tous les sons de l'application\",\"audioControls\":\"Contrôles Audio\",\"soundEnabled\":\"Son activé\",\"volume\":\"Volume\",\"sequentialTest\":\"Test Séquentiel\",\"playAll\":\"Jouer tous les sons en séquence\",\"tip\":\"Astuce : Activez le son et ajustez le volume ci-dessus\",\"dartMiss\":\"Dart Miss\",\"dartMissDesc\":\"Son lorsqu'une fléchette rate la cible\",\"bull\":\"Bull\",\"bullDesc\":\"Son pour le bull simple\",\"doubleBull\":\"Double Bull\",\"doubleBullDesc\":\"Son pour le double bull / bullseye\",\"whistleSingle\":\"Sifflet Simple\",\"whistleSingleDesc\":\"1 sifflet pour un simple qui rapporte des points\",\"whistleDouble\":\"Sifflet Double\",\"whistleDoubleDesc\":\"2 sifflets pour un double qui rapporte des points\",\"whistleTriple\":\"Sifflet Triple\",\"whistleTripleDesc\":\"3 sifflets pour un triple qui rapporte des points\",\"victory\":\"Victory\",\"victoryDesc\":\"Son de victoire\",\"gameOver\":\"Game Over\",\"gameOverDesc\":\"Son de fin de partie\"},\"animations\":{\"title\":\"Debug Animations\",\"subtitle\":\"Testez toutes les animations de l'application\",\"threeMiss\":\"3 Miss - Chèvre\",\"threeMissDesc\":\"Animation quand le joueur fait 3 miss (la chèvre)\",\"threeTriple\":\"3 Triples - Licorne\",\"threeTripleDesc\":\"Animation quand le joueur fait 3 triples (magique!)\",\"threeSimples\":\"Séquence 3 Simples\",\"threeSimplesDesc\":\"Animation pour 3 simples: \\\\ \\\\ \\\\\",\"singleDoubleTriple\":\"Séquence Simple-Double-Triple\",\"singleDoubleTripleDesc\":\"Animation pour simple, double, triple: \\\\ X ⊗\",\"threeDoubles\":\"Séquence 3 Doubles\",\"threeDoublesDesc\":\"Animation pour 3 doubles: X X X\",\"victoryAnim\":\"Victoire\",\"victoryAnimDesc\":\"Animation de victoire\",\"tip\":\"Cliquez sur une animation pour la visualiser en plein écran\"}},\"spectator\":{\"shareGame\":\"Partager la partie\",\"goLive\":\"Passer en direct\",\"share\":\"Partager\",\"createRoomDescription\":\"Partagez votre partie avec vos amis et laissez-les regarder en temps réel depuis n'importe quel appareil.\",\"creating\":\"Création...\",\"serverUnavailable\":\"Serveur indisponible. Vérifiez votre connexion.\",\"scanQr\":\"Scannez ce QR code pour regarder la partie\",\"gameCode\":\"Code de partie\",\"watchLink\":\"Lien de visionnage\",\"shareNative\":\"Partager\",\"spectators\":\"{count} en train de regarder\",\"stopSharing\":\"Arrêter le partage\",\"connecting\":\"Connexion...\",\"joiningRoom\":\"Rejoint la salle {code}...\",\"error\":\"Erreur de connexion\",\"roomNotFound\":\"Salle introuvable ou plus disponible.\",\"backHome\":\"Retour à l'accueil\",\"roomClosed\":\"Partie terminée\",\"hostDisconnected\":\"L'hôte a terminé la session de jeu.\",\"waitingForGame\":\"En attente de la partie\",\"hostSetting\":\"L'hôte configure la partie. Veuillez patienter...\",\"unsupportedGame\":\"Ce type de jeu n'est pas encore pris en charge pour le visionnage.\",\"watchGame\":\"Regarder une partie\",\"enterCodeDescription\":\"Entrez un code de partie pour regarder une partie en direct en tant que spectateur.\",\"codePlaceholder\":\"Entrez le code de partie\",\"join\":\"Rejoindre\",\"live\":\"En direct\"},\"training\":{\"title\":\"ENTRAÎNEMENT\",\"subtitle\":\"Améliorez vos compétences aux fléchettes\",\"reset\":\"Réinitialiser\",\"playAgain\":\"Rejouer\",\"freeThrow\":{\"title\":\"Lancer libre\",\"description\":\"Lancez des fléchettes, suivez votre précision et vos statistiques de groupement\",\"darts\":\"Fléchettes\",\"totalPoints\":\"Points\",\"hitRate\":\"Taux de réussite\",\"singles\":\"Simples\",\"doubles\":\"Doubles\",\"triples\":\"Triples\",\"misses\":\"Ratés\",\"recentHits\":\"Derniers lancers\",\"waitingForDarts\":\"Connectez votre cible et commencez à lancer !\",\"mostHit\":\"Le plus touché\"},\"targetPractice\":{\"title\":\"Entraînement ciblé\",\"description\":\"Visez le numéro indiqué par l'application, gagnez des points selon votre précision\",\"numberOfTargets\":\"Nombre de cibles\",\"aimFor\":\"Visez le\",\"dartsRemaining\":\"{count} fléchettes restantes\",\"progress\":\"Cible {current} sur {total}\",\"sessionComplete\":\"Session terminée !\",\"accuracy\":\"Précision\",\"perfectRate\":\"Taux de perfection\",\"correctHits\":\"Tirs corrects\",\"targets\":\"Cibles\",\"currentDarts\":\"Fléchettes en cours\",\"history\":\"Historique\"},\"checkout\":{\"title\":\"Entraînement checkout\",\"description\":\"Entraînez-vous à finir depuis des scores spécifiques avec des chemins de checkout suggérés\",\"selectScore\":\"Sélectionnez le score de checkout\",\"high\":\"Haut (150+)\",\"mid\":\"Moyen (100-149)\",\"low\":\"Bas (<100)\",\"remaining\":\"Restant\",\"suggestion\":\"Suggestion\",\"dartsThrown\":\"{count}/3 fléchettes lancées\",\"currentAttempt\":\"Tentative en cours\",\"successRate\":\"Taux de réussite\",\"checkouts\":\"Checkouts\",\"attempts\":\"Tentatives\",\"avgDarts\":\"Moy. fléchettes\",\"recentAttempts\":\"Tentatives récentes\",\"success\":\"Checkout !\",\"bust\":\"Bust\"}}}"));}),
"[project]/messages/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"common\":{\"back\":\"Back\",\"add\":\"Add\",\"remove\":\"Remove\",\"start\":\"Start Game\",\"bluetooth\":\"Bluetooth\",\"loading\":\"Loading...\",\"connectionState\":{\"waiting\":\"waiting\",\"connecting\":\"connecting\",\"connected\":\"connected\",\"error\":\"error\"},\"status\":\"Status\",\"connect\":\"Connect\",\"reconnect\":\"Reconnect\"},\"settings\":{\"title\":\"Settings\",\"close\":\"Close\",\"sound\":{\"label\":\"Sound\",\"enabled\":\"Enabled\",\"disabled\":\"Disabled\"},\"volume\":{\"label\":\"Volume\",\"enableSoundFirst\":\"Enable sound to adjust volume\"},\"theme\":{\"label\":\"Theme\",\"light\":\"Light\",\"dark\":\"Dark\",\"system\":\"System\"},\"language\":{\"label\":\"Language\"}},\"home\":{\"title\":\"GRANBOARD\",\"selectSession\":\"Select your\",\"sessionHighlight\":\"session.\",\"subtitle\":\"Choose a classic game or sharpen your skills in the Lab.\",\"enterLab\":\"Enter Lab\",\"modes\":{\"01\":\"01 Games\",\"cricket\":\"Cricket\",\"training\":\"Practice Lab\"}},\"animations\":{\"threeMiss\":\"BAAAA!\",\"threeTriple\":\"UNICORN!\",\"threeTripleSubtitle\":\"3 Triples! Magic!\",\"victory\":\"VICTORY!\",\"victorySubtitle\":\"Congratulations!\"},\"cricket\":{\"title\":\"CRICKET\",\"subtitle\":\"Setup\",\"setupDescription\":\"Configure your Cricket session. Choose your game mode and add opponents.\",\"players\":{\"title\":\"Players\",\"placeholder\":\"Player name\",\"count\":\"{count} player\",\"count_plural\":\"{count} players\",\"minRequired\":\"Add at least 1 player to start the game\"},\"gameMode\":{\"title\":\"Game Mode\",\"standard\":{\"title\":\"Cricket Standard\",\"description\":\"Score points for yourself\"},\"cutThroat\":{\"title\":\"Cricket Cut Throat\",\"description\":\"Give points to opponents\"}},\"rounds\":{\"title\":\"Number of Rounds\",\"description\":\"rounds per game (each player throws 3 darts per round)\"},\"rules\":{\"title\":\"Cricket {mode} Rules\",\"mode\":{\"standard\":\"Standard\",\"cutThroat\":\"Cut Throat\"},\"common\":[\"Targets: 15, 16, 17, 18, 19, 20 and Bull (25)\",\"Close each target by hitting it 3 times\",\"Single = 1 mark, Double = 2 marks, Triple = 3 marks\"],\"standard\":{\"title\":\"Standard Mode:\",\"rules\":[\"Score points for YOURSELF on your closed targets\",\"Winner: Close all targets AND have the MOST points\"]},\"cutThroat\":{\"title\":\"Cut Throat Mode:\",\"rules\":[\"Give points to OPPONENTS on your closed targets\",\"Winner: Close all targets AND have the LEAST points\"]}},\"errors\":{\"minPlayers\":\"You need at least 1 player to start!\",\"connectionFailed\":\"Failed to connect to Granboard. Make sure it's powered on and try again.\"},\"game\":{\"round\":\"Round\",\"rounds\":\"rounds\",\"scores\":\"Scores\",\"currentPlayer\":\"Current Player\",\"marks\":\"Marks\",\"points\":\"Points\",\"mpr\":\"MPR\",\"undo\":\"Undo\",\"quit\":\"Quit\",\"settings\":\"Settings\",\"legend\":\"Legend\",\"gameOver\":\"Game Over\",\"winner\":\"Winner\",\"newGame\":\"New Game\",\"dart\":\"Dart\",\"darts\":\"darts\",\"nextPlayer\":\"Next Player\",\"undoLastMove\":\"Undo last move\",\"nextPlayerTooltip\":\"Go to next player\",\"showLegend\":\"Show legend\",\"connected\":\"Connected\",\"connecting\":\"Connecting...\",\"errorRetry\":\"Error - Retry\",\"connectGranboard\":\"Connect Granboard\",\"turnCompleted\":\"Turn Completed\",\"wonGame\":\"{name} won!\",\"gameEndedAfter\":\"Game ended after {rounds} {roundsLabel}\",\"gameStats\":\"Game Statistics\",\"rank\":\"Rank\",\"player\":\"Player\",\"close\":\"Close\",\"history\":\"History\",\"inProgress\":\"in progress\",\"noCompletedTurns\":\"No completed turns\"},\"legend\":{\"title\":\"Legend\",\"marksSymbols\":\"Mark Symbols\",\"oneMark\":\"1 mark (Single)\",\"twoMarks\":\"2 marks (Double)\",\"closed\":\"Closed (3 marks)\",\"closedByAll\":\"Closed by all\",\"mprTitle\":\"MPR (Marks Per Round)\",\"mprDesc\":\"Average number of marks per round. A good player reaches 3+ MPR.\",\"single\":\"Single = 1 mark\",\"double\":\"Double = 2 marks\",\"triple\":\"Triple = 3 marks\",\"standardTitle\":\"Standard Mode\",\"standardDesc\":\"Close your numbers (3 marks) then score points by continuing to hit those numbers. The player with the most points wins!\",\"cutThroatTitle\":\"Cut Throat Mode\",\"cutThroatDesc\":\"Points (shown in red) are BAD! When you hit a number you've closed but your opponents haven't, you give them points. Close your targets quickly to avoid receiving points. The player with the LEAST points wins!\",\"close\":\"Close\",\"legendTitle\":\"Legend:\"},\"playerOrder\":{\"dialog\":{\"title\":\"Choose Player Order\",\"subtitle\":\"How would you like to determine the player order?\",\"throwForOrder\":\"Throw for Order\",\"throwForOrderDesc\":\"Highest score goes first\",\"manualOrder\":\"Manual Order\",\"manualOrderDesc\":\"Set the order yourself\",\"manualTitle\":\"Set Order Manually\",\"manualSubtitle\":\"Use arrows to organize player order\",\"confirm\":\"Confirm Order\",\"randomOrder\":\"Random Order\",\"randomOrderDesc\":\"Automatic player shuffle\",\"currentOrder\":\"Current Order\",\"currentOrderDesc\":\"Keep the order players were added\"},\"modal\":{\"title\":\"Throw for Order\",\"subtitle\":\"Each player throws one dart. Highest score goes first!\",\"currentTurn\":\"{player}'s turn\",\"waiting\":\"Waiting...\",\"throwDart\":\"Throw your dart!\",\"hit\":\"hit {segment}\",\"score\":\"Score\",\"results\":\"Throw Results\",\"retry\":\"Retry\",\"confirm\":\"Confirm Order\"}}},\"zeroOne\":{\"title\":\"01\",\"subtitle\":\"Setup\",\"setupDescription\":\"Configure your session. Select your starting score and invite your opponents to the oche.\",\"players\":{\"title\":\"Players\",\"placeholder\":\"Player name\",\"count\":\"{count} player\",\"count_plural\":\"{count} players\",\"minRequired\":\"Add at least 1 player to start the game\"},\"gameMode\":{\"title\":\"Starting Score\",\"short\":\"Short game\",\"standard\":\"Standard game\",\"long\":\"Long game\"},\"options\":{\"title\":\"Options\",\"doubleOut\":{\"title\":\"Double Out\",\"description\":\"Must finish exactly on 0 with a double\"}},\"rounds\":{\"title\":\"Number of Rounds\",\"description\":\"rounds per game (0 = unlimited)\",\"unlimited\":\"Unlimited\"},\"rules\":{\"title\":\"01 Rules\",\"common\":[\"Start with a score of 301, 501 or 701\",\"Subtract your points from the remaining score\",\"First to reach exactly 0 wins\",\"If you go below 0 or land on 1, it's a 'bust' and your turn is lost\"],\"doubleOut\":{\"title\":\"Double Out:\",\"rules\":[\"You MUST finish on a double to win\",\"Finishing on anything other than a double is a 'bust'\"]}},\"errors\":{\"minPlayers\":\"You need at least 1 player to start!\",\"connectionFailed\":\"Failed to connect to Granboard. Make sure it's powered on and try again.\"},\"game\":{\"round\":\"Round\",\"rounds\":\"rounds\",\"remaining\":\"Remaining\",\"average\":\"Average\",\"dart\":\"Dart\",\"darts\":\"Darts\",\"quit\":\"Quit\",\"settings\":\"Settings\",\"newGame\":\"New Game\",\"gameStats\":\"Game Statistics\",\"suggestedCheckout\":\"Suggested Checkout\"},\"legend\":{\"title\":\"Legend & Rules\",\"close\":\"Close\",\"objectiveTitle\":\"Objective\",\"objectiveDesc\":\"Subtract your points from the starting score to reach exactly 0\",\"ppdTitle\":\"PPD (Points Per Dart)\",\"ppdDesc\":\"Average points scored per dart (Total points scored ÷ Number of darts thrown)\",\"averageTitle\":\"Average\",\"averageDesc\":\"Average points scored per 3-dart turn\",\"bustTitle\":\"Bust\",\"bustDesc\":\"If you go below 0 or land on 1, it's a bust. Your turn is lost and your score remains unchanged.\",\"doubleOutTitle\":\"Double Out\",\"doubleOutDesc\":\"When enabled, you MUST finish on a double to win. Finishing on anything other than a double is a bust.\"}},\"debug\":{\"sounds\":{\"title\":\"Debug Sounds\",\"subtitle\":\"Test all application sounds\",\"audioControls\":\"Audio Controls\",\"soundEnabled\":\"Sound enabled\",\"volume\":\"Volume\",\"sequentialTest\":\"Sequential Test\",\"playAll\":\"Play all sounds in sequence\",\"tip\":\"Tip: Enable sound and adjust volume above\",\"dartMiss\":\"Dart Miss\",\"dartMissDesc\":\"Sound when a dart misses the target\",\"bull\":\"Bull\",\"bullDesc\":\"Sound for single bull\",\"doubleBull\":\"Double Bull\",\"doubleBullDesc\":\"Sound for double bull / bullseye\",\"whistleSingle\":\"Single Whistle\",\"whistleSingleDesc\":\"1 whistle for a scoring single\",\"whistleDouble\":\"Double Whistle\",\"whistleDoubleDesc\":\"2 whistles for a scoring double\",\"whistleTriple\":\"Triple Whistle\",\"whistleTripleDesc\":\"3 whistles for a scoring triple\",\"victory\":\"Victory\",\"victoryDesc\":\"Victory sound\",\"gameOver\":\"Game Over\",\"gameOverDesc\":\"Game over sound\"},\"animations\":{\"title\":\"Debug Animations\",\"subtitle\":\"Test all application animations\",\"threeMiss\":\"3 Miss - Goat\",\"threeMissDesc\":\"Animation when player misses 3 times (the goat)\",\"threeTriple\":\"3 Triples - Unicorn\",\"threeTripleDesc\":\"Animation when player hits 3 triples (magic!)\",\"threeSimples\":\"3 Singles Sequence\",\"threeSimplesDesc\":\"Animation for 3 singles: \\\\ \\\\ \\\\\",\"singleDoubleTriple\":\"Single-Double-Triple Sequence\",\"singleDoubleTripleDesc\":\"Animation for single, double, triple: \\\\ X ⊗\",\"threeDoubles\":\"3 Doubles Sequence\",\"threeDoublesDesc\":\"Animation for 3 doubles: X X X\",\"victoryAnim\":\"Victory\",\"victoryAnimDesc\":\"Victory animation\",\"tip\":\"Click an animation to view it fullscreen\"}},\"spectator\":{\"shareGame\":\"Share Game\",\"goLive\":\"Go Live\",\"share\":\"Share\",\"createRoomDescription\":\"Share your game with friends and let them watch in real-time from any device.\",\"creating\":\"Creating...\",\"serverUnavailable\":\"Server unavailable. Check your connection.\",\"scanQr\":\"Scan this QR code to watch the game\",\"gameCode\":\"Game Code\",\"watchLink\":\"Watch Link\",\"shareNative\":\"Share\",\"spectators\":\"{count} watching\",\"stopSharing\":\"Stop Sharing\",\"connecting\":\"Connecting...\",\"joiningRoom\":\"Joining room {code}...\",\"error\":\"Connection Error\",\"roomNotFound\":\"Room not found or no longer available.\",\"backHome\":\"Back to Home\",\"roomClosed\":\"Game Ended\",\"hostDisconnected\":\"The host has ended the game session.\",\"waitingForGame\":\"Waiting for Game\",\"hostSetting\":\"The host is setting up the game. Please wait...\",\"unsupportedGame\":\"This game type is not yet supported for spectating.\",\"watchGame\":\"Watch a Game\",\"enterCodeDescription\":\"Enter a game code to watch a live game as a spectator.\",\"codePlaceholder\":\"Enter game code\",\"join\":\"Join\",\"live\":\"Live\",\"done\":\"Done\"},\"training\":{\"title\":\"TRAINING\",\"subtitle\":\"Improve your darts skills\",\"reset\":\"Reset\",\"playAgain\":\"Play Again\",\"freeThrow\":{\"title\":\"Free Throw\",\"description\":\"Just throw darts, track your accuracy and grouping stats\",\"darts\":\"Darts\",\"totalPoints\":\"Points\",\"hitRate\":\"Hit Rate\",\"singles\":\"Singles\",\"doubles\":\"Doubles\",\"triples\":\"Triples\",\"misses\":\"Misses\",\"recentHits\":\"Recent Hits\",\"waitingForDarts\":\"Connect your board and start throwing!\",\"mostHit\":\"Most hit\"},\"targetPractice\":{\"title\":\"Target Practice\",\"description\":\"Hit the number the app tells you, score points for accuracy\",\"numberOfTargets\":\"Number of targets\",\"aimFor\":\"Aim for\",\"dartsRemaining\":\"{count} darts remaining\",\"progress\":\"Target {current} of {total}\",\"sessionComplete\":\"Session Complete!\",\"accuracy\":\"Accuracy\",\"perfectRate\":\"Perfect Rate\",\"correctHits\":\"Correct Hits\",\"targets\":\"Targets\",\"currentDarts\":\"Current darts\",\"history\":\"History\"},\"checkout\":{\"title\":\"Checkout Practice\",\"description\":\"Practice finishing from specific scores with suggested checkout paths\",\"selectScore\":\"Select checkout score\",\"high\":\"High (150+)\",\"mid\":\"Medium (100-149)\",\"low\":\"Low (<100)\",\"remaining\":\"Remaining\",\"suggestion\":\"Suggestion\",\"dartsThrown\":\"{count}/3 darts thrown\",\"currentAttempt\":\"Current attempt\",\"successRate\":\"Success Rate\",\"checkouts\":\"Checkouts\",\"attempts\":\"Attempts\",\"avgDarts\":\"Avg Darts\",\"recentAttempts\":\"Recent Attempts\",\"success\":\"Checkout!\",\"bust\":\"Bust\"}}}"));}),
"[project]/messages/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"common\":{\"back\":\"Volver\",\"add\":\"Agregar\",\"remove\":\"Quitar\",\"start\":\"Iniciar partida\",\"bluetooth\":\"Bluetooth\",\"loading\":\"Cargando...\",\"connectionState\":{\"waiting\":\"esperando\",\"connecting\":\"conectando\",\"connected\":\"conectado\",\"error\":\"error\"},\"status\":\"Estado\",\"connect\":\"Conectar\",\"reconnect\":\"Reconectar\"},\"settings\":{\"title\":\"Ajustes\",\"close\":\"Cerrar\",\"sound\":{\"label\":\"Sonido\",\"enabled\":\"Activado\",\"disabled\":\"Desactivado\"},\"volume\":{\"label\":\"Volumen\",\"enableSoundFirst\":\"Activa el sonido para ajustar el volumen\"},\"theme\":{\"label\":\"Tema\",\"light\":\"Claro\",\"dark\":\"Oscuro\",\"system\":\"Sistema\"},\"language\":{\"label\":\"Idioma\"}},\"home\":{\"title\":\"GRANBOARD\",\"selectSession\":\"Selecciona tu\",\"sessionHighlight\":\"sesión.\",\"subtitle\":\"Elige un juego clásico o perfecciona tus habilidades en el Lab.\",\"enterLab\":\"Entrar al Lab\",\"modes\":{\"01\":\"Juegos 01\",\"cricket\":\"Cricket\",\"training\":\"Lab Práctica\"}},\"animations\":{\"threeMiss\":\"BEEEEE!\",\"threeTriple\":\"UNICORNIO!\",\"threeTripleSubtitle\":\"3 Triples! Magico!\",\"victory\":\"VICTORIA!\",\"victorySubtitle\":\"Felicidades!\"},\"cricket\":{\"title\":\"CRICKET\",\"subtitle\":\"Configuracion\",\"setupDescription\":\"Configura tu sesion de Cricket. Elige tu modo de juego y agrega oponentes.\",\"players\":{\"title\":\"Jugadores\",\"placeholder\":\"Nombre del jugador\",\"count\":\"{count} jugador\",\"count_plural\":\"{count} jugadores\",\"minRequired\":\"Agrega al menos 1 jugador para comenzar la partida\"},\"gameMode\":{\"title\":\"Modo de juego\",\"standard\":{\"title\":\"Cricket Estandar\",\"description\":\"Anota puntos para ti mismo\"},\"cutThroat\":{\"title\":\"Cricket Cut Throat\",\"description\":\"Da puntos a los rivales\"}},\"rounds\":{\"title\":\"Numero de rondas\",\"description\":\"rondas por partida (cada jugador lanza 3 dardos por ronda)\"},\"rules\":{\"title\":\"Reglas del Cricket {mode}\",\"mode\":{\"standard\":\"Estandar\",\"cutThroat\":\"Cut Throat\"},\"common\":[\"Objetivos: 15, 16, 17, 18, 19, 20 y Bull (25)\",\"Cierra cada objetivo acertandolo 3 veces\",\"Simple = 1 marca, Doble = 2 marcas, Triple = 3 marcas\"],\"standard\":{\"title\":\"Modo Estandar:\",\"rules\":[\"Anota puntos para TI MISMO en tus objetivos cerrados\",\"Ganador: Cerrar todos los objetivos Y tener MAS puntos\"]},\"cutThroat\":{\"title\":\"Modo Cut Throat:\",\"rules\":[\"Da puntos a los RIVALES en tus objetivos cerrados\",\"Ganador: Cerrar todos los objetivos Y tener MENOS puntos\"]}},\"errors\":{\"minPlayers\":\"Se necesita al menos 1 jugador para comenzar!\",\"connectionFailed\":\"No se pudo conectar a la Granboard. Asegurate de que este encendida e intentalo de nuevo.\"},\"game\":{\"round\":\"Ronda\",\"rounds\":\"rondas\",\"scores\":\"Puntuaciones\",\"currentPlayer\":\"Jugador actual\",\"marks\":\"Marcas\",\"points\":\"Puntos\",\"mpr\":\"MPR\",\"undo\":\"Deshacer\",\"quit\":\"Salir\",\"settings\":\"Ajustes\",\"legend\":\"Leyenda\",\"gameOver\":\"Fin de la partida\",\"winner\":\"Ganador\",\"newGame\":\"Nueva partida\",\"dart\":\"Dardo\",\"darts\":\"dardos\",\"nextPlayer\":\"Siguiente jugador\",\"undoLastMove\":\"Deshacer ultimo movimiento\",\"nextPlayerTooltip\":\"Pasar al siguiente jugador\",\"showLegend\":\"Mostrar leyenda\",\"connected\":\"Conectado\",\"connecting\":\"Conectando...\",\"errorRetry\":\"Error - Reintentar\",\"connectGranboard\":\"Conectar Granboard\",\"turnCompleted\":\"Turno completado\",\"wonGame\":\"{name} gano!\",\"gameEndedAfter\":\"Partida terminada tras {rounds} {roundsLabel}\",\"gameStats\":\"Estadisticas de la partida\",\"rank\":\"Posicion\",\"player\":\"Jugador\",\"close\":\"Cerrar\",\"history\":\"Historial\",\"inProgress\":\"en curso\",\"noCompletedTurns\":\"Sin turnos completados\"},\"legend\":{\"title\":\"Leyenda\",\"marksSymbols\":\"Simbolos de marcas\",\"oneMark\":\"1 marca (Simple)\",\"twoMarks\":\"2 marcas (Doble)\",\"closed\":\"Cerrado (3 marcas)\",\"closedByAll\":\"Cerrado por todos\",\"mprTitle\":\"MPR (Marcas Por Ronda)\",\"mprDesc\":\"Promedio de marcas por ronda. Un buen jugador alcanza 3+ MPR.\",\"single\":\"Simple = 1 marca\",\"double\":\"Doble = 2 marcas\",\"triple\":\"Triple = 3 marcas\",\"standardTitle\":\"Modo Estandar\",\"standardDesc\":\"Cierra tus numeros (3 marcas) y luego anota puntos siguiendo acertando esos numeros. El jugador con mas puntos gana!\",\"cutThroatTitle\":\"Modo Cut Throat\",\"cutThroatDesc\":\"Los puntos (en rojo) son MALOS! Cuando aciertas un numero cerrado por ti pero no por tus rivales, les das puntos. Cierra tus objetivos rapido para evitar recibir puntos. El jugador con MENOS puntos gana!\",\"close\":\"Cerrar\",\"legendTitle\":\"Leyenda:\"},\"playerOrder\":{\"dialog\":{\"title\":\"Elegir orden de jugadores\",\"subtitle\":\"Como quieres determinar el orden de los jugadores?\",\"throwForOrder\":\"Lanzar para el orden\",\"throwForOrderDesc\":\"La puntuacion mas alta va primero\",\"manualOrder\":\"Orden manual\",\"manualOrderDesc\":\"Define el orden tu mismo\",\"manualTitle\":\"Definir orden manualmente\",\"manualSubtitle\":\"Usa las flechas para organizar el orden de los jugadores\",\"confirm\":\"Confirmar orden\",\"randomOrder\":\"Orden aleatorio\",\"randomOrderDesc\":\"Mezcla automatica de jugadores\",\"currentOrder\":\"Orden actual\",\"currentOrderDesc\":\"Mantener el orden en que se agregaron los jugadores\"},\"modal\":{\"title\":\"Lanzar para el orden\",\"subtitle\":\"Cada jugador lanza un dardo. La puntuacion mas alta va primero!\",\"currentTurn\":\"Turno de: {player}\",\"waiting\":\"Esperando...\",\"throwDart\":\"Lanza tu dardo!\",\"hit\":\"acerto {segment}\",\"score\":\"Puntuacion\",\"results\":\"Resultados de los lanzamientos\",\"retry\":\"Reintentar\",\"confirm\":\"Confirmar orden\"}}},\"zeroOne\":{\"title\":\"01\",\"subtitle\":\"Configuracion\",\"setupDescription\":\"Configura tu sesion. Selecciona tu puntuacion inicial e invita a tus oponentes.\",\"players\":{\"title\":\"Jugadores\",\"placeholder\":\"Nombre del jugador\",\"count\":\"{count} jugador\",\"count_plural\":\"{count} jugadores\",\"minRequired\":\"Agrega al menos 1 jugador para comenzar la partida\"},\"gameMode\":{\"title\":\"Puntuacion inicial\",\"short\":\"Partida corta\",\"standard\":\"Partida estandar\",\"long\":\"Partida larga\"},\"options\":{\"title\":\"Opciones\",\"doubleOut\":{\"title\":\"Double Out\",\"description\":\"Hay que terminar exactamente en 0 con un doble\"}},\"rounds\":{\"title\":\"Numero de rondas\",\"description\":\"rondas por partida (0 = ilimitado)\",\"unlimited\":\"Ilimitado\"},\"rules\":{\"title\":\"Reglas del 01\",\"common\":[\"Comienza con una puntuacion de 301, 501 o 701\",\"Resta tus puntos de la puntuacion restante\",\"El primero en llegar exactamente a 0 gana\",\"Si bajas de 0 o llegas a 1, es un 'bust' y pierdes el turno\"],\"doubleOut\":{\"title\":\"Double Out:\",\"rules\":[\"DEBES terminar en un doble para ganar\",\"Terminar en algo que no sea doble es un 'bust'\"]}},\"errors\":{\"minPlayers\":\"Se necesita al menos 1 jugador para comenzar!\",\"connectionFailed\":\"No se pudo conectar a la Granboard. Asegurate de que este encendida e intentalo de nuevo.\"},\"game\":{\"round\":\"Ronda\",\"rounds\":\"rondas\",\"remaining\":\"Restante\",\"average\":\"Promedio\",\"dart\":\"Dardo\",\"darts\":\"Dardos\",\"quit\":\"Salir\",\"settings\":\"Ajustes\",\"newGame\":\"Nueva partida\",\"gameStats\":\"Estadisticas de la partida\",\"suggestedCheckout\":\"Salida sugerida\"},\"legend\":{\"title\":\"Leyenda y Reglas\",\"close\":\"Cerrar\",\"objectiveTitle\":\"Objetivo\",\"objectiveDesc\":\"Resta tus puntos de la puntuacion inicial para llegar exactamente a 0\",\"ppdTitle\":\"PPD (Puntos Por Dardo)\",\"ppdDesc\":\"Promedio de puntos por dardo (Total de puntos anotados / Numero de dardos lanzados)\",\"averageTitle\":\"Promedio\",\"averageDesc\":\"Promedio de puntos por turno de 3 dardos\",\"bustTitle\":\"Bust\",\"bustDesc\":\"Si bajas de 0 o llegas a 1, es un bust. Pierdes el turno y tu puntuacion no cambia.\",\"doubleOutTitle\":\"Double Out\",\"doubleOutDesc\":\"Cuando esta activado, DEBES terminar en un doble para ganar. Terminar en algo que no sea doble es un bust.\"}},\"debug\":{\"sounds\":{\"title\":\"Debug Sonidos\",\"subtitle\":\"Prueba todos los sonidos de la aplicacion\",\"audioControls\":\"Controles de Audio\",\"soundEnabled\":\"Sonido activado\",\"volume\":\"Volumen\",\"sequentialTest\":\"Prueba Secuencial\",\"playAll\":\"Reproducir todos los sonidos en secuencia\",\"tip\":\"Consejo: Activa el sonido y ajusta el volumen arriba\",\"dartMiss\":\"Fallo de dardo\",\"dartMissDesc\":\"Sonido cuando un dardo falla el objetivo\",\"bull\":\"Bull\",\"bullDesc\":\"Sonido para el bull simple\",\"doubleBull\":\"Double Bull\",\"doubleBullDesc\":\"Sonido para el double bull / bullseye\",\"whistleSingle\":\"Silbato Simple\",\"whistleSingleDesc\":\"1 silbato para un simple que da puntos\",\"whistleDouble\":\"Silbato Doble\",\"whistleDoubleDesc\":\"2 silbatos para un doble que da puntos\",\"whistleTriple\":\"Silbato Triple\",\"whistleTripleDesc\":\"3 silbatos para un triple que da puntos\",\"victory\":\"Victoria\",\"victoryDesc\":\"Sonido de victoria\",\"gameOver\":\"Fin de partida\",\"gameOverDesc\":\"Sonido de fin de partida\"},\"animations\":{\"title\":\"Debug Animaciones\",\"subtitle\":\"Prueba todas las animaciones de la aplicacion\",\"threeMiss\":\"3 Fallos - Cabra\",\"threeMissDesc\":\"Animacion cuando el jugador falla 3 veces (la cabra)\",\"threeTriple\":\"3 Triples - Unicornio\",\"threeTripleDesc\":\"Animacion cuando el jugador hace 3 triples (magico!)\",\"threeSimples\":\"Secuencia 3 Simples\",\"threeSimplesDesc\":\"Animacion para 3 simples: \\\\ \\\\ \\\\\",\"singleDoubleTriple\":\"Secuencia Simple-Doble-Triple\",\"singleDoubleTripleDesc\":\"Animacion para simple, doble, triple: \\\\ X ⊗\",\"threeDoubles\":\"Secuencia 3 Dobles\",\"threeDoublesDesc\":\"Animacion para 3 dobles: X X X\",\"victoryAnim\":\"Victoria\",\"victoryAnimDesc\":\"Animacion de victoria\",\"tip\":\"Haz clic en una animacion para verla en pantalla completa\"}},\"spectator\":{\"shareGame\":\"Compartir partida\",\"goLive\":\"Transmitir en vivo\",\"share\":\"Compartir\",\"createRoomDescription\":\"Comparte tu partida con tus amigos y déjalos ver en tiempo real desde cualquier dispositivo.\",\"creating\":\"Creando...\",\"serverUnavailable\":\"Servidor no disponible. Verifica tu conexión.\",\"scanQr\":\"Escanea este código QR para ver la partida\",\"gameCode\":\"Código de partida\",\"watchLink\":\"Enlace de visualización\",\"shareNative\":\"Compartir\",\"spectators\":\"{count} viendo\",\"stopSharing\":\"Dejar de compartir\",\"connecting\":\"Conectando...\",\"joiningRoom\":\"Uniéndose a la sala {code}...\",\"error\":\"Error de conexión\",\"roomNotFound\":\"Sala no encontrada o ya no disponible.\",\"backHome\":\"Volver al inicio\",\"roomClosed\":\"Partida terminada\",\"hostDisconnected\":\"El anfitrión ha terminado la sesión de juego.\",\"waitingForGame\":\"Esperando la partida\",\"hostSetting\":\"El anfitrión está configurando la partida. Por favor espera...\",\"unsupportedGame\":\"Este tipo de juego aún no es compatible con la visualización.\",\"watchGame\":\"Ver una partida\",\"enterCodeDescription\":\"Ingresa un código de partida para ver una partida en vivo como espectador.\",\"codePlaceholder\":\"Ingresa el código de partida\",\"join\":\"Unirse\",\"live\":\"En vivo\",\"done\":\"Listo\"},\"training\":{\"title\":\"ENTRENAMIENTO\",\"subtitle\":\"Mejora tus habilidades con los dardos\",\"reset\":\"Reiniciar\",\"playAgain\":\"Jugar de nuevo\",\"freeThrow\":{\"title\":\"Lanzamiento libre\",\"description\":\"Lanza dardos, sigue tu precisión y estadísticas de agrupación\",\"darts\":\"Dardos\",\"totalPoints\":\"Puntos\",\"hitRate\":\"Tasa de acierto\",\"singles\":\"Simples\",\"doubles\":\"Dobles\",\"triples\":\"Triples\",\"misses\":\"Fallos\",\"recentHits\":\"Últimos lanzamientos\",\"waitingForDarts\":\"Conecta tu diana y empieza a lanzar!\",\"mostHit\":\"Más acertado\"},\"targetPractice\":{\"title\":\"Práctica de objetivo\",\"description\":\"Acierta el número que la app te indica, gana puntos por precisión\",\"numberOfTargets\":\"Número de objetivos\",\"aimFor\":\"Apunta al\",\"dartsRemaining\":\"{count} dardos restantes\",\"progress\":\"Objetivo {current} de {total}\",\"sessionComplete\":\"Sesión completada!\",\"accuracy\":\"Precisión\",\"perfectRate\":\"Tasa de perfección\",\"correctHits\":\"Aciertos correctos\",\"targets\":\"Objetivos\",\"currentDarts\":\"Dardos actuales\",\"history\":\"Historial\"},\"checkout\":{\"title\":\"Práctica de checkout\",\"description\":\"Practica finalizaciones desde puntuaciones específicas con caminos de checkout sugeridos\",\"selectScore\":\"Selecciona la puntuación de checkout\",\"high\":\"Alto (150+)\",\"mid\":\"Medio (100-149)\",\"low\":\"Bajo (<100)\",\"remaining\":\"Restante\",\"suggestion\":\"Sugerencia\",\"dartsThrown\":\"{count}/3 dardos lanzados\",\"currentAttempt\":\"Intento actual\",\"successRate\":\"Tasa de éxito\",\"checkouts\":\"Checkouts\",\"attempts\":\"Intentos\",\"avgDarts\":\"Prom. dardos\",\"recentAttempts\":\"Intentos recientes\",\"success\":\"Checkout!\",\"bust\":\"Bust\"}}}"));}),
"[project]/app/components/LocaleProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/shared/NextIntlClientProvider.js [app-ssr] (ecmascript) <export default as NextIntlClientProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/config.ts [app-ssr] (ecmascript)");
// Static imports of all message files so they're bundled
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$fr$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/fr.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$es$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/es.json (json)");
"use client";
;
;
;
;
;
;
;
const allMessages = {
    fr: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$fr$2e$json__$28$json$29$__["default"],
    en: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$en$2e$json__$28$json$29$__["default"],
    es: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$es$2e$json__$28$json$29$__["default"]
};
function getCookieLocale() {
    if (typeof document === "undefined") return __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"];
    const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]*)/);
    const value = match?.[1];
    if (value && __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locales"].includes(value)) {
        return value;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"];
}
function LocaleProvider({ children }) {
    const [locale, setLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocale(getCookieLocale());
        setMounted(true);
    }, []);
    // Before mount, use the default locale (matches SSG output to avoid hydration mismatch)
    const activeLocale = mounted ? locale : __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"];
    const messages = allMessages[activeLocale];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$shared$2f$NextIntlClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
        locale: activeLocale,
        messages: messages,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/LocaleProvider.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__60fb0b6a._.js.map