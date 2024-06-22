# Freeform

Obsidian freeform plugin. This lets you write arbitrary JavaScript,
including importing ESM modules, injecting styles, and much more.

### Inspired by Observable

This brings a taste of [Observable](https://observablehq.com/) to
[Obsidian](https://obsidian.md/). Some common elements include:

- You can write blocks of code which run in a light sandboxed environment
- You can use `import` statements to import modules from URLs, using services
  like esm.sh or jsdelivr.
- `export` statements are supported too, but have no effect. `require()` is not supported.
  JSX is also not supported, yet.
- There's a `display()` function to show values and elements, just like
  Observable Framework's [explicit display system](https://observablehq.com/framework/javascript#explicit-display).

### Based on iframes

Everything you write is run within a sandboxed iframe, making it safer to do more
creative coding within Obsidian without affecting the surrounding page.

## Get started

Install the freeform plugin, and create a fenced code block with the language
set to `freeform`. For example:

    ```freeform
    display(42);
    ```

That should, once you're done editing it and have clicked away from the code block,
show the number 42. Now you've learned all of the concepts in freeform! It's
JavaScript, and you can use the `display()` method to show a value. See the rest
of this readme for some examples.

## Demo

<https://github.com/tmcw/obsidian-freeform/assets/32314/56b4e23a-2837-4a06-84c7-ee35b09c2634>

### Examples

#### Using Observable Plot

You can easily import [Observable Plot](https://observablehq.com/plot/) and use
it with Freeform.

    ```freeform
    import *  as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";
    const widths = [
      ["Val Town", 1024],
      ["Val Town (after)", 900],
      ["GitHub", 830],
      ["Radicle", 723],
      ["Replicate", 653],
      ["Glitch", 612],
      ["GitLab", 842],
      ["Observable", 640]
    ].map(([name, width]) => ({ name, width }))

    display(Plot.barX(widths, {
      x: "width",
      y: "name",
      marginLeft: 100,
      fill: "name"
    }).plot({ height: 400, width }))
    ```

#### Importing a module from esm.sh

Most npm modules that are compatible with browsers are available from
<https://esm.sh/>, jsdelivr, unpkg, or skypack. Observable Plot is an especially
tricky one, but most "just work."

    ```freeform
    import { min } from "https://esm.sh/simple-statistics";
    display(min([1, 2, 3]))
    ```

#### Running Preact

Freeform _doesn't support JSX syntax_ (yet) but frameworks
like Preact [can work without it](https://preactjs.com/guide/v10/getting-started/).

    ```freeform
    import { h, render } from 'https://esm.sh/preact';
    // Create your app
    const app = h('h1', null, 'Hello World!');
    render(app, document.body);
    ```

#### Querying DataView

DataView is accessible via `window.top.app.plugins.plugins.dataview.api`.
Here's an example of using it:

    ```freeform
    import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

    const items = await window.top.app.plugins.plugins.dataview.api
      .query(`table price, purchased, color
    from "03 Stuff"
    where price and sold = undefined
    sort purchased desc`);

    const mapped = items.value.values
      .map((item) => {
        if (!item[2]) return;
        return {
          price: item[1],
          date: new Date(item[2].toMillis()),
        };
      })
      .filter((r) => r);

    display(Plot.dot(mapped, { y: "price", x: "date" }).plot());
    ```

If you're doing more than one thing with the DataView API, you will probably
want to alias the variable, like

```js
const dv = window.top.app.plugins.plugins.dataview.api
```

Also, note that `Date` objects that you get from DataView queries are
originated from the top frame, so some code might not recognize them as Date
instances. Recreating them with `new Date`, as in the example above, will
fix that issue.

#### Inserting a stylesheet

Obsidian's [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) forbids
`<link>` elements bringing in external stylesheets. You can work around this
by a helper function that fetches external CSS and inlines it into a new
style on the page:

```js
async function addStyle(url) {
  const style = new CSSStyleSheet();
  style.replaceSync(await fetch(url).then(r => r.text()))
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, style];
}
```

Note that some stylesheets you import this way will have relative references
to images or they might import other stylesheets via `@import`, and those things
won't work.

### Notes

- There is a `width` variable, much like [Observable's](https://observablehq.com/framework/javascript#width), but
  it is not live-updating or reactive. This project does not include
  Observable-style reactivity: your JavaScript runs just the same
  way as it does on any webpage.
- Only HTTP ESM imports are supported. This isn't Node.js or Deno - there
  isn't a node_modules directory, and you don't have short names for dependencies.
  Thankfully, this usually isn't a problem because you can use <https://esm.sh/>
  <https://www.jsdelivr.com/> and more to import modules.

## Components

This plugin uses [@observablehq/inspector](https://github.com/observablehq/inspector) as
the `display()` method.
