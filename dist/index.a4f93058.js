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
})({"1hFT7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c6ade0fea4f93058";
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

},{}],"24JUF":[function(require,module,exports) {
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/ (function() {
    "use strict";
    var keyCounter = 0;
    var allWaypoints = {};
    /* http://imakewebthings.com/waypoints/api/waypoint */ function Waypoint(options) {
        if (!options) throw new Error("No options passed to Waypoint constructor");
        if (!options.element) throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter;
        this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options);
        this.element = this.options.element;
        this.adapter = new Waypoint.Adapter(this.element);
        this.callback = options.handler;
        this.axis = this.options.horizontal ? "horizontal" : "vertical";
        this.enabled = this.options.enabled;
        this.triggerPoint = null;
        this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        });
        this.context = Waypoint.Context.findOrCreateByElement(this.options.context);
        if (Waypoint.offsetAliases[this.options.offset]) this.options.offset = Waypoint.offsetAliases[this.options.offset];
        this.group.add(this);
        this.context.add(this);
        allWaypoints[this.key] = this;
        keyCounter += 1;
    }
    /* Private */ Waypoint.prototype.queueTrigger = function(direction) {
        this.group.queueTrigger(this, direction);
    };
    /* Private */ Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) return;
        if (this.callback) this.callback.apply(this, args);
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/destroy */ Waypoint.prototype.destroy = function() {
        this.context.remove(this);
        this.group.remove(this);
        delete allWaypoints[this.key];
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/disable */ Waypoint.prototype.disable = function() {
        this.enabled = false;
        return this;
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/enable */ Waypoint.prototype.enable = function() {
        this.context.refresh();
        this.enabled = true;
        return this;
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/next */ Waypoint.prototype.next = function() {
        return this.group.next(this);
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/previous */ Waypoint.prototype.previous = function() {
        return this.group.previous(this);
    };
    /* Private */ Waypoint.invokeAll = function(method) {
        var allWaypointsArray = [];
        for(var waypointKey in allWaypoints)allWaypointsArray.push(allWaypoints[waypointKey]);
        for(var i = 0, end = allWaypointsArray.length; i < end; i++)allWaypointsArray[i][method]();
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/destroy-all */ Waypoint.destroyAll = function() {
        Waypoint.invokeAll("destroy");
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/disable-all */ Waypoint.disableAll = function() {
        Waypoint.invokeAll("disable");
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/enable-all */ Waypoint.enableAll = function() {
        Waypoint.Context.refreshAll();
        for(var waypointKey in allWaypoints)allWaypoints[waypointKey].enabled = true;
        return this;
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/refresh-all */ Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll();
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/viewport-height */ Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight;
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/viewport-width */ Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth;
    };
    Waypoint.adapters = [];
    Waypoint.defaults = {
        context: window,
        continuous: true,
        enabled: true,
        group: "default",
        horizontal: false,
        offset: 0
    };
    Waypoint.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth();
        }
    };
    window.Waypoint = Waypoint;
})();
(function() {
    "use strict";
    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1000 / 60);
    }
    var keyCounter = 0;
    var contexts = {};
    var Waypoint = window.Waypoint;
    var oldWindowLoad = window.onload;
    /* http://imakewebthings.com/waypoints/api/context */ function Context(element) {
        this.element = element;
        this.Adapter = Waypoint.Adapter;
        this.adapter = new this.Adapter(element);
        this.key = "waypoint-context-" + keyCounter;
        this.didScroll = false;
        this.didResize = false;
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        };
        this.waypoints = {
            vertical: {},
            horizontal: {}
        };
        element.waypointContextKey = this.key;
        contexts[element.waypointContextKey] = this;
        keyCounter += 1;
        if (!Waypoint.windowContext) {
            Waypoint.windowContext = true;
            Waypoint.windowContext = new Context(window);
        }
        this.createThrottledScrollHandler();
        this.createThrottledResizeHandler();
    }
    /* Private */ Context.prototype.add = function(waypoint) {
        var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[axis][waypoint.key] = waypoint;
        this.refresh();
    };
    /* Private */ Context.prototype.checkEmpty = function() {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal);
        var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical);
        var isWindow = this.element == this.element.window;
        if (horizontalEmpty && verticalEmpty && !isWindow) {
            this.adapter.off(".waypoints");
            delete contexts[this.key];
        }
    };
    /* Private */ Context.prototype.createThrottledResizeHandler = function() {
        var self = this;
        function resizeHandler() {
            self.handleResize();
            self.didResize = false;
        }
        this.adapter.on("resize.waypoints", function() {
            if (!self.didResize) {
                self.didResize = true;
                Waypoint.requestAnimationFrame(resizeHandler);
            }
        });
    };
    /* Private */ Context.prototype.createThrottledScrollHandler = function() {
        var self = this;
        function scrollHandler() {
            self.handleScroll();
            self.didScroll = false;
        }
        this.adapter.on("scroll.waypoints", function() {
            if (!self.didScroll || Waypoint.isTouch) {
                self.didScroll = true;
                Waypoint.requestAnimationFrame(scrollHandler);
            }
        });
    };
    /* Private */ Context.prototype.handleResize = function() {
        Waypoint.Context.refreshAll();
    };
    /* Private */ Context.prototype.handleScroll = function() {
        var triggeredGroups = {};
        var axes = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for(var axisKey in axes){
            var axis = axes[axisKey];
            var isForward = axis.newScroll > axis.oldScroll;
            var direction = isForward ? axis.forward : axis.backward;
            for(var waypointKey in this.waypoints[axisKey]){
                var waypoint = this.waypoints[axisKey][waypointKey];
                if (waypoint.triggerPoint === null) continue;
                var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint;
                var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint;
                var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint;
                var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                if (crossedForward || crossedBackward) {
                    waypoint.queueTrigger(direction);
                    triggeredGroups[waypoint.group.id] = waypoint.group;
                }
            }
        }
        for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        };
    };
    /* Private */ Context.prototype.innerHeight = function() {
        /*eslint-disable eqeqeq */ if (this.element == this.element.window) return Waypoint.viewportHeight();
        /*eslint-enable eqeqeq */ return this.adapter.innerHeight();
    };
    /* Private */ Context.prototype.remove = function(waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key];
        this.checkEmpty();
    };
    /* Private */ Context.prototype.innerWidth = function() {
        /*eslint-disable eqeqeq */ if (this.element == this.element.window) return Waypoint.viewportWidth();
        /*eslint-enable eqeqeq */ return this.adapter.innerWidth();
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/context-destroy */ Context.prototype.destroy = function() {
        var allWaypoints = [];
        for(var axis in this.waypoints)for(var waypointKey in this.waypoints[axis])allWaypoints.push(this.waypoints[axis][waypointKey]);
        for(var i = 0, end = allWaypoints.length; i < end; i++)allWaypoints[i].destroy();
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/context-refresh */ Context.prototype.refresh = function() {
        /*eslint-disable eqeqeq */ var isWindow = this.element == this.element.window;
        /*eslint-enable eqeqeq */ var contextOffset = isWindow ? undefined : this.adapter.offset();
        var triggeredGroups = {};
        var axes;
        this.handleScroll();
        axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for(var axisKey in axes){
            var axis = axes[axisKey];
            for(var waypointKey in this.waypoints[axisKey]){
                var waypoint = this.waypoints[axisKey][waypointKey];
                var adjustment = waypoint.options.offset;
                var oldTriggerPoint = waypoint.triggerPoint;
                var elementOffset = 0;
                var freshWaypoint = oldTriggerPoint == null;
                var contextModifier, wasBeforeScroll, nowAfterScroll;
                var triggeredBackward, triggeredForward;
                if (waypoint.element !== waypoint.element.window) elementOffset = waypoint.adapter.offset()[axis.offsetProp];
                if (typeof adjustment === "function") adjustment = adjustment.apply(waypoint);
                else if (typeof adjustment === "string") {
                    adjustment = parseFloat(adjustment);
                    if (waypoint.options.offset.indexOf("%") > -1) adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
                }
                contextModifier = axis.contextScroll - axis.contextOffset;
                waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment);
                wasBeforeScroll = oldTriggerPoint < axis.oldScroll;
                nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll;
                triggeredBackward = wasBeforeScroll && nowAfterScroll;
                triggeredForward = !wasBeforeScroll && !nowAfterScroll;
                if (!freshWaypoint && triggeredBackward) {
                    waypoint.queueTrigger(axis.backward);
                    triggeredGroups[waypoint.group.id] = waypoint.group;
                } else if (!freshWaypoint && triggeredForward) {
                    waypoint.queueTrigger(axis.forward);
                    triggeredGroups[waypoint.group.id] = waypoint.group;
                } else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
                    waypoint.queueTrigger(axis.forward);
                    triggeredGroups[waypoint.group.id] = waypoint.group;
                }
            }
        }
        Waypoint.requestAnimationFrame(function() {
            for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers();
        });
        return this;
    };
    /* Private */ Context.findOrCreateByElement = function(element) {
        return Context.findByElement(element) || new Context(element);
    };
    /* Private */ Context.refreshAll = function() {
        for(var contextId in contexts)contexts[contextId].refresh();
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/context-find-by-element */ Context.findByElement = function(element) {
        return contexts[element.waypointContextKey];
    };
    window.onload = function() {
        if (oldWindowLoad) oldWindowLoad();
        Context.refreshAll();
    };
    Waypoint.requestAnimationFrame = function(callback) {
        var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
        requestFn.call(window, callback);
    };
    Waypoint.Context = Context;
})();
(function() {
    "use strict";
    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint;
    }
    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint;
    }
    var groups = {
        vertical: {},
        horizontal: {}
    };
    var Waypoint = window.Waypoint;
    /* http://imakewebthings.com/waypoints/api/group */ function Group(options) {
        this.name = options.name;
        this.axis = options.axis;
        this.id = this.name + "-" + this.axis;
        this.waypoints = [];
        this.clearTriggerQueues();
        groups[this.axis][this.name] = this;
    }
    /* Private */ Group.prototype.add = function(waypoint) {
        this.waypoints.push(waypoint);
    };
    /* Private */ Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        };
    };
    /* Private */ Group.prototype.flushTriggers = function() {
        for(var direction in this.triggerQueues){
            var waypoints = this.triggerQueues[direction];
            var reverse = direction === "up" || direction === "left";
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for(var i = 0, end = waypoints.length; i < end; i += 1){
                var waypoint = waypoints[i];
                if (waypoint.options.continuous || i === waypoints.length - 1) waypoint.trigger([
                    direction
                ]);
            }
        }
        this.clearTriggerQueues();
    };
    /* Private */ Group.prototype.next = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        var isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1];
    };
    /* Private */ Group.prototype.previous = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null;
    };
    /* Private */ Group.prototype.queueTrigger = function(waypoint, direction) {
        this.triggerQueues[direction].push(waypoint);
    };
    /* Private */ Group.prototype.remove = function(waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        if (index > -1) this.waypoints.splice(index, 1);
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/first */ Group.prototype.first = function() {
        return this.waypoints[0];
    };
    /* Public */ /* http://imakewebthings.com/waypoints/api/last */ Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1];
    };
    /* Private */ Group.findOrCreate = function(options) {
        return groups[options.axis][options.name] || new Group(options);
    };
    Waypoint.Group = Group;
})();
(function() {
    "use strict";
    var Waypoint = window.Waypoint;
    function isWindow(element) {
        return element === element.window;
    }
    function getWindow(element) {
        if (isWindow(element)) return element;
        return element.defaultView;
    }
    function NoFrameworkAdapter(element) {
        this.element = element;
        this.handlers = {};
    }
    NoFrameworkAdapter.prototype.innerHeight = function() {
        var isWin = isWindow(this.element);
        return isWin ? this.element.innerHeight : this.element.clientHeight;
    };
    NoFrameworkAdapter.prototype.innerWidth = function() {
        var isWin = isWindow(this.element);
        return isWin ? this.element.innerWidth : this.element.clientWidth;
    };
    NoFrameworkAdapter.prototype.off = function(event, handler) {
        function removeListeners(element, listeners, handler) {
            for(var i = 0, end = listeners.length - 1; i < end; i++){
                var listener = listeners[i];
                if (!handler || handler === listener) element.removeEventListener(listener);
            }
        }
        var eventParts = event.split(".");
        var eventType = eventParts[0];
        var namespace = eventParts[1];
        var element = this.element;
        if (namespace && this.handlers[namespace] && eventType) {
            removeListeners(element, this.handlers[namespace][eventType], handler);
            this.handlers[namespace][eventType] = [];
        } else if (eventType) for(var ns in this.handlers){
            removeListeners(element, this.handlers[ns][eventType] || [], handler);
            this.handlers[ns][eventType] = [];
        }
        else if (namespace && this.handlers[namespace]) {
            for(var type in this.handlers[namespace])removeListeners(element, this.handlers[namespace][type], handler);
            this.handlers[namespace] = {};
        }
    };
    /* Adapted from jQuery 1.x offset() */ NoFrameworkAdapter.prototype.offset = function() {
        if (!this.element.ownerDocument) return null;
        var documentElement = this.element.ownerDocument.documentElement;
        var win = getWindow(this.element.ownerDocument);
        var rect = {
            top: 0,
            left: 0
        };
        if (this.element.getBoundingClientRect) rect = this.element.getBoundingClientRect();
        return {
            top: rect.top + win.pageYOffset - documentElement.clientTop,
            left: rect.left + win.pageXOffset - documentElement.clientLeft
        };
    };
    NoFrameworkAdapter.prototype.on = function(event, handler) {
        var eventParts = event.split(".");
        var eventType = eventParts[0];
        var namespace = eventParts[1] || "__default";
        var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {};
        var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || [];
        nsTypeList.push(handler);
        this.element.addEventListener(eventType, handler);
    };
    NoFrameworkAdapter.prototype.outerHeight = function(includeMargin) {
        var height = this.innerHeight();
        var computedStyle;
        if (includeMargin && !isWindow(this.element)) {
            computedStyle = window.getComputedStyle(this.element);
            height += parseInt(computedStyle.marginTop, 10);
            height += parseInt(computedStyle.marginBottom, 10);
        }
        return height;
    };
    NoFrameworkAdapter.prototype.outerWidth = function(includeMargin) {
        var width = this.innerWidth();
        var computedStyle;
        if (includeMargin && !isWindow(this.element)) {
            computedStyle = window.getComputedStyle(this.element);
            width += parseInt(computedStyle.marginLeft, 10);
            width += parseInt(computedStyle.marginRight, 10);
        }
        return width;
    };
    NoFrameworkAdapter.prototype.scrollLeft = function() {
        var win = getWindow(this.element);
        return win ? win.pageXOffset : this.element.scrollLeft;
    };
    NoFrameworkAdapter.prototype.scrollTop = function() {
        var win = getWindow(this.element);
        return win ? win.pageYOffset : this.element.scrollTop;
    };
    NoFrameworkAdapter.extend = function() {
        var args = Array.prototype.slice.call(arguments);
        function merge(target, obj) {
            if (typeof target === "object" && typeof obj === "object") {
                for(var key in obj)if (obj.hasOwnProperty(key)) target[key] = obj[key];
            }
            return target;
        }
        for(var i = 1, end = args.length; i < end; i++)merge(args[0], args[i]);
        return args[0];
    };
    NoFrameworkAdapter.inArray = function(element, array, i) {
        return array == null ? -1 : array.indexOf(element, i);
    };
    NoFrameworkAdapter.isEmptyObject = function(obj) {
        /* eslint no-unused-vars: 0 */ for(var name in obj)return false;
        return true;
    };
    Waypoint.adapters.push({
        name: "noframework",
        Adapter: NoFrameworkAdapter
    });
    Waypoint.Adapter = NoFrameworkAdapter;
})();

},{}]},["1hFT7","24JUF"], "24JUF", "parcelRequire06cd")

//# sourceMappingURL=index.a4f93058.js.map
