(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>o});var n=function(e,t){t.forEach((function(t){var n=e.document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t),e.document.getElementsByTagName("head")[0].appendChild(n)}))};const o={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.prototype.$htmlToPaper=function(e,o){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},r="_blank",i=["fullscreen=yes","titlebar=yes","scrollbars=yes"],s=[],u=!0,a=t.name,c=void 0===a?r:a,d=t.specs,m=void 0===d?i:d,y=t.styles,f=void 0===y?s:y,p=(t.timeout,t.autoClose),v=void 0===p?u:p;null!=o&&o.name&&(c=o.name),null!=o&&o.specs&&(m=o.specs),null!=o&&o.styles&&(f=o.styles),null!=o&&o.timeout&&o.timeout,null!=o&&o.autoClose&&(v=o.autoClose),m=m.length?m.join(","):"";var b=e;if(("string"==typeof e||e instanceof String)&&(b=window.document.getElementById(e)),b){var h="",g=window.open(h,c,m);g.document.write("\n        <html>\n          <head>\n            <title>".concat(window.document.title,"</title>\n          </head>\n          <body>\n            ").concat(b.innerHTML,"\n          </body>\n        </html>\n      ")),n(g,f);var w=new Promise((function(e){setTimeout((function(){g.focus(),g.print(),v&&g.document.close(),v&&g.close(),l&&l(),e()}),1e3)}));return!!l||w}alert("Element to print #".concat(e," not found!"))}}};module.exports.VueHtmlToPaper=t})();