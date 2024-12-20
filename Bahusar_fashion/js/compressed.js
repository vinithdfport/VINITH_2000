! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    var t = [],
        k = C.document,
        c = t.slice,
        g = t.concat,
        a = t.push,
        i = t.indexOf,
        n = {},
        r = n.toString,
        h = n.hasOwnProperty,
        v = {},
        o = "2.2.4",
        E = function (e, t) {
            return new E.fn.init(e, t)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^-ms-/,
        l = /-([\da-z])/gi,
        f = function (e, t) {
            return t.toUpperCase()
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = E.type(e);
        return "function" !== n && !E.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: o,
        constructor: E,
        selector: "",
        length: 0,
        toArray: function () {
            return c.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function (e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return E.each(this, e)
        },
        map: function (n) {
            return this.pushStack(E.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || E.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (E.isPlainObject(r) || (i = E.isArray(r))) ? (i ? (i = !1, o = n && E.isArray(n) ? n : []) : o = n && E.isPlainObject(n) ? n : {}, s[t] = E.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, E.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === E.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = e && e.toString();
            return !E.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isPlainObject: function (e) {
            var t;
            if ("object" !== E.type(e) || e.nodeType || E.isWindow(e)) return !1;
            if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || h.call(e, t)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            (e = E.trim(e)) && (1 === e.indexOf("use strict") ? ((t = k.createElement("script")).text = e, k.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(u, "ms-").replace(l, f)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(s, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                s = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), E.isFunction(e) ? (r = c.call(arguments, 2), (i = function () {
                return e.apply(t || this, r.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, i) : void 0
        },
        now: Date.now,
        support: v
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, h, b, o, i, g, f, v, w, u, l, T, C, s, k, m, a, c, y, E = "sizzle" + 1 * new Date,
            x = n.document,
            N = 0,
            r = 0,
            p = ie(),
            d = ie(),
            S = ie(),
            j = function (e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            A = t.pop,
            q = t.push,
            L = t.push,
            H = t.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
            I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            $ = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"),
            _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            X = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            z = new RegExp(I),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = /'|\\/g,
            ee = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            te = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            ne = function () {
                T()
            };
        try {
            L.apply(t = H.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: t.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function re(e, t, n, r) {
            var i, o, s, a, u, l, c, f, p = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== C && T(t), t = t || C, k)) {
                if (11 !== d && (l = J.exec(e)))
                    if (i = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (p && (s = p.getElementById(i)) && y(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (l[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(i)), n
                    } if (h.qsa && !S[e + " "] && (!m || !m.test(e))) {
                    if (1 !== d) p = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(Z, "\\$&") : t.setAttribute("id", a = E), o = (c = g(e)).length, u = U.test(a) ? "#" + a : "[id='" + a + "']"; o--;) c[o] = u + " " + he(c[o]);
                        f = c.join(","), p = K.test(e) && pe(t.parentNode) || t
                    }
                    if (f) try {
                        return L.apply(n, p.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        a === E && t.removeAttribute("id")
                    }
                }
            }
            return v(e.replace($, "$1"), t, n, r)
        }

        function ie() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function oe(e) {
            return e[E] = !0, e
        }

        function se(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ae(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function le(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ce(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function fe(s) {
            return oe(function (o) {
                return o = +o, oe(function (e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function pe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = re.support = {}, i = re.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, T = re.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : x;
                return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement, k = !i(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ne, !1) : n.attachEvent && n.attachEvent("onunload", ne)), h.attributes = se(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = se(function (e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = Q.test(C.getElementsByClassName), h.getById = se(function (e) {
                    return s.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                }), h.getById ? (b.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, b.filter.ID = function (e) {
                    var t = e.replace(ee, te);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function (e) {
                    var n = e.replace(ee, te);
                    return function (e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), b.find.TAG = h.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = h.getElementsByClassName && function (e, t) {
                    return void 0 !== t.getElementsByClassName && k ? t.getElementsByClassName(e) : void 0
                }, a = [], m = [], (h.qsa = Q.test(C.querySelectorAll)) && (se(function (e) {
                    s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + E + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]")
                }), se(function (e) {
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = Q.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && se(function (e) {
                    h.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), a.push("!=", I)
                }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = Q.test(s.compareDocumentPosition), y = t || Q.test(s.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && y(x, e) ? -1 : t === C || t.ownerDocument === x && y(x, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
                    if (i === o) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? ue(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0
                }), C
            }, re.matches = function (e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(X, "='$1']"), h.matchesSelector && k && !S[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
                    var n = c.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < re(t, C, null, [e]).length
            }, re.contains = function (e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, re.attr = function (e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                return void 0 !== r ? r : h.attributes || !k ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, re.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(j), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = re.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = re.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ee, te).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && p(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = re.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(W, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, v) {
                        var m = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var r, i, o, s, a, u, l = m !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (m) {
                                    for (; l;) {
                                        for (s = e; s = s[l];)
                                            if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (d = (a = (r = (i = (o = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop();)
                                        if (1 === s.nodeType && ++d && s === e) {
                                            i[h] = [N, a, d];
                                            break
                                        }
                                } else if (p && (d = a = (r = (i = (o = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === d)
                                    for (;
                                        (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (p && ((i = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [N, d]), s !== e)););
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function (e, o) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[E] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
                            for (var n, r = s(e, o), i = r.length; i--;) e[n = O(e, r[i])] = !(t[n] = r[i])
                        }) : function (e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: oe(function (e) {
                        var r = [],
                            i = [],
                            a = f(e.replace($, "$1"));
                        return a[E] ? oe(function (e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function (e, t, n) {
                            return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: oe(function (t) {
                        return function (e) {
                            return 0 < re(t, e).length
                        }
                    }),
                    contains: oe(function (t) {
                        return t = t.replace(ee, te),
                            function (e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: oe(function (n) {
                        return U.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(ee, te).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === s
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return !1 === e.disabled
                    },
                    disabled: function (e) {
                        return !0 === e.disabled
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return G.test(e.nodeName)
                    },
                    input: function (e) {
                        return Y.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function () {
                        return [0]
                    }),
                    last: fe(function (e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: fe(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: fe(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: fe(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: fe(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = le(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = ce(e);

        function de() {}

        function he(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ge(a, e, t) {
            var u = e.dir,
                l = t && "parentNode" === u,
                c = r++;
            return e.first ? function (e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || l) return a(e, t, n)
            } : function (e, t, n) {
                var r, i, o, s = [N, c];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || l) && a(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || l) {
                            if ((r = (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[u]) && r[0] === N && r[1] === c) return s[2] = r[2];
                            if ((i[u] = s)[2] = a(e, t, n)) return !0
                        }
            }
        }

        function ve(i) {
            return 1 < i.length ? function (e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function me(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function ye(d, h, g, v, m, e) {
            return v && !v[E] && (v = ye(v)), m && !m[E] && (m = ye(m, e)), oe(function (e, t, n, r) {
                var i, o, s, a = [],
                    u = [],
                    l = t.length,
                    c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : me(c, a, d, n, r),
                    p = g ? m || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v)
                    for (i = me(p, u), v(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                if (e) {
                    if (m || d) {
                        if (m) {
                            for (i = [], o = p.length; o--;)(s = p[o]) && i.push(f[o] = s);
                            m(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(s = p[o]) && -1 < (i = m ? O(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else p = me(p === t ? p.splice(l, p.length) : p), m ? m(null, t, p, r) : L.apply(t, p)
            })
        }

        function xe(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = ge(function (e) {
                    return e === i
                }, s, !0), l = ge(function (e) {
                    return -1 < O(i, e)
                }, s, !0), c = [function (e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; a < r; a++)
                if (t = b.relative[e[a].type]) c = [ge(ve(c), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[E]) {
                        for (n = ++a; n < r && !b.relative[e[n].type]; n++);
                        return ye(1 < a && ve(c), 1 < a && he(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace($, "$1"), t, a < n && xe(e.slice(a, n)), n < r && xe(e = e.slice(n)), n < r && he(e))
                    }
                    c.push(t)
                } return ve(c)
        }
        return de.prototype = b.filters = b.pseudos, b.setFilters = new de, g = re.tokenize = function (e, t) {
            var n, r, i, o, s, a, u, l = d[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, a = [], u = b.preFilter; s;) {
                for (o in n && !(r = B.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = _.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), s = s.slice(n.length)), b.filter) !(r = V[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? re.error(e) : d(e, a).slice(0)
        }, f = re.compile = function (e, t) {
            var n, v, m, y, x, r, i = [],
                o = [],
                s = S[e + " "];
            if (!s) {
                for (t || (t = g(e)), n = t.length; n--;)(s = xe(t[n]))[E] ? i.push(s) : o.push(s);
                (s = S(e, (v = o, y = 0 < (m = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, s, a, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = N += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (s = 0, t || o.ownerDocument === C || (T(o), n = !k); a = v[s++];)
                                if (a(o, t || C, n)) {
                                    r.push(o);
                                    break
                                } i && (N = h)
                        }
                        y && ((o = !a && o) && u--, e && c.push(o))
                    }
                    if (u += l, y && l !== u) {
                        for (s = 0; a = m[s++];) a(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = A.call(r));
                            f = me(f)
                        }
                        L.apply(r, f), i && !e && 0 < f.length && 1 < u + m.length && re.uniqueSort(r)
                    }
                    return i && (N = h, w = p), c
                }, y ? oe(r) : r))).selector = e
            }
            return s
        }, v = re.select = function (e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                c = !r && g(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && k && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ee, te), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = V.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !b.relative[a = s.type]);)
                    if ((u = b.find[a]) && (r = u(s.matches[0].replace(ee, te), K.test(o[0].type) && pe(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && he(o))) return L.apply(n, r), n;
                        break
                    }
            }
            return (l || f(e, c))(r, t, !k, n, !t || K.test(e) && pe(t.parentNode) || t), n
        }, h.sortStable = E.split("").sort(j).join("") === E, h.detectDuplicates = !!l, T(), h.sortDetached = se(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), se(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ae("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && se(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ae("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), se(function (e) {
            return null == e.getAttribute("disabled")
        }) || ae(F, function (e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), re
    }(C);
    E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains;
    var m = function (e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                } return r
        },
        y = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        x = E.expr.match.needsContext,
        b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function T(e, n, r) {
        if (E.isFunction(n)) return E.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return E.grep(e, function (e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (w.test(n)) return E.filter(n, e, r);
            n = E.filter(n, e)
        }
        return E.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        })
    }
    E.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function (e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
                for (t = 0; t < n; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) E.find(e, i[t], r);
            return (r = this.pushStack(1 < n ? E.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function (e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function (e) {
            return !!T(this, "string" == typeof e && x.test(e) ? E(e) : e || [], !1).length
        }
    });
    var N, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (E.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), b.test(r[1]) && E.isPlainObject(t))
                    for (r in t) E.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = k.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = k, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : E.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), E.makeArray(e, this))
    }).prototype = E.fn, N = E(k);
    var j = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    E.fn.extend({
        has: function (e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = x.test(e) || "string" != typeof e ? E(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return m(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return m(e, "parentNode", n)
        },
        next: function (e) {
            return A(e, "nextSibling")
        },
        prev: function (e) {
            return A(e, "previousSibling")
        },
        nextAll: function (e) {
            return m(e, "nextSibling")
        },
        prevAll: function (e) {
            return m(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return m(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return m(e, "previousSibling", n)
        },
        siblings: function (e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return y(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || E.merge([], e.childNodes)
        }
    }, function (r, i) {
        E.fn[r] = function (e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (D[r] || E.uniqueSort(n), j.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var q, L = /\S+/g;

    function H() {
        k.removeEventListener("DOMContentLoaded", H), C.removeEventListener("load", H), E.ready()
    }
    E.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(L) || [], function (e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var i, t, o, s, a = [],
            u = [],
            l = -1,
            c = function () {
                for (s = r.once, o = i = !0; u.length; l = -1)
                    for (t = u.shift(); ++l < a.length;) !1 === a[l].apply(t[0], t[1]) && r.stopOnFalse && (l = a.length, t = !1);
                r.memory || (t = !1), i = !1, s && (a = t ? [] : "")
            },
            f = {
                add: function () {
                    return a && (t && !i && (l = a.length - 1, u.push(t)), function n(e) {
                        E.each(e, function (e, t) {
                            E.isFunction(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== E.type(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function () {
                    return E.each(arguments, function (e, t) {
                        for (var n; - 1 < (n = E.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < E.inArray(e, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return s = u = [], a = t = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return s = u = [], t || (a = t = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, E.extend({
        Deferred: function (e) {
            var o = [
                    ["resolve", "done", E.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", E.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var i = arguments;
                        return E.Deferred(function (r) {
                            E.each(o, function (e, t) {
                                var n = E.isFunction(i[e]) && i[e];
                                a[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && E.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? E.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, E.each(o, function (e, t) {
                var n = t[2],
                    r = t[3];
                s[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function (e) {
            var i, t, n, r = 0,
                o = c.call(arguments),
                s = o.length,
                a = 1 !== s || e && E.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : E.Deferred(),
                l = function (t, n, r) {
                    return function (e) {
                        n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (1 < s)
                for (i = new Array(s), t = new Array(s), n = new Array(s); r < s; r++) o[r] && E.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --a;
            return a || u.resolveWith(n, o), u.promise()
        }
    }), E.fn.ready = function (e) {
        return E.ready.promise().done(e), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? E.readyWait++ : E.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait || (q.resolveWith(k, [E]), E.fn.triggerHandler && (E(k).triggerHandler("ready"), E(k).off("ready"))))
        }
    }), E.ready.promise = function (e) {
        return q || (q = E.Deferred(), "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(E.ready) : (k.addEventListener("DOMContentLoaded", H), C.addEventListener("load", H))), q.promise(e)
    }, E.ready.promise();
    var O = function (e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === E.type(n))
                for (a in i = !0, n) O(e, t, a, n[a], !0, o, s);
            else if (void 0 !== r && (i = !0, E.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(E(e), n)
                })), t))
                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        F = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function P() {
        this.expando = E.expando + P.uid++
    }
    P.uid = 1, P.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function (e) {
            if (!F(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, E.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    E.isArray(t) ? r = t.concat(t.map(E.camelCase)) : (i = E.camelCase(t), t in o ? r = [t, i] : r = (r = i) in o ? [r] : r.match(L) || []), n = r.length;
                    for (; n--;) delete o[r[n]]
                }(void 0 === t || E.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var R = new P,
        M = new P,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        W = /[A-Z]/g;

    function $(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(W, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? E.parseJSON(n) : n)
                } catch (e) {}
                M.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({
        hasData: function (e) {
            return M.hasData(e) || R.hasData(e)
        },
        data: function (e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function (e, t) {
            M.remove(e, t)
        },
        _data: function (e, t, n) {
            return R.access(e, t, n)
        },
        _removeData: function (e, t) {
            R.remove(e, t)
        }
    }), E.fn.extend({
        data: function (r, e) {
            var t, n, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === r) {
                if (this.length && (i = M.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = E.camelCase(n.slice(5)), $(o, n, i[n])));
                    R.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof r ? this.each(function () {
                M.set(this, r)
            }) : O(this, function (t) {
                var e, n;
                if (o && void 0 === t) {
                    if (void 0 !== (e = M.get(o, r) || M.get(o, r.replace(W, "-$&").toLowerCase()))) return e;
                    if (n = E.camelCase(r), void 0 !== (e = M.get(o, n))) return e;
                    if (void 0 !== (e = $(o, n, void 0))) return e
                } else n = E.camelCase(r), this.each(function () {
                    var e = M.get(this, n);
                    M.set(this, n, t), -1 < r.indexOf("-") && void 0 !== e && M.set(this, r, t)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                M.remove(this, e)
            })
        }
    }), E.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || E.isArray(n) ? r = R.access(e, t, E.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return R.get(e, n) || R.access(e, n, {
                empty: E.Callbacks("once memory").add(function () {
                    R.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                E.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = E.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = R.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
        X = ["Top", "Right", "Bottom", "Left"],
        z = function (e, t) {
            return e = t || e, "none" === E.css(e, "display") || !E.contains(e.ownerDocument, e)
        };

    function U(e, t, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function () {
                return r.cur()
            } : function () {
                return E.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = (E.cssNumber[t] || "px" !== l && +u) && _.exec(E.css(e, t));
        if (c && c[3] !== l)
            for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", E.style(e, t, c + l), o !== (o = a() / u) && 1 !== o && --s;);
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var V = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        G = /^$|\/(?:java|ecma)script/i,
        Q = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function J(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && E.nodeName(e, t) ? E.merge([e], n) : n
    }

    function K(e, t) {
        for (var n = 0, r = e.length; n < r; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
    }
    Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
    var Z, ee, te = /<|&#?\w+;/;

    function ne(e, t, n, r, i) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === E.type(o)) E.merge(p, o.nodeType ? [o] : o);
                else if (te.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Y.exec(o) || ["", ""])[1].toLowerCase(), u = Q[a] || Q._default, s.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
            E.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (l = E.contains(o.ownerDocument, o), s = J(f.appendChild(o), "script"), l && K(s), n)
            for (c = 0; o = s[c++];) G.test(o.type || "") && n.push(o);
        return f
    }
    Z = k.createDocumentFragment().appendChild(k.createElement("div")), (ee = k.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), Z.appendChild(ee), v.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var re = /^key/,
        ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        oe = /^([^.]*)(?:\.(.+)|)/;

    function se() {
        return !0
    }

    function ae() {
        return !1
    }

    function ue() {
        try {
            return k.activeElement
        } catch (e) {}
    }

    function le(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), t) le(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ae;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function (e) {
            return E().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = E.guid++)), e.each(function () {
            E.event.add(this, t, i, r, n)
        })
    }
    E.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = R.get(t);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function (e) {
                        return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(L) || [""]).length; l--;) d = g = (a = oe.exec(e[l]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = R.hasData(e) && R.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(L) || [""]).length; l--;)
                    if (d = g = (a = oe.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && R.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = E.event.fix(e);
            var t, n, r, i, o, s = [],
                a = c.call(arguments),
                u = (R.get(this, "events") || {})[e.type] || [],
                l = E.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = E.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < E(i, this).index(u) : E.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || k).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[E.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = ie.test(i) ? this.mouseHooks : re.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new E.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = k), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== ue() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === ue() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && E.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return E.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function (e, t) {
        return this instanceof E.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? se : ae) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || E.now(), void(this[E.expando] = !0)) : new E.Event(e, t)
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: ae,
        isPropagationStopped: ae,
        isImmediatePropagationStopped: ae,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function (e, t, n, r) {
            return le(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return le(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ae), this.each(function () {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        fe = /<script|<style|<link/i,
        pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ge(e, t) {
        return E.nodeName(e, "table") && E.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ve(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function me(e) {
        var t = de.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ye(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (R.hasData(e) && (o = R.access(e), s = R.set(t, o), l = o.events))
                for (i in delete s.handle, s.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) E.event.add(t, i, l[i][n]);
            M.hasData(e) && (a = M.access(e), u = E.extend({}, a), M.set(t, u))
        }
    }

    function xe(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = E.isFunction(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && pe.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), xe(t, r, i, o)
        });
        if (f && (t = (e = ne(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = E.map(J(e, "script"), ve)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), a && E.merge(s, J(u, "script"))), i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, E.map(s, me), c = 0; c < a; c++) u = s[c], G.test(u.type || "") && !R.access(u, "globalEval") && E.contains(l, u) && (u.src ? E._evalUrl && E._evalUrl(u.src) : E.globalEval(u.textContent.replace(he, "")))
        }
        return n
    }

    function be(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(J(r)), r.parentNode && (n && E.contains(r.ownerDocument, r) && K(J(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function (e) {
            return e.replace(ce, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0),
                f = E.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (s = J(c), r = 0, i = (o = J(e)).length; r < i; r++) a = o[r], u = s[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && V.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || J(e), s = s || J(c), r = 0, i = o.length; r < i; r++) ye(o[r], s[r]);
                else ye(e, c);
            return 0 < (s = J(c, "script")).length && K(s, !f && J(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (F(n)) {
                    if (t = n[R.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[R.expando] = void 0
                    }
                    n[M.expando] && (n[M.expando] = void 0)
                }
        }
    }), E.fn.extend({
        domManip: xe,
        detach: function (e) {
            return be(this, e, !0)
        },
        remove: function (e) {
            return be(this, e)
        },
        text: function (e) {
            return O(this, function (e) {
                return void 0 === e ? E.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return xe(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return xe(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return xe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return xe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(J(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return E.clone(this, e, t)
            })
        },
        html: function (e) {
            return O(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !fe.test(e) && !Q[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(J(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return xe(this, arguments, function (e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(J(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, s) {
        E.fn[e] = function (e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[s](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var we, Te = {
        HTML: "block",
        BODY: "block"
    };

    function Ce(e, t) {
        var n = E(t.createElement(e)).appendTo(t.body),
            r = E.css(n[0], "display");
        return n.detach(), r
    }

    function ke(e) {
        var t = k,
            n = Te[e];
        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (we = (we || E("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), we.detach()), Te[e] = n), n
    }
    var Ee = /^margin/,
        Ne = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
        Se = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        je = function (e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
            return i
        },
        De = k.documentElement;

    function Ae(e, t, n) {
        var r, i, o, s, a = e.style;
        return "" !== (s = (n = n || Se(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || E.contains(e.ownerDocument, e) || (s = E.style(e, t)), n && !v.pixelMarginRight() && Ne.test(s) && Ee.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function () {
        var t, n, r, i, o = k.createElement("div"),
            s = k.createElement("div");
        if (s.style) {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", De.appendChild(o);
                var e = C.getComputedStyle(s);
                t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, s.style.marginRight = "50%", r = "4px" === e.marginRight, De.removeChild(o)
            }
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), E.extend(v, {
                pixelPosition: function () {
                    return e(), t
                },
                boxSizingReliable: function () {
                    return null == n && e(), n
                },
                pixelMarginRight: function () {
                    return null == n && e(), r
                },
                reliableMarginLeft: function () {
                    return null == n && e(), i
                },
                reliableMarginRight: function () {
                    var e, t = s.appendChild(k.createElement("div"));
                    return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", De.appendChild(o), e = !parseFloat(C.getComputedStyle(t).marginRight), De.removeChild(o), s.removeChild(t), e
                }
            })
        }
    }();
    var Le = /^(none|table(?!-c[ea]).+)/,
        He = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Oe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Fe = ["Webkit", "O", "Moz", "ms"],
        Pe = k.createElement("div").style;

    function Re(e) {
        if (e in Pe) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
            if ((e = Fe[n] + t) in Pe) return e
    }

    function Me(e, t, n) {
        var r = _.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ie(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += E.css(e, n + X[o], !0, i)), r ? ("content" === n && (s -= E.css(e, "padding" + X[o], !0, i)), "margin" !== n && (s -= E.css(e, "border" + X[o] + "Width", !0, i))) : (s += E.css(e, "padding" + X[o], !0, i), "padding" !== n && (s += E.css(e, "border" + X[o] + "Width", !0, i)));
        return s
    }

    function We(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Se(e),
            s = "border-box" === E.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Ae(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ne.test(i)) return i;
            r = s && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ie(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function $e(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = R.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && z(r) && (o[s] = R.access(r, "olddisplay", ke(r.nodeName)))) : (i = z(r), "none" === n && i || R.set(r, "olddisplay", i ? n : E.css(r, "display"))));
        for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function Be(e, t, n, r, i) {
        return new Be.prototype.init(e, t, n, r, i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ae(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = E.camelCase(t),
                    u = e.style;
                return t = E.cssProps[a] || (E.cssProps[a] = Re(a) || a), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = _.exec(n)) && i[1] && (n = U(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (E.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = E.camelCase(t);
            return t = E.cssProps[a] || (E.cssProps[a] = Re(a) || a), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ae(e, t, r)), "normal" === i && t in Oe && (i = Oe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function (e, s) {
        E.cssHooks[s] = {
            get: function (e, t, n) {
                return t ? Le.test(E.css(e, "display")) && 0 === e.offsetWidth ? je(e, He, function () {
                    return We(e, s, n)
                }) : We(e, s, n) : void 0
            },
            set: function (e, t, n) {
                var r, i = n && Se(e),
                    o = n && Ie(e, s, n, "border-box" === E.css(e, "boxSizing", !1, i), i);
                return o && (r = _.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = E.css(e, s)), Me(0, t, o)
            }
        }
    }), E.cssHooks.marginLeft = qe(v.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(Ae(e, "marginLeft")) || e.getBoundingClientRect().left - je(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), E.cssHooks.marginRight = qe(v.reliableMarginRight, function (e, t) {
        return t ? je(e, {
            display: "inline-block"
        }, Ae, [e, "marginRight"]) : void 0
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (i, o) {
        E.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + X[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, Ee.test(i) || (E.cssHooks[i + o].set = Me)
    }), E.fn.extend({
        css: function (e, t) {
            return O(this, function (e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (E.isArray(t)) {
                    for (r = Se(e), i = t.length; s < i; s++) o[t[s]] = E.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function () {
            return $e(this, !0)
        },
        hide: function () {
            return $e(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                z(this) ? E(this).show() : E(this).hide()
            })
        }
    }), ((E.Tween = Be).prototype = {
        constructor: Be,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Be.propHooks[this.prop];
            return e && e.get ? e.get(this) : Be.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Be.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Be.propHooks._default.set(this), this
        }
    }).init.prototype = Be.prototype, (Be.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Be.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = Be.prototype.init, E.fx.step = {};
    var _e, Xe, ze, Ue, Ve, Ye = /^(?:toggle|show|hide)$/,
        Ge = /queueHooks$/;

    function Qe() {
        return C.setTimeout(function () {
            _e = void 0
        }), _e = E.now()
    }

    function Je(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = X[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Ke(e, t, n) {
        for (var r, i = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Ze(o, e, t) {
        var n, s, r = 0,
            i = Ze.prefilters.length,
            a = E.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (s) return !1;
                for (var e = _e || Qe(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return a.notifyWith(o, [l, n, t]), n < 1 && i ? t : (a.resolveWith(o, [l]), !1)
            },
            l = a.promise({
                elem: o,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: _e || Qe(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l, e])) : a.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (function (e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (i = t[r = E.camelCase(n)], o = e[n], E.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = E.cssHooks[r]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = Ze.prefilters[r].call(l, o, c, l.opts)) return E.isFunction(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = E.proxy(n.stop, n)), n;
        return E.map(c, Ke, l), E.isFunction(l.opts.start) && l.opts.start.call(o, l), E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    E.Animation = E.extend(Ze, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return U(n.elem, e, _.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            E.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(L);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Ze.tweeners[n] = Ze.tweeners[n] || [], Ze.tweeners[n].unshift(t)
        },
        prefilters: [function (t, e, n) {
            var r, i, o, s, a, u, l, c = this,
                f = {},
                p = t.style,
                d = t.nodeType && z(t),
                h = R.get(t, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || u()
                }), a.unqueued++, c.always(function () {
                    c.always(function () {
                        a.unqueued--, E.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (l = E.css(t, "display")) ? R.get(t, "olddisplay") || ke(t.nodeName) : l) && "none" === E.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), e)
                if (i = e[r], Ye.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        d = !0
                    }
                    f[r] = h && h[r] || E.style(t, r)
                } else l = void 0;
            if (E.isEmptyObject(f)) "inline" === ("none" === l ? ke(t.nodeName) : l) && (p.display = l);
            else
                for (r in h ? "hidden" in h && (d = h.hidden) : h = R.access(t, "fxshow", {}), o && (h.hidden = !d), d ? E(t).show() : c.done(function () {
                        E(t).hide()
                    }), c.done(function () {
                        var e;
                        for (e in R.remove(t, "fxshow"), f) E.style(t, e, f[e])
                    }), f) s = Ke(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }],
        prefilter: function (e, t) {
            t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
        }
    }), E.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || E.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !E.isFunction(t) && t
        };
        return r.duration = E.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in E.fx.speeds ? E.fx.speeds[r.duration] : E.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            E.isFunction(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(z).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (t, e, n, r) {
            var i = E.isEmptyObject(t),
                o = E.speed(e, n, r),
                s = function () {
                    var e = Ze(this, E.extend({}, t), o);
                    (i || R.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (i, e, o) {
            var s = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = E.timers,
                    r = R.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && Ge.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var e, t = R.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = E.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function (e, r) {
        var i = E.fn[r];
        E.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Je(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: Je("show"),
        slideUp: Je("hide"),
        slideToggle: Je("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, r) {
        E.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function () {
        var e, t = 0,
            n = E.timers;
        for (_e = E.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), _e = void 0
    }, E.fx.timer = function (e) {
        E.timers.push(e), e() ? E.fx.start() : E.timers.pop()
    }, E.fx.interval = 13, E.fx.start = function () {
        Xe || (Xe = C.setInterval(E.fx.tick, E.fx.interval))
    }, E.fx.stop = function () {
        C.clearInterval(Xe), Xe = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function (r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, ze = k.createElement("input"), Ue = k.createElement("select"), Ve = Ue.appendChild(k.createElement("option")), ze.type = "checkbox", v.checkOn = "" !== ze.value, v.optSelected = Ve.selected, Ue.disabled = !0, v.optDisabled = !Ve.disabled, (ze = k.createElement("input")).value = "t", ze.type = "radio", v.radioValue = "t" === ze.value;
    var et, tt = E.expr.attrHandle;
    E.fn.extend({
        attr: function (e, t) {
            return O(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (t = t.toLowerCase(), i = E.attrHooks[t] || (E.expr.match.bool.test(t) ? et : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!v.radioValue && "radio" === t && E.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = E.propFix[n] || n, E.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), et = {
        set: function (e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var o = tt[t] || E.find.attr;
        tt[t] = function (e, t, n) {
            var r, i;
            return n || (i = tt[t], tt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, tt[t] = i), r
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i,
        rt = /^(?:a|area)$/i;
    E.fn.extend({
        prop: function (e, t) {
            return O(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nt.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (E.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        E.propFix[this.toLowerCase()] = this
    });
    var it = /[\t\r\n\f]/g;

    function ot(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    E.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t)) return this.each(function (e) {
                E(this).addClass(t.call(this, e, ot(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[u++];)
                    if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                        for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = E.trim(r)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t)) return this.each(function (e) {
                E(this).removeClass(t.call(this, e, ot(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[u++];)
                    if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (a = E.trim(r)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : E.isFunction(i) ? this.each(function (e) {
                E(this).toggleClass(i.call(this, e, ot(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if ("string" === o)
                    for (t = 0, n = E(this), r = i.match(L) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = ot(this)) && R.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : R.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + ot(n) + " ").replace(it, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var st = /\r/g,
        at = /[\x20\t\r\n\f]+/g;
    E.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = E.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : E.isArray(t) && (t = E.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(st, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : E.trim(E.text(e)).replace(at, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !E.nodeName(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), o) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = E.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function () {
        E.valHooks[this] = {
            set: function (e, t) {
                return E.isArray(t) ? e.checked = -1 < E.inArray(E(e).val(), t) : void 0
            }
        }, v.checkOn || (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ut = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function (e, t, n, r) {
            var i, o, s, a, u, l, c, f = [n || k],
                p = h.call(e, "type") ? e.type : e,
                d = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = s = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !ut.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !E.isWindow(n)) {
                    for (a = c.delegateType || p, ut.test(a + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                    s === (n.ownerDocument || k) && f.push(s.defaultView || s.parentWindow || C)
                }
                for (i = 0;
                    (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? a : c.bindType || p, (l = (R.get(o, "events") || {})[e.type] && R.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && F(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !F(n) || u && E.isFunction(n[p]) && !E.isWindow(n) && ((s = n[u]) && (n[u] = null), n[E.event.triggered = p](), E.event.triggered = void 0, s && (n[u] = s)), e.result
            }
        },
        simulate: function (e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? E.event.trigger(e, t, n, !0) : void 0
        }
    }), E.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        E.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), E.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.focusin = "onfocusin" in C, v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, r) {
        var i = function (e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this,
                    t = R.access(e, r);
                t || e.addEventListener(n, i, !0), R.access(e, r, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this,
                    t = R.access(e, r) - 1;
                t ? R.access(e, r, t) : (e.removeEventListener(n, i, !0), R.remove(e, r))
            }
        }
    });
    var lt = C.location,
        ct = E.now(),
        ft = /\?/;
    E.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, E.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
    };
    var pt = /#.*$/,
        dt = /([?&])_=[^&]*/,
        ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gt = /^(?:GET|HEAD)$/,
        vt = /^\/\//,
        mt = {},
        yt = {},
        xt = "*/".concat("*"),
        bt = k.createElement("a");

    function wt(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(L) || [];
            if (E.isFunction(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Tt(t, i, o, s) {
        var a = {},
            u = t === yt;

        function l(e) {
            var r;
            return a[e] = !0, E.each(t[e] || [], function (e, t) {
                var n = t(i, o, s);
                return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }

    function Ct(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e
    }
    bt.href = lt.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: lt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": E.parseJSON,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Ct(Ct(e, E.ajaxSettings), t) : Ct(E.ajaxSettings, e)
        },
        ajaxPrefilter: wt(mt),
        ajaxTransport: wt(yt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, i, g = E.ajaxSetup({}, t),
                v = g.context || g,
                m = g.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                y = E.Deferred(),
                x = E.Callbacks("once memory"),
                b = g.statusCode || {},
                o = {},
                s = {},
                w = 0,
                a = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!n)
                                for (n = {}; t = ht.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (g.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) b[t] = [b[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || a;
                        return c && c.abort(t), u(0, t), this
                    }
                };
            if (y.promise(T).complete = x.add, T.success = T.done, T.error = T.fail, g.url = ((e || g.url || lt.href) + "").replace(pt, "").replace(vt, lt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = E.trim(g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain) {
                r = k.createElement("a");
                try {
                    r.href = g.url, r.href = r.href, g.crossDomain = bt.protocol + "//" + bt.host != r.protocol + "//" + r.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)), Tt(mt, g, t, T), 2 === w) return T;
            for (i in (h = E.event && g.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !gt.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (ft.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = dt.test(f) ? f.replace(dt, "$1_=" + ct++) : f + (ft.test(f) ? "&" : "?") + "_=" + ct++)), g.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, T, g) || 2 === w)) return T.abort();
            for (i in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[i](g[i]);
            if (c = Tt(yt, g, t, T)) {
                if (T.readyState = 1, h && m.trigger("ajaxSend", [T, g]), 2 === w) return T;
                g.async && 0 < g.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, g.timeout));
                try {
                    w = 1, c.send(o, u)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, s, a, u, l = t;
                2 !== w && (w = 2, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(g, T, n)), a = function (e, t, n, r) {
                    var i, o, s, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, T, i), i ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state, o = a.data, i = !(s = a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? y.resolveWith(v, [o, l, T]) : y.rejectWith(v, [T, l, s]), T.statusCode(b), b = void 0, h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : s]), x.fireWith(v, [T, l]), h && (m.trigger("ajaxComplete", [T, g]), --E.active || E.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function (e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function (e, i) {
        E[i] = function (e, t, n, r) {
            return E.isFunction(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E._evalUrl = function (e) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, E.fn.extend({
        wrapAll: function (t) {
            var e;
            return E.isFunction(t) ? this.each(function (e) {
                E(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = E(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (n) {
            return E.isFunction(n) ? this.each(function (e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = E.isFunction(t);
            return this.each(function (e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                E.nodeName(this, "body") || E(this).replaceWith(this.childNodes)
            }).end()
        }
    }), E.expr.filters.hidden = function (e) {
        return !E.expr.filters.visible(e)
    }, E.expr.filters.visible = function (e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var kt = /%20/g,
        Et = /\[\]$/,
        Nt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (E.isArray(e)) E.each(e, function (e, t) {
            r || Et.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== E.type(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                t = E.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = E.ajaxSettings && E.ajaxSettings.traditional), E.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&").replace(kt, "+")
    }, E.fn.extend({
        serialize: function () {
            return E.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !V.test(e))
            }).map(function (e, t) {
                var n = E(this).val();
                return null == n ? null : E.isArray(n) ? E.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    }), E.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var At = {
            0: 200,
            1223: 204
        },
        qt = E.ajaxSettings.xhr();
    v.cors = !!qt && "withCredentials" in qt, v.ajax = qt = !!qt, E.ajaxTransport(function (i) {
        var o, s;
        return v.cors || qt && !i.crossDomain ? {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(At[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), s = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        } : void 0
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain) return {
            send: function (e, t) {
                r = E("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), k.head.appendChild(r[0])
            },
            abort: function () {
                i && i()
            }
        }
    });
    var Lt = [],
        Ht = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Lt.pop() || E.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (Ht.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = E.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ht, "$1" + r) : !1 !== e.jsonp && (e.url += (ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || E.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Lt.push(r)), o && E.isFunction(i) && i(o[0]), o = i = void 0
        }), "script") : void 0
    }), E.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || k;
        var r = b.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ne([e], t, i), i && i.length && E(i).remove(), E.merge([], r.childNodes))
    };
    var Ot = E.fn.load;

    function Ft(e) {
        return E.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    E.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (r = E.trim(e.slice(a)), e = e.slice(0, a)), E.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        E.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), E.expr.filters.animated = function (t) {
        return E.grep(E.timers, function (e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), E.isFunction(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (e = o.documentElement, E.contains(e, r) ? (i = r.getBoundingClientRect(), n = Ft(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === E.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), E.nodeName(e[0], "html") || (r = e.offset()), r.top += E.css(e[0], "borderTopWidth", !0), r.left += E.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - E.css(n, "marginTop", !0),
                    left: t.left - r.left - E.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || De
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function (e) {
            return O(this, function (e, t, n) {
                var r = Ft(e);
                return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function (e, n) {
        E.cssHooks[n] = qe(v.pixelPosition, function (e, t) {
            return t ? (t = Ae(e, n), Ne.test(t) ? E(e).position()[n] + "px" : t) : void 0
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function (o, s) {
        E.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function (r, e) {
            E.fn[e] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return O(this, function (e, t, n) {
                    var r;
                    return E.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), E.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function () {
            return this.length
        }
    }), E.fn.andSelf = E.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return E
    });
    var Pt = C.jQuery,
        Rt = C.$;
    return E.noConflict = function (e) {
        return C.$ === E && (C.$ = Rt), e && C.jQuery === E && (C.jQuery = Pt), E
    }, e || (C.jQuery = C.$ = E), E
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function (t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function (o) {
    "use strict";
    o.fn.emulateTransitionEnd = function (t) {
        var e = !1,
            i = this;
        o(this).one("bsTransitionEnd", function () {
            e = !0
        });
        return setTimeout(function () {
            e || o(i).trigger(o.support.transition.end)
        }, t), this
    }, o(function () {
        o.support.transition = function () {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), o.support.transition && (o.event.special.bsTransitionEnd = {
            bindType: o.support.transition.end,
            delegateType: o.support.transition.end,
            handle: function (t) {
                if (o(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function (s) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        a = function (t) {
            s(t).on("click", e, this.close)
        };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.close = function (t) {
        function e() {
            n.detach().trigger("closed.bs.alert").remove()
        }
        var i = s(this),
            o = i.attr("data-target");
        o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
        var n = s("#" === o ? [] : o);
        t && t.preventDefault(), n.length || (n = i.closest(".alert")), n.trigger(t = s.Event("close.bs.alert")), t.isDefaultPrevented() || (n.removeClass("in"), s.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(a.TRANSITION_DURATION) : e())
    };
    var t = s.fn.alert;
    s.fn.alert = function (i) {
        return this.each(function () {
            var t = s(this),
                e = t.data("bs.alert");
            e || t.data("bs.alert", e = new a(this)), "string" == typeof i && e[i].call(t)
        })
    }, s.fn.alert.Constructor = a, s.fn.alert.noConflict = function () {
        return s.fn.alert = t, this
    }, s(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function (s) {
    "use strict";

    function i(o) {
        return this.each(function () {
            var t = s(this),
                e = t.data("bs.button"),
                i = "object" == typeof o && o;
            e || t.data("bs.button", e = new n(this, i)), "toggle" == o ? e.toggle() : o && e.setState(o)
        })
    }
    var n = function (t, e) {
        this.$element = s(t), this.options = s.extend({}, n.DEFAULTS, e), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (t) {
        var e = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            n = i.data();
        t += "Text", null == n.resetText && i.data("resetText", i[o]()), setTimeout(s.proxy(function () {
            i[o](null == n[t] ? this.options[t] : n[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e).prop(e, !1))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var t = s.fn.button;
    s.fn.button = i, s.fn.button.Constructor = n, s.fn.button.noConflict = function () {
        return s.fn.button = t, this
    }, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        var e = s(t.target).closest(".btn");
        i.call(e, "toggle"), s(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        s(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function (p) {
    "use strict";

    function a(n) {
        return this.each(function () {
            var t = p(this),
                e = t.data("bs.carousel"),
                i = p.extend({}, c.DEFAULTS, t.data(), "object" == typeof n && n),
                o = "string" == typeof n ? n : i.slide;
            e || t.data("bs.carousel", e = new c(this, i)), "number" == typeof n ? e.to(n) : o ? e[o]() : i.interval && e.pause().cycle()
        })
    }
    var c = function (t, e) {
        this.$element = p(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", p.proxy(this.pause, this)).on("mouseleave.bs.carousel", p.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, c.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(p.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, c.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }, c.prototype.to = function (t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t))
    }, c.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && p.support.transition && (this.$element.trigger(p.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, c.prototype.slide = function (t, e) {
        var i = this.$element.find(".item.active"),
            o = e || this.getItemForDirection(t, i),
            n = this.interval,
            s = "next" == t ? "left" : "right",
            a = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var r = o[0],
            l = p.Event("slide.bs.carousel", {
                relatedTarget: r,
                direction: s
            });
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, n && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = p(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var d = p.Event("slid.bs.carousel", {
                relatedTarget: r,
                direction: s
            });
            return p.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
                o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), a.sliding = !1, setTimeout(function () {
                    a.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), n && this.cycle(), this
        }
    };
    var t = p.fn.carousel;
    p.fn.carousel = a, p.fn.carousel.Constructor = c, p.fn.carousel.noConflict = function () {
        return p.fn.carousel = t, this
    };
    var e = function (t) {
        var e, i = p(this),
            o = p(i.attr("data-target") || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var n = p.extend({}, o.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (n.interval = !1), a.call(o, n), s && o.data("bs.carousel").to(s), t.preventDefault()
        }
    };
    p(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), p(window).on("load", function () {
        p('[data-ride="carousel"]').each(function () {
            var t = p(this);
            a.call(t, t.data())
        })
    })
}(jQuery),
function (a) {
    "use strict";

    function n(t) {
        var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return a(i)
    }

    function r(o) {
        return this.each(function () {
            var t = a(this),
                e = t.data("bs.collapse"),
                i = a.extend({}, l.DEFAULTS, t.data(), "object" == typeof o && o);
            !e && i.toggle && /show|hide/.test(o) && (i.toggle = !1), e || t.data("bs.collapse", e = new l(this, i)), "string" == typeof o && e[o]()
        })
    }
    var l = function (t, e) {
        this.$element = a(t), this.options = a.extend({}, l.DEFAULTS, e), this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    l.VERSION = "3.3.7", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
        toggle: !0
    }, l.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, l.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && ((t = e.data("bs.collapse")) && t.transitioning))) {
                var i = a.Event("show.bs.collapse");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                    e && e.length && (r.call(e, "hide"), t || e.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var n = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return n.call(this);
                    var s = a.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[o](this.$element[0][s])
                }
            }
        }
    }, l.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = a.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[e](0).one("bsTransitionEnd", a.proxy(i, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, l.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, l.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (t, e) {
            var i = a(e);
            this.addAriaAndCollapsedClass(n(i), i)
        }, this)).end()
    }, l.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var t = a.fn.collapse;
    a.fn.collapse = r, a.fn.collapse.Constructor = l, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = t, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        var e = a(this);
        e.attr("data-target") || t.preventDefault();
        var i = n(e),
            o = i.data("bs.collapse") ? "toggle" : e.data();
        r.call(i, o)
    })
}(jQuery),
function (a) {
    "use strict";

    function r(t) {
        var e = t.attr("data-target");
        e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var i = e && a(e);
        return i && i.length ? i : t.parent()
    }

    function s(o) {
        o && 3 === o.which || (a(".dropdown-backdrop").remove(), a(l).each(function () {
            var t = a(this),
                e = r(t),
                i = {
                    relatedTarget: this
                };
            e.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && a.contains(e[0], o.target) || (e.trigger(o = a.Event("hide.bs.dropdown", i)), o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", i)))))
        }))
    }
    var l = '[data-toggle="dropdown"]',
        o = function (t) {
            a(t).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.7", o.prototype.toggle = function (t) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var i = r(e),
                o = i.hasClass("open");
            if (s(), !o) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", s);
                var n = {
                    relatedTarget: this
                };
                if (i.trigger(t = a.Event("show.bs.dropdown", n)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(a.Event("shown.bs.dropdown", n))
            }
            return !1
        }
    }, o.prototype.keydown = function (t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = a(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var i = r(e),
                    o = i.hasClass("open");
                if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(l).trigger("focus"), e.trigger("click");
                var n = i.find(".dropdown-menu li:not(.disabled):visible a");
                if (n.length) {
                    var s = n.index(t.target);
                    38 == t.which && 0 < s && s--, 40 == t.which && s < n.length - 1 && s++, ~s || (s = 0), n.eq(s).trigger("focus")
                }
            }
        }
    };
    var t = a.fn.dropdown;
    a.fn.dropdown = function (i) {
        return this.each(function () {
            var t = a(this),
                e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new o(this)), "string" == typeof i && e[i].call(t)
        })
    }, a.fn.dropdown.Constructor = o, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = t, this
    }, a(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", l, o.prototype.toggle).on("keydown.bs.dropdown.data-api", l, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function (s) {
    "use strict";

    function a(o, n) {
        return this.each(function () {
            var t = s(this),
                e = t.data("bs.modal"),
                i = s.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);
            e || t.data("bs.modal", e = new r(this, i)), "string" == typeof o ? e[o](n) : i.show && e.show(n)
        })
    }
    var r = function (t, e) {
        this.options = e, this.$body = s(document.body), this.$element = s(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    r.VERSION = "3.3.7", r.TRANSITION_DURATION = 300, r.BACKDROP_TRANSITION_DURATION = 150, r.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, r.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, r.prototype.show = function (i) {
        var o = this,
            t = s.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (t) {
                s(t.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var t = s.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var e = s.Event("shown.bs.modal", {
                relatedTarget: i
            });
            t ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(r.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e)
        }))
    }, r.prototype.hide = function (t) {
        t && t.preventDefault(), t = s.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), s(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : this.hideModal())
    }, r.prototype.enforceFocus = function () {
        s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, r.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, r.prototype.resize = function () {
        this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal")
    }, r.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, r.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, r.prototype.backdrop = function (t) {
        var e = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = s.support.transition && i;
            if (this.$backdrop = s(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", s.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var n = function () {
                e.removeBackdrop(), t && t()
            };
            s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : n()
        } else t && t()
    }, r.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, r.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, r.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, r.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, r.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, r.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, r.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var t = s.fn.modal;
    s.fn.modal = a, s.fn.modal.Constructor = r, s.fn.modal.noConflict = function () {
        return s.fn.modal = t, this
    }, s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var e = s(this),
            i = e.attr("href"),
            o = s(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            n = o.data("bs.modal") ? "toggle" : s.extend({
                remote: !/#/.test(i) && i
            }, o.data(), e.data());
        e.is("a") && t.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                e.is(":visible") && e.trigger("focus")
            })
        }), a.call(o, n, this)
    })
}(jQuery),
function (g) {
    "use strict";
    var m = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    m.VERSION = "3.3.7", m.TRANSITION_DURATION = 150, m.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, m.prototype.init = function (t, e, i) {
        if (this.enabled = !0, this.type = t, this.$element = g(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && g(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
            var s = o[n];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    r = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, g.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = g.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, m.prototype.getDefaults = function () {
        return m.DEFAULTS
    }, m.prototype.getOptions = function (t) {
        return (t = g.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, m.prototype.getDelegateOptions = function () {
        var i = {},
            o = this.getDefaults();
        return this._options && g.each(this._options, function (t, e) {
            o[t] != e && (i[t] = e)
        }), i
    }, m.prototype.enter = function (t) {
        var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState ? void(e.hoverState = "in") : (clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function () {
            "in" == e.hoverState && e.show()
        }, e.options.delay.show)) : e.show())
    }, m.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, m.prototype.leave = function (t) {
        var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) return clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function () {
            "out" == e.hoverState && e.hide()
        }, e.options.delay.hide)) : e.hide()
    }, m.prototype.show = function () {
        var t = g.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !e) return;
            var i = this,
                o = this.tip(),
                n = this.getUID(this.type);
            this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                r = a.test(s);
            r && (s = s.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition(),
                h = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (r) {
                var p = s,
                    c = this.getPosition(this.$viewport);
                s = "bottom" == s && l.bottom + d > c.bottom ? "top" : "top" == s && l.top - d < c.top ? "bottom" : "right" == s && l.right + h > c.width ? "left" : "left" == s && l.left - h < c.left ? "right" : s, o.removeClass(p).addClass(s)
            }
            var f = this.getCalculatedOffset(s, l, h, d);
            this.applyPlacement(f, s);
            var u = function () {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            g.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", u).emulateTransitionEnd(m.TRANSITION_DURATION) : u()
        }
    }, m.prototype.applyPlacement = function (t, e) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            n = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, g.offset.setOffset(i[0], g.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), i.addClass("in");
        var r = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == e && l != n && (t.top = t.top + n - l);
        var h = this.getViewportAdjustedDelta(e, t, r, l);
        h.left ? t.left += h.left : t.top += h.top;
        var d = /top|bottom/.test(e),
            p = d ? 2 * h.left - o + r : 2 * h.top - n + l,
            c = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][c], d)
    }, m.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, m.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, m.prototype.hide = function (t) {
        function e() {
            "in" != i.hoverState && o.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
        }
        var i = this,
            o = g(this.$tip),
            n = g.Event("hide.bs." + this.type);
        if (this.$element.trigger(n), !n.isDefaultPrevented()) return o.removeClass("in"), g.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(m.TRANSITION_DURATION) : e(), this.hoverState = null, this
    }, m.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, m.prototype.hasContent = function () {
        return this.getTitle()
    }, m.prototype.getPosition = function (t) {
        var e = (t = t || this.$element)[0],
            i = "BODY" == e.tagName,
            o = e.getBoundingClientRect();
        null == o.width && (o = g.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var n = window.SVGElement && e instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : n ? null : t.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            r = i ? {
                width: g(window).width(),
                height: g(window).height()
            } : null;
        return g.extend({}, o, a, r, s)
    }, m.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, m.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, m.prototype.getTitle = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, m.prototype.getUID = function (t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
    }, m.prototype.tip = function () {
        if (!this.$tip && (this.$tip = g(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, m.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, m.prototype.enable = function () {
        this.enabled = !0
    }, m.prototype.disable = function () {
        this.enabled = !1
    }, m.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, m.prototype.toggle = function (t) {
        var e = this;
        t && ((e = g(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, m.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var t = g.fn.tooltip;
    g.fn.tooltip = function (o) {
        return this.each(function () {
            var t = g(this),
                e = t.data("bs.tooltip"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.tooltip", e = new m(this, i)), "string" == typeof o && e[o]())
        })
    }, g.fn.tooltip.Constructor = m, g.fn.tooltip.noConflict = function () {
        return g.fn.tooltip = t, this
    }
}(jQuery),
function (n) {
    "use strict";
    var s = function (t, e) {
        this.init("popover", t, e)
    };
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.3.7", s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function () {
        return s.DEFAULTS
    }, s.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, s.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, s.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, s.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var t = n.fn.popover;
    n.fn.popover = function (o) {
        return this.each(function () {
            var t = n(this),
                e = t.data("bs.popover"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.popover", e = new s(this, i)), "string" == typeof o && e[o]())
        })
    }, n.fn.popover.Constructor = s, n.fn.popover.noConflict = function () {
        return n.fn.popover = t, this
    }
}(jQuery),
function (s) {
    "use strict";

    function n(t, e) {
        this.$body = s(document.body), this.$scrollElement = s(s(t).is(document.body) ? window : t), this.options = s.extend({}, n.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)), this.refresh(), this.process()
    }

    function e(o) {
        return this.each(function () {
            var t = s(this),
                e = t.data("bs.scrollspy"),
                i = "object" == typeof o && o;
            e || t.data("bs.scrollspy", e = new n(this, i)), "string" == typeof o && e[o]()
        })
    }
    n.VERSION = "3.3.7", n.DEFAULTS = {
        offset: 10
    }, n.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, n.prototype.refresh = function () {
        var t = this,
            o = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), s.isWindow(this.$scrollElement[0]) || (o = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var t = s(this),
                e = t.data("target") || t.attr("href"),
                i = /^#./.test(e) && s(e);
            return i && i.length && i.is(":visible") && [
                [i[o]().top + n, e]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, n.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), o <= e) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, n.prototype.activate = function (t) {
        this.activeTarget = t, this.clear();
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = s(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, n.prototype.clear = function () {
        s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var t = s.fn.scrollspy;
    s.fn.scrollspy = e, s.fn.scrollspy.Constructor = n, s.fn.scrollspy.noConflict = function () {
        return s.fn.scrollspy = t, this
    }, s(window).on("load.bs.scrollspy.data-api", function () {
        s('[data-spy="scroll"]').each(function () {
            var t = s(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function (r) {
    "use strict";

    function e(i) {
        return this.each(function () {
            var t = r(this),
                e = t.data("bs.tab");
            e || t.data("bs.tab", e = new a(this)), "string" == typeof i && e[i]()
        })
    }
    var a = function (t) {
        this.element = r(t)
    };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.show = function () {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = e.find(".active:last a"),
                n = r.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                s = r.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(n), t.trigger(s), !s.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var a = r(i);
                this.activate(t.closest("li"), e), this.activate(a, a.parent(), function () {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, a.prototype.activate = function (t, e, i) {
        function o() {
            n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var n = e.find("> .active"),
            s = i && r.support.transition && (n.length && n.hasClass("fade") || !!e.find("> .fade").length);
        n.length && s ? n.one("bsTransitionEnd", o).emulateTransitionEnd(a.TRANSITION_DURATION) : o(), n.removeClass("in")
    };
    var t = r.fn.tab;
    r.fn.tab = e, r.fn.tab.Constructor = a, r.fn.tab.noConflict = function () {
        return r.fn.tab = t, this
    };
    var i = function (t) {
        t.preventDefault(), e.call(r(this), "show")
    };
    r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function (l) {
    "use strict";

    function i(o) {
        return this.each(function () {
            var t = l(this),
                e = t.data("bs.affix"),
                i = "object" == typeof o && o;
            e || t.data("bs.affix", e = new h(this, i)), "string" == typeof o && e[o]()
        })
    }
    var h = function (t, e) {
        this.options = l.extend({}, h.DEFAULTS, e), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    h.VERSION = "3.3.7", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
        offset: 0,
        target: window
    }, h.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return n <= i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top;
        return null != i && n <= i ? "top" : null != o && t - o <= l + (r ? a : e) && "bottom"
    }, h.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(h.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, h.prototype.checkPositionWithEventLoop = function () {
        setTimeout(l.proxy(this.checkPosition, this), 1)
    }, h.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                e = this.options.offset,
                i = e.top,
                o = e.bottom,
                n = Math.max(l(document).height(), l(document.body).height());
            "object" != typeof e && (o = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof o && (o = e.bottom(this.$element));
            var s = this.getState(n, t, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (s ? "-" + s : ""),
                    r = l.Event(a + ".bs.affix");
                if (this.$element.trigger(r), r.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: n - t - o
            })
        }
    };
    var t = l.fn.affix;
    l.fn.affix = i, l.fn.affix.Constructor = h, l.fn.affix.noConflict = function () {
        return l.fn.affix = t, this
    }, l(window).on("load", function () {
        l('[data-spy="affix"]').each(function () {
            var t = l(this),
                e = t.data();
            e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e)
        })
    })
}(jQuery);
! function (f) {
    var n = [],
        o = !1,
        p = !1,
        s = {
            interval: 250,
            force_process: !1
        },
        u = f(window),
        c = [];

    function l() {
        p = !1;
        for (var e = 0, r = n.length; e < r; e++) {
            var t = (a = n[e], f(a).filter(function () {
                return f(this).is(":appeared")
            }));
            if (t.trigger("appear", [t]), c[e]) {
                var i = c[e].not(t);
                i.trigger("disappear", [i])
            }
            c[e] = t
        }
        var a
    }
    f.expr[":"].appeared = function (e) {
        var r = f(e);
        if (!r.is(":visible")) return !1;
        var t = u.scrollLeft(),
            i = u.scrollTop(),
            a = r.offset(),
            n = a.left,
            o = a.top;
        return o + r.height() >= i && o - (r.data("appear-top-offset") || 0) <= i + u.height() && n + r.width() >= t && n - (r.data("appear-left-offset") || 0) <= t + u.width()
    }, f.fn.extend({
        appear: function (e) {
            var r, t = f.extend({}, s, e || {}),
                i = this.selector || this;
            if (!o) {
                var a = function () {
                    p || (p = !0, setTimeout(l, t.interval))
                };
                f(window).scroll(a).resize(a), o = !0
            }
            return t.force_process && setTimeout(l, t.interval), r = i, n.push(r), c.push(), f(i)
        }
    }), f.extend({
        force_appear: function () {
            return !!o && (l(), !0)
        }
    })
}("undefined" != typeof module ? require("jquery") : jQuery);
! function (I) {
    I.fn.hoverIntent = function (e, t, n) {
        var o, r, v, i, u = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        u = "object" == typeof e ? I.extend(u, e) : I.isFunction(t) ? I.extend(u, {
            over: e,
            out: t,
            selector: n
        }) : I.extend(u, {
            over: e,
            out: e,
            selector: t
        });
        var s = function (e) {
                o = e.pageX, r = e.pageY
            },
            h = function (e, t) {
                if (t.hoverIntent_t = clearTimeout(t.hoverIntent_t), Math.abs(v - o) + Math.abs(i - r) < u.sensitivity) return I(t).off("mousemove.hoverIntent", s), t.hoverIntent_s = 1, u.over.apply(t, [e]);
                v = o, i = r, t.hoverIntent_t = setTimeout(function () {
                    h(e, t)
                }, u.interval)
            },
            a = function (e) {
                var n = jQuery.extend({}, e),
                    o = this;
                o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" == e.type ? (v = n.pageX, i = n.pageY, I(o).on("mousemove.hoverIntent", s), 1 != o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function () {
                    h(n, o)
                }, u.interval))) : (I(o).off("mousemove.hoverIntent", s), 1 == o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function () {
                    var e, t;
                    e = n, (t = o).hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, u.out.apply(t, [e])
                }, u.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": a,
            "mouseleave.hoverIntent": a
        }, u.selector)
    }
}(jQuery);
! function (i, e) {
    "use strict";
    var s, o, r, n, t, a, h, l, p, u, f, c, d, v, m, y, C, w, g = (r = "sf-breadcrumb", n = "sf-js-enabled", t = "sf-with-ul", a = "sf-arrows", (o = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent)) && i("html").css("cursor", "pointer").on("click", i.noop), h = o, l = "behavior" in (s = document.documentElement.style) && "fill" in s && /iemobile/i.test(navigator.userAgent), p = !!e.PointerEvent, u = function (e, s, o) {
        var t = n;
        s.cssArrows && (t += " " + a), e[o ? "addClass" : "removeClass"](t)
    }, f = function (e, s) {
        var o = s ? "addClass" : "removeClass";
        e.children("a")[o](t)
    }, c = function (e) {
        var s = e.css("ms-touch-action"),
            o = e.css("touch-action");
        o = "pan-y" === (o = o || s) ? "auto" : "pan-y", e.css({
            "ms-touch-action": o,
            "touch-action": o
        })
    }, d = function (e) {
        return e.closest("." + n)
    }, v = function (e) {
        return d(e).data("sfOptions")
    }, m = function () {
        var e = i(this),
            s = v(e);
        clearTimeout(s.sfTimer), e.siblings().superfish("hide").end().superfish("show")
    }, y = function (e) {
        e.retainPath = -1 < i.inArray(this[0], e.$path), this.superfish("hide"), this.parents("." + e.hoverClass).length || (e.onIdle.call(d(this)), e.$path.length && i.proxy(m, e.$path)())
    }, C = function () {
        var e = i(this),
            s = v(e);
        h ? i.proxy(y, e, s)() : (clearTimeout(s.sfTimer), s.sfTimer = setTimeout(i.proxy(y, e, s), s.delay))
    }, w = function (e) {
        var s = i(this),
            o = v(s),
            t = s.siblings(e.data.popUpSelector);
        if (!1 === o.onHandleTouch.call(t)) return this;
        0 < t.length && t.is(":hidden") && (s.one("click.superfish", !1), "MSPointerDown" === e.type || "pointerdown" === e.type ? s.trigger("focus") : i.proxy(m, s.parent("li"))())
    }, {
        hide: function (e) {
            if (this.length) {
                var s = v(this);
                if (!s) return this;
                var o = !0 === s.retainPath ? s.$path : "",
                    t = this.find("li." + s.hoverClass).add(this).not(o).removeClass(s.hoverClass).children(s.popUpSelector),
                    n = s.speedOut;
                if (e && (t.show(), n = 0), (s.retainPath = !1) === s.onBeforeHide.call(t)) return this;
                t.stop(!0, !0).animate(s.animationOut, n, function () {
                    var e = i(this);
                    s.onHide.call(e)
                })
            }
            return this
        },
        show: function () {
            var e = v(this);
            if (!e) return this;
            var s = this.addClass(e.hoverClass).children(e.popUpSelector);
            return !1 === e.onBeforeShow.call(s) || s.stop(!0, !0).animate(e.animation, e.speed, function () {
                e.onShow.call(s)
            }), this
        },
        destroy: function () {
            return this.each(function () {
                var e, s = i(this),
                    o = s.data("sfOptions");
                if (!o) return !1;
                e = s.find(o.popUpSelector).parent("li"), clearTimeout(o.sfTimer), u(s, o), f(e), c(s), s.off(".superfish").off(".hoverIntent"), e.children(o.popUpSelector).attr("style", function (e, s) {
                    return s.replace(/display[^;]+;?/g, "")
                }), o.$path.removeClass(o.hoverClass + " " + r).addClass(o.pathClass), s.find("." + o.hoverClass).removeClass(o.hoverClass), o.onDestroy.call(s), s.removeData("sfOptions")
            })
        },
        init: function (n) {
            return this.each(function () {
                var e = i(this);
                if (e.data("sfOptions")) return !1;
                var s, o = i.extend({}, i.fn.superfish.defaults, n),
                    t = e.find(o.popUpSelector).parent("li");
                o.$path = (s = o, e.find("li." + s.pathClass).slice(0, s.pathLevels).addClass(s.hoverClass + " " + r).filter(function () {
                        return i(this).children(s.popUpSelector).hide().show().length
                    }).removeClass(s.pathClass)), e.data("sfOptions", o), u(e, o, !0), f(t, !0), c(e),
                    function (e, s) {
                        var o = "li:has(" + s.popUpSelector + ")";
                        i.fn.hoverIntent && !s.disableHI ? e.hoverIntent(m, C, o) : e.on("mouseenter.superfish", o, m).on("mouseleave.superfish", o, C);
                        var t = "MSPointerDown.superfish";
                        p && (t = "pointerdown.superfish"), h || (t += " touchend.superfish"), l && (t += " mousedown.superfish"), e.on("focusin.superfish", "li", m).on("focusout.superfish", "li", C).on(t, "a", s, w)
                    }(e, o), t.not("." + r).superfish("hide", !0), o.onInit.call(this)
            })
        }
    });
    i.fn.superfish = function (e, s) {
        return g[e] ? g[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? i.error("Method " + e + " does not exist on jQuery.fn.superfish") : g.init.apply(this, arguments)
    }, i.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: i.noop,
        onBeforeShow: i.noop,
        onShow: i.noop,
        onBeforeHide: i.noop,
        onHide: i.noop,
        onIdle: i.noop,
        onDestroy: i.noop,
        onHandleTouch: i.noop
    }
}(jQuery, window);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    },
    easeInQuad: function (n, e, t, u, a) {
        return u * (e /= a) * e + t
    },
    easeOutQuad: function (n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    },
    easeInOutQuad: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function (n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    },
    easeOutCubic: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    },
    easeInOutCubic: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    },
    easeOutQuart: function (n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    },
    easeOutQuint: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function (n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    },
    easeOutSine: function (n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    },
    easeInOutSine: function (n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    },
    easeInExpo: function (n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    },
    easeOutExpo: function (n, e, t, u, a) {
        return e == a ? t + u : u * (1 - Math.pow(2, -10 * e / a)) + t
    },
    easeInOutExpo: function (n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (2 - Math.pow(2, -10 * --e)) + t
    },
    easeInCirc: function (n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    },
    easeOutCirc: function (n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    },
    easeInOutCirc: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function (n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) + t
    },
    easeOutElastic: function (n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    },
    easeInOutElastic: function (n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * -.5 + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    },
    easeInBack: function (n, e, t, u, a, r) {
        return null == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    },
    easeOutBack: function (n, e, t, u, a, r) {
        return null == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    },
    easeInOutBack: function (n, e, t, u, a, r) {
        return null == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : u / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t
    },
    easeInBounce: function (n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    },
    easeOutBounce: function (n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : e < 2 / 2.75 ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function (n, e, t, u, a) {
        return e < a / 2 ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
});
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (s) {
    function n(e, t, o) {
        var n = t.hash.slice(1),
            i = document.getElementById(n) || document.getElementsByName(n)[0];
        if (i) {
            e && e.preventDefault();
            var a = s(o.target);
            if (!(o.lock && a.is(":animated") || o.onBefore && !1 === o.onBefore(e, i, a))) {
                if (o.stop && a.stop(!0), o.hash) {
                    var l = i.id === n ? "id" : "name",
                        r = s("<a> </a>").attr(l, n).css({
                            position: "absolute",
                            top: s(window).scrollTop(),
                            left: s(window).scrollLeft()
                        });
                    i[l] = "", s("body").prepend(r), location.hash = t.hash, r.remove(), i[l] = n
                }
                a.scrollTo(i, o).trigger("notify.serialScroll", [i])
            }
        }
    }
    var e = location.href.replace(/#.*/, ""),
        i = s.localScroll = function (e) {
            s("body").localScroll(e)
        };
    return i.defaults = {
        duration: 1e3,
        axis: "y",
        event: "click",
        stop: !0,
        target: window,
        autoscroll: !0
    }, s.fn.localScroll = function (t) {
        function o() {
            return !!this.href && !!this.hash && this.href.replace(this.hash, "") === e && (!t.filter || s(this).is(t.filter))
        }
        return (t = s.extend({}, i.defaults, t)).autoscroll && t.hash && location.hash && (t.target && window.scrollTo(0, 0), n(0, location, t)), t.lazy ? this.on(t.event, "a,area", function (e) {
            o.call(this) && n(e, this, t)
        }) : this.find("a,area").filter(o).bind(t.event, function (e) {
            n(e, this, t)
        }).end().end()
    }, i.hash = function () {}, i
});
! function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (s) {
    "use strict";

    function v(e) {
        return !e.nodeName || -1 !== s.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function t(e) {
        return s.isFunction(e) || s.isPlainObject(e) ? e : {
            top: e,
            left: e
        }
    }
    var w = s.scrollTo = function (e, t, o) {
        return s(window).scrollTo(e, t, o)
    };
    return w.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    }, s.fn.scrollTo = function (e, o, h) {
        "object" == typeof o && (h = o, o = 0), "function" == typeof h && (h = {
            onAfter: h
        }), "max" === e && (e = 9e9), h = s.extend({}, w.defaults, h), o = o || h.duration;
        var x = h.queue && 1 < h.axis.length;
        return x && (o /= 2), h.offset = t(h.offset), h.over = t(h.over), this.each(function () {
            function a(e) {
                var t = s.extend({}, h, {
                    queue: !0,
                    duration: o,
                    complete: e && function () {
                        e.call(c, d, h)
                    }
                });
                l.animate(m, t)
            }
            if (null !== e) {
                var u, f = v(this),
                    c = f ? this.contentWindow || window : this,
                    l = s(c),
                    d = e,
                    m = {};
                switch (typeof d) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)) {
                            d = t(d);
                            break
                        }
                        d = f ? s(d) : s(d, c);
                    case "object":
                        if (0 === d.length) return;
                        (d.is || d.style) && (u = (d = s(d)).offset())
                }
                var p = s.isFunction(h.offset) && h.offset(c, d) || h.offset;
                s.each(h.axis.split(""), function (e, t) {
                    var o = "x" === t ? "Left" : "Top",
                        n = o.toLowerCase(),
                        r = "scroll" + o,
                        i = l[r](),
                        s = w.max(c, t);
                    u ? (m[r] = u[n] + (f ? 0 : i - l.offset()[n]), h.margin && (m[r] -= parseInt(d.css("margin" + o), 10) || 0, m[r] -= parseInt(d.css("border" + o + "Width"), 10) || 0), m[r] += p[n] || 0, h.over[n] && (m[r] += d["x" === t ? "width" : "height"]() * h.over[n])) : (o = d[n], m[r] = o.slice && "%" === o.slice(-1) ? parseFloat(o) / 100 * s : o), h.limit && /^\d+$/.test(m[r]) && (m[r] = m[r] <= 0 ? 0 : Math.min(m[r], s)), !e && 1 < h.axis.length && (i === m[r] ? m = {} : x && (a(h.onAfterFirst), m = {}))
                }), a(h.onAfter)
            }
        })
    }, w.max = function (e, t) {
        var o = "scroll" + (n = "x" === t ? "Width" : "Height");
        if (!v(e)) return e[o] - s(e)[n.toLowerCase()]();
        var n = "client" + n,
            r = (i = e.ownerDocument || e.document).documentElement,
            i = i.body;
        return Math.max(r[o], i[o]) - Math.min(r[n], i[n])
    }, s.Tween.propHooks.scrollLeft = s.Tween.propHooks.scrollTop = {
        get: function (e) {
            return s(e.elem)[e.prop]()
        },
        set: function (e) {
            var t = this.get(e);
            if (e.options.interrupt && e._last && e._last !== t) return s(e.elem).stop();
            var o = Math.round(e.now);
            t !== o && (s(e.elem)[e.prop](o), e._last = this.get(e))
        }
    }, w
});
! function (l, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof exports ? require("jquery") : l.jQuery)
}(this, function (b) {
    "use strict";

    function s(l) {
        if (x.webkit && !l) return {
            height: 0,
            width: 0
        };
        if (!x.data.outer) {
            var e = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            x.data.inner = b("<div>").css(b.extend({}, e)), x.data.outer = b("<div>").css(b.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, e)).append(x.data.inner).appendTo("body")
        }
        return x.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(x.data.outer.offset().top - x.data.inner.offset().top || 0),
            width: Math.ceil(x.data.outer.offset().left - x.data.inner.offset().left || 0)
        }
    }

    function g(l) {
        var e = l.originalEvent;
        return !(e.axis && e.axis === e.HORIZONTAL_AXIS || e.wheelDeltaX)
    }
    var x = {
        data: {
            index: 0,
            name: "scrollbar"
        },
        firefox: /firefox/i.test(navigator.userAgent),
        macosx: /mac/i.test(navigator.platform),
        msedge: /edge\/\d+/i.test(navigator.userAgent),
        msie: /(msie|trident)/i.test(navigator.userAgent),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };
    x.scrolls.add = function (l) {
        this.remove(l).push(l)
    };
    var o = {
            autoScrollSize: !0,
            autoUpdate: !0,
            debug: !(x.scrolls.remove = function (l) {
                for (; 0 <= b.inArray(l, this);) this.splice(b.inArray(l, this), 1);
                return this
            }),
            disableBodyScroll: !1,
            duration: 200,
            ignoreMobile: !1,
            ignoreOverlay: !1,
            isRtl: !1,
            scrollStep: 30,
            showArrows: !1,
            stepScrolling: !0,
            scrollx: null,
            scrolly: null,
            onDestroy: null,
            onFallback: null,
            onInit: null,
            onScroll: null,
            onUpdate: null
        },
        l = function (l) {
            var e;
            x.scroll || (x.overlay = !((e = s(!0)).height || e.width), x.scroll = s(), c(), b(window).resize(function () {
                var l = !1;
                if (x.scroll && (x.scroll.height || x.scroll.width)) {
                    var e = s();
                    e.height === x.scroll.height && e.width === x.scroll.width || (x.scroll = e, l = !0)
                }
                c(l)
            })), this.container = l, this.namespace = ".scrollbar_" + x.data.index++, this.options = b.extend({}, o, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, l.data(x.data.name, this), x.scrolls.add(this)
        };
    l.prototype = {
        destroy: function () {
            if (this.wrapper) {
                this.container.removeData(x.data.name), x.scrolls.remove(this);
                var l = this.container.scrollLeft(),
                    e = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(l).scrollTop(e), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace), this.wrapper.remove(), b(document).add("body").off(this.namespace), b.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        },
        init: function (l) {
            var u = this,
                p = this.container,
                r = this.containerWrapper || p,
                f = this.namespace,
                v = b.extend(this.options, l || {}),
                m = {
                    x: this.scrollx,
                    y: this.scrolly
                },
                s = this.wrapper,
                e = {},
                o = {
                    scrollLeft: p.scrollLeft(),
                    scrollTop: p.scrollTop()
                };
            if (x.mobile && v.ignoreMobile || x.overlay && v.ignoreOverlay || x.macosx && !x.webkit) return b.isFunction(v.onFallback) && v.onFallback.apply(this, [p]), !1;
            if (s)(e = {
                height: "auto",
                "margin-bottom": -1 * x.scroll.height + "px",
                "max-height": ""
            })[v.isRtl ? "margin-left" : "margin-right"] = -1 * x.scroll.width + "px", r.css(e);
            else {
                if (this.wrapper = s = b("<div>").addClass("scroll-wrapper").addClass(p.attr("class")).css("position", "absolute" === p.css("position") ? "absolute" : "relative").insertBefore(p).append(p), v.isRtl && s.addClass("scroll--rtl"), p.is("textarea") && (this.containerWrapper = r = b("<div>").insertBefore(p).append(p), s.addClass("scroll-textarea")), (e = {
                        height: "auto",
                        "margin-bottom": -1 * x.scroll.height + "px",
                        "max-height": ""
                    })[v.isRtl ? "margin-left" : "margin-right"] = -1 * x.scroll.width + "px", r.addClass("scroll-content").css(e), p.on("scroll" + f, function (l) {
                        var e = p.scrollLeft(),
                            s = p.scrollTop();
                        if (v.isRtl) switch (!0) {
                            case x.firefox:
                                e = Math.abs(e);
                            case x.msedge || x.msie:
                                e = p[0].scrollWidth - p[0].clientWidth - e
                        }
                        b.isFunction(v.onScroll) && v.onScroll.call(u, {
                            maxScroll: m.y.maxScrollOffset,
                            scroll: s,
                            size: m.y.size,
                            visible: m.y.visible
                        }, {
                            maxScroll: m.x.maxScrollOffset,
                            scroll: e,
                            size: m.x.size,
                            visible: m.x.visible
                        }), m.x.isVisible && m.x.scroll.bar.css("left", e * m.x.kx + "px"), m.y.isVisible && m.y.scroll.bar.css("top", s * m.y.kx + "px")
                    }), s.on("scroll" + f, function () {
                        s.scrollTop(0).scrollLeft(0)
                    }), v.disableBodyScroll) {
                    var t = function (l) {
                        g(l) ? m.y.isVisible && m.y.mousewheel(l) : m.x.isVisible && m.x.mousewheel(l)
                    };
                    s.on("MozMousePixelScroll" + f, t), s.on("mousewheel" + f, t), x.mobile && s.on("touchstart" + f, function (l) {
                        var e = l.originalEvent.touches && l.originalEvent.touches[0] || l,
                            s = e.pageX,
                            o = e.pageY,
                            r = p.scrollLeft(),
                            t = p.scrollTop();
                        b(document).on("touchmove" + f, function (l) {
                            var e = l.originalEvent.targetTouches && l.originalEvent.targetTouches[0] || l;
                            p.scrollLeft(r + s - e.pageX), p.scrollTop(t + o - e.pageY), l.preventDefault()
                        }), b(document).on("touchend" + f, function () {
                            b(document).off(f)
                        })
                    })
                }
                b.isFunction(v.onInit) && v.onInit.apply(this, [p])
            }
            b.each(m, function (r, t) {
                var i = null,
                    n = 1,
                    a = "x" === r ? "scrollLeft" : "scrollTop",
                    c = v.scrollStep,
                    d = function () {
                        var l = p[a]();
                        p[a](l + c), 1 == n && h <= l + c && (l = p[a]()), -1 == n && l + c <= h && (l = p[a]()), p[a]() == l && i && i()
                    },
                    h = 0;
                t.scroll || (t.scroll = u._getScroll(v["scroll" + r]).addClass("scroll-" + r), v.showArrows && t.scroll.addClass("scroll-element_arrows_visible"), t.mousewheel = function (l) {
                    if (!t.isVisible || "x" === r && g(l)) return !0;
                    if ("y" === r && !g(l)) return m.x.mousewheel(l), !0;
                    var e = -1 * l.originalEvent.wheelDelta || l.originalEvent.detail,
                        s = t.size - t.visible - t.offset;
                    return e || ("x" === r && l.originalEvent.deltaX ? e = 40 * l.originalEvent.deltaX : "y" === r && l.originalEvent.deltaY && (e = 40 * l.originalEvent.deltaY)), (0 < e && h < s || e < 0 && 0 < h) && ((h += e) < 0 && (h = 0), s < h && (h = s), u.scrollTo = u.scrollTo || {}, u.scrollTo[a] = h, setTimeout(function () {
                        u.scrollTo && (p.stop().animate(u.scrollTo, 240, "linear", function () {
                            h = p[a]()
                        }), u.scrollTo = null)
                    }, 1)), l.preventDefault(), !1
                }, t.scroll.on("MozMousePixelScroll" + f, t.mousewheel).on("mousewheel" + f, t.mousewheel).on("mouseenter" + f, function () {
                    h = p[a]()
                }), t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + f, function (l) {
                    if (1 != l.which) return !0;
                    n = 1;
                    var e = {
                            eventOffset: l["x" === r ? "pageX" : "pageY"],
                            maxScrollValue: t.size - t.visible - t.offset,
                            scrollbarOffset: t.scroll.bar.offset()["x" === r ? "left" : "top"],
                            scrollbarSize: t.scroll.bar["x" === r ? "outerWidth" : "outerHeight"]()
                        },
                        s = 0,
                        o = 0;
                    if (b(this).hasClass("scroll-arrow")) {
                        if (n = b(this).hasClass("scroll-arrow_more") ? 1 : -1, c = v.scrollStep * n, h = 0 < n ? e.maxScrollValue : 0, v.isRtl) switch (!0) {
                            case x.firefox:
                                h = 0 < n ? 0 : -1 * e.maxScrollValue;
                                break;
                            case x.msie || x.msedge:
                        }
                    } else n = e.scrollbarOffset + e.scrollbarSize < e.eventOffset ? 1 : e.eventOffset < e.scrollbarOffset ? -1 : 0, "x" === r && v.isRtl && (x.msie || x.msedge) && (n *= -1), c = Math.round(.75 * t.visible) * n, h = e.eventOffset - e.scrollbarOffset - (v.stepScrolling ? 1 == n ? e.scrollbarSize : 0 : Math.round(e.scrollbarSize / 2)), h = p[a]() + h / t.kx;
                    return u.scrollTo = u.scrollTo || {}, u.scrollTo[a] = v.stepScrolling ? p[a]() + c : h, v.stepScrolling && (i = function () {
                        h = p[a](), clearInterval(o), clearTimeout(s), o = s = 0
                    }, s = setTimeout(function () {
                        o = setInterval(d, 40)
                    }, v.duration + 100)), setTimeout(function () {
                        u.scrollTo && (p.animate(u.scrollTo, v.duration), u.scrollTo = null)
                    }, 1), u._handleMouseDown(i, l)
                }), t.scroll.bar.on("mousedown" + f, function (l) {
                    if (1 != l.which) return !0;
                    var s = l["x" === r ? "pageX" : "pageY"],
                        o = p[a]();
                    return t.scroll.addClass("scroll-draggable"), b(document).on("mousemove" + f, function (l) {
                        var e = parseInt((l["x" === r ? "pageX" : "pageY"] - s) / t.kx, 10);
                        "x" === r && v.isRtl && (x.msie || x.msedge) && (e *= -1), p[a](o + e)
                    }), u._handleMouseDown(function () {
                        t.scroll.removeClass("scroll-draggable"), h = p[a]()
                    }, l)
                }))
            }), b.each(m, function (l, e) {
                var s = "scroll-scroll" + l + "_visible",
                    o = "x" == l ? m.y : m.x;
                e.scroll.removeClass(s), o.scroll.removeClass(s), r.removeClass(s)
            }), b.each(m, function (l, e) {
                b.extend(e, "x" == l ? {
                    offset: parseInt(p.css("left"), 10) || 0,
                    size: p.prop("scrollWidth"),
                    visible: s.width()
                } : {
                    offset: parseInt(p.css("top"), 10) || 0,
                    size: p.prop("scrollHeight"),
                    visible: s.height()
                })
            }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), b.isFunction(v.onUpdate) && v.onUpdate.apply(this, [p]), b.each(m, function (l, e) {
                var s = "x" === l ? "left" : "top",
                    o = "x" === l ? "outerWidth" : "outerHeight",
                    r = "x" === l ? "width" : "height",
                    t = parseInt(p.css(s), 10) || 0,
                    i = e.size,
                    n = e.visible + t,
                    a = e.scroll.size[o]() + (parseInt(e.scroll.size.css(s), 10) || 0);
                v.autoScrollSize && (e.scrollbarSize = parseInt(a * n / i, 10), e.scroll.bar.css(r, e.scrollbarSize + "px")), e.scrollbarSize = e.scroll.bar[o](), e.kx = (a - e.scrollbarSize) / (i - n) || 1, e.maxScrollOffset = i - n
            }), p.scrollLeft(o.scrollLeft).scrollTop(o.scrollTop).trigger("scroll")
        },
        _getScroll: function (l) {
            var e = {
                advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
            };
            return e[l] && (l = e[l]), l || (l = e.simple), l = "string" == typeof l ? b(l).appendTo(this.wrapper) : b(l), b.extend(l, {
                bar: l.find(".scroll-bar"),
                size: l.find(".scroll-element_size"),
                track: l.find(".scroll-element_track")
            }), l
        },
        _handleMouseDown: function (l, e) {
            var s = this.namespace;
            return b(document).on("blur" + s, function () {
                b(document).add("body").off(s), l && l()
            }), b(document).on("dragstart" + s, function (l) {
                return l.preventDefault(), !1
            }), b(document).on("mouseup" + s, function () {
                b(document).add("body").off(s), l && l()
            }), b("body").on("selectstart" + s, function (l) {
                return l.preventDefault(), !1
            }), e && e.preventDefault(), !1
        },
        _updateScroll: function (l, e) {
            var s = this.container,
                o = this.containerWrapper || s,
                r = "scroll-scroll" + l + "_visible",
                t = "x" === l ? this.scrolly : this.scrollx,
                i = parseInt(this.container.css("x" === l ? "left" : "top"), 10) || 0,
                n = this.wrapper,
                a = e.size,
                c = e.visible + i;
            e.isVisible = 1 < a - c, e.isVisible ? (e.scroll.addClass(r), t.scroll.addClass(r), o.addClass(r)) : (e.scroll.removeClass(r), t.scroll.removeClass(r), o.removeClass(r)), "y" === l && (s.is("textarea") || a < c ? o.css({
                height: c + x.scroll.height + "px",
                "max-height": "none"
            }) : o.css({
                "max-height": c + x.scroll.height + "px"
            })), e.size == s.prop("scrollWidth") && t.size == s.prop("scrollHeight") && e.visible == n.width() && t.visible == n.height() && e.offset == (parseInt(s.css("left"), 10) || 0) && t.offset == (parseInt(s.css("top"), 10) || 0) || (b.extend(this.scrollx, {
                offset: parseInt(s.css("left"), 10) || 0,
                size: s.prop("scrollWidth"),
                visible: n.width()
            }), b.extend(this.scrolly, {
                offset: parseInt(s.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: n.height()
            }), this._updateScroll("x" === l ? "y" : "x", t))
        }
    };
    var r = l;
    b.fn.scrollbar = function (s, o) {
        return "string" != typeof s && (o = s, s = "init"), void 0 === o && (o = []), b.isArray(o) || (o = [o]), this.not("body, .scroll-wrapper").each(function () {
            var l = b(this),
                e = l.data(x.data.name);
            (e || "init" === s) && (e || (e = new r(l)), e[s] && e[s].apply(e, o))
        }), this
    }, b.fn.scrollbar.options = o;
    var a, t, c = (a = 0, function (l) {
        var e, s, o, r, t, i, n;
        for (e = 0; e < x.scrolls.length; e++) s = (r = x.scrolls[e]).container, o = r.options, t = r.wrapper, i = r.scrollx, n = r.scrolly, (l || o.autoUpdate && t && t.is(":visible") && (s.prop("scrollWidth") != i.size || s.prop("scrollHeight") != n.size || t.width() != i.visible || t.height() != n.visible)) && (r.init(), o.debug && window.console && console.log({
            scrollHeight: s.prop("scrollHeight") + ":" + r.scrolly.size,
            scrollWidth: s.prop("scrollWidth") + ":" + r.scrollx.size,
            visibleHeight: t.height() + ":" + r.scrolly.visible,
            visibleWidth: t.width() + ":" + r.scrollx.visible
        }, !0));
        clearTimeout(a), a = setTimeout(c, 300)
    });
    window.angular && (t = window.angular).module("jQueryScrollbar", []).provider("jQueryScrollbar", function () {
        var e = o;
        return {
            setOptions: function (l) {
                t.extend(e, l)
            },
            $get: function () {
                return {
                    options: t.copy(e)
                }
            }
        }
    }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function (r, t) {
        return {
            restrict: "AC",
            link: function (l, e, s) {
                var o = t(s.jqueryScrollbar)(l);
                e.scrollbar(o || r.options).on("$destroy", function () {
                    e.scrollbar("destroy")
                })
            }
        }
    }])
});
! function (l) {
    var c = l(window),
        f = c.height();
    c.resize(function () {
        f = c.height()
    }), l.fn.parallax = function (i, e, n) {
        var r, u, h = l(this);

        function t() {
            var o = c.scrollTop();
            h.each(function () {
                var n = l(this),
                    t = n.offset().top;
                t + r(n) < o || o + f < t || h.css("backgroundPosition", i + " " + Math.round((u - o) * e) + "px")
            })
        }
        h.each(function () {
            u = h.offset().top
        }), r = n ? function (n) {
            return n.outerHeight(!0)
        } : function (n) {
            return n.height()
        }, (arguments.length < 1 || null === i) && (i = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === n) && (n = !0), c.bind("scroll", t).resize(t), t()
    }
}(jQuery);
! function (e, t) {
    "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
}(this, function (n) {
    var o = function (e, o) {
            var n, t = document.createElement("canvas");
            e.appendChild(t), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(t);
            var i = t.getContext("2d");
            t.width = t.height = o.size;
            var a = 1;
            1 < window.devicePixelRatio && (a = window.devicePixelRatio, t.style.width = t.style.height = [o.size, "px"].join(""), t.width = t.height = o.size * a, i.scale(a, a)), i.translate(o.size / 2, o.size / 2), i.rotate((o.rotate / 180 - .5) * Math.PI);
            var r = (o.size - o.lineWidth) / 2;
            o.scaleColor && o.scaleLength && (r -= o.scaleLength + 2), Date.now = Date.now || function () {
                return +new Date
            };
            var s = function (e, t, n) {
                    var a = (n = Math.min(Math.max(-1, n || 0), 1)) <= 0;
                    i.beginPath(), i.arc(0, 0, r, 0, 2 * Math.PI * n, a), i.strokeStyle = e, i.lineWidth = t, i.stroke()
                },
                d = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                    window.setTimeout(e, 1e3 / 60)
                },
                h = function () {
                    o.scaleColor && function () {
                        var e, t;
                        i.lineWidth = 1, i.fillStyle = o.scaleColor, i.save();
                        for (var n = 24; 0 < n; --n) n % 6 == 0 ? (t = o.scaleLength, e = 0) : (t = .6 * o.scaleLength, e = o.scaleLength - t), i.fillRect(-o.size / 2 + e, 0, t, 1), i.rotate(Math.PI / 12);
                        i.restore()
                    }(), o.trackColor && s(o.trackColor, o.lineWidth, 1)
                };
            this.getCanvas = function () {
                return t
            }, this.getCtx = function () {
                return i
            }, this.clear = function () {
                i.clearRect(o.size / -2, o.size / -2, o.size, o.size)
            }, this.draw = function (e) {
                var t;
                o.scaleColor || o.trackColor ? i.getImageData && i.putImageData ? n ? i.putImageData(n, 0, 0) : (h(), n = i.getImageData(0, 0, o.size * a, o.size * a)) : (this.clear(), h()) : this.clear(), i.lineCap = o.lineCap, t = "function" == typeof o.barColor ? o.barColor(e) : o.barColor, s(t, o.lineWidth, e / 100)
            }.bind(this), this.animate = function (n, a) {
                var i = Date.now();
                o.onStart(n, a);
                var r = function () {
                    var e = Math.min(Date.now() - i, o.animate.duration),
                        t = o.easing(this, e, n, a - n, o.animate.duration);
                    this.draw(t), o.onStep(n, a, t), e >= o.animate.duration ? o.onStop(n, a) : d(r)
                }.bind(this);
                d(r)
            }.bind(this)
        },
        a = function (t, n) {
            var a = {
                barColor: "#ef1e25",
                trackColor: "#f9f9f9",
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                size: 110,
                rotate: 0,
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                easing: function (e, t, n, a, i) {
                    return (t /= i / 2) < 1 ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n
                },
                onStart: function () {},
                onStep: function () {},
                onStop: function () {}
            };
            if (void 0 !== o) a.renderer = o;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                a.renderer = SVGRenderer
            }
            var i = {},
                r = 0,
                e = function () {
                    for (var e in this.el = t, this.options = i, a) a.hasOwnProperty(e) && (i[e] = n && void 0 !== n[e] ? n[e] : a[e], "function" == typeof i[e] && (i[e] = i[e].bind(this)));
                    i.easing = "string" == typeof i.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[i.easing]) ? jQuery.easing[i.easing] : a.easing, "number" == typeof i.animate && (i.animate = {
                        duration: i.animate,
                        enabled: !0
                    }), "boolean" != typeof i.animate || i.animate || (i.animate = {
                        duration: 1e3,
                        enabled: i.animate
                    }), this.renderer = new i.renderer(t, i), this.renderer.draw(r), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
                }.bind(this);
            this.update = function (e) {
                return e = parseFloat(e), i.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
            }.bind(this), this.disableAnimation = function () {
                return i.animate.enabled = !1, this
            }, this.enableAnimation = function () {
                return i.animate.enabled = !0, this
            }, e()
        };
    n.fn.easyPieChart = function (t) {
        return this.each(function () {
            var e;
            n.data(this, "easyPieChart") || (e = n.extend({}, t, n(this).data()), n.data(this, "easyPieChart", new a(this, e)))
        })
    }
});
! function (a) {
    "use strict";
    var i = function (t, e) {
        this.$element = a(t), this.options = a.extend({}, i.defaults, e)
    };
    i.defaults = {
        transition_delay: 300,
        refresh_speed: 50,
        display_text: "none",
        use_percentage: !0,
        percent_format: function (t) {
            return t + "%"
        },
        amount_format: function (t, e) {
            return t + " / " + e
        },
        update: a.noop,
        done: a.noop,
        fail: a.noop
    }, i.prototype.transition = function () {
        var r = this.$element,
            o = r.parent(),
            h = this.$back_text,
            d = this.$front_text,
            f = this.options,
            p = parseInt(r.attr("data-transitiongoal")),
            c = parseInt(r.attr("aria-valuemin")) || 0,
            u = parseInt(r.attr("aria-valuemax")) || 100,
            l = o.hasClass("vertical"),
            g = f.update && "function" == typeof f.update ? f.update : i.defaults.update,
            _ = f.done && "function" == typeof f.done ? f.done : i.defaults.done,
            t = f.fail && "function" == typeof f.fail ? f.fail : i.defaults.fail;
        if (isNaN(p)) t("data-transitiongoal not set");
        else {
            var e, x = Math.round(100 * (p - c) / (u - c));
            if ("center" === f.display_text && !h && !d) this.$back_text = h = a("<span>").addClass("progressbar-back-text").prependTo(o), this.$front_text = d = a("<span>").addClass("progressbar-front-text").prependTo(r), l ? (e = o.css("height"), h.css({
                height: e,
                "line-height": e
            }), d.css({
                height: e,
                "line-height": e
            }), a(window).resize(function () {
                e = o.css("height"), h.css({
                    height: e,
                    "line-height": e
                }), d.css({
                    height: e,
                    "line-height": e
                })
            })) : (e = o.css("width"), d.css({
                width: e
            }), a(window).resize(function () {
                e = o.css("width"), d.css({
                    width: e
                })
            }));
            setTimeout(function () {
                var t, e, n, s, a;
                l ? r.css("height", x + "%") : r.css("width", x + "%");
                var i = setInterval(function () {
                    l ? (n = r.height(), s = o.height()) : (n = r.width(), s = o.width()), t = Math.round(100 * n / s), e = Math.round(c + n / s * (u - c)), x <= t && (t = x, e = p, _(r), clearInterval(i)), "none" !== f.display_text && (a = f.use_percentage ? f.percent_format(t) : f.amount_format(e, u, c), "fill" === f.display_text ? r.text(a) : "center" === f.display_text && (h.text(a), d.text(a))), r.attr("aria-valuenow", e), g(t, r)
                }, f.refresh_speed)
            }, f.transition_delay)
        }
    };
    var t = a.fn.progressbar;
    a.fn.progressbar = function (s) {
        return this.each(function () {
            var t = a(this),
                e = t.data("bs.progressbar"),
                n = "object" == typeof s && s;
            e && n && a.extend(e.options, n), e || t.data("bs.progressbar", e = new i(this, n)), e.transition()
        })
    }, a.fn.progressbar.Constructor = i, a.fn.progressbar.noConflict = function () {
        return a.fn.progressbar = t, this
    }
}(window.jQuery);
! function (s) {
    s.fn.countTo = function (c) {
        return c = c || {}, s(this).each(function () {
            var a = s.extend({}, s.fn.countTo.defaults, {
                    from: s(this).data("from"),
                    to: s(this).data("to"),
                    speed: s(this).data("speed"),
                    refreshInterval: s(this).data("refresh-interval"),
                    decimals: s(this).data("decimals")
                }, c),
                t = Math.ceil(a.speed / a.refreshInterval),
                e = (a.to - a.from) / t,
                n = this,
                o = s(this),
                r = 0,
                l = a.from,
                f = o.data("countTo") || {};

            function i(t) {
                var e = a.formatter.call(n, t, a);
                o.text(e)
            }
            o.data("countTo", f), f.interval && clearInterval(f.interval), f.interval = setInterval(function () {
                r++, i(l += e), "function" == typeof a.onUpdate && a.onUpdate.call(n, l);
                t <= r && (o.removeData("countTo"), clearInterval(f.interval), l = a.to, "function" == typeof a.onComplete && a.onComplete.call(n, l))
            }, a.refreshInterval), i(l)
        })
    }, s.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function (t, e) {
            return t.toFixed(e.decimals)
        },
        onUpdate: null,
        onComplete: null
    }
}(jQuery);
! function (w) {
    function b() {
        var t = location.href;
        return hashtag = -1 !== t.indexOf("#prettyPhoto") && decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function k(t, e) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
        return null == i ? "" : i[1]
    }
    w.prettyPhoto = {
        version: "3.1.6"
    }, w.fn.prettyPhoto = function (e) {
        e = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function () {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function () {},
            callback: function () {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, e);
        var i, t, p, o, a, s, n, r = this,
            l = !1,
            d = w(window).height(),
            h = w(window).width();

        function c() {
            w(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (d / 2 - i.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: i.contentHeight,
                width: i.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: h / 2 - i.containerWidth / 2 < 0 ? 0 : h / 2 - i.containerWidth / 2,
                width: i.containerWidth
            }, settings.animation_speed, function () {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(i.height).width(i.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == f(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (i.resized ? w("a.pp_expand,a.pp_contract").show() : w("a.pp_expand").hide()), !settings.autoplay_slideshow || n || t || w.prettyPhoto.startSlideshow(), settings.changepicturecallback(), t = !0
            }), isSet && settings.overlay_gallery && "image" == f(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((i.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, w.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave"), e.ajaxcallback()
        }

        function _(t) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
                w(".pp_loaderIcon").show(), t()
            })
        }

        function g(t, e) {
            if (resized = !1, m(t, e), imageWidth = t, imageHeight = e, (h < s || d < a) && doresize && settings.allow_resize && !l) {
                for (resized = !0, fitting = !1; !fitting;) h - 38 < s ? (imageWidth = h - 38, imageHeight = e / t * imageWidth) : d - 100 < a ? (imageHeight = d - 100, imageWidth = t / e * imageHeight) : fitting = !0, a = imageHeight, s = imageWidth;
                (h < s || d < a) && g(s, a), m(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(a),
                containerWidth: Math.floor(s) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(p),
                contentWidth: Math.floor(o),
                resized: resized
            }
        }

        function m(t, e) {
            t = parseFloat(t), e = parseFloat(e), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(w("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(w("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), p = e + detailsHeight, o = t, a = p + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), s = t
        }

        function f(t) {
            return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
        }

        function u() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = v(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = d / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > d) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: h / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function v() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function y(t) {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), w("body").append(settings.markup), $pp_pic_holder = w(".pp_pic_holder"), $ppt = w(".ppt"), $pp_overlay = w("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var e = 0; e < pp_images.length; e++) pp_images[e].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[e]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = w(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
                    return w.prettyPhoto.changeGalleryPage("next"), w.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function () {
                    return w.prettyPhoto.changeGalleryPage("previous"), w.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function () {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function () {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function (t) {
                    w(this).find("a").click(function () {
                        return w.prettyPhoto.changePage(t), w.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
                return w.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: w(document).height(),
                width: w(window).width()
            }).bind("click", function () {
                settings.modal || w.prettyPhoto.close()
            }), w("a.pp_close").bind("click", function () {
                return w.prettyPhoto.close(), !1
            }), settings.allow_expand && w("a.pp_expand").bind("click", function (t) {
                return w(this).hasClass("pp_expand") ? (w(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (w(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), _(function () {
                    w.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
                return w.prettyPhoto.changePage("previous"), w.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
                return w.prettyPhoto.changePage("next"), w.prettyPhoto.stopSlideshow(), !1
            }), u()
        }
        return doresize = !0, scroll_pos = v(), w(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
            u(), d = w(window).height(), h = w(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(w(document).height()).width(h)
        }), e.keyboard_shortcuts && w(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (t) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
                case 37:
                    w.prettyPhoto.changePage("previous"), t.preventDefault();
                    break;
                case 39:
                    w.prettyPhoto.changePage("next"), t.preventDefault();
                    break;
                case 27:
                    settings.modal || w.prettyPhoto.close(), t.preventDefault()
            }
        }), w.prettyPhoto.initialize = function () {
            return settings = e, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = w(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(r, function (t, e) {
                if (-1 != w(t).attr(settings.hook).indexOf(theRel)) return w(t).attr("href")
            }) : w.makeArray(w(this).attr("href")), pp_titles = isSet ? jQuery.map(r, function (t, e) {
                if (-1 != w(t).attr(settings.hook).indexOf(theRel)) return w(t).find("img").attr("alt") ? w(t).find("img").attr("alt") : ""
            }) : w.makeArray(w(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(r, function (t, e) {
                if (-1 != w(t).attr(settings.hook).indexOf(theRel)) return w(t).attr("title") ? w(t).attr("title") : ""
            }) : w.makeArray(w(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(w(this).attr("href"), pp_images), rel_index = isSet ? set_position : w("a[" + settings.hook + "^='" + theRel + "']").index(w(this)), y(this), settings.allow_resize && w(window).bind("scroll.prettyphoto", function () {
                u()
            }), w.prettyPhoto.open(), !1
        }, w.prettyPhoto.open = function (t) {
            return "undefined" == typeof settings && (settings = e, pp_images = w.makeArray(t), pp_titles = arguments[1] ? w.makeArray(arguments[1]) : w.makeArray(""), pp_descriptions = arguments[2] ? w.makeArray(arguments[2]) : w.makeArray(""), isSet = 1 < pp_images.length, set_position = arguments[3] ? arguments[3] : 0, y(t.target)), settings.hideflash && w("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), 1 < w(pp_images).size() ? w(".pp_nav").show() : w(".pp_nav").hide(), w(".pp_loaderIcon").show(), settings.deeplinking && function () {
                if ("undefined" == typeof theRel) return;
                location.hash = theRel + "/" + rel_index + "/"
            }(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + w(pp_images).size()), void 0 !== pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(k("width", pp_images[set_position])) ? k("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(k("height", pp_images[set_position])) ? k("height", pp_images[set_position]) : settings.default_height.toString(), l = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(w(window).height() * parseFloat(movie_height) / 100 - 150), l = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(w(window).width() * parseFloat(movie_width) / 100 - 150), l = !0), $pp_pic_holder.fadeIn(function () {
                switch (settings.show_title && "" != pp_titles[set_position] && void 0 !== pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, f(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < w(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
                            i = g(imgPreloader.width, imgPreloader.height), c()
                        }, imgPreloader.onerror = function () {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), w.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        i = g(movie_width, movie_height), movie_id = k("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], 0 < movie_id.indexOf("?") && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), 0 < movie_id.indexOf("&") && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, k("rel", pp_images[set_position]) ? movie += "?rel=" + k("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, i.width).replace(/{height}/g, i.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        i = g(movie_width, movie_height), movie_id = pp_images[set_position];
                        var t = movie_id.match(/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/);
                        movie = "http://player.vimeo.com/video/" + t[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = i.width + "/embed/?moog_width=" + i.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, i.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        (i = g(movie_width, movie_height)).height += 15, i.contentHeight += 15, i.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, i.width).replace(/{height}/g, i.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        i = g(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, i.width).replace(/{height}/g, i.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        i = g(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, i.width).replace(/{height}/g, i.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, i = g(movie_width, movie_height), doresize = !0, skipInjection = !0, w.get(pp_images[set_position], function (t) {
                            toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, c()
                        });
                        break;
                    case "custom":
                        i = g(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = w(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(w("body")).show(), doresize = !1, i = g(w(myClone).width(), w(myClone).height()), doresize = !0, w(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, w(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, c())
            }), !1
        }, w.prettyPhoto.changePage = function (t) {
            currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = w(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > w(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && w(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), _(function () {
                w.prettyPhoto.open()
            })
        }, w.prettyPhoto.changeGalleryPage = function (t) {
            "next" == t ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, w.prettyPhoto.startSlideshow = function () {
            void 0 === n ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
                return w.prettyPhoto.stopSlideshow(), !1
            }), n = setInterval(w.prettyPhoto.startSlideshow, settings.slideshow)) : w.prettyPhoto.changePage("next")
        }, w.prettyPhoto.stopSlideshow = function () {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
                return w.prettyPhoto.startSlideshow(), !1
            }), clearInterval(n), n = void 0
        }, w.prettyPhoto.close = function () {
            $pp_overlay.is(":animated") || (w.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), w("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
                w(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function () {
                settings.hideflash && w("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), w(this).remove(), w(window).unbind("scroll.prettyphoto"), -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto"), settings.callback(), doresize = !0, t = !1, delete settings
            }))
        }, !pp_alreadyInitialized && b() && (pp_alreadyInitialized = !0, hashIndex = b(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
            w("a[" + e.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", w.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;
! function () {
    var a = !1;
    window.JQClass = function () {}, JQClass.classes = {}, JQClass.extend = function t(e) {
        var n = this.prototype;
        a = !0;
        var i = new this;
        for (var s in a = !1, e) i[s] = "function" == typeof e[s] && "function" == typeof n[s] ? function (i, s) {
            return function () {
                var t = this._super;
                this._super = function (t) {
                    return n[i].apply(this, t || [])
                };
                var e = s.apply(this, arguments);
                return this._super = t, e
            }
        }(s, e[s]) : e[s];

        function o() {
            !a && this._init && this._init.apply(this, arguments)
        }
        return ((o.prototype = i).constructor = o).extend = t, o
    }
}(),
function ($) {
    function camelCase(t) {
        return t.replace(/-([a-z])/g, function (t, e) {
            return e.toUpperCase()
        })
    }
    JQClass.classes.JQPlugin = JQClass.extend({
        name: "plugin",
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function () {
            return "is-" + this.name
        },
        _init: function () {
            $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
            var i = camelCase(this.name);
            $[i] = this, $.fn[i] = function (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return $[i]._isNotChained(t, e) ? $[i][t].apply($[i], [this[0]].concat(e)) : this.each(function () {
                    if ("string" == typeof t) {
                        if ("_" === t[0] || !$[i][t]) throw "Unknown method: " + t;
                        $[i][t].apply($[i], [this].concat(e))
                    } else $[i]._attach(this, t)
                })
            }
        },
        setDefaults: function (t) {
            $.extend(this.defaultOptions, t || {})
        },
        _isNotChained: function (t, e) {
            return "option" === t && (0 === e.length || 1 === e.length && "string" == typeof e[0]) || -1 < $.inArray(t, this._getters)
        },
        _attach: function (t, e) {
            if (!(t = $(t)).hasClass(this._getMarker())) {
                t.addClass(this._getMarker()), e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {});
                var i = $.extend({
                    name: this.name,
                    elem: t,
                    options: e
                }, this._instSettings(t, e));
                t.data(this.name, i), this._postAttach(t, i), this.option(t, e)
            }
        },
        _instSettings: function (t, e) {
            return {}
        },
        _postAttach: function (t, e) {},
        _getMetadata: function (d) {
            try {
                var f = d.data(this.name.toLowerCase()) || "";
                for (var g in f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function (t, e, i) {
                        var s = f.substring(0, i).match(/"/g);
                        return s && s.length % 2 != 0 ? e + ":" : '"' + e + '":'
                    }), f = $.parseJSON("{" + f + "}"), f) {
                    var h = f[g];
                    "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
                }
                return f
            } catch (t) {
                return {}
            }
        },
        _getInst: function (t) {
            return $(t).data(this.name) || {}
        },
        option: function (t, e, i) {
            var s = (t = $(t)).data(this.name);
            if (!e || "string" == typeof e && null == i) return (n = (s || {}).options) && e ? n[e] : n;
            if (t.hasClass(this._getMarker())) {
                var n = e || {};
                "string" == typeof e && ((n = {})[e] = i), this._optionsChanged(t, s, n), $.extend(s.options, n)
            }
        },
        _optionsChanged: function (t, e, i) {},
        destroy: function (t) {
            (t = $(t)).hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker()))
        },
        _preDestroy: function (t, e) {}
    }), $.JQPlugin = {
        createPlugin: function (t, e) {
            "object" == typeof t && (e = t, t = "JQPlugin"), t = camelCase(t);
            var i = camelCase(e.name);
            JQClass.classes[i] = JQClass.classes[t].extend(e), new JQClass.classes[i]
        }
    }
}(jQuery),
function (m) {
    var t = "countdown";
    m.JQPlugin.createPlugin({
        name: t,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: !1,
            padZeroes: !1,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: !1,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            "": {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }
        },
        _getters: ["getTimes"],
        _rtlClass: t + "-rtl",
        _sectionClass: t + "-section",
        _amountClass: t + "-amount",
        _periodClass: t + "-period",
        _rowClass: t + "-row",
        _holdingClass: t + "-holding",
        _showClass: t + "-show",
        _descrClass: t + "-descr",
        _timerElems: [],
        _init: function () {
            var s = this;
            this._super(), this._serverSyncs = [];
            var n = "function" == typeof Date.now ? Date.now : function () {
                    return (new Date).getTime()
                },
                o = window.performance && "function" == typeof window.performance.now;
            var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                r = 0;
            !a || m.noRequestAnimationFrame ? (m.noRequestAnimationFrame = null, setInterval(function () {
                s._updateElems()
            }, 980)) : (r = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || n(), a(function t(e) {
                var i = e < 1e12 ? o ? performance.now() + performance.timing.navigationStart : n() : e || n();
                1e3 <= i - r && (s._updateElems(), r = i), a(t)
            }))
        },
        UTCDate: function (t, e, i, s, n, o, a, r) {
            "object" == typeof e && e.constructor == Date && (r = e.getMilliseconds(), a = e.getSeconds(), o = e.getMinutes(), n = e.getHours(), s = e.getDate(), i = e.getMonth(), e = e.getFullYear());
            var l = new Date;
            return l.setUTCFullYear(e), l.setUTCDate(1), l.setUTCMonth(i || 0), l.setUTCDate(s || 1), l.setUTCHours(n || 0), l.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)), l.setUTCSeconds(a || 0), l.setUTCMilliseconds(r || 0), l
        },
        periodsToSeconds: function (t) {
            return 31557600 * t[0] + 2629800 * t[1] + 604800 * t[2] + 86400 * t[3] + 3600 * t[4] + 60 * t[5] + t[6]
        },
        resync: function () {
            var n = this;
            m("." + this._getMarker()).each(function () {
                var t = m.data(this, n.name);
                if (t.options.serverSync) {
                    for (var e = null, i = 0; i < n._serverSyncs.length; i++)
                        if (n._serverSyncs[i][0] == t.options.serverSync) {
                            e = n._serverSyncs[i];
                            break
                        } if (null == e[2]) {
                        var s = m.isFunction(t.options.serverSync) ? t.options.serverSync.apply(this, []) : null;
                        e[2] = (s ? (new Date).getTime() - s.getTime() : 0) - e[1]
                    }
                    t._since && t._since.setMilliseconds(t._since.getMilliseconds() + e[2]), t._until.setMilliseconds(t._until.getMilliseconds() + e[2])
                }
            });
            for (var t = 0; t < n._serverSyncs.length; t++) null != n._serverSyncs[t][2] && (n._serverSyncs[t][1] += n._serverSyncs[t][2], delete n._serverSyncs[t][2])
        },
        _instSettings: function (t, e) {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            }
        },
        _addElem: function (t) {
            this._hasElem(t) || this._timerElems.push(t)
        },
        _hasElem: function (t) {
            return -1 < m.inArray(t, this._timerElems)
        },
        _removeElem: function (e) {
            this._timerElems = m.map(this._timerElems, function (t) {
                return t == e ? null : t
            })
        },
        _updateElems: function () {
            for (var t = this._timerElems.length - 1; 0 <= t; t--) this._updateCountdown(this._timerElems[t])
        },
        _optionsChanged: function (t, e, i) {
            i.layout && (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(e.options, i);
            var s = e.options.timezone != i.timezone;
            m.extend(e.options, i), this._adjustSettings(t, e, null != i.until || null != i.since || s);
            var n = new Date;
            (e._since && e._since < n || e._until && e._until > n) && this._addElem(t[0]), this._updateCountdown(t, e)
        },
        _updateCountdown: function (t, e) {
            if (t = t.jquery ? t : m(t), e = e || this._getInst(t)) {
                if (t.html(this._generateHTML(e)).toggleClass(this._rtlClass, e.options.isRTL), m.isFunction(e.options.onTick)) {
                    var i = "lap" != e._hold ? e._periods : this._calculatePeriods(e, e._show, e.options.significant, new Date);
                    1 != e.options.tickInterval && this.periodsToSeconds(i) % e.options.tickInterval != 0 || e.options.onTick.apply(t[0], [i])
                }
                if ("pause" != e._hold && (e._since ? e._now.getTime() < e._since.getTime() : e._now.getTime() >= e._until.getTime()) && !e._expiring) {
                    if (e._expiring = !0, this._hasElem(t[0]) || e.options.alwaysExpire) {
                        if (this._removeElem(t[0]), m.isFunction(e.options.onExpiry) && e.options.onExpiry.apply(t[0], []), e.options.expiryText) {
                            var s = e.options.layout;
                            e.options.layout = e.options.expiryText, this._updateCountdown(t[0], e), e.options.layout = s
                        }
                        e.options.expiryUrl && (window.location = e.options.expiryUrl)
                    }
                    e._expiring = !1
                } else "pause" == e._hold && this._removeElem(t[0])
            }
        },
        _resetExtraLabels: function (t, e) {
            for (var i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && (t[i] = e[i]);
            for (var i in t) i.match(/[Ll]abels[02-9]|compactLabels1/) && void 0 === e[i] && (t[i] = null)
        },
        _adjustSettings: function (t, e, i) {
            for (var s = null, n = 0; n < this._serverSyncs.length; n++)
                if (this._serverSyncs[n][0] == e.options.serverSync) {
                    s = this._serverSyncs[n][1];
                    break
                } if (null != s) var o = e.options.serverSync ? s : 0,
                a = new Date;
            else {
                var r = m.isFunction(e.options.serverSync) ? e.options.serverSync.apply(t[0], []) : null;
                a = new Date, o = r ? a.getTime() - r.getTime() : 0;
                this._serverSyncs.push([e.options.serverSync, o])
            }
            var l = e.options.timezone;
            l = null == l ? -a.getTimezoneOffset() : l, (i || !i && null == e._until && null == e._since) && (e._since = e.options.since, null != e._since && (e._since = this.UTCDate(l, this._determineTime(e._since, null)), e._since && o && e._since.setMilliseconds(e._since.getMilliseconds() + o)), e._until = this.UTCDate(l, this._determineTime(e.options.until, a)), o && e._until.setMilliseconds(e._until.getMilliseconds() + o)), e._show = this._determineShow(e)
        },
        _preDestroy: function (t, e) {
            this._removeElem(t[0]), t.empty()
        },
        pause: function (t) {
            this._hold(t, "pause")
        },
        lap: function (t) {
            this._hold(t, "lap")
        },
        resume: function (t) {
            this._hold(t, null)
        },
        toggle: function (t) {
            this[(m.data(t, this.name) || {})._hold ? "resume" : "pause"](t)
        },
        toggleLap: function (t) {
            this[(m.data(t, this.name) || {})._hold ? "resume" : "lap"](t)
        },
        _hold: function (t, e) {
            var i = m.data(t, this.name);
            if (i) {
                if ("pause" == i._hold && !e) {
                    i._periods = i._savePeriods;
                    var s = i._since ? "-" : "+";
                    i[i._since ? "_since" : "_until"] = this._determineTime(s + i._periods[0] + "y" + s + i._periods[1] + "o" + s + i._periods[2] + "w" + s + i._periods[3] + "d" + s + i._periods[4] + "h" + s + i._periods[5] + "m" + s + i._periods[6] + "s"), this._addElem(t)
                }
                i._hold = e, i._savePeriods = "pause" == e ? i._periods : null, m.data(t, this.name, i), this._updateCountdown(t, i)
            }
        },
        getTimes: function (t) {
            var e = m.data(t, this.name);
            return e ? "pause" == e._hold ? e._savePeriods : e._hold ? this._calculatePeriods(e, e._show, e.options.significant, new Date) : e._periods : null
        },
        _determineTime: function (t, e) {
            var i, s, _ = this,
                n = null == t ? e : "string" == typeof t ? function (t) {
                    t = t.toLowerCase();
                    for (var e = new Date, i = e.getFullYear(), s = e.getMonth(), n = e.getDate(), o = e.getHours(), a = e.getMinutes(), r = e.getSeconds(), l = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, p = l.exec(t); p;) {
                        switch (p[2] || "s") {
                            case "s":
                                r += parseInt(p[1], 10);
                                break;
                            case "m":
                                a += parseInt(p[1], 10);
                                break;
                            case "h":
                                o += parseInt(p[1], 10);
                                break;
                            case "d":
                                n += parseInt(p[1], 10);
                                break;
                            case "w":
                                n += 7 * parseInt(p[1], 10);
                                break;
                            case "o":
                                s += parseInt(p[1], 10), n = Math.min(n, _._getDaysInMonth(i, s));
                                break;
                            case "y":
                                i += parseInt(p[1], 10), n = Math.min(n, _._getDaysInMonth(i, s))
                        }
                        p = l.exec(t)
                    }
                    return new Date(i, s, n, o, a, r, 0)
                }(t) : "number" == typeof t ? (i = t, (s = new Date).setTime(s.getTime() + 1e3 * i), s) : t;
            return n && n.setMilliseconds(0), n
        },
        _getDaysInMonth: function (t, e) {
            return 32 - new Date(t, e, 32).getDate()
        },
        _normalLabels: function (t) {
            return t
        },
        _generateHTML: function (i) {
            var s = this;
            i._periods = i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date);
            for (var t = !1, e = 0, n = i.options.significant, o = m.extend({}, i._show), a = 0; a <= 6; a++) t |= "?" == i._show[a] && 0 < i._periods[a], o[a] = "?" != i._show[a] || t ? i._show[a] : null, e += o[a] ? 1 : 0, n -= 0 < i._periods[a] ? 1 : 0;
            var r = [!1, !1, !1, !1, !1, !1, !1];
            for (a = 6; 0 <= a; a--) i._show[a] && (i._periods[a] ? r[a] = !0 : (r[a] = 0 < n, n--));
            var l = i.options.compact ? i.options.compactLabels : i.options.labels,
                p = i.options.whichLabels || this._normalLabels,
                _ = function (t) {
                    var e = i.options["compactLabels" + p(i._periods[t])];
                    return o[t] ? s._translateDigits(i, i._periods[t]) + (e ? e[t] : l[t]) + " " : ""
                },
                c = i.options.padZeroes ? 2 : 1,
                u = function (t) {
                    var e = i.options["labels" + p(i._periods[t])];
                    return !i.options.significant && o[t] || i.options.significant && r[t] ? '<span class="' + s._sectionClass + '"><span class="' + s._amountClass + '">' + s._minDigits(i, i._periods[t], c) + '</span><span class="' + s._periodClass + '">' + (e ? e[t] : l[t]) + "</span></span>" : ""
                };
            return i.options.layout ? this._buildLayout(i, o, i.options.layout, i.options.compact, i.options.significant, r) : (i.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (i._hold ? " " + this._holdingClass : "") + '">' + _(0) + _(1) + _(2) + _(3) + (o[4] ? this._minDigits(i, i._periods[4], 2) : "") + (o[5] ? (o[4] ? i.options.timeSeparator : "") + this._minDigits(i, i._periods[5], 2) : "") + (o[6] ? (o[4] || o[5] ? i.options.timeSeparator : "") + this._minDigits(i, i._periods[6], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (i.options.significant || e) + (i._hold ? " " + this._holdingClass : "") + '">' + u(0) + u(1) + u(2) + u(3) + u(4) + u(5) + u(6)) + "</span>" + (i.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + i.options.description + "</span>" : "")
        },
        _buildLayout: function (i, t, e, s, n, o) {
            for (var a = i.options[s ? "compactLabels" : "labels"], r = i.options.whichLabels || this._normalLabels, l = function (t) {
                    return (i.options[(s ? "compactLabels" : "labels") + r(i._periods[t])] || a)[t]
                }, p = function (t, e) {
                    return i.options.digits[Math.floor(t / e) % 10]
                }, _ = {
                    desc: i.options.description,
                    sep: i.options.timeSeparator,
                    yl: l(0),
                    yn: this._minDigits(i, i._periods[0], 1),
                    ynn: this._minDigits(i, i._periods[0], 2),
                    ynnn: this._minDigits(i, i._periods[0], 3),
                    y1: p(i._periods[0], 1),
                    y10: p(i._periods[0], 10),
                    y100: p(i._periods[0], 100),
                    y1000: p(i._periods[0], 1e3),
                    ol: l(1),
                    on: this._minDigits(i, i._periods[1], 1),
                    onn: this._minDigits(i, i._periods[1], 2),
                    onnn: this._minDigits(i, i._periods[1], 3),
                    o1: p(i._periods[1], 1),
                    o10: p(i._periods[1], 10),
                    o100: p(i._periods[1], 100),
                    o1000: p(i._periods[1], 1e3),
                    wl: l(2),
                    wn: this._minDigits(i, i._periods[2], 1),
                    wnn: this._minDigits(i, i._periods[2], 2),
                    wnnn: this._minDigits(i, i._periods[2], 3),
                    w1: p(i._periods[2], 1),
                    w10: p(i._periods[2], 10),
                    w100: p(i._periods[2], 100),
                    w1000: p(i._periods[2], 1e3),
                    dl: l(3),
                    dn: this._minDigits(i, i._periods[3], 1),
                    dnn: this._minDigits(i, i._periods[3], 2),
                    dnnn: this._minDigits(i, i._periods[3], 3),
                    d1: p(i._periods[3], 1),
                    d10: p(i._periods[3], 10),
                    d100: p(i._periods[3], 100),
                    d1000: p(i._periods[3], 1e3),
                    hl: l(4),
                    hn: this._minDigits(i, i._periods[4], 1),
                    hnn: this._minDigits(i, i._periods[4], 2),
                    hnnn: this._minDigits(i, i._periods[4], 3),
                    h1: p(i._periods[4], 1),
                    h10: p(i._periods[4], 10),
                    h100: p(i._periods[4], 100),
                    h1000: p(i._periods[4], 1e3),
                    ml: l(5),
                    mn: this._minDigits(i, i._periods[5], 1),
                    mnn: this._minDigits(i, i._periods[5], 2),
                    mnnn: this._minDigits(i, i._periods[5], 3),
                    m1: p(i._periods[5], 1),
                    m10: p(i._periods[5], 10),
                    m100: p(i._periods[5], 100),
                    m1000: p(i._periods[5], 1e3),
                    sl: l(6),
                    sn: this._minDigits(i, i._periods[6], 1),
                    snn: this._minDigits(i, i._periods[6], 2),
                    snnn: this._minDigits(i, i._periods[6], 3),
                    s1: p(i._periods[6], 1),
                    s10: p(i._periods[6], 10),
                    s100: p(i._periods[6], 100),
                    s1000: p(i._periods[6], 1e3)
                }, c = e, u = 0; u <= 6; u++) {
                var h = "yowdhms".charAt(u),
                    d = new RegExp("\\{" + h + "<\\}([\\s\\S]*)\\{" + h + ">\\}", "g");
                c = c.replace(d, !n && t[u] || n && o[u] ? "$1" : "")
            }
            return m.each(_, function (t, e) {
                var i = new RegExp("\\{" + t + "\\}", "g");
                c = c.replace(i, e)
            }), c
        },
        _minDigits: function (t, e, i) {
            return (e = "" + e).length >= i ? this._translateDigits(t, e) : (e = "0000000000" + e, this._translateDigits(t, e.substr(e.length - i)))
        },
        _translateDigits: function (e, t) {
            return ("" + t).replace(/[0-9]/g, function (t) {
                return e.options.digits[t]
            })
        },
        _determineShow: function (t) {
            var e = t.options.format,
                i = [];
            return i[0] = e.match("y") ? "?" : e.match("Y") ? "!" : null, i[1] = e.match("o") ? "?" : e.match("O") ? "!" : null, i[2] = e.match("w") ? "?" : e.match("W") ? "!" : null, i[3] = e.match("d") ? "?" : e.match("D") ? "!" : null, i[4] = e.match("h") ? "?" : e.match("H") ? "!" : null, i[5] = e.match("m") ? "?" : e.match("M") ? "!" : null, i[6] = e.match("s") ? "?" : e.match("S") ? "!" : null, i
        },
        _calculatePeriods: function (t, i, e, s) {
            t._now = s, t._now.setMilliseconds(0);
            var n = new Date(t._now.getTime());
            t._since ? s.getTime() < t._since.getTime() ? t._now = s = n : s = t._since : (n.setTime(t._until.getTime()), s.getTime() > t._until.getTime() && (t._now = s = n));
            var o = [0, 0, 0, 0, 0, 0, 0];
            if (i[0] || i[1]) {
                var a = this._getDaysInMonth(s.getFullYear(), s.getMonth()),
                    r = this._getDaysInMonth(n.getFullYear(), n.getMonth()),
                    l = n.getDate() == s.getDate() || n.getDate() >= Math.min(a, r) && s.getDate() >= Math.min(a, r),
                    p = function (t) {
                        return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds()
                    },
                    _ = Math.max(0, 12 * (n.getFullYear() - s.getFullYear()) + n.getMonth() - s.getMonth() + (n.getDate() < s.getDate() && !l || l && p(n) < p(s) ? -1 : 0));
                o[0] = i[0] ? Math.floor(_ / 12) : 0, o[1] = i[1] ? _ - 12 * o[0] : 0;
                var c = (s = new Date(s.getTime())).getDate() == a,
                    u = this._getDaysInMonth(s.getFullYear() + o[0], s.getMonth() + o[1]);
                s.getDate() > u && s.setDate(u), s.setFullYear(s.getFullYear() + o[0]), s.setMonth(s.getMonth() + o[1]), c && s.setDate(u)
            }
            var h = Math.floor((n.getTime() - s.getTime()) / 1e3),
                d = function (t, e) {
                    o[t] = i[t] ? Math.floor(h / e) : 0, h -= o[t] * e
                };
            if (d(2, 604800), d(3, 86400), d(4, 3600), d(5, 60), d(6, 1), 0 < h && !t._since)
                for (var m = [1, 12, 4.3482, 7, 24, 60, 60], g = 6, f = 1, w = 6; 0 <= w; w--) i[w] && (o[g] >= f && (o[g] = 0, h = 1), 0 < h && (o[w]++, h = 0, g = w, f = 1)), f *= m[w];
            if (e)
                for (w = 0; w <= 6; w++) e && o[w] ? e-- : e || (o[w] = 0);
            return o
        }
    })
}(jQuery);
! function (e, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(h, n, d) {
        (d = d || e || t.jQuery) && (n.prototype.option || (n.prototype.option = function (t) {
            d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t))
        }), d.fn[h] = function (t) {
            if ("string" == typeof t) {
                var e = l.call(arguments, 1);
                return r = e, u = "$()." + h + '("' + (s = t) + '")', (i = this).each(function (t, e) {
                    var i = d.data(e, h);
                    if (i) {
                        var o = i[s];
                        if (o && "_" != s.charAt(0)) {
                            var n = o.apply(i, r);
                            a = void 0 === a ? n : a
                        } else f(u + " is not a valid method")
                    } else f(h + " not initialized. Cannot call methods, i.e. " + u)
                }), void 0 !== a ? a : i
            }
            var i, s, r, a, u, o;
            return o = t, this.each(function (t, e) {
                var i = d.data(e, h);
                i ? (i.option(o), i._init()) : (i = new n(e, o), d.data(e, h, i))
            }), this
        }, o(d))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var l = Array.prototype.slice,
        n = t.console,
        f = void 0 === n ? function () {} : function (t) {
            n.error(t)
        };
    return o(e || t.jQuery), i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return -1 == o.indexOf(e) && o.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return -1 != o && i.splice(o, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = 0,
                n = i[o];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; n;) {
                var r = s && s[n];
                r && (this.off(t, n), delete s[n]), n.apply(this, e), n = i[o += r ? 0 : 1]
            }
            return this
        }
    }, t
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function g(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }

    function v(t) {
        var e = getComputedStyle(t);
        return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function _(t) {
        if (function () {
                if (!S) {
                    S = !0;
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                    var e = document.body || document.documentElement;
                    e.appendChild(t);
                    var i = v(t);
                    _.isBoxSizeOuter = I = 200 == g(i.width), e.removeChild(t)
                }
            }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var e = v(t);
            if ("none" == e.display) return function () {
                for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < x; e++) t[z[e]] = 0;
                return t
            }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var o = i.isBorderBox = "border-box" == e.boxSizing, n = 0; n < x; n++) {
                var s = z[n],
                    r = e[s],
                    a = parseFloat(r);
                i[s] = isNaN(a) ? 0 : a
            }
            var u = i.paddingLeft + i.paddingRight,
                h = i.paddingTop + i.paddingBottom,
                d = i.marginLeft + i.marginRight,
                l = i.marginTop + i.marginBottom,
                f = i.borderLeftWidth + i.borderRightWidth,
                c = i.borderTopWidth + i.borderBottomWidth,
                m = o && I,
                p = g(e.width);
            !1 !== p && (i.width = p + (m ? 0 : u + f));
            var y = g(e.height);
            return !1 !== y && (i.height = y + (m ? 0 : h + c)), i.innerWidth = i.width - (u + f), i.innerHeight = i.height - (h + c), i.outerWidth = i.width + d, i.outerHeight = i.height + l, i
        }
    }
    var I, i = "undefined" == typeof console ? function () {} : function (t) {
            console.error(t)
        },
        z = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        x = z.length,
        S = !1;
    return _
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var i = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i] + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function (t, e) {
        return t[i](e)
    }
}),
function (e, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function (h, s) {
    var d = {
            extend: function (t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            modulo: function (t, e) {
                return (t % e + e) % e
            },
            makeArray: function (t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if (t && "object" == typeof t && "number" == typeof t.length)
                    for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e
            },
            removeFrom: function (t, e) {
                var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
            },
            getParent: function (t, e) {
                for (; t.parentNode && t != document.body;)
                    if (t = t.parentNode, s(t, e)) return t
            },
            getQueryElement: function (t) {
                return "string" == typeof t ? document.querySelector(t) : t
            },
            handleEvent: function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            },
            filterFindElements: function (t, o) {
                t = d.makeArray(t);
                var n = [];
                return t.forEach(function (t) {
                    if (t instanceof HTMLElement) {
                        if (!o) return void n.push(t);
                        s(t, o) && n.push(t);
                        for (var e = t.querySelectorAll(o), i = 0; i < e.length; i++) n.push(e[i])
                    }
                }), n
            },
            debounceMethod: function (t, e, o) {
                var n = t.prototype[e],
                    s = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[s];
                    t && clearTimeout(t);
                    var e = arguments,
                        i = this;
                    this[s] = setTimeout(function () {
                        n.apply(i, e), delete i[s]
                    }, o || 100)
                }
            },
            docReady: function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
            },
            toDashed: function (t) {
                return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i
                }).toLowerCase()
            }
        },
        l = h.console;
    return d.htmlInit = function (a, u) {
        d.docReady(function () {
            var t = d.toDashed(u),
                n = "data-" + t,
                e = document.querySelectorAll("[" + n + "]"),
                i = document.querySelectorAll(".js-" + t),
                o = d.makeArray(e).concat(d.makeArray(i)),
                s = n + "-options",
                r = h.jQuery;
            o.forEach(function (e) {
                var t, i = e.getAttribute(n) || e.getAttribute(s);
                try {
                    t = i && JSON.parse(i)
                } catch (t) {
                    return void(l && l.error("Error parsing " + n + " on " + e.className + ": " + t))
                }
                var o = new a(e, t);
                r && r.data(e, u, o)
            })
        })
    }, d
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var o = document.documentElement.style,
        n = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        r = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [n],
        a = {
            transform: s,
            transition: n,
            transitionDuration: n + "Duration",
            transitionProperty: n + "Property",
            transitionDelay: n + "Delay"
        },
        u = i.prototype = Object.create(t.prototype);
    u.constructor = i, u._create = function () {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, u.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, u.getSize = function () {
        this.size = e(this.element)
    }, u.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            e[a[i] || i] = t[i]
        }
    }, u.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, u.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, u.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, u.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, u._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = parseInt(t, 10),
            s = parseInt(e, 10),
            r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), !r || this.isTransitioning) {
            var a = t - i,
                u = e - o,
                h = {};
            h.transform = this.getTranslate(a, u), this.transition({
                to: h,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, u.getTranslate = function (t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }, u.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, u.moveTo = u._transitionTo, u.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, u._nonTransition = function (t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, u.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
    };
    var h = "opacity," + s.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase()
    });
    u.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: h,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(r, this, !1)
        }
    }, u.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, u.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var d = {
        "-webkit-transform": "transform"
    };
    u.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                i = d[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], function (t) {
                    for (var e in t) return !1;
                    return !0
                }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, u.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
    }, u._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var l = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return u.removeTransitionStyles = function () {
        this.css(l)
    }, u.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, u.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, u.remove = function () {
        return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, u.reveal = function () {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, u.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, u.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, u.hide = function () {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, u.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, u.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, i
}),
function (n, s) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, o) {
        return s(n, t, e, i, o)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = s(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function (t, e, n, s, o) {
    "use strict";

    function r(t, e) {
        var i = s.getQueryElement(t);
        if (i) {
            this.element = i, h && (this.$element = h(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
            var o = ++d;
            this.element.outlayerGUID = o, (l[o] = this)._create(), this._getOption("initLayout") && this.layout()
        } else u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }

    function a(t) {
        function e() {
            t.apply(this, arguments)
        }
        return (e.prototype = Object.create(t.prototype)).constructor = e
    }
    var u = t.console,
        h = t.jQuery,
        i = function () {},
        d = 0,
        l = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = r.prototype;
    s.extend(f, e.prototype), f.option = function (t) {
        s.extend(this.options, t)
    }, f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, f.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = new i(e[n], this);
            o.push(s)
        }
        return o
    }, f._filterFindItemElements = function (t) {
        return s.filterFindElements(t, this.options.itemSelector)
    }, f.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function () {
        this.getSize()
    }, f.getSize = function () {
        this.size = n(this.element)
    }, f._getMeasurement = function (t, e) {
        var i, o = this.options[t];
        o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
    }, f.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, f._layoutItems = function (t, i) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var o = [];
            t.forEach(function (t) {
                var e = this._getItemLayoutPosition(t);
                e.item = t, e.isInstant = i || t.isLayoutInstant, o.push(e)
            }, this), this._processLayoutQueue(o)
        }
    }, f._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    }, f._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, f.updateStagger = function () {
        var t = this.options.stagger;
        return null == t ? void(this.stagger = 0) : (this.stagger = function (t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            return i.length ? (i = parseFloat(i)) * (c[o] || 1) : 0
        }(t), this.stagger)
    }, f._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, f._postLayout = function () {
        this.resizeContainer()
    }, f.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, f._getContainerSize = i, f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, f._emitCompleteOnItems = function (e, t) {
        function i() {
            n.dispatchEvent(e + "Complete", null, [t])
        }

        function o() {
            ++r == s && i()
        }
        var n = this,
            s = t.length;
        if (t && s) {
            var r = 0;
            t.forEach(function (t) {
                t.once(e, o)
            })
        } else i()
    }, f.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) {
                var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, f.stamp = function (t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, f.unstamp = function (t) {
        (t = this._find(t)) && t.forEach(function (t) {
            s.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, f._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), s.makeArray(t)
    }, f._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, f._manageStamp = i, f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            o = n(t);
        return {
            left: e.left - i.left - o.marginLeft,
            top: e.top - i.top - o.marginTop,
            right: i.right - e.right - o.marginRight,
            bottom: i.bottom - e.bottom - o.marginBottom
        }
    }, f.handleEvent = s.handleEvent, f.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function () {
        this.resize()
    }, s.debounceMethod(r, "onresize", 100), f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function () {
        var t = n(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, f.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var i = this.updateStagger();
            t.forEach(function (t, e) {
                t.stagger(e * i), t.reveal()
            })
        }
    }, f.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var i = this.updateStagger();
            t.forEach(function (t, e) {
                t.stagger(e * i), t.hide()
            })
        }
    }, f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, f.getItems = function (t) {
        t = s.makeArray(t);
        var i = [];
        return t.forEach(function (t) {
            var e = this.getItem(t);
            e && i.push(e)
        }, this), i
    }, f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), s.removeFrom(this.items, t)
        }, this)
    }, f.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, r.data = function (t) {
        var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
        return e && l[e]
    }, r.create = function (t, e) {
        var i = a(r);
        return i.defaults = s.extend({}, r.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = a(o), s.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var c = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function () {
        n.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (e, i) {
    "use strict";

    function o(t) {
        (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = o.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
        n[t] = function () {
            return i.prototype[t].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function () {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function (t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function () {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }, n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, o.modes = {}, o.create = function (t, e) {
        function i() {
            o.apply(this, arguments)
        }
        return (i.prototype = Object.create(n)).constructor = i, e && (i.options = e), o.modes[i.prototype.namespace = t] = i
    }, o
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, h) {
    var e = t.create("masonry");
    e.compatOptions.fitWidth = "isFitWidth";
    var i = e.prototype;
    return i._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, i.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                e = t && t.element;
            this.columnWidth = e && h(e).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            n = o / i,
            s = i - o % i;
        n = Math[s && s < 1 ? "round" : "floor"](n), this.cols = Math.max(n, 1)
    }, i.getContainerWidth = function () {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            e = h(t);
        this.containerWidth = e && e.innerWidth
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var o = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), n = {
                x: this.columnWidth * o.col,
                y: o.y
            }, s = o.y + t.size.outerHeight, r = i + o.col, a = o.col; a < r; a++) this.colYs[a] = s;
        return n
    }, i._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, i._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, i._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, i._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = 1 < t && i + t > this.cols ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, i._manageStamp = function (t) {
        var e = h(t),
            i = this._getElementOffset(t),
            o = this._getOption("originLeft") ? i.left : i.right,
            n = o + e.outerWidth,
            s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var r = Math.floor(n / this.columnWidth);
        r -= n % this.columnWidth ? 0 : 1, r = Math.min(this.cols - 1, r);
        for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, u = s; u <= r; u++) this.colYs[u] = Math.max(a, this.colYs[u])
    }, i._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function () {
        return {
            height: this.maxY
        }
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function () {
        return {
            height: this.y
        }
    }, e
}),
function (r, a) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (t, e, i, o, n, s) {
        return a(r, t, e, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = a(r, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : r.Isotope = a(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode)
}(window, function (t, i, e, o, s, n, r) {
    var a = t.jQuery,
        h = String.prototype.trim ? function (t) {
            return t.trim()
        } : function (t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = i.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = n, d.LayoutMode = r;
    var u = d.prototype;
    u._create = function () {
        for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
    }, u.reloadItems = function () {
        this.itemGUID = 0, i.prototype.reloadItems.call(this)
    }, u._itemize = function () {
        for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) {
            t[e].id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, u._initLayoutMode = function (t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, u.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, u._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, u.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, u._init = u.arrange, u._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, u._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e
    }, u._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            o = !0, t()
        })
    }, u._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }, u._getFilterTest = function (e) {
        return a && this.options.isJQueryFiltering ? function (t) {
            return a(t.element).is(e)
        } : "function" == typeof e ? function (t) {
            return e(t.element)
        } : function (t) {
            return o(t.element, e)
        }
    }, u.updateSortData = function (t) {
        var e;
        t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, u._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = l(i)
        }
    }, u._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].updateSortData()
        }
    };
    var l = function (t) {
        if ("string" != typeof t) return t;
        var e, i, o = h(t).split(" "),
            n = o[0],
            s = n.match(/^\[(.+)\]$/),
            r = s && s[1],
            a = (i = n, (e = r) ? function (t) {
                return t.getAttribute(e)
            } : function (t) {
                var e = t.querySelector(i);
                return e && e.textContent
            }),
            u = d.sortDataParsers[o[1]];
        return u ? function (t) {
            return t && u(a(t))
        } : function (t) {
            return t && a(t)
        }
    };
    d.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        },
        parseFloat: function (t) {
            return parseFloat(t)
        }
    }, u._sort = function () {
        if (this.options.sortBy) {
            var t = s.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = (r = this.sortHistory, a = this.options.sortAscending, function (t, e) {
                for (var i = 0; i < r.length; i++) {
                    var o = r[i],
                        n = t.sortData[o],
                        s = e.sortData[o];
                    if (s < n || n < s) return (s < n ? 1 : -1) * ((void 0 !== a[o] ? a[o] : a) ? 1 : -1)
                }
                return 0
            });
            this.filteredItems.sort(e)
        }
        var r, a
    }, u._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, u._mode = function () {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, u._resetLayout = function () {
        i.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, u._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, u._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, u._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, u.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, u.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, u.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, u._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, u.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var f = u.remove;
    return u.remove = function (t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var n = e[o];
            s.removeFrom(this.filteredItems, n)
        }
    }, u.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            this.items[t].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, u._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, u.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    }, d
});
! function (h, i, n, o) {
    function l(t, e) {
        this.settings = null, this.options = h.extend({}, l.Defaults, e), this.$element = h(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, h.each(["onResize", "onThrottledResize"], h.proxy(function (t, e) {
            this._handlers[e] = h.proxy(this[e], this)
        }, this)), h.each(l.Plugins, h.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), h.each(l.Workers, h.proxy(function (t, e) {
            this._pipe.push({
                filter: e.filter,
                run: h.proxy(e.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    l.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, l.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, l.Type = {
        Event: "event",
        State: "state"
    }, l.Plugins = {}, l.Workers = [{
        filter: ["width", "settings"],
        run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                s = this.settings.rtl,
                n = {
                    width: "auto",
                    "margin-left": s ? e : "",
                    "margin-right": s ? "" : e
                };
            !i && this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                s = this._items.length,
                n = !this.settings.autoWidth,
                o = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var t = [],
                e = this._items,
                i = this.settings,
                s = Math.max(2 * i.items, 4),
                n = 2 * Math.ceil(e.length / 2),
                o = i.loop && e.length ? i.rewind ? s : Math.max(s, n) : 0,
                r = "",
                a = "";
            for (o /= 2; o--;) t.push(this.normalize(t.length / 2, !0)), r += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
            this._clones = t, h(r).addClass("cloned").appendTo(this.$stage), h(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = [];
            for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], l.prototype.initialize = function () {
        var t, e, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.$element.addClass(this.options.loadingClass), this.$stage = h("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, l.prototype.setup = function () {
        var e = this.viewport(),
            t = this.options.responsive,
            i = -1,
            s = null;
        t ? (h.each(t, function (t) {
            t <= e && i < t && (i = Number(t))
        }), "function" == typeof (s = h.extend({}, this.options, t[i])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : s = h.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = i, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, l.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, l.prototype.prepare = function (t) {
        var e = this.trigger("prepare", {
            content: t
        });
        return e.data || (e.data = h("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: e.data
        }), e.data
    }, l.prototype.update = function () {
        for (var t = 0, e = this._pipe.length, i = h.proxy(function (t) {
                return this[t]
            }, this._invalidated), s = {}; t < e;)(this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, l.prototype.width = function (t) {
        switch (t = t || l.Width.Default) {
            case l.Width.Inner:
            case l.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, l.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, l.prototype.onThrottledResize = function () {
        i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, l.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, l.prototype.registerEventHandlers = function () {
        h.support.transition && this.$stage.on(h.support.transition.end + ".owl.core", h.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", h.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", h.proxy(this.onDragEnd, this)))
    }, l.prototype.onDragStart = function (t) {
        var e = null;
        3 !== t.which && (h.support.transform ? e = {
            x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
            y: e[16 === e.length ? 13 : 5]
        } : (e = this.$stage.position(), e = {
            x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
            y: e.top
        }), this.is("animating") && (h.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = h(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), h(n).on("mouseup.owl.core touchend.owl.core", h.proxy(this.onDragEnd, this)), h(n).one("mousemove.owl.core touchmove.owl.core", h.proxy(function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            h(n).on("mousemove.owl.core touchmove.owl.core", h.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, l.prototype.onDragMove = function (t) {
        var e = null,
            i = null,
            s = null,
            n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
    }, l.prototype.onDragEnd = function (t) {
        var e = this.difference(this._drag.pointer, this.pointer(t)),
            i = this._drag.stage.current,
            s = 0 < e.x ^ this.settings.rtl ? "left" : "right";
        h(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, l.prototype.closest = function (i, s) {
        var n = -1,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || h.each(r, h.proxy(function (t, e) {
            return "left" === s && e - 30 < i && i < e + 30 ? n = t : "right" === s && e - o - 30 < i && i < e - o + 30 ? n = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] || e - o) && (n = "left" === s ? t + 1 : t), -1 === n
        }, this)), this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? n = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())), n
    }, l.prototype.animate = function (t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), h.support.transform3d && h.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : e ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, h.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }, l.prototype.is = function (t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }, l.prototype.current = function (t) {
        if (t === o) return this._current;
        if (0 === this._items.length) return o;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== o && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, l.prototype.invalidate = function (t) {
        return "string" === h.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), h.map(this._invalidated, function (t, e) {
            return e
        })
    }, l.prototype.reset = function (t) {
        (t = this.normalize(t)) !== o && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, l.prototype.normalize = function (t, e) {
        var i = this._items.length,
            s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = o : (t < 0 || i + s <= t) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, l.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, l.prototype.maximum = function (t) {
        var e, i, s, n = this.settings,
            o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            for (e = this._items.length, i = this._items[--e].width(), s = this.$element.width(); e-- && !(s < (i += this._items[e].width() + this.settings.margin)););
            o = e + 1
        } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, l.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, l.prototype.items = function (t) {
        return t === o ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, l.prototype.mergers = function (t) {
        return t === o ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, l.prototype.clones = function (i) {
        var e = this._clones.length / 2,
            s = e + this._items.length,
            n = function (t) {
                return t % 2 == 0 ? s + t / 2 : e - (t + 1) / 2
            };
        return i === o ? h.map(this._clones, function (t, e) {
            return n(e)
        }) : h.map(this._clones, function (t, e) {
            return t === i ? n(e) : null
        })
    }, l.prototype.speed = function (t) {
        return t !== o && (this._speed = t), this._speed
    }, l.prototype.coordinates = function (t) {
        var e, i = 1,
            s = t - 1;
        return t === o ? h.map(this._coordinates, h.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, s = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[s] || 0)) / 2 * i) : e = this._coordinates[s] || 0, e = Math.ceil(e))
    }, l.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, l.prototype.to = function (t, e) {
        var i = this.current(),
            s = null,
            n = t - this.relative(i),
            o = (0 < n) - (n < 0),
            r = this._items.length,
            a = this.minimum(),
            h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= h && 0 < s - n && (i = s - n, t = s, this.reset(i))) : this.settings.rewind ? t = (t % (h += 1) + h) % h : t = Math.max(a, Math.min(h, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, l.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, l.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, l.prototype.onTransitionEnd = function (t) {
        if (t !== o && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, l.prototype.viewport = function () {
        var t;
        return this.options.responsiveBaseElement !== i ? t = h(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : n.documentElement && n.documentElement.clientWidth ? t = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
    }, l.prototype.replace = function (t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : h(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
            return 1 === this.nodeType
        }).each(h.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, l.prototype.add = function (t, e) {
        var i = this.relative(this._current);
        e = e === o ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : h(t), this.trigger("add", {
            content: t,
            position: e
        }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, l.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== o && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, l.prototype.preloadAutoWidthImages = function (t) {
        t.each(h.proxy(function (t, e) {
            this.enter("pre-loading"), e = h(e), h(new Image).one("load", h.proxy(function (t) {
                e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
        }, this))
    }, l.prototype.destroy = function () {
        for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), h(n).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, l.prototype.op = function (t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? i < t : t < i;
            case ">":
                return s ? t < i : i < t;
            case ">=":
                return s ? t <= i : i <= t;
            case "<=":
                return s ? i <= t : t <= i
        }
    }, l.prototype.on = function (t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, l.prototype.off = function (t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, l.prototype.trigger = function (t, e, i, s, n) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            r = h.camelCase(h.grep(["on", t, i], function (t) {
                return t
            }).join("-").toLowerCase()),
            a = h.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), h.extend({
                relatedTarget: this
            }, o, e));
        return this._supress[t] || (h.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(a)
        }), this.register({
            type: l.Type.Event,
            name: t
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)), a
    }, l.prototype.enter = function (t) {
        h.each([t].concat(this._states.tags[t] || []), h.proxy(function (t, e) {
            this._states.current[e] === o && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, l.prototype.leave = function (t) {
        h.each([t].concat(this._states.tags[t] || []), h.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, l.prototype.register = function (i) {
        if (i.type === l.Type.Event) {
            if (h.event.special[i.name] || (h.event.special[i.name] = {}), !h.event.special[i.name].owl) {
                var e = h.event.special[i.name]._default;
                h.event.special[i.name]._default = function (t) {
                    return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
                }, h.event.special[i.name].owl = !0
            }
        } else i.type === l.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = h.grep(this._states.tags[i.name], h.proxy(function (t, e) {
            return h.inArray(t, this._states.tags[i.name]) === e
        }, this)))
    }, l.prototype.suppress = function (t) {
        h.each(t, h.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, l.prototype.release = function (t) {
        h.each(t, h.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, l.prototype.pointer = function (t) {
        var e = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
    }, l.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, l.prototype.difference = function (t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, h.fn.owlCarousel = function (e) {
        var s = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var t = h(this),
                i = t.data("owl.carousel");
            i || (i = new l(this, "object" == typeof e && e), t.data("owl.carousel", i), h.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
                i.register({
                    type: l.Type.Event,
                    name: e
                }), i.$element.on(e + ".owl.carousel.core", h.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                }, i))
            })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s)
        })
    }, h.fn.owlCarousel.Constructor = l
}(window.Zepto || window.jQuery, window, document),
function (e, i, t, s) {
    var n = function (t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, n.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, n.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document),
function (a, o, t, e) {
    var i = function (t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items, s = e.center && -1 * i || 0, n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s, o = this._core.clones().length, r = a.proxy(function (t, e) {
                            this.load(e)
                        }, this); s++ < i;) this.load(o / 2 + this._core.relative(n)), o && a.each(this._core.clones(this._core.relative(n)), r), n++
            }, this)
        }, this._core.options = a.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1
    }, i.prototype.load = function (t) {
        var e = this._core.$stage.children().eq(t),
            i = e && e.find(".owl-lazy");
        !i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function (t, e) {
            var i, s = a(e),
                n = 1 < o.devicePixelRatio && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", {
                element: s,
                url: n
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", a.proxy(function () {
                s.css("opacity", 1), this._core.trigger("loaded", {
                    element: s,
                    url: n
                }, "lazy")
            }, this)).attr("src", n) : ((i = new Image).onload = a.proxy(function () {
                s.css({
                    "background-image": 'url("' + n + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: s,
                    url: n
                }, "lazy")
            }, this), i.src = n)
        }, this)), this._loaded.push(e.get(0)))
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function (o, t, e, i) {
    var s = function (t) {
        this._core = t, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = o.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, s.prototype.update = function () {
        var t, e = this._core._current,
            i = e + this._core.settings.items,
            s = this._core.$stage.children().toArray().slice(e, i),
            n = [];
        o.each(s, function (t, e) {
            n.push(o(e).height())
        }), t = Math.max.apply(null, n), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, o.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function (c, t, e, i) {
    var s = function (t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": c.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": c.proxy(function (t) {
                if (t.namespace) {
                    var e = c(t.content).find(".owl-video");
                    e.length && (e.css("display", "none"), this.fetch(e, c(t.content)))
                }
            }, this)
        }, this._core.options = c.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function (t) {
            this.play(t)
        }, this))
    };
    s.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, s.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (-1 < (s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
        else if (-1 < s[3].indexOf("vimeo")) i = "vimeo";
        else {
            if (!(-1 < s[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, s.prototype.thumbnail = function (e, t) {
        var i, s, n = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
            o = e.find("img"),
            r = "src",
            a = "",
            h = this._core.settings,
            l = function (t) {
                '<div class="owl-video-play-icon"></div>',
                i = h.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + r + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                e.after(i),
                e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap('<div class="owl-video-wrapper"' + n + "></div>"), this._core.settings.lazyLoad && (r = "data-src", a = "owl-lazy"), o.length) return l(o.attr(r)), o.remove(), !1;
        "youtube" === t.type ? (s = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", l(s)) : "vimeo" === t.type ? c.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                s = t[0].thumbnail_large, l(s)
            }
        }) : "vzaar" === t.type && c.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                s = t.framegrab_url, l(s)
            }
        })
    }, s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, s.prototype.play = function (t) {
        var e, i = c(t.target).closest("." + this._core.settings.itemClass),
            s = this._videos[i.attr("data-video")],
            n = s.width || "100%",
            o = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === s.type ? e = '<iframe width="' + n + '" height="' + o + '" src="//www.youtube.com/embed/' + s.id + "?autoplay=1&rel=0&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type ? e = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + n + '" height="' + o + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (e = '<iframe frameborder="0"height="' + o + '"width="' + n + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'), c('<div class="owl-video-frame">' + e + "</div>").insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
    }, s.prototype.isInFullScreen = function () {
        var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return t && c(t).parent().hasClass("owl-video-frame")
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, c.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function (r, t, e, i) {
    var s = function (t) {
        this.core = t, this.core.options = r.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": r.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": r.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, s.prototype.swap = function () {
        if (1 === this.core.settings.items && r.support.animation && r.support.transition) {
            this.core.speed(0);
            var t, e = r.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next),
                n = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(r.support.animation.end, e).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(o)), n && s.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(n))
        }
    }, s.prototype.clear = function (t) {
        r(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, r.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document),
function (i, s, n, t) {
    var e = function (t) {
        this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": i.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": i.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": i.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": i.proxy(function (t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": i.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": i.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": i.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": i.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = i.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function (t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function (t, e) {
        return this._timeout && s.clearTimeout(this._timeout), s.setTimeout(i.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), t || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (s.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, i.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (o, t, e, i) {
    "use strict";
    var s = function (t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": o.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": o.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = o.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    s.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, s.prototype.initialize = function () {
        var t, i = this._core.settings;
        for (t in this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function (t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = o("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function (t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [o("<div>").addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", o.proxy(function (t) {
                var e = o(t.target).parent().is(this._controls.$absolute) ? o(t.target).index() : o(t.target).parent().index();
                t.preventDefault(), this.to(e, i.dotsSpeed)
            }, this)), this._overrides) this._core[t] = o.proxy(this[t], this)
    }, s.prototype.destroy = function () {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, s.prototype.update = function () {
        var t, e, i = this._core.clones().length / 2,
            s = i + this._core.items().length,
            n = this._core.maximum(!0),
            o = this._core.settings,
            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = i, e = 0; t < s; t++) {
                if (r <= e || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(n, t - i),
                            end: t - i + r - 1
                        }), Math.min(n, t - i) === n) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, s.prototype.draw = function () {
        var t, e = this._core.settings,
            i = this._core.items().length <= e.items,
            s = this._core.relative(this._core.current()),
            n = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !n && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !n && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function (t) {
        var e = this._core.settings;
        t.page = {
            index: o.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
        }
    }, s.prototype.current = function () {
        var i = this._core.relative(this._core.current());
        return o.grep(this._pages, o.proxy(function (t, e) {
            return t.start <= i && t.end >= i
        }, this)).pop()
    }, s.prototype.getPosition = function (t) {
        var e, i, s = this._core.settings;
        return "page" == s.slideBy ? (e = o.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += s.slideBy : e -= s.slideBy), e
    }, s.prototype.next = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, s.prototype.prev = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, s.prototype.to = function (t, e, i) {
        var s;
        !i && this._pages.length ? (s = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(t % s + s) % s].start, e)) : o.proxy(this._overrides.to, this._core)(t, e)
    }, o.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document),
function (s, n, t, e) {
    "use strict";
    var i = function (t) {
        this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": s.proxy(function (t) {
                t.namespace && "URLHash" === this._core.settings.startPosition && s(n).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": s.proxy(function (t) {
                if (t.namespace) {
                    var e = s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!e) return;
                    this._hashes[e] = t.content
                }
            }, this),
            "changed.owl.carousel": s.proxy(function (t) {
                if (t.namespace && "position" === t.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        e = s.map(this._hashes, function (t, e) {
                            return t === i ? e : null
                        }).join();
                    if (!e || n.location.hash.slice(1) === e) return;
                    n.location.hash = e
                }
            }, this)
        }, this._core.options = s.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), s(n).on("hashchange.owl.navigation", s.proxy(function (t) {
            var e = n.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in s(n).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, s.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function (n, t, e, o) {
    function i(t, i) {
        var s = !1,
            e = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + a.join(e + " ") + e).split(" "), function (t, e) {
            if (r[e] !== o) return s = !i || e, !1
        }), s
    }

    function s(t) {
        return i(t, !0)
    }
    var r = n("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        h = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        l = function () {
            return !!i("transform")
        },
        c = function () {
            return !!i("perspective")
        },
        p = function () {
            return !!i("animation")
        };
    (function () {
        return !!i("transition")
    })() && (n.support.transition = new String(s("transition")), n.support.transition.end = h.transition.end[n.support.transition]), p() && (n.support.animation = new String(s("animation")), n.support.animation.end = h.animation.end[n.support.animation]), l() && (n.support.transform = new String(s("transform")), n.support.transform3d = c())
}(window.Zepto || window.jQuery, window, document);
! function (b) {
    var a = !0;
    b.flexslider = function (p, e) {
        var m = b(p);
        m.vars = b.extend({}, b.flexslider.defaults, e);
        var t, d = m.vars.namespace,
            f = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            u = ("ontouchstart" in window || f || window.DocumentTouch && document instanceof DocumentTouch) && m.vars.touch,
            o = "click touchend MSPointerUp keyup",
            l = "",
            g = "vertical" === m.vars.direction,
            h = m.vars.reverse,
            S = 0 < m.vars.itemWidth,
            y = "fade" === m.vars.animation,
            v = "" !== m.vars.asNavFor,
            x = {};
        b.data(p, "flexslider", m), x = {
            init: function () {
                m.animating = !1, m.currentSlide = parseInt(m.vars.startAt ? m.vars.startAt : 0, 10), isNaN(m.currentSlide) && (m.currentSlide = 0), m.animatingTo = m.currentSlide, m.atEnd = 0 === m.currentSlide || m.currentSlide === m.last, m.containerSelector = m.vars.selector.substr(0, m.vars.selector.search(" ")), m.slides = b(m.vars.selector, m), m.container = b(m.containerSelector, m), m.count = m.slides.length, m.syncExists = 0 < b(m.vars.sync).length, "slide" === m.vars.animation && (m.vars.animation = "swing"), m.prop = g ? "top" : "marginLeft", m.args = {}, m.manualPause = !1, m.stopped = !1, m.started = !1, m.startTimeout = null, m.transitions = !m.vars.video && !y && m.vars.useCSS && function () {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var a in t)
                        if (void 0 !== e.style[t[a]]) return m.pfx = t[a].replace("Perspective", "").toLowerCase(), m.prop = "-" + m.pfx + "-transform", !0;
                    return !1
                }(), (m.ensureAnimationEnd = "") !== m.vars.controlsContainer && (m.controlsContainer = 0 < b(m.vars.controlsContainer).length && b(m.vars.controlsContainer)), "" !== m.vars.manualControls && (m.manualControls = 0 < b(m.vars.manualControls).length && b(m.vars.manualControls)), "" !== m.vars.customDirectionNav && (m.customDirectionNav = 2 === b(m.vars.customDirectionNav).length && b(m.vars.customDirectionNav)), m.vars.randomize && (m.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), m.container.empty().append(m.slides)), m.doMath(), m.setup("init"), m.vars.controlNav && x.controlNav.setup(), m.vars.directionNav && x.directionNav.setup(), m.vars.keyboard && (1 === b(m.containerSelector).length || m.vars.multipleKeyboard) && b(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!m.animating && (39 === t || 37 === t)) {
                        var a = 39 === t ? m.getTarget("next") : 37 === t && m.getTarget("prev");
                        m.flexAnimate(a, m.vars.pauseOnAction)
                    }
                }), m.vars.mousewheel && m.bind("mousewheel", function (e, t, a, n) {
                    e.preventDefault();
                    var i = t < 0 ? m.getTarget("next") : m.getTarget("prev");
                    m.flexAnimate(i, m.vars.pauseOnAction)
                }), m.vars.pausePlay && x.pausePlay.setup(), m.vars.slideshow && m.vars.pauseInvisible && x.pauseInvisible.init(), m.vars.slideshow && (m.vars.pauseOnHover && m.hover(function () {
                    m.manualPlay || m.manualPause || m.pause()
                }, function () {
                    m.manualPause || m.manualPlay || m.stopped || m.play()
                }), m.vars.pauseInvisible && x.pauseInvisible.isHidden() || (0 < m.vars.initDelay ? m.startTimeout = setTimeout(m.play, m.vars.initDelay) : m.play())), v && x.asNav.setup(), u && m.vars.touch && x.touch(), (!y || y && m.vars.smoothHeight) && b(window).bind("resize orientationchange focus", x.resize), m.find("img").attr("draggable", "false"), setTimeout(function () {
                    m.vars.start(m)
                }, 200)
            },
            asNav: {
                setup: function () {
                    m.asNav = !0, m.animatingTo = Math.floor(m.currentSlide / m.move), m.currentItem = m.currentSlide, m.slides.removeClass(d + "active-slide").eq(m.currentItem).addClass(d + "active-slide"), f ? (p._slider = m).slides.each(function () {
                        var e = this;
                        e._gesture = new MSGesture, (e._gesture.target = e).addEventListener("MSPointerDown", function (e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function (e) {
                            e.preventDefault();
                            var t = b(this),
                                a = t.index();
                            b(m.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (m.direction = m.currentItem < a ? "next" : "prev", m.flexAnimate(a, m.vars.pauseOnAction, !1, !0, !0))
                        })
                    }) : m.slides.on(o, function (e) {
                        e.preventDefault();
                        var t = b(this),
                            a = t.index();
                        t.offset().left - b(m).scrollLeft() <= 0 && t.hasClass(d + "active-slide") ? m.flexAnimate(m.getTarget("prev"), !0) : b(m.vars.asNavFor).data("flexslider").animating || t.hasClass(d + "active-slide") || (m.direction = m.currentItem < a ? "next" : "prev", m.flexAnimate(a, m.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function () {
                    m.manualControls ? x.controlNav.setupManual() : x.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var e, t, a = "thumbnails" === m.vars.controlNav ? "control-thumbs" : "control-paging",
                        n = 1;
                    if (m.controlNavScaffold = b('<ol class="' + d + "control-nav " + d + a + '"></ol>'), 1 < m.pagingCount)
                        for (var i = 0; i < m.pagingCount; i++) {
                            void 0 === (t = m.slides.eq(i)).attr("data-thumb-alt") && t.attr("data-thumb-alt", "");
                            var s = "" !== t.attr("data-thumb-alt") ? s = ' alt="' + t.attr("data-thumb-alt") + '"' : "";
                            if (e = "thumbnails" === m.vars.controlNav ? '<img src="' + t.attr("data-thumb") + '"' + s + "/>" : '<a href="#">' + n + "</a>", "thumbnails" === m.vars.controlNav && !0 === m.vars.thumbCaptions) {
                                var r = t.attr("data-thumbcaption");
                                "" !== r && void 0 !== r && (e += '<span class="' + d + 'caption">' + r + "</span>")
                            }
                            m.controlNavScaffold.append("<li>" + e + "</li>"), n++
                        }
                    m.controlsContainer ? b(m.controlsContainer).append(m.controlNavScaffold) : m.append(m.controlNavScaffold), x.controlNav.set(), x.controlNav.active(), m.controlNavScaffold.delegate("a, img", o, function (e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = b(this),
                                a = m.controlNav.index(t);
                            t.hasClass(d + "active") || (m.direction = a > m.currentSlide ? "next" : "prev", m.flexAnimate(a, m.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), x.setToClearWatchedEvent()
                    })
                },
                setupManual: function () {
                    m.controlNav = m.manualControls, x.controlNav.active(), m.controlNav.bind(o, function (e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = b(this),
                                a = m.controlNav.index(t);
                            t.hasClass(d + "active") || (a > m.currentSlide ? m.direction = "next" : m.direction = "prev", m.flexAnimate(a, m.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), x.setToClearWatchedEvent()
                    })
                },
                set: function () {
                    var e = "thumbnails" === m.vars.controlNav ? "img" : "a";
                    m.controlNav = b("." + d + "control-nav li " + e, m.controlsContainer ? m.controlsContainer : m)
                },
                active: function () {
                    m.controlNav.removeClass(d + "active").eq(m.animatingTo).addClass(d + "active")
                },
                update: function (e, t) {
                    1 < m.pagingCount && "add" === e ? m.controlNavScaffold.append(b('<li><a href="#">' + m.count + "</a></li>")) : 1 === m.pagingCount ? m.controlNavScaffold.find("li").remove() : m.controlNav.eq(t).closest("li").remove(), x.controlNav.set(), 1 < m.pagingCount && m.pagingCount !== m.controlNav.length ? m.update(t, e) : x.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var e = b('<ul class="' + d + 'direction-nav"><li class="' + d + 'nav-prev"><a class="' + d + 'prev" href="#">' + m.vars.prevText + '</a></li><li class="' + d + 'nav-next"><a class="' + d + 'next" href="#">' + m.vars.nextText + "</a></li></ul>");
                    m.customDirectionNav ? m.directionNav = m.customDirectionNav : m.controlsContainer ? (b(m.controlsContainer).append(e), m.directionNav = b("." + d + "direction-nav li a", m.controlsContainer)) : (m.append(e), m.directionNav = b("." + d + "direction-nav li a", m)), x.directionNav.update(), m.directionNav.bind(o, function (e) {
                        var t;
                        e.preventDefault(), ("" === l || l === e.type) && (t = b(this).hasClass(d + "next") ? m.getTarget("next") : m.getTarget("prev"), m.flexAnimate(t, m.vars.pauseOnAction)), "" === l && (l = e.type), x.setToClearWatchedEvent()
                    })
                },
                update: function () {
                    var e = d + "disabled";
                    1 === m.pagingCount ? m.directionNav.addClass(e).attr("tabindex", "-1") : m.vars.animationLoop ? m.directionNav.removeClass(e).removeAttr("tabindex") : 0 === m.animatingTo ? m.directionNav.removeClass(e).filter("." + d + "prev").addClass(e).attr("tabindex", "-1") : m.animatingTo === m.last ? m.directionNav.removeClass(e).filter("." + d + "next").addClass(e).attr("tabindex", "-1") : m.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function () {
                    var e = b('<div class="' + d + 'pauseplay"><a href="#"></a></div>');
                    m.controlsContainer ? (m.controlsContainer.append(e), m.pausePlay = b("." + d + "pauseplay a", m.controlsContainer)) : (m.append(e), m.pausePlay = b("." + d + "pauseplay a", m)), x.pausePlay.update(m.vars.slideshow ? d + "pause" : d + "play"), m.pausePlay.bind(o, function (e) {
                        e.preventDefault(), ("" === l || l === e.type) && (b(this).hasClass(d + "pause") ? (m.manualPause = !0, m.manualPlay = !1, m.pause()) : (m.manualPause = !1, m.manualPlay = !0, m.play())), "" === l && (l = e.type), x.setToClearWatchedEvent()
                    })
                },
                update: function (e) {
                    "play" === e ? m.pausePlay.removeClass(d + "pause").addClass(d + "play").html(m.vars.playText) : m.pausePlay.removeClass(d + "play").addClass(d + "pause").html(m.vars.pauseText)
                }
            },
            touch: function () {
                var i, s, r, o, l, c, e, n, d, u = !1,
                    t = 0,
                    a = 0,
                    v = 0;
                f ? (p.style.msTouchAction = "none", p._gesture = new MSGesture, (p._gesture.target = p).addEventListener("MSPointerDown", function (e) {
                    e.stopPropagation(), m.animating ? e.preventDefault() : (m.pause(), p._gesture.addPointer(e.pointerId), v = 0, o = g ? m.h : m.w, c = Number(new Date), r = S && h && m.animatingTo === m.last ? 0 : S && h ? m.limit - (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo : S && m.currentSlide === m.last ? m.limit : S ? (m.itemW + m.vars.itemMargin) * m.move * m.currentSlide : h ? (m.last - m.currentSlide + m.cloneOffset) * o : (m.currentSlide + m.cloneOffset) * o)
                }, !1), p._slider = m, p.addEventListener("MSGestureChange", function (e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        var a = -e.translationX,
                            n = -e.translationY;
                        return l = v += g ? n : a, u = g ? Math.abs(v) < Math.abs(-a) : Math.abs(v) < Math.abs(-n), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            p._gesture.stop()
                        }) : void((!u || 500 < Number(new Date) - c) && (e.preventDefault(), !y && t.transitions && (t.vars.animationLoop || (l = v / (0 === t.currentSlide && v < 0 || t.currentSlide === t.last && 0 < v ? Math.abs(v) / o + 2 : 1)), t.setProps(r + l, "setTouch"))))
                    }
                }, !1), p.addEventListener("MSGestureEnd", function (e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !u && null !== l) {
                            var a = h ? -l : l,
                                n = 0 < a ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(n) && (Number(new Date) - c < 550 && 50 < Math.abs(a) || Math.abs(a) > o / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : y || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        r = l = s = i = null, v = 0
                    }
                }, !1)) : (e = function (e) {
                    m.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (m.pause(), o = g ? m.h : m.w, c = Number(new Date), t = e.touches[0].pageX, a = e.touches[0].pageY, r = S && h && m.animatingTo === m.last ? 0 : S && h ? m.limit - (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo : S && m.currentSlide === m.last ? m.limit : S ? (m.itemW + m.vars.itemMargin) * m.move * m.currentSlide : h ? (m.last - m.currentSlide + m.cloneOffset) * o : (m.currentSlide + m.cloneOffset) * o, i = g ? a : t, s = g ? t : a, p.addEventListener("touchmove", n, !1), p.addEventListener("touchend", d, !1))
                }, n = function (e) {
                    t = e.touches[0].pageX, a = e.touches[0].pageY, l = g ? i - a : i - t;
                    (!(u = g ? Math.abs(l) < Math.abs(t - s) : Math.abs(l) < Math.abs(a - s)) || 500 < Number(new Date) - c) && (e.preventDefault(), !y && m.transitions && (m.vars.animationLoop || (l /= 0 === m.currentSlide && l < 0 || m.currentSlide === m.last && 0 < l ? Math.abs(l) / o + 2 : 1), m.setProps(r + l, "setTouch")))
                }, d = function (e) {
                    if (p.removeEventListener("touchmove", n, !1), m.animatingTo === m.currentSlide && !u && null !== l) {
                        var t = h ? -l : l,
                            a = 0 < t ? m.getTarget("next") : m.getTarget("prev");
                        m.canAdvance(a) && (Number(new Date) - c < 550 && 50 < Math.abs(t) || Math.abs(t) > o / 2) ? m.flexAnimate(a, m.vars.pauseOnAction) : y || m.flexAnimate(m.currentSlide, m.vars.pauseOnAction, !0)
                    }
                    p.removeEventListener("touchend", d, !1), r = l = s = i = null
                }, p.addEventListener("touchstart", e, !1))
            },
            resize: function () {
                !m.animating && m.is(":visible") && (S || m.doMath(), y ? x.smoothHeight() : S ? (m.slides.width(m.computedW), m.update(m.pagingCount), m.setProps()) : g ? (m.viewport.height(m.h), m.setProps(m.h, "setTotal")) : (m.vars.smoothHeight && x.smoothHeight(), m.newSlides.width(m.computedW), m.setProps(m.computedW, "setTotal")))
            },
            smoothHeight: function (e) {
                if (!g || y) {
                    var t = y ? m : m.viewport;
                    e ? t.animate({
                        height: m.slides.eq(m.animatingTo).innerHeight()
                    }, e) : t.innerHeight(m.slides.eq(m.animatingTo).innerHeight())
                }
            },
            sync: function (e) {
                var t = b(m.vars.sync).data("flexslider"),
                    a = m.animatingTo;
                switch (e) {
                    case "animate":
                        t.flexAnimate(a, m.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        t.playing || t.asNav || t.play();
                        break;
                    case "pause":
                        t.pause()
                }
            },
            uniqueID: function (e) {
                return e.filter("[id]").add(e.find("[id]")).each(function () {
                    var e = b(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var e = x.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function () {
                            x.pauseInvisible.isHidden() ? m.startTimeout ? clearTimeout(m.startTimeout) : m.pause() : m.started ? m.play() : 0 < m.vars.initDelay ? setTimeout(m.play, m.vars.initDelay) : m.play()
                        })
                    }
                },
                isHidden: function () {
                    var e = x.pauseInvisible.getHiddenProp();
                    return !!e && document[e]
                },
                getHiddenProp: function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(t), t = setTimeout(function () {
                    l = ""
                }, 3e3)
            }
        }, m.flexAnimate = function (e, t, a, n, i) {
            if (m.vars.animationLoop || e === m.currentSlide || (m.direction = e > m.currentSlide ? "next" : "prev"), v && 1 === m.pagingCount && (m.direction = m.currentItem < e ? "next" : "prev"), !m.animating && (m.canAdvance(e, i) || a) && m.is(":visible")) {
                if (v && n) {
                    var s = b(m.vars.asNavFor).data("flexslider");
                    if (m.atEnd = 0 === e || e === m.count - 1, s.flexAnimate(e, !0, !1, !0, i), m.direction = m.currentItem < e ? "next" : "prev", s.direction = m.direction, Math.ceil((e + 1) / m.visible) - 1 === m.currentSlide || 0 === e) return m.currentItem = e, m.slides.removeClass(d + "active-slide").eq(e).addClass(d + "active-slide"), !1;
                    m.currentItem = e, m.slides.removeClass(d + "active-slide").eq(e).addClass(d + "active-slide"), e = Math.floor(e / m.visible)
                }
                if (m.animating = !0, m.animatingTo = e, t && m.pause(), m.vars.before(m), m.syncExists && !i && x.sync("animate"), m.vars.controlNav && x.controlNav.active(), S || m.slides.removeClass(d + "active-slide").eq(e).addClass(d + "active-slide"), m.atEnd = 0 === e || e === m.last, m.vars.directionNav && x.directionNav.update(), e === m.last && (m.vars.end(m), m.vars.animationLoop || m.pause()), y) u ? (m.slides.eq(m.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), m.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), m.wrapup(c)) : (m.slides.eq(m.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, m.vars.animationSpeed, m.vars.easing), m.slides.eq(e).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, m.vars.animationSpeed, m.vars.easing, m.wrapup));
                else {
                    var r, o, l, c = g ? m.slides.filter(":first").height() : m.computedW;
                    S ? (r = m.vars.itemMargin, o = (l = (m.itemW + r) * m.move * m.animatingTo) > m.limit && 1 !== m.visible ? m.limit : l) : o = 0 === m.currentSlide && e === m.count - 1 && m.vars.animationLoop && "next" !== m.direction ? h ? (m.count + m.cloneOffset) * c : 0 : m.currentSlide === m.last && 0 === e && m.vars.animationLoop && "prev" !== m.direction ? h ? 0 : (m.count + 1) * c : h ? (m.count - 1 - e + m.cloneOffset) * c : (e + m.cloneOffset) * c, m.setProps(o, "", m.vars.animationSpeed), m.transitions ? (m.vars.animationLoop && m.atEnd || (m.animating = !1, m.currentSlide = m.animatingTo), m.container.unbind("webkitTransitionEnd transitionend"), m.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(m.ensureAnimationEnd), m.wrapup(c)
                    }), clearTimeout(m.ensureAnimationEnd), m.ensureAnimationEnd = setTimeout(function () {
                        m.wrapup(c)
                    }, m.vars.animationSpeed + 100)) : m.container.animate(m.args, m.vars.animationSpeed, m.vars.easing, function () {
                        m.wrapup(c)
                    })
                }
                m.vars.smoothHeight && x.smoothHeight(m.vars.animationSpeed)
            }
        }, m.wrapup = function (e) {
            y || S || (0 === m.currentSlide && m.animatingTo === m.last && m.vars.animationLoop ? m.setProps(e, "jumpEnd") : m.currentSlide === m.last && 0 === m.animatingTo && m.vars.animationLoop && m.setProps(e, "jumpStart")), m.animating = !1, m.currentSlide = m.animatingTo, m.vars.after(m)
        }, m.animateSlides = function () {
            !m.animating && a && m.flexAnimate(m.getTarget("next"))
        }, m.pause = function () {
            clearInterval(m.animatedSlides), m.animatedSlides = null, m.playing = !1, m.vars.pausePlay && x.pausePlay.update("play"), m.syncExists && x.sync("pause")
        }, m.play = function () {
            m.playing && clearInterval(m.animatedSlides), m.animatedSlides = m.animatedSlides || setInterval(m.animateSlides, m.vars.slideshowSpeed), m.started = m.playing = !0, m.vars.pausePlay && x.pausePlay.update("pause"), m.syncExists && x.sync("play")
        }, m.stop = function () {
            m.pause(), m.stopped = !0
        }, m.canAdvance = function (e, t) {
            var a = v ? m.pagingCount - 1 : m.last;
            return !!t || (!(!v || m.currentItem !== m.count - 1 || 0 !== e || "prev" !== m.direction) || (!v || 0 !== m.currentItem || e !== m.pagingCount - 1 || "next" === m.direction) && (!(e === m.currentSlide && !v) && (!!m.vars.animationLoop || (!m.atEnd || 0 !== m.currentSlide || e !== a || "next" === m.direction) && (!m.atEnd || m.currentSlide !== a || 0 !== e || "next" !== m.direction))))
        }, m.getTarget = function (e) {
            return "next" === (m.direction = e) ? m.currentSlide === m.last ? 0 : m.currentSlide + 1 : 0 === m.currentSlide ? m.last : m.currentSlide - 1
        }, m.setProps = function (e, t, a) {
            var n, i = (n = e || (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo, -1 * function () {
                if (S) return "setTouch" === t ? e : h && m.animatingTo === m.last ? 0 : h ? m.limit - (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo : m.animatingTo === m.last ? m.limit : n;
                switch (t) {
                    case "setTotal":
                        return h ? (m.count - 1 - m.currentSlide + m.cloneOffset) * e : (m.currentSlide + m.cloneOffset) * e;
                    case "setTouch":
                        return e;
                    case "jumpEnd":
                        return h ? e : m.count * e;
                    case "jumpStart":
                        return h ? m.count * e : e;
                    default:
                        return e
                }
            }() + "px");
            m.transitions && (i = g ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", m.container.css("-" + m.pfx + "-transition-duration", a), m.container.css("transition-duration", a)), m.args[m.prop] = i, (m.transitions || void 0 === a) && m.container.css(m.args), m.container.css("transform", i)
        }, m.setup = function (e) {
            var t, a;
            y ? (m.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (u ? m.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + m.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(m.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == m.vars.fadeFirstSlide ? m.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(m.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : m.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(m.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, m.vars.animationSpeed, m.vars.easing)), m.vars.smoothHeight && x.smoothHeight()) : ("init" === e && (m.viewport = b('<div class="' + d + 'viewport"></div>').css({
                overflow: "hidden",
                position: "relative"
            }).appendTo(m).append(m.container), m.cloneCount = 0, m.cloneOffset = 0, h && (a = b.makeArray(m.slides).reverse(), m.slides = b(a), m.container.empty().append(m.slides))), m.vars.animationLoop && !S && (m.cloneCount = 2, m.cloneOffset = 1, "init" !== e && m.container.find(".clone").remove(), m.container.append(x.uniqueID(m.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(x.uniqueID(m.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), m.newSlides = b(m.vars.selector, m), t = h ? m.count - 1 - m.currentSlide + m.cloneOffset : m.currentSlide + m.cloneOffset, g && !S ? (m.container.height(200 * (m.count + m.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                m.newSlides.css({
                    display: "block"
                }), m.doMath(), m.viewport.height(m.h), m.setProps(t * m.h, "init")
            }, "init" === e ? 100 : 0)) : (m.container.width(200 * (m.count + m.cloneCount) + "%"), m.setProps(t * m.computedW, "init"), setTimeout(function () {
                m.doMath(), m.newSlides.css({
                    width: m.computedW,
                    marginRight: m.computedM,
                    float: "left",
                    display: "block"
                }), m.vars.smoothHeight && x.smoothHeight()
            }, "init" === e ? 100 : 0)));
            S || m.slides.removeClass(d + "active-slide").eq(m.currentSlide).addClass(d + "active-slide"), m.vars.init(m)
        }, m.doMath = function () {
            var e = m.slides.first(),
                t = m.vars.itemMargin,
                a = m.vars.minItems,
                n = m.vars.maxItems;
            m.w = void 0 === m.viewport ? m.width() : m.viewport.width(), m.h = e.height(), m.boxPadding = e.outerWidth() - e.width(), S ? (m.itemT = m.vars.itemWidth + t, m.itemM = t, m.minW = a ? a * m.itemT : m.w, m.maxW = n ? n * m.itemT - t : m.w, m.itemW = m.minW > m.w ? (m.w - t * (a - 1)) / a : m.maxW < m.w ? (m.w - t * (n - 1)) / n : m.vars.itemWidth > m.w ? m.w : m.vars.itemWidth, m.visible = Math.floor(m.w / m.itemW), m.move = 0 < m.vars.move && m.vars.move < m.visible ? m.vars.move : m.visible, m.pagingCount = Math.ceil((m.count - m.visible) / m.move + 1), m.last = m.pagingCount - 1, m.limit = 1 === m.pagingCount ? 0 : m.vars.itemWidth > m.w ? m.itemW * (m.count - 1) + t * (m.count - 1) : (m.itemW + t) * m.count - m.w - t) : (m.itemW = m.w, m.itemM = t, m.pagingCount = m.count, m.last = m.count - 1), m.computedW = m.itemW - m.boxPadding, m.computedM = m.itemM
        }, m.update = function (e, t) {
            m.doMath(), S || (e < m.currentSlide ? m.currentSlide += 1 : e <= m.currentSlide && 0 !== e && (m.currentSlide -= 1), m.animatingTo = m.currentSlide), m.vars.controlNav && !m.manualControls && ("add" === t && !S || m.pagingCount > m.controlNav.length ? x.controlNav.update("add") : ("remove" === t && !S || m.pagingCount < m.controlNav.length) && (S && m.currentSlide > m.last && (m.currentSlide -= 1, m.animatingTo -= 1), x.controlNav.update("remove", m.last))), m.vars.directionNav && x.directionNav.update()
        }, m.addSlide = function (e, t) {
            var a = b(e);
            m.count += 1, m.last = m.count - 1, g && h ? void 0 !== t ? m.slides.eq(m.count - t).after(a) : m.container.prepend(a) : void 0 !== t ? m.slides.eq(t).before(a) : m.container.append(a), m.update(t, "add"), m.slides = b(m.vars.selector + ":not(.clone)", m), m.setup(), m.vars.added(m)
        }, m.removeSlide = function (e) {
            var t = isNaN(e) ? m.slides.index(b(e)) : e;
            m.count -= 1, m.last = m.count - 1, isNaN(e) ? b(e, m.slides).remove() : g && h ? m.slides.eq(m.last).remove() : m.slides.eq(e).remove(), m.doMath(), m.update(t, "remove"), m.slides = b(m.vars.selector + ":not(.clone)", m), m.setup(), m.vars.removed(m)
        }, x.init()
    }, b(window).blur(function (e) {
        a = !1
    }).focus(function (e) {
        a = !0
    }), b.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
        init: function () {}
    }, b.fn.flexslider = function (n) {
        if (void 0 === n && (n = {}), "object" == typeof n) return this.each(function () {
            var e = b(this),
                t = n.selector ? n.selector : ".slides > li",
                a = e.find(t);
            1 === a.length && !1 === n.allowOneSlide || 0 === a.length ? (a.fadeIn(400), n.start && n.start(e)) : void 0 === e.data("flexslider") && new b.flexslider(this, n)
        });
        var e = b(this).data("flexslider");
        switch (n) {
            case "play":
                e.play();
                break;
            case "pause":
                e.pause();
                break;
            case "stop":
                e.stop();
                break;
            case "next":
                e.flexAnimate(e.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                e.flexAnimate(e.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof n && e.flexAnimate(n, !0)
        }
    }
}(jQuery);
! function (c) {
    c.fn.jflickrfeed = function (p, i) {
        var e = (p = c.extend(!0, {
                flickrbase: "http://api.flickr.com/services/feeds/",
                feedapi: "photos_public.gne",
                limit: 20,
                qstrings: {
                    lang: "en-us",
                    format: "json",
                    jsoncallback: "?"
                },
                cleanDescription: !0,
                useTemplate: !0,
                itemTemplate: "",
                itemCallback: function () {}
            }, p)).flickrbase + p.feedapi + "?",
            a = !0;
        for (var t in p.qstrings) a || (e += "&"), e += t + "=" + p.qstrings[t], a = !1;
        return c(this).each(function () {
            var r = c(this),
                l = this;
            c.getJSON(e, function (e) {
                c.each(e.items, function (e, i) {
                    if (e < p.limit) {
                        if (p.cleanDescription) {
                            var a = /<p>(.*?)<\/p>/g,
                                t = i.description;
                            a.test(t) && (i.description = t.match(a)[2], null != i.description && (i.description = i.description.replace("<p>", "").replace("</p>", "")))
                        }
                        if (i.image_s = i.media.m.replace("_m", "_s"), i.image_t = i.media.m.replace("_m", "_t"), i.image_m = i.media.m.replace("_m", "_m"), i.image = i.media.m.replace("_m", ""), i.image_b = i.media.m.replace("_m", "_b"), delete i.media, p.useTemplate) {
                            var c = p.itemTemplate;
                            for (var n in i) {
                                var m = new RegExp("{{" + n + "}}", "g");
                                c = c.replace(m, i[n])
                            }
                            r.append(c)
                        }
                        p.itemCallback.call(l, i)
                    }
                }), c.isFunction(i) && i.call(l, e)
            })
        })
    }
}(jQuery);
"function" != typeof Object.create && (Object.create = function (t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function (u, t, e, s) {
        var a = {
            API_URL: "https://api.instagram.com/v1",
            initialize: function (t, e) {
                this.elem = e, this.$elem = u(e), this.accessToken = u.fn.spectragram.accessData.accessToken, this.options = u.extend({}, u.fn.spectragram.options, t), this.endpoints = this.setEndpoints(), this.messages = {
                    defaultImageAltText: "Instagram Photo related with " + this.options.query,
                    notFound: "This user account is private or doesn't have any photos."
                }
            },
            setEndpoints: function () {
                return {
                    usersSelf: "/users/self/?access_token=" + this.accessToken,
                    usersMediaRecent: "/users/self/media/recent/?&count=" + this.options.max + "&access_token=" + this.accessToken,
                    tagsMediaRecent: "/tags/" + this.options.query + "/media/recent?&count=" + this.options.max + "&access_token=" + this.accessToken
                }
            },
            getPhotos: function (t) {
                var s = this;
                s.fetch(t).done(function (t) {
                    var e = s.options.query || "User";
                    t.data.length ? s.display(t) : u.error("Spectragram.js - Error: " + e + " does not have photos.")
                })
            },
            getUserFeed: function () {
                this.getPhotos(this.endpoints.usersMediaRecent)
            },
            getRecentTagged: function () {
                this.getPhotos(this.endpoints.tagsMediaRecent)
            },
            fetch: function (t) {
                var e = this.API_URL + t;
                return u.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    cache: !1,
                    url: e
                })
            },
            display: function (t) {
                var e, s, a, i, n, o, r, c, h, d = [];
                if (a = 0 === u(this.options.wrapEachWith).length, void 0 === t.data || 200 !== t.meta.code || 0 === t.data.length) a ? this.$elem.append(this.messages.notFound) : this.$elem.append(u(this.options.wrapEachWith).append(this.messages.notFound));
                else {
                    r = this.options.max >= t.data.length ? t.data.length : this.options.max, c = this.options.size;
                    for (var p = 0; p < r; p++) "small" === c ? (h = t.data[p].images.thumbnail.url, n = t.data[p].images.thumbnail.height, o = t.data[p].images.thumbnail.width) : "medium" === c ? (h = t.data[p].images.low_resolution.url, n = t.data[p].images.low_resolution.height, o = t.data[p].images.low_resolution.width) : (h = t.data[p].images.standard_resolution.url, n = t.data[p].images.standard_resolution.height, o = t.data[p].images.standard_resolution.width), i = null !== t.data[p].caption ? u("<span>").text(t.data[p].caption.text).html() : this.messages.defaultImageAltText, s = u("<img>", {
                        alt: i,
                        attr: {
                            height: n,
                            width: o
                        },
                        src: h
                    }), e = u("<a>", {
                        href: t.data[p].link,
                        target: "_blank",
                        title: i
                    }).append(s), a ? d.push(e) : d.push(u(this.options.wrapEachWith).append(e));
                    this.$elem.append(d)
                }
                "function" == typeof this.options.complete && this.options.complete.call(this)
            }
        };
        jQuery.fn.spectragram = function (e, s) {
            jQuery.fn.spectragram.accessData.accessToken ? this.each(function () {
                var t = Object.create(a);
                if (t.initialize(s, this), t[e]) return t[e](this);
                u.error("Method " + e + " does not exist on jQuery.spectragram")
            }) : u.error("You must define an accessToken on jQuery.spectragram")
        }, jQuery.fn.spectragram.options = {
            complete: null,
            max: 20,
            query: "instagram",
            size: "medium",
            wrapEachWith: "<li></li>"
        }, jQuery.fn.spectragram.accessData = {
            accessToken: null
        }
    }(jQuery, window, document);
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (l) {
    function s(e, t) {
        var i, s, n, a = e.nodeName.toLowerCase();
        return "area" === a ? (s = (i = e.parentNode).name, !(!e.href || !s || "map" !== i.nodeName.toLowerCase()) && (!!(n = l("img[usemap='#" + s + "']")[0]) && o(n))) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a && e.href || t) && o(e)
    }

    function o(e) {
        return l.expr.filters.visible(e) && !l(e).parents().addBack().filter(function () {
            return "hidden" === l.css(this, "visibility")
        }).length
    }
    var e, n, t, i;
    l.ui = l.ui || {}, l.extend(l.ui, {
        version: "1.11.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), l.fn.extend({
        scrollParent: function (e) {
            var t = this.css("position"),
                i = "absolute" === t,
                s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                n = this.parents().filter(function () {
                    var e = l(this);
                    return (!i || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== t && n.length ? n : l(this[0].ownerDocument || document)
        },
        uniqueId: (i = 0, function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++i)
            })
        }),
        removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && l(this).removeAttr("id")
            })
        }
    }), l.extend(l.expr[":"], {
        data: l.expr.createPseudo ? l.expr.createPseudo(function (t) {
            return function (e) {
                return !!l.data(e, t)
            }
        }) : function (e, t, i) {
            return !!l.data(e, i[3])
        },
        focusable: function (e) {
            return s(e, !isNaN(l.attr(e, "tabindex")))
        },
        tabbable: function (e) {
            var t = l.attr(e, "tabindex"),
                i = isNaN(t);
            return (i || 0 <= t) && s(e, !i)
        }
    }), l("<a>").outerWidth(1).jquery || l.each(["Width", "Height"], function (e, i) {
        function s(e, t, i, s) {
            return l.each(n, function () {
                t -= parseFloat(l.css(e, "padding" + this)) || 0, i && (t -= parseFloat(l.css(e, "border" + this + "Width")) || 0), s && (t -= parseFloat(l.css(e, "margin" + this)) || 0)
            }), t
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = {
                innerWidth: l.fn.innerWidth,
                innerHeight: l.fn.innerHeight,
                outerWidth: l.fn.outerWidth,
                outerHeight: l.fn.outerHeight
            };
        l.fn["inner" + i] = function (e) {
            return void 0 === e ? o["inner" + i].call(this) : this.each(function () {
                l(this).css(a, s(this, e) + "px")
            })
        }, l.fn["outer" + i] = function (e, t) {
            return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function () {
                l(this).css(a, s(this, e, !0, t) + "px")
            })
        }
    }), l.fn.addBack || (l.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), l("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (l.fn.removeData = (t = l.fn.removeData, function (e) {
        return arguments.length ? t.call(this, l.camelCase(e)) : t.call(this)
    })), l.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), l.fn.extend({
        focus: (n = l.fn.focus, function (t, i) {
            return "number" == typeof t ? this.each(function () {
                var e = this;
                setTimeout(function () {
                    l(e).focus(), i && i.call(e)
                }, t)
            }) : n.apply(this, arguments)
        }),
        disableSelection: (e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
            return this.bind(e + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        }),
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function (e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length)
                for (var t, i, s = l(this[0]); s.length && s[0] !== document;) {
                    if (("absolute" === (t = s.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(s.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    s = s.parent()
                }
            return 0
        }
    }), l.ui.plugin = {
        add: function (e, t, i) {
            var s, n = l.ui[e].prototype;
            for (s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([t, i[s]])
        },
        call: function (e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var a, u = 0,
        r = Array.prototype.slice;
    l.cleanData = (a = l.cleanData, function (e) {
        var t, i, s;
        for (s = 0; null != (i = e[s]); s++) try {
            (t = l._data(i, "events")) && t.remove && l(i).triggerHandler("remove")
        } catch (e) {}
        a(e)
    }), l.widget = function (e, i, t) {
        var s, n, a, o, u = {},
            r = e.split(".")[0];
        return e = e.split(".")[1], s = r + "-" + e, t || (t = i, i = l.Widget), l.expr[":"][s.toLowerCase()] = function (e) {
            return !!l.data(e, s)
        }, l[r] = l[r] || {}, n = l[r][e], a = l[r][e] = function (e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
        }, l.extend(a, n, {
            version: t.version,
            _proto: l.extend({}, t),
            _childConstructors: []
        }), (o = new i).options = l.widget.extend({}, o.options), l.each(t, function (t, s) {
            return l.isFunction(s) ? void(u[t] = (n = function () {
                return i.prototype[t].apply(this, arguments)
            }, a = function (e) {
                return i.prototype[t].apply(this, e)
            }, function () {
                var e, t = this._super,
                    i = this._superApply;
                return this._super = n, this._superApply = a, e = s.apply(this, arguments), this._super = t, this._superApply = i, e
            })) : void(u[t] = s);
            var n, a
        }), a.prototype = l.widget.extend(o, {
            widgetEventPrefix: n && o.widgetEventPrefix || e
        }, u, {
            constructor: a,
            namespace: r,
            widgetName: e,
            widgetFullName: s
        }), n ? (l.each(n._childConstructors, function (e, t) {
            var i = t.prototype;
            l.widget(i.namespace + "." + i.widgetName, a, t._proto)
        }), delete n._childConstructors) : i._childConstructors.push(a), l.widget.bridge(e, a), a
    }, l.widget.extend = function (e) {
        for (var t, i, s = r.call(arguments, 1), n = 0, a = s.length; n < a; n++)
            for (t in s[n]) i = s[n][t], s[n].hasOwnProperty(t) && void 0 !== i && (e[t] = l.isPlainObject(i) ? l.isPlainObject(e[t]) ? l.widget.extend({}, e[t], i) : l.widget.extend({}, i) : i);
        return e
    }, l.widget.bridge = function (a, t) {
        var o = t.prototype.widgetFullName || a;
        l.fn[a] = function (i) {
            var e = "string" == typeof i,
                s = r.call(arguments, 1),
                n = this;
            return i = !e && s.length ? l.widget.extend.apply(null, [i].concat(s)) : i, e ? this.each(function () {
                var e, t = l.data(this, o);
                return "instance" === i ? (n = t, !1) : t ? l.isFunction(t[i]) && "_" !== i.charAt(0) ? (e = t[i].apply(t, s)) !== t && void 0 !== e ? (n = e && e.jquery ? n.pushStack(e.get()) : e, !1) : void 0 : l.error("no such method '" + i + "' for " + a + " widget instance") : l.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + i + "'")
            }) : this.each(function () {
                var e = l.data(this, o);
                e ? (e.option(i || {}), e._init && e._init()) : l.data(this, o, new t(i, this))
            }), n
        }
    }, l.Widget = function () {}, l.Widget._childConstructors = [], l.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (e, t) {
            t = l(t || this.defaultElement || this)[0], this.element = l(t), this.uuid = u++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = l.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = l(), this.hoverable = l(), this.focusable = l(), t !== this && (l.data(t, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === t && this.destroy()
                }
            }), this.document = l(t.style ? t.ownerDocument : t.document || t), this.window = l(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: l.noop,
        _getCreateEventData: l.noop,
        _create: l.noop,
        _init: l.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(l.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: l.noop,
        widget: function () {
            return this.element
        },
        option: function (e, t) {
            var i, s, n, a = e;
            if (0 === arguments.length) return l.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, e = (i = e.split(".")).shift(), i.length) {
                    for (s = a[e] = l.widget.extend({}, this.options[e]), n = 0; i.length - 1 > n; n++) s[i[n]] = s[i[n]] || {}, s = s[i[n]];
                    if (e = i.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                    s[e] = t
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = t
                } return this._setOptions(a), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function () {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function (o, u, e) {
            var r, h = this;
            "boolean" != typeof o && (e = u, u = o, o = !1), e ? (u = r = l(u), this.bindings = this.bindings.add(u)) : (e = u, u = this.element, r = this.widget()), l.each(e, function (e, t) {
                function i() {
                    return o || !0 !== h.options.disabled && !l(this).hasClass("ui-state-disabled") ? ("string" == typeof t ? h[t] : t).apply(h, arguments) : void 0
                }
                "string" != typeof t && (i.guid = t.guid = t.guid || i.guid || l.guid++);
                var s = e.match(/^([\w:-]*)\s*(.*)$/),
                    n = s[1] + h.eventNamespace,
                    a = s[2];
                a ? r.delegate(a, n, i) : u.bind(n, i)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            var i = this;
            return setTimeout(function () {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }, t || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    l(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (e) {
                    l(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    l(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (e) {
                    l(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (e, t, i) {
            var s, n, a = this.options[e];
            if (i = i || {}, (t = l.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], n = t.originalEvent)
                for (s in n) s in t || (t[s] = n[s]);
            return this.element.trigger(t, i), !(l.isFunction(a) && !1 === a.apply(this.element[0], [t].concat(i)) || t.isDefaultPrevented())
        }
    }, l.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (a, o) {
        l.Widget.prototype["_" + a] = function (t, e, i) {
            "string" == typeof e && (e = {
                effect: e
            });
            var s, n = e ? !0 === e || "number" == typeof e ? o : e.effect || o : a;
            "number" == typeof (e = e || {}) && (e = {
                duration: e
            }), s = !l.isEmptyObject(e), e.complete = i, e.delay && t.delay(e.delay), s && l.effects && l.effects.effect[n] ? t[a](e) : n !== a && t[n] ? t[n](e.duration, e.easing, i) : t.queue(function (e) {
                l(this)[a](), i && i.call(t[0]), e()
            })
        }
    }), l.widget;
    var h = !1;
    l(document).mouseup(function () {
        h = !1
    }), l.widget("ui.mouse", {
        version: "1.11.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (e) {
                return !0 === l.data(e.target, t.widgetName + ".preventClickEvent") ? (l.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (e) {
            if (!h) {
                this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var t = this,
                    i = 1 === e.which,
                    s = !("string" != typeof this.options.cancel || !e.target.nodeName) && l(e.target).closest(this.options.cancel).length;
                return i && !s && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    t.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? e.preventDefault() : (!0 === l.data(e.target, this.widgetName + ".preventClickEvent") && l.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return t._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return t._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), h = !0)), !0
            }
        },
        _mouseMove: function (e) {
            return l.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : e.which ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
        },
        _mouseUp: function (e) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && l.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), h = !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    }), l.widget("ui.slider", l.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var e, t, i = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                n = [];
            for (t = i.values && i.values.length || 1, s.length > t && (s.slice(t).remove(), s = s.slice(0, t)), e = s.length; e < t; e++) n.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = s.add(l(n.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                l(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function () {
            var e = this.options,
                t = "";
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : l.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = l("<div></div>").appendTo(this.element), t = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(t + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var t, i, s, n, a, o, u, r = this,
                h = this.options;
            return !h.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), t = {
                x: e.pageX,
                y: e.pageY
            }, i = this._normValueFromMouse(t), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var t = Math.abs(i - r.values(e));
                (t < s || s === t && (e === r._lastChangedValue || r.values(e) === h.min)) && (s = t, n = l(this), a = e)
            }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, n.addClass("ui-state-active").focus(), o = n.offset(), u = !l(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - o.left - n.width() / 2,
                top: e.pageY - o.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, i), this._animateOff = !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, i, s, n, a;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 1 < (s = i / t) && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function (e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function (e, t, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === t && s < i || 1 === t && i < s) && (i = s), i !== this.values(t) && ((n = this.values())[t] = i, a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n
            }), s = this.values(t ? 0 : 1), !1 !== a && this.values(t, i))) : i !== this.value() && (!1 !== (a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            })) && this.value(i))
        },
        _stop: function (e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function (e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function (e, t) {
            var i, s, n;
            if (1 < arguments.length) return this.options.values[e] = this._trimAlignValue(t), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!l.isArray(e)) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (i = this.options.values, s = e, n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(s[n]), this._change(null, n);
            this._refreshValue()
        },
        _setOption: function (e, t) {
            var i, s = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === t ? (this.options.value = this._values(0), this.options.values = null) : "max" === t && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), l.isArray(this.options.values) && (s = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t), this._super(e, t), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === t ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), i = 0; i < s; i += 1) this._change(null, i);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return this._trimAlignValue(e)
        },
        _values: function (e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = 0 < this.options.step ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                s = e - i;
            return 2 * Math.abs(i) >= t && (s += 0 < i ? t : -t), parseFloat(s.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t, i, e, s, n, a = this.options.range,
                o = this.options,
                u = this,
                r = !this._animateOff && o.animate,
                h = {};
            this.options.values && this.options.values.length ? this.handles.each(function (e) {
                i = (u.values(e) - u._valueMin()) / (u._valueMax() - u._valueMin()) * 100, h["horizontal" === u.orientation ? "left" : "bottom"] = i + "%", l(this).stop(1, 1)[r ? "animate" : "css"](h, o.animate), !0 === u.options.range && ("horizontal" === u.orientation ? (0 === e && u.range.stop(1, 1)[r ? "animate" : "css"]({
                    left: i + "%"
                }, o.animate), 1 === e && u.range[r ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === e && u.range.stop(1, 1)[r ? "animate" : "css"]({
                    bottom: i + "%"
                }, o.animate), 1 === e && u.range[r ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))), t = i
            }) : (e = this.value(), s = this._valueMin(), n = this._valueMax(), i = n !== s ? (e - s) / (n - s) * 100 : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[r ? "animate" : "css"](h, o.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                width: i + "%"
            }, o.animate), "max" === a && "horizontal" === this.orientation && this.range[r ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: o.animate
            }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                height: i + "%"
            }, o.animate), "max" === a && "vertical" === this.orientation && this.range[r ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: o.animate
            }))
        },
        _handleEvents: {
            keydown: function (e) {
                var t, i, s, n = l(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case l.ui.keyCode.HOME:
                    case l.ui.keyCode.END:
                    case l.ui.keyCode.PAGE_UP:
                    case l.ui.keyCode.PAGE_DOWN:
                    case l.ui.keyCode.UP:
                    case l.ui.keyCode.RIGHT:
                    case l.ui.keyCode.DOWN:
                    case l.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, l(e.target).addClass("ui-state-active"), !1 === this._start(e, n))) return
                }
                switch (s = this.options.step, t = i = this.options.values && this.options.values.length ? this.values(n) : this.value(), e.keyCode) {
                    case l.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case l.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case l.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(t + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case l.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(t - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case l.ui.keyCode.UP:
                    case l.ui.keyCode.RIGHT:
                        if (t === this._valueMax()) return;
                        i = this._trimAlignValue(t + s);
                        break;
                    case l.ui.keyCode.DOWN:
                    case l.ui.keyCode.LEFT:
                        if (t === this._valueMin()) return;
                        i = this._trimAlignValue(t - s)
                }
                this._slide(e, n, i)
            },
            keyup: function (e) {
                var t = l(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, t), this._change(e, t), l(e.target).removeClass("ui-state-active"))
            }
        }
    })
});
jQuery(function (_) {
    if ("undefined" == typeof woocommerce_price_slider_params) return !1;
    _("input#min_price, input#max_price").hide(), _(".price_slider, .price_label").show();
    var r = _(".price_slider_amount #min_price").data("min"),
        e = _(".price_slider_amount #max_price").data("max");
    current_min_price = parseInt(r, 10), current_max_price = parseInt(e, 10), woocommerce_price_slider_params.min_price && (current_min_price = parseInt(woocommerce_price_slider_params.min_price, 10)), woocommerce_price_slider_params.max_price && (current_max_price = parseInt(woocommerce_price_slider_params.max_price, 10)), _("body").bind("price_slider_create price_slider_slide", function (r, e, c) {
        "left" === woocommerce_price_slider_params.currency_pos ? (_(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + e), _(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + c)) : "left_space" === woocommerce_price_slider_params.currency_pos ? (_(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + " " + e), _(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + " " + c)) : "right" === woocommerce_price_slider_params.currency_pos ? (_(".price_slider_amount span.from").html(e + woocommerce_price_slider_params.currency_symbol), _(".price_slider_amount span.to").html(c + woocommerce_price_slider_params.currency_symbol)) : "right_space" === woocommerce_price_slider_params.currency_pos && (_(".price_slider_amount span.from").html(e + " " + woocommerce_price_slider_params.currency_symbol), _(".price_slider_amount span.to").html(c + " " + woocommerce_price_slider_params.currency_symbol)), _("body").trigger("price_slider_updated", e, c)
    }), _(".price_slider").slider({
        range: !0,
        animate: !0,
        min: r,
        max: e,
        values: [current_min_price, current_max_price],
        create: function () {
            _(".price_slider_amount #min_price").val(current_min_price), _(".price_slider_amount #max_price").val(current_max_price), _("body").trigger("price_slider_create", [current_min_price, current_max_price])
        },
        slide: function (r, e) {
            _("input#min_price").val(e.values[0]), _("input#max_price").val(e.values[1]), _("body").trigger("price_slider_slide", [e.values[0], e.values[1]])
        },
        change: function (r, e) {
            _("body").trigger("price_slider_change", [e.values[0], e.values[1]])
        }
    })
});
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function (x) {
    var i = /\+/g;

    function l(e) {
        return k.raw ? e : encodeURIComponent(e)
    }

    function v(e, n) {
        var o = k.raw ? e : function (e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(i, " ")), k.json ? JSON.parse(e) : e
            } catch (e) {}
        }(e);
        return x.isFunction(n) ? n(o) : o
    }
    var k = x.cookie = function (e, n, o) {
        if (1 < arguments.length && !x.isFunction(n)) {
            if ("number" == typeof (o = x.extend({}, k.defaults, o)).expires) {
                var i = o.expires,
                    r = o.expires = new Date;
                r.setTime(+r + 864e5 * i)
            }
            return document.cookie = [l(e), "=", (t = n, l(k.json ? JSON.stringify(t) : String(t))), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
        }
        for (var t, c, u = e ? void 0 : {}, a = document.cookie ? document.cookie.split("; ") : [], d = 0, f = a.length; d < f; d++) {
            var p = a[d].split("="),
                s = (c = p.shift(), k.raw ? c : decodeURIComponent(c)),
                m = p.join("=");
            if (e && e === s) {
                u = v(m, n);
                break
            }
            e || void 0 === (m = v(m)) || (u[s] = m)
        }
        return u
    };
    k.defaults = {}, x.removeCookie = function (e, n) {
        return void 0 !== x.cookie(e) && (x.cookie(e, "", x.extend({}, n, {
            expires: -1
        })), !x.cookie(e))
    }
});
! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (a, e) {
    var r = 6,
        i = a.event.add,
        o = a.event.remove,
        d = function (t, e, n) {
            a.event.trigger(e, n, t)
        },
        u = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
            return window.setTimeout(function () {
                t()
            }, 25)
        },
        c = {
            textarea: !0,
            input: !0,
            select: !0,
            button: !0
        },
        m = {
            move: "mousemove",
            cancel: "mouseup dragstart",
            end: "mouseup"
        },
        s = "touchmove",
        f = "touchend",
        t = "touchend";

    function n(t) {
        var n = t,
            a = !1,
            i = !1;

        function e(t) {
            a ? (n(), u(e), a = !(i = !0)) : i = !1
        }
        this.kick = function (t) {
            a = !0, i || e()
        }, this.end = function (t) {
            var e = n;
            t && (i ? (n = a ? function () {
                e(), t()
            } : t, a = !0) : t())
        }
    }

    function v() {
        return !0
    }

    function p() {
        return !1
    }

    function g(t) {
        t.preventDefault()
    }

    function h(t) {
        c[t.target.tagName.toLowerCase()] || t.preventDefault()
    }

    function l(t, e) {
        var n, a;
        if (t.identifiedTouch) return t.identifiedTouch(e);
        for (n = -1, a = t.length; ++n < a;)
            if (t[n].identifier === e) return t[n]
    }

    function X(t, e) {
        var n = l(t.changedTouches, e.identifier);
        if (n && (n.pageX !== e.pageX || n.pageY !== e.pageY)) return n
    }

    function Y(t) {
        _(t, t.data, t, y)
    }

    function w(t) {
        y()
    }

    function y() {
        o(document, m.move, Y), o(document, m.cancel, w)
    }

    function T(t) {
        var e = t.data,
            n = X(t, e);
        n && _(t, e, n, k)
    }

    function S(t) {
        var e = t.data;
        l(t.changedTouches, e.identifier) && k(e.identifier)
    }

    function k(t) {
        o(document, "." + t, T), o(document, "." + t, S)
    }

    function _(t, e, n, a) {
        var i = n.pageX - e.startX,
            o = n.pageY - e.startY;
        i * i + o * o < r * r || function (t, e, n, a, i, o) {
            var r, u;
            e.target;
            r = t.targetTouches, u = t.timeStamp - e.timeStamp, e.type = "movestart", e.distX = a, e.distY = i, e.deltaX = a, e.deltaY = i, e.pageX = n.pageX, e.pageY = n.pageY, e.velocityX = a / u, e.velocityY = i / u, e.targetTouches = r, e.finger = r ? r.length : 1, e._handled = q, e._preventTouchmoveDefault = function () {
                t.preventDefault()
            }, d(e.target, e), o(e.identifier)
        }(t, e, n, i, o, a)
    }

    function q() {
        return this._handled = v, !1
    }

    function A(t) {
        t._handled()
    }

    function D(t) {
        var e = t.data.timer;
        (t.data.touch = t).data.timeStamp = t.timeStamp, e.kick()
    }

    function F(t) {
        var e = t.data.event,
            n = t.data.timer;
        o(document, m.move, D), o(document, m.end, F), b(e, n, function () {
            setTimeout(function () {
                o(e.target, "click", p)
            }, 0)
        })
    }

    function R(t) {
        var e = t.data.event,
            n = t.data.timer,
            a = X(t, e);
        a && (t.preventDefault(), e.targetTouches = t.targetTouches, t.data.touch = a, t.data.timeStamp = t.timeStamp, n.kick())
    }

    function x(t) {
        var e, n = t.data.event,
            a = t.data.timer;
        l(t.changedTouches, n.identifier) && (e = n, o(document, "." + e.identifier, R), o(document, "." + e.identifier, x), b(n, a))
    }

    function b(t, e, n) {
        e.end(function () {
            return t.type = "moveend", d(t.target, t), n && n()
        })
    }
    a.event.special.movestart = {
        setup: function (t, e, n) {
            return i(this, "movestart.move", A), !0
        },
        teardown: function (t) {
            return o(this, "dragstart drag", g), o(this, "mousedown touchstart", h), o(this, "movestart", A), !0
        },
        add: function (t) {
            "move" !== t.namespace && "moveend" !== t.namespace && (i(this, "dragstart." + t.guid + " drag." + t.guid, g, e, t.selector), i(this, "mousedown." + t.guid, h, e, t.selector))
        },
        remove: function (t) {
            "move" !== t.namespace && "moveend" !== t.namespace && (o(this, "dragstart." + t.guid + " drag." + t.guid), o(this, "mousedown." + t.guid))
        },
        _default: function (o) {
            var r, u;
            o._handled() && (r = {
                target: o.target,
                startX: o.startX,
                startY: o.startY,
                pageX: o.pageX,
                pageY: o.pageY,
                distX: o.distX,
                distY: o.distY,
                deltaX: o.deltaX,
                deltaY: o.deltaY,
                velocityX: o.velocityX,
                velocityY: o.velocityY,
                timeStamp: o.timeStamp,
                identifier: o.identifier,
                targetTouches: o.targetTouches,
                finger: o.finger
            }, u = {
                event: r,
                timer: new n(function (t) {
                    var e, n, a, i;
                    e = r, n = u.touch, a = u.timeStamp, i = a - e.timeStamp, e.type = "move", e.distX = n.pageX - e.startX, e.distY = n.pageY - e.startY, e.deltaX = n.pageX - e.pageX, e.deltaY = n.pageY - e.pageY, e.velocityX = .3 * e.velocityX + .7 * e.deltaX / i, e.velocityY = .3 * e.velocityY + .7 * e.deltaY / i, e.pageX = n.pageX, e.pageY = n.pageY, d(o.target, r)
                }),
                touch: e,
                timeStamp: e
            }, o.identifier === e ? (i(o.target, "click", p), i(document, m.move, D, u), i(document, m.end, F, u)) : (o._preventTouchmoveDefault(), i(document, s + "." + o.identifier, R, u), i(document, t + "." + o.identifier, x, u)))
        }
    }, a.event.special.move = {
        setup: function () {
            i(this, "movestart.move", a.noop)
        },
        teardown: function () {
            o(this, "movestart.move", a.noop)
        }
    }, a.event.special.moveend = {
        setup: function () {
            i(this, "movestart.moveend", a.noop)
        },
        teardown: function () {
            o(this, "movestart.moveend", a.noop)
        }
    }, i(document, "mousedown.move", function (t) {
        var e, n;
        1 !== (n = t).which || n.ctrlKey || n.altKey || (e = {
            target: t.target,
            startX: t.pageX,
            startY: t.pageY,
            timeStamp: t.timeStamp
        }, i(document, m.move, Y, e), i(document, m.cancel, w, e))
    }), i(document, "touchstart.move", function (t) {
        var e, n;
        c[t.target.tagName.toLowerCase()] || (n = {
            target: (e = t.changedTouches[0]).target,
            startX: e.pageX,
            startY: e.pageY,
            timeStamp: t.timeStamp,
            identifier: e.identifier
        }, i(document, s + "." + e.identifier, T, n), i(document, f + "." + e.identifier, S, n))
    }), "function" == typeof Array.prototype.indexOf && function (t, e) {
        for (var n = ["changedTouches", "targetTouches"], a = n.length; a--;) - 1 === t.event.props.indexOf(n[a]) && t.event.props.push(n[a])
    }(a)
});
! function (y) {
    y.fn.twentytwenty = function (p) {
        p = y.extend({
            default_offset_pct: .5,
            orientation: "horizontal"
        }, p);
        return this.each(function () {
            var e = p.default_offset_pct,
                d = y(this),
                w = p.orientation,
                t = "vertical" === w ? "down" : "left",
                n = "vertical" === w ? "up" : "right";
            d.wrap("<div class='twentytwenty-wrapper twentytwenty-" + w + "'></div>"), d.append("<div class='twentytwenty-overlay'></div>");
            var r = d.find("img:first"),
                i = d.find("img:last");
            d.append("<div class='twentytwenty-handle'></div>");
            var c = d.find(".twentytwenty-handle");
            c.append("<span class='twentytwenty-" + t + "-arrow'></span>"), c.append("<span class='twentytwenty-" + n + "-arrow'></span>"), d.addClass("twentytwenty-container"), r.addClass("twentytwenty-before"), i.addClass("twentytwenty-after");
            var a = d.find(".twentytwenty-overlay");
            a.append("<div class='twentytwenty-before-label'></div>"), a.append("<div class='twentytwenty-after-label'></div>");
            var s = function (t) {
                var e, n, i, a, s = (e = t, n = r.width(), i = r.height(), {
                    w: n + "px",
                    h: i + "px",
                    cw: e * n + "px",
                    ch: e * i + "px"
                });
                c.css("vertical" === w ? "top" : "left", "vertical" === w ? s.ch : s.cw), a = s, "vertical" === w ? r.css("clip", "rect(0," + a.w + "," + a.ch + ",0)") : r.css("clip", "rect(0," + a.cw + "," + a.h + ",0)"), d.css("height", a.h)
            };
            y(window).on("resize.twentytwenty", function (t) {
                s(e)
            });
            var o = 0,
                l = 0,
                v = 0,
                f = 0;
            c.on("movestart", function (t) {
                (t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY) && "vertical" !== w ? t.preventDefault() : (t.distX < t.distY && t.distX < -t.distY || t.distX > t.distY && t.distX > -t.distY) && "vertical" === w && t.preventDefault(), d.addClass("active"), o = d.offset().left, l = d.offset().top, v = r.width(), f = r.height()
            }), c.on("moveend", function (t) {
                d.removeClass("active")
            }), c.on("move", function (t) {
                d.hasClass("active") && ((e = "vertical" === w ? (t.pageY - l) / f : (t.pageX - o) / v) < 0 && (e = 0), 1 < e && (e = 1), s(e))
            }), d.find("img").on("mousedown", function (t) {
                t.preventDefault()
            }), y(window).trigger("resize.twentytwenty")
        })
    }
}(jQuery);
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (c) {
    c.fn.tweet = function (e) {
        var o = c.extend({
                modpath: "/twitter/",
                username: null,
                list_id: null,
                list: null,
                favorites: !1,
                query: null,
                avatar_size: null,
                count: 3,
                fetch: null,
                page: 1,
                retweets: !0,
                intro_text: null,
                outro_text: null,
                join_text: null,
                auto_join_text_default: "i said,",
                auto_join_text_ed: "i",
                auto_join_text_ing: "i am",
                auto_join_text_reply: "i replied to",
                auto_join_text_url: "i was looking at",
                loading_text: null,
                refresh_interval: null,
                twitter_url: "twitter.com",
                twitter_api_url: "api.twitter.com",
                twitter_search_url: "api.twitter.com",
                template: "{avatar}{time}{join}{text}",
                comparator: function (e, t) {
                    return t.tweet_time - e.tweet_time
                },
                filter: function (e) {
                    return !0
                }
            }, e),
            s = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

        function _(e, t) {
            if ("string" == typeof e) {
                var r = e;
                for (var a in t) {
                    var n = t[a];
                    r = r.replace(new RegExp("{" + a + "}", "g"), null === n ? "" : n)
                }
                return r
            }
            return e(t)
        }

        function t(t, r) {
            return function () {
                var e = [];
                return this.each(function () {
                    e.push(this.replace(t, r))
                }), c(e)
            }
        }

        function u(e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
        }

        function l(e) {
            var t, r, a, i, n = {};
            return n.item = e, n.source = e.source, n.name = e.from_user_name || e.user.name, n.screen_name = e.from_user || e.user.screen_name, n.avatar_size = o.avatar_size, n.avatar_url = function e(t, r) {
                return r ? "user" in t ? t.user.profile_image_url_https : e(t, !1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : t.profile_image_url || t.user.profile_image_url
            }(e, "https:" === document.location.protocol), n.retweet = void 0 !== e.retweeted_status, n.tweet_time = (t = e.created_at, Date.parse(t.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))), n.join_text = "auto" == o.join_text ? (r = e.text).match(/^(@([A-Za-z0-9-_]+)) .*/i) ? o.auto_join_text_reply : r.match(s) ? o.auto_join_text_url : r.match(/^((\w+ed)|just) .*/im) ? o.auto_join_text_ed : r.match(/^(\w*ing) .*/i) ? o.auto_join_text_ing : o.auto_join_text_default : o.join_text, n.tweet_id = e.id_str, n.twitter_base = "http://" + o.twitter_url + "/", n.user_url = n.twitter_base + n.screen_name, n.tweet_url = n.user_url + "/status/" + n.tweet_id, n.reply_url = n.twitter_base + "intent/tweet?in_reply_to=" + n.tweet_id, n.retweet_url = n.twitter_base + "intent/retweet?tweet_id=" + n.tweet_id, n.favorite_url = n.twitter_base + "intent/favorite?tweet_id=" + n.tweet_id, n.retweeted_screen_name = n.retweet && e.retweeted_status.user.screen_name, n.tweet_relative_time = function (e) {
                var t = 1 < arguments.length ? arguments[1] : new Date,
                    r = parseInt((t.getTime() - e) / 1e3, 10);
                return r < 1 ? "just now" : r < 60 ? r + " seconds ago" : r < 120 ? "about a minute ago" : r < 2700 ? "about " + parseInt(r / 60, 10).toString() + " minutes ago" : r < 7200 ? "about an hour ago" : r < 86400 ? "about " + parseInt(r / 3600, 10).toString() + " hours ago" : r < 172800 ? "about a day ago" : "about " + parseInt(r / 86400, 10).toString() + " days ago"
            }(n.tweet_time), n.entities = e.entities ? (e.entities.urls || []).concat(e.entities.media || []) : [], n.tweet_raw_text = n.retweet ? "RT @" + n.retweeted_screen_name + " " + e.retweeted_status.text : e.text, n.tweet_text = c([(a = n.tweet_raw_text, i = n.entities, a.replace(s, function (e) {
                for (var t = /^[a-z]+:/i.test(e) ? e : "http://" + e, r = e, a = 0; a < i.length; ++a) {
                    var n = i[a];
                    if (n.url == t && n.expanded_url) {
                        t = n.expanded_url, r = n.display_url;
                        break
                    }
                }
                return '<a href="' + u(t) + '">' + u(r) + "</a>"
            }))]).linkUser().linkHash()[0], n.tweet_text_fancy = c([n.tweet_text]).makeHeart()[0], n.user = _('<a class="tweet_user" href="{user_url}">@{screen_name}</a>', n), n.join = o.join_text ? _(' <span class="tweet_join">{join_text}</span> ', n) : " ", n.avatar = n.avatar_size ? _('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', n) : "", n.time = _('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', n), n.text = _('<span class="tweet_text">{tweet_text_fancy}</span>', n), n.reply_action = _('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', n), n.retweet_action = _('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', n), n.favorite_action = _('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', n), n
        }
        return c.extend({
            tweet: {
                t: _
            }
        }), c.fn.extend({
            linkUser: t(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + o.twitter_url + '/$2">$2</a>'),
            linkHash: t(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="https://twitter.com/search?q=%23$1' + (o.username && 1 == o.username.length && !o.list ? "&from=" + o.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
            makeHeart: t(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
        }), this.each(function (e, n) {
            var i = c('<ul class="tweet_list">'),
                s = '<p class="tweet_intro">' + o.intro_text + "</p>",
                u = '<p class="tweet_outro">' + o.outro_text + "</p>",
                t = c('<p class="loading">' + o.loading_text + "</p>");
            o.username && "string" == typeof o.username && (o.username = [o.username]), c(n).unbind("tweet:load").bind("tweet:load", function () {
                o.loading_text && c(n).empty().append(t), c.ajax({
                    dataType: "json",
                    type: "post",
                    async: !0,
                    url: o.modpath || "/twitter/",
                    data: {
                        request: function () {
                            o.modpath;
                            var e = null === o.fetch ? o.count : o.fetch,
                                t = {
                                    include_entities: 1
                                };
                            if (o.list) return {
                                host: o.twitter_api_url,
                                url: "/1.1/lists/statuses.json",
                                parameters: c.extend({}, t, {
                                    list_id: o.list_id,
                                    slug: o.list,
                                    owner_screen_name: o.username,
                                    page: o.page,
                                    count: e,
                                    include_rts: o.retweets ? 1 : 0
                                })
                            };
                            if (o.favorites) return {
                                host: o.twitter_api_url,
                                url: "/1.1/favorites/list.json",
                                parameters: c.extend({}, t, {
                                    list_id: o.list_id,
                                    screen_name: o.username,
                                    page: o.page,
                                    count: e
                                })
                            };
                            if (null === o.query && 1 === o.username.length) return {
                                host: o.twitter_api_url,
                                url: "/1.1/statuses/user_timeline.json",
                                parameters: c.extend({}, t, {
                                    screen_name: o.username,
                                    page: o.page,
                                    count: e,
                                    include_rts: o.retweets ? 1 : 0
                                })
                            };
                            var r = o.query || "from:" + o.username.join(" OR from:");
                            return {
                                host: o.twitter_search_url,
                                url: "/1.1/search/tweets.json",
                                parameters: c.extend({}, t, {
                                    q: r,
                                    count: e
                                })
                            }
                        }()
                    },
                    success: function (e, t) {
                        e.message && console.log(e.message);
                        var r = e.response;
                        c(n).empty().append(i), o.intro_text && i.before(s), i.empty(), void 0 !== r.statuses ? resp = r.statuses : void 0 !== r.results ? resp = r.results : resp = r;
                        var a = c.map(resp, l);
                        a = c.grep(a, o.filter).sort(o.comparator).slice(0, o.count), i.append(c.map(a, function (e) {
                            return "<li>" + _(o.template, e) + "</li>"
                        }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"), o.outro_text && i.after(u), c(n).trigger("loaded").trigger(a ? "empty" : "full"), o.refresh_interval && window.setTimeout(function () {
                            c(n).trigger("tweet:load")
                        }, 1e3 * o.refresh_interval)
                    }
                })
            }).trigger("tweet:load")
        })
    }
});
"use strict";
! function (e) {
    e.fn.addWidthClass = function (t) {
        for (var n = e.extend({
                breakpoints: [200, 400, 600, 1e3, 1200]
            }, t), r = "", i = n.breakpoints.length - 1; 0 <= i; i--) r += " width-lt-" + n.breakpoints[i] + " width-gt-" + n.breakpoints[i];
        return this.each(function () {
            for (var i = jQuery(this), e = "", t = n.breakpoints.length - 1; 0 <= t; t--) i.width() <= n.breakpoints[t] ? e += " width-lt-" + n.breakpoints[t] : e += " width-gt-" + n.breakpoints[t];
            i.addClass(e), jQuery(window).on("resize", function () {
                e = "", i.removeClass(r);
                for (var t = n.breakpoints.length - 1; 0 <= t; t--) i.width() <= n.breakpoints[t] ? e += " width-lt-" + n.breakpoints[t] : e += " width-gt-" + n.breakpoints[t];
                i.addClass(e)
            })
        })
    }
}(jQuery);