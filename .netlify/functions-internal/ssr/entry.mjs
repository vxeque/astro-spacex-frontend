import { renderers } from './renderers.mjs';
import { manifest } from './manifest_uwIEGWzu.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DitMTXMN.mjs');
const _page1 = () => import('./chunks/about_DYRgjYVv.mjs');
const _page2 = () => import('./chunks/_id__BmKMREIM.mjs');
const _page3 = () => import('./chunks/Launches_BJYar2Nc.mjs');
const _page4 = () => import('./chunks/index_Dt62mEUp.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.16_typescript@5.4.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/launch/[id].astro", _page2],
    ["src/pages/Launches.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "51ab7fbe-3349-470f-9ab0-3c664e2f8dc3"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
