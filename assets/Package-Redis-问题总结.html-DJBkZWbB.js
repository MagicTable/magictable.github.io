import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,b as i,d as r,e as n,o}from"./app-C-jtbkLB.js";const h={};function p(d,e){return o(),s("div",null,[e[0]||(e[0]=a("p",null,[a("strong",null,"文章摘要："),n(" 摘要内容。")],-1)),i(" more "),e[1]||(e[1]=r('<h2 id="热点数据的缓存" tabindex="-1"><a class="header-anchor" href="#热点数据的缓存"><span>热点数据的缓存</span></a></h2><h2 id="限时业务的运用" tabindex="-1"><a class="header-anchor" href="#限时业务的运用"><span>限时业务的运用</span></a></h2><h2 id="计数器相关问题" tabindex="-1"><a class="header-anchor" href="#计数器相关问题"><span>计数器相关问题</span></a></h2><h2 id="排行榜相关问题" tabindex="-1"><a class="header-anchor" href="#排行榜相关问题"><span>排行榜相关问题</span></a></h2><h2 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁"><span>分布式锁</span></a></h2><h2 id="延时操作" tabindex="-1"><a class="header-anchor" href="#延时操作"><span>延时操作</span></a></h2><h2 id="分页、模糊搜索" tabindex="-1"><a class="header-anchor" href="#分页、模糊搜索"><span>分页、模糊搜索</span></a></h2><p>redis的set集合中提供了一个zrangebylex方法，语法如下：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ZRANGEBYLEX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> min</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [LIMIT </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">offset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> count]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><ul><li>通过ZRANGEBYLEX zset - + LIMIT 0 10 可以进行分页数据查询，其中- +表示获取全部数据</li></ul></blockquote><h2 id="点赞、好友等相互关系的存储" tabindex="-1"><a class="header-anchor" href="#点赞、好友等相互关系的存储"><span>点赞、好友等相互关系的存储</span></a></h2><h2 id="如何理解redis缓存的雪崩、穿透、击穿问题" tabindex="-1"><a class="header-anchor" href="#如何理解redis缓存的雪崩、穿透、击穿问题"><span>如何理解Redis缓存的雪崩、穿透、击穿问题</span></a></h2><p><strong>雪崩</strong></p><blockquote><p>定义</p><ul><li>redis缓存中大量的key同时失效，此时又刚好有大量的请求打进来，直接打到数据库层，造成数据库阻塞甚至宕机。</li></ul><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2></blockquote><p><strong>穿透</strong></p><blockquote><p>定义</p><ul><li>redis缓存中大量的key同时失效，此时又刚好有大量的请求打进来，直接打到数据库层，造成数据库阻塞甚至宕机。</li></ul><h2 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1"><span>解决方案</span></a></h2></blockquote><p><strong>击穿</strong></p><blockquote><p>定义</p><ul><li>redis缓存中大量的key同时失效，此时又刚好有大量的请求打进来，直接打到数据库层，造成数据库阻塞甚至宕机。</li></ul><h2 id="解决方案-2" tabindex="-1"><a class="header-anchor" href="#解决方案-2"><span>解决方案</span></a></h2></blockquote>',18))])}const m=t(h,[["render",p]]),g=JSON.parse('{"path":"/software/Package-Redis-%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.html","title":"Package - Redis - 问题总结","lang":"zh-CN","frontmatter":{"title":"Package - Redis - 问题总结","author":"魔术桌","cover":"","category":["软件程序/软件包"],"date":"2024-09-06T00:00:00.000Z","tag":["进度-待完善","问题总结"],"description":"文章摘要： 摘要内容。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/Package-Redis-%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Package - Redis - 问题总结"}],["meta",{"property":"og:description","content":"文章摘要： 摘要内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T15:30:56.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-待完善"}],["meta",{"property":"article:tag","content":"问题总结"}],["meta",{"property":"article:published_time","content":"2024-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T15:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Package - Redis - 问题总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-06T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T15:30:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"git":{"createdTime":1742743856000,"updatedTime":1742743856000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"13459588094@163.com","commits":1}]},"readingTime":{"minutes":1.09,"words":326},"filePathRelative":"software/Package-Redis-问题总结.md","localizedDate":"2024年9月6日","excerpt":"<p><strong>文章摘要：</strong> 摘要内容。</p>\\n","autoDesc":true}');export{m as comp,g as data};
