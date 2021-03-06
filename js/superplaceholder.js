/*! superplaceholder.js - v0.1.2 - 2018-03-28
 * http://kushagragour.in/lab/superplaceholderjs/
 * Copyright (c) 2018 Kushagra Gour; Licensed CC-BY-ND-4.0 */

! function() {
    function a(a, b) { var c = {}; for (var d in a) c[d] = void 0 === b[d] ? a[d] : b[d]; return c }

    function b(b, c, d) { this.el = b, this.texts = c, d = d || {}, this.options = a(e, d), this.timeouts = [], this.begin() } var c = document.createElement("input"),
        d = "placeholder" in c,
        e = { letterDelay: 100, sentenceDelay: 1e3, loop: !1, startOnFocus: !0, shuffle: !1, showCursor: !0, cursor: "|" };
    b.prototype.begin = function() { var a, b, c = this; if (c.originalPlaceholder = c.el.getAttribute("placeholder"), c.options.shuffle)
            for (var d = c.texts.length; d--;) b = ~~(Math.random() * d), a = c.texts[b], c.texts[b] = c.texts[d], c.texts[d] = a;
        c.options.startOnFocus ? (c.el.addEventListener("focus", function() { c.processText(0) }), c.el.addEventListener("blur", function() { c.cleanUp() })) : c.processText(0) }, b.prototype.cleanUp = function() { for (var a = this.timeouts.length; a--;) clearTimeout(this.timeouts[a]);
        null === this.originalPlaceholder ? this.el.removeAttribute("placeholder") : this.el.setAttribute("placeholder", this.originalPlaceholder), this.timeouts.length = 0 }, b.prototype.typeString = function(a, b) {
        function c(c) { e.el.setAttribute("placeholder", a.substr(0, c + 1) + (c !== a.length - 1 && e.options.showCursor ? e.options.cursor : "")), c === a.length - 1 && b() } var d, e = this; if (!a) return !1; for (var f = 0; f < a.length; f++) d = setTimeout(c, f * e.options.letterDelay, f), e.timeouts.push(d) }, b.prototype.processText = function(a) { var b, c = this;
        c.typeString(c.texts[a], function() { b = setTimeout(function() { c.processText(c.options.loop ? (a + 1) % c.texts.length : a + 1) }, c.options.sentenceDelay), c.timeouts.push(b) }) }; var f = function(a) { d && new b(a.el, a.sentences, a.options) }; "object" == typeof exports ? module.exports = f : "function" == typeof define && define.amd ? define(function() { return f }) : window.superplaceholder = f }();