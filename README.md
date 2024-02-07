# Iframe Block for Obsidian

This plugin lets you create visualizations or anything you
want using iframes in Obsidian

## Install ..

### .. automatically in Obsidian

1. Go to **Community Plugins** in your Obsidian Settings and **disable** Safe Mode
2. Click on **Browse** and search for "Iframe Block"
3. Click install
4. Toggle the plugin on in the **Community Plugins** tab

## How to use

Add the "iframe" code block into your note:

````
```iframe
<!DOCTYPE html>
<div id="myplot"></div>
<script type="module">
import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";
const plot = Plot.rectY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random})).plot();
const div = document.querySelector("#myplot");
div.append(plot);
</script>
```
````

## How to dev

1. Clone this repo into the plugin folder of a (non-productive) vault (`.obsidian/plugins/`)
2. `npm i`
3. `npm run dev`
4. Toggle the plugin on in the **Community Plugins** tab

## Credit

This was started as a fork of Joleaf's excellent email plugin - support their <a href='https://ko-fi.com/joleaf' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /> if you'd like!
