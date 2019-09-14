require("source-map-support/register"),
  (module.exports = (function(t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }

    return (
      (e.m = t),
      (e.c = n),
      (e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function(t) {
        typeof Symbol !== "undefined" &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function(t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && typeof t === "object" && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & n && typeof t !== "string")
        )
          for (var o in t)
            e.d(
              r,
              o,
              function(n) {
                return t[n];
              }.bind(null, o)
            );
        return r;
      }),
      (e.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };

        return e.d(n, "a", n), n;
      }),
      (e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = "/"),
      e((e.s = 10))
    );
  })([
    function(t, n) {
      function e(n, r) {
        return (
          (t.exports = e =
            Object.setPrototypeOf ||
            function(t, n) {
              return (t.__proto__ = n), t;
            }),
          e(n, r)
        );
      }

      t.exports = e;
    },
    function(t, n) {
      t.exports = function(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      };
    },
    function(t, n) {
      function e(n) {
        return (
          (t.exports = e = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          e(n)
        );
      }

      t.exports = e;
    },
    function(t, n) {
      t.exports = require("chalk");
    },
    function(t, n) {
      t.exports = require("dotenv");
    },
    function(t, n) {
      t.exports = function(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    function(t, n, e) {
      var r = e(11);
      var o = e(1);
      t.exports = function(t, n) {
        return !n || (r(n) !== "object" && typeof n !== "function") ? o(t) : n;
      };
    },
    function(t, n, e) {
      var r = e(0);
      t.exports = function(t, n) {
        if (typeof n !== "function" && n !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          n && r(t, n);
      };
    },
    function(t, n, e) {
      var r = e(2);
      var o = e(0);
      var u = e(12);
      var c = e(13);
      function i(n) {
        var e = typeof Map === "function" ? new Map() : void 0;
        return (
          (t.exports = i = function(t) {
            if (t === null || !u(t)) return t;
            if (typeof t !== "function")
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }

            function n() {
              return c(t, arguments, r(this).constructor);
            }

            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              o(n, t)
            );
          }),
          i(n)
        );
      }

      t.exports = i;
    },
    function(t, n) {
      t.exports = require("azure");
    },
    function(t, n, e) {
      t.exports = e(14);
    },
    function(t, n) {
      function e(t) {
        return (e =
          typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  typeof Symbol === "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }

      function r(n) {
        return (
          typeof Symbol === "function" && e(Symbol.iterator) === "symbol"
            ? (t.exports = r = function(t) {
                return e(t);
              })
            : (t.exports = r = function(t) {
                return t &&
                  typeof Symbol === "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : e(t);
              }),
          r(n)
        );
      }

      t.exports = r;
    },
    function(t, n) {
      t.exports = function(t) {
        return Function.toString.call(t).indexOf("[native code]") !== -1;
      };
    },
    function(t, n, e) {
      var r = e(0);
      function o(n, e, u) {
        return (
          !(function() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if (typeof Proxy === "function") return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })()
            ? (t.exports = o = function(t, n, e) {
                var o = [null];
                o.push.apply(o, n);
                var u = new (Function.bind.apply(t, o))();
                return e && r(u, e.prototype), u;
              })
            : (t.exports = o = Reflect.construct),
          o.apply(null, arguments)
        );
      }

      t.exports = o;
    },
    function(t, n, e) {
      "use strict";
      e.r(n);
      var r = e(4);
      var o = e(5);
      var u = e.n(o);
      var c = e(6);
      var i = e.n(c);
      var f = e(2);
      var p = e.n(f);
      var s = e(1);
      var l = e.n(s);
      var a = e(7);
      var y = e.n(a);
      var b = e(8);
      var x = (function(t) {
        function n(t) {
          var e;
          return (
            u()(this, n),
            ((e = i()(this, p()(n).call(this, t))).message =
              "Missing Connection Information (AZURE_SERVICEBUS_CONNECTION_STRING in `.env`)"),
            (e.name = e.constructor.name),
            Error.captureStackTrace(l()(e), e.constructor),
            e
          );
        }

        return y()(n, t), n;
      })(e.n(b)()(Error));
      var d = e(9);
      var m = e.n(d);
      var v = e(3);
      var S = e.n(v);
      function O(t) {
        if (!process.env.AZURE_SERVICEBUS_CONNECTION_STRING) throw new x();
        var n = m.a.createServiceBusService();
        console.log(
          S.a.green("info:"),
          S.a.grey("Successfully Connected to:"),
          n.host
        );
      }

      e.d(n, "asb", function() {
        return O;
      }),
        Object(r.config)();
    }
  ]));
// # sourceMappingURL=main.map
