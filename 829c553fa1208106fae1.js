import"core-js/modules/es.array.from.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.timers.js";import"core-js/modules/es.array.find-index.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";var cells=Array.from(document.querySelectorAll(".hole"));function goblinImg(e,s){-1!==e&&cells[e].classList.remove("goblin"),cells[s].classList.add("goblin")}setInterval((function(){var e=cells.findIndex((function(e){return e.className.includes("goblin")})),s=Math.floor(Math.random()*cells.length);s===e?s=Math.floor(Math.random()*cells.length):goblinImg(e,s)}),1e3);