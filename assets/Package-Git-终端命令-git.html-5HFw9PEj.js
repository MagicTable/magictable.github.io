import{_ as n,c as a,a as e,o as l}from"./app-BDRGpUI0.js";const i={};function t(p,s){return l(),a("div",null,s[0]||(s[0]=[e(`<p><strong>文章摘要：</strong> Git分布式版本控制系统工具软件的使用命令汇总。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>外部相关文章</p><ul><li>gitee官方提供的教程：<a href="https://gitee.com/all-about-git" target="_blank" rel="noopener noreferrer">https://gitee.com/all-about-git</a></li></ul><p>内部相关文章</p><ul><li></li></ul></div><div class="hint-container note"><p class="hint-container-title">注释</p><ul><li>全局配置表示这台计算机中的操作系统中的这个用户中的所有的Git仓库都会使用这个配置。</li><li>该文章参考了BiliBili上GeekHour的教学视频，视频连接：<a href="https://www.bilibili.com/video/BV1HM411377j?p=1" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1HM411377j?p=1</a></li><li>如果是多人协作使，不要对已经推送到远程的分支进行<code>rebase</code>操作。</li></ul></div><h2 id="git设置" tabindex="-1"><a class="header-anchor" href="#git设置"><span>Git设置</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>作用范围</strong>命令参数</p><ul><li><code>--local</code>：本地配置，对当前项目“当前本地仓库”生效。（默认参数）</li><li><code>--global</code>：全局配置，对当前用户“所有仓库”生效。</li><li><code>--system</code>：系统配置，对当前系统“所有用户和所有仓库”生效。</li></ul></div><h3 id="编辑配置文件" tabindex="-1"><a class="header-anchor" href="#编辑配置文件"><span>编辑配置文件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>--global<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="设置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#设置用户名和邮箱"><span>设置用户名和邮箱</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 若用户名存在空格则需要使用双引号包裹起来</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> user.name <span class="token string">&quot;【用户名】&quot;</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> user.email <span class="token string">&quot;【电子邮件】&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="永久保存用户名和密码" tabindex="-1"><a class="header-anchor" href="#永久保存用户名和密码"><span>永久保存用户名和密码</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 将保存用户名和密码，后续提交文件无需再输入密码</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> credential.helper store</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置控制git如何处理行结束符" tabindex="-1"><a class="header-anchor" href="#配置控制git如何处理行结束符"><span>配置控制Git如何处理行结束符</span></a></h3><div class="hint-container note"><p class="hint-container-title">注释</p><ul><li>CRLF（回车换行）是Windows系统中使用的换行符，LF（换行）是Unix和Linux系统中使用的换行符。</li><li>当你在跨平台的环境下使用Git时，Git会尝试根据你的系统设置来转换文件中的换行符。</li><li>推荐进行全局配置。</li></ul></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># \`core.autocrlf\`：配置控制Git如何处理行结束符。</span></span>
<span class="line"><span class="token comment"># - \`true\` 或 \`auto\`（在Windows系统上默认）: 提交时转换成LF，检出时转换成CRLF。</span></span>
<span class="line"><span class="token comment"># - \`false\`: 禁用自动转换。</span></span>
<span class="line"><span class="token comment"># - \`input\`（在Linux和macOS系统上默认）: 提交时转换为LF，但在检出时不进行转换。</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> core.autocrlf input  <span class="token comment"># Linux系统</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> core.autocrlf auto   <span class="token comment"># Windows系统</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># \`core.eol\`：配置在“检出”时Git应该使用哪种行结束符。</span></span>
<span class="line"><span class="token comment"># - \`lf\`: 使用LF作为行结束符。</span></span>
<span class="line"><span class="token comment"># - \`crlf\`: 使用CRLF作为行结束符。</span></span>
<span class="line"><span class="token comment"># - \`native\`: 使用操作系统的默认行结束符。</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> core.eol lf    <span class="token comment"># Linux系统</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> core.eol crlf  <span class="token comment"># Windows系统</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># \`core.safecrlf\`：配置检查在提交或检出时是否出现了意外的不安全行结束符转换。</span></span>
<span class="line"><span class="token comment"># - \`true\`: 拒绝提交包含混合行结束符的文件。</span></span>
<span class="line"><span class="token comment"># - \`false\`: 允许提交包含混合行结束符的文件。</span></span>
<span class="line"><span class="token comment"># - \`warn\`: 提交时警告混合行结束符的存在。</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> core.safecrlf warn</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询git配置" tabindex="-1"><a class="header-anchor" href="#查询git配置"><span>查询git配置</span></a></h3><p>查看Git的配置信息</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看全部配置信息</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token parameter variable">--list</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看用户名</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> user.name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看邮箱</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> user.email</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查 core.autocrlf 的当前设置</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token parameter variable">--get</span> core.autocrlf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查 core.eol 的当前设置</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token parameter variable">--get</span> core.eol</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查 core.safecrlf 的当前设置</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span><span class="token operator">&lt;</span>作用范围<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token parameter variable">--get</span> core.safecrlf</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库操作" tabindex="-1"><a class="header-anchor" href="#仓库操作"><span>仓库操作</span></a></h2><h3 id="创建-初始化-仓库" tabindex="-1"><a class="header-anchor" href="#创建-初始化-仓库"><span>创建(初始化)仓库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 将当前目录作为Git仓库进行初始化</span></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span class="token function">git</span> init <span class="token punctuation">[</span><span class="token operator">&lt;</span>仓库名<span class="token operator">&gt;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看仓库提交历史记录" tabindex="-1"><a class="header-anchor" href="#查看仓库提交历史记录"><span>查看仓库提交历史记录</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看仓库提交历史记录</span></span>
<span class="line"><span class="token function">git</span> log</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用\`--oneline\`参数来查看简洁的提交记录</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--oneline</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看仓库的状态" tabindex="-1"><a class="header-anchor" href="#查看仓库的状态"><span>查看仓库的状态</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 列出未提交的新的或修改的文件</span></span>
<span class="line"><span class="token function">git</span> status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跟踪-关联-远程仓库的操作" tabindex="-1"><a class="header-anchor" href="#跟踪-关联-远程仓库的操作"><span>跟踪(关联)远程仓库的操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查询</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token parameter variable">-v</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span> <span class="token string">&quot;&lt;远程仓库URL&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 断开</span></span>
<span class="line"><span class="token function">git</span> remote remove <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改 - 当前跟踪的远程仓库在本地的别名</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">rename</span> <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span> <span class="token string">&quot;&lt;新的远程仓库的别名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改 - 当前跟踪的远程仓库在本地的URL地址</span></span>
<span class="line"><span class="token function">git</span> remote set-url <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span> <span class="token string">&quot;&lt;新的RUL&gt;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="克隆-下载-远程仓库" tabindex="-1"><a class="header-anchor" href="#克隆-下载-远程仓库"><span>克隆(下载)远程仓库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 克隆/下载，将远程仓库的main分支“克隆”到本地仓库</span></span>
<span class="line"><span class="token comment"># 默认克隆远程仓库的主分支</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token string">&quot;&lt;远程仓库URL&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 克隆/下载，将远程仓库的指定分支“克隆”到本地仓库</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token parameter variable">-b</span> <span class="token string">&quot;&lt;分支名&gt;&quot;</span> <span class="token string">&quot;&lt;远程仓库URL&gt;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作"><span>分支操作</span></a></h2><h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支"><span>创建分支</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建新分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支"><span>删除分支</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 删除分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制删除分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改分支" tabindex="-1"><a class="header-anchor" href="#修改分支"><span>修改分支</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 修改分支名称</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token string">&quot;&lt;旧分支名&gt;&quot;</span> <span class="token string">&quot;&lt;新分支名&gt;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支"><span>查看分支</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看本地分支</span></span>
<span class="line"><span class="token function">git</span> branch</span>
<span class="line"><span class="token comment"># 查看远程分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-r</span></span>
<span class="line"><span class="token comment"># 查看所有分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支"><span>切换分支</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span class="token function">git</span> checkout <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支"><span>合并分支</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># \`-no-ff\`参数表示禁用Fast forward模式，合并后的历史有分支，能看到曾经做过合并</span></span>
<span class="line"><span class="token function">git</span> merge --no--ff <span class="token parameter variable">-m</span> <span class="token string">&quot;&lt;主分支名&gt;&quot;</span>/<span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># \`-ff\`参数表示使用Fast forward模式，合并后的历史会变成一条直线</span></span>
<span class="line"><span class="token function">git</span> merge <span class="token parameter variable">--ff</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;&lt;主分支名&gt;&quot;</span>/<span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 合并所有提交到一个提交</span></span>
<span class="line"><span class="token function">git</span> merge <span class="token parameter variable">--squash</span> <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 取消当前合并操作状态</span></span>
<span class="line"><span class="token function">git</span> merge <span class="token parameter variable">--abort</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取-远程分支-本地分支" tabindex="-1"><a class="header-anchor" href="#获取-远程分支-本地分支"><span>获取（远程分支-&gt;本地分支）</span></a></h3><div class="hint-container note"><p class="hint-container-title">注释</p><blockquote><ul><li>获取操作并没有真正将远程分支下载到本地。</li><li>只是能在本地看到或查询到远程分支。</li><li>需要再次执行拉取分支操作。</li><li>在本地会有如下显示：<code>remotes/&lt;远程仓库名&gt;/&lt;远程分支名&gt;</code></li></ul></blockquote></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 获取全部分支，将所有远程分支“下载”到本地仓库</span></span>
<span class="line"><span class="token function">git</span> fetch <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取指定分支，将指定远程分支“下载”到本地仓库</span></span>
<span class="line"><span class="token function">git</span> fetch <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span> <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跟踪-关联-远程分支" tabindex="-1"><a class="header-anchor" href="#跟踪-关联-远程分支"><span>跟踪(关联)远程分支</span></a></h3><blockquote><ul><li>当前分支正在跟踪哪条远程分支。</li></ul></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查询 - 当前分支正在跟踪哪条远程分支。</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-vv</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 跟踪远程分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-u</span> <span class="token string">&quot;&lt;添加的远程仓库名&gt;&quot;</span>/<span class="token string">&quot;&lt;远程分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 断开远程分支</span></span>
<span class="line"><span class="token function">git</span> branch --unset-upstream</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推送-本地分支-远程分支" tabindex="-1"><a class="header-anchor" href="#推送-本地分支-远程分支"><span>推送（本地分支-&gt;远程分支）</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 推送，将本地文件“更新”到远程仓库（遇到冲突将提交失败）</span></span>
<span class="line"><span class="token function">git</span> push <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span> <span class="token string">&quot;&lt;本地分支名&gt;&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&lt;远程分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制推送，将本地分支“覆盖”到远程仓库（遇到冲突将强制覆盖远程分支）</span></span>
<span class="line"><span class="token function">git</span> push <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span> <span class="token string">&quot;&lt;本地分支名&gt;&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&lt;远程分支名&gt;&quot;</span> --force-with-lease</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置上游分支，若远程分支不存在将创建分支</span></span>
<span class="line"><span class="token function">git</span> push <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span> <span class="token string">&quot;&lt;本地分支名&gt;&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&lt;远程分支名&gt;&quot;</span> --set-upstream</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取-远程分支-本地分支" tabindex="-1"><a class="header-anchor" href="#拉取-远程分支-本地分支"><span>拉取（远程分支-&gt;本地分支）</span></a></h3><div class="hint-container note"><p class="hint-container-title">注释</p><ul><li>拉取操作之前，需要确定能够在本地看到远程分支。</li><li>可以进行获取操作，来查看到远程分支。</li></ul></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 拉取，将远程仓库“更新”到本地仓库</span></span>
<span class="line"><span class="token function">git</span> pull <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span> <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制拉取，将远程仓库“覆盖”到本地仓库</span></span>
<span class="line"><span class="token function">git</span> pull <span class="token string">&quot;&lt;远程仓库名&gt;&quot;</span> <span class="token string">&quot;&lt;远程分支名&gt;&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&lt;本地分支名&gt;&quot;</span> <span class="token parameter variable">--force</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将远程分支“变基”到本地分支</span></span>
<span class="line"><span class="token function">git</span> pull <span class="token parameter variable">--rebase</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整理分支中的提交历史-停止变基状态" tabindex="-1"><a class="header-anchor" href="#整理分支中的提交历史-停止变基状态"><span>整理分支中的提交历史/停止变基状态</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># \`rebase\`操作可以把本地未push的分叉提交历史整理成直线，看起来更直观。</span></span>
<span class="line"><span class="token function">git</span> rebase <span class="token string">&quot;&lt;主分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止变基，取消当前变基状态。</span></span>
<span class="line"><span class="token function">git</span> rebase <span class="token parameter variable">--abort</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h2><h3 id="新建标签" tabindex="-1"><a class="header-anchor" href="#新建标签"><span>新建标签</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 新建标签在当前版本中</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token string">&quot;&lt;标签名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 新建标签在指定版本中</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token string">&quot;&lt;标签名&gt;&quot;</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除标签" tabindex="-1"><a class="header-anchor" href="#删除标签"><span>删除标签</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 删除本地tag</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token string">&quot;&lt;标签名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除远程tag</span></span>
<span class="line"><span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看标签" tabindex="-1"><a class="header-anchor" href="#查看标签"><span>查看标签</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 列出所有标签</span></span>
<span class="line"><span class="token function">git</span> tag</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看tag信息</span></span>
<span class="line"><span class="token function">git</span> show <span class="token string">&quot;&lt;标签名&gt;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看信息" tabindex="-1"><a class="header-anchor" href="#查看信息"><span>查看信息</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 显示有变更的文件</span></span>
<span class="line"><span class="token function">git</span> status</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示当前分支的版本历史</span></span>
<span class="line"><span class="token function">git</span> log</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--stat</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">-S</span> <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--grep</span> feature</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"><span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示过去5次提交</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--oneline</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span class="token function">git</span> shortlog <span class="token parameter variable">-sn</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span> HEAD</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示两次提交之间的差异</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示今天你写了多少行代码</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--shortstat</span> <span class="token string">&quot;@{0 day ago}&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span class="token function">git</span> reflog</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作"><span>文件操作</span></a></h2><h3 id="提交文件到暂存区-改为跟踪状态" tabindex="-1"><a class="header-anchor" href="#提交文件到暂存区-改为跟踪状态"><span>提交文件到暂存区/改为跟踪状态</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 添加当前路径下的所有修改过的文件到暂存区</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加指定文件到暂存区</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加指定目录到暂存区，包含子目录</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从暂存区移除文件-撤销文件操作" tabindex="-1"><a class="header-anchor" href="#从暂存区移除文件-撤销文件操作"><span>从暂存区移除文件/撤销文件操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> reset <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="修改为未跟踪状态-移除跟踪文件" tabindex="-1"><a class="header-anchor" href="#修改为未跟踪状态-移除跟踪文件"><span>修改为未跟踪状态/移除跟踪文件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># \`-r\`：递归删除文件夹和文件。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除“缓存区”和“工作区”中的文件</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除“缓存区”，保留“工作区”中的文件</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交"><span>代码提交</span></a></h2><h3 id="暂存区文件提交到本地仓库" tabindex="-1"><a class="header-anchor" href="#暂存区文件提交到本地仓库"><span>暂存区文件提交到本地仓库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 提交所有缓存区的文件到本地仓库</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;提交消息&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 提交所有已修改的文件到本地仓库</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;提交消息&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制"><span>版本控制</span></a></h2><h3 id="查看版本-文件差异" tabindex="-1"><a class="header-anchor" href="#查看版本-文件差异"><span>查看版本/文件差异</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看工作区、暂存区、本地仓库之间的差异</span></span>
<span class="line"><span class="token comment"># 默认比较“工作区”和“暂存区”之间的差异内容，显示发生更换的文件以及更改的详细信息</span></span>
<span class="line"><span class="token comment"># 查看未暂存的文件更新了哪些部分</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看“工作区”和“本地仓库”之间的差异</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span> HEAD</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看“暂存区”和“本地仓库”之间的差异</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看两个提交之间的差异</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>分支名-id<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>分支名-id<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回滚历史版本" tabindex="-1"><a class="header-anchor" href="#回滚历史版本"><span>回滚历史版本</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># \`--hard\`参数，“丢弃”工作区和暂存区的所有修改内容</span></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># \`--soft\`参数，“保留”工作区和暂存区的所有修改内容</span></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--soft</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># \`--mixed\`参数，“保留”工作区“丢弃”暂存区的修改内容。</span></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--mixed</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储-存档" tabindex="-1"><a class="header-anchor" href="#存储-存档"><span>存储/存档</span></a></h3><blockquote><p><code>stash</code>操作可以把当前工作现场“储藏”起来，等以后回复现场后继续工作。</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># save参数表示存储的信息，可以不写</span></span>
<span class="line"><span class="token function">git</span> stash <span class="token punctuation">[</span>save<span class="token punctuation">]</span> <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># \`-u\`参数表示把所有未跟踪的文件也一并存储</span></span>
<span class="line"><span class="token function">git</span> stash <span class="token parameter variable">-u</span> <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># \`-a\`参数表示把所有未跟踪的文件和忽略的文件一并存储</span></span>
<span class="line"><span class="token function">git</span> stash <span class="token parameter variable">-a</span> <span class="token string">&quot;&lt;分支名&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看所有stash</span></span>
<span class="line"><span class="token function">git</span> stash list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复最近一次stash</span></span>
<span class="line"><span class="token function">git</span> stash pop</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复指定的stash</span></span>
<span class="line"><span class="token comment"># stash@{2}表示第三个stash</span></span>
<span class="line"><span class="token comment"># stash@{0}表示最近的stash</span></span>
<span class="line"><span class="token function">git</span> stash pop stash@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重新接受最近一次stash</span></span>
<span class="line"><span class="token function">git</span> stash apply</span>
<span class="line"></span>
<span class="line"><span class="token comment"># \`pop\`和\`apply\`的区别是，\`pop\`会把\`stash\`内容删除，而\`apply\`不会。可以使用\`git stash drop\`来删除\`stash\`。</span></span>
<span class="line"><span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有stash</span></span>
<span class="line"><span class="token function">git</span> stash <span class="token function">clear</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><h3 id="帮助" tabindex="-1"><a class="header-anchor" href="#帮助"><span>帮助</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 全部帮助</span></span>
<span class="line"><span class="token function">git</span> <span class="token builtin class-name">help</span></span>
<span class="line"><span class="token comment"># 查看特定命令的帮助</span></span>
<span class="line"><span class="token function">git</span> <span class="token operator">&lt;</span>命令名<span class="token operator">&gt;</span> <span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成可供发布的压缩包" tabindex="-1"><a class="header-anchor" href="#生成可供发布的压缩包"><span>生成可供发布的压缩包</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 生成一个可供发布的压缩包</span></span>
<span class="line"><span class="token function">git</span> archive</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,86)]))}const o=n(i,[["render",t]]),r=JSON.parse('{"path":"/software/Package-Git-%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4-git.html","title":"Package - Git - 终端命令 - git","lang":"zh-CN","frontmatter":{"title":"Package - Git - 终端命令 - git","author":"魔术桌","cover":null,"category":["软件程序/软件包"],"date":"2023-08-12T00:00:00.000Z","tag":["进度-已完成","查询手册"],"description":"文章摘要： Git分布式版本控制系统工具软件的使用命令汇总。 相关信息 外部相关文章 gitee官方提供的教程：https://gitee.com/all-about-git 内部相关文章 注释 全局配置表示这台计算机中的操作系统中的这个用户中的所有的Git仓库都会使用这个配置。 该文章参考了BiliBili上GeekHour的教学视频，视频连接：ht...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Package - Git - 终端命令 - git\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-12T00:00:00.000Z\\",\\"dateModified\\":\\"2025-06-14T11:32:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"],["meta",{"property":"og:url","content":"https://blog.magictable.ha.cn/software/Package-Git-%E7%BB%88%E7%AB%AF%E5%91%BD%E4%BB%A4-git.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识仓库"}],["meta",{"property":"og:title","content":"Package - Git - 终端命令 - git"}],["meta",{"property":"og:description","content":"文章摘要： Git分布式版本控制系统工具软件的使用命令汇总。 相关信息 外部相关文章 gitee官方提供的教程：https://gitee.com/all-about-git 内部相关文章 注释 全局配置表示这台计算机中的操作系统中的这个用户中的所有的Git仓库都会使用这个配置。 该文章参考了BiliBili上GeekHour的教学视频，视频连接：ht..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-14T11:32:46.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"查询手册"}],["meta",{"property":"article:tag","content":"进度-已完成"}],["meta",{"property":"article:published_time","content":"2023-08-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-14T11:32:46.000Z"}]]},"git":{"updatedTime":1749900766000,"contributors":[{"name":"MagicTable","username":"","email":"13459588094@163.com","commits":1}],"changelog":[{"hash":"9f294c9a014a76e309c75949ae8a8cdc22b54f10","time":1749900766000,"email":"13459588094@163.com","author":"MagicTable","message":"内容更新"}]},"autoDesc":true,"filePathRelative":"software/Package-Git-终端命令-git.md","excerpt":"<p><strong>文章摘要：</strong> Git分布式版本控制系统工具软件的使用命令汇总。</p>\\n"}');export{o as comp,r as data};
