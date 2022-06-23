// ==UserScript==
// @name         aLtErNaTiNg CaPs
// @version      0.1.1
// @updateURL    https://raw.githubusercontent.com/AnnikaV9/aLtErNaTiNg-CaPs/master/main.meta.js
// @downloadURL  https://raw.githubusercontent.com/AnnikaV9/aLtErNaTiNg-CaPs/master/main.user.js
// @description  A dumb userscript that lets you select text in input and textarea fields and apply alternating caps to it.
// @author       AnnikaV9
// @icon         https://raw.githubusercontent.com/AnnikaV9/aLtErNaTiNg-CaPs/master/icon.ico
// @include      *
// @run-at       context-menu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var alternateCase = function (s) {
        var chars = s.toLowerCase().split("");
        for (var i = 1; i < chars.length; i += 2) {
          chars[i] = chars[i].toUpperCase();
        }
        return chars.join("");
    };
    var elements = document.querySelectorAll("input, textarea")
    for (var i = 0; i < elements.length; i += 1) {
      try {
        var textarea = elements[i];
        var len = textarea.value.length;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selection = textarea.value.substring(start, end);
        textarea.value = textarea.value.substring(0, start) + alternateCase(selection) + textarea.value.substring(end, len);
      } catch {
        null
      }
    }
})();
