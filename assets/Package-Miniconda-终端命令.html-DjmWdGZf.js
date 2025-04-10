import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as s,b as e,d as l,e as h,o as t}from"./app-C-jtbkLB.js";const d={};function r(p,i){return t(),n("div",null,[i[0]||(i[0]=s("p",null,[s("strong",null,"文章摘要："),h(" Miniconda是Anaconda的轻量化的版本，只保留了命令行交互界面和常用的一些python第三方库，剔除了其他工具包。")],-1)),i[1]||(i[1]=s("ul",null,[s("li",null,"Miniconda用于管理多个python虚拟环境和python依赖包的工具。"),s("li",null,"使用conda可以创建不同版本的python环境，能够将python进行代码隔离互不影响。")],-1)),e(" more "),i[2]||(i[2]=l(`<div class="hint-container note"><p class="hint-container-title">注</p><ul><li>在进入一个虚拟环境时，conda不会自动退出该虚拟环境。</li><li>删除虚拟环境之前，建议先退出虚拟环境。</li><li>查询虚拟环境的目录中头部有 “<code>*</code>” 标志时，表示当前所在环境。</li><li>在管理员权限下创建虚拟环境将会在Miniconda安装目录下的envs文件夹下。在普通用户权限下创建虚拟环境将会在用户目录下创建一个“.conda/envs”目录。</li><li>conda与pip建议选择其中一个来管理python第三方库，以防止出现不同步导致的无法解决依赖问题。</li></ul></div><h2 id="查询conda版本" tabindex="-1"><a class="header-anchor" href="#查询conda版本"><span>查询conda版本</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  全称</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 简写</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -V</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="升级conda" tabindex="-1"><a class="header-anchor" href="#升级conda"><span>升级conda</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 方法1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> conda</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 方法2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> base</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -cdefaults</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> conda</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conda虚拟环境的操作" tabindex="-1"><a class="header-anchor" href="#conda虚拟环境的操作"><span>conda虚拟环境的操作</span></a></h2><h3 id="创建虚拟环境" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境"><span>创建虚拟环境</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># &#39;-n&#39;命令是&#39;--name&#39;的缩写</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [环境名称]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 可安装指定版本的python，默认是base环境下的python版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [环境名称] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">python</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">[版本号</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 可指定虚拟环境创建的目录位置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --prefix=[目录路径+环境名称]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进入虚拟环境" tabindex="-1"><a class="header-anchor" href="#进入虚拟环境"><span>进入虚拟环境</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> activate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [环境名称]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="退出虚拟环境" tabindex="-1"><a class="header-anchor" href="#退出虚拟环境"><span>退出虚拟环境</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> deactivate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除虚拟环境" tabindex="-1"><a class="header-anchor" href="#删除虚拟环境"><span>删除虚拟环境</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> env</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [环境名称]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="克隆虚拟环境" tabindex="-1"><a class="header-anchor" href="#克隆虚拟环境"><span>克隆虚拟环境</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [新环境名称] -clone [旧环境名称]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="查询所有虚拟环境" tabindex="-1"><a class="header-anchor" href="#查询所有虚拟环境"><span>查询所有虚拟环境</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 方法1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> env</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 方法2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> info</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -envs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用conda来管理第三方库" tabindex="-1"><a class="header-anchor" href="#使用conda来管理第三方库"><span>使用conda来管理第三方库</span></a></h2><h3 id="查找并列出conda源中可用版本的第三方库" tabindex="-1"><a class="header-anchor" href="#查找并列出conda源中可用版本的第三方库"><span>查找并列出conda源中可用版本的第三方库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> search</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [库名]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="安装第三方库到当前虚拟环境" tabindex="-1"><a class="header-anchor" href="#安装第三方库到当前虚拟环境"><span>安装第三方库到当前虚拟环境</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [库名]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 可以指定第三方库的版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [库名]=[版本号]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新第三方库" tabindex="-1"><a class="header-anchor" href="#更新第三方库"><span>更新第三方库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [库名]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除第三方库" tabindex="-1"><a class="header-anchor" href="#删除第三方库"><span>删除第三方库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [库名]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="查询当前环境下已安装的第三方库" tabindex="-1"><a class="header-anchor" href="#查询当前环境下已安装的第三方库"><span>查询当前环境下已安装的第三方库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="conda配置文件操作" tabindex="-1"><a class="header-anchor" href="#conda配置文件操作"><span>conda配置文件操作</span></a></h2><h3 id="生成-condarc配置文件" tabindex="-1"><a class="header-anchor" href="#生成-condarc配置文件"><span>生成<code>.condarc</code>配置文件</span></a></h3><ul><li>Linux操作系统</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Linux操作系统需要手动转跳到\`/home/用户/\`目录下，并创建一个\`.condarc\`的文件。</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;/home/用户/&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 打开文件，若没有该文件则自动创建</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .condarc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>windows操作系统</li></ul><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># windows操作系统不会自动创建该文件，因此需要手动输入命令来生成。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">conda </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">cibfug</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">show_channel_urls yes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动修改配置文件讲解" tabindex="-1"><a class="header-anchor" href="#手动修改配置文件讲解"><span>手动修改配置文件讲解</span></a></h3><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 是否在启动命令终端时自动进入\`base\`环境。</span></span>
<span class="line"><span>auto_activate_base: false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>*待完善_</p><h3 id="命令修改配置文件讲解" tabindex="-1"><a class="header-anchor" href="#命令修改配置文件讲解"><span>命令修改配置文件讲解</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加永久镜像源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> channels</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [镜像源网址]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查询已添加的镜像源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> channels</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除指定的镜像源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --remove</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> channels</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [镜像源网址]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除索引缓存</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 在更改完镜像源后，需要清空缓存在本地的文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用镜像源站点url" tabindex="-1"><a class="header-anchor" href="#常用镜像源站点url"><span>常用镜像源站点URL</span></a></h2><p><strong>清华conda镜像源</strong></p><ul><li>清华镜像源官方说明网站：<a href="https://mirror.tuna.tsinghua.edu.cn/help/anaconda/" target="_blank" rel="noopener noreferrer">https://mirror.tuna.tsinghua.edu.cn/help/anaconda/</a></li><li>将以下文件添加到<code>.condarc</code>配置文件中即可。</li></ul><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>default_channels:</span></span>
<span class="line"><span>  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main</span></span>
<span class="line"><span>  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r</span></span>
<span class="line"><span>  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2</span></span>
<span class="line"><span>custom_channels:</span></span>
<span class="line"><span>  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud</span></span>
<span class="line"><span>  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud</span></span>
<span class="line"><span>  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud</span></span>
<span class="line"><span>  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud</span></span>
<span class="line"><span>  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud</span></span>
<span class="line"><span>  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud</span></span>
<span class="line"><span>  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud</span></span>
<span class="line"><span>  deepmodeling: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44))])}const o=a(d,[["render",r]]),g=JSON.parse('{"path":"/software/Package-Miniconda-%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4.html","title":"Package - Miniconda - 终端命令","lang":"zh-CN","frontmatter":{"title":"Package - Miniconda - 终端命令","author":"魔术桌","cover":"","category":["软件程序/软件包"],"date":"2023-08-11T00:00:00.000Z","tag":["进度-已完成","查询手册"],"description":"文章摘要： Miniconda是Anaconda的轻量化的版本，只保留了命令行交互界面和常用的一些python第三方库，剔除了其他工具包。 Miniconda用于管理多个python虚拟环境和python依赖包的工具。 使用conda可以创建不同版本的python环境，能够将python进行代码隔离互不影响。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/Package-Miniconda-%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Package - Miniconda - 终端命令"}],["meta",{"property":"og:description","content":"文章摘要： Miniconda是Anaconda的轻量化的版本，只保留了命令行交互界面和常用的一些python第三方库，剔除了其他工具包。 Miniconda用于管理多个python虚拟环境和python依赖包的工具。 使用conda可以创建不同版本的python环境，能够将python进行代码隔离互不影响。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T15:30:56.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-已完成"}],["meta",{"property":"article:tag","content":"查询手册"}],["meta",{"property":"article:published_time","content":"2023-08-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T15:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Package - Miniconda - 终端命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-11T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T15:30:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"git":{"createdTime":1742743856000,"updatedTime":1742743856000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"13459588094@163.com","commits":1}]},"readingTime":{"minutes":3.01,"words":902},"filePathRelative":"software/Package-Miniconda-终端命令.md","localizedDate":"2023年8月11日","excerpt":"<p><strong>文章摘要：</strong> Miniconda是Anaconda的轻量化的版本，只保留了命令行交互界面和常用的一些python第三方库，剔除了其他工具包。</p>\\n<ul>\\n<li>Miniconda用于管理多个python虚拟环境和python依赖包的工具。</li>\\n<li>使用conda可以创建不同版本的python环境，能够将python进行代码隔离互不影响。</li>\\n</ul>\\n","autoDesc":true}');export{o as comp,g as data};
