! function(t) {
    var e = {};

    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/app/themes/digitalcover/dist/", i(i.s = 63)
}([function(t, e, i) {
    (function(e) {
        var i = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || function() {
            return this
        }() || Function("return this")()
    }).call(e, i(38))
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
        return s
    });
    var r = i(59),
        n = i(116),
        s = r.x.registerPlugin(n.a) || r.x;
    s.core.Tween
}, function(t, e) {
    t.exports = function(t) {
        return "function" == typeof t
    }
}, function(t, e, i) {
    var r = i(19),
        n = Function.prototype,
        s = n.bind,
        a = n.call,
        o = r && s.bind(a, a);
    t.exports = r ? function(t) {
        return t && o(t)
    } : function(t) {
        return t && function() {
            return a.apply(t, arguments)
        }
    }
}, function(t, e, i) {
    "use strict";
    i(65);
    var r = i(66),
        n = (i.n(r), i(67)),
        s = (i.n(n), i(68)),
        a = (i.n(s), i(109)),
        o = (i.n(a), i(1)),
        h = i(5),
        l = i(117),
        c = (i.n(l), i(118)),
        p = i(119),
        u = i(120),
        f = i.n(u),
        d = i(121),
        m = i(122),
        y = i(123),
        g = i(124),
        v = i(125),
        b = i(126),
        _ = i(127),
        w = i(128),
        S = i(129),
        E = i(130),
        x = i(131),
        P = i(132),
        T = i(138),
        A = i(140),
        M = i(141),
        C = i(142),
        k = i.n(C),
        D = i(143),
        F = i.n(D),
        I = i(145),
        O = function() {
            var t = this;
            this.iePolyfills = new v.a, this.onAnimationComplete = this.onAnimationComplete.bind(this), this.onLottieEltHover = this.onLottieEltHover.bind(this), this.resize = this.resize.bind(this), this.scroll = this.scroll.bind(this), this.update = this.update.bind(this), this.resizeDebounced = Object(l.debounce)(100, this.resize), this.resizeThrottled = Object(l.throttle)(150, this.resize), this.startBeforeLoad(), window.addEventListener("load", function() {
                t.startDomLoaded()
            })
        };
    O.prototype.startBeforeLoad = function() {
        this.lazyLoad = Object(c.a)(), this.lazyLoad.on("src:after", function(t) {
            t.classList.add("show")
        }), this.lazyLoad.update().check()
    }, O.prototype.startDomLoaded = function() {
        var t = this;
        this.initHighway().then(function() {
            O.Highway = t.H
        }), this.checkMobile(), this.checkNavigator(), this.gelElems(), O.setupTitles(), this.hideSplashScreen(), this.initSmoothScrool(), this.setupLoader(), this.menu = new m.a, this.events(), this.cover = document.body.querySelector(".cover"), O.setCoverSize(), setTimeout(function() {
            t.startLottieAnimations(t.currentRenderer.wrap.lastElementChild)
        }, 1e3), requestAnimationFrame(this.update)
    }, O.prototype.hideSplashScreen = function() {
        var t = document.querySelector("#transitions");
        o.a.to(t, {
            opacity: 1,
            duration: .8,
            ease: "power1.inOut"
        })
    }, O.prototype.setupLoader = function() {
        this.loaderElt || (this.loaderElt = document.querySelector(".loader"));
        var t = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight;
        this.loaderElt.style.width = t + "px", this.loaderElt.style.height = t + "px", window.innerWidth > window.innerHeight ? this.loaderElt.style.top = (window.innerWidth - window.innerHeight) / -2 + "px" : this.loaderElt.style.left = (window.innerHeight - window.innerWidth) / -2 + "px", this.loaderElt.classList.add("ready")
    }, O.prototype.gelElems = function() {
        this.linkDC = document.querySelector(".link-dc"), O.canvas = document.querySelector("#canvas")
    }, O.prototype.checkNavigator = function() {
        this.browser = f.a.getParser(window.navigator.userAgent), (O.isIE = "Internet Explorer" === this.browser.getBrowserName()) && document.body.classList.add("isIE")
    }, O.prototype.checkMobile = function() {
        O.isMobile && document.body.classList.remove("isMobile"), O.isMobile && document.documentElement.classList.remove("isMobile"), (O.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && document.body.classList.add("isMobile"), O.isMobile && document.documentElement.classList.add("isMobile")
    }, O.prototype.initSmoothScrool = function() {
        O.smoothScrool = new p.a({
            el: document.body.querySelector(".js-scroll"),
            smooth: !1,
            inertia: 1,
            passive: !0
        }), this.header = new y.a, O.isMobile || (O.cursor = new g.a), requestAnimationFrame(function() {
            window.scrollTo(0, 0)
        })
    }, O.prototype.initHighway = function() {
        var t = this;
        return new Promise(function(e) {
            t.H = new h.a.Core({
                renderers: {
                    page: b.a,
                    agence: _.a,
                    agenceNew: I.a,
                    home: w.a,
                    references: S.a,
                    reference: E.a,
                    single: x.a,
                    service: P.a,
                    contact: T.a
                },
                transitions: {
                    default: A.a,
                    contextual: {
                        menu: M.a
                    }
                }
            }), t.setCurrentRenderer().then(e)
        })
    }, O.prototype.setCurrentRenderer = function() {
        var t = this;
        return new Promise(function(e) {
            t.H.properties.renderer.then(function() {
                t.currentRenderer = t.H.To ? t.H.To : t.H.From, e(t.currentRenderer)
            })
        })
    }, O.prototype.startLottieAnimations = function() {
        this.lottieElt = document.body.querySelector(".lottie-elt");
        var t = ["circle", "ovni", "square", "square-cross", "triangle", "triple"];
        if (this.lottieElt) {
            this.animations = [];
            for (var e = 0; e < t.length; e++) this.animations.push(F.a.loadAnimation({
                container: this.lottieElt,
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                path: "/app/themes/digitalcover/resources/assets/scripts/lottie/" + t[e] + ".json"
            }));
            this.playRandomAnimation(), this.lottieElt.addEventListener("mouseenter", this.onLottieEltHover)
        }
    }, O.prototype.playRandomAnimation = function() {
        this.animation = this.animations[Math.floor(Math.random() * this.animations.length)], this.animation.play()
    }, O.prototype.onLottieEltHover = function() {
        this.animation.setSpeed(-2), this.animation.play(), this.animation.onComplete = this.onAnimationComplete
    }, O.prototype.onAnimationComplete = function() {
        this.animation.setSpeed(1), this.animation.goToAndStop(0), this.animation.onComplete = null, this.playRandomAnimation()
    }, O.prototype.resize = function() {
        this.currentRenderer.resize(), O.setCoverSize()
    }, O.setCoverSize = function() {
        this.cover && (this.coverInitialHeight || (this.coverInitialHeight = this.cover.offsetHeight), this.cover.style.height = Number(this.coverInitialHeight + (26 - this.coverInitialHeight % 26)) + "px")
    }, O.prototype.scroll = function(t) {
        O.cursor && O.cursor.scroll(t), this.lazyLoad.check(), this.header.scroll(t), this.currentRenderer.scroll(t)
    }, O.prototype.update = function() {
        this.currentRenderer.update(), O.cursor && O.cursor.update(), requestAnimationFrame(this.update)
    }, O.setupTitles = function(t) {
        void 0 === t && (t = document.body), this.titles = t.querySelectorAll(".title-animation, .classic-content h2, .classic-content h3"), k()({
            target: this.titles,
            by: "words"
        })
    }, O.prototype.events = function() {
        var t = this;
        window.addEventListener("resize", this.resizeThrottled), window.addEventListener("resize", this.resizeDebounced), O.smoothScrool && O.smoothScrool.on("scroll", this.scroll), window.addEventListener("orientationchange", this.resize), this.H.on("NAVIGATE_IN", function() {
            t.setCurrentRenderer().then(function(t) {
                document.title = t.properties.page.title
            })
        }), this.H.on("NAVIGATE_OUT", function() {
            t.lottieElt && t.lottieElt.removeEventListener("mouseenter", t.onLottieEltHover), O.cursor && O.cursor.removeGridCircles()
        }), this.H.on("NAVIGATE_END", function(e) {
            var i = e.to,
                r = e.location;
            Object(d.a)({
                el: i.view
            }), O.cursor && O.cursor.addGridCircles(), t.menu.onPageChange(r), t.header.headerElt.classList.add("top"), t.cover = i.view.querySelector(".cover"), t.coverInitialHeight = null, setTimeout(function() {
                t.startLottieAnimations(i.view)
            }, 700), t.lazyLoad.update().check()
        }), window.addEventListener("highwayredirect", function(e) {
            t.H.redirect(e.detail.url)
        })
    }, e.a = O
}, function(t, e, i) {
    "use strict";

    function r() {}
    r.prototype = {
        on: function(t, e, i) {
            var r = this.e || (this.e = {});
            return (r[t] || (r[t] = [])).push({
                fn: e,
                ctx: i
            }), this
        },
        once: function(t, e, i) {
            var r = this;

            function n() {
                r.off(t, n), e.apply(i, arguments)
            }
            return n._ = e, this.on(t, n, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, n = i.length; r < n; r++) i[r].fn.apply(i[r].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {}),
                r = i[t],
                n = [];
            if (r && e)
                for (var s = 0, a = r.length; s < a; s++) r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
            return n.length ? i[t] = n : delete i[t], this
        }
    };
    var n = r;
    n.TinyEmitter = r;
    var s = function(t) {
        this.wrap = document.querySelector("[data-router-wrapper]"), this.properties = t, this.Transition = t.transition ? new t.transition.class(this.wrap, t.transition.name) : null
    };
    s.prototype.setup = function() {
        this.onEnter && this.onEnter(), this.onEnterCompleted && this.onEnterCompleted()
    }, s.prototype.add = function() {
        this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML)
    }, s.prototype.update = function() {
        document.title = this.properties.page.title
    }, s.prototype.show = function(t) {
        var e = this;
        return new Promise(function(i) {
            try {
                function r(t) {
                    e.onEnterCompleted && e.onEnterCompleted(), i()
                }
                return e.update(), e.onEnter && e.onEnter(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.show(t)).then(r) : r())
            } catch (t) {
                return Promise.reject(t)
            }
        })
    }, s.prototype.hide = function(t) {
        var e = this;
        return new Promise(function(i) {
            try {
                function r(t) {
                    e.onLeaveCompleted && e.onLeaveCompleted(), i()
                }
                return e.onLeave && e.onLeave(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.hide(t)).then(r) : r())
            } catch (t) {
                return Promise.reject(t)
            }
        })
    };
    var a = new window.DOMParser,
        o = function(t, e) {
            this.renderers = t, this.transitions = e
        };
    o.prototype.getOrigin = function(t) {
        var e = t.match(/(https?:\/\/[\w\-.]+)/);
        return e ? e[1].replace(/https?:\/\//, "") : null
    }, o.prototype.getPathname = function(t) {
        var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
        return e ? e[1] : "/"
    }, o.prototype.getAnchor = function(t) {
        var e = t.match(/(#.*)$/);
        return e ? e[1] : null
    }, o.prototype.getParams = function(t) {
        var e = t.match(/\?([\w_\-.=&]+)/);
        if (!e) return null;
        for (var i = e[1].split("&"), r = {}, n = 0; n < i.length; n++) {
            var s = i[n].split("=");
            r[s[0]] = s[1]
        }
        return r
    }, o.prototype.getDOM = function(t) {
        return "string" == typeof t ? a.parseFromString(t, "text/html") : t
    }, o.prototype.getView = function(t) {
        return t.querySelector("[data-router-view]")
    }, o.prototype.getSlug = function(t) {
        return t.getAttribute("data-router-view")
    }, o.prototype.getRenderer = function(t) {
        if (!this.renderers) return Promise.resolve(s);
        if (t in this.renderers) {
            var e = this.renderers[t];
            return "function" != typeof e || s.isPrototypeOf(e) ? "function" == typeof e.then ? Promise.resolve(e).then(function(t) {
                return t.default
            }) : Promise.resolve(e) : Promise.resolve(e()).then(function(t) {
                return t.default
            })
        }
        return Promise.resolve(s)
    }, o.prototype.getTransition = function(t) {
        return this.transitions ? t in this.transitions ? {
            class: this.transitions[t],
            name: t
        } : "default" in this.transitions ? {
            class: this.transitions.default,
            name: "default"
        } : null : null
    }, o.prototype.getProperties = function(t) {
        var e = this.getDOM(t),
            i = this.getView(e),
            r = this.getSlug(i);
        return {
            page: e,
            view: i,
            slug: r,
            renderer: this.getRenderer(r, this.renderers),
            transition: this.getTransition(r, this.transitions)
        }
    }, o.prototype.getLocation = function(t) {
        return {
            href: t,
            anchor: this.getAnchor(t),
            origin: this.getOrigin(t),
            params: this.getParams(t),
            pathname: this.getPathname(t)
        }
    };
    var h = function(t) {
            function e(e) {
                var i = this;
                void 0 === e && (e = {});
                var r = e.renderers,
                    n = e.transitions;
                t.call(this), this.Helpers = new o(r, n), this.Transitions = n, this.Contextual = !1, this.location = this.Helpers.getLocation(window.location.href), this.properties = this.Helpers.getProperties(document.cloneNode(!0)), this.popping = !1, this.running = !1, this.trigger = null, this.cache = new Map, this.cache.set(this.location.href, this.properties), this.properties.renderer.then(function(t) {
                    i.From = new t(i.properties), i.From.setup()
                }), this._navigate = this.navigate.bind(this), window.addEventListener("popstate", this.popState.bind(this)), this.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), this.attach(this.links)
            }
            return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e, e.prototype.attach = function(t) {
                for (var e = 0, i = t; e < i.length; e += 1) i[e].addEventListener("click", this._navigate)
            }, e.prototype.detach = function(t) {
                for (var e = 0, i = t; e < i.length; e += 1) i[e].removeEventListener("click", this._navigate)
            }, e.prototype.navigate = function(t) {
                if (!t.metaKey && !t.ctrlKey) {
                    t.preventDefault();
                    var e = !!t.currentTarget.hasAttribute("data-transition") && t.currentTarget.dataset.transition;
                    this.redirect(t.currentTarget.href, e, t.currentTarget)
                }
            }, e.prototype.redirect = function(t, e, i) {
                if (void 0 === e && (e = !1), void 0 === i && (i = "script"), this.trigger = i, !this.running && t !== this.location.href) {
                    var r = this.Helpers.getLocation(t);
                    this.Contextual = !1, e && (this.Contextual = this.Transitions.contextual[e].prototype, this.Contextual.name = e), r.origin !== this.location.origin || r.anchor && r.pathname === this.location.pathname ? window.location.href = t : (this.location = r, this.beforeFetch())
                }
            }, e.prototype.popState = function() {
                this.trigger = "popstate", this.Contextual = !1;
                var t = this.Helpers.getLocation(window.location.href);
                this.location.pathname !== t.pathname || !this.location.anchor && !t.anchor ? (this.popping = !0, this.location = t, this.beforeFetch()) : this.location = t
            }, e.prototype.pushState = function() {
                this.popping || window.history.pushState(this.location, "", this.location.href)
            }, e.prototype.fetch = function() {
                try {
                    var t = this;
                    return Promise.resolve(fetch(t.location.href, {
                        mode: "same-origin",
                        method: "GET",
                        headers: {
                            "X-Requested-With": "Highway"
                        },
                        credentials: "same-origin"
                    })).then(function(e) {
                        if (e.status >= 200 && e.status < 300) return e.text();
                        window.location.href = t.location.href
                    })
                } catch (t) {
                    return Promise.reject(t)
                }
            }, e.prototype.beforeFetch = function() {
                try {
                    var t = this;

                    function e() {
                        t.afterFetch()
                    }
                    t.pushState(), t.running = !0, t.emit("NAVIGATE_OUT", {
                        from: {
                            page: t.From.properties.page,
                            view: t.From.properties.view
                        },
                        trigger: t.trigger,
                        location: t.location
                    });
                    var i = {
                            trigger: t.trigger,
                            contextual: t.Contextual
                        },
                        r = t.cache.has(t.location.href) ? Promise.resolve(t.From.hide(i)).then(function() {
                            t.properties = t.cache.get(t.location.href)
                        }) : Promise.resolve(Promise.all([t.fetch(), t.From.hide(i)])).then(function(e) {
                            t.properties = t.Helpers.getProperties(e[0]), t.cache.set(t.location.href, t.properties)
                        });
                    return Promise.resolve(r && r.then ? r.then(e) : e())
                } catch (t) {
                    return Promise.reject(t)
                }
            }, e.prototype.afterFetch = function() {
                try {
                    var t = this;
                    return Promise.resolve(t.properties.renderer).then(function(e) {
                        return t.To = new e(t.properties), t.To.add(), t.emit("NAVIGATE_IN", {
                            to: {
                                page: t.To.properties.page,
                                view: t.To.wrap.lastElementChild
                            },
                            trigger: t.trigger,
                            location: t.location
                        }), Promise.resolve(t.To.show({
                            trigger: t.trigger,
                            contextual: t.Contextual
                        })).then(function() {
                            t.popping = !1, t.running = !1, t.detach(t.links), t.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), t.attach(t.links), t.emit("NAVIGATE_END", {
                                to: {
                                    page: t.To.properties.page,
                                    view: t.To.wrap.lastElementChild
                                },
                                from: {
                                    page: t.From.properties.page,
                                    view: t.From.properties.view
                                },
                                trigger: t.trigger,
                                location: t.location
                            }), t.From = t.To, t.trigger = null
                        })
                    })
                } catch (t) {
                    return Promise.reject(t)
                }
            }, e
        }(n),
        l = function(t, e) {
            this.wrap = t, this.name = e
        };
    l.prototype.show = function(t) {
        var e = this,
            i = t.trigger,
            r = t.contextual,
            n = this.wrap.lastElementChild,
            s = this.wrap.firstElementChild;
        return new Promise(function(t) {
            r ? (n.setAttribute("data-transition-in", r.name), n.removeAttribute("data-transition-out", r.name), r.in && r.in({
                to: n,
                from: s,
                trigger: i,
                done: t
            })) : (n.setAttribute("data-transition-in", e.name), n.removeAttribute("data-transition-out", e.name), e.in && e.in({
                to: n,
                from: s,
                trigger: i,
                done: t
            }))
        })
    }, l.prototype.hide = function(t) {
        var e = this,
            i = t.trigger,
            r = t.contextual,
            n = this.wrap.firstElementChild;
        return new Promise(function(t) {
            r ? (n.setAttribute("data-transition-out", r.name), n.removeAttribute("data-transition-in", r.name), r.out && r.out({
                from: n,
                trigger: i,
                done: t
            })) : (n.setAttribute("data-transition-out", e.name), n.removeAttribute("data-transition-in", e.name), e.out && e.out({
                from: n,
                trigger: i,
                done: t
            }))
        })
    }, e.a = {
        Core: h,
        Helpers: o,
        Renderer: s,
        Transition: l
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(39),
        s = i(8),
        a = i(40),
        o = i(41),
        h = i(42),
        l = n("wks"),
        c = r.Symbol,
        p = c && c.for,
        u = h ? c : c && c.withoutSetter || a;
    t.exports = function(t) {
        if (!s(l, t) || !o && "string" != typeof l[t]) {
            var e = "Symbol." + t;
            o && s(c, t) ? l[t] = c[t] : l[t] = h && p ? p(e) : u(e)
        }
        return l[t]
    }
}, function(t, e, i) {
    var r = i(3),
        n = i(25),
        s = r({}.hasOwnProperty);
    t.exports = Object.hasOwn || function(t, e) {
        return s(n(t), e)
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(14),
        s = r.String,
        a = r.TypeError;
    t.exports = function(t) {
        if (n(t)) return t;
        throw a(s(t) + " is not an object")
    }
}, function(t, e, i) {
    var r = i(6);
    t.exports = !r(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })
}, function(t, e, i) {
    var r = i(19),
        n = Function.prototype.call;
    t.exports = r ? n.bind(n) : function() {
        return n.apply(n, arguments)
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(10),
        s = i(45),
        a = i(47),
        o = i(9),
        h = i(28),
        l = r.TypeError,
        c = Object.defineProperty,
        p = Object.getOwnPropertyDescriptor;
    e.f = n ? a ? function(t, e, i) {
        if (o(t), e = h(e), o(i), "function" == typeof t && "prototype" === e && "value" in i && "writable" in i && !i.writable) {
            var r = p(t, e);
            r && r.writable && (t[e] = i.value, i = {
                configurable: "configurable" in i ? i.configurable : r.configurable,
                enumerable: "enumerable" in i ? i.enumerable : r.enumerable,
                writable: !1
            })
        }
        return c(t, e, i)
    } : c : function(t, e, i) {
        if (o(t), e = h(e), o(i), s) try {
            return c(t, e, i)
        } catch (t) {}
        if ("get" in i || "set" in i) throw l("Accessors not supported");
        return "value" in i && (t[e] = i.value), t
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(2);
    t.exports = function(t, e) {
        return arguments.length < 2 ? (i = r[t], n(i) ? i : void 0) : r[t] && r[t][e];
        var i
    }
}, function(t, e, i) {
    var r = i(2);
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : r(t)
    }
}, function(t, e, i) {
    var r = i(10),
        n = i(12),
        s = i(16);
    t.exports = r ? function(t, e, i) {
        return n.f(t, e, s(1, i))
    } : function(t, e, i) {
        return t[e] = i, t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, i) {
    var r = i(83),
        n = i(26);
    t.exports = function(t) {
        return r(n(t))
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, i) {
    var r = i(6);
    t.exports = !r(function() {
        var t = function() {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype")
    })
}, function(t, e) {
    var i = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        var e = +t;
        return e != e || 0 === e ? 0 : (e > 0 ? r : i)(e)
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(74),
        s = i(2),
        a = i(43),
        o = i(7)("toStringTag"),
        h = r.Object,
        l = "Arguments" == a(function() {
            return arguments
        }());
    t.exports = n ? a : function(t) {
        var e, i, r;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = h(t), o)) ? i : l ? a(e) : "Object" == (r = a(e)) && s(e.callee) ? "Arguments" : r
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, i) {
    var r = i(0),
        n = i(24),
        s = r["__core-js_shared__"] || n("__core-js_shared__", {});
    t.exports = s
}, function(t, e, i) {
    var r = i(0),
        n = Object.defineProperty;
    t.exports = function(t, e) {
        try {
            n(r, t, {
                value: e,
                configurable: !0,
                writable: !0
            })
        } catch (i) {
            r[t] = e
        }
        return e
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(26),
        s = r.Object;
    t.exports = function(t) {
        return s(n(t))
    }
}, function(t, e, i) {
    var r = i(0).TypeError;
    t.exports = function(t) {
        if (void 0 == t) throw r("Can't call method on " + t);
        return t
    }
}, function(t, e, i) {
    var r = i(3),
        n = i(2),
        s = i(23),
        a = r(Function.toString);
    n(s.inspectSource) || (s.inspectSource = function(t) {
        return a(t)
    }), t.exports = s.inspectSource
}, function(t, e, i) {
    var r = i(78),
        n = i(48);
    t.exports = function(t) {
        var e = r(t, "string");
        return n(e) ? e : e + ""
    }
}, function(t, e, i) {
    var r = i(30);
    t.exports = function(t, e) {
        var i = t[e];
        return null == i ? void 0 : r(i)
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(2),
        s = i(49),
        a = r.TypeError;
    t.exports = function(t) {
        if (n(t)) return t;
        throw a(s(t) + " is not a function")
    }
}, function(t, e, i) {
    var r = i(39),
        n = i(40),
        s = r("keys");
    t.exports = function(t) {
        return s[t] || (s[t] = n(t))
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, i) {
    var r = i(0),
        n = i(50).f,
        s = i(15),
        a = i(34),
        o = i(24),
        h = i(84),
        l = i(90);
    t.exports = function(t, e) {
        var i, c, p, u, f, d = t.target,
            m = t.global,
            y = t.stat;
        if (i = m ? r : y ? r[d] || o(d, {}) : (r[d] || {}).prototype)
            for (c in e) {
                if (u = e[c], p = t.noTargetGet ? (f = n(i, c)) && f.value : i[c], !l(m ? c : d + (y ? "." : "#") + c, t.forced) && void 0 !== p) {
                    if (typeof u == typeof p) continue;
                    h(u, p)
                }(t.sham || p && p.sham) && s(u, "sham", !0), a(i, c, u, t)
            }
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(2),
        s = i(8),
        a = i(15),
        o = i(24),
        h = i(27),
        l = i(44),
        c = i(51).CONFIGURABLE,
        p = l.get,
        u = l.enforce,
        f = String(String).split("String");
    (t.exports = function(t, e, i, h) {
        var l, p = !!h && !!h.unsafe,
            d = !!h && !!h.enumerable,
            m = !!h && !!h.noTargetGet,
            y = h && void 0 !== h.name ? h.name : e;
        n(i) && ("Symbol(" === String(y).slice(0, 7) && (y = "[" + String(y).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!s(i, "name") || c && i.name !== y) && a(i, "name", y), (l = u(i)).source || (l.source = f.join("string" == typeof y ? y : ""))), t !== r ? (p ? !m && t[e] && (d = !0) : delete t[e], d ? t[e] = i : a(t, e, i)) : d ? t[e] = i : o(e, i)
    })(Function.prototype, "toString", function() {
        return n(this) && p(this).source || h(this)
    })
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, i) {
    var r, n = i(9),
        s = i(92),
        a = i(35),
        o = i(32),
        h = i(94),
        l = i(46),
        c = i(31)("IE_PROTO"),
        p = function() {},
        u = function(t) {
            return "<script>" + t + "<\/script>"
        },
        f = function(t) {
            t.write(u("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        },
        d = function() {
            try {
                r = new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            d = "undefined" != typeof document ? document.domain && r ? f(r) : ((e = l("iframe")).style.display = "none", h.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(u("document.F=Object")), t.close(), t.F) : f(r);
            for (var i = a.length; i--;) delete d.prototype[a[i]];
            return d()
        };
    o[c] = !0, t.exports = Object.create || function(t, e) {
        var i;
        return null !== t ? (p.prototype = n(t), i = new p, p.prototype = null, i[c] = t) : i = d(), void 0 === e ? i : s.f(i, e)
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(21),
        s = r.String;
    t.exports = function(t) {
        if ("Symbol" === n(t)) throw TypeError("Cannot convert a Symbol value to a string");
        return s(t)
    }
}, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function(t, e, i) {
    var r = i(22),
        n = i(23);
    (t.exports = function(t, e) {
        return n[t] || (n[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.21.1",
        mode: r ? "pure" : "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    })
}, function(t, e, i) {
    var r = i(3),
        n = 0,
        s = Math.random(),
        a = r(1..toString);
    t.exports = function(t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++n + s, 36)
    }
}, function(t, e, i) {
    var r = i(75),
        n = i(6);
    t.exports = !!Object.getOwnPropertySymbols && !n(function() {
        var t = Symbol();
        return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
    })
}, function(t, e, i) {
    var r = i(41);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(t, e, i) {
    var r = i(3),
        n = r({}.toString),
        s = r("".slice);
    t.exports = function(t) {
        return s(n(t), 8, -1)
    }
}, function(t, e, i) {
    var r, n, s, a = i(77),
        o = i(0),
        h = i(3),
        l = i(14),
        c = i(15),
        p = i(8),
        u = i(23),
        f = i(31),
        d = i(32),
        m = o.TypeError,
        y = o.WeakMap;
    if (a || u.state) {
        var g = u.state || (u.state = new y),
            v = h(g.get),
            b = h(g.has),
            _ = h(g.set);
        r = function(t, e) {
            if (b(g, t)) throw new m("Object already initialized");
            return e.facade = t, _(g, t, e), e
        }, n = function(t) {
            return v(g, t) || {}
        }, s = function(t) {
            return b(g, t)
        }
    } else {
        var w = f("state");
        d[w] = !0, r = function(t, e) {
            if (p(t, w)) throw new m("Object already initialized");
            return e.facade = t, c(t, w, e), e
        }, n = function(t) {
            return p(t, w) ? t[w] : {}
        }, s = function(t) {
            return p(t, w)
        }
    }
    t.exports = {
        set: r,
        get: n,
        has: s,
        enforce: function(t) {
            return s(t) ? n(t) : r(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var i;
                if (!l(e) || (i = n(e)).type !== t) throw m("Incompatible receiver, " + t + " required");
                return i
            }
        }
    }
}, function(t, e, i) {
    var r = i(10),
        n = i(6),
        s = i(46);
    t.exports = !r && !n(function() {
        return 7 != Object.defineProperty(s("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, i) {
    var r = i(0),
        n = i(14),
        s = r.document,
        a = n(s) && n(s.createElement);
    t.exports = function(t) {
        return a ? s.createElement(t) : {}
    }
}, function(t, e, i) {
    var r = i(10),
        n = i(6);
    t.exports = r && n(function() {
        return 42 != Object.defineProperty(function() {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype
    })
}, function(t, e, i) {
    var r = i(0),
        n = i(13),
        s = i(2),
        a = i(79),
        o = i(42),
        h = r.Object;
    t.exports = o ? function(t) {
        return "symbol" == typeof t
    } : function(t) {
        var e = n("Symbol");
        return s(e) && a(e.prototype, h(t))
    }
}, function(t, e, i) {
    var r = i(0).String;
    t.exports = function(t) {
        try {
            return r(t)
        } catch (t) {
            return "Object"
        }
    }
}, function(t, e, i) {
    var r = i(10),
        n = i(11),
        s = i(82),
        a = i(16),
        o = i(17),
        h = i(28),
        l = i(8),
        c = i(45),
        p = Object.getOwnPropertyDescriptor;
    e.f = r ? p : function(t, e) {
        if (t = o(t), e = h(e), c) try {
            return p(t, e)
        } catch (t) {}
        if (l(t, e)) return a(!n(s.f, t, e), t[e])
    }
}, function(t, e, i) {
    var r = i(10),
        n = i(8),
        s = Function.prototype,
        a = r && Object.getOwnPropertyDescriptor,
        o = n(s, "name"),
        h = o && "something" === function() {}.name,
        l = o && (!r || r && a(s, "name").configurable);
    t.exports = {
        EXISTS: o,
        PROPER: h,
        CONFIGURABLE: l
    }
}, function(t, e, i) {
    var r = i(3),
        n = i(8),
        s = i(17),
        a = i(53).indexOf,
        o = i(32),
        h = r([].push);
    t.exports = function(t, e) {
        var i, r = s(t),
            l = 0,
            c = [];
        for (i in r) !n(o, i) && n(r, i) && h(c, i);
        for (; e.length > l;) n(r, i = e[l++]) && (~a(c, i) || h(c, i));
        return c
    }
}, function(t, e, i) {
    var r = i(17),
        n = i(87),
        s = i(54),
        a = function(t) {
            return function(e, i, a) {
                var o, h = r(e),
                    l = s(h),
                    c = n(a, l);
                if (t && i != i) {
                    for (; l > c;)
                        if ((o = h[c++]) != o) return !0
                } else
                    for (; l > c; c++)
                        if ((t || c in h) && h[c] === i) return t || c || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function(t, e, i) {
    var r = i(88);
    t.exports = function(t) {
        return r(t.length)
    }
}, function(t, e, i) {
    "use strict";
    var r, n, s, a = i(6),
        o = i(2),
        h = i(36),
        l = i(56),
        c = i(34),
        p = i(7),
        u = i(22),
        f = p("iterator"),
        d = !1;
    [].keys && ("next" in (s = [].keys()) ? (n = l(l(s))) !== Object.prototype && (r = n) : d = !0), void 0 == r || a(function() {
        var t = {};
        return r[f].call(t) !== t
    }) ? r = {} : u && (r = h(r)), o(r[f]) || c(r, f, function() {
        return this
    }), t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: d
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(8),
        s = i(2),
        a = i(25),
        o = i(31),
        h = i(95),
        l = o("IE_PROTO"),
        c = r.Object,
        p = c.prototype;
    t.exports = h ? c.getPrototypeOf : function(t) {
        var e = a(t);
        if (n(e, l)) return e[l];
        var i = e.constructor;
        return s(i) && e instanceof i ? i.prototype : e instanceof c ? p : null
    }
}, function(t, e, i) {
    var r = i(12).f,
        n = i(8),
        s = i(7)("toStringTag");
    t.exports = function(t, e, i) {
        t && !i && (t = t.prototype), t && !n(t, s) && r(t, s, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, i) {
    var r = i(21),
        n = i(29),
        s = i(18),
        a = i(7)("iterator");
    t.exports = function(t) {
        if (void 0 != t) return n(t, a) || n(t, "@@iterator") || s[r(t)]
    }
}, function(t, e, i) {
    "use strict";

    function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function n(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    i.d(e, "a", function() {
        return Ne
    }), i.d(e, "b", function() {
        return pi
    }), i.d(e, "x", function() {
        return mi
    }), i.d(e, "w", function() {
        return re
    }), i.d(e, "i", function() {
        return St
    }), i.d(e, "n", function() {
        return Q
    }), i.d(e, "o", function() {
        return tt
    }), i.d(e, "k", function() {
        return G
    }), i.d(e, "l", function() {
        return W
    }), i.d(e, "r", function() {
        return si
    }), i.d(e, "q", function() {
        return it
    }), i.d(e, "g", function() {
        return Et
    }), i.d(e, "u", function() {
        return ci
    }), i.d(e, "e", function() {
        return Te
    }), i.d(e, "s", function() {
        return de
    }), i.d(e, "c", function() {
        return We
    }), i.d(e, "p", function() {
        return mt
    }), i.d(e, "v", function() {
        return Ae
    }), i.d(e, "f", function() {
        return I
    }), i.d(e, "t", function() {
        return xt
    }), i.d(e, "m", function() {
        return ht
    }), i.d(e, "j", function() {
        return ii
    }), i.d(e, "h", function() {
        return wt
    }), i.d(e, "d", function() {
        return xe
    });
    var s, a, o, h, l, c, p, u, f, d, m, y, g, v, b, _, w, S, E, x, P, T, A, M, C, k, D, F, I = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        O = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        R = 1e-8,
        L = 2 * Math.PI,
        B = L / 4,
        V = 0,
        z = Math.sqrt,
        N = Math.cos,
        j = Math.sin,
        G = function(t) {
            return "string" == typeof t
        },
        H = function(t) {
            return "function" == typeof t
        },
        q = function(t) {
            return "number" == typeof t
        },
        W = function(t) {
            return void 0 === t
        },
        Y = function(t) {
            return "object" == typeof t
        },
        X = function(t) {
            return !1 !== t
        },
        U = function() {
            return "undefined" != typeof window
        },
        $ = function(t) {
            return H(t) || G(t)
        },
        K = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Z = Array.isArray,
        J = /(?:-?\.?\d|\.)+/gi,
        Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        et = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        it = /[+-]=-?[.\d]+/,
        rt = /[^,'"\[\]\s]+/gi,
        nt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        st = {},
        at = {},
        ot = function(t) {
            return (at = Ft(t, st)) && mi
        },
        ht = function(t, e) {},
        lt = function(t, e) {
            return !e && void 0
        },
        ct = function(t, e) {
            return t && (st[t] = e) && at && (at[t] = e) || st
        },
        pt = function() {
            return 0
        },
        ut = {},
        ft = [],
        dt = {},
        mt = {},
        yt = {},
        gt = 30,
        vt = [],
        bt = "",
        _t = function(t) {
            var e, i, r = t[0];
            if (Y(r) || H(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                for (i = vt.length; i-- && !vt[i].targetTest(r););
                e = vt[i]
            }
            for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Ne(t[i], e))) || t.splice(i, 1);
            return t
        },
        wt = function(t) {
            return t._gsap || _t(oe(t))[0]._gsap
        },
        St = function(t, e, i) {
            return (i = t[e]) && H(i) ? t[e]() : W(i) && t.getAttribute && t.getAttribute(e) || i
        },
        Et = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        xt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Pt = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        Tt = function(t, e) {
            for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
            return r < i
        },
        At = function() {
            var t, e, i = ft.length,
                r = ft.slice(0);
            for (dt = {}, ft.length = 0, t = 0; t < i; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        Mt = function(t, e, i, r) {
            ft.length && At(), t.render(e, i, r), ft.length && At()
        },
        Ct = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(rt).length < 2 ? e : G(t) ? t.trim() : t
        },
        kt = function(t) {
            return t
        },
        Dt = function(t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t
        },
        Ft = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        },
        It = function t(e, i) {
            for (var r in i) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = Y(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
            return e
        },
        Ot = function(t, e) {
            var i, r = {};
            for (i in t) i in e || (r[i] = t[i]);
            return r
        },
        Rt = function(t) {
            var e, i = t.parent || a,
                r = t.keyframes ? (e = Z(t.keyframes), function(t, i) {
                    for (var r in i) r in t || "duration" === r && e || "ease" === r || (t[r] = i[r])
                }) : Dt;
            if (X(t.inherit))
                for (; i;) r(t, i.vars.defaults), i = i.parent || i._dp;
            return t
        },
        Lt = function(t, e, i, r) {
            void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
            var n = e._prev,
                s = e._next;
            n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null
        },
        Bt = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Vt = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var i = t; i;) i._dirty = 1, i = i.parent;
            return t
        },
        zt = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        Nt = function(t) {
            return t._repeat ? jt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        jt = function(t, e) {
            var i = Math.floor(t /= e);
            return t && i === t ? i - 1 : i
        },
        Gt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Ht = function(t) {
            return t._end = Pt(t._start + (t._tDur / Math.abs(t._ts || t._rts || R) || 0))
        },
        qt = function(t, e) {
            var i = t._dp;
            return i && i.smoothChildTiming && t._ts && (t._start = Pt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ht(t), i._dirty || Vt(i, t)), t
        },
        Wt = function(t, e) {
            var i;
            if ((e._time || e._initted && !e._dur) && (i = Gt(t.rawTime(), e), (!e._dur || ie(0, e.totalDuration(), i) - e._tTime > R) && e.render(i, !0)), Vt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                t._zTime = -R
            }
        },
        Yt = function(t, e, i, r) {
            return e.parent && Bt(e), e._start = Pt((q(i) ? i : i || t !== a ? Qt(t, i, e) : t._time) + e._delay), e._end = Pt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, i, r, n) {
                    void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                    var s, a = t[r];
                    if (n)
                        for (s = e[n]; a && a[n] > s;) a = a._prev;
                    a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = a, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), $t(e) || (t._recent = e), r || Wt(t, e), t
        },
        Xt = function(t, e) {
            return (st.ScrollTrigger || ht("scrollTrigger", e)) && st.ScrollTrigger.create(e, t)
        },
        Ut = function(t, e, i, r) {
            return Ye(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== Ae.frame ? (ft.push(t), t._lazy = [e, r], 1) : void 0 : 1
        },
        $t = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        Kt = function(t, e, i, r) {
            var n = t._repeat,
                s = Pt(e) || 0,
                a = t._tTime / t._tDur;
            return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : Pt(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r ? qt(t, t._tTime = t._tDur * a) : t.parent && Ht(t), i || Vt(t.parent, t), t
        },
        Zt = function(t) {
            return t instanceof Ge ? Vt(t) : Kt(t, t._dur)
        },
        Jt = {
            _start: 0,
            endTime: pt,
            totalDuration: pt
        },
        Qt = function t(e, i, r) {
            var n, s, a, o = e.labels,
                h = e._recent || Jt,
                l = e.duration() >= 1e8 ? h.endTime(!1) : e._dur;
            return G(i) && (isNaN(i) || i in o) ? (s = i.charAt(0), a = "%" === i.substr(-1), n = i.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (i = i.replace(/=/, "")), ("<" === s ? h._start : h.endTime(h._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (n < 0 ? h : r).totalDuration() / 100 : 1)) : n < 0 ? (i in o || (o[i] = l), o[i]) : (s = parseFloat(i.charAt(n - 1) + i.substr(n + 1)), a && r && (s = s / 100 * (Z(r) ? r[0] : r).totalDuration()), n > 1 ? t(e, i.substr(0, n - 1), r) + s : l + s)) : null == i ? l : +i
        },
        te = function(t, e, i) {
            var r, n, s = q(e[1]),
                a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                o = e[a];
            if (s && (o.duration = e[1]), o.parent = i, t) {
                for (r = o, n = i; n && !("immediateRender" in r);) r = n.vars.defaults || {}, n = X(n.vars.inherit) && n.parent;
                o.immediateRender = X(r.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
            }
            return new Ze(e[0], o, e[a + 1])
        },
        ee = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        ie = function(t, e, i) {
            return i < t ? t : i > e ? e : i
        },
        re = function(t, e) {
            return G(t) && (e = nt.exec(t)) ? t.substr(e.index + e[0].length) : ""
        },
        ne = [].slice,
        se = function(t, e) {
            return t && Y(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Y(t[0])) && !t.nodeType && t !== o
        },
        ae = function(t, e, i) {
            return void 0 === i && (i = []), t.forEach(function(t) {
                var r;
                return G(t) && !e || se(t, 1) ? (r = i).push.apply(r, oe(t)) : i.push(t)
            }) || i
        },
        oe = function(t, e, i) {
            return !G(t) || i || !h && Me() ? Z(t) ? ae(t, i) : se(t) ? ne.call(t, 0) : t ? [t] : [] : ne.call((e || l).querySelectorAll(t), 0)
        },
        he = function(t) {
            return t.sort(function() {
                return .5 - Math.random()
            })
        },
        le = function(t) {
            if (H(t)) return t;
            var e = Y(t) ? t : {
                    each: t
                },
                i = Re(e.ease),
                r = e.from || 0,
                n = parseFloat(e.base) || 0,
                s = {},
                a = r > 0 && r < 1,
                o = isNaN(r) || a,
                h = e.axis,
                l = r,
                c = r;
            return G(r) ? l = c = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[r] || 0 : !a && o && (l = r[0], c = r[1]),
                function(t, a, p) {
                    var u, f, d, m, y, g, v, b, _, w = (p || e).length,
                        S = s[w];
                    if (!S) {
                        if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                            for (v = -1e8; v < (v = p[_++].getBoundingClientRect().left) && _ < w;);
                            _--
                        }
                        for (S = s[w] = [], u = o ? Math.min(_, w) * l - .5 : r % _, f = 1e8 === _ ? 0 : o ? w * c / _ - .5 : r / _ | 0, v = 0, b = 1e8, g = 0; g < w; g++) d = g % _ - u, m = f - (g / _ | 0), S[g] = y = h ? Math.abs("y" === h ? m : d) : z(d * d + m * m), y > v && (v = y), y < b && (b = y);
                        "random" === r && he(S), S.max = v - b, S.min = b, S.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (_ > w ? w - 1 : h ? "y" === h ? w / _ : _ : Math.max(_, w / _)) || 0) * ("edges" === r ? -1 : 1), S.b = w < 0 ? n - w : n, S.u = re(e.amount || e.each) || 0, i = i && w < 0 ? Ie(i) : i
                    }
                    return w = (S[t] - S.min) / S.max || 0, Pt(S.b + (i ? i(w) : w) * S.v) + S.u
                }
        },
        ce = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(i) {
                var r = Math.round(parseFloat(i) / t) * t * e;
                return (r - r % 1) / e + (q(i) ? 0 : re(i))
            }
        },
        pe = function(t, e) {
            var i, r, n = Z(t);
            return !n && Y(t) && (i = n = t.radius || 1e8, t.values ? (t = oe(t.values), (r = !q(t[0])) && (i *= i)) : t = ce(t.increment)), ee(e, n ? H(t) ? function(e) {
                return r = t(e), Math.abs(r - e) <= i ? r : e
            } : function(e) {
                for (var n, s, a = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), h = 1e8, l = 0, c = t.length; c--;)(n = r ? (n = t[c].x - a) * n + (s = t[c].y - o) * s : Math.abs(t[c] - a)) < h && (h = n, l = c);
                return l = !i || h <= i ? t[l] : e, r || l === e || q(e) ? l : l + re(e)
            } : ce(t))
        },
        ue = function(t, e, i, r) {
            return ee(Z(t) ? !e : !0 === i ? !!(i = 0) : !r, function() {
                return Z(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * r) / r
            })
        },
        fe = function(t, e, i) {
            return ee(i, function(i) {
                return t[~~e(i)]
            })
        },
        de = function(t) {
            for (var e, i, r, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) r = t.indexOf(")", e), n = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(n ? rt : J), a += t.substr(s, e - s) + ue(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5), s = r + 1;
            return a + t.substr(s, t.length - s)
        },
        me = function(t, e, i, r, n) {
            var s = e - t,
                a = r - i;
            return ee(n, function(e) {
                return i + ((e - t) / s * a || 0)
            })
        },
        ye = function(t, e, i) {
            var r, n, s, a = t.labels,
                o = 1e8;
            for (r in a)(n = a[r] - e) < 0 == !!i && n && o > (n = Math.abs(n)) && (s = r, o = n);
            return s
        },
        ge = function(t, e, i) {
            var r, n, s = t.vars,
                a = s[e];
            if (a) return r = s[e + "Params"], n = s.callbackScope || t, i && ft.length && At(), r ? a.apply(n, r) : a.call(n)
        },
        ve = function(t) {
            return Bt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && ge(t, "onInterrupt"), t
        },
        be = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        _e = function(t, e, i) {
            return 255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        we = function(t, e, i) {
            var r, n, s, a, o, h, l, c, p, u, f = t ? q(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : be.black;
            if (!f) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), be[t]) f = be[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (t = "#" + (r = t.charAt(1)) + r + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & 255, 255 & f, parseInt(t.substr(7), 16) / 255];
                    f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                } else if ("hsl" === t.substr(0, 3))
                    if (f = u = t.match(J), e) {
                        if (~t.indexOf("=")) return f = t.match(Q), i && f.length < 4 && (f[3] = 1), f
                    } else a = +f[0] % 360 / 360, o = +f[1] / 100, r = 2 * (h = +f[2] / 100) - (n = h <= .5 ? h * (o + 1) : h + o - h * o), f.length > 3 && (f[3] *= 1), f[0] = _e(a + 1 / 3, r, n), f[1] = _e(a, r, n), f[2] = _e(a - 1 / 3, r, n);
                else f = t.match(J) || be.transparent;
                f = f.map(Number)
            }
            return e && !u && (r = f[0] / 255, n = f[1] / 255, s = f[2] / 255, h = ((l = Math.max(r, n, s)) + (c = Math.min(r, n, s))) / 2, l === c ? a = o = 0 : (p = l - c, o = h > .5 ? p / (2 - l - c) : p / (l + c), a = l === r ? (n - s) / p + (n < s ? 6 : 0) : l === n ? (s - r) / p + 2 : (r - n) / p + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * o + .5), f[2] = ~~(100 * h + .5)), i && f.length < 4 && (f[3] = 1), f
        },
        Se = function(t) {
            var e = [],
                i = [],
                r = -1;
            return t.split(xe).forEach(function(t) {
                var n = t.match(tt) || [];
                e.push.apply(e, n), i.push(r += n.length + 1)
            }), e.c = i, e
        },
        Ee = function(t, e, i) {
            var r, n, s, a, o = "",
                h = (t + o).match(xe),
                l = e ? "hsla(" : "rgba(",
                c = 0;
            if (!h) return t;
            if (h = h.map(function(t) {
                    return (t = we(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                }), i && (s = Se(t), (r = i.c).join(o) !== s.c.join(o)))
                for (a = (n = t.replace(xe, "1").split(tt)).length - 1; c < a; c++) o += n[c] + (~r.indexOf(c) ? h.shift() || l + "0,0,0,0)" : (s.length ? s : h.length ? h : i).shift());
            if (!n)
                for (a = (n = t.split(xe)).length - 1; c < a; c++) o += n[c] + h[c];
            return o + n[a]
        },
        xe = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in be) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Pe = /hsl[a]?\(/,
        Te = function(t) {
            var e, i = t.join(" ");
            if (xe.lastIndex = 0, xe.test(i)) return e = Pe.test(i), t[1] = Ee(t[1], e), t[0] = Ee(t[0], e, Se(t[1])), !0
        },
        Ae = (_ = Date.now, w = 500, S = 33, E = _(), x = E, T = P = 1e3 / 240, M = function t(e) {
            var i, r, n, s, a = _() - x,
                o = !0 === e;
            if (a > w && (E += a - S), ((i = (n = (x += a) - E) - T) > 0 || o) && (s = ++g.frame, v = n - 1e3 * g.time, g.time = n /= 1e3, T += i + (i >= P ? 4 : P - i), r = 1), o || (d = m(t)), r)
                for (b = 0; b < A.length; b++) A[b](n, v, s, e)
        }, g = {
            time: 0,
            frame: 0,
            tick: function() {
                M(!0)
            },
            deltaRatio: function(t) {
                return v / (1e3 / (t || 60))
            },
            wake: function() {
                c && (!h && U() && (o = h = window, l = o.document || {}, st.gsap = mi, (o.gsapVersions || (o.gsapVersions = [])).push(mi.version), ot(at || o.GreenSockGlobals || !o.gsap && o || {}), y = o.requestAnimationFrame), d && g.sleep(), m = y || function(t) {
                    return setTimeout(t, T - 1e3 * g.time + 1 | 0)
                }, f = 1, M(2))
            },
            sleep: function() {
                (y ? o.cancelAnimationFrame : clearTimeout)(d), f = 0, m = pt
            },
            lagSmoothing: function(t, e) {
                w = t || 1 / R, S = Math.min(e, w, 0)
            },
            fps: function(t) {
                P = 1e3 / (t || 240), T = 1e3 * g.time + P
            },
            add: function(t) {
                A.indexOf(t) < 0 && A.push(t), Me()
            },
            remove: function(t, e) {
                ~(e = A.indexOf(t)) && A.splice(e, 1) && b >= e && b--
            },
            _listeners: A = []
        }),
        Me = function() {
            return !f && Ae.wake()
        },
        Ce = {},
        ke = /^[\d.\-M][\d.\-,\s]/,
        De = /["']/g,
        Fe = function(t) {
            var e, i, r, n, s = (t + "").split("("),
                a = Ce[s[0]];
            return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [function(t) {
                for (var e, i, r, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, h = s.length; o < h; o++) i = s[o], e = o !== h - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), n[a] = isNaN(r) ? r.replace(De, "").trim() : +r, a = i.substr(e + 1).trim();
                return n
            }(s[1])] : (e = t, i = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", i), e.substring(i, ~n && n < r ? e.indexOf(")", r + 1) : r)).split(",").map(Ct)) : Ce._CE && ke.test(t) ? Ce._CE("", t) : a
        },
        Ie = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Oe = function t(e, i) {
            for (var r, n = e._first; n;) n instanceof Ge ? t(n, i) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === i || (n.timeline ? t(n.timeline, i) : (r = n._ease, n._ease = n._yEase, n._yEase = r, n._yoyo = i)), n = n._next
        },
        Re = function(t, e) {
            return t && (H(t) ? t : Ce[t] || Fe(t)) || e
        },
        Le = function(t, e, i, r) {
            void 0 === i && (i = function(t) {
                return 1 - e(1 - t)
            }), void 0 === r && (r = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var n, s = {
                easeIn: e,
                easeOut: i,
                easeInOut: r
            };
            return Et(t, function(t) {
                for (var e in Ce[t] = st[t] = s, Ce[n = t.toLowerCase()] = i, s) Ce[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ce[t + "." + e] = s[e]
            }), s
        },
        Be = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Ve = function t(e, i, r) {
            var n = i >= 1 ? i : 1,
                s = (r || (e ? .3 : .45)) / (i < 1 ? i : 1),
                a = s / L * (Math.asin(1 / n) || 0),
                o = function(t) {
                    return 1 === t ? 1 : n * Math.pow(2, -10 * t) * j((t - a) * s) + 1
                },
                h = "out" === e ? o : "in" === e ? function(t) {
                    return 1 - o(1 - t)
                } : Be(o);
            return s = L / s, h.config = function(i, r) {
                return t(e, i, r)
            }, h
        },
        ze = function t(e, i) {
            void 0 === i && (i = 1.70158);
            var r = function(t) {
                    return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                },
                n = "out" === e ? r : "in" === e ? function(t) {
                    return 1 - r(1 - t)
                } : Be(r);
            return n.config = function(i) {
                return t(e, i)
            }, n
        };
    Et("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var i = e < 5 ? e + 1 : e;
        Le(t + ",Power" + (i - 1), e ? function(t) {
            return Math.pow(t, i)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, i)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        })
    }), Ce.Linear.easeNone = Ce.none = Ce.Linear.easeIn, Le("Elastic", Ve("in"), Ve("out"), Ve()), C = 7.5625, D = 1 / (k = 2.75), Le("Bounce", function(t) {
        return 1 - F(1 - t)
    }, F = function(t) {
        return t < D ? C * t * t : t < .7272727272727273 ? C * Math.pow(t - 1.5 / k, 2) + .75 : t < .9090909090909092 ? C * (t -= 2.25 / k) * t + .9375 : C * Math.pow(t - 2.625 / k, 2) + .984375
    }), Le("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Le("Circ", function(t) {
        return -(z(1 - t * t) - 1)
    }), Le("Sine", function(t) {
        return 1 === t ? 1 : 1 - N(t * B)
    }), Le("Back", ze("in"), ze("out"), ze()), Ce.SteppedEase = Ce.steps = st.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
                r = t + (e ? 0 : 1),
                n = e ? 1 : 0,
                s = 1 - R;
            return function(t) {
                return ((r * ie(0, s, t) | 0) + n) * i
            }
        }
    }, O.ease = Ce["quad.out"], Et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return bt += t + "," + t + "Params,"
    });
    var Ne = function(t, e) {
            this.id = V++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : St, this.set = e ? e.getSetter : ii
        },
        je = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Kt(this, +t.duration, 1, 1), this.data = t.data, f || Ae.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (Me(), !arguments.length) return this._tTime;
                var i = this._dp;
                if (i && i.smoothChildTiming && this._ts) {
                    for (qt(this, t), !i._dp || i.parent || Wt(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Yt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === R || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Mt(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Nt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Nt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function(t, e) {
                var i = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? jt(this._tTime, i) + 1 : 1
            }, e.timeScale = function(t) {
                if (!arguments.length) return this._rts === -R ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? Gt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || t === -R ? 0 : this._rts,
                    function(t) {
                        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent
                    }(this.totalTime(ie(-this._delay, this._tDur, e), !0)), Ht(this), this
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Me(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== R && (this._tTime -= R)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Yt(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Gt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.globalTime = function(t) {
                for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
                return i
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Zt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, Zt(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Qt(this, t), X(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, X(e))
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -R : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -R, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    i = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - R))
            }, e.eventCallback = function(t, e, i) {
                var r = this.vars;
                return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
            }, e.then = function(t) {
                var e = this;
                return new Promise(function(i) {
                    var r = H(t) ? t : kt,
                        n = function() {
                            var t = e.then;
                            e.then = null, H(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
                })
            }, e.kill = function() {
                ve(this)
            }, t
        }();
    Dt(je.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -R,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ge = function(t) {
        function e(e, i) {
            var n;
            return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = X(e.sortChildren), a && Yt(e.parent || a, r(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Xt(r(n), e.scrollTrigger), n
        }
        n(e, t);
        var i = e.prototype;
        return i.to = function(t, e, i) {
            return te(0, arguments, this), this
        }, i.from = function(t, e, i) {
            return te(1, arguments, this), this
        }, i.fromTo = function(t, e, i, r) {
            return te(2, arguments, this), this
        }, i.set = function(t, e, i) {
            return e.duration = 0, e.parent = this, Rt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ze(t, e, Qt(this, i), 1), this
        }, i.call = function(t, e, i) {
            return Yt(this, Ze.delayedCall(0, t, e), i)
        }, i.staggerTo = function(t, e, i, r, n, s, a) {
            return i.duration = e, i.stagger = i.stagger || r, i.onComplete = s, i.onCompleteParams = a, i.parent = this, new Ze(t, i, Qt(this, n)), this
        }, i.staggerFrom = function(t, e, i, r, n, s, a) {
            return i.runBackwards = 1, Rt(i).immediateRender = X(i.immediateRender), this.staggerTo(t, e, i, r, n, s, a)
        }, i.staggerFromTo = function(t, e, i, r, n, s, a, o) {
            return r.startAt = i, Rt(r).immediateRender = X(r.immediateRender), this.staggerTo(t, e, r, n, s, a, o)
        }, i.render = function(t, e, i) {
            var r, n, s, o, h, l, c, p, u, f, d, m, y = this._time,
                g = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                b = t <= 0 ? 0 : Pt(t),
                _ = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (this !== a && b > g && t >= 0 && (b = g), b !== this._tTime || i || _) {
                if (y !== this._time && v && (b += this._time - y, t += this._time - y), r = b, u = this._start, l = !(p = this._ts), _ && (v || (y = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (d = this._yoyo, h = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, i);
                    if (r = Pt(b % h), b === g ? (o = this._repeat, r = v) : ((o = ~~(b / h)) && o === b / h && (r = v, o--), r > v && (r = v)), f = jt(this._tTime, h), !y && this._tTime && f !== o && (f = o), d && 1 & o && (r = v - r, m = 1), o !== f && !this._lock) {
                        var w = d && 1 & f,
                            S = w === (d && 1 & o);
                        if (o < f && (w = !w), y = w ? 0 : v, this._lock = 1, this.render(y || (m ? 0 : Pt(o * h)), e, !v)._lock = 0, this._tTime = b, !e && this.parent && ge(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), y && y !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (v = this._dur, g = this._tDur, S && (this._lock = 2, y = w ? v : -1e-4, this.render(y, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                        Oe(this, m)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(t, e, i) {
                        var r;
                        if (i > e)
                            for (r = t._first; r && r._start <= i;) {
                                if ("isPause" === r.data && r._start > e) return r;
                                r = r._next
                            } else
                                for (r = t._last; r && r._start >= i;) {
                                    if ("isPause" === r.data && r._start < e) return r;
                                    r = r._prev
                                }
                    }(this, Pt(y), Pt(r))) && (b -= r - (r = c._start)), this._tTime = b, this._time = r, this._act = !p, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, y = 0), !y && r && !e && (ge(this, "onStart"), this._tTime !== b)) return this;
                if (r >= y && t >= 0)
                    for (n = this._first; n;) {
                        if (s = n._next, (n._act || r >= n._start) && n._ts && c !== n) {
                            if (n.parent !== this) return this.render(t, e, i);
                            if (n.render(n._ts > 0 ? (r - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (r - n._start) * n._ts, e, i), r !== this._time || !this._ts && !l) {
                                c = 0, s && (b += this._zTime = -R);
                                break
                            }
                        }
                        n = s
                    } else {
                        n = this._last;
                        for (var E = t < 0 ? t : r; n;) {
                            if (s = n._prev, (n._act || E <= n._end) && n._ts && c !== n) {
                                if (n.parent !== this) return this.render(t, e, i);
                                if (n.render(n._ts > 0 ? (E - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (E - n._start) * n._ts, e, i), r !== this._time || !this._ts && !l) {
                                    c = 0, s && (b += this._zTime = E ? -R : R);
                                    break
                                }
                            }
                            n = s
                        }
                    }
                if (c && !e && (this.pause(), c.render(r >= y ? 0 : -R)._zTime = r >= y ? 1 : -1, this._ts)) return this._start = u, Ht(this), this.render(t, e, i);
                this._onUpdate && !e && ge(this, "onUpdate", !0), (b === g && g >= this.totalDuration() || !b && y) && (u !== this._start && Math.abs(p) === Math.abs(this._ts) || this._lock || ((t || !v) && (b === g && this._ts > 0 || !b && this._ts < 0) && Bt(this, 1), e || t < 0 && !y || !b && !y && g || (ge(this, b === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < g && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, i.add = function(t, e) {
            var i = this;
            if (q(e) || (e = Qt(this, e, t)), !(t instanceof je)) {
                if (Z(t)) return t.forEach(function(t) {
                    return i.add(t, e)
                }), this;
                if (G(t)) return this.addLabel(t, e);
                if (!H(t)) return this;
                t = Ze.delayedCall(0, t)
            }
            return this !== t ? Yt(this, t, e) : this
        }, i.getChildren = function(t, e, i, r) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -1e8);
            for (var n = [], s = this._first; s;) s._start >= r && (s instanceof Ze ? e && n.push(s) : (i && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, i)))), s = s._next;
            return n
        }, i.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                if (e[i].vars.id === t) return e[i]
        }, i.remove = function(t) {
            return G(t) ? this.removeLabel(t) : H(t) ? this.killTweensOf(t) : (Lt(this, t), t === this._recent && (this._recent = this._last), Vt(this))
        }, i.totalTime = function(e, i) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Pt(Ae.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
        }, i.addLabel = function(t, e) {
            return this.labels[t] = Qt(this, e), this
        }, i.removeLabel = function(t) {
            return delete this.labels[t], this
        }, i.addPause = function(t, e, i) {
            var r = Ze.delayedCall(0, e || pt, i);
            return r.data = "isPause", this._hasPause = 1, Yt(this, r, Qt(this, t))
        }, i.removePause = function(t) {
            var e = this._first;
            for (t = Qt(this, t); e;) e._start === t && "isPause" === e.data && Bt(e), e = e._next
        }, i.killTweensOf = function(t, e, i) {
            for (var r = this.getTweensOf(t, i), n = r.length; n--;) He !== r[n] && r[n].kill(t, e);
            return this
        }, i.getTweensOf = function(t, e) {
            for (var i, r = [], n = oe(t), s = this._first, a = q(e); s;) s instanceof Ze ? Tt(s._targets, n) && (a ? (!He || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && r.push(s) : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i), s = s._next;
            return r
        }, i.tweenTo = function(t, e) {
            e = e || {};
            var i, r = this,
                n = Qt(r, t),
                s = e,
                a = s.startAt,
                o = s.onStart,
                h = s.onStartParams,
                l = s.immediateRender,
                c = Ze.to(r, Dt({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || R,
                    onStart: function() {
                        if (r.pause(), !i) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : r._time)) / r.timeScale());
                            c._dur !== t && Kt(c, t, 0, 1).render(c._time, !0, !0), i = 1
                        }
                        o && o.apply(c, h || [])
                    }
                }, e));
            return l ? c.render(0) : c
        }, i.tweenFromTo = function(t, e, i) {
            return this.tweenTo(e, Dt({
                startAt: {
                    time: Qt(this, t)
                }
            }, i))
        }, i.recent = function() {
            return this._recent
        }, i.nextLabel = function(t) {
            return void 0 === t && (t = this._time), ye(this, Qt(this, t))
        }, i.previousLabel = function(t) {
            return void 0 === t && (t = this._time), ye(this, Qt(this, t), 1)
        }, i.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + R)
        }, i.shiftChildren = function(t, e, i) {
            void 0 === i && (i = 0);
            for (var r, n = this._first, s = this.labels; n;) n._start >= i && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (r in s) s[r] >= i && (s[r] += t);
            return Vt(this)
        }, i.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, i.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Vt(this)
        }, i.totalDuration = function(t) {
            var e, i, r, n = 0,
                s = this._last,
                o = 1e8;
            if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
            if (this._dirty) {
                for (r = this.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (i = s._start) > o && this._sort && s._ts && !this._lock ? (this._lock = 1, Yt(this, s, i - s._delay, 1)._lock = 0) : o = i, i < 0 && s._ts && (n -= i, (!r && !this._dp || r && r.smoothChildTiming) && (this._start += i / this._ts, this._time -= i, this._tTime -= i), this.shiftChildren(-i, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Kt(this, this === a && this._time > n ? this._time : n, 1, 1), this._dirty = 0
            }
            return this._tDur
        }, e.updateRoot = function(t) {
            if (a._ts && (Mt(a, Gt(t, a)), p = Ae.frame), Ae.frame >= gt) {
                gt += I.autoSleep || 120;
                var e = a._first;
                if ((!e || !e._ts) && I.autoSleep && Ae._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Ae.sleep()
                }
            }
        }, e
    }(je);
    Dt(Ge.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var He, qe = function(t, e, i, r, n, s, a, o, h) {
            H(r) && (r = r(n || 0, t, s));
            var l, c = t[e],
                p = "get" !== i ? i : H(c) ? h ? t[e.indexOf("set") || !H(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : c,
                u = H(c) ? h ? ti : Qe : Je;
            if (G(r) && (~r.indexOf("random(") && (r = de(r)), "=" === r.charAt(1) && ((l = parseFloat(p) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (re(p) || 0)) || 0 === l) && (r = l)), p !== r) return isNaN(p * r) || "" === r ? (!c && !(e in t) && ht(e, r), function(t, e, i, r, n, s, a) {
                var o, h, l, c, p, u, f, d, m = new pi(this._pt, t, e, 0, 1, si, null, n),
                    y = 0,
                    g = 0;
                for (m.b = i, m.e = r, i += "", (f = ~(r += "").indexOf("random(")) && (r = de(r)), s && (s(d = [i, r], t, e), i = d[0], r = d[1]), h = i.match(et) || []; o = et.exec(r);) c = o[0], p = r.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" === p.substr(-5) && (l = 1), c !== h[g++] && (u = parseFloat(h[g - 1]) || 0, m._pt = {
                    _next: m._pt,
                    p: p || 1 === g ? p : ",",
                    s: u,
                    c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - u,
                    m: l && l < 4 ? Math.round : 0
                }, y = et.lastIndex);
                return m.c = y < r.length ? r.substring(y, r.length) : "", m.fp = a, (it.test(r) || f) && (m.e = 0), this._pt = m, m
            }.call(this, t, e, p, r, u, o || I.stringFilter, h)) : (l = new pi(this._pt, t, e, +p || 0, r - (p || 0), "boolean" == typeof c ? ni : ri, 0, u), h && (l.fp = h), a && l.modifier(a, this, t), this._pt = l)
        },
        We = function(t, e, i, r, n, s) {
            var a, o, h, l;
            if (mt[t] && !1 !== (a = new mt[t]).init(n, a.rawVars ? e[t] : function(t, e, i, r, n) {
                    if (H(t) && (t = Ue(t, n, e, i, r)), !Y(t) || t.style && t.nodeType || Z(t) || K(t)) return G(t) ? Ue(t, n, e, i, r) : t;
                    var s, a = {};
                    for (s in t) a[s] = Ue(t[s], n, e, i, r);
                    return a
                }(e[t], r, n, s, i), i, r, s) && (i._pt = o = new pi(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== u))
                for (h = i._ptLookup[i._targets.indexOf(n)], l = a._props.length; l--;) h[a._props[l]] = o;
            return a
        },
        Ye = function t(e, i) {
            var r, n, o, h, l, c, p, u, f, d, m, y, g, v = e.vars,
                b = v.ease,
                _ = v.startAt,
                w = v.immediateRender,
                S = v.lazy,
                E = v.onUpdate,
                x = v.onUpdateParams,
                P = v.callbackScope,
                T = v.runBackwards,
                A = v.yoyoEase,
                M = v.keyframes,
                C = v.autoRevert,
                k = e._dur,
                D = e._startAt,
                F = e._targets,
                I = e.parent,
                L = I && "nested" === I.data ? I.parent._targets : F,
                B = "auto" === e._overwrite && !s,
                V = e.timeline;
            if (V && (!M || !b) && (b = "none"), e._ease = Re(b, O.ease), e._yEase = A ? Ie(Re(!0 === A ? b : A, O.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), e._from = !V && !!v.runBackwards, !V || M && !v.stagger) {
                if (y = (u = F[0] ? wt(F[0]).harness : 0) && v[u.prop], r = Ot(v, ut), D && Bt(D.render(-1, !0)), _)
                    if (Bt(e._startAt = Ze.set(F, Dt({
                            data: "isStart",
                            overwrite: !1,
                            parent: I,
                            immediateRender: !0,
                            lazy: X(S),
                            startAt: null,
                            delay: 0,
                            onUpdate: E,
                            onUpdateParams: x,
                            callbackScope: P,
                            stagger: 0
                        }, _))), i < 0 && !w && !C && e._startAt.render(-1, !0), w) {
                        if (i > 0 && !C && (e._startAt = 0), k && i <= 0) return void(i && (e._zTime = i))
                    } else !1 === C && (e._startAt = 0);
                else if (T && k)
                    if (D) !C && (e._startAt = 0);
                    else if (i && (w = !1), o = Dt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: w && X(S),
                        immediateRender: w,
                        stagger: 0,
                        parent: I
                    }, r), y && (o[u.prop] = y), Bt(e._startAt = Ze.set(F, o)), i < 0 && e._startAt.render(-1, !0), e._zTime = i, w) {
                    if (!i) return
                } else t(e._startAt, R);
                for (e._pt = 0, S = k && X(S) || S && !k, n = 0; n < F.length; n++) {
                    if (p = (l = F[n])._gsap || _t(F)[n]._gsap, e._ptLookup[n] = d = {}, dt[p.id] && ft.length && At(), m = L === F ? n : L.indexOf(l), u && !1 !== (f = new u).init(l, y || r, e, m, L) && (e._pt = h = new pi(e._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            d[t] = h
                        }), f.priority && (c = 1)), !u || y)
                        for (o in r) mt[o] && (f = We(o, r, e, m, l, L)) ? f.priority && (c = 1) : d[o] = h = qe.call(e, l, o, "get", r[o], m, L, 0, v.stringFilter);
                    e._op && e._op[n] && e.kill(l, e._op[n]), B && e._pt && (He = e, a.killTweensOf(l, d, e.globalTime(i)), g = !e.parent, He = 0), e._pt && S && (dt[p.id] = 1)
                }
                c && ci(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = E, e._initted = (!e._op || e._pt) && !g, M && i <= 0 && V.render(1e8, !0, !0)
        },
        Xe = function(t, e, i, r) {
            var n, s, a = e.ease || r || "power1.inOut";
            if (Z(e)) s = i[t] || (i[t] = []), e.forEach(function(t, i) {
                return s.push({
                    t: i / (e.length - 1) * 100,
                    v: t,
                    e: a
                })
            });
            else
                for (n in e) s = i[n] || (i[n] = []), "ease" === n || s.push({
                    t: parseFloat(t),
                    v: e[n],
                    e: a
                })
        },
        Ue = function(t, e, i, r, n) {
            return H(t) ? t.call(e, i, r, n) : G(t) && ~t.indexOf("random(") ? de(t) : t
        },
        $e = bt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ke = {};
    Et($e + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Ke[t] = 1
    });
    var Ze = function(t) {
        function e(e, i, n, o) {
            var h;
            "number" == typeof i && (n.duration = i, i = n, n = null);
            var l, c, p, u, f, d, m, y, g = (h = t.call(this, o ? i : Rt(i)) || this).vars,
                v = g.duration,
                b = g.delay,
                _ = g.immediateRender,
                w = g.stagger,
                S = g.overwrite,
                E = g.keyframes,
                x = g.defaults,
                P = g.scrollTrigger,
                T = g.yoyoEase,
                A = i.parent || a,
                M = (Z(e) || K(e) ? q(e[0]) : "length" in i) ? [e] : oe(e);
            if (h._targets = M.length ? _t(M) : lt("GSAP target " + e + " not found. https://greensock.com", !I.nullTargetWarn) || [], h._ptLookup = [], h._overwrite = S, E || w || $(v) || $(b)) {
                if (i = h.vars, (l = h.timeline = new Ge({
                        data: "nested",
                        defaults: x || {}
                    })).kill(), l.parent = l._dp = r(h), l._start = 0, w || $(v) || $(b)) {
                    if (u = M.length, m = w && le(w), Y(w))
                        for (f in w) ~$e.indexOf(f) && (y || (y = {}), y[f] = w[f]);
                    for (c = 0; c < u; c++)(p = Ot(i, Ke)).stagger = 0, T && (p.yoyoEase = T), y && Ft(p, y), d = M[c], p.duration = +Ue(v, r(h), c, d, M), p.delay = (+Ue(b, r(h), c, d, M) || 0) - h._delay, !w && 1 === u && p.delay && (h._delay = b = p.delay, h._start += b, p.delay = 0), l.to(d, p, m ? m(c, d, M) : 0), l._ease = Ce.none;
                    l.duration() ? v = b = 0 : h.timeline = 0
                } else if (E) {
                    Rt(Dt(l.vars.defaults, {
                        ease: "none"
                    })), l._ease = Re(E.ease || i.ease || "none");
                    var C, k, D, F = 0;
                    if (Z(E)) E.forEach(function(t) {
                        return l.to(M, t, ">")
                    });
                    else {
                        for (f in p = {}, E) "ease" === f || "easeEach" === f || Xe(f, E[f], p, E.easeEach);
                        for (f in p)
                            for (C = p[f].sort(function(t, e) {
                                    return t.t - e.t
                                }), F = 0, c = 0; c < C.length; c++)(D = {
                                ease: (k = C[c]).e,
                                duration: (k.t - (c ? C[c - 1].t : 0)) / 100 * v
                            })[f] = k.v, l.to(M, D, F), F += D.duration;
                        l.duration() < v && l.to({}, {
                            duration: v - l.duration()
                        })
                    }
                }
                v || h.duration(v = l.duration())
            } else h.timeline = 0;
            return !0 !== S || s || (He = r(h), a.killTweensOf(M), He = 0), Yt(A, r(h), n), i.reversed && h.reverse(), i.paused && h.paused(!0), (_ || !v && !E && h._start === Pt(A._time) && X(_) && zt(r(h)) && "nested" !== A.data) && (h._tTime = -R, h.render(Math.max(0, -b))), P && Xt(r(h), P), h
        }
        n(e, t);
        var i = e.prototype;
        return i.render = function(t, e, i) {
            var r, n, s, a, o, h, l, c, p, u = this._time,
                f = this._tDur,
                d = this._dur,
                m = t > f - R && t >= 0 ? f : t < R ? 0 : t;
            if (d) {
                if (m !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (r = m, c = this.timeline, this._repeat) {
                        if (a = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
                        if (r = Pt(m % a), m === f ? (s = this._repeat, r = d) : ((s = ~~(m / a)) && s === m / a && (r = d, s--), r > d && (r = d)), (h = this._yoyo && 1 & s) && (p = this._yEase, r = d - r), o = jt(this._tTime, a), r === u && !i && this._initted) return this;
                        s !== o && (c && this._yEase && Oe(c, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = i = 1, this.render(Pt(a * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ut(this, t < 0 ? t : r, i, e)) return this._tTime = 0, this;
                        if (d !== this._dur) return this.render(t, e, i)
                    }
                    if (this._tTime = m, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (p || this._ease)(r / d), this._from && (this.ratio = l = 1 - l), r && !u && !e && (ge(this, "onStart"), this._tTime !== m)) return this;
                    for (n = this._pt; n;) n.r(l, n.d), n = n._next;
                    c && c.render(t < 0 ? t : !r && h ? -R : c._dur * c._ease(r / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), ge(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && ge(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !d) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Bt(this, 1), e || t < 0 && !u || !m && !u || (ge(this, m === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < f && this.timeScale() > 0) && this._prom()))
                }
            } else ! function(t, e, i, r) {
                var n, s, a, o = t.ratio,
                    h = e < 0 || !e && (!t._start && function t(e) {
                        var i = e.parent;
                        return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
                    }(t) && (t._initted || !$t(t)) || (t._ts < 0 || t._dp._ts < 0) && !$t(t)) ? 0 : 1,
                    l = t._rDelay,
                    c = 0;
                if (l && t._repeat && (c = ie(0, t._tDur, e), s = jt(c, l), t._yoyo && 1 & s && (h = 1 - h), s !== jt(t._tTime, l) && (o = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== o || r || t._zTime === R || !e && t._zTime) {
                    if (!t._initted && Ut(t, e, r, i)) return;
                    for (a = t._zTime, t._zTime = e || (i ? R : 0), i || (i = e && !a), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = c, n = t._pt; n;) n.r(h, n.d), n = n._next;
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && ge(t, "onUpdate"), c && t._repeat && !i && t.parent && ge(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && Bt(t, 1), i || (ge(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, i);
            return this
        }, i.targets = function() {
            return this._targets
        }, i.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
        }, i.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ve(this) : this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, He && !0 !== He.vars.overwrite)._first || ve(this), this.parent && i !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var r, n, s, a, o, h, l, c = this._targets,
                p = t ? oe(t) : c,
                u = this._ptLookup,
                f = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
                    return i < 0
                }(c, p)) return "all" === e && (this._pt = 0), ve(this);
            for (r = this._op = this._op || [], "all" !== e && (G(e) && (o = {}, Et(e, function(t) {
                    return o[t] = 1
                }), e = o), e = function(t, e) {
                    var i, r, n, s, a = t[0] ? wt(t[0]).harness : 0,
                        o = a && a.aliases;
                    if (!o) return e;
                    for (r in i = Ft({}, e), o)
                        if (r in i)
                            for (n = (s = o[r].split(",")).length; n--;) i[s[n]] = i[r];
                    return i
                }(c, e)), l = c.length; l--;)
                if (~p.indexOf(c[l]))
                    for (o in n = u[l], "all" === e ? (r[l] = e, a = n, s = {}) : (s = r[l] = r[l] || {}, a = e), a)(h = n && n[o]) && ("kill" in h.d && !0 !== h.d.kill(o) || Lt(this, h, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && f && ve(this), this
        }, e.to = function(t, i) {
            return new e(t, i, arguments[2])
        }, e.from = function(t, e) {
            return te(1, arguments)
        }, e.delayedCall = function(t, i, r, n) {
            return new e(i, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: i,
                onReverseComplete: i,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: n
            })
        }, e.fromTo = function(t, e, i) {
            return te(2, arguments)
        }, e.set = function(t, i) {
            return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
        }, e.killTweensOf = function(t, e, i) {
            return a.killTweensOf(t, e, i)
        }, e
    }(je);
    Dt(Ze.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), Et("staggerTo,staggerFrom,staggerFromTo", function(t) {
        Ze[t] = function() {
            var e = new Ge,
                i = ne.call(arguments, 0);
            return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
        }
    });
    var Je = function(t, e, i) {
            return t[e] = i
        },
        Qe = function(t, e, i) {
            return t[e](i)
        },
        ti = function(t, e, i, r) {
            return t[e](r.fp, i)
        },
        ei = function(t, e, i) {
            return t.setAttribute(e, i)
        },
        ii = function(t, e) {
            return H(t[e]) ? Qe : W(t[e]) && t.setAttribute ? ei : Je
        },
        ri = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        ni = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        si = function(t, e) {
            var i = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
                for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r, i = i._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        },
        ai = function(t, e) {
            for (var i = e._pt; i;) i.r(t, i.d), i = i._next
        },
        oi = function(t, e, i, r) {
            for (var n, s = this._pt; s;) n = s._next, s.p === r && s.modifier(t, e, i), s = n
        },
        hi = function(t) {
            for (var e, i, r = this._pt; r;) i = r._next, r.p === t && !r.op || r.op === t ? Lt(this, r, "_pt") : r.dep || (e = 1), r = i;
            return !e
        },
        li = function(t, e, i, r) {
            r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
        },
        ci = function(t) {
            for (var e, i, r, n, s = t._pt; s;) {
                for (e = s._next, i = r; i && i.pr > s.pr;) i = i._next;
                (s._prev = i ? i._prev : n) ? s._prev._next = s: r = s, (s._next = i) ? i._prev = s : n = s, s = e
            }
            t._pt = r
        },
        pi = function() {
            function t(t, e, i, r, n, s, a, o, h) {
                this.t = e, this.s = r, this.c = n, this.p = i, this.r = s || ri, this.d = a || this, this.set = o || Je, this.pr = h || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, i) {
                this.mSet = this.mSet || this.set, this.set = li, this.m = t, this.mt = i, this.tween = e
            }, t
        }();
    Et(bt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1
    }), st.TweenMax = st.TweenLite = Ze, st.TimelineLite = st.TimelineMax = Ge, a = new Ge({
        sortChildren: !1,
        defaults: O,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), I.stringFilter = Te;
    var ui = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach(function(t) {
                return function(t) {
                    var e = (t = !t.name && t.default || t).name,
                        i = H(t),
                        r = e && !i && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: pt,
                            render: ai,
                            add: qe,
                            kill: hi,
                            modifier: oi,
                            rawVars: 0
                        },
                        s = {
                            targetTest: 0,
                            get: 0,
                            getSetter: ii,
                            aliases: {},
                            register: 0
                        };
                    if (Me(), t !== r) {
                        if (mt[e]) return;
                        Dt(r, Dt(Ot(t, n), s)), Ft(r.prototype, Ft(n, Ot(t, s))), mt[r.prop = e] = r, t.targetTest && (vt.push(r), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    ct(e, r), t.register && t.register(mi, r, pi)
                }(t)
            })
        },
        timeline: function(t) {
            return new Ge(t)
        },
        getTweensOf: function(t, e) {
            return a.getTweensOf(t, e)
        },
        getProperty: function(t, e, i, r) {
            G(t) && (t = oe(t)[0]);
            var n = wt(t || {}).get,
                s = i ? kt : Ct;
            return "native" === i && (i = ""), t ? e ? s((mt[e] && mt[e].get || n)(t, e, i, r)) : function(e, i, r) {
                return s((mt[e] && mt[e].get || n)(t, e, i, r))
            } : t
        },
        quickSetter: function(t, e, i) {
            if ((t = oe(t)).length > 1) {
                var r = t.map(function(t) {
                        return mi.quickSetter(t, e, i)
                    }),
                    n = r.length;
                return function(t) {
                    for (var e = n; e--;) r[e](t)
                }
            }
            t = t[0] || {};
            var s = mt[e],
                a = wt(t),
                o = a.harness && (a.harness.aliases || {})[e] || e,
                h = s ? function(e) {
                    var r = new s;
                    u._pt = 0, r.init(t, i ? e + i : e, u, 0, [t]), r.render(1, r), u._pt && ai(1, u)
                } : a.set(t, o);
            return s ? h : function(e) {
                return h(t, o, i ? e + i : e, a, 1)
            }
        },
        isTweening: function(t) {
            return a.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Re(t.ease, O.ease)), It(O, t || {})
        },
        config: function(t) {
            return It(I, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                i = t.effect,
                r = t.plugins,
                n = t.defaults,
                s = t.extendTimeline;
            (r || "").split(",").forEach(function(t) {
                return t && !mt[t] && !st[t] && lt(e + " effect requires " + t + " plugin.")
            }), yt[e] = function(t, e, r) {
                return i(oe(t), Dt(e || {}, n), r)
            }, s && (Ge.prototype[e] = function(t, i, r) {
                return this.add(yt[e](t, Y(i) ? i : (r = i) && {}, this), r)
            })
        },
        registerEase: function(t, e) {
            Ce[t] = Re(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Re(t, e) : Ce
        },
        getById: function(t) {
            return a.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var i, r, n = new Ge(t);
            for (n.smoothChildTiming = X(t.smoothChildTiming), a.remove(n), n._dp = 0, n._time = n._tTime = a._time, i = a._first; i;) r = i._next, !e && !i._dur && i instanceof Ze && i.vars.onComplete === i._targets[0] || Yt(n, i, i._start - i._delay), i = r;
            return Yt(a, n, 0), n
        },
        utils: {
            wrap: function t(e, i, r) {
                var n = i - e;
                return Z(e) ? fe(e, t(0, e.length), i) : ee(r, function(t) {
                    return (n + (t - e) % n) % n + e
                })
            },
            wrapYoyo: function t(e, i, r) {
                var n = i - e,
                    s = 2 * n;
                return Z(e) ? fe(e, t(0, e.length - 1), i) : ee(r, function(t) {
                    return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
                })
            },
            distribute: le,
            random: ue,
            snap: pe,
            normalize: function(t, e, i) {
                return me(t, e, 0, 1, i)
            },
            getUnit: re,
            clamp: function(t, e, i) {
                return ee(i, function(i) {
                    return ie(t, e, i)
                })
            },
            splitColor: we,
            toArray: oe,
            selector: function(t) {
                return t = oe(t)[0] || lt("Invalid scope") || {},
                    function(e) {
                        var i = t.current || t.nativeElement || t;
                        return oe(e, i.querySelectorAll ? i : i === t ? lt("Invalid scope") || l.createElement("div") : t)
                    }
            },
            mapRange: me,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(t, e) {
                return function(i) {
                    return t(parseFloat(i)) + (e || re(i))
                }
            },
            interpolate: function t(e, i, r, n) {
                var s = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!s) {
                    var a, o, h, l, c, p = G(e),
                        u = {};
                    if (!0 === r && (n = 1) && (r = null), p) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (Z(e) && !Z(i)) {
                        for (h = [], l = e.length, c = l - 2, o = 1; o < l; o++) h.push(t(e[o - 1], e[o]));
                        l--, s = function(t) {
                            t *= l;
                            var e = Math.min(c, ~~t);
                            return h[e](t - e)
                        }, r = i
                    } else n || (e = Ft(Z(e) ? [] : {}, e));
                    if (!h) {
                        for (a in i) qe.call(u, e, a, "get", i[a]);
                        s = function(t) {
                            return ai(t, u) || (p ? e.p : e)
                        }
                    }
                }
                return ee(r, s)
            },
            shuffle: he
        },
        install: ot,
        effects: yt,
        ticker: Ae,
        updateRoot: Ge.updateRoot,
        plugins: mt,
        globalTimeline: a,
        core: {
            PropTween: pi,
            globals: ct,
            Tween: Ze,
            Timeline: Ge,
            Animation: je,
            getCache: wt,
            _removeLinkedListItem: Lt,
            suppressOverwrites: function(t) {
                return s = t
            }
        }
    };
    Et("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ui[t] = Ze[t]
    }), Ae.add(Ge.updateRoot), u = ui.to({}, {
        duration: 0
    });
    var fi = function(t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
            return i
        },
        di = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, i, r) {
                    r._onInit = function(t) {
                        var r, n;
                        if (G(i) && (r = {}, Et(i, function(t) {
                                return r[t] = 1
                            }), i = r), e) {
                            for (n in r = {}, i) r[n] = e(i[n]);
                            i = r
                        }! function(t, e) {
                            var i, r, n, s = t._targets;
                            for (i in e)
                                for (r = s.length; r--;)(n = t._ptLookup[r][i]) && (n = n.d) && (n._pt && (n = fi(n, i)), n && n.modifier && n.modifier(e[i], t, s[r], i))
                        }(t, i)
                    }
                }
            }
        },
        mi = ui.registerPlugin({
            name: "attr",
            init: function(t, e, i, r, n) {
                var s, a;
                for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], r, n, 0, 0, s)) && (a.op = s), this._props.push(s)
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
            }
        }, di("roundProps", ce), di("modifiers"), di("snap", pe)) || ui;
    Ze.version = Ge.version = mi.version = "3.9.1", c = 1, U() && Me();
    Ce.Power0, Ce.Power1, Ce.Power2, Ce.Power3, Ce.Power4, Ce.Linear, Ce.Quad, Ce.Cubic, Ce.Quart, Ce.Quint, Ce.Strong, Ce.Elastic, Ce.Back, Ce.SteppedEase, Ce.Bounce, Ce.Sine, Ce.Expo, Ce.Circ
}, function(t, e, i) {
    "use strict";
    var r = function(t) {
        this.offset = -75, this.index = 0, this.last = 0, this.current = 0, this.values = [], this.el = t, this.$titles = this.el.querySelectorAll(".b-anchors__item"), this.$anchors = this.el.querySelectorAll(".b-anchors__entitled"), this.setAnchors(), this.events(), this.resize()
    };
    r.prototype.setAnchors = function() {
        this.anchors = [];
        for (var t = 0; t < this.$anchors.length; t++) {
            var e = this.$anchors[t].getAttribute("href");
            if ("#" !== e) {
                var i = document.querySelector(e),
                    r = document.createElement("div");
                r.classList = this.$anchors[t].classList, r.innerHTML = this.$anchors[t].innerHTML, this.$anchors[t].parentNode.insertBefore(r, this.$anchors[t]), this.$anchors[t].parentNode.removeChild(this.$anchors[t]), this.anchors[this.index] = {
                    button: r,
                    target: i
                }, this.index++
            }
        }
    }, r.prototype.events = function() {
        for (var t = 0; t < this.anchors.length; t++) this.anchors[t].button.addEventListener("click", this.scrollTo.bind(this, t))
    }, r.prototype.scrollTo = function(t) {
        this.anchors[t].target.scrollIntoView({
            behavior: "smooth"
        })
    }, r.prototype.resize = function() {
        for (var t = 0; t < this.$titles.length; t++) {
            var e = this.$titles[t].getBoundingClientRect();
            this.values[t] = e.top + this.offset - 20
        }
    }, r.prototype.scroll = function(t) {
        if (this.$anchors = this.el.querySelectorAll(".b-anchors__entitled"), this.values) {
            for (var e = 0; e < this.values.length; e++) t.scroll.y > this.values[e] && (this.current = e);
            this.current !== this.last && (this.$anchors[this.last].classList.contains("active") && this.$anchors[this.last].classList.remove("active"), this.$anchors[this.current].classList.add("active"), this.last = this.current)
        }
    }, e.a = r
}, function(t, e, i) {
    "use strict";
    var r = i(4),
        n = function() {
            this.el = document.querySelector(".slider-references"), this.el && (this.getElems(), this.setBoundaries(), this.addEvents(), this.options = {
                easing: .1,
                dragSpeed: 1.5
            }, this.dragging = !1, this.isMouseDown = !1, this.isTranslating = !1, this.currentPosition = 0, this.startPosition = 0, this.endPosition = 0, this.translation = 0)
        };
    n.prototype.getElems = function() {
        this.planesWrapper = this.el.querySelector("#planes"), this.isInView = this.el.querySelector(".container"), this.planes = this.el.querySelectorAll(".plane"), this.planeItems = this.el.querySelectorAll(".plane-wrapper"), this.scrollBar = this.el.querySelector(".scrollbar"), this.scrollProgress = this.el.querySelector(".scrollbar .scrollbar__handle"), this.planeObject = [];
        for (var t = 0; t < this.planeItems.length; t++) this.planeObject[t] = {
            id: t,
            wrapper: this.planeItems[t],
            plane: this.planeItems[t].querySelector(".plane"),
            img: this.planeItems[t].querySelector(".plane img")
        }
    }, n.prototype.addEvents = function() {
        this.el.addEventListener("mousemove", this.onMouseMove.bind(this), {
            passive: !0
        }), this.el.addEventListener("touchmove", this.onMouseMove.bind(this), {
            passive: !0
        }), this.el.addEventListener("mousedown", this.onMouseDown.bind(this)), this.el.addEventListener("touchstart", this.onMouseDown.bind(this), {
            passive: !0
        }), document.body.addEventListener("mouseup", this.onMouseUp.bind(this)), this.el.addEventListener("touchend", this.onMouseUp.bind(this)), window.addEventListener("resize", this.onResize.bind(this))
    }, n.prototype.onPlaneObjectClick = function(t) {
        var e = document.elementFromPoint(t[0], t[1]).dataset.url;
        r.a.Highway.redirect(e)
    }, n.prototype.lerp = function(t, e, i) {
        var r = i;
        return (1 - (r = (r = r < 0 ? 0 : r) > 1 ? 1 : r)) * t + r * e
    }, n.prototype.getMousePosition = function(t) {
        var e = [t.clientX, t.clientY];
        return t.targetTouches && t.targetTouches[0] ? e = [t.targetTouches[0].clientX, t.targetTouches[0].clientY] : t.targetTouches && t.changedTouches[0] && (e = [t.changedTouches[0].clientX, t.changedTouches[0].clientY]), e
    }, n.prototype.setBoundaries = function() {
        var t = this.planeItems[0].currentStyle || window.getComputedStyle(this.planeItems[0]),
            e = this.planesWrapper.currentStyle || window.getComputedStyle(this.planesWrapper),
            i = (parseInt(t.marginRight.substring(0, t.marginRight.length - 2)) + parseInt(t.marginRight.substring(0, t.marginRight.length - 2))) * (this.planeItems.length - 1),
            r = parseInt(e.paddingLeft.substring(0, e.paddingLeft.length - 2)) + parseInt(e.paddingRight.substring(0, e.paddingRight.length - 2)),
            n = this.planeItems[0].offsetWidth * this.planeItems.length + i + r;
        this.totalTranslateLength = n - window.innerWidth, this.scrollBarWidth = this.scrollBar.offsetWidth, this.scrollBarProgressWidth = this.scrollProgress.offsetWidth, this.planesWrapper.style.width = n + "px", this.direction = 0, this.boundaries = {
            max: -1 * this.planesWrapper.clientWidth + window.innerWidth,
            min: 0,
            sliderSize: this.planesWrapper.clientWidth,
            referentSize: window.innerWidth
        }
    }, n.prototype.onMouseDown = function(t) {
        this.dragging = !1, this.isMouseDown = !0, this.planesWrapper.classList.add("dragged");
        var e = this.getMousePosition(t);
        this.startPosition = e[this.direction]
    }, n.prototype.onMouseMove = function(t) {
        if (this.isMouseDown) {
            var e = this.getMousePosition(t);
            this.dragging = !0, this.currentPosition = this.endPosition + (e[this.direction] - this.startPosition) * this.options.dragSpeed, this.currentPosition > this.boundaries.min && this.currentPosition < this.boundaries.max ? this.isTranslating = !0 : (this.currentPosition = Math.min(this.currentPosition, this.boundaries.min), this.currentPosition = Math.max(this.currentPosition, this.boundaries.max))
        }
    }, n.prototype.onMouseUp = function(t) {
        this.isMouseDown = !1, this.planesWrapper.classList.remove("dragged"), this.endPosition = this.currentPosition;
        var e = this.getMousePosition(t);
        e[this.direction] === this.startPosition && this.onPlaneObjectClick(e)
    }, n.prototype.onResize = function() {
        var t = this.translation / this.boundaries.sliderSize;
        this.setBoundaries(), this.planesWrapper.style.transform = "tanslate3d(0, 0, 0)";
        var e = t * this.boundaries.sliderSize;
        e = Math.min(e, this.boundaries.min), e = Math.max(e, this.boundaries.max), this.translateSlider(e), this.currentPosition = e, this.endPosition = e
    }, n.prototype.translateSlider = function(t) {
        var e = Math.floor(100 * t) / 100,
            i = 0 === this.direction ? "translateX" : "translateY",
            r = 100 * Math.abs(e) / this.totalTranslateLength;
        this.planesWrapper.style.transform = i + "(" + e + "px", this.scrollProgress.style.transform = "scaleY(5) translateX(" + r * (this.scrollBarWidth - this.scrollBarProgressWidth) / 100 + "px)", this.isTranslating && !this.isMouseDown && (this.isTranslating = !1), this.translation = e
    }, n.prototype.destroy = function() {
        this.el.removeEventListener("mousemove", this.onMouseMove.bind(this), {
            passive: !0
        }), this.el.removeEventListener("mousedown", this.onMouseDown.bind(this)), document.body.removeEventListener("mouseup", this.onMouseUp.bind(this)), this.el.removeEventListener("touchmove", this.onMouseMove.bind(this), {
            passive: !0
        }), this.el.removeEventListener("touchstart", this.onMouseDown.bind(this), {
            passive: !0
        }), this.el.removeEventListener("touchcancel", this.onMouseUp.bind(this))
    }, n.prototype.update = function() {
        var t = this.lerp(this.translation, this.currentPosition, this.options.easing);
        this.translateSlider(t)
    }, e.a = n
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(4),
        s = function(t) {
            this.items = t.querySelectorAll(".dropdown__item"), this.heads = t.querySelectorAll(".dropdown__head"), this.parent = t.querySelectorAll(".dropdown__content"), this.content = t.querySelectorAll(".dropdown__text");
            for (var e = 0; e < this.heads.length; e++) this.heads[e].addEventListener("click", this.onHeadClick.bind(this, e));
            this.open(0), this.init()
        };
    s.prototype.init = function() {
        n.a.smoothScrool.update()
    }, s.prototype.onHeadClick = function(t) {
        this.isOpen ? this.close(t) : this.open(t)
    }, s.prototype.open = function(t) {
        if (!this.isOpen) {
            this.activeIndex = t, this.items[t].classList.add("active");
            var e = this.content[t].clientHeight + "px";
            r.a.to(this.parent[t], {
                height: e,
                duration: .4,
                ease: "expo.out"
            }), this.isOpen = !0, this.oldIndex = t, this.update()
        }
    }, s.prototype.close = function(t) {
        var e = this;
        this.items[this.activeIndex].classList.remove("active"), r.a.to(this.parent[this.activeIndex], {
            height: 0,
            duration: .4,
            ease: "expo.out",
            onComplete: function() {
                e.isAnimating = !1
            }
        }), this.isOpen = !1, t !== this.activeIndex && this.open(t), this.update()
    }, s.prototype.update = function() {
        n.a.smoothScrool.update()
    }, e.a = s
}, function(t, e, i) {
    i(64), t.exports = i(146)
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), new(i(4).a)
}, function(t, e, i) {
    "use strict";
    var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r && r,
        n = {
            searchParams: "URLSearchParams" in r,
            iterable: "Symbol" in r && "iterator" in Symbol,
            blob: "FileReader" in r && "Blob" in r && function() {
                try {
                    return new Blob, !0
                } catch (t) {
                    return !1
                }
            }(),
            formData: "FormData" in r,
            arrayBuffer: "ArrayBuffer" in r
        };
    if (n.arrayBuffer) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        a = ArrayBuffer.isView || function(t) {
            return t && s.indexOf(Object.prototype.toString.call(t)) > -1
        };

    function o(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError('Invalid character in header field name: "' + t + '"');
        return t.toLowerCase()
    }

    function h(t) {
        return "string" != typeof t && (t = String(t)), t
    }

    function l(t) {
        var e = {
            next: function() {
                var e = t.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        };
        return n.iterable && (e[Symbol.iterator] = function() {
            return e
        }), e
    }

    function c(t) {
        this.map = {}, t instanceof c ? t.forEach(function(t, e) {
            this.append(e, t)
        }, this) : Array.isArray(t) ? t.forEach(function(t) {
            this.append(t[0], t[1])
        }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
            this.append(e, t[e])
        }, this)
    }

    function p(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function u(t) {
        return new Promise(function(e, i) {
            t.onload = function() {
                e(t.result)
            }, t.onerror = function() {
                i(t.error)
            }
        })
    }

    function f(t) {
        var e = new FileReader,
            i = u(e);
        return e.readAsArrayBuffer(t), i
    }

    function d(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function m() {
        return this.bodyUsed = !1, this._initBody = function(t) {
            var e;
            this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : n.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : n.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : n.arrayBuffer && n.blob && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || a(t)) ? this._bodyArrayBuffer = d(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, n.blob && (this.blob = function() {
            var t = p(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var t = p(this);
                return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
            }
            return this.blob().then(f)
        }), this.text = function() {
            var t, e, i, r = p(this);
            if (r) return r;
            if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, i = u(e), e.readAsText(t), i;
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for (var e = new Uint8Array(t), i = new Array(e.length), r = 0; r < e.length; r++) i[r] = String.fromCharCode(e[r]);
                return i.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, n.formData && (this.formData = function() {
            return this.text().then(v)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    c.prototype.append = function(t, e) {
        t = o(t), e = h(e);
        var i = this.map[t];
        this.map[t] = i ? i + ", " + e : e
    }, c.prototype.delete = function(t) {
        delete this.map[o(t)]
    }, c.prototype.get = function(t) {
        return t = o(t), this.has(t) ? this.map[t] : null
    }, c.prototype.has = function(t) {
        return this.map.hasOwnProperty(o(t))
    }, c.prototype.set = function(t, e) {
        this.map[o(t)] = h(e)
    }, c.prototype.forEach = function(t, e) {
        for (var i in this.map) this.map.hasOwnProperty(i) && t.call(e, this.map[i], i, this)
    }, c.prototype.keys = function() {
        var t = [];
        return this.forEach(function(e, i) {
            t.push(i)
        }), l(t)
    }, c.prototype.values = function() {
        var t = [];
        return this.forEach(function(e) {
            t.push(e)
        }), l(t)
    }, c.prototype.entries = function() {
        var t = [];
        return this.forEach(function(e, i) {
            t.push([i, e])
        }), l(t)
    }, n.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
    var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function g(t, e) {
        if (!(this instanceof g)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var i, r, n = (e = e || {}).body;
        if (t instanceof g) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new c(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new c(e.headers)), this.method = (i = e.method || this.method || "GET", r = i.toUpperCase(), y.indexOf(r) > -1 ? r : i), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(n), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
            var s = /([?&])_=[^&]*/;
            if (s.test(this.url)) this.url = this.url.replace(s, "$1_=" + (new Date).getTime());
            else {
                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
        }
    }

    function v(t) {
        var e = new FormData;
        return t.trim().split("&").forEach(function(t) {
            if (t) {
                var i = t.split("="),
                    r = i.shift().replace(/\+/g, " "),
                    n = i.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(r), decodeURIComponent(n))
            }
        }), e
    }

    function b(t, e) {
        if (!(this instanceof b)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === e.statusText ? "" : "" + e.statusText, this.headers = new c(e.headers), this.url = e.url || "", this._initBody(t)
    }
    g.prototype.clone = function() {
        return new g(this, {
            body: this._bodyInit
        })
    }, m.call(g.prototype), m.call(b.prototype), b.prototype.clone = function() {
        return new b(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new c(this.headers),
            url: this.url
        })
    }, b.error = function() {
        var t = new b(null, {
            status: 0,
            statusText: ""
        });
        return t.type = "error", t
    };
    var _ = [301, 302, 303, 307, 308];
    b.redirect = function(t, e) {
        if (-1 === _.indexOf(e)) throw new RangeError("Invalid status code");
        return new b(null, {
            status: e,
            headers: {
                location: t
            }
        })
    };
    var w = r.DOMException;
    try {
        new w
    } catch (t) {
        (w = function(t, e) {
            this.message = t, this.name = e;
            var i = Error(t);
            this.stack = i.stack
        }).prototype = Object.create(Error.prototype), w.prototype.constructor = w
    }

    function S(t, e) {
        return new Promise(function(i, s) {
            var a = new g(t, e);
            if (a.signal && a.signal.aborted) return s(new w("Aborted", "AbortError"));
            var o = new XMLHttpRequest;

            function l() {
                o.abort()
            }
            o.onload = function() {
                var t, e, r = {
                    status: o.status,
                    statusText: o.statusText,
                    headers: (t = o.getAllResponseHeaders() || "", e = new c, t.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(t) {
                        return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                    }).forEach(function(t) {
                        var i = t.split(":"),
                            r = i.shift().trim();
                        if (r) {
                            var n = i.join(":").trim();
                            e.append(r, n)
                        }
                    }), e)
                };
                r.url = "responseURL" in o ? o.responseURL : r.headers.get("X-Request-URL");
                var n = "response" in o ? o.response : o.responseText;
                setTimeout(function() {
                    i(new b(n, r))
                }, 0)
            }, o.onerror = function() {
                setTimeout(function() {
                    s(new TypeError("Network request failed"))
                }, 0)
            }, o.ontimeout = function() {
                setTimeout(function() {
                    s(new TypeError("Network request failed"))
                }, 0)
            }, o.onabort = function() {
                setTimeout(function() {
                    s(new w("Aborted", "AbortError"))
                }, 0)
            }, o.open(a.method, function(t) {
                try {
                    return "" === t && r.location.href ? r.location.href : t
                } catch (e) {
                    return t
                }
            }(a.url), !0), "include" === a.credentials ? o.withCredentials = !0 : "omit" === a.credentials && (o.withCredentials = !1), "responseType" in o && (n.blob ? o.responseType = "blob" : n.arrayBuffer && a.headers.get("Content-Type") && -1 !== a.headers.get("Content-Type").indexOf("application/octet-stream") && (o.responseType = "arraybuffer")), !e || "object" != typeof e.headers || e.headers instanceof c ? a.headers.forEach(function(t, e) {
                o.setRequestHeader(e, t)
            }) : Object.getOwnPropertyNames(e.headers).forEach(function(t) {
                o.setRequestHeader(t, h(e.headers[t]))
            }), a.signal && (a.signal.addEventListener("abort", l), o.onreadystatechange = function() {
                4 === o.readyState && a.signal.removeEventListener("abort", l)
            }), o.send(void 0 === a._bodyInit ? null : a._bodyInit)
        })
    }
    S.polyfill = !0, r.fetch || (r.fetch = S, r.Headers = c, r.Request = g, r.Response = b)
}, function(t, e) {
    ! function() {
        "use strict";
        if ("object" == typeof window)
            if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return this.intersectionRatio > 0
                }
            });
            else {
                var t = window.document,
                    e = [];
                r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(t) {
                    if (!this._observationTargets.some(function(e) {
                            return e.element == t
                        })) {
                        if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: t,
                            entry: null
                        }), this._monitorIntersections(), this._checkForIntersections()
                    }
                }, r.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter(function(e) {
                        return e.element != t
                    }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                }, r.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, r.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [], t
                }, r.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, i) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== i[e - 1]
                    })
                }, r.prototype._parseRootMargin = function(t) {
                    var e = (t || "0px").split(/\s+/).map(function(t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    });
                    return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                }, r.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(window, "resize", this._checkForIntersections, !0), n(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, r.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(window, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, r.prototype._checkForIntersections = function() {
                    var t = this._rootIsInDom(),
                        e = t ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                    this._observationTargets.forEach(function(r) {
                        var n = r.element,
                            s = a(n),
                            o = this._rootContainsTarget(n),
                            h = r.entry,
                            l = t && o && this._computeTargetAndRootIntersection(n, e),
                            c = r.entry = new i({
                                time: window.performance && performance.now && performance.now(),
                                target: n,
                                boundingClientRect: s,
                                rootBounds: e,
                                intersectionRect: l
                            });
                        h ? t && o ? this._hasCrossedThreshold(h, c) && this._queuedEntries.push(c) : h && h.isIntersecting && this._queuedEntries.push(c) : this._queuedEntries.push(c)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, r.prototype._computeTargetAndRootIntersection = function(e, i) {
                    if ("none" != window.getComputedStyle(e).display) {
                        for (var r, n, s, o, l, c, p, u, f = a(e), d = h(e), m = !1; !m;) {
                            var y = null,
                                g = 1 == d.nodeType ? window.getComputedStyle(d) : {};
                            if ("none" == g.display) return;
                            if (d == this.root || d == t ? (m = !0, y = i) : d != t.body && d != t.documentElement && "visible" != g.overflow && (y = a(d)), y && (r = y, n = f, void 0, void 0, void 0, void 0, void 0, void 0, s = Math.max(r.top, n.top), o = Math.min(r.bottom, n.bottom), l = Math.max(r.left, n.left), c = Math.min(r.right, n.right), u = o - s, !(f = (p = c - l) >= 0 && u >= 0 && {
                                    top: s,
                                    bottom: o,
                                    left: l,
                                    right: c,
                                    width: p,
                                    height: u
                                }))) break;
                            d = h(d)
                        }
                        return f
                    }
                }, r.prototype._getRootRect = function() {
                    var e;
                    if (this.root) e = a(this.root);
                    else {
                        var i = t.documentElement,
                            r = t.body;
                        e = {
                            top: 0,
                            left: 0,
                            right: i.clientWidth || r.clientWidth,
                            width: i.clientWidth || r.clientWidth,
                            bottom: i.clientHeight || r.clientHeight,
                            height: i.clientHeight || r.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(e)
                }, r.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map(function(e, i) {
                            return "px" == e.unit ? e.value : e.value * (i % 2 ? t.width : t.height) / 100
                        }),
                        i = {
                            top: t.top - e[0],
                            right: t.right + e[1],
                            bottom: t.bottom + e[2],
                            left: t.left - e[3]
                        };
                    return i.width = i.right - i.left, i.height = i.bottom - i.top, i
                }, r.prototype._hasCrossedThreshold = function(t, e) {
                    var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                        r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (i !== r)
                        for (var n = 0; n < this.thresholds.length; n++) {
                            var s = this.thresholds[n];
                            if (s == i || s == r || s < i != s < r) return !0
                        }
                }, r.prototype._rootIsInDom = function() {
                    return !this.root || o(t, this.root)
                }, r.prototype._rootContainsTarget = function(e) {
                    return o(this.root || t, e)
                }, r.prototype._registerInstance = function() {
                    e.indexOf(this) < 0 && e.push(this)
                }, r.prototype._unregisterInstance = function() {
                    var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
                }, window.IntersectionObserver = r, window.IntersectionObserverEntry = i
            }
        function i(t) {
            this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }, this.isIntersecting = !!t.intersectionRect;
            var e = this.boundingClientRect,
                i = e.width * e.height,
                r = this.intersectionRect,
                n = r.width * r.height;
            this.intersectionRatio = i ? Number((n / i).toFixed(4)) : this.isIntersecting ? 1 : 0
        }

        function r(t, e) {
            var i, r, n, s = e || {};
            if ("function" != typeof t) throw new Error("callback must be a function");
            if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
            this._checkForIntersections = (i = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, n = null, function() {
                n || (n = setTimeout(function() {
                    i(), n = null
                }, r))
            }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
                return t.value + t.unit
            }).join(" ")
        }

        function n(t, e, i, r) {
            "function" == typeof t.addEventListener ? t.addEventListener(e, i, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i)
        }

        function s(t, e, i, r) {
            "function" == typeof t.removeEventListener ? t.removeEventListener(e, i, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, i)
        }

        function a(t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (t) {}
            return e ? (e.width && e.height || (e = {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.right - e.left,
                height: e.bottom - e.top
            }), e) : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }

        function o(t, e) {
            for (var i = e; i;) {
                if (i == t) return !0;
                i = h(i)
            }
            return !1
        }

        function h(t) {
            var e = t.parentNode;
            return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode : e
        }
    }()
}, function(t, e, i) {
    "use strict";
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(t) {
            if (null == this) throw new TypeError("this is null or not defined");
            var e = Object(this),
                i = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var r = arguments[1], n = 0; n < i;) {
                var s = e[n];
                if (t.call(r, s, n, e)) return s;
                n++
            }
        }
    })
}, function(t, e, i) {
    var r = i(69);
    t.exports = r
}, function(t, e, i) {
    var r = i(70);
    t.exports = r
}, function(t, e, i) {
    var r = i(71);
    t.exports = r
}, function(t, e, i) {
    i(72), i(98);
    var r = i(108);
    t.exports = r.Array.from
}, function(t, e, i) {
    "use strict";
    var r = i(73).charAt,
        n = i(37),
        s = i(44),
        a = i(81),
        o = s.set,
        h = s.getterFor("String Iterator");
    a(String, "String", function(t) {
        o(this, {
            type: "String Iterator",
            string: n(t),
            index: 0
        })
    }, function() {
        var t, e = h(this),
            i = e.string,
            n = e.index;
        return n >= i.length ? {
            value: void 0,
            done: !0
        } : (t = r(i, n), e.index += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, i) {
    var r = i(3),
        n = i(20),
        s = i(37),
        a = i(26),
        o = r("".charAt),
        h = r("".charCodeAt),
        l = r("".slice),
        c = function(t) {
            return function(e, i) {
                var r, c, p = s(a(e)),
                    u = n(i),
                    f = p.length;
                return u < 0 || u >= f ? t ? "" : void 0 : (r = h(p, u)) < 55296 || r > 56319 || u + 1 === f || (c = h(p, u + 1)) < 56320 || c > 57343 ? t ? o(p, u) : r : t ? l(p, u, u + 2) : c - 56320 + (r - 55296 << 10) + 65536
            }
        };
    t.exports = {
        codeAt: c(!1),
        charAt: c(!0)
    }
}, function(t, e, i) {
    var r = {};
    r[i(7)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
}, function(t, e, i) {
    var r, n, s = i(0),
        a = i(76),
        o = s.process,
        h = s.Deno,
        l = o && o.versions || h && h.version,
        c = l && l.v8;
    c && (n = (r = c.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (n = +r[1]), t.exports = n
}, function(t, e, i) {
    var r = i(13);
    t.exports = r("navigator", "userAgent") || ""
}, function(t, e, i) {
    var r = i(0),
        n = i(2),
        s = i(27),
        a = r.WeakMap;
    t.exports = n(a) && /native code/.test(s(a))
}, function(t, e, i) {
    var r = i(0),
        n = i(11),
        s = i(14),
        a = i(48),
        o = i(29),
        h = i(80),
        l = i(7),
        c = r.TypeError,
        p = l("toPrimitive");
    t.exports = function(t, e) {
        if (!s(t) || a(t)) return t;
        var i, r = o(t, p);
        if (r) {
            if (void 0 === e && (e = "default"), i = n(r, t, e), !s(i) || a(i)) return i;
            throw c("Can't convert object to primitive value")
        }
        return void 0 === e && (e = "number"), h(t, e)
    }
}, function(t, e, i) {
    var r = i(3);
    t.exports = r({}.isPrototypeOf)
}, function(t, e, i) {
    var r = i(0),
        n = i(11),
        s = i(2),
        a = i(14),
        o = r.TypeError;
    t.exports = function(t, e) {
        var i, r;
        if ("string" === e && s(i = t.toString) && !a(r = n(i, t))) return r;
        if (s(i = t.valueOf) && !a(r = n(i, t))) return r;
        if ("string" !== e && s(i = t.toString) && !a(r = n(i, t))) return r;
        throw o("Can't convert object to primitive value")
    }
}, function(t, e, i) {
    "use strict";
    var r = i(33),
        n = i(11),
        s = i(22),
        a = i(51),
        o = i(2),
        h = i(91),
        l = i(56),
        c = i(96),
        p = i(57),
        u = i(15),
        f = i(34),
        d = i(7),
        m = i(18),
        y = i(55),
        g = a.PROPER,
        v = a.CONFIGURABLE,
        b = y.IteratorPrototype,
        _ = y.BUGGY_SAFARI_ITERATORS,
        w = d("iterator"),
        S = function() {
            return this
        };
    t.exports = function(t, e, i, a, d, y, E) {
        h(i, e, a);
        var x, P, T, A = function(t) {
                if (t === d && F) return F;
                if (!_ && t in k) return k[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new i(this, t)
                        }
                }
                return function() {
                    return new i(this)
                }
            },
            M = e + " Iterator",
            C = !1,
            k = t.prototype,
            D = k[w] || k["@@iterator"] || d && k[d],
            F = !_ && D || A(d),
            I = "Array" == e && k.entries || D;
        if (I && (x = l(I.call(new t))) !== Object.prototype && x.next && (s || l(x) === b || (c ? c(x, b) : o(x[w]) || f(x, w, S)), p(x, M, !0, !0), s && (m[M] = S)), g && "values" == d && D && "values" !== D.name && (!s && v ? u(k, "name", "values") : (C = !0, F = function() {
                return n(D, this)
            })), d)
            if (P = {
                    values: A("values"),
                    keys: y ? F : A("keys"),
                    entries: A("entries")
                }, E)
                for (T in P) !_ && !C && T in k || f(k, T, P[T]);
            else r({
                target: e,
                proto: !0,
                forced: _ || C
            }, P);
        return s && !E || k[w] === F || f(k, w, F, {
            name: d
        }), m[e] = F, P
    }
}, function(t, e, i) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        n = Object.getOwnPropertyDescriptor,
        s = n && !r.call({
            1: 2
        }, 1);
    e.f = s ? function(t) {
        var e = n(this, t);
        return !!e && e.enumerable
    } : r
}, function(t, e, i) {
    var r = i(0),
        n = i(3),
        s = i(6),
        a = i(43),
        o = r.Object,
        h = n("".split);
    t.exports = s(function() {
        return !o("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" == a(t) ? h(t, "") : o(t)
    } : o
}, function(t, e, i) {
    var r = i(8),
        n = i(85),
        s = i(50),
        a = i(12);
    t.exports = function(t, e, i) {
        for (var o = n(e), h = a.f, l = s.f, c = 0; c < o.length; c++) {
            var p = o[c];
            r(t, p) || i && r(i, p) || h(t, p, l(e, p))
        }
    }
}, function(t, e, i) {
    var r = i(13),
        n = i(3),
        s = i(86),
        a = i(89),
        o = i(9),
        h = n([].concat);
    t.exports = r("Reflect", "ownKeys") || function(t) {
        var e = s.f(o(t)),
            i = a.f;
        return i ? h(e, i(t)) : e
    }
}, function(t, e, i) {
    var r = i(52),
        n = i(35).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, n)
    }
}, function(t, e, i) {
    var r = i(20),
        n = Math.max,
        s = Math.min;
    t.exports = function(t, e) {
        var i = r(t);
        return i < 0 ? n(i + e, 0) : s(i, e)
    }
}, function(t, e, i) {
    var r = i(20),
        n = Math.min;
    t.exports = function(t) {
        return t > 0 ? n(r(t), 9007199254740991) : 0
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, i) {
    var r = i(6),
        n = i(2),
        s = /#|\.prototype\./,
        a = function(t, e) {
            var i = h[o(t)];
            return i == c || i != l && (n(e) ? r(e) : !!e)
        },
        o = a.normalize = function(t) {
            return String(t).replace(s, ".").toLowerCase()
        },
        h = a.data = {},
        l = a.NATIVE = "N",
        c = a.POLYFILL = "P";
    t.exports = a
}, function(t, e, i) {
    "use strict";
    var r = i(55).IteratorPrototype,
        n = i(36),
        s = i(16),
        a = i(57),
        o = i(18),
        h = function() {
            return this
        };
    t.exports = function(t, e, i, l) {
        var c = e + " Iterator";
        return t.prototype = n(r, {
            next: s(+!l, i)
        }), a(t, c, !1, !0), o[c] = h, t
    }
}, function(t, e, i) {
    var r = i(10),
        n = i(47),
        s = i(12),
        a = i(9),
        o = i(17),
        h = i(93);
    e.f = r && !n ? Object.defineProperties : function(t, e) {
        a(t);
        for (var i, r = o(e), n = h(e), l = n.length, c = 0; l > c;) s.f(t, i = n[c++], r[i]);
        return t
    }
}, function(t, e, i) {
    var r = i(52),
        n = i(35);
    t.exports = Object.keys || function(t) {
        return r(t, n)
    }
}, function(t, e, i) {
    var r = i(13);
    t.exports = r("document", "documentElement")
}, function(t, e, i) {
    var r = i(6);
    t.exports = !r(function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })
}, function(t, e, i) {
    var r = i(3),
        n = i(9),
        s = i(97);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
            i = {};
        try {
            (t = r(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(i, []), e = i instanceof Array
        } catch (t) {}
        return function(i, r) {
            return n(i), s(r), e ? t(i, r) : i.__proto__ = r, i
        }
    }() : void 0)
}, function(t, e, i) {
    var r = i(0),
        n = i(2),
        s = r.String,
        a = r.TypeError;
    t.exports = function(t) {
        if ("object" == typeof t || n(t)) return t;
        throw a("Can't set " + s(t) + " as a prototype")
    }
}, function(t, e, i) {
    var r = i(33),
        n = i(99);
    r({
        target: "Array",
        stat: !0,
        forced: !i(107)(function(t) {
            Array.from(t)
        })
    }, {
        from: n
    })
}, function(t, e, i) {
    "use strict";
    var r = i(0),
        n = i(100),
        s = i(11),
        a = i(25),
        o = i(101),
        h = i(103),
        l = i(104),
        c = i(54),
        p = i(105),
        u = i(106),
        f = i(58),
        d = r.Array;
    t.exports = function(t) {
        var e = a(t),
            i = l(this),
            r = arguments.length,
            m = r > 1 ? arguments[1] : void 0,
            y = void 0 !== m;
        y && (m = n(m, r > 2 ? arguments[2] : void 0));
        var g, v, b, _, w, S, E = f(e),
            x = 0;
        if (!E || this == d && h(E))
            for (g = c(e), v = i ? new this(g) : d(g); g > x; x++) S = y ? m(e[x], x) : e[x], p(v, x, S);
        else
            for (w = (_ = u(e, E)).next, v = i ? new this : []; !(b = s(w, _)).done; x++) S = y ? o(_, m, [b.value, x], !0) : b.value, p(v, x, S);
        return v.length = x, v
    }
}, function(t, e, i) {
    var r = i(3),
        n = i(30),
        s = i(19),
        a = r(r.bind);
    t.exports = function(t, e) {
        return n(t), void 0 === e ? t : s ? a(t, e) : function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, i) {
    var r = i(9),
        n = i(102);
    t.exports = function(t, e, i, s) {
        try {
            return s ? e(r(i)[0], i[1]) : e(i)
        } catch (e) {
            n(t, "throw", e)
        }
    }
}, function(t, e, i) {
    var r = i(11),
        n = i(9),
        s = i(29);
    t.exports = function(t, e, i) {
        var a, o;
        n(t);
        try {
            if (!(a = s(t, "return"))) {
                if ("throw" === e) throw i;
                return i
            }
            a = r(a, t)
        } catch (t) {
            o = !0, a = t
        }
        if ("throw" === e) throw i;
        if (o) throw a;
        return n(a), i
    }
}, function(t, e, i) {
    var r = i(7),
        n = i(18),
        s = r("iterator"),
        a = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (n.Array === t || a[s] === t)
    }
}, function(t, e, i) {
    var r = i(3),
        n = i(6),
        s = i(2),
        a = i(21),
        o = i(13),
        h = i(27),
        l = function() {},
        c = [],
        p = o("Reflect", "construct"),
        u = /^\s*(?:class|function)\b/,
        f = r(u.exec),
        d = !u.exec(l),
        m = function(t) {
            if (!s(t)) return !1;
            try {
                return p(l, c, t), !0
            } catch (t) {
                return !1
            }
        },
        y = function(t) {
            if (!s(t)) return !1;
            switch (a(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            try {
                return d || !!f(u, h(t))
            } catch (t) {
                return !0
            }
        };
    y.sham = !0, t.exports = !p || n(function() {
        var t;
        return m(m.call) || !m(Object) || !m(function() {
            t = !0
        }) || t
    }) ? y : m
}, function(t, e, i) {
    "use strict";
    var r = i(28),
        n = i(12),
        s = i(16);
    t.exports = function(t, e, i) {
        var a = r(e);
        a in t ? n.f(t, a, s(0, i)) : t[a] = i
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(11),
        s = i(30),
        a = i(9),
        o = i(49),
        h = i(58),
        l = r.TypeError;
    t.exports = function(t, e) {
        var i = arguments.length < 2 ? h(t) : e;
        if (s(i)) return a(n(i, t));
        throw l(o(t) + " is not iterable")
    }
}, function(t, e, i) {
    var r = i(7)("iterator"),
        n = !1;
    try {
        var s = 0,
            a = {
                next: function() {
                    return {
                        done: !!s++
                    }
                },
                return: function() {
                    n = !0
                }
            };
        a[r] = function() {
            return this
        }, Array.from(a, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !n) return !1;
        var i = !1;
        try {
            var s = {};
            s[r] = function() {
                return {
                    next: function() {
                        return {
                            done: i = !0
                        }
                    }
                }
            }, t(s)
        } catch (t) {}
        return i
    }
}, function(t, e, i) {
    var r = i(0);
    t.exports = r
}, function(t, e, i) {
    var r = i(110);
    t.exports = r
}, function(t, e, i) {
    var r = i(111);
    t.exports = r
}, function(t, e, i) {
    var r = i(112);
    t.exports = r
}, function(t, e, i) {
    i(113);
    var r = i(115);
    t.exports = r("Array", "includes")
}, function(t, e, i) {
    "use strict";
    var r = i(33),
        n = i(53).includes,
        s = i(114);
    r({
        target: "Array",
        proto: !0
    }, {
        includes: function(t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), s("includes")
}, function(t, e, i) {
    var r = i(7),
        n = i(36),
        s = i(12),
        a = r("unscopables"),
        o = Array.prototype;
    void 0 == o[a] && s.f(o, a, {
        configurable: !0,
        value: n(null)
    }), t.exports = function(t) {
        o[a][t] = !0
    }
}, function(t, e, i) {
    var r = i(0),
        n = i(3);
    t.exports = function(t, e) {
        return n(r[t].prototype[e])
    }
}, function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
        return dt
    });
    var r, n, s, a, o, h, l, c = i(59),
        p = {},
        u = 180 / Math.PI,
        f = Math.PI / 180,
        d = Math.atan2,
        m = /([A-Z])/g,
        y = /(?:left|right|width|margin|padding|x)/i,
        g = /[\s,\(]\S/,
        v = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        b = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        _ = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        w = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        S = function(t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        },
        E = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        x = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        P = function(t, e, i) {
            return t.style[e] = i
        },
        T = function(t, e, i) {
            return t.style.setProperty(e, i)
        },
        A = function(t, e, i) {
            return t._gsap[e] = i
        },
        M = function(t, e, i) {
            return t._gsap.scaleX = t._gsap.scaleY = i
        },
        C = function(t, e, i, r, n) {
            var s = t._gsap;
            s.scaleX = s.scaleY = i, s.renderTransform(n, s)
        },
        k = function(t, e, i, r, n) {
            var s = t._gsap;
            s[e] = i, s.renderTransform(n, s)
        },
        D = "transform",
        F = D + "Origin",
        I = function(t, e) {
            var i = n.createElementNS ? n.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : n.createElement(t);
            return i.style ? i : n.createElement(t)
        },
        O = function t(e, i, r) {
            var n = getComputedStyle(e);
            return n[i] || n.getPropertyValue(i.replace(m, "-$1").toLowerCase()) || n.getPropertyValue(i) || !r && t(e, L(i) || i, 1) || ""
        },
        R = "O,Moz,ms,Ms,Webkit".split(","),
        L = function(t, e, i) {
            var r = (e || o).style,
                n = 5;
            if (t in r && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(R[n] + t in r););
            return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? R[n] : "") + t
        },
        B = function() {
            "undefined" != typeof window && window.document && (r = window, n = r.document, s = n.documentElement, o = I("div") || {
                style: {}
            }, I("div"), D = L(D), F = D + "Origin", o.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", l = !!L("perspective"), a = 1)
        },
        V = function t(e) {
            var i, r = I("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                n = this.parentNode,
                a = this.nextSibling,
                o = this.style.cssText;
            if (s.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
            return n && (a ? n.insertBefore(this, a) : n.appendChild(this)), s.removeChild(r), this.style.cssText = o, i
        },
        z = function(t, e) {
            for (var i = e.length; i--;)
                if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
        },
        N = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (i) {
                e = V.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === V || (e = V.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +z(t, ["x", "cx", "x1"]) || 0,
                y: +z(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        j = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !N(t))
        },
        G = function(t, e) {
            if (e) {
                var i = t.style;
                e in p && e !== F && (e = D), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(m, "-$1").toLowerCase())) : i.removeAttribute(e)
            }
        },
        H = function(t, e, i, r, n, s) {
            var a = new c.b(t._pt, e, i, 0, 1, s ? x : E);
            return t._pt = a, a.b = r, a.e = n, t._props.push(i), a
        },
        q = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        W = function t(e, i, r, s) {
            var a, h, l, u, f = parseFloat(r) || 0,
                d = (r + "").trim().substr((f + "").length) || "px",
                m = o.style,
                g = y.test(i),
                v = "svg" === e.tagName.toLowerCase(),
                b = (v ? "client" : "offset") + (g ? "Width" : "Height"),
                _ = "px" === s,
                w = "%" === s;
            return s === d || !f || q[s] || q[d] ? f : ("px" !== d && !_ && (f = t(e, i, r, "px")), u = e.getCTM && j(e), !w && "%" !== d || !p[i] && !~i.indexOf("adius") ? (m[g ? "width" : "height"] = 100 + (_ ? d : s), h = ~i.indexOf("adius") || "em" === s && e.appendChild && !v ? e : e.parentNode, u && (h = (e.ownerSVGElement || {}).parentNode), h && h !== n && h.appendChild || (h = n.body), (l = h._gsap) && w && l.width && g && l.time === c.v.time ? Object(c.t)(f / l.width * 100) : ((w || "%" === d) && (m.position = O(e, "position")), h === e && (m.position = "static"), h.appendChild(o), a = o[b], h.removeChild(o), m.position = "absolute", g && w && ((l = Object(c.h)(h)).time = c.v.time, l.width = h[b]), Object(c.t)(_ ? a * f / 100 : a && f ? 100 / a * f : 0))) : (a = u ? e.getBBox()[g ? "width" : "height"] : e[b], Object(c.t)(w ? f / a * 100 : f / 100 * a)))
        },
        Y = function(t, e, i, r) {
            var n;
            return a || B(), e in v && "transform" !== e && ~(e = v[e]).indexOf(",") && (e = e.split(",")[0]), p[e] && "transform" !== e ? (n = rt(t, r), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : nt(O(t, F)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || r || ~(n + "").indexOf("calc(")) && (n = K[e] && K[e](t, e, i) || O(t, e) || Object(c.i)(t, e) || ("opacity" === e ? 1 : 0)), i && !~(n + "").trim().indexOf(" ") ? W(t, e, n, i) + i : n
        },
        X = function(t, e, i, r) {
            if (!i || "none" === i) {
                var n = L(e, t, 1),
                    s = n && O(t, n, 1);
                s && s !== i ? (e = n, i = s) : "borderColor" === e && (i = O(t, "borderTopColor"))
            }
            var a, o, h, l, p, u, f, d, m, y, g, v, b = new c.b(this._pt, t.style, e, 0, 1, c.r),
                _ = 0,
                w = 0;
            if (b.b = i, b.e = r, i += "", "auto" === (r += "") && (t.style[e] = r, r = O(t, e) || r, t.style[e] = i), a = [i, r], Object(c.e)(a), r = a[1], h = (i = a[0]).match(c.o) || [], (r.match(c.o) || []).length) {
                for (; o = c.o.exec(r);) f = o[0], m = r.substring(_, o.index), p ? p = (p + 1) % 5 : "rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5) || (p = 1), f !== (u = h[w++] || "") && (l = parseFloat(u) || 0, g = u.substr((l + "").length), (v = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) && (f = f.substr(2)), d = parseFloat(f), y = f.substr((d + "").length), _ = c.o.lastIndex - y.length, y || (y = y || c.f.units[e] || g, _ === r.length && (r += y, b.e += y)), g !== y && (l = W(t, e, u, y) || 0), b._pt = {
                    _next: b._pt,
                    p: m || 1 === w ? m : ",",
                    s: l,
                    c: v ? v * d : d - l,
                    m: p && p < 4 || "zIndex" === e ? Math.round : 0
                });
                b.c = _ < r.length ? r.substring(_, r.length) : ""
            } else b.r = "display" === e && "none" === r ? x : E;
            return c.q.test(r) && (b.e = 0), this._pt = b, b
        },
        U = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        $ = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i, r, n, s = e.t,
                    a = s.style,
                    o = e.u,
                    h = s._gsap;
                if ("all" === o || !0 === o) a.cssText = "", r = 1;
                else
                    for (n = (o = o.split(",")).length; --n > -1;) i = o[n], p[i] && (r = 1, i = "transformOrigin" === i ? F : D), G(s, i);
                r && (G(s, D), h && (h.svg && s.removeAttribute("transform"), rt(s, 1), h.uncache = 1))
            }
        },
        K = {
            clearProps: function(t, e, i, r, n) {
                if ("isFromStart" !== n.data) {
                    var s = t._pt = new c.b(t._pt, e, i, 0, 0, $);
                    return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1
                }
            }
        },
        Z = [1, 0, 0, 1, 0, 0],
        J = {},
        Q = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        tt = function(t) {
            var e = O(t, D);
            return Q(e) ? Z : e.substr(7).match(c.n).map(c.t)
        },
        et = function(t, e) {
            var i, r, n, a, o = t._gsap || Object(c.h)(t),
                h = t.style,
                l = tt(t);
            return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Z : l : (l !== Z || t.offsetParent || t === s || o.svg || (n = h.display, h.display = "block", (i = t.parentNode) && t.offsetParent || (a = 1, r = t.nextSibling, s.appendChild(t)), l = tt(t), n ? h.display = n : G(t, "display"), a && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : s.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        it = function(t, e, i, r, n, s) {
            var a, o, h, l = t._gsap,
                c = n || et(t, !0),
                p = l.xOrigin || 0,
                u = l.yOrigin || 0,
                f = l.xOffset || 0,
                d = l.yOffset || 0,
                m = c[0],
                y = c[1],
                g = c[2],
                v = c[3],
                b = c[4],
                _ = c[5],
                w = e.split(" "),
                S = parseFloat(w[0]) || 0,
                E = parseFloat(w[1]) || 0;
            i ? c !== Z && (o = m * v - y * g) && (h = S * (-y / o) + E * (m / o) - (m * _ - y * b) / o, S = S * (v / o) + E * (-g / o) + (g * _ - v * b) / o, E = h) : (S = (a = N(t)).x + (~w[0].indexOf("%") ? S / 100 * a.width : S), E = a.y + (~(w[1] || w[0]).indexOf("%") ? E / 100 * a.height : E)), r || !1 !== r && l.smooth ? (b = S - p, _ = E - u, l.xOffset = f + (b * m + _ * g) - b, l.yOffset = d + (b * y + _ * v) - _) : l.xOffset = l.yOffset = 0, l.xOrigin = S, l.yOrigin = E, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!i, t.style[F] = "0px 0px", s && (H(s, l, "xOrigin", p, S), H(s, l, "yOrigin", u, E), H(s, l, "xOffset", f, l.xOffset), H(s, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", S + " " + E)
        },
        rt = function(t, e) {
            var i = t._gsap || new c.a(t);
            if ("x" in i && !e && !i.uncache) return i;
            var r, n, s, a, o, h, p, m, y, g, v, b, _, w, S, E, x, P, T, A, M, C, k, I, R, L, B, V, z, N, G, H, q = t.style,
                W = i.scaleX < 0,
                Y = O(t, F) || "0";
            return r = n = s = h = p = m = y = g = v = 0, a = o = 1, i.svg = !(!t.getCTM || !j(t)), w = et(t, i.svg), i.svg && (I = (!i.uncache || "0px 0px" === Y) && !e && t.getAttribute("data-svg-origin"), it(t, I || Y, !!I || i.originIsAbsolute, !1 !== i.smooth, w)), b = i.xOrigin || 0, _ = i.yOrigin || 0, w !== Z && (P = w[0], T = w[1], A = w[2], M = w[3], r = C = w[4], n = k = w[5], 6 === w.length ? (a = Math.sqrt(P * P + T * T), o = Math.sqrt(M * M + A * A), h = P || T ? d(T, P) * u : 0, (y = A || M ? d(A, M) * u + h : 0) && (o *= Math.abs(Math.cos(y * f))), i.svg && (r -= b - (b * P + _ * A), n -= _ - (b * T + _ * M))) : (H = w[6], N = w[7], B = w[8], V = w[9], z = w[10], G = w[11], r = w[12], n = w[13], s = w[14], p = (S = d(H, z)) * u, S && (I = C * (E = Math.cos(-S)) + B * (x = Math.sin(-S)), R = k * E + V * x, L = H * E + z * x, B = C * -x + B * E, V = k * -x + V * E, z = H * -x + z * E, G = N * -x + G * E, C = I, k = R, H = L), m = (S = d(-A, z)) * u, S && (E = Math.cos(-S), G = M * (x = Math.sin(-S)) + G * E, P = I = P * E - B * x, T = R = T * E - V * x, A = L = A * E - z * x), h = (S = d(T, P)) * u, S && (I = P * (E = Math.cos(S)) + T * (x = Math.sin(S)), R = C * E + k * x, T = T * E - P * x, k = k * E - C * x, P = I, C = R), p && Math.abs(p) + Math.abs(h) > 359.9 && (p = h = 0, m = 180 - m), a = Object(c.t)(Math.sqrt(P * P + T * T + A * A)), o = Object(c.t)(Math.sqrt(k * k + H * H)), S = d(C, k), y = Math.abs(S) > 2e-4 ? S * u : 0, v = G ? 1 / (G < 0 ? -G : G) : 0), i.svg && (I = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Q(O(t, D)), I && t.setAttribute("transform", I))), Math.abs(y) > 90 && Math.abs(y) < 270 && (W ? (a *= -1, y += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (o *= -1, y += y <= 0 ? 180 : -180)), i.x = r - ((i.xPercent = r && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px", i.y = n - ((i.yPercent = n && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px", i.z = s + "px", i.scaleX = Object(c.t)(a), i.scaleY = Object(c.t)(o), i.rotation = Object(c.t)(h) + "deg", i.rotationX = Object(c.t)(p) + "deg", i.rotationY = Object(c.t)(m) + "deg", i.skewX = y + "deg", i.skewY = g + "deg", i.transformPerspective = v + "px", (i.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (q[F] = nt(Y)), i.xOffset = i.yOffset = 0, i.force3D = c.f.force3D, i.renderTransform = i.svg ? ht : l ? ot : at, i.uncache = 0, i
        },
        nt = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        st = function(t, e, i) {
            var r = Object(c.w)(e);
            return Object(c.t)(parseFloat(e) + parseFloat(W(t, "x", i + "px", r))) + r
        },
        at = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ot(t, e)
        },
        ot = function(t, e) {
            var i = e || this,
                r = i.xPercent,
                n = i.yPercent,
                s = i.x,
                a = i.y,
                o = i.z,
                h = i.rotation,
                l = i.rotationY,
                c = i.rotationX,
                p = i.skewX,
                u = i.skewY,
                d = i.scaleX,
                m = i.scaleY,
                y = i.transformPerspective,
                g = i.force3D,
                v = i.target,
                b = i.zOrigin,
                _ = "",
                w = "auto" === g && t && 1 !== t || !0 === g;
            if (b && ("0deg" !== c || "0deg" !== l)) {
                var S, E = parseFloat(l) * f,
                    x = Math.sin(E),
                    P = Math.cos(E);
                E = parseFloat(c) * f, S = Math.cos(E), s = st(v, s, x * S * -b), a = st(v, a, -Math.sin(E) * -b), o = st(v, o, P * S * -b + b)
            }
            "0px" !== y && (_ += "perspective(" + y + ") "), (r || n) && (_ += "translate(" + r + "%, " + n + "%) "), (w || "0px" !== s || "0px" !== a || "0px" !== o) && (_ += "0px" !== o || w ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "), "0deg" !== h && (_ += "rotate(" + h + ") "), "0deg" !== l && (_ += "rotateY(" + l + ") "), "0deg" !== c && (_ += "rotateX(" + c + ") "), "0deg" === p && "0deg" === u || (_ += "skew(" + p + ", " + u + ") "), 1 === d && 1 === m || (_ += "scale(" + d + ", " + m + ") "), v.style[D] = _ || "translate(0, 0)"
        },
        ht = function(t, e) {
            var i, r, n, s, a, o = e || this,
                h = o.xPercent,
                l = o.yPercent,
                p = o.x,
                u = o.y,
                d = o.rotation,
                m = o.skewX,
                y = o.skewY,
                g = o.scaleX,
                v = o.scaleY,
                b = o.target,
                _ = o.xOrigin,
                w = o.yOrigin,
                S = o.xOffset,
                E = o.yOffset,
                x = o.forceCSS,
                P = parseFloat(p),
                T = parseFloat(u);
            d = parseFloat(d), m = parseFloat(m), (y = parseFloat(y)) && (m += y = parseFloat(y), d += y), d || m ? (d *= f, m *= f, i = Math.cos(d) * g, r = Math.sin(d) * g, n = Math.sin(d - m) * -v, s = Math.cos(d - m) * v, m && (y *= f, a = Math.tan(m - y), n *= a = Math.sqrt(1 + a * a), s *= a, y && (a = Math.tan(y), i *= a = Math.sqrt(1 + a * a), r *= a)), i = Object(c.t)(i), r = Object(c.t)(r), n = Object(c.t)(n), s = Object(c.t)(s)) : (i = g, s = v, r = n = 0), (P && !~(p + "").indexOf("px") || T && !~(u + "").indexOf("px")) && (P = W(b, "x", p, "px"), T = W(b, "y", u, "px")), (_ || w || S || E) && (P = Object(c.t)(P + _ - (_ * i + w * n) + S), T = Object(c.t)(T + w - (_ * r + w * s) + E)), (h || l) && (a = b.getBBox(), P = Object(c.t)(P + h / 100 * a.width), T = Object(c.t)(T + l / 100 * a.height)), a = "matrix(" + i + "," + r + "," + n + "," + s + "," + P + "," + T + ")", b.setAttribute("transform", a), x && (b.style[D] = a)
        },
        lt = function(t, e, i, r, n, s) {
            var a, o, h = Object(c.k)(n),
                l = parseFloat(n) * (h && ~n.indexOf("rad") ? u : 1),
                p = s ? l * s : l - r,
                f = r + p + "deg";
            return h && ("short" === (a = n.split("_")[1]) && (p %= 360) !== p % 180 && (p += p < 0 ? 360 : -360), "cw" === a && p < 0 ? p = (p + 36e9) % 360 - 360 * ~~(p / 360) : "ccw" === a && p > 0 && (p = (p - 36e9) % 360 - 360 * ~~(p / 360))), t._pt = o = new c.b(t._pt, e, i, r, p, _), o.e = f, o.u = "deg", t._props.push(i), o
        },
        ct = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        },
        pt = function(t, e, i) {
            var r, n, s, a, o, h, l, u = ct({}, i._gsap),
                f = i.style;
            for (n in u.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), f[D] = e, r = rt(i, 1), G(i, D), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[D], f[D] = e, r = rt(i, 1), f[D] = s), p)(s = u[n]) !== (a = r[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Object(c.w)(s) !== (l = Object(c.w)(a)) ? W(i, n, s, l) : parseFloat(s), h = parseFloat(a), t._pt = new c.b(t._pt, r, n, o, h - o, b), t._pt.u = l || 0, t._props.push(n));
            ct(r, u)
        };
    /*!
     * CSSPlugin 3.9.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    Object(c.g)("padding,margin,Width,Radius", function(t, e) {
        var i = "Top",
            r = "Right",
            n = "Bottom",
            s = "Left",
            a = (e < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map(function(i) {
                return e < 2 ? t + i : "border" + i + t
            });
        K[e > 1 ? "border" + t : t] = function(t, e, i, r, n) {
            var s, o;
            if (arguments.length < 4) return s = a.map(function(e) {
                return Y(t, e, i)
            }), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
            s = (r + "").split(" "), o = {}, a.forEach(function(t, e) {
                return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }), t.init(e, o, n)
        }
    });
    var ut, ft, dt = {
        name: "css",
        register: B,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, i, r, n) {
            var s, o, h, l, u, f, d, m, y, _, E, x, P, T, A, M, C, k, F, I = this._props,
                O = t.style,
                R = i.vars.startAt;
            for (d in a || B(), e)
                if ("autoRound" !== d && (o = e[d], !c.p[d] || !Object(c.c)(d, e, i, r, t, n)))
                    if (u = typeof o, f = K[d], "function" === u && (u = typeof(o = o.call(i, r, t, n))), "string" === u && ~o.indexOf("random(") && (o = Object(c.s)(o)), f) f(this, t, d, o, i) && (A = 1);
                    else if ("--" === d.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(d) + "").trim(), o += "", c.d.lastIndex = 0, c.d.test(s) || (m = Object(c.w)(s), y = Object(c.w)(o)), y ? m !== y && (s = W(t, d, s, y) + y) : m && (o += m), this.add(O, "setProperty", s, o, r, n, 0, 0, d), I.push(d);
            else if ("undefined" !== u) {
                if (R && d in R ? (s = "function" == typeof R[d] ? R[d].call(i, r, t, n) : R[d], Object(c.k)(s) && ~s.indexOf("random(") && (s = Object(c.s)(s)), Object(c.w)(s + "") || (s += c.f.units[d] || Object(c.w)(Y(t, d)) || ""), "=" === (s + "").charAt(1) && (s = Y(t, d))) : s = Y(t, d), l = parseFloat(s), (_ = "string" === u && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)), h = parseFloat(o), d in v && ("autoAlpha" === d && (1 === l && "hidden" === Y(t, "visibility") && h && (l = 0), H(this, O, "visibility", l ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), "scale" !== d && "transform" !== d && ~(d = v[d]).indexOf(",") && (d = d.split(",")[0])), E = d in p)
                    if (x || ((P = t._gsap).renderTransform && !e.parseTransform || rt(t, e.parseTransform), T = !1 !== e.smoothOrigin && P.smooth, (x = this._pt = new c.b(this._pt, O, D, 0, 1, P.renderTransform, P, 0, -1)).dep = 1), "scale" === d) this._pt = new c.b(this._pt, P, "scaleY", P.scaleY, (_ ? _ * h : h - P.scaleY) || 0), I.push("scaleY", d), d += "X";
                    else {
                        if ("transformOrigin" === d) {
                            C = void 0, k = void 0, F = void 0, C = (M = o).split(" "), k = C[0], F = C[1] || "50%", "top" !== k && "bottom" !== k && "left" !== F && "right" !== F || (M = k, k = F, F = M), C[0] = U[k] || k, C[1] = U[F] || F, o = C.join(" "), P.svg ? it(t, o, 0, T, 0, this) : ((y = parseFloat(o.split(" ")[2]) || 0) !== P.zOrigin && H(this, P, "zOrigin", P.zOrigin, y), H(this, O, d, nt(s), nt(o)));
                            continue
                        }
                        if ("svgOrigin" === d) {
                            it(t, o, 1, T, 0, this);
                            continue
                        }
                        if (d in J) {
                            lt(this, P, d, l, o, _);
                            continue
                        }
                        if ("smoothOrigin" === d) {
                            H(this, P, "smooth", P.smooth, o);
                            continue
                        }
                        if ("force3D" === d) {
                            P[d] = o;
                            continue
                        }
                        if ("transform" === d) {
                            pt(this, o, t);
                            continue
                        }
                    }
                else d in O || (d = L(d) || d);
                if (E || (h || 0 === h) && (l || 0 === l) && !g.test(o) && d in O) m = (s + "").substr((l + "").length), h || (h = 0), m !== (y = Object(c.w)(o) || (d in c.f.units ? c.f.units[d] : m)) && (l = W(t, d, s, y)), this._pt = new c.b(this._pt, E ? P : O, d, l, _ ? _ * h : h - l, E || "px" !== y && "zIndex" !== d || !1 === e.autoRound ? b : S), this._pt.u = y || 0, m !== y && "%" !== y && (this._pt.b = s, this._pt.r = w);
                else if (d in O) X.call(this, t, d, s, o);
                else {
                    if (!(d in t)) {
                        Object(c.m)(d, o);
                        continue
                    }
                    this.add(t, d, s || t[d], o, r, n)
                }
                I.push(d)
            }
            A && Object(c.u)(this)
        },
        get: Y,
        aliases: v,
        getSetter: function(t, e, i) {
            var r = v[e];
            return r && r.indexOf(",") < 0 && (e = r), e in p && e !== F && (t._gsap.x || Y(t, "x")) ? i && h === i ? "scale" === e ? M : A : (h = i || {}) && ("scale" === e ? C : k) : t.style && !Object(c.l)(t.style[e]) ? P : ~e.indexOf("-") ? T : Object(c.j)(t, e)
        },
        core: {
            _removeProperty: G,
            _getMatrix: et
        }
    };
    c.x.utils.checkPrefix = L, ut = "rotation,rotationX,rotationY,skewX,skewY", ft = Object(c.g)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ut + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        p[t] = 1
    }), Object(c.g)(ut, function(t) {
        c.f.units[t] = "deg", J[t] = 1
    }), v[ft[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ut, Object(c.g)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        v[e[1]] = ft[e[0]]
    }), Object(c.g)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        c.f.units[t] = "px"
    }), c.x.registerPlugin(dt)
}, function(t, e, i) {
    (function(t) {
        "use strict";

        function e(t, e, i, r) {
            var n, s = !1,
                a = 0;

            function o() {
                n && clearTimeout(n)
            }

            function h() {
                for (var h = arguments.length, l = new Array(h), c = 0; c < h; c++) l[c] = arguments[c];
                var p = this,
                    u = Date.now() - a;

                function f() {
                    a = Date.now(), i.apply(p, l)
                }
                s || (r && !n && f(), o(), void 0 === r && u > t ? f() : !0 !== e && (n = setTimeout(r ? function() {
                    n = void 0
                } : f, void 0 === r ? t - u : t)))
            }
            return "boolean" != typeof e && (r = i, i = e, e = void 0), h.cancel = function() {
                o(), s = !0
            }, h
        }
        t.debounce = function(t, i, r) {
            return void 0 === r ? e(t, i, !1) : e(t, r, !1 !== i)
        }, t.throttle = e, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })(e)
}, function(t, e, i) {
    "use strict";
    var r = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
        }
        return t
    };
    e.a = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = c(),
            i = void 0,
            n = void 0,
            s = void 0,
            a = {
                normal: t.normal || "data-normal",
                retina: t.retina || "data-retina",
                srcset: t.srcset || "data-srcset",
                threshold: t.threshold || 0
            },
            o = document.body.classList.contains("srcset") || "srcset" in document.createElement("img"),
            h = window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI,
            l = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = Object.create(null);

                function i(t, i) {
                    return e[t] = e[t] || [], e[t].push(i), this
                }

                function n(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return i ? e[t].splice(e[t].indexOf(i), 1) : delete e[t], this
                }
                return r({}, t, {
                    on: i,
                    once: function(t, e) {
                        return e._once = !0, i(t, e), this
                    },
                    off: n,
                    emit: function(t) {
                        for (var i = this, r = arguments.length, s = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) s[a - 1] = arguments[a];
                        var o = e[t] && e[t].slice();
                        return o && o.forEach(function(e) {
                            e._once && n(t, e), e.apply(i, s)
                        }), this
                    }
                })
            }({
                handlers: function(t) {
                    var e = t ? "addEventListener" : "removeEventListener";
                    return ["scroll", "resize"].forEach(function(t) {
                        return window[e](t, p)
                    }), this
                },
                check: f,
                update: d
            });
        return l;

        function c() {
            return window.scrollY || window.pageYOffset
        }

        function p() {
            e = c(), i || (window.requestAnimationFrame(function() {
                return f()
            }), i = !0)
        }

        function u(t) {
            var i = e,
                r = i + s,
                n = function(t) {
                    return t.getBoundingClientRect().top + e
                }(t),
                o = n + t.offsetHeight,
                h = a.threshold / 100 * s;
            return o >= i - h && n <= r + h
        }

        function f() {
            return s = window.innerHeight, n.forEach(function(t) {
                return u(t) && function(t) {
                    if (l.emit("src:before", t), o && t.hasAttribute(a.srcset)) t.setAttribute("srcset", t.getAttribute(a.srcset));
                    else {
                        var e = h > 1 && t.getAttribute(a.retina);
                        t.setAttribute("src", e || t.getAttribute(a.normal))
                    }
                    l.emit("src:after", t), [a.normal, a.retina, a.srcset].forEach(function(e) {
                        return t.removeAttribute(e)
                    }), d()
                }(t)
            }), i = !1, this
        }

        function d() {
            return n = Array.prototype.slice.call(document.querySelectorAll("[" + a.normal + "]")), this
        }
    }
}, function(t, e, i) {
    "use strict";
    (function(t) {
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function n(t, e, i) {
            return e && r(t.prototype, e), i && r(t, i), t
        }

        function s(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function a(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), i.push.apply(i, r)
            }
            return i
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(i), !0).forEach(function(e) {
                    s(t, e, i[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                })
            }
            return t
        }

        function h(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }

        function l(t) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function c(t, e) {
            return (c = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function p(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function u(t, e) {
            return !e || "object" != typeof e && "function" != typeof e ? p(t) : e
        }

        function f(t, e, i) {
            return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var r = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)););
                    return t
                }(t, e);
                if (r) {
                    var n = Object.getOwnPropertyDescriptor(r, e);
                    return n.get ? n.get.call(i) : n.value
                }
            })(t, e, i || t)
        }

        function d(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                    return i
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var m = {
                el: document,
                elMobile: document,
                name: "scroll",
                offset: [0, 0],
                repeat: !1,
                smooth: !1,
                smoothMobile: !1,
                direction: "vertical",
                lerp: .1,
                class: "is-inview",
                scrollbarContainer: !1,
                scrollbarClass: "c-scrollbar",
                scrollingClass: "has-scroll-scrolling",
                draggingClass: "has-scroll-dragging",
                smoothClass: "has-scroll-smooth",
                initClass: "has-scroll-init",
                getSpeed: !1,
                getDirection: !1,
                multiplier: 1,
                firefoxMultiplier: 50,
                touchMultiplier: 2,
                scrollFromAnywhere: !1
            },
            y = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, t), Object.assign(this, m, e), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowMiddle = this.windowHeight / 2, this.els = [], this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                        scroll: {
                            x: 0,
                            y: 0
                        },
                        limit: this.html.offsetHeight
                    }, this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
                }
                return n(t, [{
                    key: "init",
                    value: function() {
                        this.initEvents()
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        this.dispatchScroll()
                    }
                }, {
                    key: "checkResize",
                    value: function() {
                        var t = this;
                        this.resizeTick || (this.resizeTick = !0, requestAnimationFrame(function() {
                            t.resize(), t.resizeTick = !1
                        }))
                    }
                }, {
                    key: "resize",
                    value: function() {}
                }, {
                    key: "initEvents",
                    value: function() {
                        var t = this;
                        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach(function(e) {
                            e.addEventListener("click", t.setScrollTo, !1)
                        })
                    }
                }, {
                    key: "setScrollTo",
                    value: function(t) {
                        t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), t.currentTarget.getAttribute("data-".concat(this.name, "-offset")))
                    }
                }, {
                    key: "addElements",
                    value: function() {}
                }, {
                    key: "detectElements",
                    value: function(t) {
                        var e = this,
                            i = this.instance.scroll.y,
                            r = i + this.windowHeight;
                        this.els.forEach(function(n, s) {
                            !n || n.inView && !t || r >= n.top && i < n.bottom && e.setInView(n, s), n && n.inView && (r < n.top || i > n.bottom) && e.setOutOfView(n, s)
                        }), this.els = this.els.filter(function(t, e) {
                            return null !== t
                        }), this.hasScrollTicking = !1
                    }
                }, {
                    key: "setInView",
                    value: function(t, e) {
                        this.els[e].inView = !0, t.el.classList.add(t.class), t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1)), t.repeat || t.speed || t.sticky || (!t.call || t.call && this.hasCallEventSet) && (this.els[e] = null)
                    }
                }, {
                    key: "setOutOfView",
                    value: function(t, e) {
                        (t.repeat || void 0 !== t.speed) && (this.els[e].inView = !1), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
                    }
                }, {
                    key: "dispatchCall",
                    value: function(t, e) {
                        this.callWay = e, this.callValue = t.call.split(",").map(function(t) {
                            return t.trim()
                        }), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                        var i = new Event(this.namespace + "call");
                        this.el.dispatchEvent(i)
                    }
                }, {
                    key: "dispatchScroll",
                    value: function() {
                        var t = new Event(this.namespace + "scroll");
                        this.el.dispatchEvent(t)
                    }
                }, {
                    key: "setEvents",
                    value: function(t, e) {
                        this.listeners[t] || (this.listeners[t] = []);
                        var i = this.listeners[t];
                        i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
                    }
                }, {
                    key: "unsetEvents",
                    value: function(t, e) {
                        if (this.listeners[t]) {
                            var i = this.listeners[t],
                                r = i.indexOf(e);
                            r < 0 || (i.splice(r, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                        }
                    }
                }, {
                    key: "checkEvent",
                    value: function(t) {
                        var e = this,
                            i = t.type.replace(this.namespace, ""),
                            r = this.listeners[i];
                        r && 0 !== r.length && r.forEach(function(t) {
                            switch (i) {
                                case "scroll":
                                    return t(e.instance);
                                case "call":
                                    return t(e.callValue, e.callWay, e.callObj);
                                default:
                                    return t()
                            }
                        })
                    }
                }, {
                    key: "startScroll",
                    value: function() {}
                }, {
                    key: "stopScroll",
                    value: function() {}
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.instance.scroll = {
                            x: 0,
                            y: 0
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach(function(e) {
                            t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                        }), this.listeners = {}, this.scrollToEls.forEach(function(e) {
                            e.removeEventListener("click", t.setScrollTo, !1)
                        })
                    }
                }]), t
            }(),
            g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

        function v(t, e) {
            return t(e = {
                exports: {}
            }, e.exports), e.exports
        }
        var b = v(function(t, e) {
                ! function() {
                    t.exports = {
                        polyfill: function() {
                            var t = window,
                                e = document;
                            if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                                var i, r = t.HTMLElement || t.Element,
                                    n = 468,
                                    s = {
                                        scroll: t.scroll || t.scrollTo,
                                        scrollBy: t.scrollBy,
                                        elementScroll: r.prototype.scroll || h,
                                        scrollIntoView: r.prototype.scrollIntoView
                                    },
                                    a = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                    o = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                                t.scroll = t.scrollTo = function() {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? d.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : s.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                                }, t.scrollBy = function() {
                                    void 0 !== arguments[0] && (l(arguments[0]) ? s.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : d.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                                }, r.prototype.scroll = r.prototype.scrollTo = function() {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== l(arguments[0])) {
                                            var t = arguments[0].left,
                                                e = arguments[0].top;
                                            d.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                        } else {
                                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                            s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }, r.prototype.scrollBy = function() {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }, r.prototype.scrollIntoView = function() {
                                    if (!0 !== l(arguments[0])) {
                                        var i = function(t) {
                                                for (; t !== e.body && !1 === u(t);) t = t.parentNode || t.host;
                                                return t
                                            }(this),
                                            r = i.getBoundingClientRect(),
                                            n = this.getBoundingClientRect();
                                        i !== e.body ? (d.call(this, i, i.scrollLeft + n.left - r.left, i.scrollTop + n.top - r.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                            left: r.left,
                                            top: r.top,
                                            behavior: "smooth"
                                        })) : t.scrollBy({
                                            left: n.left,
                                            top: n.top,
                                            behavior: "smooth"
                                        })
                                    } else s.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                            }

                            function h(t, e) {
                                this.scrollLeft = t, this.scrollTop = e
                            }

                            function l(t) {
                                if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                                if ("object" == typeof t && "smooth" === t.behavior) return !1;
                                throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                            }

                            function c(t, e) {
                                return "Y" === e ? t.clientHeight + o < t.scrollHeight : "X" === e ? t.clientWidth + o < t.scrollWidth : void 0
                            }

                            function p(e, i) {
                                var r = t.getComputedStyle(e, null)["overflow" + i];
                                return "auto" === r || "scroll" === r
                            }

                            function u(t) {
                                var e = c(t, "Y") && p(t, "Y"),
                                    i = c(t, "X") && p(t, "X");
                                return e || i
                            }

                            function f(e) {
                                var i, r, s, o, h = (a() - e.startTime) / n;
                                o = h = h > 1 ? 1 : h, i = .5 * (1 - Math.cos(Math.PI * o)), r = e.startX + (e.x - e.startX) * i, s = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, r, s), r === e.x && s === e.y || t.requestAnimationFrame(f.bind(t, e))
                            }

                            function d(i, r, n) {
                                var o, l, c, p, u = a();
                                i === e.body ? (o = t, l = t.scrollX || t.pageXOffset, c = t.scrollY || t.pageYOffset, p = s.scroll) : (o = i, l = i.scrollLeft, c = i.scrollTop, p = h), f({
                                    scrollable: o,
                                    method: p,
                                    startTime: u,
                                    startX: l,
                                    startY: c,
                                    x: r,
                                    y: n
                                })
                            }
                        }
                    }
                }()
            }),
            _ = (b.polyfill, function(t) {
                function e() {
                    var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return i(this, e), t = u(this, l(e).call(this, r)), window.addEventListener("scroll", t.checkScroll, !1), b.polyfill(), t
                }
                return h(e, t), n(e, [{
                    key: "init",
                    value: function() {
                        this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), f(l(e.prototype), "init", this).call(this)
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var t = this;
                        f(l(e.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.timestamp = Date.now()), this.instance.scroll.y = window.pageYOffset, this.els.length && (this.hasScrollTicking || (requestAnimationFrame(function() {
                            t.detectElements()
                        }), this.hasScrollTicking = !0))
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / (Date.now() - this.timestamp) : this.instance.speed = 0
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.els.length && (this.windowHeight = window.innerHeight, this.updateElements())
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var t = this;
                        this.els = [], this.el.querySelectorAll("[data-" + this.name + "]").forEach(function(e, i) {
                            var r = e.dataset[t.name + "Class"] || t.class,
                                n = e.getBoundingClientRect().top + t.instance.scroll.y,
                                s = n + e.offsetHeight,
                                a = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                o = e.dataset[t.name + "Repeat"],
                                h = e.dataset[t.name + "Call"];
                            o = "false" != o && (void 0 != o || t.repeat);
                            var l = t.getRelativeOffset(a),
                                c = {
                                    el: e,
                                    id: i,
                                    class: r,
                                    top: n + l[0],
                                    bottom: s - l[1],
                                    offset: a,
                                    repeat: o,
                                    inView: !!e.classList.contains(r),
                                    call: h
                                };
                            t.els.push(c)
                        })
                    }
                }, {
                    key: "updateElements",
                    value: function() {
                        var t = this;
                        this.els.forEach(function(e, i) {
                            var r = e.el.getBoundingClientRect().top + t.instance.scroll.y,
                                n = r + e.el.offsetHeight,
                                s = t.getRelativeOffset(e.offset);
                            t.els[i].top = r + s[0], t.els[i].bottom = n - s[1]
                        }), this.hasScrollTicking = !1
                    }
                }, {
                    key: "getRelativeOffset",
                    value: function(t) {
                        var e = [0, 0];
                        if (t)
                            for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                        return e
                    }
                }, {
                    key: "scrollTo",
                    value: function(t, e, i, r, n, s) {
                        var a, o = e ? parseInt(e) : 0;
                        if ("string" == typeof t) {
                            if ("top" === t) a = this.html;
                            else if ("bottom" === t) a = this.html.offsetHeight - window.innerHeight;
                            else if (!(a = document.querySelector(t))) return
                        } else if ("number" == typeof t) a = parseInt(t);
                        else {
                            if (!t || !t.tagName) return;
                            a = t
                        }
                        if (o = "number" != typeof a ? a.getBoundingClientRect().top + o + this.instance.scroll.y : a + o, s) {
                            o = o.toFixed();
                            window.addEventListener("scroll", function t() {
                                window.pageYOffset.toFixed() === o && (window.removeEventListener("scroll", t), s())
                            })
                        }
                        window.scrollTo({
                            top: o,
                            behavior: "smooth"
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.addElements(), this.detectElements()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        f(l(e.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
                    }
                }]), e
            }(y)),
            w = Object.getOwnPropertySymbols,
            S = Object.prototype.hasOwnProperty,
            E = Object.prototype.propertyIsEnumerable;
        var x = function() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    r[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var i, r, n = function(t) {
                    if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t)
                }(t), s = 1; s < arguments.length; s++) {
                for (var a in i = Object(arguments[s])) S.call(i, a) && (n[a] = i[a]);
                if (w) {
                    r = w(i);
                    for (var o = 0; o < r.length; o++) E.call(i, r[o]) && (n[r[o]] = i[r[o]])
                }
            }
            return n
        };

        function P() {}
        P.prototype = {
            on: function(t, e, i) {
                var r = this.e || (this.e = {});
                return (r[t] || (r[t] = [])).push({
                    fn: e,
                    ctx: i
                }), this
            },
            once: function(t, e, i) {
                var r = this;

                function n() {
                    r.off(t, n), e.apply(i, arguments)
                }
                return n._ = e, this.on(t, n, i)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, n = i.length; r < n; r++) i[r].fn.apply(i[r].ctx, e);
                return this
            },
            off: function(t, e) {
                var i = this.e || (this.e = {}),
                    r = i[t],
                    n = [];
                if (r && e)
                    for (var s = 0, a = r.length; s < a; s++) r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
                return n.length ? i[t] = n : delete i[t], this
            }
        };
        var T = P,
            A = v(function(t, e) {
                (function() {
                    (null !== e ? e : this).Lethargy = function() {
                        function t(t, e, i, r) {
                            this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != r ? r : 150, this.lastUpDeltas = function() {
                                var t, e, i;
                                for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                return i
                            }.call(this), this.lastDownDeltas = function() {
                                var t, e, i;
                                for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                return i
                            }.call(this), this.deltasTimestamp = function() {
                                var t, e, i;
                                for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                return i
                            }.call(this)
                        }
                        return t.prototype.check = function(t) {
                            var e;
                            return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                        }, t.prototype.isInertia = function(t) {
                            var e, i, r, n, s, a, o;
                            return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (r = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), o = r.reduce(function(t, e) {
                                return t + e
                            }), s = i.reduce(function(t, e) {
                                return t + e
                            }), a = o / r.length, n = s / i.length, Math.abs(a) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                        }, t.prototype.showLastUpDeltas = function() {
                            return this.lastUpDeltas
                        }, t.prototype.showLastDownDeltas = function() {
                            return this.lastDownDeltas
                        }, t
                    }()
                }).call(g)
            }),
            M = {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: navigator.userAgent.indexOf("Firefox") > -1
            },
            C = Object.prototype.toString,
            k = Object.prototype.hasOwnProperty,
            D = function(t) {
                if (t) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    if (0 === e.length)
                        for (var i in t) k.call(t, i) && "function" == typeof t[i] && "[object Function]" == C.call(t[i]) && e.push(i);
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        t[n] = F(t[n], t)
                    }
                }
            };

        function F(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var I = A.Lethargy,
            O = "virtualscroll",
            R = j,
            L = 37,
            B = 38,
            V = 39,
            z = 40,
            N = 32;

        function j(t) {
            D(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = x({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0
            }, t), this.options.limitInertia && (this._lethargy = new I), this._emitter = new T, this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
        }

        function G(t, e, i) {
            return (1 - i) * t + i * e
        }

        function H(t) {
            var e = {};
            if (window.getComputedStyle) {
                var i = getComputedStyle(t),
                    r = i.transform || i.webkitTransform || i.mozTransform,
                    n = r.match(/^matrix3d\((.+)\)$/);
                return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0, e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = r.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0), e
            }
        }

        function q(t) {
            for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
            return e
        }
        j.prototype._notify = function(t) {
            var e = this._event;
            e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(O, {
                x: e.x,
                y: e.y,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                originalEvent: t
            })
        }, j.prototype._onWheel = function(t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                var i = this._event;
                i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, M.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
            }
        }, j.prototype._onMouseWheel = function(t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                var e = this._event;
                e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
            }
        }, j.prototype._onTouchStart = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStartX = e.pageX, this.touchStartY = e.pageY
        }, j.prototype._onTouchMove = function(t) {
            var e = this.options;
            e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
            var i = this._event,
                r = t.targetTouches ? t.targetTouches[0] : t;
            i.deltaX = (r.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (r.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = r.pageX, this.touchStartY = r.pageY, this._notify(t)
        }, j.prototype._onKeyDown = function(t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var i = window.innerHeight - 40;
            switch (t.keyCode) {
                case L:
                case B:
                    e.deltaY = this.options.keyStep;
                    break;
                case V:
                case z:
                    e.deltaY = -this.options.keyStep;
                    break;
                case t.shiftKey:
                    e.deltaY = i;
                    break;
                case N:
                    e.deltaY = -i;
                    break;
                default:
                    return
            }
            this._notify(t)
        }, j.prototype._bind = function() {
            M.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), M.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), M.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), M.hasPointer && M.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }, j.prototype._unbind = function() {
            M.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), M.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), M.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), M.hasPointer && M.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }, j.prototype.on = function(t, e) {
            this._emitter.on(O, t, e);
            var i = this._emitter.e;
            i && i[O] && 1 === i[O].length && this._bind()
        }, j.prototype.off = function(t, e) {
            this._emitter.off(O, t, e);
            var i = this._emitter.e;
            (!i[O] || i[O].length <= 0) && this._unbind()
        }, j.prototype.reset = function() {
            var t = this._event;
            t.x = 0, t.y = 0
        }, j.prototype.destroy = function() {
            this._emitter.off(), this._unbind()
        };
        var W = 4,
            Y = .001,
            X = 1e-7,
            U = 10,
            $ = 11,
            K = 1 / ($ - 1),
            Z = "function" == typeof Float32Array;

        function J(t, e) {
            return 1 - 3 * e + 3 * t
        }

        function Q(t, e) {
            return 3 * e - 6 * t
        }

        function tt(t) {
            return 3 * t
        }

        function et(t, e, i) {
            return ((J(e, i) * t + Q(e, i)) * t + tt(e)) * t
        }

        function it(t, e, i) {
            return 3 * J(e, i) * t * t + 2 * Q(e, i) * t + tt(e)
        }

        function rt(t) {
            return t
        }
        var nt = function(t, e, i, r) {
                if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                if (t === e && i === r) return rt;
                for (var n = Z ? new Float32Array($) : new Array($), s = 0; s < $; ++s) n[s] = et(s * K, t, i);

                function a(e) {
                    for (var r = 0, s = 1, a = $ - 1; s !== a && n[s] <= e; ++s) r += K;
                    var o = r + (e - n[--s]) / (n[s + 1] - n[s]) * K,
                        h = it(o, t, i);
                    return h >= Y ? function(t, e, i, r) {
                        for (var n = 0; n < W; ++n) {
                            var s = it(e, i, r);
                            if (0 === s) return e;
                            e -= (et(e, i, r) - t) / s
                        }
                        return e
                    }(e, o, t, i) : 0 === h ? o : function(t, e, i, r, n) {
                        var s, a, o = 0;
                        do {
                            (s = et(a = e + (i - e) / 2, r, n) - t) > 0 ? i = a : e = a
                        } while (Math.abs(s) > X && ++o < U);
                        return a
                    }(e, r, r + K, t, i)
                }
                return function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : et(a(t), e, r)
                }
            },
            st = 38,
            at = 40,
            ot = 32,
            ht = 9,
            lt = 33,
            ct = 34,
            pt = 36,
            ut = 35,
            ft = function(t) {
                function e() {
                    var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return i(this, e), window.scrollTo(0, 0), history.scrollRestoration = "manual", (t = u(this, l(e).call(this, r))).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = [], t.stop = !1, t.scrollbarContainer = r.scrollbarContainer, t.checkKey = t.checkKey.bind(p(t)), window.addEventListener("keydown", t.checkKey, !1), t
                }
                return h(e, t), n(e, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this.html.classList.add(this.smoothClass), this.instance = o({
                            delta: {
                                x: 0,
                                y: 0
                            }
                        }, this.instance), this.vs = new R({
                            el: this.scrollFromAnywhere ? document : this.el,
                            mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                            firefoxMultiplier: this.firefoxMultiplier,
                            touchMultiplier: this.touchMultiplier,
                            useKeyboard: !1,
                            passive: !0
                        }), this.vs.on(function(e) {
                            t.stop || (t.isTicking || t.isDraggingScrollbar || (requestAnimationFrame(function() {
                                t.updateDelta(e), t.isScrolling || t.startScrolling()
                            }), t.isTicking = !0), t.isTicking = !1)
                        }), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.detectElements(), this.transformElements(!0, !0), this.checkScroll(!0), f(l(e.prototype), "init", this).call(this)
                    }
                }, {
                    key: "setScrollLimit",
                    value: function() {
                        this.instance.limit = this.el.offsetHeight - this.windowHeight
                    }
                }, {
                    key: "startScrolling",
                    value: function() {
                        this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                    }
                }, {
                    key: "stopScrolling",
                    value: function() {
                        this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
                    }
                }, {
                    key: "checkKey",
                    value: function(t) {
                        var e = this;
                        if (this.stop) t.keyCode == ht && requestAnimationFrame(function() {
                            e.html.scrollTop = 0, document.body.scrollTop = 0
                        });
                        else {
                            switch (t.keyCode) {
                                case ht:
                                    requestAnimationFrame(function() {
                                        e.html.scrollTop = 0, document.body.scrollTop = 0, e.scrollTo(document.activeElement, -window.innerHeight / 2)
                                    });
                                    break;
                                case st:
                                    this.instance.delta.y -= 240;
                                    break;
                                case at:
                                    this.instance.delta.y += 240;
                                    break;
                                case lt:
                                    this.instance.delta.y -= window.innerHeight;
                                    break;
                                case ct:
                                    this.instance.delta.y += window.innerHeight;
                                    break;
                                case pt:
                                    this.instance.delta.y -= this.instance.limit;
                                    break;
                                case ut:
                                    this.instance.delta.y += this.instance.limit;
                                    break;
                                case ot:
                                    document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta.y -= window.innerHeight : this.instance.delta.y += window.innerHeight);
                                    break;
                                default:
                                    return
                            }
                            this.instance.delta.y < 0 && (this.instance.delta.y = 0), this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                        }
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var t = this;
                        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || this.isScrolling || this.isDraggingScrollbar) {
                            this.hasScrollTicking || (requestAnimationFrame(function() {
                                return t.checkScroll()
                            }), this.hasScrollTicking = !0), this.updateScroll();
                            var i = Math.abs(this.instance.delta.y - this.instance.scroll.y);
                            !this.animatingScroll && (i < .5 && 0 != this.instance.delta.y || i < .5 && 0 == this.instance.delta.y) && this.stopScrolling();
                            for (var r = this.sections.length - 1; r >= 0; r--) this.sections[r].persistent || this.instance.scroll.y > this.sections[r].offset && this.instance.scroll.y < this.sections[r].limit ? (this.transform(this.sections[r].el, 0, -this.instance.scroll.y), this.sections[r].inView || (this.sections[r].inView = !0, this.sections[r].el.style.opacity = 1, this.sections[r].el.style.pointerEvents = "all", this.sections[r].el.setAttribute("data-".concat(this.name, "-section-inview"), ""))) : (this.sections[r].inView && (this.sections[r].inView = !1, this.sections[r].el.style.opacity = 0, this.sections[r].el.style.pointerEvents = "none", this.sections[r].el.removeAttribute("data-".concat(this.name, "-section-inview"))), this.transform(this.sections[r].el, 0, 0));
                            this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.timestamp = Date.now()), this.detectElements(), this.transformElements();
                            var n = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
                            this.transform(this.scrollbarThumb, 0, n), f(l(e.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
                        }
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.windowHeight = window.innerHeight, this.windowMiddle = this.windowHeight / 2, this.update()
                    }
                }, {
                    key: "updateDelta",
                    value: function(t) {
                        this.instance.delta.y -= t.deltaY * this.multiplier, this.instance.delta.y < 0 && (this.instance.delta.y = 0), this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit)
                    }
                }, {
                    key: "updateScroll",
                    value: function(t) {
                        this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll.y = G(this.instance.scroll.y, this.instance.delta.y, this.lerp) : this.instance.scroll.y > this.instance.limit ? this.setScroll(this.instance.scroll.x, this.instance.limit) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll.x, 0) : this.setScroll(this.instance.scroll.x, this.instance.delta.y)
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        this.instance.delta.y != this.instance.scroll.y ? this.instance.speed = (this.instance.delta.y - this.instance.scroll.y) / Math.max(1, Date.now() - this.timestamp) : this.instance.speed = 0
                    }
                }, {
                    key: "initScrollBar",
                    value: function() {
                        this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.instance.limit + this.windowHeight <= this.windowHeight || (this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"), this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height)
                    }
                }, {
                    key: "reinitScrollBar",
                    value: function() {
                        this.instance.limit + this.windowHeight <= this.windowHeight || (this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"), this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height)
                    }
                }, {
                    key: "destroyScrollBar",
                    value: function() {
                        this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
                    }
                }, {
                    key: "getScrollBar",
                    value: function(t) {
                        this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
                    }
                }, {
                    key: "releaseScrollBar",
                    value: function(t) {
                        this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
                    }
                }, {
                    key: "moveScrollBar",
                    value: function(t) {
                        var e = this;
                        !this.isTicking && this.isDraggingScrollbar && (requestAnimationFrame(function() {
                            var i = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit / 100;
                            i > 0 && i < e.instance.limit && (e.instance.delta.y = i)
                        }), this.isTicking = !0), this.isTicking = !1
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var t = this;
                        this.els = [], this.parallaxElements = [], this.sections.forEach(function(e, i) {
                            t.sections[i].el.querySelectorAll("[data-".concat(t.name, "]")).forEach(function(e, r) {
                                var n, s, a = e.dataset[t.name + "Class"] || t.class,
                                    o = e.dataset[t.name + "Repeat"],
                                    h = e.dataset[t.name + "Call"],
                                    l = e.dataset[t.name + "Position"],
                                    c = e.dataset[t.name + "Delay"],
                                    p = e.dataset[t.name + "Direction"],
                                    u = "string" == typeof e.dataset[t.name + "Sticky"],
                                    f = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                                    d = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                    m = e.dataset[t.name + "Target"];
                                s = void 0 !== m ? document.querySelector("".concat(m)) : e;
                                var y = (n = t.sections[i].inView ? s.getBoundingClientRect().top + t.instance.scroll.y - H(s).y : s.getBoundingClientRect().top - H(t.sections[i].el).y - H(s).y) + s.offsetHeight,
                                    g = (y - n) / 2 + n;
                                if (u) {
                                    var v = e.getBoundingClientRect().top,
                                        b = v - n;
                                    n += window.innerHeight, g = ((y = v + s.offsetHeight - e.offsetHeight - b) - n) / 2 + n
                                }
                                o = "false" != o && (void 0 != o || t.repeat);
                                var _ = [0, 0];
                                if (d)
                                    for (var w = 0; w < d.length; w++) "string" == typeof d[w] ? d[w].includes("%") ? _[w] = parseInt(d[w].replace("%", "") * t.windowHeight / 100) : _[w] = parseInt(d[w]) : _[w] = d[w];
                                var S = {
                                    el: e,
                                    id: r,
                                    class: a,
                                    top: n + _[0],
                                    middle: g,
                                    bottom: y - _[1],
                                    offset: d,
                                    repeat: o,
                                    inView: !!e.classList.contains(a),
                                    call: h,
                                    speed: f,
                                    delay: c,
                                    position: l,
                                    target: s,
                                    direction: p,
                                    sticky: u
                                };
                                t.els.push(S), (!1 !== f || u) && t.parallaxElements.push(S)
                            })
                        })
                    }
                }, {
                    key: "addSections",
                    value: function() {
                        var t = this;
                        this.sections = [];
                        var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                        0 === e.length && (e = [this.el]), e.forEach(function(e, i) {
                            var r = e.getBoundingClientRect().top - 1.5 * window.innerHeight - H(e).y,
                                n = {
                                    el: e,
                                    offset: r,
                                    limit: r + e.getBoundingClientRect().height + 2 * window.innerHeight,
                                    inView: !1,
                                    persistent: "string" == typeof e.dataset[t.name + "Persistent"]
                                };
                            t.sections[i] = n
                        })
                    }
                }, {
                    key: "transform",
                    value: function(t, e, i, r) {
                        var n;
                        if (r) {
                            var s = H(t),
                                a = G(s.x, e, r),
                                o = G(s.y, i, r);
                            n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(a, ",").concat(o, ",0,1)")
                        } else n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                        t.style.webkitTransform = n, t.style.msTransform = n, t.style.transform = n
                    }
                }, {
                    key: "transformElements",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = this.instance.scroll.y + this.windowHeight,
                            n = this.instance.scroll.y + this.windowMiddle;
                        this.parallaxElements.forEach(function(s, a) {
                            var o = !1;
                            if (t && (o = 0), s.inView || i) switch (s.position) {
                                case "top":
                                    o = e.instance.scroll.y * -s.speed;
                                    break;
                                case "elementTop":
                                    o = (r - s.top) * -s.speed;
                                    break;
                                case "bottom":
                                    o = (e.instance.limit - r + e.windowHeight) * s.speed;
                                    break;
                                default:
                                    o = (n - s.middle) * -s.speed
                            }
                            s.sticky && (o = s.inView ? e.instance.scroll.y - s.top + window.innerHeight : e.instance.scroll.y < s.top - window.innerHeight && e.instance.scroll.y < s.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > s.bottom && e.instance.scroll.y > s.bottom + 100 && s.bottom - s.top + window.innerHeight), !1 !== o && ("horizontal" === s.direction ? e.transform(s.el, o, 0, !t && s.delay) : e.transform(s.el, 0, o, !t && s.delay))
                        })
                    }
                }, {
                    key: "scrollTo",
                    value: function(t, e) {
                        var i, r = this,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [.25, 0, .35, 1],
                            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            o = arguments.length > 5 ? arguments[5] : void 0,
                            h = e ? parseInt(e) : 0;
                        if (s = nt.apply(void 0, d(s)), "string" == typeof t) {
                            if ("top" === t) i = 0;
                            else if ("bottom" === t) i = this.instance.limit;
                            else if (!(i = document.querySelector(t))) return
                        } else if ("number" == typeof t) i = parseInt(t);
                        else {
                            if (!t || !t.tagName) return;
                            i = t
                        }
                        if ("number" != typeof i) {
                            if (!q(i).includes(this.el)) return;
                            var l = i.getBoundingClientRect().top,
                                c = q(i).find(function(t) {
                                    return r.sections.find(function(e) {
                                        return e.el == t
                                    })
                                }),
                                p = 0;
                            c && (p = H(c).y), h = l + h - p
                        } else h = i + h;
                        var u = parseFloat(this.instance.delta.y),
                            f = Math.max(0, Math.min(h, this.instance.limit)) - u,
                            m = function(t) {
                                a ? r.setScroll(r.instance.delta.x, u + f * t) : r.instance.delta.y = u + f * t
                            };
                        this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                        var y = Date.now();
                        ! function t() {
                            var e = (Date.now() - y) / n;
                            e > 1 ? (m(1), r.animatingScroll = !1, 0 == n && r.update(), o && o()) : (r.scrollToRaf = requestAnimationFrame(t), m(s(e)))
                        }()
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
                    }
                }, {
                    key: "startScroll",
                    value: function() {
                        this.stop = !1
                    }
                }, {
                    key: "stopScroll",
                    value: function() {
                        this.stop = !0
                    }
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.instance = o({}, this.instance, {
                            scroll: {
                                x: t,
                                y: e
                            },
                            delta: {
                                x: t,
                                y: e
                            },
                            speed: 0
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        f(l(e.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
                    }
                }]), e
            }(y),
            dt = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, t), this.options = e, Object.assign(this, m, e), this.init()
                }
                return n(t, [{
                    key: "init",
                    value: function() {
                        if (this.smoothMobile || (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1), !0 !== this.smooth || this.isMobile ? this.scroll = new _(this.options) : this.scroll = new ft(this.options), this.scroll.init(), window.location.hash) {
                            var t = window.location.hash.slice(1, window.location.hash.length),
                                e = document.getElementById(t);
                            e && this.scroll.scrollTo(e)
                        }
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.scroll.update()
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.scroll.startScroll()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.scroll.stopScroll()
                    }
                }, {
                    key: "scrollTo",
                    value: function(t, e, i, r, n, s) {
                        this.scroll.scrollTo(t, e, i, r, n, s)
                    }
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.scroll.setScroll(t, e)
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        this.scroll.setEvents(t, e)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        this.scroll.unsetEvents(t, e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.scroll.destroy()
                    }
                }]), t
            }();
        e.a = dt
    }).call(e, i(38))
}, function(t, e, i) {
    var r;
    r = function() {
        return function(t) {
            var e = {};

            function i(r) {
                if (e[r]) return e[r].exports;
                var n = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
            }
            return i.m = t, i.c = e, i.d = function(t, e, r) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                })
            }, i.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if (i.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var n in t) i.d(r, n, function(e) {
                        return t[e]
                    }.bind(null, n));
                return r
            }, i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return i.d(e, "a", e), e
            }, i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, i.p = "", i(i.s = 90)
        }({
            17: function(t, e, i) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var r = i(18),
                    n = function() {
                        function t() {}
                        return t.getFirstMatch = function(t, e) {
                            var i = e.match(t);
                            return i && i.length > 0 && i[1] || ""
                        }, t.getSecondMatch = function(t, e) {
                            var i = e.match(t);
                            return i && i.length > 1 && i[2] || ""
                        }, t.matchAndReturnConst = function(t, e, i) {
                            if (t.test(e)) return i
                        }, t.getWindowsVersionName = function(t) {
                            switch (t) {
                                case "NT":
                                    return "NT";
                                case "XP":
                                    return "XP";
                                case "NT 5.0":
                                    return "2000";
                                case "NT 5.1":
                                    return "XP";
                                case "NT 5.2":
                                    return "2003";
                                case "NT 6.0":
                                    return "Vista";
                                case "NT 6.1":
                                    return "7";
                                case "NT 6.2":
                                    return "8";
                                case "NT 6.3":
                                    return "8.1";
                                case "NT 10.0":
                                    return "10";
                                default:
                                    return
                            }
                        }, t.getMacOSVersionName = function(t) {
                            var e = t.split(".").splice(0, 2).map(function(t) {
                                return parseInt(t, 10) || 0
                            });
                            if (e.push(0), 10 === e[0]) switch (e[1]) {
                                case 5:
                                    return "Leopard";
                                case 6:
                                    return "Snow Leopard";
                                case 7:
                                    return "Lion";
                                case 8:
                                    return "Mountain Lion";
                                case 9:
                                    return "Mavericks";
                                case 10:
                                    return "Yosemite";
                                case 11:
                                    return "El Capitan";
                                case 12:
                                    return "Sierra";
                                case 13:
                                    return "High Sierra";
                                case 14:
                                    return "Mojave";
                                case 15:
                                    return "Catalina";
                                default:
                                    return
                            }
                        }, t.getAndroidVersionName = function(t) {
                            var e = t.split(".").splice(0, 2).map(function(t) {
                                return parseInt(t, 10) || 0
                            });
                            if (e.push(0), !(1 === e[0] && e[1] < 5)) return 1 === e[0] && e[1] < 6 ? "Cupcake" : 1 === e[0] && e[1] >= 6 ? "Donut" : 2 === e[0] && e[1] < 2 ? "Eclair" : 2 === e[0] && 2 === e[1] ? "Froyo" : 2 === e[0] && e[1] > 2 ? "Gingerbread" : 3 === e[0] ? "Honeycomb" : 4 === e[0] && e[1] < 1 ? "Ice Cream Sandwich" : 4 === e[0] && e[1] < 4 ? "Jelly Bean" : 4 === e[0] && e[1] >= 4 ? "KitKat" : 5 === e[0] ? "Lollipop" : 6 === e[0] ? "Marshmallow" : 7 === e[0] ? "Nougat" : 8 === e[0] ? "Oreo" : 9 === e[0] ? "Pie" : void 0
                        }, t.getVersionPrecision = function(t) {
                            return t.split(".").length
                        }, t.compareVersions = function(e, i, r) {
                            void 0 === r && (r = !1);
                            var n = t.getVersionPrecision(e),
                                s = t.getVersionPrecision(i),
                                a = Math.max(n, s),
                                o = 0,
                                h = t.map([e, i], function(e) {
                                    var i = a - t.getVersionPrecision(e),
                                        r = e + new Array(i + 1).join(".0");
                                    return t.map(r.split("."), function(t) {
                                        return new Array(20 - t.length).join("0") + t
                                    }).reverse()
                                });
                            for (r && (o = a - Math.min(n, s)), a -= 1; a >= o;) {
                                if (h[0][a] > h[1][a]) return 1;
                                if (h[0][a] === h[1][a]) {
                                    if (a === o) return 0;
                                    a -= 1
                                } else if (h[0][a] < h[1][a]) return -1
                            }
                        }, t.map = function(t, e) {
                            var i, r = [];
                            if (Array.prototype.map) return Array.prototype.map.call(t, e);
                            for (i = 0; i < t.length; i += 1) r.push(e(t[i]));
                            return r
                        }, t.find = function(t, e) {
                            var i, r;
                            if (Array.prototype.find) return Array.prototype.find.call(t, e);
                            for (i = 0, r = t.length; i < r; i += 1) {
                                var n = t[i];
                                if (e(n, i)) return n
                            }
                        }, t.assign = function(t) {
                            for (var e, i, r = t, n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) s[a - 1] = arguments[a];
                            if (Object.assign) return Object.assign.apply(Object, [t].concat(s));
                            var o = function() {
                                var t = s[e];
                                "object" == typeof t && null !== t && Object.keys(t).forEach(function(e) {
                                    r[e] = t[e]
                                })
                            };
                            for (e = 0, i = s.length; e < i; e += 1) o();
                            return t
                        }, t.getBrowserAlias = function(t) {
                            return r.BROWSER_ALIASES_MAP[t]
                        }, t.getBrowserTypeByAlias = function(t) {
                            return r.BROWSER_MAP[t] || ""
                        }, t
                    }();
                e.default = n, t.exports = e.default
            },
            18: function(t, e, i) {
                "use strict";
                e.__esModule = !0, e.ENGINE_MAP = e.OS_MAP = e.PLATFORMS_MAP = e.BROWSER_MAP = e.BROWSER_ALIASES_MAP = void 0, e.BROWSER_ALIASES_MAP = {
                    "Amazon Silk": "amazon_silk",
                    "Android Browser": "android",
                    Bada: "bada",
                    BlackBerry: "blackberry",
                    Chrome: "chrome",
                    Chromium: "chromium",
                    Electron: "electron",
                    Epiphany: "epiphany",
                    Firefox: "firefox",
                    Focus: "focus",
                    Generic: "generic",
                    "Google Search": "google_search",
                    Googlebot: "googlebot",
                    "Internet Explorer": "ie",
                    "K-Meleon": "k_meleon",
                    Maxthon: "maxthon",
                    "Microsoft Edge": "edge",
                    "MZ Browser": "mz",
                    "NAVER Whale Browser": "naver",
                    Opera: "opera",
                    "Opera Coast": "opera_coast",
                    PhantomJS: "phantomjs",
                    Puffin: "puffin",
                    QupZilla: "qupzilla",
                    QQ: "qq",
                    QQLite: "qqlite",
                    Safari: "safari",
                    Sailfish: "sailfish",
                    "Samsung Internet for Android": "samsung_internet",
                    SeaMonkey: "seamonkey",
                    Sleipnir: "sleipnir",
                    Swing: "swing",
                    Tizen: "tizen",
                    "UC Browser": "uc",
                    Vivaldi: "vivaldi",
                    "WebOS Browser": "webos",
                    WeChat: "wechat",
                    "Yandex Browser": "yandex",
                    Roku: "roku"
                }, e.BROWSER_MAP = {
                    amazon_silk: "Amazon Silk",
                    android: "Android Browser",
                    bada: "Bada",
                    blackberry: "BlackBerry",
                    chrome: "Chrome",
                    chromium: "Chromium",
                    electron: "Electron",
                    epiphany: "Epiphany",
                    firefox: "Firefox",
                    focus: "Focus",
                    generic: "Generic",
                    googlebot: "Googlebot",
                    google_search: "Google Search",
                    ie: "Internet Explorer",
                    k_meleon: "K-Meleon",
                    maxthon: "Maxthon",
                    edge: "Microsoft Edge",
                    mz: "MZ Browser",
                    naver: "NAVER Whale Browser",
                    opera: "Opera",
                    opera_coast: "Opera Coast",
                    phantomjs: "PhantomJS",
                    puffin: "Puffin",
                    qupzilla: "QupZilla",
                    qq: "QQ Browser",
                    qqlite: "QQ Browser Lite",
                    safari: "Safari",
                    sailfish: "Sailfish",
                    samsung_internet: "Samsung Internet for Android",
                    seamonkey: "SeaMonkey",
                    sleipnir: "Sleipnir",
                    swing: "Swing",
                    tizen: "Tizen",
                    uc: "UC Browser",
                    vivaldi: "Vivaldi",
                    webos: "WebOS Browser",
                    wechat: "WeChat",
                    yandex: "Yandex Browser"
                }, e.PLATFORMS_MAP = {
                    tablet: "tablet",
                    mobile: "mobile",
                    desktop: "desktop",
                    tv: "tv"
                }, e.OS_MAP = {
                    WindowsPhone: "Windows Phone",
                    Windows: "Windows",
                    MacOS: "macOS",
                    iOS: "iOS",
                    Android: "Android",
                    WebOS: "WebOS",
                    BlackBerry: "BlackBerry",
                    Bada: "Bada",
                    Tizen: "Tizen",
                    Linux: "Linux",
                    ChromeOS: "Chrome OS",
                    PlayStation4: "PlayStation 4",
                    Roku: "Roku"
                }, e.ENGINE_MAP = {
                    EdgeHTML: "EdgeHTML",
                    Blink: "Blink",
                    Trident: "Trident",
                    Presto: "Presto",
                    Gecko: "Gecko",
                    WebKit: "WebKit"
                }
            },
            90: function(t, e, i) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var r, n = (r = i(91)) && r.__esModule ? r : {
                        default: r
                    },
                    s = i(18);

                function a(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                var o = function() {
                    function t() {}
                    var e, i;
                    return t.getParser = function(t, e) {
                        if (void 0 === e && (e = !1), "string" != typeof t) throw new Error("UserAgent should be a string");
                        return new n.default(t, e)
                    }, t.parse = function(t) {
                        return new n.default(t).getResult()
                    }, e = t, i = [{
                        key: "BROWSER_MAP",
                        get: function() {
                            return s.BROWSER_MAP
                        }
                    }, {
                        key: "ENGINE_MAP",
                        get: function() {
                            return s.ENGINE_MAP
                        }
                    }, {
                        key: "OS_MAP",
                        get: function() {
                            return s.OS_MAP
                        }
                    }, {
                        key: "PLATFORMS_MAP",
                        get: function() {
                            return s.PLATFORMS_MAP
                        }
                    }], null && a(e.prototype, null), i && a(e, i), t
                }();
                e.default = o, t.exports = e.default
            },
            91: function(t, e, i) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var r = h(i(92)),
                    n = h(i(93)),
                    s = h(i(94)),
                    a = h(i(95)),
                    o = h(i(17));

                function h(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var l = function() {
                    function t(t, e) {
                        if (void 0 === e && (e = !1), null == t || "" === t) throw new Error("UserAgent parameter can't be empty");
                        this._ua = t, this.parsedResult = {}, !0 !== e && this.parse()
                    }
                    var e = t.prototype;
                    return e.getUA = function() {
                        return this._ua
                    }, e.test = function(t) {
                        return t.test(this._ua)
                    }, e.parseBrowser = function() {
                        var t = this;
                        this.parsedResult.browser = {};
                        var e = o.default.find(r.default, function(e) {
                            if ("function" == typeof e.test) return e.test(t);
                            if (e.test instanceof Array) return e.test.some(function(e) {
                                return t.test(e)
                            });
                            throw new Error("Browser's test function is not valid")
                        });
                        return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser
                    }, e.getBrowser = function() {
                        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                    }, e.getBrowserName = function(t) {
                        return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                    }, e.getBrowserVersion = function() {
                        return this.getBrowser().version
                    }, e.getOS = function() {
                        return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                    }, e.parseOS = function() {
                        var t = this;
                        this.parsedResult.os = {};
                        var e = o.default.find(n.default, function(e) {
                            if ("function" == typeof e.test) return e.test(t);
                            if (e.test instanceof Array) return e.test.some(function(e) {
                                return t.test(e)
                            });
                            throw new Error("Browser's test function is not valid")
                        });
                        return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os
                    }, e.getOSName = function(t) {
                        var e = this.getOS().name;
                        return t ? String(e).toLowerCase() || "" : e || ""
                    }, e.getOSVersion = function() {
                        return this.getOS().version
                    }, e.getPlatform = function() {
                        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                    }, e.getPlatformType = function(t) {
                        void 0 === t && (t = !1);
                        var e = this.getPlatform().type;
                        return t ? String(e).toLowerCase() || "" : e || ""
                    }, e.parsePlatform = function() {
                        var t = this;
                        this.parsedResult.platform = {};
                        var e = o.default.find(s.default, function(e) {
                            if ("function" == typeof e.test) return e.test(t);
                            if (e.test instanceof Array) return e.test.some(function(e) {
                                return t.test(e)
                            });
                            throw new Error("Browser's test function is not valid")
                        });
                        return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform
                    }, e.getEngine = function() {
                        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                    }, e.getEngineName = function(t) {
                        return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                    }, e.parseEngine = function() {
                        var t = this;
                        this.parsedResult.engine = {};
                        var e = o.default.find(a.default, function(e) {
                            if ("function" == typeof e.test) return e.test(t);
                            if (e.test instanceof Array) return e.test.some(function(e) {
                                return t.test(e)
                            });
                            throw new Error("Browser's test function is not valid")
                        });
                        return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine
                    }, e.parse = function() {
                        return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                    }, e.getResult = function() {
                        return o.default.assign({}, this.parsedResult)
                    }, e.satisfies = function(t) {
                        var e = this,
                            i = {},
                            r = 0,
                            n = {},
                            s = 0;
                        if (Object.keys(t).forEach(function(e) {
                                var a = t[e];
                                "string" == typeof a ? (n[e] = a, s += 1) : "object" == typeof a && (i[e] = a, r += 1)
                            }), r > 0) {
                            var a = Object.keys(i),
                                h = o.default.find(a, function(t) {
                                    return e.isOS(t)
                                });
                            if (h) {
                                var l = this.satisfies(i[h]);
                                if (void 0 !== l) return l
                            }
                            var c = o.default.find(a, function(t) {
                                return e.isPlatform(t)
                            });
                            if (c) {
                                var p = this.satisfies(i[c]);
                                if (void 0 !== p) return p
                            }
                        }
                        if (s > 0) {
                            var u = Object.keys(n),
                                f = o.default.find(u, function(t) {
                                    return e.isBrowser(t, !0)
                                });
                            if (void 0 !== f) return this.compareVersion(n[f])
                        }
                    }, e.isBrowser = function(t, e) {
                        void 0 === e && (e = !1);
                        var i = this.getBrowserName().toLowerCase(),
                            r = t.toLowerCase(),
                            n = o.default.getBrowserTypeByAlias(r);
                        return e && n && (r = n.toLowerCase()), r === i
                    }, e.compareVersion = function(t) {
                        var e = [0],
                            i = t,
                            r = !1,
                            n = this.getBrowserVersion();
                        if ("string" == typeof n) return ">" === t[0] || "<" === t[0] ? (i = t.substr(1), "=" === t[1] ? (r = !0, i = t.substr(2)) : e = [], ">" === t[0] ? e.push(1) : e.push(-1)) : "=" === t[0] ? i = t.substr(1) : "~" === t[0] && (r = !0, i = t.substr(1)), e.indexOf(o.default.compareVersions(n, i, r)) > -1
                    }, e.isOS = function(t) {
                        return this.getOSName(!0) === String(t).toLowerCase()
                    }, e.isPlatform = function(t) {
                        return this.getPlatformType(!0) === String(t).toLowerCase()
                    }, e.isEngine = function(t) {
                        return this.getEngineName(!0) === String(t).toLowerCase()
                    }, e.is = function(t, e) {
                        return void 0 === e && (e = !1), this.isBrowser(t, e) || this.isOS(t) || this.isPlatform(t)
                    }, e.some = function(t) {
                        var e = this;
                        return void 0 === t && (t = []), t.some(function(t) {
                            return e.is(t)
                        })
                    }, t
                }();
                e.default = l, t.exports = e.default
            },
            92: function(t, e, i) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var r, n = (r = i(17)) && r.__esModule ? r : {
                        default: r
                    },
                    s = /version\/(\d+(\.?_?\d+)+)/i,
                    a = [{
                        test: [/googlebot/i],
                        describe: function(t) {
                            var e = {
                                    name: "Googlebot"
                                },
                                i = n.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/opera/i],
                        describe: function(t) {
                            var e = {
                                    name: "Opera"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/opr\/|opios/i],
                        describe: function(t) {
                            var e = {
                                    name: "Opera"
                                },
                                i = n.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/SamsungBrowser/i],
                        describe: function(t) {
                            var e = {
                                    name: "Samsung Internet for Android"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/Whale/i],
                        describe: function(t) {
                            var e = {
                                    name: "NAVER Whale Browser"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/MZBrowser/i],
                        describe: function(t) {
                            var e = {
                                    name: "MZ Browser"
                                },
                                i = n.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/focus/i],
                        describe: function(t) {
                            var e = {
                                    name: "Focus"
                                },
                                i = n.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/swing/i],
                        describe: function(t) {
                            var e = {
                                    name: "Swing"
                                },
                                i = n.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/coast/i],
                        describe: function(t) {
                            var e = {
                                    name: "Opera Coast"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/opt\/\d+(?:.?_?\d+)+/i],
                        describe: function(t) {
                            var e = {
                                    name: "Opera Touch"
                                },
                                i = n.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/yabrowser/i],
                        describe: function(t) {
                            var e = {
                                    name: "Yandex Browser"
                                },
                                i = n.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/ucbrowser/i],
                        describe: function(t) {
                            var e = {
                                    name: "UC Browser"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/Maxthon|mxios/i],
                        describe: function(t) {
                            var e = {
                                    name: "Maxthon"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/epiphany/i],
                        describe: function(t) {
                            var e = {
                                    name: "Epiphany"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/puffin/i],
                        describe: function(t) {
                            var e = {
                                    name: "Puffin"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/sleipnir/i],
                        describe: function(t) {
                            var e = {
                                    name: "Sleipnir"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/k-meleon/i],
                        describe: function(t) {
                            var e = {
                                    name: "K-Meleon"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/micromessenger/i],
                        describe: function(t) {
                            var e = {
                                    name: "WeChat"
                                },
                                i = n.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/qqbrowser/i],
                        describe: function(t) {
                            var e = {
                                    name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"
                                },
                                i = n.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/msie|trident/i],
                        describe: function(t) {
                            var e = {
                                    name: "Internet Explorer"
                                },
                                i = n.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/\sedg\//i],
                        describe: function(t) {
                            var e = {
                                    name: "Microsoft Edge"
                                },
                                i = n.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/edg([ea]|ios)/i],
                        describe: function(t) {
                            var e = {
                                    name: "Microsoft Edge"
                                },
                                i = n.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/vivaldi/i],
                        describe: function(t) {
                            var e = {
                                    name: "Vivaldi"
                                },
                                i = n.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/seamonkey/i],
                        describe: function(t) {
                            var e = {
                                    name: "SeaMonkey"
                                },
                                i = n.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/sailfish/i],
                        describe: function(t) {
                            var e = {
                                    name: "Sailfish"
                                },
                                i = n.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/silk/i],
                        describe: function(t) {
                            var e = {
                                    name: "Amazon Silk"
                                },
                                i = n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/phantom/i],
                        describe: function(t) {
                            var e = {
                                    name: "PhantomJS"
                                },
                                i = n.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/slimerjs/i],
                        describe: function(t) {
                            var e = {
                                    name: "SlimerJS"
                                },
                                i = n.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                        describe: function(t) {
                            var e = {
                                    name: "BlackBerry"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function(t) {
                            var e = {
                                    name: "WebOS Browser"
                                },
                                i = n.default.getFirstMatch(s, t) || n.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/bada/i],
                        describe: function(t) {
                            var e = {
                                    name: "Bada"
                                },
                                i = n.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/tizen/i],
                        describe: function(t) {
                            var e = {
                                    name: "Tizen"
                                },
                                i = n.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/qupzilla/i],
                        describe: function(t) {
                            var e = {
                                    name: "QupZilla"
                                },
                                i = n.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/firefox|iceweasel|fxios/i],
                        describe: function(t) {
                            var e = {
                                    name: "Firefox"
                                },
                                i = n.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/electron/i],
                        describe: function(t) {
                            var e = {
                                    name: "Electron"
                                },
                                i = n.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/MiuiBrowser/i],
                        describe: function(t) {
                            var e = {
                                    name: "Miui"
                                },
                                i = n.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/chromium/i],
                        describe: function(t) {
                            var e = {
                                    name: "Chromium"
                                },
                                i = n.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/chrome|crios|crmo/i],
                        describe: function(t) {
                            var e = {
                                    name: "Chrome"
                                },
                                i = n.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/GSA/i],
                        describe: function(t) {
                            var e = {
                                    name: "Google Search"
                                },
                                i = n.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: function(t) {
                            var e = !t.test(/like android/i),
                                i = t.test(/android/i);
                            return e && i
                        },
                        describe: function(t) {
                            var e = {
                                    name: "Android Browser"
                                },
                                i = n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/playstation 4/i],
                        describe: function(t) {
                            var e = {
                                    name: "PlayStation 4"
                                },
                                i = n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/safari|applewebkit/i],
                        describe: function(t) {
                            var e = {
                                    name: "Safari"
                                },
                                i = n.default.getFirstMatch(s, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/.*/i],
                        describe: function(t) {
                            var e = -1 !== t.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                            return {
                                name: n.default.getFirstMatch(e, t),
                                version: n.default.getSecondMatch(e, t)
                            }
                        }
                    }];
                e.default = a, t.exports = e.default
            },
            93: function(t, e, i) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var r, n = (r = i(17)) && r.__esModule ? r : {
                        default: r
                    },
                    s = i(18),
                    a = [{
                        test: [/Roku\/DVP/],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                            return {
                                name: s.OS_MAP.Roku,
                                version: e
                            }
                        }
                    }, {
                        test: [/windows phone/i],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
                            return {
                                name: s.OS_MAP.WindowsPhone,
                                version: e
                            }
                        }
                    }, {
                        test: [/windows /i],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
                                i = n.default.getWindowsVersionName(e);
                            return {
                                name: s.OS_MAP.Windows,
                                version: e,
                                versionName: i
                            }
                        }
                    }, {
                        test: [/Macintosh(.*?) FxiOS(.*?)\//],
                        describe: function(t) {
                            var e = {
                                    name: s.OS_MAP.iOS
                                },
                                i = n.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/macintosh/i],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."),
                                i = n.default.getMacOSVersionName(e),
                                r = {
                                    name: s.OS_MAP.MacOS,
                                    version: e
                                };
                            return i && (r.versionName = i), r
                        }
                    }, {
                        test: [/(ipod|iphone|ipad)/i],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
                            return {
                                name: s.OS_MAP.iOS,
                                version: e
                            }
                        }
                    }, {
                        test: function(t) {
                            var e = !t.test(/like android/i),
                                i = t.test(/android/i);
                            return e && i
                        },
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t),
                                i = n.default.getAndroidVersionName(e),
                                r = {
                                    name: s.OS_MAP.Android,
                                    version: e
                                };
                            return i && (r.versionName = i), r
                        }
                    }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
                                i = {
                                    name: s.OS_MAP.WebOS
                                };
                            return e && e.length && (i.version = e), i
                        }
                    }, {
                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || n.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || n.default.getFirstMatch(/\bbb(\d+)/i, t);
                            return {
                                name: s.OS_MAP.BlackBerry,
                                version: e
                            }
                        }
                    }, {
                        test: [/bada/i],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                            return {
                                name: s.OS_MAP.Bada,
                                version: e
                            }
                        }
                    }, {
                        test: [/tizen/i],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
                            return {
                                name: s.OS_MAP.Tizen,
                                version: e
                            }
                        }
                    }, {
                        test: [/linux/i],
                        describe: function() {
                            return {
                                name: s.OS_MAP.Linux
                            }
                        }
                    }, {
                        test: [/CrOS/],
                        describe: function() {
                            return {
                                name: s.OS_MAP.ChromeOS
                            }
                        }
                    }, {
                        test: [/PlayStation 4/],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
                            return {
                                name: s.OS_MAP.PlayStation4,
                                version: e
                            }
                        }
                    }];
                e.default = a, t.exports = e.default
            },
            94: function(t, e, i) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var r, n = (r = i(17)) && r.__esModule ? r : {
                        default: r
                    },
                    s = i(18),
                    a = [{
                        test: [/googlebot/i],
                        describe: function() {
                            return {
                                type: "bot",
                                vendor: "Google"
                            }
                        }
                    }, {
                        test: [/huawei/i],
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/(can-l01)/i, t) && "Nova",
                                i = {
                                    type: s.PLATFORMS_MAP.mobile,
                                    vendor: "Huawei"
                                };
                            return e && (i.model = e), i
                        }
                    }, {
                        test: [/nexus\s*(?:7|8|9|10).*/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Nexus"
                            }
                        }
                    }, {
                        test: [/ipad/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }
                        }
                    }, {
                        test: [/Macintosh(.*?) FxiOS(.*?)\//],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }
                        }
                    }, {
                        test: [/kftt build/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Amazon",
                                model: "Kindle Fire HD 7"
                            }
                        }
                    }, {
                        test: [/silk/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Amazon"
                            }
                        }
                    }, {
                        test: [/tablet(?! pc)/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet
                            }
                        }
                    }, {
                        test: function(t) {
                            var e = t.test(/ipod|iphone/i),
                                i = t.test(/like (ipod|iphone)/i);
                            return e && !i
                        },
                        describe: function(t) {
                            var e = n.default.getFirstMatch(/(ipod|iphone)/i, t);
                            return {
                                type: s.PLATFORMS_MAP.mobile,
                                vendor: "Apple",
                                model: e
                            }
                        }
                    }, {
                        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile,
                                vendor: "Nexus"
                            }
                        }
                    }, {
                        test: [/[^-]mobi/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function(t) {
                            return "blackberry" === t.getBrowserName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile,
                                vendor: "BlackBerry"
                            }
                        }
                    }, {
                        test: function(t) {
                            return "bada" === t.getBrowserName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function(t) {
                            return "windows phone" === t.getBrowserName()
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile,
                                vendor: "Microsoft"
                            }
                        }
                    }, {
                        test: function(t) {
                            var e = Number(String(t.getOSVersion()).split(".")[0]);
                            return "android" === t.getOSName(!0) && e >= 3
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet
                            }
                        }
                    }, {
                        test: function(t) {
                            return "android" === t.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function(t) {
                            return "macos" === t.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.desktop,
                                vendor: "Apple"
                            }
                        }
                    }, {
                        test: function(t) {
                            return "windows" === t.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.desktop
                            }
                        }
                    }, {
                        test: function(t) {
                            return "linux" === t.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.desktop
                            }
                        }
                    }, {
                        test: function(t) {
                            return "playstation 4" === t.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tv
                            }
                        }
                    }, {
                        test: function(t) {
                            return "roku" === t.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tv
                            }
                        }
                    }];
                e.default = a, t.exports = e.default
            },
            95: function(t, e, i) {
                "use strict";
                e.__esModule = !0, e.default = void 0;
                var r, n = (r = i(17)) && r.__esModule ? r : {
                        default: r
                    },
                    s = i(18),
                    a = [{
                        test: function(t) {
                            return "microsoft edge" === t.getBrowserName(!0)
                        },
                        describe: function(t) {
                            if (/\sedg\//i.test(t)) return {
                                name: s.ENGINE_MAP.Blink
                            };
                            var e = n.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                            return {
                                name: s.ENGINE_MAP.EdgeHTML,
                                version: e
                            }
                        }
                    }, {
                        test: [/trident/i],
                        describe: function(t) {
                            var e = {
                                    name: s.ENGINE_MAP.Trident
                                },
                                i = n.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: function(t) {
                            return t.test(/presto/i)
                        },
                        describe: function(t) {
                            var e = {
                                    name: s.ENGINE_MAP.Presto
                                },
                                i = n.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: function(t) {
                            var e = t.test(/gecko/i),
                                i = t.test(/like gecko/i);
                            return e && !i
                        },
                        describe: function(t) {
                            var e = {
                                    name: s.ENGINE_MAP.Gecko
                                },
                                i = n.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }, {
                        test: [/(apple)?webkit\/537\.36/i],
                        describe: function() {
                            return {
                                name: s.ENGINE_MAP.Blink
                            }
                        }
                    }, {
                        test: [/(apple)?webkit/i],
                        describe: function(t) {
                            var e = {
                                    name: s.ENGINE_MAP.WebKit
                                },
                                i = n.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                            return i && (e.version = i), e
                        }
                    }];
                e.default = a, t.exports = e.default
            }
        })
    }, t.exports = r()
}, function(t, e, i) {
    "use strict";
    var r = {};

    function n(t) {
        return new Promise(function(e, i) {
            var r = new XMLHttpRequest;
            r.open("GET", t, r.withCredentials = !0), r.onload = function() {
                200 === r.status ? e() : i()
            }, r.send()
        })
    }
    var s, a, o = (s = "prefetch", (a = document.createElement("link")).relList && a.relList.supports && a.relList.supports(s) ? function(t) {
        return new Promise(function(e, i) {
            var r = document.createElement("link");
            r.rel = "prefetch", r.href = t, r.onload = e, r.onerror = i, document.head.appendChild(r)
        })
    } : n);

    function h(t, e, i) {
        if (!(r[t] || (i = navigator.connection) && ((i.effectiveType || "").includes("2g") || i.saveData))) return (e ? function(t) {
            return null == self.fetch ? n(t) : fetch(t, {
                credentials: "include"
            })
        } : o)(t).then(function() {
            r[t] = !0
        })
    }
    var l = window.requestIdleCallback || function(t) {
            var e = Date.now();
            return setTimeout(function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }, 1)
        },
        c = new Set,
        p = window.IntersectionObserver && new IntersectionObserver(function(t) {
            t.forEach(function(t) {
                if (t.isIntersecting) {
                    var e = t.target;
                    c.has(e.href) && (p.unobserve(e), u(e.href))
                }
            })
        });

    function u(t) {
        c.delete(t), h(new URL(t, location.href).toString(), p.priority)
    }
    e.a = function(t) {
        t || (t = {}), p && (p.priority = t.priority || !1);
        var e = t.origins || [location.hostname],
            i = t.ignores || [];
        (t.timeoutFn || l)(function() {
            t.urls ? t.urls.forEach(u) : p && Array.from((t.el || document).querySelectorAll("a"), function(t) {
                p.observe(t), e.length && !e.includes(t.hostname) || function t(e, i) {
                    return Array.isArray(i) ? i.some(function(i) {
                        return t(e, i)
                    }) : (i.test || i).call(i, e.href, e)
                }(t, i) || c.add(t.href)
            })
        }, {
            timeout: t.timeout || 2e3
        })
    }
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = function() {
            this.navigationOpen = !1, this.isAnimatingNavigation = !1, this.activeIndex = -1, this.pageIndex = -1, this.allowMouseEvent = !1, this.currentImage = null, this.defaultImage = null, this.bindMethods(), this.getElems(), this.createlinksObjects(), this.addEvents(), this.onPageChange({
                href: window.location.href
            })
        };
    n.prototype.bindMethods = function() {
        this.leave = this.leave.bind(this), this.toggleNavigation = this.toggleNavigation.bind(this)
    }, n.prototype.getElems = function() {
        this.toggler = document.querySelector(".header__menu"), this.navicon = document.querySelector("#nav-icon"), this.headerTitle = document.querySelector(".header__title"), this.headerBot = document.querySelector(".link-menu-bot"), this.navigation = document.querySelector(".navigation"), this.links = this.navigation.querySelectorAll(".navigation__left-background .navigation__links-wrapper a"), this.images = this.navigation.querySelectorAll(".navigation__image-wrapper .inner-wrapper img"), this.linksObject = [], this.defaultImage = this.images[0], this.navigationObject = {
            wrapper: this.navigation,
            left: this.navigation.querySelector(".navigation__left-background"),
            linksWrapper: this.navigation.querySelector(".navigation__links-wrapper"),
            right: this.navigation.querySelector(".navigation__right-background")
        }
    }, n.prototype.createlinksObjects = function() {
        for (var t = 0; t < this.links.length; t++) this.linksObject[t] = {
            id: t,
            image: this.images[t],
            link: this.links[t],
            toggle: !1
        }
    }, n.prototype.addEvents = function() {
        for (var t in this.toggler && this.toggler.addEventListener("click", this.toggleNavigation), this.headerBot.addEventListener("click", this.leave), this.headerTitle.addEventListener("click", this.leave), this.linksObject) t && (this.linksObject[t].link.addEventListener("click", this.leave), this.linksObject[t].link.addEventListener("mouseenter", this.onMouseEnter.bind(this, this.linksObject[t])), this.linksObject[t].link.addEventListener("mouseleave", this.onMouseLeave.bind(this)))
    }, n.prototype.onMouseEnter = function(t) {
        this.allowMouseEvent && (this.currentImage.classList.remove("visible"), this.currentImage = t.image, this.currentImage.classList.add("visible"))
    }, n.prototype.onMouseLeave = function() {
        this.allowMouseEvent && (this.currentImage.classList.remove("visible"), this.currentImage = this.defaultImage, this.defaultImage.classList.add("visible"))
    }, n.prototype.toggleNavigation = function() {
        this.isAnimatingNavigation || (this.navigationOpen ? this.closeNavigation() : this.openNavigation())
    }, n.prototype.openNavigation = function() {
        var t = this;
        this.isAnimatingNavigation = !0, this.navicon.classList.add("open"), document.body.classList.add("menu-open"), r.a.timeline({
            onComplete: function() {
                t.isAnimatingNavigation = !1, t.navigationOpen = !0, t.allowMouseEvent = !0, t.currentImage.classList.add("visible")
            }
        }).to(this.navigationObject.wrapper, {
            x: 0,
            duration: .5,
            ease: "power1.out"
        }).to(this.navigationObject.left, {
            x: 0,
            duration: .5,
            ease: "power1.out"
        }, .1).to([this.navigationObject.right, this.navigationObject.linksWrapper], {
            opacity: 1,
            duration: .5,
            ease: "power1.out"
        }).to(this.currentImage, {
            duration: 0,
            onComplete: function() {
                t.currentImage.classList.add("visible")
            }
        }, "-=0.5")
    }, n.prototype.closeNavigation = function() {
        var t = this;
        this.isAnimatingNavigation = !0, this.allowMouseEvent = !1, this.currentImage.classList.remove("visible"), r.a.timeline({
            onComplete: function() {
                t.isAnimatingNavigation = !1, t.navigationOpen = !1, t.navicon.classList.remove("open"), document.body.classList.remove("menu-open")
            }
        }).to([this.navigationObject.right, this.navigationObject.linksWrapper], {
            opacity: 0,
            duration: .5,
            ease: "power1.out"
        }).to(this.navigationObject.left, {
            x: "-100%",
            duration: .5,
            ease: "power1.in"
        }).to(this.navigationObject.wrapper, {
            x: "-100%",
            duration: .5,
            ease: "power1.in"
        }, .2)
    }, n.prototype.leave = function() {
        var t = this;
        this.navigationOpen && (event.preventDefault(), this.isAnimatingNavigation = !0, this.allowMouseEvent = !1, this.navicon.classList.remove("open"), this.currentImage.classList.remove("visible"), r.a.timeline({
            onComplete: function() {
                r.a.set([t.navigationObject.right, t.navigationObject.linksWrapper], {
                    opacity: 0
                }), r.a.set([t.navigationObject.left, t.navigationObject.wrapper], {
                    x: "-100%",
                    opacity: 1,
                    scaleX: 1
                }), t.isAnimatingNavigation = !1, t.navigationOpen = !1, document.body.classList.remove("menu-open")
            }
        }).to(this.navigationObject.linksWrapper, {
            opacity: 0,
            duration: .5,
            ease: "power1.out"
        }).to(this.navigationObject.left, {
            scaleX: 4.5,
            duration: .5,
            ease: "power1.out"
        }).to(this.navigationObject.right, {
            opacity: 0,
            duration: .5,
            ease: "power1.out"
        }).to(this.navigationObject.wrapper, {
            opacity: 0,
            duration: .5,
            ease: "power1.in"
        }))
    }, n.prototype.onPageChange = function(t) {
        for (var e in this.currentImage = null, this.defaultImage = null, this.linksObject)
            if (e) {
                var i = this.linksObject[e];
                i.link.classList.remove("active"), i.image.classList.remove("visible"), i.link.href === t.href && (i.link.classList.add("active"), this.currentImage = i.image, this.defaultImage = i.image)
            }
        this.currentImage || (this.currentImage = this.images[0], this.defaultImage = this.images[0])
    }, e.a = n
}, function(t, e, i) {
    "use strict";
    var r = i(4),
        n = function() {
            this.isShowing = !1, this.getElems(), this.updateScrollPosition()
        };
    n.prototype.updateScrollPosition = function() {
        this.lastScroll = this.currentScroll ? this.currentScroll : 0, this.currentScroll = r.a.isMobile ? window.pageYOffset : r.a.smoothScrool.scroll.instance.scroll.y
    }, n.prototype.getElems = function() {
        this.headerElt = document.body.querySelector("header"), this.headerSub = document.body.querySelector("#sub")
    }, n.prototype.hideHeader = function() {
        this.isShowing = !1, this.headerElt.classList.add("hide")
    }, n.prototype.showHeader = function() {
        this.isShowing = !0, this.headerElt.classList.remove("hide")
    }, n.prototype.scroll = function() {
        this.isShowing = !1, this.updateScrollPosition(), this.currentScroll < 150 ? (this.showHeader(), this.headerElt.classList.add("top"), this.headerSub.classList.remove("header-blend--mix-none")) : (this.lastScroll > this.currentScroll && this.showHeader(), this.lastScroll < this.currentScroll && this.hideHeader(), this.headerElt.classList.remove("top"), this.headerSub.classList.add("header-blend--mix-none"))
    }, e.a = n
}, function(t, e, i) {
    "use strict";
    var r = i(4),
        n = i(1),
        s = function() {
            this.bindMethods(), this.canFollowCursor = !0, this.currentScroll = r.a.isMobile ? window.pageYOffset : r.a.smoothScrool.scroll.instance.scroll.y, this.cursor = document.querySelector(".cursor"), this.cursorSize = this.cursor.offsetWidth, this.cursorParams = {
                x: 0,
                y: 0
            }, this.addGridCircles(document.body), document.body.addEventListener("mousemove", this.onMouseMove)
        };
    s.prototype.bindMethods = function() {
        this.onMouseMove = this.onMouseMove.bind(this)
    }, s.prototype.onMouseMove = function(t) {
        this.canFollowCursor && this.updateCursorPosition(t.clientX, t.clientY)
    }, s.prototype.moveTo = function(t) {
        var e = t.x,
            i = t.y;
        this.updateCursorPosition(e, i)
    }, s.prototype.scroll = function() {
        this.currentScroll = window.pageYOffset
    }, s.prototype.updateCursorPosition = function(t, e) {
        t && (this.cursorParams.x = t), e && (this.cursorParams.y = e)
    }, s.prototype.addGridCircles = function() {
        this.gridCircles = document.body.querySelectorAll(".grid-circle"), this.gridCirclesSize = 400;
        for (var t = 0; t < this.gridCircles.length; t++) this.gridCircles[t].style.top = -this.gridCircles[t].parentElement.offsetTop + "px"
    }, s.prototype.removeGridCircles = function() {
        this.gridCircles = null
    }, s.prototype.lerp = function(t, e, i) {
        var r = i;
        return (1 - (r = (r = r < 0 ? 0 : r) > 1 ? 1 : r)) * t + r * e
    }, s.prototype.update = function() {
        n.a.to(this.cursor, {
            duration: .6,
            ease: "power2.out",
            x: Number(this.cursorParams.x - this.cursorSize / 2),
            y: Number(this.cursorParams.y - this.cursorSize / 2)
        }), this.gridCircles && n.a.to(this.gridCircles, {
            duration: 2,
            ease: "power2.out",
            x: Number(this.cursorParams.x - this.gridCirclesSize / 2),
            y: Number(this.cursorParams.y - this.gridCirclesSize / 2) + this.currentScroll
        })
    }, e.a = s
}, function(t, e, i) {
    "use strict";
    var r = function() {
        this.removePolyFill(), this.assignPolyfill()
    };
    r.prototype.removePolyFill = function() {
        "remove" in Element.prototype || (Element.prototype.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        })
    }, r.prototype.assignPolyfill = function() {
        "function" != typeof Object.assign && (Object.assign = function(t, e) {
            var i = arguments;
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var r = Object(t), n = 1; n < arguments.length; n++) {
                var s = i[n];
                if (null != s)
                    for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (r[a] = s[a])
            }
            return r
        })
    }, e.a = r
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(60),
        s = i(4),
        a = i(1),
        o = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onEnter = function() {
                this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions")), this.view = this.wrap.lastElementChild, this.checkAnchors(), document.body.classList.add("body-mounted")
            }, e.prototype.checkAnchors = function() {
                this.anchors = this.view.querySelectorAll(".anchors");
                for (var t = 0; t < this.anchors.length; t++) this.anchors[t].addEventListener("click", this.onAnchorClick)
            }, e.prototype.onAnchorClick = function() {
                s.a.smoothScrool.scrollTo(this.dataset.href)
            }, e.prototype.onEnterCompleted = function() {
                var t = this;
                a.a.to(this.elmTransitions, {
                    opacity: 0,
                    duration: .5,
                    ease: "power1.out",
                    onComplete: function() {
                        t.elmTransitions.classList.remove("show")
                    }
                }), this.$anchors = document.querySelector(".b-anchors"), this.$anchors && (this.anchor = new n.a(this.$anchors))
            }, e.prototype.onLeave = function() {}, e.prototype.onLeaveCompleted = function() {}, e.prototype.resize = function() {}, e.prototype.update = function() {}, e.prototype.scroll = function(t) {
                this.anchor && this.anchor.scroll(t)
            }, e
        }(r.a.Renderer);
    e.a = o
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(1),
        s = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onEnter = function() {
                this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions"))
            }, e.prototype.onEnterCompleted = function() {
                var t = this;
                n.a.to(this.elmTransitions, {
                    opacity: 0,
                    duration: .5,
                    ease: "power1.out",
                    onComplete: function() {
                        t.elmTransitions.classList.remove("show")
                    }
                })
            }, e.prototype.onLeave = function() {}, e.prototype.onLeaveCompleted = function() {}, e.prototype.resize = function() {}, e.prototype.update = function() {}, e.prototype.scroll = function() {}, e
        }(r.a.Renderer);
    e.a = s
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(61),
        s = i(1),
        a = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onEnter = function() {
                this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions")), this.SliderReferences = new n.a
            }, e.prototype.onEnterCompleted = function() {
                var t = this;
                s.a.to(this.elmTransitions, {
                    opacity: 0,
                    duration: .5,
                    ease: "power1.out",
                    onComplete: function() {
                        t.elmTransitions.classList.remove("show")
                    }
                })
            }, e.prototype.onLeaveCompleted = function() {
                this.SliderReferences.destroy(), this.SliderReferences = null
            }, e.prototype.update = function() {
                this.SliderReferences && this.SliderReferences.update()
            }, e.prototype.scroll = function() {}, e.prototype.resize = function() {}, e
        }(r.a.Renderer);
    e.a = a
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(1),
        s = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onEnter = function() {
                this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions"))
            }, e.prototype.onEnterCompleted = function() {
                var t = this;
                n.a.to(this.elmTransitions, {
                    opacity: 0,
                    duration: .5,
                    ease: "power1.out",
                    onComplete: function() {
                        t.elmTransitions.classList.remove("show")
                    }
                })
            }, e.prototype.onLeaveCompleted = function() {}, e.prototype.update = function() {}, e.prototype.resize = function() {}, e.prototype.scroll = function() {}, e
        }(r.a.Renderer);
    e.a = s
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(1),
        s = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onEnter = function() {
                document.body.classList.add("single"), this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions"))
            }, e.prototype.onEnterCompleted = function() {
                var t = this;
                n.a.to(this.elmTransitions, {
                    opacity: 0,
                    duration: .5,
                    ease: "power1.out",
                    onComplete: function() {
                        t.elmTransitions.classList.remove("show")
                    }
                })
            }, e.prototype.onLeave = function() {}, e.prototype.onLeaveCompleted = function() {
                document.body.classList.remove("single")
            }, e.prototype.resize = function() {}, e.prototype.update = function() {}, e.prototype.scroll = function() {}, e
        }(r.a.Renderer);
    e.a = s
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(1),
        s = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onEnter = function() {
                this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions")), document.body.classList.add("single"), document.body.classList.add("body-mounted")
            }, e.prototype.onEnterCompleted = function() {
                var t = this;
                n.a.to(this.elmTransitions, {
                    opacity: 0,
                    duration: .5,
                    ease: "power1.out",
                    onComplete: function() {
                        t.elmTransitions.classList.remove("show")
                    }
                })
            }, e.prototype.onLeave = function() {}, e.prototype.onLeaveCompleted = function() {
                document.body.classList.remove("single")
            }, e.prototype.resize = function() {}, e.prototype.update = function() {}, e.prototype.scroll = function() {}, e
        }(r.a.Renderer);
    e.a = s
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(133),
        s = i(62),
        a = i(134),
        o = i(135),
        h = i(136),
        l = i(137),
        c = i(4),
        p = i(1),
        u = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onEnter = function() {
                this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions")), this.view = this.wrap.lastElementChild, this.checkAnchors(), document.body.classList.add("body-mounted")
            }, e.prototype.onEnterCompleted = function() {
                var t = this;
                this.$dropdowns = document.querySelectorAll(".b-dropdown"), this.$dropdowns.forEach(function(e) {
                    t.Dropdown = new s.a(e)
                }), this.$cardPicto = document.querySelectorAll(".b-card-picto"), this.$cardPicto.forEach(function(e) {
                    t.CardPicto = new h.a(e)
                }), this.$cardPictoCarrousel = document.querySelectorAll(".b-card-picto.card-picto_display-carrousel"), this.$cardPictoCarrousel.forEach(function(e) {
                    t.CardPictoCarrousel = new l.a(e)
                }), this.$etape = document.querySelectorAll(".b-etape"), this.$etape.forEach(function(e) {
                    t.Etape = new a.a(e)
                }), this.Tabs = new o.a, this.SliderReferencesChild = new n.a, p.a.to(this.elmTransitions, {
                    opacity: 0,
                    duration: .5,
                    ease: "power1.out",
                    onComplete: function() {
                        t.elmTransitions.classList.remove("show")
                    }
                })
            }, e.prototype.checkAnchors = function() {
                this.anchors = this.view.querySelectorAll(".anchors");
                for (var t = 0; t < this.anchors.length; t++) this.anchors[t].addEventListener("click", this.onAnchorClick)
            }, e.prototype.onAnchorClick = function() {
                c.a.smoothScrool.scrollTo(this.dataset.href)
            }, e.prototype.onLeave = function() {}, e.prototype.onLeaveCompleted = function() {
                this.Dropdown = null, this.CardPicto = null, this.CardPictoCarrousel = null, this.Etape = null, this.Tabs = null, this.SliderReferencesChild.destroy(), this.SliderReferencesChild = null
            }, e.prototype.resize = function() {}, e.prototype.update = function() {
                this.SliderReferencesChild && this.SliderReferencesChild.update(), this.CardPicto && this.CardPicto.update(), this.CardDropdownPicto && this.Dropdown.update(), this.Etape && this.Etape.update(), this.Tabs && this.Tabs.update()
            }, e.prototype.scroll = function() {}, e
        }(r.a.Renderer);
    e.a = u
}, function(t, e, i) {
    "use strict";
    var r = i(4),
        n = function() {
            this.el = document.querySelector(".slider-references-child"), this.el && (this.bindMethods(), this.getElems(), this.setBoundaries(), this.addEvents(), this.options = {
                easing: .1,
                dragSpeed: 1.5
            }, this.dragging = !1, this.isMouseDown = !1, this.isTranslating = !1, this.currentPosition = 0, this.startPosition = 0, this.endPosition = 0, this.translation = 0)
        };
    n.prototype.bindMethods = function() {
        this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onResize = this.onResize.bind(this)
    }, n.prototype.getElems = function() {
        this.planesWrapper = this.el.querySelector("#planes"), this.isInView = this.el.querySelector(".container"), this.planes = this.el.querySelectorAll(".plane"), this.planeItems = this.el.querySelectorAll(".plane-wrapper"), this.planeObject = [];
        for (var t = 0; t < this.planeItems.length; t++) this.planeObject[t] = {
            id: t,
            wrapper: this.planeItems[t],
            plane: this.planeItems[t].querySelector(".plane"),
            img: this.planeItems[t].querySelector(".plane img")
        }
    }, n.prototype.addEvents = function() {
        this.el.addEventListener("mousemove", this.onMouseMove, {
            passive: !0
        }), this.el.addEventListener("mousedown", this.onMouseDown), this.el.addEventListener("touchmove", this.onMouseMove, {
            passive: !0
        }), this.el.addEventListener("touchstart", this.onMouseDown, {
            passive: !0
        }), this.el.addEventListener("touchend", this.onMouseUp), document.body.addEventListener("mouseup", this.onMouseUp), window.addEventListener("resize", this.onResize)
    }, n.prototype.onPlaneObjectClick = function(t) {
        var e = document.elementFromPoint(t[0], t[1]).dataset.url;
        r.a.Highway.redirect(e)
    }, n.prototype.onEnterCompleted = function() {}, n.prototype.lerp = function(t, e, i) {
        var r = i;
        return (1 - (r = (r = r < 0 ? 0 : r) > 1 ? 1 : r)) * t + r * e
    }, n.prototype.getMousePosition = function(t) {
        var e = [t.clientX, t.clientY];
        return t.targetTouches && t.targetTouches[0] ? e = [t.targetTouches[0].clientX, t.targetTouches[0].clientY] : t.targetTouches && t.changedTouches[0] && (e = [t.changedTouches[0].clientX, t.changedTouches[0].clientY]), e
    }, n.prototype.setBoundaries = function() {
        var t = this.planeItems[0].currentStyle || window.getComputedStyle(this.planeItems[0]),
            e = this.planesWrapper.currentStyle || window.getComputedStyle(this.planesWrapper),
            i = (parseInt(t.marginRight.substring(0, t.marginRight.length - 2)) + parseInt(t.marginRight.substring(0, t.marginRight.length - 2))) * (this.planeItems.length - 1),
            r = parseInt(e.paddingLeft.substring(0, e.paddingLeft.length - 2)) + parseInt(e.paddingRight.substring(0, e.paddingRight.length - 2)),
            n = this.planeItems[0].offsetWidth * this.planeItems.length + i + r;
        this.totalTranslateLength = n - window.innerWidth, this.planesWrapper.style.width = n + "px", this.direction = 0, this.boundaries = {
            max: -1 * this.planesWrapper.clientWidth + window.innerWidth,
            min: 0,
            sliderSize: this.planesWrapper.clientWidth,
            referentSize: window.innerWidth
        }
    }, n.prototype.onMouseDown = function(t) {
        this.dragging = !1, this.isMouseDown = !0, this.planesWrapper.classList.add("dragged");
        var e = this.getMousePosition(t);
        this.startPosition = e[this.direction]
    }, n.prototype.onMouseMove = function(t) {
        if (this.isMouseDown) {
            var e = this.getMousePosition(t);
            this.dragging = !0, this.currentPosition = this.endPosition + (e[this.direction] - this.startPosition) * this.options.dragSpeed, this.currentPosition > this.boundaries.min && this.currentPosition < this.boundaries.max ? this.isTranslating = !0 : (this.currentPosition = Math.min(this.currentPosition, this.boundaries.min), this.currentPosition = Math.max(this.currentPosition, this.boundaries.max))
        }
    }, n.prototype.onMouseUp = function(t) {
        this.isMouseDown = !1, this.planesWrapper.classList.remove("dragged"), this.endPosition = this.currentPosition;
        var e = this.getMousePosition(t);
        e[this.direction] === this.startPosition && this.onPlaneObjectClick(e)
    }, n.prototype.onResize = function() {
        var t = this.translation / this.boundaries.sliderSize;
        this.setBoundaries(), this.planesWrapper.style.transform = "tanslate3d(0, 0, 0)";
        var e = t * this.boundaries.sliderSize;
        e = Math.min(e, this.boundaries.min), e = Math.max(e, this.boundaries.max), this.translateSlider(e), this.currentPosition = e, this.endPosition = e
    }, n.prototype.translateSlider = function(t) {
        var e = Math.floor(100 * t) / 100,
            i = 0 === this.direction ? "translateX" : "translateY";
        this.planesWrapper.style.transform = i + "(" + e + "px", this.isTranslating && !this.isMouseDown && (this.isTranslating = !1), this.translation = e
    }, n.prototype.destroy = function() {
        this.el.removeEventListener("mousemove", this.onMouseMove.bind(this), {
            passive: !0
        }), this.el.removeEventListener("mousedown", this.onMouseDown.bind(this)), document.body.removeEventListener("mouseup", this.onMouseUp.bind(this)), this.el.removeEventListener("touchmove", this.onMouseMove.bind(this), {
            passive: !0
        }), this.el.removeEventListener("touchstart", this.onMouseDown.bind(this), {
            passive: !0
        }), this.el.removeEventListener("touchcancel", this.onMouseUp.bind(this))
    }, n.prototype.update = function() {
        var t = this.lerp(this.translation, this.currentPosition, this.options.easing);
        this.translateSlider(t)
    }, e.a = n
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(4),
        s = function(t) {
            this.items = t.querySelectorAll(".etape__item"), this.wrapper = t.querySelector(".etape"), this.navRight = t.querySelector(".etape__navigation-right"), this.navLeft = t.querySelector(".etape__navigation-left"), this.widthItem = this.items[0].offsetWidth, this.widthWrapper = this.widthItem * this.items.length, this.position = 0, window.innerWidth > 1024 && (this.init(), this.addEvents())
        };
    s.prototype.addEvents = function() {
        this.navRight.addEventListener("click", this.navigateToRight.bind(this)), this.navLeft.addEventListener("click", this.navigateToLeft.bind(this))
    }, s.prototype.init = function() {
        this.wrapper.style.width = this.widthWrapper + "px", this.wrapper.style.transform = "translateX(0)", this.limitWidth = -this.widthWrapper + 2 * this.widthItem, this.navRight.setAttribute("disabled", "false"), this.navLeft.setAttribute("disabled", "true"), n.a.smoothScrool.update()
    }, s.prototype.navigateToRight = function() {
        this.position > this.limitWidth ? (this.position = this.position - this.widthItem, this.navRight.setAttribute("disabled", "false"), this.position <= this.limitWidth && this.navRight.setAttribute("disabled", "true"), 0 === this.position ? this.navLeft.setAttribute("disabled", "true") : this.navLeft.setAttribute("disabled", "false"), r.a.to(this.wrapper, {
            x: this.position,
            duration: .4,
            ease: "expo.out"
        }), this.update()) : this.navRight.setAttribute("disabled", "true")
    }, s.prototype.navigateToLeft = function() {
        this.position < 0 ? (this.position = this.position + this.widthItem, this.navLeft.setAttribute("disabled", "false"), 0 === this.position && this.navLeft.setAttribute("disabled", "true"), this.position <= this.limitWidth ? this.navRight.setAttribute("disabled", "true") : this.navRight.setAttribute("disabled", "false"), r.a.to(this.wrapper, {
            x: this.position,
            duration: .4,
            ease: "expo.out"
        }), this.update()) : this.navLeft.setAttribute("disabled", "true")
    }, s.prototype.update = function() {
        n.a.smoothScrool.update()
    }, e.a = s
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(4),
        s = function() {
            var t = this;
            this.itemsH = document.querySelectorAll(".b-tabs__header-item"), this.itemsB = document.querySelectorAll(".b-tabs__body-item"), this.body = document.querySelector(".b-tabs__body"), this.wrapperH = document.querySelector(".b-tabs__header-wrapper"), this.wrapperB = document.querySelector(".b-tabs__body-wrapper"), this.navRight = document.querySelector(".b-tabs__header-navigation__right"), this.navLeft = document.querySelector(".b-tabs__header-navigation__left"), this.widthWrapper = 0, this.widthWrapperB = 0, this.position = 0, this.header_translate = 0, this.body_transalte = 0, document.querySelector(".b-tabs") && (window.innerWidth < 768 ? this.widthWrapper = this.body.offsetWidth * this.itemsH.length : this.itemsH.forEach(function(e) {
                t.widthWrapper = t.widthWrapper + e.offsetWidth + 40
            }), this.itemsH.length > 0 && (this.init(), this.addEvents()))
        };
    s.prototype.addEvents = function() {
        this.navRight.addEventListener("click", this.navigateToRight.bind(this)), this.navLeft.addEventListener("click", this.navigateToLeft.bind(this))
    }, s.prototype.init = function() {
        var t = this;
        this.itemsB.forEach(function(e) {
            e.style.width = t.body.offsetWidth + "px"
        }), window.innerWidth < 768 && this.itemsH.forEach(function(e) {
            e.style.width = t.body.offsetWidth + "px"
        }), this.wrapperH.style.width = this.widthWrapper + "px", this.wrapperB.style.width = this.body.offsetWidth * this.itemsB.length + "px", this.wrapperB.style.height = this.itemsB[0].offsetHeight + "px", this.wrapperH.style.transform = "translateX(0)", this.wrapperB.style.transform = "translateX(0)", this.navRight.setAttribute("disabled", "false"), this.navLeft.setAttribute("disabled", "true"), n.a.smoothScrool.update()
    }, s.prototype.navigateToRight = function() {
        this.position < this.itemsH.length - 1 ? (this.header_translate = this.header_translate - this.itemsH[this.position].offsetWidth - 40, this.body_transalte = this.body_transalte - this.body.offsetWidth, this.itemsH[this.position + 1].classList.add("active"), this.height = this.itemsB[this.position + 1].offsetHeight, this.itemsH[this.position].classList.remove("active"), this.position = this.position + 1, this.navRight.setAttribute("disabled", "false"), this.position <= this.limitWidth && this.navRight.setAttribute("disabled", "true"), 0 === this.position ? this.navLeft.setAttribute("disabled", "true") : this.navLeft.setAttribute("disabled", "false"), r.a.to(this.wrapperH, {
            x: this.header_translate,
            duration: .4,
            ease: "expo.out"
        }), r.a.to(this.wrapperB, {
            x: this.body_transalte,
            height: this.height,
            duration: .4,
            ease: "expo.out"
        }), this.update()) : this.navRight.setAttribute("disabled", "true")
    }, s.prototype.navigateToLeft = function() {
        this.position > 0 ? (this.header_translate = this.header_translate + this.itemsH[this.position - 1].offsetWidth + 40, this.body_transalte = this.body_transalte + this.body.offsetWidth, this.itemsH[this.position - 1].classList.add("active"), this.height = this.itemsB[this.position - 1].offsetHeight, this.itemsH[this.position].classList.remove("active"), this.position = this.position - 1, this.navLeft.setAttribute("disabled", "false"), 0 === this.position && this.navLeft.setAttribute("disabled", "true"), this.position <= this.limitWidth ? this.navRight.setAttribute("disabled", "true") : this.navRight.setAttribute("disabled", "false"), r.a.to(this.wrapperH, {
            x: this.header_translate,
            duration: .4,
            ease: "expo.out"
        }), r.a.to(this.wrapperB, {
            x: this.body_transalte,
            height: this.height,
            duration: .4,
            ease: "expo.out"
        }), this.update()) : this.navLeft.setAttribute("disabled", "true")
    }, s.prototype.update = function() {
        n.a.smoothScrool.update()
    }, e.a = s
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(4),
        s = function(t) {
            this.items = t.querySelectorAll(".card-picto__item");
            for (var e = 0; e < this.items.length; e++) null !== this.items[e].querySelector(".card-picto__item-content__read-more") && (this.button = this.items[e].querySelector(".card-picto__item-content__read-more"), this.button.addEventListener("click", this.onHeadClick.bind(this, e)));
            this.init()
        };
    s.prototype.init = function() {
        n.a.smoothScrool.update()
    }, s.prototype.onHeadClick = function(t) {
        this.isOpen ? this.close(t) : this.open(t)
    }, s.prototype.open = function(t) {
        if (!this.isOpen) {
            this.activeIndex = t, this.items[t].classList.add("active"), this.readMore = this.items[t].querySelector(".card-picto__item-content__read-more"), this.content = this.items[t].querySelector(".card-picto__item-content__secondary"), this.readMore.textContent = "Lire moins de contenu";
            r.a.to(this.content, {
                height: "auto",
                opacity: 1,
                duration: .4,
                ease: "expo.out"
            }), this.isOpen = !0, this.oldIndex = t, this.update()
        }
    }, s.prototype.close = function(t) {
        var e = this;
        this.items[this.activeIndex].classList.remove("active"), this.readMore = this.items[this.activeIndex].querySelector(".card-picto__item-content__read-more"), this.content = this.items[this.activeIndex].querySelector(".card-picto__item-content__secondary"), r.a.to(this.content, {
            height: 0,
            opacity: 0,
            duration: .4,
            ease: "expo.out",
            onComplete: function() {
                e.isAnimating = !1, e.readMore.textContent = "Lire plus de contenu"
            }
        }), this.isOpen = !1, t !== this.activeIndex && this.open(t), this.update()
    }, s.prototype.update = function() {
        n.a.smoothScrool.update()
    }, e.a = s
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = function(t) {
            this.items = t.querySelectorAll(".card-picto__item"), this.wrapper = t.querySelector(".b-card-picto__carrousel-wrapper"), this.navRight = t.querySelector(".b-card-picto__navigation-right"), this.navLeft = t.querySelector(".b-card-picto__navigation-left"), window.innerWidth >= 768 ? this.widthItem = this.items[0].offsetWidth + 20 : this.widthItem = this.items[0].offsetWidth + 56, this.widthWrapper = this.widthItem * this.items.length, this.position = 0, this.init(), this.addEvents()
        };
    n.prototype.addEvents = function() {
        this.navRight.addEventListener("click", this.navigateToRight.bind(this)), this.navLeft.addEventListener("click", this.navigateToLeft.bind(this))
    }, n.prototype.init = function() {
        this.wrapper.style.width = this.widthWrapper + "px", this.wrapper.style.transform = "translateX(0)", this.navRight.setAttribute("disabled", "false"), this.navLeft.setAttribute("disabled", "true"), window.innerWidth > 1024 ? this.limitWidth = -this.widthWrapper + 2 * this.widthItem : this.limitWidth = -this.widthWrapper + this.widthItem
    }, n.prototype.navigateToRight = function() {
        this.position > this.limitWidth ? (this.navRight.setAttribute("disabled", "false"), this.position = this.position - this.widthItem, this.position <= this.limitWidth && this.navRight.setAttribute("disabled", "true"), 0 === this.position ? this.navLeft.setAttribute("disabled", "true") : this.navLeft.setAttribute("disabled", "false"), r.a.to(this.wrapper, {
            x: this.position,
            duration: .4,
            ease: "expo.out"
        })) : this.navRight.setAttribute("disabled", "true")
    }, n.prototype.navigateToLeft = function() {
        this.position < 0 ? (this.position = this.position + this.widthItem, this.navLeft.setAttribute("disabled", "false"), 0 === this.position && this.navLeft.setAttribute("disabled", "true"), this.position <= this.limitWidth ? this.navRight.setAttribute("disabled", "true") : this.navRight.setAttribute("disabled", "false"), r.a.to(this.wrapper, {
            x: this.position,
            duration: .4,
            ease: "expo.out"
        })) : this.navLeft.setAttribute("disabled", "true")
    }, e.a = n
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(139),
        s = i(1),
        a = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onEnter = function() {
                this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions")), document.body.classList.add("body-mounted")
            }, e.prototype.onEnterCompleted = function() {
                var t = this;
                this.map = new n.a, s.a.to(this.elmTransitions, {
                    opacity: 0,
                    duration: .5,
                    ease: "power1.out",
                    onComplete: function() {
                        t.elmTransitions.classList.remove("show")
                    }
                })
            }, e.prototype.onLeave = function() {}, e.prototype.onLeaveCompleted = function() {
                this.map = null
            }, e.prototype.resize = function() {}, e.prototype.update = function() {}, e.prototype.scroll = function() {}, e
        }(r.a.Renderer);
    e.a = a
}, function(t, e, i) {
    "use strict";
    var r = function() {
        var t = this;
        this.script = document.createElement("script"), this.scripts = document.getElementsByTagName("script")[0], this.key = "AIzaSyCJhLG5M91rqaxXLPGnlgpIcXIh_44W2I4", this.script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.key, this.scripts.parentNode.insertBefore(this.script, this.scripts), this.script.addEventListener("load", function() {
            t.initMapCarte()
        })
    };
    r.prototype.initMapCarte = function() {
        var t = this;
        this.locations = [
            ["Digital Cover - Lyon", 45.77416155143742, 4.809034881479654, 3],
            ["Digital Cover - Malte", 35.92316, 14.48868, 2],
            ["Digital Cover - Paris", 48.84502, 2.37155, 1]
        ], this.map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: new google.maps.LatLng(47.43878751046759, 19.113373160362244),
            disableDefaultUI: !0,
            styles: [{
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#e9e9e9"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 29
                }, {
                    weight: .2
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 18
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#dedede"
                }, {
                    lightness: 21
                }]
            }, {
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                elementType: "labels.text.fill",
                stylers: [{
                    saturation: 36
                }, {
                    color: "#333333"
                }, {
                    lightness: 40
                }]
            }, {
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#f2f2f2"
                }, {
                    lightness: 19
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }]
        }), this.icon = {
            url: "/app/themes/digitalcover/resources/assets/images/pin.png",
            scaledSize: new google.maps.Size(42, 60)
        };
        for (var e = 0; e < this.locations.length; e++) t.marker = new google.maps.Marker({
            position: new google.maps.LatLng(t.locations[e][1], t.locations[e][2]),
            map: t.map,
            icon: t.icon
        });
        window.onresize = function() {
            window.innerWidth > 1200 ? t.map.setCenter(new google.maps.LatLng(47.43878751046759, 17.104275226593018)) : window.innerWidth > 992 ? t.map.setCenter(new google.maps.LatLng(47.43878751046759, 19.113373160362244)) : window.innerWidth > 768 ? t.map.setCenter(new google.maps.LatLng(47.43878751046759, 19.113373160362244)) : (window.innerWidth, t.map.setCenter(new google.maps.LatLng(47.43878751046759, 19.113373160362244)))
        }
    }, e.a = r
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(4),
        s = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.in = function(t) {
                var e = t.from,
                    i = t.to,
                    r = t.done;
                e.remove(), this.getElems(), window.scrollTo(0, 0), n.a.setupTitles(i), n.a.setCoverSize(), this.startSmoothScrool(), document.body.classList.remove("overflow-mobile"), this.loader.classList.remove("show"), setTimeout(r, 700)
            }, e.prototype.out = function(t) {
                var e = t.done;
                this.getElems(), this.stopSmoothScrool(), this.loader.classList.add("show"), document.body.classList.add("overflow-mobile"), setTimeout(e, 1200)
            }, e.prototype.getElems = function() {
                this.loader = document.querySelector(".loader")
            }, e.prototype.startSmoothScrool = function() {
                n.a.smoothScrool && (n.a.isMobile ? (window.scrollTo(0, 0), n.a.smoothScrool.update(), n.a.smoothScrool.start()) : (n.a.smoothScrool.setScroll(0, 0), n.a.smoothScrool.update(), n.a.smoothScrool.start()))
            }, e.prototype.stopSmoothScrool = function() {
                n.a.smoothScrool && (n.a.isMobile, n.a.smoothScrool.stop())
            }, e
        }(r.a.Transition);
    e.a = s
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(1),
        s = i(4),
        a = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.in = function(t) {
                var e = t.from,
                    i = t.to,
                    r = t.done;
                e.remove(), this.getElems(), window.scrollTo(0, 0), s.a.setupTitles(i), s.a.setCoverSize(), this.startSmoothScrool(), r()
            }, e.prototype.out = function(t) {
                var e = t.done;
                this.getElems(), this.stopSmoothScrool(), this.elmTransitions.classList.add("show"), n.a.to(this.elmTransitions, {
                    opacity: 1,
                    duration: .8,
                    ease: "power1.inOut",
                    onComplete: e
                })
            }, e.prototype.getElems = function() {
                this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions"))
            }, e.prototype.startSmoothScrool = function() {
                s.a.smoothScrool && (s.a.isMobile ? (window.scrollTo(0, 0), s.a.smoothScrool.update(), s.a.smoothScrool.start()) : (s.a.smoothScrool.setScroll(0, 0), s.a.smoothScrool.update(), s.a.smoothScrool.start()))
            }, e.prototype.stopSmoothScrool = function() {
                s.a.smoothScrool && (s.a.isMobile, s.a.smoothScrool.stop())
            }, e
        }(r.a.Transition);
    e.a = a
}, function(t, e, i) {
    var r;
    r = function() {
        "use strict";
        var t = document,
            e = t.createTextNode.bind(t);

        function i(t, e, i) {
            t.style.setProperty(e, i)
        }

        function r(t, e) {
            return t.appendChild(e)
        }

        function n(e, i, n, s) {
            var a = t.createElement("span");
            return i && (a.className = i), n && (!s && a.setAttribute("data-" + i, n), a.textContent = n), e && r(e, a) || a
        }

        function s(t, e) {
            return t.getAttribute("data-" + e)
        }

        function a(e, i) {
            return e && 0 != e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (i || t).querySelectorAll(e)) : []
        }

        function o(t) {
            for (var e = []; t--;) e[t] = [];
            return e
        }

        function h(t, e) {
            t && t.some(e)
        }

        function l(t) {
            return function(e) {
                return t[e]
            }
        }
        var c = {};

        function p(t, e, i, r) {
            return {
                by: t,
                depends: e,
                key: i,
                split: r
            }
        }

        function u(t) {
            return function t(e, i, r) {
                var n = r.indexOf(e);
                if (-1 == n) r.unshift(e), h(c[e].depends, function(i) {
                    t(i, e, r)
                });
                else {
                    var s = r.indexOf(i);
                    r.splice(n, 1), r.splice(s, 0, e)
                }
                return r
            }(t, 0, []).map(l(c))
        }

        function f(t) {
            c[t.by] = t
        }

        function d(t, i, s, o, l) {
            t.normalize();
            var c = [],
                p = document.createDocumentFragment();
            o && c.push(t.previousSibling);
            var u = [];
            return a(t.childNodes).some(function(t) {
                if (!t.tagName || t.hasChildNodes()) {
                    if (t.childNodes && t.childNodes.length) return u.push(t), void c.push.apply(c, d(t, i, s, o, l));
                    var r = t.wholeText || "",
                        a = r.trim();
                    a.length && (" " === r[0] && u.push(e(" ")), h(a.split(s), function(t, e) {
                        e && l && u.push(n(p, "whitespace", " ", l));
                        var r = n(p, i, t);
                        c.push(r), u.push(r)
                    }), " " === r[r.length - 1] && u.push(e(" ")))
                } else u.push(t)
            }), h(u, function(t) {
                r(p, t)
            }), t.innerHTML = "", r(t, p), c
        }
        var m = p("words", 0, "word", function(t) {
                return d(t, "word", /\s+/, 0, 1)
            }),
            y = "chars",
            g = p(y, ["words"], "char", function(t, e, i) {
                var r = [];
                return h(i.words, function(t, i) {
                    r.push.apply(r, d(t, "char", "", e.whitespace && i))
                }), r
            });

        function v(t) {
            var e = (t = t || {}).key;
            return a(t.target || "[data-splitting]").map(function(r) {
                var n = r["🍌"];
                if (!t.force && n) return n;
                n = r["🍌"] = {
                    el: r
                };
                var a = u(t.by || s(r, "splitting") || y),
                    o = function(t, e) {
                        for (var i in e) t[i] = e[i];
                        return t
                    }({}, t);
                return h(a, function(t) {
                    if (t.split) {
                        var s = t.by,
                            a = (e ? "-" + e : "") + t.key,
                            l = t.split(r, o, n);
                        a && function(t, e, r) {
                            var n = "--" + e,
                                s = n + "-index";
                            h(r, function(t, e) {
                                Array.isArray(t) ? h(t, function(t) {
                                    i(t, s, e)
                                }) : i(t, s, e)
                            }), i(t, n + "-total", r.length)
                        }(r, a, l), n[s] = l, r.classList.add(s)
                    }
                }), r.classList.add("splitting"), n
            })
        }

        function b(t, e, i) {
            var r = {};
            return h(a(e.matching || t.children, t), function(t) {
                var e = Math.round(t[i]);
                (r[e] || (r[e] = [])).push(t)
            }), Object.keys(r).map(Number).sort(_).map(l(r))
        }

        function _(t, e) {
            return t - e
        }
        v.html = function(t) {
            var e = (t = t || {}).target = n();
            return e.innerHTML = t.content, v(t), e.outerHTML
        }, v.add = f;
        var w = p("lines", ["words"], "line", function(t, e, i) {
                return b(t, {
                    matching: i.words
                }, "offsetTop")
            }),
            S = p("items", 0, "item", function(t, e) {
                return a(e.matching || t.children, t)
            }),
            E = p("rows", 0, "row", function(t, e) {
                return b(t, e, "offsetTop")
            }),
            x = p("cols", 0, "col", function(t, e) {
                return b(t, e, "offsetLeft")
            }),
            P = p("grid", ["rows", "cols"]),
            T = p("layout", 0, 0, function(t, e) {
                var o = e.rows = +(e.rows || s(t, "rows") || 1),
                    h = e.columns = +(e.columns || s(t, "columns") || 1);
                if (e.image = e.image || s(t, "image") || t.currentSrc || t.src, e.image) {
                    var l = a("img", t)[0];
                    e.image = l && (l.currentSrc || l.src)
                }
                e.image && i(t, "background-image", "url(" + e.image + ")");
                for (var c = o * h, p = [], u = n(0, "cell-grid"); c--;) {
                    var f = n(u, "cell");
                    n(f, "cell-inner"), p.push(f)
                }
                return r(t, u), p
            }),
            A = p("cellRows", ["layout"], "row", function(t, e, i) {
                var r = e.rows,
                    n = o(r);
                return h(i.layout, function(t, e, i) {
                    n[Math.floor(e / (i.length / r))].push(t)
                }), n
            }),
            M = p("cellColumns", ["layout"], "col", function(t, e, i) {
                var r = e.columns,
                    n = o(r);
                return h(i.layout, function(t, e) {
                    n[e % r].push(t)
                }), n
            }),
            C = p("cells", ["cellRows", "cellColumns"], "cell", function(t, e, i) {
                return i.layout
            });
        return f(m), f(g), f(w), f(S), f(E), f(x), f(P), f(T), f(A), f(M), f(C), v
    }, t.exports = r()
}, function(module, exports, __webpack_require__) {
    var factory;
    "undefined" != typeof navigator && (factory = function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            _useWebWorker = !1,
            initialDefaultFrame = -999999,
            setWebWorker = function(t) {
                _useWebWorker = !!t
            },
            getWebWorker = function() {
                return _useWebWorker
            },
            setLocationHref = function(t) {
                locationHref = t
            },
            getLocationHref = function() {
                return locationHref
            };

        function createTag(t) {
            return document.createElement(t)
        }

        function extendPrototype(t, e) {
            var i, r, n = t.length;
            for (i = 0; i < n; i += 1)
                for (var s in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, s) && (e.prototype[s] = r[s])
        }

        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t, e
        }
        var audioControllerFactory = function() {
                function t(t) {
                    this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                }
                return t.prototype = {
                        addAudio: function(t) {
                            this.audios.push(t)
                        },
                        pause: function() {
                            var t, e = this.audios.length;
                            for (t = 0; t < e; t += 1) this.audios[t].pause()
                        },
                        resume: function() {
                            var t, e = this.audios.length;
                            for (t = 0; t < e; t += 1) this.audios[t].resume()
                        },
                        setRate: function(t) {
                            var e, i = this.audios.length;
                            for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                        },
                        createAudio: function(t) {
                            return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                src: [t]
                            }) : {
                                isPlaying: !1,
                                play: function() {
                                    this.isPlaying = !0
                                },
                                seek: function() {
                                    this.isPlaying = !1
                                },
                                playing: function() {},
                                rate: function() {},
                                setVolume: function() {}
                            }
                        },
                        setAudioFactory: function(t) {
                            this.audioFactory = t
                        },
                        setVolume: function(t) {
                            this._volume = t, this._updateVolume()
                        },
                        mute: function() {
                            this._isMuted = !0, this._updateVolume()
                        },
                        unmute: function() {
                            this._isMuted = !1, this._updateVolume()
                        },
                        getVolume: function() {
                            return this._volume
                        },
                        _updateVolume: function() {
                            var t, e = this.audios.length;
                            for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                        }
                    },
                    function() {
                        return new t
                    }
            }(),
            createTypedArray = function() {
                function t(t, e) {
                    var i, r = 0,
                        n = [];
                    switch (t) {
                        case "int16":
                        case "uint8c":
                            i = 1;
                            break;
                        default:
                            i = 1.1
                    }
                    for (r = 0; r < e; r += 1) n.push(i);
                    return n
                }
                return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                    return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                } : t
            }();

        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            })
        }

        function _typeof$6(t) {
            "@babel/helpers - typeof";
            return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var subframeEnabled = !0,
            expressionsPlugin = null,
            idPrefix = "",
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            _shouldRoundValues = !1,
            bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};

        function ProjectInterface$1() {
            return {}
        }! function() {
            var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                i = e.length;
            for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
            if ("object" === _typeof$6(t) && t.length) {
                var e, i = createSizedArray(t.length),
                    r = t.length;
                for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
                return i
            }
            return Math.abs(t)
        };
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function roundValues(t) {
            _shouldRoundValues = !!t
        }

        function bmRnd(t) {
            return _shouldRoundValues ? Math.round(t) : t
        }

        function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, i, r) {
            this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, i, r) {
            this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, i) {
            this.type = t, this.firstFrame = e, this.totalFrames = i
        }

        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
            this.type = t, this.nativeError = e
        }
        var createElementID = (_count = 0, function() {
                return idPrefix + "__lottie_element_" + (_count += 1)
            }),
            _count;

        function HSVtoRGB(t, e, i) {
            var r, n, s, a, o, h, l, c;
            switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), c = i * (1 - (1 - o) * e), a % 6) {
                case 0:
                    r = i, n = c, s = h;
                    break;
                case 1:
                    r = l, n = i, s = h;
                    break;
                case 2:
                    r = h, n = i, s = c;
                    break;
                case 3:
                    r = h, n = l, s = i;
                    break;
                case 4:
                    r = c, n = h, s = i;
                    break;
                case 5:
                    r = i, n = h, s = l
            }
            return [r, n, s]
        }

        function RGBtoHSV(t, e, i) {
            var r, n = Math.max(t, e, i),
                s = Math.min(t, e, i),
                a = n - s,
                o = 0 === n ? 0 : a / n,
                h = n / 255;
            switch (n) {
                case s:
                    r = 0;
                    break;
                case t:
                    r = e - i + a * (e < i ? 6 : 0), r /= 6 * a;
                    break;
                case e:
                    r = i - t + 2 * a, r /= 6 * a;
                    break;
                case i:
                    r = t - e + 4 * a, r /= 6 * a
            }
            return [r, o, h]
        }

        function addSaturationToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addBrightnessToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addHueToRGB(t, e) {
            var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
        }
        var rgbToHex = function() {
                var t, e, i = [];
                for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
                return function(t, e, r) {
                    return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
                }
            }(),
            setSubframeEnabled = function(t) {
                subframeEnabled = !!t
            },
            getSubframeEnabled = function() {
                return subframeEnabled
            },
            setExpressionsPlugin = function(t) {
                expressionsPlugin = t
            },
            getExpressionsPlugin = function() {
                return expressionsPlugin
            },
            setDefaultCurveSegments = function(t) {
                defaultCurveSegments = t
            },
            getDefaultCurveSegments = function() {
                return defaultCurveSegments
            },
            setIdPrefix = function(t) {
                idPrefix = t
            },
            getIdPrefix = function() {
                return idPrefix
            };

        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
            "@babel/helpers - typeof";
            return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var dataManager = function() {
                var t, e, i = 1,
                    r = [],
                    n = {
                        onmessage: function() {},
                        postMessage: function(e) {
                            t({
                                data: e
                            })
                        }
                    },
                    s = {
                        postMessage: function(t) {
                            n.onmessage({
                                data: t
                            })
                        }
                    };

                function a() {
                    e || ((e = function(e) {
                        if (window.Worker && window.Blob && getWebWorker()) {
                            var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                    type: "text/javascript"
                                }),
                                r = URL.createObjectURL(i);
                            return new Worker(r)
                        }
                        return t = e, n
                    }(function(t) {
                        if (s.dataManager || (s.dataManager = function() {
                                function t(n, s) {
                                    var a, o, h, l, c, p, u, f = n.length;
                                    for (o = 0; o < f; o += 1)
                                        if ("ks" in (a = n[o]) && !a.completed) {
                                            if (a.completed = !0, a.tt && (n[o - 1].td = a.tt), a.hasMask) {
                                                var d = a.masksProperties;
                                                for (l = d.length, h = 0; h < l; h += 1)
                                                    if (d[h].pt.k.i) r(d[h].pt.k);
                                                    else
                                                        for (p = d[h].pt.k.length, c = 0; c < p; c += 1) d[h].pt.k[c].s && r(d[h].pt.k[c].s[0]), d[h].pt.k[c].e && r(d[h].pt.k[c].e[0])
                                            }
                                            0 === a.ty ? (a.layers = e(a.refId, s), t(a.layers, s)) : 4 === a.ty ? i(a.shapes) : 5 === a.ty && (0 === (u = a).t.a.length && u.t.p)
                                        }
                                }

                                function e(t, e) {
                                    var i = function(t, e) {
                                        for (var i = 0, r = e.length; i < r;) {
                                            if (e[i].id === t) return e[i];
                                            i += 1
                                        }
                                        return null
                                    }(t, e);
                                    return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
                                }

                                function i(t) {
                                    var e, n, s;
                                    for (e = t.length - 1; e >= 0; e -= 1)
                                        if ("sh" === t[e].ty)
                                            if (t[e].ks.k.i) r(t[e].ks.k);
                                            else
                                                for (s = t[e].ks.k.length, n = 0; n < s; n += 1) t[e].ks.k[n].s && r(t[e].ks.k[n].s[0]), t[e].ks.k[n].e && r(t[e].ks.k[n].e[0]);
                                    else "gr" === t[e].ty && i(t[e].it)
                                }

                                function r(t) {
                                    var e, i = t.i.length;
                                    for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                }

                                function n(t, e) {
                                    var i = e ? e.split(".") : [100, 100, 100];
                                    return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                                }
                                var s, a = function() {
                                        var t = [4, 4, 14];

                                        function e(t) {
                                            var e, i, r, n = t.length;
                                            for (e = 0; e < n; e += 1) 5 === t[e].ty && (i = t[e], r = i.t.d, i.t.d = {
                                                k: [{
                                                    s: r,
                                                    t: 0
                                                }]
                                            })
                                        }
                                        return function(i) {
                                            if (n(t, i.v) && (e(i.layers), i.assets)) {
                                                var r, s = i.assets.length;
                                                for (r = 0; r < s; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                                            }
                                        }
                                    }(),
                                    o = (s = [4, 7, 99], function(t) {
                                        if (t.chars && !n(s, t.v)) {
                                            var e, r = t.chars.length;
                                            for (e = 0; e < r; e += 1) {
                                                var a = t.chars[e];
                                                a.data && a.data.shapes && (i(a.data.shapes), a.data.ip = 0, a.data.op = 99999, a.data.st = 0, a.data.sr = 1, a.data.ks = {
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    }
                                                }, t.chars[e].t || (a.data.shapes.push({
                                                    ty: "no"
                                                }), a.data.shapes[0].it.push({
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    },
                                                    sk: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    sa: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    ty: "tr"
                                                })))
                                            }
                                        }
                                    }),
                                    h = function() {
                                        var t = [5, 7, 15];

                                        function e(t) {
                                            var e, i, r, n = t.length;
                                            for (e = 0; e < n; e += 1) 5 === t[e].ty && (i = t[e], r = void 0, "number" == typeof(r = i.t.p).a && (r.a = {
                                                a: 0,
                                                k: r.a
                                            }), "number" == typeof r.p && (r.p = {
                                                a: 0,
                                                k: r.p
                                            }), "number" == typeof r.r && (r.r = {
                                                a: 0,
                                                k: r.r
                                            }))
                                        }
                                        return function(i) {
                                            if (n(t, i.v) && (e(i.layers), i.assets)) {
                                                var r, s = i.assets.length;
                                                for (r = 0; r < s; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                                            }
                                        }
                                    }(),
                                    l = function() {
                                        var t = [4, 1, 9];

                                        function e(t) {
                                            var i, r, n, s = t.length;
                                            for (i = 0; i < s; i += 1)
                                                if ("gr" === t[i].ty) e(t[i].it);
                                                else if ("fl" === t[i].ty || "st" === t[i].ty)
                                                if (t[i].c.k && t[i].c.k[0].i)
                                                    for (n = t[i].c.k.length, r = 0; r < n; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                                                else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                                        }

                                        function i(t) {
                                            var i, r = t.length;
                                            for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
                                        }
                                        return function(e) {
                                            if (n(t, e.v) && (i(e.layers), e.assets)) {
                                                var r, s = e.assets.length;
                                                for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                            }
                                        }
                                    }(),
                                    c = function() {
                                        var t = [4, 4, 18];

                                        function e(t) {
                                            var i, r, n;
                                            for (i = t.length - 1; i >= 0; i -= 1)
                                                if ("sh" === t[i].ty)
                                                    if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                                    else
                                                        for (n = t[i].ks.k.length, r = 0; r < n; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                                            else "gr" === t[i].ty && e(t[i].it)
                                        }

                                        function i(t) {
                                            var i, r, n, s, a, o, h = t.length;
                                            for (r = 0; r < h; r += 1) {
                                                if ((i = t[r]).hasMask) {
                                                    var l = i.masksProperties;
                                                    for (s = l.length, n = 0; n < s; n += 1)
                                                        if (l[n].pt.k.i) l[n].pt.k.c = l[n].cl;
                                                        else
                                                            for (o = l[n].pt.k.length, a = 0; a < o; a += 1) l[n].pt.k[a].s && (l[n].pt.k[a].s[0].c = l[n].cl), l[n].pt.k[a].e && (l[n].pt.k[a].e[0].c = l[n].cl)
                                                }
                                                4 === i.ty && e(i.shapes)
                                            }
                                        }
                                        return function(e) {
                                            if (n(t, e.v) && (i(e.layers), e.assets)) {
                                                var r, s = e.assets.length;
                                                for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                                            }
                                        }
                                    }();
                                var p = {};
                                return p.completeData = function(i) {
                                    i.__complete || (l(i), a(i), o(i), h(i), c(i), t(i.layers, i.assets), function(i, r) {
                                        if (i) {
                                            var n = 0,
                                                s = i.length;
                                            for (n = 0; n < s; n += 1) 1 === i[n].t && (i[n].data.layers = e(i[n].data.refId, r), t(i[n].data.layers, r))
                                        }
                                    }(i.chars, i.assets), i.__complete = !0)
                                }, p.checkColors = l, p.checkChars = o, p.checkPathProperties = h, p.checkShapes = c, p.completeLayers = t, p
                            }()), s.assetLoader || (s.assetLoader = function() {
                                function t(t) {
                                    var e = t.getResponseHeader("content-type");
                                    return e && "json" === t.responseType && -1 !== e.indexOf("json") ? t.response : t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                }
                                return {
                                    load: function(e, i, r, n) {
                                        var s, a = new XMLHttpRequest;
                                        try {
                                            a.responseType = "json"
                                        } catch (t) {}
                                        a.onreadystatechange = function() {
                                            if (4 === a.readyState)
                                                if (200 === a.status) s = t(a), r(s);
                                                else try {
                                                    s = t(a), r(s)
                                                } catch (t) {
                                                    n && n(t)
                                                }
                                        };
                                        try {
                                            a.open("GET", e, !0)
                                        } catch (t) {
                                            a.open("GET", i + "/" + e, !0)
                                        }
                                        a.send()
                                    }
                                }
                            }()), "loadAnimation" === t.data.type) s.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
                            s.dataManager.completeData(e), s.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: "success"
                            })
                        }, function() {
                            s.postMessage({
                                id: t.data.id,
                                status: "error"
                            })
                        });
                        else if ("complete" === t.data.type) {
                            var e = t.data.animation;
                            s.dataManager.completeData(e), s.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: "success"
                            })
                        } else "loadData" === t.data.type && s.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
                            s.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: "success"
                            })
                        }, function() {
                            s.postMessage({
                                id: t.data.id,
                                status: "error"
                            })
                        })
                    })).onmessage = function(t) {
                        var e = t.data,
                            i = e.id,
                            n = r[i];
                        r[i] = null, "success" === e.status ? n.onComplete(e.payload) : n.onError && n.onError()
                    })
                }

                function o(t, e) {
                    var n = "processId_" + (i += 1);
                    return r[n] = {
                        onComplete: t,
                        onError: e
                    }, n
                }
                return {
                    loadAnimation: function(t, i, r) {
                        a();
                        var n = o(i, r);
                        e.postMessage({
                            type: "loadAnimation",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: n
                        })
                    },
                    loadData: function(t, i, r) {
                        a();
                        var n = o(i, r);
                        e.postMessage({
                            type: "loadData",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: n
                        })
                    },
                    completeAnimation: function(t, i, r) {
                        a();
                        var n = o(i, r);
                        e.postMessage({
                            type: "complete",
                            animation: t,
                            id: n
                        })
                    }
                }
            }(),
            ImagePreloader = function() {
                var t = function() {
                    var t = createTag("canvas");
                    t.width = 1, t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                }();

                function e() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function i() {
                    this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function r(t, e, i) {
                    var r = "";
                    if (t.e) r = t.p;
                    else if (e) {
                        var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), r = e + n
                    } else r = i, r += t.u ? t.u : "", r += t.p;
                    return r
                }

                function n() {
                    this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = function(t) {
                        var e = 0,
                            i = setInterval(function() {
                                (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                            }.bind(this), 50)
                    }.bind(this), this.createFootageData = function(t) {
                        var e = {
                                assetData: t
                            },
                            i = r(t, this.assetsPath, this.path);
                        return dataManager.loadData(i, function(t) {
                            e.img = t, this._footageLoaded()
                        }.bind(this), function() {
                            e.img = {}, this._footageLoaded()
                        }.bind(this)), e
                    }.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                }
                return n.prototype = {
                    loadAssets: function(t, e) {
                        var i;
                        this.imagesLoadedCb = e;
                        var r = t.length;
                        for (i = 0; i < r; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                    },
                    setAssetsPath: function(t) {
                        this.assetsPath = t || ""
                    },
                    setPath: function(t) {
                        this.path = t || ""
                    },
                    loadedImages: function() {
                        return this.totalImages === this.loadedAssets
                    },
                    loadedFootages: function() {
                        return this.totalFootages === this.loadedFootagesCount
                    },
                    destroy: function() {
                        this.imagesLoadedCb = null, this.images.length = 0
                    },
                    getAsset: function(t) {
                        for (var e = 0, i = this.images.length; e < i;) {
                            if (this.images[e].assetData === t) return this.images[e].img;
                            e += 1
                        }
                        return null
                    },
                    createImgData: function(e) {
                        var i = r(e, this.assetsPath, this.path),
                            n = createTag("img");
                        n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                            s.img = t, this._imageLoaded()
                        }.bind(this), !1), n.src = i;
                        var s = {
                            img: n,
                            assetData: e
                        };
                        return s
                    },
                    createImageData: function(e) {
                        var i = r(e, this.assetsPath, this.path),
                            n = createNS("image");
                        isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                            s.img = t, this._imageLoaded()
                        }.bind(this), !1), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(n) : this._elementHelper.appendChild(n);
                        var s = {
                            img: n,
                            assetData: e
                        };
                        return s
                    },
                    imageLoaded: e,
                    footageLoaded: i,
                    setCacheType: function(t, e) {
                        "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                    }
                }, n
            }();

        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t])
                    for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e)
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                    function() {
                        this.removeEventListener(t, e)
                    }.bind(this)
            },
            removeEventListener: function(t, e) {
                if (e) {
                    if (this._cbs[t]) {
                        for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                        this._cbs[t].length || (this._cbs[t] = null)
                    }
                } else this._cbs[t] = null
            }
        };
        var markerParser = function() {
                function t(t) {
                    for (var e, i = t.split("\r\n"), r = {}, n = 0, s = 0; s < i.length; s += 1) 2 === (e = i[s].split(":")).length && (r[e[0]] = e[1].trim(), n += 1);
                    if (0 === n) throw new Error;
                    return r
                }
                return function(e) {
                    for (var i = [], r = 0; r < e.length; r += 1) {
                        var n = e[r],
                            s = {
                                time: n.tm,
                                duration: n.dr
                            };
                        try {
                            s.payload = JSON.parse(e[r].cm)
                        } catch (i) {
                            try {
                                s.payload = t(e[r].cm)
                            } catch (t) {
                                s.payload = {
                                    name: e[r]
                                }
                            }
                        }
                        i.push(s)
                    }
                    return i
                }
            }(),
            ProjectInterface = function() {
                function t(t) {
                    this.compositions.push(t)
                }
                return function() {
                    function e(t) {
                        for (var e = 0, i = this.compositions.length; e < i;) {
                            if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                            e += 1
                        }
                        return null
                    }
                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                }
            }(),
            renderers = {},
            registerRenderer = function(t, e) {
                renderers[t] = e
            };

        function getRenderer(t) {
            return renderers[t]
        }

        function _typeof$4(t) {
            "@babel/helpers - typeof";
            return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this)
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
            var i = getRenderer(e);
            this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
            this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
            dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
            e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
            var i = {
                    wrapper: t,
                    animationData: e
                },
                r = t.attributes;
            i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
            var n = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
            "false" === n ? i.loop = !1 : "true" === n ? i.loop = !0 : "" !== n && (i.loop = parseInt(n, 10));
            var s = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
            i.autoplay = "false" !== s, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
        }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e, i, r = this.animationData.layers,
                n = r.length,
                s = t.layers,
                a = s.length;
            for (i = 0; i < a; i += 1)
                for (e = 0; e < n;) {
                    if (r[e].id === s[i].id) {
                        r[e] = s[i];
                        break
                    }
                    e += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
            this.animationData = t;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), function() {
                this.trigger("data_failed")
            }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
            } catch (t) {
                this.triggerConfigError(t)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                    this.trigger("DOMLoaded")
                }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
            }
        }, AnimationItem.prototype.resize = function() {
            this.renderer.updateContainerSize()
        }, AnimationItem.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
            if (!1 !== this.isLoaded && this.renderer) try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
                this.triggerRenderFrameError(t)
            }
        }, AnimationItem.prototype.play = function(t) {
            t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
            t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
            t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
            for (var e, i = 0; i < this.markers.length; i += 1)
                if ((e = this.markers[i]).payload && e.payload.name === t) return e;
            return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
            if (!i || this.name === i) {
                var r = Number(t);
                if (isNaN(r)) {
                    var n = this.getMarkerData(t);
                    n && this.goToAndStop(n.time, !0)
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause()
            }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
            if (!i || this.name === i) {
                var r = Number(t);
                if (isNaN(r)) {
                    var n = this.getMarkerData(t);
                    n && (n.duration ? this.playSegments([n.time, n.time + n.duration], !0) : this.goToAndStop(n.time, !0))
                } else this.goToAndStop(r, e, i);
                this.play()
            }
        }, AnimationItem.prototype.advanceTime = function(t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier,
                    i = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
            var i = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1) this.segments.push(t[i])
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, i = this.assets.length; e < i;) {
                if (t === this.assets[e].id) return this.assets[e];
                e += 1
            }
            return null
        }, AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                case "drawnFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function() {
                var t = {},
                    e = [],
                    i = 0,
                    r = 0,
                    n = 0,
                    s = !0,
                    a = !1;

                function o(t) {
                    for (var i = 0, n = t.target; i < r;) e[i].animation === n && (e.splice(i, 1), i -= 1, r -= 1, n.isPaused || c()), i += 1
                }

                function h(t, i) {
                    if (!t) return null;
                    for (var n = 0; n < r;) {
                        if (e[n].elem === t && null !== e[n].elem) return e[n].animation;
                        n += 1
                    }
                    var s = new AnimationItem;
                    return p(s, t), s.setData(t, i), s
                }

                function l() {
                    n += 1, d()
                }

                function c() {
                    n -= 1
                }

                function p(t, i) {
                    t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", c), e.push({
                        elem: i,
                        animation: t
                    }), r += 1
                }

                function u(t) {
                    var o, h = t - i;
                    for (o = 0; o < r; o += 1) e[o].animation.advanceTime(h);
                    i = t, n && !a ? window.requestAnimationFrame(u) : s = !0
                }

                function f(t) {
                    i = t, window.requestAnimationFrame(u)
                }

                function d() {
                    !a && n && s && (window.requestAnimationFrame(f), s = !1)
                }
                return t.registerAnimation = h, t.loadAnimation = function(t) {
                    var e = new AnimationItem;
                    return p(e, null), e.setParams(t), e
                }, t.setSpeed = function(t, i) {
                    var n;
                    for (n = 0; n < r; n += 1) e[n].animation.setSpeed(t, i)
                }, t.setDirection = function(t, i) {
                    var n;
                    for (n = 0; n < r; n += 1) e[n].animation.setDirection(t, i)
                }, t.play = function(t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.play(t)
                }, t.pause = function(t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.pause(t)
                }, t.stop = function(t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.stop(t)
                }, t.togglePause = function(t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.togglePause(t)
                }, t.searchAnimations = function(t, e, i) {
                    var r, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        s = n.length;
                    for (r = 0; r < s; r += 1) i && n[r].setAttribute("data-bm-type", i), h(n[r], t);
                    if (e && 0 === s) {
                        i || (i = "svg");
                        var a = document.getElementsByTagName("body")[0];
                        a.innerText = "";
                        var o = createTag("div");
                        o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), h(o, t)
                    }
                }, t.resize = function() {
                    var t;
                    for (t = 0; t < r; t += 1) e[t].animation.resize()
                }, t.goToAndStop = function(t, i, n) {
                    var s;
                    for (s = 0; s < r; s += 1) e[s].animation.goToAndStop(t, i, n)
                }, t.destroy = function(t) {
                    var i;
                    for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                }, t.freeze = function() {
                    a = !0
                }, t.unfreeze = function() {
                    a = !1, d()
                }, t.setVolume = function(t, i) {
                    var n;
                    for (n = 0; n < r; n += 1) e[n].animation.setVolume(t, i)
                }, t.mute = function(t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.mute(t)
                }, t.unmute = function(t) {
                    var i;
                    for (i = 0; i < r; i += 1) e[i].animation.unmute(t)
                }, t.getRegisteredAnimations = function() {
                    var t, i = e.length,
                        r = [];
                    for (t = 0; t < i; t += 1) r.push(e[t].animation);
                    return r
                }, t
            }(),
            BezierFactory = function() {
                var t = {
                        getBezierEasing: function(t, i, r, n, s) {
                            var a = s || ("bez_" + t + "_" + i + "_" + r + "_" + n).replace(/\./g, "p");
                            if (e[a]) return e[a];
                            var o = new f([t, i, r, n]);
                            return e[a] = o, o
                        }
                    },
                    e = {};
                var i = 4,
                    r = 1e-7,
                    n = 10,
                    s = 11,
                    a = 1 / (s - 1),
                    o = "function" == typeof Float32Array;

                function h(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function l(t, e) {
                    return 3 * e - 6 * t
                }

                function c(t) {
                    return 3 * t
                }

                function p(t, e, i) {
                    return ((h(e, i) * t + l(e, i)) * t + c(e)) * t
                }

                function u(t, e, i) {
                    return 3 * h(e, i) * t * t + 2 * l(e, i) * t + c(e)
                }

                function f(t) {
                    this._p = t, this._mSampleValues = o ? new Float32Array(s) : new Array(s), this._precomputed = !1, this.get = this.get.bind(this)
                }
                return f.prototype = {
                    get: function(t) {
                        var e = this._p[0],
                            i = this._p[1],
                            r = this._p[2],
                            n = this._p[3];
                        return this._precomputed || this._precompute(), e === i && r === n ? t : 0 === t ? 0 : 1 === t ? 1 : p(this._getTForX(t), i, n)
                    },
                    _precompute: function() {
                        var t = this._p[0],
                            e = this._p[1],
                            i = this._p[2],
                            r = this._p[3];
                        this._precomputed = !0, t === e && i === r || this._calcSampleValues()
                    },
                    _calcSampleValues: function() {
                        for (var t = this._p[0], e = this._p[2], i = 0; i < s; ++i) this._mSampleValues[i] = p(i * a, t, e)
                    },
                    _getTForX: function(t) {
                        for (var e = this._p[0], o = this._p[2], h = this._mSampleValues, l = 0, c = 1, f = s - 1; c !== f && h[c] <= t; ++c) l += a;
                        var d = l + (t - h[--c]) / (h[c + 1] - h[c]) * a,
                            m = u(d, e, o);
                        return m >= .001 ? function(t, e, r, n) {
                            for (var s = 0; s < i; ++s) {
                                var a = u(e, r, n);
                                if (0 === a) return e;
                                e -= (p(e, r, n) - t) / a
                            }
                            return e
                        }(t, d, e, o) : 0 === m ? d : function(t, e, i, s, a) {
                            var o, h, l = 0;
                            do {
                                (o = p(h = e + (i - e) / 2, s, a) - t) > 0 ? i = h : e = h
                            } while (Math.abs(o) > r && ++l < n);
                            return h
                        }(t, l, l + a, e, o)
                    }
                }, t
            }(),
            pooling = function() {
                return {
                    double: function(t) {
                        return t.concat(createSizedArray(t.length))
                    }
                }
            }(),
            poolFactory = function(t, e, i) {
                var r = 0,
                    n = t,
                    s = createSizedArray(n);
                return {
                    newElement: function() {
                        return r ? s[r -= 1] : e()
                    },
                    release: function(t) {
                        r === n && (s = pooling.double(s), n *= 2), i && i(t), s[r] = t, r += 1
                    }
                }
            },
            bezierLengthPool = function() {
                return poolFactory(8, function() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments())
                    }
                })
            }(),
            segmentsLengthPool = function() {
                return poolFactory(8, function() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }, function(t) {
                    var e, i = t.lengths.length;
                    for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
                    t.lengths.length = 0
                })
            }();

        function bezFunction() {
            var t = Math;

            function e(t, e, i, r, n, s) {
                var a = t * r + e * n + i * s - n * r - s * t - i * e;
                return a > -.001 && a < .001
            }
            var i = function(t, e, i, r) {
                var n, s, a, o, h, l, c = getDefaultCurveSegments(),
                    p = 0,
                    u = [],
                    f = [],
                    d = bezierLengthPool.newElement();
                for (a = i.length, n = 0; n < c; n += 1) {
                    for (h = n / (c - 1), l = 0, s = 0; s < a; s += 1) o = bmPow(1 - h, 3) * t[s] + 3 * bmPow(1 - h, 2) * h * i[s] + 3 * (1 - h) * bmPow(h, 2) * r[s] + bmPow(h, 3) * e[s], u[s] = o, null !== f[s] && (l += bmPow(u[s] - f[s], 2)), f[s] = u[s];
                    l && (p += l = bmSqrt(l)), d.percents[n] = h, d.lengths[n] = p
                }
                return d.addedLength = p, d
            };

            function r(t, e) {
                this.partialLength = t, this.point = e
            }
            var n, s = (n = {}, function(t, i, s, a) {
                var o = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1] + "_" + a[0] + "_" + a[1]).replace(/\./g, "p");
                if (!n[o]) {
                    var h, l, c, p, u, f, d, m = getDefaultCurveSegments(),
                        y = 0,
                        g = null;
                    2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], i[0], i[1], i[0] + a[0], i[1] + a[1]) && (m = 2);
                    var v = new function(t) {
                        this.segmentLength = 0, this.points = new Array(t)
                    }(m);
                    for (c = s.length, h = 0; h < m; h += 1) {
                        for (d = createSizedArray(c), u = h / (m - 1), f = 0, l = 0; l < c; l += 1) p = bmPow(1 - u, 3) * t[l] + 3 * bmPow(1 - u, 2) * u * (t[l] + s[l]) + 3 * (1 - u) * bmPow(u, 2) * (i[l] + a[l]) + bmPow(u, 3) * i[l], d[l] = p, null !== g && (f += bmPow(d[l] - g[l], 2));
                        y += f = bmSqrt(f), v.points[h] = new r(f, d), g = d
                    }
                    v.segmentLength = y, n[o] = v
                }
                return n[o]
            });

            function a(t, e) {
                var i = e.percents,
                    r = e.lengths,
                    n = i.length,
                    s = bmFloor((n - 1) * t),
                    a = t * e.addedLength,
                    o = 0;
                if (s === n - 1 || 0 === s || a === r[s]) return i[s];
                for (var h = r[s] > a ? -1 : 1, l = !0; l;)
                    if (r[s] <= a && r[s + 1] > a ? (o = (a - r[s]) / (r[s + 1] - r[s]), l = !1) : s += h, s < 0 || s >= n - 1) {
                        if (s === n - 1) return i[s];
                        l = !1
                    }
                return i[s] + (i[s + 1] - i[s]) * o
            }
            var o = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function(t) {
                    var e, r = segmentsLengthPool.newElement(),
                        n = t.c,
                        s = t.v,
                        a = t.o,
                        o = t.i,
                        h = t._length,
                        l = r.lengths,
                        c = 0;
                    for (e = 0; e < h - 1; e += 1) l[e] = i(s[e], s[e + 1], a[e], o[e + 1]), c += l[e].addedLength;
                    return n && h && (l[e] = i(s[e], s[0], a[e], o[0]), c += l[e].addedLength), r.totalLength = c, r
                },
                getNewSegment: function(e, i, r, n, s, h, l) {
                    s < 0 ? s = 0 : s > 1 && (s = 1);
                    var c, p = a(s, l),
                        u = a(h = h > 1 ? 1 : h, l),
                        f = e.length,
                        d = 1 - p,
                        m = 1 - u,
                        y = d * d * d,
                        g = p * d * d * 3,
                        v = p * p * d * 3,
                        b = p * p * p,
                        _ = d * d * m,
                        w = p * d * m + d * p * m + d * d * u,
                        S = p * p * m + d * p * u + p * d * u,
                        E = p * p * u,
                        x = d * m * m,
                        P = p * m * m + d * u * m + d * m * u,
                        T = p * u * m + d * u * u + p * m * u,
                        A = p * u * u,
                        M = m * m * m,
                        C = u * m * m + m * u * m + m * m * u,
                        k = u * u * m + m * u * u + u * m * u,
                        D = u * u * u;
                    for (c = 0; c < f; c += 1) o[4 * c] = t.round(1e3 * (y * e[c] + g * r[c] + v * n[c] + b * i[c])) / 1e3, o[4 * c + 1] = t.round(1e3 * (_ * e[c] + w * r[c] + S * n[c] + E * i[c])) / 1e3, o[4 * c + 2] = t.round(1e3 * (x * e[c] + P * r[c] + T * n[c] + A * i[c])) / 1e3, o[4 * c + 3] = t.round(1e3 * (M * e[c] + C * r[c] + k * n[c] + D * i[c])) / 1e3;
                    return o
                },
                getPointInSegment: function(e, i, r, n, s, o) {
                    var h = a(s, o),
                        l = 1 - h;
                    return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * r[0] + (h * h * l + l * h * h + h * l * h) * n[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * r[1] + (h * h * l + l * h * h + h * l * h) * n[1] + h * h * h * i[1])) / 1e3]
                },
                buildBezierData: s,
                pointOnLine2D: e,
                pointOnLine3D: function(i, r, n, s, a, o, h, l, c) {
                    if (0 === n && 0 === o && 0 === c) return e(i, r, s, a, h, l);
                    var p, u = t.sqrt(t.pow(s - i, 2) + t.pow(a - r, 2) + t.pow(o - n, 2)),
                        f = t.sqrt(t.pow(h - i, 2) + t.pow(l - r, 2) + t.pow(c - n, 2)),
                        d = t.sqrt(t.pow(h - s, 2) + t.pow(l - a, 2) + t.pow(c - o, 2));
                    return (p = u > f ? u > d ? u - f - d : d - f - u : d > f ? d - f - u : f - u - d) > -1e-4 && p < 1e-4
                }
            }
        }
        var bez = bezFunction(),
            PropertyFactory = function() {
                var t = initialDefaultFrame,
                    e = Math.abs;

                function i(t, e) {
                    var i, n = this.offsetTime;
                    "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                    for (var s, a, o, h, l, c, p, u, f, d = e.lastIndex, m = d, y = this.keyframes.length - 1, g = !0; g;) {
                        if (s = this.keyframes[m], a = this.keyframes[m + 1], m === y - 1 && t >= a.t - n) {
                            s.h && (s = a), d = 0;
                            break
                        }
                        if (a.t - n > t) {
                            d = m;
                            break
                        }
                        m < y - 1 ? m += 1 : (d = 0, g = !1)
                    }
                    o = this.keyframesMetadata[m] || {};
                    var v, b, _, w, S, E, x, P, T, A, M = a.t - n,
                        C = s.t - n;
                    if (s.to) {
                        o.bezierData || (o.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                        var k = o.bezierData;
                        if (t >= M || t < C) {
                            var D = t >= M ? k.points.length - 1 : 0;
                            for (l = k.points[D].point.length, h = 0; h < l; h += 1) i[h] = k.points[D].point[h]
                        } else {
                            o.__fnct ? f = o.__fnct : (f = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, o.__fnct = f), c = f((t - C) / (M - C));
                            var F, I = k.segmentLength * c,
                                O = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                            for (u = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, g = !0, p = k.points.length; g;) {
                                if (O += k.points[u].partialLength, 0 === I || 0 === c || u === k.points.length - 1) {
                                    for (l = k.points[u].point.length, h = 0; h < l; h += 1) i[h] = k.points[u].point[h];
                                    break
                                }
                                if (I >= O && I < O + k.points[u + 1].partialLength) {
                                    for (F = (I - O) / k.points[u + 1].partialLength, l = k.points[u].point.length, h = 0; h < l; h += 1) i[h] = k.points[u].point[h] + (k.points[u + 1].point[h] - k.points[u].point[h]) * F;
                                    break
                                }
                                u < p - 1 ? u += 1 : g = !1
                            }
                            e._lastPoint = u, e._lastAddedLength = O - k.points[u].partialLength, e._lastKeyframeIndex = m
                        }
                    } else {
                        var R, L, B, V, z;
                        if (y = s.s.length, v = a.s || s.e, this.sh && 1 !== s.h)
                            if (t >= M) i[0] = v[0], i[1] = v[1], i[2] = v[2];
                            else if (t <= C) i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2];
                        else {
                            var N = r(s.s),
                                j = r(v);
                            b = i, _ = function(t, e, i) {
                                var r, n, s, a, o, h = [],
                                    l = t[0],
                                    c = t[1],
                                    p = t[2],
                                    u = t[3],
                                    f = e[0],
                                    d = e[1],
                                    m = e[2],
                                    y = e[3];
                                (n = l * f + c * d + p * m + u * y) < 0 && (n = -n, f = -f, d = -d, m = -m, y = -y);
                                1 - n > 1e-6 ? (r = Math.acos(n), s = Math.sin(r), a = Math.sin((1 - i) * r) / s, o = Math.sin(i * r) / s) : (a = 1 - i, o = i);
                                return h[0] = a * l + o * f, h[1] = a * c + o * d, h[2] = a * p + o * m, h[3] = a * u + o * y, h
                            }(N, j, (t - C) / (M - C)), w = _[0], S = _[1], E = _[2], x = _[3], P = Math.atan2(2 * S * x - 2 * w * E, 1 - 2 * S * S - 2 * E * E), T = Math.asin(2 * w * S + 2 * E * x), A = Math.atan2(2 * w * x - 2 * S * E, 1 - 2 * w * w - 2 * E * E), b[0] = P / degToRads, b[1] = T / degToRads, b[2] = A / degToRads
                        } else
                            for (m = 0; m < y; m += 1) 1 !== s.h && (t >= M ? c = 1 : t < C ? c = 0 : (s.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []), o.__fnct[m] ? f = o.__fnct[m] : (R = void 0 === s.o.x[m] ? s.o.x[0] : s.o.x[m], L = void 0 === s.o.y[m] ? s.o.y[0] : s.o.y[m], B = void 0 === s.i.x[m] ? s.i.x[0] : s.i.x[m], V = void 0 === s.i.y[m] ? s.i.y[0] : s.i.y[m], f = BezierFactory.getBezierEasing(R, L, B, V).get, o.__fnct[m] = f)) : o.__fnct ? f = o.__fnct : (R = s.o.x, L = s.o.y, B = s.i.x, V = s.i.y, f = BezierFactory.getBezierEasing(R, L, B, V).get, s.keyframeMetadata = f), c = f((t - C) / (M - C)))), v = a.s || s.e, z = 1 === s.h ? s.s[m] : s.s[m] + (v[m] - s.s[m]) * c, "multidimensional" === this.propType ? i[m] = z : i = z
                    }
                    return e.lastIndex = d, i
                }

                function r(t) {
                    var e = t[0] * degToRads,
                        i = t[1] * degToRads,
                        r = t[2] * degToRads,
                        n = Math.cos(e / 2),
                        s = Math.cos(i / 2),
                        a = Math.cos(r / 2),
                        o = Math.sin(e / 2),
                        h = Math.sin(i / 2),
                        l = Math.sin(r / 2);
                    return [o * h * a + n * s * l, o * s * a + n * h * l, n * h * a - o * s * l, n * s * a - o * h * l]
                }

                function n() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                        i = this.keyframes[0].t - this.offsetTime,
                        r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < i && e < i))) {
                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var n = this.interpolateValue(e, this._caching);
                        this.pv = n
                    }
                    return this._caching.lastFrame = e, this.pv
                }

                function s(t) {
                    var i;
                    if ("unidimensional" === this.propType) i = t * this.mult, e(this.v - i) > 1e-5 && (this.v = i, this._mdf = !0);
                    else
                        for (var r = 0, n = this.v.length; r < n;) i = t[r] * this.mult, e(this.v[r] - i) > 1e-5 && (this.v[r] = i, this._mdf = !0), r += 1
                }

                function a() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            var t;
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var e = this.effectsSequence.length,
                                i = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                            this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function o(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }
                return {
                    getProp: function(e, r, h, l, c) {
                        var p;
                        if (r.k.length)
                            if ("number" == typeof r.k[0]) p = new function(t, e, i, r) {
                                var n;
                                this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                                var h = e.k.length;
                                for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), this.vel = createTypedArray("float32", h), n = 0; n < h; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
                                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = a, this.setVValue = s, this.addEffect = o
                            }(e, r, l, c);
                            else switch (h) {
                                case 0:
                                    p = new function(e, r, h, l) {
                                        this.propType = "unidimensional", this.keyframes = r.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                            lastFrame: t,
                                            lastIndex: 0,
                                            value: 0,
                                            _lastKeyframeIndex: -1
                                        }, this.k = !0, this.kf = !0, this.data = r, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.interpolateValue = i, this.effectsSequence = [n.bind(this)], this.addEffect = o
                                    }(e, r, l, c);
                                    break;
                                case 1:
                                    p = new function(e, r, h, l) {
                                        var c;
                                        this.propType = "multidimensional";
                                        var p, u, f, d, m = r.k.length;
                                        for (c = 0; c < m - 1; c += 1) r.k[c].to && r.k[c].s && r.k[c + 1] && r.k[c + 1].s && (p = r.k[c].s, u = r.k[c + 1].s, f = r.k[c].to, d = r.k[c].ti, (2 === p.length && (p[0] !== u[0] || p[1] !== u[1]) && bez.pointOnLine2D(p[0], p[1], u[0], u[1], p[0] + f[0], p[1] + f[1]) && bez.pointOnLine2D(p[0], p[1], u[0], u[1], u[0] + d[0], u[1] + d[1]) || 3 === p.length && (p[0] !== u[0] || p[1] !== u[1] || p[2] !== u[2]) && bez.pointOnLine3D(p[0], p[1], p[2], u[0], u[1], u[2], p[0] + f[0], p[1] + f[1], p[2] + f[2]) && bez.pointOnLine3D(p[0], p[1], p[2], u[0], u[1], u[2], u[0] + d[0], u[1] + d[1], u[2] + d[2])) && (r.k[c].to = null, r.k[c].ti = null), p[0] === u[0] && p[1] === u[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === p.length || p[2] === u[2] && 0 === f[2] && 0 === d[2]) && (r.k[c].to = null, r.k[c].ti = null));
                                        this.effectsSequence = [n.bind(this)], this.data = r, this.keyframes = r.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = a, this.setVValue = s, this.interpolateValue = i, this.frameId = -1;
                                        var y = r.k[0].s.length;
                                        for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), c = 0; c < y; c += 1) this.v[c] = t, this.pv[c] = t;
                                        this._caching = {
                                            lastFrame: t,
                                            lastIndex: 0,
                                            value: createTypedArray("float32", y)
                                        }, this.addEffect = o
                                    }(e, r, l, c)
                            } else p = new function(t, e, i, r) {
                                this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.addEffect = o
                            }(e, r, l, c);
                        return p.effectsSequence.length && c.addDynamicProperty(p), p
                    }
                }
            }();

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
            },
            iterateDynamicProperties: function() {
                var t;
                this._mdf = !1;
                var e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function(t) {
                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var pointPool = function() {
            return poolFactory(8, function() {
                return createTypedArray("float32", 2)
            })
        }();

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
        }, ShapePath.prototype.setLength = function(t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, i, r, n) {
            var s;
            switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                case "v":
                    s = this.v;
                    break;
                case "i":
                    s = this.i;
                    break;
                case "o":
                    s = this.o;
                    break;
                default:
                    s = []
            }(!s[r] || s[r] && !n) && (s[r] = pointPool.newElement()), s[r][0] = t, s[r][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, i, r, n, s, a, o) {
            this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(n, s, "i", a, o)
        }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v,
                i = this.o,
                r = this.i,
                n = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), n = 1);
            var s, a = this._length - 1,
                o = this._length;
            for (s = n; s < o; s += 1) t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], s, !1), a -= 1;
            return t
        };
        var shapePool = function() {
            var t = poolFactory(4, function() {
                return new ShapePath
            }, function(t) {
                var e, i = t._length;
                for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                t._length = 0, t.c = !1
            });
            return t.clone = function(e) {
                var i, r = t.newElement(),
                    n = void 0 === e._length ? e.v.length : e._length;
                for (r.setLength(n), r.c = e.c, i = 0; i < n; i += 1) r.setTripleAt(e.v[i][0], e.v[i][1], e.o[i][0], e.o[i][1], e.i[i][0], e.i[i][1], i);
                return r
            }, t
        }();

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0
        };
        var shapeCollectionPool = function() {
                var t = {
                        newShapeCollection: function() {
                            var t;
                            t = e ? r[e -= 1] : new ShapeCollection;
                            return t
                        },
                        release: function(t) {
                            var n, s = t._length;
                            for (n = 0; n < s; n += 1) shapePool.release(t.shapes[n]);
                            t._length = 0, e === i && (r = pooling.double(r), i *= 2);
                            r[e] = t, e += 1
                        }
                    },
                    e = 0,
                    i = 4,
                    r = createSizedArray(i);
                return t
            }(),
            ShapePropertyFactory = function() {
                var t = -999999;

                function e(t, e, i) {
                    var r, n, s, a, o, h, l, c, p, u = i.lastIndex,
                        f = this.keyframes;
                    if (t < f[0].t - this.offsetTime) r = f[0].s[0], s = !0, u = 0;
                    else if (t >= f[f.length - 1].t - this.offsetTime) r = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], s = !0;
                    else {
                        for (var d, m, y, g = u, v = f.length - 1, b = !0; b && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > t));) g < v - 1 ? g += 1 : b = !1;
                        if (y = this.keyframesMetadata[g] || {}, u = g, !(s = 1 === d.h)) {
                            if (t >= m.t - this.offsetTime) c = 1;
                            else if (t < d.t - this.offsetTime) c = 0;
                            else {
                                var _;
                                y.__fnct ? _ = y.__fnct : (_ = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = _), c = _((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                            }
                            n = m.s ? m.s[0] : d.e[0]
                        }
                        r = d.s[0]
                    }
                    for (h = e._length, l = r.i[0].length, i.lastIndex = u, a = 0; a < h; a += 1)
                        for (o = 0; o < l; o += 1) p = s ? r.i[a][o] : r.i[a][o] + (n.i[a][o] - r.i[a][o]) * c, e.i[a][o] = p, p = s ? r.o[a][o] : r.o[a][o] + (n.o[a][o] - r.o[a][o]) * c, e.o[a][o] = p, p = s ? r.v[a][o] : r.v[a][o] + (n.v[a][o] - r.v[a][o]) * c, e.v[a][o] = p
                }

                function i() {
                    this.paths = this.localShapeCollection
                }

                function r(t) {
                    (function(t, e) {
                        if (t._length !== e._length || t.c !== e.c) return !1;
                        var i, r = t._length;
                        for (i = 0; i < r; i += 1)
                            if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                        return !0
                    })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function n() {
                    if (this.elem.globalData.frameId !== this.frameId)
                        if (this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else {
                                var t, e;
                                this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                var i = this.effectsSequence.length;
                                for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                    else this._mdf = !1
                }

                function s(t, e, r) {
                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                    var n = 3 === r ? e.pt.k : e.ks.k;
                    this.v = shapePool.clone(n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                }

                function a(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function o(e, r, n) {
                    this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === n ? r.pt.k : r.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                    var s = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                        lastFrame: t,
                        lastIndex: 0
                    }, this.effectsSequence = [function() {
                        var e = this.comp.renderedFrame - this.offsetTime,
                            i = this.keyframes[0].t - this.offsetTime,
                            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            n = this._caching.lastFrame;
                        return n !== t && (n < i && e < i || n > r && e > r) || (this._caching.lastIndex = n < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                    }.bind(this)]
                }
                s.prototype.interpolateShape = e, s.prototype.getValue = n, s.prototype.setVValue = r, s.prototype.addEffect = a, o.prototype.getValue = n, o.prototype.interpolateShape = e, o.prototype.setVValue = r, o.prototype.addEffect = a;
                var h = function() {
                        var t = roundCorner;

                        function e(t, e) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                        }
                        return e.prototype = {
                            reset: i,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                            },
                            convertEllToPath: function() {
                                var e = this.p.v[0],
                                    i = this.p.v[1],
                                    r = this.s.v[0] / 2,
                                    n = this.s.v[1] / 2,
                                    s = 3 !== this.d,
                                    a = this.v;
                                a.v[0][0] = e, a.v[0][1] = i - n, a.v[1][0] = s ? e + r : e - r, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + n, a.v[3][0] = s ? e - r : e + r, a.v[3][1] = i, a.i[0][0] = s ? e - r * t : e + r * t, a.i[0][1] = i - n, a.i[1][0] = s ? e + r : e - r, a.i[1][1] = i - n * t, a.i[2][0] = s ? e + r * t : e - r * t, a.i[2][1] = i + n, a.i[3][0] = s ? e - r : e + r, a.i[3][1] = i + n * t, a.o[0][0] = s ? e + r * t : e - r * t, a.o[0][1] = i - n, a.o[1][0] = s ? e + r : e - r, a.o[1][1] = i + n * t, a.o[2][0] = s ? e - r * t : e + r * t, a.o[2][1] = i + n, a.o[3][0] = s ? e - r : e + r, a.o[3][1] = i - n * t
                            }
                        }, extendPrototype([DynamicPropertyContainer], e), e
                    }(),
                    l = function() {
                        function t(t, e) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                        }
                        return t.prototype = {
                            reset: i,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                            },
                            convertStarToPath: function() {
                                var t, e, i, r, n = 2 * Math.floor(this.pt.v),
                                    s = 2 * Math.PI / n,
                                    a = !0,
                                    o = this.or.v,
                                    h = this.ir.v,
                                    l = this.os.v,
                                    c = this.is.v,
                                    p = 2 * Math.PI * o / (2 * n),
                                    u = 2 * Math.PI * h / (2 * n),
                                    f = -Math.PI / 2;
                                f += this.r.v;
                                var d = 3 === this.data.d ? -1 : 1;
                                for (this.v._length = 0, t = 0; t < n; t += 1) {
                                    e = a ? o : h, i = a ? l : c, r = a ? p : u;
                                    var m = e * Math.cos(f),
                                        y = e * Math.sin(f),
                                        g = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y),
                                        v = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);
                                    m += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(m, y, m - g * r * i * d, y - v * r * i * d, m + g * r * i * d, y + v * r * i * d, t, !0), a = !a, f += s * d
                                }
                            },
                            convertPolygonToPath: function() {
                                var t, e = Math.floor(this.pt.v),
                                    i = 2 * Math.PI / e,
                                    r = this.or.v,
                                    n = this.os.v,
                                    s = 2 * Math.PI * r / (4 * e),
                                    a = .5 * -Math.PI,
                                    o = 3 === this.data.d ? -1 : 1;
                                for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                    var h = r * Math.cos(a),
                                        l = r * Math.sin(a),
                                        c = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                        p = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                    h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - c * s * n * o, l - p * s * n * o, h + c * s * n * o, l + p * s * n * o, t, !0), a += i * o
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }(),
                    c = function() {
                        function t(t, e) {
                            this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                        }
                        return t.prototype = {
                            convertRectToPath: function() {
                                var t = this.p.v[0],
                                    e = this.p.v[1],
                                    i = this.s.v[0] / 2,
                                    r = this.s.v[1] / 2,
                                    n = bmMin(i, r, this.r.v),
                                    s = n * (1 - roundCorner);
                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + n, t + i, e - r + s, 0, !0), this.v.setTripleAt(t + i, e + r - n, t + i, e + r - s, t + i, e + r - n, 1, !0), 0 !== n ? (this.v.setTripleAt(t + i - n, e + r, t + i - n, e + r, t + i - s, e + r, 2, !0), this.v.setTripleAt(t - i + n, e + r, t - i + s, e + r, t - i + n, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - n, t - i, e + r - n, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i, e - r + n, t - i, e - r + s, t - i, e - r + n, 5, !0), this.v.setTripleAt(t - i + n, e - r, t - i + n, e - r, t - i + s, e - r, 6, !0), this.v.setTripleAt(t + i - n, e - r, t + i - s, e - r, t + i - n, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + s, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + s, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + s, t + i, e - r + n, 0, !0), 0 !== n ? (this.v.setTripleAt(t + i - n, e - r, t + i - n, e - r, t + i - s, e - r, 1, !0), this.v.setTripleAt(t - i + n, e - r, t - i + s, e - r, t - i + n, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + n, t - i, e - r + n, t - i, e - r + s, 3, !0), this.v.setTripleAt(t - i, e + r - n, t - i, e + r - s, t - i, e + r - n, 4, !0), this.v.setTripleAt(t - i + n, e + r, t - i + n, e + r, t - i + s, e + r, 5, !0), this.v.setTripleAt(t + i - n, e + r, t + i - s, e + r, t + i - n, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - n, t + i, e + r - n, t + i, e + r - s, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + s, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - s, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - s, e + r, t + i, e + r, 3, !0)))
                            },
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                            },
                            reset: i
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }();
                var p = {
                    getShapeProp: function(t, e, i) {
                        var r;
                        return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new o(t, e, i) : new s(t, e, i) : 5 === i ? r = new c(t, e) : 6 === i ? r = new h(t, e) : 7 === i && (r = new l(t, e)), r.k && t.addDynamicProperty(r), r
                    },
                    getConstructorFunction: function() {
                        return s
                    },
                    getKeyframedConstructorFunction: function() {
                        return o
                    }
                };
                return p
            }(),
            Matrix = function() {
                var t = Math.cos,
                    e = Math.sin,
                    i = Math.tan,
                    r = Math.round;

                function n() {
                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                }

                function s(i) {
                    if (0 === i) return this;
                    var r = t(i),
                        n = e(i);
                    return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function a(i) {
                    if (0 === i) return this;
                    var r = t(i),
                        n = e(i);
                    return this._t(1, 0, 0, 0, 0, r, -n, 0, 0, n, r, 0, 0, 0, 0, 1)
                }

                function o(i) {
                    if (0 === i) return this;
                    var r = t(i),
                        n = e(i);
                    return this._t(r, 0, n, 0, 0, 1, 0, 0, -n, 0, r, 0, 0, 0, 0, 1)
                }

                function h(i) {
                    if (0 === i) return this;
                    var r = t(i),
                        n = e(i);
                    return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function l(t, e) {
                    return this._t(1, e, t, 1, 0, 0)
                }

                function c(t, e) {
                    return this.shear(i(t), i(e))
                }

                function p(r, n) {
                    var s = t(n),
                        a = e(n);
                    return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function u(t, e, i) {
                    return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                }

                function f(t, e, i, r, n, s, a, o, h, l, c, p, u, f, d, m) {
                    return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = n, this.props[5] = s, this.props[6] = a, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = c, this.props[11] = p, this.props[12] = u, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
                }

                function d(t, e, i) {
                    return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                }

                function m(t, e, i, r, n, s, a, o, h, l, c, p, u, f, d, m) {
                    var y = this.props;
                    if (1 === t && 0 === e && 0 === i && 0 === r && 0 === n && 1 === s && 0 === a && 0 === o && 0 === h && 0 === l && 1 === c && 0 === p) return y[12] = y[12] * t + y[15] * u, y[13] = y[13] * s + y[15] * f, y[14] = y[14] * c + y[15] * d, y[15] *= m, this._identityCalculated = !1, this;
                    var g = y[0],
                        v = y[1],
                        b = y[2],
                        _ = y[3],
                        w = y[4],
                        S = y[5],
                        E = y[6],
                        x = y[7],
                        P = y[8],
                        T = y[9],
                        A = y[10],
                        M = y[11],
                        C = y[12],
                        k = y[13],
                        D = y[14],
                        F = y[15];
                    return y[0] = g * t + v * n + b * h + _ * u, y[1] = g * e + v * s + b * l + _ * f, y[2] = g * i + v * a + b * c + _ * d, y[3] = g * r + v * o + b * p + _ * m, y[4] = w * t + S * n + E * h + x * u, y[5] = w * e + S * s + E * l + x * f, y[6] = w * i + S * a + E * c + x * d, y[7] = w * r + S * o + E * p + x * m, y[8] = P * t + T * n + A * h + M * u, y[9] = P * e + T * s + A * l + M * f, y[10] = P * i + T * a + A * c + M * d, y[11] = P * r + T * o + A * p + M * m, y[12] = C * t + k * n + D * h + F * u, y[13] = C * e + k * s + D * l + F * f, y[14] = C * i + k * a + D * c + F * d, y[15] = C * r + k * o + D * p + F * m, this._identityCalculated = !1, this
                }

                function y() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                }

                function g(t) {
                    for (var e = 0; e < 16;) {
                        if (t.props[e] !== this.props[e]) return !1;
                        e += 1
                    }
                    return !0
                }

                function v(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                    return t
                }

                function b(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                }

                function _(t, e, i) {
                    return {
                        x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                        y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                        z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                    }
                }

                function w(t, e, i) {
                    return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                }

                function S(t, e, i) {
                    return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                }

                function E(t, e, i) {
                    return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                }

                function x() {
                    var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        e = this.props[5] / t,
                        i = -this.props[1] / t,
                        r = -this.props[4] / t,
                        n = this.props[0] / t,
                        s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                        a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                        o = new Matrix;
                    return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = n, o.props[12] = s, o.props[13] = a, o
                }

                function P(t) {
                    return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                }

                function T(t) {
                    var e, i = t.length,
                        r = [];
                    for (e = 0; e < i; e += 1) r[e] = P(t[e]);
                    return r
                }

                function A(t, e, i) {
                    var r = createTypedArray("float32", 6);
                    if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
                    else {
                        var n = this.props[0],
                            s = this.props[1],
                            a = this.props[4],
                            o = this.props[5],
                            h = this.props[12],
                            l = this.props[13];
                        r[0] = t[0] * n + t[1] * a + h, r[1] = t[0] * s + t[1] * o + l, r[2] = e[0] * n + e[1] * a + h, r[3] = e[0] * s + e[1] * o + l, r[4] = i[0] * n + i[1] * a + h, r[5] = i[0] * s + i[1] * o + l
                    }
                    return r
                }

                function M(t, e, i) {
                    return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                }

                function C(t, e) {
                    if (this.isIdentity()) return t + "," + e;
                    var i = this.props;
                    return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                }

                function k() {
                    for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
                    return i
                }

                function D(t) {
                    return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
                }

                function F() {
                    var t = this.props;
                    return "matrix(" + D(t[0]) + "," + D(t[1]) + "," + D(t[4]) + "," + D(t[5]) + "," + D(t[12]) + "," + D(t[13]) + ")"
                }
                return function() {
                    this.reset = n, this.rotate = s, this.rotateX = a, this.rotateY = o, this.rotateZ = h, this.skew = c, this.skewFromAxis = p, this.shear = l, this.scale = u, this.setTransform = f, this.translate = d, this.transform = m, this.applyToPoint = _, this.applyToX = w, this.applyToY = S, this.applyToZ = E, this.applyToPointArray = M, this.applyToTriplePoints = A, this.applyToPointStringified = C, this.toCSS = k, this.to2dCSS = F, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = T, this.inversePoint = P, this.getInverseMatrix = x, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                }
            }();

        function _typeof$3(t) {
            "@babel/helpers - typeof";
            return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var lottie = {},
            standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "",
            queryString;

        function setLocation(t) {
            setLocationHref(t)
        }

        function searchAnimations() {
            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
            setSubframeEnabled(t)
        }

        function setPrefix(t) {
            setIdPrefix(t)
        }

        function loadAnimation(t) {
            return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
            if ("string" == typeof t) switch (t) {
                case "high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case "medium":
                    setDefaultCurveSegments(50);
                    break;
                case "low":
                    setDefaultCurveSegments(10)
            } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
            getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
            return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
            "expressions" === t && setExpressionsPlugin(e)
        }

        function getFactory(t) {
            switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null
            }
        }

        function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
            for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                var r = e[i].split("=");
                if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
            }
            return null
        }
        if (lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.9.1", standalone) {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || {
                    src: ""
                };
            queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            "object" === _typeof$3(exports) && void 0 !== module || __webpack_require__(144) || (window.bodymovin = lottie)
        } catch (t) {}
        var ShapeModifiers = function() {
            var t = {},
                e = {};
            return t.registerModifier = function(t, i) {
                e[t] || (e[t] = i)
            }, t.getModifier = function(t, i, r) {
                return new e[t](i, r)
            }, t
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
            t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, n) {
            var s = [];
            e <= 1 ? s.push({
                s: t,
                e: e
            }) : t >= 1 ? s.push({
                s: t - 1,
                e: e - 1
            }) : (s.push({
                s: t,
                e: 1
            }), s.push({
                s: 0,
                e: e - 1
            }));
            var a, o, h = [],
                l = s.length;
            for (a = 0; a < l; a += 1) {
                var c, p;
                if (!((o = s[a]).e * n < r || o.s * n > r + i)) c = o.s * n <= r ? 0 : (o.s * n - r) / i, p = o.e * n >= r + i ? 1 : (o.e * n - r) / i, h.push([c, p])
            }
            return h.length || h.push([0, 0]), h
        }, TrimModifier.prototype.releasePathsData = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
            return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
            var e, i, r, n;
            if (this._mdf || t) {
                var s = this.o.v % 360 / 360;
                if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (i = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
                    var a = e;
                    e = i, i = a
                }
                e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
            } else e = this.sValue, i = this.eValue;
            var o, h, l, c, p, u = this.shapes.length,
                f = 0;
            if (i === e)
                for (n = 0; n < u; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (1 === i && 0 === e || 0 === i && 1 === e) {
                if (this._mdf)
                    for (n = 0; n < u; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
            } else {
                var d, m, y = [];
                for (n = 0; n < u; n += 1)
                    if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                        if (h = (r = d.shape.paths)._length, p = 0, !d.shape._mdf && d.pathsData.length) p = d.totalShapeLength;
                        else {
                            for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) c = bez.getSegmentsLength(r.shapes[o]), l.push(c), p += c.totalLength;
                            d.totalShapeLength = p, d.pathsData = l
                        }
                        f += p, d.shape._mdf = !0
                    } else d.shape.paths = d.localShapeCollection;
                var g, v = e,
                    b = i,
                    _ = 0;
                for (n = u - 1; n >= 0; n -= 1)
                    if ((d = this.shapes[n]).shape._mdf) {
                        for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && u > 1 ? (g = this.calculateShapeEdges(e, i, d.totalShapeLength, _, f), _ += d.totalShapeLength) : g = [
                                [v, b]
                            ], h = g.length, o = 0; o < h; o += 1) {
                            v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                                s: d.totalShapeLength * v,
                                e: d.totalShapeLength * b
                            }) : v >= 1 ? y.push({
                                s: d.totalShapeLength * (v - 1),
                                e: d.totalShapeLength * (b - 1)
                            }) : (y.push({
                                s: d.totalShapeLength * v,
                                e: d.totalShapeLength
                            }), y.push({
                                s: 0,
                                e: d.totalShapeLength * (b - 1)
                            }));
                            var w = this.addShapes(d, y[0]);
                            if (y[0].s !== y[0].e) {
                                if (y.length > 1)
                                    if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                        var S = w.pop();
                                        this.addPaths(w, m), w = this.addShapes(d, y[1], S)
                                    } else this.addPaths(w, m), w = this.addShapes(d, y[1]);
                                this.addPaths(w, m)
                            }
                        }
                        d.shape.paths = m
                    }
            }
        }, TrimModifier.prototype.addPaths = function(t, e) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1) e.addShape(t[i])
        }, TrimModifier.prototype.addSegment = function(t, e, i, r, n, s, a) {
            n.setXYAt(e[0], e[1], "o", s), n.setXYAt(i[0], i[1], "i", s + 1), a && n.setXYAt(t[0], t[1], "v", s), n.setXYAt(r[0], r[1], "v", s + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
            e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, i) {
            var r, n, s, a, o, h, l, c, p = t.pathsData,
                u = t.shape.paths.shapes,
                f = t.shape.paths._length,
                d = 0,
                m = [],
                y = !0;
            for (i ? (o = i._length, c = i._length) : (i = shapePool.newElement(), o = 0, c = 0), m.push(i), r = 0; r < f; r += 1) {
                for (h = p[r].lengths, i.c = u[r].c, s = u[r].c ? h.length : h.length + 1, n = 1; n < s; n += 1)
                    if (d + (a = h[n - 1]).addedLength < e.s) d += a.addedLength, i.c = !1;
                    else {
                        if (d > e.e) {
                            i.c = !1;
                            break
                        }
                        e.s <= d && e.e >= d + a.addedLength ? (this.addSegment(u[r].v[n - 1], u[r].o[n - 1], u[r].i[n], u[r].v[n], i, o, y), y = !1) : (l = bez.getNewSegment(u[r].v[n - 1], u[r].v[n], u[r].o[n - 1], u[r].i[n], (e.s - d) / a.addedLength, (e.e - d) / a.addedLength, h[n - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1), d += a.addedLength, o += 1
                    }
                if (u[r].c && h.length) {
                    if (a = h[n - 1], d <= e.e) {
                        var g = h[n - 1].addedLength;
                        e.s <= d && e.e >= d + g ? (this.addSegment(u[r].v[n - 1], u[r].o[n - 1], u[r].i[0], u[r].v[0], i, o, y), y = !1) : (l = bez.getNewSegment(u[r].v[n - 1], u[r].v[0], u[r].o[n - 1], u[r].i[0], (e.s - d) / g, (e.e - d) / g, h[n - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1)
                    } else i.c = !1;
                    d += a.addedLength, o += 1
                }
                if (i._length && (i.setXYAt(i.v[c][0], i.v[c][1], "i", c), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
                r < f - 1 && (i = shapePool.newElement(), y = !0, m.push(i), o = 0)
            }
            return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var i = e / 100,
                r = [0, 0],
                n = t._length,
                s = 0;
            for (s = 0; s < n; s += 1) r[0] += t.v[s][0], r[1] += t.v[s][1];
            r[0] /= n, r[1] /= n;
            var a, o, h, l, c, p, u = shapePool.newElement();
            for (u.c = t.c, s = 0; s < n; s += 1) a = t.v[s][0] + (r[0] - t.v[s][0]) * i, o = t.v[s][1] + (r[1] - t.v[s][1]) * i, h = t.o[s][0] + (r[0] - t.o[s][0]) * -i, l = t.o[s][1] + (r[1] - t.o[s][1]) * -i, c = t.i[s][0] + (r[0] - t.i[s][0]) * -i, p = t.i[s][1] + (r[1] - t.i[s][1]) * -i, u.setTripleAt(a, o, h, l, c, p, s);
            return u
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, i, r, n, s, a, o = this.shapes.length,
                h = this.amount.v;
            if (0 !== h)
                for (i = 0; i < o; i += 1) {
                    if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], h));
                    s.shape.paths = s.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
            var t = [0, 0];

            function e(t, e, i) {
                if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                        k: [0, 0, 0]
                    }, 1, 0, this), e.rx) {
                    if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                        var r, n = e.or.k.length;
                        for (r = 0; r < n; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null
                    }
                    this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                } else this.r = PropertyFactory.getProp(t, e.r || {
                    k: 0
                }, 0, degToRads, this);
                e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                    k: [0, 0, 0]
                }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                    k: [100, 100, 100]
                }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
            }
            return e.prototype = {
                applyToMatrix: function(t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                },
                getValue: function(e) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                            var i;
                            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                var r, n;
                                if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                    r = [], n = [];
                                    var s = this.px,
                                        a = this.py;
                                    s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (r[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), n[0] = s.getValueAtTime(s.keyframes[0].t / i, 0), n[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (r[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), n[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0), n[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (r = [s.pv, a.pv], n[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime), n[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                                } else r = n = t;
                                this.v.rotate(-Math.atan2(r[1] - n[1], r[0] - n[0]))
                            }
                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        }
                        this.frameId = this.elem.globalData.frameId
                    }
                },
                precalculateMatrix: function() {
                    if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                        }
                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                    }
                },
                autoOrient: function() {}
            }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
            }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                getTransformProperty: function(t, i, r) {
                    return new e(t, i, r)
                }
            }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", n = e.length, s = 0; s < n; s += 1) switch (e[s].toLowerCase()) {
                case "italic":
                    r = "italic";
                    break;
                case "bold":
                    i = "700";
                    break;
                case "black":
                    i = "900";
                    break;
                case "medium":
                    i = "500";
                    break;
                case "regular":
                case "normal":
                    i = "400";
                    break;
                case "light":
                case "thin":
                    i = "200"
            }
            return {
                style: r,
                weight: t.fWeight || i
            }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, n, s) {
            var a = s ? -1 : 1,
                o = r.s.v[0] + (1 - r.s.v[0]) * (1 - n),
                h = r.s.v[1] + (1 - r.s.v[1]) * (1 - n);
            t.translate(r.p.v[0] * a * n, r.p.v[1] * a * n, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * a * n), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(s ? 1 / o : o, s ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, i, r) {
            for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
            var e, i, r, n, s, a = !1;
            if (this._mdf || t) {
                var o, h = Math.ceil(this.c.v);
                if (this._groups.length < h) {
                    for (; this._groups.length < h;) {
                        var l = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        l.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                    }
                    this.elem.reloadShapes(), a = !0
                }
                for (s = 0, r = 0; r <= this._groups.length - 1; r += 1) {
                    if (o = s < h, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
                        var c = this.elemsData[r].it,
                            p = c[c.length - 1];
                        0 !== p.transform.op.v ? (p.transform.op._mdf = !0, p.transform.op.v = 0) : p.transform.op._mdf = !1
                    }
                    s += 1
                }
                this._currentCopies = h;
                var u = this.o.v,
                    f = u % 1,
                    d = u > 0 ? Math.floor(u) : Math.ceil(u),
                    m = this.pMatrix.props,
                    y = this.rMatrix.props,
                    g = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var v, b, _ = 0;
                if (u > 0) {
                    for (; _ < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                    f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), _ += f)
                } else if (u < 0) {
                    for (; _ > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                    f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), _ -= f)
                }
                for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                    if (b = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== _) {
                        for ((0 !== r && 1 === n || r !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                    _ += 1, s -= 1, r += n
                }
            } else
                for (s = this._currentCopies, r = 0, n = 1; s;) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, r += n;
            return a
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
            var i, r = shapePool.newElement();
            r.c = t.c;
            var n, s, a, o, h, l, c, p, u, f, d, m, y = t._length,
                g = 0;
            for (i = 0; i < y; i += 1) n = t.v[i], a = t.o[i], s = t.i[i], n[0] === a[0] && n[1] === a[1] && n[0] === s[0] && n[1] === s[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, c = d = n[0] + (o[0] - n[0]) * l, p = m = n[1] - (n[1] - o[1]) * l, u = c - (c - n[0]) * roundCorner, f = p - (p - n[1]) * roundCorner, r.setTripleAt(c, p, u, f, d, m, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, c = u = n[0] + (o[0] - n[0]) * l, p = f = n[1] + (o[1] - n[1]) * l, d = c - (c - n[0]) * roundCorner, m = p - (p - n[1]) * roundCorner, r.setTripleAt(c, p, u, f, d, m, g), g += 1) : (r.setTripleAt(n[0], n[1], a[0], a[1], s[0], s[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
            return r
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, i, r, n, s, a, o = this.shapes.length,
                h = this.rd.v;
            if (0 !== h)
                for (i = 0; i < o; i += 1) {
                    if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], h));
                    s.shape.paths = s.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
            var t = 5e3,
                e = {
                    w: 0,
                    size: 0,
                    shapes: [],
                    data: {
                        shapes: []
                    }
                },
                i = [];
            i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                n = [65039, 8205];

            function s(t, e) {
                var i = createTag("span");
                i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                var r = createTag("span");
                r.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
                var n = r.offsetWidth;
                return r.style.fontFamily = function(t) {
                    var e, i = t.split(","),
                        r = i.length,
                        n = [];
                    for (e = 0; e < r; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && n.push(i[e]);
                    return n.join(",")
                }(t) + ", " + e, {
                    node: r,
                    w: n,
                    parent: i
                }
            }

            function a(t, e) {
                var i = createNS("text");
                i.style.fontSize = "100px";
                var r = getFontProperties(e);
                return i.setAttribute("font-family", e.fFamily), i.setAttribute("font-style", r.style), i.setAttribute("font-weight", r.weight), i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily, t.appendChild(i), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, i
            }
            var o = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
            };
            return o.isModifier = function(t, e) {
                var i = t.toString(16) + e.toString(16);
                return -1 !== r.indexOf(i)
            }, o.isZeroWidthJoiner = function(t, e) {
                return e ? t === n[0] && e === n[1] : t === n[1]
            }, o.isCombinedCharacter = function(t) {
                return -1 !== i.indexOf(t)
            }, o.prototype = {
                addChars: function(t) {
                    if (t) {
                        var e;
                        this.chars || (this.chars = []);
                        var i, r, n = t.length,
                            s = this.chars.length;
                        for (e = 0; e < n; e += 1) {
                            for (i = 0, r = !1; i < s;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                            r || (this.chars.push(t[e]), s += 1)
                        }
                    }
                },
                addFonts: function(t, e) {
                    if (t) {
                        if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                        var i, r = t.list,
                            n = r.length,
                            o = n;
                        for (i = 0; i < n; i += 1) {
                            var h, l, c = !0;
                            if (r[i].loaded = !1, r[i].monoCase = s(r[i].fFamily, "monospace"), r[i].sansCase = s(r[i].fFamily, "sans-serif"), r[i].fPath) {
                                if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                                    if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]')).length > 0 && (c = !1), c) {
                                        var p = createTag("style");
                                        p.setAttribute("f-forigin", r[i].fOrigin), p.setAttribute("f-origin", r[i].origin), p.setAttribute("f-family", r[i].fFamily), p.type = "text/css", p.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}", e.appendChild(p)
                                    }
                                } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                                    for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(r[i].fPath) && (c = !1);
                                    if (c) {
                                        var u = createTag("link");
                                        u.setAttribute("f-forigin", r[i].fOrigin), u.setAttribute("f-origin", r[i].origin), u.type = "text/css", u.rel = "stylesheet", u.href = r[i].fPath, document.body.appendChild(u)
                                    }
                                } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                                    for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) r[i].fPath === h[l].src && (c = !1);
                                    if (c) {
                                        var f = createTag("link");
                                        f.setAttribute("f-forigin", r[i].fOrigin), f.setAttribute("f-origin", r[i].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", r[i].fPath), e.appendChild(f)
                                    }
                                }
                            } else r[i].loaded = !0, o -= 1;
                            r[i].helper = a(e, r[i]), r[i].cache = {}, this.fonts.push(r[i])
                        }
                        0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    } else this.isLoaded = !0
                },
                getCharData: function(t, i, r) {
                    for (var n = 0, s = this.chars.length; n < s;) {
                        if (this.chars[n].ch === t && this.chars[n].style === i && this.chars[n].fFamily === r) return this.chars[n];
                        n += 1
                    }
                    return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0), e
                },
                getFontByName: function(t) {
                    for (var e = 0, i = this.fonts.length; e < i;) {
                        if (this.fonts[e].fName === t) return this.fonts[e];
                        e += 1
                    }
                    return this.fonts[0]
                },
                measureText: function(t, e, i) {
                    var r = this.getFontByName(e),
                        n = t.charCodeAt(0);
                    if (!r.cache[n + 1]) {
                        var s = r.helper;
                        if (" " === t) {
                            s.textContent = "|" + t + "|";
                            var a = s.getComputedTextLength();
                            s.textContent = "||";
                            var o = s.getComputedTextLength();
                            r.cache[n + 1] = (a - o) / 100
                        } else s.textContent = t, r.cache[n + 1] = s.getComputedTextLength() / 100
                    }
                    return r.cache[n + 1] * i
                },
                checkLoadedFonts: function() {
                    var e, i, r, n = this.fonts.length,
                        s = n;
                    for (e = 0; e < n; e += 1) this.fonts[e].loaded ? s -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (i = this.fonts[e].monoCase.node, r = this.fonts[e].monoCase.w, i.offsetWidth !== r ? (s -= 1, this.fonts[e].loaded = !0) : (i = this.fonts[e].sansCase.node, r = this.fonts[e].sansCase.w, i.offsetWidth !== r && (s -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                    0 !== s && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                },
                setIsLoaded: function() {
                    this.isLoaded = !0
                }
            }, o
        }();

        function RenderableElement() {}
        RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            },
            addRenderableComponent: function(t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
            },
            removeRenderableComponent: function(t) {
                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
            },
            prepareRenderableFrame: function(t) {
                this.checkLayerLimits(t)
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            },
            checkLayerLimits: function(t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            },
            renderRenderable: function() {
                var t, e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function() {
                return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        };
        var MaskManagerInterface = function() {
                function t(t, e) {
                    this._mask = t, this._data = e
                }
                Object.defineProperty(t.prototype, "maskPath", {
                    get: function() {
                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                    }
                }), Object.defineProperty(t.prototype, "maskOpacity", {
                    get: function() {
                        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                    }
                });
                return function(e) {
                    var i, r = createSizedArray(e.viewData.length),
                        n = e.viewData.length;
                    for (i = 0; i < n; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
                    return function(t) {
                        for (i = 0; i < n;) {
                            if (e.masksProperties[i].nm === t) return r[i];
                            i += 1
                        }
                        return null
                    }
                }
            }(),
            ExpressionPropertyInterface = function() {
                var t = {
                        pv: 0,
                        v: 0,
                        mult: 1
                    },
                    e = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };

                function i(t, e, i) {
                    Object.defineProperty(t, "velocity", {
                        get: function() {
                            return e.getVelocityAtTime(e.comp.currentFrame)
                        }
                    }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                        if (!t.numKeys) return 0;
                        var n = "";
                        n = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                        var s = "unidimensional" === i ? new Number(n) : Object.assign({}, n);
                        return s.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === i ? n[0] : n, s
                    }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                }

                function r() {
                    return t
                }
                return function(n) {
                    return n ? "unidimensional" === n.propType ? function(e) {
                        e && "pv" in e || (e = t);
                        var r = 1 / e.mult,
                            n = e.pv * r,
                            s = new Number(n);
                        return s.value = n, i(s, e, "unidimensional"),
                            function() {
                                return e.k && e.getValue(), n = e.v * r, s.value !== n && ((s = new Number(n)).value = n, i(s, e, "unidimensional")), s
                            }
                    }(n) : function(t) {
                        t && "pv" in t || (t = e);
                        var r = 1 / t.mult,
                            n = t.data && t.data.l || t.pv.length,
                            s = createTypedArray("float32", n),
                            a = createTypedArray("float32", n);
                        return s.value = a, i(s, t, "multidimensional"),
                            function() {
                                t.k && t.getValue();
                                for (var e = 0; e < n; e += 1) a[e] = t.v[e] * r, s[e] = a[e];
                                return s
                            }
                    }(n) : r
                }
            }(),
            TransformExpressionInterface = function(t) {
                function e(t) {
                    switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity;
                        default:
                            return null
                    }
                }
                var i, r, n, s;
                return Object.defineProperty(e, "rotation", {
                    get: ExpressionPropertyInterface(t.r || t.rz)
                }), Object.defineProperty(e, "zRotation", {
                    get: ExpressionPropertyInterface(t.rz || t.r)
                }), Object.defineProperty(e, "xRotation", {
                    get: ExpressionPropertyInterface(t.rx)
                }), Object.defineProperty(e, "yRotation", {
                    get: ExpressionPropertyInterface(t.ry)
                }), Object.defineProperty(e, "scale", {
                    get: ExpressionPropertyInterface(t.s)
                }), t.p ? s = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (n = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                    get: function() {
                        return t.p ? s() : [i(), r(), n ? n() : 0]
                    }
                }), Object.defineProperty(e, "xPosition", {
                    get: ExpressionPropertyInterface(t.px)
                }), Object.defineProperty(e, "yPosition", {
                    get: ExpressionPropertyInterface(t.py)
                }), Object.defineProperty(e, "zPosition", {
                    get: ExpressionPropertyInterface(t.pz)
                }), Object.defineProperty(e, "anchorPoint", {
                    get: ExpressionPropertyInterface(t.a)
                }), Object.defineProperty(e, "opacity", {
                    get: ExpressionPropertyInterface(t.o)
                }), Object.defineProperty(e, "skew", {
                    get: ExpressionPropertyInterface(t.sk)
                }), Object.defineProperty(e, "skewAxis", {
                    get: ExpressionPropertyInterface(t.sa)
                }), Object.defineProperty(e, "orientation", {
                    get: ExpressionPropertyInterface(t.or)
                }), e
            },
            LayerExpressionInterface = function() {
                function t(t) {
                    var e = new Matrix;
                    void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
                    return e
                }

                function e(t, e) {
                    var i = this.getMatrix(e);
                    return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
                }

                function i(t, e) {
                    var i = this.getMatrix(e);
                    return this.applyPoint(i, t)
                }

                function r(t, e) {
                    var i = this.getMatrix(e);
                    return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
                }

                function n(t, e) {
                    var i = this.getMatrix(e);
                    return this.invertPoint(i, t)
                }

                function s(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, r = this._elem.hierarchy.length;
                        for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.applyToPointArray(e[0], e[1], e[2] || 0)
                }

                function a(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, r = this._elem.hierarchy.length;
                        for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.inversePoint(e)
                }

                function o(t) {
                    var e = new Matrix;
                    if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, r = this._elem.hierarchy.length;
                        for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                        return e.inversePoint(t)
                    }
                    return e.inversePoint(t)
                }

                function h() {
                    return [1, 1, 1, 1]
                }
                return function(l) {
                    var c;

                    function p(t) {
                        switch (t) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return p.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return c;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return p.effect;
                            case "ADBE Text Properties":
                                return p.textInterface;
                            default:
                                return null
                        }
                    }
                    p.getMatrix = t, p.invertPoint = a, p.applyPoint = s, p.toWorld = i, p.toWorldVec = e, p.fromWorld = n, p.fromWorldVec = r, p.toComp = i, p.fromComp = o, p.sampleImage = h, p.sourceRectAtTime = l.sourceRectAtTime.bind(l), p._elem = l;
                    var u = getDescriptor(c = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(p, {
                        hasParent: {
                            get: function() {
                                return l.hierarchy.length
                            }
                        },
                        parent: {
                            get: function() {
                                return l.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(c, "rotation"),
                        scale: getDescriptor(c, "scale"),
                        position: getDescriptor(c, "position"),
                        opacity: getDescriptor(c, "opacity"),
                        anchorPoint: u,
                        anchor_point: u,
                        transform: {
                            get: function() {
                                return c
                            }
                        },
                        active: {
                            get: function() {
                                return l.isInRange
                            }
                        }
                    }), p.startTime = l.data.st, p.index = l.data.ind, p.source = l.data.refId, p.height = 0 === l.data.ty ? l.data.h : 100, p.width = 0 === l.data.ty ? l.data.w : 100, p.inPoint = l.data.ip / l.comp.globalData.frameRate, p.outPoint = l.data.op / l.comp.globalData.frameRate, p._name = l.data.nm, p.registerMaskInterface = function(t) {
                        p.mask = new MaskManagerInterface(t, l)
                    }, p.registerEffectsInterface = function(t) {
                        p.effect = t
                    }, p
                }
            }(),
            propertyGroupFactory = function(t, e) {
                return function(i) {
                    return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
                }
            },
            PropertyInterface = function(t, e) {
                var i = {
                    _name: t
                };
                return function(t) {
                    return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
                }
            },
            EffectsExpressionInterface = function() {
                function t(i, r, n, s) {
                    function a(t) {
                        for (var e = i.ef, r = 0, n = e.length; r < n;) {
                            if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? l[r] : l[r]();
                            r += 1
                        }
                        throw new Error
                    }
                    var o, h = propertyGroupFactory(a, n),
                        l = [],
                        c = i.ef.length;
                    for (o = 0; o < c; o += 1) 5 === i.ef[o].ty ? l.push(t(i.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, s)) : l.push(e(r.effectElements[o], i.ef[o].ty, s, h));
                    return "ADBE Color Control" === i.mn && Object.defineProperty(a, "color", {
                        get: function() {
                            return l[0]()
                        }
                    }), Object.defineProperties(a, {
                        numProperties: {
                            get: function() {
                                return i.np
                            }
                        },
                        _name: {
                            value: i.nm
                        },
                        propertyGroup: {
                            value: h
                        }
                    }), a.enabled = 0 !== i.en, a.active = a.enabled, a
                }

                function e(t, e, i, r) {
                    var n = ExpressionPropertyInterface(t.p);
                    return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
                        function() {
                            return 10 === e ? i.comp.compInterface(t.p.v) : n()
                        }
                }
                return {
                    createEffectsInterface: function(e, i) {
                        if (e.effectsManager) {
                            var r, n = [],
                                s = e.data.ef,
                                a = e.effectsManager.effectElements.length;
                            for (r = 0; r < a; r += 1) n.push(t(s[r], e.effectsManager.effectElements[r], i, e));
                            var o = e.data.ef || [],
                                h = function(t) {
                                    for (r = 0, a = o.length; r < a;) {
                                        if (t === o[r].nm || t === o[r].mn || t === o[r].ix) return n[r];
                                        r += 1
                                    }
                                    return null
                                };
                            return Object.defineProperty(h, "numProperties", {
                                get: function() {
                                    return o.length
                                }
                            }), h
                        }
                        return null
                    }
                }
            }(),
            CompExpressionInterface = function(t) {
                function e(e) {
                    for (var i = 0, r = t.layers.length; i < r;) {
                        if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
                        i += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
            },
            ShapePathInterface = function(t, e, i) {
                var r = e.sh;

                function n(t) {
                    return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? n.path : null
                }
                var s = propertyGroupFactory(n, i);
                return r.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(n, {
                    path: {
                        get: function() {
                            return r.k && r.getValue(), r
                        }
                    },
                    shape: {
                        get: function() {
                            return r.k && r.getValue(), r
                        }
                    },
                    _name: {
                        value: t.nm
                    },
                    ix: {
                        value: t.ix
                    },
                    propertyIndex: {
                        value: t.ix
                    },
                    mn: {
                        value: t.mn
                    },
                    propertyGroup: {
                        value: i
                    }
                }), n
            },
            ShapeExpressionInterface = function() {
                function t(t, o, f) {
                    var d, m = [],
                        y = t ? t.length : 0;
                    for (d = 0; d < y; d += 1) "gr" === t[d].ty ? m.push(e(t[d], o[d], f)) : "fl" === t[d].ty ? m.push(i(t[d], o[d], f)) : "st" === t[d].ty ? m.push(s(t[d], o[d], f)) : "tm" === t[d].ty ? m.push(a(t[d], o[d], f)) : "tr" === t[d].ty || ("el" === t[d].ty ? m.push(h(t[d], o[d], f)) : "sr" === t[d].ty ? m.push(l(t[d], o[d], f)) : "sh" === t[d].ty ? m.push(ShapePathInterface(t[d], o[d], f)) : "rc" === t[d].ty ? m.push(c(t[d], o[d], f)) : "rd" === t[d].ty ? m.push(p(t[d], o[d], f)) : "rp" === t[d].ty ? m.push(u(t[d], o[d], f)) : "gf" === t[d].ty ? m.push(r(t[d], o[d], f)) : m.push(n(t[d], o[d])));
                    return m
                }

                function e(e, i, r) {
                    var n = function(t) {
                        switch (t) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return n.content;
                            default:
                                return n.transform
                        }
                    };
                    n.propertyGroup = propertyGroupFactory(n, r);
                    var s = function(e, i, r) {
                            var n, s = function(t) {
                                for (var e = 0, i = n.length; e < i;) {
                                    if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t) return n[e];
                                    e += 1
                                }
                                return "number" == typeof t ? n[t - 1] : null
                            };
                            s.propertyGroup = propertyGroupFactory(s, r), n = t(e.it, i.it, s.propertyGroup), s.numProperties = n.length;
                            var a = o(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
                            return s.transform = a, s.propertyIndex = e.cix, s._name = e.nm, s
                        }(e, i, n.propertyGroup),
                        a = o(e.it[e.it.length - 1], i.it[i.it.length - 1], n.propertyGroup);
                    return n.content = s, n.transform = a, Object.defineProperty(n, "_name", {
                        get: function() {
                            return e.nm
                        }
                    }), n.numProperties = e.np, n.propertyIndex = e.ix, n.nm = e.nm, n.mn = e.mn, n
                }

                function i(t, e, i) {
                    function r(t) {
                        return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
                    }
                    return Object.defineProperties(r, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                }

                function r(t, e, i) {
                    function r(t) {
                        return "Start Point" === t || "start point" === t ? r.startPoint : "End Point" === t || "end point" === t ? r.endPoint : "Opacity" === t || "opacity" === t ? r.opacity : null
                    }
                    return Object.defineProperties(r, {
                        startPoint: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        endPoint: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        type: {
                            get: function() {
                                return "a"
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.s.setGroupProperty(PropertyInterface("Start Point", i)), e.e.setGroupProperty(PropertyInterface("End Point", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                }

                function n() {
                    return function() {
                        return null
                    }
                }

                function s(t, e, i) {
                    var r, n = propertyGroupFactory(l, i),
                        s = propertyGroupFactory(h, n);

                    function a(i) {
                        Object.defineProperty(h, t.d[i].nm, {
                            get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                        })
                    }
                    var o = t.d ? t.d.length : 0,
                        h = {};
                    for (r = 0; r < o; r += 1) a(r), e.d.dataProps[r].p.setGroupProperty(s);

                    function l(t) {
                        return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
                    }
                    return Object.defineProperties(l, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(e.w)
                        },
                        dash: {
                            get: function() {
                                return h
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(PropertyInterface("Color", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), e.w.setGroupProperty(PropertyInterface("Stroke Width", n)), l
                }

                function a(t, e, i) {
                    function r(e) {
                        return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
                    }
                    var n = propertyGroupFactory(r, i);
                    return r.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", n)), e.e.setGroupProperty(PropertyInterface("End", n)), e.o.setGroupProperty(PropertyInterface("Offset", n)), r.propertyIndex = t.ix, r.propertyGroup = i, Object.defineProperties(r, {
                        start: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), r.mn = t.mn, r
                }

                function o(t, e, i) {
                    function r(e) {
                        return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
                    }
                    var n = propertyGroupFactory(r, i);
                    return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", n)), Object.defineProperties(r, {
                        opacity: {
                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = i, r
                }

                function h(t, e, i) {
                    function r(e) {
                        return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
                    }
                    var n = propertyGroupFactory(r, i);
                    r.propertyIndex = t.ix;
                    var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return s.s.setGroupProperty(PropertyInterface("Size", n)), s.p.setGroupProperty(PropertyInterface("Position", n)), Object.defineProperties(r, {
                        size: {
                            get: ExpressionPropertyInterface(s.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(s.p)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), r.mn = t.mn, r
                }

                function l(t, e, i) {
                    function r(e) {
                        return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
                    }
                    var n = propertyGroupFactory(r, i),
                        s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return r.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", n)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", n)), s.pt.setGroupProperty(PropertyInterface("Points", n)), s.p.setGroupProperty(PropertyInterface("Position", n)), s.r.setGroupProperty(PropertyInterface("Rotation", n)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", n)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", n))), Object.defineProperties(r, {
                        position: {
                            get: ExpressionPropertyInterface(s.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(s.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(s.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(s.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(s.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(s.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(s.is)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), r.mn = t.mn, r
                }

                function c(t, e, i) {
                    function r(e) {
                        return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
                    }
                    var n = propertyGroupFactory(r, i),
                        s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return r.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", n)), s.s.setGroupProperty(PropertyInterface("Size", n)), s.r.setGroupProperty(PropertyInterface("Rotation", n)), Object.defineProperties(r, {
                        position: {
                            get: ExpressionPropertyInterface(s.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(s.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(s.s)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), r.mn = t.mn, r
                }

                function p(t, e, i) {
                    function r(e) {
                        return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
                    }
                    var n = propertyGroupFactory(r, i),
                        s = e;
                    return r.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", n)), Object.defineProperties(r, {
                        radius: {
                            get: ExpressionPropertyInterface(s.rd)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), r.mn = t.mn, r
                }

                function u(t, e, i) {
                    function r(e) {
                        return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
                    }
                    var n = propertyGroupFactory(r, i),
                        s = e;
                    return r.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", n)), s.o.setGroupProperty(PropertyInterface("Offset", n)), Object.defineProperties(r, {
                        copies: {
                            get: ExpressionPropertyInterface(s.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(s.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), r.mn = t.mn, r
                }
                return function(e, i, r) {
                    var n;

                    function s(t) {
                        if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? r : n[t - 1];
                        for (var e = 0, i = n.length; e < i;) {
                            if (n[e]._name === t) return n[e];
                            e += 1
                        }
                        return null
                    }
                    return s.propertyGroup = propertyGroupFactory(s, function() {
                        return r
                    }), n = t(e, i, s.propertyGroup), s.numProperties = n.length, s._name = "Contents", s
                }
            }(),
            TextExpressionInterface = function(t) {
                var e;

                function i(t) {
                    switch (t) {
                        case "ADBE Text Document":
                            return i.sourceText;
                        default:
                            return null
                    }
                }
                return Object.defineProperty(i, "sourceText", {
                    get: function() {
                        t.textProperty.getValue();
                        var i = t.textProperty.currentData.t;
                        return void 0 !== i && (t.textProperty.currentData.t = void 0, (e = new String(i)).value = i || new String(i)), e
                    }
                }), i
            },
            getBlendMode = (blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            }, function(t) {
                return blendModeEnums[t] || ""
            }),
            blendModeEnums;

        function SliderEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function AngleEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function ColorEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function PointEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function LayerIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function MaskIndexEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function CheckboxEffect(t, e, i) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager(t, e) {
            var i, r = t.ef || [];
            this.effectElements = [];
            var n, s = r.length;
            for (i = 0; i < s; i += 1) n = new GroupEffect(r[i], e), this.effectElements.push(n)
        }

        function GroupEffect(t, e) {
            this.init(t, e)
        }

        function BaseElement() {}

        function FrameElement() {}

        function _typeof$2(t) {
            "@babel/helpers - typeof";
            return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            var i;
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var r, n = this.data.ef.length,
                s = this.data.ef;
            for (i = 0; i < n; i += 1) {
                switch (r = null, s[i].ty) {
                    case 0:
                        r = new SliderEffect(s[i], e, this);
                        break;
                    case 1:
                        r = new AngleEffect(s[i], e, this);
                        break;
                    case 2:
                        r = new ColorEffect(s[i], e, this);
                        break;
                    case 3:
                        r = new PointEffect(s[i], e, this);
                        break;
                    case 4:
                    case 7:
                        r = new CheckboxEffect(s[i], e, this);
                        break;
                    case 10:
                        r = new LayerIndexEffect(s[i], e, this);
                        break;
                    case 11:
                        r = new MaskIndexEffect(s[i], e, this);
                        break;
                    case 5:
                        r = new EffectsManager(s[i], e, this);
                        break;
                    default:
                        r = new NoValueEffect(s[i], e, this)
                }
                r && this.effectElements.push(r)
            }
        }, BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1
                }
                return !1
            },
            initExpressions: function() {
                this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
            },
            setBlendMode: function() {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
            },
            initBaseData: function(t, e, i) {
                this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            },
            getType: function() {
                return this.type
            },
            sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            },
            prepareProperties: function(t, e) {
                var i, r = this.dynamicProperties.length;
                for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            },
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
            }
        };
        var FootageInterface = (dataInterfaceFactory = function(t) {
                function e(t) {
                    return "Outline" === t ? e.outlineInterface() : null
                }
                return e._name = "Outline", e.outlineInterface = function(t) {
                    var e = "",
                        i = t.getFootageData();

                    function r(t) {
                        if (i[t]) return e = t, "object" === _typeof$2(i = i[t]) ? r : i;
                        var n = t.indexOf(e);
                        if (-1 !== n) {
                            var s = parseInt(t.substr(n + e.length), 10);
                            return "object" === _typeof$2(i = i[s]) ? r : i
                        }
                        return ""
                    }
                    return function() {
                        return e = "", i = t.getFootageData(), r
                    }
                }(t), e
            }, function(t) {
                function e(t) {
                    return "Data" === t ? e.dataInterface : null
                }
                return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
            }),
            dataInterfaceFactory;

        function FootageElement(t, e, i) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
        }

        function AudioElement(t, e, i) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
            var r = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function BaseRenderer() {}

        function TransformElement() {}

        function MaskElement(t, e, i) {
            this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var r, n, s = this.globalData.defs,
                a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a), this.solidPath = "";
            var o, h, l, c, p, u, f = this.masksProperties,
                d = 0,
                m = [],
                y = createElementID(),
                g = "clipPath",
                v = "clip-path";
            for (r = 0; r < a; r += 1)
                if (("a" !== f[r].mode && "n" !== f[r].mode || f[r].inv || 100 !== f[r].o.k || f[r].o.x) && (g = "mask", v = "mask"), "s" !== f[r].mode && "i" !== f[r].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), m.push(l)), n = createNS("path"), "n" === f[r].mode) this.viewData[r] = {
                    op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                    elem: n,
                    lastPath: ""
                }, s.appendChild(n);
                else {
                    var b;
                    if (d += 1, n.setAttribute("fill", "s" === f[r].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== f[r].x.k ? (g = "mask", v = "mask", u = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element), b = createElementID(), (c = createNS("filter")).setAttribute("id", b), (p = createNS("feMorphology")).setAttribute("operator", "erode"), p.setAttribute("in", "SourceGraphic"), p.setAttribute("radius", "0"), c.appendChild(p), s.appendChild(c), n.setAttribute("stroke", "s" === f[r].mode ? "#000000" : "#ffffff")) : (p = null, u = null), this.storedData[r] = {
                            elem: n,
                            x: u,
                            expan: p,
                            lastPath: "",
                            lastOperator: "",
                            filterId: b,
                            lastRadius: 0
                        }, "i" === f[r].mode) {
                        h = m.length;
                        var _ = createNS("g");
                        for (o = 0; o < h; o += 1) _.appendChild(m[o]);
                        var w = createNS("mask");
                        w.setAttribute("mask-type", "alpha"), w.setAttribute("id", y + "_" + d), w.appendChild(n), s.appendChild(w), _.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"), m.length = 0, m.push(_)
                    } else m.push(n);
                    f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                        elem: n,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                        invRect: l
                    }, this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r])
                }
            for (this.maskElement = createNS(g), a = m.length, r = 0; r < a; r += 1) this.maskElement.appendChild(m[r]);
            d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
            return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
            this.layerInterface = FootageInterface(this)
        }, FootageElement.prototype.getFootageData = function() {
            return this.footageData
        }, AudioElement.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e
            }
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
            this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
            this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
            this.audio.volume(t)
        }, AudioElement.prototype.getBaseElement = function() {
            return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
            var e, i, r = this.layers.length;
            for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t)
            }
        }, BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
            return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
            return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
            var e;
            this.completeLayers = !1;
            var i, r = t.length,
                n = this.layers.length;
            for (e = 0; e < r; e += 1)
                for (i = 0; i < n;) {
                    if (this.layers[i].id === t[e].id) {
                        this.layers[i] = t[e];
                        break
                    }
                    i += 1
                }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
            for (var r = this.elements, n = this.layers, s = 0, a = n.length; s < a;) n[s].ind == e && (r[s] && !0 !== r[s] ? (i.push(r[s]), r[s].setAsParent(), void 0 !== n[s].parent ? this.buildElementParenting(t, n[s].parent, i) : t.setHierarchy(i)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                    var r = this.createComp(t[e]);
                    r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                }
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        }, TransformElement.prototype = {
            initTransform: function() {
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat,
                        i = 0,
                        r = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; i < r;) {
                            if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            i += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for (var i, r = !0, n = this.comp; r;) n.finalTransform ? (n.data.hasMask && e.splice(0, 0, n.finalTransform), n = n.comp) : r = !1;
                var s, a = e.length;
                for (i = 0; i < a; i += 1) s = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
                return t
            },
            mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
            var e, i = this.element.finalTransform.mat,
                r = this.masksProperties.length;
            for (e = 0; e < r; e += 1)
                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                    var n = this.storedData[e].expan;
                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), n.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, i) {
            var r, n, s = " M" + e.v[0][0] + "," + e.v[0][1];
            for (n = e._length, r = 1; r < n; r += 1) s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
            if (e.c && n > 1 && (s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
                var a = "";
                i.elem && (e.c && (a = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", a)), i.lastPath = s
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = function() {
                var t = {};
                return t.createFilter = function(t, e) {
                    var i = createNS("filter");
                    i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"));
                    return i
                }, t.createAlphaToLuminanceFilter = function() {
                    var t = createNS("feColorMatrix");
                    return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                }, t
            }(),
            featureSupport = (ob = {
                maskType: !0
            }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (ob.maskType = !1), ob),
            ob;

        function SVGTintFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                var r, n = createNS("feMerge");
                t.appendChild(n), (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), n.appendChild(r), (r = createNS("feMergeNode")).setAttribute("in", "f2"), n.appendChild(r)
            }
        }

        function SVGFillFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
        }

        function SVGStrokeEffect(t, e) {
            this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
        }

        function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
            var r = createNS("feComponentTransfer");
            r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"), r.appendChild(n), this.feFuncR = n;
            var s = createNS("feFuncG");
            s.setAttribute("type", "table"), r.appendChild(s), this.feFuncG = s;
            var a = createNS("feFuncB");
            a.setAttribute("type", "table"), r.appendChild(a), this.feFuncB = a
        }

        function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var i = this.filterManager.effectElements,
                r = createNS("feComponentTransfer");
            (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r))
        }

        function SVGDropShadowEffect(t, e) {
            var i = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
            var r = createNS("feGaussianBlur");
            r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
            var n = createNS("feOffset");
            n.setAttribute("dx", "25"), n.setAttribute("dy", "0"), n.setAttribute("in", "drop_shadow_1"), n.setAttribute("result", "drop_shadow_2"), this.feOffset = n, t.appendChild(n);
            var s = createNS("feFlood");
            s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s);
            var a = createNS("feComposite");
            a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
            var o, h = createNS("feMerge");
            t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o)
        }
        SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    r = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
            }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                    i = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
            }
        }, SVGStrokeEffect.prototype.initialize = function() {
            var t, e, i, r, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = (i = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                p: t,
                m: i
            });
            if (3 === this.filterManager.effectElements[10].p.v) {
                var s = createNS("mask"),
                    a = createElementID();
                s.setAttribute("id", a), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                var o = createNS("g");
                for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); n[0];) o.appendChild(n[0]);
                this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v)
                    for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            var e;
            this.initialized || this.initialize();
            var i, r, n = this.paths.length;
            for (e = 0; e < n; e += 1)
                if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                    var s;
                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                        var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                            o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                            h = r.getTotalLength();
                        s = "0 0 0 " + h * a + " ";
                        var l, c = h * (o - a),
                            p = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                            u = Math.floor(c / p);
                        for (l = 0; l < u; l += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                        s += "0 " + 10 * h + " 0 0"
                    } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                    r.setAttribute("stroke-dasharray", s)
                }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var f = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
            }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    r = this.filterManager.effectElements[2].p.v,
                    n = r[0] + " " + i[0] + " " + e[0],
                    s = r[1] + " " + i[1] + " " + e[1],
                    a = r[2] + " " + i[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", a)
            }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var i = createNS(t);
            return i.setAttribute("type", "table"), e.appendChild(i), i
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, n) {
            for (var s, a, o = 0, h = Math.min(t, e), l = Math.max(t, e), c = Array.call(null, {
                    length: 256
                }), p = 0, u = n - r, f = e - t; o <= 256;) a = (s = o / 256) <= h ? f < 0 ? n : r : s >= l ? f < 0 ? r : n : r + u * Math.pow((s - t) / f, 1 / i), c[p] = a, p += 1, o += 256 / 255;
            return c.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, i = this.filterManager.effectElements;
                this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
            }
        }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var i = this.filterManager.effectElements[3].p.v,
                        r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        n = i * Math.cos(r),
                        s = i * Math.sin(r);
                    this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", s)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, i) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
        }

        function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var i = createNS("feGaussianBlur");
            t.appendChild(i), this.feGaussianBlur = i
        }
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var i = t.layerElement.parentNode;
            if (i) {
                for (var r, n = i.children, s = 0, a = n.length; s < a && n[s] !== t.layerElement;) s += 1;
                s <= a - 2 && (r = n[s + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var i = createElementID(),
                    r = createNS("mask");
                r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var n = t.globalData.defs;
                n.appendChild(r);
                var s = createNS("symbol");
                s.setAttribute("id", i), this.replaceInParent(e, i), s.appendChild(e.layerElement), n.appendChild(s);
                var a = createNS("use");
                a.setAttribute("href", "#" + i), r.appendChild(a), e.data.hd = !1, e.show()
            }
            t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3 * this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    r = 3 == i ? 0 : e,
                    n = 2 == i ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", r + " " + n);
                var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", s)
            }
        };
        var registeredEffects = {};

        function SVGEffects(t) {
            var e, i, r = t.data.ef ? t.data.ef.length : 0,
                n = createElementID(),
                s = filtersFactory.createFilter(n, !0),
                a = 0;
            for (this.filters = [], e = 0; e < r; e += 1) {
                i = null;
                var o = t.data.ef[e].ty;
                if (registeredEffects[o]) i = new(0, registeredEffects[o].effect)(s, t.effectsManager.effectElements[e], t), registeredEffects[o].countsAsEffect && (a += 1);
                20 === t.data.ef[e].ty ? (a += 1, i = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (a += 1, i = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (a += 1, i = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (a += 1, i = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (a += 1, i = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (a += 1, i = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), i && this.filters.push(i)
            }
            a && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect(t, e, i) {
            registeredEffects[t] = {
                effect: e,
                countsAsEffect: i
            }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }

        function ProcessedElement(t, e) {
            this.elem = t, this.pos = e
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(t) {
            var e, i = this.filters.length;
            for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
        }, SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g")
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t, e, i, r = null;
                if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                        var n = createNS("mask");
                        n.setAttribute("id", this.layerId), n.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), n.appendChild(this.layerElement), r = n, this.globalData.defs.appendChild(n), featureSupport.maskType || 1 != this.data.td || (n.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), r = i, n.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
                    } else if (2 == this.data.td) {
                        var s = createNS("mask");
                        s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
                        var a = createNS("g");
                        s.appendChild(a), t = createElementID(), e = filtersFactory.createFilter(t);
                        var o = createNS("feComponentTransfer");
                        o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                        var h = createNS("feFuncA");
                        h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
                        var l = createNS("rect");
                        l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), a.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), a.appendChild(l), a.appendChild(this.layerElement), r = a, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), a.appendChild(l), i.appendChild(this.layerElement), r = i, a.appendChild(i)), this.globalData.defs.appendChild(s)
                    }
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                    var c = createNS("clipPath"),
                        p = createNS("path");
                    p.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var u = createElementID();
                    if (c.setAttribute("id", u), c.appendChild(p), this.globalData.defs.appendChild(c), this.checkMasks()) {
                        var f = createNS("g");
                        f.setAttribute("clip-path", "url(" + getLocationHref() + "#" + u + ")"), f.appendChild(this.layerElement), this.transformedElement = f, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + u + ")")
                }
                0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
            },
            destroyBaseElement: function() {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
            },
            setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
            }
        }, HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            },
            setHierarchy: function(t) {
                this.hierarchy = t
            },
            setAsParent: function() {
                this._isParent = !0
            },
            checkParenting: function() {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        }, extendPrototype([RenderableElement, createProxyFunction({
            initElement: function(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
            },
            hide: function() {
                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
            },
            show: function() {
                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            renderInnerContent: function() {},
            prepareFrame: function(t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
            },
            destroy: function() {
                this.innerElem = null, this.destroyBaseElement()
            }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect
        }, IShapeElement.prototype = {
            addShapeToModifiers: function(t) {
                var e, i = this.shapeModifiers.length;
                for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
            },
            isShapeInAnimatedModifiers: function(t) {
                for (var e = this.shapeModifiers.length; 0 < e;)
                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                    for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                }
            },
            searchProcessedElement: function(t) {
                for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
                    if (e[i].elem === t) return e[i].pos;
                    i += 1
                }
                return 0
            },
            addProcessedElement: function(t, e) {
                for (var i = this.processedElements, r = i.length; r;)
                    if (i[r -= 1].elem === t) return void(i[r].pos = e);
                i.push(new ProcessedElement(t, e))
            },
            prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
            }
        };
        var lineCapEnum = {
                1: "butt",
                2: "round",
                3: "square"
            },
            lineJoinEnum = {
                1: "miter",
                2: "round",
                3: "bevel"
            };

        function SVGShapeData(t, e, i) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
            for (var r = 0, n = t.length; r < n;) {
                if (t[r].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                r += 1
            }
        }

        function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(t, e, i, r) {
            var n;
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
            var s, a = e.length || 0;
            for (n = 0; n < a; n += 1) s = PropertyFactory.getProp(t, e[n].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[n] = {
                n: e[n].n,
                p: s
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
        }

        function SVGNoStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
        }

        function GradientProperty(t, e, i) {
            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
            var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
        }

        function SVGGradientStrokeStyleData(t, e, i) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, i) {
            this.transform = {
                mProps: t,
                op: e,
                container: i
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
            this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0,
                    i = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
            for (var i = 0, r = this.o.length / 2; i < r;) {
                if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                i += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, i, r, n = 4 * this.data.p;
                for (e = 0; e < n; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                if (this.o.length)
                    for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
                this._mdf = !t
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var i = createElementID(),
                r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
            var n, s, a, o = [];
            for (a = 4 * e.g.p, s = 0; s < a; s += 4) n = createNS("stop"), r.appendChild(n), o.push(n);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = r, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var i, r, n, s = createNS("mask"),
                    a = createNS("path");
                s.appendChild(a);
                var o = createElementID(),
                    h = createElementID();
                s.setAttribute("id", h);
                var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var c = this.stops;
                for (r = 4 * t.g.p; r < n; r += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), c.push(i);
                a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = s, this.ost = c, this.maskId = h, e.msElem = a
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, i, r) {
                if (0 === e) return "";
                var n, s = t.o,
                    a = t.i,
                    o = t.v,
                    h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                for (n = 1; n < e; n += 1) h += " C" + r.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + r.applyToPointStringified(a[n][0], a[n][1]) + " " + r.applyToPointStringified(o[n][0], o[n][1]);
                return i && e && (h += " C" + r.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
            },
            SVGElementsRenderer = function() {
                var t = new Matrix,
                    e = new Matrix;

                function i(t, e, i) {
                    (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                }

                function r() {}

                function n(i, r, n) {
                    var s, a, o, h, l, c, p, u, f, d, m, y = r.styles.length,
                        g = r.lvl;
                    for (c = 0; c < y; c += 1) {
                        if (h = r.sh._mdf || n, r.styles[c].lvl < g) {
                            for (u = e.reset(), d = g - r.styles[c].lvl, m = r.transformers.length - 1; !h && d > 0;) h = r.transformers[m].mProps._mdf || h, d -= 1, m -= 1;
                            if (h)
                                for (d = g - r.styles[c].lvl, m = r.transformers.length - 1; d > 0;) f = r.transformers[m].mProps.v.props, u.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d -= 1, m -= 1
                        } else u = t;
                        if (a = (p = r.sh.paths)._length, h) {
                            for (o = "", s = 0; s < a; s += 1)(l = p.shapes[s]) && l._length && (o += buildShapeString(l, l._length, l.c, u));
                            r.caches[c] = o
                        } else o = r.caches[c];
                        r.styles[c].d += !0 === i.hd ? "" : o, r.styles[c]._mdf = h || r.styles[c]._mdf
                    }
                }

                function s(t, e, i) {
                    var r = e.style;
                    (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
                }

                function a(t, e, i) {
                    o(t, e, i), h(t, e, i)
                }

                function o(t, e, i) {
                    var r, n, s, a, o, h = e.gf,
                        l = e.g._hasOpacity,
                        c = e.s.v,
                        p = e.e.v;
                    if (e.o._mdf || i) {
                        var u = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                        e.style.pElem.setAttribute(u, e.o.v)
                    }
                    if (e.s._mdf || i) {
                        var f = 1 === t.t ? "x1" : "cx",
                            d = "x1" === f ? "y1" : "cy";
                        h.setAttribute(f, c[0]), h.setAttribute(d, c[1]), l && !e.g._collapsable && (e.of.setAttribute(f, c[0]), e.of.setAttribute(d, c[1]))
                    }
                    if (e.g._cmdf || i) {
                        r = e.cst;
                        var m = e.g.c;
                        for (s = r.length, n = 0; n < s; n += 1)(a = r[n]).setAttribute("offset", m[4 * n] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * n + 1] + "," + m[4 * n + 2] + "," + m[4 * n + 3] + ")")
                    }
                    if (l && (e.g._omdf || i)) {
                        var y = e.g.o;
                        for (s = (r = e.g._collapsable ? e.cst : e.ost).length, n = 0; n < s; n += 1) a = r[n], e.g._collapsable || a.setAttribute("offset", y[2 * n] + "%"), a.setAttribute("stop-opacity", y[2 * n + 1])
                    }
                    if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", p[0]), h.setAttribute("y2", p[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", p[0]), e.of.setAttribute("y2", p[1])));
                    else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(c[0] - p[0], 2) + Math.pow(c[1] - p[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                        o || (o = Math.sqrt(Math.pow(c[0] - p[0], 2) + Math.pow(c[1] - p[1], 2)));
                        var g = Math.atan2(p[1] - c[1], p[0] - c[0]),
                            v = e.h.v;
                        v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                        var b = o * v,
                            _ = Math.cos(g + e.a.v) * b + c[0],
                            w = Math.sin(g + e.a.v) * b + c[1];
                        h.setAttribute("fx", _), h.setAttribute("fy", w), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", w))
                    }
                }

                function h(t, e, i) {
                    var r = e.style,
                        n = e.d;
                    n && (n._mdf || i) && n.dashStr && (r.pElem.setAttribute("stroke-dasharray", n.dashStr), r.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
                }
                return {
                    createRenderFunction: function(t) {
                        switch (t.ty) {
                            case "fl":
                                return s;
                            case "gf":
                                return o;
                            case "gs":
                                return a;
                            case "st":
                                return h;
                            case "sh":
                            case "el":
                            case "rc":
                            case "sr":
                                return n;
                            case "tr":
                                return i;
                            case "no":
                                return r;
                            default:
                                return null
                        }
                    }
                }
            }();

        function SVGShapeElement(t, e, i) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
        }

        function LetterProps(t, e, i, r, n, s) {
            this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = n, this.p = s, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!i,
                fc: !!r,
                m: !0,
                p: !0
            }
        }

        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e, i, r, n = this.shapes.length,
                s = this.stylesList.length,
                a = [],
                o = !1;
            for (i = 0; i < s; i += 1) {
                for (r = this.stylesList[i], o = !1, a.length = 0, t = 0; t < n; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (a.push(e), o = e._isAnimated || o);
                a.length > 1 && o && this.setShapesAsAnimated(a)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var i, r = new SVGStyleData(t, e),
                n = r.pElem;
            if ("st" === t.ty) i = new SVGStrokeStyleData(this, t, r);
            else if ("fl" === t.ty) i = new SVGFillStyleData(this, t, r);
            else if ("gf" === t.ty || "gs" === t.ty) {
                i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), n.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))
            } else "no" === t.ty && (i = new SVGNoStyleData(this, t, r));
            return "st" !== t.ty && "gs" !== t.ty || (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), n.setAttribute("fill-opacity", "0"), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                r = new SVGTransformData(i, i.o, e);
            return this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
            var r = 4;
            "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
            var n = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
            return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for (var i = 0, r = this.animatedContents.length; i < r;) {
                if (this.animatedContents[i].element === e) return;
                i += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
            var e, i = t.styles,
                r = this.stylesList.length;
            for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, n, s, a) {
            var o, h, l, c, p, u, f = [].concat(s),
                d = t.length - 1,
                m = [],
                y = [];
            for (o = d; o >= 0; o -= 1) {
                if ((u = this.searchProcessedElement(t[o])) ? e[o] = i[u - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) u ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], n), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), m.push(e[o].style);
                else if ("gr" === t[o].ty) {
                    if (u)
                        for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                    else e[o] = this.createGroupElement(t[o]);
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, f, a), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr)
                } else "tr" === t[o].ty ? (u || (e[o] = this.createTransformElement(t[o], r)), c = e[o].transform, f.push(c)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (u || (e[o] = this.createShapeElement(t[o], f, n)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (u ? (p = e[o]).closed = !1 : ((p = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = p, this.shapeModifiers.push(p)), y.push(p)) : "rp" === t[o].ty && (u ? (p = e[o]).closed = !0 : (p = ShapeModifiers.getModifier(t[o].ty), e[o] = p, p.init(this, t, o, e), this.shapeModifiers.push(p), a = !1), y.push(p));
                this.addProcessedElement(t[o], o + 1)
            }
            for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
            for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
            var t, e, i = this.animatedContents.length;
            for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(t, e, i, r, n, s) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var a = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, a = !0), this.m !== n && (this.m = n, this._mdf.m = !0, a = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, a = !0), a
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }, TextProperty.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                    i = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                    var r;
                    this.lock = !0, this._mdf = !1;
                    var n = this.effectsSequence.length,
                        s = t || this.data.d.k[this.keysIndex].s;
                    for (r = 0; r < n; r += 1) s = i !== this.keysIndex ? this.effectsSequence[r](s, s.t) : this.effectsSequence[r](this.currentData, s.t);
                    e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);) i += 1;
            return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
            for (var e, i, r = [], n = 0, s = t.length, a = !1; n < s;) e = t.charCodeAt(n), FontManager.isCombinedCharacter(e) ? r[r.length - 1] += t.charAt(n) : e >= 55296 && e <= 56319 ? (i = t.charCodeAt(n + 1)) >= 56320 && i <= 57343 ? (a || FontManager.isModifier(e, i) ? (r[r.length - 1] += t.substr(n, 2), a = !1) : r.push(t.substr(n, 2)), n += 1) : r.push(t.charAt(n)) : e > 56319 ? (i = t.charCodeAt(n + 1), FontManager.isZeroWidthJoiner(e, i) ? (a = !0, r[r.length - 1] += t.substr(n, 2), n += 1) : r.push(t.charAt(n))) : FontManager.isZeroWidthJoiner(e) ? (r[r.length - 1] += t.charAt(n), a = !0) : r.push(t.charAt(n)), n += 1;
            return r
        }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e, i, r, n, s, a, o, h = this.elem.globalData.fontManager,
                l = this.data,
                c = [],
                p = 0,
                u = l.m.g,
                f = 0,
                d = 0,
                m = 0,
                y = [],
                g = 0,
                v = 0,
                b = h.getFontByName(t.f),
                _ = 0,
                w = getFontProperties(b);
            t.fWeight = w.weight, t.fStyle = w.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
            var S, E = t.tr / 1e3 * t.finalSize;
            if (t.sz)
                for (var x, P, T = !0, A = t.sz[0], M = t.sz[1]; T;) {
                    x = 0, g = 0, i = (P = this.buildFinalText(t.t)).length, E = t.tr / 1e3 * t.finalSize;
                    var C = -1;
                    for (e = 0; e < i; e += 1) S = P[e].charCodeAt(0), r = !1, " " === P[e] ? C = e : 13 !== S && 3 !== S || (g = 0, r = !0, x += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(P[e], b.fStyle, b.fFamily), _ = r ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(P[e], t.f, t.finalSize), g + _ > A && " " !== P[e] ? (-1 === C ? i += 1 : e = C, x += t.finalLineHeight || 1.2 * t.finalSize, P.splice(e, C === e ? 1 : 0, "\r"), C = -1, g = 0) : (g += _, g += E);
                    x += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && M < x ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = P, i = t.finalText.length, T = !1)
                }
            g = -E, _ = 0;
            var k, D = 0;
            for (e = 0; e < i; e += 1)
                if (r = !1, 13 === (S = (k = t.finalText[e]).charCodeAt(0)) || 3 === S ? (D = 0, y.push(g), v = g > v ? g : v, g = -2 * E, n = "", r = !0, m += 1) : n = k, h.chars ? (o = h.getCharData(k, b.fStyle, h.getFontByName(t.f).fFamily), _ = r ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(n, t.f, t.finalSize), " " === k ? D += _ + E : (g += _ + E + D, D = 0), c.push({
                        l: _,
                        an: _,
                        add: f,
                        n: r,
                        anIndexes: [],
                        val: n,
                        line: m,
                        animatorJustifyOffset: 0
                    }), 2 == u) {
                    if (f += _, "" === n || " " === n || e === i - 1) {
                        for ("" !== n && " " !== n || (f -= _); d <= e;) c[d].an = f, c[d].ind = p, c[d].extra = _, d += 1;
                        p += 1, f = 0
                    }
                } else if (3 == u) {
                if (f += _, "" === n || e === i - 1) {
                    for ("" === n && (f -= _); d <= e;) c[d].an = f, c[d].ind = p, c[d].extra = _, d += 1;
                    f = 0, p += 1
                }
            } else c[p].ind = p, c[p].extra = 0, p += 1;
            if (t.l = c, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = v, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
            }
            t.lineWidths = y;
            var F, I, O, R, L = l.a;
            a = L.length;
            var B = [];
            for (s = 0; s < a; s += 1) {
                for ((F = L[s]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), R = 0, O = F.s.b, e = 0; e < i; e += 1)(I = c[e]).anIndexes[s] = R, (1 == O && "" !== I.val || 2 == O && "" !== I.val && " " !== I.val || 3 == O && (I.n || " " == I.val || e == i - 1) || 4 == O && (I.n || e == i - 1)) && (1 === F.s.rn && B.push(R), R += 1);
                l.a[s].s.totalChars = R;
                var V, z = -1;
                if (1 === F.s.rn)
                    for (e = 0; e < i; e += 1) z != (I = c[e]).anIndexes[s] && (z = I.anIndexes[s], V = B.splice(Math.floor(Math.random() * B.length), 1)[0]), I.anIndexes[s] = V
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var i = this.copyData({}, this.data.d.k[e].s);
            i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
            var t = Math.max,
                e = Math.min,
                i = Math.floor;

            function r(t, e) {
                this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                    k: 0
                }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                    v: 100
                }, this.o = PropertyFactory.getProp(t, e.o || {
                    k: 0
                }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                    k: 0
                }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                    k: 0
                }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
                    k: 100
                }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
            }
            return r.prototype = {
                getMult: function(r) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n = 0,
                        s = 0,
                        a = 1,
                        o = 1;
                    this.ne.v > 0 ? n = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                    var h = BezierFactory.getBezierEasing(n, s, a, o).get,
                        l = 0,
                        c = this.finalS,
                        p = this.finalE,
                        u = this.data.sh;
                    if (2 === u) l = h(l = p === c ? r >= p ? 1 : 0 : t(0, e(.5 / (p - c) + (r - c) / (p - c), 1)));
                    else if (3 === u) l = h(l = p === c ? r >= p ? 0 : 1 : 1 - t(0, e(.5 / (p - c) + (r - c) / (p - c), 1)));
                    else if (4 === u) p === c ? l = 0 : (l = t(0, e(.5 / (p - c) + (r - c) / (p - c), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                    else if (5 === u) {
                        if (p === c) l = 0;
                        else {
                            var f = p - c,
                                d = -f / 2 + (r = e(t(0, r + .5 - c), p - c)),
                                m = f / 2;
                            l = Math.sqrt(1 - d * d / (m * m))
                        }
                        l = h(l)
                    } else 6 === u ? (p === c ? l = 0 : (r = e(t(0, r + .5 - c), p - c), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (p - c))) / 2), l = h(l)) : (r >= i(c) && (l = t(0, e(r - c < 0 ? e(p, 1) - (c - r) : p - r, 1))), l = h(l));
                    if (100 !== this.sm.v) {
                        var y = .01 * this.sm.v;
                        0 === y && (y = 1e-8);
                        var g = .5 - .5 * y;
                        l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1)
                    }
                    return l * this.a.v
                },
                getValue: function(t) {
                    this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                        i = this.o.v / e,
                        r = this.s.v / e + i,
                        n = this.e.v / e + i;
                    if (r > n) {
                        var s = r;
                        r = n, n = s
                    }
                    this.finalS = r, this.finalE = n
                }
            }, extendPrototype([DynamicPropertyContainer], r), {
                getTextSelectorProp: function(t, e, i) {
                    return new r(t, e, i)
                }
            }
        }();

        function TextAnimatorDataProperty(t, e, i) {
            var r = {
                    propType: !1
                },
                n = PropertyFactory.getProp,
                s = e.a;
            this.a = {
                r: s.r ? n(t, s.r, 0, degToRads, i) : r,
                rx: s.rx ? n(t, s.rx, 0, degToRads, i) : r,
                ry: s.ry ? n(t, s.ry, 0, degToRads, i) : r,
                sk: s.sk ? n(t, s.sk, 0, degToRads, i) : r,
                sa: s.sa ? n(t, s.sa, 0, degToRads, i) : r,
                s: s.s ? n(t, s.s, 1, .01, i) : r,
                a: s.a ? n(t, s.a, 1, 0, i) : r,
                o: s.o ? n(t, s.o, 0, .01, i) : r,
                p: s.p ? n(t, s.p, 1, 0, i) : r,
                sw: s.sw ? n(t, s.sw, 0, 0, i) : r,
                sc: s.sc ? n(t, s.sc, 1, 0, i) : r,
                fc: s.fc ? n(t, s.fc, 1, 0, i) : r,
                fh: s.fh ? n(t, s.fh, 0, 0, i) : r,
                fs: s.fs ? n(t, s.fs, 0, .01, i) : r,
                fb: s.fb ? n(t, s.fb, 0, .01, i) : r,
                t: s.t ? n(t, s.t, 0, 0, i) : r
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, i) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e, i = this._textData.a.length,
                r = PropertyFactory.getProp;
            for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: r(this._elem, this._textData.p.a, 0, 0, this),
                f: r(this._elem, this._textData.p.f, 0, 0, this),
                l: r(this._elem, this._textData.p.l, 0, 0, this),
                r: r(this._elem, this._textData.p.r, 0, 0, this),
                p: r(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = !1;
                var i, r, n, s, a, o, h, l, c, p, u, f, d, m, y, g, v, b, _, w = this._moreOptions.alignment.v,
                    S = this._animatorsData,
                    E = this._textData,
                    x = this.mHelper,
                    P = this._renderType,
                    T = this.renderedLetters.length,
                    A = t.l;
                if (this._hasMaskedPath) {
                    if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var M, C = _.v;
                        for (this._pathData.r.v && (C = C.reverse()), a = {
                                tLength: 0,
                                segments: []
                            }, s = C._length - 1, g = 0, n = 0; n < s; n += 1) M = bez.buildBezierData(C.v[n], C.v[n + 1], [C.o[n][0] - C.v[n][0], C.o[n][1] - C.v[n][1]], [C.i[n + 1][0] - C.v[n + 1][0], C.i[n + 1][1] - C.v[n + 1][1]]), a.tLength += M.segmentLength, a.segments.push(M), g += M.segmentLength;
                        n = s, _.v.c && (M = bez.buildBezierData(C.v[n], C.v[0], [C.o[n][0] - C.v[n][0], C.o[n][1] - C.v[n][1]], [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]), a.tLength += M.segmentLength, a.segments.push(M), g += M.segmentLength), this._pathData.pi = a
                    }
                    if (a = this._pathData.pi, o = this._pathData.f.v, u = 0, p = 1, l = 0, c = !0, m = a.segments, o < 0 && _.v.c)
                        for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), p = (d = m[u = m.length - 1].points).length - 1; o < 0;) o += d[p].partialLength, (p -= 1) < 0 && (p = (d = m[u -= 1].points).length - 1);
                    f = (d = m[u].points)[p - 1], y = (h = d[p]).partialLength
                }
                s = A.length, i = 0, r = 0;
                var k, D, F, I, O, R = 1.2 * t.finalSize * .714,
                    L = !0;
                F = S.length;
                var B, V, z, N, j, G, H, q, W, Y, X, U, $ = -1,
                    K = o,
                    Z = u,
                    J = p,
                    Q = -1,
                    tt = "",
                    et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                    var it = 0,
                        rt = 0,
                        nt = 2 === t.j ? -.5 : -1,
                        st = 0,
                        at = !0;
                    for (n = 0; n < s; n += 1)
                        if (A[n].n) {
                            for (it && (it += rt); st < n;) A[st].animatorJustifyOffset = it, st += 1;
                            it = 0, at = !0
                        } else {
                            for (D = 0; D < F; D += 1)(k = S[D].a).t.propType && (at && 2 === t.j && (rt += k.t.v * nt), (O = S[D].s.getMult(A[n].anIndexes[D], E.a[D].s.totalChars)).length ? it += k.t.v * O[0] * nt : it += k.t.v * O * nt);
                            at = !1
                        }
                    for (it && (it += rt); st < n;) A[st].animatorJustifyOffset = it, st += 1
                }
                for (n = 0; n < s; n += 1) {
                    if (x.reset(), N = 1, A[n].n) i = 0, r += t.yOffset, r += L ? 1 : 0, o = K, L = !1, this._hasMaskedPath && (p = J, f = (d = m[u = Z].points)[p - 1], y = (h = d[p]).partialLength, l = 0), tt = "", X = "", W = "", U = "", et = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q !== A[n].line) {
                                switch (t.j) {
                                    case 1:
                                        o += g - t.lineWidths[A[n].line];
                                        break;
                                    case 2:
                                        o += (g - t.lineWidths[A[n].line]) / 2
                                }
                                Q = A[n].line
                            }
                            $ !== A[n].ind && (A[$] && (o += A[$].extra), o += A[n].an / 2, $ = A[n].ind), o += w[0] * A[n].an * .005;
                            var ot = 0;
                            for (D = 0; D < F; D += 1)(k = S[D].a).p.propType && ((O = S[D].s.getMult(A[n].anIndexes[D], E.a[D].s.totalChars)).length ? ot += k.p.v[0] * O[0] : ot += k.p.v[0] * O), k.a.propType && ((O = S[D].s.getMult(A[n].anIndexes[D], E.a[D].s.totalChars)).length ? ot += k.a.v[0] * O[0] : ot += k.a.v[0] * O);
                            for (c = !0, this._pathData.a.v && (o = .5 * A[0].an + (g - this._pathData.f.v - .5 * A[0].an - .5 * A[A.length - 1].an) * $ / (s - 1), o += this._pathData.f.v); c;) l + y >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, V = f.point[0] + (h.point[0] - f.point[0]) * v, z = f.point[1] + (h.point[1] - f.point[1]) * v, x.translate(-w[0] * A[n].an * .005, -w[1] * R * .01), c = !1) : d && (l += h.partialLength, (p += 1) >= d.length && (p = 0, m[u += 1] ? d = m[u].points : _.v.c ? (p = 0, d = m[u = 0].points) : (l -= h.partialLength, d = null)), d && (f = h, y = (h = d[p]).partialLength));
                            B = A[n].an / 2 - A[n].add, x.translate(-B, 0, 0)
                        } else B = A[n].an / 2 - A[n].add, x.translate(-B, 0, 0), x.translate(-w[0] * A[n].an * .005, -w[1] * R * .01, 0);
                        for (D = 0; D < F; D += 1)(k = S[D].a).t.propType && (O = S[D].s.getMult(A[n].anIndexes[D], E.a[D].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? O.length ? o += k.t.v * O[0] : o += k.t.v * O : O.length ? i += k.t.v * O[0] : i += k.t.v * O));
                        for (t.strokeWidthAnim && (G = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < F; D += 1)(k = S[D].a).a.propType && ((O = S[D].s.getMult(A[n].anIndexes[D], E.a[D].s.totalChars)).length ? x.translate(-k.a.v[0] * O[0], -k.a.v[1] * O[1], k.a.v[2] * O[2]) : x.translate(-k.a.v[0] * O, -k.a.v[1] * O, k.a.v[2] * O));
                        for (D = 0; D < F; D += 1)(k = S[D].a).s.propType && ((O = S[D].s.getMult(A[n].anIndexes[D], E.a[D].s.totalChars)).length ? x.scale(1 + (k.s.v[0] - 1) * O[0], 1 + (k.s.v[1] - 1) * O[1], 1) : x.scale(1 + (k.s.v[0] - 1) * O, 1 + (k.s.v[1] - 1) * O, 1));
                        for (D = 0; D < F; D += 1) {
                            if (k = S[D].a, O = S[D].s.getMult(A[n].anIndexes[D], E.a[D].s.totalChars), k.sk.propType && (O.length ? x.skewFromAxis(-k.sk.v * O[0], k.sa.v * O[1]) : x.skewFromAxis(-k.sk.v * O, k.sa.v * O)), k.r.propType && (O.length ? x.rotateZ(-k.r.v * O[2]) : x.rotateZ(-k.r.v * O)), k.ry.propType && (O.length ? x.rotateY(k.ry.v * O[1]) : x.rotateY(k.ry.v * O)), k.rx.propType && (O.length ? x.rotateX(k.rx.v * O[0]) : x.rotateX(k.rx.v * O)), k.o.propType && (O.length ? N += (k.o.v * O[0] - N) * O[0] : N += (k.o.v * O - N) * O), t.strokeWidthAnim && k.sw.propType && (O.length ? G += k.sw.v * O[0] : G += k.sw.v * O), t.strokeColorAnim && k.sc.propType)
                                for (q = 0; q < 3; q += 1) O.length ? j[q] += (k.sc.v[q] - j[q]) * O[0] : j[q] += (k.sc.v[q] - j[q]) * O;
                            if (t.fillColorAnim && t.fc) {
                                if (k.fc.propType)
                                    for (q = 0; q < 3; q += 1) O.length ? H[q] += (k.fc.v[q] - H[q]) * O[0] : H[q] += (k.fc.v[q] - H[q]) * O;
                                k.fh.propType && (H = O.length ? addHueToRGB(H, k.fh.v * O[0]) : addHueToRGB(H, k.fh.v * O)), k.fs.propType && (H = O.length ? addSaturationToRGB(H, k.fs.v * O[0]) : addSaturationToRGB(H, k.fs.v * O)), k.fb.propType && (H = O.length ? addBrightnessToRGB(H, k.fb.v * O[0]) : addBrightnessToRGB(H, k.fb.v * O))
                            }
                        }
                        for (D = 0; D < F; D += 1)(k = S[D].a).p.propType && (O = S[D].s.getMult(A[n].anIndexes[D], E.a[D].s.totalChars), this._hasMaskedPath ? O.length ? x.translate(0, k.p.v[1] * O[0], -k.p.v[2] * O[1]) : x.translate(0, k.p.v[1] * O, -k.p.v[2] * O) : O.length ? x.translate(k.p.v[0] * O[0], k.p.v[1] * O[1], -k.p.v[2] * O[2]) : x.translate(k.p.v[0] * O, k.p.v[1] * O, -k.p.v[2] * O));
                        if (t.strokeWidthAnim && (W = G < 0 ? 0 : G), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                            if (x.translate(0, -t.ls), x.translate(0, w[1] * R * .01 + r, 0), this._pathData.p.v) {
                                b = (h.point[1] - f.point[1]) / (h.point[0] - f.point[0]);
                                var ht = 180 * Math.atan(b) / Math.PI;
                                h.point[0] < f.point[0] && (ht += 180), x.rotate(-ht * Math.PI / 180)
                            }
                            x.translate(V, z, 0), o -= w[0] * A[n].an * .005, A[n + 1] && $ !== A[n + 1].ind && (o += A[n].an / 2, o += .001 * t.tr * t.finalSize)
                        } else {
                            switch (x.translate(i, r, 0), t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    x.translate(A[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[n].line]), 0, 0);
                                    break;
                                case 2:
                                    x.translate(A[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[n].line]) / 2, 0, 0)
                            }
                            x.translate(0, -t.ls), x.translate(B, 0, 0), x.translate(w[0] * A[n].an * .005, w[1] * R * .01, 0), i += A[n].l + .001 * t.tr * t.finalSize
                        }
                        "html" === P ? tt = x.toCSS() : "svg" === P ? tt = x.to2dCSS() : et = [x.props[0], x.props[1], x.props[2], x.props[3], x.props[4], x.props[5], x.props[6], x.props[7], x.props[8], x.props[9], x.props[10], x.props[11], x.props[12], x.props[13], x.props[14], x.props[15]], U = N
                    }
                    T <= n ? (I = new LetterProps(U, W, Y, X, tt, et), this.renderedLetters.push(I), T += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[n], this.lettersChangedFlag = I.update(U, W, Y, X, tt, et) || this.lettersChangedFlag)
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, i) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        }, ITextElement.prototype.createPathShape = function(t, e) {
            var i, r, n = e.length,
                s = "";
            for (i = 0; i < n; i += 1) "sh" === e[i].ty && (r = e[i].ks.k, s += buildShapeString(r, r.i.length, !0, t));
            return s
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, n) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
            }
            e.translate(r, n, 0)
        }, ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {};
        var emptyShapeData = {
            shapes: []
        };

        function SVGTextLottieElement(t, e, i) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
        }

        function ISolidElement(t, e, i) {
            this.initElement(t, e, i)
        }

        function NullElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(t, e, i) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var i = "";
            if (e && e.title) {
                var r = createNS("title"),
                    n = createElementID();
                r.setAttribute("id", n), r.textContent = e.title, this.svgElement.appendChild(r), i += n
            }
            if (e && e.description) {
                var s = createNS("desc"),
                    a = createElementID();
                s.setAttribute("id", a), s.textContent = e.description, this.svgElement.appendChild(s), i += " " + a
            }
            i && this.svgElement.setAttribute("aria-labelledby", i);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var h = createNS("g");
            this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: o,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function CVContextData() {
            var t;
            this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
            for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
            this._length = 15
        }

        function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }

        function CVEffects() {}

        function CVMaskElement(t, e) {
            var i;
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var r = this.masksProperties.length,
                n = !1;
            for (i = 0; i < r; i += 1) "n" !== this.masksProperties[i].mode && (n = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
            this.hasMasks = n, n && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}

        function CVShapeData(t, e, i, r) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var n, s = 4;
            "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
            var a, o = i.length;
            for (n = 0; n < o; n += 1) i[n].closed || (a = {
                transforms: r.addTransformSequence(i[n].transforms),
                trNodes: []
            }, this.styledShapes.push(a), i[n].elements.push(a))
        }

        function CVShapeElement(t, e, i) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
        }

        function CVTextElement(t, e, i) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(t, e, i)
        }

        function CVImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
        }

        function CVSolidElement(t, e, i) {
            this.initElement(t, e, i)
        }

        function CanvasRendererBase(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || ""
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }

        function CVCompElement(t, e, i) {
            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || ""
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }

        function HBaseElement() {}

        function HSolidElement(t, e, i) {
            this.initElement(t, e, i)
        }

        function HShapeElement(t, e, i) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }

        function HTextElement(t, e, i) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
        }

        function HCameraElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
            var r = PropertyFactory.getProp;
            if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var n, s = t.ks.or.k.length;
                for (n = 0; n < s; n += 1) t.ks.or.k[n].to = null, t.ks.or.k[n].ti = null
            }
            this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            }
        }

        function HImageElement(t, e, i) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
        }

        function HybridRendererBase(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(t, e, i) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function HybridRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
            for (var e = 0, i = t.length, r = [], n = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(n), n = "") : n += t[e], e += 1;
            return r.push(n), r
        }, SVGTextLottieElement.prototype.buildNewText = function() {
            var t, e;
            this.addDynamicProperty(this);
            var i = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
            var r = this.globalData.fontManager.getFontByName(i.f);
            if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
            else {
                this.layerElement.setAttribute("font-family", r.fFamily);
                var n = i.fWeight,
                    s = i.fStyle;
                this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", n)
            }
            this.layerElement.setAttribute("aria-label", i.t);
            var a, o = i.l || [],
                h = !!this.globalData.fontManager.chars;
            e = o.length;
            var l = this.mHelper,
                c = this.data.singleShape,
                p = 0,
                u = 0,
                f = !0,
                d = .001 * i.tr * i.finalSize;
            if (!c || h || i.sz) {
                var m, y = this.textSpans.length;
                for (t = 0; t < e; t += 1) {
                    if (this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            childSpan: null,
                            glyph: null
                        }), !h || !c || 0 === t) {
                        if (a = y > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), y <= t) {
                            if (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = a, h) {
                                var g = createNS("g");
                                a.appendChild(g), this.textSpans[t].childSpan = g
                            }
                            this.textSpans[t].span = a, this.layerElement.appendChild(a)
                        }
                        a.style.display = "inherit"
                    }
                    if (l.reset(), l.scale(i.finalSize / 100, i.finalSize / 100), c && (o[t].n && (p = -d, u += i.yOffset, u += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(i, l, o[t].line, p, u), p += o[t].l || 0, p += d), h) {
                        var v;
                        if (1 === (m = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) v = new SVGCompElement(m.data, this.globalData, this);
                        else {
                            var b = emptyShapeData;
                            m.data && m.data.shapes && (b = m.data), v = new SVGShapeElement(b, this.globalData, this)
                        }
                        this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                    } else c && a.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                }
                c && a && a.setAttribute("d", "")
            } else {
                var _ = this.textContainer,
                    w = "start";
                switch (i.j) {
                    case 1:
                        w = "end";
                        break;
                    case 2:
                        w = "middle";
                        break;
                    default:
                        w = "start"
                }
                _.setAttribute("text-anchor", w), _.setAttribute("letter-spacing", d);
                var S = this.buildTextContents(i.finalText);
                for (e = S.length, u = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t].span || createNS("tspan")).textContent = S[t], a.setAttribute("x", 0), a.setAttribute("y", u), a.style.display = "inherit", _.appendChild(a), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = a, u += i.finalLineHeight;
                this.layerElement.appendChild(_)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
            this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                }
            }
            return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
            var t, e, i = this.textSpans.length;
            for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var t, e;
                this._sizeChanged = !0;
                var i, r, n, s = this.textAnimator.renderedLetters,
                    a = this.textProperty.currentData.l;
                for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = s[t], r = this.textSpans[t].span, (n = this.textSpans[t].glyph) && n.renderFrame(), i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
            }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, NullElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
            return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
            return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(t) {
            return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(t) {
            return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(t) {
            return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(t) {
            return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var i = createNS("clipPath"),
                r = createNS("rect");
            r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
            var n = createElementID();
            i.setAttribute("id", n), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                e[t] = !0;
                var i = this.createItem(this.layers[t]);
                e[t] = i, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)))
            }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt)
                    for (var e = 0, i = this.elements.length; e < i;) {
                        if (this.elements[e] === t) {
                            t.setMatte(this.elements[e - 1].layerId);
                            break
                        }
                        e += 1
                    }
            }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
            if (this.renderedFrame !== t && !this.destroyed) {
                var e;
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                    for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
            var i = t.getBaseElement();
            if (i) {
                for (var r, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (r = this.elements[n].getBaseElement()), n += 1;
                r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
            }
        }, SVGRendererBase.prototype.hide = function() {
            this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
            this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                }
                var i, r = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
            this.elements = t
        }, ICompElement.prototype.getElements = function() {
            return this.elements
        }, ICompElement.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this)
        }, CVContextData.prototype.duplicate = function() {
            var t = 2 * this._length,
                e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
            var i = 0;
            for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
            this._length = t
        }, CVContextData.prototype.reset = function() {
            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
        }, ShapeTransformManager.prototype = {
            addTransformSequence: function(t) {
                var e, i = t.length,
                    r = "_";
                for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
                var n = this.sequences[r];
                return n || (n = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[r] = n, this.sequenceList.push(n)), n
            },
            processSequence: function(t, e) {
                for (var i, r = 0, n = t.transforms.length, s = e; r < n && !e;) {
                    if (t.transforms[r].transform.mProps._mdf) {
                        s = !0;
                        break
                    }
                    r += 1
                }
                if (s)
                    for (t.finalTransform.reset(), r = n - 1; r >= 0; r -= 1) i = t.transforms[r].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                t._mdf = s
            },
            processSequences: function(t) {
                var e, i = this.sequenceList.length;
                for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
            },
            getNewKey: function() {
                return this.transform_key_count += 1, "_" + this.transform_key_count
            }
        }, CVEffects.prototype.renderFrame = function() {}, CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t, e, i, r, n = this.element.finalTransform.mat,
                    s = this.element.canvasContext,
                    a = this.masksProperties.length;
                for (s.beginPath(), t = 0; t < a; t += 1)
                    if ("n" !== this.masksProperties[t].mode) {
                        var o;
                        this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), r = this.viewData[t].v, e = n.applyToPointArray(r.v[0][0], r.v[0][1], 0), s.moveTo(e[0], e[1]);
                        var h = r._length;
                        for (o = 1; o < h; o += 1) i = n.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                        i = n.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                    }
                this.element.globalData.renderer.save(!0), s.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
            this.element = null
        }, CVBaseElement.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() {
                this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
            },
            createContent: function() {},
            setBlendMode: function() {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data, this)
            },
            hideElement: function() {
                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
            },
            renderFrame: function() {
                if (!this.hidden && !this.data.hd) {
                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function() {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
            },
            mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
            var i = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd
                },
                r = {};
            if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
                    k: 0
                }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
                    k: 0
                }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
                    var n = new DashProperty(this, t.d, "canvas", this);
                    r.d = n, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
                }
            } else i.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(i), r.style = i, r
        }, CVShapeElement.prototype.createGroupElement = function() {
            return {
                it: [],
                prevViewData: []
            }
        }, CVShapeElement.prototype.createTransformElement = function(t) {
            return {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            }
        }, CVShapeElement.prototype.createShapeElement = function(t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
            var e, i = this.stylesList.length;
            for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, n) {
            var s, a, o, h, l, c, p = t.length - 1,
                u = [],
                f = [],
                d = [].concat(n);
            for (s = p; s >= 0; s -= 1) {
                if ((h = this.searchProcessedElement(t[s])) ? e[s] = i[h - 1] : t[s]._shouldRender = r, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) h ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], d), u.push(e[s].style);
                else if ("gr" === t[s].ty) {
                    if (h)
                        for (o = e[s].it.length, a = 0; a < o; a += 1) e[s].prevViewData[a] = e[s].it[a];
                    else e[s] = this.createGroupElement(t[s]);
                    this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, r, d)
                } else "tr" === t[s].ty ? (h || (c = this.createTransformElement(t[s]), e[s] = c), d.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? h || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty ? (h ? (l = e[s]).closed = !1 : ((l = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = l, this.shapeModifiers.push(l)), f.push(l)) : "rp" === t[s].ty && (h ? (l = e[s]).closed = !0 : (l = ShapeModifiers.getModifier(t[s].ty), e[s] = l, l.init(this, t, s, e), this.shapeModifiers.push(l), r = !1), f.push(l));
                this.addProcessedElement(t[s], s + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(u), p = f.length, s = 0; s < p; s += 1) f[s].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
            var t, e, i, r, n, s, a, o, h, l = this.stylesList.length,
                c = this.globalData.renderer,
                p = this.globalData.canvasContext;
            for (t = 0; t < l; t += 1)
                if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                    for (c.save(), s = h.elements, "st" === o || "gs" === o ? (p.strokeStyle = "st" === o ? h.co : h.grd, p.lineWidth = h.wi, p.lineCap = h.lc, p.lineJoin = h.lj, p.miterLimit = h.ml || 0) : p.fillStyle = "fl" === o ? h.co : h.grd, c.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && p.beginPath(), c.ctxTransform(h.preTransforms.finalTransform.props), i = s.length, e = 0; e < i; e += 1) {
                        for ("st" !== o && "gs" !== o || (p.beginPath(), h.da && (p.setLineDash(h.da), p.lineDashOffset = h.do)), n = (a = s[e].trNodes).length, r = 0; r < n; r += 1) "m" === a[r].t ? p.moveTo(a[r].p[0], a[r].p[1]) : "c" === a[r].t ? p.bezierCurveTo(a[r].pts[0], a[r].pts[1], a[r].pts[2], a[r].pts[3], a[r].pts[4], a[r].pts[5]) : p.closePath();
                        "st" !== o && "gs" !== o || (p.stroke(), h.da && p.setLineDash(this.dashResetter))
                    }
                    "st" !== o && "gs" !== o && p.fill(h.r), c.restore()
                }
        }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
            var n, s;
            for (s = t, n = e.length - 1; n >= 0; n -= 1) "tr" === e[n].ty ? (s = i[n].transform, this.renderShapeTransform(t, s)) : "sh" === e[n].ty || "el" === e[n].ty || "rc" === e[n].ty || "sr" === e[n].ty ? this.renderPath(e[n], i[n]) : "fl" === e[n].ty ? this.renderFill(e[n], i[n], s) : "st" === e[n].ty ? this.renderStroke(e[n], i[n], s) : "gf" === e[n].ty || "gs" === e[n].ty ? this.renderGradientFill(e[n], i[n], s) : "gr" === e[n].ty ? this.renderShape(s, e[n].it, i[n].it) : e[n].ty;
            r && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var i, r, n, s = t.trNodes,
                    a = e.paths,
                    o = a._length;
                s.length = 0;
                var h = t.transforms.finalTransform;
                for (n = 0; n < o; n += 1) {
                    var l = a.shapes[n];
                    if (l && l.v) {
                        for (r = l._length, i = 1; i < r; i += 1) 1 === i && s.push({
                            t: "m",
                            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                        }), s.push({
                            t: "c",
                            pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                        });
                        1 === r && s.push({
                            t: "m",
                            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                        }), l.c && r && (s.push({
                            t: "c",
                            pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                        }), s.push({
                            t: "z"
                        }))
                    }
                }
                t.trNodes = s
            }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
            if (!0 !== t.hd && t._shouldRender) {
                var i, r = e.styledShapes.length;
                for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
            }
        }, CVShapeElement.prototype.renderFill = function(t, e, i) {
            var r = e.style;
            (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
            var r, n = e.style;
            if (!n.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                var s, a = this.globalData.canvasContext,
                    o = e.s.v,
                    h = e.e.v;
                if (1 === t.t) r = a.createLinearGradient(o[0], o[1], h[0], h[1]);
                else {
                    var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
                        c = Math.atan2(h[1] - o[1], h[0] - o[0]),
                        p = e.h.v;
                    p >= 1 ? p = .99 : p <= -1 && (p = -.99);
                    var u = l * p,
                        f = Math.cos(c + e.a.v) * u + o[0],
                        d = Math.sin(c + e.a.v) * u + o[1];
                    r = a.createRadialGradient(f, d, 0, o[0], o[1], l)
                }
                var m = t.g.p,
                    y = e.g.c,
                    g = 1;
                for (s = 0; s < m; s += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * s + 1]), r.addColorStop(y[4 * s] / 100, "rgba(" + y[4 * s + 1] + "," + y[4 * s + 2] + "," + y[4 * s + 3] + "," + g + ")");
                n.grd = r
            }
            n.coOp = e.o.v * i.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
            var r = e.style,
                n = e.d;
            n && (n._mdf || this._isFirstFrame) && (r.da = n.dashArray, r.do = n.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var i = !1;
            t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var r, n, s, a, o, h, l, c, p, u, f, d, m = this.globalData.fontManager.getFontByName(t.f),
                y = t.l,
                g = this.mHelper;
            this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
            var v = this.data.singleShape,
                b = .001 * t.tr * t.finalSize,
                _ = 0,
                w = 0,
                S = !0,
                E = 0;
            for (r = 0; r < n; r += 1) {
                a = (s = this.globalData.fontManager.getCharData(t.finalText[r], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, g.reset(), v && y[r].n && (_ = -b, w += t.yOffset, w += S ? 1 : 0, S = !1), p = (l = a.shapes ? a.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[r].line, _, w), f = createSizedArray(p - 1);
                var x = 0;
                for (c = 0; c < p; c += 1)
                    if ("sh" === l[c].ty) {
                        for (h = l[c].ks.k.i.length, u = l[c].ks.k, d = [], o = 1; o < h; o += 1) 1 === o && d.push(g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), d.push(g.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToX(u.i[o][0], u.i[o][1], 0), g.applyToY(u.i[o][0], u.i[o][1], 0), g.applyToX(u.v[o][0], u.v[o][1], 0), g.applyToY(u.v[o][0], u.v[o][1], 0));
                        d.push(g.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToX(u.i[0][0], u.i[0][1], 0), g.applyToY(u.i[0][0], u.i[0][1], 0), g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), f[x] = d, x += 1
                    }
                v && (_ += y[r].l, _ += b), this.textSpans[E] ? this.textSpans[E].elem = f : this.textSpans[E] = {
                    elem: f
                }, E += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function() {
            var t, e, i, r, n, s, a = this.canvasContext;
            a.font = this.values.fValue, a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var o, h = this.textAnimator.renderedLetters,
                l = this.textProperty.currentData.l;
            e = l.length;
            var c, p, u = null,
                f = null,
                d = null;
            for (t = 0; t < e; t += 1)
                if (!l[t].n) {
                    if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                        for (o && o.fc ? u !== o.fc && (u = o.fc, a.fillStyle = o.fc) : u !== this.values.fill && (u = this.values.fill, a.fillStyle = this.values.fill), r = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                            for (s = (p = c[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(p[n], p[n + 1], p[n + 2], p[n + 3], p[n + 4], p[n + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (o && o.sw ? d !== o.sw && (d = o.sw, a.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, a.lineWidth = this.values.sWidth), o && o.sc ? f !== o.sc && (f = o.sc, a.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke, a.strokeStyle = this.values.stroke), r = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                            for (s = (p = c[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(p[n], p[n + 1], p[n + 2], p[n + 3], p[n + 4], p[n + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    o && this.globalData.renderer.restore()
                }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e, i, r = t.getContext("2d"),
                    n = this.img.width,
                    s = this.img.height,
                    a = n / s,
                    o = this.assetData.w / this.assetData.h,
                    h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                a > o && "xMidYMid slice" === h || a < o && "xMidYMid slice" !== h ? e = (i = s) * o : i = (e = n) / o, r.drawImage(this.img, (n - e) / 2, (s - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
            }
        }, CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
            this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
            return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(t) {
            return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(t) {
            return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(t) {
            return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.contextData.cTr.props;
                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                    var i = this.contextData.cTr.props;
                    this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
        }, CanvasRendererBase.prototype.reset = function() {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e, i = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                var r = this.contextData.saved[this.contextData.cArrPos];
                for (e = 0; e < 16; e += 1) r[e] = i[e];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
            } else this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                var e, i = this.contextData.saved[this.contextData.cArrPos],
                    r = this.contextData.cTr.props;
                for (e = 0; e < 16; e += 1) r[e] = i[e];
                this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
            } else this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%";
                var i = "0px 0px 0px";
                e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else this.canvasContext = this.renderConfig.context;
            this.data = t, this.layers = t.layers, this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function() {
            var t, e, i, r;
            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var n = this.renderConfig.preserveAspectRatio.split(" "),
                    s = n[1] || "meet",
                    a = n[0] || "xMidYMid",
                    o = a.substr(0, 4),
                    h = a.substr(4);
                i = t / e, (r = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === s || r < i && "slice" === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < i && "meet" === s || r > i && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < i && "meet" === s || r > i && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r > i && "meet" === s || r < i && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r > i && "meet" === s || r < i && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
            } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
            var t;
            for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                var i;
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), i = 0; i < r; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                if (this.globalData._mdf) {
                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore()
                }
            }
        }, CanvasRendererBase.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                var i = this.createItem(this.layers[t], this, this.globalData);
                e[t] = i, i.initExpressions()
            }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, CanvasRendererBase.prototype.hide = function() {
            this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
            this.animationItem.container.style.display = "block"
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
            var t, e = this.canvasContext;
            for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this)
        }, HBaseElement.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                var t = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var e = this.finalTransform.mat.toCSS();
                    t.transform = e, t.webkitTransform = e
                }
                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function() {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData)
            },
            addEffects: function() {},
            setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
            var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
            var i, r, n, s, a, o = t.sh.v,
                h = t.transformers,
                l = o._length;
            if (!(l <= 1)) {
                for (i = 0; i < l - 1; i += 1) r = this.getTransformedPoint(h, o.v[i]), n = this.getTransformedPoint(h, o.o[i]), s = this.getTransformedPoint(h, o.i[i + 1]), a = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, n, s, a, e);
                o.c && (r = this.getTransformedPoint(h, o.v[i]), n = this.getTransformedPoint(h, o.o[i]), s = this.getTransformedPoint(h, o.i[0]), a = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, n, s, a, e))
            }
        }, HShapeElement.prototype.checkBounds = function(t, e, i, r, n) {
            this.getBoundsOfCurve(t, e, i, r);
            var s = this.shapeBoundingBox;
            n.x = bmMin(s.left, n.x), n.xMax = bmMax(s.right, n.xMax), n.y = bmMin(s.top, n.y), n.yMax = bmMax(s.bottom, n.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
            for (var n, s, a, o, h, l, c, p = [
                    [t[0], r[0]],
                    [t[1], r[1]]
                ], u = 0; u < 2; ++u) s = 6 * t[u] - 12 * e[u] + 6 * i[u], n = -3 * t[u] + 9 * e[u] - 9 * i[u] + 3 * r[u], a = 3 * e[u] - 3 * t[u], s |= 0, a |= 0, 0 === (n |= 0) && 0 === s || (0 === n ? (o = -a / s) > 0 && o < 1 && p[u].push(this.calculateF(o, t, e, i, r, u)) : (h = s * s - 4 * a * n) >= 0 && ((l = (-s + bmSqrt(h)) / (2 * n)) > 0 && l < 1 && p[u].push(this.calculateF(l, t, e, i, r, u)), (c = (-s - bmSqrt(h)) / (2 * n)) > 0 && c < 1 && p[u].push(this.calculateF(c, t, e, i, r, u))));
            this.shapeBoundingBox.left = bmMin.apply(null, p[0]), this.shapeBoundingBox.top = bmMin.apply(null, p[1]), this.shapeBoundingBox.right = bmMax.apply(null, p[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, p[1])
        }, HShapeElement.prototype.calculateF = function(t, e, i, r, n, s) {
            return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * i[s] + 3 * (1 - t) * bmPow(t, 2) * r[s] + bmPow(t, 3) * n[s]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e)
        }, HShapeElement.prototype.currentBoxContains = function(t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox,
                    e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var i = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var r = this.shapeCont.style,
                        n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    r.transform = n, r.webkitTransform = n
                }
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style,
                i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var r, n, s = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
                else {
                    e.fontFamily = s.fFamily;
                    var a = t.fWeight,
                        o = t.fStyle;
                    e.fontStyle = o, e.fontWeight = a
                }
            var h, l, c, p = t.l;
            n = p.length;
            var u, f = this.mHelper,
                d = "",
                m = 0;
            for (r = 0; r < n; r += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[m] ? h = this.textPaths[m] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? c = (l = this.textSpans[m]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (c = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (l = this.textSpans[m], h = this.textPaths[m]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                    var y, g = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                    if (y = g ? g.data : null, f.reset(), y && y.shapes && y.shapes.length && (u = y.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, u), h.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(h);
                    else {
                        if (this.innerElem.appendChild(l), y && y.shapes) {
                            document.body.appendChild(c);
                            var v = c.getBBox();
                            c.setAttribute("width", v.width + 2), c.setAttribute("height", v.height + 2), c.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                            var b = c.style,
                                _ = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                            b.transform = _, b.webkitTransform = _, p[r].yOffset = v.y - 1
                        } else c.setAttribute("width", 1), c.setAttribute("height", 1);
                        l.appendChild(c)
                    }
                } else if (h.textContent = p[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
                else {
                    this.innerElem.appendChild(l);
                    var w = h.style,
                        S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    w.transform = S, w.webkitTransform = S
                }
                this.isMasked ? this.textSpans[m] = h : this.textSpans[m] = l, this.textSpans[m].style.display = "block", this.textPaths[m] = h, m += 1
            }
            for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
            var t;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e, t.webkitTransform = e
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var i, r, n, s, a, o = 0,
                    h = this.textAnimator.renderedLetters,
                    l = this.textProperty.currentData.l;
                for (r = l.length, i = 0; i < r; i += 1) l[i].n ? o += 1 : (s = this.textSpans[i], a = this.textPaths[i], n = h[o], o += 1, n._mdf.m && (this.isMasked ? s.setAttribute("transform", n.m) : (s.style.webkitTransform = n.m, s.style.transform = n.m)), s.style.opacity = n.o, n.sw && n._mdf.sw && a.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && a.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (a.setAttribute("fill", n.fc), a.style.color = n.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var c = this.innerElem.getBBox();
                    this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.svgElement.setAttribute("width", c.width)), this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.svgElement.setAttribute("height", c.height));
                    if (this.currentBBox.w !== c.width + 2 || this.currentBBox.h !== c.height + 2 || this.currentBBox.x !== c.x - 1 || this.currentBBox.y !== c.y - 1) {
                        this.currentBBox.w = c.width + 2, this.currentBBox.h = c.height + 2, this.currentBBox.x = c.x - 1, this.currentBBox.y = c.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                        var p = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = p, t.webkitTransform = p
                    }
                }
            }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
            var t, e, i, r, n = this.comp.threeDElements.length;
            for (t = 0; t < n; t += 1)
                if ("3d" === (e = this.comp.threeDElements[t]).type) {
                    i = e.perspectiveElem.style, r = e.container.style;
                    var s = this.pe.v + "px",
                        a = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    i.perspective = s, i.webkitPerspective = s, r.transformOrigin = "0px 0px 0px", r.mozTransformOrigin = "0px 0px 0px", r.webkitTransformOrigin = "0px 0px 0px", i.transform = a, i.webkitTransform = a
                }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
            var t, e, i = this._isFirstFrame;
            if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
            if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy)
                    for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                        var r = this.hierarchy[t].finalTransform.mProp;
                        this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var n;
                    n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var s = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                        a = [n[0] / s, n[1] / s, n[2] / s],
                        o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                        h = Math.atan2(a[1], o),
                        l = Math.atan2(a[0], -a[2]);
                    this.mat.rotateY(l).rotateX(-h)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var c = !this._prevMat.equals(this.mat);
                if ((c || this.pe._mdf) && this.comp.threeDElements) {
                    var p, u, f;
                    for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                        if ("3d" === (p = this.comp.threeDElements[t]).type) {
                            if (c) {
                                var d = this.mat.toCSS();
                                (f = p.container.style).transform = d, f.webkitTransform = d
                            }
                            this.pe._mdf && ((u = p.perspectiveElem.style).perspective = this.pe.v + "px", u.webkitPerspective = this.pe.v + "px")
                        }
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
            return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
            var i = t.getBaseElement();
            if (i) {
                var r = this.layers[e];
                if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
                else if (this.threeDElements) this.addTo3dContainer(i, e);
                else {
                    for (var n, s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a], n = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || n), a += 1;
                    n ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, n) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
                }
            }
        }, HybridRendererBase.prototype.createShape = function(t) {
            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(t) {
            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(t) {
            return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(t) {
            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(t) {
            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
            for (var e = 0, i = this.threeDElements.length; e < i;) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1
            }
            return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
            var i, r, n = createTag("div");
            styleDiv(n);
            var s = createTag("div");
            if (styleDiv(s), "3d" === e) {
                (i = n.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                i.webkitTransformOrigin = "50% 50%", i.mozTransformOrigin = "50% 50%", i.transformOrigin = "50% 50%";
                var a = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (r = s.style).transform = a, r.webkitTransform = a
            }
            n.appendChild(s);
            var o = {
                container: s,
                perspectiveElem: n,
                startPos: t,
                endPos: t,
                type: e
            };
            return this.threeDElements.push(o), o
        }, HybridRendererBase.prototype.build3dContainers = function() {
            var t, e, i = this.layers.length,
                r = "";
            for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
            for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
            for (var i = 0, r = this.threeDElements.length; i < r;) {
                if (e <= this.threeDElements[i].endPos) {
                    for (var n, s = this.threeDElements[i].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()), s += 1;
                    n ? this.threeDElements[i].container.insertBefore(t, n) : this.threeDElements[i].container.appendChild(t);
                    break
                }
                i += 1
            }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
            var e = createTag("div"),
                i = this.animationItem.wrapper,
                r = e.style;
            r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
            var n = createNS("svg");
            n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
            var s = createNS("defs");
            n.appendChild(s), this.data = t, this.setupGlobalData(t, n), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
            var t, e, i, r, n = this.animationItem.wrapper.offsetWidth,
                s = this.animationItem.wrapper.offsetHeight,
                a = n / s;
            this.globalData.compSize.w / this.globalData.compSize.h > a ? (t = n / this.globalData.compSize.w, e = n / this.globalData.compSize.w, i = 0, r = (s - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, i = (n - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, r = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
            this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
            this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t, e = this.globalData.compSize.w,
                    i = this.globalData.compSize.h,
                    r = this.threeDElements.length;
                for (t = 0; t < r; t += 1) {
                    var n = this.threeDElements[t].perspectiveElem.style;
                    n.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", n.perspective = n.webkitPerspective
                }
            }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
            var e, i = t.length,
                r = createTag("div");
            for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                    var n = this.createComp(t[e], r, this.globalData.comp, null);
                    n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
            for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
            i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var Expressions = function() {
            var t = {};
            return t.initExpressions = function(t) {
                var e = 0,
                    i = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                    e += 1
                }, t.renderer.globalData.popExpression = function() {
                    0 == (e -= 1) && function() {
                        var t, e = i.length;
                        for (t = 0; t < e; t += 1) i[t].release();
                        i.length = 0
                    }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                    -1 === i.indexOf(t) && i.push(t)
                }
            }, t
        }();

        function _typeof$1(t) {
            "@babel/helpers - typeof";
            return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function seedRandom(t, e) {
            var i, r = this,
                n = 256,
                s = 6,
                a = "random",
                o = e.pow(n, s),
                h = e.pow(2, 52),
                l = 2 * h,
                c = n - 1;

            function p(t, e) {
                return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
            }

            function u(t, e) {
                for (var i, r = t + "", n = 0; n < r.length;) e[c & n] = c & (i ^= 19 * e[c & n]) + r.charCodeAt(n++);
                return f(e)
            }

            function f(t) {
                return String.fromCharCode.apply(0, t)
            }
            e["seed" + a] = function(d, m, y) {
                var g = [],
                    v = u(function t(e, i) {
                        var r, n = [],
                            s = _typeof$1(e);
                        if (i && "object" == s)
                            for (r in e) try {
                                n.push(t(e[r], i - 1))
                            } catch (t) {}
                        return n.length ? n : "string" == s ? e : e + "\0"
                    }((m = !0 === m ? {
                        entropy: !0
                    } : m || {}).entropy ? [d, f(t)] : null === d ? function() {
                        try {
                            if (i) return f(i.randomBytes(n));
                            var e = new Uint8Array(n);
                            return (r.crypto || r.msCrypto).getRandomValues(e), f(e)
                        } catch (e) {
                            var s = r.navigator,
                                a = s && s.plugins;
                            return [+new Date, r, a, r.screen, f(t)]
                        }
                    }() : d, 3), g),
                    b = new function(t) {
                        var e, i = t.length,
                            r = this,
                            s = 0,
                            a = r.i = r.j = 0,
                            o = r.S = [];
                        for (i || (t = [i++]); s < n;) o[s] = s++;
                        for (s = 0; s < n; s++) o[s] = o[a = c & a + t[s % i] + (e = o[s])], o[a] = e;
                        r.g = function(t) {
                            for (var e, i = 0, s = r.i, a = r.j, o = r.S; t--;) e = o[s = c & s + 1], i = i * n + o[c & (o[s] = o[a = c & a + e]) + (o[a] = e)];
                            return r.i = s, r.j = a, i
                        }
                    }(g),
                    _ = function() {
                        for (var t = b.g(s), e = o, i = 0; t < h;) t = (t + i) * n, e *= n, i = b.g(1);
                        for (; t >= l;) t /= 2, e /= 2, i >>>= 1;
                        return (t + i) / e
                    };
                return _.int32 = function() {
                    return 0 | b.g(4)
                }, _.quick = function() {
                    return b.g(4) / 4294967296
                }, _.double = _, u(f(b.S), t), (m.pass || y || function(t, i, r, n) {
                    return n && (n.S && p(n, b), t.state = function() {
                        return p(b, {})
                    }), r ? (e[a] = t, i) : t
                })(_, v, "global" in m ? m.global : this == e, m.state)
            }, u(e.random(), t)
        }

        function initialize$2(t) {
            seedRandom([], t)
        }
        var propTypes = {
            SHAPE: "shape"
        };

        function _typeof(t) {
            "@babel/helpers - typeof";
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var ExpressionManager = function() {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null,
                    frames = null;

                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array
                }

                function isNumerable(t, e) {
                    return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                }

                function $bm_neg(t) {
                    var e = _typeof(t);
                    if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var i, r = t.length,
                            n = [];
                        for (i = 0; i < r; i += 1) n[i] = -t[i];
                        return n
                    }
                    return t.propType ? t.v : -t
                }
                initialize$2(BMMath);
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(t, e) {
                    var i = _typeof(t),
                        r = _typeof(e);
                    if ("string" === i || "string" === r) return t + e;
                    if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] += e, t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] + e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                        return o
                    }
                    return 0
                }
                var add = sum;

                function sub(t, e) {
                    var i = _typeof(t),
                        r = _typeof(e);
                    if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] -= e, t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] - e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                        return o
                    }
                    return 0
                }

                function mul(t, e) {
                    var i, r, n, s = _typeof(t),
                        a = _typeof(e);
                    if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                        for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] * e;
                        return i
                    }
                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                        for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t * e[r];
                        return i
                    }
                    return 0
                }

                function div(t, e) {
                    var i, r, n, s = _typeof(t),
                        a = _typeof(e);
                    if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                        for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] / e;
                        return i
                    }
                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                        for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t / e[r];
                        return i
                    }
                    return 0
                }

                function mod(t, e) {
                    return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(t, e, i) {
                    if (e > i) {
                        var r = i;
                        i = e, e = r
                    }
                    return Math.min(Math.max(t, e), i)
                }

                function radiansToDegrees(t) {
                    return t / degToRads
                }
                var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(t) {
                    return t * degToRads
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(t, e) {
                    if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                    var i;
                    e || (e = helperLengthArray);
                    var r = Math.min(t.length, e.length),
                        n = 0;
                    for (i = 0; i < r; i += 1) n += Math.pow(e[i] - t[i], 2);
                    return Math.sqrt(n)
                }

                function normalize(t) {
                    return div(t, length(t))
                }

                function rgbToHsl(t) {
                    var e, i, r = t[0],
                        n = t[1],
                        s = t[2],
                        a = Math.max(r, n, s),
                        o = Math.min(r, n, s),
                        h = (a + o) / 2;
                    if (a === o) e = 0, i = 0;
                    else {
                        var l = a - o;
                        switch (i = h > .5 ? l / (2 - a - o) : l / (a + o), a) {
                            case r:
                                e = (n - s) / l + (n < s ? 6 : 0);
                                break;
                            case n:
                                e = (s - r) / l + 2;
                                break;
                            case s:
                                e = (r - n) / l + 4
                        }
                        e /= 6
                    }
                    return [e, i, h, t[3]]
                }

                function hue2rgb(t, e, i) {
                    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                }

                function hslToRgb(t) {
                    var e, i, r, n = t[0],
                        s = t[1],
                        a = t[2];
                    if (0 === s) e = a, r = a, i = a;
                    else {
                        var o = a < .5 ? a * (1 + s) : a + s - a * s,
                            h = 2 * a - o;
                        e = hue2rgb(h, o, n + 1 / 3), i = hue2rgb(h, o, n), r = hue2rgb(h, o, n - 1 / 3)
                    }
                    return [e, i, r, t[3]]
                }

                function linear(t, e, i, r, n) {
                    if (void 0 !== r && void 0 !== n || (r = e, n = i, e = 0, i = 1), i < e) {
                        var s = i;
                        i = e, e = s
                    }
                    if (t <= e) return r;
                    if (t >= i) return n;
                    var a, o = i === e ? 0 : (t - e) / (i - e);
                    if (!r.length) return r + (n - r) * o;
                    var h = r.length,
                        l = createTypedArray("float32", h);
                    for (a = 0; a < h; a += 1) l[a] = r[a] + (n[a] - r[a]) * o;
                    return l
                }

                function random(t, e) {
                    if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                        var i, r = e.length;
                        t || (t = createTypedArray("float32", r));
                        var n = createTypedArray("float32", r),
                            s = BMMath.random();
                        for (i = 0; i < r; i += 1) n[i] = t[i] + s * (e[i] - t[i]);
                        return n
                    }
                    return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                }

                function createPath(t, e, i, r) {
                    var n, s = t.length,
                        a = shapePool.newElement();
                    a.setPathData(!!r, s);
                    var o, h, l = [0, 0];
                    for (n = 0; n < s; n += 1) o = e && e[n] ? e[n] : l, h = i && i[n] ? i[n] : l, a.setTripleAt(t[n][0], t[n][1], h[0] + t[n][0], h[1] + t[n][1], o[0] + t[n][0], o[1] + t[n][1], n, !0);
                    return a
                }

                function initiateExpression(elem, data, property) {
                    var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v
                        }
                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function(t, e) {
                            var i, r, n = this.pv.length ? this.pv.length : 1,
                                s = createTypedArray("float32", n);
                            var a = Math.floor(5 * time);
                            for (i = 0, r = 0; i < a;) {
                                for (r = 0; r < n; r += 1) s[r] += -e + 2 * e * BMMath.random();
                                i += 1
                            }
                            var o = 5 * time,
                                h = o - Math.floor(o),
                                l = createTypedArray("float32", n);
                            if (n > 1) {
                                for (r = 0; r < n; r += 1) l[r] = this.pv[r] + s[r] + (-e + 2 * e * BMMath.random()) * h;
                                return l
                            }
                            return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h
                        }.bind(this);

                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0)
                    }

                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0)
                    }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                    function lookAt(t, e) {
                        var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                            r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                        return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
                    }

                    function easeOut(t, e, i, r, n) {
                        return applyEase(easeOutBez, t, e, i, r, n)
                    }

                    function easeIn(t, e, i, r, n) {
                        return applyEase(easeInBez, t, e, i, r, n)
                    }

                    function ease(t, e, i, r, n) {
                        return applyEase(easeInOutBez, t, e, i, r, n)
                    }

                    function applyEase(t, e, i, r, n, s) {
                        void 0 === n ? (n = i, s = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                        var a = t(e);
                        if ($bm_isInstanceOfArray(n)) {
                            var o, h = n.length,
                                l = createTypedArray("float32", h);
                            for (o = 0; o < h; o += 1) l[o] = (s[o] - n[o]) * a + n[o];
                            return l
                        }
                        return (s - n) * a + n
                    }

                    function nearestKey(t) {
                        var e, i, r, n = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0])
                            if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
                            else {
                                for (e = 0; e < n - 1; e += 1) {
                                    if (t === data.k[e].t) {
                                        i = e + 1, r = data.k[e].t;
                                        break
                                    }
                                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                                        t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                                        break
                                    }
                                } - 1 === i && (i = e + 1, r = data.k[e].t)
                            }
                        else i = 0, r = 0;
                        var s = {};
                        return s.index = i, s.time = r / elem.comp.globalData.frameRate, s
                    }

                    function key(t) {
                        var e, i, r;
                        if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                        t -= 1, e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var n = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                        for (r = n.length, i = 0; i < r; i += 1) e[i] = n[i], e.value[i] = n[i];
                        return e
                    }

                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate), t / e
                    }

                    function timeToFrames(t, e) {
                        return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                    }

                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t)
                    }

                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }

                    function substring(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                    }

                    function substr(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                    }

                    function posterizeTime(t) {
                        time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                    }
                    var index = elem.data.ind,
                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                        parent, randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;

                    function executeExpression(t) {
                        return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                    }
                    return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                }
                return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
            }(),
            expressionHelpers = function() {
                return {
                    searchExpressions: function(t, e, i) {
                        e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                    },
                    getSpeedAtTime: function(t) {
                        var e = this.getValueAtTime(t),
                            i = this.getValueAtTime(t + -.01),
                            r = 0;
                        if (e.length) {
                            var n;
                            for (n = 0; n < e.length; n += 1) r += Math.pow(i[n] - e[n], 2);
                            r = 100 * Math.sqrt(r)
                        } else r = 0;
                        return r
                    },
                    getVelocityAtTime: function(t) {
                        if (void 0 !== this.vel) return this.vel;
                        var e, i, r = this.getValueAtTime(t),
                            n = this.getValueAtTime(t + -.001);
                        if (r.length)
                            for (e = createTypedArray("float32", r.length), i = 0; i < r.length; i += 1) e[i] = (n[i] - r[i]) / -.001;
                        else e = (n - r) / -.001;
                        return e
                    },
                    getValueAtTime: function(t) {
                        return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                    },
                    getStaticValueAtTime: function() {
                        return this.pv
                    },
                    setGroupProperty: function(t) {
                        this.propertyGroup = t
                    }
                }
            }();

        function addPropertyDecorator() {
            function t(t, e, i) {
                if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : "";
                var r, n, s, a, o, h = this.comp.renderedFrame,
                    l = this.keyframes,
                    c = l[l.length - 1].t;
                if (h <= c) return this.pv;
                if (i ? n = c - (r = e ? Math.abs(c - this.elem.comp.globalData.frameRate * e) : Math.max(0, c - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = c - (n = l[l.length - 1 - e].t)), "pingpong" === t) {
                    if (Math.floor((h - n) / r) % 2 != 0) return this.getValueAtTime((r - (h - n) % r + n) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var p = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                            u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(((h - n) % r + n) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((h - n) / r);
                        if (this.pv.length) {
                            for (a = (o = new Array(p.length)).length, s = 0; s < a; s += 1) o[s] = (u[s] - p[s]) * d + f[s];
                            return o
                        }
                        return (u - p) * d + f
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            y = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - y[s]) * ((h - c) / this.comp.globalData.frameRate) / 5e-4;
                            return o
                        }
                        return m + (h - c) / .001 * (m - y)
                    }
                }
                return this.getValueAtTime(((h - n) % r + n) / this.comp.globalData.frameRate, 0)
            }

            function e(t, e, i) {
                if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : "";
                var r, n, s, a, o, h = this.comp.renderedFrame,
                    l = this.keyframes,
                    c = l[0].t;
                if (h >= c) return this.pv;
                if (i ? n = c + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - c)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = (n = l[e].t) - c), "pingpong" === t) {
                    if (Math.floor((c - h) / r) % 2 == 0) return this.getValueAtTime(((c - h) % r + c) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var p = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime((r - (c - h) % r + c) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((c - h) / r) + 1;
                        if (this.pv.length) {
                            for (a = (o = new Array(p.length)).length, s = 0; s < a; s += 1) o[s] = f[s] - (u[s] - p[s]) * d;
                            return o
                        }
                        return f - (u - p) * d
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            y = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - y[s]) * (c - h) / .001;
                            return o
                        }
                        return m + (m - y) * (c - h) / .001
                    }
                }
                return this.getValueAtTime((r - ((c - h) % r + c)) / this.comp.globalData.frameRate, 0)
            }

            function i(t, e) {
                if (!this.k) return this.pv;
                if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                var i, r, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    s = n - t,
                    a = e > 1 ? (n + t - s) / (e - 1) : 1,
                    o = 0,
                    h = 0;
                for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                    if (r = this.getValueAtTime(s + o * a), this.pv.length)
                        for (h = 0; h < this.pv.length; h += 1) i[h] += r[h];
                    else i += r;
                    o += 1
                }
                if (this.pv.length)
                    for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
                else i /= e;
                return i
            }
            var r = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                var n = r(t, e, i);
                return n.dynamicProperties.length ? n.getValueAtTime = function(t) {
                    this._transformCachingAtTime || (this._transformCachingAtTime = {
                        v: new Matrix
                    });
                    var e = this._transformCachingAtTime.v;
                    if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                        var i = this.a.getValueAtTime(t);
                        e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                    }
                    if (this.appliedTransformations < 2) {
                        var r = this.s.getValueAtTime(t);
                        e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                        var n = this.sk.getValueAtTime(t),
                            s = this.sa.getValueAtTime(t);
                        e.skewFromAxis(-n * this.sk.mult, s * this.sa.mult)
                    }
                    if (this.r && this.appliedTransformations < 4) {
                        var a = this.r.getValueAtTime(t);
                        e.rotate(-a * this.r.mult)
                    } else if (!this.r && this.appliedTransformations < 4) {
                        var o = this.rz.getValueAtTime(t),
                            h = this.ry.getValueAtTime(t),
                            l = this.rx.getValueAtTime(t),
                            c = this.or.getValueAtTime(t);
                        e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-c[2] * this.or.mult).rotateY(c[1] * this.or.mult).rotateX(c[0] * this.or.mult)
                    }
                    if (this.data.p && this.data.p.s) {
                        var p = this.px.getValueAtTime(t),
                            u = this.py.getValueAtTime(t);
                        if (this.data.p.z) {
                            var f = this.pz.getValueAtTime(t);
                            e.translate(p * this.px.mult, u * this.py.mult, -f * this.pz.mult)
                        } else e.translate(p * this.px.mult, u * this.py.mult, 0)
                    } else {
                        var d = this.p.getValueAtTime(t);
                        e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
                    }
                    return e
                }.bind(n) : n.getValueAtTime = function() {
                    return this.v.clone(new Matrix)
                }.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function(r, s, a, o, h) {
                var l = n(r, s, a, o, h);
                l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === s.a ? s.k.length : 0, l.propertyIndex = s.ix;
                var c = 0;
                return 0 !== a && (c = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), l._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: c
                }, expressionHelpers.searchExpressions(r, s, l), l.k && h.addDynamicProperty(l), l
            };
            var s = ShapePropertyFactory.getConstructorFunction(),
                a = ShapePropertyFactory.getKeyframedConstructorFunction();

            function o() {}
            o.prototype = {
                vertices: function(t, e) {
                    this.k && this.getValue();
                    var i, r = this.v;
                    void 0 !== e && (r = this.getValueAtTime(e, 0));
                    var n = r._length,
                        s = r[t],
                        a = r.v,
                        o = createSizedArray(n);
                    for (i = 0; i < n; i += 1) o[i] = "i" === t || "o" === t ? [s[i][0] - a[i][0], s[i][1] - a[i][1]] : [s[i][0], s[i][1]];
                    return o
                },
                points: function(t) {
                    return this.vertices("v", t)
                },
                inTangents: function(t) {
                    return this.vertices("i", t)
                },
                outTangents: function(t) {
                    return this.vertices("o", t)
                },
                isClosed: function() {
                    return this.v.c
                },
                pointOnPath: function(t, e) {
                    var i = this.v;
                    void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                    for (var r, n = this._segmentsLength, s = n.lengths, a = n.totalLength * t, o = 0, h = s.length, l = 0; o < h;) {
                        if (l + s[o].addedLength > a) {
                            var c = o,
                                p = i.c && o === h - 1 ? 0 : o + 1,
                                u = (a - l) / s[o].addedLength;
                            r = bez.getPointInSegment(i.v[c], i.v[p], i.o[c], i.i[p], u, s[o]);
                            break
                        }
                        l += s[o].addedLength, o += 1
                    }
                    return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
                },
                vectorOnPath: function(t, e, i) {
                    1 == t ? t = this.v.c : 0 == t && (t = .999);
                    var r = this.pointOnPath(t, e),
                        n = this.pointOnPath(t + .001, e),
                        s = n[0] - r[0],
                        a = n[1] - r[1],
                        o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
                    return 0 === o ? [0, 0] : "tangent" === i ? [s / o, a / o] : [-a / o, s / o]
                },
                tangentOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "tangent")
                },
                normalOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([o], s), extendPrototype([o], a), a.prototype.getValueAtTime = function(t) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }, a.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var h = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, i, r, n) {
                var s = h(t, e, i, r, n);
                return s.propertyIndex = e.ix, s.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
            }
        }

        function initialize$1() {
            addPropertyDecorator()
        }

        function addDecorator() {
            TextProperty.prototype.getExpressionValue = function(t, e) {
                var i = this.calculateExpression(e);
                if (t.t !== i) {
                    var r = {};
                    return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r
                }
                return t
            }, TextProperty.prototype.searchProperty = function() {
                var t = this.searchKeyframes(),
                    e = this.searchExpressions();
                return this.kf = t || e, this.kf
            }, TextProperty.prototype.searchExpressions = function() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
            }
        }

        function initialize() {
            addDecorator()
        }
        return registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), setExpressionsPlugin(Expressions), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
    }, module.exports = factory())
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(e, {})
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(60),
        s = i(61),
        a = i(62),
        o = i(1),
        h = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.onEnter = function() {
                this.elmTransitions || (this.elmTransitions = document.querySelector("#transitions")), this.view = this.wrap.lastElementChild, document.body.classList.add("body-mounted"), this.SliderReferences = new s.a
            }, e.prototype.onEnterCompleted = function() {
                var t = this;
                this.$anchors = document.querySelector(".b-anchors"), this.anchor = new n.a(this.$anchors), this.$dropdowns = document.querySelector(".b-dropdown"), this.dropdown = new a.a(this.$dropdowns), o.a.to(this.elmTransitions, {
                    opacity: 0,
                    duration: .5,
                    ease: "power1.out",
                    onComplete: function() {
                        t.elmTransitions.classList.remove("show")
                    }
                })
            }, e.prototype.onLeave = function() {}, e.prototype.onLeaveCompleted = function() {
                this.anchor = null, this.SliderReferences.destroy(), this.SliderReferences = null
            }, e.prototype.resize = function() {}, e.prototype.update = function() {
                this.SliderReferences && this.SliderReferences.update(), this.dropdown && this.dropdown.update()
            }, e.prototype.scroll = function(t) {
                this.anchor && this.anchor.scroll(t)
            }, e
        }(r.a.Renderer);
    e.a = h
}, function(t, e) {}]);