import{_ as s,c as a,a as e,o as l}from"./app-wlfcSj72.js";const p={};function i(t,n){return l(),a("div",null,n[0]||(n[0]=[e(`<p><strong>文章摘要：</strong> 使用Hexo框架并部署到Github平台的个人博客项目。</p><ul><li>针对 Debian Linux 系统的环境。</li></ul><div class="hint-container note"><p class="hint-container-title">注释</p><ul><li>博客中使用的图片使用vscode编辑器中的<code>Excalidraw</code>插件绘制，能够实现一个文件随时修改图像和展示结果，实现无需导出图片操作。</li><li>该博客是静态博客，因此没有后台管理系统或登录功能，没有涉及数据库操作等内容。</li></ul></div><h2 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介"><span>项目简介</span></a></h2><ul><li>使用Hexo框架并部署到Github平台的个人博客项目。</li></ul><h2 id="项目部署流程" tabindex="-1"><a class="header-anchor" href="#项目部署流程"><span>项目部署流程</span></a></h2><h3 id="安装项目所需软件" tabindex="-1"><a class="header-anchor" href="#安装项目所需软件"><span>安装项目所需软件</span></a></h3><ul><li>若你的计算机中已经安装，则自行跳过该步骤。</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 安装Git</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装Node.js</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nodejs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装npm包管理工具</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">npm</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通过Node.js的npm包管理工具安装Hexo框架</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> hexo-cli</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化项目的本地文件" tabindex="-1"><a class="header-anchor" href="#初始化项目的本地文件"><span>初始化项目的本地文件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 手动选择或创建存放项目的目录</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token string">&quot;项目目录名称&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换到项目的目录下</span></span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token string">&quot;项目目录&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化项目</span></span>
<span class="line"><span class="token comment"># 将会在当前目录中创建一个新的目录结构</span></span>
<span class="line"><span class="token comment"># 包含项目所需的文件和文件夹</span></span>
<span class="line">hexo init</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装依赖项</span></span>
<span class="line"><span class="token comment"># 将会在当前目录中继续下载一些文件</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装arknights主题" tabindex="-1"><a class="header-anchor" href="#安装arknights主题"><span>安装Arknights主题</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 切换到项目的目录下</span></span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>路径<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>项目目录名称<span class="token operator">&gt;</span>/themes</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通过Git下载Hexo博客框架的Arknights主题文件</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/Yue-plus/hexo-theme-arknights.git themes/arknights</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装Arknights主题所需的依赖项</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> hexo-server hexo-browsersync hexo-renderer-pug <span class="token parameter variable">--save</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通过hexo命令来上传文章到github平台的插件</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> hexo-deployer-git <span class="token parameter variable">--save</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改hexo框架的配置文件" tabindex="-1"><a class="header-anchor" href="#修改hexo框架的配置文件"><span>修改Hexo框架的配置文件</span></a></h3><p>修改Hexo配置文件</p><blockquote><ul><li>修改Hexo博客框架中的“_config.yml”文件。</li><li>修改内容如下：</li></ul></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code class="language-yaml"><span class="line"><span class="token comment"># Hexo博客框架配置文件</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 网站 ####</span></span>
<span class="line"><span class="token comment"># 网站标题</span></span>
<span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> 魔术桌的个博客</span>
<span class="line"><span class="token comment"># 网站副标题</span></span>
<span class="line"><span class="token key atrule">subtitle</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token comment"># 网站描述</span></span>
<span class="line"><span class="token key atrule">description</span><span class="token punctuation">:</span> 「因为所以科学道理，原来如此皆有前提」</span>
<span class="line"><span class="token comment"># 网站的关键词，支持多个关键词</span></span>
<span class="line"><span class="token key atrule">keywords</span><span class="token punctuation">:</span> 机器人、人工智能、机器学习、深度学习、操作系统、编程语言</span>
<span class="line"><span class="token comment"># 我的名字</span></span>
<span class="line"><span class="token key atrule">author</span><span class="token punctuation">:</span> 魔术桌</span>
<span class="line"><span class="token comment"># 网站使用的语言</span></span>
<span class="line"><span class="token key atrule">language</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>cn</span>
<span class="line"><span class="token comment"># 网站时区</span></span>
<span class="line"><span class="token key atrule">timezone</span><span class="token punctuation">:</span> Asia/Shanghai</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 网址 ####</span></span>
<span class="line"><span class="token comment"># 设置我的网址url</span></span>
<span class="line"><span class="token comment"># 网址, 必须以 http:// 或 https:// 开头</span></span>
<span class="line"><span class="token comment"># 例如，如果您使用GitHub页面，请将url设置为&#39;https://username.github.io/project&#39;</span></span>
<span class="line"><span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//magictable.github.io</span>
<span class="line"><span class="token comment"># 网站根目录</span></span>
<span class="line"><span class="token key atrule">root</span><span class="token punctuation">:</span> </span>
<span class="line"><span class="token comment"># 文章的 永久链接 格式</span></span>
<span class="line"><span class="token key atrule">permalink</span><span class="token punctuation">:</span> title/<span class="token punctuation">:</span>title/</span>
<span class="line"><span class="token comment"># 永久链接中各部分的默认值</span></span>
<span class="line"><span class="token key atrule">permalink_defaults</span><span class="token punctuation">:</span> </span>
<span class="line"><span class="token comment"># 改写 permalink 的值来美化 URL</span></span>
<span class="line"><span class="token key atrule">pretty_urls</span><span class="token punctuation">:</span> </span>
<span class="line">  <span class="token key atrule">trailing_index</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否在永久链接中保留尾部的 index.html，设置为 false 时去除</span></span>
<span class="line">  <span class="token key atrule">trailing_html</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment"># 是否在永久链接中保留尾部的 .html, 设置为 false 时去除 (对尾部的 index.html无效)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 目录 ####</span></span>
<span class="line"><span class="token comment"># 资源文件夹</span></span>
<span class="line"><span class="token key atrule">source_dir</span><span class="token punctuation">:</span> source</span>
<span class="line"><span class="token comment"># 公共文件夹</span></span>
<span class="line"><span class="token key atrule">public_dir</span><span class="token punctuation">:</span> public</span>
<span class="line"><span class="token comment"># 标签文件夹</span></span>
<span class="line"><span class="token key atrule">tag_dir</span><span class="token punctuation">:</span> tags</span>
<span class="line"><span class="token comment"># 归档文件夹</span></span>
<span class="line"><span class="token key atrule">archive_dir</span><span class="token punctuation">:</span> archives</span>
<span class="line"><span class="token comment"># 分类文件夹</span></span>
<span class="line"><span class="token key atrule">category_dir</span><span class="token punctuation">:</span> categories</span>
<span class="line"><span class="token comment"># 代码文件夹，位于资源文件夹下的子目录</span></span>
<span class="line"><span class="token key atrule">code_dir</span><span class="token punctuation">:</span> downloads/code</span>
<span class="line"><span class="token comment"># 国际化（i18n）文件夹</span></span>
<span class="line"><span class="token key atrule">i18n_dir</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>lang</span>
<span class="line"><span class="token comment"># 跳过指定文件的渲染。匹配到的文件将会被不做改动地复制到 public 目录中。您可使用 glob 表达式来匹配路径。</span></span>
<span class="line"><span class="token key atrule">skip_render</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 文章 ####</span></span>
<span class="line"><span class="token comment"># 新文章的文件名称</span></span>
<span class="line"><span class="token key atrule">new_post_name</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>title.md</span>
<span class="line"><span class="token comment"># 预设布局</span></span>
<span class="line"><span class="token key atrule">default_layout</span><span class="token punctuation">:</span> post</span>
<span class="line"><span class="token comment"># 把标题转换为标题框</span></span>
<span class="line"><span class="token key atrule">titlecase</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token comment"># 在新标签中打开链接</span></span>
<span class="line"><span class="token key atrule">external_link</span><span class="token punctuation">:</span> </span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 在新标签中打开链接</span></span>
<span class="line">  <span class="token key atrule">field</span><span class="token punctuation">:</span> site  <span class="token comment"># 对整个网站（site）生效或仅对文章（post）生效</span></span>
<span class="line">  <span class="token key atrule">exclude</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># 需要排除的域名，主域名和子域名如 www 需分别配置</span></span>
<span class="line"><span class="token comment"># 把文件名称转换为 (1) 小写或 (2) 大写，默认0不变</span></span>
<span class="line"><span class="token key atrule">filename_case</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line"><span class="token comment"># 显示草稿</span></span>
<span class="line"><span class="token key atrule">render_drafts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token comment"># 启用 资源文件夹</span></span>
<span class="line"><span class="token key atrule">post_asset_folder</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token comment"># 把链接改为与根目录的相对位址</span></span>
<span class="line"><span class="token key atrule">relative_link</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token comment"># 显示未来的文章</span></span>
<span class="line"><span class="token key atrule">future</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token comment"># 代码块的设置</span></span>
<span class="line"><span class="token key atrule">syntax_highlighter</span><span class="token punctuation">:</span> highlight.js</span>
<span class="line"><span class="token key atrule">highlight</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">auto_detect</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token key atrule">line_number</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">line_threshold</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token key atrule">tab_replace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="line">  <span class="token key atrule">exclude_languages</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> example</span>
<span class="line">  <span class="token key atrule">wrap</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">hljs</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token key atrule">prismjs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">preprocess</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">line_number</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">line_threshold</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token key atrule">tab_replace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 首页设置 ####</span></span>
<span class="line"><span class="token key atrule">index_generator</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>               <span class="token comment"># 博客索引页的根路径。(默认值为&#39;&#39;)</span></span>
<span class="line">  <span class="token key atrule">per_page</span><span class="token punctuation">:</span> <span class="token number">20</span>           <span class="token comment"># 每页显示的帖子。 (0 = 禁用分页)</span></span>
<span class="line">  <span class="token key atrule">order_by</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>date        <span class="token comment"># 文章顺序。(默认情况下按日期降序排列)</span></span>
<span class="line">  <span class="token key atrule">pagination_dir</span><span class="token punctuation">:</span> page   <span class="token comment"># URL格式</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 分类和标签 ####</span></span>
<span class="line"><span class="token comment"># 默认分类</span></span>
<span class="line"><span class="token key atrule">default_category</span><span class="token punctuation">:</span> uncategorized</span>
<span class="line"><span class="token comment"># 分类别名</span></span>
<span class="line"><span class="token key atrule">category_map</span><span class="token punctuation">:</span> </span>
<span class="line"><span class="token comment"># 标签别名</span></span>
<span class="line"><span class="token key atrule">tag_map</span><span class="token punctuation">:</span> </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 日期 / 时间格式 ####</span></span>
<span class="line"><span class="token comment"># 日期格式</span></span>
<span class="line"><span class="token key atrule">date_format</span><span class="token punctuation">:</span> YYYY<span class="token punctuation">-</span>MM<span class="token punctuation">-</span>DD</span>
<span class="line"><span class="token comment"># 时间格式</span></span>
<span class="line"><span class="token key atrule">time_format</span><span class="token punctuation">:</span> HH<span class="token punctuation">:</span>mm<span class="token punctuation">:</span>ss</span>
<span class="line"><span class="token comment"># 当 Front Matter 中没有指定 updated 时 updated 的取值，&#39;mtime&#39;时间, &#39;date&#39;日期, &#39;empty&#39;空</span></span>
<span class="line"><span class="token key atrule">updated_option</span><span class="token punctuation">:</span> mtime</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 包括或不包括目录和文件 ####</span></span>
<span class="line"><span class="token comment"># 包含隐藏文件（包括名称以下划线开头的文件/文件夹，* 除外）</span></span>
<span class="line"><span class="token key atrule">include</span><span class="token punctuation">:</span> </span>
<span class="line"><span class="token comment"># 排除文件或文件夹</span></span>
<span class="line"><span class="token key atrule">exclude</span><span class="token punctuation">:</span> </span>
<span class="line"><span class="token comment"># 忽略文件/文件夹</span></span>
<span class="line"><span class="token key atrule">ignore</span><span class="token punctuation">:</span> </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 主题 ####</span></span>
<span class="line"><span class="token comment">## Plugins（插件）: https://hexo.io/plugins/</span></span>
<span class="line"><span class="token comment">## Themes（主题）: https://hexo.io/themes/</span></span>
<span class="line"><span class="token comment"># 当前主题名称。 值为false时禁用主题</span></span>
<span class="line"><span class="token key atrule">theme</span><span class="token punctuation">:</span> arknights<span class="token punctuation">-</span>1.19.0</span>
<span class="line"><span class="token comment"># 主题的配置文件。 在这里放置的配置会覆盖主题目录下的 _config.yml 中的配置</span></span>
<span class="line"><span class="token key atrule">theme_config</span><span class="token punctuation">:</span> ./themes/arknights<span class="token punctuation">-</span>1.19.0/_config.yml</span>
<span class="line"><span class="token comment"># Meta generator 标签。 值为 false 时 Hexo 不会在头部插入该标签</span></span>
<span class="line"><span class="token key atrule">meta_generator</span><span class="token punctuation">:</span> </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#### 部署 ####</span></span>
<span class="line"><span class="token key atrule">deploy</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">type</span><span class="token punctuation">:</span> git</span>
<span class="line">  <span class="token key atrule">repo</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/MagicTable/magictable.github.io.git</span>
<span class="line">  <span class="token key atrule">branch</span><span class="token punctuation">:</span> main       <span class="token comment"># 分支名称</span></span>
<span class="line">  <span class="token key atrule">message</span><span class="token punctuation">:</span> 更新文章   <span class="token comment"># 自定义提交信息</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改arknights主题的配置文件" tabindex="-1"><a class="header-anchor" href="#修改arknights主题的配置文件"><span>修改Arknights主题的配置文件</span></a></h3><blockquote><ul><li>目录在：<code>./themes/&lt;主题&gt;/_config.yml</code></li><li>修改文件为如下内容，部分配置信息自行修改。</li></ul></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code class="language-yaml"><span class="line"><span class="token comment"># 标签页图标</span></span>
<span class="line"><span class="token key atrule">favicon</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;image/x-icon&quot;</span></span>
<span class="line">  <span class="token key atrule">href</span><span class="token punctuation">:</span> <span class="token string">&quot;/favicon.ico&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># canvas 动态背景</span></span>
<span class="line"><span class="token key atrule">canvas_dust</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 默认颜色模式 dark / dark-only / light / light-only / auto</span></span>
<span class="line"><span class="token comment"># dark 暗色模式</span></span>
<span class="line"><span class="token comment"># light 亮色模式</span></span>
<span class="line"><span class="token comment"># light-only 锁定颜色模式</span></span>
<span class="line"><span class="token comment"># auto 跟随系统</span></span>
<span class="line"><span class="token key atrule">color</span><span class="token punctuation">:</span> auto</span>
<span class="line"></span>
<span class="line"><span class="token comment"># &lt;body&gt; 背景图片链接</span></span>
<span class="line"><span class="token key atrule">background_image</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">dark</span><span class="token punctuation">:</span> /img/dark_backdrop.jpg <span class="token comment"># 暗色模式</span></span>
<span class="line">  <span class="token key atrule">light</span><span class="token punctuation">:</span> /img/light_backdrip.jpg <span class="token comment"># 亮色模式</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导航栏</span></span>
<span class="line"><span class="token key atrule">menu</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">文章动态</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="line">  <span class="token key atrule">文章归档</span><span class="token punctuation">:</span> <span class="token string">&quot;/archives/&quot;</span></span>
<span class="line">  <span class="token key atrule">数据资产</span><span class="token punctuation">:</span> <span class="token string">&quot;/data_asset/&quot;</span></span>
<span class="line">  <span class="token key atrule">网站导航</span> <span class="token punctuation">:</span> <span class="token string">&quot;/web_navigation/&quot;</span></span>
<span class="line">  <span class="token comment"># 智能体: &quot;/chat_agent/&quot;</span></span>
<span class="line">  <span class="token comment"># 留言板: &quot;/guestbook/&quot;</span></span>
<span class="line">  <span class="token key atrule">关于</span><span class="token punctuation">:</span> <span class="token string">&quot;/about/&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 侧边栏</span></span>
<span class="line"><span class="token key atrule">aside</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">in_left</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 侧边栏在左 true / false</span></span>
<span class="line">  <span class="token key atrule">logo</span><span class="token punctuation">:</span> /img/avatar_MagicTable.png <span class="token comment">#图片链接，建议 1:1 比例</span></span>
<span class="line">  <span class="token key atrule">dr</span><span class="token punctuation">:</span> / <span class="token comment"># 侧边栏 Dr. 链接</span></span>
<span class="line">  <span class="token key atrule">icp</span><span class="token punctuation">:</span> <span class="token comment"># ICP 备案号，与版权声明相同，但会链接到 https://beian.miit.gov.cn/</span></span>
<span class="line">  <span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token comment"># 版权声明、备案号等，可自定义键值，不想显示则留空</span></span>
<span class="line">    <span class="token comment"># 萌:</span></span>
<span class="line">    <span class="token comment">#   萌ICP备XXXXXXXX号: https://icp.gov.moe/?keyword=XXXXXXXX</span></span>
<span class="line">    <span class="token comment"># copyright:</span></span>
<span class="line">    <span class="token comment">#   CC BY-NC-SA 4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 社交链接</span></span>
<span class="line"><span class="token comment"># 格式：链接 || 图标</span></span>
<span class="line"><span class="token comment"># 所有可用图标参考：https://fontawesome.com/icons</span></span>
<span class="line"><span class="token key atrule">social</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># GitHub: https://github.com/yourname || fab fa-github</span></span>
<span class="line">  <span class="token comment"># E-Mail: mailto:yourname@gmail.com || fa fa-envelope</span></span>
<span class="line">  <span class="token comment"># BiliBili: https://space.bilibili.com/0000000 || fa-brands fa-bilibili</span></span>
<span class="line">  <span class="token comment"># Weibo: https://weibo.com/yourname || fab fa-weibo</span></span>
<span class="line">  <span class="token comment"># Zhihu: https://www.zhihu.com/people/yourname || fab fa-zhihu</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># post 文章页面配置；true / false</span></span>
<span class="line"><span class="token key atrule">post</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>    <span class="token comment"># 是否显示发布日期</span></span>
<span class="line">  <span class="token key atrule">updated</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否显示修改日期</span></span>
<span class="line">  <span class="token key atrule">excerpt</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否在文章中显示摘要内容（&lt;!-- more--&gt; 以上的内容）</span></span>
<span class="line">  <span class="token key atrule">count</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>   <span class="token comment"># 是否显示字数统计</span></span>
<span class="line">  <span class="token key atrule">time</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>    <span class="token comment"># 是否显示预计阅读时长</span></span>
<span class="line">  <span class="token comment"># 文章末显示打赏二维码</span></span>
<span class="line">  <span class="token key atrule">reward</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 支付宝 | Alipay: img/Alipay.png</span></span>
<span class="line">    <span class="token comment"># 微信 | Wechat: img/WeChat.png</span></span>
<span class="line">  <span class="token comment"># 以下两项依赖 hexo-wordcount，请参阅 README 开启</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 文章内目录</span></span>
<span class="line"><span class="token key atrule">toc</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">list_number</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># true / false ；是否显示编号</span></span>
<span class="line">  <span class="token key atrule">max_depth</span><span class="token punctuation">:</span> <span class="token number">6</span>      <span class="token comment"># 最大目录深度</span></span>
<span class="line">  <span class="token key atrule">min_depth</span><span class="token punctuation">:</span> <span class="token number">1</span>      <span class="token comment"># 最小目录深度</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 归档页</span></span>
<span class="line"><span class="token key atrule">archives</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">categories_count</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否显示分类总数</span></span>
<span class="line">  <span class="token key atrule">tags_count</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否显示标签总数</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 搜索</span></span>
<span class="line"><span class="token key atrule">search</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">content</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 若为 false，仅可搜索标题及 metadata</span></span>
<span class="line">  <span class="token key atrule">preload</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 自动加载搜索数据</span></span>
<span class="line">  <span class="token comment"># 设为 post 时，仅可搜索 post 页面</span></span>
<span class="line">  <span class="token comment"># 设为 page 时，仅可搜索非 post 页面</span></span>
<span class="line">  <span class="token comment"># 设为 all 时，可搜索全部页面</span></span>
<span class="line">  <span class="token key atrule">field</span><span class="token punctuation">:</span> post</span>
<span class="line">  <span class="token comment"># 设为 html 时，依据 html 文件生成</span></span>
<span class="line">  <span class="token comment"># 设为 striptags 时，滤除 html tag</span></span>
<span class="line">  <span class="token comment"># 设为 raw 时，依据 markdown 源文件生成</span></span>
<span class="line">  <span class="token key atrule">format</span><span class="token punctuation">:</span> striptags</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 不蒜子</span></span>
<span class="line"><span class="token comment"># 详见 http://busuanzi.ibruce.info/</span></span>
<span class="line"><span class="token key atrule">busuanzi</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token key atrule">sitePV</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 站点总访问量</span></span>
<span class="line">  <span class="token key atrule">siteUV</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 站点访客数</span></span>
<span class="line">  <span class="token key atrule">pagePV</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 页面访问量</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Valine，评论插件</span></span>
<span class="line"><span class="token comment"># 详见 https://valine.js.org</span></span>
<span class="line"><span class="token key atrule">valine</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token key atrule">app_id</span><span class="token punctuation">:</span>      <span class="token comment"># APP ID</span></span>
<span class="line">  <span class="token key atrule">app_key</span><span class="token punctuation">:</span>     <span class="token comment"># APP KEY</span></span>
<span class="line">  <span class="token key atrule">server_url</span><span class="token punctuation">:</span>  <span class="token comment"># APP DOMAIN（LeanCloud 国际版）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># gitalk，评论插件</span></span>
<span class="line"><span class="token comment"># 详见 https://github.com/gitalk/gitalk</span></span>
<span class="line"><span class="token key atrule">gitalk</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token key atrule">client_id</span><span class="token punctuation">:</span>      <span class="token comment"># GitHub 应用 Client ID</span></span>
<span class="line">  <span class="token key atrule">client_secret</span><span class="token punctuation">:</span>  <span class="token comment"># GitHub 应用 Client Secret</span></span>
<span class="line">  <span class="token key atrule">repo</span><span class="token punctuation">:</span>           <span class="token comment"># 用于存放评论数据的 GitHub 仓库</span></span>
<span class="line">  <span class="token key atrule">owner</span><span class="token punctuation">:</span>          <span class="token comment"># 该 GitHub 仓库所有者</span></span>
<span class="line">  <span class="token key atrule">admin</span><span class="token punctuation">:</span>          <span class="token comment"># 具有写该 GitHub 仓库权限的用户，例如: [adminA,adminB]</span></span>
<span class="line">  <span class="token key atrule">id</span><span class="token punctuation">:</span> location.pathname <span class="token comment"># (可选) 页面的唯一标识</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Waline，评论插件</span></span>
<span class="line"><span class="token comment"># 详情: https://waline.js.org/</span></span>
<span class="line"><span class="token key atrule">waline</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token key atrule">server_url</span><span class="token punctuation">:</span> <span class="token comment">#Server_Url</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#Artalk</span></span>
<span class="line"><span class="token comment">#详见：https://artalk.js.org/</span></span>
<span class="line"><span class="token key atrule">artalk</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token key atrule">server</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//artalk.server.instance/ <span class="token comment"># 你的 Artalk 服务地址</span></span>
<span class="line">  <span class="token key atrule">site_name</span><span class="token punctuation">:</span> My Blog                      <span class="token comment"># 站点名称，用于区分多个站点（可选）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 图表支持</span></span>
<span class="line"><span class="token key atrule">mermaid</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;10.5.0&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># pjax 支持</span></span>
<span class="line"><span class="token key atrule">pjax</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 公式前端渲染</span></span>
<span class="line"><span class="token key atrule">mathjax</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.6.1&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在 \`&lt;head&gt;\` 标签内引入 CSS 样式表</span></span>
<span class="line"><span class="token key atrule">stylesheets</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在 \`&lt;body&gt;\` 尾部引入 JavaScript 脚本</span></span>
<span class="line"><span class="token key atrule">scripts</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成静态文件" tabindex="-1"><a class="header-anchor" href="#生成静态文件"><span>生成静态文件</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 请在项目目录下执行</span></span>
<span class="line"><span class="token comment"># 会在项目目录下生成一个最终渲染后的网页目录。</span></span>
<span class="line">hexo g</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动本地服务进行测试" tabindex="-1"><a class="header-anchor" href="#启动本地服务进行测试"><span>启动本地服务进行测试</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 请在项目目录下执行</span></span>
<span class="line"><span class="token comment"># 在本机中启动一个web服务，可通过给出的链接在浏览器中查看结果</span></span>
<span class="line">hexo s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="到华为云购买域名" tabindex="-1"><a class="header-anchor" href="#到华为云购买域名"><span>到华为云购买域名</span></a></h3><ul><li>购买域名</li><li>解析域名</li></ul><h3 id="配置git工具对接github平台" tabindex="-1"><a class="header-anchor" href="#配置git工具对接github平台"><span>配置Git工具对接Github平台</span></a></h3><ul><li>提示：若没有Github平台的账户，请提前到官方网站注册。</li></ul><p>在Github平台中创建博客项目</p><p>设置SSH免密码登入</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 在本地生成SSH公钥</span></span>
<span class="line">ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;Github的用户邮箱&quot;</span></span>
<span class="line"><span class="token comment"># 后面会提示存储路径，保持默认，回车继续</span></span>
<span class="line"><span class="token comment"># 提示输入私钥密码，保持无，回车继续</span></span>
<span class="line"><span class="token comment"># 提示再次输入私钥密码，保持无，回车继续</span></span>
<span class="line"><span class="token comment"># 在\`/home/用户名/.ssh/\`下会生成\`id_ed25519\`私钥、\`id_ed25519.pub\`公钥</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取公钥文件</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">cat</span> /home/用户名/.ssh/id_ed25519.pub</span>
<span class="line"><span class="token comment"># 复制输出的公钥内容</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置Github平台账户的SSH公钥</p><blockquote><ul><li>用户可以通过主页右上角 「个人设置」-&gt;「安全设置」-&gt;「SSH 公钥」-&gt;「添加公钥」，添加生成的 public key 添加到当前账户中。</li></ul></blockquote><p>设置 Gitee的邮箱和用户名</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 配置用户名和邮箱，若用户名存在空格则需要使用双引号包裹起来。</span></span>
<span class="line"><span class="token function">git</span> config user.name <span class="token string">&quot;【用户名】&quot;</span></span>
<span class="line"><span class="token function">git</span> config user.email <span class="token string">&quot;【电子邮件】&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 保存用户名和密码</span></span>
<span class="line"><span class="token function">git</span> config credential.helper store</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传文章到github平台" tabindex="-1"><a class="header-anchor" href="#上传文章到github平台"><span>上传文章到Github平台</span></a></h3><blockquote><ul><li>提示：首次部署连接会要求输入Github的用户名和密码，且linux命令行端没有图像界面，请仔细输入。</li><li>若生成静态文件后又修改了文章或配置</li><li>请先执行<code>hexo clear</code>清空缓存，再从新<code>hexo g</code>生成新的静态文件，最后再上传Gitee平台。</li></ul></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 上传文章</span></span>
<span class="line">hexo d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="github平台端项目仓库配置" tabindex="-1"><a class="header-anchor" href="#github平台端项目仓库配置"><span>Github平台端项目仓库配置</span></a></h3><p>项目仓库必要设置</p><blockquote><ul><li>到Gitee平台中创建的博客项目中，进入「管理」-&gt;「基本信息」</li><li>仓库名称：随意无限制</li><li>路径：需要与用户名一致且全部小写，这样网站地址不会产生二级域名。</li><li>语言：JavaScript</li><li>是否开源：开源</li></ul></blockquote><p>开启Github Pages服务</p><blockquote><ul><li>修改自定义域名</li><li>教学文章：<a href="https://cloud.baidu.com/article/2760883" target="_blank" rel="noopener noreferrer">https://cloud.baidu.com/article/2760883</a></li></ul></blockquote><blockquote><ul><li>在hexo项目的<code>/source</code>目录下创建<code>CNAME</code>文件，该文件没有后缀名，并在里面填写自定义的域名，然后保存即可。</li><li>教学文章：<a href="https://blog.csdn.net/javemalloc/article/details/136669951" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/javemalloc/article/details/136669951</a></li></ul></blockquote><p>管理小技巧</p><blockquote><ul><li>文件名需要规划好，不重名，清晰好记。</li><li>文章需要经常更新且优化同步等。</li></ul></blockquote><h2 id="项目目录结构讲解" tabindex="-1"><a class="header-anchor" href="#项目目录结构讲解"><span>项目目录结构讲解</span></a></h2><blockquote><p><strong><code>node_modules</code>目录</strong></p><ul><li>该目录是nodejs底层所需要的依赖库。</li></ul><p><strong><code>public</code>目录</strong></p><ul><li>该目录是hexo框架执行<code>hexo generate</code>命令生成的编译渲染后最终的页面文件。</li></ul><p><strong><code>.deploy_git</code>目录</strong></p><ul><li>该目录是hexo框架执行<code>hexo deploy</code>命令时生成的部署项目到github上的项目，上传时会将该目录提交到github，且该目录是有版本控制的，因此需要进行版本控制。</li></ul></blockquote>`,50)]))}const o=s(p,[["render",i]]),u=JSON.parse('{"path":"/note/Solution-%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99-Hexo_Github.html","title":"Solution - 博客网站 - VScode+Hexo+Github","lang":"zh-CN","frontmatter":{"title":"Solution - 博客网站 - VScode+Hexo+Github","author":"魔术桌","cover":"","category":["学习笔记/方案"],"date":"2024-08-09T00:00:00.000Z","tag":["进度-已完成","知识总结"],"description":"文章摘要： 使用Hexo框架并部署到Github平台的个人博客项目。 针对 Debian Linux 系统的环境。 注释 博客中使用的图片使用vscode编辑器中的Excalidraw插件绘制，能够实现一个文件随时修改图像和展示结果，实现无需导出图片操作。 该博客是静态博客，因此没有后台管理系统或登录功能，没有涉及数据库操作等内容。 项目简介 使用He...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Solution - 博客网站 - VScode+Hexo+Github\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-09T00:00:00.000Z\\",\\"dateModified\\":\\"2025-11-15T05:18:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"],["meta",{"property":"og:url","content":"https://blog.magictable.ha.cn/note/Solution-%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99-Hexo_Github.html"}],["meta",{"property":"og:site_name","content":"魔术桌"}],["meta",{"property":"og:title","content":"Solution - 博客网站 - VScode+Hexo+Github"}],["meta",{"property":"og:description","content":"文章摘要： 使用Hexo框架并部署到Github平台的个人博客项目。 针对 Debian Linux 系统的环境。 注释 博客中使用的图片使用vscode编辑器中的Excalidraw插件绘制，能够实现一个文件随时修改图像和展示结果，实现无需导出图片操作。 该博客是静态博客，因此没有后台管理系统或登录功能，没有涉及数据库操作等内容。 项目简介 使用He..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-11-15T05:18:33.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"知识总结"}],["meta",{"property":"article:tag","content":"进度-已完成"}],["meta",{"property":"article:published_time","content":"2024-08-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-11-15T05:18:33.000Z"}]]},"git":{"updatedTime":1763183913000,"contributors":[{"name":"MagicTable-RedmiNote12TPro-Android","username":"","email":"13459588094@163.com","commits":2},{"name":"MagicTable-HappinessHome-DebianLinux","username":"","email":"13459588094@163.com","commits":2}],"changelog":[{"hash":"967b485954c006e51d8e05e0390aaa5e52fbbbe4","time":1763183913000,"email":"13459588094@163.com","author":"MagicTable-HappinessHome-DebianLinux","message":"vault backup: 2025-11-15 13:18:33"},{"hash":"2fee46a18beafc4284ad1e19b3f2684c7954037e","time":1759718274000,"email":"13459588094@163.com","author":"MagicTable-RedmiNote12TPro-Android","message":"手机端同步笔记"},{"hash":"ea490d819f6b9c38b6faf647221faa9808862172","time":1759413290000,"email":"13459588094@163.com","author":"MagicTable-HappinessHome-DebianLinux","message":"更新博客文章数据"},{"hash":"bd68b5c596d6a0543e6461d26edd64a5440f6020","time":1758421995000,"email":"13459588094@163.com","author":"MagicTable-RedmiNote12TPro-Android","message":"初始化仓库版本"}]},"autoDesc":true,"filePathRelative":"note/Solution-博客网站-Hexo+Github.md","excerpt":"<p><strong>文章摘要：</strong> 使用Hexo框架并部署到Github平台的个人博客项目。</p>\\n<ul>\\n<li>针对 Debian Linux 系统的环境。</li>\\n</ul>\\n"}');export{o as comp,u as data};
