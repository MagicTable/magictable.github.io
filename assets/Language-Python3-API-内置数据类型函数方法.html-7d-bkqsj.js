import{_ as s,c as a,a as e,o as p}from"./app-wlfcSj72.js";const l={};function i(t,n){return p(),a("div",null,n[0]||(n[0]=[e(`<p><strong>文章摘要：</strong> 在编程中，数据类型是一个重要的概念，变量可以存储不同类型的数据，并且不同类型可以执行不同的操作，在其他编程中或者其他用途中会有不同的数据类型。</p><ul><li>本文章将讲解python内置数据类型和对应操作的函数或方法。</li></ul><div class="hint-container note"><p class="hint-container-title">注释</p><ul><li>本文所说的数据类型使用方法，本质上也属于python内置函数，都能在python文件内找到源代码。</li></ul></div><h2 id="文本类型" tabindex="-1"><a class="header-anchor" href="#文本类型"><span>文本类型</span></a></h2><p><strong>文本类型共同的内置方法</strong></p><ul><li>删除、查找（查询）、修改（替换）、提取、合并（拼接、连接）、拆分（切割）</li><li>其他操作（获取长度、重复输出、字符统计、字符转换、类型转换、比较、获取状态&lt;判断结果&gt;）</li></ul><h3 id="str-字符串" tabindex="-1"><a class="header-anchor" href="#str-字符串"><span>str（字符串）</span></a></h3><p><strong>介绍</strong></p><ul><li>字符串是一个容器，包含若干个字符并按照一定的顺序组织成一个整体。字符串支持索引操作。</li><li>字符串以“字符”为基本单位。</li></ul><h4 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># 使用单引号或双引号创建单行的字符串</span></span>
<span class="line">s <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span></span>
<span class="line">s <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用三引号创建多行的字符串</span></span>
<span class="line">s <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;hello </span>
<span class="line">world&#39;&#39;&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># del() 删除整个str字符串对象</span></span>
<span class="line"><span class="token keyword">del</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找-查询" tabindex="-1"><a class="header-anchor" href="#查找-查询"><span>查找（查询）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># center() 返回居中的字符串</span></span>
<span class="line">center<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># count() 返回指定值在字符串中出现的次数</span></span>
<span class="line">count<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># rfind() 在字符串中搜索指定的值，并返回它被找到的最后位置</span></span>
<span class="line">rfind<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># rindex() 在字符串中搜索指定的值，并返回它被找到的最后位置</span></span>
<span class="line">rindex<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改-替换" tabindex="-1"><a class="header-anchor" href="#修改-替换"><span>修改（替换）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># capitalize() 英文字符串中首字母转换为大写字母</span></span>
<span class="line">capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># casefold() 英文字符串中首字母转换为小写字母</span></span>
<span class="line">casefold<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># upper() 英文字符串中所有字母转换为大写字母</span></span>
<span class="line">upper<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># lower() 英文字符串中所有字母转换为小写字母</span></span>
<span class="line">lower<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># swapcase() 英文字符串中所有字母进行大小写反转</span></span>
<span class="line">swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># title() 英文字符串中每个单词的首字母转换为大写，其他为小写，以空格区分英文单词</span></span>
<span class="line">title<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># find() 在字符串中搜索指定的值并返回它被找到的位置</span></span>
<span class="line">find<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># format() 格式化字符串中的指定值</span></span>
<span class="line"><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># format_map() 格式化字符串中的指定值</span></span>
<span class="line">format_map<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># index() 在字符串中搜索指定的值并返回它被找到的位置</span></span>
<span class="line">index<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># join() 把可迭代对象的元素连接到字符串的末尾</span></span>
<span class="line">join<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ljust() 返回字符串的左对齐版本</span></span>
<span class="line">ljust<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># rjust() 返回字符串的右对齐版本</span></span>
<span class="line">rjust<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># lstrip() 返回字符串的左修剪版本</span></span>
<span class="line">lstrip<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># maketrans() 返回在转换中使用的转换表</span></span>
<span class="line">maketrans<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># partition() 返回元组，其中的字符串被分为三部分</span></span>
<span class="line">partition<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># replace() 返回字符串，其中指定的值被替换为指定的值</span></span>
<span class="line">replace<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># rpartition() 返回元组，其中字符串分为三部分</span></span>
<span class="line">rpartition<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># rsplit() 在指定的分隔符处拆分字符串，并返回列表</span></span>
<span class="line">rsplit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># rstrip() 返回字符串的右边修剪版本</span></span>
<span class="line">rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># split() 在指定的分隔符处拆分字符串，并返回列表</span></span>
<span class="line">split<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># splitlines() 在换行符处拆分字符串并返回列表</span></span>
<span class="line">splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># startswith() 如果以指定值开头的字符串，则返回\`true\`</span></span>
<span class="line">startswith<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># strip() 返回字符串的剪裁版本</span></span>
<span class="line">strip<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># translate() 返回被转换的字符串</span></span>
<span class="line">translate<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># zfill() 在字符串的开头填充指定数量的 0 值</span></span>
<span class="line">zfill<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># expandtabs() 设置字符串的\`tab\`尺寸</span></span>
<span class="line">expandtabs<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="提取" tabindex="-1"><a class="header-anchor" href="#提取"><span>提取</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="合并-拼接、连接" tabindex="-1"><a class="header-anchor" href="#合并-拼接、连接"><span>合并（拼接、连接）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="拆分-切割" tabindex="-1"><a class="header-anchor" href="#拆分-切割"><span>拆分（切割）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="获取长度" tabindex="-1"><a class="header-anchor" href="#获取长度"><span>获取长度</span></a></h4><h4 id="重复输出" tabindex="-1"><a class="header-anchor" href="#重复输出"><span>重复输出</span></a></h4><h4 id="字符统计" tabindex="-1"><a class="header-anchor" href="#字符统计"><span>字符统计</span></a></h4><h4 id="字符转换" tabindex="-1"><a class="header-anchor" href="#字符转换"><span>字符转换</span></a></h4><h4 id="格式转换-数据类型转换" tabindex="-1"><a class="header-anchor" href="#格式转换-数据类型转换"><span>格式转换（数据类型转换）</span></a></h4><h4 id="比较" tabindex="-1"><a class="header-anchor" href="#比较"><span>比较</span></a></h4><h4 id="获取状态-判断结果" tabindex="-1"><a class="header-anchor" href="#获取状态-判断结果"><span>获取状态（判断结果）</span></a></h4><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># encode() 返回字符串的编码版本</span></span>
<span class="line">encode<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># endswith() 如果字符串以指定值结尾，则返回\`true\`</span></span>
<span class="line">endswith<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isalnum() 如果字符串中的所有字符都是字母数字，则返回\`True\`</span></span>
<span class="line">isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isalpha() 如果字符串中的所有字符都在字母表中，则返回\`True\`</span></span>
<span class="line">isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isdecimal() 如果字符串中的所有字符都是小数，则返回\`True\`</span></span>
<span class="line">isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isdigit() 如果字符串中的所有字符都是数字，则返回\`True\`</span></span>
<span class="line">isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isidentifier() 如果字符串是标识符，则返回\`True\`</span></span>
<span class="line">isidentifier<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># islower() 如果字符串中的所有字符都是小写，则返回\`True\`</span></span>
<span class="line">islower<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isnumeric() 如果字符串中的所有字符都是数，则返回\`True\`</span></span>
<span class="line">isnumeric<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isprintable() 如果字符串中的所有字符都是可打印的，则返回\`True\`</span></span>
<span class="line">isprintable<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isspace() 如果字符串中的所有字符都是空白字符，则返回\`True\`</span></span>
<span class="line">isspace<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># istitle() 如果字符串遵循标题规则，则返回\`True\`</span></span>
<span class="line">istitle<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isupper() 如果字符串中的所有字符都是大写，则返回\`True\`</span></span>
<span class="line">isupper<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型"><span>数值类型</span></a></h2><h2 id="数值类型共同的内置方法" tabindex="-1"><a class="header-anchor" href="#数值类型共同的内置方法"><span><strong>数值类型共同的内置方法</strong></span></a></h2><h3 id="int-整数" tabindex="-1"><a class="header-anchor" href="#int-整数"><span>int（整数）</span></a></h3><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span><strong>介绍</strong></span></a></h2><h3 id="float-浮点数" tabindex="-1"><a class="header-anchor" href="#float-浮点数"><span>float（浮点数）</span></a></h3><h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1"><span><strong>介绍</strong></span></a></h2><h3 id="complex-复数" tabindex="-1"><a class="header-anchor" href="#complex-复数"><span>complex（复数）</span></a></h3><h2 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2"><span><strong>介绍</strong></span></a></h2><h2 id="序列类型" tabindex="-1"><a class="header-anchor" href="#序列类型"><span>序列类型</span></a></h2><p><strong>序列类型共同的内置方法</strong></p><ul><li>增加、删除、查找、修改、合并、转换为列表</li></ul><h3 id="list-列表" tabindex="-1"><a class="header-anchor" href="#list-列表"><span>list（列表）</span></a></h3><p>介绍：</p><ul><li>列表数据类型</li></ul><p><strong>创建</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>增加</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># append() 将x追加到列表末尾，等同于（s[len(s):len(s)]=[x]）,但不允许使用下标追加</span></span>
<span class="line">s<span class="token punctuation">.</span>append<span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># insert() 将x插入到下标i处，等同于（s[i:i] = [x]）</span></span>
<span class="line">s<span class="token punctuation">.</span>insert<span class="token punctuation">(</span>i<span class="token punctuation">,</span>x<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># del() 删除整个对象s</span></span>
<span class="line"><span class="token keyword">del</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># del s[i] 删除下标为i的元素</span></span>
<span class="line"><span class="token keyword">del</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># del s[i: j] 删除切片范围内的元素</span></span>
<span class="line"><span class="token keyword">del</span> s<span class="token punctuation">[</span>i<span class="token punctuation">:</span> j<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># del s[i: j: k] 删除切片范围内的元素，但列表依旧存在</span></span>
<span class="line"><span class="token keyword">del</span> s<span class="token punctuation">[</span>i<span class="token punctuation">:</span> j<span class="token punctuation">:</span> k<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># clear() 删除所有元素，但列表依旧存在</span></span>
<span class="line">s<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove() 删除列表s中的x元素，若有多个相同元素则只删除最左边第一个与x相同的元素</span></span>
<span class="line">s<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># pop() 提取下标是i的元素，并将该元素从列表s中删除。配合创建新变量使用</span></span>
<span class="line">s<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查找</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># index() x在s中首次出现项的索引号（索引号在i或之后且在j之前）</span></span>
<span class="line">s<span class="token punctuation">.</span>index<span class="token punctuation">(</span>x<span class="token punctuation">[</span> <span class="token punctuation">,</span>i<span class="token punctuation">[</span> <span class="token punctuation">,</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># s[i] = x 将下标为i的元素替换为x</span></span>
<span class="line">s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> x</span>
<span class="line"><span class="token comment"># s[i: j] = x 将切片范围内的元素替换为t</span></span>
<span class="line">s<span class="token punctuation">[</span>i<span class="token punctuation">:</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> x</span>
<span class="line"><span class="token comment"># s[i: j: k] = x 将切片范围内的元素替换为t的元素</span></span>
<span class="line">s<span class="token punctuation">[</span>i<span class="token punctuation">:</span> j<span class="token punctuation">:</span> k<span class="token punctuation">]</span> <span class="token operator">=</span> x</span>
<span class="line"></span>
<span class="line"><span class="token comment"># reverse() 将列表s中的元素进行反向排序，颠倒列表的顺序</span></span>
<span class="line">s<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># sort() 对列表进行排序</span></span>
<span class="line">sort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>合并</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># s* = n  把s的内容重复n次，等同于（list = list * n）</span></span>
<span class="line">s<span class="token operator">*</span> <span class="token operator">=</span> n</span>
<span class="line"></span>
<span class="line"><span class="token comment"># extend() 将列表元素（或任何可迭代的元素）添加到当前列表的末尾</span></span>
<span class="line"><span class="token comment"># 在列表s与t合并，等同于（s+=t）（s[len(s):len(s)]=t）</span></span>
<span class="line">s<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>t<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其他函数</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># list(s) 将其他序列类型转换成列表类型</span></span>
<span class="line"><span class="token builtin">list</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># copy() 返回列表的副本</span></span>
<span class="line">copy<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># count() 返回具有指定值的元素数量</span></span>
<span class="line">count<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tuple-元组" tabindex="-1"><a class="header-anchor" href="#tuple-元组"><span>tuple（元组）</span></a></h3><p>介绍：</p><ul><li>元组数据类型</li></ul><p><strong>创建</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>创建</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># 创建空元组，需要在括号内加入逗号来区分函数</span></span>
<span class="line">name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 元组中的元素支持多种数据类型</span></span>
<span class="line">name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> “aaa”<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span>b<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> “ccc”<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查找</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># 使用指定下标切片输出显示对应的元素。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>删除</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># del() 元组不能更改元素，但可以删除整个元组。</span></span>
<span class="line"><span class="token keyword">del</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>合并</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># 使用加号\`+\`进行合并元组。</span></span>
<span class="line">t3 <span class="token operator">=</span> t1 <span class="token operator">+</span> t2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其他函数</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># tuple() 将列表转化成元组类型</span></span>
<span class="line"><span class="token builtin">tuple</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># count() 返回元组中指定值出现的次数</span></span>
<span class="line">count<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># index() 在元组中搜索指定的值并返回它被找到的位置</span></span>
<span class="line">index<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="映射类型" tabindex="-1"><a class="header-anchor" href="#映射类型"><span>映射类型</span></a></h2><h3 id="dict-字典" tabindex="-1"><a class="header-anchor" href="#dict-字典"><span>dict（字典）</span></a></h3><p>介绍：字典数据类型</p><p><strong>创建</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>增加</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># D[k]=d 追加，通过赋值，给已创建的字典追加一个新的 k : d 的键值对</span></span>
<span class="line">D<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">=</span>d</span>
<span class="line"></span>
<span class="line"><span class="token comment"># setdefault() 返回指定键的值，如果该键不存在，则插入具有指定值的键</span></span>
<span class="line">D<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span>k<span class="token punctuation">[</span><span class="token punctuation">,</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># del() </span></span>
<span class="line"><span class="token comment"># 删除k键和对应的值</span></span>
<span class="line"><span class="token keyword">del</span><span class="token punctuation">(</span>D<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># pop() 删除拥有指定键的元素</span></span>
<span class="line"><span class="token comment"># 移除K键，并赋值给name变量</span></span>
<span class="line">name <span class="token operator">=</span> D<span class="token punctuation">.</span>pop<span class="token punctuation">(</span>k<span class="token punctuation">[</span><span class="token punctuation">,</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># popitem() 删除最后插入的键值对</span></span>
<span class="line"><span class="token comment"># 随机移除一个键值对，并赋值给name变量，并且类型自动变成元组类型</span></span>
<span class="line">name <span class="token operator">=</span> D<span class="token punctuation">.</span>popitem<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># clear() 删除字典中的所有元素</span></span>
<span class="line"><span class="token comment"># 清空字典中的全部键值对，但字典依旧存在</span></span>
<span class="line">D<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查找</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># D[k] 查找，通过键来输出值</span></span>
<span class="line">D<span class="token punctuation">[</span>k<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># get() 返回指定键的值</span></span>
<span class="line"><span class="token comment"># 通过键来输出值，若值不存在，则返回空值</span></span>
<span class="line">D<span class="token punctuation">.</span>get<span class="token punctuation">(</span>k<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># D[k]=d 修改，通过赋值，给一个已经存在的键一个新值</span></span>
<span class="line">D<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">=</span>d</span>
<span class="line"></span>
<span class="line"><span class="token comment"># update() 用指定的键值对字典进行更新</span></span>
<span class="line"><span class="token comment"># 使用other字典中的键值对，覆盖原来的，若没有，则新建</span></span>
<span class="line">D<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">[</span>other<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>遍历</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># items() 返回包含每个键值对的元组的列表</span></span>
<span class="line"><span class="token comment"># 遍历所有键值对，依次以元组类型返回键值对。建议配合for遍历循环使用</span></span>
<span class="line">D<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># key() 返回包含字典键的列表</span></span>
<span class="line"><span class="token comment"># 遍历所有键，依次返回键值对的键。建议配合for遍历循环使用</span></span>
<span class="line">D<span class="token punctuation">.</span>key<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># values() 返回字典中所有值的列表</span></span>
<span class="line"><span class="token comment"># 遍历所有值，依次返回键值对的值。建议配合for遍历循环使用</span></span>
<span class="line">D<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其他函数</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># copy() 返回字典的副本</span></span>
<span class="line">copy<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># fromkeys() 返回拥有指定键和值的字典</span></span>
<span class="line">fromkeys<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合类型" tabindex="-1"><a class="header-anchor" href="#集合类型"><span>集合类型</span></a></h2><h3 id="set-集合" tabindex="-1"><a class="header-anchor" href="#set-集合"><span>set（集合）</span></a></h3><p>介绍：集合数据类型</p><p><strong>创建</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># 使用花括号内以逗号分隔元素的方式</span></span>
<span class="line">set_name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sjoerd&#39;</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用集合推导式</span></span>
<span class="line">set_name <span class="token operator">=</span> <span class="token punctuation">{</span>c <span class="token keyword">for</span> c <span class="token keyword">in</span> <span class="token string">&#39;abracadabra&#39;</span> <span class="token keyword">if</span> c <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用类型构造器</span></span>
<span class="line">set_name <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;foobar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>增加</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># add() 向集合添加元素</span></span>
<span class="line">add<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># clear() 删除集合中的所有元素</span></span>
<span class="line">clear<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># pop() 从集合中删除一个元素</span></span>
<span class="line">pop<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># discard() 删除指定项目</span></span>
<span class="line">discard<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove() 删除指定元素</span></span>
<span class="line">remove<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># difference_update() 删除此集合中也包含在另一个指定集合中的项目</span></span>
<span class="line">difference_update<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># intersection_update() 删除此集合中不存在于其他指定集合中的项目</span></span>
<span class="line">intersection_update<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查找</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>修改</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>合并</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>其他函数</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># copy() 返回集合的副本</span></span>
<span class="line">copy<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># difference() 返回包含两个或更多集合之间差异的集合</span></span>
<span class="line">difference<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># intersection() 返回为两个其他集合的交集的集合</span></span>
<span class="line">intersection<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># isdisjoint() 返回两个集合是否有交集的集合</span></span>
<span class="line">isdisjoint<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># issubset() 返回另一个集合是否包含此集合</span></span>
<span class="line">issubset<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># issuperset() 返回此集合是否包含另一个集合</span></span>
<span class="line">issuperset<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># symmetric_difference() 返回具有两组集合的对称差集的集合</span></span>
<span class="line">symmetric_difference<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># symmetric_difference_update() 插入此集合和另一个集合的对称差集</span></span>
<span class="line">symmetric_difference_update<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># union() 返回包含集合并集的集合</span></span>
<span class="line">union<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># update() 用此集合和其他集合的并集来更新集合</span></span>
<span class="line">update<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="迭代器类型" tabindex="-1"><a class="header-anchor" href="#迭代器类型"><span>迭代器类型</span></a></h2><p>待完善</p><h2 id="二进制类型" tabindex="-1"><a class="header-anchor" href="#二进制类型"><span>二进制类型</span></a></h2><p>待完善</p><h2 id="上下文管理器类型" tabindex="-1"><a class="header-anchor" href="#上下文管理器类型"><span>上下文管理器类型</span></a></h2><p>待完善</p>`,114)]))}const o=s(l,[["render",i]]),d=JSON.parse('{"path":"/software/Language-Python3-API-%E5%86%85%E7%BD%AE%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95.html","title":"Language - Python 3 - API - 内置数据类型函数方法","lang":"zh-CN","frontmatter":{"title":"Language - Python 3 - API - 内置数据类型函数方法","author":"魔术桌","cover":"","category":["软件程序/程序语言"],"date":"2023-08-10T00:00:00.000Z","tag":["进度-已停滞","查询手册"],"description":"文章摘要： 在编程中，数据类型是一个重要的概念，变量可以存储不同类型的数据，并且不同类型可以执行不同的操作，在其他编程中或者其他用途中会有不同的数据类型。 本文章将讲解python内置数据类型和对应操作的函数或方法。 注释 本文所说的数据类型使用方法，本质上也属于python内置函数，都能在python文件内找到源代码。 文本类型 文本类型共同的内置方...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Language - Python 3 - API - 内置数据类型函数方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2025-11-16T09:17:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"],["meta",{"property":"og:url","content":"https://blog.magictable.ha.cn/software/Language-Python3-API-%E5%86%85%E7%BD%AE%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"魔术桌"}],["meta",{"property":"og:title","content":"Language - Python 3 - API - 内置数据类型函数方法"}],["meta",{"property":"og:description","content":"文章摘要： 在编程中，数据类型是一个重要的概念，变量可以存储不同类型的数据，并且不同类型可以执行不同的操作，在其他编程中或者其他用途中会有不同的数据类型。 本文章将讲解python内置数据类型和对应操作的函数或方法。 注释 本文所说的数据类型使用方法，本质上也属于python内置函数，都能在python文件内找到源代码。 文本类型 文本类型共同的内置方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-11-16T09:17:23.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"查询手册"}],["meta",{"property":"article:tag","content":"进度-已停滞"}],["meta",{"property":"article:published_time","content":"2023-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-11-16T09:17:23.000Z"}]]},"git":{"updatedTime":1763284643000,"contributors":[{"name":"MagicTable-RedmiNote12TPro-Android","username":"","email":"13459588094@163.com","commits":1},{"name":"MagicTable-HappinessHome-DebianLinux","username":"","email":"13459588094@163.com","commits":3}],"changelog":[{"hash":"443a7028bb64edb6b3d96b66e17ea9bc6a6c790a","time":1763284643000,"email":"13459588094@163.com","author":"MagicTable-HappinessHome-DebianLinux","message":"vault backup: 2025-11-16 17:17:23"},{"hash":"2f64e32c6bfa04fdb137fc5247de26e5603a0eb3","time":1759485417000,"email":"13459588094@163.com","author":"MagicTable-HappinessHome-DebianLinux","message":"vault backup: 2025-10-03 17:56:57"},{"hash":"ea490d819f6b9c38b6faf647221faa9808862172","time":1759413290000,"email":"13459588094@163.com","author":"MagicTable-HappinessHome-DebianLinux","message":"更新博客文章数据"},{"hash":"bd68b5c596d6a0543e6461d26edd64a5440f6020","time":1758421995000,"email":"13459588094@163.com","author":"MagicTable-RedmiNote12TPro-Android","message":"初始化仓库版本"}]},"autoDesc":true,"filePathRelative":"software/Language-Python3-API-内置数据类型函数方法.md","excerpt":"<p><strong>文章摘要：</strong> 在编程中，数据类型是一个重要的概念，变量可以存储不同类型的数据，并且不同类型可以执行不同的操作，在其他编程中或者其他用途中会有不同的数据类型。</p>\\n<ul>\\n<li>本文章将讲解python内置数据类型和对应操作的函数或方法。</li>\\n</ul>\\n"}');export{o as comp,d as data};
