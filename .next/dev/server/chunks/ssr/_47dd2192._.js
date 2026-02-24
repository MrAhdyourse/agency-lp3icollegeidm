module.exports = [
"[project]/src/config/app.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Application Configuration
 * File: src/config/app.config.ts
 * Purpose: Konfigurasi utama aplikasi (nama, deskripsi, dll)
 * 
 * Cara update: Ubah nilai di bawah ini untuk mengubah info aplikasi
 */ __turbopack_context__.s([
    "appConfig",
    ()=>appConfig,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const appConfig = {
    // Informasi dasar aplikasi
    name: 'AGENCY-WNI',
    fullName: 'Agency WNI - LP3I College',
    description: 'Portal Informasi Produk & Knowledge untuk Rekanan Agensi',
    version: '1.0.0',
    // Informasi organisasi
    organization: {
        name: 'LP3I College',
        website: 'https://lp3i.ac.id'
    },
    // Repository GitHub
    repository: {
        url: 'https://github.com/MrAhdyourse/agency-lp3icollegeidm',
        pagesUrl: 'https://mrahdyourse.github.io/agency-lp3icollegeidm'
    },
    // Pengaturan tampilan
    ui: {
        sidebar: {
            defaultOpen: true,
            width: 280,
            collapsedWidth: 70
        },
        header: {
            height: 64
        }
    },
    // Metadata SEO
    seo: {
        title: 'Agency WNI - Portal Rekanan',
        description: 'Portal informasi produk dan knowledge untuk rekanan agensi LP3I College',
        keywords: [
            'agency',
            'lp3i',
            'college',
            'rekanan',
            'produk',
            'knowledge'
        ]
    }
};
const __TURBOPACK__default__export__ = appConfig;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Root Layout
 * File: src/app/layout.tsx
 * Purpose: Layout utama dengan Sidebar dan Header
 */ __turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.config.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].seo.title,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].seo.description,
    keywords: [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].seo.keywords
    ]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "id",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        charSet: "utf-8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "min-h-screen bg-gray-50",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_47dd2192._.js.map