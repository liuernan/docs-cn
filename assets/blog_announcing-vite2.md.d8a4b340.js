import{_ as e,c as t,o as r,a}from"./app.11f328e0.js";var i="/logo.svg";const v=JSON.parse('{"title":"Vite 2.0 \u53D1\u5E03\u4E86","description":"","frontmatter":{"sidebar":false,"title":"Vite 2.0 \u53D1\u5E03\u4E86"},"headers":[{"level":2,"title":"2.0 \u5E26\u6765\u4E86\u4EC0\u4E48","slug":"whats-new-in-2-0"},{"level":3,"title":"\u591A\u6846\u67B6\u652F\u6301","slug":"framework-agnostic-core"},{"level":3,"title":"\u5168\u65B0\u63D2\u4EF6\u673A\u5236\u548C API","slug":"new-plugin-format-and-api"},{"level":3,"title":"\u57FA\u4E8E esbuild \u7684\u4F9D\u8D56\u9884\u6253\u5305","slug":"esbuild-powered-dep-pre-bundling"},{"level":3,"title":"\u66F4\u597D\u7684 CSS \u652F\u6301","slug":"first-class-css-support"},{"level":3,"title":"\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09\u652F\u6301","slug":"server-side-rendering-ssr-support"},{"level":3,"title":"\u65E7\u6D4F\u89C8\u5668\u652F\u6301","slug":"opt-in-legacy-browser-support"},{"level":2,"title":"\u5C1D\u8BD5\u4E00\u4E0B\uFF01","slug":"give-it-a-try"}],"relativePath":"blog/announcing-vite2.md"}'),n={name:"blog/announcing-vite2.md"},s=a('<h1 id="announcing-vite-2-0" tabindex="-1">Vite 2.0 \u53D1\u5E03\u4E86 <a class="header-anchor" href="#announcing-vite-2-0">\xB6</a></h1><p style="text-align:center;"><img src="'+i+`" style="height:200px;"></p><p>\u4ECA\u5929\u6211\u4EEC\u5F88\u9AD8\u5174\u5730\u5BA3\u5E03\uFF0CVite 2.0 \u6B63\u5F0F\u53D1\u5E03\u4E86\uFF01</p><p>Vite\uFF08\u6CD5\u8BED\u610F\u601D\u662F \u201C\u5FEB\u201D\uFF0C\u53D1\u97F3\u4E3A <code>/vit/</code>\uFF0C\u7C7B\u4F3C veet\uFF09\u662F\u4E00\u79CD\u5168\u65B0\u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\u3002\u4F60\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u4E3A\u4E00\u4E2A\u5F00\u7BB1\u5373\u7528\u7684\u5F00\u53D1\u670D\u52A1\u5668 + \u6253\u5305\u5DE5\u5177\u7684\u7EC4\u5408\uFF0C\u4F46\u662F\u66F4\u8F7B\u66F4\u5FEB\u3002Vite \u5229\u7528\u6D4F\u89C8\u5668 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer">\u539F\u751F\u7684 ES \u6A21\u5757\u652F\u6301</a> \u548C\u7528\u6765\u7F16\u8BD1\u5230\u539F\u751F\u8BED\u8A00\u7684\u5F00\u53D1\u5DE5\u5177\uFF08\u5982 <a href="https://esbuild.github.io/" target="_blank" rel="noopener noreferrer">esbuild</a>\uFF09\u6765\u63D0\u4F9B\u4E00\u4E2A\u5FEB\u901F\u4E14\u73B0\u4EE3\u7684\u5F00\u53D1\u4F53\u9A8C\u3002</p><p>\u60F3\u77E5\u9053 Vite \u6709\u591A\u5FEB\uFF1F\u770B\u770B\u8FD9\u4E2A<a href="https://twitter.com/amasad/status/1355379680275128321" target="_blank" rel="noopener noreferrer">\u89C6\u9891\u6BD4\u8F83</a>\uFF0C \u5728 <a href="http://Repl.it" target="_blank" rel="noopener noreferrer">Repl.it</a> \u4E0A\u4ECE\u96F6\u542F\u52A8\u4E00\u4E2A\u57FA\u4E8E Vite \u7684 React \u5E94\u7528\uFF0C\u6D4F\u89C8\u5668\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5\u7684\u65F6\u5019\uFF0C\u57FA\u4E8E CRA\uFF08<code>create-react-app</code>\uFF09\u7684\u5E94\u7528\u751A\u81F3\u8FD8\u6CA1\u6709\u5B89\u88C5\u5B8C\u4F9D\u8D56\u3002</p><p>\u5982\u679C\u4F60\u8FD8\u6CA1\u542C\u8BF4\u8FC7 Vite \u5230\u5E95\u662F\u4EC0\u4E48\uFF0C\u53EF\u4EE5\u5230 <a href="/guide/why.html">\u8FD9\u91CC</a> \u4E86\u89E3\u4E00\u4E0B\u9879\u76EE\u7684\u8BBE\u8BA1\u521D\u8877\u3002\u5982\u679C\u4F60\u60F3\u8981\u4E86\u89E3 Vite \u8DDF\u5176\u5B83\u4E00\u4E9B\u7C7B\u4F3C\u7684\u5DE5\u5177\u6709\u4EC0\u4E48\u533A\u522B\uFF0C\u53EF\u4EE5\u53C2\u8003\u8FD9\u91CC\u7684 <a href="/guide/comparisons.html">\u5BF9\u6BD4</a>\u3002</p><h2 id="whats-new-in-2-0" tabindex="-1">2.0 \u5E26\u6765\u4E86\u4EC0\u4E48 <a class="header-anchor" href="#whats-new-in-2-0">\xB6</a></h2><p>Vite 1.0 \u867D\u7136\u4E4B\u524D\u8FDB\u5165\u4E86 RC \u9636\u6BB5\uFF0C\u4F46\u5728\u53D1\u5E03\u4E4B\u524D\u6211\u4EEC\u51B3\u5B9A\u8FDB\u884C\u4E00\u6B21\u5F7B\u5E95\u7684\u91CD\u6784\u6765\u89E3\u51B3\u4E00\u4E9B\u8BBE\u8BA1\u7F3A\u9677\u3002\u6240\u4EE5 Vite 2.0 \u5176\u5B9E\u662F Vite \u7684\u7B2C\u4E00\u4E2A\u7A33\u5B9A\u7248\u672C\u30022.0 \u5E26\u6765\u4E86\u5927\u91CF\u7684\u6539\u8FDB\uFF1A</p><h3 id="framework-agnostic-core" tabindex="-1">\u591A\u6846\u67B6\u652F\u6301 <a class="header-anchor" href="#framework-agnostic-core">\xB6</a></h3><p>\u8BBE\u8BA1 Vite \u7684\u521D\u8877\u662F\u4E3A\u4E86 <a href="https://github.com/vuejs/vue-dev-server" target="_blank" rel="noopener noreferrer">\u63A2\u7D22\u9ED1\u5BA2\u539F\u578B\u9879\u76EE\u4EE5\u66F4\u597D\u7684\u652F\u6301 Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</a>\u3002Vite 1 \u5219\u662F\u8FD9\u4E2A\u60F3\u6CD5\u7684\u5EF6\u7EED\uFF0C\u5E76\u5728\u6B64\u57FA\u7840\u4E0A\u589E\u52A0\u4E86\u5BF9 HMR \u652F\u6301\u3002</p><p>\u4F46 2.0 \u57FA\u4E8E\u4E4B\u524D\u7684\u7ECF\u9A8C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u66F4\u7A33\u5B9A\u7075\u6D3B\u7684\u5185\u90E8\u67B6\u6784\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5B8C\u5168\u901A\u8FC7\u63D2\u4EF6\u673A\u5236\u6765\u652F\u6301\u4EFB\u610F\u6846\u67B6\u3002\u73B0\u5728 Vite \u63D0\u4F9B <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u7684 Vue, React, Preact, Lit Element \u9879\u76EE\u6A21\u7248</a>\uFF0C\u800C Svelte \u793E\u533A\u4E5F\u5728\u5F00\u53D1 Vite \u6574\u5408\u65B9\u6848\u3002</p><h3 id="new-plugin-format-and-api" tabindex="-1">\u5168\u65B0\u63D2\u4EF6\u673A\u5236\u548C API <a class="header-anchor" href="#new-plugin-format-and-api">\xB6</a></h3><p>Vite 2.0 \u53D7 <a href="https://github.com/preactjs/wmr" target="_blank" rel="noopener noreferrer">WMR</a> \u7684\u542F\u53D1\u91C7\u7528\u4E86\u57FA\u4E8E Rollup \u63D2\u4EF6 API \u7684\u8BBE\u8BA1\u3002<a href="https://vite-rollup-plugins.patak.dev/" target="_blank" rel="noopener noreferrer">\u5F88\u591A Rollup \u63D2\u4EF6\u53EF\u4EE5\u8DDF Vite \u76F4\u63A5\u517C\u5BB9</a>\u3002\u63D2\u4EF6\u53EF\u4EE5\u5728\u4F7F\u7528 Rollup \u63D2\u4EF6\u94A9\u5B50\u4E4B\u5916\u4F7F\u7528\u4E00\u4E9B\u989D\u5916\u7684 Vite \u7279\u6709\u7684 API \u6765\u5904\u7406\u4E00\u4E9B\u6253\u5305\u4E2D\u4E0D\u5B58\u5728\u7684\u9700\u6C42\uFF0C\u6BD4\u5982\u533A\u5206\u5F00\u53D1\u4E0E\u751F\u4EA7\u73AF\u5883 \uFF0C\u6216\u662F\u81EA\u5B9A\u4E49\u70ED\u66F4\u65B0\u5904\u7406\u3002</p><p>Vite \u7684 <a href="/guide/api-javascript.html">\u7A0B\u5E8F\u5316 API</a> \u4E5F\u5F97\u5230\u4E86\u5927\u5E45\u6539\u8FDB - \u5DF2\u7ECF\u6709\u4E0D\u5C11\u7528\u6237\u5728\u5F00\u53D1\u57FA\u4E8E Vite \u7684\u4E0A\u5C42\u6846\u67B6\uFF0CNuxt \u56E2\u961F\u4E5F\u5DF2\u7ECF\u5728 Nuxt 3 \u4E2D\u9A8C\u8BC1\u4E86\u521D\u6B65\u6574\u5408\u7684\u53EF\u884C\u6027\u3002</p><h3 id="esbuild-powered-dep-pre-bundling" tabindex="-1">\u57FA\u4E8E esbuild \u7684\u4F9D\u8D56\u9884\u6253\u5305 <a class="header-anchor" href="#esbuild-powered-dep-pre-bundling">\xB6</a></h3><p>\u7531\u4E8E Vite \u662F\u4E00\u4E2A\u57FA\u4E8E \u539F\u751F ESM \u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u6240\u4EE5\u5B83\u9700\u8981\u8FDB\u884C\u4F9D\u8D56\u9884\u6253\u5305\u4EE5\u51CF\u5C11\u6D4F\u89C8\u5668\u8BF7\u6C42\u7684\u6570\u91CF\uFF0C\u5E76\u8FDB\u884C CommonJS \u5230 ESM \u7684\u8F6C\u6362\u3002\u5728\u4E4B\u524D\u7248\u672C\u4E2D Vite \u662F\u7528 Rollup \u6765\u5B8C\u6210\u7684\uFF0C\u800C\u5728 2.0 \u4E2D\u5207\u6362\u5230\u4E86 esbuild\uFF0C\u8FD9\u4F7F\u5F97\u4F9D\u8D56\u9884\u6253\u5305\u7684\u901F\u5EA6\u5FEB\u4E86\u51E0\u5341\u500D\u3002\u4F5C\u4E3A\u53C2\u8003\uFF0C\u5728 M1 \u82AF\u7247\u7684 MacBook Pro \u4E0A\uFF0C\u51B7\u542F\u52A8\u4E00\u4E2A\u5177\u6709\u5927\u91CF\u4F9D\u8D56\u9879\uFF08\u5982 React Meterial UI\uFF09\u7684\u6D4B\u8BD5\u5E94\u7528\uFF0C\u4E4B\u524D\u9700\u8981 28 \u79D2\uFF0C\u800C\u73B0\u5728\u53EA\u9700\u8981\u7EA6 1.5 \u79D2\u3002\u4ECE webpack \u6216\u5176\u5B83\u6253\u5305\u5DE5\u5177\u8FC1\u79FB\u5230 Vite \u5E94\u8BE5\u4E5F\u4F1A\u6709\u7C7B\u4F3C\u7684\u901F\u5EA6\u6539\u5584\u3002</p><h3 id="first-class-css-support" tabindex="-1">\u66F4\u597D\u7684 CSS \u652F\u6301 <a class="header-anchor" href="#first-class-css-support">\xB6</a></h3><p>Vite \u5C06 CSS \u770B\u4F5C\u6A21\u5757\u7CFB\u7EDF\u4E2D\u7684\u4E00\u7B49\u516C\u6C11\uFF0C\u5E76\u4E14\u5185\u7F6E\u4E86\u4EE5\u4E0B\u652F\u6301\uFF1A</p><ul><li><strong>\u5F3A\u5316\u8DEF\u5F84\u89E3\u6790</strong>\uFF1ACSS \u4E2D\u7684 @import \u548C url() \u8DEF\u5F84\u90FD\u901A\u8FC7 Vite \u7684\u8DEF\u5F84\u89E3\u6790\u5668\u6765\u89E3\u6790\uFF0C\u4ECE\u800C\u652F\u6301 alias \u548C npm \u4F9D\u8D56\u3002</li><li><strong>\u81EA\u52A8 URL \u6539\u5199</strong>\uFF1A\u6240\u6709 url() \u8DEF\u5F84\u90FD\u4F1A\u88AB\u81EA\u52A8\u6539\u5199\u4ECE\u800C\u786E\u4FDD\u5728\u5F00\u53D1\u548C\u6784\u5EFA\u4E2D\u90FD\u6307\u5411\u6B63\u786E\u7684\u6587\u4EF6\u8DEF\u5F84\u3002</li><li><strong>CSS \u4EE3\u7801\u5206\u5272</strong>\uFF1A\u6784\u5EFA\u65F6\u6BCF\u4E00\u4E2A\u88AB\u5206\u5272\u7684 JS \u6587\u4EF6\u90FD\u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u5BF9\u5E94\u7684 CSS \u6587\u4EF6\uFF0C\u5F53\u88AB\u8BF7\u6C42\u65F6\uFF0C\u8BE5\u6587\u4EF6\u4F1A\u81EA\u52A8\u4E0E JS \u6587\u4EF6\u5E76\u884C\u52A0\u8F7D\u3002</li></ul><h3 id="server-side-rendering-ssr-support" tabindex="-1">\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08SSR\uFF09\u652F\u6301 <a class="header-anchor" href="#server-side-rendering-ssr-support">\xB6</a></h3><p>Vite 2.0 \u63D0\u4F9B <a href="/guide/ssr.html">\u5B9E\u9A8C\u6027\u7684 SSR \u652F\u6301</a>\u3002Vite \u63D0\u4F9B\u4E86\u7075\u6D3B\u7684 API\uFF0C\u4EE5\u4FBF\u4E8E\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u76F4\u63A5\u901A\u8FC7 Node.js \u9AD8\u6548\u7387\u5730\u52A0\u8F7D\u548C\u66F4\u65B0 ESM \u7684\u6E90\u7801\uFF08\u51E0\u4E4E\u4E0E\u670D\u52A1\u7AEF\u7684 HMR \u4E00\u81F4\uFF09\uFF0C\u5E76\u81EA\u52A8\u5916\u90E8\u5316\u4E0E CommonJS \u517C\u5BB9\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4EE5\u63D0\u9AD8\u5F00\u53D1\u548C SSR \u7684\u6784\u5EFA\u901F\u5EA6\u3002\u751F\u4EA7\u73AF\u5883\u4E0B\uFF0C\u670D\u52A1\u5668\u53EF\u4EE5\u548C Vite \u5B8C\u5168\u89E3\u8026\u3002\u57FA\u4E8E Vite SSR \u7684\u67B6\u6784\u4E5F\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u505A\u9759\u6001\u9884\u6E32\u67D3\uFF08SSG)\u3002</p><p>Vite SSR \u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u5E95\u5C42\u529F\u80FD\uFF0C\u800C\u6211\u4EEC\u671F\u5F85\u770B\u5230\u66F4\u9AD8\u5C42\u7EA7\u7684\u6846\u67B6\u5728\u6B64\u57FA\u7840\u4E0A\u7684\u5E94\u7528\u3002</p><h3 id="opt-in-legacy-browser-support" tabindex="-1">\u65E7\u6D4F\u89C8\u5668\u652F\u6301 <a class="header-anchor" href="#opt-in-legacy-browser-support">\xB6</a></h3><p>Vite \u9ED8\u8BA4\u53EA\u652F\u6301\u539F\u751F\u652F\u6301 ESM \u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7\u5B98\u65B9\u7684 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">@vitejs/plugin-legacy</a> \u6765\u652F\u6301\u65E7\u6D4F\u89C8\u5668\u3002legacy \u63D2\u4EF6\u4F1A\u81EA\u52A8\u989D\u5916\u751F\u6210\u4E00\u4E2A\u9488\u5BF9\u65E7\u6D4F\u89C8\u5668\u7684\u5305\uFF0C\u5E76\u4E14\u5728 html \u4E2D\u63D2\u5165\u6839\u636E\u6D4F\u89C8\u5668 ESM \u652F\u6301\u6765\u9009\u62E9\u6027\u52A0\u8F7D\u5BF9\u5E94\u5305\u7684\u4EE3\u7801\uFF08\u7C7B\u4F3C vue-cli \u7684 modern mode\uFF09\u3002</p><h2 id="give-it-a-try" tabindex="-1">\u5C1D\u8BD5\u4E00\u4E0B\uFF01 <a class="header-anchor" href="#give-it-a-try">\xB6</a></h2><p>\u529F\u80FD\u662F\u5F88\u591A\uFF0C\u4F46\u8BD5\u4E00\u4E0B\u5176\u5B9E\u5F88\u7B80\u5355\u3002\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u4E00\u4E0B\u5C31\u53EF\u4EE5\u642D\u8D77\u4E00\u4E2A\u57FA\u4E8E vite \u7684\u9879\u76EE\uFF08\u786E\u4FDD\u4F60\u7684 Node.js \u7248\u672C &gt;=12\uFF09\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init @vitejs/app</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\uFF0C\u4F60\u53EF\u4EE5\u9605\u8BFB <a href="/guide/">\u6307\u5F15\u6587\u6863</a> \u4E86\u89E3 Vite \u63D0\u4F9B\u4E86\u54EA\u4E9B\u5F00\u7BB1\u5373\u7528\u7684\u529F\u80FD\uFF0C\u4E5F\u53EF\u4EE5\u5728 <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">GitHub</a> \u4E0A\u67E5\u770B\u6E90\u7801\uFF0C\u5173\u6CE8\u6211\u4EEC\u7684 <a href="https://twitter.com/vite_js" target="_blank" rel="noopener noreferrer">Twitter</a> \u4EE5\u4E86\u89E3\u6700\u65B0\u7684\u8FDB\u5C55\uFF0C\u6216\u4E0E\u5176\u4ED6 Vite \u7528\u6237\u5728 <a href="http://chat.vitejs.dev/" target="_blank" rel="noopener noreferrer">Discord</a> \u4E0A\u4E00\u8D77\u8BA8\u8BBA\u3002</p>`,28),o=[s];function l(p,c,h,d,g,u){return r(),t("div",null,o)}var b=e(n,[["render",l]]);export{v as __pageData,b as default};
