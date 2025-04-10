import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as s,b as n,d as l,e as t,o as h}from"./app-C-jtbkLB.js";const r={};function k(d,i){return h(),e("div",null,[i[0]||(i[0]=s("p",null,[s("strong",null,"文章摘要："),t(" 摘要内容。")],-1)),n(" more "),i[1]||(i[1]=l(`<h2 id="软件获取" tabindex="-1"><a class="header-anchor" href="#软件获取"><span>软件获取</span></a></h2><ul><li>官方下载地址：<a href="https://nginx.org/" target="_blank" rel="noopener noreferrer">Nginx官网</a></li></ul><h2 id="安装-apt包管理器" tabindex="-1"><a class="header-anchor" href="#安装-apt包管理器"><span>安装 - apt包管理器</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 运行依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gnupg2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ca-certificates</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lsb-release</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> debian-archive-keyring</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 导入nginx官方的GPG密钥，用于加密和数字签名，以便apt可以验证软件包的真实性</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://nginx.org/keys/nginx_signing.key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gpg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dearmor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/keyrings/nginx-archive-keyring.gpg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 验证下载的文件是否包含正确的密钥</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gpg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dry-run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --quiet</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --no-keyring</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --import</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --import-options</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> import-show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/keyrings/nginx-archive-keyring.gpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 要为稳定的 nginx 软件包设置 apt 存储库</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/debian \`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lsb_release</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -cs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\` nginx&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list.d/nginx.list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置一个固定仓库，实现优先选择Nginx的包而不是其他分发或镜像源提供的包</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Package: *\\nPin: origin nginx.org\\nPin: release o=nginx\\nPin-Priority: 900\\n&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/preferences.d/99nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更新系统存储库列表缓存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 正式安装nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载-apt包管理器" tabindex="-1"><a class="header-anchor" href="#卸载-apt包管理器"><span>卸载 - apt包管理器</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装-预编译" tabindex="-1"><a class="header-anchor" href="#安装-预编译"><span>安装 - 预编译</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="卸载-预编译" tabindex="-1"><a class="header-anchor" href="#卸载-预编译"><span>卸载 - 预编译</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装-源代码" tabindex="-1"><a class="header-anchor" href="#安装-源代码"><span>安装 - 源代码</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 编译依赖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 运行依赖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gcc-c++</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zlib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zlib-devel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> openssl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> openssl-devel</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 开始下载</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://nginx.org/download/nginx-1.26.2.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 解压压缩包，解压到\`/usr/local/nginx/\`</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx-1.26.2.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/nginx/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入解压后的nginx目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">解压后的文件</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">夹&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 设置configure</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./configure</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 开始编译安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载-源代码" tabindex="-1"><a class="header-anchor" href="#卸载-源代码"><span>卸载 - 源代码</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,20))])}const c=a(r,[["render",k]]),o=JSON.parse('{"path":"/software/Package-Nginx-%E5%AE%89%E8%A3%85%E4%B8%8E%E5%8D%B8%E8%BD%BD.html","title":"Package - Nginx - 安装与卸载","lang":"zh-CN","frontmatter":{"title":"Package - Nginx - 安装与卸载","author":"魔术桌","cover":"","category":["软件程序/软件包"],"date":"2024-09-05T00:00:00.000Z","tag":["进度-待完善","知识总结"],"description":"文章摘要： 摘要内容。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/Package-Nginx-%E5%AE%89%E8%A3%85%E4%B8%8E%E5%8D%B8%E8%BD%BD.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Package - Nginx - 安装与卸载"}],["meta",{"property":"og:description","content":"文章摘要： 摘要内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T15:30:56.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-待完善"}],["meta",{"property":"article:tag","content":"知识总结"}],["meta",{"property":"article:published_time","content":"2024-09-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T15:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Package - Nginx - 安装与卸载\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-05T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T15:30:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"git":{"createdTime":1742743856000,"updatedTime":1742743856000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"13459588094@163.com","commits":1}]},"readingTime":{"minutes":1.26,"words":378},"filePathRelative":"software/Package-Nginx-安装与卸载.md","localizedDate":"2024年9月5日","excerpt":"<p><strong>文章摘要：</strong> 摘要内容。</p>\\n","autoDesc":true}');export{c as comp,o as data};
