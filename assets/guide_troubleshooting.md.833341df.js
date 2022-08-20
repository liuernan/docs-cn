import{_ as e,c as a,o as s,a as t}from"./app.11f328e0.js";const g=JSON.parse(`{"title":"\u6545\u969C\u6392\u9664","description":"","frontmatter":{"title":"\u6545\u969C\u6392\u9664"},"headers":[{"level":2,"title":"CLI","slug":"cli"},{"level":3,"title":"Error: Cannot find module 'C:\\\\foo\\\\bar&baz\\\\vite\\\\bin\\\\vite.js'","slug":"error-cannot-find-module-cfoobarbazvitebinvitejs"},{"level":2,"title":"\u5F00\u53D1\u670D\u52A1\u5668","slug":"dev-server"},{"level":3,"title":"\u8BF7\u6C42\u59CB\u7EC8\u505C\u6EDE","slug":"requests-are-stalled-forever"},{"level":3,"title":"431 Request Header Fields Too Large","slug":"431-request-header-fields-too-large"},{"level":2,"title":"HMR","slug":"hmr"},{"level":3,"title":"Vite \u68C0\u6D4B\u5230\u6587\u4EF6\u53D8\u5316\uFF0C\u4F46 HMR \u4E0D\u5DE5\u4F5C","slug":"vite-detects-a-file-change-but-the-hmr-is-not-working"},{"level":3,"title":"Vite \u6CA1\u6709\u68C0\u6D4B\u5230\u6587\u4EF6\u53D8\u5316","slug":"vite-does-not-detect-a-file-change"},{"level":3,"title":"\u5B8C\u5168\u91CD\u65B0\u52A0\u8F7D\u4E86\uFF0C\u800C\u4E0D\u662F HMR","slug":"a-full-reload-happens-instead-of-hmr"},{"level":2,"title":"\u5176\u4ED6","slug":"others"},{"level":3,"title":"Syntax Error / Type Error","slug":"syntax-error-type-error-happens"}],"relativePath":"guide/troubleshooting.md"}`),o={name:"guide/troubleshooting.md"},r=t(`<h1 id="troubleshooting" tabindex="-1">\u6545\u969C\u6392\u9664 <a class="header-anchor" href="#troubleshooting">\xB6</a></h1><blockquote><p>\u4F60\u8FD8\u53EF\u4EE5\u67E5\u770B <a href="https://rollupjs.org/guide/en/#troubleshooting" target="_blank" rel="noopener noreferrer">Rollup \u7684\u6545\u969C\u6392\u9664\u6307\u5357</a> \u4E86\u89E3\u66F4\u591A\u3002</p></blockquote><p>\u5982\u679C\u8FD9\u91CC\u7684\u5EFA\u8BAE\u5E76\u672A\u5E2E\u52A9\u5230\u4F60\uFF0C\u8BF7\u5C06\u4F60\u7684\u95EE\u9898\u53D1\u9001\u5230 <a href="https://github.com/vitejs/vite/discussions" target="_blank" rel="noopener noreferrer">GitHub \u8BA8\u8BBA\u533A</a> \u6216 <a href="https://chat.vitejs.dev" target="_blank" rel="noopener noreferrer">Vite Land Discord</a> \u7684 <code>#help</code> \u9891\u9053\u3002</p><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli">\xB6</a></h2><h3 id="error-cannot-find-module-cfoobarbazvitebinvitejs" tabindex="-1"><code>Error: Cannot find module &#39;C:\\foo\\bar&amp;baz\\vite\\bin\\vite.js&#39;</code> <a class="header-anchor" href="#error-cannot-find-module-cfoobarbazvitebinvitejs">\xB6</a></h3><p>\u4F60\u7684\u9879\u76EE\u6587\u4EF6\u5939\u8DEF\u5F84\u4E2D\u53EF\u80FD\u5305\u542B\u4E86\u7B26\u53F7 <code>&amp;</code>\uFF0C\u8FD9\u5728 Windows \u4E0A\u65E0\u6CD5\u4E0E <code>npm</code> \u914D\u5408\u6B63\u5E38\u5DE5\u4F5C (<a href="https://github.com/npm/cmd-shim/issues/45" target="_blank" rel="noopener noreferrer">npm/cmd-shim#45</a>)\u3002</p><p>\u4F60\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u4E24\u79CD\u4FEE\u6539\u65B9\u5F0F\uFF1A</p><ul><li>\u5207\u6362\u53E6\u4E00\u79CD\u5305\u7BA1\u7406\u5DE5\u5177\uFF08\u4F8B\u5982 <code>pnpm</code> \u6216 <code>yarn</code>\uFF09</li><li>\u4ECE\u4F60\u7684\u9879\u76EE\u8DEF\u5F84\u4E2D\u79FB\u9664\u7B26\u53F7 <code>&amp;</code></li></ul><h2 id="dev-server" tabindex="-1">\u5F00\u53D1\u670D\u52A1\u5668 <a class="header-anchor" href="#dev-server">\xB6</a></h2><h3 id="requests-are-stalled-forever" tabindex="-1">\u8BF7\u6C42\u59CB\u7EC8\u505C\u6EDE <a class="header-anchor" href="#requests-are-stalled-forever">\xB6</a></h3><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F Linux\uFF0C\u6587\u4EF6\u63CF\u8FF0\u7B26\u9650\u5236\u548C inotify \u9650\u5236\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8FD9\u4E2A\u95EE\u9898\u3002\u7531\u4E8E Vite \u4E0D\u4F1A\u6253\u5305\u5927\u591A\u6570\u6587\u4EF6\uFF0C\u6D4F\u89C8\u5668\u53EF\u80FD\u4F1A\u8BF7\u6C42\u8BB8\u591A\u6587\u4EF6\uFF0C\u800C\u76F8\u5E94\u5730\u9700\u8981\u8BB8\u591A\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF0C\u56E0\u6B64\u8D85\u8FC7\u4E86\u9650\u5236\u3002</p><p>\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1A</p><ul><li><p>\u4F7F\u7528 <code>ulimit</code> \u589E\u52A0\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u9650\u5236</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5F53\u524D\u9650\u5236\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">ulimit</span><span style="color:#A6ACCD;"> -Sn</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \uFF08\u6682\u65F6\uFF09\u66F4\u6539\u9650\u5236\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">ulimit</span><span style="color:#A6ACCD;"> -Sn 10000 </span><span style="color:#676E95;font-style:italic;"># \u4F60\u53EF\u80FD\u4E5F\u9700\u8981\u66F4\u6539\u786C\u6027\u9650\u5236\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u91CD\u542F\u4F60\u7684\u6D4F\u89C8\u5668</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u901A\u8FC7 <code>sysctl</code> \u63D0\u5347\u4E0B\u5217 inotify \u76F8\u5173\u7684\u9650\u5236</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5F53\u524D\u9650\u5236\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sysctl fs.inotify</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \uFF08\u6682\u65F6\uFF09\u66F4\u6539\u9650\u5236\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo sysctl fs.inotify.max_queued_events=16384</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo sysctl fs.inotify.max_user_instances=8192</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo sysctl fs.inotify.max_user_watches=524288</span></span>
<span class="line"></span></code></pre></div></li></ul><h3 id="431-request-header-fields-too-large" tabindex="-1">431 Request Header Fields Too Large <a class="header-anchor" href="#431-request-header-fields-too-large">\xB6</a></h3><p>\u5F53\u670D\u52A1\u5668\u6216 WebSocket \u670D\u52A1\u6536\u5230\u4E00\u4E2A\u8F83\u5927\u7684 HTTP \u5934\uFF0C\u8BE5\u8BF7\u6C42\u53EF\u80FD\u4F1A\u88AB\u9057\u843D\u5E76\u4E14\u4F1A\u663E\u793A\u4E0B\u9762\u8FD9\u6837\u7684\u8B66\u544A\u3002</p><blockquote><p>Server responded with status code 431. See <a href="https://vitejs.dev/guide/troubleshooting.html#_431-request-header-fields-too-large" target="_blank" rel="noopener noreferrer">https://vitejs.dev/guide/troubleshooting.html#_431-request-header-fields-too-large</a>.</p></blockquote><p>\u8FD9\u662F\u7531\u4E8E Node.js \u9650\u5236\u8BF7\u6C42\u5934\u5927\u5C0F\uFF0C\u4EE5\u51CF\u8F7B <a href="https://www.cve.org/CVERecord?id=CVE-2018-12121" target="_blank" rel="noopener noreferrer">CVE-2018-12121</a> \u7684\u5F71\u54CD\u3002</p><p>\u8981\u907F\u514D\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u51CF\u5C0F\u8BF7\u6C42\u5934\u5927\u5C0F\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C cookie \u592A\u957F\uFF0C\u8BF7\u5220\u9664\u5B83\u3002\u6216\u8005\u4F60\u53EF\u4EE5\u4F7F\u7528 <a href="https://nodejs.org/api/cli.html#--max-http-header-sizesize" target="_blank" rel="noopener noreferrer"><code>--max-http-header-size</code></a> \u6765\u66F4\u6539\u6700\u5927\u8BF7\u6C42\u5934\u5927\u5C0F\u3002</p><h2 id="hmr" tabindex="-1">HMR <a class="header-anchor" href="#hmr">\xB6</a></h2><h3 id="vite-detects-a-file-change-but-the-hmr-is-not-working" tabindex="-1">Vite \u68C0\u6D4B\u5230\u6587\u4EF6\u53D8\u5316\uFF0C\u4F46 HMR \u4E0D\u5DE5\u4F5C <a class="header-anchor" href="#vite-detects-a-file-change-but-the-hmr-is-not-working">\xB6</a></h3><p>\u4F60\u53EF\u80FD\u5BFC\u5165\u4E86\u4E00\u4E2A\u62E5\u6709\u4E0D\u540C\u5927\u5C0F\u5199\u7684\u6587\u4EF6\uFF0C\u4F8B\u5982\uFF0C\u5B58\u5728 <code>src/foo.js</code> \u6587\u4EF6\u800C <code>src/bar.js</code> \u5BFC\u5165\u4E86\u5B83\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Foo.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5E94\u8BE5\u4E3A &#39;./foo.js&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u76F8\u5173 issue\uFF1A<a href="https://github.com/vitejs/vite/issues/964" target="_blank" rel="noopener noreferrer">#964</a></p><h3 id="vite-does-not-detect-a-file-change" tabindex="-1">Vite \u6CA1\u6709\u68C0\u6D4B\u5230\u6587\u4EF6\u53D8\u5316 <a class="header-anchor" href="#vite-does-not-detect-a-file-change">\xB6</a></h3><p>\u5982\u679C\u4F60\u6B63\u5728 WSL2 \u4E2D\u8FD0\u884C Vite\uFF0CVite \u65E0\u6CD5\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u76D1\u542C\u6587\u4EF6\u53D8\u5316\u3002\u8BF7\u67E5\u770B <a href="/config/server-options.html#server-watch"><code>server.watch</code> \u9009\u9879</a> \u7684\u63CF\u8FF0\u3002</p><h3 id="a-full-reload-happens-instead-of-hmr" tabindex="-1">\u5B8C\u5168\u91CD\u65B0\u52A0\u8F7D\u4E86\uFF0C\u800C\u4E0D\u662F HMR <a class="header-anchor" href="#a-full-reload-happens-instead-of-hmr">\xB6</a></h3><p>\u5982\u679C HMR \u4E0D\u662F\u7531 Vite \u6216\u4E00\u4E2A\u63D2\u4EF6\u5904\u7406\u7684\uFF0C\u90A3\u4E48\u5C06\u8FDB\u884C\u5B8C\u5168\u7684\u91CD\u65B0\u52A0\u8F7D\u3002</p><p>\u540C\u65F6\u5982\u679C\u6709\u4F9D\u8D56\u73AF\uFF0C\u4E5F\u4F1A\u53D1\u751F\u5B8C\u5168\u91CD\u8F7D\u3002\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8BF7\u5148\u5C1D\u8BD5\u89E3\u51B3\u4F9D\u8D56\u5FAA\u73AF\u3002</p><h2 id="others" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#others">\xB6</a></h2><h3 id="syntax-error-type-error-happens" tabindex="-1">Syntax Error / Type Error <a class="header-anchor" href="#syntax-error-type-error-happens">\xB6</a></h3><p>Vite \u65E0\u6CD5\u5904\u7406\u3001\u4E5F\u4E0D\u652F\u6301\u4EC5\u53EF\u5728\u975E\u4E25\u683C\u6A21\u5F0F\uFF08sloppy mode\uFF09\u4E0B\u8FD0\u884C\u7684\u4EE3\u7801\u3002\u8FD9\u662F\u56E0\u4E3A Vite \u4F7F\u7528\u4E86 ESM \u5E76\u4E14\u59CB\u7EC8\u5728 ESM \u4E2D\u4F7F\u7528 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" target="_blank" rel="noopener noreferrer">\u4E25\u683C\u6A21\u5F0F</a>\u3002</p><p>\u4F8B\u5982\uFF0C\u4F60\u53EF\u80FD\u4F1A\u770B\u5230\u4EE5\u4E0B\u9519\u8BEF\u3002</p><blockquote><p>[ERROR] With statements cannot be used with the &quot;esm&quot; output format due to strict mode</p></blockquote><blockquote><p>TypeError: Cannot create property &#39;foo&#39; on boolean &#39;false&#39;</p></blockquote><p>\u5982\u679C\u8FD9\u4E9B\u4EE3\u7801\u662F\u5728\u4F9D\u8D56\u4E2D\u88AB\u4F7F\u7528\u7684\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528 <a href="https://github.com/ds300/patch-package" target="_blank" rel="noopener noreferrer"><code>patch-package</code></a>\uFF08\u6216\u8005 <a href="https://yarnpkg.com/cli/patch" target="_blank" rel="noopener noreferrer"><code>yarn patch</code></a>\u3001<a href="https://pnpm.io/cli/patch" target="_blank" rel="noopener noreferrer"><code>pnpm patch</code></a> \u5DE5\u5177\uFF09\u6765\u505A\u77ED\u671F\u8865\u4E01\u5904\u7406\u3002</p>`,35),n=[r];function l(i,p,c,d,h,f){return s(),a("div",null,n)}var b=e(o,[["render",l]]);export{g as __pageData,b as default};
