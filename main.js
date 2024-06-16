const { Plugin, MarkdownRenderer } = require("obsidian");

const inspect =
  '!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).observablehq=e.observablehq||{})}(this,(function(e){"use strict";function n(e,n,t){t=t||{};var o=e.ownerDocument,r=o.defaultView.CustomEvent;"function"==typeof r?r=new r(n,{detail:t}):((r=o.createEvent("Event")).initEvent(n,!1,!1),r.detail=t),e.dispatchEvent(r)}function t(e){return Array.isArray(e)||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}function o(e){return e===(0|e)+""}function r(e){const n=document.createElement("span");return n.className="observablehq--cellname",n.textContent=`${e} = `,n}const a=Symbol.prototype.toString;function s(e){return a.call(e)}const{getOwnPropertySymbols:c,prototype:{hasOwnProperty:i}}=Object,{toStringTag:l}=Symbol,d={},u=c;function p(e,n){return i.call(e,n)}function f(e){return e[l]||e.constructor&&e.constructor.name||"Object"}function m(e,n){try{const t=e[n];return t&&t.constructor,t}catch(e){return d}}const h=[{symbol:"@@__IMMUTABLE_INDEXED__@@",name:"Indexed",modifier:!0},{symbol:"@@__IMMUTABLE_KEYED__@@",name:"Keyed",modifier:!0},{symbol:"@@__IMMUTABLE_LIST__@@",name:"List",arrayish:!0},{symbol:"@@__IMMUTABLE_MAP__@@",name:"Map"},{symbol:"@@__IMMUTABLE_ORDERED__@@",name:"Ordered",modifier:!0,prefix:!0},{symbol:"@@__IMMUTABLE_RECORD__@@",name:"Record"},{symbol:"@@__IMMUTABLE_SET__@@",name:"Set",arrayish:!0,setish:!0},{symbol:"@@__IMMUTABLE_STACK__@@",name:"Stack",arrayish:!0}];function b(e){try{let n=h.filter((({symbol:n})=>!0===e[n]));if(!n.length)return;const t=n.find((e=>!e.modifier)),o="Map"===t.name&&n.find((e=>e.modifier&&e.prefix)),r=n.some((e=>e.arrayish)),a=n.some((e=>e.setish));return{name:`${o?o.name:""}${t.name}`,symbols:n,arrayish:r&&!a,setish:a}}catch(e){return null}}const{getPrototypeOf:y,getOwnPropertyDescriptors:v}=Object,C=y({});function g(e,o,a,s){let c,i,l,d,u=t(e);e instanceof Map?e instanceof e.constructor?(c=`Map(${e.size})`,i=x):(c="Map()",i=T):e instanceof Set?e instanceof e.constructor?(c=`Set(${e.size})`,i=E):(c="Set()",i=T):u?(c=`${e.constructor.name}(${e.length})`,i=N):(d=b(e))?(c=`Immutable.${d.name}${"Record"===d.name?"":`(${e.size})`}`,u=d.arrayish,i=d.arrayish?$:d.setish?q:S):s?(c=f(e),i=_):(c=f(e),i=T);const p=document.createElement("span");p.className="observablehq--expanded",a&&p.appendChild(r(a));const m=p.appendChild(document.createElement("a"));m.innerHTML="<svg width=8 height=8 class=\'observablehq--caret\'>\\n    <path d=\'M4 7L0 1h8z\' fill=\'currentColor\' />\\n  </svg>",m.appendChild(document.createTextNode(`${c}${u?" [":" {"}`)),m.addEventListener("mouseup",(function(n){n.stopPropagation(),ce(p,U(e,null,a,s))})),i=i(e);for(let e=0;!(l=i.next()).done&&e<20;++e)p.appendChild(l.value);if(!l.done){const e=p.appendChild(document.createElement("a"));e.className="observablehq--field",e.style.display="block",e.appendChild(document.createTextNode("  … more")),e.addEventListener("mouseup",(function(e){e.stopPropagation(),p.insertBefore(l.value,p.lastChild.previousSibling);for(let e=0;!(l=i.next()).done&&e<19;++e)p.insertBefore(l.value,p.lastChild.previousSibling);l.done&&p.removeChild(p.lastChild.previousSibling),n(p,"load")}))}return p.appendChild(document.createTextNode(u?"]":"}")),p}function*x(e){for(const[n,t]of e)yield w(n,t);yield*T(e)}function*E(e){for(const n of e)yield k(n);yield*T(e)}function*q(e){for(const n of e)yield k(n)}function*N(e){for(let n=0,t=e.length;n<t;++n)n in e&&(yield L(n,m(e,n),"observablehq--index"));for(const n in e)!o(n)&&p(e,n)&&(yield L(n,m(e,n),"observablehq--key"));for(const n of u(e))yield L(s(n),m(e,n),"observablehq--symbol")}function*$(e){let n=0;for(const t=e.size;n<t;++n)yield L(n,e.get(n),!0)}function*_(e){for(const n in v(e))yield L(n,m(e,n),"observablehq--key");for(const n of u(e))yield L(s(n),m(e,n),"observablehq--symbol");const n=y(e);n&&n!==C&&(yield M(n))}function*T(e){for(const n in e)p(e,n)&&(yield L(n,m(e,n),"observablehq--key"));for(const n of u(e))yield L(s(n),m(e,n),"observablehq--symbol");const n=y(e);n&&n!==C&&(yield M(n))}function*S(e){for(const[n,t]of e)yield L(n,t,"observablehq--key")}function M(e){const n=document.createElement("div"),t=n.appendChild(document.createElement("span"));return n.className="observablehq--field",t.className="observablehq--prototype-key",t.textContent="  <prototype>",n.appendChild(document.createTextNode(": ")),n.appendChild(se(e,void 0,void 0,void 0,!0)),n}function L(e,n,t){const o=document.createElement("div"),r=o.appendChild(document.createElement("span"));return o.className="observablehq--field",r.className=t,r.textContent=`  ${e}`,o.appendChild(document.createTextNode(": ")),o.appendChild(se(n)),o}function w(e,n){const t=document.createElement("div");return t.className="observablehq--field",t.appendChild(document.createTextNode("  ")),t.appendChild(se(e)),t.appendChild(document.createTextNode(" => ")),t.appendChild(se(n)),t}function k(e){const n=document.createElement("div");return n.className="observablehq--field",n.appendChild(document.createTextNode("  ")),n.appendChild(se(e)),n}function A(e){const n=window.getSelection();return"Range"===n.type&&(n.containsNode(e,!0)||n.anchorNode.isSelfOrDescendant(e)||n.focusNode.isSelfOrDescendant(e))}function U(e,n,o,a){let s,c,i,l,d=t(e);if(e instanceof Map?e instanceof e.constructor?(s=`Map(${e.size})`,c=D):(s="Map()",c=B):e instanceof Set?e instanceof e.constructor?(s=`Set(${e.size})`,c=I):(s="Set()",c=B):d?(s=`${e.constructor.name}(${e.length})`,c=z):(l=b(e))?(s=`Immutable.${l.name}${"Record"===l.name?"":`(${e.size})`}`,d=l.arrayish,c=l.arrayish?j:l.setish?O:P):(s=f(e),c=B),n){const n=document.createElement("span");return n.className="observablehq--shallow",o&&n.appendChild(r(o)),n.appendChild(document.createTextNode(s)),n.addEventListener("mouseup",(function(t){A(n)||(t.stopPropagation(),ce(n,U(e)))})),n}const u=document.createElement("span");u.className="observablehq--collapsed",o&&u.appendChild(r(o));const p=u.appendChild(document.createElement("a"));p.innerHTML="<svg width=8 height=8 class=\'observablehq--caret\'>\\n    <path d=\'M7 4L1 8V0z\' fill=\'currentColor\' />\\n  </svg>",p.appendChild(document.createTextNode(`${s}${d?" [":" {"}`)),u.addEventListener("mouseup",(function(n){A(u)||(n.stopPropagation(),ce(u,g(e,0,o,a)))}),!0),c=c(e);for(let e=0;!(i=c.next()).done&&e<20;++e)e>0&&u.appendChild(document.createTextNode(", ")),u.appendChild(i.value);return i.done||u.appendChild(document.createTextNode(", …")),u.appendChild(document.createTextNode(d?"]":"}")),u}function*D(e){for(const[n,t]of e)yield H(n,t);yield*B(e)}function*I(e){for(const n of e)yield se(n,!0);yield*B(e)}function*O(e){for(const n of e)yield se(n,!0)}function*j(e){let n=-1,t=0;for(const o=e.size;t<o;++t)t>n+1&&(yield R(t-n-1)),yield se(e.get(t),!0),n=t;t>n+1&&(yield R(t-n-1))}function*z(e){let n=-1,t=0;for(const o=e.length;t<o;++t)t in e&&(t>n+1&&(yield R(t-n-1)),yield se(m(e,t),!0),n=t);t>n+1&&(yield R(t-n-1));for(const n in e)!o(n)&&p(e,n)&&(yield F(n,m(e,n),"observablehq--key"));for(const n of u(e))yield F(s(n),m(e,n),"observablehq--symbol")}function*B(e){for(const n in e)p(e,n)&&(yield F(n,m(e,n),"observablehq--key"));for(const n of u(e))yield F(s(n),m(e,n),"observablehq--symbol")}function*P(e){for(const[n,t]of e)yield F(n,t,"observablehq--key")}function R(e){const n=document.createElement("span");return n.className="observablehq--empty",n.textContent=1===e?"empty":`empty × ${e}`,n}function F(e,n,t){const o=document.createDocumentFragment(),r=o.appendChild(document.createElement("span"));return r.className=t,r.textContent=e,o.appendChild(document.createTextNode(": ")),o.appendChild(se(n,!0)),o}function H(e,n){const t=document.createDocumentFragment();return t.appendChild(se(e,!0)),t.appendChild(document.createTextNode(" => ")),t.appendChild(se(n,!0)),t}function K(e,n){if(e instanceof Date||(e=new Date(+e)),isNaN(e))return"function"==typeof n?n(e):n;const t=e.getUTCHours(),o=e.getUTCMinutes(),r=e.getUTCSeconds(),a=e.getUTCMilliseconds();return`${s=e.getUTCFullYear(),s<0?`-${G(-s,6)}`:s>9999?`+${G(s,6)}`:G(s,4)}-${G(e.getUTCMonth()+1,2)}-${G(e.getUTCDate(),2)}${t||o||r||a?`T${G(t,2)}:${G(o,2)}${r||a?`:${G(r,2)}${a?`.${G(a,3)}`:""}`:""}Z`:""}`;var s}function G(e,n){return`${e}`.padStart(n,"0")}var J=Error.prototype.toString;var V=RegExp.prototype.toString;function Y(e){return e.replace(/[\\\\`\\x00-\\x09\\x0b-\\x19]|\\${/g,X)}function X(e){var n=e.charCodeAt(0);switch(n){case 8:return"\\\\b";case 9:return"\\\\t";case 11:return"\\\\v";case 12:return"\\\\f";case 13:return"\\\\r"}return n<16?"\\\\x0"+n.toString(16):n<32?"\\\\x"+n.toString(16):"\\\\"+e}function Z(e,n){for(var t=0;n.exec(e);)++t;return t}var Q=Function.prototype.toString,W={prefix:"async ƒ"},ee={prefix:"async ƒ*"},ne={prefix:"class"},te={prefix:"ƒ"},oe={prefix:"ƒ*"};function re(e,n,t){var o=document.createElement("span");o.className="observablehq--function",t&&o.appendChild(r(t));var a=o.appendChild(document.createElement("span"));return a.className="observablehq--keyword",a.textContent=e.prefix,o.appendChild(document.createTextNode(n)),o}const{prototype:{toString:ae}}=Object;function se(e,n,t,o,a){let c=typeof e;switch(c){case"boolean":case"undefined":e+="";break;case"number":e=0===e&&1/e<0?"-0":e+"";break;case"bigint":e+="n";break;case"symbol":e=s(e);break;case"function":return function(e,n){var t,o,r=Q.call(e);switch(e.constructor&&e.constructor.name){case"AsyncFunction":t=W;break;case"AsyncGeneratorFunction":t=ee;break;case"GeneratorFunction":t=oe;break;default:t=/^class\\b/.test(r)?ne:te}return t===ne?re(t,"",n):(o=/^(?:async\\s*)?(\\w+)\\s*=>/.exec(r))?re(t,"("+o[1]+")",n):(o=/^(?:async\\s*)?\\(\\s*(\\w+(?:\\s*,\\s*\\w+)*)?\\s*\\)/.exec(r))||(o=/^(?:async\\s*)?function(?:\\s*\\*)?(?:\\s*\\w+)?\\s*\\(\\s*(\\w+(?:\\s*,\\s*\\w+)*)?\\s*\\)/.exec(r))?re(t,o[1]?"("+o[1].replace(/\\s*,\\s*/g,", ")+")":"()",n):re(t,"(…)",n)}(e,o);case"string":return function(e,n,t,o){if(!1===n){if(Z(e,/["\\n]/g)<=Z(e,/`|\\${/g)){const n=document.createElement("span");o&&n.appendChild(r(o));const t=n.appendChild(document.createElement("span"));return t.className="observablehq--string",t.textContent=JSON.stringify(e),n}const a=e.split("\\n");if(a.length>20&&!t){const t=document.createElement("div");o&&t.appendChild(r(o));const s=t.appendChild(document.createElement("span"));s.className="observablehq--string",s.textContent="`"+Y(a.slice(0,20).join("\\n"));const c=t.appendChild(document.createElement("span")),i=a.length-20;return c.textContent=`Show ${i} truncated line${i>1?"s":""}`,c.className="observablehq--string-expand",c.addEventListener("mouseup",(function(r){r.stopPropagation(),ce(t,se(e,n,!0,o))})),t}const s=document.createElement("span");o&&s.appendChild(r(o));const c=s.appendChild(document.createElement("span"));return c.className="observablehq--string"+(t?" observablehq--expanded":""),c.textContent="`"+Y(e)+"`",s}const a=document.createElement("span");o&&a.appendChild(r(o));const s=a.appendChild(document.createElement("span"));return s.className="observablehq--string",s.textContent=JSON.stringify(e.length>100?`${e.slice(0,50)}…${e.slice(-49)}`:e),a}(e,n,t,o);default:if(null===e){c=null,e="null";break}if(e instanceof Date){c="date",e=K(e,"Invalid Date");break}if(e===d){c="forbidden",e="[forbidden]";break}switch(ae.call(e)){case"[object RegExp]":c="regexp",e=function(e){return V.call(e)}(e);break;case"[object Error]":case"[object DOMException]":c="error",e=function(e){return e.stack||J.call(e)}(e);break;default:return(t?g:U)(e,n,o,a)}}const i=document.createElement("span");o&&i.appendChild(r(o));const l=i.appendChild(document.createElement("span"));return l.className=`observablehq--${c}`,l.textContent=e,i}function ce(e,t){e.classList.contains("observablehq--inspect")&&t.classList.add("observablehq--inspect"),e.parentNode.replaceChild(t,e),n(t,"load")}const ie=/\\s+\\(\\d+:\\d+\\)$/m;class le{constructor(e){if(!e)throw new Error("invalid node");this._node=e,e.classList.add("observablehq")}pending(){const{_node:e}=this;e.classList.remove("observablehq--error"),e.classList.add("observablehq--running")}fulfilled(e,t){const{_node:o}=this;if((!function(e){return(e instanceof Element||e instanceof Text)&&e instanceof e.constructor}(e)||e.parentNode&&e.parentNode!==o)&&(e=se(e,!1,o.firstChild&&o.firstChild.classList&&o.firstChild.classList.contains("observablehq--expanded"),t)).classList.add("observablehq--inspect"),o.classList.remove("observablehq--running","observablehq--error"),o.firstChild!==e)if(o.firstChild){for(;o.lastChild!==o.firstChild;)o.removeChild(o.lastChild);o.replaceChild(e,o.firstChild)}else o.appendChild(e);n(o,"update")}rejected(e,t){const{_node:o}=this;for(o.classList.remove("observablehq--running"),o.classList.add("observablehq--error");o.lastChild;)o.removeChild(o.lastChild);var a=document.createElement("div");a.className="observablehq--inspect",t&&a.appendChild(r(t)),a.appendChild(document.createTextNode((e+"").replace(ie,""))),o.appendChild(a),n(o,"error",{error:e})}}le.into=function(e){if("string"==typeof e&&null==(e=document.querySelector(e)))throw new Error("container not found");return function(){return new le(e.appendChild(document.createElement("div")))}},e.Inspector=le}));\n';

module.exports = class IframeBlockPlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor(
      "freeform",
      async (src, el, ctx) => {

        var showCode = true
        var styleText = ''

        // Look in src for the following
        // //- showCode:true/false
        // //- styleLinkUrl:https://cdn.jsdelivr.net/npm/frappe-gantt@0.6.1/dist/frappe-gantt.min.css
        // //- styleText:body {Some css here}

        const re = /^\/\/- (.+?):(.+)$/gm;  
        for ( const match of src.matchAll(re)) {
          console.log(`Found directive ${match[1]} with argument ${match[2]}`);
          if ( match[1] == 'showCode' && match[2] == 'false' ) { showCode = false }
          if ( match[1] == 'styleText') {
            styleText += "\n" + match[2] + "\n";
          }
          if ( match[1] == 'styleLinkUrl') {
            // We need to get the css from the URL
            const r = new Request(match[2]);
            console.log(`url is ${r.url}`);
            const response = await fetch(r);
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText)
            }

            const responseData = await response.text();

            styleText += "\n" + responseData + "\n";
          }
        }
        console.log(`showCode is ${showCode}`)
        console.log(`styleText is ${styleText}`)

        try {
          // Give this iframe an identifier so that when it sends messages
          // from the iframe context back up, we know which iframe's messages
          // belong to which code blocks
          const iframeId = crypto.randomUUID();
          const rootEl = el.createEl("div", {
            cls: "run-block",
          });
          const iframe = rootEl.createEl("iframe", { cls: "run-block-frame" });

          iframe.srcdoc = `<!DOCTYPE html>
<style>
:root{--syntax_normal:#1b1e23;--syntax_comment:#a9b0bc;--syntax_number:#20a5ba;--syntax_keyword:#c30771;--syntax_atom:#10a778;--syntax_string:#008ec4;--syntax_error:#ffbedc;--syntax_unknown_variable:#838383;--syntax_known_variable:#005f87;--syntax_matchbracket:#20bbfc;--syntax_key:#6636b4;--mono_fonts:82%/1.5 Menlo,Consolas,monospace}.observablehq--collapsed,.observablehq--expanded,.observablehq--function,.observablehq--gray,.observablehq--import,.observablehq--string:after,.observablehq--string:before{color:var(--syntax_normal)}.observablehq--collapsed,.observablehq--inspect a{cursor:pointer}.observablehq--field{text-indent:-1em;margin-left:1em}.observablehq--empty{color:var(--syntax_comment)}.observablehq--blue,.observablehq--keyword{color:#3182bd}.observablehq--forbidden,.observablehq--pink{color:#e377c2}.observablehq--orange{color:#e6550d}.observablehq--boolean,.observablehq--null,.observablehq--undefined{color:var(--syntax_atom)}.observablehq--bigint,.observablehq--date,.observablehq--green,.observablehq--number,.observablehq--regexp,.observablehq--symbol{color:var(--syntax_number)}.observablehq--index,.observablehq--key{color:var(--syntax_key)}.observablehq--prototype-key{color:#aaa}.observablehq--empty{font-style:oblique}.observablehq--purple,.observablehq--string{color:var(--syntax_string)}.observablehq--error,.observablehq--red{color:#e7040f}.observablehq--inspect{font:var(--mono_fonts);overflow-x:auto;display:block;white-space:pre}.observablehq--error .observablehq--inspect{word-break:break-all;white-space:pre-wrap}
${styleText}
</style>
<script type="module">
// @observablehq/inspector v5.0.0 Copyright 2022 Observable, Inc.
${inspect}

const Inspector = observablehq.Inspector;

globalThis.display = function display(val) {
  const d = document.body.appendChild(document.createElement('div'))
  const inspector = new Inspector(d);
  inspector.fulfilled(val);
}

globalThis.width = window.innerWidth;

const resizeObserver = new ResizeObserver((entries) => {
  parent.postMessage({
    type: 'height',
    height: document.body.offsetHeight,
    id: ${JSON.stringify(iframeId)}
  }, '*');
});

resizeObserver.observe(document.body);

import(${JSON.stringify(`data:text/javascript;base64,${btoa(src)}`)}).catch(e => {
console.log(e);
  display(e);
});
</script>`;
          iframe.height = "200px";

          // Resize the iframe as soon as it loads
          iframe.addEventListener("load", () => {
            const height =
              iframe.contentWindow?.document.body.offsetHeight + 40;
            iframe.height = height + "px";
          });

          // Resize the iframe when we get a message that its contents
          // have been measured.
          window.addEventListener("message", (evt) => {
            if (evt.data.type === "height" && evt.data.id === iframeId) {
              iframe.height = evt.data.height + 40 + "px";
              console.log(`Ressize - height is now ${iframe.height}`)
            }
          });

          if (showCode) {
            const srcEl = rootEl.createEl("div", { cls: "run-block-src" });

            // Show the source code below the iframe if we want 
            MarkdownRenderer.render(
              this.app,
              `\`\`\`js\n${src}\n\`\`\``,
              srcEl,
              ctx.sourcePath,
              this,
            );
          };
        } catch (error) {
          el.createEl("h3", { text: error });
        }
      },
    );
  }

  onunload() {
    // console.log("Unloading iframe plugin...");
  }
};
