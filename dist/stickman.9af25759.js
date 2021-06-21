// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/stickman.js":[function(require,module,exports) {
// Animation stickman
var vanille = document.querySelector('.vanille');
var noe = document.querySelector('.noe');
var direction = 0;

function stickman_stop() {
  //vanille.setAttribute("src", "/vanille_stop.654beb58.png");
  //noe.setAttribute("src", "/noe_stop.fc3b12c4.png");
  var interval = setTimeout(console.log('ok'), 1000);
}

lscroll.on('scroll', function (obj) {
  var change_img = obj.scroll.x % 220;

  if (change_img - direction > 0 && change_img - direction < 5) {
    if (change_img > 0 && change_img < 20) {
      vanille.setAttribute("src", "/vanille2_d.7cf80c51.png");
      noe.setAttribute("src", "/noe1_d.f585e420.png");
    } else if (change_img > 20 && change_img < 40) {
      vanille.setAttribute("src", "/vanille3_d.697fa0e2.png");
      noe.setAttribute("src", "/noe2_d.7af8ec46.png");
    } else if (change_img > 40 && change_img < 60) {
      vanille.setAttribute("src", "/vanille4_d.bd814307.png");
      noe.setAttribute("src", "/noe3_d.7397d153.png");
    } else if (change_img > 60 && change_img < 80) {
      vanille.setAttribute("src", "/vanille5_d.361e4131.png");
      noe.setAttribute("src", "/noe4_d.8eec50df.png");
    } else if (change_img > 80 && change_img < 100) {
      vanille.setAttribute("src", "/vanille6_d.5d594cb4.png");
      noe.setAttribute("src", "/noe5_d.b173238f.png");
    } else if (change_img > 100 && change_img < 120) {
      vanille.setAttribute("src", "/vanille7_d.288180a5.png");
      noe.setAttribute("src", "/noe6_d.ecc1be59.png");
    } else if (change_img > 120 && change_img < 140) {
      vanille.setAttribute("src", "/vanille8_d.0644e242.png");
      noe.setAttribute("src", "/noe7_d.8ca6d5c5.png");
    } else if (change_img > 140 && change_img < 160) {
      vanille.setAttribute("src", "/vanille9_d.251cde99.png");
      noe.setAttribute("src", "/noe8_d.92a95669.png");
    } else if (change_img > 160 && change_img < 180) {
      vanille.setAttribute("src", "/vanille10_d.66213bfd.png");
      noe.setAttribute("src", "/noe9_d.9e7e500e.png");
    } else if (change_img > 180 && change_img < 200) {
      vanille.setAttribute("src", "/vanille11_d.9c29a4e4.png");
      noe.setAttribute("src", "/noe10_d.f568b948.png");
    } else if (change_img > 200 && change_img < 220) {
      vanille.setAttribute("src", "/vanille12_d.ae5c3297.png");
      noe.setAttribute("src", "/noe11_d.b6d3651c.png");
    } else {
      vanille.setAttribute("src", "/vanille1_d.d3a91bda.png");
      noe.setAttribute("src", "/noe12_d.0a80e69a.png");
    }
  } else if (change_img - direction < 0 && change_img - direction > -5) {
    if (change_img > 0 && change_img < 20) {
      vanille.setAttribute("src", "/vanille2_g.1463155a.png");
      noe.setAttribute("src", "/noe1_g.1c6dd27d.png");
    } else if (change_img > 20 && change_img < 40) {
      vanille.setAttribute("src", "/vanille3_g.d0a6951e.png");
      noe.setAttribute("src", "/noe2_g.0c2eb620.png");
    } else if (change_img > 40 && change_img < 60) {
      vanille.setAttribute("src", "/vanille4_g.79d698ce.png");
      noe.setAttribute("src", "/noe3_g.76fd67be.png");
    } else if (change_img > 60 && change_img < 80) {
      vanille.setAttribute("src", "/vanille5_g.19b1f944.png");
      noe.setAttribute("src", "/noe4_g.6b47c767.png");
    } else if (change_img > 80 && change_img < 100) {
      vanille.setAttribute("src", "/vanille6_g.43d642da.png");
      noe.setAttribute("src", "/noe5_g.356b5dc7.png");
    } else if (change_img > 100 && change_img < 120) {
      vanille.setAttribute("src", "/vanille7_g.9c429dd1.png");
      noe.setAttribute("src", "/noe6_g.09fbdc99.png");
    } else if (change_img > 120 && change_img < 140) {
      vanille.setAttribute("src", "/vanille8_g.a9afc110.png");
      noe.setAttribute("/noe7_g.70448662.png");
    } else if (change_img > 140 && change_img < 160) {
      vanille.setAttribute("src", "/vanille9_g.f79d2310.png");
      noe.setAttribute("src", "/noe8_g.ddc8679a.png");
    } else if (change_img > 160 && change_img < 180) {
      vanille.setAttribute("src", "/vanille10_g.ff037739.png");
      noe.setAttribute("src", "/noe9_g.80143eef.png");
    } else if (change_img > 180 && change_img < 200) {
      vanille.setAttribute("src", "/vanille11_g.19f63a1a.png");
      noe.setAttribute("src", "/noe10_g.fec2a7bf.png");
    } else if (change_img > 200 && change_img < 220) {
      vanille.setAttribute("src", "/vanille12_g.8a369c80.png");
      noe.setAttribute("src", "/noe11_g.099b9e6f.png");
    } else {
      vanille.setAttribute("src", "/vanille1_g.b11ad9d7.png");
      noe.setAttribute("src", "/noe12_g.f6fded6e.png");
    }
  }

  stickman_stop();
  direction = change_img;
});
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37139" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/stickman.js"], null)
//# sourceMappingURL=/stickman.9af25759.js.map