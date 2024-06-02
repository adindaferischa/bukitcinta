// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kwldV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fdb7cbb81a5700ca";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"JSvCN":[function(require,module,exports) {
/**
 * GLightbox
 * Awesome pure javascript lightbox
 * made by https://www.biati.digital
 * Github: https://github.com/biati-digital/glightbox
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(options = {}) {
        const instance = new GlightboxInit(options);
        instance.init();
        return instance;
    });
var _keyboardNavigationJs = require("./core/keyboard-navigation.js");
var _keyboardNavigationJsDefault = parcelHelpers.interopDefault(_keyboardNavigationJs);
var _slideJs = require("./core/slide.js");
var _slideJsDefault = parcelHelpers.interopDefault(_slideJs);
var _touchNavigationJs = require("./core/touch-navigation.js");
var _touchNavigationJsDefault = parcelHelpers.interopDefault(_touchNavigationJs);
var _helpersJs = require("./utils/helpers.js");
const version = "3.3.0";
const isMobile = _helpersJs.isMobile();
const isTouch = _helpersJs.isTouch();
const html = document.getElementsByTagName("html")[0];
const defaults = {
    selector: ".glightbox",
    elements: null,
    skin: "clean",
    theme: "clean",
    closeButton: true,
    startAt: null,
    autoplayVideos: true,
    autofocusVideos: true,
    descPosition: "bottom",
    width: "900px",
    height: "506px",
    videosWidth: "960px",
    beforeSlideChange: null,
    afterSlideChange: null,
    beforeSlideLoad: null,
    afterSlideLoad: null,
    slideInserted: null,
    slideRemoved: null,
    slideExtraAttributes: null,
    onOpen: null,
    onClose: null,
    loop: false,
    zoomable: true,
    draggable: true,
    dragAutoSnap: false,
    dragToleranceX: 40,
    dragToleranceY: 65,
    preload: true,
    oneSlidePerOpen: false,
    touchNavigation: true,
    touchFollowAxis: true,
    keyboardNavigation: true,
    closeOnOutsideClick: true,
    plugins: false,
    plyr: {
        css: "https://cdn.plyr.io/3.6.12/plyr.css",
        js: "https://cdn.plyr.io/3.6.12/plyr.js",
        config: {
            ratio: "16:9",
            fullscreen: {
                enabled: true,
                iosNative: true
            },
            youtube: {
                noCookie: true,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3 // eslint-disable-line camelcase
            },
            vimeo: {
                byline: false,
                portrait: false,
                title: false,
                transparent: false
            }
        }
    },
    openEffect: "zoom",
    closeEffect: "zoom",
    slideEffect: "slide",
    moreText: "See more",
    moreLength: 60,
    cssEfects: {
        fade: {
            in: "fadeIn",
            out: "fadeOut"
        },
        zoom: {
            in: "zoomIn",
            out: "zoomOut"
        },
        slide: {
            in: "slideInRight",
            out: "slideOutLeft"
        },
        slideBack: {
            in: "slideInLeft",
            out: "slideOutRight"
        },
        none: {
            in: "none",
            out: "none"
        }
    },
    svg: {
        close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
        next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
        prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
    }
};
// You can pass your own slide structure
// just make sure that add the same classes so they are populated
// title class = gslide-title
// desc class = gslide-desc
// prev arrow class = gnext
// next arrow id = gprev
// close id = gclose
defaults.slideHTML = `<div class="gslide">
    <div class="gslide-inner-content">
        <div class="ginner-container">
            <div class="gslide-media">
            </div>
            <div class="gslide-description">
                <div class="gdesc-inner">
                    <h4 class="gslide-title"></h4>
                    <div class="gslide-desc"></div>
                </div>
            </div>
        </div>
    </div>
</div>`;
defaults.lightboxHTML = `<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>
    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>
    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>
</div>
</div>`;
/**
 * GLightbox Class
 * Class and public methods
 */ class GlightboxInit {
    constructor(options = {}){
        this.customOptions = options;
        this.settings = _helpersJs.extend(defaults, options);
        this.effectsClasses = this.getAnimationClasses();
        this.videoPlayers = {};
        this.apiEvents = [];
        this.fullElementsList = false;
    }
    init() {
        const selector = this.getSelector();
        if (selector) this.baseEvents = _helpersJs.addEvent("click", {
            onElement: selector,
            withCallback: (e, target)=>{
                e.preventDefault();
                this.open(target);
            }
        });
        this.elements = this.getElements();
    }
    open(element = null, startAt = null) {
        if (this.elements.length === 0) return false;
        this.activeSlide = null;
        this.prevActiveSlideIndex = null;
        this.prevActiveSlide = null;
        let index = _helpersJs.isNumber(startAt) ? startAt : this.settings.startAt;
        if (_helpersJs.isNode(element)) {
            const gallery = element.getAttribute("data-gallery");
            if (gallery) {
                this.fullElementsList = this.elements;
                this.elements = this.getGalleryElements(this.elements, gallery);
            }
            if (_helpersJs.isNil(index)) {
                // get the index of the element
                index = this.getElementIndex(element);
                if (index < 0) index = 0;
            }
        }
        if (!_helpersJs.isNumber(index)) index = 0;
        this.build();
        _helpersJs.animateElement(this.overlay, this.settings.openEffect === "none" ? "none" : this.settings.cssEfects.fade.in);
        const body = document.body;
        const scrollBar = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBar > 0) {
            var styleSheet = document.createElement("style");
            styleSheet.type = "text/css";
            styleSheet.className = "gcss-styles";
            styleSheet.innerText = `.gscrollbar-fixer {margin-right: ${scrollBar}px}`;
            document.head.appendChild(styleSheet);
            _helpersJs.addClass(body, "gscrollbar-fixer");
        }
        _helpersJs.addClass(body, "glightbox-open");
        _helpersJs.addClass(html, "glightbox-open");
        if (isMobile) {
            _helpersJs.addClass(document.body, "glightbox-mobile");
            this.settings.slideEffect = "slide";
        }
        this.showSlide(index, true);
        if (this.elements.length === 1) {
            _helpersJs.addClass(this.prevButton, "glightbox-button-hidden");
            _helpersJs.addClass(this.nextButton, "glightbox-button-hidden");
        } else {
            _helpersJs.removeClass(this.prevButton, "glightbox-button-hidden");
            _helpersJs.removeClass(this.nextButton, "glightbox-button-hidden");
        }
        this.lightboxOpen = true;
        this.trigger("open");
        // settings.onOpen is deprecated and will be removed in a future update
        if (_helpersJs.isFunction(this.settings.onOpen)) this.settings.onOpen();
        if (isTouch && this.settings.touchNavigation) (0, _touchNavigationJsDefault.default)(this);
        if (this.settings.keyboardNavigation) (0, _keyboardNavigationJsDefault.default)(this);
    }
    /**
     * Open at specific index
     * @param {int} index
     */ openAt(index = 0) {
        this.open(null, index);
    }
    /**
     * Set Slide
     */ showSlide(index = 0, first = false) {
        _helpersJs.show(this.loader);
        this.index = parseInt(index);
        let current = this.slidesContainer.querySelector(".current");
        if (current) _helpersJs.removeClass(current, "current");
        // hide prev slide
        this.slideAnimateOut();
        let slideNode = this.slidesContainer.querySelectorAll(".gslide")[index];
        // Check if slide's content is alreay loaded
        if (_helpersJs.hasClass(slideNode, "loaded")) {
            this.slideAnimateIn(slideNode, first);
            _helpersJs.hide(this.loader);
        } else {
            // If not loaded add the slide content
            _helpersJs.show(this.loader);
            const slide = this.elements[index];
            const slideData = {
                index: this.index,
                slide: slideNode,
                slideNode: slideNode,
                slideConfig: slide.slideConfig,
                slideIndex: this.index,
                trigger: slide.node,
                player: null
            };
            this.trigger("slide_before_load", slideData);
            slide.instance.setContent(slideNode, ()=>{
                _helpersJs.hide(this.loader);
                this.resize();
                this.slideAnimateIn(slideNode, first);
                this.trigger("slide_after_load", slideData);
            });
        }
        this.slideDescription = slideNode.querySelector(".gslide-description");
        this.slideDescriptionContained = this.slideDescription && _helpersJs.hasClass(this.slideDescription.parentNode, "gslide-media");
        // Preload subsequent slides
        if (this.settings.preload) {
            this.preloadSlide(index + 1);
            this.preloadSlide(index - 1);
        }
        // Handle navigation arrows
        this.updateNavigationClasses();
        this.activeSlide = slideNode;
    }
    /**
     * Preload slides
     * @param  {Int}  index slide index
     * @return {null}
     */ preloadSlide(index) {
        // Verify slide index, it can not be lower than 0
        // and it can not be greater than the total elements
        if (index < 0 || index > this.elements.length - 1) return false;
        if (_helpersJs.isNil(this.elements[index])) return false;
        let slideNode = this.slidesContainer.querySelectorAll(".gslide")[index];
        if (_helpersJs.hasClass(slideNode, "loaded")) return false;
        const slide = this.elements[index];
        const type = slide.type;
        const slideData = {
            index: index,
            slide: slideNode,
            slideNode: slideNode,
            slideConfig: slide.slideConfig,
            slideIndex: index,
            trigger: slide.node,
            player: null
        };
        this.trigger("slide_before_load", slideData);
        if (type === "video" || type === "external") setTimeout(()=>{
            slide.instance.setContent(slideNode, ()=>{
                this.trigger("slide_after_load", slideData);
            });
        }, 200);
        else slide.instance.setContent(slideNode, ()=>{
            this.trigger("slide_after_load", slideData);
        });
    }
    /**
     * Load previous slide
     * calls goToslide
     */ prevSlide() {
        this.goToSlide(this.index - 1);
    }
    /**
     * Load next slide
     * calls goToslide
     */ nextSlide() {
        this.goToSlide(this.index + 1);
    }
    /**
     * Go to sldei
     * calls set slide
     * @param {Int} - index
     */ goToSlide(index = false) {
        this.prevActiveSlide = this.activeSlide;
        this.prevActiveSlideIndex = this.index;
        if (!this.loop() && (index < 0 || index > this.elements.length - 1)) return false;
        if (index < 0) index = this.elements.length - 1;
        else if (index >= this.elements.length) index = 0;
        this.showSlide(index);
    }
    /**
     * Insert slide
     *
     * @param { object } data
     * @param { numeric } position
     */ insertSlide(config = {}, index = -1) {
        // Append at the end
        if (index < 0) index = this.elements.length;
        const slide = new (0, _slideJsDefault.default)(config, this, index);
        const data = slide.getConfig();
        const slideInfo = _helpersJs.extend({}, data);
        const newSlide = slide.create();
        const totalSlides = this.elements.length - 1;
        slideInfo.index = index;
        slideInfo.node = false;
        slideInfo.instance = slide;
        slideInfo.slideConfig = data;
        this.elements.splice(index, 0, slideInfo);
        let addedSlideNode = null;
        let addedSlidePlayer = null;
        if (this.slidesContainer) {
            // Append at the end
            if (index > totalSlides) this.slidesContainer.appendChild(newSlide);
            else {
                // A current slide must exist in the position specified
                // we need tp get that slide and insder the new slide before
                let existingSlide = this.slidesContainer.querySelectorAll(".gslide")[index];
                this.slidesContainer.insertBefore(newSlide, existingSlide);
            }
            if (this.settings.preload && this.index == 0 && index == 0 || this.index - 1 == index || this.index + 1 == index) this.preloadSlide(index);
            if (this.index === 0 && index === 0) this.index = 1;
            this.updateNavigationClasses();
            addedSlideNode = this.slidesContainer.querySelectorAll(".gslide")[index];
            addedSlidePlayer = this.getSlidePlayerInstance(index);
            slideInfo.slideNode = addedSlideNode;
        }
        this.trigger("slide_inserted", {
            index: index,
            slide: addedSlideNode,
            slideNode: addedSlideNode,
            slideConfig: data,
            slideIndex: index,
            trigger: null,
            player: addedSlidePlayer
        });
        // Deprecated and will be removed in a future update
        if (_helpersJs.isFunction(this.settings.slideInserted)) this.settings.slideInserted({
            index: index,
            slide: addedSlideNode,
            player: addedSlidePlayer
        });
    }
    /**
     * Remove slide
     *
     * @param { numeric } position
     */ removeSlide(index = -1) {
        if (index < 0 || index > this.elements.length - 1) return false;
        const slide = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[index];
        if (slide) {
            if (this.getActiveSlideIndex() == index) {
                if (index == this.elements.length - 1) this.prevSlide();
                else this.nextSlide();
            }
            slide.parentNode.removeChild(slide);
        }
        this.elements.splice(index, 1);
        this.trigger("slide_removed", index);
        // Deprecated and will be removed in a future update
        if (_helpersJs.isFunction(this.settings.slideRemoved)) this.settings.slideRemoved(index);
    }
    /**
     * Slide In
     * @return {null}
     */ slideAnimateIn(slide, first) {
        let slideMedia = slide.querySelector(".gslide-media");
        let slideDesc = slide.querySelector(".gslide-description");
        let prevData = {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            slideNode: this.prevActiveSlide,
            slideIndex: this.prevActiveSlide,
            slideConfig: _helpersJs.isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
            trigger: _helpersJs.isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
        };
        let nextData = {
            index: this.index,
            slide: this.activeSlide,
            slideNode: this.activeSlide,
            slideConfig: this.elements[this.index].slideConfig,
            slideIndex: this.index,
            trigger: this.elements[this.index].node,
            player: this.getSlidePlayerInstance(this.index)
        };
        if (slideMedia.offsetWidth > 0 && slideDesc) {
            _helpersJs.hide(slideDesc);
            slideDesc.style.display = "";
        }
        _helpersJs.removeClass(slide, this.effectsClasses);
        if (first) _helpersJs.animateElement(slide, this.settings.cssEfects[this.settings.openEffect].in, ()=>{
            if (this.settings.autoplayVideos) this.slidePlayerPlay(slide);
            this.trigger("slide_changed", {
                prev: prevData,
                current: nextData
            });
            // settings.afterSlideChange is deprecated and will be removed in a future update
            if (_helpersJs.isFunction(this.settings.afterSlideChange)) this.settings.afterSlideChange.apply(this, [
                prevData,
                nextData
            ]);
        });
        else {
            let effectName = this.settings.slideEffect;
            let animIn = effectName !== "none" ? this.settings.cssEfects[effectName].in : effectName;
            if (this.prevActiveSlideIndex > this.index) {
                if (this.settings.slideEffect == "slide") animIn = this.settings.cssEfects.slideBack.in;
            }
            _helpersJs.animateElement(slide, animIn, ()=>{
                if (this.settings.autoplayVideos) this.slidePlayerPlay(slide);
                this.trigger("slide_changed", {
                    prev: prevData,
                    current: nextData
                });
                // settings.afterSlideChange is deprecated and will be removed in a future update
                if (_helpersJs.isFunction(this.settings.afterSlideChange)) this.settings.afterSlideChange.apply(this, [
                    prevData,
                    nextData
                ]);
            });
        }
        setTimeout(()=>{
            this.resize(slide);
        }, 100);
        _helpersJs.addClass(slide, "current");
    }
    /**
     * Slide out
     */ slideAnimateOut() {
        if (!this.prevActiveSlide) return false;
        let prevSlide = this.prevActiveSlide;
        _helpersJs.removeClass(prevSlide, this.effectsClasses);
        _helpersJs.addClass(prevSlide, "prev");
        let animation = this.settings.slideEffect;
        let animOut = animation !== "none" ? this.settings.cssEfects[animation].out : animation;
        this.slidePlayerPause(prevSlide);
        this.trigger("slide_before_change", {
            prev: {
                index: this.prevActiveSlideIndex,
                slide: this.prevActiveSlide,
                slideNode: this.prevActiveSlide,
                slideIndex: this.prevActiveSlideIndex,
                slideConfig: _helpersJs.isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                trigger: _helpersJs.isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            },
            current: {
                index: this.index,
                slide: this.activeSlide,
                slideNode: this.activeSlide,
                slideIndex: this.index,
                slideConfig: this.elements[this.index].slideConfig,
                trigger: this.elements[this.index].node,
                player: this.getSlidePlayerInstance(this.index)
            }
        });
        // settings.beforeSlideChange is deprecated and will be removed in a future update
        if (_helpersJs.isFunction(this.settings.beforeSlideChange)) this.settings.beforeSlideChange.apply(this, [
            {
                index: this.prevActiveSlideIndex,
                slide: this.prevActiveSlide,
                player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            },
            {
                index: this.index,
                slide: this.activeSlide,
                player: this.getSlidePlayerInstance(this.index)
            }
        ]);
        if (this.prevActiveSlideIndex > this.index && this.settings.slideEffect == "slide") // going back
        animOut = this.settings.cssEfects.slideBack.out;
        _helpersJs.animateElement(prevSlide, animOut, ()=>{
            let container = prevSlide.querySelector(".ginner-container");
            let media = prevSlide.querySelector(".gslide-media");
            let desc = prevSlide.querySelector(".gslide-description");
            container.style.transform = "";
            media.style.transform = "";
            _helpersJs.removeClass(media, "greset");
            media.style.opacity = "";
            if (desc) desc.style.opacity = "";
            _helpersJs.removeClass(prevSlide, "prev");
        });
    }
    /**
     * Get all defined players
     */ getAllPlayers() {
        return this.videoPlayers;
    }
    /**
     * Get player at index
     *
     * @param index
     * @return bool|object
     */ getSlidePlayerInstance(index) {
        const id = "gvideo" + index;
        const videoPlayers = this.getAllPlayers();
        if (_helpersJs.has(videoPlayers, id) && videoPlayers[id]) return videoPlayers[id];
        return false;
    }
    /**
     * Stop video at specified
     * node or index
     *
     * @param slide node or index
     * @return void
     */ stopSlideVideo(slide) {
        if (_helpersJs.isNode(slide)) {
            let node = slide.querySelector(".gvideo-wrapper");
            if (node) slide = node.getAttribute("data-index");
        }
        console.log("stopSlideVideo is deprecated, use slidePlayerPause");
        const player = this.getSlidePlayerInstance(slide);
        if (player && player.playing) player.pause();
    }
    /**
     * Stop player at specified index
     *
     * @param slide node or index
     * @return void
     */ slidePlayerPause(slide) {
        if (_helpersJs.isNode(slide)) {
            let node = slide.querySelector(".gvideo-wrapper");
            if (node) slide = node.getAttribute("data-index");
        }
        const player = this.getSlidePlayerInstance(slide);
        if (player && player.playing) player.pause();
    }
    /**
     * Play video at specified
     * node or index
     *
     * @param slide node or index
     * @return void
     */ playSlideVideo(slide) {
        if (_helpersJs.isNode(slide)) {
            let node = slide.querySelector(".gvideo-wrapper");
            if (node) slide = node.getAttribute("data-index");
        }
        console.log("playSlideVideo is deprecated, use slidePlayerPlay");
        const player = this.getSlidePlayerInstance(slide);
        if (player && !player.playing) player.play();
    }
    /**
     * Play media player at specified
     * node or index
     *
     * @param slide node or index
     * @return void
     */ slidePlayerPlay(slide) {
        // Do not autoplay on mobile
        // plyr does not handle well the errors
        // and the player becomes unplayable
        if (isMobile && !this.settings.plyr.config?.muted) return;
        if (_helpersJs.isNode(slide)) {
            let node = slide.querySelector(".gvideo-wrapper");
            if (node) slide = node.getAttribute("data-index");
        }
        const player = this.getSlidePlayerInstance(slide);
        if (player && !player.playing) {
            player.play();
            if (this.settings.autofocusVideos) player.elements.container.focus();
        }
    }
    /**
     * Set the entire elements
     * in the gallery, it replaces all
     * the existing elements
     * with the specified list
     *
     * @param {array}  elements
     */ setElements(elements) {
        this.settings.elements = false;
        const newElements = [];
        if (elements && elements.length) _helpersJs.each(elements, (el, i)=>{
            const slide = new (0, _slideJsDefault.default)(el, this, i);
            const data = slide.getConfig();
            const slideInfo = _helpersJs.extend({}, data);
            slideInfo.slideConfig = data;
            slideInfo.instance = slide;
            slideInfo.index = i;
            newElements.push(slideInfo);
        });
        this.elements = newElements;
        if (this.lightboxOpen) {
            this.slidesContainer.innerHTML = "";
            if (this.elements.length) {
                _helpersJs.each(this.elements, ()=>{
                    let slide = _helpersJs.createHTML(this.settings.slideHTML);
                    this.slidesContainer.appendChild(slide);
                });
                this.showSlide(0, true);
            }
        }
    }
    /**
     * Return the index
     * of the specified node,
     * this node is for example an image, link, etc.
     * that when clicked it opens the lightbox
     * its position in the elements array can change
     * when using insertSlide or removeSlide so we
     * need to find it in the elements list
     *
     * @param {node} node
     * @return bool|int
     */ getElementIndex(node) {
        let index = false;
        _helpersJs.each(this.elements, (el, i)=>{
            if (_helpersJs.has(el, "node") && el.node == node) {
                index = i;
                return true; // exit loop
            }
        });
        return index;
    }
    /**
     * Get elements
     * returns an array containing all
     * the elements that must be displayed in the
     * lightbox
     *
     * @return { array }
     */ getElements() {
        let list = [];
        this.elements = this.elements ? this.elements : [];
        if (!_helpersJs.isNil(this.settings.elements) && _helpersJs.isArray(this.settings.elements) && this.settings.elements.length) _helpersJs.each(this.settings.elements, (el, i)=>{
            const slide = new (0, _slideJsDefault.default)(el, this, i);
            const elData = slide.getConfig();
            const slideInfo = _helpersJs.extend({}, elData);
            slideInfo.node = false;
            slideInfo.index = i;
            slideInfo.instance = slide;
            slideInfo.slideConfig = elData;
            list.push(slideInfo);
        });
        let nodes = false;
        let selector = this.getSelector();
        if (selector) nodes = document.querySelectorAll(this.getSelector());
        if (!nodes) return list;
        _helpersJs.each(nodes, (el, i)=>{
            const slide = new (0, _slideJsDefault.default)(el, this, i);
            const elData = slide.getConfig();
            const slideInfo = _helpersJs.extend({}, elData);
            slideInfo.node = el;
            slideInfo.index = i;
            slideInfo.instance = slide;
            slideInfo.slideConfig = elData;
            slideInfo.gallery = el.getAttribute("data-gallery");
            list.push(slideInfo);
        });
        return list;
    }
    /**
     * Return only the elements
     * from a specific gallery
     *
     * @return array
     */ getGalleryElements(list, gallery) {
        return list.filter((el)=>{
            return el.gallery == gallery;
        });
    }
    /**
     * Get selector
     */ getSelector() {
        if (this.settings.elements) return false;
        if (this.settings.selector && this.settings.selector.substring(0, 5) == "data-") return `*[${this.settings.selector}]`;
        return this.settings.selector;
    }
    /**
     * Get the active slide
     */ getActiveSlide() {
        return this.slidesContainer.querySelectorAll(".gslide")[this.index];
    }
    /**
     * Get the active index
     */ getActiveSlideIndex() {
        return this.index;
    }
    /**
     * Get the defined
     * effects as string
     */ getAnimationClasses() {
        let effects = [];
        for(let key in this.settings.cssEfects)if (this.settings.cssEfects.hasOwnProperty(key)) {
            let effect = this.settings.cssEfects[key];
            effects.push(`g${effect.in}`);
            effects.push(`g${effect.out}`);
        }
        return effects.join(" ");
    }
    /**
     * Build the structure
     * @return {null}
     */ build() {
        if (this.built) return false;
        // TODO: :scope is not supported on IE or first Edge. so we'll
        // update this when IE support is removed to use newer code
        //const children = document.body.querySelectorAll(':scope > *');
        const children = document.body.childNodes;
        const bodyChildElms = [];
        _helpersJs.each(children, (el)=>{
            if (el.parentNode == document.body && el.nodeName.charAt(0) !== "#" && el.hasAttribute && !el.hasAttribute("aria-hidden")) {
                bodyChildElms.push(el);
                el.setAttribute("aria-hidden", "true");
            }
        });
        const nextSVG = _helpersJs.has(this.settings.svg, "next") ? this.settings.svg.next : "";
        const prevSVG = _helpersJs.has(this.settings.svg, "prev") ? this.settings.svg.prev : "";
        const closeSVG = _helpersJs.has(this.settings.svg, "close") ? this.settings.svg.close : "";
        let lightboxHTML = this.settings.lightboxHTML;
        lightboxHTML = lightboxHTML.replace(/{nextSVG}/g, nextSVG);
        lightboxHTML = lightboxHTML.replace(/{prevSVG}/g, prevSVG);
        lightboxHTML = lightboxHTML.replace(/{closeSVG}/g, closeSVG);
        lightboxHTML = _helpersJs.createHTML(lightboxHTML);
        document.body.appendChild(lightboxHTML);
        const modal = document.getElementById("glightbox-body");
        this.modal = modal;
        let closeButton = modal.querySelector(".gclose");
        this.prevButton = modal.querySelector(".gprev");
        this.nextButton = modal.querySelector(".gnext");
        this.overlay = modal.querySelector(".goverlay");
        this.loader = modal.querySelector(".gloader");
        this.slidesContainer = document.getElementById("glightbox-slider");
        this.bodyHiddenChildElms = bodyChildElms;
        this.events = {};
        _helpersJs.addClass(this.modal, "glightbox-" + this.settings.skin);
        if (this.settings.closeButton && closeButton) this.events["close"] = _helpersJs.addEvent("click", {
            onElement: closeButton,
            withCallback: (e, target)=>{
                e.preventDefault();
                this.close();
            }
        });
        if (closeButton && !this.settings.closeButton) closeButton.parentNode.removeChild(closeButton);
        if (this.nextButton) this.events["next"] = _helpersJs.addEvent("click", {
            onElement: this.nextButton,
            withCallback: (e, target)=>{
                e.preventDefault();
                this.nextSlide();
            }
        });
        if (this.prevButton) this.events["prev"] = _helpersJs.addEvent("click", {
            onElement: this.prevButton,
            withCallback: (e, target)=>{
                e.preventDefault();
                this.prevSlide();
            }
        });
        if (this.settings.closeOnOutsideClick) this.events["outClose"] = _helpersJs.addEvent("click", {
            onElement: modal,
            withCallback: (e, target)=>{
                if (!this.preventOutsideClick && !_helpersJs.hasClass(document.body, "glightbox-mobile") && !_helpersJs.closest(e.target, ".ginner-container")) {
                    if (!_helpersJs.closest(e.target, ".gbtn") && !_helpersJs.hasClass(e.target, "gnext") && !_helpersJs.hasClass(e.target, "gprev")) this.close();
                }
            }
        });
        _helpersJs.each(this.elements, (slide, i)=>{
            this.slidesContainer.appendChild(slide.instance.create());
            slide.slideNode = this.slidesContainer.querySelectorAll(".gslide")[i];
        });
        if (isTouch) _helpersJs.addClass(document.body, "glightbox-touch");
        this.events["resize"] = _helpersJs.addEvent("resize", {
            onElement: window,
            withCallback: ()=>{
                this.resize();
            }
        });
        this.built = true;
    }
    /**
     * Handle resize
     * Create only to handle
     * when the height of the screen
     * is lower than the slide content
     * this helps to resize videos vertically
     * and images with description
     */ resize(slide = null) {
        slide = !slide ? this.activeSlide : slide;
        if (!slide || _helpersJs.hasClass(slide, "zoomed")) return;
        const winSize = _helpersJs.windowSize();
        const video = slide.querySelector(".gvideo-wrapper");
        const image = slide.querySelector(".gslide-image");
        const description = this.slideDescription;
        let winWidth = winSize.width;
        let winHeight = winSize.height;
        if (winWidth <= 768) _helpersJs.addClass(document.body, "glightbox-mobile");
        else _helpersJs.removeClass(document.body, "glightbox-mobile");
        if (!video && !image) return;
        let descriptionResize = false;
        if (description && (_helpersJs.hasClass(description, "description-bottom") || _helpersJs.hasClass(description, "description-top")) && !_helpersJs.hasClass(description, "gabsolute")) descriptionResize = true;
        if (image) {
            if (winWidth <= 768) {
                let imgNode = image.querySelector("img");
            //imgNode.setAttribute('style', '');
            } else if (descriptionResize) {
                let descHeight = description.offsetHeight;
                let imgNode = image.querySelector("img");
                // if a slide height is set via data-height, we want to use that
                // if not, we fall back to 100vh
                const slideTriggerNode = this.elements[this.index].node;
                const maxHeightValue = slideTriggerNode.getAttribute("data-height") ?? "100vh";
                imgNode.setAttribute("style", `max-height: calc(${maxHeightValue} - ${descHeight}px)`);
                description.setAttribute("style", `max-width: ${imgNode.offsetWidth}px;`);
            }
        }
        if (video) {
            let ratio = _helpersJs.has(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
            if (!ratio) {
                // If no ratio passed, calculate it using the video width and height
                // generated by Plyr
                const containerWidth = video.clientWidth;
                const containerHeight = video.clientHeight;
                const divisor = containerWidth / containerHeight;
                ratio = `${containerWidth / divisor}:${containerHeight / divisor}`;
            }
            let videoRatio = ratio.split(":");
            let videoWidth = this.settings.videosWidth;
            let maxWidth = this.settings.videosWidth;
            if (_helpersJs.isNumber(videoWidth) || videoWidth.indexOf("px") !== -1) maxWidth = parseInt(videoWidth);
            else {
                // If video size is vw, vh or % convert it to pixels,
                // fallback to the current video size
                if (videoWidth.indexOf("vw") !== -1) maxWidth = winWidth * parseInt(videoWidth) / 100;
                else if (videoWidth.indexOf("vh") !== -1) maxWidth = winHeight * parseInt(videoWidth) / 100;
                else if (videoWidth.indexOf("%") !== -1) maxWidth = winWidth * parseInt(videoWidth) / 100;
                else maxWidth = parseInt(video.clientWidth);
            }
            let maxHeight = maxWidth / (parseInt(videoRatio[0]) / parseInt(videoRatio[1]));
            maxHeight = Math.floor(maxHeight);
            if (descriptionResize) winHeight = winHeight - description.offsetHeight;
            if (maxWidth > winWidth || maxHeight > winHeight || winHeight < maxHeight && winWidth > maxWidth) {
                let vwidth = video.offsetWidth;
                let vheight = video.offsetHeight;
                let ratio = winHeight / vheight;
                let vsize = {
                    width: vwidth * ratio,
                    height: vheight * ratio
                };
                video.parentNode.setAttribute("style", `max-width: ${vsize.width}px`);
                if (descriptionResize) description.setAttribute("style", `max-width: ${vsize.width}px;`);
            } else {
                video.parentNode.style.maxWidth = `${videoWidth}`;
                if (descriptionResize) description.setAttribute("style", `max-width: ${videoWidth};`);
            }
        }
    }
    /**
     * Reload Lightbox
     * reload and apply events to nodes
     */ reload() {
        this.init();
    }
    /**
     * Update navigation classes on slide change
     */ updateNavigationClasses() {
        const loop = this.loop();
        // Handle navigation arrows
        _helpersJs.removeClass(this.nextButton, "disabled");
        _helpersJs.removeClass(this.prevButton, "disabled");
        if (this.index == 0 && this.elements.length - 1 == 0) {
            _helpersJs.addClass(this.prevButton, "disabled");
            _helpersJs.addClass(this.nextButton, "disabled");
        } else if (this.index === 0 && !loop) _helpersJs.addClass(this.prevButton, "disabled");
        else if (this.index === this.elements.length - 1 && !loop) _helpersJs.addClass(this.nextButton, "disabled");
    }
    /**
     * Handle loop config
     */ loop() {
        let loop = _helpersJs.has(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
        loop = _helpersJs.has(this.settings, "loop") ? this.settings.loop : loop;
        return loop;
    }
    /**
     * Close Lightbox
     * closes the lightbox and removes the slides
     * and some classes
     */ close() {
        if (!this.lightboxOpen) {
            if (this.events) {
                for(let key in this.events)if (this.events.hasOwnProperty(key)) this.events[key].destroy();
                this.events = null;
            }
            return false;
        }
        if (this.closing) return false;
        this.closing = true;
        this.slidePlayerPause(this.activeSlide);
        if (this.fullElementsList) this.elements = this.fullElementsList;
        if (this.bodyHiddenChildElms.length) _helpersJs.each(this.bodyHiddenChildElms, (el)=>{
            el.removeAttribute("aria-hidden");
        });
        _helpersJs.addClass(this.modal, "glightbox-closing");
        _helpersJs.animateElement(this.overlay, this.settings.openEffect == "none" ? "none" : this.settings.cssEfects.fade.out);
        _helpersJs.animateElement(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, ()=>{
            this.activeSlide = null;
            this.prevActiveSlideIndex = null;
            this.prevActiveSlide = null;
            this.built = false;
            if (this.events) {
                for(let key in this.events)if (this.events.hasOwnProperty(key)) this.events[key].destroy();
                this.events = null;
            }
            const body = document.body;
            _helpersJs.removeClass(html, "glightbox-open");
            _helpersJs.removeClass(body, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer");
            this.modal.parentNode.removeChild(this.modal);
            this.trigger("close");
            // settings.onClose is deprecated and will be removed in a future update
            if (_helpersJs.isFunction(this.settings.onClose)) this.settings.onClose();
            const styles = document.querySelector(".gcss-styles");
            if (styles) styles.parentNode.removeChild(styles);
            this.lightboxOpen = false;
            this.closing = null;
        });
    }
    /**
     * Destroy lightbox
     * and all events
     */ destroy() {
        this.close();
        this.clearAllEvents();
        if (this.baseEvents) this.baseEvents.destroy();
    }
    /**
     * Set event
     */ on(evt, callback, once = false) {
        if (!evt || !_helpersJs.isFunction(callback)) throw new TypeError("Event name and callback must be defined");
        this.apiEvents.push({
            evt,
            once,
            callback
        });
    }
    /**
     * Set event
     */ once(evt, callback) {
        this.on(evt, callback, true);
    }
    /**
     * Triggers an specific event
     * with data
     *
     * @param string eventName
     */ trigger(eventName, data = null) {
        const onceTriggered = [];
        _helpersJs.each(this.apiEvents, (event, i)=>{
            const { evt, once, callback } = event;
            if (evt == eventName) {
                callback(data);
                if (once) onceTriggered.push(i);
            }
        });
        if (onceTriggered.length) _helpersJs.each(onceTriggered, (i)=>this.apiEvents.splice(i, 1));
    }
    /**
     * Removes all events
     * set using the API
     */ clearAllEvents() {
        this.apiEvents.splice(0, this.apiEvents.length);
    }
    /**
     * Get Version
     */ version() {
        return version;
    }
}

},{"./core/keyboard-navigation.js":"PneWU","./core/slide.js":"cwDCV","./core/touch-navigation.js":"7eTrP","./utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"PneWU":[function(require,module,exports) {
/**
 * Keyboard Navigation
 * Allow navigation using the keyboard
 *
 * @param {object} instance
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>keyboardNavigation);
var _helpersJs = require("../utils/helpers.js");
function getNextFocusElement(current = -1) {
    const btns = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
    if (!btns.length) return false;
    if (btns.length == 1) return btns[0];
    if (typeof current == "string") current = parseInt(current);
    const orders = [];
    (0, _helpersJs.each)(btns, (btn)=>{
        orders.push(btn.getAttribute("data-taborder"));
    });
    const highestOrder = Math.max.apply(Math, orders.map((order)=>parseInt(order)));
    let newIndex = current < 0 ? 1 : current + 1;
    if (newIndex > highestOrder) newIndex = "1";
    const nextOrders = orders.filter((el)=>el >= parseInt(newIndex));
    const nextFocus = nextOrders.sort()[0];
    return document.querySelector(`.gbtn[data-taborder="${nextFocus}"]`);
}
function keyboardNavigation(instance) {
    if (instance.events.hasOwnProperty("keyboard")) return false;
    instance.events["keyboard"] = (0, _helpersJs.addEvent)("keydown", {
        onElement: window,
        withCallback: (event, target)=>{
            event = event || window.event;
            const key = event.keyCode;
            if (key == 9) {
                //prettier-ignore
                const focusedButton = document.querySelector(".gbtn.focused");
                if (!focusedButton) {
                    const activeElement = document.activeElement && document.activeElement.nodeName ? document.activeElement.nodeName.toLocaleLowerCase() : false;
                    if (activeElement == "input" || activeElement == "textarea" || activeElement == "button") return;
                }
                event.preventDefault();
                const btns = document.querySelectorAll(".gbtn[data-taborder]");
                if (!btns || btns.length <= 0) return;
                if (!focusedButton) {
                    const first = getNextFocusElement();
                    if (first) {
                        first.focus();
                        (0, _helpersJs.addClass)(first, "focused");
                    }
                    return;
                }
                let currentFocusOrder = focusedButton.getAttribute("data-taborder");
                let nextFocus = getNextFocusElement(currentFocusOrder);
                (0, _helpersJs.removeClass)(focusedButton, "focused");
                if (nextFocus) {
                    nextFocus.focus();
                    (0, _helpersJs.addClass)(nextFocus, "focused");
                }
            }
            if (key == 39) instance.nextSlide();
            if (key == 37) instance.prevSlide();
            if (key == 27) instance.close();
        }
    });
}

},{"../utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jaRSI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Merge two or more objects
 */ parcelHelpers.export(exports, "extend", ()=>extend);
/**
 * Each
 *
 * @param {mixed} node list, array, object
 * @param {function} callback
 */ parcelHelpers.export(exports, "each", ()=>each);
/**
 * Get nde events
 * return node events and optionally
 * check if the node has already a specific event
 * to avoid duplicated callbacks
 *
 * @param {node} node
 * @param {string} name event name
 * @param {object} fn callback
 * @returns {object}
 */ parcelHelpers.export(exports, "getNodeEvents", ()=>getNodeEvents);
/**
 * Add Event
 * Add an event listener
 *
 * @param {string} eventName
 * @param {object} detials
 */ parcelHelpers.export(exports, "addEvent", ()=>addEvent);
/**
 * Add element class
 *
 * @param {node} element
 * @param {string} class name
 */ parcelHelpers.export(exports, "addClass", ()=>addClass);
/**
 * Remove element class
 *
 * @param {node} element
 * @param {string} class name
 */ parcelHelpers.export(exports, "removeClass", ()=>removeClass);
/**
 * Has class
 *
 * @param {node} element
 * @param {string} class name
 */ parcelHelpers.export(exports, "hasClass", ()=>hasClass);
/**
 * Get the closestElement
 *
 * @param {node} element
 * @param {string} class name
 */ parcelHelpers.export(exports, "closest", ()=>closest);
/**
 * CSS Animations
 *
 * @param {node} element
 * @param {string} animation name
 * @param {function} callback
 */ parcelHelpers.export(exports, "animateElement", ()=>animateElement);
parcelHelpers.export(exports, "cssTransform", ()=>cssTransform);
/**
 * Show element
 *
 * @param {node} element
 */ parcelHelpers.export(exports, "show", ()=>show);
/**
 * Hide element
 */ parcelHelpers.export(exports, "hide", ()=>hide);
/**
 * Create a document fragment
 *
 * @param {string} html code
 */ parcelHelpers.export(exports, "createHTML", ()=>createHTML);
/**
 * Return screen size
 * return the current screen dimensions
 *
 * @returns {object}
 */ parcelHelpers.export(exports, "windowSize", ()=>windowSize);
/**
 * Determine animation events
 */ parcelHelpers.export(exports, "whichAnimationEvent", ()=>whichAnimationEvent);
/**
 * Determine transition events
 */ parcelHelpers.export(exports, "whichTransitionEvent", ()=>whichTransitionEvent);
/**
 * Create an iframe element
 *
 * @param {string} url
 * @param {numeric} width
 * @param {numeric} height
 * @param {function} callback
 */ parcelHelpers.export(exports, "createIframe", ()=>createIframe);
/**
 * Wait until
 * wait until all the validations
 * are passed
 *
 * @param {function} check
 * @param {function} onComplete
 * @param {numeric} delay
 * @param {numeric} timeout
 */ parcelHelpers.export(exports, "waitUntil", ()=>waitUntil);
/**
 * Inject videos api
 * used for video player
 *
 * @param {string} url
 * @param {function} callback
 */ parcelHelpers.export(exports, "injectAssets", ()=>injectAssets);
parcelHelpers.export(exports, "isMobile", ()=>isMobile);
parcelHelpers.export(exports, "isTouch", ()=>isTouch);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isNode", ()=>isNode);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isNil", ()=>isNil);
parcelHelpers.export(exports, "has", ()=>has);
parcelHelpers.export(exports, "size", ()=>size);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
const uid = Date.now();
function extend() {
    let extended = {};
    let deep = true;
    let i = 0;
    let length = arguments.length;
    if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
        deep = arguments[0];
        i++;
    }
    let merge = (obj)=>{
        for(let prop in obj)if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") extended[prop] = extend(true, extended[prop], obj[prop]);
            else extended[prop] = obj[prop];
        }
    };
    for(; i < length; i++){
        let obj = arguments[i];
        merge(obj);
    }
    return extended;
}
function each(collection, callback) {
    if (isNode(collection) || collection === window || collection === document) collection = [
        collection
    ];
    if (!isArrayLike(collection) && !isObject(collection)) collection = [
        collection
    ];
    if (size(collection) == 0) return;
    if (isArrayLike(collection) && !isObject(collection)) {
        let l = collection.length, i = 0;
        for(; i < l; i++){
            if (callback.call(collection[i], collection[i], i, collection) === false) break;
        }
    } else if (isObject(collection)) {
        for(let key in collection)if (has(collection, key)) {
            if (callback.call(collection[key], collection[key], key, collection) === false) break;
        }
    }
}
function getNodeEvents(node, name = null, fn = null) {
    const cache = node[uid] = node[uid] || [];
    const data = {
        all: cache,
        evt: null,
        found: null
    };
    if (name && fn && size(cache) > 0) each(cache, (cl, i)=>{
        if (cl.eventName == name && cl.fn.toString() == fn.toString()) {
            data.found = true;
            data.evt = i;
            return false;
        }
    });
    return data;
}
function addEvent(eventName, { onElement, withCallback, avoidDuplicate = true, once = false, useCapture = false } = {}, thisArg) {
    let element = onElement || [];
    if (isString(element)) element = document.querySelectorAll(element);
    function handler(event) {
        if (isFunction(withCallback)) withCallback.call(thisArg, event, this);
        if (once) handler.destroy();
    }
    handler.destroy = function() {
        each(element, (el)=>{
            const events = getNodeEvents(el, eventName, handler);
            if (events.found) events.all.splice(events.evt, 1);
            if (el.removeEventListener) el.removeEventListener(eventName, handler, useCapture);
        });
    };
    each(element, (el)=>{
        const events = getNodeEvents(el, eventName, handler);
        if (el.addEventListener && avoidDuplicate && !events.found || !avoidDuplicate) {
            el.addEventListener(eventName, handler, useCapture);
            events.all.push({
                eventName: eventName,
                fn: handler
            });
        }
    });
    return handler;
}
function addClass(node, name) {
    each(name.split(" "), (cl)=>node.classList.add(cl));
}
function removeClass(node, name) {
    each(name.split(" "), (cl)=>node.classList.remove(cl));
}
function hasClass(node, name) {
    return node.classList.contains(name);
}
function closest(elem, selector) {
    while(elem !== document.body){
        elem = elem.parentElement;
        if (!elem) return false;
        const matches = typeof elem.matches == "function" ? elem.matches(selector) : elem.msMatchesSelector(selector);
        if (matches) return elem;
    }
}
function animateElement(element, animation = "", callback = false) {
    if (!element || animation === "") return false;
    if (animation === "none") {
        if (isFunction(callback)) callback();
        return false;
    }
    const animationEnd = whichAnimationEvent();
    const animationNames = animation.split(" ");
    each(animationNames, (name)=>{
        addClass(element, "g" + name);
    });
    addEvent(animationEnd, {
        onElement: element,
        avoidDuplicate: false,
        once: true,
        withCallback: (event, target)=>{
            each(animationNames, (name)=>{
                removeClass(target, "g" + name);
            });
            if (isFunction(callback)) callback();
        }
    });
}
function cssTransform(node, translate = "") {
    if (translate === "") {
        node.style.webkitTransform = "";
        node.style.MozTransform = "";
        node.style.msTransform = "";
        node.style.OTransform = "";
        node.style.transform = "";
        return false;
    }
    node.style.webkitTransform = translate;
    node.style.MozTransform = translate;
    node.style.msTransform = translate;
    node.style.OTransform = translate;
    node.style.transform = translate;
}
function show(element) {
    element.style.display = "block";
}
function hide(element) {
    element.style.display = "none";
}
function createHTML(htmlStr) {
    let frag = document.createDocumentFragment(), temp = document.createElement("div");
    temp.innerHTML = htmlStr;
    while(temp.firstChild)frag.appendChild(temp.firstChild);
    return frag;
}
function windowSize() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
}
function whichAnimationEvent() {
    let t, el = document.createElement("fakeelement");
    let animations = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "animationend",
        WebkitAnimation: "webkitAnimationEnd"
    };
    for(t in animations){
        if (el.style[t] !== undefined) return animations[t];
    }
}
function whichTransitionEvent() {
    let t, el = document.createElement("fakeelement");
    const transitions = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
    };
    for(t in transitions){
        if (el.style[t] !== undefined) return transitions[t];
    }
}
function createIframe(config) {
    let { url, allow, callback, appendTo } = config;
    let iframe = document.createElement("iframe");
    iframe.className = "vimeo-video gvideo";
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    if (allow) iframe.setAttribute("allow", allow);
    iframe.onload = function() {
        iframe.onload = null;
        addClass(iframe, "node-ready");
        if (isFunction(callback)) callback();
    };
    if (appendTo) appendTo.appendChild(iframe);
    return iframe;
}
function waitUntil(check, onComplete, delay, timeout) {
    if (check()) {
        onComplete();
        return;
    }
    if (!delay) delay = 100;
    let timeoutPointer;
    let intervalPointer = setInterval(()=>{
        if (!check()) return;
        clearInterval(intervalPointer);
        if (timeoutPointer) clearTimeout(timeoutPointer);
        onComplete();
    }, delay);
    if (timeout) timeoutPointer = setTimeout(()=>{
        clearInterval(intervalPointer);
    }, timeout);
}
function injectAssets(url, waitFor, callback) {
    if (isNil(url)) {
        console.error("Inject assets error");
        return;
    }
    if (isFunction(waitFor)) {
        callback = waitFor;
        waitFor = false;
    }
    if (isString(waitFor) && waitFor in window) {
        if (isFunction(callback)) callback();
        return;
    }
    let found;
    if (url.indexOf(".css") !== -1) {
        found = document.querySelectorAll('link[href="' + url + '"]');
        if (found && found.length > 0) {
            if (isFunction(callback)) callback();
            return;
        }
        const head = document.getElementsByTagName("head")[0];
        const headStyles = head.querySelectorAll('link[rel="stylesheet"]');
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        link.media = "all";
        if (headStyles) head.insertBefore(link, headStyles[0]);
        else head.appendChild(link);
        if (isFunction(callback)) callback();
        return;
    }
    found = document.querySelectorAll('script[src="' + url + '"]');
    if (found && found.length > 0) {
        if (isFunction(callback)) {
            if (isString(waitFor)) {
                waitUntil(()=>{
                    return typeof window[waitFor] !== "undefined";
                }, ()=>{
                    callback();
                });
                return false;
            }
            callback();
        }
        return;
    }
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = ()=>{
        if (isFunction(callback)) {
            if (isString(waitFor)) {
                waitUntil(()=>{
                    return typeof window[waitFor] !== "undefined";
                }, ()=>{
                    callback();
                });
                return false;
            }
            callback();
        }
    };
    document.body.appendChild(script);
}
function isMobile() {
    return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
}
function isTouch() {
    return isMobile() !== null || document.createTouch !== undefined || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints;
}
function isFunction(f) {
    return typeof f === "function";
}
function isString(s) {
    return typeof s === "string";
}
function isNode(el) {
    return !!(el && el.nodeType && el.nodeType == 1);
}
function isArray(ar) {
    return Array.isArray(ar);
}
function isArrayLike(ar) {
    return ar && ar.length && isFinite(ar.length);
}
function isObject(o) {
    let type = typeof o;
    return type === "object" && o != null && !isFunction(o) && !isArray(o);
}
function isNil(o) {
    return o == null;
}
function has(obj, key) {
    return obj !== null && hasOwnProperty.call(obj, key);
}
function size(o) {
    if (isObject(o)) {
        if (o.keys) return o.keys().length;
        let l = 0;
        for(let k in o)if (has(o, k)) l++;
        return l;
    } else return o.length;
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cwDCV":[function(require,module,exports) {
/**
 * Slide
 * class to hablde slide creation
 * and config parser
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _dragJs = require("./drag.js");
var _dragJsDefault = parcelHelpers.interopDefault(_dragJs);
var _imageJs = require("../slides/image.js");
var _imageJsDefault = parcelHelpers.interopDefault(_imageJs);
var _videoJs = require("../slides/video.js");
var _videoJsDefault = parcelHelpers.interopDefault(_videoJs);
var _inlineJs = require("../slides/inline.js");
var _inlineJsDefault = parcelHelpers.interopDefault(_inlineJs);
var _iframeJs = require("../slides/iframe.js");
var _iframeJsDefault = parcelHelpers.interopDefault(_iframeJs);
var _slideParserJs = require("./slide-parser.js");
var _slideParserJsDefault = parcelHelpers.interopDefault(_slideParserJs);
var _helpersJs = require("../utils/helpers.js");
class Slide {
    constructor(el, instance, index){
        this.element = el;
        this.instance = instance;
        this.index = index;
    }
    /**
     * Set slide content
     *
     * @param {node} slide
     * @param {object} data
     * @param {function} callback
     */ setContent(slide = null, callback = false) {
        if ((0, _helpersJs.hasClass)(slide, "loaded")) return false;
        const settings = this.instance.settings;
        const slideConfig = this.slideConfig;
        const isMobileDevice = (0, _helpersJs.isMobile)();
        if ((0, _helpersJs.isFunction)(settings.beforeSlideLoad)) settings.beforeSlideLoad({
            index: this.index,
            slide: slide,
            player: false
        });
        let type = slideConfig.type;
        let position = slideConfig.descPosition;
        let slideMedia = slide.querySelector(".gslide-media");
        let slideTitle = slide.querySelector(".gslide-title");
        let slideText = slide.querySelector(".gslide-desc");
        let slideDesc = slide.querySelector(".gdesc-inner");
        let finalCallback = callback;
        // used for image accessiblity
        let titleID = "gSlideTitle_" + this.index;
        let textID = "gSlideDesc_" + this.index;
        if ((0, _helpersJs.isFunction)(settings.afterSlideLoad)) finalCallback = ()=>{
            if ((0, _helpersJs.isFunction)(callback)) callback();
            settings.afterSlideLoad({
                index: this.index,
                slide: slide,
                player: this.instance.getSlidePlayerInstance(this.index)
            });
        };
        if (slideConfig.title == "" && slideConfig.description == "") {
            if (slideDesc) slideDesc.parentNode.parentNode.removeChild(slideDesc.parentNode);
        } else {
            if (slideTitle && slideConfig.title !== "") {
                slideTitle.id = titleID;
                slideTitle.innerHTML = slideConfig.title;
            } else slideTitle.parentNode.removeChild(slideTitle);
            if (slideText && slideConfig.description !== "") {
                slideText.id = textID;
                if (isMobileDevice && settings.moreLength > 0) {
                    slideConfig.smallDescription = this.slideShortDesc(slideConfig.description, settings.moreLength, settings.moreText);
                    slideText.innerHTML = slideConfig.smallDescription;
                    this.descriptionEvents(slideText, slideConfig);
                } else slideText.innerHTML = slideConfig.description;
            } else slideText.parentNode.removeChild(slideText);
            (0, _helpersJs.addClass)(slideMedia.parentNode, `desc-${position}`);
            (0, _helpersJs.addClass)(slideDesc.parentNode, `description-${position}`);
        }
        (0, _helpersJs.addClass)(slideMedia, `gslide-${type}`);
        (0, _helpersJs.addClass)(slide, "loaded");
        if (type === "video") {
            (0, _videoJsDefault.default).apply(this.instance, [
                slide,
                slideConfig,
                this.index,
                finalCallback
            ]);
            return;
        }
        if (type === "external") {
            (0, _iframeJsDefault.default).apply(this, [
                slide,
                slideConfig,
                this.index,
                finalCallback
            ]);
            return;
        }
        if (type === "inline") {
            (0, _inlineJsDefault.default).apply(this.instance, [
                slide,
                slideConfig,
                this.index,
                finalCallback
            ]);
            if (slideConfig.draggable) new (0, _dragJsDefault.default)({
                dragEl: slide.querySelector(".gslide-inline"),
                toleranceX: settings.dragToleranceX,
                toleranceY: settings.dragToleranceY,
                slide: slide,
                instance: this.instance
            });
            return;
        }
        if (type === "image") {
            (0, _imageJsDefault.default)(slide, slideConfig, this.index, ()=>{
                const img = slide.querySelector("img");
                if (slideConfig.draggable) new (0, _dragJsDefault.default)({
                    dragEl: img,
                    toleranceX: settings.dragToleranceX,
                    toleranceY: settings.dragToleranceY,
                    slide: slide,
                    instance: this.instance
                });
                if (slideConfig.zoomable && img.naturalWidth > img.offsetWidth) {
                    (0, _helpersJs.addClass)(img, "zoomable");
                    new (0, _zoomJsDefault.default)(img, slide, ()=>{
                        this.instance.resize();
                    });
                }
                if ((0, _helpersJs.isFunction)(finalCallback)) finalCallback();
            });
            return;
        }
        if ((0, _helpersJs.isFunction)(finalCallback)) finalCallback();
    }
    slideShortDesc(string, n = 50, wordBoundary = false) {
        let div = document.createElement("div");
        div.innerHTML = string;
        let cleanedString = div.innerText;
        let useWordBoundary = wordBoundary;
        string = cleanedString.trim();
        if (string.length <= n) return string;
        let subString = string.substr(0, n - 1);
        if (!useWordBoundary) return subString;
        div = null;
        return subString + '... <a href="#" class="desc-more">' + wordBoundary + "</a>";
    }
    descriptionEvents(desc, data) {
        let moreLink = desc.querySelector(".desc-more");
        if (!moreLink) return false;
        (0, _helpersJs.addEvent)("click", {
            onElement: moreLink,
            withCallback: (event, target)=>{
                event.preventDefault();
                const body = document.body;
                let desc = (0, _helpersJs.closest)(target, ".gslide-desc");
                if (!desc) return false;
                desc.innerHTML = data.description;
                (0, _helpersJs.addClass)(body, "gdesc-open");
                let shortEvent = (0, _helpersJs.addEvent)("click", {
                    onElement: [
                        body,
                        (0, _helpersJs.closest)(desc, ".gslide-description")
                    ],
                    withCallback: (event, target)=>{
                        if (event.target.nodeName.toLowerCase() !== "a") {
                            (0, _helpersJs.removeClass)(body, "gdesc-open");
                            (0, _helpersJs.addClass)(body, "gdesc-closed");
                            desc.innerHTML = data.smallDescription;
                            this.descriptionEvents(desc, data);
                            setTimeout(()=>{
                                (0, _helpersJs.removeClass)(body, "gdesc-closed");
                            }, 400);
                            shortEvent.destroy();
                        }
                    }
                });
            }
        });
    }
    /**
     * Create Slide Node
     *
     * @return { node }
     */ create() {
        return (0, _helpersJs.createHTML)(this.instance.settings.slideHTML);
    }
    /**
     * Get slide config
     * returns each individual slide config
     * it uses SlideConfigParser
     * each slide can overwrite a global setting
     * read more in the SlideConfigParser class
     *
     * @return { object }
     */ getConfig() {
        if (!(0, _helpersJs.isNode)(this.element) && !this.element.hasOwnProperty("draggable")) this.element.draggable = this.instance.settings.draggable;
        const parser = new (0, _slideParserJsDefault.default)(this.instance.settings.slideExtraAttributes);
        this.slideConfig = parser.parseConfig(this.element, this.instance.settings);
        return this.slideConfig;
    }
}
exports.default = Slide;

},{"./zoom.js":"eFUVM","./drag.js":"4eWg8","../slides/image.js":"9xO2A","../slides/video.js":"7UnHz","../slides/inline.js":"lACO5","../slides/iframe.js":"dBnfs","./slide-parser.js":"fZofO","../utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eFUVM":[function(require,module,exports) {
/**
 * ZoomImages
 * Allow imaes to zoom and drag
 * for desktops
 *
 * @param {node} img node
 * @param {node} slide container
 * @param {function} function to trigger on close
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ZoomImages {
    constructor(el, slide, onclose = null){
        this.img = el;
        this.slide = slide;
        this.onclose = onclose;
        if (this.img.setZoomEvents) return false;
        this.active = false;
        this.zoomedIn = false;
        this.dragging = false;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;
        this.img.addEventListener("mousedown", (e)=>this.dragStart(e), false);
        this.img.addEventListener("mouseup", (e)=>this.dragEnd(e), false);
        this.img.addEventListener("mousemove", (e)=>this.drag(e), false);
        this.img.addEventListener("click", (e)=>{
            if (this.slide.classList.contains("dragging-nav")) {
                this.zoomOut();
                return false;
            }
            if (!this.zoomedIn) return this.zoomIn();
            if (this.zoomedIn && !this.dragging) this.zoomOut();
        }, false);
        this.img.setZoomEvents = true;
    }
    zoomIn() {
        let winWidth = this.widowWidth();
        if (this.zoomedIn || winWidth <= 768) return;
        const img = this.img;
        img.setAttribute("data-style", img.getAttribute("style"));
        img.style.maxWidth = img.naturalWidth + "px";
        img.style.maxHeight = img.naturalHeight + "px";
        if (img.naturalWidth > winWidth) {
            let centerX = winWidth / 2 - img.naturalWidth / 2;
            this.setTranslate(this.img.parentNode, centerX, 0);
        }
        this.slide.classList.add("zoomed");
        this.zoomedIn = true;
    }
    zoomOut() {
        this.img.parentNode.setAttribute("style", "");
        this.img.setAttribute("style", this.img.getAttribute("data-style"));
        this.slide.classList.remove("zoomed");
        this.zoomedIn = false;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;
        if (this.onclose && typeof this.onclose == "function") this.onclose();
    }
    dragStart(e) {
        e.preventDefault();
        if (!this.zoomedIn) {
            this.active = false;
            return;
        }
        if (e.type === "touchstart") {
            this.initialX = e.touches[0].clientX - this.xOffset;
            this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
        }
        if (e.target === this.img) {
            this.active = true;
            this.img.classList.add("dragging");
        }
    }
    dragEnd(e) {
        e.preventDefault();
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.active = false;
        setTimeout(()=>{
            this.dragging = false;
            this.img.isDragging = false;
            this.img.classList.remove("dragging");
        }, 100);
    }
    drag(e) {
        if (this.active) {
            e.preventDefault();
            if (e.type === "touchmove") {
                this.currentX = e.touches[0].clientX - this.initialX;
                this.currentY = e.touches[0].clientY - this.initialY;
            } else {
                this.currentX = e.clientX - this.initialX;
                this.currentY = e.clientY - this.initialY;
            }
            this.xOffset = this.currentX;
            this.yOffset = this.currentY;
            this.img.isDragging = true;
            this.dragging = true;
            this.setTranslate(this.img, this.currentX, this.currentY);
        }
    }
    onMove(e) {
        if (!this.zoomedIn) return;
        let xOffset = e.clientX - this.img.naturalWidth / 2;
        let yOffset = e.clientY - this.img.naturalHeight / 2;
        this.setTranslate(this.img, xOffset, yOffset);
    }
    setTranslate(node, xPos, yPos) {
        node.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
    widowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
}
exports.default = ZoomImages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4eWg8":[function(require,module,exports) {
/**
 * DragSlides
 * Allow imaes to be dragged for prev and next
 * in desktops
 *
 * @param { object } config
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("../utils/helpers.js");
class DragSlides {
    constructor(config = {}){
        let { dragEl, toleranceX = 40, toleranceY = 65, slide = null, instance = null } = config;
        this.el = dragEl;
        this.active = false;
        this.dragging = false;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;
        this.direction = null;
        this.lastDirection = null;
        this.toleranceX = toleranceX;
        this.toleranceY = toleranceY;
        this.toleranceReached = false;
        this.dragContainer = this.el;
        this.slide = slide;
        this.instance = instance;
        this.el.addEventListener("mousedown", (e)=>this.dragStart(e), false);
        this.el.addEventListener("mouseup", (e)=>this.dragEnd(e), false);
        this.el.addEventListener("mousemove", (e)=>this.drag(e), false);
    }
    dragStart(e) {
        if (this.slide.classList.contains("zoomed")) {
            this.active = false;
            return;
        }
        if (e.type === "touchstart") {
            this.initialX = e.touches[0].clientX - this.xOffset;
            this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
        }
        let clicked = e.target.nodeName.toLowerCase();
        let exludeClicks = [
            "input",
            "select",
            "textarea",
            "button",
            "a"
        ];
        if (e.target.classList.contains("nodrag") || (0, _helpersJs.closest)(e.target, ".nodrag") || exludeClicks.indexOf(clicked) !== -1) {
            this.active = false;
            return;
        }
        e.preventDefault();
        if (e.target === this.el || clicked !== "img" && (0, _helpersJs.closest)(e.target, ".gslide-inline")) {
            this.active = true;
            this.el.classList.add("dragging");
            this.dragContainer = (0, _helpersJs.closest)(e.target, ".ginner-container");
        }
    }
    dragEnd(e) {
        e && e.preventDefault();
        this.initialX = 0;
        this.initialY = 0;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;
        this.active = false;
        if (this.doSlideChange) {
            this.instance.preventOutsideClick = true;
            this.doSlideChange == "right" && this.instance.prevSlide();
            this.doSlideChange == "left" && this.instance.nextSlide();
        }
        if (this.doSlideClose) this.instance.close();
        if (!this.toleranceReached) this.setTranslate(this.dragContainer, 0, 0, true);
        setTimeout(()=>{
            this.instance.preventOutsideClick = false;
            this.toleranceReached = false;
            this.lastDirection = null;
            this.dragging = false;
            this.el.isDragging = false;
            this.el.classList.remove("dragging");
            this.slide.classList.remove("dragging-nav");
            this.dragContainer.style.transform = "";
            this.dragContainer.style.transition = "";
        }, 100);
    }
    drag(e) {
        if (this.active) {
            e.preventDefault();
            this.slide.classList.add("dragging-nav");
            if (e.type === "touchmove") {
                this.currentX = e.touches[0].clientX - this.initialX;
                this.currentY = e.touches[0].clientY - this.initialY;
            } else {
                this.currentX = e.clientX - this.initialX;
                this.currentY = e.clientY - this.initialY;
            }
            this.xOffset = this.currentX;
            this.yOffset = this.currentY;
            this.el.isDragging = true;
            this.dragging = true;
            this.doSlideChange = false;
            this.doSlideClose = false;
            let currentXInt = Math.abs(this.currentX);
            let currentYInt = Math.abs(this.currentY);
            // Horizontal drag
            if (currentXInt > 0 && currentXInt >= Math.abs(this.currentY) && (!this.lastDirection || this.lastDirection == "x")) {
                this.yOffset = 0;
                this.lastDirection = "x";
                this.setTranslate(this.dragContainer, this.currentX, 0);
                let doChange = this.shouldChange();
                if (!this.instance.settings.dragAutoSnap && doChange) this.doSlideChange = doChange;
                if (this.instance.settings.dragAutoSnap && doChange) {
                    this.instance.preventOutsideClick = true;
                    this.toleranceReached = true;
                    this.active = false;
                    this.instance.preventOutsideClick = true;
                    this.dragEnd(null);
                    doChange == "right" && this.instance.prevSlide();
                    doChange == "left" && this.instance.nextSlide();
                    return;
                }
            }
            // Vertical drag
            if (this.toleranceY > 0 && currentYInt > 0 && currentYInt >= currentXInt && (!this.lastDirection || this.lastDirection == "y")) {
                this.xOffset = 0;
                this.lastDirection = "y";
                this.setTranslate(this.dragContainer, 0, this.currentY);
                let doClose = this.shouldClose();
                if (!this.instance.settings.dragAutoSnap && doClose) this.doSlideClose = true;
                if (this.instance.settings.dragAutoSnap && doClose) this.instance.close();
                return;
            }
        }
    }
    shouldChange() {
        let doChange = false;
        let currentXInt = Math.abs(this.currentX);
        if (currentXInt >= this.toleranceX) {
            let dragDir = this.currentX > 0 ? "right" : "left";
            if (dragDir == "left" && this.slide !== this.slide.parentNode.lastChild || dragDir == "right" && this.slide !== this.slide.parentNode.firstChild) doChange = dragDir;
        }
        return doChange;
    }
    shouldClose() {
        let doClose = false;
        let currentYInt = Math.abs(this.currentY);
        if (currentYInt >= this.toleranceY) doClose = true;
        return doClose;
    }
    setTranslate(node, xPos, yPos, animated = false) {
        if (animated) node.style.transition = "all .2s ease";
        else node.style.transition = "";
        node.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
}
exports.default = DragSlides;

},{"../utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xO2A":[function(require,module,exports) {
/**
 * Set slide inline content
 * we'll extend this to make http
 * requests using the fetch api
 * but for now we keep it simple
 *
 * @param {node} slide
 * @param {object} data
 * @param {int} index
 * @param {function} callback
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideImage);
var _helpersJs = require("../utils/helpers.js");
function slideImage(slide, data, index, callback) {
    const slideMedia = slide.querySelector(".gslide-media");
    let img = new Image();
    let titleID = "gSlideTitle_" + index;
    let textID = "gSlideDesc_" + index;
    // prettier-ignore
    img.addEventListener("load", ()=>{
        if ((0, _helpersJs.isFunction)(callback)) callback();
    }, false);
    img.src = data.href;
    if (data.sizes != "" && data.srcset != "") {
        img.sizes = data.sizes;
        img.srcset = data.srcset;
    }
    img.alt = ""; // https://davidwalsh.name/accessibility-tip-empty-alt-attributes
    if (!(0, _helpersJs.isNil)(data.alt) && data.alt !== "") img.alt = data.alt;
    if (data.title !== "") img.setAttribute("aria-labelledby", titleID);
    if (data.description !== "") // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute#Example_2_A_Close_Button
    img.setAttribute("aria-describedby", textID);
    if (data.hasOwnProperty("_hasCustomWidth") && data._hasCustomWidth) img.style.width = data.width;
    if (data.hasOwnProperty("_hasCustomHeight") && data._hasCustomHeight) img.style.height = data.height;
    slideMedia.insertBefore(img, slideMedia.firstChild);
    return;
}

},{"../utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7UnHz":[function(require,module,exports) {
/**
 * Set slide video
 *
 * @param {node} slide
 * @param {object} data
 * @param {int} index
 * @param {function} callback
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideVideo);
var _helpersJs = require("../utils/helpers.js");
function slideVideo(slide, data, index, callback) {
    const slideContainer = slide.querySelector(".ginner-container");
    const videoID = "gvideo" + index;
    const slideMedia = slide.querySelector(".gslide-media");
    const videoPlayers = this.getAllPlayers();
    (0, _helpersJs.addClass)(slideContainer, "gvideo-container");
    slideMedia.insertBefore((0, _helpersJs.createHTML)('<div class="gvideo-wrapper"></div>'), slideMedia.firstChild);
    const videoWrapper = slide.querySelector(".gvideo-wrapper");
    (0, _helpersJs.injectAssets)(this.settings.plyr.css, "Plyr");
    let url = data.href;
    let provider = data?.videoProvider;
    let customPlaceholder = false;
    slideMedia.style.maxWidth = data.width;
    (0, _helpersJs.injectAssets)(this.settings.plyr.js, "Plyr", ()=>{
        // Set vimeo videos
        if (!provider && url.match(/vimeo\.com\/([0-9]*)/)) provider = "vimeo";
        // Set youtube videos
        if (!provider && (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/))) provider = "youtube";
        // Set local videos
        // if no provider, default to local
        if (provider === "local" || !provider) {
            provider = "local";
            let html = '<video id="' + videoID + '" ';
            html += `style="background:#000; max-width: ${data.width};" `;
            html += 'preload="metadata" ';
            html += 'x-webkit-airplay="allow" ';
            html += "playsinline ";
            html += "controls ";
            html += 'class="gvideo-local">';
            html += `<source src="${url}">`;
            html += "</video>";
            customPlaceholder = (0, _helpersJs.createHTML)(html);
        }
        // prettier-ignore
        const placeholder = customPlaceholder ? customPlaceholder : (0, _helpersJs.createHTML)(`<div id="${videoID}" data-plyr-provider="${provider}" data-plyr-embed-id="${url}"></div>`);
        (0, _helpersJs.addClass)(videoWrapper, `${provider}-video gvideo`);
        videoWrapper.appendChild(placeholder);
        videoWrapper.setAttribute("data-id", videoID);
        videoWrapper.setAttribute("data-index", index);
        const playerConfig = (0, _helpersJs.has)(this.settings.plyr, "config") ? this.settings.plyr.config : {};
        const player = new Plyr("#" + videoID, playerConfig);
        player.on("ready", (event)=>{
            videoPlayers[videoID] = event.detail.plyr;
            if ((0, _helpersJs.isFunction)(callback)) callback();
        });
        (0, _helpersJs.waitUntil)(()=>{
            return slide.querySelector("iframe") && slide.querySelector("iframe").dataset.ready == "true";
        }, ()=>{
            this.resize(slide);
        });
        player.on("enterfullscreen", handleMediaFullScreen);
        player.on("exitfullscreen", handleMediaFullScreen);
    });
}
/**
 * Handle fullscreen
 *
 * @param {object} event
 */ function handleMediaFullScreen(event) {
    const media = (0, _helpersJs.closest)(event.target, ".gslide-media");
    if (event.type === "enterfullscreen") (0, _helpersJs.addClass)(media, "fullscreen");
    if (event.type === "exitfullscreen") (0, _helpersJs.removeClass)(media, "fullscreen");
}

},{"../utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lACO5":[function(require,module,exports) {
/**
 * Set slide inline content
 * we'll extend this to make http
 * requests using the fetch api
 * but for now we keep it simple
 *
 * @param {node} slide
 * @param {object} data
 * @param {int} index
 * @param {function} callback
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideInline);
var _helpersJs = require("../utils/helpers.js");
function slideInline(slide, data, index, callback) {
    const slideMedia = slide.querySelector(".gslide-media");
    const hash = (0, _helpersJs.has)(data, "href") && data.href ? data.href.split("#").pop().trim() : false;
    const content = (0, _helpersJs.has)(data, "content") && data.content ? data.content : false;
    let innerContent;
    if (content) {
        if ((0, _helpersJs.isString)(content)) innerContent = (0, _helpersJs.createHTML)(`<div class="ginlined-content">${content}</div>`);
        if ((0, _helpersJs.isNode)(content)) {
            if (content.style.display == "none") content.style.display = "block";
            const container = document.createElement("div");
            container.className = "ginlined-content";
            container.appendChild(content);
            innerContent = container;
        }
    }
    if (hash) {
        let div = document.getElementById(hash);
        if (!div) return false;
        const cloned = div.cloneNode(true);
        cloned.style.height = data.height;
        cloned.style.maxWidth = data.width;
        (0, _helpersJs.addClass)(cloned, "ginlined-content");
        innerContent = cloned;
    }
    if (!innerContent) {
        console.error("Unable to append inline slide content", data);
        return false;
    }
    slideMedia.style.height = data.height;
    slideMedia.style.width = data.width;
    slideMedia.appendChild(innerContent);
    this.events["inlineclose" + hash] = (0, _helpersJs.addEvent)("click", {
        onElement: slideMedia.querySelectorAll(".gtrigger-close"),
        withCallback: (e)=>{
            e.preventDefault();
            this.close();
        }
    });
    if ((0, _helpersJs.isFunction)(callback)) callback();
    return;
}

},{"../utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBnfs":[function(require,module,exports) {
/**
 * Set slide iframe content
 *
 * @param {node} slide
 * @param {object} data
 * @param {int} index
 * @param {function} callback
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideIframe);
var _helpersJs = require("../utils/helpers.js");
function slideIframe(slide, data, index, callback) {
    const slideMedia = slide.querySelector(".gslide-media");
    const iframe = (0, _helpersJs.createIframe)({
        url: data.href,
        callback: callback
    });
    slideMedia.parentNode.style.maxWidth = data.width;
    slideMedia.parentNode.style.height = data.height;
    slideMedia.appendChild(iframe);
    return;
}

},{"../utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZofO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("../utils/helpers.js");
class SlideConfigParser {
    constructor(slideParamas = {}){
        this.defaults = {
            href: "",
            sizes: "",
            srcset: "",
            title: "",
            type: "",
            videoProvider: "",
            description: "",
            alt: "",
            descPosition: "bottom",
            effect: "",
            width: "",
            height: "",
            content: false,
            zoomable: true,
            draggable: true
        };
        if ((0, _helpersJs.isObject)(slideParamas)) this.defaults = (0, _helpersJs.extend)(this.defaults, slideParamas);
    }
    /**
     * Get source type
     * gte the source type of a url
     *
     * @param {string} url
     */ sourceType(url) {
        let origin = url;
        url = url.toLowerCase();
        if (url.match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) !== null) return "image";
        if (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/)) return "video";
        if (url.match(/vimeo\.com\/([0-9]*)/)) return "video";
        if (url.match(/\.(mp4|ogg|webm|mov)/) !== null) return "video";
        if (url.match(/\.(mp3|wav|wma|aac|ogg)/) !== null) return "audio";
        // Check if inline content
        if (url.indexOf("#") > -1) {
            let hash = origin.split("#").pop();
            if (hash.trim() !== "") return "inline";
        }
        // Ajax
        if (url.indexOf("goajax=true") > -1) return "ajax";
        return "external";
    }
    parseConfig(element, settings) {
        let data = (0, _helpersJs.extend)({
            descPosition: settings.descPosition
        }, this.defaults);
        if ((0, _helpersJs.isObject)(element) && !(0, _helpersJs.isNode)(element)) {
            if (!(0, _helpersJs.has)(element, "type")) {
                if ((0, _helpersJs.has)(element, "content") && element.content) element.type = "inline";
                else if ((0, _helpersJs.has)(element, "href")) element.type = this.sourceType(element.href);
            }
            let objectData = (0, _helpersJs.extend)(data, element);
            this.setSize(objectData, settings);
            return objectData;
        }
        let url = "";
        let config = element.getAttribute("data-glightbox");
        let nodeType = element.nodeName.toLowerCase();
        if (nodeType === "a") url = element.href;
        if (nodeType === "img") {
            url = element.src;
            //alt attribute propagation
            data.alt = element.alt;
        }
        data.href = url;
        (0, _helpersJs.each)(data, (val, key)=>{
            if ((0, _helpersJs.has)(settings, key) && key !== "width") data[key] = settings[key];
            const nodeData = element.dataset[key];
            if (!(0, _helpersJs.isNil)(nodeData)) data[key] = this.sanitizeValue(nodeData);
        });
        if (data.content) data.type = "inline";
        if (!data.type && url) data.type = this.sourceType(url);
        if (!(0, _helpersJs.isNil)(config)) {
            let cleanKeys = [];
            (0, _helpersJs.each)(data, (v, k)=>{
                cleanKeys.push(";\\s?" + k);
            });
            cleanKeys = cleanKeys.join("\\s?:|");
            if (config.trim() !== "") (0, _helpersJs.each)(data, (val, key)=>{
                const str = config;
                const match = "s?" + key + "s?:s?(.*?)(" + cleanKeys + "s?:|$)";
                const regex = new RegExp(match);
                const matches = str.match(regex);
                if (matches && matches.length && matches[1]) {
                    const value = matches[1].trim().replace(/;\s*$/, "");
                    data[key] = this.sanitizeValue(value);
                }
            });
        } else {
            if (!data.title && nodeType == "a") {
                let title = element.title;
                if (!(0, _helpersJs.isNil)(title) && title !== "") data.title = title;
            }
            if (!data.title && nodeType == "img") {
                let alt = element.alt;
                if (!(0, _helpersJs.isNil)(alt) && alt !== "") data.title = alt;
            }
        }
        // Try to get the description from a referenced element
        if (data.description && data.description.substring(0, 1) === ".") {
            let description;
            try {
                description = document.querySelector(data.description).innerHTML;
            } catch (error) {
                if (!(error instanceof DOMException)) throw error;
            }
            if (description) data.description = description;
        }
        // Try to get the description from a .glightbox-desc element
        if (!data.description) {
            let nodeDesc = element.querySelector(".glightbox-desc");
            if (nodeDesc) data.description = nodeDesc.innerHTML;
        }
        this.setSize(data, settings, element);
        this.slideConfig = data;
        return data;
    }
    /**
     * Set slide data size
     * set the correct size dependin
     * on the slide type
     *
     * @param { object } data
     * @param { object } settings
     * @return { object }
     */ setSize(data, settings, element = null) {
        const defaultWith = data.type == "video" ? this.checkSize(settings.videosWidth) : this.checkSize(settings.width);
        const defaultHeight = this.checkSize(settings.height);
        data.width = (0, _helpersJs.has)(data, "width") && data.width !== "" ? this.checkSize(data.width) : defaultWith;
        data.height = (0, _helpersJs.has)(data, "height") && data.height !== "" ? this.checkSize(data.height) : defaultHeight;
        if (element && data.type == "image") {
            data._hasCustomWidth = element.dataset.width ? true : false;
            data._hasCustomHeight = element.dataset.height ? true : false;
        }
        return data;
    }
    /**
     * [checkSize size
     * check if the passed size has a correct unit
     *
     * @param {string} size
     * @return {string}
     */ checkSize(size) {
        return (0, _helpersJs.isNumber)(size) ? `${size}px` : size;
    }
    /**
     * Sanitize data attributes value
     *
     * @param string val
     * @return mixed
     */ sanitizeValue(val) {
        if (val !== "true" && val !== "false") return val;
        return val === "true";
    }
}
exports.default = SlideConfigParser;

},{"../utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7eTrP":[function(require,module,exports) {
/**
 * Touch Navigation
 * Allow navigation using touch events
 *
 * @param {object} instance
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>touchNavigation);
var _touchEventsJs = require("./touch-events.js");
var _touchEventsJsDefault = parcelHelpers.interopDefault(_touchEventsJs);
var _helpersJs = require("../utils/helpers.js");
function resetSlideMove(slide) {
    const transitionEnd = (0, _helpersJs.whichTransitionEvent)();
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let media = (0, _helpersJs.hasClass)(slide, "gslide-media") ? slide : slide.querySelector(".gslide-media");
    let container = (0, _helpersJs.closest)(media, ".ginner-container");
    let desc = slide.querySelector(".gslide-description");
    if (windowWidth > 769) media = container;
    (0, _helpersJs.addClass)(media, "greset");
    (0, _helpersJs.cssTransform)(media, "translate3d(0, 0, 0)");
    (0, _helpersJs.addEvent)(transitionEnd, {
        onElement: media,
        once: true,
        withCallback: (event, target)=>{
            (0, _helpersJs.removeClass)(media, "greset");
        }
    });
    media.style.opacity = "";
    if (desc) desc.style.opacity = "";
}
function touchNavigation(instance) {
    if (instance.events.hasOwnProperty("touch")) return false;
    let winSize = (0, _helpersJs.windowSize)();
    let winWidth = winSize.width;
    let winHeight = winSize.height;
    let process = false;
    let currentSlide = null;
    let media = null;
    let mediaImage = null;
    let doingMove = false;
    let initScale = 1;
    let maxScale = 4.5;
    let currentScale = 1;
    let doingZoom = false;
    let imageZoomed = false;
    let zoomedPosX = null;
    let zoomedPosY = null;
    let lastZoomedPosX = null;
    let lastZoomedPosY = null;
    let hDistance;
    let vDistance;
    let hDistancePercent = 0;
    let vDistancePercent = 0;
    let vSwipe = false;
    let hSwipe = false;
    let startCoords = {};
    let endCoords = {};
    let xDown = 0;
    let yDown = 0;
    let isInlined;
    const sliderWrapper = document.getElementById("glightbox-slider");
    const overlay = document.querySelector(".goverlay");
    const touchInstance = new (0, _touchEventsJsDefault.default)(sliderWrapper, {
        touchStart: (e)=>{
            process = true;
            // TODO: More tests for inline content slides
            if ((0, _helpersJs.hasClass)(e.targetTouches[0].target, "ginner-container") || (0, _helpersJs.closest)(e.targetTouches[0].target, ".gslide-desc") || e.targetTouches[0].target.nodeName.toLowerCase() == "a") process = false;
            if ((0, _helpersJs.closest)(e.targetTouches[0].target, ".gslide-inline") && !(0, _helpersJs.hasClass)(e.targetTouches[0].target.parentNode, "gslide-inline")) process = false;
            if (process) {
                endCoords = e.targetTouches[0];
                startCoords.pageX = e.targetTouches[0].pageX;
                startCoords.pageY = e.targetTouches[0].pageY;
                xDown = e.targetTouches[0].clientX;
                yDown = e.targetTouches[0].clientY;
                currentSlide = instance.activeSlide;
                media = currentSlide.querySelector(".gslide-media");
                isInlined = currentSlide.querySelector(".gslide-inline");
                mediaImage = null;
                if ((0, _helpersJs.hasClass)(media, "gslide-image")) mediaImage = media.querySelector("img");
                const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                if (windowWidth > 769) media = currentSlide.querySelector(".ginner-container");
                (0, _helpersJs.removeClass)(overlay, "greset");
                if (e.pageX > 20 && e.pageX < window.innerWidth - 20) return;
                e.preventDefault();
            }
        },
        touchMove: (e)=>{
            if (!process) return;
            endCoords = e.targetTouches[0];
            if (doingZoom || imageZoomed) return;
            if (isInlined && isInlined.offsetHeight > winHeight) {
                // Allow scroll without moving the slide
                const moved = startCoords.pageX - endCoords.pageX;
                if (Math.abs(moved) <= 13) return false;
            }
            doingMove = true;
            let xUp = e.targetTouches[0].clientX;
            let yUp = e.targetTouches[0].clientY;
            let xDiff = xDown - xUp;
            let yDiff = yDown - yUp;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                vSwipe = false;
                hSwipe = true;
            } else {
                hSwipe = false;
                vSwipe = true;
            }
            hDistance = endCoords.pageX - startCoords.pageX;
            hDistancePercent = hDistance * 100 / winWidth;
            vDistance = endCoords.pageY - startCoords.pageY;
            vDistancePercent = vDistance * 100 / winHeight;
            let opacity;
            if (vSwipe && mediaImage) {
                opacity = 1 - Math.abs(vDistance) / winHeight;
                overlay.style.opacity = opacity;
                if (instance.settings.touchFollowAxis) hDistancePercent = 0;
            }
            if (hSwipe) {
                opacity = 1 - Math.abs(hDistance) / winWidth;
                media.style.opacity = opacity;
                if (instance.settings.touchFollowAxis) vDistancePercent = 0;
            }
            if (!mediaImage) return (0, _helpersJs.cssTransform)(media, `translate3d(${hDistancePercent}%, 0, 0)`);
            (0, _helpersJs.cssTransform)(media, `translate3d(${hDistancePercent}%, ${vDistancePercent}%, 0)`);
        },
        touchEnd: ()=>{
            if (!process) return;
            doingMove = false;
            if (imageZoomed || doingZoom) {
                lastZoomedPosX = zoomedPosX;
                lastZoomedPosY = zoomedPosY;
                return;
            }
            const v = Math.abs(parseInt(vDistancePercent));
            const h = Math.abs(parseInt(hDistancePercent));
            if (v > 29 && mediaImage) {
                instance.close();
                return;
            }
            if (v < 29 && h < 25) {
                (0, _helpersJs.addClass)(overlay, "greset");
                overlay.style.opacity = 1;
                return resetSlideMove(media);
            }
        },
        multipointEnd: ()=>{
            setTimeout(()=>{
                doingZoom = false;
            }, 50);
        },
        multipointStart: ()=>{
            doingZoom = true;
            initScale = currentScale ? currentScale : 1;
        },
        pinch: (evt)=>{
            if (!mediaImage || doingMove) return false;
            doingZoom = true;
            mediaImage.scaleX = mediaImage.scaleY = initScale * evt.zoom;
            let scale = initScale * evt.zoom;
            imageZoomed = true;
            if (scale <= 1) {
                imageZoomed = false;
                scale = 1;
                lastZoomedPosY = null;
                lastZoomedPosX = null;
                zoomedPosX = null;
                zoomedPosY = null;
                mediaImage.setAttribute("style", "");
                return;
            }
            if (scale > maxScale) // max scale zoom
            scale = maxScale;
            mediaImage.style.transform = `scale3d(${scale}, ${scale}, 1)`;
            currentScale = scale;
        },
        pressMove: (e)=>{
            if (imageZoomed && !doingZoom) {
                var mhDistance = endCoords.pageX - startCoords.pageX;
                var mvDistance = endCoords.pageY - startCoords.pageY;
                if (lastZoomedPosX) mhDistance = mhDistance + lastZoomedPosX;
                if (lastZoomedPosY) mvDistance = mvDistance + lastZoomedPosY;
                zoomedPosX = mhDistance;
                zoomedPosY = mvDistance;
                let style = `translate3d(${mhDistance}px, ${mvDistance}px, 0)`;
                if (currentScale) style += ` scale3d(${currentScale}, ${currentScale}, 1)`;
                (0, _helpersJs.cssTransform)(mediaImage, style);
            }
        },
        swipe: (evt)=>{
            if (imageZoomed) return;
            if (doingZoom) {
                doingZoom = false;
                return;
            }
            if (evt.direction == "Left") {
                if (instance.index == instance.elements.length - 1) return resetSlideMove(media);
                instance.nextSlide();
            }
            if (evt.direction == "Right") {
                if (instance.index == 0) return resetSlideMove(media);
                instance.prevSlide();
            }
        }
    });
    instance.events["touch"] = touchInstance;
}

},{"./touch-events.js":"fr6vI","../utils/helpers.js":"jaRSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fr6vI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getLen(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
function dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
}
function getAngle(v1, v2) {
    var mr = getLen(v1) * getLen(v2);
    if (mr === 0) return 0;
    var r = dot(v1, v2) / mr;
    if (r > 1) r = 1;
    return Math.acos(r);
}
function cross(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
}
function getRotateAngle(v1, v2) {
    var angle = getAngle(v1, v2);
    if (cross(v1, v2) > 0) angle *= -1;
    return angle * 180 / Math.PI;
}
class EventsHandlerAdmin {
    constructor(el){
        this.handlers = [];
        this.el = el;
    }
    add(handler) {
        this.handlers.push(handler);
    }
    del(handler) {
        if (!handler) this.handlers = [];
        for(var i = this.handlers.length; i >= 0; i--)if (this.handlers[i] === handler) this.handlers.splice(i, 1);
    }
    dispatch() {
        for(var i = 0, len = this.handlers.length; i < len; i++){
            var handler = this.handlers[i];
            if (typeof handler === "function") handler.apply(this.el, arguments);
        }
    }
}
function wrapFunc(el, handler) {
    var EventshandlerAdmin = new EventsHandlerAdmin(el);
    EventshandlerAdmin.add(handler);
    return EventshandlerAdmin;
}
class TouchEvents {
    constructor(el, option){
        this.element = typeof el == "string" ? document.querySelector(el) : el;
        this.start = this.start.bind(this);
        this.move = this.move.bind(this);
        this.end = this.end.bind(this);
        this.cancel = this.cancel.bind(this);
        this.element.addEventListener("touchstart", this.start, false);
        this.element.addEventListener("touchmove", this.move, false);
        this.element.addEventListener("touchend", this.end, false);
        this.element.addEventListener("touchcancel", this.cancel, false);
        this.preV = {
            x: null,
            y: null
        };
        this.pinchStartLen = null;
        this.zoom = 1;
        this.isDoubleTap = false;
        var noop = function() {};
        this.rotate = wrapFunc(this.element, option.rotate || noop);
        this.touchStart = wrapFunc(this.element, option.touchStart || noop);
        this.multipointStart = wrapFunc(this.element, option.multipointStart || noop);
        this.multipointEnd = wrapFunc(this.element, option.multipointEnd || noop);
        this.pinch = wrapFunc(this.element, option.pinch || noop);
        this.swipe = wrapFunc(this.element, option.swipe || noop);
        this.tap = wrapFunc(this.element, option.tap || noop);
        this.doubleTap = wrapFunc(this.element, option.doubleTap || noop);
        this.longTap = wrapFunc(this.element, option.longTap || noop);
        this.singleTap = wrapFunc(this.element, option.singleTap || noop);
        this.pressMove = wrapFunc(this.element, option.pressMove || noop);
        this.twoFingerPressMove = wrapFunc(this.element, option.twoFingerPressMove || noop);
        this.touchMove = wrapFunc(this.element, option.touchMove || noop);
        this.touchEnd = wrapFunc(this.element, option.touchEnd || noop);
        this.touchCancel = wrapFunc(this.element, option.touchCancel || noop);
        this.translateContainer = this.element;
        this._cancelAllHandler = this.cancelAll.bind(this);
        window.addEventListener("scroll", this._cancelAllHandler);
        this.delta = null;
        this.last = null;
        this.now = null;
        this.tapTimeout = null;
        this.singleTapTimeout = null;
        this.longTapTimeout = null;
        this.swipeTimeout = null;
        this.x1 = this.x2 = this.y1 = this.y2 = null;
        this.preTapPosition = {
            x: null,
            y: null
        };
    }
    start(evt) {
        if (!evt.touches) return;
        // Fix Media Buttons Not responding on Android #233
        const ignoreDragFor = [
            "a",
            "button",
            "input"
        ];
        if (evt.target && evt.target.nodeName && ignoreDragFor.indexOf(evt.target.nodeName.toLowerCase()) >= 0) {
            console.log("ignore drag for this touched element", evt.target.nodeName.toLowerCase());
            return;
        }
        this.now = Date.now();
        this.x1 = evt.touches[0].pageX;
        this.y1 = evt.touches[0].pageY;
        this.delta = this.now - (this.last || this.now);
        this.touchStart.dispatch(evt, this.element);
        if (this.preTapPosition.x !== null) {
            this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30;
            if (this.isDoubleTap) clearTimeout(this.singleTapTimeout);
        }
        this.preTapPosition.x = this.x1;
        this.preTapPosition.y = this.y1;
        this.last = this.now;
        var preV = this.preV, len = evt.touches.length;
        if (len > 1) {
            this._cancelLongTap();
            this._cancelSingleTap();
            var v = {
                x: evt.touches[1].pageX - this.x1,
                y: evt.touches[1].pageY - this.y1
            };
            preV.x = v.x;
            preV.y = v.y;
            this.pinchStartLen = getLen(preV);
            this.multipointStart.dispatch(evt, this.element);
        }
        this._preventTap = false;
        this.longTapTimeout = setTimeout((function() {
            this.longTap.dispatch(evt, this.element);
            this._preventTap = true;
        }).bind(this), 750);
    }
    move(evt) {
        if (!evt.touches) return;
        var preV = this.preV, len = evt.touches.length, currentX = evt.touches[0].pageX, currentY = evt.touches[0].pageY;
        this.isDoubleTap = false;
        if (len > 1) {
            var sCurrentX = evt.touches[1].pageX, sCurrentY = evt.touches[1].pageY;
            var v = {
                x: evt.touches[1].pageX - currentX,
                y: evt.touches[1].pageY - currentY
            };
            if (preV.x !== null) {
                if (this.pinchStartLen > 0) {
                    evt.zoom = getLen(v) / this.pinchStartLen;
                    this.pinch.dispatch(evt, this.element);
                }
                evt.angle = getRotateAngle(v, preV);
                this.rotate.dispatch(evt, this.element);
            }
            preV.x = v.x;
            preV.y = v.y;
            if (this.x2 !== null && this.sx2 !== null) {
                evt.deltaX = (currentX - this.x2 + sCurrentX - this.sx2) / 2;
                evt.deltaY = (currentY - this.y2 + sCurrentY - this.sy2) / 2;
            } else {
                evt.deltaX = 0;
                evt.deltaY = 0;
            }
            this.twoFingerPressMove.dispatch(evt, this.element);
            this.sx2 = sCurrentX;
            this.sy2 = sCurrentY;
        } else {
            if (this.x2 !== null) {
                evt.deltaX = currentX - this.x2;
                evt.deltaY = currentY - this.y2;
                var movedX = Math.abs(this.x1 - this.x2), movedY = Math.abs(this.y1 - this.y2);
                if (movedX > 10 || movedY > 10) this._preventTap = true;
            } else {
                evt.deltaX = 0;
                evt.deltaY = 0;
            }
            this.pressMove.dispatch(evt, this.element);
        }
        this.touchMove.dispatch(evt, this.element);
        this._cancelLongTap();
        this.x2 = currentX;
        this.y2 = currentY;
        if (len > 1) evt.preventDefault();
    }
    end(evt) {
        if (!evt.changedTouches) return;
        this._cancelLongTap();
        var self = this;
        if (evt.touches.length < 2) {
            this.multipointEnd.dispatch(evt, this.element);
            this.sx2 = this.sy2 = null;
        }
        //swipe
        if (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30) {
            evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
            this.swipeTimeout = setTimeout(function() {
                self.swipe.dispatch(evt, self.element);
            }, 0);
        } else {
            this.tapTimeout = setTimeout(function() {
                if (!self._preventTap) self.tap.dispatch(evt, self.element);
                // trigger double tap immediately
                if (self.isDoubleTap) {
                    self.doubleTap.dispatch(evt, self.element);
                    self.isDoubleTap = false;
                }
            }, 0);
            if (!self.isDoubleTap) self.singleTapTimeout = setTimeout(function() {
                self.singleTap.dispatch(evt, self.element);
            }, 250);
        }
        this.touchEnd.dispatch(evt, this.element);
        this.preV.x = 0;
        this.preV.y = 0;
        this.zoom = 1;
        this.pinchStartLen = null;
        this.x1 = this.x2 = this.y1 = this.y2 = null;
    }
    cancelAll() {
        this._preventTap = true;
        clearTimeout(this.singleTapTimeout);
        clearTimeout(this.tapTimeout);
        clearTimeout(this.longTapTimeout);
        clearTimeout(this.swipeTimeout);
    }
    cancel(evt) {
        this.cancelAll();
        this.touchCancel.dispatch(evt, this.element);
    }
    _cancelLongTap() {
        clearTimeout(this.longTapTimeout);
    }
    _cancelSingleTap() {
        clearTimeout(this.singleTapTimeout);
    }
    _swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
    }
    on(evt, handler) {
        if (this[evt]) this[evt].add(handler);
    }
    off(evt, handler) {
        if (this[evt]) this[evt].del(handler);
    }
    destroy() {
        if (this.singleTapTimeout) clearTimeout(this.singleTapTimeout);
        if (this.tapTimeout) clearTimeout(this.tapTimeout);
        if (this.longTapTimeout) clearTimeout(this.longTapTimeout);
        if (this.swipeTimeout) clearTimeout(this.swipeTimeout);
        this.element.removeEventListener("touchstart", this.start);
        this.element.removeEventListener("touchmove", this.move);
        this.element.removeEventListener("touchend", this.end);
        this.element.removeEventListener("touchcancel", this.cancel);
        this.rotate.del();
        this.touchStart.del();
        this.multipointStart.del();
        this.multipointEnd.del();
        this.pinch.del();
        this.swipe.del();
        this.tap.del();
        this.doubleTap.del();
        this.longTap.del();
        this.singleTap.del();
        this.pressMove.del();
        this.twoFingerPressMove.del();
        this.touchMove.del();
        this.touchEnd.del();
        this.touchCancel.del();
        this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null;
        window.removeEventListener("scroll", this._cancelAllHandler);
        return null;
    }
}
exports.default = TouchEvents;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kwldV","JSvCN"], "JSvCN", "parcelRequire06cd")

//# sourceMappingURL=index.1a5700ca.js.map
