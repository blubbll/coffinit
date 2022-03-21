! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 150)
}([function(t, e, n) {
    var i = n(3),
        r = n(21),
        o = n(14),
        s = n(15),
        a = n(22),
        u = function(t, e, n) {
            var l, c, f, p, h = t & u.F,
                d = t & u.G,
                y = t & u.S,
                m = t & u.P,
                v = t & u.B,
                _ = d ? i : y ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
                g = d ? r : r[e] || (r[e] = {}),
                A = g.prototype || (g.prototype = {});
            for (l in d && (n = e), n) f = ((c = !h && _ && void 0 !== _[l]) ? _ : n)[l], p = v && c ? a(f, i) : m && "function" == typeof f ? a(Function.call, f) : f, _ && s(_, l, f, t & u.U), g[l] != f && o(g, l, p), m && A[l] != f && (A[l] = f)
        };
    i.core = r, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e, n) {
    "use strict";
    t.exports = n(354)
}, function(t, e, n) {
    var i = n(6);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    t.exports = n(357)()
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var i = n(54)("wks"),
        r = n(37),
        o = n(3).Symbol,
        s = "function" == typeof o;
    (t.exports = function(t) {
        return i[t] || (i[t] = s && o[t] || (s ? o : r)("Symbol." + t))
    }).store = i
}, function(t, e, n) {
    t.exports = !n(5)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var i = n(2),
        r = n(100),
        o = n(25),
        s = Object.defineProperty;
    e.f = n(8) ? Object.defineProperty : function(t, e, n) {
        if (i(t), e = o(e, !0), i(n), r) try {
            return s(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var i = n(27),
        r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    "undefined" != typeof self && self, t.exports = function(t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var r = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, n.r = function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 155)
    }([function(t, e, n) {
        (function(i) {
            var r, o;
            /**
             *  Tone.js
             *  @author Yotam Mann
             *  @license http://opensource.org/licenses/MIT MIT License
             *  @copyright 2014-2019 Yotam Mann
             */
            r = [n(153)], void 0 === (o = function(t) {
                "use strict";
                var e = function() {
                    if (!(this instanceof e)) throw new Error("constructor needs to be called with the 'new' keyword")
                };
                return e.prototype.toString = function() {
                    for (var t in e) {
                        var n = t[0].match(/^[A-Z]$/),
                            i = e[t] === this.constructor;
                        if (e.isFunction(e[t]) && n && i) return t
                    }
                    return "Tone"
                }, e.prototype.dispose = function() {
                    return this
                }, e.prototype.set = function(t, n, i) {
                    if (e.isObject(t)) i = n;
                    else if (e.isString(t)) {
                        var r = {};
                        r[t] = n, t = r
                    }
                    t: for (var o in t) {
                        n = t[o];
                        var s = this;
                        if (-1 !== o.indexOf(".")) {
                            for (var a = o.split("."), u = 0; u < a.length - 1; u++)
                                if ((s = s[a[u]]) instanceof e) {
                                    a.splice(0, u + 1);
                                    var l = a.join(".");
                                    s.set(l, n);
                                    continue t
                                } o = a[a.length - 1]
                        }
                        var c = s[o];
                        e.isUndef(c) || (e.Signal && c instanceof e.Signal || e.Param && c instanceof e.Param ? c.value !== n && (e.isUndef(i) ? c.value = n : c.rampTo(n, i)) : c instanceof AudioParam ? c.value !== n && (c.value = n) : e.TimeBase && c instanceof e.TimeBase ? s[o] = n : c instanceof e ? c.set(n) : c !== n && (s[o] = n))
                    }
                    return this
                }, e.prototype.get = function(t) {
                    e.isUndef(t) ? t = this._collectDefaults(this.constructor) : e.isString(t) && (t = [t]);
                    for (var n = {}, i = 0; i < t.length; i++) {
                        var r = t[i],
                            o = this,
                            s = n;
                        if (-1 !== r.indexOf(".")) {
                            for (var a = r.split("."), u = 0; u < a.length - 1; u++) {
                                var l = a[u];
                                s[l] = s[l] || {}, s = s[l], o = o[l]
                            }
                            r = a[a.length - 1]
                        }
                        var c = o[r];
                        e.isObject(t[r]) ? s[r] = c.get() : e.Signal && c instanceof e.Signal ? s[r] = c.value : e.Param && c instanceof e.Param ? s[r] = c.value : c instanceof AudioParam ? s[r] = c.value : c instanceof e ? s[r] = c.get() : !e.isFunction(c) && e.isDefined(c) && (s[r] = c)
                    }
                    return n
                }, e.prototype._collectDefaults = function(t) {
                    var n = [];
                    if (e.isDefined(t.defaults) && (n = Object.keys(t.defaults)), e.isDefined(t._super))
                        for (var i = this._collectDefaults(t._super), r = 0; r < i.length; r++) - 1 === n.indexOf(i[r]) && n.push(i[r]);
                    return n
                }, e.defaults = function(t, n, i) {
                    var r = {};
                    if (1 === t.length && e.isObject(t[0])) r = t[0];
                    else
                        for (var o = 0; o < n.length; o++) r[n[o]] = t[o];
                    return e.isDefined(i.defaults) ? e.defaultArg(r, i.defaults) : e.isObject(i) ? e.defaultArg(r, i) : r
                }, e.defaultArg = function(t, n) {
                    if (e.isObject(t) && e.isObject(n)) {
                        var i = {};
                        for (var r in t) i[r] = e.defaultArg(n[r], t[r]);
                        for (var o in n) i[o] = e.defaultArg(t[o], n[o]);
                        return i
                    }
                    return e.isUndef(t) ? n : t
                }, e.prototype.log = function() {
                    if (this.debug || this.toString() === e.global.TONE_DEBUG_CLASS) {
                        var t = Array.from(arguments);
                        t.unshift(this.toString() + ":"), console.log.apply(void 0, t)
                    }
                }, e.prototype.assert = function(t, e) {
                    if (!t) throw new Error(e)
                }, e.connectSeries = function() {
                    for (var t = arguments[0], n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        t.connect(i), t = i
                    }
                    return e
                }, e.isUndef = function(t) {
                    return void 0 === t
                }, e.isDefined = function(t) {
                    return !e.isUndef(t)
                }, e.isFunction = function(t) {
                    return "function" == typeof t
                }, e.isNumber = function(t) {
                    return "number" == typeof t
                }, e.isObject = function(t) {
                    return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object
                }, e.isBoolean = function(t) {
                    return "boolean" == typeof t
                }, e.isArray = function(t) {
                    return Array.isArray(t)
                }, e.isString = function(t) {
                    return "string" == typeof t
                }, e.isNote = function(t) {
                    return e.isString(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
                }, e.noOp = function() {}, e.prototype._readOnly = function(t) {
                    if (Array.isArray(t))
                        for (var e = 0; e < t.length; e++) this._readOnly(t[e]);
                    else Object.defineProperty(this, t, {
                        writable: !1,
                        enumerable: !0
                    })
                }, e.prototype._writable = function(t) {
                    if (Array.isArray(t))
                        for (var e = 0; e < t.length; e++) this._writable(t[e]);
                    else Object.defineProperty(this, t, {
                        writable: !0
                    })
                }, e.State = {
                    Started: "started",
                    Stopped: "stopped",
                    Paused: "paused"
                }, e.global = e.isUndef(i) ? window : i, e.equalPowerScale = function(t) {
                    var e = .5 * Math.PI;
                    return Math.sin(t * e)
                }, e.dbToGain = function(t) {
                    return Math.pow(10, t / 20)
                }, e.gainToDb = function(t) {
                    return Math.log(t) / Math.LN10 * 20
                }, e.intervalToFrequencyRatio = function(t) {
                    return Math.pow(2, t / 12)
                }, e.prototype.now = function() {
                    return e.context.now()
                }, e.now = function() {
                    return e.context.now()
                }, e.prototype.immediate = function() {
                    return e.context.currentTime
                }, e.immediate = function() {
                    return e.context.currentTime
                }, e.extend = function(t, n) {
                    function i() {}
                    e.isUndef(n) && (n = e), i.prototype = n.prototype, t.prototype = new i, t.prototype.constructor = t, t._super = n
                }, e._audioContext = null, e.start = function() {
                    return e.context.resume()
                }, Object.defineProperty(e, "context", {
                    get: function() {
                        return e._audioContext
                    },
                    set: function(t) {
                        t.isContext ? e._audioContext = t : e._audioContext = new e.Context(t), e.Context.emit("init", e._audioContext)
                    }
                }), Object.defineProperty(e.prototype, "context", {
                    get: function() {
                        return e.context
                    }
                }), e.setContext = function(t) {
                    e.context = t
                }, Object.defineProperty(e.prototype, "blockTime", {
                    get: function() {
                        return 128 / this.context.sampleRate
                    }
                }), Object.defineProperty(e.prototype, "sampleTime", {
                    get: function() {
                        return 1 / this.context.sampleRate
                    }
                }), Object.defineProperty(e, "supported", {
                    get: function() {
                        var t = e.global.hasOwnProperty("AudioContext") || e.global.hasOwnProperty("webkitAudioContext"),
                            n = e.global.hasOwnProperty("Promise");
                        return t && n
                    }
                }), Object.defineProperty(e, "initialized", {
                    get: function() {
                        return Boolean(e.context)
                    }
                }), e.getContext = function(t) {
                    if (e.initialized) t(e.context);
                    else {
                        var n = function() {
                            t(e.context), e.Context.off("init", n)
                        };
                        e.Context.on("init", n)
                    }
                    return e
                }, e.version = t, e
            }.apply(e, r)) || (t.exports = o)
        }).call(this, n(154))
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(7), n(4), n(14), n(97), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.Signal = function() {
                var e = t.defaults(arguments, ["value", "units"], t.Signal);
                t.Param.call(this, e), this._constantSource = this.context.createConstantSource(), this._constantSource.start(0), this._param = this._constantSource.offset, this.value = e.value, this.output = this._constantSource, this.input = this._param = this.output.offset
            }, t.extend(t.Signal, t.Param), t.Signal.defaults = {
                value: 0,
                units: t.Type.Default,
                convert: !0
            }, t.Signal.prototype.connect = t.SignalBase.prototype.connect, t.Signal.prototype.disconnect = t.SignalBase.prototype.disconnect, t.Signal.prototype.getValueAtTime = function(e) {
                return this._param.getValueAtTime ? this._param.getValueAtTime(e) : t.Param.prototype.getValueAtTime.call(this, e)
            }, t.Signal.prototype.dispose = function() {
                return t.Param.prototype.dispose.call(this), this._constantSource.disconnect(), this._constantSource = null, this
            }, t.Signal
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(20)], void 0 === (r = function(t) {
            return t.AudioNode = function() {
                t.call(this);
                var e = t.defaults(arguments, ["context"], {
                    context: t.context
                });
                this._context = e.context
            }, t.extend(t.AudioNode), Object.defineProperty(t.AudioNode.prototype, "context", {
                get: function() {
                    return this._context
                }
            }), t.AudioNode.prototype.createInsOuts = function(t, e) {
                1 === t ? this.input = this.context.createGain() : t > 1 && (this.input = new Array(t)), 1 === e ? this.output = this.context.createGain() : e > 1 && (this.output = new Array(e))
            }, Object.defineProperty(t.AudioNode.prototype, "channelCount", {
                get: function() {
                    return this.output.channelCount
                },
                set: function(t) {
                    return this.output.channelCount = t
                }
            }), Object.defineProperty(t.AudioNode.prototype, "channelCountMode", {
                get: function() {
                    return this.output.channelCountMode
                },
                set: function(t) {
                    return this.output.channelCountMode = t
                }
            }), Object.defineProperty(t.AudioNode.prototype, "channelInterpretation", {
                get: function() {
                    return this.output.channelInterpretation
                },
                set: function(t) {
                    return this.output.channelInterpretation = t
                }
            }), Object.defineProperty(t.AudioNode.prototype, "numberOfInputs", {
                get: function() {
                    return this.input ? t.isArray(this.input) ? this.input.length : 1 : 0
                }
            }), Object.defineProperty(t.AudioNode.prototype, "numberOfOutputs", {
                get: function() {
                    return this.output ? t.isArray(this.output) ? this.output.length : 1 : 0
                }
            }), t.AudioNode.prototype.connect = function(e, n, i) {
                return t.isArray(this.output) ? (n = t.defaultArg(n, 0), this.output[n].connect(e, 0, i)) : this.output.connect(e, n, i), this
            }, t.AudioNode.prototype.disconnect = function(e, n, i) {
                t.isArray(this.output) ? t.isNumber(e) ? this.output[e].disconnect() : (n = t.defaultArg(n, 0), this.output[n].disconnect(e, 0, i)) : this.output.disconnect.apply(this.output, arguments)
            }, t.AudioNode.prototype.chain = function() {
                for (var t = this, e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    t.connect(n), t = n
                }
                return this
            }, t.AudioNode.prototype.fan = function() {
                for (var t = 0; t < arguments.length; t++) this.connect(arguments[t]);
                return this
            }, t.global.AudioNode && (AudioNode.prototype.chain = t.AudioNode.prototype.chain, AudioNode.prototype.fan = t.AudioNode.prototype.fan), t.AudioNode.prototype.dispose = function() {
                return t.isDefined(this.input) && (this.input instanceof AudioNode && this.input.disconnect(), this.input = null), t.isDefined(this.output) && (this.output instanceof AudioNode && this.output.disconnect(), this.output = null), this._context = null, this
            }, t.AudioNode
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(14), n(4), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Gain = function() {
                var e = t.defaults(arguments, ["gain", "units"], t.Gain);
                t.AudioNode.call(this, e), this.input = this.output = this._gainNode = this.context.createGain(), this.gain = new t.Param({
                    param: this._gainNode.gain,
                    units: e.units,
                    value: e.gain,
                    convert: e.convert
                }), this._readOnly("gain")
            }, t.extend(t.Gain, t.AudioNode), t.Gain.defaults = {
                gain: 1,
                convert: !0
            }, t.Gain.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this), this._gainNode.disconnect(), this._gainNode = null, this._writable("gain"), this.gain.dispose(), this.gain = null
            }, t.Gain
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(65), n(46), n(45), n(20)], void 0 === (r = function(t) {
            return t.Type = {
                Default: "number",
                Time: "time",
                Frequency: "frequency",
                TransportTime: "transportTime",
                Ticks: "ticks",
                NormalRange: "normalRange",
                AudioRange: "audioRange",
                Decibels: "db",
                Interval: "interval",
                BPM: "bpm",
                Positive: "positive",
                Gain: "gain",
                Cents: "cents",
                Degrees: "degrees",
                MIDI: "midi",
                BarsBeatsSixteenths: "barsBeatsSixteenths",
                Samples: "samples",
                Hertz: "hertz",
                Note: "note",
                Milliseconds: "milliseconds",
                Seconds: "seconds",
                Notation: "notation"
            }, t.prototype.toSeconds = function(e) {
                return t.isNumber(e) ? e : t.isUndef(e) ? this.now() : t.isString(e) || t.isObject(e) ? new t.Time(e).toSeconds() : e instanceof t.TimeBase ? e.toSeconds() : void 0
            }, t.prototype.toFrequency = function(e) {
                return t.isNumber(e) ? e : t.isString(e) || t.isUndef(e) || t.isObject(e) ? new t.Frequency(e).valueOf() : e instanceof t.TimeBase ? e.toFrequency() : void 0
            }, t.prototype.toTicks = function(e) {
                return t.isNumber(e) || t.isString(e) || t.isObject(e) ? new t.TransportTime(e).toTicks() : t.isUndef(e) ? t.Transport.ticks : e instanceof t.TimeBase ? e.toTicks() : void 0
            }, t
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(14), n(3), n(36)], void 0 === (r = function(t) {
            "use strict";
            return t.Multiply = function(e) {
                t.Signal.call(this), this.createInsOuts(2, 0), this._mult = this.input[0] = this.output = new t.Gain, this._param = this.input[1] = this.output.gain, this.value = t.defaultArg(e, 0), this.proxy = !1
            }, t.extend(t.Multiply, t.Signal), t.Multiply.prototype.dispose = function() {
                return t.Signal.prototype.dispose.call(this), this._mult.dispose(), this._mult = null, this._param = null, this
            }, t.Multiply
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(16), n(27), n(40), n(4), n(33), n(1), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Source = function(e) {
                e = t.defaultArg(e, t.Source.defaults), t.AudioNode.call(this), this._volume = this.output = new t.Volume(e.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._state = new t.TimelineState(t.State.Stopped), this._state.memory = 100, this._synced = !1, this._scheduled = [], this._volume.output.output.channelCount = 2, this._volume.output.output.channelCountMode = "explicit", this.mute = e.mute
            }, t.extend(t.Source, t.AudioNode), t.Source.defaults = {
                volume: 0,
                mute: !1
            }, Object.defineProperty(t.Source.prototype, "state", {
                get: function() {
                    return this._synced ? t.Transport.state === t.State.Started ? this._state.getValueAtTime(t.Transport.seconds) : t.State.Stopped : this._state.getValueAtTime(this.now())
                }
            }), Object.defineProperty(t.Source.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }), t.Source.prototype._start = t.noOp, t.Source.prototype.restart = t.noOp, t.Source.prototype._stop = t.noOp, t.Source.prototype.start = function(e, n, i) {
                if (e = t.isUndef(e) && this._synced ? t.Transport.seconds : this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Started) this._state.cancel(e), this._state.setStateAtTime(t.State.Started, e), this.restart(e, n, i);
                else if (this._state.setStateAtTime(t.State.Started, e), this._synced) {
                    var r = this._state.get(e);
                    r.offset = t.defaultArg(n, 0), r.duration = i;
                    var o = t.Transport.schedule(function(t) {
                        this._start(t, n, i)
                    }.bind(this), e);
                    this._scheduled.push(o), t.Transport.state === t.State.Started && this._syncedStart(this.now(), t.Transport.seconds)
                } else this._start.apply(this, arguments);
                return this
            }, t.Source.prototype.stop = function(e) {
                if (e = t.isUndef(e) && this._synced ? t.Transport.seconds : this.toSeconds(e), this._synced) {
                    var n = t.Transport.schedule(this._stop.bind(this), e);
                    this._scheduled.push(n)
                } else this._stop.apply(this, arguments);
                return this._state.cancel(e), this._state.setStateAtTime(t.State.Stopped, e), this
            }, t.Source.prototype.sync = function() {
                return this._synced = !0, this._syncedStart = function(e, n) {
                    if (n > 0) {
                        var i = this._state.get(n);
                        if (i && i.state === t.State.Started && i.time !== n) {
                            var r, o = n - this.toSeconds(i.time);
                            i.duration && (r = this.toSeconds(i.duration) - o), this._start(e, this.toSeconds(i.offset) + o, r)
                        }
                    }
                }.bind(this), this._syncedStop = function(e) {
                    var n = t.Transport.getSecondsAtTime(Math.max(e - this.sampleTime, 0));
                    this._state.getValueAtTime(n) === t.State.Started && this._stop(e)
                }.bind(this), t.Transport.on("start loopStart", this._syncedStart), t.Transport.on("stop pause loopEnd", this._syncedStop), this
            }, t.Source.prototype.unsync = function() {
                this._synced && (t.Transport.off("stop pause loopEnd", this._syncedStop), t.Transport.off("start loopStart", this._syncedStart)), this._synced = !1;
                for (var e = 0; e < this._scheduled.length; e++) {
                    var n = this._scheduled[e];
                    t.Transport.clear(n)
                }
                return this._scheduled = [], this._state.cancel(0), this
            }, t.Source.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this), this.unsync(), this._scheduled = null, this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null, this._state.dispose(), this._state = null
            }, t.Source
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(36), n(98)], void 0 === (r = function(t) {
            "use strict";
            return t.WaveShaper = function(e, n) {
                t.SignalBase.call(this), this._shaper = this.input = this.output = this.context.createWaveShaper(), this._curve = null, Array.isArray(e) ? this.curve = e : isFinite(e) || t.isUndef(e) ? this._curve = new Float32Array(t.defaultArg(e, 1024)) : t.isFunction(e) && (this._curve = new Float32Array(t.defaultArg(n, 1024)), this.setMap(e))
            }, t.extend(t.WaveShaper, t.SignalBase), t.WaveShaper.prototype.setMap = function(t) {
                for (var e = new Array(this._curve.length), n = 0, i = this._curve.length; n < i; n++) {
                    var r = n / (i - 1) * 2 - 1;
                    e[n] = t(r, n)
                }
                return this.curve = e, this
            }, Object.defineProperty(t.WaveShaper.prototype, "curve", {
                get: function() {
                    return this._shaper.curve
                },
                set: function(t) {
                    this._curve = new Float32Array(t), this._shaper.curve = this._curve
                }
            }), Object.defineProperty(t.WaveShaper.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample
                },
                set: function(t) {
                    if (!["none", "2x", "4x"].includes(t)) throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");
                    this._shaper.oversample = t
                }
            }), t.WaveShaper.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._shaper.disconnect(), this._shaper = null, this._curve = null, this
            }, t.WaveShaper
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(23), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Effect = function() {
                var e = t.defaults(arguments, ["wet"], t.Effect);
                t.AudioNode.call(this), this.createInsOuts(1, 1), this._dryWet = new t.CrossFade(e.wet), this.wet = this._dryWet.fade, this.effectSend = new t.Gain, this.effectReturn = new t.Gain, this.input.connect(this._dryWet.a), this.input.connect(this.effectSend), this.effectReturn.connect(this._dryWet.b), this._dryWet.connect(this.output), this._readOnly(["wet"])
            }, t.extend(t.Effect, t.AudioNode), t.Effect.defaults = {
                wet: 1
            }, t.Effect.prototype.connectEffect = function(t) {
                return this.effectSend.chain(t, this.effectReturn), this
            }, t.Effect.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this.effectSend.dispose(), this.effectSend = null, this.effectReturn.dispose(), this.effectReturn = null, this._writable(["wet"]), this.wet = null, this
            }, t.Effect
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Filter = function() {
                var e = t.defaults(arguments, ["frequency", "type", "rolloff"], t.Filter);
                t.AudioNode.call(this), this.createInsOuts(1, 1), this._filters = [], this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(0, t.Type.Cents), this.gain = new t.Signal({
                    value: e.gain,
                    convert: !0,
                    type: t.Type.Decibels
                }), this.Q = new t.Signal(e.Q), this._type = e.type, this._rolloff = e.rolloff, this.rolloff = e.rolloff, this._readOnly(["detune", "frequency", "gain", "Q"])
            }, t.extend(t.Filter, t.AudioNode), t.Filter.defaults = {
                type: "lowpass",
                frequency: 350,
                rolloff: -12,
                Q: 1,
                gain: 0
            }, Object.defineProperty(t.Filter.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(t) {
                    if (-1 === ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"].indexOf(t)) throw new TypeError("Tone.Filter: invalid type " + t);
                    this._type = t;
                    for (var e = 0; e < this._filters.length; e++) this._filters[e].type = t
                }
            }), Object.defineProperty(t.Filter.prototype, "rolloff", {
                get: function() {
                    return this._rolloff
                },
                set: function(e) {
                    e = parseInt(e, 10);
                    var n = [-12, -24, -48, -96].indexOf(e);
                    if (-1 === n) throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");
                    n += 1, this._rolloff = e, this.input.disconnect();
                    for (var i = 0; i < this._filters.length; i++) this._filters[i].disconnect(), this._filters[i] = null;
                    this._filters = new Array(n);
                    for (var r = 0; r < n; r++) {
                        var o = this.context.createBiquadFilter();
                        o.type = this._type, this.frequency.connect(o.frequency), this.detune.connect(o.detune), this.Q.connect(o.Q), this.gain.connect(o.gain), this._filters[r] = o
                    }
                    var s = [this.input].concat(this._filters).concat([this.output]);
                    t.connectSeries.apply(t, s)
                }
            }), t.Filter.prototype.getFrequencyResponse = function(e) {
                e = t.defaultArg(e, 128);
                for (var n = new Float32Array(e).map(function() {
                        return 1
                    }), i = new Float32Array(e), r = 0; r < e; r++) {
                    var o = 19980 * Math.pow(r / e, 2) + 20;
                    i[r] = o
                }
                var s = new Float32Array(e),
                    a = new Float32Array(e);
                return this._filters.forEach(function() {
                    var t = this.context.createBiquadFilter();
                    t.type = this._type, t.Q.value = this.Q.value, t.frequency.value = this.frequency.value, t.gain.value = this.gain.value, t.getFrequencyResponse(i, s, a), s.forEach(function(t, e) {
                        n[e] *= t
                    })
                }.bind(this)), n
            }, t.Filter.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this);
                for (var e = 0; e < this._filters.length; e++) this._filters[e].disconnect(), this._filters[e] = null;
                return this._filters = null, this._writable(["detune", "frequency", "gain", "Q"]), this.frequency.dispose(), this.Q.dispose(), this.frequency = null, this.Q = null, this.detune.dispose(), this.detune = null, this.gain.dispose(), this.gain = null, this
            }, t.Filter
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Merge = function() {
                t.AudioNode.call(this), this.createInsOuts(2, 0), this.left = this.input[0] = new t.Gain, this.right = this.input[1] = new t.Gain, this._merger = this.output = this.context.createChannelMerger(2), this.left.connect(this._merger, 0, 0), this.right.connect(this._merger, 0, 1), this.left.channelCount = 1, this.right.channelCount = 1, this.left.channelCountMode = "explicit", this.right.channelCountMode = "explicit"
            }, t.extend(t.Merge, t.AudioNode), t.Merge.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this.left.dispose(), this.left = null, this.right.dispose(), this.right = null, this._merger.disconnect(), this._merger = null, this
            }, t.Merge
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(35), n(4), n(81)], void 0 === (r = function(t) {
            "use strict";
            return t.Buffer = function() {
                var e = t.defaults(arguments, ["url", "onload", "onerror"], t.Buffer);
                t.call(this), this._buffer = null, this._reversed = e.reverse, this._xhr = null, this.onload = t.noOp, e.url instanceof AudioBuffer || e.url instanceof t.Buffer ? (this.set(e.url), this.loaded || (this.onload = e.onload)) : t.isString(e.url) && this.load(e.url).then(e.onload).catch(e.onerror)
            }, t.extend(t.Buffer), t.Buffer.defaults = {
                url: void 0,
                reverse: !1,
                onload: t.noOp,
                onerror: t.noOp
            }, t.Buffer.prototype.set = function(e) {
                return e instanceof t.Buffer ? e.loaded ? this._buffer = e.get() : e.onload = function() {
                    this.set(e), this.onload(this)
                }.bind(this) : this._buffer = e, this
            }, t.Buffer.prototype.get = function() {
                return this._buffer
            }, t.Buffer.prototype.load = function(e, n, i) {
                return new Promise(function(r, o) {
                    this._xhr = t.Buffer.load(e, function(t) {
                        this._xhr = null, this.set(t), r(this), this.onload(this), n && n(this)
                    }.bind(this), function(t) {
                        this._xhr = null, o(t), i && i(t)
                    }.bind(this))
                }.bind(this))
            }, t.Buffer.prototype.dispose = function() {
                return t.prototype.dispose.call(this), this._buffer = null, this._xhr && (t.Buffer._removeFromDownloadQueue(this._xhr), this._xhr.abort(), this._xhr = null), this
            }, Object.defineProperty(t.Buffer.prototype, "loaded", {
                get: function() {
                    return this.length > 0
                }
            }), Object.defineProperty(t.Buffer.prototype, "duration", {
                get: function() {
                    return this._buffer ? this._buffer.duration : 0
                }
            }), Object.defineProperty(t.Buffer.prototype, "length", {
                get: function() {
                    return this._buffer ? this._buffer.length : 0
                }
            }), Object.defineProperty(t.Buffer.prototype, "numberOfChannels", {
                get: function() {
                    return this._buffer ? this._buffer.numberOfChannels : 0
                }
            }), t.Buffer.prototype.fromArray = function(t) {
                var e = t[0].length > 0,
                    n = e ? t.length : 1,
                    i = e ? t[0].length : t.length,
                    r = this.context.createBuffer(n, i, this.context.sampleRate);
                e || 1 !== n || (t = [t]);
                for (var o = 0; o < n; o++) r.copyToChannel(t[o], o);
                return this._buffer = r, this
            }, t.Buffer.prototype.toMono = function(e) {
                if (t.isNumber(e)) this.fromArray(this.toArray(e));
                else {
                    for (var n = new Float32Array(this.length), i = this.numberOfChannels, r = 0; r < i; r++)
                        for (var o = this.toArray(r), s = 0; s < o.length; s++) n[s] += o[s];
                    n = n.map(function(t) {
                        return t / i
                    }), this.fromArray(n)
                }
                return this
            }, t.Buffer.prototype.toArray = function(e) {
                if (t.isNumber(e)) return this.getChannelData(e);
                if (1 === this.numberOfChannels) return this.toArray(0);
                for (var n = [], i = 0; i < this.numberOfChannels; i++) n[i] = this.getChannelData(i);
                return n
            }, t.Buffer.prototype.getChannelData = function(t) {
                return this._buffer.getChannelData(t)
            }, t.Buffer.prototype.slice = function(e, n) {
                n = t.defaultArg(n, this.duration);
                for (var i = Math.floor(this.context.sampleRate * this.toSeconds(e)), r = Math.floor(this.context.sampleRate * this.toSeconds(n)), o = [], s = 0; s < this.numberOfChannels; s++) o[s] = this.toArray(s).slice(i, r);
                return (new t.Buffer).fromArray(o)
            }, t.Buffer.prototype._reverse = function() {
                if (this.loaded)
                    for (var t = 0; t < this.numberOfChannels; t++) Array.prototype.reverse.call(this.getChannelData(t));
                return this
            }, Object.defineProperty(t.Buffer.prototype, "reverse", {
                get: function() {
                    return this._reversed
                },
                set: function(t) {
                    this._reversed !== t && (this._reversed = t, this._reverse())
                }
            }), t.Emitter.mixin(t.Buffer), t.Buffer._downloadQueue = [], t.Buffer.baseUrl = "", t.Buffer.fromArray = function(e) {
                return (new t.Buffer).fromArray(e)
            }, t.Buffer.fromUrl = function(e) {
                var n = new t.Buffer;
                return n.load(e).then(function() {
                    return n
                })
            }, t.Buffer._removeFromDownloadQueue = function(e) {
                var n = t.Buffer._downloadQueue.indexOf(e); - 1 !== n && t.Buffer._downloadQueue.splice(n, 1)
            }, t.Buffer.load = function(e, n, i) {
                n = t.defaultArg(n, t.noOp);
                var r = e.match(/\[(.+\|?)+\]$/);
                if (r) {
                    for (var o = r[1].split("|"), s = o[0], a = 0; a < o.length; a++)
                        if (t.Buffer.supportsType(o[a])) {
                            s = o[a];
                            break
                        } e = e.replace(r[0], s)
                }

                function u(e) {
                    if (t.Buffer._removeFromDownloadQueue(c), t.Buffer.emit("error", e), !i) throw e;
                    i(e)
                }

                function l() {
                    for (var e = 0, n = 0; n < t.Buffer._downloadQueue.length; n++) e += t.Buffer._downloadQueue[n].progress;
                    t.Buffer.emit("progress", e / t.Buffer._downloadQueue.length)
                }
                var c = new XMLHttpRequest;
                return c.open("GET", t.Buffer.baseUrl + e, !0), c.responseType = "arraybuffer", c.progress = 0, t.Buffer._downloadQueue.push(c), c.addEventListener("load", function() {
                    200 === c.status ? t.context.decodeAudioData(c.response).then(function(e) {
                        c.progress = 1, l(), n(e), t.Buffer._removeFromDownloadQueue(c), 0 === t.Buffer._downloadQueue.length && t.Buffer.emit("load")
                    }).catch(function() {
                        t.Buffer._removeFromDownloadQueue(c), u("Tone.Buffer: could not decode audio data: " + e)
                    }) : u("Tone.Buffer: could not locate file: " + e)
                }), c.addEventListener("error", u), c.addEventListener("progress", function(t) {
                    t.lengthComputable && (c.progress = t.loaded / t.total * .95, l())
                }), c.send(), c
            }, t.Buffer.cancelDownloads = function() {
                return t.Buffer._downloadQueue.slice().forEach(function(e) {
                    t.Buffer._removeFromDownloadQueue(e), e.abort()
                }), t.Buffer
            }, t.Buffer.supportsType = function(t) {
                var e = t.split(".");
                return e = e[e.length - 1], "" !== document.createElement("audio").canPlayType("audio/" + e)
            }, t.loaded = function() {
                var e, n;

                function i() {
                    t.Buffer.off("load", e), t.Buffer.off("error", n)
                }
                return new Promise(function(i, r) {
                    e = function() {
                        i()
                    }, n = function() {
                        r()
                    }, t.Buffer.on("load", e), t.Buffer.on("error", n)
                }).then(i).catch(function(t) {
                    throw i(), new Error(t)
                })
            }, t.Buffer
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(17), n(26), n(2), n(1), n(22), n(4), n(28)], void 0 === (r = function(t) {
            "use strict";
            return t.LFO = function() {
                var e = t.defaults(arguments, ["frequency", "min", "max"], t.LFO);
                t.AudioNode.call(this), this._oscillator = new t.Oscillator({
                    frequency: e.frequency,
                    type: e.type
                }), this.frequency = this._oscillator.frequency, this.amplitude = this._oscillator.volume, this.amplitude.units = t.Type.NormalRange, this.amplitude.value = e.amplitude, this._stoppedSignal = new t.Signal(0, t.Type.AudioRange), this._zeros = new t.Zero, this._stoppedValue = 0, this._a2g = new t.AudioToGain, this._scaler = this.output = new t.Scale(e.min, e.max), this._units = t.Type.Default, this.units = e.units, this._oscillator.chain(this._a2g, this._scaler), this._zeros.connect(this._a2g), this._stoppedSignal.connect(this._a2g), this._readOnly(["amplitude", "frequency"]), this.phase = e.phase
            }, t.extend(t.LFO, t.AudioNode), t.LFO.defaults = {
                type: "sine",
                min: 0,
                max: 1,
                phase: 0,
                frequency: "4n",
                amplitude: 1,
                units: t.Type.Default
            }, t.LFO.prototype.start = function(t) {
                return t = this.toSeconds(t), this._stoppedSignal.setValueAtTime(0, t), this._oscillator.start(t), this
            }, t.LFO.prototype.stop = function(t) {
                return t = this.toSeconds(t), this._stoppedSignal.setValueAtTime(this._stoppedValue, t), this._oscillator.stop(t), this
            }, t.LFO.prototype.sync = function() {
                return this._oscillator.sync(), this._oscillator.syncFrequency(), this
            }, t.LFO.prototype.unsync = function() {
                return this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this
            }, Object.defineProperty(t.LFO.prototype, "min", {
                get: function() {
                    return this._toUnits(this._scaler.min)
                },
                set: function(t) {
                    t = this._fromUnits(t), this._scaler.min = t
                }
            }), Object.defineProperty(t.LFO.prototype, "max", {
                get: function() {
                    return this._toUnits(this._scaler.max)
                },
                set: function(t) {
                    t = this._fromUnits(t), this._scaler.max = t
                }
            }), Object.defineProperty(t.LFO.prototype, "type", {
                get: function() {
                    return this._oscillator.type
                },
                set: function(t) {
                    this._oscillator.type = t, this._stoppedValue = this._oscillator._getInitialValue(), this._stoppedSignal.value = this._stoppedValue
                }
            }), Object.defineProperty(t.LFO.prototype, "phase", {
                get: function() {
                    return this._oscillator.phase
                },
                set: function(t) {
                    this._oscillator.phase = t, this._stoppedValue = this._oscillator._getInitialValue(), this._stoppedSignal.value = this._stoppedValue
                }
            }), Object.defineProperty(t.LFO.prototype, "units", {
                get: function() {
                    return this._units
                },
                set: function(t) {
                    var e = this.min,
                        n = this.max;
                    this._units = t, this.min = e, this.max = n
                }
            }), Object.defineProperty(t.LFO.prototype, "mute", {
                get: function() {
                    return this._oscillator.mute
                },
                set: function(t) {
                    this._oscillator.mute = t
                }
            }), Object.defineProperty(t.LFO.prototype, "state", {
                get: function() {
                    return this._oscillator.state
                }
            }), t.LFO.prototype.connect = function(e) {
                return e.constructor !== t.Signal && e.constructor !== t.Param || (this.convert = e.convert, this.units = e.units), t.SignalBase.prototype.connect.apply(this, arguments), this
            }, t.LFO.prototype._fromUnits = t.Param.prototype._fromUnits, t.LFO.prototype._toUnits = t.Param.prototype._toUnits, t.LFO.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable(["amplitude", "frequency"]), this._oscillator.dispose(), this._oscillator = null, this._stoppedSignal.dispose(), this._stoppedSignal = null, this._zeros.dispose(), this._zeros = null, this._scaler.dispose(), this._scaler = null, this._a2g.dispose(), this._a2g = null, this.frequency = null, this.amplitude = null, this
            }, t.LFO
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(29), n(94), n(1), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.Subtract = function(e) {
                t.Signal.call(this), this.createInsOuts(2, 0), this._sum = this.input[0] = this.output = new t.Gain, this._neg = new t.Negate, this._param = this.input[1] = new t.Signal(e), this._param.chain(this._neg, this._sum), this.proxy = !1
            }, t.extend(t.Subtract, t.Signal), t.Subtract.prototype.dispose = function() {
                return t.Signal.prototype.dispose.call(this), this._neg.dispose(), this._neg = null, this._sum.disconnect(), this._sum = null, this
            }, t.Subtract
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(4), n(2), n(24)], void 0 === (r = function(t) {
            "use strict";
            return t.Param = function() {
                var e = t.defaults(arguments, ["param", "units", "convert"], t.Param);
                t.AudioNode.call(this, e), this._param = this.input = e.param, this.units = e.units, this.convert = e.convert, this.overridden = !1, this._events = new t.Timeline(1e3), t.isDefined(e.value) && this._param && this.setValueAtTime(e.value, 0)
            }, t.extend(t.Param, t.AudioNode), t.Param.defaults = {
                units: t.Type.Default,
                convert: !0,
                param: void 0
            }, Object.defineProperty(t.Param.prototype, "value", {
                get: function() {
                    var t = this.now();
                    return this._toUnits(this.getValueAtTime(t))
                },
                set: function(t) {
                    this._initialValue = this._fromUnits(t), this.cancelScheduledValues(this.now()), this.setValueAtTime(t, this.now())
                }
            }), Object.defineProperty(t.Param.prototype, "minValue", {
                get: function() {
                    return this.units === t.Type.Time || this.units === t.Type.Frequency || this.units === t.Type.NormalRange || this.units === t.Type.Positive || this.units === t.Type.BPM ? 0 : this.units === t.Type.AudioRange ? -1 : this.units === t.Type.Decibels ? -1 / 0 : this._param.minValue
                }
            }), Object.defineProperty(t.Param.prototype, "maxValue", {
                get: function() {
                    return this.units === t.Type.NormalRange || this.units === t.Type.AudioRange ? 1 : this._param.maxValue
                }
            }), t.Param.prototype._fromUnits = function(e) {
                if (!this.convert && !t.isUndef(this.convert) || this.overridden) return e;
                switch (this.units) {
                    case t.Type.Time:
                        return this.toSeconds(e);
                    case t.Type.Frequency:
                        return this.toFrequency(e);
                    case t.Type.Decibels:
                        return t.dbToGain(e);
                    case t.Type.NormalRange:
                        return Math.min(Math.max(e, 0), 1);
                    case t.Type.AudioRange:
                        return Math.min(Math.max(e, -1), 1);
                    case t.Type.Positive:
                        return Math.max(e, 0);
                    default:
                        return e
                }
            }, t.Param.prototype._toUnits = function(e) {
                if (!this.convert && !t.isUndef(this.convert)) return e;
                switch (this.units) {
                    case t.Type.Decibels:
                        return t.gainToDb(e);
                    default:
                        return e
                }
            }, t.Param.prototype._minOutput = 1e-5, t.Param.AutomationType = {
                Linear: "linearRampToValueAtTime",
                Exponential: "exponentialRampToValueAtTime",
                Target: "setTargetAtTime",
                SetValue: "setValueAtTime",
                Cancel: "cancelScheduledValues"
            }, t.Param.prototype.setValueAtTime = function(e, n) {
                return n = this.toSeconds(n), e = this._fromUnits(e), this._events.add({
                    type: t.Param.AutomationType.SetValue,
                    value: e,
                    time: n
                }), this.log(t.Param.AutomationType.SetValue, e, n), this._param.setValueAtTime(e, n), this
            }, t.Param.prototype.getValueAtTime = function(e) {
                e = this.toSeconds(e);
                var n = this._events.getAfter(e),
                    i = this._events.get(e),
                    r = t.defaultArg(this._initialValue, this._param.defaultValue),
                    o = r;
                if (null === i) o = r;
                else if (i.type === t.Param.AutomationType.Target) {
                    var s, a = this._events.getBefore(i.time);
                    s = null === a ? r : a.value, o = this._exponentialApproach(i.time, s, i.value, i.constant, e)
                } else o = null === n ? i.value : n.type === t.Param.AutomationType.Linear ? this._linearInterpolate(i.time, i.value, n.time, n.value, e) : n.type === t.Param.AutomationType.Exponential ? this._exponentialInterpolate(i.time, i.value, n.time, n.value, e) : i.value;
                return o
            }, t.Param.prototype.setRampPoint = function(t) {
                t = this.toSeconds(t);
                var e = this.getValueAtTime(t);
                return this.cancelAndHoldAtTime(t), 0 === e && (e = this._minOutput), this.setValueAtTime(this._toUnits(e), t), this
            }, t.Param.prototype.linearRampToValueAtTime = function(e, n) {
                return e = this._fromUnits(e), n = this.toSeconds(n), this._events.add({
                    type: t.Param.AutomationType.Linear,
                    value: e,
                    time: n
                }), this.log(t.Param.AutomationType.Linear, e, n), this._param.linearRampToValueAtTime(e, n), this
            }, t.Param.prototype.exponentialRampToValueAtTime = function(e, n) {
                return e = this._fromUnits(e), e = Math.max(this._minOutput, e), n = this.toSeconds(n), this._events.add({
                    type: t.Param.AutomationType.Exponential,
                    time: n,
                    value: e
                }), this.log(t.Param.AutomationType.Exponential, e, n), this._param.exponentialRampToValueAtTime(e, n), this
            }, t.Param.prototype.exponentialRampTo = function(t, e, n) {
                return n = this.toSeconds(n), this.setRampPoint(n), this.exponentialRampToValueAtTime(t, n + this.toSeconds(e)), this
            }, t.Param.prototype.linearRampTo = function(t, e, n) {
                return n = this.toSeconds(n), this.setRampPoint(n), this.linearRampToValueAtTime(t, n + this.toSeconds(e)), this
            }, t.Param.prototype.targetRampTo = function(t, e, n) {
                return n = this.toSeconds(n), this.setRampPoint(n), this.exponentialApproachValueAtTime(t, n, e), this
            }, t.Param.prototype.exponentialApproachValueAtTime = function(t, e, n) {
                var i = Math.log(this.toSeconds(n) + 1) / Math.log(200);
                return e = this.toSeconds(e), this.setTargetAtTime(t, e, i)
            }, t.Param.prototype.setTargetAtTime = function(e, n, i) {
                if (e = this._fromUnits(e), i <= 0) throw new Error("timeConstant must be greater than 0");
                return n = this.toSeconds(n), this._events.add({
                    type: t.Param.AutomationType.Target,
                    value: e,
                    time: n,
                    constant: i
                }), this.log(t.Param.AutomationType.Target, e, n, i), this._param.setTargetAtTime(e, n, i), this
            }, t.Param.prototype.setValueCurveAtTime = function(e, n, i, r) {
                r = t.defaultArg(r, 1), i = this.toSeconds(i), n = this.toSeconds(n), this.setValueAtTime(e[0] * r, n);
                for (var o = i / (e.length - 1), s = 1; s < e.length; s++) this.linearRampToValueAtTime(e[s] * r, n + s * o);
                return this
            }, t.Param.prototype.cancelScheduledValues = function(e) {
                return e = this.toSeconds(e), this._events.cancel(e), this._param.cancelScheduledValues(e), this.log(t.Param.AutomationType.Cancel, e), this
            }, t.Param.prototype.cancelAndHoldAtTime = function(e) {
                var n = this.getValueAtTime(e);
                this.log("cancelAndHoldAtTime", e, "value=" + n), this._param.cancelScheduledValues(e);
                var i = this._events.get(e),
                    r = this._events.getAfter(e);
                return i && i.time === e ? r ? this._events.cancel(r.time) : this._events.cancel(e + this.sampleTime) : r && (this._events.cancel(r.time), r.type === t.Param.AutomationType.Linear ? this.linearRampToValueAtTime(n, e) : r.type === t.Param.AutomationType.Exponential && this.exponentialRampToValueAtTime(n, e)), this._events.add({
                    type: t.Param.AutomationType.SetValue,
                    value: n,
                    time: e
                }), this._param.setValueAtTime(n, e), this
            }, t.Param.prototype.rampTo = function(e, n, i) {
                return n = t.defaultArg(n, .1), this.units === t.Type.Frequency || this.units === t.Type.BPM || this.units === t.Type.Decibels ? this.exponentialRampTo(e, n, i) : this.linearRampTo(e, n, i), this
            }, t.Param.prototype._exponentialApproach = function(t, e, n, i, r) {
                return n + (e - n) * Math.exp(-(r - t) / i)
            }, t.Param.prototype._linearInterpolate = function(t, e, n, i, r) {
                return e + (r - t) / (n - t) * (i - e)
            }, t.Param.prototype._exponentialInterpolate = function(t, e, n, i, r) {
                return e * Math.pow(i / e, (r - t) / (n - t))
            }, t.Param.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._param = null, this._events = null, this
            }, t.Param
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(8), n(19), n(10), n(23)], void 0 === (r = function(t) {
            "use strict";
            return t.StereoEffect = function() {
                t.AudioNode.call(this);
                var e = t.defaults(arguments, ["wet"], t.Effect);
                this.createInsOuts(1, 1), this._dryWet = new t.CrossFade(e.wet), this.wet = this._dryWet.fade, this._split = new t.Split, this.effectSendL = this._split.left, this.effectSendR = this._split.right, this._merge = new t.Merge, this.effectReturnL = this._merge.left, this.effectReturnR = this._merge.right, this.input.connect(this._split), this.input.connect(this._dryWet, 0, 0), this._merge.connect(this._dryWet, 0, 1), this._dryWet.connect(this.output), this._readOnly(["wet"])
            }, t.extend(t.StereoEffect, t.Effect), t.StereoEffect.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this._split.dispose(), this._split = null, this._merge.dispose(), this._merge = null, this.effectSendL = null, this.effectSendR = null, this.effectReturnL = null, this.effectReturnR = null, this._writable(["wet"]), this.wet = null, this
            }, t.StereoEffect
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(86), n(4), n(24), n(35), n(3), n(84), n(83), n(55)], void 0 === (r = function(t) {
            "use strict";
            t.Transport = function() {
                t.Emitter.call(this), t.getContext(function() {
                    this.loop = !1, this._loopStart = 0, this._loopEnd = 0, this._ppq = e.defaults.PPQ, this._clock = new t.Clock({
                        callback: this._processTick.bind(this),
                        frequency: 0
                    }), this._bindClockEvents(), this.bpm = this._clock.frequency, this.bpm._toUnits = this._toUnits.bind(this), this.bpm._fromUnits = this._fromUnits.bind(this), this.bpm.units = t.Type.BPM, this.bpm.value = e.defaults.bpm, this._readOnly("bpm"), this._timeSignature = e.defaults.timeSignature, this._scheduledEvents = {}, this._timeline = new t.Timeline, this._repeatedEvents = new t.IntervalTimeline, this._syncedSignals = [], this._swingTicks = e.defaults.PPQ / 2, this._swingAmount = 0, this.context.transport = this
                }.bind(this))
            }, t.extend(t.Transport, t.Emitter), t.Transport.defaults = {
                bpm: 120,
                swing: 0,
                swingSubdivision: "8n",
                timeSignature: 4,
                loopStart: 0,
                loopEnd: "4m",
                PPQ: 192
            }, t.Transport.prototype.isTransport = !0, t.Transport.prototype._processTick = function(e, n) {
                if (this._swingAmount > 0 && n % this._ppq != 0 && n % (2 * this._swingTicks) != 0) {
                    var i = n % (2 * this._swingTicks) / (2 * this._swingTicks),
                        r = Math.sin(i * Math.PI) * this._swingAmount;
                    e += t.Ticks(2 * this._swingTicks / 3).toSeconds() * r
                }
                this.loop && n >= this._loopEnd && (this.emit("loopEnd", e), this._clock.setTicksAtTime(this._loopStart, e), n = this._loopStart, this.emit("loopStart", e, this._clock.getSecondsAtTime(e)), this.emit("loop", e)), this._timeline.forEachAtTime(n, function(t) {
                    t.invoke(e)
                })
            }, t.Transport.prototype.schedule = function(e, n) {
                var i = new t.TransportEvent(this, {
                    time: t.TransportTime(n),
                    callback: e
                });
                return this._addEvent(i, this._timeline)
            }, t.Transport.prototype.scheduleRepeat = function(e, n, i, r) {
                var o = new t.TransportRepeatEvent(this, {
                    callback: e,
                    interval: t.Time(n),
                    time: t.TransportTime(i),
                    duration: t.Time(t.defaultArg(r, 1 / 0))
                });
                return this._addEvent(o, this._repeatedEvents)
            }, t.Transport.prototype.scheduleOnce = function(e, n) {
                var i = new t.TransportEvent(this, {
                    time: t.TransportTime(n),
                    callback: e,
                    once: !0
                });
                return this._addEvent(i, this._timeline)
            }, t.Transport.prototype.clear = function(t) {
                if (this._scheduledEvents.hasOwnProperty(t)) {
                    var e = this._scheduledEvents[t.toString()];
                    e.timeline.remove(e.event), e.event.dispose(), delete this._scheduledEvents[t.toString()]
                }
                return this
            }, t.Transport.prototype._addEvent = function(t, e) {
                return this._scheduledEvents[t.id.toString()] = {
                    event: t,
                    timeline: e
                }, e.add(t), t.id
            }, t.Transport.prototype.cancel = function(e) {
                return e = t.defaultArg(e, 0), e = this.toTicks(e), this._timeline.forEachFrom(e, function(t) {
                    this.clear(t.id)
                }.bind(this)), this._repeatedEvents.forEachFrom(e, function(t) {
                    this.clear(t.id)
                }.bind(this)), this
            }, t.Transport.prototype._bindClockEvents = function() {
                this._clock.on("start", function(e, n) {
                    n = t.Ticks(n).toSeconds(), this.emit("start", e, n)
                }.bind(this)), this._clock.on("stop", function(t) {
                    this.emit("stop", t)
                }.bind(this)), this._clock.on("pause", function(t) {
                    this.emit("pause", t)
                }.bind(this))
            }, Object.defineProperty(t.Transport.prototype, "state", {
                get: function() {
                    return this._clock.getStateAtTime(this.now())
                }
            }), t.Transport.prototype.start = function(e, n) {
                return t.isDefined(n) && (n = this.toTicks(n)), this._clock.start(e, n), this
            }, t.Transport.prototype.stop = function(t) {
                return this._clock.stop(t), this
            }, t.Transport.prototype.pause = function(t) {
                return this._clock.pause(t), this
            }, t.Transport.prototype.toggle = function(e) {
                return e = this.toSeconds(e), this._clock.getStateAtTime(e) !== t.State.Started ? this.start(e) : this.stop(e), this
            }, Object.defineProperty(t.Transport.prototype, "timeSignature", {
                get: function() {
                    return this._timeSignature
                },
                set: function(e) {
                    t.isArray(e) && (e = e[0] / e[1] * 4), this._timeSignature = e
                }
            }), Object.defineProperty(t.Transport.prototype, "loopStart", {
                get: function() {
                    return t.Ticks(this._loopStart).toSeconds()
                },
                set: function(t) {
                    this._loopStart = this.toTicks(t)
                }
            }), Object.defineProperty(t.Transport.prototype, "loopEnd", {
                get: function() {
                    return t.Ticks(this._loopEnd).toSeconds()
                },
                set: function(t) {
                    this._loopEnd = this.toTicks(t)
                }
            }), t.Transport.prototype.setLoopPoints = function(t, e) {
                return this.loopStart = t, this.loopEnd = e, this
            }, Object.defineProperty(t.Transport.prototype, "swing", {
                get: function() {
                    return this._swingAmount
                },
                set: function(t) {
                    this._swingAmount = t
                }
            }), Object.defineProperty(t.Transport.prototype, "swingSubdivision", {
                get: function() {
                    return t.Ticks(this._swingTicks).toNotation()
                },
                set: function(t) {
                    this._swingTicks = this.toTicks(t)
                }
            }), Object.defineProperty(t.Transport.prototype, "position", {
                get: function() {
                    var e = this.now(),
                        n = this._clock.getTicksAtTime(e);
                    return t.Ticks(n).toBarsBeatsSixteenths()
                },
                set: function(t) {
                    var e = this.toTicks(t);
                    this.ticks = e
                }
            }), Object.defineProperty(t.Transport.prototype, "seconds", {
                get: function() {
                    return this._clock.seconds
                },
                set: function(t) {
                    var e = this.now(),
                        n = this.bpm.timeToTicks(t, e);
                    this.ticks = n
                }
            }), Object.defineProperty(t.Transport.prototype, "progress", {
                get: function() {
                    if (this.loop) {
                        var t = this.now();
                        return (this._clock.getTicksAtTime(t) - this._loopStart) / (this._loopEnd - this._loopStart)
                    }
                    return 0
                }
            }), Object.defineProperty(t.Transport.prototype, "ticks", {
                get: function() {
                    return this._clock.ticks
                },
                set: function(e) {
                    if (this._clock.ticks !== e) {
                        var n = this.now();
                        this.state === t.State.Started ? (this.emit("stop", n), this._clock.setTicksAtTime(e, n), this.emit("start", n, this.seconds)) : this._clock.setTicksAtTime(e, n)
                    }
                }
            }), t.Transport.prototype.getTicksAtTime = function(t) {
                return Math.round(this._clock.getTicksAtTime(t))
            }, t.Transport.prototype.getSecondsAtTime = function(t) {
                return this._clock.getSecondsAtTime(t)
            }, Object.defineProperty(t.Transport.prototype, "PPQ", {
                get: function() {
                    return this._ppq
                },
                set: function(t) {
                    var e = this.bpm.value;
                    this._ppq = t, this.bpm.value = e
                }
            }), t.Transport.prototype._fromUnits = function(t) {
                return 1 / (60 / t / this.PPQ)
            }, t.Transport.prototype._toUnits = function(t) {
                return t / this.PPQ * 60
            }, t.Transport.prototype.nextSubdivision = function(e) {
                if (e = this.toTicks(e), this.state !== t.State.Started) return 0;
                var n = this.now(),
                    i = e - this.getTicksAtTime(n) % e;
                return this._clock.nextTickTime(i, n)
            }, t.Transport.prototype.syncSignal = function(e, n) {
                if (!n) {
                    var i = this.now();
                    n = 0 !== e.getValueAtTime(i) ? e.getValueAtTime(i) / this.bpm.getValueAtTime(i) : 0
                }
                var r = new t.Gain(n);
                return this.bpm.chain(r, e._param), this._syncedSignals.push({
                    ratio: r,
                    signal: e,
                    initial: e.value
                }), e.value = 0, this
            }, t.Transport.prototype.unsyncSignal = function(t) {
                for (var e = this._syncedSignals.length - 1; e >= 0; e--) {
                    var n = this._syncedSignals[e];
                    n.signal === t && (n.ratio.dispose(), n.signal.value = n.initial, this._syncedSignals.splice(e, 1))
                }
                return this
            }, t.Transport.prototype.dispose = function() {
                return t.Emitter.prototype.dispose.call(this), this._clock.dispose(), this._clock = null, this._writable("bpm"), this.bpm = null, this._timeline.dispose(), this._timeline = null, this._repeatedEvents.dispose(), this._repeatedEvents = null, this
            };
            var e = t.Transport;
            return t.Transport = new e, t.Context.on("init", function(n) {
                n.transport && n.transport.isTransport ? t.Transport = n.transport : t.Transport = new e
            }), t.Context.on("close", function(t) {
                t.transport && t.transport.isTransport && t.transport.dispose()
            }), t.Transport
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1), n(6), n(16), n(82)], void 0 === (r = function(t) {
            "use strict";
            return t.Oscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type"], t.Oscillator);
                t.Source.call(this, e), this._oscillator = null, this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this._wave = null, this._partials = e.partials, this._partialCount = e.partialCount, this._phase = e.phase, this._type = e.type, e.partialCount && e.type !== t.Oscillator.Type.Custom && (this._type = this.baseType + e.partialCount.toString()), this.phase = this._phase, this._readOnly(["frequency", "detune"])
            }, t.extend(t.Oscillator, t.Source), t.Oscillator.defaults = {
                type: "sine",
                frequency: 440,
                detune: 0,
                phase: 0,
                partials: [],
                partialCount: 0
            }, t.Oscillator.Type = {
                Sine: "sine",
                Triangle: "triangle",
                Sawtooth: "sawtooth",
                Square: "square",
                Custom: "custom"
            }, t.Oscillator.prototype._start = function(e) {
                this.log("start", e), this._oscillator = new t.OscillatorNode, this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), e = this.toSeconds(e), this._oscillator.start(e)
            }, t.Oscillator.prototype._stop = function(t) {
                return this.log("stop", t), this._oscillator && (t = this.toSeconds(t), this._oscillator.stop(t)), this
            }, t.Oscillator.prototype.restart = function(t) {
                return this._oscillator && this._oscillator.cancelStop(), this._state.cancel(this.toSeconds(t)), this
            }, t.Oscillator.prototype.syncFrequency = function() {
                return t.Transport.syncSignal(this.frequency), this
            }, t.Oscillator.prototype.unsyncFrequency = function() {
                return t.Transport.unsyncSignal(this.frequency), this
            }, Object.defineProperty(t.Oscillator.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(t) {
                    var e = this._getRealImaginary(t, this._phase),
                        n = this.context.createPeriodicWave(e[0], e[1]);
                    this._wave = n, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave), this._type = t
                }
            }), Object.defineProperty(t.Oscillator.prototype, "baseType", {
                get: function() {
                    return this._type.replace(this.partialCount, "")
                },
                set: function(e) {
                    this.partialCount && this._type !== t.Oscillator.Type.Custom && e !== t.Oscillator.Type.Custom ? this.type = e + this.partialCount : this.type = e
                }
            }), Object.defineProperty(t.Oscillator.prototype, "partialCount", {
                get: function() {
                    return this._partialCount
                },
                set: function(e) {
                    var n = this._type,
                        i = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
                    i && (n = i[1]), this._type !== t.Oscillator.Type.Custom && (this.type = 0 === e ? n : n + e.toString())
                }
            }), t.Oscillator.prototype.get = function() {
                const e = t.prototype.get.apply(this, arguments);
                return e.type !== t.Oscillator.Type.Custom && delete e.partials, e
            }, t.Oscillator.prototype._getRealImaginary = function(e, n) {
                var i = 2048,
                    r = new Float32Array(i),
                    o = new Float32Array(i),
                    s = 1;
                if (e === t.Oscillator.Type.Custom) s = this._partials.length + 1, this._partialCount = this._partials.length, i = s;
                else {
                    var a = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);
                    a ? (s = parseInt(a[2]) + 1, this._partialCount = parseInt(a[2]), e = a[1], i = s = Math.max(s, 2)) : this._partialCount = 0, this._partials = []
                }
                for (var u = 1; u < i; ++u) {
                    var l, c = 2 / (u * Math.PI);
                    switch (e) {
                        case t.Oscillator.Type.Sine:
                            l = u <= s ? 1 : 0, this._partials[u - 1] = l;
                            break;
                        case t.Oscillator.Type.Square:
                            l = 1 & u ? 2 * c : 0, this._partials[u - 1] = l;
                            break;
                        case t.Oscillator.Type.Sawtooth:
                            l = c * (1 & u ? 1 : -1), this._partials[u - 1] = l;
                            break;
                        case t.Oscillator.Type.Triangle:
                            l = 1 & u ? c * c * 2 * (u - 1 >> 1 & 1 ? -1 : 1) : 0, this._partials[u - 1] = l;
                            break;
                        case t.Oscillator.Type.Custom:
                            l = this._partials[u - 1];
                            break;
                        default:
                            throw new TypeError("Tone.Oscillator: invalid type: " + e)
                    }
                    0 !== l ? (r[u] = -l * Math.sin(n * u), o[u] = l * Math.cos(n * u)) : (r[u] = 0, o[u] = 0)
                }
                return [r, o]
            }, t.Oscillator.prototype._inverseFFT = function(t, e, n) {
                for (var i = 0, r = t.length, o = 0; o < r; o++) i += t[o] * Math.cos(o * n) + e[o] * Math.sin(o * n);
                return i
            }, t.Oscillator.prototype._getInitialValue = function() {
                for (var t = this._getRealImaginary(this._type, 0), e = t[0], n = t[1], i = 0, r = 2 * Math.PI, o = 0; o < 8; o++) i = Math.max(this._inverseFFT(e, n, o / 8 * r), i);
                return -this._inverseFFT(e, n, this._phase) / i
            }, Object.defineProperty(t.Oscillator.prototype, "partials", {
                get: function() {
                    return this._partials
                },
                set: function(e) {
                    this._partials = e, this.type = t.Oscillator.Type.Custom
                }
            }), Object.defineProperty(t.Oscillator.prototype, "phase", {
                get: function() {
                    return this._phase * (180 / Math.PI)
                },
                set: function(t) {
                    this._phase = t * Math.PI / 180, this.type = this._type
                }
            }), t.Oscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this), null !== this._oscillator && (this._oscillator.dispose(), this._oscillator = null), this._wave = null, this._writable(["frequency", "detune"]), this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this._partials = null, this
            }, t.Oscillator
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(14), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Delay = function() {
                var e = t.defaults(arguments, ["delayTime", "maxDelay"], t.Delay);
                t.AudioNode.call(this, e), this._maxDelay = Math.max(this.toSeconds(e.maxDelay), this.toSeconds(e.delayTime)), this._delayNode = this.input = this.output = this.context.createDelay(this._maxDelay), this.delayTime = new t.Param({
                    param: this._delayNode.delayTime,
                    units: t.Type.Time,
                    value: e.delayTime
                }), this._readOnly("delayTime")
            }, t.extend(t.Delay, t.AudioNode), t.Delay.defaults = {
                maxDelay: 1,
                delayTime: 0
            }, Object.defineProperty(t.Delay.prototype, "maxDelay", {
                get: function() {
                    return this._maxDelay
                }
            }), t.Delay.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._delayNode.disconnect(), this._delayNode = null, this._writable("delayTime"), this.delayTime = null, this
            }, t.Delay
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(3), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Split = function() {
                t.AudioNode.call(this), this.createInsOuts(0, 2), this._splitter = this.input = this.context.createChannelSplitter(2), this.left = this.output[0] = new t.Gain, this.right = this.output[1] = new t.Gain, this._splitter.connect(this.left, 0, 0), this._splitter.connect(this.right, 1, 0)
            }, t.extend(t.Split, t.AudioNode), t.Split.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._splitter.disconnect(), this.left.dispose(), this.left = null, this.right.dispose(), this.right = null, this._splitter = null, this
            }, t.Split
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(35), n(24), n(34)], void 0 === (r = function(t) {
            t.Context = function() {
                t.Emitter.call(this);
                var n = t.defaults(arguments, ["context"], t.Context);
                if (!n.context && (n.context = new t.global.AudioContext, !n.context)) throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");
                for (this._context = n.context; this._context.rawContext;) this._context = this._context.rawContext;
                for (var i in this._context) this._defineProperty(this._context, i);
                this._latencyHint = n.latencyHint, this._constants = {}, this.lookAhead = n.lookAhead, this._computedUpdateInterval = 0, this._ticker = new e(this.emit.bind(this, "tick"), n.clockSource, n.updateInterval), this._timeouts = new t.Timeline, this._timeoutIds = 0, this.on("tick", this._timeoutLoop.bind(this)), this._context.onstatechange = function(t) {
                    this.emit("statechange", t)
                }.bind(this)
            }, t.extend(t.Context, t.Emitter), t.Emitter.mixin(t.Context), t.Context.defaults = {
                clockSource: "worker",
                latencyHint: "interactive",
                lookAhead: .1,
                updateInterval: .03
            }, t.Context.prototype.isContext = !0, t.Context.prototype._defineProperty = function(e, n) {
                t.isUndef(this[n]) && Object.defineProperty(this, n, {
                    get: function() {
                        return "function" == typeof e[n] ? e[n].bind(e) : e[n]
                    },
                    set: function(t) {
                        e[n] = t
                    }
                })
            }, t.Context.prototype.now = function() {
                return this._context.currentTime + this.lookAhead
            }, Object.defineProperty(t.Context.prototype, "destination", {
                get: function() {
                    return this.master ? this.master : this._context.destination
                }
            }), t.Context.prototype.resume = function() {
                return "suspended" === this._context.state && this._context instanceof AudioContext ? this._context.resume() : Promise.resolve()
            }, t.Context.prototype.close = function() {
                var e = Promise.resolve();
                return this !== t.global.TONE_AUDIO_CONTEXT && (e = this.rawContext.close()), e.then(function() {
                    t.Context.emit("close", this)
                }.bind(this))
            }, t.Context.prototype.getConstant = function(t) {
                if (this._constants[t]) return this._constants[t];
                for (var e = this._context.createBuffer(1, 128, this._context.sampleRate), n = e.getChannelData(0), i = 0; i < n.length; i++) n[i] = t;
                var r = this._context.createBufferSource();
                return r.channelCount = 1, r.channelCountMode = "explicit", r.buffer = e, r.loop = !0, r.start(0), this._constants[t] = r, r
            }, t.Context.prototype._timeoutLoop = function() {
                for (var t = this.now(); this._timeouts && this._timeouts.length && this._timeouts.peek().time <= t;) this._timeouts.shift().callback()
            }, t.Context.prototype.setTimeout = function(t, e) {
                this._timeoutIds++;
                var n = this.now();
                return this._timeouts.add({
                    callback: t,
                    time: n + e,
                    id: this._timeoutIds
                }), this._timeoutIds
            }, t.Context.prototype.clearTimeout = function(t) {
                return this._timeouts.forEach(function(e) {
                    e.id === t && this.remove(e)
                }), this
            }, Object.defineProperty(t.Context.prototype, "updateInterval", {
                get: function() {
                    return this._ticker.updateInterval
                },
                set: function(t) {
                    this._ticker.updateInterval = t
                }
            }), Object.defineProperty(t.Context.prototype, "rawContext", {
                get: function() {
                    return this._context
                }
            }), Object.defineProperty(t.Context.prototype, "clockSource", {
                get: function() {
                    return this._ticker.type
                },
                set: function(t) {
                    this._ticker.type = t
                }
            }), Object.defineProperty(t.Context.prototype, "latencyHint", {
                get: function() {
                    return this._latencyHint
                },
                set: function(e) {
                    var n = e;
                    if (this._latencyHint = e, t.isString(e)) switch (e) {
                        case "interactive":
                            n = .1, this._context.latencyHint = e;
                            break;
                        case "playback":
                            n = .8, this._context.latencyHint = e;
                            break;
                        case "balanced":
                            n = .25, this._context.latencyHint = e;
                            break;
                        case "fastest":
                            this._context.latencyHint = "interactive", n = .01
                    }
                    this.lookAhead = n, this.updateInterval = n / 3
                }
            }), t.Context.prototype.dispose = function() {
                return this.close().then(function() {
                    for (var e in t.Emitter.prototype.dispose.call(this), this._ticker.dispose(), this._ticker = null, this._timeouts.dispose(), this._timeouts = null, this._constants) this._constants[e].disconnect();
                    this._constants = null
                }.bind(this))
            };
            var e = function(e, n, i) {
                this._type = n, this._updateInterval = i, this._callback = t.defaultArg(e, t.noOp), this._createClock()
            };
            if (e.Type = {
                    Worker: "worker",
                    Timeout: "timeout",
                    Offline: "offline"
                }, e.prototype._createWorker = function() {
                    t.global.URL = t.global.URL || t.global.webkitURL;
                    var e = new Blob(["var timeoutTime = " + (1e3 * this._updateInterval).toFixed(1) + ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]),
                        n = URL.createObjectURL(e),
                        i = new Worker(n);
                    i.onmessage = this._callback.bind(this), this._worker = i
                }, e.prototype._createTimeout = function() {
                    this._timeout = setTimeout(function() {
                        this._createTimeout(), this._callback()
                    }.bind(this), 1e3 * this._updateInterval)
                }, e.prototype._createClock = function() {
                    if (this._type === e.Type.Worker) try {
                        this._createWorker()
                    } catch (t) {
                        this._type = e.Type.Timeout, this._createClock()
                    } else this._type === e.Type.Timeout && this._createTimeout()
                }, Object.defineProperty(e.prototype, "updateInterval", {
                    get: function() {
                        return this._updateInterval
                    },
                    set: function(t) {
                        this._updateInterval = Math.max(t, 128 / 44100), this._type === e.Type.Worker && this._worker.postMessage(Math.max(1e3 * t, 1))
                    }
                }), Object.defineProperty(e.prototype, "type", {
                    get: function() {
                        return this._type
                    },
                    set: function(t) {
                        this._disposeClock(), this._type = t, this._createClock()
                    }
                }), e.prototype._disposeClock = function() {
                    this._timeout && (clearTimeout(this._timeout), this._timeout = null), this._worker && (this._worker.terminate(), this._worker.onmessage = null, this._worker = null)
                }, e.prototype.dispose = function() {
                    this._disposeClock(), this._callback = null
                }, t.getContext(function() {
                    var e = AudioNode.prototype.connect,
                        n = AudioNode.prototype.disconnect;

                    function i(n, i, r) {
                        if (n.input) return r = t.defaultArg(r, 0), t.isArray(n.input) ? this.connect(n.input[r]) : this.connect(n.input, i, r);
                        try {
                            return n instanceof AudioNode ? (e.call(this, n, i, r), n) : (e.call(this, n, i), n)
                        } catch (t) {
                            throw new Error("error connecting to node: " + n + "\n" + t)
                        }
                    }
                    AudioNode.prototype.connect !== i && (AudioNode.prototype.connect = i, AudioNode.prototype.disconnect = function(e, i, r) {
                        if (e && e.input && t.isArray(e.input)) r = t.defaultArg(r, 0), this.disconnect(e.input[r], i, 0);
                        else if (e && e.input) this.disconnect(e.input, i, r);
                        else try {
                            e instanceof AudioParam ? n.call(this, e, i) : n.apply(this, arguments)
                        } catch (t) {
                            throw new Error("error disconnecting node: " + e + "\n" + t)
                        }
                    })
                }), t.supported && !t.initialized) {
                if (t.global.TONE_AUDIO_CONTEXT || (t.global.TONE_AUDIO_CONTEXT = new t.Context), t.context = t.global.TONE_AUDIO_CONTEXT, !t.global.TONE_SILENCE_VERSION_LOGGING) {
                    var n = "v";
                    "dev" === t.version && (n = "");
                    var i = " * Tone.js " + n + t.version + " * ";
                    console.log("%c" + i, "background: #000; color: #fff")
                }
            } else t.supported || console.warn("This browser does not support Tone.js");
            return t.Context
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(4), n(40)], void 0 === (r = function(t) {
            "use strict";
            return t.Instrument = function(e) {
                e = t.defaultArg(e, t.Instrument.defaults), t.AudioNode.call(this), this._volume = this.output = new t.Volume(e.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._scheduledEvents = []
            }, t.extend(t.Instrument, t.AudioNode), t.Instrument.defaults = {
                volume: 0
            }, t.Instrument.prototype.triggerAttack = t.noOp, t.Instrument.prototype.triggerRelease = t.noOp, t.Instrument.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0), this
            }, t.Instrument.prototype._syncMethod = function(e, n) {
                var i = this["_original_" + e] = this[e];
                this[e] = function() {
                    var e = Array.prototype.slice.call(arguments),
                        r = e[n],
                        o = t.Transport.schedule(function(t) {
                            e[n] = t, i.apply(this, e)
                        }.bind(this), r);
                    this._scheduledEvents.push(o)
                }.bind(this)
            }, t.Instrument.prototype.unsync = function() {
                return this._scheduledEvents.forEach(function(e) {
                    t.Transport.clear(e)
                }), this._scheduledEvents = [], this._original_triggerAttack && (this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease), this
            }, t.Instrument.prototype.triggerAttackRelease = function(t, e, n, i) {
                return n = this.toSeconds(n), e = this.toSeconds(e), this.triggerAttack(t, n, i), this.triggerRelease(n + e), this
            }, t.Instrument.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._volume.dispose(), this._volume = null, this._writable(["volume"]), this.volume = null, this.unsync(), this._scheduledEvents = null, this
            }, t.Instrument
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(7), n(1)], void 0 === (r = function(t) {
            "use strict";
            return t.AudioToGain = function() {
                t.SignalBase.call(this), this._norm = this.input = this.output = new t.WaveShaper(function(t) {
                    return (t + 1) / 2
                })
            }, t.extend(t.AudioToGain, t.SignalBase), t.AudioToGain.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this
            }, t.AudioToGain
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1), n(13), n(93), n(3), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.CrossFade = function(e) {
                t.AudioNode.call(this), this.createInsOuts(2, 1), this.a = this.input[0] = new t.Gain, this.b = this.input[1] = new t.Gain, this.fade = new t.Signal(t.defaultArg(e, .5), t.Type.NormalRange), this._equalPowerA = new t.EqualPowerGain, this._equalPowerB = new t.EqualPowerGain, this._one = this.context.getConstant(1), this._invert = new t.Subtract, this.a.connect(this.output), this.b.connect(this.output), this.fade.chain(this._equalPowerB, this.b.gain), this._one.connect(this._invert, 0, 0), this.fade.connect(this._invert, 0, 1), this._invert.chain(this._equalPowerA, this.a.gain), this._readOnly("fade")
            }, t.extend(t.CrossFade, t.AudioNode), t.CrossFade.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable("fade"), this._equalPowerA.dispose(), this._equalPowerA = null, this._equalPowerB.dispose(), this._equalPowerB = null, this.fade.dispose(), this.fade = null, this._invert.dispose(), this._invert = null, this._one = null, this.a.dispose(), this.a = null, this.b.dispose(), this.b = null, this
            }, t.CrossFade
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0)], void 0 === (r = function(t) {
            "use strict";
            return t.Timeline = function() {
                var e = t.defaults(arguments, ["memory"], t.Timeline);
                t.call(this), this._timeline = [], this.memory = e.memory
            }, t.extend(t.Timeline), t.Timeline.defaults = {
                memory: 1 / 0
            }, Object.defineProperty(t.Timeline.prototype, "length", {
                get: function() {
                    return this._timeline.length
                }
            }), t.Timeline.prototype.add = function(e) {
                if (t.isUndef(e.time)) throw new Error("Tone.Timeline: events must have a time attribute");
                e.time = e.time.valueOf();
                var n = this._search(e.time);
                if (this._timeline.splice(n + 1, 0, e), this.length > this.memory) {
                    var i = this.length - this.memory;
                    this._timeline.splice(0, i)
                }
                return this
            }, t.Timeline.prototype.remove = function(t) {
                var e = this._timeline.indexOf(t);
                return -1 !== e && this._timeline.splice(e, 1), this
            }, t.Timeline.prototype.get = function(e, n) {
                n = t.defaultArg(n, "time");
                var i = this._search(e, n);
                return -1 !== i ? this._timeline[i] : null
            }, t.Timeline.prototype.peek = function() {
                return this._timeline[0]
            }, t.Timeline.prototype.shift = function() {
                return this._timeline.shift()
            }, t.Timeline.prototype.getAfter = function(e, n) {
                n = t.defaultArg(n, "time");
                var i = this._search(e, n);
                return i + 1 < this._timeline.length ? this._timeline[i + 1] : null
            }, t.Timeline.prototype.getBefore = function(e, n) {
                n = t.defaultArg(n, "time");
                var i = this._timeline.length;
                if (i > 0 && this._timeline[i - 1][n] < e) return this._timeline[i - 1];
                var r = this._search(e, n);
                return r - 1 >= 0 ? this._timeline[r - 1] : null
            }, t.Timeline.prototype.cancel = function(t) {
                if (this._timeline.length > 1) {
                    var e = this._search(t);
                    if (e >= 0)
                        if (this._timeline[e].time === t) {
                            for (var n = e; n >= 0 && this._timeline[n].time === t; n--) e = n;
                            this._timeline = this._timeline.slice(0, e)
                        } else this._timeline = this._timeline.slice(0, e + 1);
                    else this._timeline = []
                } else 1 === this._timeline.length && this._timeline[0].time >= t && (this._timeline = []);
                return this
            }, t.Timeline.prototype.cancelBefore = function(t) {
                var e = this._search(t);
                return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this
            }, t.Timeline.prototype.previousEvent = function(t) {
                var e = this._timeline.indexOf(t);
                return e > 0 ? this._timeline[e - 1] : null
            }, t.Timeline.prototype._search = function(e, n) {
                if (0 === this._timeline.length) return -1;
                n = t.defaultArg(n, "time");
                var i = 0,
                    r = this._timeline.length,
                    o = r;
                if (r > 0 && this._timeline[r - 1][n] <= e) return r - 1;
                for (; i < o;) {
                    var s = Math.floor(i + (o - i) / 2),
                        a = this._timeline[s],
                        u = this._timeline[s + 1];
                    if (a[n] === e) {
                        for (var l = s; l < this._timeline.length; l++) this._timeline[l][n] === e && (s = l);
                        return s
                    }
                    if (a[n] < e && u[n] > e) return s;
                    a[n] > e ? o = s : i = s + 1
                }
                return -1
            }, t.Timeline.prototype._iterate = function(e, n, i) {
                n = t.defaultArg(n, 0), i = t.defaultArg(i, this._timeline.length - 1), this._timeline.slice(n, i + 1).forEach(function(t) {
                    e.call(this, t)
                }.bind(this))
            }, t.Timeline.prototype.forEach = function(t) {
                return this._iterate(t), this
            }, t.Timeline.prototype.forEachBefore = function(t, e) {
                var n = this._search(t);
                return -1 !== n && this._iterate(e, 0, n), this
            }, t.Timeline.prototype.forEachAfter = function(t, e) {
                var n = this._search(t);
                return this._iterate(e, n + 1), this
            }, t.Timeline.prototype.forEachBetween = function(t, e, n) {
                var i = this._search(t),
                    r = this._search(e);
                return -1 !== i && -1 !== r ? (this._timeline[i].time !== t && (i += 1), this._timeline[r].time === e && (r -= 1), this._iterate(n, i, r)) : -1 === i && this._iterate(n, 0, r), this
            }, t.Timeline.prototype.forEachFrom = function(t, e) {
                for (var n = this._search(t); n >= 0 && this._timeline[n].time >= t;) n--;
                return this._iterate(e, n + 1), this
            }, t.Timeline.prototype.forEachAtTime = function(t, e) {
                var n = this._search(t);
                return -1 !== n && this._iterate(function(n) {
                    n.time === t && e.call(this, n)
                }, 0, n), this
            }, t.Timeline.prototype.dispose = function() {
                return t.prototype.dispose.call(this), this._timeline = null, this
            }, t.Timeline
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(21), n(1)], void 0 === (r = function(t) {
            "use strict";
            return t.Monophonic = function(e) {
                e = t.defaultArg(e, t.Monophonic.defaults), t.Instrument.call(this, e), this.portamento = e.portamento
            }, t.extend(t.Monophonic, t.Instrument), t.Monophonic.defaults = {
                portamento: 0
            }, t.Monophonic.prototype.triggerAttack = function(t, e, n) {
                return this.log("triggerAttack", t, e, n), e = this.toSeconds(e), this._triggerEnvelopeAttack(e, n), this.setNote(t, e), this
            }, t.Monophonic.prototype.triggerRelease = function(t) {
                return this.log("triggerRelease", t), t = this.toSeconds(t), this._triggerEnvelopeRelease(t), this
            }, t.Monophonic.prototype._triggerEnvelopeAttack = function() {}, t.Monophonic.prototype._triggerEnvelopeRelease = function() {}, t.Monophonic.prototype.getLevelAtTime = function(t) {
                return t = this.toSeconds(t), this.envelope.getValueAtTime(t)
            }, t.Monophonic.prototype.setNote = function(t, e) {
                if (e = this.toSeconds(e), this.portamento > 0 && this.getLevelAtTime(e) > .05) {
                    var n = this.toSeconds(this.portamento);
                    this.frequency.exponentialRampTo(t, n, e)
                } else this.frequency.setValueAtTime(t, e);
                return this
            }, t.Monophonic
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(29), n(5), n(1)], void 0 === (r = function(t) {
            "use strict";
            return t.Scale = function(e, n) {
                t.SignalBase.call(this), this._outputMin = t.defaultArg(e, 0), this._outputMax = t.defaultArg(n, 1), this._scale = this.input = new t.Multiply(1), this._add = this.output = new t.Add(0), this._scale.connect(this._add), this._setRange()
            }, t.extend(t.Scale, t.SignalBase), Object.defineProperty(t.Scale.prototype, "min", {
                get: function() {
                    return this._outputMin
                },
                set: function(t) {
                    this._outputMin = t, this._setRange()
                }
            }), Object.defineProperty(t.Scale.prototype, "max", {
                get: function() {
                    return this._outputMax
                },
                set: function(t) {
                    this._outputMax = t, this._setRange()
                }
            }), t.Scale.prototype._setRange = function() {
                this._add.value = this._outputMin, this._scale.value = this._outputMax - this._outputMin
            }, t.Scale.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._add.dispose(), this._add = null, this._scale.dispose(), this._scale = null, this
            }, t.Scale
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1), n(3), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Volume = function() {
                var e = t.defaults(arguments, ["volume"], t.Volume);
                t.AudioNode.call(this, e), this.output = this.input = new t.Gain(e.volume, t.Type.Decibels), this._unmutedVolume = e.volume, this.volume = this.output.gain, this._readOnly("volume"), this.mute = e.mute
            }, t.extend(t.Volume, t.AudioNode), t.Volume.defaults = {
                volume: 0,
                mute: !1
            }, Object.defineProperty(t.Volume.prototype, "mute", {
                get: function() {
                    return this.volume.value === -1 / 0
                },
                set: function(t) {
                    !this.mute && t ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume)
                }
            }), t.Volume.prototype.dispose = function() {
                return this.input.dispose(), t.AudioNode.prototype.dispose.call(this), this._writable("volume"), this.volume.dispose(), this.volume = null, this
            }, t.Volume
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(3), n(36)], void 0 === (r = function(t) {
            return t.Zero = function() {
                t.SignalBase.call(this), this._gain = this.input = this.output = new t.Gain, this.context.getConstant(0).connect(this._gain)
            }, t.extend(t.Zero, t.SignalBase), t.Zero.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._gain.dispose(), this._gain = null, this
            }, t.Zero
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.Add = function(e) {
                t.Signal.call(this), this.createInsOuts(2, 0), this._sum = this.input[0] = this.input[1] = this.output = new t.Gain, this._param = this.input[1] = new t.Signal(e), this._param.connect(this._sum), this.proxy = !1
            }, t.extend(t.Add, t.Signal), t.Add.prototype.dispose = function() {
                return t.Signal.prototype.dispose.call(this), this._sum.dispose(), this._sum = null, this
            }, t.Add
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(47), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.AmplitudeEnvelope = function() {
                t.Envelope.apply(this, arguments), this.input = this.output = new t.Gain, this._sig.connect(this.output.gain)
            }, t.extend(t.AmplitudeEnvelope, t.Envelope), t.AmplitudeEnvelope.prototype.dispose = function() {
                return t.Envelope.prototype.dispose.call(this), this
            }, t.AmplitudeEnvelope
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(11), n(6), n(3), n(2), n(63)], void 0 === (r = function(t) {
            return t.BufferSource = function() {
                var e = t.defaults(arguments, ["buffer", "onload"], t.BufferSource);
                t.AudioNode.call(this, e), this.onended = e.onended, this._startTime = -1, this._sourceStarted = !1, this._sourceStopped = !1, this._stopTime = -1, this._gainNode = this.output = new t.Gain(0), this._source = this.context.createBufferSource(), this._source.connect(this._gainNode), this._source.onended = this._onended.bind(this), this._buffer = new t.Buffer(e.buffer, e.onload), this.playbackRate = new t.Param({
                    param: this._source.playbackRate,
                    units: t.Type.Positive,
                    value: e.playbackRate
                }), this.fadeIn = e.fadeIn, this.fadeOut = e.fadeOut, this.curve = e.curve, this._onendedTimeout = -1, this.loop = e.loop, this.loopStart = e.loopStart, this.loopEnd = e.loopEnd
            }, t.extend(t.BufferSource, t.AudioNode), t.BufferSource.defaults = {
                onended: t.noOp,
                onload: t.noOp,
                loop: !1,
                loopStart: 0,
                loopEnd: 0,
                fadeIn: 0,
                fadeOut: 0,
                curve: "linear",
                playbackRate: 1
            }, Object.defineProperty(t.BufferSource.prototype, "state", {
                get: function() {
                    return this.getStateAtTime(this.now())
                }
            }), t.BufferSource.prototype.getStateAtTime = function(e) {
                return e = this.toSeconds(e), -1 !== this._startTime && this._startTime <= e && (-1 === this._stopTime || e < this._stopTime) && !this._sourceStopped ? t.State.Started : t.State.Stopped
            }, t.BufferSource.prototype.start = function(e, n, i, r) {
                this.log("start", e, n, i, r), this.assert(-1 === this._startTime, "can only be started once"), this.assert(this.buffer.loaded, "buffer is either not set or not loaded"), this.assert(!this._sourceStopped, "source is already stopped"), e = this.toSeconds(e), n = this.loop ? t.defaultArg(n, this.loopStart) : t.defaultArg(n, 0), n = this.toSeconds(n), n = Math.max(n, 0), r = t.defaultArg(r, 1);
                var o = this.toSeconds(this.fadeIn);
                if (o > 0 ? (this._gainNode.gain.setValueAtTime(0, e), "linear" === this.curve ? this._gainNode.gain.linearRampToValueAtTime(r, e + o) : this._gainNode.gain.exponentialApproachValueAtTime(r, e, o)) : this._gainNode.gain.setValueAtTime(r, e), this._startTime = e, t.isDefined(i)) {
                    var s = this.toSeconds(i);
                    s = Math.max(s, 0), this.stop(e + s)
                }
                if (this.loop) {
                    var a = this.loopEnd || this.buffer.duration,
                        u = this.loopStart;
                    n >= a && (n = (n - u) % (a - u) + u)
                }
                return this._source.buffer = this.buffer.get(), this._source.loopEnd = this.loopEnd || this.buffer.duration, n < this.buffer.duration && (this._sourceStarted = !0, this._source.start(e, n)), this
            }, t.BufferSource.prototype.stop = function(e) {
                this.log("stop", e), this.assert(this.buffer.loaded, "buffer is either not set or not loaded"), this.assert(!this._sourceStopped, "source is already stopped"), e = this.toSeconds(e), -1 !== this._stopTime && this.cancelStop();
                var n = this.toSeconds(this.fadeOut);
                return this._stopTime = e + n, n > 0 ? "linear" === this.curve ? this._gainNode.gain.linearRampTo(0, n, e) : this._gainNode.gain.targetRampTo(0, n, e) : (this._gainNode.gain.cancelAndHoldAtTime(e), this._gainNode.gain.setValueAtTime(0, e)), t.context.clearTimeout(this._onendedTimeout), this._onendedTimeout = t.context.setTimeout(this._onended.bind(this), this._stopTime - this.now()), this
            }, t.BufferSource.prototype.cancelStop = function() {
                if (-1 !== this._startTime && !this._sourceStopped) {
                    var t = this.toSeconds(this.fadeIn);
                    this._gainNode.gain.cancelScheduledValues(this._startTime + t + this.sampleTime), this.context.clearTimeout(this._onendedTimeout), this._stopTime = -1
                }
                return this
            }, t.BufferSource.prototype._onended = function() {
                if (!this._sourceStopped) {
                    this._sourceStopped = !0;
                    var t = "exponential" === this.curve ? 2 * this.fadeOut : 0;
                    this._sourceStarted && -1 !== this._stopTime && this._source.stop(this._stopTime + t), this.onended(this)
                }
            }, Object.defineProperty(t.BufferSource.prototype, "loopStart", {
                get: function() {
                    return this._source.loopStart
                },
                set: function(t) {
                    this._source.loopStart = this.toSeconds(t)
                }
            }), Object.defineProperty(t.BufferSource.prototype, "loopEnd", {
                get: function() {
                    return this._source.loopEnd
                },
                set: function(t) {
                    this._source.loopEnd = this.toSeconds(t)
                }
            }), Object.defineProperty(t.BufferSource.prototype, "buffer", {
                get: function() {
                    return this._buffer
                },
                set: function(t) {
                    this._buffer.set(t)
                }
            }), Object.defineProperty(t.BufferSource.prototype, "loop", {
                get: function() {
                    return this._source.loop
                },
                set: function(t) {
                    this._source.loop = t, this.cancelStop()
                }
            }), t.BufferSource.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this.onended = null, this._source.onended = null, this._source.disconnect(), this._source = null, this._gainNode.dispose(), this._gainNode = null, this._buffer.dispose(), this._buffer = null, this._startTime = -1, this.playbackRate = null, t.context.clearTimeout(this._onendedTimeout), this
            }, t.BufferSource
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(8), n(1), n(5), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.FeedbackEffect = function() {
                var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
                t.Effect.call(this, e), this._feedbackGain = new t.Gain(e.feedback, t.Type.NormalRange), this.feedback = this._feedbackGain.gain, this.effectReturn.chain(this._feedbackGain, this.effectSend), this._readOnly(["feedback"])
            }, t.extend(t.FeedbackEffect, t.Effect), t.FeedbackEffect.defaults = {
                feedback: .125
            }, t.FeedbackEffect.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._writable(["feedback"]), this._feedbackGain.dispose(), this._feedbackGain = null, this.feedback = null, this
            }, t.FeedbackEffect
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(24), n(4)], void 0 === (r = function(t) {
            "use strict";
            return t.TimelineState = function(e) {
                t.Timeline.call(this), this._initial = e
            }, t.extend(t.TimelineState, t.Timeline), t.TimelineState.prototype.getValueAtTime = function(t) {
                var e = this.get(t);
                return null !== e ? e.state : this._initial
            }, t.TimelineState.prototype.setStateAtTime = function(t, e) {
                return this.add({
                    state: t,
                    time: e
                }), this
            }, t.TimelineState.prototype.getLastState = function(t, e) {
                e = this.toSeconds(e);
                for (var n = this._search(e); n >= 0; n--) {
                    var i = this._timeline[n];
                    if (i.state === t) return i
                }
            }, t.TimelineState.prototype.getNextState = function(t, e) {
                e = this.toSeconds(e);
                var n = this._search(e);
                if (-1 !== n)
                    for (var i = n; i < this._timeline.length; i++) {
                        var r = this._timeline[i];
                        if (r.state === t) return r
                    }
            }, t.TimelineState
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(66)], void 0 === (r = function(t) {
            if (t.supported) {
                !t.global.hasOwnProperty("AudioContext") && t.global.hasOwnProperty("webkitAudioContext") && (t.global.AudioContext = t.global.webkitAudioContext), AudioContext.prototype.close || (AudioContext.prototype.close = function() {
                    return t.isFunction(this.suspend) && this.suspend(), Promise.resolve()
                }), AudioContext.prototype.resume || (AudioContext.prototype.resume = function() {
                    var t = this.createBuffer(1, 1, this.sampleRate),
                        e = this.createBufferSource();
                    return e.buffer = t, e.connect(this.destination), e.start(0), Promise.resolve()
                }), !AudioContext.prototype.createGain && AudioContext.prototype.createGainNode && (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode), !AudioContext.prototype.createDelay && AudioContext.prototype.createDelayNode && (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode);
                var e = !1,
                    n = new OfflineAudioContext(1, 1, 44100),
                    i = new Uint32Array([1179011410, 48, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 8, 0, 0, 0, 0]).buffer;
                try {
                    var r = n.decodeAudioData(i);
                    r && t.isFunction(r.then) && (e = !0)
                } catch (t) {
                    e = !1
                }
                e || (AudioContext.prototype._native_decodeAudioData = AudioContext.prototype.decodeAudioData, AudioContext.prototype.decodeAudioData = function(t) {
                    return new Promise(function(e, n) {
                        this._native_decodeAudioData(t, e, n)
                    }.bind(this))
                })
            }
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0)], void 0 === (r = function(t) {
            "use strict";
            return t.Emitter = function() {
                t.call(this), this._events = {}
            }, t.extend(t.Emitter), t.Emitter.prototype.on = function(t, e) {
                for (var n = t.split(/\W+/), i = 0; i < n.length; i++) {
                    var r = n[i];
                    this._events.hasOwnProperty(r) || (this._events[r] = []), this._events[r].push(e)
                }
                return this
            }, t.Emitter.prototype.once = function(t, e) {
                var n = function() {
                    e.apply(this, arguments), this.off(t, n)
                }.bind(this);
                return this.on(t, n), this
            }, t.Emitter.prototype.off = function(e, n) {
                for (var i = e.split(/\W+/), r = 0; r < i.length; r++)
                    if (e = i[r], this._events.hasOwnProperty(e))
                        if (t.isUndef(n)) this._events[e] = [];
                        else
                            for (var o = this._events[e], s = 0; s < o.length; s++) o[s] === n && o.splice(s, 1);
                return this
            }, t.Emitter.prototype.emit = function(t) {
                if (this._events) {
                    var e = Array.apply(null, arguments).slice(1);
                    if (this._events.hasOwnProperty(t))
                        for (var n = this._events[t].slice(0), i = 0, r = n.length; i < r; i++) n[i].apply(this, e)
                }
                return this
            }, t.Emitter.mixin = function(e) {
                var n = ["on", "once", "off", "emit"];
                e._events = {};
                for (var i = 0; i < n.length; i++) {
                    var r = n[i],
                        o = t.Emitter.prototype[r];
                    e[r] = o
                }
                return t.Emitter
            }, t.Emitter.prototype.dispose = function() {
                return t.prototype.dispose.call(this), this._events = null, this
            }, t.Emitter
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.SignalBase = function() {
                t.AudioNode.call(this)
            }, t.extend(t.SignalBase, t.AudioNode), t.SignalBase.prototype.connect = function(e, n, i) {
                return t.Signal && t.Signal === e.constructor || t.Param && t.Param === e.constructor ? (e._param.cancelScheduledValues(0), e._param.setValueAtTime(0, 0), e.overridden = !0) : e instanceof AudioParam && (e.cancelScheduledValues(0), e.setValueAtTime(0, 0)), t.AudioNode.prototype.connect.call(this, e, n, i), this
            }, t.SignalBase
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(6), n(17), n(49), n(71), n(48), n(70), n(69)], void 0 === (r = function(t) {
            "use strict";
            t.OmniOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type"], t.OmniOscillator);
                t.Source.call(this, e), this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this._sourceType = void 0, this._oscillator = null, this.type = e.type, this._readOnly(["frequency", "detune"]), this.set(e)
            }, t.extend(t.OmniOscillator, t.Source), t.OmniOscillator.defaults = {
                frequency: 440,
                detune: 0,
                type: "sine",
                phase: 0
            };
            var e = "PulseOscillator",
                n = "PWMOscillator",
                i = "FMOscillator",
                r = "AMOscillator",
                o = "FatOscillator";
            t.OmniOscillator.prototype._start = function(t) {
                this._oscillator.start(t)
            }, t.OmniOscillator.prototype._stop = function(t) {
                this._oscillator.stop(t)
            }, t.OmniOscillator.prototype.restart = function(t) {
                this._oscillator.restart(t)
            }, Object.defineProperty(t.OmniOscillator.prototype, "type", {
                get: function() {
                    var t = "";
                    return this._sourceType === i ? t = "fm" : this._sourceType === r ? t = "am" : this._sourceType === o && (t = "fat"), t + this._oscillator.type
                },
                set: function(t) {
                    "fm" === t.substr(0, 2) ? (this._createNewOscillator(i), this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator(r), this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator(o), this._oscillator.type = t.substr(3)) : "pwm" === t ? this._createNewOscillator(n) : "pulse" === t ? this._createNewOscillator(e) : (this._createNewOscillator("Oscillator"), this._oscillator.type = t)
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "partials", {
                get: function() {
                    return this._oscillator.partials
                },
                set: function(t) {
                    this._oscillator.partials = t
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "partialCount", {
                get: function() {
                    return this._oscillator.partialCount
                },
                set: function(t) {
                    this._oscillator.partialCount = t
                }
            }), t.OmniOscillator.prototype.set = function(e, n) {
                return "type" === e ? this.type = n : t.isObject(e) && e.hasOwnProperty("type") && (this.type = e.type), t.prototype.set.apply(this, arguments), this
            }, t.OmniOscillator.prototype.get = function(t) {
                var e = this._oscillator.get(t);
                return e.type = this.type, e
            }, t.OmniOscillator.prototype._createNewOscillator = function(e) {
                if (e !== this._sourceType) {
                    this._sourceType = e;
                    var n = t[e],
                        i = this.now();
                    if (null !== this._oscillator) {
                        var r = this._oscillator;
                        r.stop(i), this.context.setTimeout(function() {
                            r.dispose(), r = null
                        }, this.blockTime)
                    }
                    this._oscillator = new n, this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this.state === t.State.Started && this._oscillator.start(i)
                }
            }, Object.defineProperty(t.OmniOscillator.prototype, "phase", {
                get: function() {
                    return this._oscillator.phase
                },
                set: function(t) {
                    this._oscillator.phase = t
                }
            });
            var s = {
                PulseOscillator: "pulse",
                PWMOscillator: "pwm",
                Oscillator: "oscillator",
                FMOscillator: "fm",
                AMOscillator: "am",
                FatOscillator: "fat"
            };
            return Object.defineProperty(t.OmniOscillator.prototype, "sourceType", {
                get: function() {
                    return s[this._sourceType]
                },
                set: function(t) {
                    var e = "sine";
                    "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e = this._oscillator.type), t === s.FMOscillator ? this.type = "fm" + e : t === s.AMOscillator ? this.type = "am" + e : t === s.FatOscillator ? this.type = "fat" + e : t === s.Oscillator ? this.type = e : t === s.PulseOscillator ? this.type = "pulse" : t === s.PWMOscillator && (this.type = "pwm")
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "baseType", {
                get: function() {
                    return this._oscillator.baseType
                },
                set: function(t) {
                    this.sourceType !== s.PulseOscillator && this.sourceType !== s.PWMOscillator && (this._oscillator.baseType = t)
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "width", {
                get: function() {
                    if (this._sourceType === e) return this._oscillator.width
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "count", {
                get: function() {
                    if (this._sourceType === o) return this._oscillator.count
                },
                set: function(t) {
                    this._sourceType === o && (this._oscillator.count = t)
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "spread", {
                get: function() {
                    if (this._sourceType === o) return this._oscillator.spread
                },
                set: function(t) {
                    this._sourceType === o && (this._oscillator.spread = t)
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "modulationType", {
                get: function() {
                    if (this._sourceType === i || this._sourceType === r) return this._oscillator.modulationType
                },
                set: function(t) {
                    this._sourceType !== i && this._sourceType !== r || (this._oscillator.modulationType = t)
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "modulationIndex", {
                get: function() {
                    if (this._sourceType === i) return this._oscillator.modulationIndex
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "harmonicity", {
                get: function() {
                    if (this._sourceType === i || this._sourceType === r) return this._oscillator.harmonicity
                }
            }), Object.defineProperty(t.OmniOscillator.prototype, "modulationFrequency", {
                get: function() {
                    if (this._sourceType === n) return this._oscillator.modulationFrequency
                }
            }), t.OmniOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this), this._writable(["frequency", "detune"]), this.detune.dispose(), this.detune = null, this.frequency.dispose(), this.frequency = null, this._oscillator.dispose(), this._oscillator = null, this._sourceType = null, this
            }, t.OmniOscillator
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(30), n(37), n(1), n(25)], void 0 === (r = function(t) {
            "use strict";
            return t.Synth = function(e) {
                e = t.defaultArg(e, t.Synth.defaults), t.Monophonic.call(this, e), this.oscillator = new t.OmniOscillator(e.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new t.AmplitudeEnvelope(e.envelope), this.oscillator.chain(this.envelope, this.output), this._readOnly(["oscillator", "frequency", "detune", "envelope"])
            }, t.extend(t.Synth, t.Monophonic), t.Synth.defaults = {
                oscillator: {
                    type: "triangle"
                },
                envelope: {
                    attack: .005,
                    decay: .1,
                    sustain: .3,
                    release: 1
                }
            }, t.Synth.prototype._triggerEnvelopeAttack = function(t, e) {
                return this.envelope.triggerAttack(t, e), this.oscillator.start(t), 0 === this.envelope.sustain && this.oscillator.stop(t + this.envelope.attack + this.envelope.decay), this
            }, t.Synth.prototype._triggerEnvelopeRelease = function(t) {
                return t = this.toSeconds(t), this.envelope.triggerRelease(t), this.oscillator.stop(t + this.envelope.release), this
            }, t.Synth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this), this._writable(["oscillator", "frequency", "detune", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.frequency = null, this.detune = null, this
            }, t.Synth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(6), n(11), n(31)], void 0 === (r = function(t) {
            "use strict";
            t.Noise = function() {
                var e = t.defaults(arguments, ["type"], t.Noise);
                t.Source.call(this, e), this._source = null, this._type = e.type, this._playbackRate = e.playbackRate
            }, t.extend(t.Noise, t.Source), t.Noise.defaults = {
                type: "white",
                playbackRate: 1
            }, Object.defineProperty(t.Noise.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(n) {
                    if (this._type !== n) {
                        if (!(n in e)) throw new TypeError("Tone.Noise: invalid type: " + n);
                        if (this._type = n, this.state === t.State.Started) {
                            var i = this.now();
                            this._stop(i), this._start(i)
                        }
                    }
                }
            }), Object.defineProperty(t.Noise.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(t) {
                    this._playbackRate = t, this._source && (this._source.playbackRate.value = t)
                }
            }), t.Noise.prototype._start = function(n) {
                var i = e[this._type];
                this._source = new t.BufferSource(i).connect(this.output), this._source.loop = !0, this._source.playbackRate.value = this._playbackRate, this._source.start(this.toSeconds(n), Math.random() * (i.duration - .001))
            }, t.Noise.prototype._stop = function(t) {
                this._source && (this._source.stop(this.toSeconds(t)), this._source = null)
            }, t.Noise.prototype.restart = function(t) {
                return this._stop(t), this._start(t), this
            }, t.Noise.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this), null !== this._source && (this._source.disconnect(), this._source = null), this._buffer = null, this
            };
            var e = {},
                n = {};
            return Object.defineProperty(e, "pink", {
                get: function() {
                    if (!n.pink) {
                        for (var e = [], i = 0; i < 2; i++) {
                            var r, o, s, a, u, l, c, f = new Float32Array(220500);
                            e[i] = f, r = o = s = a = u = l = c = 0;
                            for (var p = 0; p < 220500; p++) {
                                var h = 2 * Math.random() - 1;
                                r = .99886 * r + .0555179 * h, o = .99332 * o + .0750759 * h, s = .969 * s + .153852 * h, a = .8665 * a + .3104856 * h, u = .55 * u + .5329522 * h, l = -.7616 * l - .016898 * h, f[p] = r + o + s + a + u + l + c + .5362 * h, f[p] *= .11, c = .115926 * h
                            }
                        }
                        n.pink = (new t.Buffer).fromArray(e)
                    }
                    return n.pink
                }
            }), Object.defineProperty(e, "brown", {
                get: function() {
                    if (!n.brown) {
                        for (var e = [], i = 0; i < 2; i++) {
                            var r = new Float32Array(220500);
                            e[i] = r;
                            for (var o = 0, s = 0; s < 220500; s++) {
                                var a = 2 * Math.random() - 1;
                                r[s] = (o + .02 * a) / 1.02, o = r[s], r[s] *= 3.5
                            }
                        }
                        n.brown = (new t.Buffer).fromArray(e)
                    }
                    return n.brown
                }
            }), Object.defineProperty(e, "white", {
                get: function() {
                    if (!n.white) {
                        for (var e = [], i = 0; i < 2; i++) {
                            var r = new Float32Array(220500);
                            e[i] = r;
                            for (var o = 0; o < 220500; o++) r[o] = 2 * Math.random() - 1
                        }
                        n.white = (new t.Buffer).fromArray(e)
                    }
                    return n.white
                }
            }), t.Noise
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(27), n(20), n(2)], void 0 === (r = function(t) {
            "use strict";
            t.Master = function() {
                t.AudioNode.call(this), t.getContext(function() {
                    this.createInsOuts(1, 0), this._volume = this.output = new t.Volume, this.volume = this._volume.volume, this._readOnly("volume"), this.input.chain(this.output, this.context.destination), this.context.master = this
                }.bind(this))
            }, t.extend(t.Master, t.AudioNode), t.Master.defaults = {
                volume: 0,
                mute: !1
            }, t.Master.prototype.isMaster = !0, Object.defineProperty(t.Master.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }), t.Master.prototype.chain = function() {
                this.input.disconnect(), this.input.chain.apply(this.input, arguments), arguments[arguments.length - 1].connect(this.output)
            }, t.Master.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this), this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null
            }, t.AudioNode.prototype.toMaster = function() {
                return this.connect(this.context.master), this
            };
            var e = t.Master;
            return t.Master = new e, t.Context.on("init", function(n) {
                n.master && n.master.isMaster ? t.Master = n.master : t.Master = new e
            }), t.Context.on("close", function(t) {
                t.master && t.master.isMaster && t.master.dispose()
            }), t.Master
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(89), n(47)], void 0 === (r = function(t) {
            "use strict";
            return t.FrequencyEnvelope = function() {
                var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
                e = t.defaultArg(e, t.FrequencyEnvelope.defaults), t.ScaledEnvelope.call(this, e), this._octaves = e.octaves, this.baseFrequency = e.baseFrequency, this.octaves = e.octaves, this.exponent = e.exponent
            }, t.extend(t.FrequencyEnvelope, t.Envelope), t.FrequencyEnvelope.defaults = {
                baseFrequency: 200,
                octaves: 4,
                exponent: 1
            }, Object.defineProperty(t.FrequencyEnvelope.prototype, "baseFrequency", {
                get: function() {
                    return this._scale.min
                },
                set: function(t) {
                    this._scale.min = this.toFrequency(t), this.octaves = this._octaves
                }
            }), Object.defineProperty(t.FrequencyEnvelope.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t, this._scale.max = this.baseFrequency * Math.pow(2, t)
                }
            }), Object.defineProperty(t.FrequencyEnvelope.prototype, "exponent", {
                get: function() {
                    return this._exp.value
                },
                set: function(t) {
                    this._exp.value = t
                }
            }), t.FrequencyEnvelope.prototype.dispose = function() {
                return t.ScaledEnvelope.prototype.dispose.call(this), this
            }, t.FrequencyEnvelope
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(26), n(61)], void 0 === (r = function(t) {
            return t.ScaleExp = function(e, n, i) {
                t.SignalBase.call(this), this._scale = this.output = new t.Scale(e, n), this._exp = this.input = new t.Pow(t.defaultArg(i, 2)), this._exp.connect(this._scale)
            }, t.extend(t.ScaleExp, t.SignalBase), Object.defineProperty(t.ScaleExp.prototype, "exponent", {
                get: function() {
                    return this._exp.value
                },
                set: function(t) {
                    this._exp.value = t
                }
            }), Object.defineProperty(t.ScaleExp.prototype, "min", {
                get: function() {
                    return this._scale.min
                },
                set: function(t) {
                    this._scale.min = t
                }
            }), Object.defineProperty(t.ScaleExp.prototype, "max", {
                get: function() {
                    return this._scale.max
                },
                set: function(t) {
                    this._scale.max = t
                }
            }), t.ScaleExp.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this
            }, t.ScaleExp
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(14), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Compressor = function() {
                var e = t.defaults(arguments, ["threshold", "ratio"], t.Compressor);
                t.AudioNode.call(this), this._compressor = this.input = this.output = this.context.createDynamicsCompressor(), this.threshold = new t.Param({
                    param: this._compressor.threshold,
                    units: t.Type.Decibels,
                    convert: !1
                }), this.attack = new t.Param(this._compressor.attack, t.Type.Time), this.release = new t.Param(this._compressor.release, t.Type.Time), this.knee = new t.Param({
                    param: this._compressor.knee,
                    units: t.Type.Decibels,
                    convert: !1
                }), this.ratio = new t.Param({
                    param: this._compressor.ratio,
                    convert: !1
                }), this._readOnly(["knee", "release", "attack", "ratio", "threshold"]), this.set(e)
            }, t.extend(t.Compressor, t.AudioNode), t.Compressor.defaults = {
                ratio: 12,
                threshold: -24,
                release: .25,
                attack: .003,
                knee: 30
            }, t.Compressor.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable(["knee", "release", "attack", "ratio", "threshold"]), this._compressor.disconnect(), this._compressor = null, this.attack.dispose(), this.attack = null, this.release.dispose(), this.release = null, this.threshold.dispose(), this.threshold = null, this.ratio.dispose(), this.ratio = null, this.knee.dispose(), this.knee = null, this
            }, t.Compressor
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(2), n(96)], void 0 === (r = function(t) {
            "use strict";
            return t.Analyser = function() {
                var e = t.defaults(arguments, ["type", "size"], t.Analyser);
                t.AudioNode.call(this), this._analyser = this.input = this.output = this.context.createAnalyser(), this._type = e.type, this._buffer = null, this.size = e.size, this.type = e.type
            }, t.extend(t.Analyser, t.AudioNode), t.Analyser.defaults = {
                size: 1024,
                type: "fft",
                smoothing: .8
            }, t.Analyser.Type = {
                Waveform: "waveform",
                FFT: "fft"
            }, t.Analyser.prototype.getValue = function() {
                return this._type === t.Analyser.Type.FFT ? this._analyser.getFloatFrequencyData(this._buffer) : this._type === t.Analyser.Type.Waveform && this._analyser.getFloatTimeDomainData(this._buffer), this._buffer
            }, Object.defineProperty(t.Analyser.prototype, "size", {
                get: function() {
                    return this._analyser.frequencyBinCount
                },
                set: function(t) {
                    this._analyser.fftSize = 2 * t, this._buffer = new Float32Array(t)
                }
            }), Object.defineProperty(t.Analyser.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(e) {
                    if (e !== t.Analyser.Type.Waveform && e !== t.Analyser.Type.FFT) throw new TypeError("Tone.Analyser: invalid type: " + e);
                    this._type = e
                }
            }), Object.defineProperty(t.Analyser.prototype, "smoothing", {
                get: function() {
                    return this._analyser.smoothingTimeConstant
                },
                set: function(t) {
                    this._analyser.smoothingTimeConstant = t
                }
            }), t.Analyser.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this), this._analyser.disconnect(), this._analyser = null, this._buffer = null
            }, t.Analyser
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(65)], void 0 === (r = function(t) {
            return t.TransportTime = function(e, n) {
                if (!(this instanceof t.TransportTime)) return new t.TransportTime(e, n);
                t.Time.call(this, e, n)
            }, t.extend(t.TransportTime, t.Time), t.TransportTime.prototype._now = function() {
                return t.Transport.seconds
            }, t.TransportTime
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(64)], void 0 === (r = function(t) {
            t.Frequency = function(e, n) {
                if (!(this instanceof t.Frequency)) return new t.Frequency(e, n);
                t.TimeBase.call(this, e, n)
            }, t.extend(t.Frequency, t.TimeBase), t.Frequency.prototype._expressions = Object.assign({}, t.TimeBase.prototype._expressions, {
                midi: {
                    regexp: /^(\d+(?:\.\d+)?midi)/,
                    method: function(e) {
                        return "midi" === this._defaultUnits ? e : t.Frequency.mtof(e)
                    }
                },
                note: {
                    regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                    method: function(n, i) {
                        var r = e[n.toLowerCase()] + 12 * (parseInt(i) + 1);
                        return "midi" === this._defaultUnits ? r : t.Frequency.mtof(r)
                    }
                },
                tr: {
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                    method: function(t, e, n) {
                        var i = 1;
                        return t && "0" !== t && (i *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (i *= this._beatsToUnits(parseFloat(e))), n && "0" !== n && (i *= this._beatsToUnits(parseFloat(n) / 4)), i
                    }
                }
            }), t.Frequency.prototype.transpose = function(e) {
                return new this.constructor(this.valueOf() * t.intervalToFrequencyRatio(e))
            }, t.Frequency.prototype.harmonize = function(t) {
                return t.map(function(t) {
                    return this.transpose(t)
                }.bind(this))
            }, t.Frequency.prototype.toMidi = function() {
                return t.Frequency.ftom(this.valueOf())
            }, t.Frequency.prototype.toNote = function() {
                var e = this.toFrequency(),
                    i = Math.log2(e / t.Frequency.A4),
                    r = Math.round(12 * i) + 57,
                    o = Math.floor(r / 12);
                return o < 0 && (r += -12 * o), n[r % 12] + o.toString()
            }, t.Frequency.prototype.toSeconds = function() {
                return 1 / t.TimeBase.prototype.toSeconds.call(this)
            }, t.Frequency.prototype.toFrequency = function() {
                return t.TimeBase.prototype.toFrequency.call(this)
            }, t.Frequency.prototype.toTicks = function() {
                var e = this._beatsToUnits(1),
                    n = this.valueOf() / e;
                return Math.floor(n * t.Transport.PPQ)
            }, t.Frequency.prototype._noArg = function() {
                return 0
            }, t.Frequency.prototype._frequencyToUnits = function(t) {
                return t
            }, t.Frequency.prototype._ticksToUnits = function(e) {
                return 1 / (60 * e / (t.Transport.bpm.value * t.Transport.PPQ))
            }, t.Frequency.prototype._beatsToUnits = function(e) {
                return 1 / t.TimeBase.prototype._beatsToUnits.call(this, e)
            }, t.Frequency.prototype._secondsToUnits = function(t) {
                return 1 / t
            }, t.Frequency.prototype._defaultUnits = "hz";
            var e = {
                    cbb: -2,
                    cb: -1,
                    c: 0,
                    "c#": 1,
                    cx: 2,
                    dbb: 0,
                    db: 1,
                    d: 2,
                    "d#": 3,
                    dx: 4,
                    ebb: 2,
                    eb: 3,
                    e: 4,
                    "e#": 5,
                    ex: 6,
                    fbb: 3,
                    fb: 4,
                    f: 5,
                    "f#": 6,
                    fx: 7,
                    gbb: 5,
                    gb: 6,
                    g: 7,
                    "g#": 8,
                    gx: 9,
                    abb: 7,
                    ab: 8,
                    a: 9,
                    "a#": 10,
                    ax: 11,
                    bbb: 9,
                    bb: 10,
                    b: 11,
                    "b#": 12,
                    bx: 13
                },
                n = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
            return t.Frequency.A4 = 440, t.Frequency.mtof = function(e) {
                return t.Frequency.A4 * Math.pow(2, (e - 69) / 12)
            }, t.Frequency.ftom = function(e) {
                return 69 + Math.round(12 * Math.log2(e / t.Frequency.A4))
            }, t.Frequency
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1), n(61), n(4), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Envelope = function() {
                    var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
                    t.AudioNode.call(this), this.attack = e.attack, this.decay = e.decay, this.sustain = e.sustain, this.release = e.release, this._attackCurve = "linear", this._releaseCurve = "exponential", this._sig = this.output = new t.Signal(0), this.attackCurve = e.attackCurve, this.releaseCurve = e.releaseCurve, this.decayCurve = e.decayCurve
                }, t.extend(t.Envelope, t.AudioNode), t.Envelope.defaults = {
                    attack: .01,
                    decay: .1,
                    sustain: .5,
                    release: 1,
                    attackCurve: "linear",
                    decayCurve: "exponential",
                    releaseCurve: "exponential"
                }, Object.defineProperty(t.Envelope.prototype, "value", {
                    get: function() {
                        return this.getValueAtTime(this.now())
                    }
                }), t.Envelope.prototype._getCurve = function(e, n) {
                    if (t.isString(e)) return e;
                    if (t.isArray(e)) {
                        for (var i in t.Envelope.Type)
                            if (t.Envelope.Type[i][n] === e) return i;
                        return e
                    }
                }, t.Envelope.prototype._setCurve = function(e, n, i) {
                    if (t.Envelope.Type.hasOwnProperty(i)) {
                        var r = t.Envelope.Type[i];
                        t.isObject(r) ? this[e] = r[n] : this[e] = r
                    } else {
                        if (!t.isArray(i)) throw new Error("Tone.Envelope: invalid curve: " + i);
                        this[e] = i
                    }
                }, Object.defineProperty(t.Envelope.prototype, "attackCurve", {
                    get: function() {
                        return this._getCurve(this._attackCurve, "In")
                    },
                    set: function(t) {
                        this._setCurve("_attackCurve", "In", t)
                    }
                }), Object.defineProperty(t.Envelope.prototype, "releaseCurve", {
                    get: function() {
                        return this._getCurve(this._releaseCurve, "Out")
                    },
                    set: function(t) {
                        this._setCurve("_releaseCurve", "Out", t)
                    }
                }), Object.defineProperty(t.Envelope.prototype, "decayCurve", {
                    get: function() {
                        return this._decayCurve
                    },
                    set: function(t) {
                        if (!["linear", "exponential"].includes(t)) throw new Error("Tone.Envelope: invalid curve: " + t);
                        this._decayCurve = t
                    }
                }), t.Envelope.prototype.triggerAttack = function(e, n) {
                    this.log("triggerAttack", e, n), e = this.toSeconds(e);
                    var i = this.toSeconds(this.attack),
                        r = this.toSeconds(this.decay);
                    n = t.defaultArg(n, 1);
                    var o = this.getValueAtTime(e);
                    if (o > 0 && (i = (1 - o) / (1 / i)), "linear" === this._attackCurve) this._sig.linearRampTo(n, i, e);
                    else if ("exponential" === this._attackCurve) this._sig.targetRampTo(n, i, e);
                    else if (i > 0) {
                        this._sig.cancelAndHoldAtTime(e);
                        for (var s = this._attackCurve, a = 1; a < s.length; a++)
                            if (s[a - 1] <= o && o <= s[a]) {
                                (s = this._attackCurve.slice(a))[0] = o;
                                break
                            } this._sig.setValueCurveAtTime(s, e, i, n)
                    }
                    if (r) {
                        var u = n * this.sustain,
                            l = e + i;
                        this.log("decay", l), "linear" === this._decayCurve ? this._sig.linearRampTo(u, r, l + this.sampleTime) : "exponential" === this._decayCurve && this._sig.exponentialApproachValueAtTime(u, l, r)
                    }
                    return this
                }, t.Envelope.prototype.triggerRelease = function(e) {
                    this.log("triggerRelease", e), e = this.toSeconds(e);
                    var n = this.getValueAtTime(e);
                    if (n > 0) {
                        var i = this.toSeconds(this.release);
                        if ("linear" === this._releaseCurve) this._sig.linearRampTo(0, i, e);
                        else if ("exponential" === this._releaseCurve) this._sig.targetRampTo(0, i, e);
                        else {
                            var r = this._releaseCurve;
                            t.isArray(r) && (this._sig.cancelAndHoldAtTime(e), this._sig.setValueCurveAtTime(r, e, i, n))
                        }
                    }
                    return this
                }, t.Envelope.prototype.getValueAtTime = function(t) {
                    return this._sig.getValueAtTime(t)
                }, t.Envelope.prototype.triggerAttackRelease = function(t, e, n) {
                    return e = this.toSeconds(e), this.triggerAttack(e, n), this.triggerRelease(e + this.toSeconds(t)), this
                }, t.Envelope.prototype.cancel = function(t) {
                    return this._sig.cancelScheduledValues(t), this
                }, t.Envelope.prototype.connect = t.SignalBase.prototype.connect,
                function() {
                    var e, n, i = [];
                    for (e = 0; e < 128; e++) i[e] = Math.sin(e / 127 * (Math.PI / 2));
                    var r = [];
                    for (e = 0; e < 127; e++) {
                        n = e / 127;
                        var o = Math.sin(n * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                        r[e] = o / 10 + .83 * n
                    }
                    r[127] = 1;
                    var s = [];
                    for (e = 0; e < 128; e++) s[e] = Math.ceil(e / 127 * 5) / 5;
                    var a = [];
                    for (e = 0; e < 128; e++) n = e / 127, a[e] = .5 * (1 - Math.cos(Math.PI * n));
                    var u, l = [];
                    for (e = 0; e < 128; e++) {
                        n = e / 127;
                        var c = 4 * Math.pow(n, 3) + .2,
                            f = Math.cos(c * Math.PI * 2 * n);
                        l[e] = Math.abs(f * (1 - n))
                    }

                    function p(t) {
                        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = 1 - t[n];
                        return e
                    }
                    t.Envelope.Type = {
                        linear: "linear",
                        exponential: "exponential",
                        bounce: {
                            In: p(l),
                            Out: l
                        },
                        cosine: {
                            In: i,
                            Out: (u = i, u.slice(0).reverse())
                        },
                        step: {
                            In: s,
                            Out: p(s)
                        },
                        ripple: {
                            In: r,
                            Out: p(r)
                        },
                        sine: {
                            In: a,
                            Out: p(a)
                        }
                    }
                }(), t.Envelope.prototype.dispose = function() {
                    return t.AudioNode.prototype.dispose.call(this), this._sig.dispose(), this._sig = null, this._attackCurve = null, this._releaseCurve = null, this
                }, t.Envelope
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(6), n(17), n(5), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.FMOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type", "modulationType"], t.FMOscillator);
                t.Source.call(this, e), this._carrier = new t.Oscillator(e.frequency, e.type), this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = this._carrier.detune, this.detune.value = e.detune, this.modulationIndex = new t.Multiply(e.modulationIndex), this.modulationIndex.units = t.Type.Positive, this._modulator = new t.Oscillator(e.frequency, e.modulationType), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this._modulationNode = new t.Gain(0), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this.detune.connect(this._modulator.detune), this.phase = e.phase, this._readOnly(["modulationIndex", "frequency", "detune", "harmonicity"])
            }, t.extend(t.FMOscillator, t.Source), t.FMOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                type: "sine",
                modulationIndex: 2,
                modulationType: "square",
                harmonicity: 1
            }, t.FMOscillator.prototype._start = function(t) {
                this._modulator.start(t), this._carrier.start(t)
            }, t.FMOscillator.prototype._stop = function(t) {
                this._modulator.stop(t), this._carrier.stop(t)
            }, t.FMOscillator.prototype.restart = function(t) {
                this._modulator.restart(t), this._carrier.restart(t)
            }, Object.defineProperty(t.FMOscillator.prototype, "type", {
                get: function() {
                    return this._carrier.type
                },
                set: function(t) {
                    this._carrier.type = t
                }
            }), Object.defineProperty(t.FMOscillator.prototype, "baseType", {
                get: function() {
                    return this._carrier.baseType
                },
                set: function(t) {
                    this._carrier.baseType = t
                }
            }), Object.defineProperty(t.FMOscillator.prototype, "partialCount", {
                get: function() {
                    return this._carrier.partialCount
                },
                set: function(t) {
                    this._carrier.partialCount = t
                }
            }), Object.defineProperty(t.FMOscillator.prototype, "modulationType", {
                get: function() {
                    return this._modulator.type
                },
                set: function(t) {
                    this._modulator.type = t
                }
            }), Object.defineProperty(t.FMOscillator.prototype, "phase", {
                get: function() {
                    return this._carrier.phase
                },
                set: function(t) {
                    this._carrier.phase = t, this._modulator.phase = t
                }
            }), Object.defineProperty(t.FMOscillator.prototype, "partials", {
                get: function() {
                    return this._carrier.partials
                },
                set: function(t) {
                    this._carrier.partials = t
                }
            }), t.FMOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this), this._writable(["modulationIndex", "frequency", "detune", "harmonicity"]), this.frequency.dispose(), this.frequency = null, this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this._modulationNode.dispose(), this._modulationNode = null, this.modulationIndex.dispose(), this.modulationIndex = null, this
            }, t.FMOscillator
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(6), n(17), n(1), n(7), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.PulseOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "width"], t.Oscillator);
                t.Source.call(this, e), this.width = new t.Signal(e.width, t.Type.NormalRange), this._widthGate = new t.Gain(0), this._sawtooth = new t.Oscillator({
                    frequency: e.frequency,
                    detune: e.detune,
                    type: "sawtooth",
                    phase: e.phase
                }), this.frequency = this._sawtooth.frequency, this.detune = this._sawtooth.detune, this._thresh = new t.WaveShaper(function(t) {
                    return t < 0 ? -1 : 1
                }), this._sawtooth.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), this._readOnly(["width", "frequency", "detune"])
            }, t.extend(t.PulseOscillator, t.Source), t.PulseOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                width: .2
            }, t.PulseOscillator.prototype._start = function(t) {
                t = this.toSeconds(t), this._sawtooth.start(t), this._widthGate.gain.setValueAtTime(1, t)
            }, t.PulseOscillator.prototype._stop = function(t) {
                t = this.toSeconds(t), this._sawtooth.stop(t), this._widthGate.gain.setValueAtTime(0, t)
            }, t.PulseOscillator.prototype.restart = function(t) {
                this._sawtooth.restart(t), this._widthGate.gain.cancelScheduledValues(t), this._widthGate.gain.setValueAtTime(1, t)
            }, Object.defineProperty(t.PulseOscillator.prototype, "phase", {
                get: function() {
                    return this._sawtooth.phase
                },
                set: function(t) {
                    this._sawtooth.phase = t
                }
            }), Object.defineProperty(t.PulseOscillator.prototype, "type", {
                get: function() {
                    return "pulse"
                }
            }), Object.defineProperty(t.PulseOscillator.prototype, "baseType", {
                get: function() {
                    return "pulse"
                }
            }), Object.defineProperty(t.PulseOscillator.prototype, "partials", {
                get: function() {
                    return []
                }
            }), t.PulseOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this), this._sawtooth.dispose(), this._sawtooth = null, this._writable(["width", "frequency", "detune"]), this.width.dispose(), this.width = null, this._widthGate.dispose(), this._widthGate = null, this._thresh.dispose(), this._thresh = null, this.frequency = null, this.detune = null, this
            }, t.PulseOscillator
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(16), n(4), n(33)], void 0 === (r = function(t) {
            "use strict";
            return t.Event = function() {
                var e = t.defaults(arguments, ["callback", "value"], t.Event);
                t.call(this), this._loop = e.loop, this.callback = e.callback, this.value = e.value, this._loopStart = this.toTicks(e.loopStart), this._loopEnd = this.toTicks(e.loopEnd), this._state = new t.TimelineState(t.State.Stopped), this._playbackRate = 1, this._startOffset = 0, this._probability = e.probability, this._humanize = e.humanize, this.mute = e.mute, this.playbackRate = e.playbackRate
            }, t.extend(t.Event), t.Event.defaults = {
                callback: t.noOp,
                loop: !1,
                loopEnd: "1m",
                loopStart: 0,
                playbackRate: 1,
                value: null,
                probability: 1,
                mute: !1,
                humanize: !1
            }, t.Event.prototype._rescheduleEvents = function(e) {
                return e = t.defaultArg(e, -1), this._state.forEachFrom(e, function(e) {
                    var n;
                    if (e.state === t.State.Started) {
                        t.isDefined(e.id) && t.Transport.clear(e.id);
                        var i = e.time + Math.round(this.startOffset / this._playbackRate);
                        if (this._loop) {
                            n = 1 / 0, t.isNumber(this._loop) && (n = this._loop * this._getLoopDuration());
                            var r = this._state.getAfter(i);
                            null !== r && (n = Math.min(n, r.time - i)), n !== 1 / 0 && (this._state.setStateAtTime(t.State.Stopped, i + n + 1), n = t.Ticks(n));
                            var o = t.Ticks(this._getLoopDuration());
                            e.id = t.Transport.scheduleRepeat(this._tick.bind(this), o, t.Ticks(i), n)
                        } else e.id = t.Transport.schedule(this._tick.bind(this), t.Ticks(i))
                    }
                }.bind(this)), this
            }, Object.defineProperty(t.Event.prototype, "state", {
                get: function() {
                    return this._state.getValueAtTime(t.Transport.ticks)
                }
            }), Object.defineProperty(t.Event.prototype, "startOffset", {
                get: function() {
                    return this._startOffset
                },
                set: function(t) {
                    this._startOffset = t
                }
            }), Object.defineProperty(t.Event.prototype, "probability", {
                get: function() {
                    return this._probability
                },
                set: function(t) {
                    this._probability = t
                }
            }), Object.defineProperty(t.Event.prototype, "humanize", {
                get: function() {
                    return this._humanize
                },
                set: function(t) {
                    this._humanize = t
                }
            }), t.Event.prototype.start = function(e) {
                return e = this.toTicks(e), this._state.getValueAtTime(e) === t.State.Stopped && (this._state.add({
                    state: t.State.Started,
                    time: e,
                    id: void 0
                }), this._rescheduleEvents(e)), this
            }, t.Event.prototype.stop = function(e) {
                if (this.cancel(e), e = this.toTicks(e), this._state.getValueAtTime(e) === t.State.Started) {
                    this._state.setStateAtTime(t.State.Stopped, e);
                    var n = this._state.getBefore(e),
                        i = e;
                    null !== n && (i = n.time), this._rescheduleEvents(i)
                }
                return this
            }, t.Event.prototype.cancel = function(e) {
                return e = t.defaultArg(e, -1 / 0), e = this.toTicks(e), this._state.forEachFrom(e, function(e) {
                    t.Transport.clear(e.id)
                }), this._state.cancel(e), this
            }, t.Event.prototype._tick = function(e) {
                var n = t.Transport.getTicksAtTime(e);
                if (!this.mute && this._state.getValueAtTime(n) === t.State.Started) {
                    if (this.probability < 1 && Math.random() > this.probability) return;
                    if (this.humanize) {
                        var i = .02;
                        t.isBoolean(this.humanize) || (i = this.toSeconds(this.humanize)), e += (2 * Math.random() - 1) * i
                    }
                    this.callback(e, this.value)
                }
            }, t.Event.prototype._getLoopDuration = function() {
                return Math.round((this._loopEnd - this._loopStart) / this._playbackRate)
            }, Object.defineProperty(t.Event.prototype, "loop", {
                get: function() {
                    return this._loop
                },
                set: function(t) {
                    this._loop = t, this._rescheduleEvents()
                }
            }), Object.defineProperty(t.Event.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(t) {
                    this._playbackRate = t, this._rescheduleEvents()
                }
            }), Object.defineProperty(t.Event.prototype, "loopEnd", {
                get: function() {
                    return t.Ticks(this._loopEnd).toSeconds()
                },
                set: function(t) {
                    this._loopEnd = this.toTicks(t), this._loop && this._rescheduleEvents()
                }
            }), Object.defineProperty(t.Event.prototype, "loopStart", {
                get: function() {
                    return t.Ticks(this._loopStart).toSeconds()
                },
                set: function(t) {
                    this._loopStart = this.toTicks(t), this._loop && this._rescheduleEvents()
                }
            }), Object.defineProperty(t.Event.prototype, "progress", {
                get: function() {
                    if (this._loop) {
                        var e = t.Transport.ticks,
                            n = this._state.get(e);
                        if (null !== n && n.state === t.State.Started) {
                            var i = this._getLoopDuration();
                            return (e - n.time) % i / i
                        }
                        return 0
                    }
                    return 0
                }
            }), t.Event.prototype.dispose = function() {
                this.cancel(), this._state.dispose(), this._state = null, this.callback = null, this.value = null
            }, t.Event
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1), n(13), n(29), n(10), n(3), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.MidSideMerge = function() {
                t.AudioNode.call(this), this.createInsOuts(2, 0), this.mid = this.input[0] = new t.Gain, this._left = new t.Add, this._timesTwoLeft = new t.Multiply(Math.SQRT1_2), this.side = this.input[1] = new t.Gain, this._right = new t.Subtract, this._timesTwoRight = new t.Multiply(Math.SQRT1_2), this._merge = this.output = new t.Merge, this.mid.connect(this._left, 0, 0), this.side.connect(this._left, 0, 1), this.mid.connect(this._right, 0, 0), this.side.connect(this._right, 0, 1), this._left.connect(this._timesTwoLeft), this._right.connect(this._timesTwoRight), this._timesTwoLeft.connect(this._merge, 0, 0), this._timesTwoRight.connect(this._merge, 0, 1)
            }, t.extend(t.MidSideMerge, t.AudioNode), t.MidSideMerge.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._left.dispose(), this._left = null, this._timesTwoLeft.dispose(), this._timesTwoLeft = null, this._right.dispose(), this._right = null, this._timesTwoRight.dispose(), this._timesTwoRight = null, this._merge.dispose(), this._merge = null, this
            }, t.MidSideMerge
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(29), n(13), n(1), n(19), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.MidSideSplit = function() {
                t.AudioNode.call(this), this.createInsOuts(0, 2), this._split = this.input = new t.Split, this._midAdd = new t.Add, this.mid = this.output[0] = new t.Multiply(Math.SQRT1_2), this._sideSubtract = new t.Subtract, this.side = this.output[1] = new t.Multiply(Math.SQRT1_2), this._split.connect(this._midAdd, 0, 0), this._split.connect(this._midAdd, 1, 1), this._split.connect(this._sideSubtract, 0, 0), this._split.connect(this._sideSubtract, 1, 1), this._midAdd.connect(this.mid), this._sideSubtract.connect(this.side)
            }, t.extend(t.MidSideSplit, t.AudioNode), t.MidSideSplit.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._midAdd.dispose(), this._midAdd = null, this._sideSubtract.dispose(), this._sideSubtract = null, this._split.dispose(), this._split = null, this
            }, t.MidSideSplit
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1), n(9), n(2), n(58)], void 0 === (r = function(t) {
            "use strict";
            return t.LowpassCombFilter = function() {
                var e = t.defaults(arguments, ["delayTime", "resonance", "dampening"], t.LowpassCombFilter);
                t.AudioNode.call(this), this._combFilter = this.output = new t.FeedbackCombFilter(e.delayTime, e.resonance), this.delayTime = this._combFilter.delayTime, this._lowpass = this.input = new t.Filter({
                    frequency: e.dampening,
                    type: "lowpass",
                    Q: 0,
                    rolloff: -12
                }), this.dampening = this._lowpass.frequency, this.resonance = this._combFilter.resonance, this._lowpass.connect(this._combFilter), this._readOnly(["dampening", "resonance", "delayTime"])
            }, t.extend(t.LowpassCombFilter, t.AudioNode), t.LowpassCombFilter.defaults = {
                delayTime: .1,
                resonance: .5,
                dampening: 3e3
            }, t.LowpassCombFilter.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable(["dampening", "resonance", "delayTime"]), this._combFilter.dispose(), this._combFilter = null, this.resonance = null, this.delayTime = null, this._lowpass.dispose(), this._lowpass = null, this.dampening = null, this
            }, t.LowpassCombFilter
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(45)], void 0 === (r = function(t) {
            return t.Ticks = function(e, n) {
                if (!(this instanceof t.Ticks)) return new t.Ticks(e, n);
                t.TransportTime.call(this, e, n)
            }, t.extend(t.Ticks, t.TransportTime), t.Ticks.prototype._defaultUnits = "i", t.Ticks.prototype._now = function() {
                return t.Transport.ticks
            }, t.Ticks.prototype._beatsToUnits = function(t) {
                return this._getPPQ() * t
            }, t.Ticks.prototype._secondsToUnits = function(t) {
                return Math.floor(t / (60 / this._getBpm()) * this._getPPQ())
            }, t.Ticks.prototype._ticksToUnits = function(t) {
                return t
            }, t.Ticks.prototype.toTicks = function() {
                return this.valueOf()
            }, t.Ticks.prototype.toSeconds = function() {
                return this.valueOf() / this._getPPQ() * (60 / this._getBpm())
            }, t.Ticks
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(54)], void 0 === (r = function(t) {
            return t.TransportEvent = function(e, n) {
                n = t.defaultArg(n, t.TransportEvent.defaults), t.call(this), this.Transport = e, this.id = t.TransportEvent._eventId++, this.time = t.Ticks(n.time), this.callback = n.callback, this._once = n.once
            }, t.extend(t.TransportEvent), t.TransportEvent.defaults = {
                once: !1,
                callback: t.noOp
            }, t.TransportEvent._eventId = 0, t.TransportEvent.prototype.invoke = function(t) {
                this.callback && (this.callback(t), this._once && this.Transport && this.Transport.clear(this.id))
            }, t.TransportEvent.prototype.dispose = function() {
                return t.prototype.dispose.call(this), this.Transport = null, this.callback = null, this.time = null, this
            }, t.TransportEvent
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(85), n(33), n(24), n(14)], void 0 === (r = function(t) {
            "use strict";
            return t.TickSource = function() {
                var e = t.defaults(arguments, ["frequency"], t.TickSource);
                this.frequency = new t.TickSignal(e.frequency), this._readOnly("frequency"), this._state = new t.TimelineState(t.State.Stopped), this._state.setStateAtTime(t.State.Stopped, 0), this._tickOffset = new t.Timeline, this.setTicksAtTime(0, 0)
            }, t.extend(t.TickSource), t.TickSource.defaults = {
                frequency: 1
            }, Object.defineProperty(t.TickSource.prototype, "state", {
                get: function() {
                    return this._state.getValueAtTime(this.now())
                }
            }), t.TickSource.prototype.start = function(e, n) {
                return e = this.toSeconds(e), this._state.getValueAtTime(e) !== t.State.Started && (this._state.setStateAtTime(t.State.Started, e), t.isDefined(n) && this.setTicksAtTime(n, e)), this
            }, t.TickSource.prototype.stop = function(e) {
                if (e = this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Stopped) {
                    var n = this._state.get(e);
                    n.time > 0 && (this._tickOffset.cancel(n.time), this._state.cancel(n.time))
                }
                return this._state.cancel(e), this._state.setStateAtTime(t.State.Stopped, e), this.setTicksAtTime(0, e), this
            }, t.TickSource.prototype.pause = function(e) {
                return e = this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Started && this._state.setStateAtTime(t.State.Paused, e), this
            }, t.TickSource.prototype.cancel = function(t) {
                return t = this.toSeconds(t), this._state.cancel(t), this._tickOffset.cancel(t), this
            }, t.TickSource.prototype.getTicksAtTime = function(e) {
                e = this.toSeconds(e);
                var n = this._state.getLastState(t.State.Stopped, e),
                    i = {
                        state: t.State.Paused,
                        time: e
                    };
                this._state.add(i);
                var r = n,
                    o = 0;
                return this._state.forEachBetween(n.time, e + this.sampleTime, function(e) {
                    var n = r.time,
                        i = this._tickOffset.get(e.time);
                    i.time >= r.time && (o = i.ticks, n = i.time), r.state === t.State.Started && e.state !== t.State.Started && (o += this.frequency.getTicksAtTime(e.time) - this.frequency.getTicksAtTime(n)), r = e
                }.bind(this)), this._state.remove(i), o
            }, Object.defineProperty(t.TickSource.prototype, "ticks", {
                get: function() {
                    return this.getTicksAtTime(this.now())
                },
                set: function(t) {
                    this.setTicksAtTime(t, this.now())
                }
            }), Object.defineProperty(t.TickSource.prototype, "seconds", {
                get: function() {
                    return this.getSecondsAtTime(this.now())
                },
                set: function(t) {
                    var e = this.now(),
                        n = this.frequency.timeToTicks(t, e);
                    this.setTicksAtTime(n, e)
                }
            }), t.TickSource.prototype.getSecondsAtTime = function(e) {
                e = this.toSeconds(e);
                var n = this._state.getLastState(t.State.Stopped, e),
                    i = {
                        state: t.State.Paused,
                        time: e
                    };
                this._state.add(i);
                var r = n,
                    o = 0;
                return this._state.forEachBetween(n.time, e + this.sampleTime, function(e) {
                    var n = r.time,
                        i = this._tickOffset.get(e.time);
                    i.time >= r.time && (o = i.seconds, n = i.time), r.state === t.State.Started && e.state !== t.State.Started && (o += e.time - n), r = e
                }.bind(this)), this._state.remove(i), o
            }, t.TickSource.prototype.setTicksAtTime = function(t, e) {
                return e = this.toSeconds(e), this._tickOffset.cancel(e), this._tickOffset.add({
                    time: e,
                    ticks: t,
                    seconds: this.frequency.getDurationOfTicks(t, e)
                }), this
            }, t.TickSource.prototype.getStateAtTime = function(t) {
                return t = this.toSeconds(t), this._state.getValueAtTime(t)
            }, t.TickSource.prototype.getTimeOfTick = function(e, n) {
                n = t.defaultArg(n, this.now());
                var i = this._tickOffset.get(n),
                    r = this._state.get(n),
                    o = Math.max(i.time, r.time),
                    s = this.frequency.getTicksAtTime(o) + e - i.ticks;
                return this.frequency.getTimeOfTick(s)
            }, t.TickSource.prototype.forEachTickBetween = function(e, n, i) {
                var r = this._state.get(e);
                if (this._state.forEachBetween(e, n, function(n) {
                        r.state === t.State.Started && n.state !== t.State.Started && this.forEachTickBetween(Math.max(r.time, e), n.time - this.sampleTime, i), r = n
                    }.bind(this)), e = Math.max(r.time, e), r.state === t.State.Started && this._state) {
                    var o = this.frequency.getTicksAtTime(e),
                        s = (o - this.frequency.getTicksAtTime(r.time)) % 1;
                    0 !== s && (s = 1 - s);
                    for (var a = this.frequency.getTimeOfTick(o + s), u = null; a < n && this._state;) {
                        try {
                            i(a, Math.round(this.getTicksAtTime(a)))
                        } catch (t) {
                            u = t;
                            break
                        }
                        this._state && (a += this.frequency.getDurationOfTicks(1, a))
                    }
                }
                if (u) throw u;
                return this
            }, t.TickSource.prototype.dispose = function() {
                return t.Param.prototype.dispose.call(this), this._state.dispose(), this._state = null, this._tickOffset.dispose(), this._tickOffset = null, this._writable("frequency"), this.frequency.dispose(), this.frequency = null, this
            }, t.TickSource
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(90), n(13), n(1), n(4), n(18), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Follower = function() {
                var e = t.defaults(arguments, ["smoothing"], t.Follower);
                t.AudioNode.call(this), this.createInsOuts(1, 1), this._abs = new t.Abs, this._filter = this.context.createBiquadFilter(), this._filter.type = "lowpass", this._filter.frequency.value = 0, this._filter.Q.value = 0, this._sub = new t.Subtract, this._delay = new t.Delay(this.blockTime), this._smoothing = e.smoothing, this.input.connect(this._delay, this._sub), this.input.connect(this._sub, 0, 1), this._sub.chain(this._abs, this._filter, this.output), this.smoothing = e.smoothing
            }, t.extend(t.Follower, t.AudioNode), t.Follower.defaults = {
                smoothing: .05
            }, Object.defineProperty(t.Follower.prototype, "smoothing", {
                get: function() {
                    return this._smoothing
                },
                set: function(e) {
                    this._smoothing = e, this._filter.frequency.value = .5 * t.Time(e).toFrequency()
                }
            }), t.Follower.prototype.connect = t.SignalBase.prototype.connect, t.Follower.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._filter.disconnect(), this._filter = null, this._delay.dispose(), this._delay = null, this._sub.disconnect(), this._sub = null, this._abs.dispose(), this._abs = null, this
            }, t.Follower
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(42), n(1), n(14), n(18), n(3), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.FeedbackCombFilter = function() {
                var e = t.defaults(arguments, ["delayTime", "resonance"], t.FeedbackCombFilter);
                t.AudioNode.call(this), this._delay = this.input = this.output = new t.Delay(e.delayTime), this.delayTime = this._delay.delayTime, this._feedback = new t.Gain(e.resonance, t.Type.NormalRange), this.resonance = this._feedback.gain, this._delay.chain(this._feedback, this._delay), this._readOnly(["resonance", "delayTime"])
            }, t.extend(t.FeedbackCombFilter, t.AudioNode), t.FeedbackCombFilter.defaults = {
                delayTime: .1,
                resonance: .5
            }, t.FeedbackCombFilter.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable(["resonance", "delayTime"]), this._delay.dispose(), this._delay = null, this.delayTime = null, this._feedback.dispose(), this._feedback = null, this.resonance = null, this
            }, t.FeedbackCombFilter
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(9), n(1), n(3), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.MultibandSplit = function() {
                var e = t.defaults(arguments, ["lowFrequency", "highFrequency"], t.MultibandSplit);
                t.AudioNode.call(this), this.input = new t.Gain, this.output = new Array(3), this.low = this.output[0] = new t.Filter(0, "lowpass"), this._lowMidFilter = new t.Filter(0, "highpass"), this.mid = this.output[1] = new t.Filter(0, "lowpass"), this.high = this.output[2] = new t.Filter(0, "highpass"), this.lowFrequency = new t.Signal(e.lowFrequency, t.Type.Frequency), this.highFrequency = new t.Signal(e.highFrequency, t.Type.Frequency), this.Q = new t.Signal(e.Q), this.input.fan(this.low, this.high), this.input.chain(this._lowMidFilter, this.mid), this.lowFrequency.connect(this.low.frequency), this.lowFrequency.connect(this._lowMidFilter.frequency), this.highFrequency.connect(this.mid.frequency), this.highFrequency.connect(this.high.frequency), this.Q.connect(this.low.Q), this.Q.connect(this._lowMidFilter.Q), this.Q.connect(this.mid.Q), this.Q.connect(this.high.Q), this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
            }, t.extend(t.MultibandSplit, t.AudioNode), t.MultibandSplit.defaults = {
                lowFrequency: 400,
                highFrequency: 2500,
                Q: 1
            }, t.MultibandSplit.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]), this.low.dispose(), this.low = null, this._lowMidFilter.dispose(), this._lowMidFilter = null, this.mid.dispose(), this.mid = null, this.high.dispose(), this.high = null, this.lowFrequency.dispose(), this.lowFrequency = null, this.highFrequency.dispose(), this.highFrequency = null, this.Q.dispose(), this.Q = null, this
            }, t.MultibandSplit
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(23), n(10), n(19), n(92), n(1), n(22), n(28), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Panner = function(e) {
                t.AudioNode.call(this), this._panner = this.input = this.output = this.context.createStereoPanner(), this.pan = this._panner.pan, this.pan.value = t.defaultArg(e, 0), this._readOnly("pan")
            }, t.extend(t.Panner, t.AudioNode), t.Panner.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable("pan"), this._panner.disconnect(), this._panner = null, this.pan = null, this
            }, t.Panner
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(7)], void 0 === (r = function(t) {
            "use strict";
            return t.Pow = function(e) {
                t.SignalBase.call(this), this._exp = t.defaultArg(e, 1), this._expScaler = this.input = this.output = new t.WaveShaper(this._expFunc(this._exp), 8192)
            }, t.extend(t.Pow, t.SignalBase), Object.defineProperty(t.Pow.prototype, "value", {
                get: function() {
                    return this._exp
                },
                set: function(t) {
                    this._exp = t, this._expScaler.setMap(this._expFunc(this._exp))
                }
            }), t.Pow.prototype._expFunc = function(t) {
                return function(e) {
                    return Math.pow(Math.abs(e), t)
                }
            }, t.Pow.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._expScaler.dispose(), this._expScaler = null, this
            }, t.Pow
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(20), n(66)], void 0 === (r = function(t) {
            return t.OfflineContext = function(e, n, i) {
                var r = new OfflineAudioContext(e, n * i, i);
                t.Context.call(this, {
                    context: r,
                    clockSource: "offline",
                    lookAhead: 0,
                    updateInterval: 128 / i
                }), this._duration = n, this._currentTime = 0
            }, t.extend(t.OfflineContext, t.Context), t.OfflineContext.prototype.now = function() {
                return this._currentTime
            }, t.OfflineContext.prototype.resume = function() {
                return Promise.resolve()
            }, t.OfflineContext.prototype.render = function() {
                for (; this._duration - this._currentTime >= 0;) this.emit("tick"), this._currentTime += this.blockTime;
                return this._context.startRendering()
            }, t.OfflineContext.prototype.close = function() {
                return this._context = null, Promise.resolve()
            }, t.OfflineContext
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(62)], void 0 === (r = function(t) {
            if (t.supported) {
                var e = navigator.userAgent.toLowerCase();
                e.includes("safari") && !e.includes("chrome") && e.includes("mobile") && (t.OfflineContext.prototype.createBufferSource = function() {
                    var t = this._context.createBufferSource(),
                        e = t.start;
                    return t.start = function(n) {
                        this.setTimeout(function() {
                            e.call(t, n)
                        }.bind(this), 0)
                    }.bind(this), t
                })
            }
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0)], void 0 === (r = function(t) {
            return t.TimeBase = function(e, n) {
                if (!(this instanceof t.TimeBase)) return new t.TimeBase(e, n);
                if (this._val = e, this._units = n, t.isUndef(this._units) && t.isString(this._val) && parseFloat(this._val) == this._val && "+" !== this._val.charAt(0)) this._val = parseFloat(this._val), this._units = this._defaultUnits;
                else if (e && e.constructor === this.constructor) this._val = e._val, this._units = e._units;
                else if (e instanceof t.TimeBase) switch (this._defaultUnits) {
                    case "s":
                        this._val = e.toSeconds();
                        break;
                    case "i":
                        this._val = e.toTicks();
                        break;
                    case "hz":
                        this._val = e.toFrequency();
                        break;
                    case "midi":
                        this._val = e.toMidi();
                        break;
                    default:
                        throw new Error("Unrecognized default units " + this._defaultUnits)
                }
            }, t.extend(t.TimeBase), t.TimeBase.prototype._expressions = {
                n: {
                    regexp: /^(\d+)n(\.?)$/i,
                    method: function(t, e) {
                        t = parseInt(t);
                        var n = "." === e ? 1.5 : 1;
                        return 1 === t ? this._beatsToUnits(this._getTimeSignature()) * n : this._beatsToUnits(4 / t) * n
                    }
                },
                t: {
                    regexp: /^(\d+)t$/i,
                    method: function(t) {
                        return t = parseInt(t), this._beatsToUnits(8 / (3 * parseInt(t)))
                    }
                },
                m: {
                    regexp: /^(\d+)m$/i,
                    method: function(t) {
                        return this._beatsToUnits(parseInt(t) * this._getTimeSignature())
                    }
                },
                i: {
                    regexp: /^(\d+)i$/i,
                    method: function(t) {
                        return this._ticksToUnits(parseInt(t))
                    }
                },
                hz: {
                    regexp: /^(\d+(?:\.\d+)?)hz$/i,
                    method: function(t) {
                        return this._frequencyToUnits(parseFloat(t))
                    }
                },
                tr: {
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
                    method: function(t, e, n) {
                        var i = 0;
                        return t && "0" !== t && (i += this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (i += this._beatsToUnits(parseFloat(e))), n && "0" !== n && (i += this._beatsToUnits(parseFloat(n) / 4)), i
                    }
                },
                s: {
                    regexp: /^(\d+(?:\.\d+)?)s$/,
                    method: function(t) {
                        return this._secondsToUnits(parseFloat(t))
                    }
                },
                samples: {
                    regexp: /^(\d+)samples$/,
                    method: function(t) {
                        return parseInt(t) / this.context.sampleRate
                    }
                },
                default: {
                    regexp: /^(\d+(?:\.\d+)?)$/,
                    method: function(t) {
                        return this._expressions[this._defaultUnits].method.call(this, t)
                    }
                }
            }, t.TimeBase.prototype._defaultUnits = "s", t.TimeBase.prototype._getBpm = function() {
                return t.Transport ? t.Transport.bpm.value : 120
            }, t.TimeBase.prototype._getTimeSignature = function() {
                return t.Transport ? t.Transport.timeSignature : 4
            }, t.TimeBase.prototype._getPPQ = function() {
                return t.Transport ? t.Transport.PPQ : 192
            }, t.TimeBase.prototype._now = function() {
                return this.now()
            }, t.TimeBase.prototype._frequencyToUnits = function(t) {
                return 1 / t
            }, t.TimeBase.prototype._beatsToUnits = function(t) {
                return 60 / this._getBpm() * t
            }, t.TimeBase.prototype._secondsToUnits = function(t) {
                return t
            }, t.TimeBase.prototype._ticksToUnits = function(t) {
                return t * (this._beatsToUnits(1) / this._getPPQ())
            }, t.TimeBase.prototype._noArg = function() {
                return this._now()
            }, t.TimeBase.prototype.valueOf = function() {
                if (t.isUndef(this._val)) return this._noArg();
                if (t.isString(this._val) && t.isUndef(this._units)) {
                    for (var e in this._expressions)
                        if (this._expressions[e].regexp.test(this._val.trim())) {
                            this._units = e;
                            break
                        }
                } else if (t.isObject(this._val)) {
                    var n = 0;
                    for (var i in this._val) {
                        var r = this._val[i];
                        n += new this.constructor(i).valueOf() * r
                    }
                    return n
                }
                if (t.isDefined(this._units)) {
                    var o = this._expressions[this._units],
                        s = this._val.toString().trim().match(o.regexp);
                    return s ? o.method.apply(this, s.slice(1)) : o.method.call(this, parseFloat(this._val))
                }
                return this._val
            }, t.TimeBase.prototype.toSeconds = function() {
                return this.valueOf()
            }, t.TimeBase.prototype.toFrequency = function() {
                return 1 / this.toSeconds()
            }, t.TimeBase.prototype.toSamples = function() {
                return this.toSeconds() * this.context.sampleRate
            }, t.TimeBase.prototype.toMilliseconds = function() {
                return 1e3 * this.toSeconds()
            }, t.TimeBase.prototype.dispose = function() {
                this._val = null, this._units = null
            }, t.TimeBase
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(64), n(46)], void 0 === (r = function(t) {
            return t.Time = function(e, n) {
                if (!(this instanceof t.Time)) return new t.Time(e, n);
                t.TimeBase.call(this, e, n)
            }, t.extend(t.Time, t.TimeBase), t.Time.prototype._expressions = Object.assign({}, t.TimeBase.prototype._expressions, {
                quantize: {
                    regexp: /^@(.+)/,
                    method: function(e) {
                        if (t.Transport) {
                            var n = new this.constructor(e);
                            return this._secondsToUnits(t.Transport.nextSubdivision(n))
                        }
                        return 0
                    }
                },
                now: {
                    regexp: /^\+(.+)/,
                    method: function(t) {
                        return this._now() + new this.constructor(t)
                    }
                }
            }), t.Time.prototype.quantize = function(e, n) {
                n = t.defaultArg(n, 1);
                var i = new this.constructor(e),
                    r = this.valueOf();
                return r + (Math.round(r / i) * i - r) * n
            }, t.Time.prototype.toNotation = function() {
                for (var e = this.toSeconds(), n = ["1m"], i = 1; i < 8; i++) {
                    var r = Math.pow(2, i);
                    n.push(r + "n."), n.push(r + "n"), n.push(r + "t")
                }
                n.push("0");
                var o = n[0],
                    s = t.Time(n[0]).toSeconds();
                return n.forEach(function(n) {
                    var i = t.Time(n).toSeconds();
                    Math.abs(i - e) < Math.abs(s - e) && (o = n, s = i)
                }), o
            }, t.Time.prototype.toBarsBeatsSixteenths = function() {
                var t = this._beatsToUnits(1),
                    e = this.valueOf() / t;
                e = parseFloat(e.toFixed(4));
                var n = Math.floor(e / this._getTimeSignature()),
                    i = e % 1 * 4;
                return e = Math.floor(e) % this._getTimeSignature(), (i = i.toString()).length > 3 && (i = parseFloat(parseFloat(i).toFixed(3))), [n, e, i].join(":")
            }, t.Time.prototype.toTicks = function() {
                var t = this._beatsToUnits(1),
                    e = this.valueOf() / t;
                return Math.round(e * this._getPPQ())
            }, t.Time.prototype.toSeconds = function() {
                return this.valueOf()
            }, t.Time.prototype.toMidi = function() {
                return t.Frequency.ftom(this.toFrequency())
            }, t.Time
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0)], void 0 === (r = function(t) {
            if (t.supported) {
                !t.global.hasOwnProperty("OfflineAudioContext") && t.global.hasOwnProperty("webkitOfflineAudioContext") && (t.global.OfflineAudioContext = t.global.webkitOfflineAudioContext);
                var e = new OfflineAudioContext(1, 1, 44100).startRendering();
                e && t.isFunction(e.then) || (OfflineAudioContext.prototype._native_startRendering = OfflineAudioContext.prototype.startRendering, OfflineAudioContext.prototype.startRendering = function() {
                    return new Promise(function(t) {
                        this.oncomplete = function(e) {
                            t(e.renderedBuffer)
                        }, this._native_startRendering()
                    }.bind(this))
                })
            }
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(11), n(6), n(56), n(31)], void 0 === (r = function(t) {
            "use strict";
            return t.Player = function(e) {
                var n;
                e instanceof t.Buffer && e.loaded ? (e = e.get(), n = t.Player.defaults) : n = t.defaults(arguments, ["url", "onload"], t.Player), t.Source.call(this, n), this.autostart = n.autostart, this._buffer = new t.Buffer({
                    url: n.url,
                    onload: this._onload.bind(this, n.onload),
                    reverse: n.reverse
                }), e instanceof AudioBuffer && this._buffer.set(e), this._loop = n.loop, this._loopStart = n.loopStart, this._loopEnd = n.loopEnd, this._playbackRate = n.playbackRate, this._activeSources = [], this.fadeIn = n.fadeIn, this.fadeOut = n.fadeOut
            }, t.extend(t.Player, t.Source), t.Player.defaults = {
                onload: t.noOp,
                playbackRate: 1,
                loop: !1,
                autostart: !1,
                loopStart: 0,
                loopEnd: 0,
                reverse: !1,
                fadeIn: 0,
                fadeOut: 0
            }, t.Player.prototype.load = function(t, e) {
                return this._buffer.load(t, this._onload.bind(this, e))
            }, t.Player.prototype._onload = function(e) {
                (e = t.defaultArg(e, t.noOp))(this), this.autostart && this.start()
            }, t.Player.prototype._onSourceEnd = function(e) {
                var n = this._activeSources.indexOf(e);
                this._activeSources.splice(n, 1), 0 !== this._activeSources.length || this._synced || this._state.setStateAtTime(t.State.Stopped, t.now())
            }, t.Player.prototype._start = function(e, n, i) {
                n = this._loop ? t.defaultArg(n, this._loopStart) : t.defaultArg(n, 0), n = this.toSeconds(n);
                var r = t.defaultArg(i, Math.max(this._buffer.duration - n, 0));
                r = this.toSeconds(r), r /= this._playbackRate, e = this.toSeconds(e);
                var o = new t.BufferSource({
                    buffer: this._buffer,
                    loop: this._loop,
                    loopStart: this._loopStart,
                    loopEnd: this._loopEnd,
                    onended: this._onSourceEnd.bind(this),
                    playbackRate: this._playbackRate,
                    fadeIn: this.fadeIn,
                    fadeOut: this.fadeOut
                }).connect(this.output);
                return this._loop || this._synced || this._state.setStateAtTime(t.State.Stopped, e + r), this._activeSources.push(o), this._loop && t.isUndef(i) ? o.start(e, n) : o.start(e, n, r - this.toSeconds(this.fadeOut)), this
            }, t.Player.prototype._stop = function(t) {
                return t = this.toSeconds(t), this._activeSources.forEach(function(e) {
                    e.stop(t)
                }), this
            }, t.Player.prototype.restart = function(t, e, n) {
                return this._stop(t), this._start(t, e, n), this
            }, t.Player.prototype.seek = function(e, n) {
                return n = this.toSeconds(n), this._state.getValueAtTime(n) === t.State.Started && (e = this.toSeconds(e), this._stop(n), this._start(n, e)), this
            }, t.Player.prototype.setLoopPoints = function(t, e) {
                return this.loopStart = t, this.loopEnd = e, this
            }, Object.defineProperty(t.Player.prototype, "loopStart", {
                get: function() {
                    return this._loopStart
                },
                set: function(t) {
                    this._loopStart = t, this._activeSources.forEach(function(e) {
                        e.loopStart = t
                    })
                }
            }), Object.defineProperty(t.Player.prototype, "loopEnd", {
                get: function() {
                    return this._loopEnd
                },
                set: function(t) {
                    this._loopEnd = t, this._activeSources.forEach(function(e) {
                        e.loopEnd = t
                    })
                }
            }), Object.defineProperty(t.Player.prototype, "buffer", {
                get: function() {
                    return this._buffer
                },
                set: function(t) {
                    this._buffer.set(t)
                }
            }), Object.defineProperty(t.Player.prototype, "loop", {
                get: function() {
                    return this._loop
                },
                set: function(e) {
                    if (this._loop !== e && (this._loop = e, this._activeSources.forEach(function(t) {
                            t.loop = e
                        }), e)) {
                        var n = this._state.getNextState(t.State.Stopped, this.now());
                        n && this._state.cancel(n.time)
                    }
                }
            }), Object.defineProperty(t.Player.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(e) {
                    this._playbackRate = e;
                    var n = this.now(),
                        i = this._state.getNextState(t.State.Stopped, n);
                    i && this._state.cancel(i.time), this._activeSources.forEach(function(t) {
                        t.cancelStop(), t.playbackRate.setValueAtTime(e, n)
                    })
                }
            }), Object.defineProperty(t.Player.prototype, "reverse", {
                get: function() {
                    return this._buffer.reverse
                },
                set: function(t) {
                    this._buffer.reverse = t
                }
            }), Object.defineProperty(t.Player.prototype, "loaded", {
                get: function() {
                    return this._buffer.loaded
                }
            }), t.Player.prototype.dispose = function() {
                return this._activeSources.forEach(function(t) {
                    t.dispose()
                }), this._activeSources = null, t.Source.prototype.dispose.call(this), this._buffer.dispose(), this._buffer = null, this
            }, t.Player
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(30), n(41), n(37), n(1), n(9), n(25)], void 0 === (r = function(t) {
            "use strict";
            return t.MonoSynth = function(e) {
                e = t.defaultArg(e, t.MonoSynth.defaults), t.Monophonic.call(this, e), this.oscillator = new t.OmniOscillator(e.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.filter = new t.Filter(e.filter), this.filter.frequency.value = 5e3, this.filterEnvelope = new t.FrequencyEnvelope(e.filterEnvelope), this.envelope = new t.AmplitudeEnvelope(e.envelope), this.oscillator.chain(this.filter, this.envelope, this.output), this.filterEnvelope.connect(this.filter.frequency), this._readOnly(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"])
            }, t.extend(t.MonoSynth, t.Monophonic), t.MonoSynth.defaults = {
                frequency: "C4",
                detune: 0,
                oscillator: {
                    type: "square"
                },
                filter: {
                    Q: 6,
                    type: "lowpass",
                    rolloff: -24
                },
                envelope: {
                    attack: .005,
                    decay: .1,
                    sustain: .9,
                    release: 1
                },
                filterEnvelope: {
                    attack: .06,
                    decay: .2,
                    sustain: .5,
                    release: 2,
                    baseFrequency: 200,
                    octaves: 7,
                    exponent: 2
                }
            }, t.MonoSynth.prototype._triggerEnvelopeAttack = function(t, e) {
                return t = this.toSeconds(t), this.envelope.triggerAttack(t, e), this.filterEnvelope.triggerAttack(t), this.oscillator.start(t), 0 === this.envelope.sustain && this.oscillator.stop(t + this.envelope.attack + this.envelope.decay), this
            }, t.MonoSynth.prototype._triggerEnvelopeRelease = function(t) {
                return this.envelope.triggerRelease(t), this.filterEnvelope.triggerRelease(t), this.oscillator.stop(t + this.envelope.release), this
            }, t.MonoSynth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this), this._writable(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.filterEnvelope.dispose(), this.filterEnvelope = null, this.filter.dispose(), this.filter = null, this.frequency = null, this.detune = null, this
            }, t.MonoSynth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(6), n(17), n(5), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.FatOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type", "spread"], t.FatOscillator);
                t.Source.call(this, e), this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this._oscillators = [], this._spread = e.spread, this._type = e.type, this._phase = e.phase, this._partials = e.partials, this._partialCount = e.partialCount, this.count = e.count, this._readOnly(["frequency", "detune"])
            }, t.extend(t.FatOscillator, t.Source), t.FatOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                spread: 20,
                count: 3,
                type: "sawtooth",
                partials: [],
                partialCount: 0
            }, t.FatOscillator.prototype._start = function(t) {
                t = this.toSeconds(t), this._forEach(function(e) {
                    e.start(t)
                })
            }, t.FatOscillator.prototype._stop = function(t) {
                t = this.toSeconds(t), this._forEach(function(e) {
                    e.stop(t)
                })
            }, t.FatOscillator.prototype.restart = function(t) {
                t = this.toSeconds(t), this._forEach(function(e) {
                    e.restart(t)
                })
            }, t.FatOscillator.prototype._forEach = function(t) {
                for (var e = 0; e < this._oscillators.length; e++) t.call(this, this._oscillators[e], e)
            }, Object.defineProperty(t.FatOscillator.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(t) {
                    this._type = t, this._forEach(function(e) {
                        e.type = t
                    })
                }
            }), Object.defineProperty(t.FatOscillator.prototype, "spread", {
                get: function() {
                    return this._spread
                },
                set: function(t) {
                    if (this._spread = t, this._oscillators.length > 1) {
                        var e = -t / 2,
                            n = t / (this._oscillators.length - 1);
                        this._forEach(function(t, i) {
                            t.detune.value = e + n * i
                        })
                    }
                }
            }), Object.defineProperty(t.FatOscillator.prototype, "count", {
                get: function() {
                    return this._oscillators.length
                },
                set: function(e) {
                    if (e = Math.max(e, 1), this._oscillators.length !== e) {
                        this._forEach(function(t) {
                            t.dispose()
                        }), this._oscillators = [];
                        for (var n = 0; n < e; n++) {
                            var i = new t.Oscillator;
                            this.type === t.Oscillator.Type.Custom ? i.partials = this._partials : i.type = this._type, i.partialCount = this._partialCount, i.phase = this._phase + n / e * 360, i.volume.value = -6 - 1.1 * e, this.frequency.connect(i.frequency), this.detune.connect(i.detune), i.connect(this.output), this._oscillators[n] = i
                        }
                        this.spread = this._spread, this.state === t.State.Started && this._forEach(function(t) {
                            t.start()
                        })
                    }
                }
            }), Object.defineProperty(t.FatOscillator.prototype, "phase", {
                get: function() {
                    return this._phase
                },
                set: function(t) {
                    this._phase = t, this._forEach(function(e) {
                        e.phase = t
                    })
                }
            }), Object.defineProperty(t.FatOscillator.prototype, "baseType", {
                get: function() {
                    return this._oscillators[0].baseType
                },
                set: function(t) {
                    this._forEach(function(e) {
                        e.baseType = t
                    }), this._type = this._oscillators[0].type
                }
            }), Object.defineProperty(t.FatOscillator.prototype, "partials", {
                get: function() {
                    return this._oscillators[0].partials
                },
                set: function(e) {
                    this._partials = e, this._type = t.Oscillator.Type.Custom, this._forEach(function(t) {
                        t.partials = e
                    })
                }
            }), Object.defineProperty(t.FatOscillator.prototype, "partialCount", {
                get: function() {
                    return this._oscillators[0].partialCount
                },
                set: function(t) {
                    this._partialCount = t, this._forEach(function(e) {
                        e.partialCount = t
                    }), this._type = this._oscillators[0].type
                }
            }), t.FatOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this), this._writable(["frequency", "detune"]), this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this._forEach(function(t) {
                    t.dispose()
                }), this._oscillators = null, this._partials = null, this
            }, t.FatOscillator
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(6), n(17), n(5), n(3), n(22)], void 0 === (r = function(t) {
            "use strict";
            return t.AMOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "type", "modulationType"], t.AMOscillator);
                t.Source.call(this, e), this._carrier = new t.Oscillator(e.frequency, e.type), this.frequency = this._carrier.frequency, this.detune = this._carrier.detune, this.detune.value = e.detune, this._modulator = new t.Oscillator(e.frequency, e.modulationType), this._modulationScale = new t.AudioToGain, this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this._modulationNode = new t.Gain(0), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.connect(this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), this.phase = e.phase, this._readOnly(["frequency", "detune", "harmonicity"])
            }, t.extend(t.AMOscillator, t.Oscillator), t.AMOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                type: "sine",
                modulationType: "square",
                harmonicity: 1
            }, t.AMOscillator.prototype._start = function(t) {
                this._modulator.start(t), this._carrier.start(t)
            }, t.AMOscillator.prototype._stop = function(t) {
                this._modulator.stop(t), this._carrier.stop(t)
            }, t.AMOscillator.prototype.restart = function(t) {
                this._modulator.restart(t), this._carrier.restart(t)
            }, Object.defineProperty(t.AMOscillator.prototype, "type", {
                get: function() {
                    return this._carrier.type
                },
                set: function(t) {
                    this._carrier.type = t
                }
            }), Object.defineProperty(t.AMOscillator.prototype, "baseType", {
                get: function() {
                    return this._carrier.baseType
                },
                set: function(t) {
                    this._carrier.baseType = t
                }
            }), Object.defineProperty(t.AMOscillator.prototype, "partialCount", {
                get: function() {
                    return this._carrier.partialCount
                },
                set: function(t) {
                    this._carrier.partialCount = t
                }
            }), Object.defineProperty(t.AMOscillator.prototype, "modulationType", {
                get: function() {
                    return this._modulator.type
                },
                set: function(t) {
                    this._modulator.type = t
                }
            }), Object.defineProperty(t.AMOscillator.prototype, "phase", {
                get: function() {
                    return this._carrier.phase
                },
                set: function(t) {
                    this._carrier.phase = t, this._modulator.phase = t
                }
            }), Object.defineProperty(t.AMOscillator.prototype, "partials", {
                get: function() {
                    return this._carrier.partials
                },
                set: function(t) {
                    this._carrier.partials = t
                }
            }), t.AMOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this), this._writable(["frequency", "detune", "harmonicity"]), this.frequency = null, this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this._modulationNode.dispose(), this._modulationNode = null, this._modulationScale.dispose(), this._modulationScale = null, this
            }, t.AMOscillator
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(6), n(49), n(17), n(5)], void 0 === (r = function(t) {
            "use strict";
            return t.PWMOscillator = function() {
                var e = t.defaults(arguments, ["frequency", "modulationFrequency"], t.PWMOscillator);
                t.Source.call(this, e), this._pulse = new t.PulseOscillator(e.modulationFrequency), this._pulse._sawtooth.type = "sine", this._modulator = new t.Oscillator({
                    frequency: e.frequency,
                    detune: e.detune,
                    phase: e.phase
                }), this._scale = new t.Multiply(2), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this.modulationFrequency = this._pulse.frequency, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), this._readOnly(["modulationFrequency", "frequency", "detune"])
            }, t.extend(t.PWMOscillator, t.Source), t.PWMOscillator.defaults = {
                frequency: 440,
                detune: 0,
                phase: 0,
                modulationFrequency: .4
            }, t.PWMOscillator.prototype._start = function(t) {
                t = this.toSeconds(t), this._modulator.start(t), this._pulse.start(t)
            }, t.PWMOscillator.prototype._stop = function(t) {
                t = this.toSeconds(t), this._modulator.stop(t), this._pulse.stop(t)
            }, t.PWMOscillator.prototype.restart = function(t) {
                this._modulator.restart(t), this._pulse.restart(t)
            }, Object.defineProperty(t.PWMOscillator.prototype, "type", {
                get: function() {
                    return "pwm"
                }
            }), Object.defineProperty(t.PWMOscillator.prototype, "baseType", {
                get: function() {
                    return "pwm"
                }
            }), Object.defineProperty(t.PWMOscillator.prototype, "partials", {
                get: function() {
                    return []
                }
            }), Object.defineProperty(t.PWMOscillator.prototype, "phase", {
                get: function() {
                    return this._modulator.phase
                },
                set: function(t) {
                    this._modulator.phase = t
                }
            }), t.PWMOscillator.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this), this._pulse.dispose(), this._pulse = null, this._scale.dispose(), this._scale = null, this._modulator.dispose(), this._modulator = null, this._writable(["modulationFrequency", "frequency", "detune"]), this.frequency = null, this.detune = null, this.modulationFrequency = null, this
            }, t.PWMOscillator
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(50), n(4), n(16)], void 0 === (r = function(t) {
            "use strict";
            return t.Part = function() {
                var e = t.defaults(arguments, ["callback", "events"], t.Part);
                t.Event.call(this, e), this._events = [];
                for (var n = 0; n < e.events.length; n++) Array.isArray(e.events[n]) ? this.add(e.events[n][0], e.events[n][1]) : this.add(e.events[n])
            }, t.extend(t.Part, t.Event), t.Part.defaults = {
                callback: t.noOp,
                loop: !1,
                loopEnd: "1m",
                loopStart: 0,
                playbackRate: 1,
                probability: 1,
                humanize: !1,
                mute: !1,
                events: []
            }, t.Part.prototype.start = function(e, n) {
                var i = this.toTicks(e);
                return this._state.getValueAtTime(i) !== t.State.Started && (n = this._loop ? t.defaultArg(n, this._loopStart) : t.defaultArg(n, 0), n = this.toTicks(n), this._state.add({
                    state: t.State.Started,
                    time: i,
                    offset: n
                }), this._forEach(function(t) {
                    this._startNote(t, i, n)
                })), this
            }, t.Part.prototype._startNote = function(e, n, i) {
                n -= i, this._loop ? e.startOffset >= this._loopStart && e.startOffset < this._loopEnd ? (e.startOffset < i && (n += this._getLoopDuration()), e.start(t.Ticks(n))) : e.startOffset < this._loopStart && e.startOffset >= i && (e.loop = !1, e.start(t.Ticks(n))) : e.startOffset >= i && e.start(t.Ticks(n))
            }, Object.defineProperty(t.Part.prototype, "startOffset", {
                get: function() {
                    return this._startOffset
                },
                set: function(t) {
                    this._startOffset = t, this._forEach(function(t) {
                        t.startOffset += this._startOffset
                    })
                }
            }), t.Part.prototype.stop = function(e) {
                var n = this.toTicks(e);
                return this._state.cancel(n), this._state.setStateAtTime(t.State.Stopped, n), this._forEach(function(t) {
                    t.stop(e)
                }), this
            }, t.Part.prototype.at = function(e, n) {
                e = t.TransportTime(e);
                for (var i = t.Ticks(1).toSeconds(), r = 0; r < this._events.length; r++) {
                    var o = this._events[r];
                    if (Math.abs(e.toTicks() - o.startOffset) < i) return t.isDefined(n) && (o.value = n), o
                }
                return t.isDefined(n) ? (this.add(e, n), this._events[this._events.length - 1]) : null
            }, t.Part.prototype.add = function(e, n) {
                var i;
                return e.hasOwnProperty("time") && (e = (n = e).time), e = this.toTicks(e), n instanceof t.Event ? (i = n).callback = this._tick.bind(this) : i = new t.Event({
                    callback: this._tick.bind(this),
                    value: n
                }), i.startOffset = e, i.set({
                    loopEnd: this.loopEnd,
                    loopStart: this.loopStart,
                    loop: this.loop,
                    humanize: this.humanize,
                    playbackRate: this.playbackRate,
                    probability: this.probability
                }), this._events.push(i), this._restartEvent(i), this
            }, t.Part.prototype._restartEvent = function(e) {
                this._state.forEach(function(n) {
                    n.state === t.State.Started ? this._startNote(e, n.time, n.offset) : e.stop(t.Ticks(n.time))
                }.bind(this))
            }, t.Part.prototype.remove = function(e, n) {
                e.hasOwnProperty("time") && (e = (n = e).time), e = this.toTicks(e);
                for (var i = this._events.length - 1; i >= 0; i--) {
                    var r = this._events[i];
                    r.startOffset === e && (t.isUndef(n) || t.isDefined(n) && r.value === n) && (this._events.splice(i, 1), r.dispose())
                }
                return this
            }, t.Part.prototype.removeAll = function() {
                return this._forEach(function(t) {
                    t.dispose()
                }), this._events = [], this
            }, t.Part.prototype.cancel = function(t) {
                return this._forEach(function(e) {
                    e.cancel(t)
                }), this._state.cancel(this.toTicks(t)), this
            }, t.Part.prototype._forEach = function(e, n) {
                if (this._events) {
                    n = t.defaultArg(n, this);
                    for (var i = this._events.length - 1; i >= 0; i--) {
                        var r = this._events[i];
                        r instanceof t.Part ? r._forEach(e, n) : e.call(n, r)
                    }
                }
                return this
            }, t.Part.prototype._setAll = function(t, e) {
                this._forEach(function(n) {
                    n[t] = e
                })
            }, t.Part.prototype._tick = function(t, e) {
                this.mute || this.callback(t, e)
            }, t.Part.prototype._testLoopBoundries = function(e) {
                e.startOffset < this._loopStart || e.startOffset >= this._loopEnd ? e.cancel(0) : e.state === t.State.Stopped && this._restartEvent(e)
            }, Object.defineProperty(t.Part.prototype, "probability", {
                get: function() {
                    return this._probability
                },
                set: function(t) {
                    this._probability = t, this._setAll("probability", t)
                }
            }), Object.defineProperty(t.Part.prototype, "humanize", {
                get: function() {
                    return this._humanize
                },
                set: function(t) {
                    this._humanize = t, this._setAll("humanize", t)
                }
            }), Object.defineProperty(t.Part.prototype, "loop", {
                get: function() {
                    return this._loop
                },
                set: function(t) {
                    this._loop = t, this._forEach(function(e) {
                        e._loopStart = this._loopStart, e._loopEnd = this._loopEnd, e.loop = t, this._testLoopBoundries(e)
                    })
                }
            }), Object.defineProperty(t.Part.prototype, "loopEnd", {
                get: function() {
                    return t.Ticks(this._loopEnd).toSeconds()
                },
                set: function(t) {
                    this._loopEnd = this.toTicks(t), this._loop && this._forEach(function(e) {
                        e.loopEnd = t, this._testLoopBoundries(e)
                    })
                }
            }), Object.defineProperty(t.Part.prototype, "loopStart", {
                get: function() {
                    return t.Ticks(this._loopStart).toSeconds()
                },
                set: function(t) {
                    this._loopStart = this.toTicks(t), this._loop && this._forEach(function(t) {
                        t.loopStart = this.loopStart, this._testLoopBoundries(t)
                    })
                }
            }), Object.defineProperty(t.Part.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(t) {
                    this._playbackRate = t, this._setAll("playbackRate", t)
                }
            }), Object.defineProperty(t.Part.prototype, "length", {
                get: function() {
                    return this._events.length
                }
            }), t.Part.prototype.dispose = function() {
                return t.Event.prototype.dispose.call(this), this.removeAll(), this.callback = null, this._events = null, this
            }, t.Part
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(50)], void 0 === (r = function(t) {
            return t.Loop = function() {
                var e = t.defaults(arguments, ["callback", "interval"], t.Loop);
                t.call(this), this._event = new t.Event({
                    callback: this._tick.bind(this),
                    loop: !0,
                    loopEnd: e.interval,
                    playbackRate: e.playbackRate,
                    probability: e.probability
                }), this.callback = e.callback, this.iterations = e.iterations
            }, t.extend(t.Loop), t.Loop.defaults = {
                interval: "4n",
                callback: t.noOp,
                playbackRate: 1,
                iterations: 1 / 0,
                probability: !0,
                mute: !1
            }, t.Loop.prototype.start = function(t) {
                return this._event.start(t), this
            }, t.Loop.prototype.stop = function(t) {
                return this._event.stop(t), this
            }, t.Loop.prototype.cancel = function(t) {
                return this._event.cancel(t), this
            }, t.Loop.prototype._tick = function(t) {
                this.callback(t)
            }, Object.defineProperty(t.Loop.prototype, "state", {
                get: function() {
                    return this._event.state
                }
            }), Object.defineProperty(t.Loop.prototype, "progress", {
                get: function() {
                    return this._event.progress
                }
            }), Object.defineProperty(t.Loop.prototype, "interval", {
                get: function() {
                    return this._event.loopEnd
                },
                set: function(t) {
                    this._event.loopEnd = t
                }
            }), Object.defineProperty(t.Loop.prototype, "playbackRate", {
                get: function() {
                    return this._event.playbackRate
                },
                set: function(t) {
                    this._event.playbackRate = t
                }
            }), Object.defineProperty(t.Loop.prototype, "humanize", {
                get: function() {
                    return this._event.humanize
                },
                set: function(t) {
                    this._event.humanize = t
                }
            }), Object.defineProperty(t.Loop.prototype, "probability", {
                get: function() {
                    return this._event.probability
                },
                set: function(t) {
                    this._event.probability = t
                }
            }), Object.defineProperty(t.Loop.prototype, "mute", {
                get: function() {
                    return this._event.mute
                },
                set: function(t) {
                    this._event.mute = t
                }
            }), Object.defineProperty(t.Loop.prototype, "iterations", {
                get: function() {
                    return !0 === this._event.loop ? 1 / 0 : this._event.loop
                },
                set: function(t) {
                    this._event.loop = t === 1 / 0 || t
                }
            }), t.Loop.prototype.dispose = function() {
                this._event.dispose(), this._event = null, this.callback = null
            }, t.Loop
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(15), n(32)], void 0 === (r = function(t) {
            "use strict";
            return t.StereoXFeedbackEffect = function() {
                var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
                t.StereoEffect.call(this, e), this.feedback = new t.Signal(e.feedback, t.Type.NormalRange), this._feedbackLR = new t.Gain, this._feedbackRL = new t.Gain, this.effectReturnL.chain(this._feedbackLR, this.effectSendR), this.effectReturnR.chain(this._feedbackRL, this.effectSendL), this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain), this._readOnly(["feedback"])
            }, t.extend(t.StereoXFeedbackEffect, t.StereoEffect), t.StereoXFeedbackEffect.prototype.dispose = function() {
                return t.StereoEffect.prototype.dispose.call(this), this._writable(["feedback"]), this.feedback.dispose(), this.feedback = null, this._feedbackLR.dispose(), this._feedbackLR = null, this._feedbackRL.dispose(), this._feedbackRL = null, this
            }, t.StereoXFeedbackEffect
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(8), n(52), n(51)], void 0 === (r = function(t) {
            "use strict";
            return t.MidSideEffect = function() {
                t.Effect.apply(this, arguments), this._midSideSplit = new t.MidSideSplit, this._midSideMerge = new t.MidSideMerge, this.midSend = this._midSideSplit.mid, this.sideSend = this._midSideSplit.side, this.midReturn = this._midSideMerge.mid, this.sideReturn = this._midSideMerge.side, this.effectSend.connect(this._midSideSplit), this._midSideMerge.connect(this.effectReturn)
            }, t.extend(t.MidSideEffect, t.Effect), t.MidSideEffect.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this.midSend = null, this.sideSend = null, this.midReturn = null, this.sideReturn = null, this
            }, t.MidSideEffect
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(11), n(8)], void 0 === (r = function(t) {
            "use strict";
            return t.Convolver = function() {
                var e = t.defaults(arguments, ["url", "onload"], t.Convolver);
                t.Effect.call(this, e), this._convolver = this.context.createConvolver(), this._buffer = new t.Buffer(e.url, function(t) {
                    this.buffer = t.get(), e.onload()
                }.bind(this)), this._buffer.loaded && (this.buffer = this._buffer), this.normalize = e.normalize, this.connectEffect(this._convolver)
            }, t.extend(t.Convolver, t.Effect), t.Convolver.defaults = {
                onload: t.noOp,
                normalize: !0
            }, Object.defineProperty(t.Convolver.prototype, "buffer", {
                get: function() {
                    return this._buffer.length ? this._buffer : null
                },
                set: function(t) {
                    this._buffer.set(t), this._convolver.buffer && (this.effectSend.disconnect(), this._convolver.disconnect(), this._convolver = this.context.createConvolver(), this.connectEffect(this._convolver)), this._convolver.buffer = this._buffer.get()
                }
            }), Object.defineProperty(t.Convolver.prototype, "normalize", {
                get: function() {
                    return this._convolver.normalize
                },
                set: function(t) {
                    this._convolver.normalize = t
                }
            }), t.Convolver.prototype.load = function(t, e) {
                return this._buffer.load(t, function(t) {
                    this.buffer = t, e && e()
                }.bind(this))
            }, t.Convolver.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._buffer.dispose(), this._buffer = null, this._convolver.disconnect(), this._convolver = null, this
            }, t.Convolver
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(7), n(5), n(13)], void 0 === (r = function(t) {
            "use strict";
            return t.Modulo = function(e) {
                t.SignalBase.call(this), this.createInsOuts(1, 0), this._shaper = new t.WaveShaper(Math.pow(2, 16)), this._multiply = new t.Multiply, this._subtract = this.output = new t.Subtract, this._modSignal = new t.Signal(e), this.input.fan(this._shaper, this._subtract), this._modSignal.connect(this._multiply, 0, 0), this._shaper.connect(this._multiply, 0, 1), this._multiply.connect(this._subtract, 0, 1), this._setWaveShaper(e)
            }, t.extend(t.Modulo, t.SignalBase), t.Modulo.prototype._setWaveShaper = function(t) {
                this._shaper.setMap(function(e) {
                    return Math.floor((e + 1e-4) / t)
                })
            }, Object.defineProperty(t.Modulo.prototype, "value", {
                get: function() {
                    return this._modSignal.value
                },
                set: function(t) {
                    this._modSignal.value = t, this._setWaveShaper(t)
                }
            }), t.Modulo.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this._multiply.dispose(), this._multiply = null, this._subtract.dispose(), this._subtract = null, this._modSignal.dispose(), this._modSignal = null, this
            }, t.Modulo
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(16), n(11), n(62), n(40)], void 0 === (r = function(t) {
            return t.Offline = function(e, n) {
                var i = t.context.sampleRate,
                    r = t.context,
                    o = new t.OfflineContext(2, n, i);
                t.context = o;
                var s = e(t.Transport),
                    a = null;
                return a = s && t.isFunction(s.then) ? s.then(function() {
                    return o.render()
                }) : o.render(), t.context = r, a.then(function(e) {
                    return new t.Buffer(e)
                })
            }, t.Offline
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(11)], void 0 === (r = function(t) {
            return t.Buffers = function(e) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                var i = t.defaults(n, ["onload", "baseUrl"], t.Buffers);
                for (var r in t.call(this), this._buffers = {}, this.baseUrl = i.baseUrl, this._loadingCount = 0, e) this._loadingCount++, this.add(r, e[r], this._bufferLoaded.bind(this, i.onload))
            }, t.extend(t.Buffers), t.Buffers.defaults = {
                onload: t.noOp,
                baseUrl: ""
            }, t.Buffers.prototype.has = function(t) {
                return this._buffers.hasOwnProperty(t)
            }, t.Buffers.prototype.get = function(t) {
                if (this.has(t)) return this._buffers[t];
                throw new Error("Tone.Buffers: no buffer named " + t)
            }, t.Buffers.prototype._bufferLoaded = function(t) {
                this._loadingCount--, 0 === this._loadingCount && t && t(this)
            }, Object.defineProperty(t.Buffers.prototype, "loaded", {
                get: function() {
                    var t = !0;
                    for (var e in this._buffers) {
                        var n = this.get(e);
                        t = t && n.loaded
                    }
                    return t
                }
            }), t.Buffers.prototype.add = function(e, n, i) {
                return i = t.defaultArg(i, t.noOp), n instanceof t.Buffer ? (this._buffers[e] = n, i(this)) : n instanceof AudioBuffer ? (this._buffers[e] = new t.Buffer(n), i(this)) : t.isString(n) && (this._buffers[e] = new t.Buffer(this.baseUrl + n, i)), this
            }, t.Buffers.prototype.dispose = function() {
                for (var e in t.prototype.dispose.call(this), this._buffers) this._buffers[e].dispose();
                return this._buffers = null, this
            }, t.Buffers
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0)], void 0 === (r = function(t) {
            "use strict";
            return t.CtrlPattern = function() {
                var e = t.defaults(arguments, ["values", "type"], t.CtrlPattern);
                t.call(this), this.values = e.values, this.index = 0, this._type = null, this._shuffled = null, this._direction = null, this.type = e.type
            }, t.extend(t.CtrlPattern), t.CtrlPattern.Type = {
                Up: "up",
                Down: "down",
                UpDown: "upDown",
                DownUp: "downUp",
                AlternateUp: "alternateUp",
                AlternateDown: "alternateDown",
                Random: "random",
                RandomWalk: "randomWalk",
                RandomOnce: "randomOnce"
            }, t.CtrlPattern.defaults = {
                type: t.CtrlPattern.Type.Up,
                values: []
            }, Object.defineProperty(t.CtrlPattern.prototype, "value", {
                get: function() {
                    if (0 !== this.values.length) {
                        if (1 === this.values.length) return this.values[0];
                        this.index = Math.min(this.index, this.values.length - 1);
                        var e = this.values[this.index];
                        return this.type === t.CtrlPattern.Type.RandomOnce && (this.values.length !== this._shuffled.length && this._shuffleValues(), e = this.values[this._shuffled[this.index]]), e
                    }
                }
            }), Object.defineProperty(t.CtrlPattern.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(e) {
                    this._type = e, this._shuffled = null, this._type === t.CtrlPattern.Type.Up || this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.RandomOnce || this._type === t.CtrlPattern.Type.AlternateUp ? this.index = 0 : this._type !== t.CtrlPattern.Type.Down && this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown || (this.index = this.values.length - 1), this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.AlternateUp ? this._direction = t.CtrlPattern.Type.Up : this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown || (this._direction = t.CtrlPattern.Type.Down), this._type === t.CtrlPattern.Type.RandomOnce ? this._shuffleValues() : this._type === t.CtrlPattern.Random && (this.index = Math.floor(Math.random() * this.values.length))
                }
            }), t.CtrlPattern.prototype.next = function() {
                var e = this.type;
                return e === t.CtrlPattern.Type.Up ? (this.index++, this.index >= this.values.length && (this.index = 0)) : e === t.CtrlPattern.Type.Down ? (this.index--, this.index < 0 && (this.index = this.values.length - 1)) : e === t.CtrlPattern.Type.UpDown || e === t.CtrlPattern.Type.DownUp ? (this._direction === t.CtrlPattern.Type.Up ? this.index++ : this.index--, this.index < 0 ? (this.index = 1, this._direction = t.CtrlPattern.Type.Up) : this.index >= this.values.length && (this.index = this.values.length - 2, this._direction = t.CtrlPattern.Type.Down)) : e === t.CtrlPattern.Type.Random ? this.index = Math.floor(Math.random() * this.values.length) : e === t.CtrlPattern.Type.RandomWalk ? Math.random() < .5 ? (this.index--, this.index = Math.max(this.index, 0)) : (this.index++, this.index = Math.min(this.index, this.values.length - 1)) : e === t.CtrlPattern.Type.RandomOnce ? (this.index++, this.index >= this.values.length && (this.index = 0, this._shuffleValues())) : e === t.CtrlPattern.Type.AlternateUp ? (this._direction === t.CtrlPattern.Type.Up ? (this.index += 2, this._direction = t.CtrlPattern.Type.Down) : (this.index -= 1, this._direction = t.CtrlPattern.Type.Up), this.index >= this.values.length && (this.index = 0, this._direction = t.CtrlPattern.Type.Up)) : e === t.CtrlPattern.Type.AlternateDown && (this._direction === t.CtrlPattern.Type.Up ? (this.index += 1, this._direction = t.CtrlPattern.Type.Down) : (this.index -= 2, this._direction = t.CtrlPattern.Type.Up), this.index < 0 && (this.index = this.values.length - 1, this._direction = t.CtrlPattern.Type.Down)), this.value
            }, t.CtrlPattern.prototype._shuffleValues = function() {
                var t = [];
                this._shuffled = [];
                for (var e = 0; e < this.values.length; e++) t[e] = e;
                for (; t.length > 0;) {
                    var n = t.splice(Math.floor(t.length * Math.random()), 1);
                    this._shuffled.push(n[0])
                }
            }, t.CtrlPattern.prototype.dispose = function() {
                this._shuffled = null, this.values = null
            }, t.CtrlPattern
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0)], void 0 === (r = function(t) {
            t.supported && (AudioBuffer.prototype.copyToChannel || (AudioBuffer.prototype.copyToChannel = function(t, e, n) {
                var i = this.getChannelData(e);
                n = n || 0;
                for (var r = 0; r < i.length; r++) i[r + n] = t[r]
            }, AudioBuffer.prototype.copyFromChannel = function(t, e, n) {
                var i = this.getChannelData(e);
                n = n || 0;
                for (var r = 0; r < t.length; r++) t[r] = i[r + n]
            }))
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(11), n(6), n(3), n(2)], void 0 === (r = function(t) {
            return t.OscillatorNode = function() {
                var e = t.defaults(arguments, ["frequency", "type"], t.OscillatorNode);
                t.AudioNode.call(this, e), this.onended = e.onended, this._startTime = -1, this._stopTime = -1, this._gainNode = this.output = new t.Gain(0), this._oscillator = this.context.createOscillator(), this._oscillator.connect(this._gainNode), this.type = e.type, this.frequency = new t.Param({
                    param: this._oscillator.frequency,
                    units: t.Type.Frequency,
                    value: e.frequency
                }), this.detune = new t.Param({
                    param: this._oscillator.detune,
                    units: t.Type.Cents,
                    value: e.detune
                }), this._gain = 1
            }, t.extend(t.OscillatorNode, t.AudioNode), t.OscillatorNode.defaults = {
                frequency: 440,
                detune: 0,
                type: "sine",
                onended: t.noOp
            }, Object.defineProperty(t.OscillatorNode.prototype, "state", {
                get: function() {
                    return this.getStateAtTime(this.now())
                }
            }), t.OscillatorNode.prototype.getStateAtTime = function(e) {
                return e = this.toSeconds(e), -1 !== this._startTime && e >= this._startTime && (-1 === this._stopTime || e <= this._stopTime) ? t.State.Started : t.State.Stopped
            }, t.OscillatorNode.prototype.start = function(t) {
                if (this.log("start", t), -1 !== this._startTime) throw new Error("cannot call OscillatorNode.start more than once");
                return this._startTime = this.toSeconds(t), this._oscillator.start(this._startTime), this._gainNode.gain.setValueAtTime(1, this._startTime), this
            }, t.OscillatorNode.prototype.setPeriodicWave = function(t) {
                return this._oscillator.setPeriodicWave(t), this
            }, t.OscillatorNode.prototype.stop = function(t) {
                return this.log("stop", t), this.assert(-1 !== this._startTime, "'start' must be called before 'stop'"), this.cancelStop(), this._stopTime = this.toSeconds(t), this._stopTime > this._startTime ? (this._gainNode.gain.setValueAtTime(0, this._stopTime), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout(function() {
                    this._oscillator.stop(this.now()), this.onended()
                }.bind(this), this._stopTime - this.context.currentTime)) : this._gainNode.gain.cancelScheduledValues(this._startTime), this
            }, t.OscillatorNode.prototype.cancelStop = function() {
                return -1 !== this._startTime && (this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1), this
            }, Object.defineProperty(t.OscillatorNode.prototype, "type", {
                get: function() {
                    return this._oscillator.type
                },
                set: function(t) {
                    this._oscillator.type = t
                }
            }), t.OscillatorNode.prototype.dispose = function() {
                return this.context.clearTimeout(this._timeout), t.AudioNode.prototype.dispose.call(this), this.onended = null, this._oscillator.disconnect(), this._oscillator = null, this._gainNode.dispose(), this._gainNode = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this
            }, t.OscillatorNode
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(55), n(54)], void 0 === (r = function(t) {
            return t.TransportRepeatEvent = function(e, n) {
                t.TransportEvent.call(this, e, n), n = t.defaultArg(n, t.TransportRepeatEvent.defaults), this.duration = t.Ticks(n.duration), this._interval = t.Ticks(n.interval), this._currentId = -1, this._nextId = -1, this._nextTick = this.time, this._boundRestart = this._restart.bind(this), this.Transport.on("start loopStart", this._boundRestart), this._restart()
            }, t.extend(t.TransportRepeatEvent, t.TransportEvent), t.TransportRepeatEvent.defaults = {
                duration: 1 / 0,
                interval: 1
            }, t.TransportRepeatEvent.prototype.invoke = function(e) {
                this._createEvents(e), t.TransportEvent.prototype.invoke.call(this, e)
            }, t.TransportRepeatEvent.prototype._createEvents = function(e) {
                var n = this.Transport.getTicksAtTime(e);
                n >= this.time && n >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), t.Ticks(this._nextTick)))
            }, t.TransportRepeatEvent.prototype._restart = function(e) {
                this.Transport.clear(this._currentId), this.Transport.clear(this._nextId), this._nextTick = this.time;
                var n = this.Transport.getTicksAtTime(e);
                n > this.time && (this._nextTick = this.time + Math.ceil((n - this.time) / this._interval) * this._interval), this._currentId = this.Transport.scheduleOnce(this.invoke.bind(this), t.Ticks(this._nextTick)), this._nextTick += this._interval, this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), t.Ticks(this._nextTick))
            }, t.TransportRepeatEvent.prototype.dispose = function() {
                return this.Transport.clear(this._currentId), this.Transport.clear(this._nextId), this.Transport.off("start loopStart", this._boundRestart), this._boundCreateEvents = null, t.TransportEvent.prototype.dispose.call(this), this.duration = null, this._interval = null, this
            }, t.TransportRepeatEvent
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(4)], void 0 === (r = function(t) {
            "use strict";
            t.IntervalTimeline = function() {
                t.call(this), this._root = null, this._length = 0
            }, t.extend(t.IntervalTimeline), t.IntervalTimeline.prototype.add = function(n) {
                if (t.isUndef(n.time) || t.isUndef(n.duration)) throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");
                n.time = n.time.valueOf();
                var i = new e(n.time, n.time + n.duration, n);
                for (null === this._root ? this._root = i : this._root.insert(i), this._length++; null !== i;) i.updateHeight(), i.updateMax(), this._rebalance(i), i = i.parent;
                return this
            }, t.IntervalTimeline.prototype.remove = function(t) {
                if (null !== this._root) {
                    var e = [];
                    this._root.search(t.time, e);
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (i.event === t) {
                            this._removeNode(i), this._length--;
                            break
                        }
                    }
                }
                return this
            }, Object.defineProperty(t.IntervalTimeline.prototype, "length", {
                get: function() {
                    return this._length
                }
            }), t.IntervalTimeline.prototype.cancel = function(t) {
                return this.forEachFrom(t, function(t) {
                    this.remove(t)
                }.bind(this)), this
            }, t.IntervalTimeline.prototype._setRoot = function(t) {
                this._root = t, null !== this._root && (this._root.parent = null)
            }, t.IntervalTimeline.prototype._replaceNodeInParent = function(t, e) {
                null !== t.parent ? (t.isLeftChild() ? t.parent.left = e : t.parent.right = e, this._rebalance(t.parent)) : this._setRoot(e)
            }, t.IntervalTimeline.prototype._removeNode = function(t) {
                if (null === t.left && null === t.right) this._replaceNodeInParent(t, null);
                else if (null === t.right) this._replaceNodeInParent(t, t.left);
                else if (null === t.left) this._replaceNodeInParent(t, t.right);
                else {
                    var e, n;
                    if (t.getBalance() > 0)
                        if (null === t.left.right)(e = t.left).right = t.right, n = e;
                        else {
                            for (e = t.left.right; null !== e.right;) e = e.right;
                            e.parent.right = e.left, n = e.parent, e.left = t.left, e.right = t.right
                        }
                    else if (null === t.right.left)(e = t.right).left = t.left, n = e;
                    else {
                        for (e = t.right.left; null !== e.left;) e = e.left;
                        e.parent = e.parent, e.parent.left = e.right, n = e.parent, e.left = t.left, e.right = t.right
                    }
                    null !== t.parent ? t.isLeftChild() ? t.parent.left = e : t.parent.right = e : this._setRoot(e), this._rebalance(n)
                }
                t.dispose()
            }, t.IntervalTimeline.prototype._rotateLeft = function(t) {
                var e = t.parent,
                    n = t.isLeftChild(),
                    i = t.right;
                t.right = i.left, i.left = t, null !== e ? n ? e.left = i : e.right = i : this._setRoot(i)
            }, t.IntervalTimeline.prototype._rotateRight = function(t) {
                var e = t.parent,
                    n = t.isLeftChild(),
                    i = t.left;
                t.left = i.right, i.right = t, null !== e ? n ? e.left = i : e.right = i : this._setRoot(i)
            }, t.IntervalTimeline.prototype._rebalance = function(t) {
                var e = t.getBalance();
                e > 1 ? t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t))
            }, t.IntervalTimeline.prototype.get = function(t) {
                if (null !== this._root) {
                    var e = [];
                    if (this._root.search(t, e), e.length > 0) {
                        for (var n = e[0], i = 1; i < e.length; i++) e[i].low > n.low && (n = e[i]);
                        return n.event
                    }
                }
                return null
            }, t.IntervalTimeline.prototype.forEach = function(t) {
                if (null !== this._root) {
                    var e = [];
                    this._root.traverse(function(t) {
                        e.push(t)
                    });
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n].event;
                        i && t(i)
                    }
                }
                return this
            }, t.IntervalTimeline.prototype.forEachAtTime = function(t, e) {
                if (null !== this._root) {
                    var n = [];
                    this._root.search(t, n);
                    for (var i = n.length - 1; i >= 0; i--) {
                        var r = n[i].event;
                        r && e(r)
                    }
                }
                return this
            }, t.IntervalTimeline.prototype.forEachFrom = function(t, e) {
                if (null !== this._root) {
                    var n = [];
                    this._root.searchAfter(t, n);
                    for (var i = n.length - 1; i >= 0; i--) e(n[i].event)
                }
                return this
            }, t.IntervalTimeline.prototype.dispose = function() {
                var t = [];
                null !== this._root && this._root.traverse(function(e) {
                    t.push(e)
                });
                for (var e = 0; e < t.length; e++) t[e].dispose();
                return t = null, this._root = null, this
            };
            var e = function(t, e, n) {
                this.event = n, this.low = t, this.high = e, this.max = this.high, this._left = null, this._right = null, this.parent = null, this.height = 0
            };
            return e.prototype.insert = function(t) {
                t.low <= this.low ? null === this.left ? this.left = t : this.left.insert(t) : null === this.right ? this.right = t : this.right.insert(t)
            }, e.prototype.search = function(t, e) {
                t > this.max || (null !== this.left && this.left.search(t, e), this.low <= t && this.high > t && e.push(this), this.low > t || null !== this.right && this.right.search(t, e))
            }, e.prototype.searchAfter = function(t, e) {
                this.low >= t && (e.push(this), null !== this.left && this.left.searchAfter(t, e)), null !== this.right && this.right.searchAfter(t, e)
            }, e.prototype.traverse = function(t) {
                t(this), null !== this.left && this.left.traverse(t), null !== this.right && this.right.traverse(t)
            }, e.prototype.updateHeight = function() {
                null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0
            }, e.prototype.updateMax = function() {
                this.max = this.high, null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max))
            }, e.prototype.getBalance = function() {
                var t = 0;
                return null !== this.left && null !== this.right ? t = this.left.height - this.right.height : null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)), t
            }, e.prototype.isLeftChild = function() {
                return null !== this.parent && this.parent.left === this
            }, Object.defineProperty(e.prototype, "left", {
                get: function() {
                    return this._left
                },
                set: function(t) {
                    this._left = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax()
                }
            }), Object.defineProperty(e.prototype, "right", {
                get: function() {
                    return this._right
                },
                set: function(t) {
                    this._right = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax()
                }
            }), e.prototype.dispose = function() {
                this.parent = null, this._left = null, this._right = null, this.event = null
            }, t.IntervalTimeline
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1)], void 0 === (r = function(t) {
            function e(t) {
                return function(e, n) {
                    n = this.toSeconds(n), t.apply(this, arguments);
                    var i = this._events.get(n),
                        r = this._events.previousEvent(i),
                        o = this._getTicksUntilEvent(r, n);
                    return i.ticks = Math.max(o, 0), this
                }
            }
            return t.TickSignal = function(e) {
                e = t.defaultArg(e, 1), t.Signal.call(this, {
                    units: t.Type.Ticks,
                    value: e
                }), this._events.memory = 1 / 0, this.cancelScheduledValues(0), this._events.add({
                    type: t.Param.AutomationType.SetValue,
                    time: 0,
                    value: e
                })
            }, t.extend(t.TickSignal, t.Signal), t.TickSignal.prototype.setValueAtTime = e(t.Signal.prototype.setValueAtTime), t.TickSignal.prototype.linearRampToValueAtTime = e(t.Signal.prototype.linearRampToValueAtTime), t.TickSignal.prototype.setTargetAtTime = function(t, e, n) {
                e = this.toSeconds(e), this.setRampPoint(e), t = this._fromUnits(t);
                for (var i = this._events.get(e), r = Math.round(Math.max(1 / n, 1)), o = 0; o <= r; o++) {
                    var s = n * o + e,
                        a = this._exponentialApproach(i.time, i.value, t, n, s);
                    this.linearRampToValueAtTime(this._toUnits(a), s)
                }
                return this
            }, t.TickSignal.prototype.exponentialRampToValueAtTime = function(t, e) {
                e = this.toSeconds(e), t = this._fromUnits(t);
                var n = this._events.get(e);
                null === n && (n = {
                    value: this._initialValue,
                    time: 0
                });
                for (var i = Math.round(Math.max(10 * (e - n.time), 1)), r = (e - n.time) / i, o = 0; o <= i; o++) {
                    var s = r * o + n.time,
                        a = this._exponentialInterpolate(n.time, n.value, e, t, s);
                    this.linearRampToValueAtTime(this._toUnits(a), s)
                }
                return this
            }, t.TickSignal.prototype._getTicksUntilEvent = function(e, n) {
                if (null === e) e = {
                    ticks: 0,
                    time: 0
                };
                else if (t.isUndef(e.ticks)) {
                    var i = this._events.previousEvent(e);
                    e.ticks = this._getTicksUntilEvent(i, e.time)
                }
                var r = this.getValueAtTime(e.time),
                    o = this.getValueAtTime(n);
                return this._events.get(n).time === n && this._events.get(n).type === t.Param.AutomationType.SetValue && (o = this.getValueAtTime(n - this.sampleTime)), .5 * (n - e.time) * (r + o) + e.ticks
            }, t.TickSignal.prototype.getTicksAtTime = function(t) {
                t = this.toSeconds(t);
                var e = this._events.get(t);
                return Math.max(this._getTicksUntilEvent(e, t), 0)
            }, t.TickSignal.prototype.getDurationOfTicks = function(t, e) {
                e = this.toSeconds(e);
                var n = this.getTicksAtTime(e);
                return this.getTimeOfTick(n + t) - e
            }, t.TickSignal.prototype.getTimeOfTick = function(e) {
                var n = this._events.get(e, "ticks"),
                    i = this._events.getAfter(e, "ticks");
                if (n && n.ticks === e) return n.time;
                if (n && i && i.type === t.Param.AutomationType.Linear && n.value !== i.value) {
                    var r = this.getValueAtTime(n.time),
                        o = (this.getValueAtTime(i.time) - r) / (i.time - n.time),
                        s = Math.sqrt(Math.pow(r, 2) - 2 * o * (n.ticks - e)),
                        a = (-r + s) / o;
                    return (a > 0 ? a : (-r - s) / o) + n.time
                }
                return n ? 0 === n.value ? 1 / 0 : n.time + (e - n.ticks) / n.value : e / this._initialValue
            }, t.TickSignal.prototype.ticksToTime = function(e, n) {
                return n = this.toSeconds(n), new t.Time(this.getDurationOfTicks(e, n))
            }, t.TickSignal.prototype.timeToTicks = function(e, n) {
                n = this.toSeconds(n), e = this.toSeconds(e);
                var i = this.getTicksAtTime(n),
                    r = this.getTicksAtTime(n + e);
                return new t.Ticks(r - i)
            }, t.TickSignal
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(56), n(33), n(35), n(20)], void 0 === (r = function(t) {
            "use strict";
            return t.Clock = function() {
                var e = t.defaults(arguments, ["callback", "frequency"], t.Clock);
                t.Emitter.call(this), this.callback = e.callback, this._nextTick = 0, this._tickSource = new t.TickSource(e.frequency), this._lastUpdate = 0, this.frequency = this._tickSource.frequency, this._readOnly("frequency"), this._state = new t.TimelineState(t.State.Stopped), this._state.setStateAtTime(t.State.Stopped, 0), this._boundLoop = this._loop.bind(this), this.context.on("tick", this._boundLoop)
            }, t.extend(t.Clock, t.Emitter), t.Clock.defaults = {
                callback: t.noOp,
                frequency: 1
            }, Object.defineProperty(t.Clock.prototype, "state", {
                get: function() {
                    return this._state.getValueAtTime(this.now())
                }
            }), t.Clock.prototype.start = function(e, n) {
                return this.context.resume(), e = this.toSeconds(e), this._state.getValueAtTime(e) !== t.State.Started && (this._state.setStateAtTime(t.State.Started, e), this._tickSource.start(e, n), e < this._lastUpdate && this.emit("start", e, n)), this
            }, t.Clock.prototype.stop = function(e) {
                return e = this.toSeconds(e), this._state.cancel(e), this._state.setStateAtTime(t.State.Stopped, e), this._tickSource.stop(e), e < this._lastUpdate && this.emit("stop", e), this
            }, t.Clock.prototype.pause = function(e) {
                return e = this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Started && (this._state.setStateAtTime(t.State.Paused, e), this._tickSource.pause(e), e < this._lastUpdate && this.emit("pause", e)), this
            }, Object.defineProperty(t.Clock.prototype, "ticks", {
                get: function() {
                    return Math.ceil(this.getTicksAtTime(this.now()))
                },
                set: function(t) {
                    this._tickSource.ticks = t
                }
            }), Object.defineProperty(t.Clock.prototype, "seconds", {
                get: function() {
                    return this._tickSource.seconds
                },
                set: function(t) {
                    this._tickSource.seconds = t
                }
            }), t.Clock.prototype.getSecondsAtTime = function(t) {
                return this._tickSource.getSecondsAtTime(t)
            }, t.Clock.prototype.setTicksAtTime = function(t, e) {
                return this._tickSource.setTicksAtTime(t, e), this
            }, t.Clock.prototype.getTicksAtTime = function(t) {
                return this._tickSource.getTicksAtTime(t)
            }, t.Clock.prototype.nextTickTime = function(t, e) {
                e = this.toSeconds(e);
                var n = this.getTicksAtTime(e);
                return this._tickSource.getTimeOfTick(n + t, e)
            }, t.Clock.prototype._loop = function() {
                var e = this._lastUpdate,
                    n = this.now();
                this._lastUpdate = n, e !== n && (this._state.forEachBetween(e, n, function(e) {
                    switch (e.state) {
                        case t.State.Started:
                            var n = this._tickSource.getTicksAtTime(e.time);
                            this.emit("start", e.time, n);
                            break;
                        case t.State.Stopped:
                            0 !== e.time && this.emit("stop", e.time);
                            break;
                        case t.State.Paused:
                            this.emit("pause", e.time)
                    }
                }.bind(this)), this._tickSource.forEachTickBetween(e, n, function(t, e) {
                    this.callback(t, e)
                }.bind(this)))
            }, t.Clock.prototype.getStateAtTime = function(t) {
                return t = this.toSeconds(t), this._state.getValueAtTime(t)
            }, t.Clock.prototype.dispose = function() {
                t.Emitter.prototype.dispose.call(this), this.context.off("tick", this._boundLoop), this._writable("frequency"), this._tickSource.dispose(), this._tickSource = null, this.frequency = null, this._boundLoop = null, this._nextTick = 1 / 0, this.callback = null, this._state.dispose(), this._state = null
            }, t.Clock
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(1), n(5), n(7)], void 0 === (r = function(t) {
            "use strict";
            return t.GreaterThanZero = function() {
                t.SignalBase.call(this), this._thresh = this.output = new t.WaveShaper(function(t) {
                    return t <= 0 ? 0 : 1
                }, 127), this._scale = this.input = new t.Multiply(1e4), this._scale.connect(this._thresh)
            }, t.extend(t.GreaterThanZero, t.SignalBase), t.GreaterThanZero.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._thresh.dispose(), this._thresh = null, this
            }, t.GreaterThanZero
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(87), n(13), n(1)], void 0 === (r = function(t) {
            "use strict";
            return t.GreaterThan = function(e) {
                t.Signal.call(this), this.createInsOuts(2, 0), this._param = this.input[0] = new t.Subtract(e), this.input[1] = this._param.input[1], this._gtz = this.output = new t.GreaterThanZero, this._param.connect(this._gtz), this.proxy = !1
            }, t.extend(t.GreaterThan, t.Signal), t.GreaterThan.prototype.dispose = function() {
                return t.Signal.prototype.dispose.call(this), this._gtz.dispose(), this._gtz = null, this
            }, t.GreaterThan
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(47), n(26)], void 0 === (r = function(t) {
            "use strict";
            return t.ScaledEnvelope = function() {
                var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
                t.Envelope.call(this, e), e = t.defaultArg(e, t.ScaledEnvelope.defaults), this._exp = this.output = new t.Pow(e.exponent), this._scale = this.output = new t.Scale(e.min, e.max), this._sig.chain(this._exp, this._scale)
            }, t.extend(t.ScaledEnvelope, t.Envelope), t.ScaledEnvelope.defaults = {
                min: 0,
                max: 1,
                exponent: 1
            }, Object.defineProperty(t.ScaledEnvelope.prototype, "min", {
                get: function() {
                    return this._scale.min
                },
                set: function(t) {
                    this._scale.min = t
                }
            }), Object.defineProperty(t.ScaledEnvelope.prototype, "max", {
                get: function() {
                    return this._scale.max
                },
                set: function(t) {
                    this._scale.max = t
                }
            }), Object.defineProperty(t.ScaledEnvelope.prototype, "exponent", {
                get: function() {
                    return this._exp.value
                },
                set: function(t) {
                    this._exp.value = t
                }
            }), t.ScaledEnvelope.prototype.dispose = function() {
                return t.Envelope.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this
            }, t.ScaledEnvelope
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(7), n(36)], void 0 === (r = function(t) {
            "use strict";
            return t.Abs = function() {
                t.SignalBase.call(this), this._abs = this.input = this.output = new t.WaveShaper(function(t) {
                    return Math.abs(t) < .001 ? 0 : Math.abs(t)
                }, 1024)
            }, t.extend(t.Abs, t.SignalBase), t.Abs.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._abs.dispose(), this._abs = null, this
            }, t.Abs
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(3), n(2)], void 0 === (r = function(t) {
            return t.Solo = function() {
                var e = t.defaults(arguments, ["solo"], t.Solo);
                t.AudioNode.call(this), this.input = this.output = new t.Gain, this._soloBind = this._soloed.bind(this), this.context.on("solo", this._soloBind), this.solo = e.solo
            }, t.extend(t.Solo, t.AudioNode), t.Solo.defaults = {
                solo: !1
            }, Object.defineProperty(t.Solo.prototype, "solo", {
                get: function() {
                    return this._isSoloed()
                },
                set: function(t) {
                    t ? this._addSolo() : this._removeSolo(), this.context.emit("solo", this)
                }
            }), Object.defineProperty(t.Solo.prototype, "muted", {
                get: function() {
                    return 0 === this.input.gain.value
                }
            }), t.Solo.prototype._addSolo = function() {
                t.isArray(this.context._currentSolo) || (this.context._currentSolo = []), this._isSoloed() || this.context._currentSolo.push(this)
            }, t.Solo.prototype._removeSolo = function() {
                if (this._isSoloed()) {
                    var t = this.context._currentSolo.indexOf(this);
                    this.context._currentSolo.splice(t, 1)
                }
            }, t.Solo.prototype._isSoloed = function() {
                return !!t.isArray(this.context._currentSolo) && 0 !== this.context._currentSolo.length && -1 !== this.context._currentSolo.indexOf(this)
            }, t.Solo.prototype._noSolos = function() {
                return !t.isArray(this.context._currentSolo) || 0 === this.context._currentSolo.length
            }, t.Solo.prototype._soloed = function() {
                this._isSoloed() ? this.input.gain.value = 1 : this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0
            }, t.Solo.prototype.dispose = function() {
                return this.context.off("solo", this._soloBind), this._removeSolo(), this._soloBind = null, t.AudioNode.prototype.dispose.call(this), this
            }, t.Solo
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(7), n(10), n(28), n(19), n(3), n(1), n(20)], void 0 === (r = function(t) {
            if (t.supported && !t.global.AudioContext.prototype.createStereoPanner) {
                var e = function(e) {
                    this.context = e, this.pan = new t.Signal(0, t.Type.AudioRange);
                    var n = new t.WaveShaper(function(e) {
                            return t.equalPowerScale((e + 1) / 2)
                        }, 4096),
                        i = new t.WaveShaper(function(e) {
                            return t.equalPowerScale(1 - (e + 1) / 2)
                        }, 4096),
                        r = new t.Gain,
                        o = new t.Gain,
                        s = this.input = new t.Split;
                    s._splitter.channelCountMode = "explicit", (new t.Zero).fan(n, i);
                    var a = this.output = new t.Merge;
                    s.left.chain(r, a.left), s.right.chain(o, a.right), this.pan.chain(i, r.gain), this.pan.chain(n, o.gain)
                };
                e.prototype.disconnect = function() {
                    this.output.disconnect.apply(this.output, arguments)
                }, e.prototype.connect = function() {
                    this.output.connect.apply(this.output, arguments)
                }, AudioContext.prototype.createStereoPanner = function() {
                    return new e(this)
                }, t.Context.prototype.createStereoPanner = function() {
                    return new e(this)
                }
            }
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(7)], void 0 === (r = function(t) {
            "use strict";
            return t.EqualPowerGain = function() {
                t.SignalBase.call(this), this._eqPower = this.input = this.output = new t.WaveShaper(function(e) {
                    return Math.abs(e) < .001 ? 0 : t.equalPowerScale(e)
                }.bind(this), 4096)
            }, t.extend(t.EqualPowerGain, t.SignalBase), t.EqualPowerGain.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._eqPower.dispose(), this._eqPower = null, this
            }, t.EqualPowerGain
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(5), n(1)], void 0 === (r = function(t) {
            "use strict";
            return t.Negate = function() {
                t.SignalBase.call(this), this._multiply = this.input = this.output = new t.Multiply(-1)
            }, t.extend(t.Negate, t.SignalBase), t.Negate.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._multiply.dispose(), this._multiply = null, this
            }, t.Negate
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(60), n(27), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.PanVol = function() {
                var e = t.defaults(arguments, ["pan", "volume"], t.PanVol);
                t.AudioNode.call(this), this._panner = this.input = new t.Panner(e.pan), this.pan = this._panner.pan, this._volume = this.output = new t.Volume(e.volume), this.volume = this._volume.volume, this._panner.connect(this._volume), this.mute = e.mute, this._readOnly(["pan", "volume"])
            }, t.extend(t.PanVol, t.AudioNode), t.PanVol.defaults = {
                pan: 0,
                volume: 0,
                mute: !1
            }, Object.defineProperty(t.PanVol.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }), t.PanVol.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable(["pan", "volume"]), this._panner.dispose(), this._panner = null, this.pan = null, this._volume.dispose(), this._volume = null, this.volume = null, this
            }, t.PanVol
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(34)], void 0 === (r = function(t) {
            t.supported && (AnalyserNode.prototype.getFloatTimeDomainData || (AnalyserNode.prototype.getFloatTimeDomainData = function(t) {
                var e = new Uint8Array(t.length);
                this.getByteTimeDomainData(e);
                for (var n = 0; n < e.length; n++) t[n] = (e[n] - 128) / 128
            }))
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(34), n(63), n(20), n(3)], void 0 === (r = function(t) {
            if (t.supported && !t.global.AudioContext.prototype.createConstantSource) {
                var e = function(t) {
                    this.context = t;
                    for (var e = t.createBuffer(1, 128, t.sampleRate), n = e.getChannelData(0), i = 0; i < n.length; i++) n[i] = 1;
                    this._bufferSource = t.createBufferSource(), this._bufferSource.channelCount = 1, this._bufferSource.channelCountMode = "explicit", this._bufferSource.buffer = e, this._bufferSource.loop = !0;
                    var r = this._output = t.createGain();
                    this.offset = r.gain, this._bufferSource.connect(r)
                };
                e.prototype.start = function(t) {
                    return this._bufferSource.start(t), this
                }, e.prototype.stop = function(t) {
                    return this._bufferSource.stop(t), this
                }, e.prototype.connect = function() {
                    return this._output.connect.apply(this._output, arguments), this
                }, e.prototype.disconnect = function() {
                    return this._output.disconnect.apply(this._output, arguments), this
                }, AudioContext.prototype.createConstantSource = function() {
                    return new e(this)
                }, t.Context.prototype.createConstantSource = function() {
                    return new e(this)
                }
            }
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(34)], void 0 === (r = function(t) {
            if (t.supported && !t.global.AudioContext.prototype._native_createWaveShaper) {
                var e = navigator.userAgent.toLowerCase();
                if (e.includes("safari") && !e.includes("chrome")) {
                    var n = function(t) {
                        for (var e in this._internalNode = this.input = this.output = t._native_createWaveShaper(), this._curve = null, this._internalNode) this._defineProperty(this._internalNode, e)
                    };
                    Object.defineProperty(n.prototype, "curve", {
                        get: function() {
                            return this._curve
                        },
                        set: function(t) {
                            this._curve = t;
                            var e = new Float32Array(t.length + 1);
                            e.set(t, 1), e[0] = t[0], this._internalNode.curve = e
                        }
                    }), n.prototype._defineProperty = function(e, n) {
                        t.isUndef(this[n]) && Object.defineProperty(this, n, {
                            get: function() {
                                return "function" == typeof e[n] ? e[n].bind(e) : e[n]
                            },
                            set: function(t) {
                                e[n] = t
                            }
                        })
                    }, t.global.AudioContext.prototype._native_createWaveShaper = t.global.AudioContext.prototype.createWaveShaper, t.global.AudioContext.prototype.createWaveShaper = function() {
                        return new n(this)
                    }
                }
            }
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(46)], void 0 === (r = function(t) {
            return t.Midi = function(e, n) {
                if (!(this instanceof t.Midi)) return new t.Midi(e, n);
                t.Frequency.call(this, e, n)
            }, t.extend(t.Midi, t.Frequency), t.Midi.prototype._defaultUnits = "midi", t.Midi.prototype._frequencyToUnits = function(e) {
                return t.Frequency.ftom(t.Frequency.prototype._frequencyToUnits.call(this, e))
            }, t.Midi.prototype._ticksToUnits = function(e) {
                return t.Frequency.ftom(t.Frequency.prototype._ticksToUnits.call(this, e))
            }, t.Midi.prototype._beatsToUnits = function(e) {
                return t.Frequency.ftom(t.Frequency.prototype._beatsToUnits.call(this, e))
            }, t.Midi.prototype._secondsToUnits = function(e) {
                return t.Frequency.ftom(t.Frequency.prototype._secondsToUnits.call(this, e))
            }, t.Midi.prototype.toMidi = function() {
                return this.valueOf()
            }, t.Midi.prototype.toFrequency = function() {
                return t.Frequency.mtof(this.toMidi())
            }, t.Midi.prototype.transpose = function(t) {
                return new this.constructor(this.toMidi() + t)
            }, t.Midi
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(27), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.UserMedia = function() {
                var e = t.defaults(arguments, ["volume"], t.UserMedia);
                t.AudioNode.call(this), this._mediaStream = null, this._stream = null, this._device = null, this._volume = this.output = new t.Volume(e.volume), this.volume = this._volume.volume, this._readOnly("volume"), this.mute = e.mute
            }, t.extend(t.UserMedia, t.AudioNode), t.UserMedia.defaults = {
                volume: 0,
                mute: !1
            }, t.UserMedia.prototype.open = function(e) {
                return this.state === t.State.Started && this.close(), t.UserMedia.enumerateDevices().then(function(n) {
                    var i;
                    if (t.isNumber(e)) i = n[e];
                    else if (!(i = n.find(function(t) {
                            return t.label === e || t.deviceId === e
                        })) && n.length > 0) i = n[0];
                    else if (!i && t.isDefined(e)) throw new Error("Tone.UserMedia: no matching device: " + e);
                    this._device = i;
                    var r = {
                        audio: {
                            echoCancellation: !1,
                            sampleRate: this.context.sampleRate,
                            noiseSuppression: !1,
                            mozNoiseSuppression: !1
                        }
                    };
                    return i && (r.audio.deviceId = i.deviceId), navigator.mediaDevices.getUserMedia(r).then(function(t) {
                        return this._stream || (this._stream = t, this._mediaStream = this.context.createMediaStreamSource(t), this._mediaStream.connect(this.output)), this
                    }.bind(this))
                }.bind(this))
            }, t.UserMedia.prototype.close = function() {
                return this._stream && (this._stream.getAudioTracks().forEach(function(t) {
                    t.stop()
                }), this._stream = null, this._mediaStream.disconnect(), this._mediaStream = null), this._device = null, this
            }, t.UserMedia.enumerateDevices = function() {
                return navigator.mediaDevices.enumerateDevices().then(function(t) {
                    return t.filter(function(t) {
                        return "audioinput" === t.kind
                    })
                })
            }, Object.defineProperty(t.UserMedia.prototype, "state", {
                get: function() {
                    return this._stream && this._stream.active ? t.State.Started : t.State.Stopped
                }
            }), Object.defineProperty(t.UserMedia.prototype, "deviceId", {
                get: function() {
                    if (this._device) return this._device.deviceId
                }
            }), Object.defineProperty(t.UserMedia.prototype, "groupId", {
                get: function() {
                    if (this._device) return this._device.groupId
                }
            }), Object.defineProperty(t.UserMedia.prototype, "label", {
                get: function() {
                    if (this._device) return this._device.label
                }
            }), Object.defineProperty(t.UserMedia.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }), t.UserMedia.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this.close(), this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null, this
            }, Object.defineProperty(t.UserMedia, "supported", {
                get: function() {
                    return t.isDefined(navigator.mediaDevices) && t.isFunction(navigator.mediaDevices.getUserMedia)
                }
            }), t.UserMedia
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(67), n(27), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Players = function(e) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                var i = t.defaults(n, ["onload"], t.Players);
                for (var r in t.AudioNode.call(this, i), this._volume = this.output = new t.Volume(i.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._volume.output.output.channelCount = 2, this._volume.output.output.channelCountMode = "explicit", this.mute = i.mute, this._players = {}, this._loadingCount = 0, this._fadeIn = i.fadeIn, this._fadeOut = i.fadeOut, e) this._loadingCount++, this.add(r, e[r], this._bufferLoaded.bind(this, i.onload))
            }, t.extend(t.Players, t.AudioNode), t.Players.defaults = {
                volume: 0,
                mute: !1,
                onload: t.noOp,
                fadeIn: 0,
                fadeOut: 0
            }, t.Players.prototype._bufferLoaded = function(t) {
                this._loadingCount--, 0 === this._loadingCount && t && t(this)
            }, Object.defineProperty(t.Players.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }), Object.defineProperty(t.Players.prototype, "fadeIn", {
                get: function() {
                    return this._fadeIn
                },
                set: function(t) {
                    this._fadeIn = t, this._forEach(function(e) {
                        e.fadeIn = t
                    })
                }
            }), Object.defineProperty(t.Players.prototype, "fadeOut", {
                get: function() {
                    return this._fadeOut
                },
                set: function(t) {
                    this._fadeOut = t, this._forEach(function(e) {
                        e.fadeOut = t
                    })
                }
            }), Object.defineProperty(t.Players.prototype, "state", {
                get: function() {
                    var e = !1;
                    return this._forEach(function(n) {
                        e = e || n.state === t.State.Started
                    }), e ? t.State.Started : t.State.Stopped
                }
            }), t.Players.prototype.has = function(t) {
                return this._players.hasOwnProperty(t)
            }, t.Players.prototype.get = function(t) {
                if (this.has(t)) return this._players[t];
                throw new Error("Tone.Players: no player named " + t)
            }, t.Players.prototype._forEach = function(t) {
                for (var e in this._players) t(this._players[e], e);
                return this
            }, Object.defineProperty(t.Players.prototype, "loaded", {
                get: function() {
                    var t = !0;
                    return this._forEach(function(e) {
                        t = t && e.loaded
                    }), t
                }
            }), t.Players.prototype.add = function(e, n, i) {
                return this._players[e] = new t.Player(n, i).connect(this.output), this._players[e].fadeIn = this._fadeIn, this._players[e].fadeOut = this._fadeOut, this
            }, t.Players.prototype.stopAll = function(t) {
                this._forEach(function(e) {
                    e.stop(t)
                })
            }, t.Players.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._volume.dispose(), this._volume = null, this._writable("volume"), this.volume = null, this.output = null, this._forEach(function(t) {
                    t.dispose()
                }), this._players = null, this
            }, t.Players
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(6), n(11), n(31)], void 0 === (r = function(t) {
            return t.GrainPlayer = function() {
                var e = t.defaults(arguments, ["url", "onload"], t.GrainPlayer);
                t.Source.call(this, e), this.buffer = new t.Buffer(e.url, e.onload), this._clock = new t.Clock(this._tick.bind(this), e.grainSize), this._loopStart = 0, this._loopEnd = 0, this._activeSources = [], this._playbackRate = e.playbackRate, this._grainSize = e.grainSize, this._overlap = e.overlap, this.detune = e.detune, this.overlap = e.overlap, this.loop = e.loop, this.playbackRate = e.playbackRate, this.grainSize = e.grainSize, this.loopStart = e.loopStart, this.loopEnd = e.loopEnd, this.reverse = e.reverse, this._clock.on("stop", this._onstop.bind(this))
            }, t.extend(t.GrainPlayer, t.Source), t.GrainPlayer.defaults = {
                onload: t.noOp,
                overlap: .1,
                grainSize: .2,
                playbackRate: 1,
                detune: 0,
                loop: !1,
                loopStart: 0,
                loopEnd: 0,
                reverse: !1
            }, t.GrainPlayer.prototype._start = function(e, n, i) {
                n = t.defaultArg(n, 0), n = this.toSeconds(n), e = this.toSeconds(e), this._offset = n, this._clock.start(e), i && this.stop(e + this.toSeconds(i))
            }, t.GrainPlayer.prototype._stop = function(t) {
                this._clock.stop(t)
            }, t.GrainPlayer.prototype._onstop = function(t) {
                this._activeSources.forEach(function(e) {
                    e.fadeOut = 0, e.stop(t)
                })
            }, t.GrainPlayer.prototype._tick = function(e) {
                if (!this.loop && this._offset > this.buffer.duration) this.stop(e);
                else {
                    var n = this._offset < this._overlap ? 0 : this._overlap,
                        i = new t.BufferSource({
                            buffer: this.buffer,
                            fadeIn: n,
                            fadeOut: this._overlap,
                            loop: this.loop,
                            loopStart: this._loopStart,
                            loopEnd: this._loopEnd,
                            playbackRate: t.intervalToFrequencyRatio(this.detune / 100)
                        }).connect(this.output);
                    i.start(e, this._offset), this._offset += this.grainSize, i.stop(e + this.grainSize / this.playbackRate), this._activeSources.push(i), i.onended = function() {
                        var t = this._activeSources.indexOf(i); - 1 !== t && this._activeSources.splice(t, 1)
                    }.bind(this)
                }
            }, Object.defineProperty(t.GrainPlayer.prototype, "playbackRate", {
                get: function() {
                    return this._playbackRate
                },
                set: function(t) {
                    this._playbackRate = t, this.grainSize = this._grainSize
                }
            }), Object.defineProperty(t.GrainPlayer.prototype, "loopStart", {
                get: function() {
                    return this._loopStart
                },
                set: function(t) {
                    this._loopStart = this.toSeconds(t)
                }
            }), Object.defineProperty(t.GrainPlayer.prototype, "loopEnd", {
                get: function() {
                    return this._loopEnd
                },
                set: function(t) {
                    this._loopEnd = this.toSeconds(t)
                }
            }), Object.defineProperty(t.GrainPlayer.prototype, "reverse", {
                get: function() {
                    return this.buffer.reverse
                },
                set: function(t) {
                    this.buffer.reverse = t
                }
            }), Object.defineProperty(t.GrainPlayer.prototype, "grainSize", {
                get: function() {
                    return this._grainSize
                },
                set: function(t) {
                    this._grainSize = this.toSeconds(t), this._clock.frequency.value = this._playbackRate / this._grainSize
                }
            }), Object.defineProperty(t.GrainPlayer.prototype, "overlap", {
                get: function() {
                    return this._overlap
                },
                set: function(t) {
                    this._overlap = this.toSeconds(t)
                }
            }), Object.defineProperty(t.GrainPlayer.prototype, "loaded", {
                get: function() {
                    return this.buffer.loaded
                }
            }), t.GrainPlayer.prototype.dispose = function() {
                return t.Source.prototype.dispose.call(this), this.buffer.dispose(), this.buffer = null, this._clock.dispose(), this._clock = null, this._activeSources.forEach(function(t) {
                    t.dispose()
                }), this._activeSources = null, this
            }, t.GrainPlayer
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(16), n(1), n(45)], void 0 === (r = function(t) {
            return t.TransportTimelineSignal = function() {
                t.Signal.apply(this, arguments), this.output = this._outputSig = new t.Signal(this._initialValue), this._lastVal = this.value, this._synced = t.Transport.scheduleRepeat(this._onTick.bind(this), "1i"), this._bindAnchorValue = this._anchorValue.bind(this), t.Transport.on("start stop pause", this._bindAnchorValue), this._events.memory = 1 / 0
            }, t.extend(t.TransportTimelineSignal, t.Signal), t.TransportTimelineSignal.prototype._onTick = function(e) {
                var n = this.getValueAtTime(t.Transport.seconds);
                this._lastVal !== n && (this._lastVal = n, this._outputSig.linearRampToValueAtTime(n, e))
            }, t.TransportTimelineSignal.prototype._anchorValue = function(e) {
                var n = this.getValueAtTime(t.Transport.seconds);
                return this._lastVal = n, this._outputSig.cancelScheduledValues(e), this._outputSig.setValueAtTime(n, e), this
            }, t.TransportTimelineSignal.prototype.getValueAtTime = function(e) {
                return e = t.TransportTime(e), t.Signal.prototype.getValueAtTime.call(this, e)
            }, t.TransportTimelineSignal.prototype.setValueAtTime = function(e, n) {
                return n = t.TransportTime(n), t.Signal.prototype.setValueAtTime.call(this, e, n), this
            }, t.TransportTimelineSignal.prototype.linearRampToValueAtTime = function(e, n) {
                return n = t.TransportTime(n), t.Signal.prototype.linearRampToValueAtTime.call(this, e, n), this
            }, t.TransportTimelineSignal.prototype.exponentialRampToValueAtTime = function(e, n) {
                return n = t.TransportTime(n), t.Signal.prototype.exponentialRampToValueAtTime.call(this, e, n), this
            }, t.TransportTimelineSignal.prototype.setTargetAtTime = function(e, n, i) {
                return n = t.TransportTime(n), t.Signal.prototype.setTargetAtTime.call(this, e, n, i), this
            }, t.TransportTimelineSignal.prototype.cancelScheduledValues = function(e) {
                return e = t.TransportTime(e), t.Signal.prototype.cancelScheduledValues.call(this, e), this
            }, t.TransportTimelineSignal.prototype.setValueCurveAtTime = function(e, n, i, r) {
                return n = t.TransportTime(n), i = t.TransportTime(i), t.Signal.prototype.setValueCurveAtTime.call(this, e, n, i, r), this
            }, t.TransportTimelineSignal.prototype.cancelAndHoldAtTime = function(e) {
                return t.Signal.prototype.cancelAndHoldAtTime.call(this, t.TransportTime(e))
            }, t.TransportTimelineSignal.prototype.dispose = function() {
                t.Transport.clear(this._synced), t.Transport.off("start stop pause", this._syncedCallback), this._events.cancel(0), t.Signal.prototype.dispose.call(this), this._outputSig.dispose(), this._outputSig = null
            }, t.TransportTimelineSignal
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(29), n(5)], void 0 === (r = function(t) {
            "use strict";
            return t.Normalize = function(e, n) {
                t.SignalBase.call(this), this._inputMin = t.defaultArg(e, 0), this._inputMax = t.defaultArg(n, 1), this._sub = this.input = new t.Add(0), this._div = this.output = new t.Multiply(1), this._sub.connect(this._div), this._setRange()
            }, t.extend(t.Normalize, t.SignalBase), Object.defineProperty(t.Normalize.prototype, "min", {
                get: function() {
                    return this._inputMin
                },
                set: function(t) {
                    this._inputMin = t, this._setRange()
                }
            }), Object.defineProperty(t.Normalize.prototype, "max", {
                get: function() {
                    return this._inputMax
                },
                set: function(t) {
                    this._inputMax = t, this._setRange()
                }
            }), t.Normalize.prototype._setRange = function() {
                this._sub.value = -this._inputMin, this._div.value = 1 / (this._inputMax - this._inputMin)
            }, t.Normalize.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._sub.dispose(), this._sub = null, this._div.dispose(), this._div = null, this
            }, t.Normalize
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(7), n(1)], void 0 === (r = function(t) {
            "use strict";
            return t.GainToAudio = function() {
                t.SignalBase.call(this), this._norm = this.input = this.output = new t.WaveShaper(function(t) {
                    return 2 * Math.abs(t) - 1
                })
            }, t.extend(t.GainToAudio, t.SignalBase), t.GainToAudio.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this
            }, t.GainToAudio
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0)], void 0 === (r = function(t) {
            t.supported && (OscillatorNode.prototype.setPeriodicWave || (OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable), AudioContext.prototype.createPeriodicWave || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable))
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(21), n(79), n(31)], void 0 === (r = function(t) {
            return t.Sampler = function(e) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                var i = t.defaults(n, ["onload", "baseUrl"], t.Sampler);
                t.Instrument.call(this, i);
                var r = {};
                for (var o in e)
                    if (t.isNote(o)) r[t.Frequency(o).toMidi()] = e[o];
                    else {
                        if (isNaN(parseFloat(o))) throw new Error("Tone.Sampler: url keys must be the note's pitch");
                        r[o] = e[o]
                    } this._buffers = new t.Buffers(r, i.onload, i.baseUrl), this._activeSources = {}, this.attack = i.attack, this.release = i.release, this.curve = i.curve
            }, t.extend(t.Sampler, t.Instrument), t.Sampler.defaults = {
                attack: 0,
                release: .1,
                onload: t.noOp,
                baseUrl: "",
                curve: "exponential"
            }, t.Sampler.prototype._findClosest = function(t) {
                for (var e = 0; e < 96;) {
                    if (this._buffers.has(t + e)) return -e;
                    if (this._buffers.has(t - e)) return e;
                    e++
                }
                return null
            }, t.Sampler.prototype.triggerAttack = function(e, n, i) {
                this.log("triggerAttack", e, n, i), Array.isArray(e) || (e = [e]);
                for (var r = 0; r < e.length; r++) {
                    var o = t.Frequency(e[r]).toMidi(),
                        s = this._findClosest(o);
                    if (null !== s) {
                        var a = o - s,
                            u = this._buffers.get(a),
                            l = t.intervalToFrequencyRatio(s),
                            c = new t.BufferSource({
                                buffer: u,
                                playbackRate: l,
                                fadeIn: this.attack,
                                fadeOut: this.release,
                                curve: this.curve
                            }).connect(this.output);
                        c.start(n, 0, u.duration / l, i), t.isArray(this._activeSources[o]) || (this._activeSources[o] = []), this._activeSources[o].push(c), c.onended = function() {
                            if (this._activeSources && this._activeSources[o]) {
                                var t = this._activeSources[o].indexOf(c); - 1 !== t && this._activeSources[o].splice(t, 1)
                            }
                        }.bind(this)
                    }
                }
                return this
            }, t.Sampler.prototype.triggerRelease = function(e, n) {
                this.log("triggerRelease", e, n), Array.isArray(e) || (e = [e]);
                for (var i = 0; i < e.length; i++) {
                    var r = t.Frequency(e[i]).toMidi();
                    if (this._activeSources[r] && this._activeSources[r].length) {
                        var o = this._activeSources[r].shift();
                        n = this.toSeconds(n), o.stop(n)
                    }
                }
                return this
            }, t.Sampler.prototype.releaseAll = function(t) {
                for (var e in t = this.toSeconds(t), this._activeSources)
                    for (var n = this._activeSources[e]; n.length;) n.shift().stop(t);
                return this
            }, t.Sampler.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this
            }, t.Sampler.prototype.triggerAttackRelease = function(e, n, i, r) {
                if (i = this.toSeconds(i), this.triggerAttack(e, i, r), t.isArray(n) && t.isArray(e))
                    for (var o = 0; o < e.length; o++) {
                        var s = n[Math.min(o, n.length - 1)];
                        this.triggerRelease(e[o], i + this.toSeconds(s))
                    } else this.triggerRelease(e, i + this.toSeconds(n));
                return this
            }, t.Sampler.prototype.add = function(e, n, i) {
                if (t.isNote(e)) {
                    var r = t.Frequency(e).toMidi();
                    this._buffers.add(r, n, i)
                } else {
                    if (isNaN(parseFloat(e))) throw new Error("Tone.Sampler: note must be the note's pitch. Instead got " + e);
                    this._buffers.add(e, n, i)
                }
            }, Object.defineProperty(t.Sampler.prototype, "loaded", {
                get: function() {
                    return this._buffers.loaded
                }
            }), t.Sampler.prototype.dispose = function() {
                for (var e in t.Instrument.prototype.dispose.call(this), this._buffers.dispose(), this._buffers = null, this._activeSources) this._activeSources[e].forEach(function(t) {
                    t.dispose()
                });
                return this._activeSources = null, this
            }, t.Sampler
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(38), n(6)], void 0 === (r = function(t) {
            "use strict";
            return t.PolySynth = function() {
                var e = t.defaults(arguments, ["polyphony", "voice"], t.PolySynth);
                t.Instrument.call(this, e), (e = t.defaultArg(e, t.Instrument.defaults)).polyphony = Math.min(t.PolySynth.MAX_POLYPHONY, e.polyphony), this.voices = new Array(e.polyphony), this.assert(e.polyphony > 0, "polyphony must be greater than 0"), this.detune = new t.Signal(e.detune, t.Type.Cents), this._readOnly("detune");
                for (var n = 0; n < e.polyphony; n++) {
                    var i = new e.voice(arguments[2], arguments[3]);
                    if (!(i instanceof t.Monophonic)) throw new Error("Synth constructor must be instance of Tone.Monophonic");
                    this.voices[n] = i, i.index = n, i.connect(this.output), i.hasOwnProperty("detune") && this.detune.connect(i.detune)
                }
            }, t.extend(t.PolySynth, t.Instrument), t.PolySynth.defaults = {
                polyphony: 4,
                volume: 0,
                detune: 0,
                voice: t.Synth
            }, t.PolySynth.prototype._getClosestVoice = function(e, n) {
                var i = this.voices.find(function(i) {
                    if (Math.abs(i.frequency.getValueAtTime(e) - t.Frequency(n)) < 1e-4 && i.getLevelAtTime(e) > 1e-5) return i
                });
                return i || this.voices.slice().sort(function(t, n) {
                    var i = t.getLevelAtTime(e + this.blockTime),
                        r = n.getLevelAtTime(e + this.blockTime);
                    return i < 1e-5 && (i = 0), r < 1e-5 && (r = 0), i - r
                }.bind(this))[0]
            }, t.PolySynth.prototype.triggerAttack = function(t, e, n) {
                return Array.isArray(t) || (t = [t]), e = this.toSeconds(e), t.forEach(function(t) {
                    var i = this._getClosestVoice(e, t);
                    i.triggerAttack(t, e, n), this.log("triggerAttack", i.index, t)
                }.bind(this)), this
            }, t.PolySynth.prototype.triggerRelease = function(t, e) {
                return Array.isArray(t) || (t = [t]), e = this.toSeconds(e), t.forEach(function(t) {
                    var n = this._getClosestVoice(e, t);
                    this.log("triggerRelease", n.index, t), n.triggerRelease(e)
                }.bind(this)), this
            }, t.PolySynth.prototype.triggerAttackRelease = function(e, n, i, r) {
                if (i = this.toSeconds(i), this.triggerAttack(e, i, r), t.isArray(n) && t.isArray(e))
                    for (var o = 0; o < e.length; o++) {
                        var s = n[Math.min(o, n.length - 1)];
                        this.triggerRelease(e[o], i + this.toSeconds(s))
                    } else this.triggerRelease(e, i + this.toSeconds(n));
                return this
            }, t.PolySynth.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this
            }, t.PolySynth.prototype.set = function(t, e, n) {
                for (var i = 0; i < this.voices.length; i++) this.voices[i].set(t, e, n);
                return this
            }, t.PolySynth.prototype.get = function(t) {
                return this.voices[0].get(t)
            }, t.PolySynth.prototype.releaseAll = function(t) {
                return t = this.toSeconds(t), this.voices.forEach(function(e) {
                    e.triggerRelease(t)
                }), this
            }, t.PolySynth.prototype.dispose = function() {
                return t.Instrument.prototype.dispose.call(this), this.voices.forEach(function(t) {
                    t.dispose()
                }), this._writable("detune"), this.detune.dispose(), this.detune = null, this.voices = null, this
            }, t.PolySynth.MAX_POLYPHONY = 20, t.PolySynth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(21), n(39), n(53)], void 0 === (r = function(t) {
            "use strict";
            return t.PluckSynth = function(e) {
                e = t.defaultArg(e, t.PluckSynth.defaults), t.Instrument.call(this, e), this._noise = new t.Noise("pink"), this.attackNoise = e.attackNoise, this._lfcf = new t.LowpassCombFilter({
                    resonance: e.resonance,
                    dampening: e.dampening
                }), this.resonance = this._lfcf.resonance, this.dampening = this._lfcf.dampening, this._noise.connect(this._lfcf), this._lfcf.connect(this.output), this._readOnly(["resonance", "dampening"])
            }, t.extend(t.PluckSynth, t.Instrument), t.PluckSynth.defaults = {
                attackNoise: 1,
                dampening: 4e3,
                resonance: .7
            }, t.PluckSynth.prototype.triggerAttack = function(t, e) {
                t = this.toFrequency(t), e = this.toSeconds(e);
                var n = 1 / t;
                return this._lfcf.delayTime.setValueAtTime(n, e), this._noise.start(e), this._noise.stop(e + n * this.attackNoise), this
            }, t.PluckSynth.prototype.dispose = function() {
                return t.Instrument.prototype.dispose.call(this), this._noise.dispose(), this._lfcf.dispose(), this._noise = null, this._lfcf = null, this._writable(["resonance", "dampening"]), this.dampening = null, this.resonance = null, this
            }, t.PluckSynth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(30), n(41), n(39), n(1), n(9), n(21)], void 0 === (r = function(t) {
            "use strict";
            return t.NoiseSynth = function(e) {
                e = t.defaultArg(e, t.NoiseSynth.defaults), t.Instrument.call(this, e), this.noise = new t.Noise(e.noise), this.envelope = new t.AmplitudeEnvelope(e.envelope), this.noise.chain(this.envelope, this.output), this._readOnly(["noise", "envelope"])
            }, t.extend(t.NoiseSynth, t.Instrument), t.NoiseSynth.defaults = {
                noise: {
                    type: "white"
                },
                envelope: {
                    attack: .005,
                    decay: .1,
                    sustain: 0
                }
            }, t.NoiseSynth.prototype.triggerAttack = function(t, e) {
                return t = this.toSeconds(t), this.envelope.triggerAttack(t, e), this.noise.start(t), 0 === this.envelope.sustain && this.noise.stop(t + this.envelope.attack + this.envelope.decay), this
            }, t.NoiseSynth.prototype.triggerRelease = function(t) {
                return this.envelope.triggerRelease(t), this.noise.stop(t + this.envelope.release), this
            }, t.NoiseSynth.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0), this
            }, t.NoiseSynth.prototype.triggerAttackRelease = function(t, e, n) {
                return e = this.toSeconds(e), t = this.toSeconds(t), this.triggerAttack(e, n), this.triggerRelease(e + t), this
            }, t.NoiseSynth.prototype.dispose = function() {
                return t.Instrument.prototype.dispose.call(this), this._writable(["noise", "envelope"]), this.noise.dispose(), this.noise = null, this.envelope.dispose(), this.envelope = null, this
            }, t.NoiseSynth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(21), n(48), n(9), n(41), n(30), n(3), n(26), n(5)], void 0 === (r = function(t) {
            var e = [1, 1.483, 1.932, 2.546, 2.63, 3.897];
            return t.MetalSynth = function(n) {
                n = t.defaultArg(n, t.MetalSynth.defaults), t.Instrument.call(this, n), this.frequency = new t.Signal(n.frequency, t.Type.Frequency), this._oscillators = [], this._freqMultipliers = [], this._amplitue = new t.Gain(0).connect(this.output), this._highpass = new t.Filter({
                    type: "highpass",
                    Q: -3.0102999566398125
                }).connect(this._amplitue), this._octaves = n.octaves, this._filterFreqScaler = new t.Scale(n.resonance, 7e3), this.envelope = new t.Envelope({
                    attack: n.envelope.attack,
                    attackCurve: "linear",
                    decay: n.envelope.decay,
                    sustain: 0,
                    release: n.envelope.release
                }).chain(this._filterFreqScaler, this._highpass.frequency), this.envelope.connect(this._amplitue.gain);
                for (var i = 0; i < e.length; i++) {
                    var r = new t.FMOscillator({
                        type: "square",
                        modulationType: "square",
                        harmonicity: n.harmonicity,
                        modulationIndex: n.modulationIndex
                    });
                    r.connect(this._highpass), this._oscillators[i] = r;
                    var o = new t.Multiply(e[i]);
                    this._freqMultipliers[i] = o, this.frequency.chain(o, r.frequency)
                }
                this.octaves = n.octaves
            }, t.extend(t.MetalSynth, t.Instrument), t.MetalSynth.defaults = {
                frequency: 200,
                envelope: {
                    attack: .001,
                    decay: 1.4,
                    release: .2
                },
                harmonicity: 5.1,
                modulationIndex: 32,
                resonance: 4e3,
                octaves: 1.5
            }, t.MetalSynth.prototype.triggerAttack = function(e, n) {
                return e = this.toSeconds(e), n = t.defaultArg(n, 1), this.envelope.triggerAttack(e, n), this._oscillators.forEach(function(t) {
                    t.start(e)
                }), 0 === this.envelope.sustain && this._oscillators.forEach(function(t) {
                    t.stop(e + this.envelope.attack + this.envelope.decay)
                }.bind(this)), this
            }, t.MetalSynth.prototype.triggerRelease = function(t) {
                return t = this.toSeconds(t), this.envelope.triggerRelease(t), this._oscillators.forEach(function(e) {
                    e.stop(t + this.envelope.release)
                }.bind(this)), this
            }, t.MetalSynth.prototype.sync = function() {
                return this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0), this
            }, t.MetalSynth.prototype.triggerAttackRelease = function(t, e, n) {
                return e = this.toSeconds(e), t = this.toSeconds(t), this.triggerAttack(e, n), this.triggerRelease(e + t), this
            }, Object.defineProperty(t.MetalSynth.prototype, "modulationIndex", {
                get: function() {
                    return this._oscillators[0].modulationIndex.value
                },
                set: function(t) {
                    for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].modulationIndex.value = t
                }
            }), Object.defineProperty(t.MetalSynth.prototype, "harmonicity", {
                get: function() {
                    return this._oscillators[0].harmonicity.value
                },
                set: function(t) {
                    for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].harmonicity.value = t
                }
            }), Object.defineProperty(t.MetalSynth.prototype, "resonance", {
                get: function() {
                    return this._filterFreqScaler.min
                },
                set: function(t) {
                    this._filterFreqScaler.min = t, this.octaves = this._octaves
                }
            }), Object.defineProperty(t.MetalSynth.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t, this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t)
                }
            }), t.MetalSynth.prototype.dispose = function() {
                t.Instrument.prototype.dispose.call(this);
                for (var e = 0; e < this._oscillators.length; e++) this._oscillators[e].dispose(), this._freqMultipliers[e].dispose();
                this._oscillators = null, this._freqMultipliers = null, this.frequency.dispose(), this.frequency = null, this._filterFreqScaler.dispose(), this._filterFreqScaler = null, this._amplitue.dispose(), this._amplitue = null, this.envelope.dispose(), this.envelope = null, this._highpass.dispose(), this._highpass = null
            }, t.MetalSynth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(37), n(21), n(30)], void 0 === (r = function(t) {
            "use strict";
            return t.MembraneSynth = function(e) {
                e = t.defaultArg(e, t.MembraneSynth.defaults), t.Instrument.call(this, e), this.oscillator = new t.OmniOscillator(e.oscillator), this.envelope = new t.AmplitudeEnvelope(e.envelope), this.octaves = e.octaves, this.pitchDecay = e.pitchDecay, this.oscillator.chain(this.envelope, this.output), this._readOnly(["oscillator", "envelope"])
            }, t.extend(t.MembraneSynth, t.Instrument), t.MembraneSynth.defaults = {
                pitchDecay: .05,
                octaves: 10,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .001,
                    decay: .4,
                    sustain: .01,
                    release: 1.4,
                    attackCurve: "exponential"
                }
            }, t.MembraneSynth.prototype.triggerAttack = function(t, e, n) {
                e = this.toSeconds(e);
                var i = (t = this.toFrequency(t)) * this.octaves;
                return this.oscillator.frequency.setValueAtTime(i, e), this.oscillator.frequency.exponentialRampToValueAtTime(t, e + this.toSeconds(this.pitchDecay)), this.envelope.triggerAttack(e, n), this.oscillator.start(e), 0 === this.envelope.sustain && this.oscillator.stop(e + this.envelope.attack + this.envelope.decay), this
            }, t.MembraneSynth.prototype.triggerRelease = function(t) {
                return t = this.toSeconds(t), this.envelope.triggerRelease(t), this.oscillator.stop(t + this.envelope.release), this
            }, t.MembraneSynth.prototype.dispose = function() {
                return t.Instrument.prototype.dispose.call(this), this._writable(["oscillator", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this
            }, t.MembraneSynth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(38), n(1), n(5), n(25)], void 0 === (r = function(t) {
            "use strict";
            return t.FMSynth = function(e) {
                e = t.defaultArg(e, t.FMSynth.defaults), t.Monophonic.call(this, e), this._carrier = new t.Synth(e.carrier), this._carrier.volume.value = -10, this.oscillator = this._carrier.oscillator, this.envelope = this._carrier.envelope.set(e.envelope), this._modulator = new t.Synth(e.modulator), this._modulator.volume.value = -10, this.modulation = this._modulator.oscillator.set(e.modulation), this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope), this.frequency = new t.Signal(440, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this.modulationIndex = new t.Multiply(e.modulationIndex), this.modulationIndex.units = t.Type.Positive, this._modulationNode = new t.Gain(0), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this._readOnly(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"])
            }, t.extend(t.FMSynth, t.Monophonic), t.FMSynth.defaults = {
                harmonicity: 3,
                modulationIndex: 10,
                detune: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .01,
                    decay: .01,
                    sustain: 1,
                    release: .5
                },
                modulation: {
                    type: "square"
                },
                modulationEnvelope: {
                    attack: .5,
                    decay: 0,
                    sustain: 1,
                    release: .5
                }
            }, t.FMSynth.prototype._triggerEnvelopeAttack = function(t, e) {
                return t = this.toSeconds(t), this._carrier._triggerEnvelopeAttack(t, e), this._modulator._triggerEnvelopeAttack(t), this
            }, t.FMSynth.prototype._triggerEnvelopeRelease = function(t) {
                return t = this.toSeconds(t), this._carrier._triggerEnvelopeRelease(t), this._modulator._triggerEnvelopeRelease(t), this
            }, t.FMSynth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this), this._writable(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]), this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this.modulationIndex.dispose(), this.modulationIndex = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationNode.dispose(), this._modulationNode = null, this.oscillator = null, this.envelope = null, this.modulationEnvelope = null, this.modulation = null, this
            }, t.FMSynth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(68), n(12), n(1), n(5), n(25), n(14)], void 0 === (r = function(t) {
            "use strict";
            return t.DuoSynth = function(e) {
                e = t.defaultArg(e, t.DuoSynth.defaults), t.Monophonic.call(this, e), this.voice0 = new t.MonoSynth(e.voice0), this.voice0.volume.value = -10, this.voice1 = new t.MonoSynth(e.voice1), this.voice1.volume.value = -10, this._vibrato = new t.LFO(e.vibratoRate, -50, 50), this._vibrato.start(), this.vibratoRate = this._vibrato.frequency, this._vibratoGain = new t.Gain(e.vibratoAmount, t.Type.Positive), this.vibratoAmount = this._vibratoGain.gain, this.frequency = new t.Signal(440, t.Type.Frequency), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this.frequency.connect(this.voice0.frequency), this.frequency.chain(this.harmonicity, this.voice1.frequency), this._vibrato.connect(this._vibratoGain), this._vibratoGain.fan(this.voice0.detune, this.voice1.detune), this.voice0.connect(this.output), this.voice1.connect(this.output), this._readOnly(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"])
            }, t.extend(t.DuoSynth, t.Monophonic), t.DuoSynth.defaults = {
                vibratoAmount: .5,
                vibratoRate: 5,
                harmonicity: 1.5,
                voice0: {
                    volume: -10,
                    portamento: 0,
                    oscillator: {
                        type: "sine"
                    },
                    filterEnvelope: {
                        attack: .01,
                        decay: 0,
                        sustain: 1,
                        release: .5
                    },
                    envelope: {
                        attack: .01,
                        decay: 0,
                        sustain: 1,
                        release: .5
                    }
                },
                voice1: {
                    volume: -10,
                    portamento: 0,
                    oscillator: {
                        type: "sine"
                    },
                    filterEnvelope: {
                        attack: .01,
                        decay: 0,
                        sustain: 1,
                        release: .5
                    },
                    envelope: {
                        attack: .01,
                        decay: 0,
                        sustain: 1,
                        release: .5
                    }
                }
            }, t.DuoSynth.prototype._triggerEnvelopeAttack = function(t, e) {
                return t = this.toSeconds(t), this.voice0._triggerEnvelopeAttack(t, e), this.voice1._triggerEnvelopeAttack(t, e), this
            }, t.DuoSynth.prototype._triggerEnvelopeRelease = function(t) {
                return this.voice0._triggerEnvelopeRelease(t), this.voice1._triggerEnvelopeRelease(t), this
            }, t.DuoSynth.prototype.getLevelAtTime = function(t) {
                return (this.voice0.getLevelAtTime(t) + this.voice1.getLevelAtTime(t)) / 2
            }, t.DuoSynth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this), this._writable(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"]), this.voice0.dispose(), this.voice0 = null, this.voice1.dispose(), this.voice1 = null, this.frequency.dispose(), this.frequency = null, this._vibratoGain.dispose(), this._vibratoGain = null, this._vibrato = null, this.harmonicity.dispose(), this.harmonicity = null, this.vibratoAmount.dispose(), this.vibratoAmount = null, this.vibratoRate = null, this
            }, t.DuoSynth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(38), n(1), n(5), n(25), n(22), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.AMSynth = function(e) {
                e = t.defaultArg(e, t.AMSynth.defaults), t.Monophonic.call(this, e), this._carrier = new t.Synth, this._carrier.volume.value = -10, this.oscillator = this._carrier.oscillator.set(e.oscillator), this.envelope = this._carrier.envelope.set(e.envelope), this._modulator = new t.Synth, this._modulator.volume.value = -10, this.modulation = this._modulator.oscillator.set(e.modulation), this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope), this.frequency = new t.Signal(440, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this._modulationScale = new t.AudioToGain, this._modulationNode = new t.Gain, this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), this._readOnly(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"])
            }, t.extend(t.AMSynth, t.Monophonic), t.AMSynth.defaults = {
                harmonicity: 3,
                detune: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .01,
                    decay: .01,
                    sustain: 1,
                    release: .5
                },
                modulation: {
                    type: "square"
                },
                modulationEnvelope: {
                    attack: .5,
                    decay: 0,
                    sustain: 1,
                    release: .5
                }
            }, t.AMSynth.prototype._triggerEnvelopeAttack = function(t, e) {
                return t = this.toSeconds(t), this._carrier._triggerEnvelopeAttack(t, e), this._modulator._triggerEnvelopeAttack(t), this
            }, t.AMSynth.prototype._triggerEnvelopeRelease = function(t) {
                return this._carrier._triggerEnvelopeRelease(t), this._modulator._triggerEnvelopeRelease(t), this
            }, t.AMSynth.prototype.dispose = function() {
                return t.Monophonic.prototype.dispose.call(this), this._writable(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]), this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationScale.dispose(), this._modulationScale = null, this._modulationNode.dispose(), this._modulationNode = null, this.oscillator = null, this.envelope = null, this.modulationEnvelope = null, this.modulation = null, this
            }, t.AMSynth
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(72), n(16)], void 0 === (r = function(t) {
            "use strict";
            return t.Sequence = function() {
                var e = t.defaults(arguments, ["callback", "events", "subdivision"], t.Sequence),
                    n = e.events;
                if (delete e.events, t.Part.call(this, e), this._subdivision = this.toTicks(e.subdivision), t.isUndef(e.loopEnd) && t.isDefined(n) && (this._loopEnd = n.length * this._subdivision), this._loop = !0, t.isDefined(n))
                    for (var i = 0; i < n.length; i++) this.add(i, n[i])
            }, t.extend(t.Sequence, t.Part), t.Sequence.defaults = {
                subdivision: "4n"
            }, Object.defineProperty(t.Sequence.prototype, "subdivision", {
                get: function() {
                    return t.Ticks(this._subdivision).toSeconds()
                }
            }), t.Sequence.prototype.at = function(e, n) {
                return t.isArray(n) && this.remove(e), t.Part.prototype.at.call(this, this._indexTime(e), n)
            }, t.Sequence.prototype.add = function(e, n) {
                if (null === n) return this;
                if (t.isArray(n)) {
                    var i = Math.round(this._subdivision / n.length);
                    n = new t.Sequence(this._tick.bind(this), n, t.Ticks(i))
                }
                return t.Part.prototype.add.call(this, this._indexTime(e), n), this
            }, t.Sequence.prototype.remove = function(e, n) {
                return t.Part.prototype.remove.call(this, this._indexTime(e), n), this
            }, t.Sequence.prototype._indexTime = function(e) {
                return e instanceof t.TransportTime ? e : t.Ticks(e * this._subdivision + this.startOffset).toSeconds()
            }, t.Sequence.prototype.dispose = function() {
                return t.Part.prototype.dispose.call(this), this
            }, t.Sequence
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(73), n(80)], void 0 === (r = function(t) {
            return t.Pattern = function() {
                var e = t.defaults(arguments, ["callback", "values", "pattern"], t.Pattern);
                t.Loop.call(this, e), this._pattern = new t.CtrlPattern({
                    values: e.values,
                    type: e.pattern,
                    index: e.index
                })
            }, t.extend(t.Pattern, t.Loop), t.Pattern.defaults = {
                pattern: t.CtrlPattern.Type.Up,
                callback: t.noOp,
                values: []
            }, t.Pattern.prototype._tick = function(t) {
                this.callback(t, this._pattern.value), this._pattern.next()
            }, Object.defineProperty(t.Pattern.prototype, "index", {
                get: function() {
                    return this._pattern.index
                },
                set: function(t) {
                    this._pattern.index = t
                }
            }), Object.defineProperty(t.Pattern.prototype, "values", {
                get: function() {
                    return this._pattern.values
                },
                set: function(t) {
                    this._pattern.values = t
                }
            }), Object.defineProperty(t.Pattern.prototype, "value", {
                get: function() {
                    return this._pattern.value
                }
            }), Object.defineProperty(t.Pattern.prototype, "pattern", {
                get: function() {
                    return this._pattern.type
                },
                set: function(t) {
                    this._pattern.type = t
                }
            }), t.Pattern.prototype.dispose = function() {
                t.Loop.prototype.dispose.call(this), this._pattern.dispose(), this._pattern = null
            }, t.Pattern
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(8), n(18), n(12)], void 0 === (r = function(t) {
            "use strict";
            return t.Vibrato = function() {
                var e = t.defaults(arguments, ["frequency", "depth"], t.Vibrato);
                t.Effect.call(this, e), this._delayNode = new t.Delay(0, e.maxDelay), this._lfo = new t.LFO({
                    type: e.type,
                    min: 0,
                    max: e.maxDelay,
                    frequency: e.frequency,
                    phase: -90
                }).start().connect(this._delayNode.delayTime), this.frequency = this._lfo.frequency, this.depth = this._lfo.amplitude, this.depth.value = e.depth, this._readOnly(["frequency", "depth"]), this.effectSend.chain(this._delayNode, this.effectReturn)
            }, t.extend(t.Vibrato, t.Effect), t.Vibrato.defaults = {
                maxDelay: .005,
                frequency: 5,
                depth: .1,
                type: "sine"
            }, Object.defineProperty(t.Vibrato.prototype, "type", {
                get: function() {
                    return this._lfo.type
                },
                set: function(t) {
                    this._lfo.type = t
                }
            }), t.Vibrato.prototype.dispose = function() {
                t.Effect.prototype.dispose.call(this), this._delayNode.dispose(), this._delayNode = null, this._lfo.dispose(), this._lfo = null, this._writable(["frequency", "depth"]), this.frequency = null, this.depth = null
            }, t.Vibrato
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(12), n(15)], void 0 === (r = function(t) {
            "use strict";
            return t.Tremolo = function() {
                var e = t.defaults(arguments, ["frequency", "depth"], t.Tremolo);
                t.StereoEffect.call(this, e), this._lfoL = new t.LFO({
                    phase: e.spread,
                    min: 1,
                    max: 0
                }), this._lfoR = new t.LFO({
                    phase: e.spread,
                    min: 1,
                    max: 0
                }), this._amplitudeL = new t.Gain, this._amplitudeR = new t.Gain, this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.depth = new t.Signal(e.depth, t.Type.NormalRange), this._readOnly(["frequency", "depth"]), this.effectSendL.chain(this._amplitudeL, this.effectReturnL), this.effectSendR.chain(this._amplitudeR, this.effectReturnR), this._lfoL.connect(this._amplitudeL.gain), this._lfoR.connect(this._amplitudeR.gain), this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency), this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude), this.type = e.type, this.spread = e.spread
            }, t.extend(t.Tremolo, t.StereoEffect), t.Tremolo.defaults = {
                frequency: 10,
                type: "sine",
                depth: .5,
                spread: 180
            }, t.Tremolo.prototype.start = function(t) {
                return this._lfoL.start(t), this._lfoR.start(t), this
            }, t.Tremolo.prototype.stop = function(t) {
                return this._lfoL.stop(t), this._lfoR.stop(t), this
            }, t.Tremolo.prototype.sync = function(e) {
                return this._lfoL.sync(e), this._lfoR.sync(e), t.Transport.syncSignal(this.frequency), this
            }, t.Tremolo.prototype.unsync = function() {
                return this._lfoL.unsync(), this._lfoR.unsync(), t.Transport.unsyncSignal(this.frequency), this
            }, Object.defineProperty(t.Tremolo.prototype, "type", {
                get: function() {
                    return this._lfoL.type
                },
                set: function(t) {
                    this._lfoL.type = t, this._lfoR.type = t
                }
            }), Object.defineProperty(t.Tremolo.prototype, "spread", {
                get: function() {
                    return this._lfoR.phase - this._lfoL.phase
                },
                set: function(t) {
                    this._lfoL.phase = 90 - t / 2, this._lfoR.phase = t / 2 + 90
                }
            }), t.Tremolo.prototype.dispose = function() {
                return t.StereoEffect.prototype.dispose.call(this), this._writable(["frequency", "depth"]), this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, this._amplitudeL.dispose(), this._amplitudeL = null, this._amplitudeR.dispose(), this._amplitudeR = null, this.frequency = null, this.depth = null, this
            }, t.Tremolo
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(75), n(1), n(5), n(13)], void 0 === (r = function(t) {
            "use strict";
            return t.StereoWidener = function() {
                var e = t.defaults(arguments, ["width"], t.StereoWidener);
                t.MidSideEffect.call(this, e), this.width = new t.Signal(e.width, t.Type.NormalRange), this._readOnly(["width"]), this._twoTimesWidthMid = new t.Multiply(2), this._twoTimesWidthSide = new t.Multiply(2), this._midMult = new t.Multiply, this._twoTimesWidthMid.connect(this._midMult, 0, 1), this.midSend.chain(this._midMult, this.midReturn), this._oneMinusWidth = new t.Subtract, this._oneMinusWidth.connect(this._twoTimesWidthMid), this.context.getConstant(1).connect(this._oneMinusWidth, 0, 0), this.width.connect(this._oneMinusWidth, 0, 1), this._sideMult = new t.Multiply, this.width.connect(this._twoTimesWidthSide), this._twoTimesWidthSide.connect(this._sideMult, 0, 1), this.sideSend.chain(this._sideMult, this.sideReturn)
            }, t.extend(t.StereoWidener, t.MidSideEffect), t.StereoWidener.defaults = {
                width: .5
            }, t.StereoWidener.prototype.dispose = function() {
                return t.MidSideEffect.prototype.dispose.call(this), this._writable(["width"]), this.width.dispose(), this.width = null, this._midMult.dispose(), this._midMult = null, this._sideMult.dispose(), this._sideMult = null, this._twoTimesWidthMid.dispose(), this._twoTimesWidthMid = null, this._twoTimesWidthSide.dispose(), this._twoTimesWidthSide = null, this._oneMinusWidth.dispose(), this._oneMinusWidth = null, this
            }, t.StereoWidener
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(15), n(32), n(3)], void 0 === (r = function(t) {
            "use strict";
            return t.StereoFeedbackEffect = function() {
                var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
                t.StereoEffect.call(this, e), this.feedback = new t.Signal(e.feedback, t.Type.NormalRange), this._feedbackL = new t.Gain, this._feedbackR = new t.Gain, this.effectReturnL.chain(this._feedbackL, this.effectSendL), this.effectReturnR.chain(this._feedbackR, this.effectSendR), this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain), this._readOnly(["feedback"])
            }, t.extend(t.StereoFeedbackEffect, t.StereoEffect), t.StereoFeedbackEffect.prototype.dispose = function() {
                return t.StereoEffect.prototype.dispose.call(this), this._writable(["feedback"]), this.feedback.dispose(), this.feedback = null, this._feedbackL.dispose(), this._feedbackL = null, this._feedbackR.dispose(), this._feedbackR = null, this
            }, t.StereoFeedbackEffect
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(78), n(9), n(10), n(39), n(3), n(76)], void 0 === (r = function(t) {
            "use strict";
            return t.Reverb = function() {
                var e = t.defaults(arguments, ["decay"], t.Reverb);
                t.Effect.call(this, e), this._convolver = this.context.createConvolver(), this.decay = e.decay, this.preDelay = e.preDelay, this.connectEffect(this._convolver)
            }, t.extend(t.Reverb, t.Effect), t.Reverb.defaults = {
                decay: 1.5,
                preDelay: .01
            }, t.Reverb.prototype.generate = function() {
                return t.Offline(function() {
                    var e = new t.Noise,
                        n = new t.Noise,
                        i = new t.Merge;
                    e.connect(i.left), n.connect(i.right);
                    var r = (new t.Gain).toMaster();
                    i.connect(r), e.start(0), n.start(0), r.gain.setValueAtTime(0, 0), r.gain.linearRampToValueAtTime(1, this.preDelay), r.gain.exponentialApproachValueAtTime(0, this.preDelay, this.decay - this.preDelay)
                }.bind(this), this.decay).then(function(t) {
                    return this._convolver.buffer = t.get(), this
                }.bind(this))
            }, t.Reverb.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._convolver.disconnect(), this._convolver = null, this
            }, t.Reverb
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(12), n(23), n(1), n(32), n(18)], void 0 === (r = function(t) {
            "use strict";
            return t.PitchShift = function() {
                var e = t.defaults(arguments, ["pitch"], t.PitchShift);
                t.FeedbackEffect.call(this, e), this._frequency = new t.Signal(0), this._delayA = new t.Delay(0, 1), this._lfoA = new t.LFO({
                    min: 0,
                    max: .1,
                    type: "sawtooth"
                }).connect(this._delayA.delayTime), this._delayB = new t.Delay(0, 1), this._lfoB = new t.LFO({
                    min: 0,
                    max: .1,
                    type: "sawtooth",
                    phase: 180
                }).connect(this._delayB.delayTime), this._crossFade = new t.CrossFade, this._crossFadeLFO = new t.LFO({
                    min: 0,
                    max: 1,
                    type: "triangle",
                    phase: 90
                }).connect(this._crossFade.fade), this._feedbackDelay = new t.Delay(e.delayTime), this.delayTime = this._feedbackDelay.delayTime, this._readOnly("delayTime"), this._pitch = e.pitch, this._windowSize = e.windowSize, this._delayA.connect(this._crossFade.a), this._delayB.connect(this._crossFade.b), this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency), this.effectSend.fan(this._delayA, this._delayB), this._crossFade.chain(this._feedbackDelay, this.effectReturn);
                var n = this.now();
                this._lfoA.start(n), this._lfoB.start(n), this._crossFadeLFO.start(n), this.windowSize = this._windowSize
            }, t.extend(t.PitchShift, t.FeedbackEffect), t.PitchShift.defaults = {
                pitch: 0,
                windowSize: .1,
                delayTime: 0,
                feedback: 0
            }, Object.defineProperty(t.PitchShift.prototype, "pitch", {
                get: function() {
                    return this._pitch
                },
                set: function(e) {
                    this._pitch = e;
                    var n = 0;
                    e < 0 ? (this._lfoA.min = 0, this._lfoA.max = this._windowSize, this._lfoB.min = 0, this._lfoB.max = this._windowSize, n = t.intervalToFrequencyRatio(e - 1) + 1) : (this._lfoA.min = this._windowSize, this._lfoA.max = 0, this._lfoB.min = this._windowSize, this._lfoB.max = 0, n = t.intervalToFrequencyRatio(e) - 1), this._frequency.value = n * (1.2 / this._windowSize)
                }
            }), Object.defineProperty(t.PitchShift.prototype, "windowSize", {
                get: function() {
                    return this._windowSize
                },
                set: function(t) {
                    this._windowSize = this.toSeconds(t), this.pitch = this._pitch
                }
            }), t.PitchShift.prototype.dispose = function() {
                return t.FeedbackEffect.prototype.dispose.call(this), this._frequency.dispose(), this._frequency = null, this._delayA.disconnect(), this._delayA = null, this._delayB.disconnect(), this._delayB = null, this._lfoA.dispose(), this._lfoA = null, this._lfoB.dispose(), this._lfoB = null, this._crossFade.dispose(), this._crossFade = null, this._crossFadeLFO.dispose(), this._crossFadeLFO = null, this._writable("delayTime"), this._feedbackDelay.dispose(), this._feedbackDelay = null, this.delayTime = null, this
            }, t.PitchShift
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(74), n(1), n(18)], void 0 === (r = function(t) {
            "use strict";
            return t.PingPongDelay = function() {
                var e = t.defaults(arguments, ["delayTime", "feedback"], t.PingPongDelay);
                t.StereoXFeedbackEffect.call(this, e), this._leftDelay = new t.Delay(0, e.maxDelayTime), this._rightDelay = new t.Delay(0, e.maxDelayTime), this._rightPreDelay = new t.Delay(0, e.maxDelayTime), this.delayTime = new t.Signal(e.delayTime, t.Type.Time), this.effectSendL.chain(this._leftDelay, this.effectReturnL), this.effectSendR.chain(this._rightPreDelay, this._rightDelay, this.effectReturnR), this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime), this._feedbackLR.disconnect(), this._feedbackLR.connect(this._rightDelay), this._readOnly(["delayTime"])
            }, t.extend(t.PingPongDelay, t.StereoXFeedbackEffect), t.PingPongDelay.defaults = {
                delayTime: .25,
                maxDelayTime: 1
            }, t.PingPongDelay.prototype.dispose = function() {
                return t.StereoXFeedbackEffect.prototype.dispose.call(this), this._leftDelay.dispose(), this._leftDelay = null, this._rightDelay.dispose(), this._rightDelay = null, this._rightPreDelay.dispose(), this._rightPreDelay = null, this._writable(["delayTime"]), this.delayTime.dispose(), this.delayTime = null, this
            }, t.PingPongDelay
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(12), n(9), n(15)], void 0 === (r = function(t) {
            "use strict";
            return t.Phaser = function() {
                var e = t.defaults(arguments, ["frequency", "octaves", "baseFrequency"], t.Phaser);
                t.StereoEffect.call(this, e), this._lfoL = new t.LFO(e.frequency, 0, 1), this._lfoR = new t.LFO(e.frequency, 0, 1), this._lfoR.phase = 180, this._baseFrequency = e.baseFrequency, this._octaves = e.octaves, this.Q = new t.Signal(e.Q, t.Type.Positive), this._filtersL = this._makeFilters(e.stages, this._lfoL, this.Q), this._filtersR = this._makeFilters(e.stages, this._lfoR, this.Q), this.frequency = this._lfoL.frequency, this.frequency.value = e.frequency, this.effectSendL.connect(this._filtersL[0]), this.effectSendR.connect(this._filtersR[0]), this._filtersL[e.stages - 1].connect(this.effectReturnL), this._filtersR[e.stages - 1].connect(this.effectReturnR), this._lfoL.frequency.connect(this._lfoR.frequency), this.baseFrequency = e.baseFrequency, this.octaves = e.octaves, this._lfoL.start(), this._lfoR.start(), this._readOnly(["frequency", "Q"])
            }, t.extend(t.Phaser, t.StereoEffect), t.Phaser.defaults = {
                frequency: .5,
                octaves: 3,
                stages: 10,
                Q: 10,
                baseFrequency: 350
            }, t.Phaser.prototype._makeFilters = function(e, n, i) {
                for (var r = new Array(e), o = 0; o < e; o++) {
                    var s = this.context.createBiquadFilter();
                    s.type = "allpass", i.connect(s.Q), n.connect(s.frequency), r[o] = s
                }
                return t.connectSeries.apply(t, r), r
            }, Object.defineProperty(t.Phaser.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t;
                    var e = this._baseFrequency * Math.pow(2, t);
                    this._lfoL.max = e, this._lfoR.max = e
                }
            }), Object.defineProperty(t.Phaser.prototype, "baseFrequency", {
                get: function() {
                    return this._baseFrequency
                },
                set: function(t) {
                    this._baseFrequency = t, this._lfoL.min = t, this._lfoR.min = t, this.octaves = this._octaves
                }
            }), t.Phaser.prototype.dispose = function() {
                t.StereoEffect.prototype.dispose.call(this), this._writable(["frequency", "Q"]), this.Q.dispose(), this.Q = null, this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null;
                for (var e = 0; e < this._filtersL.length; e++) this._filtersL[e].disconnect(), this._filtersL[e] = null;
                this._filtersL = null;
                for (var n = 0; n < this._filtersR.length; n++) this._filtersR[n].disconnect(), this._filtersR[n] = null;
                return this._filtersR = null, this.frequency = null, this
            }, t.Phaser
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(58), n(15), n(26)], void 0 === (r = function(t) {
            "use strict";
            var e = [.06748, .06404, .08212, .09004],
                n = [.773, .802, .753, .733],
                i = [347, 113, 37];
            return t.JCReverb = function() {
                var r = t.defaults(arguments, ["roomSize"], t.JCReverb);
                t.StereoEffect.call(this, r), this.roomSize = new t.Signal(r.roomSize, t.Type.NormalRange), this._scaleRoomSize = new t.Scale(-.733, .197), this._allpassFilters = [], this._feedbackCombFilters = [];
                for (var o = 0; o < i.length; o++) {
                    var s = this.context.createBiquadFilter();
                    s.type = "allpass", s.frequency.value = i[o], this._allpassFilters.push(s)
                }
                for (var a = 0; a < e.length; a++) {
                    var u = new t.FeedbackCombFilter(e[a], .1);
                    this._scaleRoomSize.connect(u.resonance), u.resonance.value = n[a], this._allpassFilters[this._allpassFilters.length - 1].connect(u), a < e.length / 2 ? u.connect(this.effectReturnL) : u.connect(this.effectReturnR), this._feedbackCombFilters.push(u)
                }
                this.roomSize.connect(this._scaleRoomSize), t.connectSeries.apply(t, this._allpassFilters), this.effectSendL.connect(this._allpassFilters[0]), this.effectSendR.connect(this._allpassFilters[0]), this._readOnly(["roomSize"])
            }, t.extend(t.JCReverb, t.StereoEffect), t.JCReverb.defaults = {
                roomSize: .5
            }, t.JCReverb.prototype.dispose = function() {
                t.StereoEffect.prototype.dispose.call(this);
                for (var e = 0; e < this._allpassFilters.length; e++) this._allpassFilters[e].disconnect(), this._allpassFilters[e] = null;
                this._allpassFilters = null;
                for (var n = 0; n < this._feedbackCombFilters.length; n++) this._feedbackCombFilters[n].dispose(), this._feedbackCombFilters[n] = null;
                return this._feedbackCombFilters = null, this._writable(["roomSize"]), this.roomSize.dispose(), this.roomSize = null, this._scaleRoomSize.dispose(), this._scaleRoomSize = null, this
            }, t.JCReverb
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(53), n(15), n(1), n(19), n(10), n(42)], void 0 === (r = function(t) {
            "use strict";
            var e = [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100],
                n = [225, 556, 441, 341];
            return t.Freeverb = function() {
                var i = t.defaults(arguments, ["roomSize", "dampening"], t.Freeverb);
                t.StereoEffect.call(this, i), this.roomSize = new t.Signal(i.roomSize, t.Type.NormalRange), this.dampening = new t.Signal(i.dampening, t.Type.Frequency), this._combFilters = [], this._allpassFiltersL = [], this._allpassFiltersR = [];
                for (var r = 0; r < n.length; r++) {
                    var o = this.context.createBiquadFilter();
                    o.type = "allpass", o.frequency.value = n[r], this._allpassFiltersL.push(o)
                }
                for (var s = 0; s < n.length; s++) {
                    var a = this.context.createBiquadFilter();
                    a.type = "allpass", a.frequency.value = n[s], this._allpassFiltersR.push(a)
                }
                for (var u = 0; u < e.length; u++) {
                    var l = new t.LowpassCombFilter(e[u]);
                    u < e.length / 2 ? this.effectSendL.chain(l, this._allpassFiltersL[0]) : this.effectSendR.chain(l, this._allpassFiltersR[0]), this.roomSize.connect(l.resonance), this.dampening.connect(l.dampening), this._combFilters.push(l)
                }
                t.connectSeries.apply(t, this._allpassFiltersL), t.connectSeries.apply(t, this._allpassFiltersR), this._allpassFiltersL[this._allpassFiltersL.length - 1].connect(this.effectReturnL), this._allpassFiltersR[this._allpassFiltersR.length - 1].connect(this.effectReturnR), this._readOnly(["roomSize", "dampening"])
            }, t.extend(t.Freeverb, t.StereoEffect), t.Freeverb.defaults = {
                roomSize: .7,
                dampening: 3e3
            }, t.Freeverb.prototype.dispose = function() {
                t.StereoEffect.prototype.dispose.call(this);
                for (var e = 0; e < this._allpassFiltersL.length; e++) this._allpassFiltersL[e].disconnect(), this._allpassFiltersL[e] = null;
                this._allpassFiltersL = null;
                for (var n = 0; n < this._allpassFiltersR.length; n++) this._allpassFiltersR[n].disconnect(), this._allpassFiltersR[n] = null;
                this._allpassFiltersR = null;
                for (var i = 0; i < this._combFilters.length; i++) this._combFilters[i].dispose(), this._combFilters[i] = null;
                return this._combFilters = null, this._writable(["roomSize", "dampening"]), this.roomSize.dispose(), this.roomSize = null, this.dampening.dispose(), this.dampening = null, this
            }, t.Freeverb
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(32), n(1), n(18)], void 0 === (r = function(t) {
            "use strict";
            return t.FeedbackDelay = function() {
                var e = t.defaults(arguments, ["delayTime", "feedback"], t.FeedbackDelay);
                t.FeedbackEffect.call(this, e), this._delayNode = new t.Delay(e.delayTime, e.maxDelay), this.delayTime = this._delayNode.delayTime, this.connectEffect(this._delayNode), this._readOnly(["delayTime"])
            }, t.extend(t.FeedbackDelay, t.FeedbackEffect), t.FeedbackDelay.defaults = {
                delayTime: .25,
                maxDelay: 1
            }, t.FeedbackDelay.prototype.dispose = function() {
                return t.FeedbackEffect.prototype.dispose.call(this), this._delayNode.dispose(), this._delayNode = null, this._writable(["delayTime"]), this.delayTime = null, this
            }, t.FeedbackDelay
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(8), n(7)], void 0 === (r = function(t) {
            "use strict";
            return t.Distortion = function() {
                var e = t.defaults(arguments, ["distortion"], t.Distortion);
                t.Effect.call(this, e), this._shaper = new t.WaveShaper(4096), this._distortion = e.distortion, this.connectEffect(this._shaper), this.distortion = e.distortion, this.oversample = e.oversample
            }, t.extend(t.Distortion, t.Effect), t.Distortion.defaults = {
                distortion: .4,
                oversample: "none"
            }, Object.defineProperty(t.Distortion.prototype, "distortion", {
                get: function() {
                    return this._distortion
                },
                set: function(t) {
                    this._distortion = t;
                    var e = 100 * t,
                        n = Math.PI / 180;
                    this._shaper.setMap(function(t) {
                        return Math.abs(t) < .001 ? 0 : (3 + e) * t * 20 * n / (Math.PI + e * Math.abs(t))
                    })
                }
            }), Object.defineProperty(t.Distortion.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample
                },
                set: function(t) {
                    this._shaper.oversample = t
                }
            }), t.Distortion.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this
            }, t.Distortion
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(12), n(15), n(18)], void 0 === (r = function(t) {
            "use strict";
            return t.Chorus = function() {
                var e = t.defaults(arguments, ["frequency", "delayTime", "depth"], t.Chorus);
                t.StereoEffect.call(this, e), this._depth = e.depth, this._delayTime = e.delayTime / 1e3, this._lfoL = new t.LFO({
                    frequency: e.frequency,
                    min: 0,
                    max: 1
                }), this._lfoR = new t.LFO({
                    frequency: e.frequency,
                    min: 0,
                    max: 1,
                    phase: 180
                }), this._delayNodeL = new t.Delay, this._delayNodeR = new t.Delay, this.frequency = this._lfoL.frequency, this.effectSendL.chain(this._delayNodeL, this.effectReturnL), this.effectSendR.chain(this._delayNodeR, this.effectReturnR), this.effectSendL.connect(this.effectReturnL), this.effectSendR.connect(this.effectReturnR), this._lfoL.connect(this._delayNodeL.delayTime), this._lfoR.connect(this._delayNodeR.delayTime), this._lfoL.start(), this._lfoR.start(), this._lfoL.frequency.connect(this._lfoR.frequency), this.depth = this._depth, this.frequency.value = e.frequency, this.type = e.type, this._readOnly(["frequency"]), this.spread = e.spread
            }, t.extend(t.Chorus, t.StereoEffect), t.Chorus.defaults = {
                frequency: 1.5,
                delayTime: 3.5,
                depth: .7,
                type: "sine",
                spread: 180
            }, Object.defineProperty(t.Chorus.prototype, "depth", {
                get: function() {
                    return this._depth
                },
                set: function(t) {
                    this._depth = t;
                    var e = this._delayTime * t;
                    this._lfoL.min = Math.max(this._delayTime - e, 0), this._lfoL.max = this._delayTime + e, this._lfoR.min = Math.max(this._delayTime - e, 0), this._lfoR.max = this._delayTime + e
                }
            }), Object.defineProperty(t.Chorus.prototype, "delayTime", {
                get: function() {
                    return 1e3 * this._delayTime
                },
                set: function(t) {
                    this._delayTime = t / 1e3, this.depth = this._depth
                }
            }), Object.defineProperty(t.Chorus.prototype, "type", {
                get: function() {
                    return this._lfoL.type
                },
                set: function(t) {
                    this._lfoL.type = t, this._lfoR.type = t
                }
            }), Object.defineProperty(t.Chorus.prototype, "spread", {
                get: function() {
                    return this._lfoR.phase - this._lfoL.phase
                },
                set: function(t) {
                    this._lfoL.phase = 90 - t / 2, this._lfoR.phase = t / 2 + 90
                }
            }), t.Chorus.prototype.dispose = function() {
                return t.StereoEffect.prototype.dispose.call(this), this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, this._delayNodeL.dispose(), this._delayNodeL = null, this._delayNodeR.dispose(), this._delayNodeR = null, this._writable("frequency"), this.frequency = null, this
            }, t.Chorus
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(8), n(7)], void 0 === (r = function(t) {
            "use strict";
            return t.Chebyshev = function() {
                var e = t.defaults(arguments, ["order"], t.Chebyshev);
                t.Effect.call(this, e), this._shaper = new t.WaveShaper(4096), this._order = e.order, this.connectEffect(this._shaper), this.order = e.order, this.oversample = e.oversample
            }, t.extend(t.Chebyshev, t.Effect), t.Chebyshev.defaults = {
                order: 1,
                oversample: "none"
            }, t.Chebyshev.prototype._getCoefficient = function(t, e, n) {
                return n.hasOwnProperty(e) ? n[e] : (n[e] = 0 === e ? 0 : 1 === e ? t : 2 * t * this._getCoefficient(t, e - 1, n) - this._getCoefficient(t, e - 2, n), n[e])
            }, Object.defineProperty(t.Chebyshev.prototype, "order", {
                get: function() {
                    return this._order
                },
                set: function(t) {
                    this._order = t;
                    for (var e = new Array(4096), n = e.length, i = 0; i < n; ++i) {
                        var r = 2 * i / n - 1;
                        e[i] = 0 === r ? 0 : this._getCoefficient(r, t, {})
                    }
                    this._shaper.curve = e
                }
            }), Object.defineProperty(t.Chebyshev.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample
                },
                set: function(t) {
                    this._shaper.oversample = t
                }
            }), t.Chebyshev.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this
            }, t.Chebyshev
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(8), n(13), n(77)], void 0 === (r = function(t) {
            "use strict";
            return t.BitCrusher = function() {
                var e = t.defaults(arguments, ["bits"], t.BitCrusher);
                t.Effect.call(this, e);
                var n = 1 / Math.pow(2, e.bits - 1);
                this._subtract = new t.Subtract, this._modulo = new t.Modulo(n), this._bits = e.bits, this.effectSend.fan(this._subtract, this._modulo), this._modulo.connect(this._subtract, 0, 1), this._subtract.connect(this.effectReturn)
            }, t.extend(t.BitCrusher, t.Effect), t.BitCrusher.defaults = {
                bits: 4
            }, Object.defineProperty(t.BitCrusher.prototype, "bits", {
                get: function() {
                    return this._bits
                },
                set: function(t) {
                    this._bits = t;
                    var e = 1 / Math.pow(2, t - 1);
                    this._modulo.value = e
                }
            }), t.BitCrusher.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._subtract.dispose(), this._subtract = null, this._modulo.dispose(), this._modulo = null, this
            }, t.BitCrusher
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(57), n(42), n(8), n(9)], void 0 === (r = function(t) {
            "use strict";
            return t.AutoWah = function() {
                var e = t.defaults(arguments, ["baseFrequency", "octaves", "sensitivity"], t.AutoWah);
                t.Effect.call(this, e), this.follower = new t.Follower(e.follower), this._sweepRange = new t.ScaleExp(0, 1, .5), this._baseFrequency = e.baseFrequency, this._octaves = e.octaves, this._inputBoost = new t.Gain, this._bandpass = new t.Filter({
                    rolloff: -48,
                    frequency: 0,
                    Q: e.Q
                }), this._peaking = new t.Filter(0, "peaking"), this._peaking.gain.value = e.gain, this.gain = this._peaking.gain, this.Q = this._bandpass.Q, this.effectSend.chain(this._inputBoost, this.follower, this._sweepRange), this._sweepRange.connect(this._bandpass.frequency), this._sweepRange.connect(this._peaking.frequency), this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn), this._setSweepRange(), this.sensitivity = e.sensitivity, this._readOnly(["gain", "Q"])
            }, t.extend(t.AutoWah, t.Effect), t.AutoWah.defaults = {
                baseFrequency: 100,
                octaves: 6,
                sensitivity: 0,
                Q: 2,
                gain: 2,
                follower: {
                    attack: .3,
                    release: .5
                }
            }, Object.defineProperty(t.AutoWah.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t, this._setSweepRange()
                }
            }), Object.defineProperty(t.AutoWah.prototype, "baseFrequency", {
                get: function() {
                    return this._baseFrequency
                },
                set: function(t) {
                    this._baseFrequency = t, this._setSweepRange()
                }
            }), Object.defineProperty(t.AutoWah.prototype, "sensitivity", {
                get: function() {
                    return t.gainToDb(1 / this._inputBoost.gain.value)
                },
                set: function(e) {
                    this._inputBoost.gain.value = 1 / t.dbToGain(e)
                }
            }), t.AutoWah.prototype._setSweepRange = function() {
                this._sweepRange.min = this._baseFrequency, this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2)
            }, t.AutoWah.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this.follower.dispose(), this.follower = null, this._sweepRange.dispose(), this._sweepRange = null, this._bandpass.dispose(), this._bandpass = null, this._peaking.dispose(), this._peaking = null, this._inputBoost.dispose(), this._inputBoost = null, this._writable(["gain", "Q"]), this.gain = null, this.Q = null, this
            }, t.AutoWah
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(8), n(12), n(60)], void 0 === (r = function(t) {
            "use strict";
            return t.AutoPanner = function() {
                var e = t.defaults(arguments, ["frequency"], t.AutoPanner);
                t.Effect.call(this, e), this._lfo = new t.LFO({
                    frequency: e.frequency,
                    amplitude: e.depth,
                    min: -1,
                    max: 1
                }), this.depth = this._lfo.amplitude, this._panner = new t.Panner, this.frequency = this._lfo.frequency, this.connectEffect(this._panner), this._lfo.connect(this._panner.pan), this.type = e.type, this._readOnly(["depth", "frequency"])
            }, t.extend(t.AutoPanner, t.Effect), t.AutoPanner.defaults = {
                frequency: 1,
                type: "sine",
                depth: 1
            }, t.AutoPanner.prototype.start = function(t) {
                return this._lfo.start(t), this
            }, t.AutoPanner.prototype.stop = function(t) {
                return this._lfo.stop(t), this
            }, t.AutoPanner.prototype.sync = function(t) {
                return this._lfo.sync(t), this
            }, t.AutoPanner.prototype.unsync = function() {
                return this._lfo.unsync(), this
            }, Object.defineProperty(t.AutoPanner.prototype, "type", {
                get: function() {
                    return this._lfo.type
                },
                set: function(t) {
                    this._lfo.type = t
                }
            }), t.AutoPanner.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this._panner.dispose(), this._panner = null, this._writable(["depth", "frequency"]), this.frequency = null, this.depth = null, this
            }, t.AutoPanner
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(8), n(12), n(9)], void 0 === (r = function(t) {
            "use strict";
            return t.AutoFilter = function() {
                var e = t.defaults(arguments, ["frequency", "baseFrequency", "octaves"], t.AutoFilter);
                t.Effect.call(this, e), this._lfo = new t.LFO({
                    frequency: e.frequency,
                    amplitude: e.depth
                }), this.depth = this._lfo.amplitude, this.frequency = this._lfo.frequency, this.filter = new t.Filter(e.filter), this._octaves = 0, this.connectEffect(this.filter), this._lfo.connect(this.filter.frequency), this.type = e.type, this._readOnly(["frequency", "depth"]), this.octaves = e.octaves, this.baseFrequency = e.baseFrequency
            }, t.extend(t.AutoFilter, t.Effect), t.AutoFilter.defaults = {
                frequency: 1,
                type: "sine",
                depth: 1,
                baseFrequency: 200,
                octaves: 2.6,
                filter: {
                    type: "lowpass",
                    rolloff: -12,
                    Q: 1
                }
            }, t.AutoFilter.prototype.start = function(t) {
                return this._lfo.start(t), this
            }, t.AutoFilter.prototype.stop = function(t) {
                return this._lfo.stop(t), this
            }, t.AutoFilter.prototype.sync = function(t) {
                return this._lfo.sync(t), this
            }, t.AutoFilter.prototype.unsync = function() {
                return this._lfo.unsync(), this
            }, Object.defineProperty(t.AutoFilter.prototype, "type", {
                get: function() {
                    return this._lfo.type
                },
                set: function(t) {
                    this._lfo.type = t
                }
            }), Object.defineProperty(t.AutoFilter.prototype, "baseFrequency", {
                get: function() {
                    return this._lfo.min
                },
                set: function(t) {
                    this._lfo.min = this.toFrequency(t), this.octaves = this._octaves
                }
            }), Object.defineProperty(t.AutoFilter.prototype, "octaves", {
                get: function() {
                    return this._octaves
                },
                set: function(t) {
                    this._octaves = t, this._lfo.max = this.baseFrequency * Math.pow(2, t)
                }
            }), t.AutoFilter.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this.filter.dispose(), this.filter = null, this._writable(["frequency", "depth"]), this.frequency = null, this.depth = null, this
            }, t.AutoFilter
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(23), n(10), n(19), n(1), n(22), n(28)], void 0 === (r = function(t) {
            "use strict";
            t.Listener = function() {
                t.call(this), this._orientation = [0, 0, 0, 0, 0, 0], this._position = [0, 0, 0], t.getContext(function() {
                    this.set(e.defaults), this.context.listener = this
                }.bind(this))
            }, t.extend(t.Listener), t.Listener.defaults = {
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                forwardX: 0,
                forwardY: 0,
                forwardZ: 1,
                upX: 0,
                upY: 1,
                upZ: 0
            }, t.Listener.prototype.isListener = !0, t.Listener.prototype._rampTimeConstant = .01, t.Listener.prototype.setPosition = function(t, e, n) {
                if (this.context.rawContext.listener.positionX) {
                    var i = this.now();
                    this.context.rawContext.listener.positionX.setTargetAtTime(t, i, this._rampTimeConstant), this.context.rawContext.listener.positionY.setTargetAtTime(e, i, this._rampTimeConstant), this.context.rawContext.listener.positionZ.setTargetAtTime(n, i, this._rampTimeConstant)
                } else this.context.rawContext.listener.setPosition(t, e, n);
                return this._position = Array.prototype.slice.call(arguments), this
            }, t.Listener.prototype.setOrientation = function(t, e, n, i, r, o) {
                if (this.context.rawContext.listener.forwardX) {
                    var s = this.now();
                    this.context.rawContext.listener.forwardX.setTargetAtTime(t, s, this._rampTimeConstant), this.context.rawContext.listener.forwardY.setTargetAtTime(e, s, this._rampTimeConstant), this.context.rawContext.listener.forwardZ.setTargetAtTime(n, s, this._rampTimeConstant), this.context.rawContext.listener.upX.setTargetAtTime(i, s, this._rampTimeConstant), this.context.rawContext.listener.upY.setTargetAtTime(r, s, this._rampTimeConstant), this.context.rawContext.listener.upZ.setTargetAtTime(o, s, this._rampTimeConstant)
                } else this.context.rawContext.listener.setOrientation(t, e, n, i, r, o);
                return this._orientation = Array.prototype.slice.call(arguments), this
            }, Object.defineProperty(t.Listener.prototype, "positionX", {
                set: function(t) {
                    this._position[0] = t, this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[0]
                }
            }), Object.defineProperty(t.Listener.prototype, "positionY", {
                set: function(t) {
                    this._position[1] = t, this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[1]
                }
            }), Object.defineProperty(t.Listener.prototype, "positionZ", {
                set: function(t) {
                    this._position[2] = t, this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[2]
                }
            }), Object.defineProperty(t.Listener.prototype, "forwardX", {
                set: function(t) {
                    this._orientation[0] = t, this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[0]
                }
            }), Object.defineProperty(t.Listener.prototype, "forwardY", {
                set: function(t) {
                    this._orientation[1] = t, this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[1]
                }
            }), Object.defineProperty(t.Listener.prototype, "forwardZ", {
                set: function(t) {
                    this._orientation[2] = t, this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[2]
                }
            }), Object.defineProperty(t.Listener.prototype, "upX", {
                set: function(t) {
                    this._orientation[3] = t, this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[3]
                }
            }), Object.defineProperty(t.Listener.prototype, "upY", {
                set: function(t) {
                    this._orientation[4] = t, this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[4]
                }
            }), Object.defineProperty(t.Listener.prototype, "upZ", {
                set: function(t) {
                    this._orientation[5] = t, this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[5]
                }
            }), t.Listener.prototype.dispose = function() {
                return this._orientation = null, this._position = null, this
            };
            var e = t.Listener;
            return t.Listener = new e, t.Context.on("init", function(n) {
                n.listener && n.listener.isListener ? t.Listener = n.listener : t.Listener = new e
            }), t.Listener
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(24)], void 0 === (r = function(t) {
            "use strict";
            return t.Draw = function() {
                t.call(this), this._events = new t.Timeline, this.expiration = .25, this.anticipation = .008, this._boundDrawLoop = this._drawLoop.bind(this)
            }, t.extend(t.Draw), t.Draw.prototype.schedule = function(t, e) {
                return this._events.add({
                    callback: t,
                    time: this.toSeconds(e)
                }), 1 === this._events.length && requestAnimationFrame(this._boundDrawLoop), this
            }, t.Draw.prototype.cancel = function(t) {
                return this._events.cancel(this.toSeconds(t)), this
            }, t.Draw.prototype._drawLoop = function() {
                for (var e = t.context.currentTime; this._events.length && this._events.peek().time - this.anticipation <= e;) {
                    var n = this._events.shift();
                    e - n.time <= this.expiration && n.callback()
                }
                this._events.length > 0 && requestAnimationFrame(this._boundDrawLoop)
            }, t.Draw = new t.Draw, t.Draw
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(3)], void 0 === (r = function(t) {
            "use strict";
            var e = {};
            return t.prototype.send = function(n, i) {
                e.hasOwnProperty(n) || (e[n] = this.context.createGain()), i = t.defaultArg(i, 0);
                var r = new t.Gain(i, t.Type.Decibels);
                return this.connect(r), r.connect(e[n]), r
            }, t.prototype.receive = function(t, n) {
                return e.hasOwnProperty(t) || (e[t] = this.context.createGain()), e[t].connect(this, 0, n), this
            }, t.Context.on("init", function(t) {
                t.buses ? e = t.buses : (e = {}, t.buses = e)
            }), t
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(4)], void 0 === (r = function(t) {
            "use strict";
            return t.CtrlRandom = function() {
                var e = t.defaults(arguments, ["min", "max"], t.CtrlRandom);
                t.call(this), this.min = e.min, this.max = e.max, this.integer = e.integer
            }, t.extend(t.CtrlRandom), t.CtrlRandom.defaults = {
                min: 0,
                max: 1,
                integer: !1
            }, Object.defineProperty(t.CtrlRandom.prototype, "value", {
                get: function() {
                    var t = this.toSeconds(this.min),
                        e = this.toSeconds(this.max),
                        n = Math.random(),
                        i = n * t + (1 - n) * e;
                    return this.integer && (i = Math.floor(i)), i
                }
            }), t.CtrlRandom
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0)], void 0 === (r = function(t) {
            "use strict";
            return t.CtrlMarkov = function(e, n) {
                t.call(this), this.values = t.defaultArg(e, {}), this.value = t.defaultArg(n, Object.keys(this.values)[0])
            }, t.extend(t.CtrlMarkov), t.CtrlMarkov.prototype.next = function() {
                if (this.values.hasOwnProperty(this.value)) {
                    var e = this.values[this.value];
                    if (t.isArray(e))
                        for (var n = this._getProbDistribution(e), i = Math.random(), r = 0, o = 0; o < n.length; o++) {
                            var s = n[o];
                            if (i > r && i < r + s) {
                                var a = e[o];
                                t.isObject(a) ? this.value = a.value : this.value = a
                            }
                            r += s
                        } else this.value = e
                }
                return this.value
            }, t.CtrlMarkov.prototype._getProbDistribution = function(e) {
                for (var n = [], i = 0, r = !1, o = 0; o < e.length; o++) {
                    var s = e[o];
                    t.isObject(s) ? (r = !0, n[o] = s.probability) : n[o] = 1 / e.length, i += n[o]
                }
                if (r)
                    for (var a = 0; a < n.length; a++) n[a] = n[a] / i;
                return n
            }, t.CtrlMarkov.prototype.dispose = function() {
                this.values = null
            }, t.CtrlMarkov
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(4)], void 0 === (r = function(t) {
            "use strict";
            return t.CtrlInterpolate = function() {
                var e = t.defaults(arguments, ["values", "index"], t.CtrlInterpolate);
                t.call(this), this.values = e.values, this.index = e.index
            }, t.extend(t.CtrlInterpolate), t.CtrlInterpolate.defaults = {
                index: 0,
                values: []
            }, Object.defineProperty(t.CtrlInterpolate.prototype, "value", {
                get: function() {
                    var t = this.index;
                    t = Math.min(t, this.values.length - 1);
                    var e = Math.floor(t),
                        n = this.values[e],
                        i = this.values[Math.ceil(t)];
                    return this._interpolate(t - e, n, i)
                }
            }), t.CtrlInterpolate.prototype._interpolate = function(e, n, i) {
                if (t.isArray(n)) {
                    for (var r = [], o = 0; o < n.length; o++) r[o] = this._interpolate(e, n[o], i[o]);
                    return r
                }
                if (t.isObject(n)) {
                    var s = {};
                    for (var a in n) s[a] = this._interpolate(e, n[a], i[a]);
                    return s
                }
                return (1 - e) * (n = this._toNumber(n)) + e * (i = this._toNumber(i))
            }, t.CtrlInterpolate.prototype._toNumber = function(e) {
                return t.isNumber(e) ? e : this.toSeconds(e)
            }, t.CtrlInterpolate.prototype.dispose = function() {
                this.values = null
            }, t.CtrlInterpolate
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(44), n(2)], void 0 === (r = function(t) {
            return t.Waveform = function() {
                var e = t.defaults(arguments, ["size"], t.Waveform);
                e.type = t.Analyser.Type.Waveform, t.AudioNode.call(this), this._analyser = this.input = this.output = new t.Analyser(e)
            }, t.extend(t.Waveform, t.AudioNode), t.Waveform.defaults = {
                size: 1024
            }, t.Waveform.prototype.getValue = function() {
                return this._analyser.getValue()
            }, Object.defineProperty(t.Waveform.prototype, "size", {
                get: function() {
                    return this._analyser.size
                },
                set: function(t) {
                    this._analyser.size = t
                }
            }), t.Waveform.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null
            }, t.Waveform
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(23), n(10), n(19), n(1), n(22), n(28), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Panner3D = function() {
                var e = t.defaults(arguments, ["positionX", "positionY", "positionZ"], t.Panner3D);
                t.AudioNode.call(this), this._panner = this.input = this.output = this.context.createPanner(), this._panner.panningModel = e.panningModel, this._panner.maxDistance = e.maxDistance, this._panner.distanceModel = e.distanceModel, this._panner.coneOuterGain = e.coneOuterGain, this._panner.coneOuterAngle = e.coneOuterAngle, this._panner.coneInnerAngle = e.coneInnerAngle, this._panner.refDistance = e.refDistance, this._panner.rolloffFactor = e.rolloffFactor, this._orientation = [e.orientationX, e.orientationY, e.orientationZ], this._position = [e.positionX, e.positionY, e.positionZ], this.orientationX = e.orientationX, this.orientationY = e.orientationY, this.orientationZ = e.orientationZ, this.positionX = e.positionX, this.positionY = e.positionY, this.positionZ = e.positionZ
            }, t.extend(t.Panner3D, t.AudioNode), t.Panner3D.defaults = {
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                orientationX: 0,
                orientationY: 0,
                orientationZ: 0,
                panningModel: "equalpower",
                maxDistance: 1e4,
                distanceModel: "inverse",
                coneOuterGain: 0,
                coneOuterAngle: 360,
                coneInnerAngle: 360,
                refDistance: 1,
                rolloffFactor: 1
            }, t.Panner3D.prototype._rampTimeConstant = .01, t.Panner3D.prototype.setPosition = function(t, e, n) {
                if (this._panner.positionX) {
                    var i = this.now();
                    this._panner.positionX.setTargetAtTime(t, i, this._rampTimeConstant), this._panner.positionY.setTargetAtTime(e, i, this._rampTimeConstant), this._panner.positionZ.setTargetAtTime(n, i, this._rampTimeConstant)
                } else this._panner.setPosition(t, e, n);
                return this._position = Array.prototype.slice.call(arguments), this
            }, t.Panner3D.prototype.setOrientation = function(t, e, n) {
                if (this._panner.orientationX) {
                    var i = this.now();
                    this._panner.orientationX.setTargetAtTime(t, i, this._rampTimeConstant), this._panner.orientationY.setTargetAtTime(e, i, this._rampTimeConstant), this._panner.orientationZ.setTargetAtTime(n, i, this._rampTimeConstant)
                } else this._panner.setOrientation(t, e, n);
                return this._orientation = Array.prototype.slice.call(arguments), this
            }, Object.defineProperty(t.Panner3D.prototype, "positionX", {
                set: function(t) {
                    this._position[0] = t, this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[0]
                }
            }), Object.defineProperty(t.Panner3D.prototype, "positionY", {
                set: function(t) {
                    this._position[1] = t, this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[1]
                }
            }), Object.defineProperty(t.Panner3D.prototype, "positionZ", {
                set: function(t) {
                    this._position[2] = t, this.setPosition.apply(this, this._position)
                },
                get: function() {
                    return this._position[2]
                }
            }), Object.defineProperty(t.Panner3D.prototype, "orientationX", {
                set: function(t) {
                    this._orientation[0] = t, this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[0]
                }
            }), Object.defineProperty(t.Panner3D.prototype, "orientationY", {
                set: function(t) {
                    this._orientation[1] = t, this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[1]
                }
            }), Object.defineProperty(t.Panner3D.prototype, "orientationZ", {
                set: function(t) {
                    this._orientation[2] = t, this.setOrientation.apply(this, this._orientation)
                },
                get: function() {
                    return this._orientation[2]
                }
            }), t.Panner3D._aliasProperty = function(e) {
                Object.defineProperty(t.Panner3D.prototype, e, {
                    set: function(t) {
                        this._panner[e] = t
                    },
                    get: function() {
                        return this._panner[e]
                    }
                })
            }, t.Panner3D._aliasProperty("panningModel"), t.Panner3D._aliasProperty("refDistance"), t.Panner3D._aliasProperty("rolloffFactor"), t.Panner3D._aliasProperty("distanceModel"), t.Panner3D._aliasProperty("coneInnerAngle"), t.Panner3D._aliasProperty("coneOuterAngle"), t.Panner3D._aliasProperty("coneOuterGain"), t.Panner3D._aliasProperty("maxDistance"), t.Panner3D.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._panner.disconnect(), this._panner = null, this._orientation = null, this._position = null, this
            }, t.Panner3D
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(59), n(43), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.MultibandCompressor = function(e) {
                t.AudioNode.call(this), e = t.defaultArg(arguments, t.MultibandCompressor.defaults), this._splitter = this.input = new t.MultibandSplit({
                    lowFrequency: e.lowFrequency,
                    highFrequency: e.highFrequency
                }), this.lowFrequency = this._splitter.lowFrequency, this.highFrequency = this._splitter.highFrequency, this.output = new t.Gain, this.low = new t.Compressor(e.low), this.mid = new t.Compressor(e.mid), this.high = new t.Compressor(e.high), this._splitter.low.chain(this.low, this.output), this._splitter.mid.chain(this.mid, this.output), this._splitter.high.chain(this.high, this.output), this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
            }, t.extend(t.MultibandCompressor, t.AudioNode), t.MultibandCompressor.defaults = {
                low: t.Compressor.defaults,
                mid: t.Compressor.defaults,
                high: t.Compressor.defaults,
                lowFrequency: 250,
                highFrequency: 2e3
            }, t.MultibandCompressor.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._splitter.dispose(), this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this._splitter = null, this.low = null, this.mid = null, this.high = null, this.lowFrequency = null, this.highFrequency = null, this
            }, t.MultibandCompressor
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(10), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Mono = function() {
                t.AudioNode.call(this), this.createInsOuts(1, 0), this._merge = this.output = new t.Merge, this.input.connect(this._merge, 0, 0), this.input.connect(this._merge, 0, 1)
            }, t.extend(t.Mono, t.AudioNode), t.Mono.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._merge.dispose(), this._merge = null, this
            }, t.Mono
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(52), n(51), n(43), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.MidSideCompressor = function(e) {
                t.AudioNode.call(this), e = t.defaultArg(e, t.MidSideCompressor.defaults), this._midSideSplit = this.input = new t.MidSideSplit, this._midSideMerge = this.output = new t.MidSideMerge, this.mid = new t.Compressor(e.mid), this.side = new t.Compressor(e.side), this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid), this._midSideSplit.side.chain(this.side, this._midSideMerge.side), this._readOnly(["mid", "side"])
            }, t.extend(t.MidSideCompressor, t.AudioNode), t.MidSideCompressor.defaults = {
                mid: {
                    ratio: 3,
                    threshold: -24,
                    release: .03,
                    attack: .02,
                    knee: 16
                },
                side: {
                    ratio: 6,
                    threshold: -30,
                    release: .25,
                    attack: .03,
                    knee: 10
                }
            }, t.MidSideCompressor.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable(["mid", "side"]), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this
            }, t.MidSideCompressor
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(44), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Meter = function() {
                var e = t.defaults(arguments, ["smoothing"], t.Meter);
                t.AudioNode.call(this), this.smoothing = e.smoothing, this._rms = 0, this.input = this.output = this._analyser = new t.Analyser("waveform", 256)
            }, t.extend(t.Meter, t.AudioNode), t.Meter.defaults = {
                smoothing: .8
            }, t.Meter.prototype.getLevel = function() {
                for (var e = this._analyser.getValue(), n = 0, i = 0; i < e.length; i++) {
                    var r = e[i];
                    n += r * r
                }
                var o = Math.sqrt(n / e.length);
                return this._rms = Math.max(o, this._rms * this.smoothing), t.gainToDb(this._rms)
            }, t.Meter.prototype.getValue = function() {
                return this._analyser.getValue()[0]
            }, t.Meter.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null, this
            }, t.Meter
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(43), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Limiter = function() {
                var e = t.defaults(arguments, ["threshold"], t.Limiter);
                t.AudioNode.call(this), this._compressor = this.input = this.output = new t.Compressor({
                    attack: .001,
                    decay: .001,
                    threshold: e.threshold
                }), this.threshold = this._compressor.threshold, this._readOnly("threshold")
            }, t.extend(t.Limiter, t.AudioNode), t.Limiter.defaults = {
                threshold: -12
            }, t.Limiter.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._compressor.dispose(), this._compressor = null, this._writable("threshold"), this.threshold = null, this
            }, t.Limiter
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(57), n(88), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.Gate = function() {
                var e = t.defaults(arguments, ["threshold", "smoothing"], t.Gate);
                t.AudioNode.call(this), this.createInsOuts(1, 1), this._follower = new t.Follower(e.smoothing), this._gt = new t.GreaterThan(t.dbToGain(e.threshold)), this.input.connect(this.output), this.input.chain(this._follower, this._gt, this.output.gain)
            }, t.extend(t.Gate, t.AudioNode), t.Gate.defaults = {
                smoothing: .1,
                threshold: -40
            }, Object.defineProperty(t.Gate.prototype, "threshold", {
                get: function() {
                    return t.gainToDb(this._gt.value)
                },
                set: function(e) {
                    this._gt.value = t.dbToGain(e)
                }
            }), Object.defineProperty(t.Gate.prototype, "smoothing", {
                get: function() {
                    return this._follower.smoothing
                },
                set: function(t) {
                    this._follower.smoothing = t
                }
            }), t.Gate.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._follower.dispose(), this._gt.dispose(), this._follower = null, this._gt = null, this
            }, t.Gate
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(44), n(2)], void 0 === (r = function(t) {
            return t.FFT = function() {
                var e = t.defaults(arguments, ["size"], t.FFT);
                e.type = t.Analyser.Type.FFT, t.AudioNode.call(this), this._analyser = this.input = this.output = new t.Analyser(e)
            }, t.extend(t.FFT, t.AudioNode), t.FFT.defaults = {
                size: 1024
            }, t.FFT.prototype.getValue = function() {
                return this._analyser.getValue()
            }, Object.defineProperty(t.FFT.prototype, "size", {
                get: function() {
                    return this._analyser.size
                },
                set: function(t) {
                    this._analyser.size = t
                }
            }), t.FFT.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null
            }, t.FFT
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(59), n(3), n(2)], void 0 === (r = function(t) {
            "use strict";
            return t.EQ3 = function() {
                var e = t.defaults(arguments, ["low", "mid", "high"], t.EQ3);
                t.AudioNode.call(this), this.output = new t.Gain, this._multibandSplit = this.input = new t.MultibandSplit({
                    lowFrequency: e.lowFrequency,
                    highFrequency: e.highFrequency
                }), this._lowGain = new t.Gain(e.low, t.Type.Decibels), this._midGain = new t.Gain(e.mid, t.Type.Decibels), this._highGain = new t.Gain(e.high, t.Type.Decibels), this.low = this._lowGain.gain, this.mid = this._midGain.gain, this.high = this._highGain.gain, this.Q = this._multibandSplit.Q, this.lowFrequency = this._multibandSplit.lowFrequency, this.highFrequency = this._multibandSplit.highFrequency, this._multibandSplit.low.chain(this._lowGain, this.output), this._multibandSplit.mid.chain(this._midGain, this.output), this._multibandSplit.high.chain(this._highGain, this.output), this._readOnly(["low", "mid", "high", "lowFrequency", "highFrequency"])
            }, t.extend(t.EQ3, t.AudioNode), t.EQ3.defaults = {
                low: 0,
                mid: 0,
                high: 0,
                lowFrequency: 400,
                highFrequency: 2500
            }, t.EQ3.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable(["low", "mid", "high", "lowFrequency", "highFrequency"]), this._multibandSplit.dispose(), this._multibandSplit = null, this.lowFrequency = null, this.highFrequency = null, this._lowGain.dispose(), this._lowGain = null, this._midGain.dispose(), this._midGain = null, this._highGain.dispose(), this._highGain = null, this.low = null, this.mid = null, this.high = null, this.Q = null, this
            }, t.EQ3
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e, n) {
        var i, r;
        i = [n(0), n(95), n(91), n(2)], void 0 === (r = function(t) {
            return t.Channel = function() {
                var e = t.defaults(arguments, ["volume", "pan"], t.PanVol);
                t.AudioNode.call(this, e), this._solo = this.input = new t.Solo(e.solo), this._panVol = this.output = new t.PanVol({
                    pan: e.pan,
                    volume: e.volume,
                    mute: e.mute
                }), this.pan = this._panVol.pan, this.volume = this._panVol.volume, this._solo.connect(this._panVol), this._readOnly(["pan", "volume"])
            }, t.extend(t.Channel, t.AudioNode), t.Channel.defaults = {
                pan: 0,
                volume: 0,
                mute: !1,
                solo: !1
            }, Object.defineProperty(t.Channel.prototype, "solo", {
                get: function() {
                    return this._solo.solo
                },
                set: function(t) {
                    this._solo.solo = t
                }
            }), Object.defineProperty(t.Channel.prototype, "muted", {
                get: function() {
                    return this._solo.muted || this.mute
                }
            }), Object.defineProperty(t.Channel.prototype, "mute", {
                get: function() {
                    return this._panVol.mute
                },
                set: function(t) {
                    this._panVol.mute = t
                }
            }), t.Channel.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this), this._writable(["pan", "volume"]), this._panVol.dispose(), this._panVol = null, this.pan = null, this.volume = null, this._solo.dispose(), this._solo = null, this
            }, t.Channel
        }.apply(e, i)) || (t.exports = r)
    }, function(t, e) {
        t.exports = "13.4.9"
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        n(30), n(44), n(152), n(43), n(23), n(47), n(151), n(58), n(150), n(9), n(57), n(41), n(149), n(12), n(148), n(53), n(10), n(147), n(146), n(51), n(52), n(145), n(144), n(59), n(60), n(143), n(95), n(89), n(91), n(19), n(27), n(142), n(141), n(140), n(80), n(139), n(2), n(11), n(79), n(138), n(86), n(20), n(18), n(137), n(35), n(3), n(84), n(136), n(40), n(78), n(62), n(14), n(24), n(33), n(16), n(55), n(83), n(135), n(134), n(133), n(132), n(131), n(130), n(76), n(129), n(8), n(128), n(32), n(127), n(126), n(75), n(125), n(124), n(123), n(122), n(15), n(121), n(120), n(74), n(119), n(118), n(50), n(73), n(72), n(117), n(116), n(115), n(114), n(113), n(21), n(112), n(111), n(25), n(68), n(110), n(109), n(108), n(107), n(38), n(96), n(81), n(34), n(63), n(97), n(66), n(106), n(92), n(98), n(90), n(29), n(22), n(93), n(105), n(88), n(87), n(77), n(5), n(94), n(104), n(61), n(26), n(42), n(1), n(36), n(13), n(85), n(103), n(7), n(28), n(70), n(31), n(69), n(48), n(102), n(39), n(37), n(17), n(82), n(67), n(101), n(49), n(71), n(6), n(56), n(100), n(46), n(99), n(54), n(65), n(64), n(45), n(4), t.exports = n(0)
    }])
}, function(t, e, n) {
    var i = n(26);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var i = n(9),
        r = n(36);
    t.exports = n(8) ? function(t, e, n) {
        return i.f(t, e, r(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var i = n(3),
        r = n(14),
        o = n(17),
        s = n(37)("src"),
        a = Function.toString,
        u = ("" + a).split("toString");
    n(21).inspectSource = function(t) {
        return a.call(t)
    }, (t.exports = function(t, e, n, a) {
        var l = "function" == typeof n;
        l && (o(n, "name") || r(n, "name", e)), t[e] !== n && (l && (o(n, s) || r(n, s, t[e] ? "" + t[e] : u.join(String(e)))), t === i ? t[e] = n : a ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[s] || a.call(this)
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(5),
        o = n(26),
        s = /"/g,
        a = function(t, e, n, i) {
            var r = String(o(t)),
                a = "<" + e;
            return "" !== n && (a += " " + n + '="' + String(i).replace(s, "&quot;") + '"'), a + ">" + r + "</" + e + ">"
        };
    t.exports = function(t, e) {
        var n = {};
        n[t] = e(a), i(i.P + i.F * r(function() {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        }), "String", n)
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var i = n(50),
        r = n(26);
    t.exports = function(t) {
        return i(r(t))
    }
}, function(t, e, n) {
    var i = n(51),
        r = n(36),
        o = n(18),
        s = n(25),
        a = n(17),
        u = n(100),
        l = Object.getOwnPropertyDescriptor;
    e.f = n(8) ? l : function(t, e) {
        if (t = o(t), e = s(e, !0), u) try {
            return l(t, e)
        } catch (t) {}
        if (a(t, e)) return r(!i.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var i = n(17),
        r = n(12),
        o = n(73)("IE_PROTO"),
        s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var i = n(13);
    t.exports = function(t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(5);
    t.exports = function(t, e) {
        return !!t && i(function() {
            e ? t.call(null, function() {}, 1) : t.call(null)
        })
    }
}, function(t, e, n) {
    var i = n(6);
    t.exports = function(t, e) {
        if (!i(t)) return t;
        var n, r;
        if (e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
        if ("function" == typeof(n = t.valueOf) && !i(r = n.call(t))) return r;
        if (!e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e) {
    var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function(t, e, n) {
    var i = n(0),
        r = n(21),
        o = n(5);
    t.exports = function(t, e) {
        var n = (r.Object || {})[t] || Object[t],
            s = {};
        s[t] = e(n), i(i.S + i.F * o(function() {
            n(1)
        }), "Object", s)
    }
}, function(t, e, n) {
    var i = n(22),
        r = n(50),
        o = n(12),
        s = n(10),
        a = n(90);
    t.exports = function(t, e) {
        var n = 1 == t,
            u = 2 == t,
            l = 3 == t,
            c = 4 == t,
            f = 6 == t,
            p = 5 == t || f,
            h = e || a;
        return function(e, a, d) {
            for (var y, m, v = o(e), _ = r(v), g = i(a, d, 3), A = s(_.length), b = 0, S = n ? h(e, A) : u ? h(e, 0) : void 0; A > b; b++)
                if ((p || b in _) && (m = g(y = _[b], b, v), t))
                    if (n) S[b] = m;
                    else if (m) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return y;
                case 6:
                    return b;
                case 2:
                    S.push(y)
            } else if (c) return !1;
            return f ? -1 : l || c ? c : S
        }
    }
}, function(t, e, n) {
    "use strict";
    if (n(8)) {
        var i = n(33),
            r = n(3),
            o = n(5),
            s = n(0),
            a = n(65),
            u = n(96),
            l = n(22),
            c = n(43),
            f = n(36),
            p = n(14),
            h = n(45),
            d = n(27),
            y = n(10),
            m = n(126),
            v = n(39),
            _ = n(25),
            g = n(17),
            A = n(52),
            b = n(6),
            S = n(12),
            w = n(87),
            T = n(40),
            x = n(20),
            P = n(41).f,
            k = n(89),
            E = n(37),
            M = n(7),
            O = n(29),
            C = n(55),
            F = n(62),
            N = n(92),
            R = n(48),
            j = n(59),
            I = n(42),
            q = n(91),
            D = n(116),
            B = n(9),
            L = n(19),
            U = B.f,
            V = L.f,
            z = r.RangeError,
            W = r.TypeError,
            G = r.Uint8Array,
            Q = Array.prototype,
            H = u.ArrayBuffer,
            Y = u.DataView,
            X = O(0),
            Z = O(2),
            $ = O(3),
            K = O(4),
            J = O(5),
            tt = O(6),
            et = C(!0),
            nt = C(!1),
            it = N.values,
            rt = N.keys,
            ot = N.entries,
            st = Q.lastIndexOf,
            at = Q.reduce,
            ut = Q.reduceRight,
            lt = Q.join,
            ct = Q.sort,
            ft = Q.slice,
            pt = Q.toString,
            ht = Q.toLocaleString,
            dt = M("iterator"),
            yt = M("toStringTag"),
            mt = E("typed_constructor"),
            vt = E("def_constructor"),
            _t = a.CONSTR,
            gt = a.TYPED,
            At = a.VIEW,
            bt = O(1, function(t, e) {
                return Pt(F(t, t[vt]), e)
            }),
            St = o(function() {
                return 1 === new G(new Uint16Array([1]).buffer)[0]
            }),
            wt = !!G && !!G.prototype.set && o(function() {
                new G(1).set({})
            }),
            Tt = function(t, e) {
                var n = d(t);
                if (n < 0 || n % e) throw z("Wrong offset!");
                return n
            },
            xt = function(t) {
                if (b(t) && gt in t) return t;
                throw W(t + " is not a typed array!")
            },
            Pt = function(t, e) {
                if (!(b(t) && mt in t)) throw W("It is not a typed array constructor!");
                return new t(e)
            },
            kt = function(t, e) {
                return Et(F(t, t[vt]), e)
            },
            Et = function(t, e) {
                for (var n = 0, i = e.length, r = Pt(t, i); i > n;) r[n] = e[n++];
                return r
            },
            Mt = function(t, e, n) {
                U(t, e, {
                    get: function() {
                        return this._d[n]
                    }
                })
            },
            Ot = function(t) {
                var e, n, i, r, o, s, a = S(t),
                    u = arguments.length,
                    c = u > 1 ? arguments[1] : void 0,
                    f = void 0 !== c,
                    p = k(a);
                if (null != p && !w(p)) {
                    for (s = p.call(a), i = [], e = 0; !(o = s.next()).done; e++) i.push(o.value);
                    a = i
                }
                for (f && u > 2 && (c = l(c, arguments[2], 2)), e = 0, n = y(a.length), r = Pt(this, n); n > e; e++) r[e] = f ? c(a[e], e) : a[e];
                return r
            },
            Ct = function() {
                for (var t = 0, e = arguments.length, n = Pt(this, e); e > t;) n[t] = arguments[t++];
                return n
            },
            Ft = !!G && o(function() {
                ht.call(new G(1))
            }),
            Nt = function() {
                return ht.apply(Ft ? ft.call(xt(this)) : xt(this), arguments)
            },
            Rt = {
                copyWithin: function(t, e) {
                    return D.call(xt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(t) {
                    return K(xt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return q.apply(xt(this), arguments)
                },
                filter: function(t) {
                    return kt(this, Z(xt(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(t) {
                    return J(xt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return tt(xt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    X(xt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return nt(xt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return et(xt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(t) {
                    return lt.apply(xt(this), arguments)
                },
                lastIndexOf: function(t) {
                    return st.apply(xt(this), arguments)
                },
                map: function(t) {
                    return bt(xt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return at.apply(xt(this), arguments)
                },
                reduceRight: function(t) {
                    return ut.apply(xt(this), arguments)
                },
                reverse: function() {
                    for (var t, e = xt(this).length, n = Math.floor(e / 2), i = 0; i < n;) t = this[i], this[i++] = this[--e], this[e] = t;
                    return this
                },
                some: function(t) {
                    return $(xt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return ct.call(xt(this), t)
                },
                subarray: function(t, e) {
                    var n = xt(this),
                        i = n.length,
                        r = v(t, i);
                    return new(F(n, n[vt]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, y((void 0 === e ? i : v(e, i)) - r))
                }
            },
            jt = function(t, e) {
                return kt(this, ft.call(xt(this), t, e))
            },
            It = function(t) {
                xt(this);
                var e = Tt(arguments[1], 1),
                    n = this.length,
                    i = S(t),
                    r = y(i.length),
                    o = 0;
                if (r + e > n) throw z("Wrong length!");
                for (; o < r;) this[e + o] = i[o++]
            },
            qt = {
                entries: function() {
                    return ot.call(xt(this))
                },
                keys: function() {
                    return rt.call(xt(this))
                },
                values: function() {
                    return it.call(xt(this))
                }
            },
            Dt = function(t, e) {
                return b(t) && t[gt] && "symbol" != typeof e && e in t && String(+e) == String(e)
            },
            Bt = function(t, e) {
                return Dt(t, e = _(e, !0)) ? f(2, t[e]) : V(t, e)
            },
            Lt = function(t, e, n) {
                return !(Dt(t, e = _(e, !0)) && b(n) && g(n, "value")) || g(n, "get") || g(n, "set") || n.configurable || g(n, "writable") && !n.writable || g(n, "enumerable") && !n.enumerable ? U(t, e, n) : (t[e] = n.value, t)
            };
        _t || (L.f = Bt, B.f = Lt), s(s.S + s.F * !_t, "Object", {
            getOwnPropertyDescriptor: Bt,
            defineProperty: Lt
        }), o(function() {
            pt.call({})
        }) && (pt = ht = function() {
            return lt.call(this)
        });
        var Ut = h({}, Rt);
        h(Ut, qt), p(Ut, dt, qt.values), h(Ut, {
            slice: jt,
            set: It,
            constructor: function() {},
            toString: pt,
            toLocaleString: Nt
        }), Mt(Ut, "buffer", "b"), Mt(Ut, "byteOffset", "o"), Mt(Ut, "byteLength", "l"), Mt(Ut, "length", "e"), U(Ut, yt, {
            get: function() {
                return this[gt]
            }
        }), t.exports = function(t, e, n, u) {
            var l = t + ((u = !!u) ? "Clamped" : "") + "Array",
                f = "get" + t,
                h = "set" + t,
                d = r[l],
                v = d || {},
                _ = d && x(d),
                g = !d || !a.ABV,
                S = {},
                w = d && d.prototype,
                k = function(t, n) {
                    U(t, n, {
                        get: function() {
                            return function(t, n) {
                                var i = t._d;
                                return i.v[f](n * e + i.o, St)
                            }(this, n)
                        },
                        set: function(t) {
                            return function(t, n, i) {
                                var r = t._d;
                                u && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), r.v[h](n * e + r.o, i, St)
                            }(this, n, t)
                        },
                        enumerable: !0
                    })
                };
            g ? (d = n(function(t, n, i, r) {
                c(t, d, l, "_d");
                var o, s, a, u, f = 0,
                    h = 0;
                if (b(n)) {
                    if (!(n instanceof H || "ArrayBuffer" == (u = A(n)) || "SharedArrayBuffer" == u)) return gt in n ? Et(d, n) : Ot.call(d, n);
                    o = n, h = Tt(i, e);
                    var v = n.byteLength;
                    if (void 0 === r) {
                        if (v % e) throw z("Wrong length!");
                        if ((s = v - h) < 0) throw z("Wrong length!")
                    } else if ((s = y(r) * e) + h > v) throw z("Wrong length!");
                    a = s / e
                } else a = m(n), o = new H(s = a * e);
                for (p(t, "_d", {
                        b: o,
                        o: h,
                        l: s,
                        e: a,
                        v: new Y(o)
                    }); f < a;) k(t, f++)
            }), w = d.prototype = T(Ut), p(w, "constructor", d)) : o(function() {
                d(1)
            }) && o(function() {
                new d(-1)
            }) && j(function(t) {
                new d, new d(null), new d(1.5), new d(t)
            }, !0) || (d = n(function(t, n, i, r) {
                var o;
                return c(t, d, l), b(n) ? n instanceof H || "ArrayBuffer" == (o = A(n)) || "SharedArrayBuffer" == o ? void 0 !== r ? new v(n, Tt(i, e), r) : void 0 !== i ? new v(n, Tt(i, e)) : new v(n) : gt in n ? Et(d, n) : Ot.call(d, n) : new v(m(n))
            }), X(_ !== Function.prototype ? P(v).concat(P(_)) : P(v), function(t) {
                t in d || p(d, t, v[t])
            }), d.prototype = w, i || (w.constructor = d));
            var E = w[dt],
                M = !!E && ("values" == E.name || null == E.name),
                O = qt.values;
            p(d, mt, !0), p(w, gt, l), p(w, At, !0), p(w, vt, d), (u ? new d(1)[yt] == l : yt in w) || U(w, yt, {
                get: function() {
                    return l
                }
            }), S[l] = d, s(s.G + s.W + s.F * (d != v), S), s(s.S, l, {
                BYTES_PER_ELEMENT: e
            }), s(s.S + s.F * o(function() {
                v.of.call(d, 1)
            }), l, {
                from: Ot,
                of: Ct
            }), "BYTES_PER_ELEMENT" in w || p(w, "BYTES_PER_ELEMENT", e), s(s.P, l, Rt), I(l), s(s.P + s.F * wt, l, {
                set: It
            }), s(s.P + s.F * !M, l, qt), i || w.toString == pt || (w.toString = pt), s(s.P + s.F * o(function() {
                new d(1).slice()
            }), l, {
                slice: jt
            }), s(s.P + s.F * (o(function() {
                return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString()
            }) || !o(function() {
                w.toLocaleString.call([1, 2])
            })), l, {
                toLocaleString: Nt
            }), R[l] = M ? E : O, i || M || p(w, dt, O)
        }
    } else t.exports = function() {}
}, function(t, e, n) {
    var i = n(121),
        r = n(0),
        o = n(54)("metadata"),
        s = o.store || (o.store = new(n(124))),
        a = function(t, e, n) {
            var r = s.get(t);
            if (!r) {
                if (!n) return;
                s.set(t, r = new i)
            }
            var o = r.get(e);
            if (!o) {
                if (!n) return;
                r.set(e, o = new i)
            }
            return o
        };
    t.exports = {
        store: s,
        map: a,
        has: function(t, e, n) {
            var i = a(e, n, !1);
            return void 0 !== i && i.has(t)
        },
        get: function(t, e, n) {
            var i = a(e, n, !1);
            return void 0 === i ? void 0 : i.get(t)
        },
        set: function(t, e, n, i) {
            a(n, i, !0).set(t, e)
        },
        keys: function(t, e) {
            var n = a(t, e, !1),
                i = [];
            return n && n.forEach(function(t, e) {
                i.push(e)
            }), i
        },
        key: function(t) {
            return void 0 === t || "symbol" == typeof t ? t : String(t)
        },
        exp: function(t) {
            r(r.S, "Reflect", t)
        }
    }
}, function(t, e, n) {
    var i = n(37)("meta"),
        r = n(6),
        o = n(17),
        s = n(9).f,
        a = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        l = !n(5)(function() {
            return u(Object.preventExtensions({}))
        }),
        c = function(t) {
            s(t, i, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            })
        },
        f = t.exports = {
            KEY: i,
            NEED: !1,
            fastKey: function(t, e) {
                if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, i)) {
                    if (!u(t)) return "F";
                    if (!e) return "E";
                    c(t)
                }
                return t[i].i
            },
            getWeak: function(t, e) {
                if (!o(t, i)) {
                    if (!u(t)) return !0;
                    if (!e) return !1;
                    c(t)
                }
                return t[i].w
            },
            onFreeze: function(t) {
                return l && f.NEED && u(t) && !o(t, i) && c(t), t
            }
        }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var i = n(7)("unscopables"),
        r = Array.prototype;
    null == r[i] && n(14)(r, i, {}), t.exports = function(t) {
        r[i][t] = !0
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function(t, e, n) {
    var i = n(102),
        r = n(74);
    t.exports = Object.keys || function(t) {
        return i(t, r)
    }
}, function(t, e, n) {
    var i = n(27),
        r = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
    }
}, function(t, e, n) {
    var i = n(2),
        r = n(103),
        o = n(74),
        s = n(73)("IE_PROTO"),
        a = function() {},
        u = function() {
            var t, e = n(71)("iframe"),
                i = o.length;
            for (e.style.display = "none", n(75).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; i--;) delete u.prototype[o[i]];
            return u()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (a.prototype = i(t), n = new a, a.prototype = null, n[s] = t) : n = u(), void 0 === e ? n : r(n, e)
    }
}, function(t, e, n) {
    var i = n(102),
        r = n(74).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return i(t, r)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(3),
        r = n(9),
        o = n(8),
        s = n(7)("species");
    t.exports = function(t) {
        var e = i[t];
        o && e && !e[s] && r.f(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var i = n(22),
        r = n(114),
        o = n(87),
        s = n(2),
        a = n(10),
        u = n(89),
        l = {},
        c = {};
    (e = t.exports = function(t, e, n, f, p) {
        var h, d, y, m, v = p ? function() {
                return t
            } : u(t),
            _ = i(n, f, e ? 2 : 1),
            g = 0;
        if ("function" != typeof v) throw TypeError(t + " is not iterable!");
        if (o(v)) {
            for (h = a(t.length); h > g; g++)
                if ((m = e ? _(s(d = t[g])[0], d[1]) : _(t[g])) === l || m === c) return m
        } else
            for (y = v.call(t); !(d = y.next()).done;)
                if ((m = r(y, _, d.value, e)) === l || m === c) return m
    }).BREAK = l, e.RETURN = c
}, function(t, e, n) {
    var i = n(15);
    t.exports = function(t, e, n) {
        for (var r in e) i(t, r, e[r], n);
        return t
    }
}, function(t, e, n) {
    var i = n(9).f,
        r = n(17),
        o = n(7)("toStringTag");
    t.exports = function(t, e, n) {
        t && !r(t = n ? t : t.prototype, o) && i(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var i = n(0),
        r = n(26),
        o = n(5),
        s = n(77),
        a = "[" + s + "]",
        u = RegExp("^" + a + a + "*"),
        l = RegExp(a + a + "*$"),
        c = function(t, e, n) {
            var r = {},
                a = o(function() {
                    return !!s[t]() || "​" != "​" [t]()
                }),
                u = r[t] = a ? e(f) : s[t];
            n && (r[n] = u), i(i.P + i.F * a, "String", r)
        },
        f = c.trim = function(t, e) {
            return t = String(r(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(l, "")), t
        };
    t.exports = c
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var i = n(6);
    t.exports = function(t, e) {
        if (!i(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function(t, e, n) {
    var i = n(23);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var i = n(23),
        r = n(7)("toStringTag"),
        o = "Arguments" == i(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, s;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), r)) ? n : o ? i(e) : "Object" == (s = i(e)) && "function" == typeof e.callee ? "Arguments" : s
    }
}, , function(t, e, n) {
    var i = n(21),
        r = n(3),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: i.version,
        mode: n(33) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, n) {
    var i = n(18),
        r = n(10),
        o = n(39);
    t.exports = function(t) {
        return function(e, n, s) {
            var a, u = i(e),
                l = r(u.length),
                c = o(s, l);
            if (t && n != n) {
                for (; l > c;)
                    if ((a = u[c++]) != a) return !0
            } else
                for (; l > c; c++)
                    if ((t || c in u) && u[c] === n) return t || c || 0;
            return !t && -1
        }
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var i = n(23);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}, function(t, e, n) {
    var i = n(6),
        r = n(23),
        o = n(7)("match");
    t.exports = function(t) {
        var e;
        return i(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == r(t))
    }
}, function(t, e, n) {
    var i = n(7)("iterator"),
        r = !1;
    try {
        var o = [7][i]();
        o.return = function() {
            r = !0
        }, Array.from(o, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !r) return !1;
        var n = !1;
        try {
            var o = [7],
                s = o[i]();
            s.next = function() {
                return {
                    done: n = !0
                }
            }, o[i] = function() {
                return s
            }, t(o)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    "use strict";
    var i = n(2);
    t.exports = function() {
        var t = i(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(14),
        r = n(15),
        o = n(5),
        s = n(26),
        a = n(7);
    t.exports = function(t, e, n) {
        var u = a(t),
            l = n(s, u, "" [t]),
            c = l[0],
            f = l[1];
        o(function() {
            var e = {};
            return e[u] = function() {
                return 7
            }, 7 != "" [t](e)
        }) && (r(String.prototype, t, c), i(RegExp.prototype, u, 2 == e ? function(t, e) {
            return f.call(t, this, e)
        } : function(t) {
            return f.call(t, this)
        }))
    }
}, function(t, e, n) {
    var i = n(2),
        r = n(13),
        o = n(7)("species");
    t.exports = function(t, e) {
        var n, s = i(t).constructor;
        return void 0 === s || null == (n = i(s)[o]) ? e : r(n)
    }
}, function(t, e, n) {
    var i = n(3).navigator;
    t.exports = i && i.userAgent || ""
}, function(t, e, n) {
    "use strict";
    var i = n(3),
        r = n(0),
        o = n(15),
        s = n(45),
        a = n(32),
        u = n(44),
        l = n(43),
        c = n(6),
        f = n(5),
        p = n(59),
        h = n(46),
        d = n(78);
    t.exports = function(t, e, n, y, m, v) {
        var _ = i[t],
            g = _,
            A = m ? "set" : "add",
            b = g && g.prototype,
            S = {},
            w = function(t) {
                var e = b[t];
                o(b, t, "delete" == t ? function(t) {
                    return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return v && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if ("function" == typeof g && (v || b.forEach && !f(function() {
                (new g).entries().next()
            }))) {
            var T = new g,
                x = T[A](v ? {} : -0, 1) != T,
                P = f(function() {
                    T.has(1)
                }),
                k = p(function(t) {
                    new g(t)
                }),
                E = !v && f(function() {
                    for (var t = new g, e = 5; e--;) t[A](e, e);
                    return !t.has(-0)
                });
            k || ((g = e(function(e, n) {
                l(e, g, t);
                var i = d(new _, e, g);
                return null != n && u(n, m, i[A], i), i
            })).prototype = b, b.constructor = g), (P || E) && (w("delete"), w("has"), m && w("get")), (E || x) && w(A), v && b.clear && delete b.clear
        } else g = y.getConstructor(e, t, m, A), s(g.prototype, n), a.NEED = !0;
        return h(g, t), S[t] = g, r(r.G + r.W + r.F * (g != _), S), v || y.setStrong(g, t, m), g
    }
}, function(t, e, n) {
    for (var i, r = n(3), o = n(14), s = n(37), a = s("typed_array"), u = s("view"), l = !(!r.ArrayBuffer || !r.DataView), c = l, f = 0, p = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(i = r[p[f++]]) ? (o(i.prototype, a, !0), o(i.prototype, u, !0)) : c = !1;
    t.exports = {
        ABV: l,
        CONSTR: c,
        TYPED: a,
        VIEW: u
    }
}, function(t, e, n) {
    "use strict";
    t.exports = n(33) || !n(5)(function() {
        var t = Math.random();
        __defineSetter__.call(null, t, function() {}), delete n(3)[t]
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    t.exports = function(t) {
        i(i.S, t, {
            of: function() {
                for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
                return new this(e)
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(13),
        o = n(22),
        s = n(44);
    t.exports = function(t) {
        i(i.S, t, {
            from: function(t) {
                var e, n, i, a, u = arguments[1];
                return r(this), (e = void 0 !== u) && r(u), null == t ? new this : (n = [], e ? (i = 0, a = o(u, arguments[2], 2), s(t, !1, function(t) {
                    n.push(a(t, i++))
                })) : s(t, !1, n.push, n), new this(n))
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    ! function t() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (t) {
            console.error(t)
        }
    }(), t.exports = n(353)
}, , function(t, e, n) {
    var i = n(6),
        r = n(3).document,
        o = i(r) && i(r.createElement);
    t.exports = function(t) {
        return o ? r.createElement(t) : {}
    }
}, function(t, e, n) {
    var i = n(3),
        r = n(21),
        o = n(33),
        s = n(101),
        a = n(9).f;
    t.exports = function(t) {
        var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, {
            value: s.f(t)
        })
    }
}, function(t, e, n) {
    var i = n(54)("keys"),
        r = n(37);
    t.exports = function(t) {
        return i[t] || (i[t] = r(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var i = n(3).document;
    t.exports = i && i.documentElement
}, function(t, e, n) {
    var i = n(6),
        r = n(2),
        o = function(t, e) {
            if (r(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
            try {
                (i = n(22)(Function.call, n(19).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return o(t, n), e ? t.__proto__ = n : i(t, n), t
            }
        }({}, !1) : void 0),
        check: o
    }
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
    var i = n(6),
        r = n(76).set;
    t.exports = function(t, e, n) {
        var o, s = e.constructor;
        return s !== n && "function" == typeof s && (o = s.prototype) !== n.prototype && i(o) && r && r(t, o), t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(27),
        r = n(26);
    t.exports = function(t) {
        var e = String(r(this)),
            n = "",
            o = i(t);
        if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
        for (; o > 0;
            (o >>>= 1) && (e += e)) 1 & o && (n += e);
        return n
    }
}, function(t, e) {
    t.exports = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function(t, e) {
    var n = Math.expm1;
    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : n
}, function(t, e, n) {
    var i = n(27),
        r = n(26);
    t.exports = function(t) {
        return function(e, n) {
            var o, s, a = String(r(e)),
                u = i(n),
                l = a.length;
            return u < 0 || u >= l ? t ? "" : void 0 : (o = a.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === l || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : o : t ? a.slice(u, u + 2) : s - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(33),
        r = n(0),
        o = n(15),
        s = n(14),
        a = n(48),
        u = n(84),
        l = n(46),
        c = n(20),
        f = n(7)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = function() {
            return this
        };
    t.exports = function(t, e, n, d, y, m, v) {
        u(n, e, d);
        var _, g, A, b = function(t) {
                if (!p && t in x) return x[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            S = e + " Iterator",
            w = "values" == y,
            T = !1,
            x = t.prototype,
            P = x[f] || x["@@iterator"] || y && x[y],
            k = P || b(y),
            E = y ? w ? b("entries") : k : void 0,
            M = "Array" == e && x.entries || P;
        if (M && (A = c(M.call(new t))) !== Object.prototype && A.next && (l(A, S, !0), i || "function" == typeof A[f] || s(A, f, h)), w && P && "values" !== P.name && (T = !0, k = function() {
                return P.call(this)
            }), i && !v || !p && !T && x[f] || s(x, f, k), a[e] = k, a[S] = h, y)
            if (_ = {
                    values: w ? k : b("values"),
                    keys: m ? k : b("keys"),
                    entries: E
                }, v)
                for (g in _) g in x || o(x, g, _[g]);
            else r(r.P + r.F * (p || T), e, _);
        return _
    }
}, function(t, e, n) {
    "use strict";
    var i = n(40),
        r = n(36),
        o = n(46),
        s = {};
    n(14)(s, n(7)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = i(s, {
            next: r(1, n)
        }), o(t, e + " Iterator")
    }
}, function(t, e, n) {
    var i = n(58),
        r = n(26);
    t.exports = function(t, e, n) {
        if (i(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(r(t))
    }
}, function(t, e, n) {
    var i = n(7)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[i] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    var i = n(48),
        r = n(7)("iterator"),
        o = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || o[r] === t)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(9),
        r = n(36);
    t.exports = function(t, e, n) {
        e in t ? i.f(t, e, r(0, n)) : t[e] = n
    }
}, function(t, e, n) {
    var i = n(52),
        r = n(7)("iterator"),
        o = n(48);
    t.exports = n(21).getIteratorMethod = function(t) {
        if (null != t) return t[r] || t["@@iterator"] || o[i(t)]
    }
}, function(t, e, n) {
    var i = n(243);
    t.exports = function(t, e) {
        return new(i(t))(e)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(12),
        r = n(39),
        o = n(10);
    t.exports = function(t) {
        for (var e = i(this), n = o(e.length), s = arguments.length, a = r(s > 1 ? arguments[1] : void 0, n), u = s > 2 ? arguments[2] : void 0, l = void 0 === u ? n : r(u, n); l > a;) e[a++] = t;
        return e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(34),
        r = n(117),
        o = n(48),
        s = n(18);
    t.exports = n(83)(Array, "Array", function(t, e) {
        this._t = s(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(t, e, n) {
    var i, r, o, s = n(22),
        a = n(107),
        u = n(75),
        l = n(71),
        c = n(3),
        f = c.process,
        p = c.setImmediate,
        h = c.clearImmediate,
        d = c.MessageChannel,
        y = c.Dispatch,
        m = 0,
        v = {},
        _ = function() {
            var t = +this;
            if (v.hasOwnProperty(t)) {
                var e = v[t];
                delete v[t], e()
            }
        },
        g = function(t) {
            _.call(t.data)
        };
    p && h || (p = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return v[++m] = function() {
            a("function" == typeof t ? t : Function(t), e)
        }, i(m), m
    }, h = function(t) {
        delete v[t]
    }, "process" == n(23)(f) ? i = function(t) {
        f.nextTick(s(_, t, 1))
    } : y && y.now ? i = function(t) {
        y.now(s(_, t, 1))
    } : d ? (o = (r = new d).port2, r.port1.onmessage = g, i = s(o.postMessage, o, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (i = function(t) {
        c.postMessage(t + "", "*")
    }, c.addEventListener("message", g, !1)) : i = "onreadystatechange" in l("script") ? function(t) {
        u.appendChild(l("script")).onreadystatechange = function() {
            u.removeChild(this), _.call(t)
        }
    } : function(t) {
        setTimeout(s(_, t, 1), 0)
    }), t.exports = {
        set: p,
        clear: h
    }
}, function(t, e, n) {
    var i = n(3),
        r = n(93).set,
        o = i.MutationObserver || i.WebKitMutationObserver,
        s = i.process,
        a = i.Promise,
        u = "process" == n(23)(s);
    t.exports = function() {
        var t, e, n, l = function() {
            var i, r;
            for (u && (i = s.domain) && i.exit(); t;) {
                r = t.fn, t = t.next;
                try {
                    r()
                } catch (i) {
                    throw t ? n() : e = void 0, i
                }
            }
            e = void 0, i && i.enter()
        };
        if (u) n = function() {
            s.nextTick(l)
        };
        else if (!o || i.navigator && i.navigator.standalone)
            if (a && a.resolve) {
                var c = a.resolve(void 0);
                n = function() {
                    c.then(l)
                }
            } else n = function() {
                r.call(i, l)
            };
        else {
            var f = !0,
                p = document.createTextNode("");
            new o(l).observe(p, {
                characterData: !0
            }), n = function() {
                p.data = f = !f
            }
        }
        return function(i) {
            var r = {
                fn: i,
                next: void 0
            };
            e && (e.next = r), t || (t = r, n()), e = r
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(13);

    function r(t) {
        var e, n;
        this.promise = new t(function(t, i) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = i
        }), this.resolve = i(e), this.reject = i(n)
    }
    t.exports.f = function(t) {
        return new r(t)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(3),
        r = n(8),
        o = n(33),
        s = n(65),
        a = n(14),
        u = n(45),
        l = n(5),
        c = n(43),
        f = n(27),
        p = n(10),
        h = n(126),
        d = n(41).f,
        y = n(9).f,
        m = n(91),
        v = n(46),
        _ = "prototype",
        g = "Wrong index!",
        A = i.ArrayBuffer,
        b = i.DataView,
        S = i.Math,
        w = i.RangeError,
        T = i.Infinity,
        x = A,
        P = S.abs,
        k = S.pow,
        E = S.floor,
        M = S.log,
        O = S.LN2,
        C = r ? "_b" : "buffer",
        F = r ? "_l" : "byteLength",
        N = r ? "_o" : "byteOffset";

    function R(t, e, n) {
        var i, r, o, s = new Array(n),
            a = 8 * n - e - 1,
            u = (1 << a) - 1,
            l = u >> 1,
            c = 23 === e ? k(2, -24) - k(2, -77) : 0,
            f = 0,
            p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = P(t)) != t || t === T ? (r = t != t ? 1 : 0, i = u) : (i = E(M(t) / O), t * (o = k(2, -i)) < 1 && (i--, o *= 2), (t += i + l >= 1 ? c / o : c * k(2, 1 - l)) * o >= 2 && (i++, o /= 2), i + l >= u ? (r = 0, i = u) : i + l >= 1 ? (r = (t * o - 1) * k(2, e), i += l) : (r = t * k(2, l - 1) * k(2, e), i = 0)); e >= 8; s[f++] = 255 & r, r /= 256, e -= 8);
        for (i = i << e | r, a += e; a > 0; s[f++] = 255 & i, i /= 256, a -= 8);
        return s[--f] |= 128 * p, s
    }

    function j(t, e, n) {
        var i, r = 8 * n - e - 1,
            o = (1 << r) - 1,
            s = o >> 1,
            a = r - 7,
            u = n - 1,
            l = t[u--],
            c = 127 & l;
        for (l >>= 7; a > 0; c = 256 * c + t[u], u--, a -= 8);
        for (i = c & (1 << -a) - 1, c >>= -a, a += e; a > 0; i = 256 * i + t[u], u--, a -= 8);
        if (0 === c) c = 1 - s;
        else {
            if (c === o) return i ? NaN : l ? -T : T;
            i += k(2, e), c -= s
        }
        return (l ? -1 : 1) * i * k(2, c - e)
    }

    function I(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function q(t) {
        return [255 & t]
    }

    function D(t) {
        return [255 & t, t >> 8 & 255]
    }

    function B(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function L(t) {
        return R(t, 52, 8)
    }

    function U(t) {
        return R(t, 23, 4)
    }

    function V(t, e, n) {
        y(t[_], e, {
            get: function() {
                return this[n]
            }
        })
    }

    function z(t, e, n, i) {
        var r = h(+n);
        if (r + e > t[F]) throw w(g);
        var o = t[C]._b,
            s = r + t[N],
            a = o.slice(s, s + e);
        return i ? a : a.reverse()
    }

    function W(t, e, n, i, r, o) {
        var s = h(+n);
        if (s + e > t[F]) throw w(g);
        for (var a = t[C]._b, u = s + t[N], l = i(+r), c = 0; c < e; c++) a[u + c] = l[o ? c : e - c - 1]
    }
    if (s.ABV) {
        if (!l(function() {
                A(1)
            }) || !l(function() {
                new A(-1)
            }) || l(function() {
                return new A, new A(1.5), new A(NaN), "ArrayBuffer" != A.name
            })) {
            for (var G, Q = (A = function(t) {
                    return c(this, A), new x(h(t))
                })[_] = x[_], H = d(x), Y = 0; H.length > Y;)(G = H[Y++]) in A || a(A, G, x[G]);
            o || (Q.constructor = A)
        }
        var X = new b(new A(2)),
            Z = b[_].setInt8;
        X.setInt8(0, 2147483648), X.setInt8(1, 2147483649), !X.getInt8(0) && X.getInt8(1) || u(b[_], {
            setInt8: function(t, e) {
                Z.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                Z.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else A = function(t) {
        c(this, A, "ArrayBuffer");
        var e = h(t);
        this._b = m.call(new Array(e), 0), this[F] = e
    }, b = function(t, e, n) {
        c(this, b, "DataView"), c(t, A, "DataView");
        var i = t[F],
            r = f(e);
        if (r < 0 || r > i) throw w("Wrong offset!");
        if (r + (n = void 0 === n ? i - r : p(n)) > i) throw w("Wrong length!");
        this[C] = t, this[N] = r, this[F] = n
    }, r && (V(A, "byteLength", "_l"), V(b, "buffer", "_b"), V(b, "byteLength", "_l"), V(b, "byteOffset", "_o")), u(b[_], {
        getInt8: function(t) {
            return z(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return z(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = z(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = z(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return I(z(this, 4, t, arguments[1]))
        },
        getUint32: function(t) {
            return I(z(this, 4, t, arguments[1])) >>> 0
        },
        getFloat32: function(t) {
            return j(z(this, 4, t, arguments[1]), 23, 4)
        },
        getFloat64: function(t) {
            return j(z(this, 8, t, arguments[1]), 52, 8)
        },
        setInt8: function(t, e) {
            W(this, 1, t, q, e)
        },
        setUint8: function(t, e) {
            W(this, 1, t, q, e)
        },
        setInt16: function(t, e) {
            W(this, 2, t, D, e, arguments[2])
        },
        setUint16: function(t, e) {
            W(this, 2, t, D, e, arguments[2])
        },
        setInt32: function(t, e) {
            W(this, 4, t, B, e, arguments[2])
        },
        setUint32: function(t, e) {
            W(this, 4, t, B, e, arguments[2])
        },
        setFloat32: function(t, e) {
            W(this, 4, t, U, e, arguments[2])
        },
        setFloat64: function(t, e) {
            W(this, 8, t, L, e, arguments[2])
        }
    });
    v(A, "ArrayBuffer"), v(b, "DataView"), a(b[_], s.VIEW, !0), e.ArrayBuffer = A, e.DataView = b
}, function(t, e, n) {
    "use strict";
    (function(t, i) {
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function s(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), i.forEach(function(e) {
                    s(t, e, n[e])
                })
            }
            return t
        }

        function u(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                } catch (t) {
                    r = !0, o = t
                } finally {
                    try {
                        i || null == a.return || a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        n.d(e, "a", function() {
            return Ot
        }), n.d(e, "b", function() {
            return Mt
        });
        var l = function() {},
            c = {},
            f = {},
            p = {
                mark: l,
                measure: l
            };
        try {
            "undefined" != typeof window && (c = window), "undefined" != typeof document && (f = document), "undefined" != typeof MutationObserver && MutationObserver, "undefined" != typeof performance && (p = performance)
        } catch (t) {}
        var h = (c.navigator || {}).userAgent,
            d = void 0 === h ? "" : h,
            y = c,
            m = f,
            v = p,
            _ = (y.document, !!m.documentElement && !!m.head && "function" == typeof m.addEventListener && "function" == typeof m.createElement),
            g = (~d.indexOf("MSIE") || d.indexOf("Trident/"), "fa"),
            A = "svg-inline--fa",
            b = "data-fa-i2svg",
            S = (function() {
                try {} catch (t) {
                    return !1
                }
            }(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            w = S.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            T = (["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(S.map(function(t) {
                return "".concat(t, "x")
            })).concat(w.map(function(t) {
                return "w-".concat(t)
            })), y.FontAwesomeConfig || {});
        if (m && "function" == typeof m.querySelector) {
            [
                ["data-family-prefix", "familyPrefix"],
                ["data-replacement-class", "replacementClass"],
                ["data-auto-replace-svg", "autoReplaceSvg"],
                ["data-auto-add-css", "autoAddCss"],
                ["data-auto-a11y", "autoA11y"],
                ["data-search-pseudo-elements", "searchPseudoElements"],
                ["data-observe-mutations", "observeMutations"],
                ["data-keep-original-source", "keepOriginalSource"],
                ["data-measure-performance", "measurePerformance"],
                ["data-show-missing-icons", "showMissingIcons"]
            ].forEach(function(t) {
                var e = u(t, 2),
                    n = e[0],
                    i = e[1],
                    r = function(t) {
                        return "" === t || "false" !== t && ("true" === t || t)
                    }(function(t) {
                        var e = m.querySelector("script[" + t + "]");
                        if (e) return e.getAttribute(t)
                    }(n));
                null != r && (T[i] = r)
            })
        }
        var x = a({}, {
            familyPrefix: g,
            replacementClass: A,
            autoReplaceSvg: !0,
            autoAddCss: !0,
            autoA11y: !0,
            searchPseudoElements: !1,
            observeMutations: !0,
            keepOriginalSource: !0,
            measurePerformance: !1,
            showMissingIcons: !0
        }, T);
        x.autoReplaceSvg || (x.observeMutations = !1);
        var P = a({}, x);
        y.FontAwesomeConfig = P;
        var k = y || {};
        k.___FONT_AWESOME___ || (k.___FONT_AWESOME___ = {}), k.___FONT_AWESOME___.styles || (k.___FONT_AWESOME___.styles = {}), k.___FONT_AWESOME___.hooks || (k.___FONT_AWESOME___.hooks = {}), k.___FONT_AWESOME___.shims || (k.___FONT_AWESOME___.shims = []);
        var E = k.___FONT_AWESOME___,
            M = [];
        _ && ((m.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(m.readyState) || m.addEventListener("DOMContentLoaded", function t() {
            m.removeEventListener("DOMContentLoaded", t), 1, M.map(function(t) {
                return t()
            })
        }));
        var O, C = "pending",
            F = "settled",
            N = "fulfilled",
            R = "rejected",
            j = function() {},
            I = void 0 !== t && void 0 !== t.process && "function" == typeof t.process.emit,
            q = void 0 === i ? setTimeout : i,
            D = [];

        function B() {
            for (var t = 0; t < D.length; t++) D[t][0](D[t][1]);
            D = [], O = !1
        }

        function L(t, e) {
            D.push([t, e]), O || (O = !0, q(B, 0))
        }

        function U(t) {
            var e = t.owner,
                n = e._state,
                i = e._data,
                r = t[n],
                o = t.then;
            if ("function" == typeof r) {
                n = N;
                try {
                    i = r(i)
                } catch (t) {
                    G(o, t)
                }
            }
            V(o, i) || (n === N && z(o, i), n === R && G(o, i))
        }

        function V(t, e) {
            var n;
            try {
                if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                if (e && ("function" == typeof e || "object" === r(e))) {
                    var i = e.then;
                    if ("function" == typeof i) return i.call(e, function(i) {
                        n || (n = !0, e === i ? W(t, i) : z(t, i))
                    }, function(e) {
                        n || (n = !0, G(t, e))
                    }), !0
                }
            } catch (e) {
                return n || G(t, e), !0
            }
            return !1
        }

        function z(t, e) {
            t !== e && V(t, e) || W(t, e)
        }

        function W(t, e) {
            t._state === C && (t._state = F, t._data = e, L(H, t))
        }

        function G(t, e) {
            t._state === C && (t._state = F, t._data = e, L(Y, t))
        }

        function Q(t) {
            t._then = t._then.forEach(U)
        }

        function H(t) {
            t._state = N, Q(t)
        }

        function Y(e) {
            e._state = R, Q(e), !e._handled && I && t.process.emit("unhandledRejection", e._data, e)
        }

        function X(e) {
            t.process.emit("rejectionHandled", e)
        }

        function Z(t) {
            if ("function" != typeof t) throw new TypeError("Promise resolver " + t + " is not a function");
            if (this instanceof Z == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._then = [],
                function(t, e) {
                    function n(t) {
                        G(e, t)
                    }
                    try {
                        t(function(t) {
                            z(e, t)
                        }, n)
                    } catch (t) {
                        n(t)
                    }
                }(t, this)
        }
        Z.prototype = {
            constructor: Z,
            _state: C,
            _then: null,
            _data: void 0,
            _handled: !1,
            then: function(t, e) {
                var n = {
                    owner: this,
                    then: new this.constructor(j),
                    fulfilled: t,
                    rejected: e
                };
                return !e && !t || this._handled || (this._handled = !0, this._state === R && I && L(X, this)), this._state === N || this._state === R ? L(U, n) : this._then.push(n), n.then
            },
            catch: function(t) {
                return this.then(null, t)
            }
        }, Z.all = function(t) {
            if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.all().");
            return new Z(function(e, n) {
                var i = [],
                    r = 0;

                function o(t) {
                    return r++,
                        function(n) {
                            i[t] = n, --r || e(i)
                        }
                }
                for (var s, a = 0; a < t.length; a++)(s = t[a]) && "function" == typeof s.then ? s.then(o(a), n) : i[a] = s;
                r || e(i)
            })
        }, Z.race = function(t) {
            if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.race().");
            return new Z(function(e, n) {
                for (var i, r = 0; r < t.length; r++)(i = t[r]) && "function" == typeof i.then ? i.then(e, n) : e(i)
            })
        }, Z.resolve = function(t) {
            return t && "object" === r(t) && t.constructor === Z ? t : new Z(function(e) {
                e(t)
            })
        }, Z.reject = function(t) {
            return new Z(function(e, n) {
                n(t)
            })
        };
        "function" == typeof Promise && Promise;
        var $ = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };

        function K(t) {
            if (t && _) {
                var e = m.createElement("style");
                e.setAttribute("type", "text/css"), e.innerHTML = t;
                for (var n = m.head.childNodes, i = null, r = n.length - 1; r > -1; r--) {
                    var o = n[r],
                        s = (o.tagName || "").toUpperCase();
                    ["STYLE", "LINK"].indexOf(s) > -1 && (i = o)
                }
                return m.head.insertBefore(e, i), t
            }
        }
        var J = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        function tt() {
            for (var t = 12, e = ""; t-- > 0;) e += J[62 * Math.random() | 0];
            return e
        }

        function et(t) {
            return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function nt(t) {
            return Object.keys(t || {}).reduce(function(e, n) {
                return e + "".concat(n, ": ").concat(t[n], ";")
            }, "")
        }

        function it(t) {
            return t.size !== $.size || t.x !== $.x || t.y !== $.y || t.rotate !== $.rotate || t.flipX || t.flipY
        }

        function rt(t) {
            var e = t.transform,
                n = t.containerWidth,
                i = t.iconWidth,
                r = {
                    transform: "translate(".concat(n / 2, " 256)")
                },
                o = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
                s = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
                a = "rotate(".concat(e.rotate, " 0 0)");
            return {
                outer: r,
                inner: {
                    transform: "".concat(o, " ").concat(s, " ").concat(a)
                },
                path: {
                    transform: "translate(".concat(i / 2 * -1, " -256)")
                }
            }
        }
        var ot = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%"
        };

        function st(t) {
            var e = t.icons,
                n = e.main,
                i = e.mask,
                r = t.prefix,
                o = t.iconName,
                s = t.transform,
                u = t.symbol,
                l = t.title,
                c = t.extra,
                f = t.watchable,
                p = void 0 !== f && f,
                h = i.found ? i : n,
                d = h.width,
                y = h.height,
                m = "fa-w-".concat(Math.ceil(d / y * 16)),
                v = [P.replacementClass, o ? "".concat(P.familyPrefix, "-").concat(o) : "", m].filter(function(t) {
                    return -1 === c.classes.indexOf(t)
                }).concat(c.classes).join(" "),
                _ = {
                    children: [],
                    attributes: a({}, c.attributes, {
                        "data-prefix": r,
                        "data-icon": o,
                        class: v,
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 ".concat(d, " ").concat(y)
                    })
                };
            p && (_.attributes[b] = ""), l && _.children.push({
                tag: "title",
                attributes: {
                    id: _.attributes["aria-labelledby"] || "title-".concat(tt())
                },
                children: [l]
            });
            var g = a({}, _, {
                    prefix: r,
                    iconName: o,
                    main: n,
                    mask: i,
                    transform: s,
                    symbol: u,
                    styles: c.styles
                }),
                A = i.found && n.found ? function(t) {
                    var e = t.children,
                        n = t.attributes,
                        i = t.main,
                        r = t.mask,
                        o = t.transform,
                        s = i.width,
                        u = i.icon,
                        l = r.width,
                        c = r.icon,
                        f = rt({
                            transform: o,
                            containerWidth: l,
                            iconWidth: s
                        }),
                        p = {
                            tag: "rect",
                            attributes: a({}, ot, {
                                fill: "white"
                            })
                        },
                        h = {
                            tag: "g",
                            attributes: a({}, f.inner),
                            children: [{
                                tag: "path",
                                attributes: a({}, u.attributes, f.path, {
                                    fill: "black"
                                })
                            }]
                        },
                        d = {
                            tag: "g",
                            attributes: a({}, f.outer),
                            children: [h]
                        },
                        y = "mask-".concat(tt()),
                        m = "clip-".concat(tt()),
                        v = {
                            tag: "defs",
                            children: [{
                                tag: "clipPath",
                                attributes: {
                                    id: m
                                },
                                children: [c]
                            }, {
                                tag: "mask",
                                attributes: a({}, ot, {
                                    id: y,
                                    maskUnits: "userSpaceOnUse",
                                    maskContentUnits: "userSpaceOnUse"
                                }),
                                children: [p, d]
                            }]
                        };
                    return e.push(v, {
                        tag: "rect",
                        attributes: a({
                            fill: "currentColor",
                            "clip-path": "url(#".concat(m, ")"),
                            mask: "url(#".concat(y, ")")
                        }, ot)
                    }), {
                        children: e,
                        attributes: n
                    }
                }(g) : function(t) {
                    var e = t.children,
                        n = t.attributes,
                        i = t.main,
                        r = t.transform,
                        o = nt(t.styles);
                    if (o.length > 0 && (n.style = o), it(r)) {
                        var s = rt({
                            transform: r,
                            containerWidth: i.width,
                            iconWidth: i.width
                        });
                        e.push({
                            tag: "g",
                            attributes: a({}, s.outer),
                            children: [{
                                tag: "g",
                                attributes: a({}, s.inner),
                                children: [{
                                    tag: i.icon.tag,
                                    children: i.icon.children,
                                    attributes: a({}, i.icon.attributes, s.path)
                                }]
                            }]
                        })
                    } else e.push(i.icon);
                    return {
                        children: e,
                        attributes: n
                    }
                }(g),
                S = A.children,
                w = A.attributes;
            return g.children = S, g.attributes = w, u ? function(t) {
                var e = t.prefix,
                    n = t.iconName,
                    i = t.children,
                    r = t.attributes,
                    o = t.symbol;
                return [{
                    tag: "svg",
                    attributes: {
                        style: "display: none;"
                    },
                    children: [{
                        tag: "symbol",
                        attributes: a({}, r, {
                            id: !0 === o ? "".concat(e, "-").concat(P.familyPrefix, "-").concat(n) : o
                        }),
                        children: i
                    }]
                }]
            }(g) : function(t) {
                var e = t.children,
                    n = t.main,
                    i = t.mask,
                    r = t.attributes,
                    o = t.styles,
                    s = t.transform;
                if (it(s) && n.found && !i.found) {
                    var u = {
                        x: n.width / n.height / 2,
                        y: .5
                    };
                    r.style = nt(a({}, o, {
                        "transform-origin": "".concat(u.x + s.x / 16, "em ").concat(u.y + s.y / 16, "em")
                    }))
                }
                return [{
                    tag: "svg",
                    attributes: r,
                    children: e
                }]
            }(g)
        }
        var at = function() {},
            ut = (P.measurePerformance && v && v.mark && v.measure, function(t, e, n, i) {
                var r, o, s, a = Object.keys(t),
                    u = a.length,
                    l = void 0 !== i ? function(t, e) {
                        return function(n, i, r, o) {
                            return t.call(e, n, i, r, o)
                        }
                    }(e, i) : e;
                for (void 0 === n ? (r = 1, s = t[a[0]]) : (r = 0, s = n); r < u; r++) s = l(s, t[o = a[r]], o, t);
                return s
            });
        var lt = E.styles,
            ct = E.shims,
            ft = function() {
                var t = function(t) {
                    return ut(lt, function(e, n, i) {
                        return e[i] = ut(n, t, {}), e
                    }, {})
                };
                t(function(t, e, n) {
                    return e[3] && (t[e[3]] = n), t
                }), t(function(t, e, n) {
                    var i = e[2];
                    return t[n] = n, i.forEach(function(e) {
                        t[e] = n
                    }), t
                });
                var e = "far" in lt;
                ut(ct, function(t, n) {
                    var i = n[0],
                        r = n[1],
                        o = n[2];
                    return "far" !== r || e || (r = "fas"), t[i] = {
                        prefix: r,
                        iconName: o
                    }, t
                }, {})
            };
        ft();
        E.styles;

        function pt(t, e, n) {
            if (t && t[e] && t[e][n]) return {
                prefix: e,
                iconName: n,
                icon: t[e][n]
            }
        }

        function ht(t) {
            var e = t.tag,
                n = t.attributes,
                i = void 0 === n ? {} : n,
                r = t.children,
                o = void 0 === r ? [] : r;
            return "string" == typeof t ? et(t) : "<".concat(e, " ").concat(function(t) {
                return Object.keys(t || {}).reduce(function(e, n) {
                    return e + "".concat(n, '="').concat(et(t[n]), '" ')
                }, "").trim()
            }(i), ">").concat(o.map(ht).join(""), "</").concat(e, ">")
        }
        var dt = function(t) {
            var e = {
                size: 16,
                x: 0,
                y: 0,
                flipX: !1,
                flipY: !1,
                rotate: 0
            };
            return t ? t.toLowerCase().split(" ").reduce(function(t, e) {
                var n = e.toLowerCase().split("-"),
                    i = n[0],
                    r = n.slice(1).join("-");
                if (i && "h" === r) return t.flipX = !0, t;
                if (i && "v" === r) return t.flipY = !0, t;
                if (r = parseFloat(r), isNaN(r)) return t;
                switch (i) {
                    case "grow":
                        t.size = t.size + r;
                        break;
                    case "shrink":
                        t.size = t.size - r;
                        break;
                    case "left":
                        t.x = t.x - r;
                        break;
                    case "right":
                        t.x = t.x + r;
                        break;
                    case "up":
                        t.y = t.y - r;
                        break;
                    case "down":
                        t.y = t.y + r;
                        break;
                    case "rotate":
                        t.rotate = t.rotate + r
                }
                return t
            }, e) : e
        };

        function yt(t) {
            this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = (new Error).stack
        }
        yt.prototype = Object.create(Error.prototype), yt.prototype.constructor = yt;
        var mt = {
                fill: "currentColor"
            },
            vt = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            },
            _t = {
                tag: "path",
                attributes: a({}, mt, {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                })
            },
            gt = a({}, vt, {
                attributeName: "opacity"
            });
        a({}, mt, {
            cx: "256",
            cy: "364",
            r: "28"
        }), a({}, vt, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
        }), a({}, gt, {
            values: "1;0;1;1;0;1;"
        }), a({}, mt, {
            opacity: "1",
            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }), a({}, gt, {
            values: "1;0;0;0;0;1;"
        }), a({}, mt, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }), a({}, gt, {
            values: "0;0;1;1;0;0;"
        }), E.styles;
        E.styles;
        var At = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}';

        function bt() {
            var t = g,
                e = A,
                n = P.familyPrefix,
                i = P.replacementClass,
                r = At;
            if (n !== t || i !== e) {
                var o = new RegExp("\\.".concat(t, "\\-"), "g"),
                    s = new RegExp("\\.".concat(e), "g");
                r = r.replace(o, ".".concat(n, "-")).replace(s, ".".concat(i))
            }
            return r
        }

        function St(t) {
            return {
                found: !0,
                width: t[0],
                height: t[1],
                icon: {
                    tag: "path",
                    attributes: {
                        fill: "currentColor",
                        d: t.slice(4)[0]
                    }
                }
            }
        }

        function wt() {
            P.autoAddCss && !Et && (K(bt()), Et = !0)
        }

        function Tt(t, e) {
            return Object.defineProperty(t, "abstract", {
                get: e
            }), Object.defineProperty(t, "html", {
                get: function() {
                    return t.abstract.map(function(t) {
                        return ht(t)
                    })
                }
            }), Object.defineProperty(t, "node", {
                get: function() {
                    if (_) {
                        var e = m.createElement("div");
                        return e.innerHTML = t.html, e.children
                    }
                }
            }), t
        }

        function xt(t) {
            var e = t.prefix,
                n = void 0 === e ? "fa" : e,
                i = t.iconName;
            if (i) return pt(kt.definitions, n, i) || pt(E.styles, n, i)
        }
        var Pt, kt = new(function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.definitions = {}
                }
                var e, n, i;
                return e = t, (n = [{
                    key: "add",
                    value: function() {
                        for (var t = this, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        var r = n.reduce(this._pullDefinitions, {});
                        Object.keys(r).forEach(function(e) {
                            t.definitions[e] = a({}, t.definitions[e] || {}, r[e]),
                                function t(e, n) {
                                    var i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                                        r = void 0 !== i && i,
                                        o = Object.keys(n).reduce(function(t, e) {
                                            var i = n[e];
                                            return i.icon ? t[i.iconName] = i.icon : t[e] = i, t
                                        }, {});
                                    "function" != typeof E.hooks.addPack || r ? E.styles[e] = a({}, E.styles[e] || {}, o) : E.hooks.addPack(e, o), "fas" === e && t("fa", n)
                                }(e, r[e]), ft()
                        })
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.definitions = {}
                    }
                }, {
                    key: "_pullDefinitions",
                    value: function(t, e) {
                        var n = e.prefix && e.iconName && e.icon ? {
                            0: e
                        } : e;
                        return Object.keys(n).map(function(e) {
                            var i = n[e],
                                r = i.prefix,
                                o = i.iconName,
                                s = i.icon;
                            t[r] || (t[r] = {}), t[r][o] = s
                        }), t
                    }
                }]) && o(e.prototype, n), i && o(e, i), t
            }()),
            Et = !1,
            Mt = {
                transform: function(t) {
                    return dt(t)
                }
            },
            Ot = (Pt = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.transform,
                    i = void 0 === n ? $ : n,
                    r = e.symbol,
                    o = void 0 !== r && r,
                    s = e.mask,
                    u = void 0 === s ? null : s,
                    l = e.title,
                    c = void 0 === l ? null : l,
                    f = e.classes,
                    p = void 0 === f ? [] : f,
                    h = e.attributes,
                    d = void 0 === h ? {} : h,
                    y = e.styles,
                    m = void 0 === y ? {} : y;
                if (t) {
                    var v = t.prefix,
                        _ = t.iconName,
                        g = t.icon;
                    return Tt(a({
                        type: "icon"
                    }, t), function() {
                        return wt(), P.autoA11y && (c ? d["aria-labelledby"] = "".concat(P.replacementClass, "-title-").concat(tt()) : (d["aria-hidden"] = "true", d.focusable = "false")), st({
                            icons: {
                                main: St(g),
                                mask: u ? St(u.icon) : {
                                    found: !1,
                                    width: null,
                                    height: null,
                                    icon: {}
                                }
                            },
                            prefix: v,
                            iconName: _,
                            transform: a({}, $, i),
                            symbol: o,
                            title: c,
                            extra: {
                                attributes: d,
                                styles: m,
                                classes: p
                            }
                        })
                    })
                }
            }, function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (t || {}).icon ? t : xt(t || {}),
                    i = e.mask;
                return i && (i = (i || {}).icon ? i : xt(i || {})), Pt(n, a({}, e, {
                    mask: i
                }))
            })
    }).call(this, n(35), n(362).setImmediate)
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!Array.isArray(t)) throw new Error("shuffle expect an array as parameter.");
        e = e || {};
        var n, i, r = t,
            o = t.length,
            s = e.rng || Math.random;
        for (!0 === e.copy && (r = t.slice()); o;) n = Math.floor(s() * o), i = r[o -= 1], r[o] = r[n], r[n] = i;
        return r
    }
    i.pick = function(t, e) {
        if (!Array.isArray(t)) throw new Error("shuffle.pick() expect an array as parameter.");
        var n = (e = e || {}).rng || Math.random,
            i = e.picks || 1;
        if ("number" == typeof i && 1 !== i) {
            for (var r, o = t.length, s = t.slice(), a = []; i && o;) r = Math.floor(n() * o), a.push(s[r]), s.splice(r, 1), o -= 1, i -= 1;
            return a
        }
        return t[Math.floor(n() * t.length)]
    }, t.exports = i
}, function(t, e, n) {
    "use strict";
    var i = a(n(367)),
        r = a(n(372)),
        o = a(n(140)),
        s = a(n(137));

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    t.exports = {
        Transition: s.default,
        TransitionGroup: o.default,
        ReplaceTransition: r.default,
        CSSTransition: i.default
    }
}, function(t, e, n) {
    t.exports = !n(8) && !n(5)(function() {
        return 7 != Object.defineProperty(n(71)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    e.f = n(7)
}, function(t, e, n) {
    var i = n(17),
        r = n(18),
        o = n(55)(!1),
        s = n(73)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = r(t),
            u = 0,
            l = [];
        for (n in a) n != s && i(a, n) && l.push(n);
        for (; e.length > u;) i(a, n = e[u++]) && (~o(l, n) || l.push(n));
        return l
    }
}, function(t, e, n) {
    var i = n(9),
        r = n(2),
        o = n(38);
    t.exports = n(8) ? Object.defineProperties : function(t, e) {
        r(t);
        for (var n, s = o(e), a = s.length, u = 0; a > u;) i.f(t, n = s[u++], e[n]);
        return t
    }
}, function(t, e, n) {
    var i = n(18),
        r = n(41).f,
        o = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return s && "[object Window]" == o.call(t) ? function(t) {
            try {
                return r(t)
            } catch (t) {
                return s.slice()
            }
        }(t) : r(i(t))
    }
}, function(t, e, n) {
    "use strict";
    var i = n(38),
        r = n(56),
        o = n(51),
        s = n(12),
        a = n(50),
        u = Object.assign;
    t.exports = !u || n(5)(function() {
        var t = {},
            e = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
        return t[n] = 7, i.split("").forEach(function(t) {
            e[t] = t
        }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != i
    }) ? function(t, e) {
        for (var n = s(t), u = arguments.length, l = 1, c = r.f, f = o.f; u > l;)
            for (var p, h = a(arguments[l++]), d = c ? i(h).concat(c(h)) : i(h), y = d.length, m = 0; y > m;) f.call(h, p = d[m++]) && (n[p] = h[p]);
        return n
    } : u
}, function(t, e, n) {
    "use strict";
    var i = n(13),
        r = n(6),
        o = n(107),
        s = [].slice,
        a = {};
    t.exports = Function.bind || function(t) {
        var e = i(this),
            n = s.call(arguments, 1),
            u = function() {
                var i = n.concat(s.call(arguments));
                return this instanceof u ? function(t, e, n) {
                    if (!(e in a)) {
                        for (var i = [], r = 0; r < e; r++) i[r] = "a[" + r + "]";
                        a[e] = Function("F,a", "return new F(" + i.join(",") + ")")
                    }
                    return a[e](t, n)
                }(e, i.length, i) : o(e, i, t)
            };
        return r(e.prototype) && (u.prototype = e.prototype), u
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var i = void 0 === n;
        switch (e.length) {
            case 0:
                return i ? t() : t.call(n);
            case 1:
                return i ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var i = n(3).parseInt,
        r = n(47).trim,
        o = n(77),
        s = /^[-+]?0[xX]/;
    t.exports = 8 !== i(o + "08") || 22 !== i(o + "0x16") ? function(t, e) {
        var n = r(String(t), 3);
        return i(n, e >>> 0 || (s.test(n) ? 16 : 10))
    } : i
}, function(t, e, n) {
    var i = n(3).parseFloat,
        r = n(47).trim;
    t.exports = 1 / i(n(77) + "-0") != -1 / 0 ? function(t) {
        var e = r(String(t), 3),
            n = i(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : i
}, function(t, e, n) {
    var i = n(23);
    t.exports = function(t, e) {
        if ("number" != typeof t && "Number" != i(t)) throw TypeError(e);
        return +t
    }
}, function(t, e, n) {
    var i = n(6),
        r = Math.floor;
    t.exports = function(t) {
        return !i(t) && isFinite(t) && r(t) === t
    }
}, function(t, e) {
    t.exports = Math.log1p || function(t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
}, function(t, e, n) {
    var i = n(80),
        r = Math.pow,
        o = r(2, -52),
        s = r(2, -23),
        a = r(2, 127) * (2 - s),
        u = r(2, -126);
    t.exports = Math.fround || function(t) {
        var e, n, r = Math.abs(t),
            l = i(t);
        return r < u ? l * (r / u / s + 1 / o - 1 / o) * u * s : (n = (e = (1 + s / o) * r) - (e - r)) > a || n != n ? l * (1 / 0) : l * n
    }
}, function(t, e, n) {
    var i = n(2);
    t.exports = function(t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)), e
        }
    }
}, function(t, e, n) {
    var i = n(13),
        r = n(12),
        o = n(50),
        s = n(10);
    t.exports = function(t, e, n, a, u) {
        i(e);
        var l = r(t),
            c = o(l),
            f = s(l.length),
            p = u ? f - 1 : 0,
            h = u ? -1 : 1;
        if (n < 2)
            for (;;) {
                if (p in c) {
                    a = c[p], p += h;
                    break
                }
                if (p += h, u ? p < 0 : f <= p) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; u ? p >= 0 : f > p; p += h) p in c && (a = e(a, c[p], p, l));
        return a
    }
}, function(t, e, n) {
    "use strict";
    var i = n(12),
        r = n(39),
        o = n(10);
    t.exports = [].copyWithin || function(t, e) {
        var n = i(this),
            s = o(n.length),
            a = r(t, s),
            u = r(e, s),
            l = arguments.length > 2 ? arguments[2] : void 0,
            c = Math.min((void 0 === l ? s : r(l, s)) - u, s - a),
            f = 1;
        for (u < a && a < u + c && (f = -1, u += c - 1, a += c - 1); c-- > 0;) u in n ? n[a] = n[u] : delete n[a], a += f, u += f;
        return n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    n(8) && "g" != /./g.flags && n(9).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(60)
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, n) {
    var i = n(2),
        r = n(6),
        o = n(95);
    t.exports = function(t, e) {
        if (i(t), r(e) && e.constructor === t) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function(t, e, n) {
    "use strict";
    var i = n(122),
        r = n(49);
    t.exports = n(64)("Map", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(t) {
            var e = i.getEntry(r(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return i.def(r(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, i, !0)
}, function(t, e, n) {
    "use strict";
    var i = n(9).f,
        r = n(40),
        o = n(45),
        s = n(22),
        a = n(43),
        u = n(44),
        l = n(83),
        c = n(117),
        f = n(42),
        p = n(8),
        h = n(32).fastKey,
        d = n(49),
        y = p ? "_s" : "size",
        m = function(t, e) {
            var n, i = h(e);
            if ("F" !== i) return t._i[i];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function(t, e, n, l) {
            var c = t(function(t, i) {
                a(t, c, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[y] = 0, null != i && u(i, n, t[l], t)
            });
            return o(c.prototype, {
                clear: function() {
                    for (var t = d(this, e), n = t._i, i = t._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                    t._f = t._l = void 0, t[y] = 0
                },
                delete: function(t) {
                    var n = d(this, e),
                        i = m(n, t);
                    if (i) {
                        var r = i.n,
                            o = i.p;
                        delete n._i[i.i], i.r = !0, o && (o.n = r), r && (r.p = o), n._f == i && (n._f = r), n._l == i && (n._l = o), n[y]--
                    }
                    return !!i
                },
                forEach: function(t) {
                    d(this, e);
                    for (var n, i = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (i(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(t) {
                    return !!m(d(this, e), t)
                }
            }), p && i(c.prototype, "size", {
                get: function() {
                    return d(this, e)[y]
                }
            }), c
        },
        def: function(t, e, n) {
            var i, r, o = m(t, e);
            return o ? o.v = n : (t._l = o = {
                i: r = h(e, !0),
                k: e,
                v: n,
                p: i = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = o), i && (i.n = o), t[y]++, "F" !== r && (t._i[r] = o)), t
        },
        getEntry: m,
        setStrong: function(t, e, n) {
            l(t, e, function(t, n) {
                this._t = d(t, e), this._k = n, this._l = void 0
            }, function() {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? c(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, c(1))
            }, n ? "entries" : "values", !n, !0), f(e)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(122),
        r = n(49);
    t.exports = n(64)("Set", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(t) {
            return i.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, i)
}, function(t, e, n) {
    "use strict";
    var i, r = n(29)(0),
        o = n(15),
        s = n(32),
        a = n(105),
        u = n(125),
        l = n(6),
        c = n(5),
        f = n(49),
        p = s.getWeak,
        h = Object.isExtensible,
        d = u.ufstore,
        y = {},
        m = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        v = {
            get: function(t) {
                if (l(t)) {
                    var e = p(t);
                    return !0 === e ? d(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return u.def(f(this, "WeakMap"), t, e)
            }
        },
        _ = t.exports = n(64)("WeakMap", m, v, u, !0, !0);
    c(function() {
        return 7 != (new _).set((Object.freeze || Object)(y), 7).get(y)
    }) && (a((i = u.getConstructor(m, "WeakMap")).prototype, v), s.NEED = !0, r(["delete", "has", "get", "set"], function(t) {
        var e = _.prototype,
            n = e[t];
        o(e, t, function(e, r) {
            if (l(e) && !h(e)) {
                this._f || (this._f = new i);
                var o = this._f[t](e, r);
                return "set" == t ? this : o
            }
            return n.call(this, e, r)
        })
    }))
}, function(t, e, n) {
    "use strict";
    var i = n(45),
        r = n(32).getWeak,
        o = n(2),
        s = n(6),
        a = n(43),
        u = n(44),
        l = n(29),
        c = n(17),
        f = n(49),
        p = l(5),
        h = l(6),
        d = 0,
        y = function(t) {
            return t._l || (t._l = new m)
        },
        m = function() {
            this.a = []
        },
        v = function(t, e) {
            return p(t.a, function(t) {
                return t[0] === e
            })
        };
    m.prototype = {
        get: function(t) {
            var e = v(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!v(this, t)
        },
        set: function(t, e) {
            var n = v(this, t);
            n ? n[1] = e : this.a.push([t, e])
        },
        delete: function(t) {
            var e = h(this.a, function(e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function(t, e, n, o) {
            var l = t(function(t, i) {
                a(t, l, e, "_i"), t._t = e, t._i = d++, t._l = void 0, null != i && u(i, n, t[o], t)
            });
            return i(l.prototype, {
                delete: function(t) {
                    if (!s(t)) return !1;
                    var n = r(t);
                    return !0 === n ? y(f(this, e)).delete(t) : n && c(n, this._i) && delete n[this._i]
                },
                has: function(t) {
                    if (!s(t)) return !1;
                    var n = r(t);
                    return !0 === n ? y(f(this, e)).has(t) : n && c(n, this._i)
                }
            }), l
        },
        def: function(t, e, n) {
            var i = r(o(e), !0);
            return !0 === i ? y(t).set(e, n) : i[t._i] = n, t
        },
        ufstore: y
    }
}, function(t, e, n) {
    var i = n(27),
        r = n(10);
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = i(t),
            n = r(e);
        if (e !== n) throw RangeError("Wrong length!");
        return n
    }
}, function(t, e, n) {
    var i = n(41),
        r = n(56),
        o = n(2),
        s = n(3).Reflect;
    t.exports = s && s.ownKeys || function(t) {
        var e = i.f(o(t)),
            n = r.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(57),
        r = n(6),
        o = n(10),
        s = n(22),
        a = n(7)("isConcatSpreadable");
    t.exports = function t(e, n, u, l, c, f, p, h) {
        for (var d, y, m = c, v = 0, _ = !!p && s(p, h, 3); v < l;) {
            if (v in u) {
                if (d = _ ? _(u[v], v, n) : u[v], y = !1, r(d) && (y = void 0 !== (y = d[a]) ? !!y : i(d)), y && f > 0) m = t(e, n, d, o(d.length), m, f - 1) - 1;
                else {
                    if (m >= 9007199254740991) throw TypeError();
                    e[m] = d
                }
                m++
            }
            v++
        }
        return m
    }
}, function(t, e, n) {
    var i = n(10),
        r = n(79),
        o = n(26);
    t.exports = function(t, e, n, s) {
        var a = String(o(t)),
            u = a.length,
            l = void 0 === n ? " " : String(n),
            c = i(e);
        if (c <= u || "" == l) return a;
        var f = c - u,
            p = r.call(l, Math.ceil(f / l.length));
        return p.length > f && (p = p.slice(0, f)), s ? p + a : a + p
    }
}, function(t, e, n) {
    var i = n(38),
        r = n(18),
        o = n(51).f;
    t.exports = function(t) {
        return function(e) {
            for (var n, s = r(e), a = i(s), u = a.length, l = 0, c = []; u > l;) o.call(s, n = a[l++]) && c.push(t ? [n, s[n]] : s[n]);
            return c
        }
    }
}, function(t, e, n) {
    var i = n(52),
        r = n(132);
    t.exports = function(t) {
        return function() {
            if (i(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return r(this)
        }
    }
}, function(t, e, n) {
    var i = n(44);
    t.exports = function(t, e) {
        var n = [];
        return i(t, !1, n.push, n, e), n
    }
}, function(t, e) {
    t.exports = Math.scale || function(t, e, n, i, r) {
        return 0 === arguments.length || t != t || e != e || n != n || i != i || r != r ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - e) * (r - i) / (n - e) + i
    }
}, function(t, e, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var i = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    t.exports = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                }).join("")) return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                i[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var n, s, a = function(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }(t), u = 1; u < arguments.length; u++) {
            for (var l in n = Object(arguments[u])) r.call(n, l) && (a[l] = n[l]);
            if (i) {
                s = i(n);
                for (var c = 0; c < s.length; c++) o.call(n, s[c]) && (a[s[c]] = n[s[c]])
            }
        }
        return a
    }
}, function(t, e) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
        var i = new Uint8Array(16);
        t.exports = function() {
            return n(i), i
        }
    } else {
        var r = new Array(16);
        t.exports = function() {
            for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), r[e] = t >>> ((3 & e) << 3) & 255;
            return r
        }
    }
}, function(t, e) {
    for (var n = [], i = 0; i < 256; ++i) n[i] = (i + 256).toString(16).substr(1);
    t.exports = function(t, e) {
        var i = e || 0,
            r = n;
        return [r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]]].join("")
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.default = e.EXITING = e.ENTERED = e.ENTERING = e.EXITED = e.UNMOUNTED = void 0;
    var i = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                        i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                    } return e.default = t, e
        }(n(4)),
        r = a(n(1)),
        o = a(n(69)),
        s = n(138);
    n(139);

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var u = "unmounted";
    e.UNMOUNTED = u;
    var l = "exited";
    e.EXITED = l;
    var c = "entering";
    e.ENTERING = c;
    var f = "entered";
    e.ENTERED = f;
    e.EXITING = "exiting";
    var p = function(t) {
        var e, n;

        function i(e, n) {
            var i;
            i = t.call(this, e, n) || this;
            var r, o = n.transitionGroup,
                s = o && !o.isMounting ? e.enter : e.appear;
            return i.appearStatus = null, e.in ? s ? (r = l, i.appearStatus = c) : r = f : r = e.unmountOnExit || e.mountOnEnter ? u : l, i.state = {
                status: r
            }, i.nextCallback = null, i
        }
        n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
        var s = i.prototype;
        return s.getChildContext = function() {
            return {
                transitionGroup: null
            }
        }, i.getDerivedStateFromProps = function(t, e) {
            return t.in && e.status === u ? {
                status: l
            } : null
        }, s.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, s.componentDidUpdate = function(t) {
            var e = null;
            if (t !== this.props) {
                var n = this.state.status;
                this.props.in ? n !== c && n !== f && (e = c) : n !== c && n !== f || (e = "exiting")
            }
            this.updateStatus(!1, e)
        }, s.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, s.getTimeouts = function() {
            var t, e, n, i = this.props.timeout;
            return t = e = n = i, null != i && "number" != typeof i && (t = i.exit, e = i.enter, n = void 0 !== i.appear ? i.appear : e), {
                exit: t,
                enter: e,
                appear: n
            }
        }, s.updateStatus = function(t, e) {
            if (void 0 === t && (t = !1), null !== e) {
                this.cancelNextCallback();
                var n = o.default.findDOMNode(this);
                e === c ? this.performEnter(n, t) : this.performExit(n)
            } else this.props.unmountOnExit && this.state.status === l && this.setState({
                status: u
            })
        }, s.performEnter = function(t, e) {
            var n = this,
                i = this.props.enter,
                r = this.context.transitionGroup ? this.context.transitionGroup.isMounting : e,
                o = this.getTimeouts(),
                s = r ? o.appear : o.enter;
            e || i ? (this.props.onEnter(t, r), this.safeSetState({
                status: c
            }, function() {
                n.props.onEntering(t, r), n.onTransitionEnd(t, s, function() {
                    n.safeSetState({
                        status: f
                    }, function() {
                        n.props.onEntered(t, r)
                    })
                })
            })) : this.safeSetState({
                status: f
            }, function() {
                n.props.onEntered(t)
            })
        }, s.performExit = function(t) {
            var e = this,
                n = this.props.exit,
                i = this.getTimeouts();
            n ? (this.props.onExit(t), this.safeSetState({
                status: "exiting"
            }, function() {
                e.props.onExiting(t), e.onTransitionEnd(t, i.exit, function() {
                    e.safeSetState({
                        status: l
                    }, function() {
                        e.props.onExited(t)
                    })
                })
            })) : this.safeSetState({
                status: l
            }, function() {
                e.props.onExited(t)
            })
        }, s.cancelNextCallback = function() {
            null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
        }, s.safeSetState = function(t, e) {
            e = this.setNextCallback(e), this.setState(t, e)
        }, s.setNextCallback = function(t) {
            var e = this,
                n = !0;
            return this.nextCallback = function(i) {
                n && (n = !1, e.nextCallback = null, t(i))
            }, this.nextCallback.cancel = function() {
                n = !1
            }, this.nextCallback
        }, s.onTransitionEnd = function(t, e, n) {
            this.setNextCallback(n);
            var i = null == e && !this.props.addEndListener;
            t && !i ? (this.props.addEndListener && this.props.addEndListener(t, this.nextCallback), null != e && setTimeout(this.nextCallback, e)) : setTimeout(this.nextCallback, 0)
        }, s.render = function() {
            var t = this.state.status;
            if (t === u) return null;
            var e = this.props,
                n = e.children,
                i = function(t, e) {
                    if (null == t) return {};
                    var n, i, r = {},
                        o = Object.keys(t);
                    for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
                    return r
                }(e, ["children"]);
            if (delete i.in, delete i.mountOnEnter, delete i.unmountOnExit, delete i.appear, delete i.enter, delete i.exit, delete i.timeout, delete i.addEndListener, delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, "function" == typeof n) return n(t, i);
            var o = r.default.Children.only(n);
            return r.default.cloneElement(o, i)
        }, i
    }(r.default.Component);

    function h() {}
    p.contextTypes = {
        transitionGroup: i.object
    }, p.childContextTypes = {
        transitionGroup: function() {}
    }, p.propTypes = {}, p.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: h,
        onEntering: h,
        onEntered: h,
        onExit: h,
        onExiting: h,
        onExited: h
    }, p.UNMOUNTED = 0, p.EXITED = 1, p.ENTERING = 2, p.ENTERED = 3, p.EXITING = 4;
    var d = (0, s.polyfill)(p);
    e.default = d
}, function(t, e, n) {
    "use strict";

    function i() {
        var t = this.constructor.getDerivedStateFromProps(this.props, this.state);
        null != t && this.setState(t)
    }

    function r(t) {
        this.setState(function(e) {
            var n = this.constructor.getDerivedStateFromProps(t, e);
            return null != n ? n : null
        }.bind(this))
    }

    function o(t, e) {
        try {
            var n = this.props,
                i = this.state;
            this.props = t, this.state = e, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, i)
        } finally {
            this.props = n, this.state = i
        }
    }

    function s(t) {
        var e = t.prototype;
        if (!e || !e.isReactComponent) throw new Error("Can only polyfill class components");
        if ("function" != typeof t.getDerivedStateFromProps && "function" != typeof e.getSnapshotBeforeUpdate) return t;
        var n = null,
            s = null,
            a = null;
        if ("function" == typeof e.componentWillMount ? n = "componentWillMount" : "function" == typeof e.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof e.componentWillReceiveProps ? s = "componentWillReceiveProps" : "function" == typeof e.UNSAFE_componentWillReceiveProps && (s = "UNSAFE_componentWillReceiveProps"), "function" == typeof e.componentWillUpdate ? a = "componentWillUpdate" : "function" == typeof e.UNSAFE_componentWillUpdate && (a = "UNSAFE_componentWillUpdate"), null !== n || null !== s || null !== a) {
            var u = t.displayName || t.name,
                l = "function" == typeof t.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + u + " uses " + l + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== s ? "\n  " + s : "") + (null !== a ? "\n  " + a : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
        }
        if ("function" == typeof t.getDerivedStateFromProps && (e.componentWillMount = i, e.componentWillReceiveProps = r), "function" == typeof e.getSnapshotBeforeUpdate) {
            if ("function" != typeof e.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
            e.componentWillUpdate = o;
            var c = e.componentDidUpdate;
            e.componentDidUpdate = function(t, e, n) {
                var i = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                c.call(this, t, e, i)
            }
        }
        return t
    }
    n.r(e), n.d(e, "polyfill", function() {
        return s
    }), i.__suppressDeprecationWarning = !0, r.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.classNamesShape = e.timeoutsShape = void 0;
    var i;
    (i = n(4)) && i.__esModule;
    e.timeoutsShape = null;
    e.classNamesShape = null
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.default = void 0;
    var i = a(n(4)),
        r = a(n(1)),
        o = n(138),
        s = n(373);

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function u() {
        return (u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }

    function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    var c = Object.values || function(t) {
            return Object.keys(t).map(function(e) {
                return t[e]
            })
        },
        f = function(t) {
            var e, n;

            function i(e, n) {
                var i, r = (i = t.call(this, e, n) || this).handleExited.bind(l(l(i)));
                return i.state = {
                    handleExited: r,
                    firstRender: !0
                }, i
            }
            n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
            var o = i.prototype;
            return o.getChildContext = function() {
                return {
                    transitionGroup: {
                        isMounting: !this.appeared
                    }
                }
            }, o.componentDidMount = function() {
                this.appeared = !0, this.mounted = !0
            }, o.componentWillUnmount = function() {
                this.mounted = !1
            }, i.getDerivedStateFromProps = function(t, e) {
                var n = e.children,
                    i = e.handleExited;
                return {
                    children: e.firstRender ? (0, s.getInitialChildMapping)(t, i) : (0, s.getNextChildMapping)(t, n, i),
                    firstRender: !1
                }
            }, o.handleExited = function(t, e) {
                var n = (0, s.getChildMapping)(this.props.children);
                t.key in n || (t.props.onExited && t.props.onExited(e), this.mounted && this.setState(function(e) {
                    var n = u({}, e.children);
                    return delete n[t.key], {
                        children: n
                    }
                }))
            }, o.render = function() {
                var t = this.props,
                    e = t.component,
                    n = t.childFactory,
                    i = function(t, e) {
                        if (null == t) return {};
                        var n, i, r = {},
                            o = Object.keys(t);
                        for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
                        return r
                    }(t, ["component", "childFactory"]),
                    o = c(this.state.children).map(n);
                return delete i.appear, delete i.enter, delete i.exit, null === e ? o : r.default.createElement(e, i, o)
            }, i
        }(r.default.Component);
    f.childContextTypes = {
        transitionGroup: i.default.object.isRequired
    }, f.propTypes = {}, f.defaultProps = {
        component: "div",
        childFactory: function(t) {
            return t
        }
    };
    var p = (0, o.polyfill)(f);
    e.default = p, t.exports = e.default
}, function(t, e) {
    function n() {
        return "serviceWorker" in navigator && ("https:" === window.location.protocol || "localhost" === window.location.hostname || 0 === window.location.hostname.indexOf("127."))
    }

    function i() {
        n() && navigator.serviceWorker.getRegistration().then(function(t) {
            if (t) return t.update()
        })
    }
    setInterval(i, 36e5), e.install = function(t) {
        t || (t = {})
    }, e.applyUpdate = function(t, e) {}, e.update = i
}, function(t, e, n) {
    var i = n(359),
        r = n(360),
        o = r;
    o.v1 = i, o.v4 = r, t.exports = o
}, function(t, e, n) {
    const {
        webm: i,
        mp4: r
    } = n(361), o = "undefined" != typeof navigator && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream;
    t.exports = class {
        constructor() {
            o ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("muted", ""), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", i), this._addSourceToVideo(this.noSleepVideo, "mp4", r), this.noSleepVideo.addEventListener("loadedmetadata", () => {
                this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () => {
                    this.noSleepVideo.currentTime > .5 && (this.noSleepVideo.currentTime = Math.random())
                })
            }))
        }
        _addSourceToVideo(t, e, n) {
            var i = document.createElement("source");
            i.src = n, i.type = `video/${e}`, t.appendChild(i)
        }
        enable() {
            o ? (this.disable(), console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "), this.noSleepTimer = window.setInterval(() => {
                document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0))
            }, 15e3)) : this.noSleepVideo.play()
        }
        disable() {
            o ? this.noSleepTimer && (console.warn("\n          NoSleep now disabled for older iOS devices.\n        "), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause()
        }
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", function() {
            return g
        });
        var i = n(97),
            r = n(4),
            o = n.n(r),
            s = n(1),
            a = n.n(s);

        function u(t) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function l(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), i.forEach(function(e) {
                    l(t, e, n[e])
                })
            }
            return t
        }

        function f(t, e) {
            if (null == t) return {};
            var n, i, r = function(t, e) {
                if (null == t) return {};
                var n, i, r = {},
                    o = Object.keys(t);
                for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
                return r
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
            }
            return r
        }

        function p(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var h = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
        var d, y = (function(t) {
            var e, n, i, r, o, s, a, u, l, c, f, p, d, y, m;
            e = h, n = function(t, e, i) {
                if (!u(e) || c(e) || f(e) || p(e) || a(e)) return e;
                var r, o = 0,
                    s = 0;
                if (l(e))
                    for (r = [], s = e.length; o < s; o++) r.push(n(t, e[o], i));
                else
                    for (var h in r = {}, e) Object.prototype.hasOwnProperty.call(e, h) && (r[t(h, i)] = n(t, e[h], i));
                return r
            }, i = function(t) {
                return d(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, function(t, e) {
                    return e ? e.toUpperCase() : ""
                })).substr(0, 1).toLowerCase() + t.substr(1)
            }, r = function(t) {
                var e = i(t);
                return e.substr(0, 1).toUpperCase() + e.substr(1)
            }, o = function(t, e) {
                return function(t, e) {
                    var n = (e = e || {}).separator || "_",
                        i = e.split || /(?=[A-Z])/;
                    return t.split(i).join(n)
                }(t, e).toLowerCase()
            }, s = Object.prototype.toString, a = function(t) {
                return "function" == typeof t
            }, u = function(t) {
                return t === Object(t)
            }, l = function(t) {
                return "[object Array]" == s.call(t)
            }, c = function(t) {
                return "[object Date]" == s.call(t)
            }, f = function(t) {
                return "[object RegExp]" == s.call(t)
            }, p = function(t) {
                return "[object Boolean]" == s.call(t)
            }, d = function(t) {
                return (t -= 0) == t
            }, y = function(t, e) {
                var n = e && "process" in e ? e.process : e;
                return "function" != typeof n ? t : function(e, i) {
                    return n(e, t, i)
                }
            }, m = {
                camelize: i,
                decamelize: o,
                pascalize: r,
                depascalize: o,
                camelizeKeys: function(t, e) {
                    return n(y(i, e), t)
                },
                decamelizeKeys: function(t, e) {
                    return n(y(o, e), t, e)
                },
                pascalizeKeys: function(t, e) {
                    return n(y(r, e), t)
                },
                depascalizeKeys: function() {
                    return this.decamelizeKeys.apply(this, arguments)
                }
            }, t.exports ? t.exports = m : e.humps = m
        }(d = {
            exports: {}
        }, d.exports), d.exports);
        var m = !1;
        try {
            m = !0
        } catch (t) {}

        function v(t, e) {
            return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? l({}, t, e) : {}
        }

        function _(t) {
            return null === t ? null : "object" === u(t) && t.prefix && t.iconName ? t : Array.isArray(t) && 2 === t.length ? {
                prefix: t[0],
                iconName: t[1]
            } : "string" == typeof t ? {
                prefix: "fas",
                iconName: t
            } : void 0
        }

        function g(t) {
            var e = t.icon,
                n = t.mask,
                r = t.symbol,
                o = t.className,
                s = t.title,
                a = _(e),
                u = v("classes", [].concat(p(function(t) {
                    var e, n = (l(e = {
                        "fa-spin": t.spin,
                        "fa-pulse": t.pulse,
                        "fa-fw": t.fixedWidth,
                        "fa-inverse": t.inverse,
                        "fa-border": t.border,
                        "fa-li": t.listItem,
                        "fa-flip-horizontal": "horizontal" === t.flip || "both" === t.flip,
                        "fa-flip-vertical": "vertical" === t.flip || "both" === t.flip
                    }, "fa-".concat(t.size), null !== t.size), l(e, "fa-rotate-".concat(t.rotation), null !== t.rotation), l(e, "fa-pull-".concat(t.pull), null !== t.pull), e);
                    return Object.keys(n).map(function(t) {
                        return n[t] ? t : null
                    }).filter(function(t) {
                        return t
                    })
                }(t)), p(o.split(" ")))),
                f = v("transform", "string" == typeof t.transform ? i.b.transform(t.transform) : t.transform),
                h = v("mask", _(n)),
                d = Object(i.a)(a, c({}, u, f, h, {
                    symbol: r,
                    title: s
                }));
            if (!d) return function() {
                var t;
                !m && console && "function" == typeof console.error && (t = console).error.apply(t, arguments)
            }("Could not find icon", a), null;
            var y = d.abstract,
                b = {};
            return Object.keys(t).forEach(function(e) {
                g.defaultProps.hasOwnProperty(e) || (b[e] = t[e])
            }), A(y[0], b)
        }
        g.displayName = "FontAwesomeIcon", g.propTypes = {
            border: o.a.bool,
            className: o.a.string,
            mask: o.a.oneOfType([o.a.object, o.a.array, o.a.string]),
            fixedWidth: o.a.bool,
            inverse: o.a.bool,
            flip: o.a.oneOf(["horizontal", "vertical", "both"]),
            icon: o.a.oneOfType([o.a.object, o.a.array, o.a.string]),
            listItem: o.a.bool,
            pull: o.a.oneOf(["right", "left"]),
            pulse: o.a.bool,
            rotation: o.a.oneOf([90, 180, 270]),
            size: o.a.oneOf(["lg", "xs", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
            spin: o.a.bool,
            symbol: o.a.oneOfType([o.a.bool, o.a.string]),
            title: o.a.string,
            transform: o.a.oneOfType([o.a.string, o.a.object])
        }, g.defaultProps = {
            border: !1,
            className: "",
            mask: null,
            fixedWidth: !1,
            inverse: !1,
            flip: null,
            icon: null,
            listItem: !1,
            pull: null,
            pulse: !1,
            rotation: null,
            size: null,
            spin: !1,
            symbol: !1,
            title: "",
            transform: null
        };
        var A = function t(e, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("string" == typeof n) return n;
            var r = (n.children || []).map(function(n) {
                    return t(e, n)
                }),
                o = Object.keys(n.attributes || {}).reduce(function(t, e) {
                    var i = n.attributes[e];
                    switch (e) {
                        case "class":
                            t.attrs.className = i, delete n.attributes.class;
                            break;
                        case "style":
                            t.attrs.style = i.split(";").map(function(t) {
                                return t.trim()
                            }).filter(function(t) {
                                return t
                            }).reduce(function(t, e) {
                                var n, i = e.indexOf(":"),
                                    r = y.camelize(e.slice(0, i)),
                                    o = e.slice(i + 1).trim();
                                return r.startsWith("webkit") ? t[(n = r, n.charAt(0).toUpperCase() + n.slice(1))] = o : t[r] = o, t
                            }, {});
                            break;
                        default:
                            0 === e.indexOf("aria-") || 0 === e.indexOf("data-") ? t.attrs[e.toLowerCase()] = i : t.attrs[y.camelize(e)] = i
                    }
                    return t
                }, {
                    attrs: {}
                }),
                s = i.style,
                a = void 0 === s ? {} : s,
                u = f(i, ["style"]);
            return o.attrs.style = c({}, o.attrs.style, a), e.apply(void 0, [n.tag, c({}, o.attrs, u)].concat(p(r)))
        }.bind(null, a.a.createElement)
    }).call(this, n(35))
}, function(t, e, n) {
    var i, r, o;
    /**
     *  StartAudioContext.js
     *  @author Yotam Mann
     *  @license http://opensource.org/licenses/MIT MIT License
     *  @copyright 2016 Yotam Mann
     */
    r = [], void 0 === (o = "function" == typeof(i = function() {
        var t = function(t, e) {
            this._dragged = !1, this._element = t, this._bindedMove = this._moved.bind(this), this._bindedEnd = this._ended.bind(this, e), t.addEventListener("touchstart", this._bindedEnd), t.addEventListener("touchmove", this._bindedMove), t.addEventListener("touchend", this._bindedEnd), t.addEventListener("mouseup", this._bindedEnd)
        };

        function e(t) {
            return "running" === t.state
        }
        return t.prototype._moved = function(t) {
                this._dragged = !0
            }, t.prototype._ended = function(t) {
                this._dragged || function(t) {
                    var e = t.createBuffer(1, 1, t.sampleRate),
                        n = t.createBufferSource();
                    n.buffer = e, n.connect(t.destination), n.start(0), t.resume && t.resume()
                }(t), this._dragged = !1
            }, t.prototype.dispose = function() {
                this._element.removeEventListener("touchstart", this._bindedEnd), this._element.removeEventListener("touchmove", this._bindedMove), this._element.removeEventListener("touchend", this._bindedEnd), this._element.removeEventListener("mouseup", this._bindedEnd), this._bindedMove = null, this._bindedEnd = null, this._element = null
            },
            function(n, i, r) {
                var o = new Promise(function(t) {
                        ! function(t, n) {
                            e(t) ? n() : function i() {
                                e(t) ? n() : (requestAnimationFrame(i), t.resume && t.resume())
                            }()
                        }(n, t)
                    }),
                    s = [];
                return i || (i = document.body),
                    function e(n, i, r) {
                        if (Array.isArray(n) || NodeList && n instanceof NodeList)
                            for (var o = 0; o < n.length; o++) e(n[o], i, r);
                        else if ("string" == typeof n) e(document.querySelectorAll(n), i, r);
                        else if (n.jquery && "function" == typeof n.toArray) e(n.toArray(), i, r);
                        else if (Element && n instanceof Element) {
                            var s = new t(n, r);
                            i.push(s)
                        }
                    }(i, s, n), o.then(function() {
                        for (var t = 0; t < s.length; t++) s[t].dispose();
                        s = null, r && r()
                    }), o
            }
    }) ? i.apply(e, r) : i) || (t.exports = o)
}, function(t, e, n) {
    t.exports = n.p + ""
}, function(t) {
    t.exports = {
        chromatic: ["1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M"],
        lydian: ["1P 2M 3M 4A 5P 6M 7M"],
        major: ["1P 2M 3M 4P 5P 6M 7M", ["ionian"]],
        mixolydian: ["1P 2M 3M 4P 5P 6M 7m", ["dominant"]],
        dorian: ["1P 2M 3m 4P 5P 6M 7m"],
        aeolian: ["1P 2M 3m 4P 5P 6m 7m", ["minor"]],
        phrygian: ["1P 2m 3m 4P 5P 6m 7m"],
        locrian: ["1P 2m 3m 4P 5d 6m 7m"],
        "melodic minor": ["1P 2M 3m 4P 5P 6M 7M"],
        "melodic minor second mode": ["1P 2m 3m 4P 5P 6M 7m"],
        "lydian augmented": ["1P 2M 3M 4A 5A 6M 7M"],
        "lydian dominant": ["1P 2M 3M 4A 5P 6M 7m", ["lydian b7"]],
        "melodic minor fifth mode": ["1P 2M 3M 4P 5P 6m 7m", ["hindu", "mixolydian b6M"]],
        "locrian #2": ["1P 2M 3m 4P 5d 6m 7m", ["half-diminished"]],
        altered: ["1P 2m 3m 3M 5d 6m 7m", ["super locrian", "diminished whole tone", "pomeroy"]],
        "harmonic minor": ["1P 2M 3m 4P 5P 6m 7M"],
        "phrygian dominant": ["1P 2m 3M 4P 5P 6m 7m", ["spanish", "phrygian major"]],
        "half-whole diminished": ["1P 2m 3m 3M 4A 5P 6M 7m", ["dominant diminished"]],
        diminished: ["1P 2M 3m 4P 5d 6m 6M 7M", ["whole-half diminished"]],
        "major pentatonic": ["1P 2M 3M 5P 6M", ["pentatonic"]],
        "lydian pentatonic": ["1P 3M 4A 5P 7M", ["chinese"]],
        "mixolydian pentatonic": ["1P 3M 4P 5P 7m", ["indian"]],
        "locrian pentatonic": ["1P 3m 4P 5d 7m", ["minor seven flat five pentatonic"]],
        "minor pentatonic": ["1P 3m 4P 5P 7m"],
        "minor six pentatonic": ["1P 3m 4P 5P 6M"],
        "minor hexatonic": ["1P 2M 3m 4P 5P 7M"],
        "flat three pentatonic": ["1P 2M 3m 5P 6M", ["kumoi"]],
        "flat six pentatonic": ["1P 2M 3M 5P 6m"],
        "major flat two pentatonic": ["1P 2m 3M 5P 6M"],
        "whole tone pentatonic": ["1P 3M 5d 6m 7m"],
        "ionian pentatonic": ["1P 3M 4P 5P 7M"],
        "lydian #5P pentatonic": ["1P 3M 4A 5A 7M"],
        "lydian dominant pentatonic": ["1P 3M 4A 5P 7m"],
        "minor #7M pentatonic": ["1P 3m 4P 5P 7M"],
        "super locrian pentatonic": ["1P 3m 4d 5d 7m"],
        "in-sen": ["1P 2m 4P 5P 7m"],
        iwato: ["1P 2m 4P 5d 7m"],
        hirajoshi: ["1P 2M 3m 5P 6m"],
        kumoijoshi: ["1P 2m 4P 5P 6m"],
        pelog: ["1P 2m 3m 5P 6m"],
        "vietnamese 1": ["1P 3m 4P 5P 6m"],
        "vietnamese 2": ["1P 3m 4P 5P 7m"],
        prometheus: ["1P 2M 3M 4A 6M 7m"],
        "prometheus neopolitan": ["1P 2m 3M 4A 6M 7m"],
        ritusen: ["1P 2M 4P 5P 6M"],
        scriabin: ["1P 2m 3M 5P 6M"],
        piongio: ["1P 2M 4P 5P 6M 7m"],
        "major blues": ["1P 2M 3m 3M 5P 6M"],
        "minor blues": ["1P 3m 4P 5d 5P 7m", ["blues"]],
        "composite blues": ["1P 2M 3m 3M 4P 5d 5P 6M 7m"],
        augmented: ["1P 2A 3M 5P 5A 7M"],
        "augmented heptatonic": ["1P 2A 3M 4P 5P 5A 7M"],
        "dorian #4": ["1P 2M 3m 4A 5P 6M 7m"],
        "lydian diminished": ["1P 2M 3m 4A 5P 6M 7M"],
        "whole tone": ["1P 2M 3M 4A 5A 7m"],
        "leading whole tone": ["1P 2M 3M 4A 5A 7m 7M"],
        "lydian minor": ["1P 2M 3M 4A 5P 6m 7m"],
        "locrian major": ["1P 2M 3M 4P 5d 6m 7m", ["arabian"]],
        neopolitan: ["1P 2m 3m 4P 5P 6m 7M"],
        "neopolitan minor": ["1P 2m 3m 4P 5P 6m 7M"],
        "neopolitan major": ["1P 2m 3m 4P 5P 6M 7M", ["dorian b2"]],
        "neopolitan major pentatonic": ["1P 3M 4P 5d 7m"],
        "romanian minor": ["1P 2M 3m 5d 5P 6M 7m"],
        "double harmonic lydian": ["1P 2m 3M 4A 5P 6m 7M"],
        "harmonic major": ["1P 2M 3M 4P 5P 6m 7M"],
        "double harmonic major": ["1P 2m 3M 4P 5P 6m 7M", ["gypsy"]],
        egyptian: ["1P 2M 4P 5P 7m"],
        "hungarian minor": ["1P 2M 3m 4A 5P 6m 7M"],
        "hungarian major": ["1P 2A 3M 4A 5P 6M 7m"],
        oriental: ["1P 2m 3M 4P 5d 6M 7m"],
        "spanish heptatonic": ["1P 2m 3m 3M 4P 5P 6m 7m"],
        flamenco: ["1P 2m 3m 3M 4A 5P 7m"],
        balinese: ["1P 2m 3m 4P 5P 6m 7M"],
        "todi raga": ["1P 2m 3m 4A 5P 6m 7M"],
        "malkos raga": ["1P 3m 4P 6m 7m"],
        "kafi raga": ["1P 3m 3M 4P 5P 6M 7m 7M"],
        "purvi raga": ["1P 2m 3M 4P 4A 5P 6m 7M"],
        persian: ["1P 2m 3M 4P 5d 6m 7M"],
        bebop: ["1P 2M 3M 4P 5P 6M 7m 7M"],
        "bebop dominant": ["1P 2M 3M 4P 5P 6M 7m 7M"],
        "bebop minor": ["1P 2M 3m 3M 4P 5P 6M 7m"],
        "bebop major": ["1P 2M 3M 4P 5P 5A 6M 7M"],
        "bebop locrian": ["1P 2m 3m 4P 5d 5P 6m 7m"],
        "minor bebop": ["1P 2M 3m 4P 5P 6m 7m 7M"],
        "mystery #1": ["1P 2m 3M 5d 6m 7m"],
        enigmatic: ["1P 2m 3M 5d 6m 7m 7M"],
        "minor six diminished": ["1P 2M 3m 4P 5P 6m 6M 7M"],
        "ionian augmented": ["1P 2M 3M 4P 5A 6M 7M"],
        "lydian #9": ["1P 2m 3M 4A 5P 6M 7M"],
        ichikosucho: ["1P 2M 3M 4P 5d 5P 6M 7M"],
        "six tone symmetric": ["1P 2m 3M 4P 5A 6M"]
    }
}, function(t) {
    t.exports = {
        4: ["1P 4P 7m 10m", ["quartal"]],
        5: ["1P 5P"],
        7: ["1P 3M 5P 7m", ["Dominant", "Dom"]],
        9: ["1P 3M 5P 7m 9M", ["79"]],
        11: ["1P 5P 7m 9M 11P"],
        13: ["1P 3M 5P 7m 9M 13M", ["13_"]],
        64: ["5P 8P 10M"],
        M: ["1P 3M 5P", ["Major", ""]],
        "M#5": ["1P 3M 5A", ["augmented", "maj#5", "Maj#5", "+", "aug"]],
        "M#5add9": ["1P 3M 5A 9M", ["+add9"]],
        M13: ["1P 3M 5P 7M 9M 13M", ["maj13", "Maj13"]],
        "M13#11": ["1P 3M 5P 7M 9M 11A 13M", ["maj13#11", "Maj13#11", "M13+4", "M13#4"]],
        M6: ["1P 3M 5P 13M", ["6"]],
        "M6#11": ["1P 3M 5P 6M 11A", ["M6b5", "6#11", "6b5"]],
        M69: ["1P 3M 5P 6M 9M", ["69"]],
        "M69#11": ["1P 3M 5P 6M 9M 11A"],
        "M7#11": ["1P 3M 5P 7M 11A", ["maj7#11", "Maj7#11", "M7+4", "M7#4"]],
        "M7#5": ["1P 3M 5A 7M", ["maj7#5", "Maj7#5", "maj9#5", "M7+"]],
        "M7#5sus4": ["1P 4P 5A 7M"],
        "M7#9#11": ["1P 3M 5P 7M 9A 11A"],
        M7add13: ["1P 3M 5P 6M 7M 9M"],
        M7b5: ["1P 3M 5d 7M"],
        M7b6: ["1P 3M 6m 7M"],
        M7b9: ["1P 3M 5P 7M 9m"],
        M7sus4: ["1P 4P 5P 7M"],
        M9: ["1P 3M 5P 7M 9M", ["maj9", "Maj9"]],
        "M9#11": ["1P 3M 5P 7M 9M 11A", ["maj9#11", "Maj9#11", "M9+4", "M9#4"]],
        "M9#5": ["1P 3M 5A 7M 9M", ["Maj9#5"]],
        "M9#5sus4": ["1P 4P 5A 7M 9M"],
        M9b5: ["1P 3M 5d 7M 9M"],
        M9sus4: ["1P 4P 5P 7M 9M"],
        Madd9: ["1P 3M 5P 9M", ["2", "add9", "add2"]],
        Maj7: ["1P 3M 5P 7M", ["maj7", "M7"]],
        Mb5: ["1P 3M 5d"],
        Mb6: ["1P 3M 13m"],
        Msus2: ["1P 2M 5P", ["add9no3", "sus2"]],
        Msus4: ["1P 4P 5P", ["sus", "sus4"]],
        Maddb9: ["1P 3M 5P 9m"],
        "11b9": ["1P 5P 7m 9m 11P"],
        "13#11": ["1P 3M 5P 7m 9M 11A 13M", ["13+4", "13#4"]],
        "13#9": ["1P 3M 5P 7m 9A 13M", ["13#9_"]],
        "13#9#11": ["1P 3M 5P 7m 9A 11A 13M"],
        "13b5": ["1P 3M 5d 6M 7m 9M"],
        "13b9": ["1P 3M 5P 7m 9m 13M"],
        "13b9#11": ["1P 3M 5P 7m 9m 11A 13M"],
        "13no5": ["1P 3M 7m 9M 13M"],
        "13sus4": ["1P 4P 5P 7m 9M 13M", ["13sus"]],
        "69#11": ["1P 3M 5P 6M 9M 11A"],
        "7#11": ["1P 3M 5P 7m 11A", ["7+4", "7#4", "7#11_", "7#4_"]],
        "7#11b13": ["1P 3M 5P 7m 11A 13m", ["7b5b13"]],
        "7#5": ["1P 3M 5A 7m", ["+7", "7aug", "aug7"]],
        "7#5#9": ["1P 3M 5A 7m 9A", ["7alt", "7#5#9_", "7#9b13_"]],
        "7#5b9": ["1P 3M 5A 7m 9m"],
        "7#5b9#11": ["1P 3M 5A 7m 9m 11A"],
        "7#5sus4": ["1P 4P 5A 7m"],
        "7#9": ["1P 3M 5P 7m 9A", ["7#9_"]],
        "7#9#11": ["1P 3M 5P 7m 9A 11A", ["7b5#9"]],
        "7#9#11b13": ["1P 3M 5P 7m 9A 11A 13m"],
        "7#9b13": ["1P 3M 5P 7m 9A 13m"],
        "7add6": ["1P 3M 5P 7m 13M", ["67", "7add13"]],
        "7b13": ["1P 3M 7m 13m"],
        "7b5": ["1P 3M 5d 7m"],
        "7b6": ["1P 3M 5P 6m 7m"],
        "7b9": ["1P 3M 5P 7m 9m"],
        "7b9#11": ["1P 3M 5P 7m 9m 11A", ["7b5b9"]],
        "7b9#9": ["1P 3M 5P 7m 9m 9A"],
        "7b9b13": ["1P 3M 5P 7m 9m 13m"],
        "7b9b13#11": ["1P 3M 5P 7m 9m 11A 13m", ["7b9#11b13", "7b5b9b13"]],
        "7no5": ["1P 3M 7m"],
        "7sus4": ["1P 4P 5P 7m", ["7sus"]],
        "7sus4b9": ["1P 4P 5P 7m 9m", ["susb9", "7susb9", "7b9sus", "7b9sus4", "phryg"]],
        "7sus4b9b13": ["1P 4P 5P 7m 9m 13m", ["7b9b13sus4"]],
        "9#11": ["1P 3M 5P 7m 9M 11A", ["9+4", "9#4", "9#11_", "9#4_"]],
        "9#11b13": ["1P 3M 5P 7m 9M 11A 13m", ["9b5b13"]],
        "9#5": ["1P 3M 5A 7m 9M", ["9+"]],
        "9#5#11": ["1P 3M 5A 7m 9M 11A"],
        "9b13": ["1P 3M 7m 9M 13m"],
        "9b5": ["1P 3M 5d 7m 9M"],
        "9no5": ["1P 3M 7m 9M"],
        "9sus4": ["1P 4P 5P 7m 9M", ["9sus"]],
        m: ["1P 3m 5P"],
        "m#5": ["1P 3m 5A", ["m+", "mb6"]],
        m11: ["1P 3m 5P 7m 9M 11P", ["_11"]],
        "m11A 5": ["1P 3m 6m 7m 9M 11P"],
        m11b5: ["1P 3m 7m 12d 2M 4P", ["h11", "_11b5"]],
        m13: ["1P 3m 5P 7m 9M 11P 13M", ["_13"]],
        m6: ["1P 3m 4P 5P 13M", ["_6"]],
        m69: ["1P 3m 5P 6M 9M", ["_69"]],
        m7: ["1P 3m 5P 7m", ["minor7", "_", "_7"]],
        "m7#5": ["1P 3m 6m 7m"],
        m7add11: ["1P 3m 5P 7m 11P", ["m7add4"]],
        m7b5: ["1P 3m 5d 7m", ["half-diminished", "h7", "_7b5"]],
        m9: ["1P 3m 5P 7m 9M", ["_9"]],
        "m9#5": ["1P 3m 6m 7m 9M"],
        m9b5: ["1P 3m 7m 12d 2M", ["h9", "-9b5"]],
        mMaj7: ["1P 3m 5P 7M", ["mM7", "_M7"]],
        mMaj7b6: ["1P 3m 5P 6m 7M", ["mM7b6"]],
        mM9: ["1P 3m 5P 7M 9M", ["mMaj9", "-M9"]],
        mM9b6: ["1P 3m 5P 6m 7M 9M", ["mMaj9b6"]],
        mb6M7: ["1P 3m 6m 7M"],
        mb6b9: ["1P 3m 6m 9m"],
        o: ["1P 3m 5d", ["mb5", "dim"]],
        o7: ["1P 3m 5d 13M", ["diminished", "m6b5", "dim7"]],
        o7M7: ["1P 3m 5d 6M 7M"],
        oM7: ["1P 3m 5d 7M"],
        sus24: ["1P 2M 4P 5P", ["sus4add9"]],
        "+add#9": ["1P 3M 5A 9A"],
        madd4: ["1P 3m 4P 5P"],
        madd9: ["1P 3m 5P 9M"]
    }
}, function(t) {
    t.exports = {
        "vsco2-piano-reverb-ogg": {
            A0: "./samples/vsco2-piano-reverb-ogg/a0.ogg",
            "C#1": "./samples/vsco2-piano-reverb-ogg/csharp1.ogg",
            F1: "./samples/vsco2-piano-reverb-ogg/f1.ogg",
            A1: "./samples/vsco2-piano-reverb-ogg/a1.ogg",
            "C#2": "./samples/vsco2-piano-reverb-ogg/csharp2.ogg",
            F2: "./samples/vsco2-piano-reverb-ogg/f2.ogg",
            A2: "./samples/vsco2-piano-reverb-ogg/a2.ogg",
            "C#3": "./samples/vsco2-piano-reverb-ogg/csharp3.ogg",
            F3: "./samples/vsco2-piano-reverb-ogg/f3.ogg",
            A3: "./samples/vsco2-piano-reverb-ogg/a3.ogg",
            "C#4": "./samples/vsco2-piano-reverb-ogg/csharp4.ogg",
            F4: "./samples/vsco2-piano-reverb-ogg/f4.ogg",
            A4: "./samples/vsco2-piano-reverb-ogg/a4.ogg",
            "C#5": "./samples/vsco2-piano-reverb-ogg/csharp5.ogg",
            F5: "./samples/vsco2-piano-reverb-ogg/f5.ogg",
            A5: "./samples/vsco2-piano-reverb-ogg/a5.ogg",
            "C#6": "./samples/vsco2-piano-reverb-ogg/csharp6.ogg",
            F6: "./samples/vsco2-piano-reverb-ogg/f6.ogg",
            A6: "./samples/vsco2-piano-reverb-ogg/a6.ogg",
            "C#7": "./samples/vsco2-piano-reverb-ogg/csharp7.ogg",
            F7: "./samples/vsco2-piano-reverb-ogg/f7.ogg",
            A7: "./samples/vsco2-piano-reverb-ogg/a7.ogg",
            C8: "./samples/vsco2-piano-reverb-ogg/c8.ogg"
        },
        "vsco2-piano-reverb-mp3": {
            A0: "./samples/vsco2-piano-reverb-mp3/a0.mp3",
            "C#1": "./samples/vsco2-piano-reverb-mp3/csharp1.mp3",
            F1: "./samples/vsco2-piano-reverb-mp3/f1.mp3",
            A1: "./samples/vsco2-piano-reverb-mp3/a1.mp3",
            "C#2": "./samples/vsco2-piano-reverb-mp3/csharp2.mp3",
            F2: "./samples/vsco2-piano-reverb-mp3/f2.mp3",
            A2: "./samples/vsco2-piano-reverb-mp3/a2.mp3",
            "C#3": "./samples/vsco2-piano-reverb-mp3/csharp3.mp3",
            F3: "./samples/vsco2-piano-reverb-mp3/f3.mp3",
            A3: "./samples/vsco2-piano-reverb-mp3/a3.mp3",
            "C#4": "./samples/vsco2-piano-reverb-mp3/csharp4.mp3",
            F4: "./samples/vsco2-piano-reverb-mp3/f4.mp3",
            A4: "./samples/vsco2-piano-reverb-mp3/a4.mp3",
            "C#5": "./samples/vsco2-piano-reverb-mp3/csharp5.mp3",
            F5: "./samples/vsco2-piano-reverb-mp3/f5.mp3",
            A5: "./samples/vsco2-piano-reverb-mp3/a5.mp3",
            "C#6": "./samples/vsco2-piano-reverb-mp3/csharp6.mp3",
            F6: "./samples/vsco2-piano-reverb-mp3/f6.mp3",
            A6: "./samples/vsco2-piano-reverb-mp3/a6.mp3",
            "C#7": "./samples/vsco2-piano-reverb-mp3/csharp7.mp3",
            F7: "./samples/vsco2-piano-reverb-mp3/f7.mp3",
            A7: "./samples/vsco2-piano-reverb-mp3/a7.mp3",
            C8: "./samples/vsco2-piano-reverb-mp3/c8.mp3"
        }
    }
}, function(t, e, n) {
    n(151), t.exports = n(376)
}, function(t, e, n) {
    "use strict";
    (function(t) {
        if (n(152), n(349), n(350), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
        t._babelPolyfill = !0;
        var e = "defineProperty";

        function i(t, n, i) {
            t[n] || Object[e](t, n, {
                writable: !0,
                configurable: !0,
                value: i
            })
        }
        i(String.prototype, "padLeft", "".padStart), i(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t) {
            [][t] && i(Array, t, Function.call.bind([][t]))
        })
    }).call(this, n(35))
}, function(t, e, n) {
    n(153), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(233), n(234), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(92), n(257), n(258), n(118), n(259), n(260), n(261), n(262), n(263), n(121), n(123), n(124), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), n(332), n(333), n(334), n(335), n(336), n(337), n(338), n(339), n(340), n(341), n(342), n(343), n(344), n(345), n(346), n(347), n(348), t.exports = n(21)
}, function(t, e, n) {
    "use strict";
    var i = n(3),
        r = n(17),
        o = n(8),
        s = n(0),
        a = n(15),
        u = n(32).KEY,
        l = n(5),
        c = n(54),
        f = n(46),
        p = n(37),
        h = n(7),
        d = n(101),
        y = n(72),
        m = n(154),
        v = n(57),
        _ = n(2),
        g = n(6),
        A = n(18),
        b = n(25),
        S = n(36),
        w = n(40),
        T = n(104),
        x = n(19),
        P = n(9),
        k = n(38),
        E = x.f,
        M = P.f,
        O = T.f,
        C = i.Symbol,
        F = i.JSON,
        N = F && F.stringify,
        R = h("_hidden"),
        j = h("toPrimitive"),
        I = {}.propertyIsEnumerable,
        q = c("symbol-registry"),
        D = c("symbols"),
        B = c("op-symbols"),
        L = Object.prototype,
        U = "function" == typeof C,
        V = i.QObject,
        z = !V || !V.prototype || !V.prototype.findChild,
        W = o && l(function() {
            return 7 != w(M({}, "a", {
                get: function() {
                    return M(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var i = E(L, e);
            i && delete L[e], M(t, e, n), i && t !== L && M(L, e, i)
        } : M,
        G = function(t) {
            var e = D[t] = w(C.prototype);
            return e._k = t, e
        },
        Q = U && "symbol" == typeof C.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof C
        },
        H = function(t, e, n) {
            return t === L && H(B, e, n), _(t), e = b(e, !0), _(n), r(D, e) ? (n.enumerable ? (r(t, R) && t[R][e] && (t[R][e] = !1), n = w(n, {
                enumerable: S(0, !1)
            })) : (r(t, R) || M(t, R, S(1, {})), t[R][e] = !0), W(t, e, n)) : M(t, e, n)
        },
        Y = function(t, e) {
            _(t);
            for (var n, i = m(e = A(e)), r = 0, o = i.length; o > r;) H(t, n = i[r++], e[n]);
            return t
        },
        X = function(t) {
            var e = I.call(this, t = b(t, !0));
            return !(this === L && r(D, t) && !r(B, t)) && (!(e || !r(this, t) || !r(D, t) || r(this, R) && this[R][t]) || e)
        },
        Z = function(t, e) {
            if (t = A(t), e = b(e, !0), t !== L || !r(D, e) || r(B, e)) {
                var n = E(t, e);
                return !n || !r(D, e) || r(t, R) && t[R][e] || (n.enumerable = !0), n
            }
        },
        $ = function(t) {
            for (var e, n = O(A(t)), i = [], o = 0; n.length > o;) r(D, e = n[o++]) || e == R || e == u || i.push(e);
            return i
        },
        K = function(t) {
            for (var e, n = t === L, i = O(n ? B : A(t)), o = [], s = 0; i.length > s;) !r(D, e = i[s++]) || n && !r(L, e) || o.push(D[e]);
            return o
        };
    U || (a((C = function() {
        if (this instanceof C) throw TypeError("Symbol is not a constructor!");
        var t = p(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === L && e.call(B, n), r(this, R) && r(this[R], t) && (this[R][t] = !1), W(this, t, S(1, n))
            };
        return o && z && W(L, t, {
            configurable: !0,
            set: e
        }), G(t)
    }).prototype, "toString", function() {
        return this._k
    }), x.f = Z, P.f = H, n(41).f = T.f = $, n(51).f = X, n(56).f = K, o && !n(33) && a(L, "propertyIsEnumerable", X, !0), d.f = function(t) {
        return G(h(t))
    }), s(s.G + s.W + s.F * !U, {
        Symbol: C
    });
    for (var J = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; J.length > tt;) h(J[tt++]);
    for (var et = k(h.store), nt = 0; et.length > nt;) y(et[nt++]);
    s(s.S + s.F * !U, "Symbol", {
        for: function(t) {
            return r(q, t += "") ? q[t] : q[t] = C(t)
        },
        keyFor: function(t) {
            if (!Q(t)) throw TypeError(t + " is not a symbol!");
            for (var e in q)
                if (q[e] === t) return e
        },
        useSetter: function() {
            z = !0
        },
        useSimple: function() {
            z = !1
        }
    }), s(s.S + s.F * !U, "Object", {
        create: function(t, e) {
            return void 0 === e ? w(t) : Y(w(t), e)
        },
        defineProperty: H,
        defineProperties: Y,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: $,
        getOwnPropertySymbols: K
    }), F && s(s.S + s.F * (!U || l(function() {
        var t = C();
        return "[null]" != N([t]) || "{}" != N({
            a: t
        }) || "{}" != N(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
            if (n = e = i[1], (g(e) || void 0 !== t) && !Q(t)) return v(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !Q(e)) return e
            }), i[1] = e, N.apply(F, i)
        }
    }), C.prototype[j] || n(14)(C.prototype, j, C.prototype.valueOf), f(C, "Symbol"), f(Math, "Math", !0), f(i.JSON, "JSON", !0)
}, function(t, e, n) {
    var i = n(38),
        r = n(56),
        o = n(51);
    t.exports = function(t) {
        var e = i(t),
            n = r.f;
        if (n)
            for (var s, a = n(t), u = o.f, l = 0; a.length > l;) u.call(t, s = a[l++]) && e.push(s);
        return e
    }
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Object", {
        create: n(40)
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S + i.F * !n(8), "Object", {
        defineProperty: n(9).f
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S + i.F * !n(8), "Object", {
        defineProperties: n(103)
    })
}, function(t, e, n) {
    var i = n(18),
        r = n(19).f;
    n(28)("getOwnPropertyDescriptor", function() {
        return function(t, e) {
            return r(i(t), e)
        }
    })
}, function(t, e, n) {
    var i = n(12),
        r = n(20);
    n(28)("getPrototypeOf", function() {
        return function(t) {
            return r(i(t))
        }
    })
}, function(t, e, n) {
    var i = n(12),
        r = n(38);
    n(28)("keys", function() {
        return function(t) {
            return r(i(t))
        }
    })
}, function(t, e, n) {
    n(28)("getOwnPropertyNames", function() {
        return n(104).f
    })
}, function(t, e, n) {
    var i = n(6),
        r = n(32).onFreeze;
    n(28)("freeze", function(t) {
        return function(e) {
            return t && i(e) ? t(r(e)) : e
        }
    })
}, function(t, e, n) {
    var i = n(6),
        r = n(32).onFreeze;
    n(28)("seal", function(t) {
        return function(e) {
            return t && i(e) ? t(r(e)) : e
        }
    })
}, function(t, e, n) {
    var i = n(6),
        r = n(32).onFreeze;
    n(28)("preventExtensions", function(t) {
        return function(e) {
            return t && i(e) ? t(r(e)) : e
        }
    })
}, function(t, e, n) {
    var i = n(6);
    n(28)("isFrozen", function(t) {
        return function(e) {
            return !i(e) || !!t && t(e)
        }
    })
}, function(t, e, n) {
    var i = n(6);
    n(28)("isSealed", function(t) {
        return function(e) {
            return !i(e) || !!t && t(e)
        }
    })
}, function(t, e, n) {
    var i = n(6);
    n(28)("isExtensible", function(t) {
        return function(e) {
            return !!i(e) && (!t || t(e))
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S + i.F, "Object", {
        assign: n(105)
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Object", {
        is: n(170)
    })
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Object", {
        setPrototypeOf: n(76).set
    })
}, function(t, e, n) {
    "use strict";
    var i = n(52),
        r = {};
    r[n(7)("toStringTag")] = "z", r + "" != "[object z]" && n(15)(Object.prototype, "toString", function() {
        return "[object " + i(this) + "]"
    }, !0)
}, function(t, e, n) {
    var i = n(0);
    i(i.P, "Function", {
        bind: n(106)
    })
}, function(t, e, n) {
    var i = n(9).f,
        r = Function.prototype,
        o = /^\s*function ([^ (]*)/;
    "name" in r || n(8) && i(r, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(o)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(6),
        r = n(20),
        o = n(7)("hasInstance"),
        s = Function.prototype;
    o in s || n(9).f(s, o, {
        value: function(t) {
            if ("function" != typeof this || !i(t)) return !1;
            if (!i(this.prototype)) return t instanceof this;
            for (; t = r(t);)
                if (this.prototype === t) return !0;
            return !1
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(108);
    i(i.G + i.F * (parseInt != r), {
        parseInt: r
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(109);
    i(i.G + i.F * (parseFloat != r), {
        parseFloat: r
    })
}, function(t, e, n) {
    "use strict";
    var i = n(3),
        r = n(17),
        o = n(23),
        s = n(78),
        a = n(25),
        u = n(5),
        l = n(41).f,
        c = n(19).f,
        f = n(9).f,
        p = n(47).trim,
        h = i.Number,
        d = h,
        y = h.prototype,
        m = "Number" == o(n(40)(y)),
        v = "trim" in String.prototype,
        _ = function(t) {
            var e = a(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var n, i, r, o = (e = v ? e.trim() : p(e, 3)).charCodeAt(0);
                if (43 === o || 45 === o) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === o) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            i = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            i = 8, r = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var s, u = e.slice(2), l = 0, c = u.length; l < c; l++)
                        if ((s = u.charCodeAt(l)) < 48 || s > r) return NaN;
                    return parseInt(u, i)
                }
            }
            return +e
        };
    if (!h(" 0o1") || !h("0b1") || h("+0x1")) {
        h = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof h && (m ? u(function() {
                y.valueOf.call(n)
            }) : "Number" != o(n)) ? s(new d(_(e)), n, h) : _(e)
        };
        for (var g, A = n(8) ? l(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; A.length > b; b++) r(d, g = A[b]) && !r(h, g) && f(h, g, c(d, g));
        h.prototype = y, y.constructor = h, n(15)(i, "Number", h)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(27),
        o = n(110),
        s = n(79),
        a = 1..toFixed,
        u = Math.floor,
        l = [0, 0, 0, 0, 0, 0],
        c = "Number.toFixed: incorrect invocation!",
        f = function(t, e) {
            for (var n = -1, i = e; ++n < 6;) i += t * l[n], l[n] = i % 1e7, i = u(i / 1e7)
        },
        p = function(t) {
            for (var e = 6, n = 0; --e >= 0;) n += l[e], l[e] = u(n / t), n = n % t * 1e7
        },
        h = function() {
            for (var t = 6, e = ""; --t >= 0;)
                if ("" !== e || 0 === t || 0 !== l[t]) {
                    var n = String(l[t]);
                    e = "" === e ? n : e + s.call("0", 7 - n.length) + n
                } return e
        },
        d = function(t, e, n) {
            return 0 === e ? n : e % 2 == 1 ? d(t, e - 1, n * t) : d(t * t, e / 2, n)
        };
    i(i.P + i.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(5)(function() {
        a.call({})
    })), "Number", {
        toFixed: function(t) {
            var e, n, i, a, u = o(this, c),
                l = r(t),
                y = "",
                m = "0";
            if (l < 0 || l > 20) throw RangeError(c);
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return String(u);
            if (u < 0 && (y = "-", u = -u), u > 1e-21)
                if (n = (e = function(t) {
                        for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                        for (; n >= 2;) e += 1, n /= 2;
                        return e
                    }(u * d(2, 69, 1)) - 69) < 0 ? u * d(2, -e, 1) : u / d(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                    for (f(0, n), i = l; i >= 7;) f(1e7, 0), i -= 7;
                    for (f(d(10, i, 1), 0), i = e - 1; i >= 23;) p(1 << 23), i -= 23;
                    p(1 << i), f(1, 1), p(2), m = h()
                } else f(0, n), f(1 << -e, 0), m = h() + s.call("0", l);
            return m = l > 0 ? y + ((a = m.length) <= l ? "0." + s.call("0", l - a) + m : m.slice(0, a - l) + "." + m.slice(a - l)) : y + m
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(5),
        o = n(110),
        s = 1..toPrecision;
    i(i.P + i.F * (r(function() {
        return "1" !== s.call(1, void 0)
    }) || !r(function() {
        s.call({})
    })), "Number", {
        toPrecision: function(t) {
            var e = o(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? s.call(e) : s.call(e, t)
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Number", {
        EPSILON: Math.pow(2, -52)
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(3).isFinite;
    i(i.S, "Number", {
        isFinite: function(t) {
            return "number" == typeof t && r(t)
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Number", {
        isInteger: n(111)
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Number", {
        isNaN: function(t) {
            return t != t
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(111),
        o = Math.abs;
    i(i.S, "Number", {
        isSafeInteger: function(t) {
            return r(t) && o(t) <= 9007199254740991
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(109);
    i(i.S + i.F * (Number.parseFloat != r), "Number", {
        parseFloat: r
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(108);
    i(i.S + i.F * (Number.parseInt != r), "Number", {
        parseInt: r
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(112),
        o = Math.sqrt,
        s = Math.acosh;
    i(i.S + i.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
        acosh: function(t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + o(t - 1) * o(t + 1))
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = Math.asinh;
    i(i.S + i.F * !(r && 1 / r(0) > 0), "Math", {
        asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = Math.atanh;
    i(i.S + i.F * !(r && 1 / r(-0) < 0), "Math", {
        atanh: function(t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(80);
    i(i.S, "Math", {
        cbrt: function(t) {
            return r(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        clz32: function(t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = Math.exp;
    i(i.S, "Math", {
        cosh: function(t) {
            return (r(t = +t) + r(-t)) / 2
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(81);
    i(i.S + i.F * (r != Math.expm1), "Math", {
        expm1: r
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        fround: n(113)
    })
}, function(t, e, n) {
    var i = n(0),
        r = Math.abs;
    i(i.S, "Math", {
        hypot: function(t, e) {
            for (var n, i, o = 0, s = 0, a = arguments.length, u = 0; s < a;) u < (n = r(arguments[s++])) ? (o = o * (i = u / n) * i + 1, u = n) : o += n > 0 ? (i = n / u) * i : n;
            return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o)
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = Math.imul;
    i(i.S + i.F * n(5)(function() {
        return -5 != r(4294967295, 5) || 2 != r.length
    }), "Math", {
        imul: function(t, e) {
            var n = +t,
                i = +e,
                r = 65535 & n,
                o = 65535 & i;
            return 0 | r * o + ((65535 & n >>> 16) * o + r * (65535 & i >>> 16) << 16 >>> 0)
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        log10: function(t) {
            return Math.log(t) * Math.LOG10E
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        log1p: n(112)
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        log2: function(t) {
            return Math.log(t) / Math.LN2
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        sign: n(80)
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(81),
        o = Math.exp;
    i(i.S + i.F * n(5)(function() {
        return -2e-17 != !Math.sinh(-2e-17)
    }), "Math", {
        sinh: function(t) {
            return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(81),
        o = Math.exp;
    i(i.S, "Math", {
        tanh: function(t) {
            var e = r(t = +t),
                n = r(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        trunc: function(t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(39),
        o = String.fromCharCode,
        s = String.fromCodePoint;
    i(i.S + i.F * (!!s && 1 != s.length), "String", {
        fromCodePoint: function(t) {
            for (var e, n = [], i = arguments.length, s = 0; i > s;) {
                if (e = +arguments[s++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(18),
        o = n(10);
    i(i.S, "String", {
        raw: function(t) {
            for (var e = r(t.raw), n = o(e.length), i = arguments.length, s = [], a = 0; n > a;) s.push(String(e[a++])), a < i && s.push(String(arguments[a]));
            return s.join("")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(47)("trim", function(t) {
        return function() {
            return t(this, 3)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(82)(!0);
    n(83)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(82)(!1);
    i(i.P, "String", {
        codePointAt: function(t) {
            return r(this, t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(10),
        o = n(85),
        s = "".endsWith;
    i(i.P + i.F * n(86)("endsWith"), "String", {
        endsWith: function(t) {
            var e = o(this, t, "endsWith"),
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = r(e.length),
                a = void 0 === n ? i : Math.min(r(n), i),
                u = String(t);
            return s ? s.call(e, u, a) : e.slice(a - u.length, a) === u
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(85);
    i(i.P + i.F * n(86)("includes"), "String", {
        includes: function(t) {
            return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.P, "String", {
        repeat: n(79)
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(10),
        o = n(85),
        s = "".startsWith;
    i(i.P + i.F * n(86)("startsWith"), "String", {
        startsWith: function(t) {
            var e = o(this, t, "startsWith"),
                n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                i = String(t);
            return s ? s.call(e, i, n) : e.slice(n, n + i.length) === i
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("anchor", function(t) {
        return function(e) {
            return t(this, "a", "name", e)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("big", function(t) {
        return function() {
            return t(this, "big", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("blink", function(t) {
        return function() {
            return t(this, "blink", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("bold", function(t) {
        return function() {
            return t(this, "b", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("fixed", function(t) {
        return function() {
            return t(this, "tt", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("fontcolor", function(t) {
        return function(e) {
            return t(this, "font", "color", e)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("fontsize", function(t) {
        return function(e) {
            return t(this, "font", "size", e)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("italics", function(t) {
        return function() {
            return t(this, "i", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("link", function(t) {
        return function(e) {
            return t(this, "a", "href", e)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("small", function(t) {
        return function() {
            return t(this, "small", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("strike", function(t) {
        return function() {
            return t(this, "strike", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("sub", function(t) {
        return function() {
            return t(this, "sub", "", "")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(16)("sup", function(t) {
        return function() {
            return t(this, "sup", "", "")
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(12),
        o = n(25);
    i(i.P + i.F * n(5)(function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    }), "Date", {
        toJSON: function(t) {
            var e = r(this),
                n = o(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(232);
    i(i.P + i.F * (Date.prototype.toISOString !== r), "Date", {
        toISOString: r
    })
}, function(t, e, n) {
    "use strict";
    var i = n(5),
        r = Date.prototype.getTime,
        o = Date.prototype.toISOString,
        s = function(t) {
            return t > 9 ? t : "0" + t
        };
    t.exports = i(function() {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1))
    }) || !i(function() {
        o.call(new Date(NaN))
    }) ? function() {
        if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
        var t = this,
            e = t.getUTCFullYear(),
            n = t.getUTCMilliseconds(),
            i = e < 0 ? "-" : e > 9999 ? "+" : "";
        return i + ("00000" + Math.abs(e)).slice(i ? -6 : -4) + "-" + s(t.getUTCMonth() + 1) + "-" + s(t.getUTCDate()) + "T" + s(t.getUTCHours()) + ":" + s(t.getUTCMinutes()) + ":" + s(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z"
    } : o
}, function(t, e, n) {
    var i = Date.prototype,
        r = i.toString,
        o = i.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(15)(i, "toString", function() {
        var t = o.call(this);
        return t == t ? r.call(this) : "Invalid Date"
    })
}, function(t, e, n) {
    var i = n(7)("toPrimitive"),
        r = Date.prototype;
    i in r || n(14)(r, i, n(235))
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        r = n(25);
    t.exports = function(t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return r(i(this), "number" != t)
    }
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Array", {
        isArray: n(57)
    })
}, function(t, e, n) {
    "use strict";
    var i = n(22),
        r = n(0),
        o = n(12),
        s = n(114),
        a = n(87),
        u = n(10),
        l = n(88),
        c = n(89);
    r(r.S + r.F * !n(59)(function(t) {
        Array.from(t)
    }), "Array", {
        from: function(t) {
            var e, n, r, f, p = o(t),
                h = "function" == typeof this ? this : Array,
                d = arguments.length,
                y = d > 1 ? arguments[1] : void 0,
                m = void 0 !== y,
                v = 0,
                _ = c(p);
            if (m && (y = i(y, d > 2 ? arguments[2] : void 0, 2)), null == _ || h == Array && a(_))
                for (n = new h(e = u(p.length)); e > v; v++) l(n, v, m ? y(p[v], v) : p[v]);
            else
                for (f = _.call(p), n = new h; !(r = f.next()).done; v++) l(n, v, m ? s(f, y, [r.value, v], !0) : r.value);
            return n.length = v, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(88);
    i(i.S + i.F * n(5)(function() {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    }), "Array", {
        of: function() {
            for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) r(n, t, arguments[t++]);
            return n.length = e, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(18),
        o = [].join;
    i(i.P + i.F * (n(50) != Object || !n(24)(o)), "Array", {
        join: function(t) {
            return o.call(r(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(75),
        o = n(23),
        s = n(39),
        a = n(10),
        u = [].slice;
    i(i.P + i.F * n(5)(function() {
        r && u.call(r)
    }), "Array", {
        slice: function(t, e) {
            var n = a(this.length),
                i = o(this);
            if (e = void 0 === e ? n : e, "Array" == i) return u.call(this, t, e);
            for (var r = s(t, n), l = s(e, n), c = a(l - r), f = new Array(c), p = 0; p < c; p++) f[p] = "String" == i ? this.charAt(r + p) : this[r + p];
            return f
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(13),
        o = n(12),
        s = n(5),
        a = [].sort,
        u = [1, 2, 3];
    i(i.P + i.F * (s(function() {
        u.sort(void 0)
    }) || !s(function() {
        u.sort(null)
    }) || !n(24)(a)), "Array", {
        sort: function(t) {
            return void 0 === t ? a.call(o(this)) : a.call(o(this), r(t))
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(29)(0),
        o = n(24)([].forEach, !0);
    i(i.P + i.F * !o, "Array", {
        forEach: function(t) {
            return r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var i = n(6),
        r = n(57),
        o = n(7)("species");
    t.exports = function(t) {
        var e;
        return r(t) && ("function" != typeof(e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), i(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(29)(1);
    i(i.P + i.F * !n(24)([].map, !0), "Array", {
        map: function(t) {
            return r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(29)(2);
    i(i.P + i.F * !n(24)([].filter, !0), "Array", {
        filter: function(t) {
            return r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(29)(3);
    i(i.P + i.F * !n(24)([].some, !0), "Array", {
        some: function(t) {
            return r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(29)(4);
    i(i.P + i.F * !n(24)([].every, !0), "Array", {
        every: function(t) {
            return r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(115);
    i(i.P + i.F * !n(24)([].reduce, !0), "Array", {
        reduce: function(t) {
            return r(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(115);
    i(i.P + i.F * !n(24)([].reduceRight, !0), "Array", {
        reduceRight: function(t) {
            return r(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(55)(!1),
        o = [].indexOf,
        s = !!o && 1 / [1].indexOf(1, -0) < 0;
    i(i.P + i.F * (s || !n(24)(o)), "Array", {
        indexOf: function(t) {
            return s ? o.apply(this, arguments) || 0 : r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(18),
        o = n(27),
        s = n(10),
        a = [].lastIndexOf,
        u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    i(i.P + i.F * (u || !n(24)(a)), "Array", {
        lastIndexOf: function(t) {
            if (u) return a.apply(this, arguments) || 0;
            var e = r(this),
                n = s(e.length),
                i = n - 1;
            for (arguments.length > 1 && (i = Math.min(i, o(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
                if (i in e && e[i] === t) return i || 0;
            return -1
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.P, "Array", {
        copyWithin: n(116)
    }), n(34)("copyWithin")
}, function(t, e, n) {
    var i = n(0);
    i(i.P, "Array", {
        fill: n(91)
    }), n(34)("fill")
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(29)(5),
        o = !0;
    "find" in [] && Array(1).find(function() {
        o = !1
    }), i(i.P + i.F * o, "Array", {
        find: function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(34)("find")
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(29)(6),
        o = "findIndex",
        s = !0;
    o in [] && Array(1)[o](function() {
        s = !1
    }), i(i.P + i.F * s, "Array", {
        findIndex: function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(34)(o)
}, function(t, e, n) {
    n(42)("Array")
}, function(t, e, n) {
    var i = n(3),
        r = n(78),
        o = n(9).f,
        s = n(41).f,
        a = n(58),
        u = n(60),
        l = i.RegExp,
        c = l,
        f = l.prototype,
        p = /a/g,
        h = /a/g,
        d = new l(p) !== p;
    if (n(8) && (!d || n(5)(function() {
            return h[n(7)("match")] = !1, l(p) != p || l(h) == h || "/a/i" != l(p, "i")
        }))) {
        l = function(t, e) {
            var n = this instanceof l,
                i = a(t),
                o = void 0 === e;
            return !n && i && t.constructor === l && o ? t : r(d ? new c(i && !o ? t.source : t, e) : c((i = t instanceof l) ? t.source : t, i && o ? u.call(t) : e), n ? this : f, l)
        };
        for (var y = function(t) {
                t in l || o(l, t, {
                    configurable: !0,
                    get: function() {
                        return c[t]
                    },
                    set: function(e) {
                        c[t] = e
                    }
                })
            }, m = s(c), v = 0; m.length > v;) y(m[v++]);
        f.constructor = l, l.prototype = f, n(15)(i, "RegExp", l)
    }
    n(42)("RegExp")
}, function(t, e, n) {
    "use strict";
    n(118);
    var i = n(2),
        r = n(60),
        o = n(8),
        s = /./.toString,
        a = function(t) {
            n(15)(RegExp.prototype, "toString", t, !0)
        };
    n(5)(function() {
        return "/a/b" != s.call({
            source: "a",
            flags: "b"
        })
    }) ? a(function() {
        var t = i(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? r.call(t) : void 0)
    }) : "toString" != s.name && a(function() {
        return s.call(this)
    })
}, function(t, e, n) {
    n(61)("match", 1, function(t, e, n) {
        return [function(n) {
            "use strict";
            var i = t(this),
                r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
        }, n]
    })
}, function(t, e, n) {
    n(61)("replace", 2, function(t, e, n) {
        return [function(i, r) {
            "use strict";
            var o = t(this),
                s = null == i ? void 0 : i[e];
            return void 0 !== s ? s.call(i, o, r) : n.call(String(o), i, r)
        }, n]
    })
}, function(t, e, n) {
    n(61)("search", 1, function(t, e, n) {
        return [function(n) {
            "use strict";
            var i = t(this),
                r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
        }, n]
    })
}, function(t, e, n) {
    n(61)("split", 2, function(t, e, i) {
        "use strict";
        var r = n(58),
            o = i,
            s = [].push;
        if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
            var a = void 0 === /()??/.exec("")[1];
            i = function(t, e) {
                var n = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!r(t)) return o.call(n, t, e);
                var i, u, l, c, f, p = [],
                    h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                    d = 0,
                    y = void 0 === e ? 4294967295 : e >>> 0,
                    m = new RegExp(t.source, h + "g");
                for (a || (i = new RegExp("^" + m.source + "$(?!\\s)", h));
                    (u = m.exec(n)) && !((l = u.index + u[0].length) > d && (p.push(n.slice(d, u.index)), !a && u.length > 1 && u[0].replace(i, function() {
                        for (f = 1; f < arguments.length - 2; f++) void 0 === arguments[f] && (u[f] = void 0)
                    }), u.length > 1 && u.index < n.length && s.apply(p, u.slice(1)), c = u[0].length, d = l, p.length >= y));) m.lastIndex === u.index && m.lastIndex++;
                return d === n.length ? !c && m.test("") || p.push("") : p.push(n.slice(d)), p.length > y ? p.slice(0, y) : p
            }
        } else "0".split(void 0, 0).length && (i = function(t, e) {
            return void 0 === t && 0 === e ? [] : o.call(this, t, e)
        });
        return [function(n, r) {
            var o = t(this),
                s = null == n ? void 0 : n[e];
            return void 0 !== s ? s.call(n, o, r) : i.call(String(o), n, r)
        }, i]
    })
}, function(t, e, n) {
    "use strict";
    var i, r, o, s, a = n(33),
        u = n(3),
        l = n(22),
        c = n(52),
        f = n(0),
        p = n(6),
        h = n(13),
        d = n(43),
        y = n(44),
        m = n(62),
        v = n(93).set,
        _ = n(94)(),
        g = n(95),
        A = n(119),
        b = n(63),
        S = n(120),
        w = u.TypeError,
        T = u.process,
        x = T && T.versions,
        P = x && x.v8 || "",
        k = u.Promise,
        E = "process" == c(T),
        M = function() {},
        O = r = g.f,
        C = !! function() {
            try {
                var t = k.resolve(1),
                    e = (t.constructor = {})[n(7)("species")] = function(t) {
                        t(M, M)
                    };
                return (E || "function" == typeof PromiseRejectionEvent) && t.then(M) instanceof e && 0 !== P.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
            } catch (t) {}
        }(),
        F = function(t) {
            var e;
            return !(!p(t) || "function" != typeof(e = t.then)) && e
        },
        N = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                _(function() {
                    for (var i = t._v, r = 1 == t._s, o = 0, s = function(e) {
                            var n, o, s, a = r ? e.ok : e.fail,
                                u = e.resolve,
                                l = e.reject,
                                c = e.domain;
                            try {
                                a ? (r || (2 == t._h && I(t), t._h = 1), !0 === a ? n = i : (c && c.enter(), n = a(i), c && (c.exit(), s = !0)), n === e.promise ? l(w("Promise-chain cycle")) : (o = F(n)) ? o.call(n, u, l) : u(n)) : l(i)
                            } catch (t) {
                                c && !s && c.exit(), l(t)
                            }
                        }; n.length > o;) s(n[o++]);
                    t._c = [], t._n = !1, e && !t._h && R(t)
                })
            }
        },
        R = function(t) {
            v.call(u, function() {
                var e, n, i, r = t._v,
                    o = j(t);
                if (o && (e = A(function() {
                        E ? T.emit("unhandledRejection", r, t) : (n = u.onunhandledrejection) ? n({
                            promise: t,
                            reason: r
                        }) : (i = u.console) && i.error && i.error("Unhandled promise rejection", r)
                    }), t._h = E || j(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            })
        },
        j = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        I = function(t) {
            v.call(u, function() {
                var e;
                E ? T.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        q = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), N(e, !0))
        },
        D = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw w("Promise can't be resolved itself");
                    (e = F(t)) ? _(function() {
                        var i = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, l(D, i, 1), l(q, i, 1))
                        } catch (t) {
                            q.call(i, t)
                        }
                    }): (n._v = t, n._s = 1, N(n, !1))
                } catch (t) {
                    q.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    C || (k = function(t) {
        d(this, k, "Promise", "_h"), h(t), i.call(this);
        try {
            t(l(D, this, 1), l(q, this, 1))
        } catch (t) {
            q.call(this, t)
        }
    }, (i = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(45)(k.prototype, {
        then: function(t, e) {
            var n = O(m(this, k));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = E ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && N(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), o = function() {
        var t = new i;
        this.promise = t, this.resolve = l(D, t, 1), this.reject = l(q, t, 1)
    }, g.f = O = function(t) {
        return t === k || t === s ? new o(t) : r(t)
    }), f(f.G + f.W + f.F * !C, {
        Promise: k
    }), n(46)(k, "Promise"), n(42)("Promise"), s = n(21).Promise, f(f.S + f.F * !C, "Promise", {
        reject: function(t) {
            var e = O(this);
            return (0, e.reject)(t), e.promise
        }
    }), f(f.S + f.F * (a || !C), "Promise", {
        resolve: function(t) {
            return S(a && this === s ? k : this, t)
        }
    }), f(f.S + f.F * !(C && n(59)(function(t) {
        k.all(t).catch(M)
    })), "Promise", {
        all: function(t) {
            var e = this,
                n = O(e),
                i = n.resolve,
                r = n.reject,
                o = A(function() {
                    var n = [],
                        o = 0,
                        s = 1;
                    y(t, !1, function(t) {
                        var a = o++,
                            u = !1;
                        n.push(void 0), s++, e.resolve(t).then(function(t) {
                            u || (u = !0, n[a] = t, --s || i(n))
                        }, r)
                    }), --s || i(n)
                });
            return o.e && r(o.v), n.promise
        },
        race: function(t) {
            var e = this,
                n = O(e),
                i = n.reject,
                r = A(function() {
                    y(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, i)
                    })
                });
            return r.e && i(r.v), n.promise
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(125),
        r = n(49);
    n(64)("WeakSet", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(t) {
            return i.def(r(this, "WeakSet"), t, !0)
        }
    }, i, !1, !0)
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(65),
        o = n(96),
        s = n(2),
        a = n(39),
        u = n(10),
        l = n(6),
        c = n(3).ArrayBuffer,
        f = n(62),
        p = o.ArrayBuffer,
        h = o.DataView,
        d = r.ABV && c.isView,
        y = p.prototype.slice,
        m = r.VIEW;
    i(i.G + i.W + i.F * (c !== p), {
        ArrayBuffer: p
    }), i(i.S + i.F * !r.CONSTR, "ArrayBuffer", {
        isView: function(t) {
            return d && d(t) || l(t) && m in t
        }
    }), i(i.P + i.U + i.F * n(5)(function() {
        return !new p(2).slice(1, void 0).byteLength
    }), "ArrayBuffer", {
        slice: function(t, e) {
            if (void 0 !== y && void 0 === e) return y.call(s(this), t);
            for (var n = s(this).byteLength, i = a(t, n), r = a(void 0 === e ? n : e, n), o = new(f(this, p))(u(r - i)), l = new h(this), c = new h(o), d = 0; i < r;) c.setUint8(d++, l.getUint8(i++));
            return o
        }
    }), n(42)("ArrayBuffer")
}, function(t, e, n) {
    var i = n(0);
    i(i.G + i.W + i.F * !n(65).ABV, {
        DataView: n(96).DataView
    })
}, function(t, e, n) {
    n(30)("Int8", 1, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(30)("Uint8", 1, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(30)("Uint8", 1, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    }, !0)
}, function(t, e, n) {
    n(30)("Int16", 2, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(30)("Uint16", 2, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(30)("Int32", 4, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(30)("Uint32", 4, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(30)("Float32", 4, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    n(30)("Float64", 8, function(t) {
        return function(e, n, i) {
            return t(this, e, n, i)
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(13),
        o = n(2),
        s = (n(3).Reflect || {}).apply,
        a = Function.apply;
    i(i.S + i.F * !n(5)(function() {
        s(function() {})
    }), "Reflect", {
        apply: function(t, e, n) {
            var i = r(t),
                u = o(n);
            return s ? s(i, e, u) : a.call(i, e, u)
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(40),
        o = n(13),
        s = n(2),
        a = n(6),
        u = n(5),
        l = n(106),
        c = (n(3).Reflect || {}).construct,
        f = u(function() {
            function t() {}
            return !(c(function() {}, [], t) instanceof t)
        }),
        p = !u(function() {
            c(function() {})
        });
    i(i.S + i.F * (f || p), "Reflect", {
        construct: function(t, e) {
            o(t), s(e);
            var n = arguments.length < 3 ? t : o(arguments[2]);
            if (p && !f) return c(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var i = [null];
                return i.push.apply(i, e), new(l.apply(t, i))
            }
            var u = n.prototype,
                h = r(a(u) ? u : Object.prototype),
                d = Function.apply.call(t, h, e);
            return a(d) ? d : h
        }
    })
}, function(t, e, n) {
    var i = n(9),
        r = n(0),
        o = n(2),
        s = n(25);
    r(r.S + r.F * n(5)(function() {
        Reflect.defineProperty(i.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    }), "Reflect", {
        defineProperty: function(t, e, n) {
            o(t), e = s(e, !0), o(n);
            try {
                return i.f(t, e, n), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(19).f,
        o = n(2);
    i(i.S, "Reflect", {
        deleteProperty: function(t, e) {
            var n = r(o(t), e);
            return !(n && !n.configurable) && delete t[e]
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = function(t) {
            this._t = r(t), this._i = 0;
            var e, n = this._k = [];
            for (e in t) n.push(e)
        };
    n(84)(o, "Object", function() {
        var t, e = this._k;
        do {
            if (this._i >= e.length) return {
                value: void 0,
                done: !0
            }
        } while (!((t = e[this._i++]) in this._t));
        return {
            value: t,
            done: !1
        }
    }), i(i.S, "Reflect", {
        enumerate: function(t) {
            return new o(t)
        }
    })
}, function(t, e, n) {
    var i = n(19),
        r = n(20),
        o = n(17),
        s = n(0),
        a = n(6),
        u = n(2);
    s(s.S, "Reflect", {
        get: function t(e, n) {
            var s, l, c = arguments.length < 3 ? e : arguments[2];
            return u(e) === c ? e[n] : (s = i.f(e, n)) ? o(s, "value") ? s.value : void 0 !== s.get ? s.get.call(c) : void 0 : a(l = r(e)) ? t(l, n, c) : void 0
        }
    })
}, function(t, e, n) {
    var i = n(19),
        r = n(0),
        o = n(2);
    r(r.S, "Reflect", {
        getOwnPropertyDescriptor: function(t, e) {
            return i.f(o(t), e)
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(20),
        o = n(2);
    i(i.S, "Reflect", {
        getPrototypeOf: function(t) {
            return r(o(t))
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Reflect", {
        has: function(t, e) {
            return e in t
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(2),
        o = Object.isExtensible;
    i(i.S, "Reflect", {
        isExtensible: function(t) {
            return r(t), !o || o(t)
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Reflect", {
        ownKeys: n(127)
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(2),
        o = Object.preventExtensions;
    i(i.S, "Reflect", {
        preventExtensions: function(t) {
            r(t);
            try {
                return o && o(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var i = n(9),
        r = n(19),
        o = n(20),
        s = n(17),
        a = n(0),
        u = n(36),
        l = n(2),
        c = n(6);
    a(a.S, "Reflect", {
        set: function t(e, n, a) {
            var f, p, h = arguments.length < 4 ? e : arguments[3],
                d = r.f(l(e), n);
            if (!d) {
                if (c(p = o(e))) return t(p, n, a, h);
                d = u(0)
            }
            if (s(d, "value")) {
                if (!1 === d.writable || !c(h)) return !1;
                if (f = r.f(h, n)) {
                    if (f.get || f.set || !1 === f.writable) return !1;
                    f.value = a, i.f(h, n, f)
                } else i.f(h, n, u(0, a));
                return !0
            }
            return void 0 !== d.set && (d.set.call(h, a), !0)
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(76);
    r && i(i.S, "Reflect", {
        setPrototypeOf: function(t, e) {
            r.check(t, e);
            try {
                return r.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(55)(!0);
    i(i.P, "Array", {
        includes: function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(34)("includes")
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(128),
        o = n(12),
        s = n(10),
        a = n(13),
        u = n(90);
    i(i.P, "Array", {
        flatMap: function(t) {
            var e, n, i = o(this);
            return a(t), e = s(i.length), n = u(i, 0), r(n, i, i, e, 0, 1, t, arguments[1]), n
        }
    }), n(34)("flatMap")
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(128),
        o = n(12),
        s = n(10),
        a = n(27),
        u = n(90);
    i(i.P, "Array", {
        flatten: function() {
            var t = arguments[0],
                e = o(this),
                n = s(e.length),
                i = u(e, 0);
            return r(i, e, e, n, 0, void 0 === t ? 1 : a(t)), i
        }
    }), n(34)("flatten")
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(82)(!0);
    i(i.P, "String", {
        at: function(t) {
            return r(this, t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(129),
        o = n(63);
    i(i.P + i.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
        padStart: function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(129),
        o = n(63);
    i(i.P + i.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
        padEnd: function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(47)("trimLeft", function(t) {
        return function() {
            return t(this, 1)
        }
    }, "trimStart")
}, function(t, e, n) {
    "use strict";
    n(47)("trimRight", function(t) {
        return function() {
            return t(this, 2)
        }
    }, "trimEnd")
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(26),
        o = n(10),
        s = n(58),
        a = n(60),
        u = RegExp.prototype,
        l = function(t, e) {
            this._r = t, this._s = e
        };
    n(84)(l, "RegExp String", function() {
        var t = this._r.exec(this._s);
        return {
            value: t,
            done: null === t
        }
    }), i(i.P, "String", {
        matchAll: function(t) {
            if (r(this), !s(t)) throw TypeError(t + " is not a regexp!");
            var e = String(this),
                n = "flags" in u ? String(t.flags) : a.call(t),
                i = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
            return i.lastIndex = o(t.lastIndex), new l(i, e)
        }
    })
}, function(t, e, n) {
    n(72)("asyncIterator")
}, function(t, e, n) {
    n(72)("observable")
}, function(t, e, n) {
    var i = n(0),
        r = n(127),
        o = n(18),
        s = n(19),
        a = n(88);
    i(i.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for (var e, n, i = o(t), u = s.f, l = r(i), c = {}, f = 0; l.length > f;) void 0 !== (n = u(i, e = l[f++])) && a(c, e, n);
            return c
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(130)(!1);
    i(i.S, "Object", {
        values: function(t) {
            return r(t)
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(130)(!0);
    i(i.S, "Object", {
        entries: function(t) {
            return r(t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(12),
        o = n(13),
        s = n(9);
    n(8) && i(i.P + n(66), "Object", {
        __defineGetter__: function(t, e) {
            s.f(r(this), t, {
                get: o(e),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(12),
        o = n(13),
        s = n(9);
    n(8) && i(i.P + n(66), "Object", {
        __defineSetter__: function(t, e) {
            s.f(r(this), t, {
                set: o(e),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(12),
        o = n(25),
        s = n(20),
        a = n(19).f;
    n(8) && i(i.P + n(66), "Object", {
        __lookupGetter__: function(t) {
            var e, n = r(this),
                i = o(t, !0);
            do {
                if (e = a(n, i)) return e.get
            } while (n = s(n))
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(12),
        o = n(25),
        s = n(20),
        a = n(19).f;
    n(8) && i(i.P + n(66), "Object", {
        __lookupSetter__: function(t) {
            var e, n = r(this),
                i = o(t, !0);
            do {
                if (e = a(n, i)) return e.set
            } while (n = s(n))
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.P + i.R, "Map", {
        toJSON: n(131)("Map")
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.P + i.R, "Set", {
        toJSON: n(131)("Set")
    })
}, function(t, e, n) {
    n(67)("Map")
}, function(t, e, n) {
    n(67)("Set")
}, function(t, e, n) {
    n(67)("WeakMap")
}, function(t, e, n) {
    n(67)("WeakSet")
}, function(t, e, n) {
    n(68)("Map")
}, function(t, e, n) {
    n(68)("Set")
}, function(t, e, n) {
    n(68)("WeakMap")
}, function(t, e, n) {
    n(68)("WeakSet")
}, function(t, e, n) {
    var i = n(0);
    i(i.G, {
        global: n(3)
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "System", {
        global: n(3)
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(23);
    i(i.S, "Error", {
        isError: function(t) {
            return "Error" === r(t)
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        clamp: function(t, e, n) {
            return Math.min(n, Math.max(e, t))
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        DEG_PER_RAD: Math.PI / 180
    })
}, function(t, e, n) {
    var i = n(0),
        r = 180 / Math.PI;
    i(i.S, "Math", {
        degrees: function(t) {
            return t * r
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(133),
        o = n(113);
    i(i.S, "Math", {
        fscale: function(t, e, n, i, s) {
            return o(r(t, e, n, i, s))
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        iaddh: function(t, e, n, i) {
            var r = t >>> 0,
                o = n >>> 0;
            return (e >>> 0) + (i >>> 0) + ((r & o | (r | o) & ~(r + o >>> 0)) >>> 31) | 0
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        isubh: function(t, e, n, i) {
            var r = t >>> 0,
                o = n >>> 0;
            return (e >>> 0) - (i >>> 0) - ((~r & o | ~(r ^ o) & r - o >>> 0) >>> 31) | 0
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        imulh: function(t, e) {
            var n = +t,
                i = +e,
                r = 65535 & n,
                o = 65535 & i,
                s = n >> 16,
                a = i >> 16,
                u = (s * o >>> 0) + (r * o >>> 16);
            return s * a + (u >> 16) + ((r * a >>> 0) + (65535 & u) >> 16)
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        RAD_PER_DEG: 180 / Math.PI
    })
}, function(t, e, n) {
    var i = n(0),
        r = Math.PI / 180;
    i(i.S, "Math", {
        radians: function(t) {
            return t * r
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        scale: n(133)
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        umulh: function(t, e) {
            var n = +t,
                i = +e,
                r = 65535 & n,
                o = 65535 & i,
                s = n >>> 16,
                a = i >>> 16,
                u = (s * o >>> 0) + (r * o >>> 16);
            return s * a + (u >>> 16) + ((r * a >>> 0) + (65535 & u) >>> 16)
        }
    })
}, function(t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        signbit: function(t) {
            return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(21),
        o = n(3),
        s = n(62),
        a = n(120);
    i(i.P + i.R, "Promise", {
        finally: function(t) {
            var e = s(this, r.Promise || o.Promise),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return a(e, t()).then(function() {
                    return n
                })
            } : t, n ? function(n) {
                return a(e, t()).then(function() {
                    throw n
                })
            } : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(95),
        o = n(119);
    i(i.S, "Promise", {
        try: function(t) {
            var e = r.f(this),
                n = o(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise
        }
    })
}, function(t, e, n) {
    var i = n(31),
        r = n(2),
        o = i.key,
        s = i.set;
    i.exp({
        defineMetadata: function(t, e, n, i) {
            s(t, e, r(n), o(i))
        }
    })
}, function(t, e, n) {
    var i = n(31),
        r = n(2),
        o = i.key,
        s = i.map,
        a = i.store;
    i.exp({
        deleteMetadata: function(t, e) {
            var n = arguments.length < 3 ? void 0 : o(arguments[2]),
                i = s(r(e), n, !1);
            if (void 0 === i || !i.delete(t)) return !1;
            if (i.size) return !0;
            var u = a.get(e);
            return u.delete(n), !!u.size || a.delete(e)
        }
    })
}, function(t, e, n) {
    var i = n(31),
        r = n(2),
        o = n(20),
        s = i.has,
        a = i.get,
        u = i.key,
        l = function(t, e, n) {
            if (s(t, e, n)) return a(t, e, n);
            var i = o(e);
            return null !== i ? l(t, i, n) : void 0
        };
    i.exp({
        getMetadata: function(t, e) {
            return l(t, r(e), arguments.length < 3 ? void 0 : u(arguments[2]))
        }
    })
}, function(t, e, n) {
    var i = n(123),
        r = n(132),
        o = n(31),
        s = n(2),
        a = n(20),
        u = o.keys,
        l = o.key,
        c = function(t, e) {
            var n = u(t, e),
                o = a(t);
            if (null === o) return n;
            var s = c(o, e);
            return s.length ? n.length ? r(new i(n.concat(s))) : s : n
        };
    o.exp({
        getMetadataKeys: function(t) {
            return c(s(t), arguments.length < 2 ? void 0 : l(arguments[1]))
        }
    })
}, function(t, e, n) {
    var i = n(31),
        r = n(2),
        o = i.get,
        s = i.key;
    i.exp({
        getOwnMetadata: function(t, e) {
            return o(t, r(e), arguments.length < 3 ? void 0 : s(arguments[2]))
        }
    })
}, function(t, e, n) {
    var i = n(31),
        r = n(2),
        o = i.keys,
        s = i.key;
    i.exp({
        getOwnMetadataKeys: function(t) {
            return o(r(t), arguments.length < 2 ? void 0 : s(arguments[1]))
        }
    })
}, function(t, e, n) {
    var i = n(31),
        r = n(2),
        o = n(20),
        s = i.has,
        a = i.key,
        u = function(t, e, n) {
            if (s(t, e, n)) return !0;
            var i = o(e);
            return null !== i && u(t, i, n)
        };
    i.exp({
        hasMetadata: function(t, e) {
            return u(t, r(e), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}, function(t, e, n) {
    var i = n(31),
        r = n(2),
        o = i.has,
        s = i.key;
    i.exp({
        hasOwnMetadata: function(t, e) {
            return o(t, r(e), arguments.length < 3 ? void 0 : s(arguments[2]))
        }
    })
}, function(t, e, n) {
    var i = n(31),
        r = n(2),
        o = n(13),
        s = i.key,
        a = i.set;
    i.exp({
        metadata: function(t, e) {
            return function(n, i) {
                a(t, e, (void 0 !== i ? r : o)(n), s(i))
            }
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(94)(),
        o = n(3).process,
        s = "process" == n(23)(o);
    i(i.G, {
        asap: function(t) {
            var e = s && o.domain;
            r(e ? e.bind(t) : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(3),
        o = n(21),
        s = n(94)(),
        a = n(7)("observable"),
        u = n(13),
        l = n(2),
        c = n(43),
        f = n(45),
        p = n(14),
        h = n(44),
        d = h.RETURN,
        y = function(t) {
            return null == t ? void 0 : u(t)
        },
        m = function(t) {
            var e = t._c;
            e && (t._c = void 0, e())
        },
        v = function(t) {
            return void 0 === t._o
        },
        _ = function(t) {
            v(t) || (t._o = void 0, m(t))
        },
        g = function(t, e) {
            l(t), this._c = void 0, this._o = t, t = new A(this);
            try {
                var n = e(t),
                    i = n;
                null != n && ("function" == typeof n.unsubscribe ? n = function() {
                    i.unsubscribe()
                } : u(n), this._c = n)
            } catch (e) {
                return void t.error(e)
            }
            v(this) && m(this)
        };
    g.prototype = f({}, {
        unsubscribe: function() {
            _(this)
        }
    });
    var A = function(t) {
        this._s = t
    };
    A.prototype = f({}, {
        next: function(t) {
            var e = this._s;
            if (!v(e)) {
                var n = e._o;
                try {
                    var i = y(n.next);
                    if (i) return i.call(n, t)
                } catch (t) {
                    try {
                        _(e)
                    } finally {
                        throw t
                    }
                }
            }
        },
        error: function(t) {
            var e = this._s;
            if (v(e)) throw t;
            var n = e._o;
            e._o = void 0;
            try {
                var i = y(n.error);
                if (!i) throw t;
                t = i.call(n, t)
            } catch (t) {
                try {
                    m(e)
                } finally {
                    throw t
                }
            }
            return m(e), t
        },
        complete: function(t) {
            var e = this._s;
            if (!v(e)) {
                var n = e._o;
                e._o = void 0;
                try {
                    var i = y(n.complete);
                    t = i ? i.call(n, t) : void 0
                } catch (t) {
                    try {
                        m(e)
                    } finally {
                        throw t
                    }
                }
                return m(e), t
            }
        }
    });
    var b = function(t) {
        c(this, b, "Observable", "_f")._f = u(t)
    };
    f(b.prototype, {
        subscribe: function(t) {
            return new g(t, this._f)
        },
        forEach: function(t) {
            var e = this;
            return new(o.Promise || r.Promise)(function(n, i) {
                u(t);
                var r = e.subscribe({
                    next: function(e) {
                        try {
                            return t(e)
                        } catch (t) {
                            i(t), r.unsubscribe()
                        }
                    },
                    error: i,
                    complete: n
                })
            })
        }
    }), f(b, {
        from: function(t) {
            var e = "function" == typeof this ? this : b,
                n = y(l(t)[a]);
            if (n) {
                var i = l(n.call(t));
                return i.constructor === e ? i : new e(function(t) {
                    return i.subscribe(t)
                })
            }
            return new e(function(e) {
                var n = !1;
                return s(function() {
                        if (!n) {
                            try {
                                if (h(t, !1, function(t) {
                                        if (e.next(t), n) return d
                                    }) === d) return
                            } catch (t) {
                                if (n) throw t;
                                return void e.error(t)
                            }
                            e.complete()
                        }
                    }),
                    function() {
                        n = !0
                    }
            })
        },
        of: function() {
            for (var t = 0, e = arguments.length, n = new Array(e); t < e;) n[t] = arguments[t++];
            return new("function" == typeof this ? this : b)(function(t) {
                var e = !1;
                return s(function() {
                        if (!e) {
                            for (var i = 0; i < n.length; ++i)
                                if (t.next(n[i]), e) return;
                            t.complete()
                        }
                    }),
                    function() {
                        e = !0
                    }
            })
        }
    }), p(b.prototype, a, function() {
        return this
    }), i(i.G, {
        Observable: b
    }), n(42)("Observable")
}, function(t, e, n) {
    var i = n(3),
        r = n(0),
        o = n(63),
        s = [].slice,
        a = /MSIE .\./.test(o),
        u = function(t) {
            return function(e, n) {
                var i = arguments.length > 2,
                    r = !!i && s.call(arguments, 2);
                return t(i ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, r)
                } : e, n)
            }
        };
    r(r.G + r.B + r.F * a, {
        setTimeout: u(i.setTimeout),
        setInterval: u(i.setInterval)
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(93);
    i(i.G + i.B, {
        setImmediate: r.set,
        clearImmediate: r.clear
    })
}, function(t, e, n) {
    for (var i = n(92), r = n(38), o = n(15), s = n(3), a = n(14), u = n(48), l = n(7), c = l("iterator"), f = l("toStringTag"), p = u.Array, h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, d = r(h), y = 0; y < d.length; y++) {
        var m, v = d[y],
            _ = h[v],
            g = s[v],
            A = g && g.prototype;
        if (A && (A[c] || a(A, c, p), A[f] || a(A, f, v), u[v] = p, _))
            for (m in i) A[m] || o(A, m, i[m], !0)
    }
}, function(t, e, n) {
    (function(e) {
        ! function(e) {
            "use strict";
            var n, i = Object.prototype,
                r = i.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                s = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator",
                u = o.toStringTag || "@@toStringTag",
                l = "object" == typeof t,
                c = e.regeneratorRuntime;
            if (c) l && (t.exports = c);
            else {
                (c = e.regeneratorRuntime = l ? t.exports : {}).wrap = A;
                var f = "suspendedStart",
                    p = "suspendedYield",
                    h = "executing",
                    d = "completed",
                    y = {},
                    m = {};
                m[s] = function() {
                    return this
                };
                var v = Object.getPrototypeOf,
                    _ = v && v(v(C([])));
                _ && _ !== i && r.call(_, s) && (m = _);
                var g = T.prototype = S.prototype = Object.create(m);
                w.prototype = g.constructor = T, T.constructor = w, T[u] = w.displayName = "GeneratorFunction", c.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                }, c.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, T) : (t.__proto__ = T, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(g), t
                }, c.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(P.prototype), P.prototype[a] = function() {
                    return this
                }, c.AsyncIterator = P, c.async = function(t, e, n, i) {
                    var r = new P(A(t, e, n, i));
                    return c.isGeneratorFunction(e) ? r : r.next().then(function(t) {
                        return t.done ? t.value : r.next()
                    })
                }, x(g), g[u] = "Generator", g[s] = function() {
                    return this
                }, g.toString = function() {
                    return "[object Generator]"
                }, c.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var i = e.pop();
                                if (i in t) return n.value = i, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, c.values = C, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(M), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function i(i, r) {
                            return a.type = "throw", a.arg = t, e.next = i, r && (e.method = "next", e.arg = n), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var s = this.tryEntries[o],
                                a = s.completion;
                            if ("root" === s.tryLoc) return i("end");
                            if (s.tryLoc <= this.prev) {
                                var u = r.call(s, "catchLoc"),
                                    l = r.call(s, "finallyLoc");
                                if (u && l) {
                                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                                } else if (u) {
                                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(s)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), M(n), y
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    M(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, i) {
                        return this.delegate = {
                            iterator: C(t),
                            resultName: e,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = n), y
                    }
                }
            }

            function A(t, e, n, i) {
                var r = e && e.prototype instanceof S ? e : S,
                    o = Object.create(r.prototype),
                    s = new O(i || []);
                return o._invoke = function(t, e, n) {
                    var i = f;
                    return function(r, o) {
                        if (i === h) throw new Error("Generator is already running");
                        if (i === d) {
                            if ("throw" === r) throw o;
                            return F()
                        }
                        for (n.method = r, n.arg = o;;) {
                            var s = n.delegate;
                            if (s) {
                                var a = k(s, n);
                                if (a) {
                                    if (a === y) continue;
                                    return a
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (i === f) throw i = d, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = h;
                            var u = b(t, e, n);
                            if ("normal" === u.type) {
                                if (i = n.done ? d : p, u.arg === y) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (i = d, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }(t, n, s), o
            }

            function b(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function S() {}

            function w() {}

            function T() {}

            function x(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function P(t) {
                function n(e, i, o, s) {
                    var a = b(t[e], t, i);
                    if ("throw" !== a.type) {
                        var u = a.arg,
                            l = u.value;
                        return l && "object" == typeof l && r.call(l, "__await") ? Promise.resolve(l.__await).then(function(t) {
                            n("next", t, o, s)
                        }, function(t) {
                            n("throw", t, o, s)
                        }) : Promise.resolve(l).then(function(t) {
                            u.value = t, o(u)
                        }, s)
                    }
                    s(a.arg)
                }
                var i;
                "object" == typeof e.process && e.process.domain && (n = e.process.domain.bind(n)), this._invoke = function(t, e) {
                    function r() {
                        return new Promise(function(i, r) {
                            n(t, e, i, r)
                        })
                    }
                    return i = i ? i.then(r, r) : r()
                }
            }

            function k(t, e) {
                var i = t.iterator[e.method];
                if (i === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = n, k(t, e), "throw" === e.method)) return y;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return y
                }
                var r = b(i, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, y;
                var o = r.arg;
                return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, y) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, y)
            }

            function E(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function M(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function O(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(E, this), this.reset(!0)
            }

            function C(t) {
                if (t) {
                    var e = t[s];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1,
                            o = function e() {
                                for (; ++i < t.length;)
                                    if (r.call(t, i)) return e.value = t[i], e.done = !1, e;
                                return e.value = n, e.done = !0, e
                            };
                        return o.next = o
                    }
                }
                return {
                    next: F
                }
            }

            function F() {
                return {
                    value: n,
                    done: !0
                }
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(this, n(35))
}, function(t, e, n) {
    n(351), t.exports = n(21).RegExp.escape
}, function(t, e, n) {
    var i = n(0),
        r = n(352)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    i(i.S, "RegExp", {
        escape: function(t) {
            return r(t)
        }
    })
}, function(t, e) {
    t.exports = function(t, e) {
        var n = e === Object(e) ? function(t) {
            return e[t]
        } : e;
        return function(e) {
            return String(e).replace(t, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    /** @license React v16.8.4
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var i = n(1),
        r = n(134),
        o = n(355);

    function s(t) {
        for (var e = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, i = 0; i < e; i++) n += "&args[]=" + encodeURIComponent(arguments[i + 1]);
        ! function(t, e, n, i, r, o, s, a) {
            if (!t) {
                if (t = void 0, void 0 === e) t = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, i, r, o, s, a],
                        l = 0;
                    (t = Error(e.replace(/%s/g, function() {
                        return u[l++]
                    }))).name = "Invariant Violation"
                }
                throw t.framesToPop = 1, t
            }
        }(!1, "Minified React error #" + t + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }
    i || s("227");
    var a = !1,
        u = null,
        l = !1,
        c = null,
        f = {
            onError: function(t) {
                a = !0, u = t
            }
        };

    function p(t, e, n, i, r, o, s, l, c) {
        a = !1, u = null,
            function(t, e, n, i, r, o, s, a, u) {
                var l = Array.prototype.slice.call(arguments, 3);
                try {
                    e.apply(n, l)
                } catch (t) {
                    this.onError(t)
                }
            }.apply(f, arguments)
    }
    var h = null,
        d = {};

    function y() {
        if (h)
            for (var t in d) {
                var e = d[t],
                    n = h.indexOf(t);
                if (-1 < n || s("96", t), !v[n])
                    for (var i in e.extractEvents || s("97", t), v[n] = e, n = e.eventTypes) {
                        var r = void 0,
                            o = n[i],
                            a = e,
                            u = i;
                        _.hasOwnProperty(u) && s("99", u), _[u] = o;
                        var l = o.phasedRegistrationNames;
                        if (l) {
                            for (r in l) l.hasOwnProperty(r) && m(l[r], a, u);
                            r = !0
                        } else o.registrationName ? (m(o.registrationName, a, u), r = !0) : r = !1;
                        r || s("98", i, t)
                    }
            }
    }

    function m(t, e, n) {
        g[t] && s("100", t), g[t] = e, A[t] = e.eventTypes[n].dependencies
    }
    var v = [],
        _ = {},
        g = {},
        A = {},
        b = null,
        S = null,
        w = null;

    function T(t, e, n) {
        var i = t.type || "unknown-event";
        t.currentTarget = w(n),
            function(t, e, n, i, r, o, f, h, d) {
                if (p.apply(this, arguments), a) {
                    if (a) {
                        var y = u;
                        a = !1, u = null
                    } else s("198"), y = void 0;
                    l || (l = !0, c = y)
                }
            }(i, e, void 0, t), t.currentTarget = null
    }

    function x(t, e) {
        return null == e && s("30"), null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e), t) : (t.push(e), t) : Array.isArray(e) ? [t].concat(e) : [t, e]
    }

    function P(t, e, n) {
        Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
    }
    var k = null;

    function E(t) {
        if (t) {
            var e = t._dispatchListeners,
                n = t._dispatchInstances;
            if (Array.isArray(e))
                for (var i = 0; i < e.length && !t.isPropagationStopped(); i++) T(t, e[i], n[i]);
            else e && T(t, e, n);
            t._dispatchListeners = null, t._dispatchInstances = null, t.isPersistent() || t.constructor.release(t)
        }
    }
    var M = {
        injectEventPluginOrder: function(t) {
            h && s("101"), h = Array.prototype.slice.call(t), y()
        },
        injectEventPluginsByName: function(t) {
            var e, n = !1;
            for (e in t)
                if (t.hasOwnProperty(e)) {
                    var i = t[e];
                    d.hasOwnProperty(e) && d[e] === i || (d[e] && s("102", e), d[e] = i, n = !0)
                } n && y()
        }
    };

    function O(t, e) {
        var n = t.stateNode;
        if (!n) return null;
        var i = b(n);
        if (!i) return null;
        n = i[e];
        t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                (i = !i.disabled) || (i = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !i;
                break t;
            default:
                t = !1
        }
        return t ? null : (n && "function" != typeof n && s("231", e, typeof n), n)
    }

    function C(t) {
        if (null !== t && (k = x(k, t)), t = k, k = null, t && (P(t, E), k && s("95"), l)) throw t = c, l = !1, c = null, t
    }
    var F = Math.random().toString(36).slice(2),
        N = "__reactInternalInstance$" + F,
        R = "__reactEventHandlers$" + F;

    function j(t) {
        if (t[N]) return t[N];
        for (; !t[N];) {
            if (!t.parentNode) return null;
            t = t.parentNode
        }
        return 5 === (t = t[N]).tag || 6 === t.tag ? t : null
    }

    function I(t) {
        return !(t = t[N]) || 5 !== t.tag && 6 !== t.tag ? null : t
    }

    function q(t) {
        if (5 === t.tag || 6 === t.tag) return t.stateNode;
        s("33")
    }

    function D(t) {
        return t[R] || null
    }

    function B(t) {
        do {
            t = t.return
        } while (t && 5 !== t.tag);
        return t || null
    }

    function L(t, e, n) {
        (e = O(t, n.dispatchConfig.phasedRegistrationNames[e])) && (n._dispatchListeners = x(n._dispatchListeners, e), n._dispatchInstances = x(n._dispatchInstances, t))
    }

    function U(t) {
        if (t && t.dispatchConfig.phasedRegistrationNames) {
            for (var e = t._targetInst, n = []; e;) n.push(e), e = B(e);
            for (e = n.length; 0 < e--;) L(n[e], "captured", t);
            for (e = 0; e < n.length; e++) L(n[e], "bubbled", t)
        }
    }

    function V(t, e, n) {
        t && n && n.dispatchConfig.registrationName && (e = O(t, n.dispatchConfig.registrationName)) && (n._dispatchListeners = x(n._dispatchListeners, e), n._dispatchInstances = x(n._dispatchInstances, t))
    }

    function z(t) {
        t && t.dispatchConfig.registrationName && V(t._targetInst, null, t)
    }

    function W(t) {
        P(t, U)
    }
    var G = !("undefined" == typeof window || !window.document || !window.document.createElement);

    function Q(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
    }
    var H = {
            animationend: Q("Animation", "AnimationEnd"),
            animationiteration: Q("Animation", "AnimationIteration"),
            animationstart: Q("Animation", "AnimationStart"),
            transitionend: Q("Transition", "TransitionEnd")
        },
        Y = {},
        X = {};

    function Z(t) {
        if (Y[t]) return Y[t];
        if (!H[t]) return t;
        var e, n = H[t];
        for (e in n)
            if (n.hasOwnProperty(e) && e in X) return Y[t] = n[e];
        return t
    }
    G && (X = document.createElement("div").style, "AnimationEvent" in window || (delete H.animationend.animation, delete H.animationiteration.animation, delete H.animationstart.animation), "TransitionEvent" in window || delete H.transitionend.transition);
    var $ = Z("animationend"),
        K = Z("animationiteration"),
        J = Z("animationstart"),
        tt = Z("transitionend"),
        et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        nt = null,
        it = null,
        rt = null;

    function ot() {
        if (rt) return rt;
        var t, e, n = it,
            i = n.length,
            r = "value" in nt ? nt.value : nt.textContent,
            o = r.length;
        for (t = 0; t < i && n[t] === r[t]; t++);
        var s = i - t;
        for (e = 1; e <= s && n[i - e] === r[o - e]; e++);
        return rt = r.slice(t, 1 < e ? 1 - e : void 0)
    }

    function st() {
        return !0
    }

    function at() {
        return !1
    }

    function ut(t, e, n, i) {
        for (var r in this.dispatchConfig = t, this._targetInst = e, this.nativeEvent = n, t = this.constructor.Interface) t.hasOwnProperty(r) && ((e = t[r]) ? this[r] = e(n) : "target" === r ? this.target = i : this[r] = n[r]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? st : at, this.isPropagationStopped = at, this
    }

    function lt(t, e, n, i) {
        if (this.eventPool.length) {
            var r = this.eventPool.pop();
            return this.call(r, t, e, n, i), r
        }
        return new this(t, e, n, i)
    }

    function ct(t) {
        t instanceof this || s("279"), t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t)
    }

    function ft(t) {
        t.eventPool = [], t.getPooled = lt, t.release = ct
    }
    r(ut.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = st)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = st)
        },
        persist: function() {
            this.isPersistent = st
        },
        isPersistent: at,
        destructor: function() {
            var t, e = this.constructor.Interface;
            for (t in e) this[t] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = at, this._dispatchInstances = this._dispatchListeners = null
        }
    }), ut.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    }, ut.extend = function(t) {
        function e() {}

        function n() {
            return i.apply(this, arguments)
        }
        var i = this;
        e.prototype = i.prototype;
        var o = new e;
        return r(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = r({}, i.Interface, t), n.extend = i.extend, ft(n), n
    }, ft(ut);
    var pt = ut.extend({
            data: null
        }),
        ht = ut.extend({
            data: null
        }),
        dt = [9, 13, 27, 32],
        yt = G && "CompositionEvent" in window,
        mt = null;
    G && "documentMode" in document && (mt = document.documentMode);
    var vt = G && "TextEvent" in window && !mt,
        _t = G && (!yt || mt && 8 < mt && 11 >= mt),
        gt = String.fromCharCode(32),
        At = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        bt = !1;

    function St(t, e) {
        switch (t) {
            case "keyup":
                return -1 !== dt.indexOf(e.keyCode);
            case "keydown":
                return 229 !== e.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function wt(t) {
        return "object" == typeof(t = t.detail) && "data" in t ? t.data : null
    }
    var Tt = !1;
    var xt = {
            eventTypes: At,
            extractEvents: function(t, e, n, i) {
                var r = void 0,
                    o = void 0;
                if (yt) t: {
                    switch (t) {
                        case "compositionstart":
                            r = At.compositionStart;
                            break t;
                        case "compositionend":
                            r = At.compositionEnd;
                            break t;
                        case "compositionupdate":
                            r = At.compositionUpdate;
                            break t
                    }
                    r = void 0
                }
                else Tt ? St(t, n) && (r = At.compositionEnd) : "keydown" === t && 229 === n.keyCode && (r = At.compositionStart);
                return r ? (_t && "ko" !== n.locale && (Tt || r !== At.compositionStart ? r === At.compositionEnd && Tt && (o = ot()) : (it = "value" in (nt = i) ? nt.value : nt.textContent, Tt = !0)), r = pt.getPooled(r, e, n, i), o ? r.data = o : null !== (o = wt(n)) && (r.data = o), W(r), o = r) : o = null, (t = vt ? function(t, e) {
                    switch (t) {
                        case "compositionend":
                            return wt(e);
                        case "keypress":
                            return 32 !== e.which ? null : (bt = !0, gt);
                        case "textInput":
                            return (t = e.data) === gt && bt ? null : t;
                        default:
                            return null
                    }
                }(t, n) : function(t, e) {
                    if (Tt) return "compositionend" === t || !yt && St(t, e) ? (t = ot(), rt = it = nt = null, Tt = !1, t) : null;
                    switch (t) {
                        case "paste":
                            return null;
                        case "keypress":
                            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                                if (e.char && 1 < e.char.length) return e.char;
                                if (e.which) return String.fromCharCode(e.which)
                            }
                            return null;
                        case "compositionend":
                            return _t && "ko" !== e.locale ? null : e.data;
                        default:
                            return null
                    }
                }(t, n)) ? ((e = ht.getPooled(At.beforeInput, e, n, i)).data = t, W(e)) : e = null, null === o ? e : null === e ? o : [o, e]
            }
        },
        Pt = null,
        kt = null,
        Et = null;

    function Mt(t) {
        if (t = S(t)) {
            "function" != typeof Pt && s("280");
            var e = b(t.stateNode);
            Pt(t.stateNode, t.type, e)
        }
    }

    function Ot(t) {
        kt ? Et ? Et.push(t) : Et = [t] : kt = t
    }

    function Ct() {
        if (kt) {
            var t = kt,
                e = Et;
            if (Et = kt = null, Mt(t), e)
                for (t = 0; t < e.length; t++) Mt(e[t])
        }
    }

    function Ft(t, e) {
        return t(e)
    }

    function Nt(t, e, n) {
        return t(e, n)
    }

    function Rt() {}
    var jt = !1;

    function It(t, e) {
        if (jt) return t(e);
        jt = !0;
        try {
            return Ft(t, e)
        } finally {
            jt = !1, (null !== kt || null !== Et) && (Rt(), Ct())
        }
    }
    var qt = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Dt(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return "input" === e ? !!qt[t.type] : "textarea" === e
    }

    function Bt(t) {
        return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
    }

    function Lt(t) {
        if (!G) return !1;
        var e = (t = "on" + t) in document;
        return e || ((e = document.createElement("div")).setAttribute(t, "return;"), e = "function" == typeof e[t]), e
    }

    function Ut(t) {
        var e = t.type;
        return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
    }

    function Vt(t) {
        t._valueTracker || (t._valueTracker = function(t) {
            var e = Ut(t) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                i = "" + t[e];
            if (!t.hasOwnProperty(e) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var r = n.get,
                    o = n.set;
                return Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function() {
                        return r.call(this)
                    },
                    set: function(t) {
                        i = "" + t, o.call(this, t)
                    }
                }), Object.defineProperty(t, e, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return i
                    },
                    setValue: function(t) {
                        i = "" + t
                    },
                    stopTracking: function() {
                        t._valueTracker = null, delete t[e]
                    }
                }
            }
        }(t))
    }

    function zt(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var n = e.getValue(),
            i = "";
        return t && (i = Ut(t) ? t.checked ? "true" : "false" : t.value), (t = i) !== n && (e.setValue(t), !0)
    }
    var Wt = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Wt.hasOwnProperty("ReactCurrentDispatcher") || (Wt.ReactCurrentDispatcher = {
        current: null
    });
    var Gt = /^(.*)[\\\/]/,
        Qt = "function" == typeof Symbol && Symbol.for,
        Ht = Qt ? Symbol.for("react.element") : 60103,
        Yt = Qt ? Symbol.for("react.portal") : 60106,
        Xt = Qt ? Symbol.for("react.fragment") : 60107,
        Zt = Qt ? Symbol.for("react.strict_mode") : 60108,
        $t = Qt ? Symbol.for("react.profiler") : 60114,
        Kt = Qt ? Symbol.for("react.provider") : 60109,
        Jt = Qt ? Symbol.for("react.context") : 60110,
        te = Qt ? Symbol.for("react.concurrent_mode") : 60111,
        ee = Qt ? Symbol.for("react.forward_ref") : 60112,
        ne = Qt ? Symbol.for("react.suspense") : 60113,
        ie = Qt ? Symbol.for("react.memo") : 60115,
        re = Qt ? Symbol.for("react.lazy") : 60116,
        oe = "function" == typeof Symbol && Symbol.iterator;

    function se(t) {
        return null === t || "object" != typeof t ? null : "function" == typeof(t = oe && t[oe] || t["@@iterator"]) ? t : null
    }

    function ae(t) {
        if (null == t) return null;
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
        switch (t) {
            case te:
                return "ConcurrentMode";
            case Xt:
                return "Fragment";
            case Yt:
                return "Portal";
            case $t:
                return "Profiler";
            case Zt:
                return "StrictMode";
            case ne:
                return "Suspense"
        }
        if ("object" == typeof t) switch (t.$$typeof) {
            case Jt:
                return "Context.Consumer";
            case Kt:
                return "Context.Provider";
            case ee:
                var e = t.render;
                return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case ie:
                return ae(t.type);
            case re:
                if (t = 1 === t._status ? t._result : null) return ae(t)
        }
        return null
    }

    function ue(t) {
        var e = "";
        do {
            t: switch (t.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var n = "";
                    break t;
                default:
                    var i = t._debugOwner,
                        r = t._debugSource,
                        o = ae(t.type);
                    n = null, i && (n = ae(i.type)), i = o, o = "", r ? o = " (at " + r.fileName.replace(Gt, "") + ":" + r.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (i || "Unknown") + o
            }
            e += n,
            t = t.return
        } while (t);
        return e
    }
    var le = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ce = Object.prototype.hasOwnProperty,
        fe = {},
        pe = {};

    function he(t, e, n, i, r) {
        this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = i, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = t, this.type = e
    }
    var de = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
        de[t] = new he(t, 0, !1, t, null)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(t) {
        var e = t[0];
        de[e] = new he(e, 1, !1, t[1], null)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
        de[t] = new he(t, 2, !1, t.toLowerCase(), null)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
        de[t] = new he(t, 2, !1, t, null)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
        de[t] = new he(t, 3, !1, t.toLowerCase(), null)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
        de[t] = new he(t, 3, !0, t, null)
    }), ["capture", "download"].forEach(function(t) {
        de[t] = new he(t, 4, !1, t, null)
    }), ["cols", "rows", "size", "span"].forEach(function(t) {
        de[t] = new he(t, 6, !1, t, null)
    }), ["rowSpan", "start"].forEach(function(t) {
        de[t] = new he(t, 5, !1, t.toLowerCase(), null)
    });
    var ye = /[\-:]([a-z])/g;

    function me(t) {
        return t[1].toUpperCase()
    }

    function ve(t, e, n, i) {
        var r = de.hasOwnProperty(e) ? de[e] : null;
        (null !== r ? 0 === r.type : !i && (2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1]))) || (function(t, e, n, i) {
            if (null == e || function(t, e, n, i) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof e) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !i && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                        default:
                            return !1
                    }
                }(t, e, n, i)) return !0;
            if (i) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !e;
                case 4:
                    return !1 === e;
                case 5:
                    return isNaN(e);
                case 6:
                    return isNaN(e) || 1 > e
            }
            return !1
        }(e, n, r, i) && (n = null), i || null === r ? function(t) {
            return !!ce.call(pe, t) || !ce.call(fe, t) && (le.test(t) ? pe[t] = !0 : (fe[t] = !0, !1))
        }(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : r.mustUseProperty ? t[r.propertyName] = null === n ? 3 !== r.type && "" : n : (e = r.attributeName, i = r.attributeNamespace, null === n ? t.removeAttribute(e) : (n = 3 === (r = r.type) || 4 === r && !0 === n ? "" : "" + n, i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))))
    }

    function _e(t) {
        switch (typeof t) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return t;
            default:
                return ""
        }
    }

    function ge(t, e) {
        var n = e.checked;
        return r({}, e, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : t._wrapperState.initialChecked
        })
    }

    function Ae(t, e) {
        var n = null == e.defaultValue ? "" : e.defaultValue,
            i = null != e.checked ? e.checked : e.defaultChecked;
        n = _e(null != e.value ? e.value : n), t._wrapperState = {
            initialChecked: i,
            initialValue: n,
            controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
        }
    }

    function be(t, e) {
        null != (e = e.checked) && ve(t, "checked", e, !1)
    }

    function Se(t, e) {
        be(t, e);
        var n = _e(e.value),
            i = e.type;
        if (null != n) "number" === i ? (0 === n && "" === t.value || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
        else if ("submit" === i || "reset" === i) return void t.removeAttribute("value");
        e.hasOwnProperty("value") ? Te(t, e.type, n) : e.hasOwnProperty("defaultValue") && Te(t, e.type, _e(e.defaultValue)), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked)
    }

    function we(t, e, n) {
        if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
            var i = e.type;
            if (!("submit" !== i && "reset" !== i || void 0 !== e.value && null !== e.value)) return;
            e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
        }
        "" !== (n = t.name) && (t.name = ""), t.defaultChecked = !t.defaultChecked, t.defaultChecked = !!t._wrapperState.initialChecked, "" !== n && (t.name = n)
    }

    function Te(t, e, n) {
        "number" === e && t.ownerDocument.activeElement === t || (null == n ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
        var e = t.replace(ye, me);
        de[e] = new he(e, 1, !1, t, null)
    }), "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
        var e = t.replace(ye, me);
        de[e] = new he(e, 1, !1, t, "http://www.w3.org/1999/xlink")
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
        var e = t.replace(ye, me);
        de[e] = new he(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace")
    }), ["tabIndex", "crossOrigin"].forEach(function(t) {
        de[t] = new he(t, 1, !1, t.toLowerCase(), null)
    });
    var xe = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function Pe(t, e, n) {
        return (t = ut.getPooled(xe.change, t, e, n)).type = "change", Ot(n), W(t), t
    }
    var ke = null,
        Ee = null;

    function Me(t) {
        C(t)
    }

    function Oe(t) {
        if (zt(q(t))) return t
    }

    function Ce(t, e) {
        if ("change" === t) return e
    }
    var Fe = !1;

    function Ne() {
        ke && (ke.detachEvent("onpropertychange", Re), Ee = ke = null)
    }

    function Re(t) {
        "value" === t.propertyName && Oe(Ee) && It(Me, t = Pe(Ee, t, Bt(t)))
    }

    function je(t, e, n) {
        "focus" === t ? (Ne(), Ee = n, (ke = e).attachEvent("onpropertychange", Re)) : "blur" === t && Ne()
    }

    function Ie(t) {
        if ("selectionchange" === t || "keyup" === t || "keydown" === t) return Oe(Ee)
    }

    function qe(t, e) {
        if ("click" === t) return Oe(e)
    }

    function De(t, e) {
        if ("input" === t || "change" === t) return Oe(e)
    }
    G && (Fe = Lt("input") && (!document.documentMode || 9 < document.documentMode));
    var Be = {
            eventTypes: xe,
            _isInputEventSupported: Fe,
            extractEvents: function(t, e, n, i) {
                var r = e ? q(e) : window,
                    o = void 0,
                    s = void 0,
                    a = r.nodeName && r.nodeName.toLowerCase();
                if ("select" === a || "input" === a && "file" === r.type ? o = Ce : Dt(r) ? Fe ? o = De : (o = Ie, s = je) : (a = r.nodeName) && "input" === a.toLowerCase() && ("checkbox" === r.type || "radio" === r.type) && (o = qe), o && (o = o(t, e))) return Pe(o, n, i);
                s && s(t, r, e), "blur" === t && (t = r._wrapperState) && t.controlled && "number" === r.type && Te(r, "number", r.value)
            }
        },
        Le = ut.extend({
            view: null,
            detail: null
        }),
        Ue = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Ve(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : !!(t = Ue[t]) && !!e[t]
    }

    function ze() {
        return Ve
    }
    var We = 0,
        Ge = 0,
        Qe = !1,
        He = !1,
        Ye = Le.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: ze,
            button: null,
            buttons: null,
            relatedTarget: function(t) {
                return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
            },
            movementX: function(t) {
                if ("movementX" in t) return t.movementX;
                var e = We;
                return We = t.screenX, Qe ? "mousemove" === t.type ? t.screenX - e : 0 : (Qe = !0, 0)
            },
            movementY: function(t) {
                if ("movementY" in t) return t.movementY;
                var e = Ge;
                return Ge = t.screenY, He ? "mousemove" === t.type ? t.screenY - e : 0 : (He = !0, 0)
            }
        }),
        Xe = Ye.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }),
        Ze = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        $e = {
            eventTypes: Ze,
            extractEvents: function(t, e, n, i) {
                var r = "mouseover" === t || "pointerover" === t,
                    o = "mouseout" === t || "pointerout" === t;
                if (r && (n.relatedTarget || n.fromElement) || !o && !r) return null;
                if (r = i.window === i ? i : (r = i.ownerDocument) ? r.defaultView || r.parentWindow : window, o ? (o = e, e = (e = n.relatedTarget || n.toElement) ? j(e) : null) : o = null, o === e) return null;
                var s = void 0,
                    a = void 0,
                    u = void 0,
                    l = void 0;
                "mouseout" === t || "mouseover" === t ? (s = Ye, a = Ze.mouseLeave, u = Ze.mouseEnter, l = "mouse") : "pointerout" !== t && "pointerover" !== t || (s = Xe, a = Ze.pointerLeave, u = Ze.pointerEnter, l = "pointer");
                var c = null == o ? r : q(o);
                if (r = null == e ? r : q(e), (t = s.getPooled(a, o, n, i)).type = l + "leave", t.target = c, t.relatedTarget = r, (n = s.getPooled(u, e, n, i)).type = l + "enter", n.target = r, n.relatedTarget = c, i = e, o && i) t: {
                    for (r = i, l = 0, s = e = o; s; s = B(s)) l++;
                    for (s = 0, u = r; u; u = B(u)) s++;
                    for (; 0 < l - s;) e = B(e),
                    l--;
                    for (; 0 < s - l;) r = B(r),
                    s--;
                    for (; l--;) {
                        if (e === r || e === r.alternate) break t;
                        e = B(e), r = B(r)
                    }
                    e = null
                }
                else e = null;
                for (r = e, e = []; o && o !== r && (null === (l = o.alternate) || l !== r);) e.push(o), o = B(o);
                for (o = []; i && i !== r && (null === (l = i.alternate) || l !== r);) o.push(i), i = B(i);
                for (i = 0; i < e.length; i++) V(e[i], "bubbled", t);
                for (i = o.length; 0 < i--;) V(o[i], "captured", n);
                return [t, n]
            }
        };

    function Ke(t, e) {
        return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
    }
    var Je = Object.prototype.hasOwnProperty;

    function tn(t, e) {
        if (Ke(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            i = Object.keys(e);
        if (n.length !== i.length) return !1;
        for (i = 0; i < n.length; i++)
            if (!Je.call(e, n[i]) || !Ke(t[n[i]], e[n[i]])) return !1;
        return !0
    }

    function en(t) {
        var e = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            if (0 != (2 & e.effectTag)) return 1;
            for (; e.return;)
                if (0 != (2 & (e = e.return).effectTag)) return 1
        }
        return 3 === e.tag ? 2 : 3
    }

    function nn(t) {
        2 !== en(t) && s("188")
    }

    function rn(t) {
        if (!(t = function(t) {
                var e = t.alternate;
                if (!e) return 3 === (e = en(t)) && s("188"), 1 === e ? null : t;
                for (var n = t, i = e;;) {
                    var r = n.return,
                        o = r ? r.alternate : null;
                    if (!r || !o) break;
                    if (r.child === o.child) {
                        for (var a = r.child; a;) {
                            if (a === n) return nn(r), t;
                            if (a === i) return nn(r), e;
                            a = a.sibling
                        }
                        s("188")
                    }
                    if (n.return !== i.return) n = r, i = o;
                    else {
                        a = !1;
                        for (var u = r.child; u;) {
                            if (u === n) {
                                a = !0, n = r, i = o;
                                break
                            }
                            if (u === i) {
                                a = !0, i = r, n = o;
                                break
                            }
                            u = u.sibling
                        }
                        if (!a) {
                            for (u = o.child; u;) {
                                if (u === n) {
                                    a = !0, n = o, i = r;
                                    break
                                }
                                if (u === i) {
                                    a = !0, i = o, n = r;
                                    break
                                }
                                u = u.sibling
                            }
                            a || s("189")
                        }
                    }
                    n.alternate !== i && s("190")
                }
                return 3 !== n.tag && s("188"), n.stateNode.current === n ? t : e
            }(t))) return null;
        for (var e = t;;) {
            if (5 === e.tag || 6 === e.tag) return e;
            if (e.child) e.child.return = e, e = e.child;
            else {
                if (e === t) break;
                for (; !e.sibling;) {
                    if (!e.return || e.return === t) return null;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return null
    }
    var on = ut.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        sn = ut.extend({
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        an = Le.extend({
            relatedTarget: null
        });

    function un(t) {
        var e = t.keyCode;
        return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
    }
    var ln = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        cn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        fn = Le.extend({
            key: function(t) {
                if (t.key) {
                    var e = ln[t.key] || t.key;
                    if ("Unidentified" !== e) return e
                }
                return "keypress" === t.type ? 13 === (t = un(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? cn[t.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: ze,
            charCode: function(t) {
                return "keypress" === t.type ? un(t) : 0
            },
            keyCode: function(t) {
                return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            },
            which: function(t) {
                return "keypress" === t.type ? un(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            }
        }),
        pn = Ye.extend({
            dataTransfer: null
        }),
        hn = Le.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: ze
        }),
        dn = ut.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        yn = Ye.extend({
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }),
        mn = [
            ["abort", "abort"],
            [$, "animationEnd"],
            [K, "animationIteration"],
            [J, "animationStart"],
            ["canplay", "canPlay"],
            ["canplaythrough", "canPlayThrough"],
            ["drag", "drag"],
            ["dragenter", "dragEnter"],
            ["dragexit", "dragExit"],
            ["dragleave", "dragLeave"],
            ["dragover", "dragOver"],
            ["durationchange", "durationChange"],
            ["emptied", "emptied"],
            ["encrypted", "encrypted"],
            ["ended", "ended"],
            ["error", "error"],
            ["gotpointercapture", "gotPointerCapture"],
            ["load", "load"],
            ["loadeddata", "loadedData"],
            ["loadedmetadata", "loadedMetadata"],
            ["loadstart", "loadStart"],
            ["lostpointercapture", "lostPointerCapture"],
            ["mousemove", "mouseMove"],
            ["mouseout", "mouseOut"],
            ["mouseover", "mouseOver"],
            ["playing", "playing"],
            ["pointermove", "pointerMove"],
            ["pointerout", "pointerOut"],
            ["pointerover", "pointerOver"],
            ["progress", "progress"],
            ["scroll", "scroll"],
            ["seeking", "seeking"],
            ["stalled", "stalled"],
            ["suspend", "suspend"],
            ["timeupdate", "timeUpdate"],
            ["toggle", "toggle"],
            ["touchmove", "touchMove"],
            [tt, "transitionEnd"],
            ["waiting", "waiting"],
            ["wheel", "wheel"]
        ],
        vn = {},
        _n = {};

    function gn(t, e) {
        var n = t[0],
            i = "on" + ((t = t[1])[0].toUpperCase() + t.slice(1));
        e = {
            phasedRegistrationNames: {
                bubbled: i,
                captured: i + "Capture"
            },
            dependencies: [n],
            isInteractive: e
        }, vn[t] = e, _n[n] = e
    } [
        ["blur", "blur"],
        ["cancel", "cancel"],
        ["click", "click"],
        ["close", "close"],
        ["contextmenu", "contextMenu"],
        ["copy", "copy"],
        ["cut", "cut"],
        ["auxclick", "auxClick"],
        ["dblclick", "doubleClick"],
        ["dragend", "dragEnd"],
        ["dragstart", "dragStart"],
        ["drop", "drop"],
        ["focus", "focus"],
        ["input", "input"],
        ["invalid", "invalid"],
        ["keydown", "keyDown"],
        ["keypress", "keyPress"],
        ["keyup", "keyUp"],
        ["mousedown", "mouseDown"],
        ["mouseup", "mouseUp"],
        ["paste", "paste"],
        ["pause", "pause"],
        ["play", "play"],
        ["pointercancel", "pointerCancel"],
        ["pointerdown", "pointerDown"],
        ["pointerup", "pointerUp"],
        ["ratechange", "rateChange"],
        ["reset", "reset"],
        ["seeked", "seeked"],
        ["submit", "submit"],
        ["touchcancel", "touchCancel"],
        ["touchend", "touchEnd"],
        ["touchstart", "touchStart"],
        ["volumechange", "volumeChange"]
    ].forEach(function(t) {
        gn(t, !0)
    }), mn.forEach(function(t) {
        gn(t, !1)
    });
    var An = {
            eventTypes: vn,
            isInteractiveTopLevelEventType: function(t) {
                return void 0 !== (t = _n[t]) && !0 === t.isInteractive
            },
            extractEvents: function(t, e, n, i) {
                var r = _n[t];
                if (!r) return null;
                switch (t) {
                    case "keypress":
                        if (0 === un(n)) return null;
                    case "keydown":
                    case "keyup":
                        t = fn;
                        break;
                    case "blur":
                    case "focus":
                        t = an;
                        break;
                    case "click":
                        if (2 === n.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        t = Ye;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        t = pn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        t = hn;
                        break;
                    case $:
                    case K:
                    case J:
                        t = on;
                        break;
                    case tt:
                        t = dn;
                        break;
                    case "scroll":
                        t = Le;
                        break;
                    case "wheel":
                        t = yn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        t = sn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        t = Xe;
                        break;
                    default:
                        t = ut
                }
                return W(e = t.getPooled(r, e, n, i)), e
            }
        },
        bn = An.isInteractiveTopLevelEventType,
        Sn = [];

    function wn(t) {
        var e = t.targetInst,
            n = e;
        do {
            if (!n) {
                t.ancestors.push(n);
                break
            }
            var i;
            for (i = n; i.return;) i = i.return;
            if (!(i = 3 !== i.tag ? null : i.stateNode.containerInfo)) break;
            t.ancestors.push(n), n = j(i)
        } while (n);
        for (n = 0; n < t.ancestors.length; n++) {
            e = t.ancestors[n];
            var r = Bt(t.nativeEvent);
            i = t.topLevelType;
            for (var o = t.nativeEvent, s = null, a = 0; a < v.length; a++) {
                var u = v[a];
                u && (u = u.extractEvents(i, e, o, r)) && (s = x(s, u))
            }
            C(s)
        }
    }
    var Tn = !0;

    function xn(t, e) {
        if (!e) return null;
        var n = (bn(t) ? kn : En).bind(null, t);
        e.addEventListener(t, n, !1)
    }

    function Pn(t, e) {
        if (!e) return null;
        var n = (bn(t) ? kn : En).bind(null, t);
        e.addEventListener(t, n, !0)
    }

    function kn(t, e) {
        Nt(En, t, e)
    }

    function En(t, e) {
        if (Tn) {
            var n = Bt(e);
            if (null === (n = j(n)) || "number" != typeof n.tag || 2 === en(n) || (n = null), Sn.length) {
                var i = Sn.pop();
                i.topLevelType = t, i.nativeEvent = e, i.targetInst = n, t = i
            } else t = {
                topLevelType: t,
                nativeEvent: e,
                targetInst: n,
                ancestors: []
            };
            try {
                It(wn, t)
            } finally {
                t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, 10 > Sn.length && Sn.push(t)
            }
        }
    }
    var Mn = {},
        On = 0,
        Cn = "_reactListenersID" + ("" + Math.random()).slice(2);

    function Fn(t) {
        return Object.prototype.hasOwnProperty.call(t, Cn) || (t[Cn] = On++, Mn[t[Cn]] = {}), Mn[t[Cn]]
    }

    function Nn(t) {
        if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return t.activeElement || t.body
        } catch (e) {
            return t.body
        }
    }

    function Rn(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function jn(t, e) {
        var n, i = Rn(t);
        for (t = 0; i;) {
            if (3 === i.nodeType) {
                if (n = t + i.textContent.length, t <= e && n >= e) return {
                    node: i,
                    offset: e - t
                };
                t = n
            }
            t: {
                for (; i;) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break t
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = Rn(i)
        }
    }

    function In() {
        for (var t = window, e = Nn(); e instanceof t.HTMLIFrameElement;) {
            try {
                t = e.contentDocument.defaultView
            } catch (t) {
                break
            }
            e = Nn(t.document)
        }
        return e
    }

    function qn(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable)
    }

    function Dn(t) {
        var e = In(),
            n = t.focusedElem,
            i = t.selectionRange;
        if (e !== n && n && n.ownerDocument && function t(e, n) {
                return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? t(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
            }(n.ownerDocument.documentElement, n)) {
            if (null !== i && qn(n))
                if (e = i.start, void 0 === (t = i.end) && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
                else if ((t = (e = n.ownerDocument || document) && e.defaultView || window).getSelection) {
                t = t.getSelection();
                var r = n.textContent.length,
                    o = Math.min(i.start, r);
                i = void 0 === i.end ? o : Math.min(i.end, r), !t.extend && o > i && (r = i, i = o, o = r), r = jn(n, o);
                var s = jn(n, i);
                r && s && (1 !== t.rangeCount || t.anchorNode !== r.node || t.anchorOffset !== r.offset || t.focusNode !== s.node || t.focusOffset !== s.offset) && ((e = e.createRange()).setStart(r.node, r.offset), t.removeAllRanges(), o > i ? (t.addRange(e), t.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset), t.addRange(e)))
            }
            for (e = [], t = n; t = t.parentNode;) 1 === t.nodeType && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
            for ("function" == typeof n.focus && n.focus(), n = 0; n < e.length; n++)(t = e[n]).element.scrollLeft = t.left, t.element.scrollTop = t.top
        }
    }
    var Bn = G && "documentMode" in document && 11 >= document.documentMode,
        Ln = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        Un = null,
        Vn = null,
        zn = null,
        Wn = !1;

    function Gn(t, e) {
        var n = e.window === e ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
        return Wn || null == Un || Un !== Nn(n) ? null : ("selectionStart" in (n = Un) && qn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, zn && tn(zn, n) ? null : (zn = n, (t = ut.getPooled(Ln.select, Vn, t, e)).type = "select", t.target = Un, W(t), t))
    }
    var Qn = {
        eventTypes: Ln,
        extractEvents: function(t, e, n, i) {
            var r, o = i.window === i ? i.document : 9 === i.nodeType ? i : i.ownerDocument;
            if (!(r = !o)) {
                t: {
                    o = Fn(o),
                    r = A.onSelect;
                    for (var s = 0; s < r.length; s++) {
                        var a = r[s];
                        if (!o.hasOwnProperty(a) || !o[a]) {
                            o = !1;
                            break t
                        }
                    }
                    o = !0
                }
                r = !o
            }
            if (r) return null;
            switch (o = e ? q(e) : window, t) {
                case "focus":
                    (Dt(o) || "true" === o.contentEditable) && (Un = o, Vn = e, zn = null);
                    break;
                case "blur":
                    zn = Vn = Un = null;
                    break;
                case "mousedown":
                    Wn = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    return Wn = !1, Gn(n, i);
                case "selectionchange":
                    if (Bn) break;
                case "keydown":
                case "keyup":
                    return Gn(n, i)
            }
            return null
        }
    };

    function Hn(t, e) {
        return t = r({
            children: void 0
        }, e), (e = function(t) {
            var e = "";
            return i.Children.forEach(t, function(t) {
                null != t && (e += t)
            }), e
        }(e.children)) && (t.children = e), t
    }

    function Yn(t, e, n, i) {
        if (t = t.options, e) {
            e = {};
            for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
            for (n = 0; n < t.length; n++) r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r), r && i && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + _e(n), e = null, r = 0; r < t.length; r++) {
                if (t[r].value === n) return t[r].selected = !0, void(i && (t[r].defaultSelected = !0));
                null !== e || t[r].disabled || (e = t[r])
            }
            null !== e && (e.selected = !0)
        }
    }

    function Xn(t, e) {
        return null != e.dangerouslySetInnerHTML && s("91"), r({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }

    function Zn(t, e) {
        var n = e.value;
        null == n && (n = e.defaultValue, null != (e = e.children) && (null != n && s("92"), Array.isArray(e) && (1 >= e.length || s("93"), e = e[0]), n = e), null == n && (n = "")), t._wrapperState = {
            initialValue: _e(n)
        }
    }

    function $n(t, e) {
        var n = _e(e.value),
            i = _e(e.defaultValue);
        null != n && ((n = "" + n) !== t.value && (t.value = n), null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)), null != i && (t.defaultValue = "" + i)
    }

    function Kn(t) {
        var e = t.textContent;
        e === t._wrapperState.initialValue && (t.value = e)
    }
    M.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), b = D, S = I, w = q, M.injectEventPluginsByName({
        SimpleEventPlugin: An,
        EnterLeaveEventPlugin: $e,
        ChangeEventPlugin: Be,
        SelectEventPlugin: Qn,
        BeforeInputEventPlugin: xt
    });
    var Jn = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };

    function ti(t) {
        switch (t) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function ei(t, e) {
        return null == t || "http://www.w3.org/1999/xhtml" === t ? ti(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t
    }
    var ni, ii = void 0,
        ri = (ni = function(t, e) {
            if (t.namespaceURI !== Jn.svg || "innerHTML" in t) t.innerHTML = e;
            else {
                for ((ii = ii || document.createElement("div")).innerHTML = "<svg>" + e + "</svg>", e = ii.firstChild; t.firstChild;) t.removeChild(t.firstChild);
                for (; e.firstChild;) t.appendChild(e.firstChild)
            }
        }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, e, n, i) {
            MSApp.execUnsafeLocalFunction(function() {
                return ni(t, e)
            })
        } : ni);

    function oi(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && 3 === n.nodeType) return void(n.nodeValue = e)
        }
        t.textContent = e
    }
    var si = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        ai = ["Webkit", "ms", "Moz", "O"];

    function ui(t, e, n) {
        return null == e || "boolean" == typeof e || "" === e ? "" : n || "number" != typeof e || 0 === e || si.hasOwnProperty(t) && si[t] ? ("" + e).trim() : e + "px"
    }

    function li(t, e) {
        for (var n in t = t.style, e)
            if (e.hasOwnProperty(n)) {
                var i = 0 === n.indexOf("--"),
                    r = ui(n, e[n], i);
                "float" === n && (n = "cssFloat"), i ? t.setProperty(n, r) : t[n] = r
            }
    }
    Object.keys(si).forEach(function(t) {
        ai.forEach(function(e) {
            e = e + t.charAt(0).toUpperCase() + t.substring(1), si[e] = si[t]
        })
    });
    var ci = r({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function fi(t, e) {
        e && (ci[t] && (null != e.children || null != e.dangerouslySetInnerHTML) && s("137", t, ""), null != e.dangerouslySetInnerHTML && (null != e.children && s("60"), "object" == typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML || s("61")), null != e.style && "object" != typeof e.style && s("62", ""))
    }

    function pi(t, e) {
        if (-1 === t.indexOf("-")) return "string" == typeof e.is;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function hi(t, e) {
        var n = Fn(t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument);
        e = A[e];
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            if (!n.hasOwnProperty(r) || !n[r]) {
                switch (r) {
                    case "scroll":
                        Pn("scroll", t);
                        break;
                    case "focus":
                    case "blur":
                        Pn("focus", t), Pn("blur", t), n.blur = !0, n.focus = !0;
                        break;
                    case "cancel":
                    case "close":
                        Lt(r) && Pn(r, t);
                        break;
                    case "invalid":
                    case "submit":
                    case "reset":
                        break;
                    default:
                        -1 === et.indexOf(r) && xn(r, t)
                }
                n[r] = !0
            }
        }
    }

    function di() {}
    var yi = null,
        mi = null;

    function vi(t, e) {
        switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!e.autoFocus
        }
        return !1
    }

    function _i(t, e) {
        return "textarea" === t || "option" === t || "noscript" === t || "string" == typeof e.children || "number" == typeof e.children || "object" == typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html
    }
    var gi = "function" == typeof setTimeout ? setTimeout : void 0,
        Ai = "function" == typeof clearTimeout ? clearTimeout : void 0,
        bi = o.unstable_scheduleCallback,
        Si = o.unstable_cancelCallback;

    function wi(t) {
        for (t = t.nextSibling; t && 1 !== t.nodeType && 3 !== t.nodeType;) t = t.nextSibling;
        return t
    }

    function Ti(t) {
        for (t = t.firstChild; t && 1 !== t.nodeType && 3 !== t.nodeType;) t = t.nextSibling;
        return t
    }
    new Set;
    var xi = [],
        Pi = -1;

    function ki(t) {
        0 > Pi || (t.current = xi[Pi], xi[Pi] = null, Pi--)
    }

    function Ei(t, e) {
        xi[++Pi] = t.current, t.current = e
    }
    var Mi = {},
        Oi = {
            current: Mi
        },
        Ci = {
            current: !1
        },
        Fi = Mi;

    function Ni(t, e) {
        var n = t.type.contextTypes;
        if (!n) return Mi;
        var i = t.stateNode;
        if (i && i.__reactInternalMemoizedUnmaskedChildContext === e) return i.__reactInternalMemoizedMaskedChildContext;
        var r, o = {};
        for (r in n) o[r] = e[r];
        return i && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function Ri(t) {
        return null != (t = t.childContextTypes)
    }

    function ji(t) {
        ki(Ci), ki(Oi)
    }

    function Ii(t) {
        ki(Ci), ki(Oi)
    }

    function qi(t, e, n) {
        Oi.current !== Mi && s("168"), Ei(Oi, e), Ei(Ci, n)
    }

    function Di(t, e, n) {
        var i = t.stateNode;
        if (t = e.childContextTypes, "function" != typeof i.getChildContext) return n;
        for (var o in i = i.getChildContext()) o in t || s("108", ae(e) || "Unknown", o);
        return r({}, n, i)
    }

    function Bi(t) {
        var e = t.stateNode;
        return e = e && e.__reactInternalMemoizedMergedChildContext || Mi, Fi = Oi.current, Ei(Oi, e), Ei(Ci, Ci.current), !0
    }

    function Li(t, e, n) {
        var i = t.stateNode;
        i || s("169"), n ? (e = Di(t, e, Fi), i.__reactInternalMemoizedMergedChildContext = e, ki(Ci), ki(Oi), Ei(Oi, e)) : ki(Ci), Ei(Ci, n)
    }
    var Ui = null,
        Vi = null;

    function zi(t) {
        return function(e) {
            try {
                return t(e)
            } catch (t) {}
        }
    }

    function Wi(t, e, n, i) {
        this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.contextDependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function Gi(t, e, n, i) {
        return new Wi(t, e, n, i)
    }

    function Qi(t) {
        return !(!(t = t.prototype) || !t.isReactComponent)
    }

    function Hi(t, e) {
        var n = t.alternate;
        return null === n ? ((n = Gi(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = t.childExpirationTime, n.expirationTime = t.expirationTime, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, n.contextDependencies = t.contextDependencies, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
    }

    function Yi(t, e, n, i, r, o) {
        var a = 2;
        if (i = t, "function" == typeof t) Qi(t) && (a = 1);
        else if ("string" == typeof t) a = 5;
        else t: switch (t) {
            case Xt:
                return Xi(n.children, r, o, e);
            case te:
                return Zi(n, 3 | r, o, e);
            case Zt:
                return Zi(n, 2 | r, o, e);
            case $t:
                return (t = Gi(12, n, e, 4 | r)).elementType = $t, t.type = $t, t.expirationTime = o, t;
            case ne:
                return (t = Gi(13, n, e, r)).elementType = ne, t.type = ne, t.expirationTime = o, t;
            default:
                if ("object" == typeof t && null !== t) switch (t.$$typeof) {
                    case Kt:
                        a = 10;
                        break t;
                    case Jt:
                        a = 9;
                        break t;
                    case ee:
                        a = 11;
                        break t;
                    case ie:
                        a = 14;
                        break t;
                    case re:
                        a = 16, i = null;
                        break t
                }
                s("130", null == t ? t : typeof t, "")
        }
        return (e = Gi(a, n, e, r)).elementType = t, e.type = i, e.expirationTime = o, e
    }

    function Xi(t, e, n, i) {
        return (t = Gi(7, t, i, e)).expirationTime = n, t
    }

    function Zi(t, e, n, i) {
        return t = Gi(8, t, i, e), e = 0 == (1 & e) ? Zt : te, t.elementType = e, t.type = e, t.expirationTime = n, t
    }

    function $i(t, e, n) {
        return (t = Gi(6, t, null, e)).expirationTime = n, t
    }

    function Ki(t, e, n) {
        return (e = Gi(4, null !== t.children ? t.children : [], t.key, e)).expirationTime = n, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }

    function Ji(t, e) {
        t.didError = !1;
        var n = t.earliestPendingTime;
        0 === n ? t.earliestPendingTime = t.latestPendingTime = e : n < e ? t.earliestPendingTime = e : t.latestPendingTime > e && (t.latestPendingTime = e), nr(e, t)
    }

    function tr(t, e) {
        t.didError = !1, t.latestPingedTime >= e && (t.latestPingedTime = 0);
        var n = t.earliestPendingTime,
            i = t.latestPendingTime;
        n === e ? t.earliestPendingTime = i === e ? t.latestPendingTime = 0 : i : i === e && (t.latestPendingTime = n), n = t.earliestSuspendedTime, i = t.latestSuspendedTime, 0 === n ? t.earliestSuspendedTime = t.latestSuspendedTime = e : n < e ? t.earliestSuspendedTime = e : i > e && (t.latestSuspendedTime = e), nr(e, t)
    }

    function er(t, e) {
        var n = t.earliestPendingTime;
        return n > e && (e = n), (t = t.earliestSuspendedTime) > e && (e = t), e
    }

    function nr(t, e) {
        var n = e.earliestSuspendedTime,
            i = e.latestSuspendedTime,
            r = e.earliestPendingTime,
            o = e.latestPingedTime;
        0 === (r = 0 !== r ? r : o) && (0 === t || i < t) && (r = i), 0 !== (t = r) && n > t && (t = n), e.nextExpirationTimeToWorkOn = r, e.expirationTime = t
    }

    function ir(t, e) {
        if (t && t.defaultProps)
            for (var n in e = r({}, e), t = t.defaultProps) void 0 === e[n] && (e[n] = t[n]);
        return e
    }
    var rr = (new i.Component).refs;

    function or(t, e, n, i) {
        n = null == (n = n(i, e = t.memoizedState)) ? e : r({}, e, n), t.memoizedState = n, null !== (i = t.updateQueue) && 0 === t.expirationTime && (i.baseState = n)
    }
    var sr = {
        isMounted: function(t) {
            return !!(t = t._reactInternalFiber) && 2 === en(t)
        },
        enqueueSetState: function(t, e, n) {
            t = t._reactInternalFiber;
            var i = Sa(),
                r = Zo(i = Xs(i, t));
            r.payload = e, null != n && (r.callback = n), zs(), Ko(t, r), Ks(t, i)
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternalFiber;
            var i = Sa(),
                r = Zo(i = Xs(i, t));
            r.tag = Wo, r.payload = e, null != n && (r.callback = n), zs(), Ko(t, r), Ks(t, i)
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternalFiber;
            var n = Sa(),
                i = Zo(n = Xs(n, t));
            i.tag = Go, null != e && (i.callback = e), zs(), Ko(t, i), Ks(t, n)
        }
    };

    function ar(t, e, n, i, r, o, s) {
        return "function" == typeof(t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(i, o, s) : !e.prototype || !e.prototype.isPureReactComponent || (!tn(n, i) || !tn(r, o))
    }

    function ur(t, e, n) {
        var i = !1,
            r = Mi,
            o = e.contextType;
        return "object" == typeof o && null !== o ? o = Vo(o) : (r = Ri(e) ? Fi : Oi.current, o = (i = null != (i = e.contextTypes)) ? Ni(t, r) : Mi), e = new e(n, o), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = sr, t.stateNode = e, e._reactInternalFiber = t, i && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = o), e
    }

    function lr(t, e, n, i) {
        t = e.state, "function" == typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, i), "function" == typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && sr.enqueueReplaceState(e, e.state, null)
    }

    function cr(t, e, n, i) {
        var r = t.stateNode;
        r.props = n, r.state = t.memoizedState, r.refs = rr;
        var o = e.contextType;
        "object" == typeof o && null !== o ? r.context = Vo(o) : (o = Ri(e) ? Fi : Oi.current, r.context = Ni(t, o)), null !== (o = t.updateQueue) && (ns(t, o, n, r, i), r.state = t.memoizedState), "function" == typeof(o = e.getDerivedStateFromProps) && (or(t, e, o, n), r.state = t.memoizedState), "function" == typeof e.getDerivedStateFromProps || "function" == typeof r.getSnapshotBeforeUpdate || "function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount || (e = r.state, "function" == typeof r.componentWillMount && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), e !== r.state && sr.enqueueReplaceState(r, r.state, null), null !== (o = t.updateQueue) && (ns(t, o, n, r, i), r.state = t.memoizedState)), "function" == typeof r.componentDidMount && (t.effectTag |= 4)
    }
    var fr = Array.isArray;

    function pr(t, e, n) {
        if (null !== (t = n.ref) && "function" != typeof t && "object" != typeof t) {
            if (n._owner) {
                n = n._owner;
                var i = void 0;
                n && (1 !== n.tag && s("309"), i = n.stateNode), i || s("147", t);
                var r = "" + t;
                return null !== e && null !== e.ref && "function" == typeof e.ref && e.ref._stringRef === r ? e.ref : ((e = function(t) {
                    var e = i.refs;
                    e === rr && (e = i.refs = {}), null === t ? delete e[r] : e[r] = t
                })._stringRef = r, e)
            }
            "string" != typeof t && s("284"), n._owner || s("290", t)
        }
        return t
    }

    function hr(t, e) {
        "textarea" !== t.type && s("31", "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e, "")
    }

    function dr(t) {
        function e(e, n) {
            if (t) {
                var i = e.lastEffect;
                null !== i ? (i.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, i) {
            if (!t) return null;
            for (; null !== i;) e(n, i), i = i.sibling;
            return null
        }

        function i(t, e) {
            for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
            return t
        }

        function r(t, e, n) {
            return (t = Hi(t, e)).index = 0, t.sibling = null, t
        }

        function o(e, n, i) {
            return e.index = i, t ? null !== (i = e.alternate) ? (i = i.index) < n ? (e.effectTag = 2, n) : i : (e.effectTag = 2, n) : n
        }

        function a(e) {
            return t && null === e.alternate && (e.effectTag = 2), e
        }

        function u(t, e, n, i) {
            return null === e || 6 !== e.tag ? ((e = $i(n, t.mode, i)).return = t, e) : ((e = r(e, n)).return = t, e)
        }

        function l(t, e, n, i) {
            return null !== e && e.elementType === n.type ? ((i = r(e, n.props)).ref = pr(t, e, n), i.return = t, i) : ((i = Yi(n.type, n.key, n.props, null, t.mode, i)).ref = pr(t, e, n), i.return = t, i)
        }

        function c(t, e, n, i) {
            return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? ((e = Ki(n, t.mode, i)).return = t, e) : ((e = r(e, n.children || [])).return = t, e)
        }

        function f(t, e, n, i, o) {
            return null === e || 7 !== e.tag ? ((e = Xi(n, t.mode, i, o)).return = t, e) : ((e = r(e, n)).return = t, e)
        }

        function p(t, e, n) {
            if ("string" == typeof e || "number" == typeof e) return (e = $i("" + e, t.mode, n)).return = t, e;
            if ("object" == typeof e && null !== e) {
                switch (e.$$typeof) {
                    case Ht:
                        return (n = Yi(e.type, e.key, e.props, null, t.mode, n)).ref = pr(t, null, e), n.return = t, n;
                    case Yt:
                        return (e = Ki(e, t.mode, n)).return = t, e
                }
                if (fr(e) || se(e)) return (e = Xi(e, t.mode, n, null)).return = t, e;
                hr(t, e)
            }
            return null
        }

        function h(t, e, n, i) {
            var r = null !== e ? e.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== r ? null : u(t, e, "" + n, i);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case Ht:
                        return n.key === r ? n.type === Xt ? f(t, e, n.props.children, i, r) : l(t, e, n, i) : null;
                    case Yt:
                        return n.key === r ? c(t, e, n, i) : null
                }
                if (fr(n) || se(n)) return null !== r ? null : f(t, e, n, i, null);
                hr(t, n)
            }
            return null
        }

        function d(t, e, n, i, r) {
            if ("string" == typeof i || "number" == typeof i) return u(e, t = t.get(n) || null, "" + i, r);
            if ("object" == typeof i && null !== i) {
                switch (i.$$typeof) {
                    case Ht:
                        return t = t.get(null === i.key ? n : i.key) || null, i.type === Xt ? f(e, t, i.props.children, r, i.key) : l(e, t, i, r);
                    case Yt:
                        return c(e, t = t.get(null === i.key ? n : i.key) || null, i, r)
                }
                if (fr(i) || se(i)) return f(e, t = t.get(n) || null, i, r, null);
                hr(e, i)
            }
            return null
        }

        function y(r, s, a, u) {
            for (var l = null, c = null, f = s, y = s = 0, m = null; null !== f && y < a.length; y++) {
                f.index > y ? (m = f, f = null) : m = f.sibling;
                var v = h(r, f, a[y], u);
                if (null === v) {
                    null === f && (f = m);
                    break
                }
                t && f && null === v.alternate && e(r, f), s = o(v, s, y), null === c ? l = v : c.sibling = v, c = v, f = m
            }
            if (y === a.length) return n(r, f), l;
            if (null === f) {
                for (; y < a.length; y++)(f = p(r, a[y], u)) && (s = o(f, s, y), null === c ? l = f : c.sibling = f, c = f);
                return l
            }
            for (f = i(r, f); y < a.length; y++)(m = d(f, r, y, a[y], u)) && (t && null !== m.alternate && f.delete(null === m.key ? y : m.key), s = o(m, s, y), null === c ? l = m : c.sibling = m, c = m);
            return t && f.forEach(function(t) {
                return e(r, t)
            }), l
        }

        function m(r, a, u, l) {
            var c = se(u);
            "function" != typeof c && s("150"), null == (u = c.call(u)) && s("151");
            for (var f = c = null, y = a, m = a = 0, v = null, _ = u.next(); null !== y && !_.done; m++, _ = u.next()) {
                y.index > m ? (v = y, y = null) : v = y.sibling;
                var g = h(r, y, _.value, l);
                if (null === g) {
                    y || (y = v);
                    break
                }
                t && y && null === g.alternate && e(r, y), a = o(g, a, m), null === f ? c = g : f.sibling = g, f = g, y = v
            }
            if (_.done) return n(r, y), c;
            if (null === y) {
                for (; !_.done; m++, _ = u.next()) null !== (_ = p(r, _.value, l)) && (a = o(_, a, m), null === f ? c = _ : f.sibling = _, f = _);
                return c
            }
            for (y = i(r, y); !_.done; m++, _ = u.next()) null !== (_ = d(y, r, m, _.value, l)) && (t && null !== _.alternate && y.delete(null === _.key ? m : _.key), a = o(_, a, m), null === f ? c = _ : f.sibling = _, f = _);
            return t && y.forEach(function(t) {
                return e(r, t)
            }), c
        }
        return function(t, i, o, u) {
            var l = "object" == typeof o && null !== o && o.type === Xt && null === o.key;
            l && (o = o.props.children);
            var c = "object" == typeof o && null !== o;
            if (c) switch (o.$$typeof) {
                case Ht:
                    t: {
                        for (c = o.key, l = i; null !== l;) {
                            if (l.key === c) {
                                if (7 === l.tag ? o.type === Xt : l.elementType === o.type) {
                                    n(t, l.sibling), (i = r(l, o.type === Xt ? o.props.children : o.props)).ref = pr(t, l, o), i.return = t, t = i;
                                    break t
                                }
                                n(t, l);
                                break
                            }
                            e(t, l), l = l.sibling
                        }
                        o.type === Xt ? ((i = Xi(o.props.children, t.mode, u, o.key)).return = t, t = i) : ((u = Yi(o.type, o.key, o.props, null, t.mode, u)).ref = pr(t, i, o), u.return = t, t = u)
                    }
                    return a(t);
                case Yt:
                    t: {
                        for (l = o.key; null !== i;) {
                            if (i.key === l) {
                                if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                    n(t, i.sibling), (i = r(i, o.children || [])).return = t, t = i;
                                    break t
                                }
                                n(t, i);
                                break
                            }
                            e(t, i), i = i.sibling
                        }(i = Ki(o, t.mode, u)).return = t,
                        t = i
                    }
                    return a(t)
            }
            if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== i && 6 === i.tag ? (n(t, i.sibling), (i = r(i, o)).return = t, t = i) : (n(t, i), (i = $i(o, t.mode, u)).return = t, t = i), a(t);
            if (fr(o)) return y(t, i, o, u);
            if (se(o)) return m(t, i, o, u);
            if (c && hr(t, o), void 0 === o && !l) switch (t.tag) {
                case 1:
                case 0:
                    s("152", (u = t.type).displayName || u.name || "Component")
            }
            return n(t, i)
        }
    }
    var yr = dr(!0),
        mr = dr(!1),
        vr = {},
        _r = {
            current: vr
        },
        gr = {
            current: vr
        },
        Ar = {
            current: vr
        };

    function br(t) {
        return t === vr && s("174"), t
    }

    function Sr(t, e) {
        Ei(Ar, e), Ei(gr, t), Ei(_r, vr);
        var n = e.nodeType;
        switch (n) {
            case 9:
            case 11:
                e = (e = e.documentElement) ? e.namespaceURI : ei(null, "");
                break;
            default:
                e = ei(e = (n = 8 === n ? e.parentNode : e).namespaceURI || null, n = n.tagName)
        }
        ki(_r), Ei(_r, e)
    }

    function wr(t) {
        ki(_r), ki(gr), ki(Ar)
    }

    function Tr(t) {
        br(Ar.current);
        var e = br(_r.current),
            n = ei(e, t.type);
        e !== n && (Ei(gr, t), Ei(_r, n))
    }

    function xr(t) {
        gr.current === t && (ki(_r), ki(gr))
    }
    var Pr = 0,
        kr = 2,
        Er = 4,
        Mr = 8,
        Or = 16,
        Cr = 32,
        Fr = 64,
        Nr = 128,
        Rr = Wt.ReactCurrentDispatcher,
        jr = 0,
        Ir = null,
        qr = null,
        Dr = null,
        Br = null,
        Lr = null,
        Ur = null,
        Vr = 0,
        zr = null,
        Wr = 0,
        Gr = !1,
        Qr = null,
        Hr = 0;

    function Yr() {
        s("307")
    }

    function Xr(t, e) {
        if (null === e) return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!Ke(t[n], e[n])) return !1;
        return !0
    }

    function Zr(t, e, n, i, r, o) {
        if (jr = o, Ir = e, Dr = null !== t ? t.memoizedState : null, Rr.current = null === Dr ? lo : co, e = n(i, r), Gr) {
            do {
                Gr = !1, Hr += 1, Dr = null !== t ? t.memoizedState : null, Ur = Br, zr = Lr = qr = null, Rr.current = co, e = n(i, r)
            } while (Gr);
            Qr = null, Hr = 0
        }
        return Rr.current = uo, (t = Ir).memoizedState = Br, t.expirationTime = Vr, t.updateQueue = zr, t.effectTag |= Wr, t = null !== qr && null !== qr.next, jr = 0, Ur = Lr = Br = Dr = qr = Ir = null, Vr = 0, zr = null, Wr = 0, t && s("300"), e
    }

    function $r() {
        Rr.current = uo, jr = 0, Ur = Lr = Br = Dr = qr = Ir = null, Vr = 0, zr = null, Wr = 0, Gr = !1, Qr = null, Hr = 0
    }

    function Kr() {
        var t = {
            memoizedState: null,
            baseState: null,
            queue: null,
            baseUpdate: null,
            next: null
        };
        return null === Lr ? Br = Lr = t : Lr = Lr.next = t, Lr
    }

    function Jr() {
        if (null !== Ur) Ur = (Lr = Ur).next, Dr = null !== (qr = Dr) ? qr.next : null;
        else {
            null === Dr && s("310");
            var t = {
                memoizedState: (qr = Dr).memoizedState,
                baseState: qr.baseState,
                queue: qr.queue,
                baseUpdate: qr.baseUpdate,
                next: null
            };
            Lr = null === Lr ? Br = t : Lr.next = t, Dr = qr.next
        }
        return Lr
    }

    function to(t, e) {
        return "function" == typeof e ? e(t) : e
    }

    function eo(t) {
        var e = Jr(),
            n = e.queue;
        if (null === n && s("311"), 0 < Hr) {
            var i = n.dispatch;
            if (null !== Qr) {
                var r = Qr.get(n);
                if (void 0 !== r) {
                    Qr.delete(n);
                    var o = e.memoizedState;
                    do {
                        o = t(o, r.action), r = r.next
                    } while (null !== r);
                    return Ke(o, e.memoizedState) || (So = !0), e.memoizedState = o, e.baseUpdate === n.last && (e.baseState = o), n.eagerReducer = t, n.eagerState = o, [o, i]
                }
            }
            return [e.memoizedState, i]
        }
        i = n.last;
        var a = e.baseUpdate;
        if (o = e.baseState, null !== a ? (null !== i && (i.next = null), i = a.next) : i = null !== i ? i.next : null, null !== i) {
            var u = r = null,
                l = i,
                c = !1;
            do {
                var f = l.expirationTime;
                f < jr ? (c || (c = !0, u = a, r = o), f > Vr && (Vr = f)) : o = l.eagerReducer === t ? l.eagerState : t(o, l.action), a = l, l = l.next
            } while (null !== l && l !== i);
            c || (u = a, r = o), Ke(o, e.memoizedState) || (So = !0), e.memoizedState = o, e.baseUpdate = u, e.baseState = r, n.eagerReducer = t, n.eagerState = o
        }
        return [e.memoizedState, n.dispatch]
    }

    function no(t, e, n, i) {
        return t = {
            tag: t,
            create: e,
            destroy: n,
            deps: i,
            next: null
        }, null === zr ? (zr = {
            lastEffect: null
        }).lastEffect = t.next = t : null === (e = zr.lastEffect) ? zr.lastEffect = t.next = t : (n = e.next, e.next = t, t.next = n, zr.lastEffect = t), t
    }

    function io(t, e, n, i) {
        var r = Kr();
        Wr |= t, r.memoizedState = no(e, n, void 0, void 0 === i ? null : i)
    }

    function ro(t, e, n, i) {
        var r = Jr();
        i = void 0 === i ? null : i;
        var o = void 0;
        if (null !== qr) {
            var s = qr.memoizedState;
            if (o = s.destroy, null !== i && Xr(i, s.deps)) return void no(Pr, n, o, i)
        }
        Wr |= t, r.memoizedState = no(e, n, o, i)
    }

    function oo(t, e) {
        return "function" == typeof e ? (t = t(), e(t), function() {
            e(null)
        }) : null != e ? (t = t(), e.current = t, function() {
            e.current = null
        }) : void 0
    }

    function so() {}

    function ao(t, e, n) {
        25 > Hr || s("301");
        var i = t.alternate;
        if (t === Ir || null !== i && i === Ir)
            if (Gr = !0, t = {
                    expirationTime: jr,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }, null === Qr && (Qr = new Map), void 0 === (n = Qr.get(e))) Qr.set(e, t);
            else {
                for (e = n; null !== e.next;) e = e.next;
                e.next = t
            }
        else {
            zs();
            var r = Sa(),
                o = {
                    expirationTime: r = Xs(r, t),
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                },
                a = e.last;
            if (null === a) o.next = o;
            else {
                var u = a.next;
                null !== u && (o.next = u), a.next = o
            }
            if (e.last = o, 0 === t.expirationTime && (null === i || 0 === i.expirationTime) && null !== (i = e.eagerReducer)) try {
                var l = e.eagerState,
                    c = i(l, n);
                if (o.eagerReducer = i, o.eagerState = c, Ke(c, l)) return
            } catch (t) {}
            Ks(t, r)
        }
    }
    var uo = {
            readContext: Vo,
            useCallback: Yr,
            useContext: Yr,
            useEffect: Yr,
            useImperativeHandle: Yr,
            useLayoutEffect: Yr,
            useMemo: Yr,
            useReducer: Yr,
            useRef: Yr,
            useState: Yr,
            useDebugValue: Yr
        },
        lo = {
            readContext: Vo,
            useCallback: function(t, e) {
                return Kr().memoizedState = [t, void 0 === e ? null : e], t
            },
            useContext: Vo,
            useEffect: function(t, e) {
                return io(516, Nr | Fr, t, e)
            },
            useImperativeHandle: function(t, e, n) {
                return n = null != n ? n.concat([t]) : null, io(4, Er | Cr, oo.bind(null, e, t), n)
            },
            useLayoutEffect: function(t, e) {
                return io(4, Er | Cr, t, e)
            },
            useMemo: function(t, e) {
                var n = Kr();
                return e = void 0 === e ? null : e, t = t(), n.memoizedState = [t, e], t
            },
            useReducer: function(t, e, n) {
                var i = Kr();
                return e = void 0 !== n ? n(e) : e, i.memoizedState = i.baseState = e, t = (t = i.queue = {
                    last: null,
                    dispatch: null,
                    eagerReducer: t,
                    eagerState: e
                }).dispatch = ao.bind(null, Ir, t), [i.memoizedState, t]
            },
            useRef: function(t) {
                return t = {
                    current: t
                }, Kr().memoizedState = t
            },
            useState: function(t) {
                var e = Kr();
                return "function" == typeof t && (t = t()), e.memoizedState = e.baseState = t, t = (t = e.queue = {
                    last: null,
                    dispatch: null,
                    eagerReducer: to,
                    eagerState: t
                }).dispatch = ao.bind(null, Ir, t), [e.memoizedState, t]
            },
            useDebugValue: so
        },
        co = {
            readContext: Vo,
            useCallback: function(t, e) {
                var n = Jr();
                e = void 0 === e ? null : e;
                var i = n.memoizedState;
                return null !== i && null !== e && Xr(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t)
            },
            useContext: Vo,
            useEffect: function(t, e) {
                return ro(516, Nr | Fr, t, e)
            },
            useImperativeHandle: function(t, e, n) {
                return n = null != n ? n.concat([t]) : null, ro(4, Er | Cr, oo.bind(null, e, t), n)
            },
            useLayoutEffect: function(t, e) {
                return ro(4, Er | Cr, t, e)
            },
            useMemo: function(t, e) {
                var n = Jr();
                e = void 0 === e ? null : e;
                var i = n.memoizedState;
                return null !== i && null !== e && Xr(e, i[1]) ? i[0] : (t = t(), n.memoizedState = [t, e], t)
            },
            useReducer: eo,
            useRef: function() {
                return Jr().memoizedState
            },
            useState: function(t) {
                return eo(to)
            },
            useDebugValue: so
        },
        fo = null,
        po = null,
        ho = !1;

    function yo(t, e) {
        var n = Gi(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = e, n.return = t, n.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n
    }

    function mo(t, e) {
        switch (t.tag) {
            case 5:
                var n = t.type;
                return null !== (e = 1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (t.stateNode = e, !0);
            case 6:
                return null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) && (t.stateNode = e, !0);
            case 13:
            default:
                return !1
        }
    }

    function vo(t) {
        if (ho) {
            var e = po;
            if (e) {
                var n = e;
                if (!mo(t, e)) {
                    if (!(e = wi(n)) || !mo(t, e)) return t.effectTag |= 2, ho = !1, void(fo = t);
                    yo(fo, n)
                }
                fo = t, po = Ti(e)
            } else t.effectTag |= 2, ho = !1, fo = t
        }
    }

    function _o(t) {
        for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 18 !== t.tag;) t = t.return;
        fo = t
    }

    function go(t) {
        if (t !== fo) return !1;
        if (!ho) return _o(t), ho = !0, !1;
        var e = t.type;
        if (5 !== t.tag || "head" !== e && "body" !== e && !_i(e, t.memoizedProps))
            for (e = po; e;) yo(t, e), e = wi(e);
        return _o(t), po = fo ? wi(t.stateNode) : null, !0
    }

    function Ao() {
        po = fo = null, ho = !1
    }
    var bo = Wt.ReactCurrentOwner,
        So = !1;

    function wo(t, e, n, i) {
        e.child = null === t ? mr(e, null, n, i) : yr(e, t.child, n, i)
    }

    function To(t, e, n, i, r) {
        n = n.render;
        var o = e.ref;
        return Uo(e, r), i = Zr(t, e, n, i, o, r), null === t || So ? (e.effectTag |= 1, wo(t, e, i, r), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= r && (t.expirationTime = 0), No(t, e, r))
    }

    function xo(t, e, n, i, r, o) {
        if (null === t) {
            var s = n.type;
            return "function" != typeof s || Qi(s) || void 0 !== s.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((t = Yi(n.type, null, i, null, e.mode, o)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = s, Po(t, e, s, i, r, o))
        }
        return s = t.child, r < o && (r = s.memoizedProps, (n = null !== (n = n.compare) ? n : tn)(r, i) && t.ref === e.ref) ? No(t, e, o) : (e.effectTag |= 1, (t = Hi(s, i)).ref = e.ref, t.return = e, e.child = t)
    }

    function Po(t, e, n, i, r, o) {
        return null !== t && tn(t.memoizedProps, i) && t.ref === e.ref && (So = !1, r < o) ? No(t, e, o) : Eo(t, e, n, i, o)
    }

    function ko(t, e) {
        var n = e.ref;
        (null === t && null !== n || null !== t && t.ref !== n) && (e.effectTag |= 128)
    }

    function Eo(t, e, n, i, r) {
        var o = Ri(n) ? Fi : Oi.current;
        return o = Ni(e, o), Uo(e, r), n = Zr(t, e, n, i, o, r), null === t || So ? (e.effectTag |= 1, wo(t, e, n, r), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= r && (t.expirationTime = 0), No(t, e, r))
    }

    function Mo(t, e, n, i, r) {
        if (Ri(n)) {
            var o = !0;
            Bi(e)
        } else o = !1;
        if (Uo(e, r), null === e.stateNode) null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), ur(e, n, i), cr(e, n, i, r), i = !0;
        else if (null === t) {
            var s = e.stateNode,
                a = e.memoizedProps;
            s.props = a;
            var u = s.context,
                l = n.contextType;
            "object" == typeof l && null !== l ? l = Vo(l) : l = Ni(e, l = Ri(n) ? Fi : Oi.current);
            var c = n.getDerivedStateFromProps,
                f = "function" == typeof c || "function" == typeof s.getSnapshotBeforeUpdate;
            f || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== i || u !== l) && lr(e, s, i, l), Ho = !1;
            var p = e.memoizedState;
            u = s.state = p;
            var h = e.updateQueue;
            null !== h && (ns(e, h, i, s, r), u = e.memoizedState), a !== i || p !== u || Ci.current || Ho ? ("function" == typeof c && (or(e, n, c, i), u = e.memoizedState), (a = Ho || ar(e, n, a, i, p, u, l)) ? (f || "function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount || ("function" == typeof s.componentWillMount && s.componentWillMount(), "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" == typeof s.componentDidMount && (e.effectTag |= 4)) : ("function" == typeof s.componentDidMount && (e.effectTag |= 4), e.memoizedProps = i, e.memoizedState = u), s.props = i, s.state = u, s.context = l, i = a) : ("function" == typeof s.componentDidMount && (e.effectTag |= 4), i = !1)
        } else s = e.stateNode, a = e.memoizedProps, s.props = e.type === e.elementType ? a : ir(e.type, a), u = s.context, "object" == typeof(l = n.contextType) && null !== l ? l = Vo(l) : l = Ni(e, l = Ri(n) ? Fi : Oi.current), (f = "function" == typeof(c = n.getDerivedStateFromProps) || "function" == typeof s.getSnapshotBeforeUpdate) || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (a !== i || u !== l) && lr(e, s, i, l), Ho = !1, u = e.memoizedState, p = s.state = u, null !== (h = e.updateQueue) && (ns(e, h, i, s, r), p = e.memoizedState), a !== i || u !== p || Ci.current || Ho ? ("function" == typeof c && (or(e, n, c, i), p = e.memoizedState), (c = Ho || ar(e, n, a, i, u, p, l)) ? (f || "function" != typeof s.UNSAFE_componentWillUpdate && "function" != typeof s.componentWillUpdate || ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(i, p, l), "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(i, p, l)), "function" == typeof s.componentDidUpdate && (e.effectTag |= 4), "function" == typeof s.getSnapshotBeforeUpdate && (e.effectTag |= 256)) : ("function" != typeof s.componentDidUpdate || a === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 256), e.memoizedProps = i, e.memoizedState = p), s.props = i, s.state = p, s.context = l, i = c) : ("function" != typeof s.componentDidUpdate || a === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || a === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 256), i = !1);
        return Oo(t, e, n, i, o, r)
    }

    function Oo(t, e, n, i, r, o) {
        ko(t, e);
        var s = 0 != (64 & e.effectTag);
        if (!i && !s) return r && Li(e, n, !1), No(t, e, o);
        i = e.stateNode, bo.current = e;
        var a = s && "function" != typeof n.getDerivedStateFromError ? null : i.render();
        return e.effectTag |= 1, null !== t && s ? (e.child = yr(e, t.child, null, o), e.child = yr(e, null, a, o)) : wo(t, e, a, o), e.memoizedState = i.state, r && Li(e, n, !0), e.child
    }

    function Co(t) {
        var e = t.stateNode;
        e.pendingContext ? qi(0, e.pendingContext, e.pendingContext !== e.context) : e.context && qi(0, e.context, !1), Sr(t, e.containerInfo)
    }

    function Fo(t, e, n) {
        var i = e.mode,
            r = e.pendingProps,
            o = e.memoizedState;
        if (0 == (64 & e.effectTag)) {
            o = null;
            var s = !1
        } else o = {
            timedOutAt: null !== o ? o.timedOutAt : 0
        }, s = !0, e.effectTag &= -65;
        if (null === t)
            if (s) {
                var a = r.fallback;
                t = Xi(null, i, 0, null), 0 == (1 & e.mode) && (t.child = null !== e.memoizedState ? e.child.child : e.child), i = Xi(a, i, n, null), t.sibling = i, (n = t).return = i.return = e
            } else n = i = mr(e, null, r.children, n);
        else null !== t.memoizedState ? (a = (i = t.child).sibling, s ? (n = r.fallback, r = Hi(i, i.pendingProps), 0 == (1 & e.mode) && ((s = null !== e.memoizedState ? e.child.child : e.child) !== i.child && (r.child = s)), i = r.sibling = Hi(a, n, a.expirationTime), n = r, r.childExpirationTime = 0, n.return = i.return = e) : n = i = yr(e, i.child, r.children, n)) : (a = t.child, s ? (s = r.fallback, (r = Xi(null, i, 0, null)).child = a, 0 == (1 & e.mode) && (r.child = null !== e.memoizedState ? e.child.child : e.child), (i = r.sibling = Xi(s, i, n, null)).effectTag |= 2, n = r, r.childExpirationTime = 0, n.return = i.return = e) : i = n = yr(e, a, r.children, n)), e.stateNode = t.stateNode;
        return e.memoizedState = o, e.child = n, i
    }

    function No(t, e, n) {
        if (null !== t && (e.contextDependencies = t.contextDependencies), e.childExpirationTime < n) return null;
        if (null !== t && e.child !== t.child && s("153"), null !== e.child) {
            for (n = Hi(t = e.child, t.pendingProps, t.expirationTime), e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = Hi(t, t.pendingProps, t.expirationTime)).return = e;
            n.sibling = null
        }
        return e.child
    }

    function Ro(t, e, n) {
        var i = e.expirationTime;
        if (null !== t) {
            if (t.memoizedProps !== e.pendingProps || Ci.current) So = !0;
            else if (i < n) {
                switch (So = !1, e.tag) {
                    case 3:
                        Co(e), Ao();
                        break;
                    case 5:
                        Tr(e);
                        break;
                    case 1:
                        Ri(e.type) && Bi(e);
                        break;
                    case 4:
                        Sr(e, e.stateNode.containerInfo);
                        break;
                    case 10:
                        Bo(e, e.memoizedProps.value);
                        break;
                    case 13:
                        if (null !== e.memoizedState) return 0 !== (i = e.child.childExpirationTime) && i >= n ? Fo(t, e, n) : null !== (e = No(t, e, n)) ? e.sibling : null
                }
                return No(t, e, n)
            }
        } else So = !1;
        switch (e.expirationTime = 0, e.tag) {
            case 2:
                i = e.elementType, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps;
                var r = Ni(e, Oi.current);
                if (Uo(e, n), r = Zr(null, e, i, t, r, n), e.effectTag |= 1, "object" == typeof r && null !== r && "function" == typeof r.render && void 0 === r.$$typeof) {
                    if (e.tag = 1, $r(), Ri(i)) {
                        var o = !0;
                        Bi(e)
                    } else o = !1;
                    e.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null;
                    var a = i.getDerivedStateFromProps;
                    "function" == typeof a && or(e, i, a, t), r.updater = sr, e.stateNode = r, r._reactInternalFiber = e, cr(e, i, t, n), e = Oo(null, e, i, !0, o, n)
                } else e.tag = 0, wo(null, e, r, n), e = e.child;
                return e;
            case 16:
                switch (r = e.elementType, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), o = e.pendingProps, t = function(t) {
                    var e = t._result;
                    switch (t._status) {
                        case 1:
                            return e;
                        case 2:
                        case 0:
                            throw e;
                        default:
                            switch (t._status = 0, (e = (e = t._ctor)()).then(function(e) {
                                0 === t._status && (e = e.default, t._status = 1, t._result = e)
                            }, function(e) {
                                0 === t._status && (t._status = 2, t._result = e)
                            }), t._status) {
                                case 1:
                                    return t._result;
                                case 2:
                                    throw t._result
                            }
                            throw t._result = e, e
                    }
                }(r), e.type = t, r = e.tag = function(t) {
                    if ("function" == typeof t) return Qi(t) ? 1 : 0;
                    if (null != t) {
                        if ((t = t.$$typeof) === ee) return 11;
                        if (t === ie) return 14
                    }
                    return 2
                }(t), o = ir(t, o), a = void 0, r) {
                    case 0:
                        a = Eo(null, e, t, o, n);
                        break;
                    case 1:
                        a = Mo(null, e, t, o, n);
                        break;
                    case 11:
                        a = To(null, e, t, o, n);
                        break;
                    case 14:
                        a = xo(null, e, t, ir(t.type, o), i, n);
                        break;
                    default:
                        s("306", t, "")
                }
                return a;
            case 0:
                return i = e.type, r = e.pendingProps, Eo(t, e, i, r = e.elementType === i ? r : ir(i, r), n);
            case 1:
                return i = e.type, r = e.pendingProps, Mo(t, e, i, r = e.elementType === i ? r : ir(i, r), n);
            case 3:
                return Co(e), null === (i = e.updateQueue) && s("282"), r = null !== (r = e.memoizedState) ? r.element : null, ns(e, i, e.pendingProps, null, n), (i = e.memoizedState.element) === r ? (Ao(), e = No(t, e, n)) : (r = e.stateNode, (r = (null === t || null === t.child) && r.hydrate) && (po = Ti(e.stateNode.containerInfo), fo = e, r = ho = !0), r ? (e.effectTag |= 2, e.child = mr(e, null, i, n)) : (wo(t, e, i, n), Ao()), e = e.child), e;
            case 5:
                return Tr(e), null === t && vo(e), i = e.type, r = e.pendingProps, o = null !== t ? t.memoizedProps : null, a = r.children, _i(i, r) ? a = null : null !== o && _i(i, o) && (e.effectTag |= 16), ko(t, e), 1 !== n && 1 & e.mode && r.hidden ? (e.expirationTime = e.childExpirationTime = 1, e = null) : (wo(t, e, a, n), e = e.child), e;
            case 6:
                return null === t && vo(e), null;
            case 13:
                return Fo(t, e, n);
            case 4:
                return Sr(e, e.stateNode.containerInfo), i = e.pendingProps, null === t ? e.child = yr(e, null, i, n) : wo(t, e, i, n), e.child;
            case 11:
                return i = e.type, r = e.pendingProps, To(t, e, i, r = e.elementType === i ? r : ir(i, r), n);
            case 7:
                return wo(t, e, e.pendingProps, n), e.child;
            case 8:
            case 12:
                return wo(t, e, e.pendingProps.children, n), e.child;
            case 10:
                t: {
                    if (i = e.type._context, r = e.pendingProps, a = e.memoizedProps, Bo(e, o = r.value), null !== a) {
                        var u = a.value;
                        if (0 === (o = Ke(u, o) ? 0 : 0 | ("function" == typeof i._calculateChangedBits ? i._calculateChangedBits(u, o) : 1073741823))) {
                            if (a.children === r.children && !Ci.current) {
                                e = No(t, e, n);
                                break t
                            }
                        } else
                            for (null !== (u = e.child) && (u.return = e); null !== u;) {
                                var l = u.contextDependencies;
                                if (null !== l) {
                                    a = u.child;
                                    for (var c = l.first; null !== c;) {
                                        if (c.context === i && 0 != (c.observedBits & o)) {
                                            1 === u.tag && ((c = Zo(n)).tag = Go, Ko(u, c)), u.expirationTime < n && (u.expirationTime = n), null !== (c = u.alternate) && c.expirationTime < n && (c.expirationTime = n), c = n;
                                            for (var f = u.return; null !== f;) {
                                                var p = f.alternate;
                                                if (f.childExpirationTime < c) f.childExpirationTime = c, null !== p && p.childExpirationTime < c && (p.childExpirationTime = c);
                                                else {
                                                    if (!(null !== p && p.childExpirationTime < c)) break;
                                                    p.childExpirationTime = c
                                                }
                                                f = f.return
                                            }
                                            l.expirationTime < n && (l.expirationTime = n);
                                            break
                                        }
                                        c = c.next
                                    }
                                } else a = 10 === u.tag && u.type === e.type ? null : u.child;
                                if (null !== a) a.return = u;
                                else
                                    for (a = u; null !== a;) {
                                        if (a === e) {
                                            a = null;
                                            break
                                        }
                                        if (null !== (u = a.sibling)) {
                                            u.return = a.return, a = u;
                                            break
                                        }
                                        a = a.return
                                    }
                                u = a
                            }
                    }
                    wo(t, e, r.children, n),
                    e = e.child
                }
                return e;
            case 9:
                return r = e.type, i = (o = e.pendingProps).children, Uo(e, n), i = i(r = Vo(r, o.unstable_observedBits)), e.effectTag |= 1, wo(t, e, i, n), e.child;
            case 14:
                return o = ir(r = e.type, e.pendingProps), xo(t, e, r, o = ir(r.type, o), i, n);
            case 15:
                return Po(t, e, e.type, e.pendingProps, i, n);
            case 17:
                return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : ir(i, r), null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), e.tag = 1, Ri(i) ? (t = !0, Bi(e)) : t = !1, Uo(e, n), ur(e, i, r), cr(e, i, r, n), Oo(null, e, i, !0, t, n)
        }
        s("156")
    }
    var jo = {
            current: null
        },
        Io = null,
        qo = null,
        Do = null;

    function Bo(t, e) {
        var n = t.type._context;
        Ei(jo, n._currentValue), n._currentValue = e
    }

    function Lo(t) {
        var e = jo.current;
        ki(jo), t.type._context._currentValue = e
    }

    function Uo(t, e) {
        Io = t, Do = qo = null;
        var n = t.contextDependencies;
        null !== n && n.expirationTime >= e && (So = !0), t.contextDependencies = null
    }

    function Vo(t, e) {
        return Do !== t && !1 !== e && 0 !== e && ("number" == typeof e && 1073741823 !== e || (Do = t, e = 1073741823), e = {
            context: t,
            observedBits: e,
            next: null
        }, null === qo ? (null === Io && s("308"), qo = e, Io.contextDependencies = {
            first: e,
            expirationTime: 0
        }) : qo = qo.next = e), t._currentValue
    }
    var zo = 0,
        Wo = 1,
        Go = 2,
        Qo = 3,
        Ho = !1;

    function Yo(t) {
        return {
            baseState: t,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function Xo(t) {
        return {
            baseState: t.baseState,
            firstUpdate: t.firstUpdate,
            lastUpdate: t.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function Zo(t) {
        return {
            expirationTime: t,
            tag: zo,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }

    function $o(t, e) {
        null === t.lastUpdate ? t.firstUpdate = t.lastUpdate = e : (t.lastUpdate.next = e, t.lastUpdate = e)
    }

    function Ko(t, e) {
        var n = t.alternate;
        if (null === n) {
            var i = t.updateQueue,
                r = null;
            null === i && (i = t.updateQueue = Yo(t.memoizedState))
        } else i = t.updateQueue, r = n.updateQueue, null === i ? null === r ? (i = t.updateQueue = Yo(t.memoizedState), r = n.updateQueue = Yo(n.memoizedState)) : i = t.updateQueue = Xo(r) : null === r && (r = n.updateQueue = Xo(i));
        null === r || i === r ? $o(i, e) : null === i.lastUpdate || null === r.lastUpdate ? ($o(i, e), $o(r, e)) : ($o(i, e), r.lastUpdate = e)
    }

    function Jo(t, e) {
        var n = t.updateQueue;
        null === (n = null === n ? t.updateQueue = Yo(t.memoizedState) : ts(t, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = e : (n.lastCapturedUpdate.next = e, n.lastCapturedUpdate = e)
    }

    function ts(t, e) {
        var n = t.alternate;
        return null !== n && e === n.updateQueue && (e = t.updateQueue = Xo(e)), e
    }

    function es(t, e, n, i, o, s) {
        switch (n.tag) {
            case Wo:
                return "function" == typeof(t = n.payload) ? t.call(s, i, o) : t;
            case Qo:
                t.effectTag = -2049 & t.effectTag | 64;
            case zo:
                if (null == (o = "function" == typeof(t = n.payload) ? t.call(s, i, o) : t)) break;
                return r({}, i, o);
            case Go:
                Ho = !0
        }
        return i
    }

    function ns(t, e, n, i, r) {
        Ho = !1;
        for (var o = (e = ts(t, e)).baseState, s = null, a = 0, u = e.firstUpdate, l = o; null !== u;) {
            var c = u.expirationTime;
            c < r ? (null === s && (s = u, o = l), a < c && (a = c)) : (l = es(t, 0, u, l, n, i), null !== u.callback && (t.effectTag |= 32, u.nextEffect = null, null === e.lastEffect ? e.firstEffect = e.lastEffect = u : (e.lastEffect.nextEffect = u, e.lastEffect = u))), u = u.next
        }
        for (c = null, u = e.firstCapturedUpdate; null !== u;) {
            var f = u.expirationTime;
            f < r ? (null === c && (c = u, null === s && (o = l)), a < f && (a = f)) : (l = es(t, 0, u, l, n, i), null !== u.callback && (t.effectTag |= 32, u.nextEffect = null, null === e.lastCapturedEffect ? e.firstCapturedEffect = e.lastCapturedEffect = u : (e.lastCapturedEffect.nextEffect = u, e.lastCapturedEffect = u))), u = u.next
        }
        null === s && (e.lastUpdate = null), null === c ? e.lastCapturedUpdate = null : t.effectTag |= 32, null === s && null === c && (o = l), e.baseState = o, e.firstUpdate = s, e.firstCapturedUpdate = c, t.expirationTime = a, t.memoizedState = l
    }

    function is(t, e, n) {
        null !== e.firstCapturedUpdate && (null !== e.lastUpdate && (e.lastUpdate.next = e.firstCapturedUpdate, e.lastUpdate = e.lastCapturedUpdate), e.firstCapturedUpdate = e.lastCapturedUpdate = null), rs(e.firstEffect, n), e.firstEffect = e.lastEffect = null, rs(e.firstCapturedEffect, n), e.firstCapturedEffect = e.lastCapturedEffect = null
    }

    function rs(t, e) {
        for (; null !== t;) {
            var n = t.callback;
            if (null !== n) {
                t.callback = null;
                var i = e;
                "function" != typeof n && s("191", n), n.call(i)
            }
            t = t.nextEffect
        }
    }

    function os(t, e) {
        return {
            value: t,
            source: e,
            stack: ue(e)
        }
    }

    function ss(t) {
        t.effectTag |= 4
    }
    var as = void 0,
        us = void 0,
        ls = void 0,
        cs = void 0;
    as = function(t, e) {
        for (var n = e.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === e) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === e) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, us = function() {}, ls = function(t, e, n, i, o) {
        var s = t.memoizedProps;
        if (s !== i) {
            var a = e.stateNode;
            switch (br(_r.current), t = null, n) {
                case "input":
                    s = ge(a, s), i = ge(a, i), t = [];
                    break;
                case "option":
                    s = Hn(a, s), i = Hn(a, i), t = [];
                    break;
                case "select":
                    s = r({}, s, {
                        value: void 0
                    }), i = r({}, i, {
                        value: void 0
                    }), t = [];
                    break;
                case "textarea":
                    s = Xn(a, s), i = Xn(a, i), t = [];
                    break;
                default:
                    "function" != typeof s.onClick && "function" == typeof i.onClick && (a.onclick = di)
            }
            fi(n, i), a = n = void 0;
            var u = null;
            for (n in s)
                if (!i.hasOwnProperty(n) && s.hasOwnProperty(n) && null != s[n])
                    if ("style" === n) {
                        var l = s[n];
                        for (a in l) l.hasOwnProperty(a) && (u || (u = {}), u[a] = "")
                    } else "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (g.hasOwnProperty(n) ? t || (t = []) : (t = t || []).push(n, null));
            for (n in i) {
                var c = i[n];
                if (l = null != s ? s[n] : void 0, i.hasOwnProperty(n) && c !== l && (null != c || null != l))
                    if ("style" === n)
                        if (l) {
                            for (a in l) !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (u || (u = {}), u[a] = "");
                            for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (u || (u = {}), u[a] = c[a])
                        } else u || (t || (t = []), t.push(n, u)), u = c;
                else "dangerouslySetInnerHTML" === n ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, null != c && l !== c && (t = t || []).push(n, "" + c)) : "children" === n ? l === c || "string" != typeof c && "number" != typeof c || (t = t || []).push(n, "" + c) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (g.hasOwnProperty(n) ? (null != c && hi(o, n), t || l === c || (t = [])) : (t = t || []).push(n, c))
            }
            u && (t = t || []).push("style", u), o = t, (e.updateQueue = o) && ss(e)
        }
    }, cs = function(t, e, n, i) {
        n !== i && ss(e)
    };
    var fs = "function" == typeof WeakSet ? WeakSet : Set;

    function ps(t, e) {
        var n = e.source,
            i = e.stack;
        null === i && null !== n && (i = ue(n)), null !== n && ae(n.type), e = e.value, null !== t && 1 === t.tag && ae(t.type);
        try {
            console.error(e)
        } catch (t) {
            setTimeout(function() {
                throw t
            })
        }
    }

    function hs(t) {
        var e = t.ref;
        if (null !== e)
            if ("function" == typeof e) try {
                e(null)
            } catch (e) {
                Ys(t, e)
            } else e.current = null
    }

    function ds(t, e, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var i = n = n.next;
            do {
                if ((i.tag & t) !== Pr) {
                    var r = i.destroy;
                    i.destroy = void 0, void 0 !== r && r()
                }(i.tag & e) !== Pr && (r = i.create, i.destroy = r()), i = i.next
            } while (i !== n)
        }
    }

    function ys(t) {
        switch ("function" == typeof Vi && Vi(t), t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                var e = t.updateQueue;
                if (null !== e && null !== (e = e.lastEffect)) {
                    var n = e = e.next;
                    do {
                        var i = n.destroy;
                        if (void 0 !== i) {
                            var r = t;
                            try {
                                i()
                            } catch (t) {
                                Ys(r, t)
                            }
                        }
                        n = n.next
                    } while (n !== e)
                }
                break;
            case 1:
                if (hs(t), "function" == typeof(e = t.stateNode).componentWillUnmount) try {
                    e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                } catch (e) {
                    Ys(t, e)
                }
                break;
            case 5:
                hs(t);
                break;
            case 4:
                _s(t)
        }
    }

    function ms(t) {
        return 5 === t.tag || 3 === t.tag || 4 === t.tag
    }

    function vs(t) {
        t: {
            for (var e = t.return; null !== e;) {
                if (ms(e)) {
                    var n = e;
                    break t
                }
                e = e.return
            }
            s("160"),
            n = void 0
        }
        var i = e = void 0;
        switch (n.tag) {
            case 5:
                e = n.stateNode, i = !1;
                break;
            case 3:
            case 4:
                e = n.stateNode.containerInfo, i = !0;
                break;
            default:
                s("161")
        }
        16 & n.effectTag && (oi(e, ""), n.effectTag &= -17);t: e: for (n = t;;) {
            for (; null === n.sibling;) {
                if (null === n.return || ms(n.return)) {
                    n = null;
                    break t
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.effectTag) continue e;
                if (null === n.child || 4 === n.tag) continue e;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break t
            }
        }
        for (var r = t;;) {
            if (5 === r.tag || 6 === r.tag)
                if (n)
                    if (i) {
                        var o = e,
                            a = r.stateNode,
                            u = n;
                        8 === o.nodeType ? o.parentNode.insertBefore(a, u) : o.insertBefore(a, u)
                    } else e.insertBefore(r.stateNode, n);
            else i ? (a = e, u = r.stateNode, 8 === a.nodeType ? (o = a.parentNode).insertBefore(u, a) : (o = a).appendChild(u), null != (a = a._reactRootContainer) || null !== o.onclick || (o.onclick = di)) : e.appendChild(r.stateNode);
            else if (4 !== r.tag && null !== r.child) {
                r.child.return = r, r = r.child;
                continue
            }
            if (r === t) break;
            for (; null === r.sibling;) {
                if (null === r.return || r.return === t) return;
                r = r.return
            }
            r.sibling.return = r.return, r = r.sibling
        }
    }

    function _s(t) {
        for (var e = t, n = !1, i = void 0, r = void 0;;) {
            if (!n) {
                n = e.return;
                t: for (;;) {
                    switch (null === n && s("160"), n.tag) {
                        case 5:
                            i = n.stateNode, r = !1;
                            break t;
                        case 3:
                        case 4:
                            i = n.stateNode.containerInfo, r = !0;
                            break t
                    }
                    n = n.return
                }
                n = !0
            }
            if (5 === e.tag || 6 === e.tag) {
                t: for (var o = e, a = o;;)
                    if (ys(a), null !== a.child && 4 !== a.tag) a.child.return = a, a = a.child;
                    else {
                        if (a === o) break;
                        for (; null === a.sibling;) {
                            if (null === a.return || a.return === o) break t;
                            a = a.return
                        }
                        a.sibling.return = a.return, a = a.sibling
                    }r ? (o = i, a = e.stateNode, 8 === o.nodeType ? o.parentNode.removeChild(a) : o.removeChild(a)) : i.removeChild(e.stateNode)
            }
            else if (4 === e.tag) {
                if (null !== e.child) {
                    i = e.stateNode.containerInfo, r = !0, e.child.return = e, e = e.child;
                    continue
                }
            } else if (ys(e), null !== e.child) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; null === e.sibling;) {
                if (null === e.return || e.return === t) return;
                4 === (e = e.return).tag && (n = !1)
            }
            e.sibling.return = e.return, e = e.sibling
        }
    }

    function gs(t, e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ds(Er, Mr, e);
                break;
            case 1:
                break;
            case 5:
                var n = e.stateNode;
                if (null != n) {
                    var i = e.memoizedProps;
                    t = null !== t ? t.memoizedProps : i;
                    var r = e.type,
                        o = e.updateQueue;
                    e.updateQueue = null, null !== o && function(t, e, n, i, r) {
                        t[R] = r, "input" === n && "radio" === r.type && null != r.name && be(t, r), pi(n, i), i = pi(n, r);
                        for (var o = 0; o < e.length; o += 2) {
                            var s = e[o],
                                a = e[o + 1];
                            "style" === s ? li(t, a) : "dangerouslySetInnerHTML" === s ? ri(t, a) : "children" === s ? oi(t, a) : ve(t, s, a, i)
                        }
                        switch (n) {
                            case "input":
                                Se(t, r);
                                break;
                            case "textarea":
                                $n(t, r);
                                break;
                            case "select":
                                e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!r.multiple, null != (n = r.value) ? Yn(t, !!r.multiple, n, !1) : e !== !!r.multiple && (null != r.defaultValue ? Yn(t, !!r.multiple, r.defaultValue, !0) : Yn(t, !!r.multiple, r.multiple ? [] : "", !1))
                        }
                    }(n, o, r, t, i)
                }
                break;
            case 6:
                null === e.stateNode && s("162"), e.stateNode.nodeValue = e.memoizedProps;
                break;
            case 3:
            case 12:
                break;
            case 13:
                if (n = e.memoizedState, i = void 0, t = e, null === n ? i = !1 : (i = !0, t = e.child, 0 === n.timedOutAt && (n.timedOutAt = Sa())), null !== t && function(t, e) {
                        for (var n = t;;) {
                            if (5 === n.tag) {
                                var i = n.stateNode;
                                if (e) i.style.display = "none";
                                else {
                                    i = n.stateNode;
                                    var r = n.memoizedProps.style;
                                    r = null != r && r.hasOwnProperty("display") ? r.display : null, i.style.display = ui("display", r)
                                }
                            } else if (6 === n.tag) n.stateNode.nodeValue = e ? "" : n.memoizedProps;
                            else {
                                if (13 === n.tag && null !== n.memoizedState) {
                                    (i = n.child.sibling).return = n, n = i;
                                    continue
                                }
                                if (null !== n.child) {
                                    n.child.return = n, n = n.child;
                                    continue
                                }
                            }
                            if (n === t) break;
                            for (; null === n.sibling;) {
                                if (null === n.return || n.return === t) return;
                                n = n.return
                            }
                            n.sibling.return = n.return, n = n.sibling
                        }
                    }(t, i), null !== (n = e.updateQueue)) {
                    e.updateQueue = null;
                    var a = e.stateNode;
                    null === a && (a = e.stateNode = new fs), n.forEach(function(t) {
                        var n = function(t, e) {
                            var n = t.stateNode;
                            null !== n && n.delete(e), e = Xs(e = Sa(), t), null !== (t = $s(t, e)) && (Ji(t, e), 0 !== (e = t.expirationTime) && wa(t, e))
                        }.bind(null, e, t);
                        a.has(t) || (a.add(t), t.then(n, n))
                    })
                }
                break;
            case 17:
                break;
            default:
                s("163")
        }
    }
    var As = "function" == typeof WeakMap ? WeakMap : Map;

    function bs(t, e, n) {
        (n = Zo(n)).tag = Qo, n.payload = {
            element: null
        };
        var i = e.value;
        return n.callback = function() {
            Fa(i), ps(t, e)
        }, n
    }

    function Ss(t, e, n) {
        (n = Zo(n)).tag = Qo;
        var i = t.type.getDerivedStateFromError;
        if ("function" == typeof i) {
            var r = e.value;
            n.payload = function() {
                return i(r)
            }
        }
        var o = t.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
            "function" != typeof i && (null === Ds ? Ds = new Set([this]) : Ds.add(this));
            var n = e.value,
                r = e.stack;
            ps(t, e), this.componentDidCatch(n, {
                componentStack: null !== r ? r : ""
            })
        }), n
    }

    function ws(t) {
        switch (t.tag) {
            case 1:
                Ri(t.type) && ji();
                var e = t.effectTag;
                return 2048 & e ? (t.effectTag = -2049 & e | 64, t) : null;
            case 3:
                return wr(), Ii(), 0 != (64 & (e = t.effectTag)) && s("285"), t.effectTag = -2049 & e | 64, t;
            case 5:
                return xr(t), null;
            case 13:
                return 2048 & (e = t.effectTag) ? (t.effectTag = -2049 & e | 64, t) : null;
            case 18:
                return null;
            case 4:
                return wr(), null;
            case 10:
                return Lo(t), null;
            default:
                return null
        }
    }
    var Ts = Wt.ReactCurrentDispatcher,
        xs = Wt.ReactCurrentOwner,
        Ps = 1073741822,
        ks = !1,
        Es = null,
        Ms = null,
        Os = 0,
        Cs = -1,
        Fs = !1,
        Ns = null,
        Rs = !1,
        js = null,
        Is = null,
        qs = null,
        Ds = null;

    function Bs() {
        if (null !== Es)
            for (var t = Es.return; null !== t;) {
                var e = t;
                switch (e.tag) {
                    case 1:
                        var n = e.type.childContextTypes;
                        null != n && ji();
                        break;
                    case 3:
                        wr(), Ii();
                        break;
                    case 5:
                        xr(e);
                        break;
                    case 4:
                        wr();
                        break;
                    case 10:
                        Lo(e)
                }
                t = t.return
            }
        Ms = null, Os = 0, Cs = -1, Fs = !1, Es = null
    }

    function Ls() {
        for (; null !== Ns;) {
            var t = Ns.effectTag;
            if (16 & t && oi(Ns.stateNode, ""), 128 & t) {
                var e = Ns.alternate;
                null !== e && (null !== (e = e.ref) && ("function" == typeof e ? e(null) : e.current = null))
            }
            switch (14 & t) {
                case 2:
                    vs(Ns), Ns.effectTag &= -3;
                    break;
                case 6:
                    vs(Ns), Ns.effectTag &= -3, gs(Ns.alternate, Ns);
                    break;
                case 4:
                    gs(Ns.alternate, Ns);
                    break;
                case 8:
                    _s(t = Ns), t.return = null, t.child = null, t.memoizedState = null, t.updateQueue = null, null !== (t = t.alternate) && (t.return = null, t.child = null, t.memoizedState = null, t.updateQueue = null)
            }
            Ns = Ns.nextEffect
        }
    }

    function Us() {
        for (; null !== Ns;) {
            if (256 & Ns.effectTag) t: {
                var t = Ns.alternate,
                    e = Ns;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ds(kr, Pr, e);
                        break t;
                    case 1:
                        if (256 & e.effectTag && null !== t) {
                            var n = t.memoizedProps,
                                i = t.memoizedState;
                            e = (t = e.stateNode).getSnapshotBeforeUpdate(e.elementType === e.type ? n : ir(e.type, n), i), t.__reactInternalSnapshotBeforeUpdate = e
                        }
                        break t;
                    case 3:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break t;
                    default:
                        s("163")
                }
            }
            Ns = Ns.nextEffect
        }
    }

    function Vs(t, e) {
        for (; null !== Ns;) {
            var n = Ns.effectTag;
            if (36 & n) {
                var i = Ns.alternate,
                    r = Ns,
                    o = e;
                switch (r.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ds(Or, Cr, r);
                        break;
                    case 1:
                        var a = r.stateNode;
                        if (4 & r.effectTag)
                            if (null === i) a.componentDidMount();
                            else {
                                var u = r.elementType === r.type ? i.memoizedProps : ir(r.type, i.memoizedProps);
                                a.componentDidUpdate(u, i.memoizedState, a.__reactInternalSnapshotBeforeUpdate)
                            } null !== (i = r.updateQueue) && is(0, i, a);
                        break;
                    case 3:
                        if (null !== (i = r.updateQueue)) {
                            if (a = null, null !== r.child) switch (r.child.tag) {
                                case 5:
                                    a = r.child.stateNode;
                                    break;
                                case 1:
                                    a = r.child.stateNode
                            }
                            is(0, i, a)
                        }
                        break;
                    case 5:
                        o = r.stateNode, null === i && 4 & r.effectTag && vi(r.type, r.memoizedProps) && o.focus();
                        break;
                    case 6:
                    case 4:
                    case 12:
                    case 13:
                    case 17:
                        break;
                    default:
                        s("163")
                }
            }
            128 & n && (null !== (r = Ns.ref) && (o = Ns.stateNode, "function" == typeof r ? r(o) : r.current = o)), 512 & n && (js = t), Ns = Ns.nextEffect
        }
    }

    function zs() {
        null !== Is && Si(Is), null !== qs && qs()
    }

    function Ws(t, e) {
        Rs = ks = !0, t.current === e && s("177");
        var n = t.pendingCommitExpirationTime;
        0 === n && s("261"), t.pendingCommitExpirationTime = 0;
        var i = e.expirationTime,
            r = e.childExpirationTime;
        for (function(t, e) {
                if (t.didError = !1, 0 === e) t.earliestPendingTime = 0, t.latestPendingTime = 0, t.earliestSuspendedTime = 0, t.latestSuspendedTime = 0, t.latestPingedTime = 0;
                else {
                    e < t.latestPingedTime && (t.latestPingedTime = 0);
                    var n = t.latestPendingTime;
                    0 !== n && (n > e ? t.earliestPendingTime = t.latestPendingTime = 0 : t.earliestPendingTime > e && (t.earliestPendingTime = t.latestPendingTime)), 0 === (n = t.earliestSuspendedTime) ? Ji(t, e) : e < t.latestSuspendedTime ? (t.earliestSuspendedTime = 0, t.latestSuspendedTime = 0, t.latestPingedTime = 0, Ji(t, e)) : e > n && Ji(t, e)
                }
                nr(0, t)
            }(t, r > i ? r : i), xs.current = null, i = void 0, 1 < e.effectTag ? null !== e.lastEffect ? (e.lastEffect.nextEffect = e, i = e.firstEffect) : i = e : i = e.firstEffect, yi = Tn, mi = function() {
                var t = In();
                if (qn(t)) {
                    if ("selectionStart" in t) var e = {
                        start: t.selectionStart,
                        end: t.selectionEnd
                    };
                    else t: {
                        var n = (e = (e = t.ownerDocument) && e.defaultView || window).getSelection && e.getSelection();
                        if (n && 0 !== n.rangeCount) {
                            e = n.anchorNode;
                            var i = n.anchorOffset,
                                r = n.focusNode;
                            n = n.focusOffset;
                            try {
                                e.nodeType, r.nodeType
                            } catch (t) {
                                e = null;
                                break t
                            }
                            var o = 0,
                                s = -1,
                                a = -1,
                                u = 0,
                                l = 0,
                                c = t,
                                f = null;
                            e: for (;;) {
                                for (var p; c !== e || 0 !== i && 3 !== c.nodeType || (s = o + i), c !== r || 0 !== n && 3 !== c.nodeType || (a = o + n), 3 === c.nodeType && (o += c.nodeValue.length), null !== (p = c.firstChild);) f = c, c = p;
                                for (;;) {
                                    if (c === t) break e;
                                    if (f === e && ++u === i && (s = o), f === r && ++l === n && (a = o), null !== (p = c.nextSibling)) break;
                                    f = (c = f).parentNode
                                }
                                c = p
                            }
                            e = -1 === s || -1 === a ? null : {
                                start: s,
                                end: a
                            }
                        } else e = null
                    }
                    e = e || {
                        start: 0,
                        end: 0
                    }
                } else e = null;
                return {
                    focusedElem: t,
                    selectionRange: e
                }
            }(), Tn = !1, Ns = i; null !== Ns;) {
            r = !1;
            var a = void 0;
            try {
                Us()
            } catch (t) {
                r = !0, a = t
            }
            r && (null === Ns && s("178"), Ys(Ns, a), null !== Ns && (Ns = Ns.nextEffect))
        }
        for (Ns = i; null !== Ns;) {
            r = !1, a = void 0;
            try {
                Ls()
            } catch (t) {
                r = !0, a = t
            }
            r && (null === Ns && s("178"), Ys(Ns, a), null !== Ns && (Ns = Ns.nextEffect))
        }
        for (Dn(mi), mi = null, Tn = !!yi, yi = null, t.current = e, Ns = i; null !== Ns;) {
            r = !1, a = void 0;
            try {
                Vs(t, n)
            } catch (t) {
                r = !0, a = t
            }
            r && (null === Ns && s("178"), Ys(Ns, a), null !== Ns && (Ns = Ns.nextEffect))
        }
        if (null !== i && null !== js) {
            var u = function(t, e) {
                qs = Is = js = null;
                var n = ra;
                ra = !0;
                do {
                    if (512 & e.effectTag) {
                        var i = !1,
                            r = void 0;
                        try {
                            var o = e;
                            ds(Nr, Pr, o), ds(Pr, Fr, o)
                        } catch (t) {
                            i = !0, r = t
                        }
                        i && Ys(e, r)
                    }
                    e = e.nextEffect
                } while (null !== e);
                ra = n, 0 !== (n = t.expirationTime) && wa(t, n), ca || ra || Ea(1073741823, !1)
            }.bind(null, t, i);
            Is = o.unstable_runWithPriority(o.unstable_NormalPriority, function() {
                return bi(u)
            }), qs = u
        }
        ks = Rs = !1, "function" == typeof Ui && Ui(e.stateNode), n = e.expirationTime, 0 === (e = (e = e.childExpirationTime) > n ? e : n) && (Ds = null),
            function(t, e) {
                t.expirationTime = e, t.finishedWork = null
            }(t, e)
    }

    function Gs(t) {
        for (;;) {
            var e = t.alternate,
                n = t.return,
                i = t.sibling;
            if (0 == (1024 & t.effectTag)) {
                Es = t;
                t: {
                    var o = e,
                        a = Os,
                        u = (e = t).pendingProps;
                    switch (e.tag) {
                        case 2:
                        case 16:
                            break;
                        case 15:
                        case 0:
                            break;
                        case 1:
                            Ri(e.type) && ji();
                            break;
                        case 3:
                            wr(), Ii(), (u = e.stateNode).pendingContext && (u.context = u.pendingContext, u.pendingContext = null), null !== o && null !== o.child || (go(e), e.effectTag &= -3), us(e);
                            break;
                        case 5:
                            xr(e);
                            var l = br(Ar.current);
                            if (a = e.type, null !== o && null != e.stateNode) ls(o, e, a, u, l), o.ref !== e.ref && (e.effectTag |= 128);
                            else if (u) {
                                var c = br(_r.current);
                                if (go(e)) {
                                    o = (u = e).stateNode;
                                    var f = u.type,
                                        p = u.memoizedProps,
                                        h = l;
                                    switch (o[N] = u, o[R] = p, a = void 0, l = f) {
                                        case "iframe":
                                        case "object":
                                            xn("load", o);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (f = 0; f < et.length; f++) xn(et[f], o);
                                            break;
                                        case "source":
                                            xn("error", o);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            xn("error", o), xn("load", o);
                                            break;
                                        case "form":
                                            xn("reset", o), xn("submit", o);
                                            break;
                                        case "details":
                                            xn("toggle", o);
                                            break;
                                        case "input":
                                            Ae(o, p), xn("invalid", o), hi(h, "onChange");
                                            break;
                                        case "select":
                                            o._wrapperState = {
                                                wasMultiple: !!p.multiple
                                            }, xn("invalid", o), hi(h, "onChange");
                                            break;
                                        case "textarea":
                                            Zn(o, p), xn("invalid", o), hi(h, "onChange")
                                    }
                                    for (a in fi(l, p), f = null, p) p.hasOwnProperty(a) && (c = p[a], "children" === a ? "string" == typeof c ? o.textContent !== c && (f = ["children", c]) : "number" == typeof c && o.textContent !== "" + c && (f = ["children", "" + c]) : g.hasOwnProperty(a) && null != c && hi(h, a));
                                    switch (l) {
                                        case "input":
                                            Vt(o), we(o, p, !0);
                                            break;
                                        case "textarea":
                                            Vt(o), Kn(o);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof p.onClick && (o.onclick = di)
                                    }
                                    a = f, u.updateQueue = a, (u = null !== a) && ss(e)
                                } else {
                                    p = e, o = a, h = u, f = 9 === l.nodeType ? l : l.ownerDocument, c === Jn.html && (c = ti(o)), c === Jn.html ? "script" === o ? ((o = f.createElement("div")).innerHTML = "<script><\/script>", f = o.removeChild(o.firstChild)) : "string" == typeof h.is ? f = f.createElement(o, {
                                        is: h.is
                                    }) : (f = f.createElement(o), "select" === o && h.multiple && (f.multiple = !0)) : f = f.createElementNS(c, o), (o = f)[N] = p, o[R] = u, as(o, e, !1, !1), h = o;
                                    var d = l,
                                        y = pi(f = a, p = u);
                                    switch (f) {
                                        case "iframe":
                                        case "object":
                                            xn("load", h), l = p;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (l = 0; l < et.length; l++) xn(et[l], h);
                                            l = p;
                                            break;
                                        case "source":
                                            xn("error", h), l = p;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            xn("error", h), xn("load", h), l = p;
                                            break;
                                        case "form":
                                            xn("reset", h), xn("submit", h), l = p;
                                            break;
                                        case "details":
                                            xn("toggle", h), l = p;
                                            break;
                                        case "input":
                                            Ae(h, p), l = ge(h, p), xn("invalid", h), hi(d, "onChange");
                                            break;
                                        case "option":
                                            l = Hn(h, p);
                                            break;
                                        case "select":
                                            h._wrapperState = {
                                                wasMultiple: !!p.multiple
                                            }, l = r({}, p, {
                                                value: void 0
                                            }), xn("invalid", h), hi(d, "onChange");
                                            break;
                                        case "textarea":
                                            Zn(h, p), l = Xn(h, p), xn("invalid", h), hi(d, "onChange");
                                            break;
                                        default:
                                            l = p
                                    }
                                    fi(f, l), c = void 0;
                                    var m = f,
                                        v = h,
                                        _ = l;
                                    for (c in _)
                                        if (_.hasOwnProperty(c)) {
                                            var A = _[c];
                                            "style" === c ? li(v, A) : "dangerouslySetInnerHTML" === c ? null != (A = A ? A.__html : void 0) && ri(v, A) : "children" === c ? "string" == typeof A ? ("textarea" !== m || "" !== A) && oi(v, A) : "number" == typeof A && oi(v, "" + A) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (g.hasOwnProperty(c) ? null != A && hi(d, c) : null != A && ve(v, c, A, y))
                                        } switch (f) {
                                        case "input":
                                            Vt(h), we(h, p, !1);
                                            break;
                                        case "textarea":
                                            Vt(h), Kn(h);
                                            break;
                                        case "option":
                                            null != p.value && h.setAttribute("value", "" + _e(p.value));
                                            break;
                                        case "select":
                                            (l = h).multiple = !!p.multiple, null != (h = p.value) ? Yn(l, !!p.multiple, h, !1) : null != p.defaultValue && Yn(l, !!p.multiple, p.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof l.onClick && (h.onclick = di)
                                    }(u = vi(a, u)) && ss(e), e.stateNode = o
                                }
                                null !== e.ref && (e.effectTag |= 128)
                            } else null === e.stateNode && s("166");
                            break;
                        case 6:
                            o && null != e.stateNode ? cs(o, e, o.memoizedProps, u) : ("string" != typeof u && (null === e.stateNode && s("166")), o = br(Ar.current), br(_r.current), go(e) ? (a = (u = e).stateNode, o = u.memoizedProps, a[N] = u, (u = a.nodeValue !== o) && ss(e)) : (a = e, (u = (9 === o.nodeType ? o : o.ownerDocument).createTextNode(u))[N] = e, a.stateNode = u));
                            break;
                        case 11:
                            break;
                        case 13:
                            if (u = e.memoizedState, 0 != (64 & e.effectTag)) {
                                e.expirationTime = a, Es = e;
                                break t
                            }
                            u = null !== u, a = null !== o && null !== o.memoizedState, null !== o && !u && a && (null !== (o = o.child.sibling) && (null !== (l = e.firstEffect) ? (e.firstEffect = o, o.nextEffect = l) : (e.firstEffect = e.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), (u || a) && (e.effectTag |= 4);
                            break;
                        case 7:
                        case 8:
                        case 12:
                            break;
                        case 4:
                            wr(), us(e);
                            break;
                        case 10:
                            Lo(e);
                            break;
                        case 9:
                        case 14:
                            break;
                        case 17:
                            Ri(e.type) && ji();
                            break;
                        case 18:
                            break;
                        default:
                            s("156")
                    }
                    Es = null
                }
                if (e = t, 1 === Os || 1 !== e.childExpirationTime) {
                    for (u = 0, a = e.child; null !== a;)(o = a.expirationTime) > u && (u = o), (l = a.childExpirationTime) > u && (u = l), a = a.sibling;
                    e.childExpirationTime = u
                }
                if (null !== Es) return Es;
                null !== n && 0 == (1024 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = t.firstEffect), n.lastEffect = t.lastEffect), 1 < t.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = t : n.firstEffect = t, n.lastEffect = t))
            } else {
                if (null !== (t = ws(t))) return t.effectTag &= 1023, t;
                null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= 1024)
            }
            if (null !== i) return i;
            if (null === n) break;
            t = n
        }
        return null
    }

    function Qs(t) {
        var e = Ro(t.alternate, t, Os);
        return t.memoizedProps = t.pendingProps, null === e && (e = Gs(t)), xs.current = null, e
    }

    function Hs(t, e) {
        ks && s("243"), zs(), ks = !0;
        var n = Ts.current;
        Ts.current = uo;
        var i = t.nextExpirationTimeToWorkOn;
        i === Os && t === Ms && null !== Es || (Bs(), Os = i, Es = Hi((Ms = t).current, null), t.pendingCommitExpirationTime = 0);
        for (var r = !1;;) {
            try {
                if (e)
                    for (; null !== Es && !Pa();) Es = Qs(Es);
                else
                    for (; null !== Es;) Es = Qs(Es)
            } catch (e) {
                if (Do = qo = Io = null, $r(), null === Es) r = !0, Fa(e);
                else {
                    null === Es && s("271");
                    var o = Es,
                        a = o.return;
                    if (null !== a) {
                        t: {
                            var u = t,
                                l = a,
                                c = o,
                                f = e;
                            if (a = Os, c.effectTag |= 1024, c.firstEffect = c.lastEffect = null, null !== f && "object" == typeof f && "function" == typeof f.then) {
                                var p = f;
                                f = l;
                                var h = -1,
                                    d = -1;
                                do {
                                    if (13 === f.tag) {
                                        var y = f.alternate;
                                        if (null !== y && null !== (y = y.memoizedState)) {
                                            d = 10 * (1073741822 - y.timedOutAt);
                                            break
                                        }
                                        "number" == typeof(y = f.pendingProps.maxDuration) && (0 >= y ? h = 0 : (-1 === h || y < h) && (h = y))
                                    }
                                    f = f.return
                                } while (null !== f);
                                f = l;
                                do {
                                    if ((y = 13 === f.tag) && (y = void 0 !== f.memoizedProps.fallback && null === f.memoizedState), y) {
                                        if (null === (l = f.updateQueue) ? ((l = new Set).add(p), f.updateQueue = l) : l.add(p), 0 == (1 & f.mode)) {
                                            f.effectTag |= 64, c.effectTag &= -1957, 1 === c.tag && (null === c.alternate ? c.tag = 17 : ((a = Zo(1073741823)).tag = Go, Ko(c, a))), c.expirationTime = 1073741823;
                                            break t
                                        }
                                        l = a;
                                        var m = (c = u).pingCache;
                                        null === m ? (m = c.pingCache = new As, y = new Set, m.set(p, y)) : void 0 === (y = m.get(p)) && (y = new Set, m.set(p, y)), y.has(l) || (y.add(l), c = Zs.bind(null, c, p, l), p.then(c, c)), -1 === h ? u = 1073741823 : (-1 === d && (d = 10 * (1073741822 - er(u, a)) - 5e3), u = d + h), 0 <= u && Cs < u && (Cs = u), f.effectTag |= 2048, f.expirationTime = a;
                                        break t
                                    }
                                    f = f.return
                                } while (null !== f);
                                f = Error((ae(c.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ue(c))
                            }
                            Fs = !0,
                            f = os(f, c),
                            u = l;do {
                                switch (u.tag) {
                                    case 3:
                                        u.effectTag |= 2048, u.expirationTime = a, Jo(u, a = bs(u, f, a));
                                        break t;
                                    case 1:
                                        if (h = f, d = u.type, c = u.stateNode, 0 == (64 & u.effectTag) && ("function" == typeof d.getDerivedStateFromError || null !== c && "function" == typeof c.componentDidCatch && (null === Ds || !Ds.has(c)))) {
                                            u.effectTag |= 2048, u.expirationTime = a, Jo(u, a = Ss(u, h, a));
                                            break t
                                        }
                                }
                                u = u.return
                            } while (null !== u)
                        }
                        Es = Gs(o);
                        continue
                    }
                    r = !0, Fa(e)
                }
            }
            break
        }
        if (ks = !1, Ts.current = n, Do = qo = Io = null, $r(), r) Ms = null, t.finishedWork = null;
        else if (null !== Es) t.finishedWork = null;
        else {
            if (null === (n = t.current.alternate) && s("281"), Ms = null, Fs) {
                if (r = t.latestPendingTime, o = t.latestSuspendedTime, a = t.latestPingedTime, 0 !== r && r < i || 0 !== o && o < i || 0 !== a && a < i) return tr(t, i), void ba(t, n, i, t.expirationTime, -1);
                if (!t.didError && e) return t.didError = !0, i = t.nextExpirationTimeToWorkOn = i, e = t.expirationTime = 1073741823, void ba(t, n, i, e, -1)
            }
            e && -1 !== Cs ? (tr(t, i), (e = 10 * (1073741822 - er(t, i))) < Cs && (Cs = e), e = 10 * (1073741822 - Sa()), e = Cs - e, ba(t, n, i, t.expirationTime, 0 > e ? 0 : e)) : (t.pendingCommitExpirationTime = i, t.finishedWork = n)
        }
    }

    function Ys(t, e) {
        for (var n = t.return; null !== n;) {
            switch (n.tag) {
                case 1:
                    var i = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof i.componentDidCatch && (null === Ds || !Ds.has(i))) return Ko(n, t = Ss(n, t = os(e, t), 1073741823)), void Ks(n, 1073741823);
                    break;
                case 3:
                    return Ko(n, t = bs(n, t = os(e, t), 1073741823)), void Ks(n, 1073741823)
            }
            n = n.return
        }
        3 === t.tag && (Ko(t, n = bs(t, n = os(e, t), 1073741823)), Ks(t, 1073741823))
    }

    function Xs(t, e) {
        var n = o.unstable_getCurrentPriorityLevel(),
            i = void 0;
        if (0 == (1 & e.mode)) i = 1073741823;
        else if (ks && !Rs) i = Os;
        else {
            switch (n) {
                case o.unstable_ImmediatePriority:
                    i = 1073741823;
                    break;
                case o.unstable_UserBlockingPriority:
                    i = 1073741822 - 10 * (1 + ((1073741822 - t + 15) / 10 | 0));
                    break;
                case o.unstable_NormalPriority:
                    i = 1073741822 - 25 * (1 + ((1073741822 - t + 500) / 25 | 0));
                    break;
                case o.unstable_LowPriority:
                case o.unstable_IdlePriority:
                    i = 1;
                    break;
                default:
                    s("313")
            }
            null !== Ms && i === Os && --i
        }
        return n === o.unstable_UserBlockingPriority && (0 === aa || i < aa) && (aa = i), i
    }

    function Zs(t, e, n) {
        var i = t.pingCache;
        null !== i && i.delete(e), null !== Ms && Os === n ? Ms = null : (e = t.earliestSuspendedTime, i = t.latestSuspendedTime, 0 !== e && n <= e && n >= i && (t.didError = !1, (0 === (e = t.latestPingedTime) || e > n) && (t.latestPingedTime = n), nr(n, t), 0 !== (n = t.expirationTime) && wa(t, n)))
    }

    function $s(t, e) {
        t.expirationTime < e && (t.expirationTime = e);
        var n = t.alternate;
        null !== n && n.expirationTime < e && (n.expirationTime = e);
        var i = t.return,
            r = null;
        if (null === i && 3 === t.tag) r = t.stateNode;
        else
            for (; null !== i;) {
                if (n = i.alternate, i.childExpirationTime < e && (i.childExpirationTime = e), null !== n && n.childExpirationTime < e && (n.childExpirationTime = e), null === i.return && 3 === i.tag) {
                    r = i.stateNode;
                    break
                }
                i = i.return
            }
        return r
    }

    function Ks(t, e) {
        null !== (t = $s(t, e)) && (!ks && 0 !== Os && e > Os && Bs(), Ji(t, e), ks && !Rs && Ms === t || wa(t, t.expirationTime), va > ma && (va = 0, s("185")))
    }

    function Js(t, e, n, i, r) {
        return o.unstable_runWithPriority(o.unstable_ImmediatePriority, function() {
            return t(e, n, i, r)
        })
    }
    var ta = null,
        ea = null,
        na = 0,
        ia = void 0,
        ra = !1,
        oa = null,
        sa = 0,
        aa = 0,
        ua = !1,
        la = null,
        ca = !1,
        fa = !1,
        pa = null,
        ha = o.unstable_now(),
        da = 1073741822 - (ha / 10 | 0),
        ya = da,
        ma = 50,
        va = 0,
        _a = null;

    function ga() {
        da = 1073741822 - ((o.unstable_now() - ha) / 10 | 0)
    }

    function Aa(t, e) {
        if (0 !== na) {
            if (e < na) return;
            null !== ia && o.unstable_cancelCallback(ia)
        }
        na = e, t = o.unstable_now() - ha, ia = o.unstable_scheduleCallback(ka, {
            timeout: 10 * (1073741822 - e) - t
        })
    }

    function ba(t, e, n, i, r) {
        t.expirationTime = i, 0 !== r || Pa() ? 0 < r && (t.timeoutHandle = gi(function(t, e, n) {
            t.pendingCommitExpirationTime = n, t.finishedWork = e, ga(), ya = da, Ma(t, n)
        }.bind(null, t, e, n), r)) : (t.pendingCommitExpirationTime = n, t.finishedWork = e)
    }

    function Sa() {
        return ra ? ya : (Ta(), 0 !== sa && 1 !== sa || (ga(), ya = da), ya)
    }

    function wa(t, e) {
        null === t.nextScheduledRoot ? (t.expirationTime = e, null === ea ? (ta = ea = t, t.nextScheduledRoot = t) : (ea = ea.nextScheduledRoot = t).nextScheduledRoot = ta) : e > t.expirationTime && (t.expirationTime = e), ra || (ca ? fa && (oa = t, sa = 1073741823, Oa(t, 1073741823, !1)) : 1073741823 === e ? Ea(1073741823, !1) : Aa(t, e))
    }

    function Ta() {
        var t = 0,
            e = null;
        if (null !== ea)
            for (var n = ea, i = ta; null !== i;) {
                var r = i.expirationTime;
                if (0 === r) {
                    if ((null === n || null === ea) && s("244"), i === i.nextScheduledRoot) {
                        ta = ea = i.nextScheduledRoot = null;
                        break
                    }
                    if (i === ta) ta = r = i.nextScheduledRoot, ea.nextScheduledRoot = r, i.nextScheduledRoot = null;
                    else {
                        if (i === ea) {
                            (ea = n).nextScheduledRoot = ta, i.nextScheduledRoot = null;
                            break
                        }
                        n.nextScheduledRoot = i.nextScheduledRoot, i.nextScheduledRoot = null
                    }
                    i = n.nextScheduledRoot
                } else {
                    if (r > t && (t = r, e = i), i === ea) break;
                    if (1073741823 === t) break;
                    n = i, i = i.nextScheduledRoot
                }
            }
        oa = e, sa = t
    }
    var xa = !1;

    function Pa() {
        return !!xa || !!o.unstable_shouldYield() && (xa = !0)
    }

    function ka() {
        try {
            if (!Pa() && null !== ta) {
                ga();
                var t = ta;
                do {
                    var e = t.expirationTime;
                    0 !== e && da <= e && (t.nextExpirationTimeToWorkOn = da), t = t.nextScheduledRoot
                } while (t !== ta)
            }
            Ea(0, !0)
        } finally {
            xa = !1
        }
    }

    function Ea(t, e) {
        if (Ta(), e)
            for (ga(), ya = da; null !== oa && 0 !== sa && t <= sa && !(xa && da > sa);) Oa(oa, sa, da > sa), Ta(), ga(), ya = da;
        else
            for (; null !== oa && 0 !== sa && t <= sa;) Oa(oa, sa, !1), Ta();
        if (e && (na = 0, ia = null), 0 !== sa && Aa(oa, sa), va = 0, _a = null, null !== pa)
            for (t = pa, pa = null, e = 0; e < t.length; e++) {
                var n = t[e];
                try {
                    n._onComplete()
                } catch (t) {
                    ua || (ua = !0, la = t)
                }
            }
        if (ua) throw t = la, la = null, ua = !1, t
    }

    function Ma(t, e) {
        ra && s("253"), oa = t, sa = e, Oa(t, e, !1), Ea(1073741823, !1)
    }

    function Oa(t, e, n) {
        if (ra && s("245"), ra = !0, n) {
            var i = t.finishedWork;
            null !== i ? Ca(t, i, e) : (t.finishedWork = null, -1 !== (i = t.timeoutHandle) && (t.timeoutHandle = -1, Ai(i)), Hs(t, n), null !== (i = t.finishedWork) && (Pa() ? t.finishedWork = i : Ca(t, i, e)))
        } else null !== (i = t.finishedWork) ? Ca(t, i, e) : (t.finishedWork = null, -1 !== (i = t.timeoutHandle) && (t.timeoutHandle = -1, Ai(i)), Hs(t, n), null !== (i = t.finishedWork) && Ca(t, i, e));
        ra = !1
    }

    function Ca(t, e, n) {
        var i = t.firstBatch;
        if (null !== i && i._expirationTime >= n && (null === pa ? pa = [i] : pa.push(i), i._defer)) return t.finishedWork = e, void(t.expirationTime = 0);
        t.finishedWork = null, t === _a ? va++ : (_a = t, va = 0), o.unstable_runWithPriority(o.unstable_ImmediatePriority, function() {
            Ws(t, e)
        })
    }

    function Fa(t) {
        null === oa && s("246"), oa.expirationTime = 0, ua || (ua = !0, la = t)
    }

    function Na(t, e) {
        var n = ca;
        ca = !0;
        try {
            return t(e)
        } finally {
            (ca = n) || ra || Ea(1073741823, !1)
        }
    }

    function Ra(t, e) {
        if (ca && !fa) {
            fa = !0;
            try {
                return t(e)
            } finally {
                fa = !1
            }
        }
        return t(e)
    }

    function ja(t, e, n) {
        ca || ra || 0 === aa || (Ea(aa, !1), aa = 0);
        var i = ca;
        ca = !0;
        try {
            return o.unstable_runWithPriority(o.unstable_UserBlockingPriority, function() {
                return t(e, n)
            })
        } finally {
            (ca = i) || ra || Ea(1073741823, !1)
        }
    }

    function Ia(t, e, n, i, r) {
        var o = e.current;
        t: if (n) {
            e: {
                2 === en(n = n._reactInternalFiber) && 1 === n.tag || s("170");
                var a = n;do {
                    switch (a.tag) {
                        case 3:
                            a = a.stateNode.context;
                            break e;
                        case 1:
                            if (Ri(a.type)) {
                                a = a.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                    }
                    a = a.return
                } while (null !== a);s("171"),
                a = void 0
            }
            if (1 === n.tag) {
                var u = n.type;
                if (Ri(u)) {
                    n = Di(n, u, a);
                    break t
                }
            }
            n = a
        }
        else n = Mi;
        return null === e.context ? e.context = n : e.pendingContext = n, e = r, (r = Zo(i)).payload = {
            element: t
        }, null !== (e = void 0 === e ? null : e) && (r.callback = e), zs(), Ko(o, r), Ks(o, i), i
    }

    function qa(t, e, n, i) {
        var r = e.current;
        return Ia(t, e, n, r = Xs(Sa(), r), i)
    }

    function Da(t) {
        if (!(t = t.current).child) return null;
        switch (t.child.tag) {
            case 5:
            default:
                return t.child.stateNode
        }
    }

    function Ba(t) {
        var e = 1073741822 - 25 * (1 + ((1073741822 - Sa() + 500) / 25 | 0));
        e >= Ps && (e = Ps - 1), this._expirationTime = Ps = e, this._root = t, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
    }

    function La() {
        this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
    }

    function Ua(t, e, n) {
        t = {
            current: e = Gi(3, null, null, e ? 3 : 0),
            containerInfo: t,
            pendingChildren: null,
            pingCache: null,
            earliestPendingTime: 0,
            latestPendingTime: 0,
            earliestSuspendedTime: 0,
            latestSuspendedTime: 0,
            latestPingedTime: 0,
            didError: !1,
            pendingCommitExpirationTime: 0,
            finishedWork: null,
            timeoutHandle: -1,
            context: null,
            pendingContext: null,
            hydrate: n,
            nextExpirationTimeToWorkOn: 0,
            expirationTime: 0,
            firstBatch: null,
            nextScheduledRoot: null
        }, this._internalRoot = e.stateNode = t
    }

    function Va(t) {
        return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
    }

    function za(t, e, n, i, r) {
        var o = n._reactRootContainer;
        if (o) {
            if ("function" == typeof r) {
                var s = r;
                r = function() {
                    var t = Da(o._internalRoot);
                    s.call(t)
                }
            }
            null != t ? o.legacy_renderSubtreeIntoContainer(t, e, r) : o.render(e, r)
        } else {
            if (o = n._reactRootContainer = function(t, e) {
                    if (e || (e = !(!(e = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null) || 1 !== e.nodeType || !e.hasAttribute("data-reactroot"))), !e)
                        for (var n; n = t.lastChild;) t.removeChild(n);
                    return new Ua(t, !1, e)
                }(n, i), "function" == typeof r) {
                var a = r;
                r = function() {
                    var t = Da(o._internalRoot);
                    a.call(t)
                }
            }
            Ra(function() {
                null != t ? o.legacy_renderSubtreeIntoContainer(t, e, r) : o.render(e, r)
            })
        }
        return Da(o._internalRoot)
    }

    function Wa(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return Va(e) || s("200"),
            function(t, e, n) {
                var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: Yt,
                    key: null == i ? null : "" + i,
                    children: t,
                    containerInfo: e,
                    implementation: n
                }
            }(t, e, null, n)
    }
    Pt = function(t, e, n) {
        switch (e) {
            case "input":
                if (Se(t, n), e = n.name, "radio" === n.type && null != e) {
                    for (n = t; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                        var i = n[e];
                        if (i !== t && i.form === t.form) {
                            var r = D(i);
                            r || s("90"), zt(i), Se(i, r)
                        }
                    }
                }
                break;
            case "textarea":
                $n(t, n);
                break;
            case "select":
                null != (e = n.value) && Yn(t, !!n.multiple, e, !1)
        }
    }, Ba.prototype.render = function(t) {
        this._defer || s("250"), this._hasChildren = !0, this._children = t;
        var e = this._root._internalRoot,
            n = this._expirationTime,
            i = new La;
        return Ia(t, e, null, n, i._onCommit), i
    }, Ba.prototype.then = function(t) {
        if (this._didComplete) t();
        else {
            var e = this._callbacks;
            null === e && (e = this._callbacks = []), e.push(t)
        }
    }, Ba.prototype.commit = function() {
        var t = this._root._internalRoot,
            e = t.firstBatch;
        if (this._defer && null !== e || s("251"), this._hasChildren) {
            var n = this._expirationTime;
            if (e !== this) {
                this._hasChildren && (n = this._expirationTime = e._expirationTime, this.render(this._children));
                for (var i = null, r = e; r !== this;) i = r, r = r._next;
                null === i && s("251"), i._next = r._next, this._next = e, t.firstBatch = this
            }
            this._defer = !1, Ma(t, n), e = this._next, this._next = null, null !== (e = t.firstBatch = e) && e._hasChildren && e.render(e._children)
        } else this._next = null, this._defer = !1
    }, Ba.prototype._onComplete = function() {
        if (!this._didComplete) {
            this._didComplete = !0;
            var t = this._callbacks;
            if (null !== t)
                for (var e = 0; e < t.length; e++)(0, t[e])()
        }
    }, La.prototype.then = function(t) {
        if (this._didCommit) t();
        else {
            var e = this._callbacks;
            null === e && (e = this._callbacks = []), e.push(t)
        }
    }, La.prototype._onCommit = function() {
        if (!this._didCommit) {
            this._didCommit = !0;
            var t = this._callbacks;
            if (null !== t)
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    "function" != typeof n && s("191", n), n()
                }
        }
    }, Ua.prototype.render = function(t, e) {
        var n = this._internalRoot,
            i = new La;
        return null !== (e = void 0 === e ? null : e) && i.then(e), qa(t, n, null, i._onCommit), i
    }, Ua.prototype.unmount = function(t) {
        var e = this._internalRoot,
            n = new La;
        return null !== (t = void 0 === t ? null : t) && n.then(t), qa(null, e, null, n._onCommit), n
    }, Ua.prototype.legacy_renderSubtreeIntoContainer = function(t, e, n) {
        var i = this._internalRoot,
            r = new La;
        return null !== (n = void 0 === n ? null : n) && r.then(n), qa(e, i, t, r._onCommit), r
    }, Ua.prototype.createBatch = function() {
        var t = new Ba(this),
            e = t._expirationTime,
            n = this._internalRoot,
            i = n.firstBatch;
        if (null === i) n.firstBatch = t, t._next = null;
        else {
            for (n = null; null !== i && i._expirationTime >= e;) n = i, i = i._next;
            t._next = i, null !== n && (n._next = t)
        }
        return t
    }, Ft = Na, Nt = ja, Rt = function() {
        ra || 0 === aa || (Ea(aa, !1), aa = 0)
    };
    var Ga = {
        createPortal: Wa,
        findDOMNode: function(t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var e = t._reactInternalFiber;
            return void 0 === e && ("function" == typeof t.render ? s("188") : s("268", Object.keys(t))), t = null === (t = rn(e)) ? null : t.stateNode
        },
        hydrate: function(t, e, n) {
            return Va(e) || s("200"), za(null, t, e, !0, n)
        },
        render: function(t, e, n) {
            return Va(e) || s("200"), za(null, t, e, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(t, e, n, i) {
            return Va(n) || s("200"), (null == t || void 0 === t._reactInternalFiber) && s("38"), za(t, e, n, !1, i)
        },
        unmountComponentAtNode: function(t) {
            return Va(t) || s("40"), !!t._reactRootContainer && (Ra(function() {
                za(null, null, t, !1, function() {
                    t._reactRootContainer = null
                })
            }), !0)
        },
        unstable_createPortal: function() {
            return Wa.apply(void 0, arguments)
        },
        unstable_batchedUpdates: Na,
        unstable_interactiveUpdates: ja,
        flushSync: function(t, e) {
            ra && s("187");
            var n = ca;
            ca = !0;
            try {
                return Js(t, e)
            } finally {
                ca = n, Ea(1073741823, !1)
            }
        },
        unstable_createRoot: function(t, e) {
            return Va(t) || s("299", "unstable_createRoot"), new Ua(t, !0, null != e && !0 === e.hydrate)
        },
        unstable_flushControlled: function(t) {
            var e = ca;
            ca = !0;
            try {
                Js(t)
            } finally {
                (ca = e) || ra || Ea(1073741823, !1)
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [I, q, D, M.injectEventPluginsByName, _, W, function(t) {
                P(t, z)
            }, Ot, Ct, En, C]
        }
    };
    ! function(t) {
        var e = t.findFiberByHostInstance;
        (function(t) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (e.isDisabled || !e.supportsFiber) return !0;
            try {
                var n = e.inject(t);
                Ui = zi(function(t) {
                    return e.onCommitFiberRoot(n, t)
                }), Vi = zi(function(t) {
                    return e.onCommitFiberUnmount(n, t)
                })
            } catch (t) {}
        })(r({}, t, {
            overrideProps: null,
            currentDispatcherRef: Wt.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(t) {
                return null === (t = rn(t)) ? null : t.stateNode
            },
            findFiberByHostInstance: function(t) {
                return e ? e(t) : null
            }
        }))
    }({
        findFiberByHostInstance: j,
        bundleType: 0,
        version: "16.8.4",
        rendererPackageName: "react-dom"
    });
    var Qa = {
            default: Ga
        },
        Ha = Qa && Ga || Qa;
    t.exports = Ha.default || Ha
}, function(t, e, n) {
    "use strict";
    /** @license React v16.8.4
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var i = n(134),
        r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        s = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        u = r ? Symbol.for("react.strict_mode") : 60108,
        l = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        f = r ? Symbol.for("react.context") : 60110,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        y = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        v = "function" == typeof Symbol && Symbol.iterator;

    function _(t) {
        for (var e = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, i = 0; i < e; i++) n += "&args[]=" + encodeURIComponent(arguments[i + 1]);
        ! function(t, e, n, i, r, o, s, a) {
            if (!t) {
                if (t = void 0, void 0 === e) t = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, i, r, o, s, a],
                        l = 0;
                    (t = Error(e.replace(/%s/g, function() {
                        return u[l++]
                    }))).name = "Invariant Violation"
                }
                throw t.framesToPop = 1, t
            }
        }(!1, "Minified React error #" + t + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }
    var g = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        A = {};

    function b(t, e, n) {
        this.props = t, this.context = e, this.refs = A, this.updater = n || g
    }

    function S() {}

    function w(t, e, n) {
        this.props = t, this.context = e, this.refs = A, this.updater = n || g
    }
    b.prototype.isReactComponent = {}, b.prototype.setState = function(t, e) {
        "object" != typeof t && "function" != typeof t && null != t && _("85"), this.updater.enqueueSetState(this, t, e, "setState")
    }, b.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate")
    }, S.prototype = b.prototype;
    var T = w.prototype = new S;
    T.constructor = w, i(T, b.prototype), T.isPureReactComponent = !0;
    var x = {
            current: null
        },
        P = {
            current: null
        },
        k = Object.prototype.hasOwnProperty,
        E = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function M(t, e, n) {
        var i = void 0,
            r = {},
            s = null,
            a = null;
        if (null != e)
            for (i in void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (s = "" + e.key), e) k.call(e, i) && !E.hasOwnProperty(i) && (r[i] = e[i]);
        var u = arguments.length - 2;
        if (1 === u) r.children = n;
        else if (1 < u) {
            for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
            r.children = l
        }
        if (t && t.defaultProps)
            for (i in u = t.defaultProps) void 0 === r[i] && (r[i] = u[i]);
        return {
            $$typeof: o,
            type: t,
            key: s,
            ref: a,
            props: r,
            _owner: P.current
        }
    }

    function O(t) {
        return "object" == typeof t && null !== t && t.$$typeof === o
    }
    var C = /\/+/g,
        F = [];

    function N(t, e, n, i) {
        if (F.length) {
            var r = F.pop();
            return r.result = t, r.keyPrefix = e, r.func = n, r.context = i, r.count = 0, r
        }
        return {
            result: t,
            keyPrefix: e,
            func: n,
            context: i,
            count: 0
        }
    }

    function R(t) {
        t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > F.length && F.push(t)
    }

    function j(t, e, n) {
        return null == t ? 0 : function t(e, n, i, r) {
            var a = typeof e;
            "undefined" !== a && "boolean" !== a || (e = null);
            var u = !1;
            if (null === e) u = !0;
            else switch (a) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object":
                    switch (e.$$typeof) {
                        case o:
                        case s:
                            u = !0
                    }
            }
            if (u) return i(r, e, "" === n ? "." + I(e, 0) : n), 1;
            if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(e))
                for (var l = 0; l < e.length; l++) {
                    var c = n + I(a = e[l], l);
                    u += t(a, c, i, r)
                } else if (c = null === e || "object" != typeof e ? null : "function" == typeof(c = v && e[v] || e["@@iterator"]) ? c : null, "function" == typeof c)
                    for (e = c.call(e), l = 0; !(a = e.next()).done;) u += t(a = a.value, c = n + I(a, l++), i, r);
                else "object" === a && _("31", "[object Object]" == (i = "" + e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : i, "");
            return u
        }(t, "", e, n)
    }

    function I(t, e) {
        return "object" == typeof t && null !== t && null != t.key ? function(t) {
            var e = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + t).replace(/[=:]/g, function(t) {
                return e[t]
            })
        }(t.key) : e.toString(36)
    }

    function q(t, e) {
        t.func.call(t.context, e, t.count++)
    }

    function D(t, e, n) {
        var i = t.result,
            r = t.keyPrefix;
        t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? B(t, i, n, function(t) {
            return t
        }) : null != t && (O(t) && (t = function(t, e) {
            return {
                $$typeof: o,
                type: t.type,
                key: e,
                ref: t.ref,
                props: t.props,
                _owner: t._owner
            }
        }(t, r + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(C, "$&/") + "/") + n)), i.push(t))
    }

    function B(t, e, n, i, r) {
        var o = "";
        null != n && (o = ("" + n).replace(C, "$&/") + "/"), j(t, D, e = N(e, o, i, r)), R(e)
    }

    function L() {
        var t = x.current;
        return null === t && _("307"), t
    }
    var U = {
            Children: {
                map: function(t, e, n) {
                    if (null == t) return t;
                    var i = [];
                    return B(t, i, null, e, n), i
                },
                forEach: function(t, e, n) {
                    if (null == t) return t;
                    j(t, q, e = N(null, null, e, n)), R(e)
                },
                count: function(t) {
                    return j(t, function() {
                        return null
                    }, null)
                },
                toArray: function(t) {
                    var e = [];
                    return B(t, e, null, function(t) {
                        return t
                    }), e
                },
                only: function(t) {
                    return O(t) || _("143"), t
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: b,
            PureComponent: w,
            createContext: function(t, e) {
                return void 0 === e && (e = null), (t = {
                    $$typeof: f,
                    _calculateChangedBits: e,
                    _currentValue: t,
                    _currentValue2: t,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: c,
                    _context: t
                }, t.Consumer = t
            },
            forwardRef: function(t) {
                return {
                    $$typeof: h,
                    render: t
                }
            },
            lazy: function(t) {
                return {
                    $$typeof: m,
                    _ctor: t,
                    _status: -1,
                    _result: null
                }
            },
            memo: function(t, e) {
                return {
                    $$typeof: y,
                    type: t,
                    compare: void 0 === e ? null : e
                }
            },
            useCallback: function(t, e) {
                return L().useCallback(t, e)
            },
            useContext: function(t, e) {
                return L().useContext(t, e)
            },
            useEffect: function(t, e) {
                return L().useEffect(t, e)
            },
            useImperativeHandle: function(t, e, n) {
                return L().useImperativeHandle(t, e, n)
            },
            useDebugValue: function() {},
            useLayoutEffect: function(t, e) {
                return L().useLayoutEffect(t, e)
            },
            useMemo: function(t, e) {
                return L().useMemo(t, e)
            },
            useReducer: function(t, e, n) {
                return L().useReducer(t, e, n)
            },
            useRef: function(t) {
                return L().useRef(t)
            },
            useState: function(t) {
                return L().useState(t)
            },
            Fragment: a,
            StrictMode: u,
            Suspense: d,
            createElement: M,
            cloneElement: function(t, e, n) {
                null == t && _("267", t);
                var r = void 0,
                    s = i({}, t.props),
                    a = t.key,
                    u = t.ref,
                    l = t._owner;
                if (null != e) {
                    void 0 !== e.ref && (u = e.ref, l = P.current), void 0 !== e.key && (a = "" + e.key);
                    var c = void 0;
                    for (r in t.type && t.type.defaultProps && (c = t.type.defaultProps), e) k.call(e, r) && !E.hasOwnProperty(r) && (s[r] = void 0 === e[r] && void 0 !== c ? c[r] : e[r])
                }
                if (1 === (r = arguments.length - 2)) s.children = n;
                else if (1 < r) {
                    c = Array(r);
                    for (var f = 0; f < r; f++) c[f] = arguments[f + 2];
                    s.children = c
                }
                return {
                    $$typeof: o,
                    type: t.type,
                    key: a,
                    ref: u,
                    props: s,
                    _owner: l
                }
            },
            createFactory: function(t) {
                var e = M.bind(null, t);
                return e.type = t, e
            },
            isValidElement: O,
            version: "16.8.4",
            unstable_ConcurrentMode: p,
            unstable_Profiler: l,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: x,
                ReactCurrentOwner: P,
                assign: i
            }
        },
        V = {
            default: U
        },
        z = V && U || V;
    t.exports = z.default || z
}, function(t, e, n) {
    "use strict";
    t.exports = n(356)
}, function(t, e, n) {
    "use strict";
    (function(t) {
        /** @license React v0.13.4
         * scheduler.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = null,
            i = !1,
            r = 3,
            o = -1,
            s = -1,
            a = !1,
            u = !1;

        function l() {
            if (!a) {
                var t = n.expirationTime;
                u ? w() : u = !0, S(p, t)
            }
        }

        function c() {
            var t = n,
                e = n.next;
            if (n === e) n = null;
            else {
                var i = n.previous;
                n = i.next = e, e.previous = i
            }
            t.next = t.previous = null, i = t.callback, e = t.expirationTime, t = t.priorityLevel;
            var o = r,
                a = s;
            r = t, s = e;
            try {
                var u = i()
            } finally {
                r = o, s = a
            }
            if ("function" == typeof u)
                if (u = {
                        callback: u,
                        priorityLevel: t,
                        expirationTime: e,
                        next: null,
                        previous: null
                    }, null === n) n = u.next = u.previous = u;
                else {
                    i = null, t = n;
                    do {
                        if (t.expirationTime >= e) {
                            i = t;
                            break
                        }
                        t = t.next
                    } while (t !== n);
                    null === i ? i = n : i === n && (n = u, l()), (e = i.previous).next = i.previous = u, u.next = i, u.previous = e
                }
        }

        function f() {
            if (-1 === o && null !== n && 1 === n.priorityLevel) {
                a = !0;
                try {
                    do {
                        c()
                    } while (null !== n && 1 === n.priorityLevel)
                } finally {
                    a = !1, null !== n ? l() : u = !1
                }
            }
        }

        function p(t) {
            a = !0;
            var r = i;
            i = t;
            try {
                if (t)
                    for (; null !== n;) {
                        var o = e.unstable_now();
                        if (!(n.expirationTime <= o)) break;
                        do {
                            c()
                        } while (null !== n && n.expirationTime <= o)
                    } else if (null !== n)
                        do {
                            c()
                        } while (null !== n && !T())
            } finally {
                a = !1, i = r, null !== n ? l() : u = !1, f()
            }
        }
        var h, d, y = Date,
            m = "function" == typeof setTimeout ? setTimeout : void 0,
            v = "function" == typeof clearTimeout ? clearTimeout : void 0,
            _ = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
            g = "function" == typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;

        function A(t) {
            h = _(function(e) {
                v(d), t(e)
            }), d = m(function() {
                g(h), t(e.unstable_now())
            }, 100)
        }
        if ("object" == typeof performance && "function" == typeof performance.now) {
            var b = performance;
            e.unstable_now = function() {
                return b.now()
            }
        } else e.unstable_now = function() {
            return y.now()
        };
        var S, w, T, x = null;
        if ("undefined" != typeof window ? x = window : void 0 !== t && (x = t), x && x._schedMock) {
            var P = x._schedMock;
            S = P[0], w = P[1], T = P[2], e.unstable_now = P[3]
        } else if ("undefined" == typeof window || "function" != typeof MessageChannel) {
            var k = null,
                E = function(t) {
                    if (null !== k) try {
                        k(t)
                    } finally {
                        k = null
                    }
                };
            S = function(t) {
                null !== k ? setTimeout(S, 0, t) : (k = t, setTimeout(E, 0, !1))
            }, w = function() {
                k = null
            }, T = function() {
                return !1
            }
        } else {
            "undefined" != typeof console && ("function" != typeof _ && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
            var M = null,
                O = !1,
                C = -1,
                F = !1,
                N = !1,
                R = 0,
                j = 33,
                I = 33;
            T = function() {
                return R <= e.unstable_now()
            };
            var q = new MessageChannel,
                D = q.port2;
            q.port1.onmessage = function() {
                O = !1;
                var t = M,
                    n = C;
                M = null, C = -1;
                var i = e.unstable_now(),
                    r = !1;
                if (0 >= R - i) {
                    if (!(-1 !== n && n <= i)) return F || (F = !0, A(B)), M = t, void(C = n);
                    r = !0
                }
                if (null !== t) {
                    N = !0;
                    try {
                        t(r)
                    } finally {
                        N = !1
                    }
                }
            };
            var B = function(t) {
                if (null !== M) {
                    A(B);
                    var e = t - R + I;
                    e < I && j < I ? (8 > e && (e = 8), I = e < j ? j : e) : j = e, R = t + I, O || (O = !0, D.postMessage(void 0))
                } else F = !1
            };
            S = function(t, e) {
                M = t, C = e, N || 0 > e ? D.postMessage(void 0) : F || (F = !0, A(B))
            }, w = function() {
                M = null, O = !1, C = -1
            }
        }
        e.unstable_ImmediatePriority = 1, e.unstable_UserBlockingPriority = 2, e.unstable_NormalPriority = 3, e.unstable_IdlePriority = 5, e.unstable_LowPriority = 4, e.unstable_runWithPriority = function(t, n) {
            switch (t) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    t = 3
            }
            var i = r,
                s = o;
            r = t, o = e.unstable_now();
            try {
                return n()
            } finally {
                r = i, o = s, f()
            }
        }, e.unstable_next = function(t) {
            switch (r) {
                case 1:
                case 2:
                case 3:
                    var n = 3;
                    break;
                default:
                    n = r
            }
            var i = r,
                s = o;
            r = n, o = e.unstable_now();
            try {
                return t()
            } finally {
                r = i, o = s, f()
            }
        }, e.unstable_scheduleCallback = function(t, i) {
            var s = -1 !== o ? o : e.unstable_now();
            if ("object" == typeof i && null !== i && "number" == typeof i.timeout) i = s + i.timeout;
            else switch (r) {
                case 1:
                    i = s + -1;
                    break;
                case 2:
                    i = s + 250;
                    break;
                case 5:
                    i = s + 1073741823;
                    break;
                case 4:
                    i = s + 1e4;
                    break;
                default:
                    i = s + 5e3
            }
            if (t = {
                    callback: t,
                    priorityLevel: r,
                    expirationTime: i,
                    next: null,
                    previous: null
                }, null === n) n = t.next = t.previous = t, l();
            else {
                s = null;
                var a = n;
                do {
                    if (a.expirationTime > i) {
                        s = a;
                        break
                    }
                    a = a.next
                } while (a !== n);
                null === s ? s = n : s === n && (n = t, l()), (i = s.previous).next = s.previous = t, t.next = s, t.previous = i
            }
            return t
        }, e.unstable_cancelCallback = function(t) {
            var e = t.next;
            if (null !== e) {
                if (e === t) n = null;
                else {
                    t === n && (n = e);
                    var i = t.previous;
                    i.next = e, e.previous = i
                }
                t.next = t.previous = null
            }
        }, e.unstable_wrapCallback = function(t) {
            var n = r;
            return function() {
                var i = r,
                    s = o;
                r = n, o = e.unstable_now();
                try {
                    return t.apply(this, arguments)
                } finally {
                    r = i, o = s, f()
                }
            }
        }, e.unstable_getCurrentPriorityLevel = function() {
            return r
        }, e.unstable_shouldYield = function() {
            return !i && (null !== n && n.expirationTime < s || T())
        }, e.unstable_continueExecution = function() {
            null !== n && l()
        }, e.unstable_pauseExecution = function() {}, e.unstable_getFirstCallbackNode = function() {
            return n
        }
    }).call(this, n(35))
}, function(t, e, n) {
    "use strict";
    var i = n(358);

    function r() {}

    function o() {}
    o.resetWarningCache = r, t.exports = function() {
        function t(t, e, n, r, o, s) {
            if (s !== i) {
                var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw a.name = "Invariant Violation", a
            }
        }

        function e() {
            return t
        }
        t.isRequired = t;
        var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: r
        };
        return n.PropTypes = n, n
    }
}, function(t, e, n) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(t, e, n) {
    var i, r, o = n(135),
        s = n(136),
        a = 0,
        u = 0;
    t.exports = function(t, e, n) {
        var l = e && n || 0,
            c = e || [],
            f = (t = t || {}).node || i,
            p = void 0 !== t.clockseq ? t.clockseq : r;
        if (null == f || null == p) {
            var h = o();
            null == f && (f = i = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]), null == p && (p = r = 16383 & (h[6] << 8 | h[7]))
        }
        var d = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
            y = void 0 !== t.nsecs ? t.nsecs : u + 1,
            m = d - a + (y - u) / 1e4;
        if (m < 0 && void 0 === t.clockseq && (p = p + 1 & 16383), (m < 0 || d > a) && void 0 === t.nsecs && (y = 0), y >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        a = d, u = y, r = p;
        var v = (1e4 * (268435455 & (d += 122192928e5)) + y) % 4294967296;
        c[l++] = v >>> 24 & 255, c[l++] = v >>> 16 & 255, c[l++] = v >>> 8 & 255, c[l++] = 255 & v;
        var _ = d / 4294967296 * 1e4 & 268435455;
        c[l++] = _ >>> 8 & 255, c[l++] = 255 & _, c[l++] = _ >>> 24 & 15 | 16, c[l++] = _ >>> 16 & 255, c[l++] = p >>> 8 | 128, c[l++] = 255 & p;
        for (var g = 0; g < 6; ++g) c[l + g] = f[g];
        return e || s(c)
    }
}, function(t, e, n) {
    var i = n(135),
        r = n(136);
    t.exports = function(t, e, n) {
        var o = e && n || 0;
        "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
        var s = (t = t || {}).random || (t.rng || i)();
        if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e)
            for (var a = 0; a < 16; ++a) e[o + a] = s[a];
        return e || r(s)
    }
}, function(t, e) {
    t.exports = {
        webm: "data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=",
        mp4: "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="
    }
}, function(t, e, n) {
    (function(t) {
        var i = void 0 !== t && t || "undefined" != typeof self && self || window,
            r = Function.prototype.apply;

        function o(t, e) {
            this._id = t, this._clearFn = e
        }
        e.setTimeout = function() {
            return new o(r.call(setTimeout, i, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new o(r.call(setInterval, i, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
            this._clearFn.call(i, this._id)
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(363), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, n(35))
}, function(t, e, n) {
    (function(t, e) {
        ! function(t, n) {
            "use strict";
            if (!t.setImmediate) {
                var i, r, o, s, a, u = 1,
                    l = {},
                    c = !1,
                    f = t.document,
                    p = Object.getPrototypeOf && Object.getPrototypeOf(t);
                p = p && p.setTimeout ? p : t, "[object process]" === {}.toString.call(t.process) ? i = function(t) {
                    e.nextTick(function() {
                        d(t)
                    })
                } : ! function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
                    d(t.data)
                }, i = function(t) {
                    o.port2.postMessage(t)
                }) : f && "onreadystatechange" in f.createElement("script") ? (r = f.documentElement, i = function(t) {
                    var e = f.createElement("script");
                    e.onreadystatechange = function() {
                        d(t), e.onreadystatechange = null, r.removeChild(e), e = null
                    }, r.appendChild(e)
                }) : i = function(t) {
                    setTimeout(d, 0, t)
                } : (s = "setImmediate$" + Math.random() + "$", a = function(e) {
                    e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && d(+e.data.slice(s.length))
                }, t.addEventListener ? t.addEventListener("message", a, !1) : t.attachEvent("onmessage", a), i = function(e) {
                    t.postMessage(s + e, "*")
                }), p.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var r = {
                        callback: t,
                        args: e
                    };
                    return l[u] = r, i(u), u++
                }, p.clearImmediate = h
            }

            function h(t) {
                delete l[t]
            }

            function d(t) {
                if (c) setTimeout(d, 0, t);
                else {
                    var e = l[t];
                    if (e) {
                        c = !0;
                        try {
                            ! function(t) {
                                var e = t.callback,
                                    i = t.args;
                                switch (i.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(i[0]);
                                        break;
                                    case 2:
                                        e(i[0], i[1]);
                                        break;
                                    case 3:
                                        e(i[0], i[1], i[2]);
                                        break;
                                    default:
                                        e.apply(n, i)
                                }
                            }(e)
                        } finally {
                            h(t), c = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, n(35), n(364))
}, function(t, e) {
    var n, i, r = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            i = s
        }
    }();
    var u, l = [],
        c = !1,
        f = -1;

    function p() {
        c && u && (c = !1, u.length ? l = u.concat(l) : f = -1, l.length && h())
    }

    function h() {
        if (!c) {
            var t = a(p);
            c = !0;
            for (var e = l.length; e;) {
                for (u = l, l = []; ++f < e;) u && u[f].run();
                f = -1, e = l.length
            }
            u = null, c = !1,
                function(t) {
                    if (i === clearTimeout) return clearTimeout(t);
                    if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                    try {
                        i(t)
                    } catch (e) {
                        try {
                            return i.call(null, t)
                        } catch (e) {
                            return i.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function d(t, e) {
        this.fun = t, this.array = e
    }

    function y() {}
    r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new d(t, e)), 1 !== l.length || c || a(h)
    }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = y, r.addListener = y, r.once = y, r.off = y, r.removeListener = y, r.removeAllListeners = y, r.emit = y, r.prependListener = y, r.prependOnceListener = y, r.listeners = function(t) {
        return []
    }, r.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function() {
        return 0
    }
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.default = void 0;
    ! function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                    i.get || i.set ? Object.defineProperty(e, n, i) : e[n] = t[n]
                } e.default = t
    }(n(4));
    var i = a(n(368)),
        r = a(n(371)),
        o = a(n(1)),
        s = a(n(137));
    n(139);

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function u() {
        return (u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }
    var l = function(t, e) {
            return t && e && e.split(" ").forEach(function(e) {
                return (0, i.default)(t, e)
            })
        },
        c = function(t, e) {
            return t && e && e.split(" ").forEach(function(e) {
                return (0, r.default)(t, e)
            })
        },
        f = function(t) {
            var e, n;

            function i() {
                for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                return (e = t.call.apply(t, [this].concat(i)) || this).onEnter = function(t, n) {
                    var i = e.getClassNames(n ? "appear" : "enter").className;
                    e.removeClasses(t, "exit"), l(t, i), e.props.onEnter && e.props.onEnter(t, n)
                }, e.onEntering = function(t, n) {
                    var i = e.getClassNames(n ? "appear" : "enter").activeClassName;
                    e.reflowAndAddClass(t, i), e.props.onEntering && e.props.onEntering(t, n)
                }, e.onEntered = function(t, n) {
                    var i = e.getClassNames("enter").doneClassName;
                    e.removeClasses(t, n ? "appear" : "enter"), l(t, i), e.props.onEntered && e.props.onEntered(t, n)
                }, e.onExit = function(t) {
                    var n = e.getClassNames("exit").className;
                    e.removeClasses(t, "appear"), e.removeClasses(t, "enter"), l(t, n), e.props.onExit && e.props.onExit(t)
                }, e.onExiting = function(t) {
                    var n = e.getClassNames("exit").activeClassName;
                    e.reflowAndAddClass(t, n), e.props.onExiting && e.props.onExiting(t)
                }, e.onExited = function(t) {
                    var n = e.getClassNames("exit").doneClassName;
                    e.removeClasses(t, "exit"), l(t, n), e.props.onExited && e.props.onExited(t)
                }, e.getClassNames = function(t) {
                    var n = e.props.classNames,
                        i = "string" != typeof n ? n[t] : n + "-" + t;
                    return {
                        className: i,
                        activeClassName: "string" != typeof n ? n[t + "Active"] : i + "-active",
                        doneClassName: "string" != typeof n ? n[t + "Done"] : i + "-done"
                    }
                }, e
            }
            n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
            var r = i.prototype;
            return r.removeClasses = function(t, e) {
                var n = this.getClassNames(e),
                    i = n.className,
                    r = n.activeClassName,
                    o = n.doneClassName;
                i && c(t, i), r && c(t, r), o && c(t, o)
            }, r.reflowAndAddClass = function(t, e) {
                e && (t && t.scrollTop, l(t, e))
            }, r.render = function() {
                var t = u({}, this.props);
                return delete t.classNames, o.default.createElement(s.default, u({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }))
            }, i
        }(o.default.Component);
    f.propTypes = {};
    var p = f;
    e.default = p, t.exports = e.default
}, function(t, e, n) {
    "use strict";
    var i = n(369);
    e.__esModule = !0, e.default = function(t, e) {
        t.classList ? t.classList.add(e) : (0, r.default)(t, e) || ("string" == typeof t.className ? t.className = t.className + " " + e : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + e))
    };
    var r = i(n(370));
    t.exports = e.default
}, function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.default = function(t, e) {
        return t.classList ? !!e && t.classList.contains(e) : -1 !== (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ")
    }, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
    }
    t.exports = function(t, e) {
        t.classList ? t.classList.remove(e) : "string" == typeof t.className ? t.className = i(t.className, e) : t.setAttribute("class", i(t.className && t.className.baseVal || "", e))
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.default = void 0;
    s(n(4));
    var i = s(n(1)),
        r = n(69),
        o = s(n(140));

    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var a = function(t) {
        var e, n;

        function s() {
            for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            return (e = t.call.apply(t, [this].concat(i)) || this).handleEnter = function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return e.handleLifecycle("onEnter", 0, n)
            }, e.handleEntering = function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return e.handleLifecycle("onEntering", 0, n)
            }, e.handleEntered = function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return e.handleLifecycle("onEntered", 0, n)
            }, e.handleExit = function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return e.handleLifecycle("onExit", 1, n)
            }, e.handleExiting = function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return e.handleLifecycle("onExiting", 1, n)
            }, e.handleExited = function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return e.handleLifecycle("onExited", 1, n)
            }, e
        }
        n = t, (e = s).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
        var a = s.prototype;
        return a.handleLifecycle = function(t, e, n) {
            var o, s = this.props.children,
                a = i.default.Children.toArray(s)[e];
            a.props[t] && (o = a.props)[t].apply(o, n), this.props[t] && this.props[t]((0, r.findDOMNode)(this))
        }, a.render = function() {
            var t = this.props,
                e = t.children,
                n = t.in,
                r = function(t, e) {
                    if (null == t) return {};
                    var n, i, r = {},
                        o = Object.keys(t);
                    for (i = 0; i < o.length; i++) n = o[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
                    return r
                }(t, ["children", "in"]),
                s = i.default.Children.toArray(e),
                a = s[0],
                u = s[1];
            return delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, i.default.createElement(o.default, r, n ? i.default.cloneElement(a, {
                key: "first",
                onEnter: this.handleEnter,
                onEntering: this.handleEntering,
                onEntered: this.handleEntered
            }) : i.default.cloneElement(u, {
                key: "second",
                onEnter: this.handleExit,
                onEntering: this.handleExiting,
                onEntered: this.handleExited
            }))
        }, s
    }(i.default.Component);
    a.propTypes = {};
    var u = a;
    e.default = u, t.exports = e.default
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.getChildMapping = r, e.mergeChildMappings = o, e.getInitialChildMapping = function(t, e) {
        return r(t.children, function(n) {
            return (0, i.cloneElement)(n, {
                onExited: e.bind(null, n),
                in: !0,
                appear: s(n, "appear", t),
                enter: s(n, "enter", t),
                exit: s(n, "exit", t)
            })
        })
    }, e.getNextChildMapping = function(t, e, n) {
        var a = r(t.children),
            u = o(e, a);
        return Object.keys(u).forEach(function(r) {
            var o = u[r];
            if ((0, i.isValidElement)(o)) {
                var l = r in e,
                    c = r in a,
                    f = e[r],
                    p = (0, i.isValidElement)(f) && !f.props.in;
                !c || l && !p ? c || !l || p ? c && l && (0, i.isValidElement)(f) && (u[r] = (0, i.cloneElement)(o, {
                    onExited: n.bind(null, o),
                    in: f.props.in,
                    exit: s(o, "exit", t),
                    enter: s(o, "enter", t)
                })) : u[r] = (0, i.cloneElement)(o, {
                    in: !1
                }) : u[r] = (0, i.cloneElement)(o, {
                    onExited: n.bind(null, o),
                    in: !0,
                    exit: s(o, "exit", t),
                    enter: s(o, "enter", t)
                })
            }
        }), u
    };
    var i = n(1);

    function r(t, e) {
        var n = Object.create(null);
        return t && i.Children.map(t, function(t) {
            return t
        }).forEach(function(t) {
            n[t.key] = function(t) {
                return e && (0, i.isValidElement)(t) ? e(t) : t
            }(t)
        }), n
    }

    function o(t, e) {
        function n(n) {
            return n in e ? e[n] : t[n]
        }
        t = t || {}, e = e || {};
        var i, r = Object.create(null),
            o = [];
        for (var s in t) s in e ? o.length && (r[s] = o, o = []) : o.push(s);
        var a = {};
        for (var u in e) {
            if (r[u])
                for (i = 0; i < r[u].length; i++) {
                    var l = r[u][i];
                    a[r[u][i]] = n(l)
                }
            a[u] = n(u)
        }
        for (i = 0; i < o.length; i++) a[o[i]] = n(o[i]);
        return a
    }

    function s(t, e, n) {
        return null != n[e] ? n[e] : t.props[e]
    }
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = {};
    n.r(i), n.d(i, "props", function() {
        return un
    }), n.d(i, "names", function() {
        return ln
    }), n.d(i, "intervals", function() {
        return cn
    }), n.d(i, "notes", function() {
        return fn
    }), n.d(i, "exists", function() {
        return pn
    }), n.d(i, "tokenize", function() {
        return hn
    }), n.d(i, "modeNames", function() {
        return dn
    }), n.d(i, "chords", function() {
        return yn
    }), n.d(i, "toScale", function() {
        return mn
    }), n.d(i, "supersets", function() {
        return vn
    }), n.d(i, "subsets", function() {
        return _n
    });
    var r = n(69),
        o = n(1),
        s = n.n(o),
        a = n(141),
        u = n(4),
        l = n.n(u),
        c = n(99),
        f = n(142),
        p = n.n(f),
        h = n(143),
        d = n.n(h),
        y = function(t, e) {
            return (y = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        };

    function m(t, e) {
        function n() {
            this.constructor = t
        }
        y(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }

    function v(t) {
        return "function" == typeof t
    }
    var _ = !1,
        g = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(t) {
                t && (new Error).stack;
                _ = t
            },
            get useDeprecatedSynchronousErrorHandling() {
                return _
            }
        };

    function A(t) {
        setTimeout(function() {
            throw t
        })
    }
    var b = {
            closed: !0,
            next: function(t) {},
            error: function(t) {
                if (g.useDeprecatedSynchronousErrorHandling) throw t;
                A(t)
            },
            complete: function() {}
        },
        S = Array.isArray || function(t) {
            return t && "number" == typeof t.length
        };

    function w(t) {
        return null !== t && "object" == typeof t
    }

    function T(t) {
        return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(t, e) {
            return e + 1 + ") " + t.toString()
        }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
    }
    T.prototype = Object.create(Error.prototype);
    var x = T,
        P = function() {
            function t(t) {
                this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
            }
            var e;
            return t.prototype.unsubscribe = function() {
                var t, e = !1;
                if (!this.closed) {
                    var n = this._parent,
                        i = this._parents,
                        r = this._unsubscribe,
                        o = this._subscriptions;
                    this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                    for (var s = -1, a = i ? i.length : 0; n;) n.remove(this), n = ++s < a && i[s] || null;
                    if (v(r)) try {
                        r.call(this)
                    } catch (n) {
                        e = !0, t = n instanceof x ? k(n.errors) : [n]
                    }
                    if (S(o))
                        for (s = -1, a = o.length; ++s < a;) {
                            var u = o[s];
                            if (w(u)) try {
                                u.unsubscribe()
                            } catch (n) {
                                e = !0, t = t || [], n instanceof x ? t = t.concat(k(n.errors)) : t.push(n)
                            }
                        }
                    if (e) throw new x(t)
                }
            }, t.prototype.add = function(e) {
                var n = e;
                switch (typeof e) {
                    case "function":
                        n = new t(e);
                    case "object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof t)) {
                            var i = n;
                            (n = new t)._subscriptions = [i]
                        }
                        break;
                    default:
                        if (!e) return t.EMPTY;
                        throw new Error("unrecognized teardown " + e + " added to Subscription.")
                }
                if (n._addParent(this)) {
                    var r = this._subscriptions;
                    r ? r.push(n) : this._subscriptions = [n]
                }
                return n
            }, t.prototype.remove = function(t) {
                var e = this._subscriptions;
                if (e) {
                    var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                }
            }, t.prototype._addParent = function(t) {
                var e = this._parent,
                    n = this._parents;
                return e !== t && (e ? n ? -1 === n.indexOf(t) && (n.push(t), !0) : (this._parents = [t], !0) : (this._parent = t, !0))
            }, t.EMPTY = ((e = new t).closed = !0, e), t
        }();

    function k(t) {
        return t.reduce(function(t, e) {
            return t.concat(e instanceof x ? e.errors : e)
        }, [])
    }
    var E = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
        M = function(t) {
            function e(n, i, r) {
                var o = t.call(this) || this;
                switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                    case 0:
                        o.destination = b;
                        break;
                    case 1:
                        if (!n) {
                            o.destination = b;
                            break
                        }
                        if ("object" == typeof n) {
                            n instanceof e ? (o.syncErrorThrowable = n.syncErrorThrowable, o.destination = n, n.add(o)) : (o.syncErrorThrowable = !0, o.destination = new O(o, n));
                            break
                        }
                        default:
                            o.syncErrorThrowable = !0, o.destination = new O(o, n, i, r)
                }
                return o
            }
            return m(e, t), e.prototype[E] = function() {
                return this
            }, e.create = function(t, n, i) {
                var r = new e(t, n, i);
                return r.syncErrorThrowable = !1, r
            }, e.prototype.next = function(t) {
                this.isStopped || this._next(t)
            }, e.prototype.error = function(t) {
                this.isStopped || (this.isStopped = !0, this._error(t))
            }, e.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, e.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
            }, e.prototype._next = function(t) {
                this.destination.next(t)
            }, e.prototype._error = function(t) {
                this.destination.error(t), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.destination.complete(), this.unsubscribe()
            }, e.prototype._unsubscribeAndRecycle = function() {
                var t = this._parent,
                    e = this._parents;
                return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this
            }, e
        }(P),
        O = function(t) {
            function e(e, n, i, r) {
                var o, s = t.call(this) || this;
                s._parentSubscriber = e;
                var a = s;
                return v(n) ? o = n : n && (o = n.next, i = n.error, r = n.complete, n !== b && (v((a = Object.create(n)).unsubscribe) && s.add(a.unsubscribe.bind(a)), a.unsubscribe = s.unsubscribe.bind(s))), s._context = a, s._next = o, s._error = i, s._complete = r, s
            }
            return m(e, t), e.prototype.next = function(t) {
                if (!this.isStopped && this._next) {
                    var e = this._parentSubscriber;
                    g.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
            }, e.prototype.error = function(t) {
                if (!this.isStopped) {
                    var e = this._parentSubscriber,
                        n = g.useDeprecatedSynchronousErrorHandling;
                    if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                    else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : A(t), this.unsubscribe();
                    else {
                        if (this.unsubscribe(), n) throw t;
                        A(t)
                    }
                }
            }, e.prototype.complete = function() {
                var t = this;
                if (!this.isStopped) {
                    var e = this._parentSubscriber;
                    if (this._complete) {
                        var n = function() {
                            return t._complete.call(t._context)
                        };
                        g.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                    } else this.unsubscribe()
                }
            }, e.prototype.__tryOrUnsub = function(t, e) {
                try {
                    t.call(this._context, e)
                } catch (t) {
                    if (this.unsubscribe(), g.useDeprecatedSynchronousErrorHandling) throw t;
                    A(t)
                }
            }, e.prototype.__tryOrSetError = function(t, e, n) {
                if (!g.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                try {
                    e.call(this._context, n)
                } catch (e) {
                    return g.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (A(e), !0)
                }
                return !1
            }, e.prototype._unsubscribe = function() {
                var t = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, t.unsubscribe()
            }, e
        }(M);
    var C = "function" == typeof Symbol && Symbol.observable || "@@observable";

    function F() {}

    function N(t) {
        return t ? 1 === t.length ? t[0] : function(e) {
            return t.reduce(function(t, e) {
                return e(t)
            }, e)
        } : F
    }
    var R = function() {
        function t(t) {
            this._isScalar = !1, t && (this._subscribe = t)
        }
        return t.prototype.lift = function(e) {
            var n = new t;
            return n.source = this, n.operator = e, n
        }, t.prototype.subscribe = function(t, e, n) {
            var i = this.operator,
                r = function(t, e, n) {
                    if (t) {
                        if (t instanceof M) return t;
                        if (t[E]) return t[E]()
                    }
                    return t || e || n ? new M(t, e, n) : new M(b)
                }(t, e, n);
            if (i ? r.add(i.call(r, this.source)) : r.add(this.source || g.useDeprecatedSynchronousErrorHandling && !r.syncErrorThrowable ? this._subscribe(r) : this._trySubscribe(r)), g.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable && (r.syncErrorThrowable = !1, r.syncErrorThrown)) throw r.syncErrorValue;
            return r
        }, t.prototype._trySubscribe = function(t) {
            try {
                return this._subscribe(t)
            } catch (e) {
                g.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), ! function(t) {
                    for (; t;) {
                        var e = t,
                            n = e.closed,
                            i = e.destination,
                            r = e.isStopped;
                        if (n || r) return !1;
                        t = i && i instanceof M ? i : null
                    }
                    return !0
                }(t) ? console.warn(e) : t.error(e)
            }
        }, t.prototype.forEach = function(t, e) {
            var n = this;
            return new(e = j(e))(function(e, i) {
                var r;
                r = n.subscribe(function(e) {
                    try {
                        t(e)
                    } catch (t) {
                        i(t), r && r.unsubscribe()
                    }
                }, i, e)
            })
        }, t.prototype._subscribe = function(t) {
            var e = this.source;
            return e && e.subscribe(t)
        }, t.prototype[C] = function() {
            return this
        }, t.prototype.pipe = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return 0 === t.length ? this : N(t)(this)
        }, t.prototype.toPromise = function(t) {
            var e = this;
            return new(t = j(t))(function(t, n) {
                var i;
                e.subscribe(function(t) {
                    return i = t
                }, function(t) {
                    return n(t)
                }, function() {
                    return t(i)
                })
            })
        }, t.create = function(e) {
            return new t(e)
        }, t
    }();

    function j(t) {
        if (t || (t = g.Promise || Promise), !t) throw new Error("no Promise impl found");
        return t
    }

    function I(t) {
        return t && "function" == typeof t.schedule
    }
    var q = function(t) {
            function e(e, n, i) {
                var r = t.call(this) || this;
                return r.parent = e, r.outerValue = n, r.outerIndex = i, r.index = 0, r
            }
            return m(e, t), e.prototype._next = function(t) {
                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
            }, e.prototype._error = function(t) {
                this.parent.notifyError(t, this), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, e
        }(M),
        D = function(t) {
            return function(e) {
                for (var n = 0, i = t.length; n < i && !e.closed; n++) e.next(t[n]);
                e.closed || e.complete()
            }
        },
        B = function(t) {
            return function(e) {
                return t.then(function(t) {
                    e.closed || (e.next(t), e.complete())
                }, function(t) {
                    return e.error(t)
                }).then(null, A), e
            }
        };

    function L() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }
    var U = L(),
        V = function(t) {
            return function(e) {
                for (var n = t[U]();;) {
                    var i = n.next();
                    if (i.done) {
                        e.complete();
                        break
                    }
                    if (e.next(i.value), e.closed) break
                }
                return "function" == typeof n.return && e.add(function() {
                    n.return && n.return()
                }), e
            }
        },
        z = function(t) {
            return function(e) {
                var n = t[C]();
                if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return n.subscribe(e)
            }
        },
        W = function(t) {
            return t && "number" == typeof t.length && "function" != typeof t
        };

    function G(t) {
        return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
    }
    var Q = function(t) {
        if (t instanceof R) return function(e) {
            return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e)
        };
        if (t && "function" == typeof t[C]) return z(t);
        if (W(t)) return D(t);
        if (G(t)) return B(t);
        if (t && "function" == typeof t[U]) return V(t);
        var e = w(t) ? "an invalid object" : "'" + t + "'";
        throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    };

    function H(t, e, n, i, r) {
        if (void 0 === r && (r = new q(t, n, i)), !r.closed) return Q(e)(r)
    }
    var Y = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return m(e, t), e.prototype.notifyNext = function(t, e, n, i, r) {
            this.destination.next(e)
        }, e.prototype.notifyError = function(t, e) {
            this.destination.error(t)
        }, e.prototype.notifyComplete = function(t) {
            this.destination.complete()
        }, e
    }(M);

    function X(t, e) {
        return function(n) {
            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new Z(t, e))
        }
    }
    var Z = function() {
            function t(t, e) {
                this.project = t, this.thisArg = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new $(t, this.project, this.thisArg))
            }, t
        }(),
        $ = function(t) {
            function e(e, n, i) {
                var r = t.call(this, e) || this;
                return r.project = n, r.count = 0, r.thisArg = i || r, r
            }
            return m(e, t), e.prototype._next = function(t) {
                var e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(M);

    function K(t, e) {
        return new R(e ? function(n) {
            var i = new P,
                r = 0;
            return i.add(e.schedule(function() {
                r !== t.length ? (n.next(t[r++]), n.closed || i.add(this.schedule())) : n.complete()
            })), i
        } : D(t))
    }

    function J(t, e) {
        if (!e) return t instanceof R ? t : new R(Q(t));
        if (null != t) {
            if (function(t) {
                    return t && "function" == typeof t[C]
                }(t)) return function(t, e) {
                return new R(e ? function(n) {
                    var i = new P;
                    return i.add(e.schedule(function() {
                        var r = t[C]();
                        i.add(r.subscribe({
                            next: function(t) {
                                i.add(e.schedule(function() {
                                    return n.next(t)
                                }))
                            },
                            error: function(t) {
                                i.add(e.schedule(function() {
                                    return n.error(t)
                                }))
                            },
                            complete: function() {
                                i.add(e.schedule(function() {
                                    return n.complete()
                                }))
                            }
                        }))
                    })), i
                } : z(t))
            }(t, e);
            if (G(t)) return function(t, e) {
                return new R(e ? function(n) {
                    var i = new P;
                    return i.add(e.schedule(function() {
                        return t.then(function(t) {
                            i.add(e.schedule(function() {
                                n.next(t), i.add(e.schedule(function() {
                                    return n.complete()
                                }))
                            }))
                        }, function(t) {
                            i.add(e.schedule(function() {
                                return n.error(t)
                            }))
                        })
                    })), i
                } : B(t))
            }(t, e);
            if (W(t)) return K(t, e);
            if (function(t) {
                    return t && "function" == typeof t[U]
                }(t) || "string" == typeof t) return function(t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new R(e ? function(n) {
                    var i, r = new P;
                    return r.add(function() {
                        i && "function" == typeof i.return && i.return()
                    }), r.add(e.schedule(function() {
                        i = t[U](), r.add(e.schedule(function() {
                            if (!n.closed) {
                                var t, e;
                                try {
                                    var r = i.next();
                                    t = r.value, e = r.done
                                } catch (t) {
                                    return void n.error(t)
                                }
                                e ? n.complete() : (n.next(t), this.schedule())
                            }
                        }))
                    })), r
                } : V(t))
            }(t, e)
        }
        throw new TypeError((null !== t && typeof t || t) + " is not observable")
    }

    function tt(t, e, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(i) {
            return i.pipe(tt(function(n, i) {
                return J(t(n, i)).pipe(X(function(t, r) {
                    return e(n, t, i, r)
                }))
            }, n))
        } : ("number" == typeof e && (n = e), function(e) {
            return e.lift(new et(t, n))
        })
    }
    var et = function() {
            function t(t, e) {
                void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new nt(t, this.project, this.concurrent))
            }, t
        }(),
        nt = function(t) {
            function e(e, n, i) {
                void 0 === i && (i = Number.POSITIVE_INFINITY);
                var r = t.call(this, e) || this;
                return r.project = n, r.concurrent = i, r.hasCompleted = !1, r.buffer = [], r.active = 0, r.index = 0, r
            }
            return m(e, t), e.prototype._next = function(t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }, e.prototype._tryNext = function(t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.active++, this._innerSub(e, t, n)
            }, e.prototype._innerSub = function(t, e, n) {
                var i = new q(this, void 0, void 0);
                this.destination.add(i), H(this, t, e, n, i)
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }, e.prototype.notifyNext = function(t, e, n, i, r) {
                this.destination.next(e)
            }, e.prototype.notifyComplete = function(t) {
                var e = this.buffer;
                this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, e
        }(Y);

    function it(t) {
        return t
    }

    function rt() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY,
            i = null,
            r = t[t.length - 1];
        return I(r) ? (i = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof r && (n = t.pop()), null === i && 1 === t.length && t[0] instanceof R ? t[0] : function(t) {
            return void 0 === t && (t = Number.POSITIVE_INFINITY), tt(it, t)
        }(n)(K(t, i))
    }
    var ot = n(144),
        st = {
            prefix: "fas",
            iconName: "play-circle",
            icon: [512, 512, [], "f144", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"]
        },
        at = {
            prefix: "fas",
            iconName: "stop-circle",
            icon: [512, 512, [], "f28d", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z"]
        },
        ut = (n(365), function(t) {
            var e = t.xPct,
                n = t.yPct,
                i = t.color,
                r = t.opacity;
            return s.a.createElement("div", {
                className: "circle",
                style: {
                    backgroundColor: i,
                    left: "calc(".concat(e, "% - 250px)"),
                    top: "calc(".concat(n, "% - 250px)"),
                    opacity: r
                }
            })
        }),
        lt = new R(function(t) {
            return t.complete()
        });

    function ct(t) {
        return t ? function(t) {
            return new R(function(e) {
                return t.schedule(function() {
                    return e.complete()
                })
            })
        }(t) : lt
    }

    function ft() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n, i, r = t[t.length - 1];
        switch (I(r) ? t.pop() : r = void 0, t.length) {
            case 0:
                return ct(r);
            case 1:
                return r ? K(t, r) : (n = t[0], (i = new R(function(t) {
                    t.next(n), t.complete()
                }))._isScalar = !0, i.value = n, i);
            default:
                return K(t, r)
        }
    }
    var pt, ht = function(t) {
            function e(e, n) {
                var i = t.call(this, e, n) || this;
                return i.scheduler = e, i.work = n, i.pending = !1, i
            }
            return m(e, t), e.prototype.schedule = function(t, e) {
                if (void 0 === e && (e = 0), this.closed) return this;
                this.state = t;
                var n = this.id,
                    i = this.scheduler;
                return null != n && (this.id = this.recycleAsyncId(i, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(i, this.id, e), this
            }, e.prototype.requestAsyncId = function(t, e, n) {
                return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
            }, e.prototype.recycleAsyncId = function(t, e, n) {
                if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
                clearInterval(e)
            }, e.prototype.execute = function(t, e) {
                if (this.closed) return new Error("executing a cancelled action");
                this.pending = !1;
                var n = this._execute(t, e);
                if (n) return n;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }, e.prototype._execute = function(t, e) {
                var n = !1,
                    i = void 0;
                try {
                    this.work(t)
                } catch (t) {
                    n = !0, i = !!t && t || new Error(t)
                }
                if (n) return this.unsubscribe(), i
            }, e.prototype._unsubscribe = function() {
                var t = this.id,
                    e = this.scheduler,
                    n = e.actions,
                    i = n.indexOf(this);
                this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== i && n.splice(i, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
            }, e
        }(function(t) {
            function e(e, n) {
                return t.call(this) || this
            }
            return m(e, t), e.prototype.schedule = function(t, e) {
                return void 0 === e && (e = 0), this
            }, e
        }(P)),
        dt = function() {
            function t(e, n) {
                void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
            }
            return t.prototype.schedule = function(t, e, n) {
                return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
            }, t.now = function() {
                return Date.now()
            }, t
        }(),
        yt = new(function(t) {
            function e(n, i) {
                void 0 === i && (i = dt.now);
                var r = t.call(this, n, function() {
                    return e.delegate && e.delegate !== r ? e.delegate.now() : i()
                }) || this;
                return r.actions = [], r.active = !1, r.scheduled = void 0, r
            }
            return m(e, t), e.prototype.schedule = function(n, i, r) {
                return void 0 === i && (i = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, i, r) : t.prototype.schedule.call(this, n, i, r)
            }, e.prototype.flush = function(t) {
                var e = this.actions;
                if (this.active) e.push(t);
                else {
                    var n;
                    this.active = !0;
                    do {
                        if (n = t.execute(t.state, t.delay)) break
                    } while (t = e.shift());
                    if (this.active = !1, n) {
                        for (; t = e.shift();) t.unsubscribe();
                        throw n
                    }
                }
            }, e
        }(dt))(ht);

    function mt(t) {
        var e = t.error;
        t.subscriber.error(e)
    }
    pt || (pt = {});
    var vt = function() {
        function t(t, e, n) {
            this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
        }
        return t.prototype.observe = function(t) {
            switch (this.kind) {
                case "N":
                    return t.next && t.next(this.value);
                case "E":
                    return t.error && t.error(this.error);
                case "C":
                    return t.complete && t.complete()
            }
        }, t.prototype.do = function(t, e, n) {
            switch (this.kind) {
                case "N":
                    return t && t(this.value);
                case "E":
                    return e && e(this.error);
                case "C":
                    return n && n()
            }
        }, t.prototype.accept = function(t, e, n) {
            return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
        }, t.prototype.toObservable = function() {
            var t, e;
            switch (this.kind) {
                case "N":
                    return ft(this.value);
                case "E":
                    return t = this.error, new R(e ? function(n) {
                        return e.schedule(mt, 0, {
                            error: t,
                            subscriber: n
                        })
                    } : function(e) {
                        return e.error(t)
                    });
                case "C":
                    return ct()
            }
            throw new Error("unexpected notification kind value")
        }, t.createNext = function(e) {
            return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
        }, t.createError = function(e) {
            return new t("E", void 0, e)
        }, t.createComplete = function() {
            return t.completeNotification
        }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
    }();

    function _t(t, e) {
        void 0 === e && (e = yt);
        var n, i = (n = t) instanceof Date && !isNaN(+n) ? +t - e.now() : Math.abs(t);
        return function(t) {
            return t.lift(new gt(i, e))
        }
    }
    var gt = function() {
            function t(t, e) {
                this.delay = t, this.scheduler = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new At(t, this.delay, this.scheduler))
            }, t
        }(),
        At = function(t) {
            function e(e, n, i) {
                var r = t.call(this, e) || this;
                return r.delay = n, r.scheduler = i, r.queue = [], r.active = !1, r.errored = !1, r
            }
            return m(e, t), e.dispatch = function(t) {
                for (var e = t.source, n = e.queue, i = t.scheduler, r = t.destination; n.length > 0 && n[0].time - i.now() <= 0;) n.shift().notification.observe(r);
                if (n.length > 0) {
                    var o = Math.max(0, n[0].time - i.now());
                    this.schedule(t, o)
                } else this.unsubscribe(), e.active = !1
            }, e.prototype._schedule = function(t) {
                this.active = !0, this.destination.add(t.schedule(e.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: t
                }))
            }, e.prototype.scheduleNotification = function(t) {
                if (!0 !== this.errored) {
                    var e = this.scheduler,
                        n = new bt(e.now() + this.delay, t);
                    this.queue.push(n), !1 === this.active && this._schedule(e)
                }
            }, e.prototype._next = function(t) {
                this.scheduleNotification(vt.createNext(t))
            }, e.prototype._error = function(t) {
                this.errored = !0, this.queue = [], this.destination.error(t), this.unsubscribe()
            }, e.prototype._complete = function() {
                this.scheduleNotification(vt.createComplete()), this.unsubscribe()
            }, e
        }(M),
        bt = function() {
            return function(t, e) {
                this.time = t, this.notification = e
            }
        }();
    var St, wt, Tt = function() {
            function t(t, e) {
                this.count = t, this.source = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new xt(t, this.count, this.source))
            }, t
        }(),
        xt = function(t) {
            function e(e, n, i) {
                var r = t.call(this, e) || this;
                return r.count = n, r.source = i, r
            }
            return m(e, t), e.prototype.complete = function() {
                if (!this.isStopped) {
                    var e = this.source,
                        n = this.count;
                    if (0 === n) return t.prototype.complete.call(this);
                    n > -1 && (this.count = n - 1), e.subscribe(this._unsubscribeAndRecycle())
                }
            }, e
        }(M),
        Pt = function(t) {
            return 100 * t
        },
        kt = function() {
            return {
                xPct: Pt(Math.random()),
                yPct: Pt(Math.random()),
                velocity: 1
            }
        },
        Et = rt(ft(null).pipe(tt(function() {
            return ft(kt()).pipe(_t(2e4 * Math.random()))
        }, wt, 1), (void 0 === St && (St = -1), function(t) {
            return 0 === St ? ct() : St < 0 ? t.lift(new Tt(-1, t)) : t.lift(new Tt(St - 1, t))
        })), ft(null).pipe(X(function() {
            return kt()
        })));
    Object.prototype.toString;

    function Mt(t, e, n, i) {
        return v(n) && (i = n, n = void 0), i ? Mt(t, e, n).pipe(X(function(t) {
            return S(t) ? i.apply(void 0, t) : i(t)
        })) : new R(function(i) {
            ! function t(e, n, i, r, o) {
                var s;
                if (function(t) {
                        return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                    }(e)) {
                    var a = e;
                    e.addEventListener(n, i, o), s = function() {
                        return a.removeEventListener(n, i, o)
                    }
                } else if (function(t) {
                        return t && "function" == typeof t.on && "function" == typeof t.off
                    }(e)) {
                    var u = e;
                    e.on(n, i), s = function() {
                        return u.off(n, i)
                    }
                } else if (function(t) {
                        return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                    }(e)) {
                    var l = e;
                    e.addListener(n, i), s = function() {
                        return l.removeListener(n, i)
                    }
                } else {
                    if (!e || !e.length) throw new TypeError("Invalid event target");
                    for (var c = 0, f = e.length; c < f; c++) t(e[c], n, i, r, o)
                }
                r.add(s)
            }(t, e, function(t) {
                arguments.length > 1 ? i.next(Array.prototype.slice.call(arguments)) : i.next(t)
            }, i, n)
        })
    }
    var Ot = n(145),
        Ct = n.n(Ot),
        Ft = n(11),
        Nt = function(t, e) {
            return {
                xPct: Pt(e.clientX / t.clientWidth),
                yPct: Pt(e.clientY / t.clientHeight),
                velocity: 1
            }
        },
        Rt = function(t) {
            return Ct()(Ft.context, t), rt(function(t) {
                return Mt(t, "click").pipe(X(function(e) {
                    return Nt(t, e)
                }))
            }(t), function(t) {
                return Mt(t, "touchstart").pipe(tt(function(t) {
                    var e = t.changedTouches;
                    return Array.from(e)
                }), X(function(e) {
                    return Nt(t, e)
                }))
            }(t))
        };

    function jt(t) {
        return !S(t) && t - parseFloat(t) + 1 >= 0
    }

    function It(t) {
        var e = t.index,
            n = t.period,
            i = t.subscriber;
        if (i.next(e), !i.closed) {
            if (-1 === n) return i.complete();
            t.index = e + 1, this.schedule(t, n)
        }
    }
    var qt = function() {
            function t(t, e, n) {
                this.project = t, this.concurrent = e, this.scheduler = n
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Dt(t, this.project, this.concurrent, this.scheduler))
            }, t
        }(),
        Dt = function(t) {
            function e(e, n, i, r) {
                var o = t.call(this, e) || this;
                return o.project = n, o.concurrent = i, o.scheduler = r, o.index = 0, o.active = 0, o.hasCompleted = !1, i < Number.POSITIVE_INFINITY && (o.buffer = []), o
            }
            return m(e, t), e.dispatch = function(t) {
                var e = t.subscriber,
                    n = t.result,
                    i = t.value,
                    r = t.index;
                e.subscribeToProjection(n, i, r)
            }, e.prototype._next = function(t) {
                var n = this.destination;
                if (n.closed) this._complete();
                else {
                    var i = this.index++;
                    if (this.active < this.concurrent) {
                        n.next(t);
                        try {
                            var r = (0, this.project)(t, i);
                            if (this.scheduler) {
                                var o = {
                                    subscriber: this,
                                    result: r,
                                    value: t,
                                    index: i
                                };
                                this.destination.add(this.scheduler.schedule(e.dispatch, 0, o))
                            } else this.subscribeToProjection(r, t, i)
                        } catch (t) {
                            n.error(t)
                        }
                    } else this.buffer.push(t)
                }
            }, e.prototype.subscribeToProjection = function(t, e, n) {
                this.active++, this.destination.add(H(this, t, e, n))
            }, e.prototype._complete = function() {
                this.hasCompleted = !0, this.hasCompleted && 0 === this.active && this.destination.complete(), this.unsubscribe()
            }, e.prototype.notifyNext = function(t, e, n, i, r) {
                this._next(e)
            }, e.prototype.notifyComplete = function(t) {
                var e = this.buffer;
                this.destination.remove(t), this.active--, e && e.length > 0 && this._next(e.shift()), this.hasCompleted && 0 === this.active && this.destination.complete()
            }, e
        }(Y);
    var Bt = function() {
            function t(t, e) {
                this.predicate = t, this.thisArg = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Lt(t, this.predicate, this.thisArg))
            }, t
        }(),
        Lt = function(t) {
            function e(e, n, i) {
                var r = t.call(this, e) || this;
                return r.predicate = n, r.thisArg = i, r.count = 0, r
            }
            return m(e, t), e.prototype._next = function(t) {
                var e;
                try {
                    e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (t) {
                    return void this.destination.error(t)
                }
                e && this.destination.next(t)
            }, e
        }(M);

    function Ut(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var Vt = [function(t) {
            return (15 - (t.maxCount - t.count)) / 15
        }, function(t) {
            return (15 - t.plays + 1) / 15
        }],
        zt = function(t) {
            return function(e) {
                var n, i, r, o = 0;
                return e.pipe(X(function(t) {
                    return [t, o += 1, 1]
                }), (n = function(e) {
                    var n, i, r = Ut(e, 3),
                        s = r[0],
                        a = r[1],
                        u = r[2];
                    return o <= 15 || a > o - 15 ? function(t, e, n) {
                        void 0 === t && (t = 0);
                        var i = -1;
                        return jt(e) ? i = Number(e) < 1 ? 1 : Number(e) : I(e) && (n = e), I(n) || (n = yt), new R(function(e) {
                            var r = jt(t) ? t : +t - n.now();
                            return n.schedule(It, r, {
                                index: 0,
                                period: i,
                                subscriber: e
                            })
                        })
                    }(t + (u - 1) * Math.random() * 250).pipe(X(function() {
                        return [Object.assign(s, {
                            velocity: Vt.reduce(function(t, e) {
                                return t + e({
                                    maxCount: o,
                                    count: a,
                                    plays: u
                                })
                            }, 0) / Vt.length
                        }), a, u + 1]
                    }), (n = function(t) {
                        return Ut(t, 1)[0].velocity > 0
                    }, function(t) {
                        return t.lift(new Bt(n, i))
                    })) : lt
                }, void 0 === i && (i = Number.POSITIVE_INFINITY), void 0 === r && (r = void 0), i = (i || 0) < 1 ? Number.POSITIVE_INFINITY : i, function(t) {
                    return t.lift(new qt(n, i, r))
                }), X(function(t) {
                    return Ut(t, 1)[0]
                }))
            }
        };
    var Wt = function() {
            function t(t, e) {
                this.dueTime = t, this.scheduler = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Gt(t, this.dueTime, this.scheduler))
            }, t
        }(),
        Gt = function(t) {
            function e(e, n, i) {
                var r = t.call(this, e) || this;
                return r.dueTime = n, r.scheduler = i, r.debouncedSubscription = null, r.lastValue = null, r.hasValue = !1, r
            }
            return m(e, t), e.prototype._next = function(t) {
                this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(Qt, this.dueTime, this))
            }, e.prototype._complete = function() {
                this.debouncedNext(), this.destination.complete()
            }, e.prototype.debouncedNext = function() {
                if (this.clearDebounce(), this.hasValue) {
                    var t = this.lastValue;
                    this.lastValue = null, this.hasValue = !1, this.destination.next(t)
                }
            }, e.prototype.clearDebounce = function() {
                var t = this.debouncedSubscription;
                null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
            }, e
        }(M);

    function Qt(t) {
        t.debouncedNext()
    }
    var Ht = function() {
            function t(t, e) {
                this.observables = t, this.project = e
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new Yt(t, this.observables, this.project))
            }, t
        }(),
        Yt = function(t) {
            function e(e, n, i) {
                var r = t.call(this, e) || this;
                r.observables = n, r.project = i, r.toRespond = [];
                var o = n.length;
                r.values = new Array(o);
                for (var s = 0; s < o; s++) r.toRespond.push(s);
                for (s = 0; s < o; s++) {
                    var a = n[s];
                    r.add(H(r, a, a, s))
                }
                return r
            }
            return m(e, t), e.prototype.notifyNext = function(t, e, n, i, r) {
                this.values[n] = e;
                var o = this.toRespond;
                if (o.length > 0) {
                    var s = o.indexOf(n); - 1 !== s && o.splice(s, 1)
                }
            }, e.prototype.notifyComplete = function() {}, e.prototype._next = function(t) {
                if (0 === this.toRespond.length) {
                    var e = [t].concat(this.values);
                    this.project ? this._tryProject(e) : this.destination.next(e)
                }
            }, e.prototype._tryProject = function(t) {
                var e;
                try {
                    e = this.project.apply(this, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.next(e)
            }, e
        }(Y),
        Xt = {
            red: {
                50: "#ffebee",
                100: "#ffcdd2",
                200: "#ef9a9a",
                300: "#e57373",
                400: "#ef5350",
                500: "#f44336",
                600: "#e53935",
                700: "#d32f2f",
                800: "#c62828",
                900: "#b71c1c",
                a100: "#ff8a80",
                a200: "#ff5252",
                a400: "#ff1744",
                a700: "#d50000"
            },
            pink: {
                50: "#fce4ec",
                100: "#f8bbd0",
                200: "#f48fb1",
                300: "#f06292",
                400: "#ec407a",
                500: "#e91e63",
                600: "#d81b60",
                700: "#c2185b",
                800: "#ad1457",
                900: "#880e4f",
                a100: "#ff80ab",
                a200: "#ff4081",
                a400: "#f50057",
                a700: "#c51162"
            },
            purple: {
                50: "#f3e5f5",
                100: "#e1bee7",
                200: "#ce93d8",
                300: "#ba68c8",
                400: "#ab47bc",
                500: "#9c27b0",
                600: "#8e24aa",
                700: "#7b1fa2",
                800: "#6a1b9a",
                900: "#4a148c",
                a100: "#ea80fc",
                a200: "#e040fb",
                a400: "#d500f9",
                a700: "#aa00ff"
            },
            deepPurple: {
                50: "#ede7f6",
                100: "#d1c4e9",
                200: "#b39ddb",
                300: "#9575cd",
                400: "#7e57c2",
                500: "#673ab7",
                600: "#5e35b1",
                700: "#512da8",
                800: "#4527a0",
                900: "#311b92",
                a100: "#b388ff",
                a200: "#7c4dff",
                a400: "#651fff",
                a700: "#6200ea"
            },
            indigo: {
                50: "#e8eaf6",
                100: "#c5cae9",
                200: "#9fa8da",
                300: "#7986cb",
                400: "#5c6bc0",
                500: "#3f51b5",
                600: "#3949ab",
                700: "#303f9f",
                800: "#283593",
                900: "#1a237e",
                a100: "#8c9eff",
                a200: "#536dfe",
                a400: "#3d5afe",
                a700: "#304ffe"
            },
            blue: {
                50: "#e3f2fd",
                100: "#bbdefb",
                200: "#90caf9",
                300: "#64b5f6",
                400: "#42a5f5",
                500: "#2196f3",
                600: "#1e88e5",
                700: "#1976d2",
                800: "#1565c0",
                900: "#0d47a1",
                a100: "#82b1ff",
                a200: "#448aff",
                a400: "#2979ff",
                a700: "#2962ff"
            },
            lightBlue: {
                50: "#e1f5fe",
                100: "#b3e5fc",
                200: "#81d4fa",
                300: "#4fc3f7",
                400: "#29b6f6",
                500: "#03a9f4",
                600: "#039be5",
                700: "#0288d1",
                800: "#0277bd",
                900: "#01579b",
                a100: "#80d8ff",
                a200: "#40c4ff",
                a400: "#00b0ff",
                a700: "#0091ea"
            },
            cyan: {
                50: "#e0f7fa",
                100: "#b2ebf2",
                200: "#80deea",
                300: "#4dd0e1",
                400: "#26c6da",
                500: "#00bcd4",
                600: "#00acc1",
                700: "#0097a7",
                800: "#00838f",
                900: "#006064",
                a100: "#84ffff",
                a200: "#18ffff",
                a400: "#00e5ff",
                a700: "#00b8d4"
            },
            teal: {
                50: "#e0f2f1",
                100: "#b2dfdb",
                200: "#80cbc4",
                300: "#4db6ac",
                400: "#26a69a",
                500: "#009688",
                600: "#00897b",
                700: "#00796b",
                800: "#00695c",
                900: "#004d40",
                a100: "#a7ffeb",
                a200: "#64ffda",
                a400: "#1de9b6",
                a700: "#00bfa5"
            },
            green: {
                50: "#e8f5e9",
                100: "#c8e6c9",
                200: "#a5d6a7",
                300: "#81c784",
                400: "#66bb6a",
                500: "#4caf50",
                600: "#43a047",
                700: "#388e3c",
                800: "#2e7d32",
                900: "#1b5e20",
                a100: "#b9f6ca",
                a200: "#69f0ae",
                a400: "#00e676",
                a700: "#00c853"
            },
            lightGreen: {
                50: "#f1f8e9",
                100: "#dcedc8",
                200: "#c5e1a5",
                300: "#aed581",
                400: "#9ccc65",
                500: "#8bc34a",
                600: "#7cb342",
                700: "#689f38",
                800: "#558b2f",
                900: "#33691e",
                a100: "#ccff90",
                a200: "#b2ff59",
                a400: "#76ff03",
                a700: "#64dd17"
            },
            lime: {
                50: "#f9fbe7",
                100: "#f0f4c3",
                200: "#e6ee9c",
                300: "#dce775",
                400: "#d4e157",
                500: "#cddc39",
                600: "#c0ca33",
                700: "#afb42b",
                800: "#9e9d24",
                900: "#827717",
                a100: "#f4ff81",
                a200: "#eeff41",
                a400: "#c6ff00",
                a700: "#aeea00"
            },
            yellow: {
                50: "#fffde7",
                100: "#fff9c4",
                200: "#fff59d",
                300: "#fff176",
                400: "#ffee58",
                500: "#ffeb3b",
                600: "#fdd835",
                700: "#fbc02d",
                800: "#f9a825",
                900: "#f57f17",
                a100: "#ffff8d",
                a200: "#ffff00",
                a400: "#ffea00",
                a700: "#ffd600"
            },
            amber: {
                50: "#fff8e1",
                100: "#ffecb3",
                200: "#ffe082",
                300: "#ffd54f",
                400: "#ffca28",
                500: "#ffc107",
                600: "#ffb300",
                700: "#ffa000",
                800: "#ff8f00",
                900: "#ff6f00",
                a100: "#ffe57f",
                a200: "#ffd740",
                a400: "#ffc400",
                a700: "#ffab00"
            },
            orange: {
                50: "#fff3e0",
                100: "#ffe0b2",
                200: "#ffcc80",
                300: "#ffb74d",
                400: "#ffa726",
                500: "#ff9800",
                600: "#fb8c00",
                700: "#f57c00",
                800: "#ef6c00",
                900: "#e65100",
                a100: "#ffd180",
                a200: "#ffab40",
                a400: "#ff9100",
                a700: "#ff6d00"
            },
            deepOrange: {
                50: "#fbe9e7",
                100: "#ffccbc",
                200: "#ffab91",
                300: "#ff8a65",
                400: "#ff7043",
                500: "#ff5722",
                600: "#f4511e",
                700: "#e64a19",
                800: "#d84315",
                900: "#bf360c",
                a100: "#ff9e80",
                a200: "#ff6e40",
                a400: "#ff3d00",
                a700: "#dd2c00"
            },
            brown: {
                50: "#efebe9",
                100: "#d7ccc8",
                200: "#bcaaa4",
                300: "#a1887f",
                400: "#8d6e63",
                500: "#795548",
                600: "#6d4c41",
                700: "#5d4037",
                800: "#4e342e",
                900: "#3e2723"
            },
            grey: {
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#eeeeee",
                300: "#e0e0e0",
                400: "#bdbdbd",
                500: "#9e9e9e",
                600: "#757575",
                700: "#616161",
                800: "#424242",
                900: "#212121"
            },
            blueGrey: {
                50: "#eceff1",
                100: "#cfd8dc",
                200: "#b0bec5",
                300: "#90a4ae",
                400: "#78909c",
                500: "#607d8b",
                600: "#546e7a",
                700: "#455a64",
                800: "#37474f",
                900: "#263238"
            },
            darkText: {
                primary: "rgba(0, 0, 0, 0.87)",
                secondary: "rgba(0, 0, 0, 0.54)",
                disabled: "rgba(0, 0, 0, 0.38)",
                dividers: "rgba(0, 0, 0, 0.12)"
            },
            lightText: {
                primary: "rgba(255, 255, 255, 1)",
                secondary: "rgba(255, 255, 255, 0.7)",
                disabled: "rgba(255, 255, 255, 0.5)",
                dividers: "rgba(255, 255, 255, 0.12)"
            },
            darkIcons: {
                active: "rgba(0, 0, 0, 0.54)",
                inactive: "rgba(0, 0, 0, 0.38)"
            },
            lightIcons: {
                active: "rgba(255, 255, 255, 1)",
                inactive: "rgba(255, 255, 255, 0.5)"
            },
            white: "#ffffff",
            black: "#000000"
        },
        Zt = n(98),
        $t = n.n(Zt),
        Kt = regeneratorRuntime.mark(Jt);

    function Jt(t) {
        var e, n;
        return regeneratorRuntime.wrap(function(i) {
            for (;;) switch (i.prev = i.next) {
                case 0:
                    e = $t()(t), n = 0;
                case 2:
                    if (!(n < e.length)) {
                        i.next = 8;
                        break
                    }
                    return i.next = 6, e[n];
                case 6:
                    i.next = 12;
                    break;
                case 8:
                    return n = 0, e = $t()(e), i.next = 12, e[n];
                case 12:
                    n += 1, i.next = 2;
                    break;
                case 15:
                case "end":
                    return i.stop()
            }
        }, Kt)
    }
    var te = Jt;

    function ee(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var ne = ["white", "black", "yellow"],
        ie = ["Text", "Icons"],
        re = Reflect.ownKeys(Xt).filter(function(t) {
            return !ne.includes(t) && ie.every(function(e) {
                return !t.endsWith(e)
            })
        }).map(function(t) {
            return Xt[t][300]
        }),
        oe = function() {
            return function(t) {
                var e, n, i = te(re),
                    r = rt(ft(i.next().value), t.pipe((e = 3e3, void 0 === n && (n = yt), function(t) {
                        return t.lift(new Wt(e, n))
                    }), X(function() {
                        return i.next().value
                    })));
                return t.pipe(function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return function(e) {
                        var n;
                        "function" == typeof t[t.length - 1] && (n = t.pop());
                        var i = t;
                        return e.lift(new Ht(i, n))
                    }
                }(r), X(function(t) {
                    var e = ee(t, 2),
                        n = e[0],
                        i = e[1];
                    return Object.assign({}, n, {
                        color: i
                    })
                }))
            }
        },
        se = n(146),
        ae = n.n(se),
        ue = function() {
            var t = Ft.context.createBuffer(1, 1, Ft.context.sampleRate),
                e = Ft.context.createBufferSource();
            e.buffer = t, e.connect(Ft.context.destination), e.start(0), Ft.context.state && "running" !== Ft.context.state && Ft.context.resume && Ft.context.resume();
            var n = document.createElement("audio");
            n.canPlayType("audio/mp3") && (n.controls = !1, n.preload = "auto", n.loop = !1, n.src = ae.a, n.play())
        };
    n(366);

    function le(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function ce() {
        return ce = function() {
            return !1
        }, !0
    }
    var fe = function(t) {
        var e, n, i, r = t.player,
            a = ((e = le(Object(o.useState)(!0), 2))[0], n = e[1], function() {
                return n(function(t) {
                    return !t
                })
            }),
            u = Object(o.useRef)([]),
            l = Object(o.useRef)(null),
            f = Object(o.useRef)(null),
            h = le(Object(o.useState)(!1), 2),
            y = h[0],
            m = h[1],
            v = le((i = Object(o.useRef)(new d.a), [function() {
                return i.current.enable()
            }, function() {
                return i.current.disable()
            }]), 1)[0],
            _ = le(Object(o.useState)(!1), 2),
            g = _[0],
            A = _[1],
            b = Object(o.useRef)(null),
            S = Object(o.useRef)(null);
        Object(o.useEffect)(function() {
            l.current.ontouchend = function(t) {
                return t.preventDefault()
            };
            var t = Rt(l.current);
            g && (t = rt(t, Et));
            var e = 5e3 * Math.random() + 7e3,
                n = t.pipe(oe(), zt(e)).subscribe(function(t) {
                    ce() && (ue(), v(), m(!0)), u.current.push(Object.assign({}, t, {
                        id: p()(),
                        delay: e
                    })), r(t), a()
                });
            return function() {
                n.unsubscribe()
            }
        }, [l, g]);
        var w = function(t) {
            t.stopPropagation(), A(!g)
        };
        Object(o.useEffect)(function() {
            b.current && (b.current.onclick = w, b.current.ontouchstart = w), S.current && (S.current.ontouchend = function(t) {
                t.stopPropagation()
            })
        });
        var T = [f, l];
        Object(o.useEffect)(function() {
            T.forEach(function(t) {
                t.current && (t.current.ontouchend = function() {
                    event.preventDefault()
                })
            })
        }, T);
        var x = y ? s.a.createElement("div", null, s.a.createElement(c.TransitionGroup, null, u.current.map(function(t) {
            return s.a.createElement(c.CSSTransition, {
                timeout: {
                    enter: 7100,
                    exit: 0
                },
                onEntering: function(t) {
                    return Object.assign(t.style, {
                        opacity: 0
                    })
                },
                onEntered: function() {
                    return e = t.id, u.current.splice(u.current.findIndex(function(t) {
                        return t.id === e
                    }), 1), void a();
                    var e
                },
                classNames: "circle",
                key: t.id
            }, s.a.createElement(ut, {
                xPct: t.xPct,
                yPct: t.yPct,
                opacity: t.velocity,
                color: t.color
            }))
        })), s.a.createElement("button", {
            className: "generation-toggle-btn",
            ref: b
        }, s.a.createElement(ot.a, {
            icon: g ? at : st,
            size: "lg"
        })), s.a.createElement("a", {
            href: "https://alexbainter.com",
            className: "alex-bainter-link",
            ref: S
        }, "made by alex bainter")) : s.a.createElement("div", {
            className: "initializer",
            ref: f
        }, "Press anywhere");
        return s.a.createElement("div", {
            className: "canvas",
            ref: l
        }, x)
    };
    fe.propTypes = {
        player: l.a.func
    };
    var pe = fe,
        he = (n(374), function() {
            return s.a.createElement("div", {
                className: "loading-message"
            }, "Take a deep breath")
        }),
        de = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B".split(" "),
        ye = function(t) {
            return "string" != typeof t ? de.slice() : de.filter(function(e) {
                var n = e[1] || " ";
                return -1 !== t.indexOf(n)
            })
        },
        me = (ye(" #"), ye(" b"), /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/);

    function ve(t) {
        "string" != typeof t && (t = "");
        var e = me.exec(t);
        return [e[1].toUpperCase(), e[2].replace(/x/g, "##"), e[3], e[4]]
    }
    var _e = Object.freeze({
            pc: null,
            name: null,
            step: null,
            alt: null,
            oct: null,
            octStr: null,
            chroma: null,
            midi: null,
            freq: null
        }),
        ge = [0, 2, 4, 5, 7, 9, 11],
        Ae = function(t, e) {
            return void 0 === e && (e = {}),
                function(n) {
                    return e[n] || (e[n] = t(n))
                }
        }(function(t) {
            var e = ve(t);
            if ("" === e[0] || "" !== e[3]) return _e;
            var n = e[0],
                i = e[1],
                r = e[2],
                o = {
                    letter: n,
                    acc: i,
                    octStr: r,
                    pc: n + i,
                    name: n + i + r,
                    step: (n.charCodeAt(0) + 3) % 7,
                    alt: "b" === i[0] ? -i.length : i.length,
                    oct: r.length ? +r : null,
                    chroma: 0,
                    midi: null,
                    freq: null
                };
            return o.chroma = (ge[o.step] + o.alt + 120) % 12, o.midi = null !== o.oct ? ge[o.step] + o.alt + 12 * (o.oct + 1) : null, o.freq = we(o.midi), Object.freeze(o)
        }),
        be = function(t) {
            return Ae(t).name
        },
        Se = function(t) {
            return Ae(t).pc
        },
        we = function(t, e) {
            return void 0 === e && (e = 440), "number" == typeof t ? Math.pow(2, (t - 69) / 12) * e : null
        },
        Te = (Math.log(2), Math.log(440), function(t, e) {
            return Array(e + 1).join(t)
        }),
        xe = function(t, e) {
            void 0 === t && (t = {}), void 0 === e && (e = null);
            var n = e ? Object.assign({}, Ae(e), t) : t,
                i = n.step,
                r = n.alt,
                o = n.oct;
            if ("number" != typeof i) return null;
            var s = function(t) {
                return "CDEFGAB" [t]
            }(i);
            if (!s) return null;
            var a = s + function(t) {
                return n = function(t) {
                    return t < 0 ? Te("b", -t) : Te("#", t)
                }, "number" != typeof(e = t) ? "" : n(e);
                var e, n
            }(r);
            return o || 0 === o ? a + o : a
        };

    function Pe(t, e) {
        var n = e.length,
            i = (t % n + n) % n;
        return e.slice(i, n).concat(e.slice(0, i))
    }
    var ke = function(t) {
            return t.filter(function(t) {
                return 0 === t || t
            })
        },
        Ee = function(t) {
            var e = Ae(t).midi;
            return null !== e ? e : Ae(t + "-100").midi
        };

    function Me(t) {
        return (e = t, ke(e.map(be)).sort(function(t, e) {
            return Ee(t) > Ee(e)
        })).filter(function(t, e, n) {
            return 0 === e || t !== n[e - 1]
        });
        var e
    }
    var Oe = new RegExp("^([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})|(AA|A|P|M|m|d|dd)([-+]?\\d+)$"),
        Ce = [0, 2, 4, 5, 7, 9, 11],
        Fe = ("1P 2m 2M 3m 3M 4P 5P 6m 6M 7m 7M 8P".split(" "), Object.freeze({
            name: null,
            num: null,
            q: null,
            step: null,
            alt: null,
            dir: null,
            type: null,
            simple: null,
            semitones: null,
            chroma: null,
            oct: null
        })),
        Ne = function(t) {
            return (Math.abs(t) - 1) % 7
        },
        Re = function(t) {
            var e = function(t) {
                var e = Oe.exec("" + t);
                return null === e ? null : e[1] ? [e[1], e[2]] : [e[4], e[3]]
            }(t);
            if (null === e) return Fe;
            var n, i, r = {
                num: 0,
                q: "d",
                name: "",
                type: "M",
                step: 0,
                dir: -1,
                simple: 1,
                alt: 0,
                oct: 0,
                semitones: 0,
                chroma: 0,
                ic: 0
            };
            return r.num = +e[0], r.q = e[1], r.step = Ne(r.num), r.type = "PMMPPMM" [r.step], "M" === r.type && "P" === r.q ? Fe : (r.name = "" + r.num + r.q, r.dir = r.num < 0 ? -1 : 1, r.simple = 8 === r.num || -8 === r.num ? r.num : r.dir * (r.step + 1), r.alt = (n = r.type, "M" === (i = r.q) && "M" === n ? 0 : "P" === i && "P" === n ? 0 : "m" === i && "M" === n ? -1 : /^A+$/.test(i) ? i.length : /^d+$/.test(i) ? "P" === n ? -i.length : -i.length - 1 : null), r.oct = Math.floor((Math.abs(r.num) - 1) / 7), r.semitones = r.dir * (Ce[r.step] + r.alt + 12 * r.oct), r.chroma = (r.dir * (Ce[r.step] + r.alt) % 12 + 12) % 12, Object.freeze(r))
        },
        je = {};

    function Ie(t) {
        return "string" != typeof t ? Fe : je[t] || (je[t] = Re(t))
    }
    "P m M m M P d P m M m M".split(" ");
    var qe = [0, 2, 4, -1, 1, 3, 5],
        De = qe.map(function(t) {
            return Math.floor(7 * t / 12)
        }),
        Be = [3, 0, 4, 1, 5, 2, 6];
    var Le = function(t, e, n) {
            var i = Be[function(t) {
                    var e = (t + 1) % 7;
                    return e < 0 ? 7 + e : e
                }(t)],
                r = Math.floor((t + 1) / 7);
            return void 0 === e ? {
                step: i,
                alt: r,
                dir: n
            } : {
                step: i,
                alt: r,
                oct: e + 4 * r + De[i],
                dir: n
            }
        },
        Ue = function(t) {
            return e = function(e) {
                    var n = t(e);
                    return null === n.name ? null : function(t) {
                        var e = t.step,
                            n = t.alt,
                            i = t.oct,
                            r = t.dir;
                        void 0 === r && (r = 1);
                        var o = qe[e] + 7 * n;
                        return null === i ? [r * o] : [r * o, r * (i - De[e] - 4 * n)]
                    }(n)
                }, void 0 === n && (n = {}),
                function(t) {
                    return n[t] || (n[t] = e(t))
                };
            var e, n
        },
        Ve = Ue(Ae),
        ze = Ue(Ie);

    function We(t, e) {
        if (1 === arguments.length) return function(e) {
            return We(t, e)
        };
        var n = Ve(t),
            i = ze(e);
        if (null === n || null === i) return null;
        var r = 1 === n.length ? [n[0] + i[0]] : [n[0] + i[0], n[1] + i[1]];
        return xe(Le(r[0], r[1]))
    }
    var Ge = n(147),
        Qe = n(148),
        He = function(t) {
            return function(t) {
                return Ae(t).chroma
            }(t) || function(t) {
                return Ie(t).chroma
            }(t) || 0
        },
        Ye = function(t) {
            return parseInt(Xe(t), 2)
        };

    function Xe(t) {
        if ($e(t)) return t;
        if (!Array.isArray(t)) return "";
        var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        return t.map(He).forEach(function(t) {
            e[t] = 1
        }), e.join("")
    }
    var Ze = /^[01]{12}$/;

    function $e(t) {
        return Ze.test(t)
    }
    "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M".split(" ");

    function Ke(t, e) {
        return arguments.length > 1 ? Ke(t)(e) : (t = Ye(t), function(e) {
            return (e = Ye(e)) !== t && (e & t) === e
        })
    }

    function Je(t, e) {
        return arguments.length > 1 ? Je(t)(e) : (t = Ye(t), function(e) {
            return (e = Ye(e)) !== t && (e | t) === e
        })
    }
    var tn, en, nn, rn = function(t) {
            var e = Object.keys(t).sort(),
                n = [],
                i = [],
                r = function(t, e, r) {
                    n[t] = e, i[r] = i[r] || [], i[r].push(t)
                };
            e.forEach(function(e) {
                var n = t[e][0].split(" "),
                    i = t[e][1],
                    o = Xe(n);
                r(e, n, o), i && i.forEach(function(t) {
                    return r(t, n, o)
                })
            });
            var o = Object.keys(n).sort(),
                s = function(t) {
                    return n[t]
                };
            return s.names = function(t) {
                return "string" == typeof t ? (i[t] || []).slice() : (!0 === t ? o : e).slice()
            }, s
        },
        on = rn(Ge),
        sn = rn(Qe),
        an = (tn = on, en = sn, (nn = function(t) {
            return tn(t) || en(t)
        }).names = function(t) {
            return tn.names(t).concat(en.names(t))
        }, Object.freeze({
            name: null,
            intervals: [],
            names: [],
            chroma: null,
            setnum: null
        })),
        un = function(t, e) {
            return function(n) {
                return e[n] || (e[n] = t(n))
            }
        }(function(t) {
            var e = on(t);
            if (!e) return an;
            var n = {
                intervals: e,
                name: t
            };
            return n.chroma = Xe(e), n.setnum = parseInt(n.chroma, 2), n.names = on.names(n.chroma), Object.freeze(n)
        }, {}),
        ln = on.names,
        cn = function(t) {
            var e = hn(t);
            return un(e[1]).intervals
        };

    function fn(t, e) {
        var n = hn(t);
        return e = e || n[1], cn(e).map(We(n[0]))
    }

    function pn(t) {
        var e = hn(t);
        return void 0 !== on(e[1])
    }

    function hn(t) {
        if ("string" != typeof t) return ["", ""];
        var e = t.indexOf(" "),
            n = be(t.substring(0, e)) || be(t) || "",
            i = "" !== n ? t.substring(n.length + 1) : t;
        return [n, i.length ? i : ""]
    }
    var dn = function(t) {
            var e = cn(t),
                n = fn(t);
            return function(t, e) {
                e = !1 !== e;
                var n = Xe(t).split("");
                return ke(n.map(function(t, i) {
                    var r = Pe(i, n);
                    return e && "0" === r[0] ? null : r.join("")
                }))
            }(e).map(function(t, i) {
                var r = on.names(t)[0];
                if (r) return [n[i] || e[i], r]
            }).filter(function(t) {
                return t
            })
        },
        yn = function(t) {
            var e = Ke(cn(t));
            return sn.names().filter(function(t) {
                return e(sn(t))
            })
        },
        mn = function(t) {
            var e = ke(t.map(Se));
            if (!e.length) return e;
            var n = e[0],
                i = Me(e);
            return Pe(i.indexOf(n), i)
        },
        vn = function(t) {
            if (!cn(t).length) return [];
            var e = Je(cn(t));
            return on.names().filter(function(t) {
                return e(on(t))
            })
        },
        _n = function(t) {
            var e = Ke(cn(t));
            return on.names().filter(function(t) {
                return e(on(t))
            })
        },
        gn = (sn.names, Object.freeze({
            name: null,
            names: [],
            intervals: [],
            chroma: null,
            setnum: null
        }));
    ! function(t, e) {
        void 0 === e && (e = {})
    }(function(t) {
        var e = sn(t);
        if (!e) return gn;
        var n = {
            intervals: e,
            name: t
        };
        return n.chroma = Xe(e), n.setnum = parseInt(n.chroma, 2), n.names = sn.names(n.chroma), n
    });
    var An = n(149),
        bn = "" !== document.createElement("audio").canPlayType("audio/ogg") ? "ogg" : "mp3",
        Sn = new Ft.Filter({
            frequency: 2500,
            type: "lowpass"
        }),
        wn = new Ft.Filter({
            freqequency: 1500,
            type: "lowshelf",
            rolloff: -96
        }),
        Tn = new Ft.Compressor,
        xn = function() {
            return new Promise(function(t) {
                var e = new Ft.Sampler(An["vsco2-piano-reverb-".concat(bn)], {
                    onload: function() {
                        return t(e)
                    }
                }).chain(Sn, wn, Tn, Ft.Master)
            })
        },
        Pn = [2, 3, 4, 5, 6].reduce(function(t, e) {
            return t.concat(i.notes("".concat("D").concat(e), "major"))
        }, []),
        kn = function() {
            return xn().then(function(t) {
                return function() {
                    return function(e) {
                        var n = e.yPct,
                            i = e.velocity,
                            r = function(t) {
                                return Pn[Math.min(Pn.length - 1, Math.floor((100 - t) / 100 * Pn.length))]
                            }(n);
                        t.triggerAttack(r, Object(Ft.now)() + .01, i)
                    }
                }
            })
        };

    function En(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var Mn = function(t) {
        var e = t.Component,
            n = En(Object(o.useState)(), 2),
            i = n[0],
            r = n[1];
        return Object(o.useEffect)(function() {
            kn().then(function(t) {
                return r(t)
            })
        }, []), i ? s.a.createElement(e, {
            player: i
        }) : s.a.createElement(he, null)
    };
    n(375);
    Object(a.install)(), console.log("https://github.com/generative-music/blossom"), Object(r.render)(s.a.createElement(Mn, {
        Component: pe
    }), document.getElementById("root"))
}]);