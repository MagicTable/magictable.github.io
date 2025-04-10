import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as s,b as l,d as n,e,o as h}from"./app-C-jtbkLB.js";const r={};function d(p,i){return h(),t("div",null,[i[0]||(i[0]=s("p",null,[s("strong",null,"文章摘要："),e(" Hexo博客框架的常用命令汇总。Hexo有官方网站("),s("a",{href:"https://hexo.io/zh-cn/",target:"_blank",rel:"noopener noreferrer"},"点击进入Hexo官网"),e(")。")],-1)),l(" more "),i[1]||(i[1]=n(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><h3 id="查看hexo版本" tabindex="-1"><a class="header-anchor" href="#查看hexo版本"><span>查看Hexo版本</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看当前版本，简写命令hexo -v</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hexo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化网站" tabindex="-1"><a class="header-anchor" href="#初始化网站"><span>初始化网站</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 项目名参数是创建一个目录，（可选参数）默认在目前的文件夹建立网站</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hexo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 项目名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 切换到项目名文件夹下面</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 项目名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装hexo所需的依赖库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建文章" tabindex="-1"><a class="header-anchor" href="#新建文章"><span>新建文章</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 新建一篇文章。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hexo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [layout] 文章名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果没有设置“layout”参数，则默认使用 _config.yml 中的 default_layout 参数代替。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果文章名包含空格的话，请使用引号括起来。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">-p,，--path</td><td style="text-align:left;">自定义新文章的路径</td></tr><tr><td style="text-align:left;">-r， --replace</td><td style="text-align:left;">如果存在同名文章，将其替换</td></tr><tr><td style="text-align:left;">-r，--slug</td><td style="text-align:left;">文章的Slug，作为新文章的文件名和发布后的URL</td></tr></tbody></table><h3 id="生成静态文件" tabindex="-1"><a class="header-anchor" href="#生成静态文件"><span>生成静态文件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 生成静态文件，简写命令hexo g</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hexo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> generate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动本地服务器" tabindex="-1"><a class="header-anchor" href="#启动本地服务器"><span>启动本地服务器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 开启本地服务，简写命令hexo s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hexo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">-p，--port</td><td style="text-align:left;">重设端口（默认访问网址为<a href="http://localhost:4000/%EF%BC%89" target="_blank" rel="noopener noreferrer">http://localhost:4000/）</a></td></tr><tr><td style="text-align:left;">-s，--static</td><td style="text-align:left;">只使用静态文件</td></tr><tr><td style="text-align:left;">-l， --log</td><td style="text-align:left;">启动日记记录，使用覆盖记录格式</td></tr></tbody></table><h3 id="部署同步到远程站点" tabindex="-1"><a class="header-anchor" href="#部署同步到远程站点"><span>部署同步到远程站点</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 部署同步到远程站点，简写命令hexo d</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hexo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> deploy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清除静态文件" tabindex="-1"><a class="header-anchor" href="#清除静态文件"><span>清除静态文件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 清除静态文件，没有简写命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hexo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示网站资料" tabindex="-1"><a class="header-anchor" href="#显示网站资料"><span>显示网站资料</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># type参数是类型</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 参数：\`page\`导航栏、\`post\`文章、\`route\`静态文件树状图、\`tag\`标签、\`category\`分类。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hexo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">typ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19))])}const c=a(r,[["render",d]]),g=JSON.parse('{"path":"/software/Library-Npm-Hexo-%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4.html","title":"Library - Npm - Hexo - 终端命令","lang":"zh-CN","frontmatter":{"title":"Library - Npm - Hexo - 终端命令","author":"魔术桌","cover":"","category":["软件程序/类库"],"date":"2023-08-14T00:00:00.000Z","tag":["进度-已完成","查询手册"],"description":"文章摘要： Hexo博客框架的常用命令汇总。Hexo有官方网站(点击进入Hexo官网)。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/Library-Npm-Hexo-%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Library - Npm - Hexo - 终端命令"}],["meta",{"property":"og:description","content":"文章摘要： Hexo博客框架的常用命令汇总。Hexo有官方网站(点击进入Hexo官网)。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T15:30:56.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-已完成"}],["meta",{"property":"article:tag","content":"查询手册"}],["meta",{"property":"article:published_time","content":"2023-08-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T15:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Library - Npm - Hexo - 终端命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-14T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T15:30:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"git":{"createdTime":1742743856000,"updatedTime":1742743856000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"13459588094@163.com","commits":1}]},"readingTime":{"minutes":1.47,"words":441},"filePathRelative":"software/Library-Npm-Hexo-终端命令.md","localizedDate":"2023年8月14日","excerpt":"<p><strong>文章摘要：</strong> Hexo博客框架的常用命令汇总。Hexo有官方网站(<a href=\\"https://hexo.io/zh-cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">点击进入Hexo官网</a>)。</p>\\n","autoDesc":true}');export{c as comp,g as data};
