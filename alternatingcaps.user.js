// ==UserScript==
// @name        aLtErNaTiNg CaPs
// @include     *
// @version     0.1
// @run-at      context-menu
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
    var elements = document.getElementsByTagName("*");
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
