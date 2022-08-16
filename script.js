// ==UserScript==
// @name         Ed-Protect Bypass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ed-protect.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ed-protect.org
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var links = [];

    for (const element of document.getElementsByClassName("lien")) {
        for (const child of element.children) {
            var link = child.getAttribute("href");
            links.push(link);
        }
    }

    if (links.length > 0) {
        // remove all html from window
        document.body.innerHTML = "";

        document.body.style = "margin: 12.5% 45%;";

        let width = window.innerWidth;
        let height = window.innerHeight;

        let div = document.createElement("div");

        div.style = "position: fixed; inset: 0px; z-index: 2147483647; background: black; height: " + height + "px; width: " + width + "px;";

        // Add all links as a element to the window
        for (const link of links) {
            var a = document.createElement("a");
            a.href = link;
            a.innerHTML = link;
            a.target = "_blank";
            div.appendChild(a);
            // center the link
            a.style.margin = "auto";

            // add a line break
            var br = document.createElement("br");
            div.appendChild(br);

        }

        document.body.appendChild(div);

    }
})();