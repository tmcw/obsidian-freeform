const { Plugin, MarkdownRenderer } = require("obsidian");

module.exports = class IframeBlockPlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("iframe", async (src, el, ctx) => {
      // Get Parameters
      try {
        const rootEl = el.createEl("div", {
          cls: "run-block",
        });
        const iframe = rootEl.createEl("iframe", { cls: "run-block-frame" });
        iframe.srcdoc = src;
        iframe.height = "200px";
        iframe.addEventListener("load", () => {
          const height = iframe.contentWindow?.document.body.offsetHeight + 40;
          iframe.height = height + "px";
        });
        const srcEl = rootEl.createEl("div", { cls: "run-block-src" });
        MarkdownRenderer.render(
          this.app,
          `\`\`\`html\n${src}\n\`\`\``,
          srcEl,
          ctx.sourcePath,
          this,
        );
      } catch (error) {
        el.createEl("h3", { text: error });
      }
    });

    this.registerMarkdownCodeBlockProcessor("iframeturbo", async (src, el, ctx) => {
      // Get Parameters
      try {
        const rootEl = el.createEl("div", {
          cls: "run-block",
        });
        const iframe = rootEl.createEl("iframe", { cls: "run-block-frame" });
        iframe.srcdoc = `<!DOCTYPE html>
<style>
:root{--syntax_normal:#1b1e23;--syntax_comment:#a9b0bc;--syntax_number:#20a5ba;--syntax_keyword:#c30771;--syntax_atom:#10a778;--syntax_string:#008ec4;--syntax_error:#ffbedc;--syntax_unknown_variable:#838383;--syntax_known_variable:#005f87;--syntax_matchbracket:#20bbfc;--syntax_key:#6636b4;--mono_fonts:82%/1.5 Menlo,Consolas,monospace}.observablehq--collapsed,.observablehq--expanded,.observablehq--function,.observablehq--gray,.observablehq--import,.observablehq--string:after,.observablehq--string:before{color:var(--syntax_normal)}.observablehq--collapsed,.observablehq--inspect a{cursor:pointer}.observablehq--field{text-indent:-1em;margin-left:1em}.observablehq--empty{color:var(--syntax_comment)}.observablehq--blue,.observablehq--keyword{color:#3182bd}.observablehq--forbidden,.observablehq--pink{color:#e377c2}.observablehq--orange{color:#e6550d}.observablehq--boolean,.observablehq--null,.observablehq--undefined{color:var(--syntax_atom)}.observablehq--bigint,.observablehq--date,.observablehq--green,.observablehq--number,.observablehq--regexp,.observablehq--symbol{color:var(--syntax_number)}.observablehq--index,.observablehq--key{color:var(--syntax_key)}.observablehq--prototype-key{color:#aaa}.observablehq--empty{font-style:oblique}.observablehq--purple,.observablehq--string{color:var(--syntax_string)}.observablehq--error,.observablehq--red{color:#e7040f}.observablehq--inspect{font:var(--mono_fonts);overflow-x:auto;display:block;white-space:pre}.observablehq--error .observablehq--inspect{word-break:break-all;white-space:pre-wrap}
</style>
<script type="module">
import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";
import { Inspector } from "https://unpkg.com/@observablehq/inspector@5.0.0?module";

try {
  ${src}
  if (typeof output !== 'undefined') {
    inspect(output);
  }
} catch (e) {
  inspect(e);
}

function inspect(val) {
  const d = document.body.appendChild(document.createElement('div'))
  const inspector = new Inspector(d);
  inspector.fulfilled(val);
}

const resizeObserver = new ResizeObserver((entries) => {
  parent.postMessage({ type: 'height', height: document.body.offsetHeight }, '*');
});

resizeObserver.observe(document.body);

</script>`;
        iframe.height = "200px";
        iframe.addEventListener("load", () => {
          const height = iframe.contentWindow?.document.body.offsetHeight + 40;
          iframe.height = height + "px";
        });
        window.addEventListener("message", (evt) => {
          if (evt.data.type === 'height') {
            iframe.height = evt.data.height + 40 + "px";
          }
        });
        const srcEl = rootEl.createEl("div", { cls: "run-block-src" });
        MarkdownRenderer.render(
          this.app,
          `\`\`\`js\n${src}\n\`\`\``,
          srcEl,
          ctx.sourcePath,
          this,
        );
      } catch (error) {
        el.createEl("h3", { text: error });
      }
    });
  }

  onunload() {
    console.log("Unloading iframe plugin...");
  }
}
