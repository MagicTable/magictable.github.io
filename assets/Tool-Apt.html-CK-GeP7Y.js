import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as s,b as e,d,e as n,f as a,g as t,r as o,o as p}from"./app-C0cwbspA.js";const k={};function c(g,i){const l=o("RouteLink");return p(),r("div",null,[i[8]||(i[8]=s("p",null,[s("strong",null,"文章摘要："),e(" Debian Linux 操作系统的软件包管理工具。")],-1)),d(" more "),i[9]||(i[9]=n('<div class="hint-container info"><p class="hint-container-title">相关信息</p><blockquote><ul><li>Debian 建立一致的自由软件的预编译二进制包并从档案库中分发它们。</li><li>许多远程镜像站提供了<code>HTTP</code>和<code>FTP</code>的方式来访问“Debian档案库”。</li><li>Debian 的软件包管理系统是<code>高级软件包工具（APT）</code>。</li><li>Debian软件包管理系统可以让用户从档案库安装统一设置的<strong>二进制软件包</strong>到系统中，并进行管理，自动解决依赖问题。</li><li>每个软件包都带有自己的配置脚本。</li></ul></blockquote></div><div class="hint-container note"><p class="hint-container-title">注</p><blockquote><ul><li>请多多查看一些常用的软件包和其依赖关系。</li></ul></blockquote></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>简要说明</p><blockquote><ul><li>Debian Linux 包管理工具。</li><li>apt（Advanced Package Tool）是基于 dpkg 之上的一个更高级的包管理工具，它提供了命令行工具 apt, apt-get, 和 apt-cache，用于处理软件包的安装、更新和查询。</li><li>文档：<a href="https://wiki.debian.org/zh_CN/Apt" target="_blank" rel="noopener noreferrer">https://wiki.debian.org/zh_CN/Apt</a></li></ul></blockquote><p>主要功能</p><blockquote><ul><li><strong>依赖管理</strong>：自动处理软件包之间的依赖关系，这使得安装和更新软件包更加容易。</li><li><strong>用户友好</strong>：apt 的命令更易于记忆和使用，对初学者更友好。</li><li><strong>高级功能</strong>：apt 提供了更多的功能，如包搜索、列出可用的更新、下载源代码包等。</li></ul></blockquote><p>注意事项</p><blockquote><ul><li><strong>功能限制</strong>：虽然 apt 提供了很多功能，但某些低级别的操作仍然需要 dpkg。</li><li><strong>性能问题</strong>：在处理大量软件包时，apt 的性能可能会比直接使用 dpkg 慢。</li></ul></blockquote><p>适用场景</p><blockquote><ul><li></li></ul></blockquote><h2 id="安装与卸载" tabindex="-1"><a class="header-anchor" href="#安装与卸载"><span>安装与卸载</span></a></h2>',12)),s("p",null,[i[1]||(i[1]=e("详细总结：")),a(l,{to:"/software/Tool-Apt-%E5%AE%89%E8%A3%85%E4%B8%8E%E5%8D%B8%E8%BD%BD.html"},{default:t(()=>i[0]||(i[0]=[e("Tool-Apt-安装与卸载")])),_:1})]),i[10]||(i[10]=s("h2",{id:"终端命令",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#终端命令"},[s("span",null,"终端命令")])],-1)),s("p",null,[i[3]||(i[3]=e("详细总结 apt命令：")),a(l,{to:"/software/Tool-Apt-%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4.html"},{default:t(()=>i[2]||(i[2]=[e("Tool-Apt-终端命令")])),_:1})]),i[11]||(i[11]=s("p",null,[e("详细总结 apt-file命令："),s("a",{href:""})],-1)),i[12]||(i[12]=s("h2",{id:"配置文件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置文件"},[s("span",null,"配置文件")])],-1)),s("p",null,[i[5]||(i[5]=e("详细总结：")),a(l,{to:"/software/Tool-Apt-%E9%85%8D%E7%BD%AE.html"},{default:t(()=>i[4]||(i[4]=[e("Tool-Apt-配置")])),_:1})]),i[13]||(i[13]=n(`<h2 id="问题总结" tabindex="-1"><a class="header-anchor" href="#问题总结"><span>问题总结</span></a></h2><p>详细总结：<a href=""></a></p><h2 id="镜像源" tabindex="-1"><a class="header-anchor" href="#镜像源"><span>镜像源</span></a></h2><h2 id="存储库" tabindex="-1"><a class="header-anchor" href="#存储库"><span>存储库</span></a></h2><div class="hint-container note"><p class="hint-container-title">注</p><ul><li>修改的是APT存储库（配置文件），而记录的数据是镜像源站点的URL。</li></ul></div><div class="hint-container note"><p class="hint-container-title">注</p><p>通过apt安装的软件包，可以在以下目录中找到软件包信息：</p><ul><li><code>/var/lib/apt/lists/*</code></li><li><code>/var/lib/dpkg/available</code>：存储库中可用包的列表。</li><li><code>/var/lib/dpkg/status</code>：已安装包和可用包的状态。此文件包含有关软件包是否标记为删除、是否已安装等信息。标记为 reinst-required 的软件包已损坏，需要重新安装。</li></ul></div><p>定义</p><blockquote><ul><li>存储库是软件包的集合，通常由软件的官方维护者或第三方提供。</li></ul></blockquote><p>来源列表</p><blockquote><ul><li><code>/etc/apt/sources.list</code>文件和<code>/etc/apt/sources.list.d/</code>目录下的文件定义了软件包的来源。</li></ul></blockquote><p>组成部分</p><blockquote><ul><li><strong>地址</strong>：存储库的URL。</li><li><strong>发行版</strong>：例如，buster、bullseye、bookworm等。</li><li><strong>组件</strong>：main（官方支持的软件）、contrib（官方支持的软件，但可能依赖于非自由软件）、non-free（非自由软件）。</li></ul></blockquote><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改"><span>修改</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 华为镜像源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/deb.debian.org/mirrors.huaweicloud.com/g&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加" tabindex="-1"><a class="header-anchor" href="#添加"><span>添加</span></a></h3><ol><li><p>打开一个新的终端窗口。</p></li><li><p>使用文本编辑器添加新的存储库到源列表。通常Debian的存储库源列表文件位于 <code>/etc/</code>目录下。</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>在打开的文件中，添加新的存储库行。</li></ol><div class="language-vim line-numbers-mode" data-highlighter="shiki" data-ext="vim" data-title="vim" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">http://repository.url/debian/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> distribution main contrib non-free</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><ul><li>替换 <code>repository.url</code> 为实际的存储库URL，<code>distribution</code> 为你的发行版代号（如 <code>buster</code>、<code>bullseye</code>、<code>bookworm</code> 等）</li></ul></div><ol start="4"><li><p>保存并关闭文件。</p></li><li><p>更新你的包列表以包括新的存储库。</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h3><ol><li><p>打开一个新的终端窗口。</p></li><li><p>使用文本编辑器添加新的存储库到源列表。通常Debian的存储库源列表文件位于 <code>/etc/</code>目录下。</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li><p>找到你想删除的存储库行，并删除它。</p></li><li><p>保存并关闭文件。</p></li><li><p>更新你的包列表以包括新的存储库。</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="禁用" tabindex="-1"><a class="header-anchor" href="#禁用"><span>禁用</span></a></h3><blockquote><ul><li>如果你想暂时禁用一个存储库而不是删除它，你可以通过在存储库行前面加上 <code>#</code> 来注释掉它：</li></ul></blockquote><div class="language-vim line-numbers-mode" data-highlighter="shiki" data-ext="vim" data-title="vim" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># deb </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">http://repository.url/debian/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> distribution main contrib non-free</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更新你的包列表以包括新的存储库。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="gpg密钥" tabindex="-1"><a class="header-anchor" href="#gpg密钥"><span>GPG密钥</span></a></h2><p>定义</p><blockquote><ul><li>GPG（GNU Privacy Guard）密钥用于验证软件包的完整性和来源。它们确保下载的软件包是由可信任的发布者签名的。</li></ul></blockquote><p>作用</p><blockquote><ul><li>验证软件包：确保软件包在分发过程中未被篡改。</li><li>确保来源：保证软件包来自可信的源。</li></ul></blockquote><p>管理</p><blockquote><ul><li>传统的管理方式是通过<code>apt-key</code>命令。</li><li>新的推荐方式是使用<code>.gpg</code>文件，并将这些文件放置在<code>/etc/apt/trusted.gpg.d/</code>目录中。</li></ul></blockquote><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询"><span>查询</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 列出已添加的密钥</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-1" tabindex="-1"><a class="header-anchor" href="#添加-1"><span>添加</span></a></h3><p>有些存储库需要添加一个 GPG 密钥来验证下载的软件包。使用的是较新版本的 <code>apt</code>，可以使用 <code>apt</code> 来添加密钥：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 前置依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-transport-https</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ca-certificates</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下载GPG密钥</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -qO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://repository.url/repository-key.asc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gpg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dearmor</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/keyrings/repository-key.gpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加GPG密钥</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> keyfile.gpg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请记得用实际的URL和密钥文件替换示例中的占位符。</p><p>注意事项</p><ul><li>在添加第三方存储库时，要确保来源的可信度。</li><li>保持密钥和存储库列表的更新，以确保系统的安全性。</li><li>在进行密钥或存储库的更改后，运行<code>sudo apt update</code>来应用这些更改。</li></ul></div><h3 id="删除-1" tabindex="-1"><a class="header-anchor" href="#删除-1"><span>删除</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除密钥</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> del</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> KEY_ID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="管理" tabindex="-1"><a class="header-anchor" href="#管理"><span>管理</span></a></h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>管理方案</p><ul><li></li></ul></div><h2 id="推荐软件包存储库地址" tabindex="-1"><a class="header-anchor" href="#推荐软件包存储库地址"><span>推荐软件包存储库地址</span></a></h2><div class="hint-container note"><p class="hint-container-title">注</p><ol><li><strong>添加密钥</strong></li></ol><ul><li>在添加新的存储库之前，通常需要添加相应的GPG密钥以验证软件包。</li></ul><ol start="2"><li><strong>更新软件源</strong></li></ol><ul><li>运行<code>sudo apt-get update</code>来更新软件包列表。</li></ul><ol start="3"><li><strong>安装软件包</strong></li></ol><ul><li>使用<code>sudo apt-get install package-name</code>来安装软件包。</li></ul></div>`,51)),s("p",null,[i[7]||(i[7]=e("详细总结：")),a(l,{to:"/software/Tool-Apt-%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%90-%E7%AC%AC%E4%B8%89%E6%96%B9%E5%AD%98%E5%82%A8%E5%BA%93%E6%94%B6%E9%9B%86.html"},{default:t(()=>i[6]||(i[6]=[e("Tool-Apt-热门推荐-第三方存储库收集")])),_:1})])])}const A=h(k,[["render",c],["__file","Tool-Apt.html.vue"]]),v=JSON.parse('{"path":"/software/Tool-Apt.html","title":"Tool - Apt","lang":"zh-CN","frontmatter":{"title":"Tool - Apt","author":"魔术桌","cover":"","category":["软件程序/工具"],"date":"2024-12-06T00:00:00.000Z","tag":["进度-进行中","知识总结"],"description":"文章摘要： Debian Linux 操作系统的软件包管理工具。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/Tool-Apt.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Tool - Apt"}],["meta",{"property":"og:description","content":"文章摘要： Debian Linux 操作系统的软件包管理工具。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-03T14:02:31.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-进行中"}],["meta",{"property":"article:tag","content":"知识总结"}],["meta",{"property":"article:published_time","content":"2024-12-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-03T14:02:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tool - Apt\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-06T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-03T14:02:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"安装与卸载","slug":"安装与卸载","link":"#安装与卸载","children":[]},{"level":2,"title":"终端命令","slug":"终端命令","link":"#终端命令","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"问题总结","slug":"问题总结","link":"#问题总结","children":[]},{"level":2,"title":"镜像源","slug":"镜像源","link":"#镜像源","children":[]},{"level":2,"title":"存储库","slug":"存储库","link":"#存储库","children":[{"level":3,"title":"修改","slug":"修改","link":"#修改","children":[]},{"level":3,"title":"添加","slug":"添加","link":"#添加","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]},{"level":3,"title":"禁用","slug":"禁用","link":"#禁用","children":[]}]},{"level":2,"title":"GPG密钥","slug":"gpg密钥","link":"#gpg密钥","children":[{"level":3,"title":"查询","slug":"查询","link":"#查询","children":[]},{"level":3,"title":"添加","slug":"添加-1","link":"#添加-1","children":[]},{"level":3,"title":"删除","slug":"删除-1","link":"#删除-1","children":[]},{"level":3,"title":"管理","slug":"管理","link":"#管理","children":[]}]},{"level":2,"title":"推荐软件包存储库地址","slug":"推荐软件包存储库地址","link":"#推荐软件包存储库地址","children":[]}],"git":{"createdTime":1734888628000,"updatedTime":1735912951000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"2216410594@qq.com","commits":5}]},"readingTime":{"minutes":5.02,"words":1505},"filePathRelative":"software/Tool-Apt.md","localizedDate":"2024年12月6日","excerpt":"<p><strong>文章摘要：</strong> Debian Linux 操作系统的软件包管理工具。</p>\\n","autoDesc":true}');export{A as comp,v as data};