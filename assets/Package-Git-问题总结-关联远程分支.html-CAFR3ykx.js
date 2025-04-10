import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as s,b as a,d as l,e as h,o as n}from"./app-C-jtbkLB.js";const r={};function d(k,i){return n(),t("div",null,[i[0]||(i[0]=s("p",null,[s("strong",null,"文章摘要："),h(" 关联远程分支推荐流程。")],-1)),a(" more "),i[1]||(i[1]=l(`<h2 id="将远程仓库的某个分支保存到本地仓库" tabindex="-1"><a class="header-anchor" href="#将远程仓库的某个分支保存到本地仓库"><span>将远程仓库的某个分支保存到本地仓库</span></a></h2><ol><li>初始化一个本地仓库</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>跟踪远程仓库（新建/关联）</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;远程仓库名&gt;&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;远程仓库URL&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>获取远程仓库中的某个分支（只是能够查看到远程分支）</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fetch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;远程仓库名&gt;&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;分支名&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>拉取远程分支到本地（正式将远程分支下载下来）</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;远程仓库名&gt;&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;分支名&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>将当前分支跟踪远程分支</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;添加的远程仓库名&gt;&quot;/&quot;&lt;远程分支名&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="将本地仓库的某个分支覆盖到远程仓库" tabindex="-1"><a class="header-anchor" href="#将本地仓库的某个分支覆盖到远程仓库"><span>将本地仓库的某个分支覆盖到远程仓库</span></a></h2><ol><li>跟踪远程仓库（新建/关联）</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;远程仓库名&gt;&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;远程仓库URL&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>获取远程仓库中的某个分支（只是能够查看到远程分支）</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fetch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;远程仓库名&gt;&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;分支名&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>将本地当前分支跟踪远程仓库分支</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;添加的远程仓库名&gt;&quot;/&quot;&lt;远程分支名&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>以强制覆盖的形式推送到远程仓库分支</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 强制推送，将本地分支“覆盖”到远程仓库（遇到冲突将强制覆盖远程分支）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;远程仓库名&gt;&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;本地分支名&gt;&quot;:&quot;&lt;远程分支名&gt;&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force-with-lease</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,20))])}const g=e(r,[["render",d]]),c=JSON.parse('{"path":"/software/Package-Git-%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93-%E5%85%B3%E8%81%94%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html","title":"Package - Git - 问题总结 - 关联远程分支","lang":"zh-CN","frontmatter":{"title":"Package - Git - 问题总结 - 关联远程分支","author":"魔术桌","cover":"","category":["软件程序/软件包"],"date":"2024-10-27T00:00:00.000Z","tag":["进度-待完善","问题总结"],"description":"文章摘要： 关联远程分支推荐流程。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/Package-Git-%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93-%E5%85%B3%E8%81%94%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Package - Git - 问题总结 - 关联远程分支"}],["meta",{"property":"og:description","content":"文章摘要： 关联远程分支推荐流程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T15:30:56.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-待完善"}],["meta",{"property":"article:tag","content":"问题总结"}],["meta",{"property":"article:published_time","content":"2024-10-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T15:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Package - Git - 问题总结 - 关联远程分支\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-27T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T15:30:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"git":{"createdTime":1742743856000,"updatedTime":1742743856000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"13459588094@163.com","commits":1}]},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"software/Package-Git-问题总结-关联远程分支.md","localizedDate":"2024年10月27日","excerpt":"<p><strong>文章摘要：</strong> 关联远程分支推荐流程。</p>\\n","autoDesc":true}');export{g as comp,c as data};
