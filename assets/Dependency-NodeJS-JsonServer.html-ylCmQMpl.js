import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,b as n,d as t,e as l,o as r}from"./app-C0cwbspA.js";const h={};function p(o,s){return r(),a("div",null,[s[0]||(s[0]=i("p",null,[i("strong",null,"文章摘要："),n(" 通过JSON文件来模拟后端服务。")],-1)),s[1]||(s[1]=i("ul",null,[i("li",null,"适用于前端开发人员在进行前后端分离开发时，当后端服务还未搭建好时，使用json-server可以模拟REST API，从而加速开发过程。")],-1)),t(" more "),s[2]||(s[2]=l(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><blockquote><ul><li>json-server通过监听一个JSON文件（如db.json）的变化，为前端提供模拟的数据服务，支持CRUD（创建、读取、更新、删除）操作以及一些高级功能，如排序、分页、嵌套查询等。</li><li>教程：<a href="https://blog.csdn.net/xhmico/article/details/139607652" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/xhmico/article/details/139607652</a></li></ul></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>使用npm安装</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> json-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="创建数据" tabindex="-1"><a class="header-anchor" href="#创建数据"><span>创建数据</span></a></h2><blockquote><ul><li>创建一个json格式的文件。</li></ul></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;user&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;account&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;YH202408091830001000&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;password&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;123456&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;nick_name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;MagicTable&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;register_time&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2024-08-13 04:22:40&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;real_name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;魔术桌&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;citizen_identity_number&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;411024202408091024&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;phone_number&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;14559585094&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;gender&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;age&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;birthday&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2024-08-09&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;email&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1234567890@qq.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h2><blockquote><ul><li>运行命令启动json-server服务</li></ul></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> json-server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --watch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="数据操作分类" tabindex="-1"><a class="header-anchor" href="#数据操作分类"><span>数据操作分类</span></a></h2><blockquote><ul><li><strong>新增</strong>：<code>POST请求</code>，返回新增后的对象</li><li><strong>新增 - 批量增加</strong>：<code>POST请求</code>，</li><li><strong>删除</strong>：<code>DELETE请求</code>，返回删除前的对象</li><li><strong>删除 - 批量删除</strong>：<code>DELETE请求</code>，</li><li><strong>修改 - 修改某条数据的局部字段</strong>：<code>PATCH请求</code>，返回修改后的对象</li><li><strong>修改 - 修改某条数据的全部字段</strong>：<code>PUT请求</code>，返回修改后的对象</li><li><strong>查询 - 查询全部数据</strong>：<code>GET请求</code>，返回对象列表</li><li><strong>查询 - 根据字段查询单条或多条数据</strong>：<code>GET请求</code>，返回对象列表</li></ul></blockquote>`,13))])}const c=e(h,[["render",p],["__file","Dependency-NodeJS-JsonServer.html.vue"]]),g=JSON.parse('{"path":"/software/Dependency-NodeJS-JsonServer.html","title":"Dependency - NodeJS - json-server","lang":"zh-CN","frontmatter":{"title":"Dependency - NodeJS - json-server","author":"魔术桌","cover":"","category":["软件程序/依赖"],"date":"2024-08-18T00:00:00.000Z","tag":["进度-待完善","知识总结"],"description":"文章摘要： 通过JSON文件来模拟后端服务。 适用于前端开发人员在进行前后端分离开发时，当后端服务还未搭建好时，使用json-server可以模拟REST API，从而加速开发过程。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/Dependency-NodeJS-JsonServer.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Dependency - NodeJS - json-server"}],["meta",{"property":"og:description","content":"文章摘要： 通过JSON文件来模拟后端服务。 适用于前端开发人员在进行前后端分离开发时，当后端服务还未搭建好时，使用json-server可以模拟REST API，从而加速开发过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T15:14:43.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-待完善"}],["meta",{"property":"article:tag","content":"知识总结"}],["meta",{"property":"article:published_time","content":"2024-08-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T15:14:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dependency - NodeJS - json-server\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-28T15:14:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"创建数据","slug":"创建数据","link":"#创建数据","children":[]},{"level":2,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]},{"level":2,"title":"数据操作分类","slug":"数据操作分类","link":"#数据操作分类","children":[]}],"git":{"createdTime":1734888628000,"updatedTime":1735398883000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"2216410594@qq.com","commits":3}]},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"software/Dependency-NodeJS-JsonServer.md","localizedDate":"2024年8月18日","excerpt":"<p><strong>文章摘要：</strong> 通过JSON文件来模拟后端服务。</p>\\n<ul>\\n<li>适用于前端开发人员在进行前后端分离开发时，当后端服务还未搭建好时，使用json-server可以模拟REST API，从而加速开发过程。</li>\\n</ul>\\n","autoDesc":true}');export{c as comp,g as data};