import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as t,b as s,d as o,e as a,f as e,g as n,r as d,o as h}from"./app-C0cwbspA.js";const k="/assets/Dependency-Maven-SpringBoot3-%E8%87%AA%E5%8A%A8%E9%85%8D%E7%BD%AE%E6%B5%81%E7%A8%8B%E5%9B%BE.excalidraw-BCsrRBgl.svg",g={};function B(u,i){const l=d("RouteLink");return h(),p("div",null,[i[25]||(i[25]=t("p",null,[t("strong",null,"文章摘要："),s(" 摘要内容。")],-1)),o(" more "),i[26]||(i[26]=a(`<div class="hint-container important"><p class="hint-container-title">重要</p><p>条件和版本说明</p><blockquote><ul><li>^ Java 17</li><li>Spring Framework 6</li><li>MySQL 8.0</li></ul></blockquote></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>外部相关文章</p><blockquote><ul><li>参考第三方博客文章：<a href="https://www.cnblogs.com/yuey6670/p/18055037" target="_blank" rel="noopener noreferrer">博客园-yuey6670</a>，讲述了项目依赖、配置文件、目录结构。</li></ul></blockquote></div><div class="hint-container note"><p class="hint-container-title">注</p><blockquote><p>当进行微服务开发时的专业术语歧义：</p><ul><li>拆分模块（开发中） == 拆分多服务（部署中）</li></ul></blockquote></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>简要说明</p><blockquote><ul><li>Spring Boot 3项目是基于 Spring Framework 6 的全新版本，旨在简化Spring应用的初始搭建以及开发过程。它提供了一系列的自动化配置，使得开发者能够快速启动并运行一个独立的、生产级别的基于Spring的应用。</li><li>spring boot 是以启动器为单位，整合各种需求的依赖。</li><li>官方文档：<a href="https://spring.io/projects/spring-boot#learn" target="_blank" rel="noopener noreferrer">网站链接</a>，国内网速不稳定。</li></ul></blockquote><p>主要功能</p><blockquote><ul><li><strong>自动配置</strong>：根据项目中添加的依赖自动配置Spring应用。</li><li><strong>独立运行</strong>：内嵌Tomcat、Jetty或Undertow，无需部署到外部服务器。</li><li><strong>简化依赖管理</strong>：通过提供一系列的&quot;Starters&quot;，简化了依赖的添加和管理。</li><li><strong>生产就绪特性</strong>：提供了一系列生产就绪特性，如指标、健康检查和外部化配置。</li><li><strong>无代码生成和XML配置</strong>：不需要代码生成，也不需要XML配置文件。</li></ul></blockquote><p>注意事项</p><blockquote><ul><li><strong>兼容性</strong>：Spring Boot 3 基于 Spring Framework 6，可能不兼容早期版本的Spring应用。</li><li><strong>JDK版本</strong>：需要JDK 17或更高版本。</li><li><strong>依赖升级</strong>：在迁移旧项目到 Spring Boot 3 时，需要注意第三方依赖的兼容性。</li><li><strong>配置变更</strong>：部分配置属性可能在新版本中发生变化，需要根据官方文档进行相应的调整。</li></ul></blockquote><p>适用场景</p><blockquote><ul><li><strong>微服务架构</strong>：适用于构建微服务架构中的独立服务。</li><li><strong>快速原型开发</strong>：适合快速启动新项目，进行原型设计和开发。</li><li><strong>全栈开发</strong>：提供全栈开发支持，包括前端、后端、数据库等。</li><li><strong>企业级应用</strong>：适用于构建大型企业级应用，提供丰富的功能和生产就绪特性。</li><li><strong>云原生应用</strong>：支持云原生应用的开发，与容器化技术（如Docker）和编排工具（如Kubernetes）无缝集成。</li></ul></blockquote><h2 id="maven坐标" tabindex="-1"><a class="header-anchor" href="#maven坐标"><span>Maven坐标</span></a></h2><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 继承父级项目 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 引入并继承spring boot提供的父级pom.xml --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;spring-boot-starter-parent&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;3.3.1&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建"><span>项目搭建</span></a></h2>`,15)),t("blockquote",null,[t("ul",null,[t("li",null,[i[1]||(i[1]=s("使用Maven来搭建SpringBoot项目的流程：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93-%E6%89%8B%E5%8A%A8%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8EMaven%E7%9A%84%E9%A1%B9%E7%9B%AE.html"},{default:n(()=>i[0]||(i[0]=[s("Dependency-Maven-SpringBoot3-问题总结-手动搭建基于Maven的项目")])),_:1})])])]),i[27]||(i[27]=t("h2",{id:"运行流程",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#运行流程"},[t("span",null,"运行流程")])],-1)),t("p",null,[i[3]||(i[3]=s("详细总结：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93-%E4%BB%A3%E7%A0%81%E8%BF%90%E8%A1%8C%E6%B5%81%E7%A8%8B.html"},{default:n(()=>i[2]||(i[2]=[s("Dependency-Maven-SpringBoot3-问题总结-代码运行流程")])),_:1})]),i[28]||(i[28]=t("h2",{id:"场景启动器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#场景启动器"},[t("span",null,"场景启动器")])],-1)),i[29]||(i[29]=t("p",null,"命名规范",-1)),i[30]||(i[30]=t("blockquote",null,[t("ul",null,[t("li",null,[s("官方提供的场景：命名为："),t("code",null,"spring-boot-starter-*")]),t("li",null,[s("第三方提供场景：命名为："),t("code",null,"*-spring-boot-starter")])])],-1)),t("p",null,[i[5]||(i[5]=s("详细总结：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E5%9C%BA%E6%99%AF%E5%90%AF%E5%8A%A8%E5%99%A8%EF%BC%88starter%EF%BC%89.html"},{default:n(()=>i[4]||(i[4]=[s("Dependency-Maven-SpringBoot3-场景启动器（starter）")])),_:1})]),i[31]||(i[31]=t("h2",{id:"配置文件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#配置文件"},[t("span",null,"配置文件")])],-1)),i[32]||(i[32]=t("blockquote",null,[t("ul",null,[t("li",null,"SpringBoot使用一个全局的配置文件，核心配置文件，配置文件名在约定的情况下，名字是固定的，"),t("li",null,"配置文件的作用：修改SpringBoot自动配置的默认值，实现自定义。")])],-1)),t("p",null,[i[7]||(i[7]=s("SpringBoot配置文件支持的属性汇总：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E9%85%8D%E7%BD%AE-YAML%E6%96%87%E4%BB%B6.html"},{default:n(()=>i[6]||(i[6]=[s("Dependency-Maven-SpringBoot3-配置-YAML文件")])),_:1})]),t("p",null,[i[9]||(i[9]=s("SpringBoot项目配置文件推荐方案：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%90-%E9%85%8D%E7%BD%AE%E6%96%B9%E6%A1%88.html"},{default:n(()=>i[8]||(i[8]=[s("Dependency-Maven-SpringBoot3-热门推荐-配置方案")])),_:1})]),i[33]||(i[33]=t("h3",{id:"配置文件格式",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#配置文件格式"},[t("span",null,"配置文件格式")])],-1)),i[34]||(i[34]=t("p",null,[t("code",null,"application.properties"),s("配置文件")],-1)),t("blockquote",null,[t("ul",null,[t("li",null,[i[11]||(i[11]=s("Properties格式文件的语法规则：")),e(l,{to:"/software/Language-Properties.html"},{default:n(()=>i[10]||(i[10]=[s("Language-Properties")])),_:1})])])]),i[35]||(i[35]=t("p",null,[t("code",null,"application.yml"),s("配置文件")],-1)),t("blockquote",null,[t("ul",null,[t("li",null,[i[13]||(i[13]=s("YAML格式文件的语法规则：")),e(l,{to:"/software/Language-YAML.html"},{default:n(()=>i[12]||(i[12]=[s("Language-YAML")])),_:1})])])]),i[36]||(i[36]=a('<h3 id="加载顺序" tabindex="-1"><a class="header-anchor" href="#加载顺序"><span>加载顺序</span></a></h3><p>根据文件格式</p><blockquote><ul><li><code>yml</code> &lt; <code>yaml</code> &lt; <code>properties</code>配置文件。</li></ul></blockquote><p>根据文件位置</p><table><thead><tr><th style="text-align:left;">配置文件位置</th><th style="text-align:left;">说明</th><th style="text-align:center;">优先级</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classpath:/</code></td><td style="text-align:left;">资源根路径</td><td style="text-align:center;">最低</td></tr><tr><td style="text-align:left;"><code>classpath:/config/*/</code></td><td style="text-align:left;">资源根路径下的config目录</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;"><code>classpath:/config/</code></td><td style="text-align:left;">资源根路径下的config目录</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;"><code>file:./</code></td><td style="text-align:left;">项目根路径</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;"><code>file:./config/*/</code></td><td style="text-align:left;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;"><code>file:./config/</code></td><td style="text-align:left;">项目根路径下的config目录</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;"><code>java -jar &lt;项目名&gt;.jar --spring.config.location=&lt;配置文件位置&gt;</code></td><td style="text-align:left;">命令行指定文件</td><td style="text-align:center;">最大</td></tr></tbody></table><h3 id="profile文件的加载" tabindex="-1"><a class="header-anchor" href="#profile文件的加载"><span>Profile文件的加载</span></a></h3><blockquote><ul><li>Profile的意思是配置，对于应用程序来说，不同的环境需要不同的配置。</li><li>SpringBoot框架提供了多profile的管理功能，可以和私用profile功能来区分不同环境的配置。</li></ul></blockquote><blockquote><ul><li>spring官方给出的语法规则是：<code>application-{profile}.properties(.yml)</code></li></ul></blockquote><blockquote><ul><li>默认配置环境（<code>application.properties</code>）</li><li>开发配置环境（<code>application-dev.properties</code>）</li><li>生产配置环境（<code>application-prod.properties</code>）</li></ul></blockquote><p>案例</p><blockquote><ul><li>实现两种环境下进行切换，需要在默认配置环境（<code>application.properties</code>）中加入如下内容即可。</li></ul></blockquote><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring.profiles.active = prod</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="读取配置文件属性绑定到java类属性上" tabindex="-1"><a class="header-anchor" href="#读取配置文件属性绑定到java类属性上"><span>读取配置文件属性绑定到Java类属性上</span></a></h3>',13)),t("p",null,[i[15]||(i[15]=s("详细总结：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E6%B3%A8%E8%A7%A3.html#%E6%B3%A8%E5%85%A5%EF%BC%88%E7%BB%91%E5%AE%9A%EF%BC%89%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7"},{default:n(()=>i[14]||(i[14]=[s("Dependency-Maven-SpringBoot3-注解")])),_:1})]),i[37]||(i[37]=a('<h2 id="自动配置" tabindex="-1"><a class="header-anchor" href="#自动配置"><span>自动配置</span></a></h2><h3 id="自动配置类的原理" tabindex="-1"><a class="header-anchor" href="#自动配置类的原理"><span>自动配置类的原理</span></a></h3><blockquote><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><h2 id="devtools热部署" tabindex="-1"><a class="header-anchor" href="#devtools热部署"><span>DevTools热部署</span></a></h2><blockquote><ul><li>Spring Boot DevTools 是一个为开发者提供便捷的工具集。</li></ul></blockquote><p>主要功能</p><blockquote><p><strong>自动重启</strong></p><ul><li>当你的代码发生变化并保存时，Spring Boot 应用程序会自动重启。</li><li>这使得开发者能够快速看到代码更改后的效果，无需手动停止和启动应用程序。</li></ul><p><strong>实时重载</strong></p><ul><li>对于静态资源和视图模板（如 Thymeleaf）的更改，应用程序会实时重载这些资源，无需重启。</li><li>这意味着你可以立即看到对 HTML、CSS 或 JavaScript 文件的更改。</li></ul></blockquote><p>实现步骤</p>',8)),t("p",null,[i[17]||(i[17]=s("详细总结：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93-DevTools%E4%BE%9D%E8%B5%96%E5%AE%9E%E7%8E%B0%E7%83%AD%E9%83%A8%E7%BD%B2.html"},{default:n(()=>i[16]||(i[16]=[s("Dependency-Maven-SpringBoot3-问题总结-DevTools依赖实现热部署")])),_:1})]),i[38]||(i[38]=t("h2",{id:"日志",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#日志"},[t("span",null,"日志")])],-1)),t("blockquote",null,[t("ul",null,[i[20]||(i[20]=t("li",null,"SpringBott3 默认使用的是Logback日志框架实现",-1)),t("li",null,[i[19]||(i[19]=s("日志的应用程序属性：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E9%85%8D%E7%BD%AE-YAML%E6%96%87%E4%BB%B6.html"},{default:n(()=>i[18]||(i[18]=[s("Dependency-Maven-SpringBoot3-配置-YAML文件")])),_:1})])])]),i[39]||(i[39]=a(`<div class="hint-container note"><p class="hint-container-title">注</p><blockquote><p>日志级别和日志配置文件，请查看具体的日志依赖，本文章不再详细展开。</p></blockquote></div><h3 id="切换其他日志框架" tabindex="-1"><a class="header-anchor" href="#切换其他日志框架"><span>切换其他日志框架</span></a></h3><div class="hint-container note"><p class="hint-container-title">注</p><blockquote><p>SLF4J只能运行1个桥接器，因此需要取消掉一个桥接器。</p></blockquote></div><p>通过将依赖中手动把排除掉。</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 引入依赖 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;spring-boot-starter-web&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">		&lt;!-- 排除依赖 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">exclusions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">			&lt;!-- 排除具体依赖 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">			&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">exclusion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;spring-boot-starter-logging&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">exclusion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">exclusions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加log4j2的场景启动器</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 引入依赖 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.springframework.boot&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;spring-boot-starter-log4j2&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加log4j的日志配置文件</p><h2 id="web开发" tabindex="-1"><a class="header-anchor" href="#web开发"><span>Web开发</span></a></h2><p>调用rest http接口</p><blockquote><ul><li>通过RestTemplate调用：这是Spring提供的用于访问Rest服务的。提供的一种模板类来进行操作。</li><li>适用场景：在微服务架构下，服务之间通过网络远程调用。</li></ul></blockquote><p>WebClient</p><blockquote><ul><li>无阻塞。依赖无响应式的应用。</li></ul></blockquote><p>通过MockMvc测试</p><p>springboot整合swagger</p><h2 id="spring-mvc" tabindex="-1"><a class="header-anchor" href="#spring-mvc"><span>spring MVC</span></a></h2><h2 id="servlet容器" tabindex="-1"><a class="header-anchor" href="#servlet容器"><span>Servlet容器</span></a></h2><h2 id="spring-boot-与aop" tabindex="-1"><a class="header-anchor" href="#spring-boot-与aop"><span>spring boot 与AOP</span></a></h2><h2 id="整合第三方功能" tabindex="-1"><a class="header-anchor" href="#整合第三方功能"><span>整合第三方功能</span></a></h2>`,19)),t("p",null,[i[22]||(i[22]=s("详细总结：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93-%E6%95%B4%E5%90%88%E7%AC%AC%E4%B8%89%E6%96%B9%E5%8A%9F%E8%83%BD.html"},{default:n(()=>i[21]||(i[21]=[s("Dependency-Maven-SpringBoot3-问题总结-整合第三方功能")])),_:1})]),i[40]||(i[40]=t("p",null,"整合Mybatis",-1)),i[41]||(i[41]=t("p",null,"整合Druid",-1)),i[42]||(i[42]=t("h2",{id:"自定义starter启动器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#自定义starter启动器"},[t("span",null,"自定义Starter启动器")])],-1)),i[43]||(i[43]=t("h2",{id:"集成第三方中间件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#集成第三方中间件"},[t("span",null,"集成第三方中间件")])],-1)),t("p",null,[i[24]||(i[24]=s("详细总结：")),e(l,{to:"/software/Dependency-Maven-SpringBoot3-%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93-%E9%9B%86%E6%88%90%E7%AC%AC%E4%B8%89%E6%96%B9%E4%B8%AD%E9%97%B4%E4%BB%B6.html"},{default:n(()=>i[23]||(i[23]=[s("Dependency-Maven-SpringBoot3-问题总结-集成第三方中间件")])),_:1})])])}const y=r(g,[["render",B],["__file","Dependency-Maven-SpringBoot3.html.vue"]]),E=JSON.parse('{"path":"/software/Dependency-Maven-SpringBoot3.html","title":"Dependency - Maven - SpringBoot3","lang":"zh-CN","frontmatter":{"title":"Dependency - Maven - SpringBoot3","author":"魔术桌","cover":null,"category":["软件程序/依赖"],"date":"2024-11-09T00:00:00.000Z","tag":["进度-进行中","知识总结"],"description":"文章摘要： 摘要内容。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/Dependency-Maven-SpringBoot3.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Dependency - Maven - SpringBoot3"}],["meta",{"property":"og:description","content":"文章摘要： 摘要内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T15:14:43.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-进行中"}],["meta",{"property":"article:tag","content":"知识总结"}],["meta",{"property":"article:published_time","content":"2024-11-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T15:14:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dependency - Maven - SpringBoot3\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-28T15:14:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"Maven坐标","slug":"maven坐标","link":"#maven坐标","children":[]},{"level":2,"title":"项目搭建","slug":"项目搭建","link":"#项目搭建","children":[]},{"level":2,"title":"运行流程","slug":"运行流程","link":"#运行流程","children":[]},{"level":2,"title":"场景启动器","slug":"场景启动器","link":"#场景启动器","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[{"level":3,"title":"配置文件格式","slug":"配置文件格式","link":"#配置文件格式","children":[]},{"level":3,"title":"加载顺序","slug":"加载顺序","link":"#加载顺序","children":[]},{"level":3,"title":"Profile文件的加载","slug":"profile文件的加载","link":"#profile文件的加载","children":[]},{"level":3,"title":"读取配置文件属性绑定到Java类属性上","slug":"读取配置文件属性绑定到java类属性上","link":"#读取配置文件属性绑定到java类属性上","children":[]}]},{"level":2,"title":"自动配置","slug":"自动配置","link":"#自动配置","children":[{"level":3,"title":"自动配置类的原理","slug":"自动配置类的原理","link":"#自动配置类的原理","children":[]}]},{"level":2,"title":"DevTools热部署","slug":"devtools热部署","link":"#devtools热部署","children":[]},{"level":2,"title":"日志","slug":"日志","link":"#日志","children":[{"level":3,"title":"切换其他日志框架","slug":"切换其他日志框架","link":"#切换其他日志框架","children":[]}]},{"level":2,"title":"Web开发","slug":"web开发","link":"#web开发","children":[]},{"level":2,"title":"spring MVC","slug":"spring-mvc","link":"#spring-mvc","children":[]},{"level":2,"title":"Servlet容器","slug":"servlet容器","link":"#servlet容器","children":[]},{"level":2,"title":"spring boot 与AOP","slug":"spring-boot-与aop","link":"#spring-boot-与aop","children":[]},{"level":2,"title":"整合第三方功能","slug":"整合第三方功能","link":"#整合第三方功能","children":[]},{"level":2,"title":"自定义Starter启动器","slug":"自定义starter启动器","link":"#自定义starter启动器","children":[]},{"level":2,"title":"集成第三方中间件","slug":"集成第三方中间件","link":"#集成第三方中间件","children":[]}],"git":{"createdTime":1734888628000,"updatedTime":1735398883000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"2216410594@qq.com","commits":4}]},"readingTime":{"minutes":6.15,"words":1845},"filePathRelative":"software/Dependency-Maven-SpringBoot3.md","localizedDate":"2024年11月9日","excerpt":"<p><strong>文章摘要：</strong> 摘要内容。</p>\\n","autoDesc":true}');export{y as comp,E as data};