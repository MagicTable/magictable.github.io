import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as s,b as e,d as t,e as l,o as h}from"./app-C-jtbkLB.js";const p={};function r(k,i){return h(),n("div",null,[i[0]||(i[0]=s("p",null,[s("strong",null,"文章摘要："),l(" Python的logging库是一个强大的日志记录工具，它可以帮助你记录应用程序的日志信息，以便于调试、监控和记录应用程序的运行情况。")],-1)),e(" more "),i[1]||(i[1]=t(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><ul><li>Python的logging库是一个强大的日志记录工具，它可以帮助你记录应用程序的日志信息，以便于调试、监控和记录应用程序的运行情况。</li><li>logging库提供了多种日志处理器，如控制台处理器、文件处理器等，可以根据需要选择使用。</li><li>使用logging库可以方便地设置日志级别、格式化日志消息、处理日志异常等。</li></ul><p>基本概念</p><ul><li>Logger：日志记录器，提供应用程序可以直接使用的接口。</li><li>Handler：处理器，将logger创建的日志记录发送到合适的目的地。</li><li>Formatter：格式化器，指定日志显示的格式。</li><li>Level：日志级别，定义了日志的严重程度，常见的日志级别有：DEBUG（调试）、INFO（信息）、WARNING（警告）、ERROR（错误）、CRITICAL（关键）。</li></ul><h2 id="实用方案" tabindex="-1"><a class="header-anchor" href="#实用方案"><span>实用方案</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置基础日志</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">logger.logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">basicConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> logging</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> test_log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">logger_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> log_file_path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 创建一个logger，日志记录器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    logger </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">getLogger</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(logger_name)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    logger.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">setLever</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">DEBUG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 创建一个handler，格式化器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    fh </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> loggging.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">FileHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(log_file_path)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    fh.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">setLevel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">DEBUG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    formatter </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">Formatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">        datefmt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;%Y-%m-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %H:%M:%S&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">        fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%(filename)s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    )</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    fh.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">setFormatter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(formatter)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 给logger（日志记录器）添加handler（格式化器）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    logger.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">addHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(fh)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> logger</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7))])}const o=a(p,[["render",r]]),A=JSON.parse('{"path":"/software/Language-Python3-API-logging.html","title":"Language - Python 3 - API - logging","lang":"zh-CN","frontmatter":{"title":"Language - Python 3 - API - logging","author":"魔术桌","cover":"","category":["软件程序/语言"],"date":"2023-08-10T00:00:00.000Z","tag":["进度-已停滞","查询手册"],"description":"文章摘要： Python的logging库是一个强大的日志记录工具，它可以帮助你记录应用程序的日志信息，以便于调试、监控和记录应用程序的运行情况。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/Language-Python3-API-logging.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Language - Python 3 - API - logging"}],["meta",{"property":"og:description","content":"文章摘要： Python的logging库是一个强大的日志记录工具，它可以帮助你记录应用程序的日志信息，以便于调试、监控和记录应用程序的运行情况。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T15:30:56.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-已停滞"}],["meta",{"property":"article:tag","content":"查询手册"}],["meta",{"property":"article:published_time","content":"2023-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T15:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Language - Python 3 - API - logging\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T15:30:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"git":{"createdTime":1742743856000,"updatedTime":1742743856000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"13459588094@163.com","commits":1}]},"readingTime":{"minutes":1.29,"words":387},"filePathRelative":"software/Language-Python3-API-logging.md","localizedDate":"2023年8月10日","excerpt":"<p><strong>文章摘要：</strong> Python的logging库是一个强大的日志记录工具，它可以帮助你记录应用程序的日志信息，以便于调试、监控和记录应用程序的运行情况。</p>\\n","autoDesc":true}');export{o as comp,A as data};
