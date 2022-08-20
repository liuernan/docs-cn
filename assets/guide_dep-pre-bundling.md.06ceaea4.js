import{_ as e,c as s,o,a as n}from"./app.11f328e0.js";const m=JSON.parse('{"title":"\u4F9D\u8D56\u9884\u6784\u5EFA","description":"","frontmatter":{"title":"\u4F9D\u8D56\u9884\u6784\u5EFA"},"headers":[{"level":2,"title":"\u539F\u56E0","slug":"the-why"},{"level":2,"title":"\u81EA\u52A8\u4F9D\u8D56\u641C\u5BFB","slug":"automatic-dependency-discovery"},{"level":2,"title":"Monorepo \u548C\u94FE\u63A5\u4F9D\u8D56","slug":"monorepos-and-linked-dependencies"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u884C\u4E3A","slug":"customizing-the-behavior"},{"level":2,"title":"\u7F13\u5B58","slug":"caching"},{"level":3,"title":"\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58","slug":"file-system-cache"},{"level":3,"title":"\u6D4F\u89C8\u5668\u7F13\u5B58","slug":"browser-cache"}],"relativePath":"guide/dep-pre-bundling.md"}'),a={name:"guide/dep-pre-bundling.md"},l=n(`<h1 id="dependency-pre-bundling" tabindex="-1">\u4F9D\u8D56\u9884\u6784\u5EFA <a class="header-anchor" href="#dependency-pre-bundling">\xB6</a></h1><p>\u5F53\u4F60\u9996\u6B21\u542F\u52A8 <code>vite</code> \u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u6CE8\u610F\u5230\u6253\u5370\u51FA\u4E86\u4EE5\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Pre-bundling dependencies: \uFF08\u6B63\u5728\u9884\u6784\u5EFA\u4F9D\u8D56\uFF1A\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">  react</span></span>
<span class="line"><span style="color:#A6ACCD;">  react-dom</span></span>
<span class="line"><span style="color:#A6ACCD;">(this will be run only when your dependencies or config have changed)\uFF08\u8FD9\u5C06\u53EA\u4F1A\u5728\u4F60\u7684\u4F9D\u8D56\u6216\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u65F6\u6267\u884C\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="the-why" tabindex="-1">\u539F\u56E0 <a class="header-anchor" href="#the-why">\xB6</a></h2><p>\u8FD9\u5C31\u662F Vite \u6267\u884C\u7684\u6240\u8C13\u7684\u201C\u4F9D\u8D56\u9884\u6784\u5EFA\u201D\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u6709\u4E24\u4E2A\u76EE\u7684:</p><ol><li><p><strong>CommonJS \u548C UMD \u517C\u5BB9\u6027:</strong> \u5F00\u53D1\u9636\u6BB5\u4E2D\uFF0CVite \u7684\u5F00\u53D1\u670D\u52A1\u5668\u5C06\u6240\u6709\u4EE3\u7801\u89C6\u4E3A\u539F\u751F ES \u6A21\u5757\u3002\u56E0\u6B64\uFF0CVite \u5FC5\u987B\u5148\u5C06\u4F5C\u4E3A CommonJS \u6216 UMD \u53D1\u5E03\u7684\u4F9D\u8D56\u9879\u8F6C\u6362\u4E3A ESM\u3002</p><p>\u5F53\u8F6C\u6362 CommonJS \u4F9D\u8D56\u65F6\uFF0CVite \u4F1A\u6267\u884C\u667A\u80FD\u5BFC\u5165\u5206\u6790\uFF0C\u8FD9\u6837\u5373\u4F7F\u5BFC\u51FA\u662F\u52A8\u6001\u5206\u914D\u7684\uFF08\u5982 React\uFF09\uFF0C\u6309\u540D\u5BFC\u5165\u4E5F\u4F1A\u7B26\u5408\u9884\u671F\u6548\u679C\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u7B26\u5408\u9884\u671F</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p><strong>\u6027\u80FD\uFF1A</strong> Vite \u5C06\u6709\u8BB8\u591A\u5185\u90E8\u6A21\u5757\u7684 ESM \u4F9D\u8D56\u5173\u7CFB\u8F6C\u6362\u4E3A\u5355\u4E2A\u6A21\u5757\uFF0C\u4EE5\u63D0\u9AD8\u540E\u7EED\u9875\u9762\u52A0\u8F7D\u6027\u80FD\u3002</p><p>\u4E00\u4E9B\u5305\u5C06\u5B83\u4EEC\u7684 ES \u6A21\u5757\u6784\u5EFA\u4F5C\u4E3A\u8BB8\u591A\u5355\u72EC\u7684\u6587\u4EF6\u76F8\u4E92\u5BFC\u5165\u3002\u4F8B\u5982\uFF0C<a href="https://unpkg.com/browse/lodash-es/" target="_blank" rel="noopener noreferrer"><code>lodash-es</code> \u6709\u8D85\u8FC7 600 \u4E2A\u5185\u7F6E\u6A21\u5757</a>\uFF01\u5F53\u6211\u4EEC\u6267\u884C <code>import { debounce } from &#39;lodash-es&#39;</code> \u65F6\uFF0C\u6D4F\u89C8\u5668\u540C\u65F6\u53D1\u51FA 600 \u591A\u4E2A HTTP \u8BF7\u6C42\uFF01\u5C3D\u7BA1\u670D\u52A1\u5668\u5728\u5904\u7406\u8FD9\u4E9B\u8BF7\u6C42\u65F6\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u5927\u91CF\u7684\u8BF7\u6C42\u4F1A\u5728\u6D4F\u89C8\u5668\u7AEF\u9020\u6210\u7F51\u7EDC\u62E5\u585E\uFF0C\u5BFC\u81F4\u9875\u9762\u7684\u52A0\u8F7D\u901F\u5EA6\u76F8\u5F53\u6162\u3002</p><p>\u901A\u8FC7\u9884\u6784\u5EFA <code>lodash-es</code> \u6210\u4E3A\u4E00\u4E2A\u6A21\u5757\uFF0C\u6211\u4EEC\u5C31\u53EA\u9700\u8981\u4E00\u4E2A HTTP \u8BF7\u6C42\u4E86\uFF01</p></li></ol><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u4F9D\u8D56\u9884\u6784\u5EFA\u4EC5\u4F1A\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u5E94\u7528\uFF0C\u5E76\u4F1A\u4F7F\u7528 <code>esbuild</code> \u5C06\u4F9D\u8D56\u8F6C\u4E3A ESM \u6A21\u5757\u3002\u5728\u751F\u4EA7\u6784\u5EFA\u4E2D\u5219\u4F1A\u4F7F\u7528 <code>@rollup/plugin-commonjs</code>\u3002</p></div><h2 id="automatic-dependency-discovery" tabindex="-1">\u81EA\u52A8\u4F9D\u8D56\u641C\u5BFB <a class="header-anchor" href="#automatic-dependency-discovery">\xB6</a></h2><p>\u5982\u679C\u6CA1\u6709\u627E\u5230\u76F8\u5E94\u7684\u7F13\u5B58\uFF0CVite \u5C06\u6293\u53D6\u4F60\u7684\u6E90\u7801\uFF0C\u5E76\u81EA\u52A8\u5BFB\u627E\u5F15\u5165\u7684\u4F9D\u8D56\u9879\uFF08\u5373 &quot;bare import&quot;\uFF0C\u8868\u793A\u671F\u671B\u4ECE <code>node_modules</code> \u89E3\u6790\uFF09\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u4F9D\u8D56\u9879\u4F5C\u4E3A\u9884\u6784\u5EFA\u5305\u7684\u5165\u53E3\u70B9\u3002\u9884\u6784\u5EFA\u901A\u8FC7 <code>esbuild</code> \u6267\u884C\uFF0C\u6240\u4EE5\u5B83\u901A\u5E38\u975E\u5E38\u5FEB\u3002</p><p>\u5728\u670D\u52A1\u5668\u5DF2\u7ECF\u542F\u52A8\u4E4B\u540E\uFF0C\u5982\u679C\u9047\u5230\u4E00\u4E2A\u65B0\u7684\u4F9D\u8D56\u5173\u7CFB\u5BFC\u5165\uFF0C\u800C\u8FD9\u4E2A\u4F9D\u8D56\u5173\u7CFB\u8FD8\u6CA1\u6709\u5728\u7F13\u5B58\u4E2D\uFF0CVite \u5C06\u91CD\u65B0\u8FD0\u884C\u4F9D\u8D56\u6784\u5EFA\u8FDB\u7A0B\u5E76\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002</p><h2 id="monorepos-and-linked-dependencies" tabindex="-1">Monorepo \u548C\u94FE\u63A5\u4F9D\u8D56 <a class="header-anchor" href="#monorepos-and-linked-dependencies">\xB6</a></h2><p>\u5728\u4E00\u4E2A monorepo \u542F\u52A8\u4E2D\uFF0C\u8BE5\u4ED3\u5E93\u4E2D\u7684\u67D0\u4E2A\u4F9D\u8D56\u53EF\u80FD\u4F1A\u6210\u4E3A\u53E6\u4E00\u4E2A\u5305\u7684\u4F9D\u8D56\u3002Vite \u4F1A\u81EA\u52A8\u4FA6\u6D4B\u6CA1\u6709\u4ECE <code>node_modules</code> \u89E3\u6790\u7684\u4F9D\u8D56\u9879\uFF0C\u5E76\u5C06\u94FE\u63A5\u7684\u4F9D\u8D56\u89C6\u4E3A\u6E90\u7801\u3002\u5B83\u4E0D\u4F1A\u5C1D\u8BD5\u6253\u5305\u88AB\u94FE\u63A5\u7684\u4F9D\u8D56\uFF0C\u800C\u662F\u4F1A\u5206\u6790\u88AB\u94FE\u63A5\u4F9D\u8D56\u7684\u4F9D\u8D56\u5217\u8868\u3002</p><p>\u7136\u800C\uFF0C\u8FD9\u9700\u8981\u88AB\u94FE\u63A5\u7684\u4F9D\u8D56\u88AB\u5BFC\u51FA\u4E3A ESM \u683C\u5F0F\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u5728\u914D\u7F6E\u91CC\u5C06\u6B64\u4F9D\u8D56\u6DFB\u52A0\u5230 <a href="/config/dep-optimization-options.html#optimizedeps-include"><code>optimizeDeps.include</code></a> \u548C <a href="/config/build-options.html#build-commonjsoptions"><code>build.commonjsOptions.include</code></a> \u8FD9\u4E24\u9879\u4E2D\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">optimizeDeps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">linked-dep</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">commonjsOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">linked-dep</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u8FD9\u4E2A\u88AB\u94FE\u63A5\u7684\u4F9D\u8D56\u53D1\u751F\u53D8\u66F4\u540E\uFF0C\u5728\u91CD\u542F\u5F00\u53D1\u670D\u52A1\u5668\u65F6\u5728\u547D\u4EE4\u4E2D\u5E26\u4E0A <code>--force</code> \u9009\u9879\u8BA9\u6240\u6709\u66F4\u6539\u751F\u6548\u3002</p><div class="warning custom-block"><p class="custom-block-title">\u91CD\u590D\u5220\u9664</p><p>\u7531\u4E8E\u5BF9\u94FE\u63A5\u4F9D\u8D56\u7684\u89E3\u6790\u65B9\u5F0F\u4E0D\u540C\uFF0C\u4F20\u9012\u6027\u7684\u4F9D\u8D56\u9879\u53EF\u80FD\u4F1A\u4E0D\u6B63\u786E\u5730\u8FDB\u884C\u91CD\u590D\u6570\u636E\u5220\u9664\uFF0C\u800C\u9020\u6210\u8FD0\u884C\u65F6\u7684\u95EE\u9898\u3002\u5982\u679C\u4F60\u5076\u7136\u53D1\u73B0\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8BF7\u4F7F\u7528 <code>npm pack</code> \u6765\u4FEE\u590D\u5B83\u3002</p></div><h2 id="customizing-the-behavior" tabindex="-1">\u81EA\u5B9A\u4E49\u884C\u4E3A <a class="header-anchor" href="#customizing-the-behavior">\xB6</a></h2><p>\u9ED8\u8BA4\u7684\u4F9D\u8D56\u9879\u53D1\u73B0\u4E3A\u542F\u53D1\u5F0F\u53EF\u80FD\u5E76\u4E0D\u603B\u662F\u53EF\u53D6\u7684\u3002\u5728\u4F60\u60F3\u8981\u663E\u5F0F\u5730\u4ECE\u5217\u8868\u4E2D\u5305\u542B/\u6392\u9664\u4F9D\u8D56\u9879\u7684\u60C5\u51B5\u4E0B, \u8BF7\u4F7F\u7528 <a href="/config/dep-optimization-options.html"><code>optimizeDeps</code> \u914D\u7F6E\u9879</a>\u3002</p><p>\u5F53\u4F60\u9047\u5230\u4E0D\u80FD\u76F4\u63A5\u5728\u6E90\u7801\u4E2D\u53D1\u73B0\u7684 import \u65F6\uFF0C<code>optimizeDeps.include</code> \u6216 <code>optimizeDeps.exclude</code> \u5C31\u662F\u5178\u578B\u7684\u7528\u4F8B\u3002\u4F8B\u5982\uFF0Cimport \u53EF\u80FD\u662F\u63D2\u4EF6\u8F6C\u6362\u7684\u7ED3\u679C\u3002\u8FD9\u610F\u5473\u7740 Vite \u65E0\u6CD5\u5728\u521D\u59CB\u626B\u63CF\u65F6\u53D1\u73B0 import \u2014\u2014 \u5B83\u53EA\u80FD\u5728\u6D4F\u89C8\u5668\u8BF7\u6C42\u6587\u4EF6\u65F6\u8F6C\u6362\u540E\u624D\u80FD\u53D1\u73B0\u3002\u8FD9\u5C06\u5BFC\u81F4\u670D\u52A1\u5668\u5728\u542F\u52A8\u540E\u7ACB\u5373\u91CD\u65B0\u6253\u5305\u3002</p><p><code>include</code> \u548C <code>exclude</code> \u90FD\u53EF\u4EE5\u7528\u6765\u5904\u7406\u8FD9\u4E2A\u95EE\u9898\u3002\u5982\u679C\u4F9D\u8D56\u9879\u5F88\u5927\uFF08\u5305\u542B\u5F88\u591A\u5185\u90E8\u6A21\u5757\uFF09\u6216\u8005\u662F CommonJS\uFF0C\u90A3\u4E48\u4F60\u5E94\u8BE5\u5305\u542B\u5B83\uFF1B\u5982\u679C\u4F9D\u8D56\u9879\u5F88\u5C0F\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u662F\u6709\u6548\u7684 ESM\uFF0C\u5219\u53EF\u4EE5\u6392\u9664\u5B83\uFF0C\u8BA9\u6D4F\u89C8\u5668\u76F4\u63A5\u52A0\u8F7D\u5B83\u3002</p><h2 id="caching" tabindex="-1">\u7F13\u5B58 <a class="header-anchor" href="#caching">\xB6</a></h2><h3 id="file-system-cache" tabindex="-1">\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58 <a class="header-anchor" href="#file-system-cache">\xB6</a></h3><p>Vite \u4F1A\u5C06\u9884\u6784\u5EFA\u7684\u4F9D\u8D56\u7F13\u5B58\u5230 <code>node_modules/.vite</code>\u3002\u5B83\u6839\u636E\u51E0\u4E2A\u6E90\u6765\u51B3\u5B9A\u662F\u5426\u9700\u8981\u91CD\u65B0\u8FD0\u884C\u9884\u6784\u5EFA\u6B65\u9AA4:</p><ul><li><code>package.json</code> \u4E2D\u7684 <code>dependencies</code> \u5217\u8868</li><li>\u5305\u7BA1\u7406\u5668\u7684 lockfile\uFF0C\u4F8B\u5982 <code>package-lock.json</code>, <code>yarn.lock</code>\uFF0C\u6216\u8005 <code>pnpm-lock.yaml</code></li><li>\u53EF\u80FD\u5728 <code>vite.config.js</code> \u76F8\u5173\u5B57\u6BB5\u4E2D\u914D\u7F6E\u8FC7\u7684</li></ul><p>\u53EA\u6709\u5728\u4E0A\u8FF0\u5176\u4E2D\u4E00\u9879\u53D1\u751F\u66F4\u6539\u65F6\uFF0C\u624D\u9700\u8981\u91CD\u65B0\u8FD0\u884C\u9884\u6784\u5EFA\u3002</p><p>\u5982\u679C\u51FA\u4E8E\u67D0\u4E9B\u539F\u56E0\uFF0C\u4F60\u60F3\u8981\u5F3A\u5236 Vite \u91CD\u65B0\u6784\u5EFA\u4F9D\u8D56\uFF0C\u4F60\u53EF\u4EE5\u7528 <code>--force</code> \u547D\u4EE4\u884C\u9009\u9879\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u6216\u8005\u624B\u52A8\u5220\u9664 <code>node_modules/.vite</code> \u76EE\u5F55\u3002</p><h3 id="browser-cache" tabindex="-1">\u6D4F\u89C8\u5668\u7F13\u5B58 <a class="header-anchor" href="#browser-cache">\xB6</a></h3><p>\u89E3\u6790\u540E\u7684\u4F9D\u8D56\u8BF7\u6C42\u4F1A\u4EE5 HTTP \u5934 <code>max-age=31536000,immutable</code> \u5F3A\u7F13\u5B58\uFF0C\u4EE5\u63D0\u9AD8\u5728\u5F00\u53D1\u65F6\u7684\u9875\u9762\u91CD\u8F7D\u6027\u80FD\u3002\u4E00\u65E6\u88AB\u7F13\u5B58\uFF0C\u8FD9\u4E9B\u8BF7\u6C42\u5C06\u6C38\u8FDC\u4E0D\u4F1A\u518D\u5230\u8FBE\u5F00\u53D1\u670D\u52A1\u5668\u3002\u5982\u679C\u5B89\u88C5\u4E86\u4E0D\u540C\u7684\u7248\u672C\uFF08\u8FD9\u53CD\u6620\u5728\u5305\u7BA1\u7406\u5668\u7684 lockfile \u4E2D\uFF09\uFF0C\u5219\u9644\u52A0\u7684\u7248\u672C query \u4F1A\u81EA\u52A8\u4F7F\u5B83\u4EEC\u5931\u6548\u3002\u5982\u679C\u4F60\u60F3\u901A\u8FC7\u672C\u5730\u7F16\u8F91\u6765\u8C03\u8BD5\u4F9D\u8D56\u9879\uFF0C\u4F60\u53EF\u4EE5:</p><ol><li>\u901A\u8FC7\u6D4F\u89C8\u5668\u8C03\u8BD5\u5DE5\u5177\u7684 Network \u9009\u9879\u5361\u6682\u65F6\u7981\u7528\u7F13\u5B58\uFF1B</li><li>\u91CD\u542F Vite dev server\uFF0C\u5E76\u6DFB\u52A0 <code>--force</code> \u547D\u4EE4\u4EE5\u91CD\u65B0\u6784\u5EFA\u4F9D\u8D56\uFF1B</li><li>\u91CD\u65B0\u8F7D\u5165\u9875\u9762\u3002</li></ol>`,29),p=[l];function c(t,i,d,r,D,y){return o(),s("div",null,p)}var C=e(a,[["render",c]]);export{m as __pageData,C as default};
