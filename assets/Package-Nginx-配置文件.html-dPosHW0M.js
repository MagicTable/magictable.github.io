import{_ as n,c as e,a,o as i}from"./app-BDRGpUI0.js";const l={};function c(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p><strong>文章摘要：</strong> 摘要内容。</p><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/nginx</span>
<span class="line">|-- /client_body_temp</span>
<span class="line">|-- /conf            // 配置文件</span>
<span class="line">|-- /fastcgi_temp</span>
<span class="line">|-- /html            // 前端网页，静态资源</span>
<span class="line">|-- /logs            // 日志文件</span>
<span class="line">|-- /proxy_temp</span>
<span class="line">|-- /sbin            // 可执行程序</span>
<span class="line">|-- /scgi_temp</span>
<span class="line">|-- /uwsgi_temp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件结构" tabindex="-1"><a class="header-anchor" href="#配置文件结构"><span>配置文件结构</span></a></h2><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf"><pre><code class="language-conf"><span class="line"># 上下文</span>
<span class="line">http {</span>
<span class="line">    # 虚拟主机</span>
<span class="line">    server {</span>
<span class="line">        # 资源文件</span>
<span class="line">        location {</span>
<span class="line">            listen 80;</span>
<span class="line">            server_name localhost;</span>
<span class="line">        }</span>
<span class="line">        location {}</span>
<span class="line">        ...</span>
<span class="line">    }</span>
<span class="line">    server {}</span>
<span class="line">    ...</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虚拟机server通过listen和server_name进行区分，若有多个server配置，则<code>listen</code>和<code>server_name</code>不能重复。</p><p><code>listen</code>：监听可以配置成<code>IP</code>或<code>端口</code>或<code>IP+端口</code></p><ul><li><code>listen 127.0.0.1:8080;</code></li><li><code>listen 127.0.0.1;</code>（端口不写，默认80）</li><li><code>listen 8080;</code></li><li><code>listen *:8080;</code></li><li><code>listen localhost:8080;</code></li></ul><p><code>server</code>：<code>server_name</code>主要用于区分。</p><ul><li></li></ul><h2 id="默认配置文件" tabindex="-1"><a class="header-anchor" href="#默认配置文件"><span>默认配置文件</span></a></h2><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf"><pre><code class="language-conf"><span class="line"></span>
<span class="line">#user  nobody;</span>
<span class="line">worker_processes  1; # 网站数量</span>
<span class="line"></span>
<span class="line">#error_log  logs/error.log;</span>
<span class="line">#error_log  logs/error.log  notice;</span>
<span class="line">#error_log  logs/error.log  info;</span>
<span class="line"></span>
<span class="line">#pid        logs/nginx.pid;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 重要配置</span>
<span class="line">events {</span>
<span class="line">    worker_connections  1024; # 每个网站同时能有多少连接</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># HTTP配置</span>
<span class="line">http {</span>
<span class="line">    include       mime.types;</span>
<span class="line">    default_type  application/octet-stream;</span>
<span class="line"></span>
<span class="line">    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
<span class="line">    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
<span class="line">    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>
<span class="line"></span>
<span class="line">    #access_log  logs/access.log  main;</span>
<span class="line"></span>
<span class="line">    sendfile        on;</span>
<span class="line">    #tcp_nopush     on;</span>
<span class="line"></span>
<span class="line">    #keepalive_timeout  0;</span>
<span class="line">    keepalive_timeout  65;</span>
<span class="line"></span>
<span class="line">    #gzip  on;</span>
<span class="line"></span>
<span class="line">	# 虚拟主机</span>
<span class="line">    server {</span>
<span class="line">        listen       80; # 端口号</span>
<span class="line">        server_name  localhost; # 主机名/域名</span>
<span class="line"></span>
<span class="line">        #charset koi8-r;</span>
<span class="line"></span>
<span class="line">        #access_log  logs/host.access.log  main;</span>
<span class="line"></span>
<span class="line">		# URI路径</span>
<span class="line">        location / {</span>
<span class="line">            root   html;</span>
<span class="line">            index  index.html index.htm;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        #error_page  404              /404.html;</span>
<span class="line"></span>
<span class="line">        # redirect server error pages to the static page /50x.html</span>
<span class="line">        #</span>
<span class="line">        error_page   500 502 503 504  /50x.html;</span>
<span class="line">        location = /50x.html {</span>
<span class="line">            root   html;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
<span class="line">        #</span>
<span class="line">        #location ~ \\.php$ {</span>
<span class="line">        #    proxy_pass   http://127.0.0.1;</span>
<span class="line">        #}</span>
<span class="line"></span>
<span class="line">        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
<span class="line">        #</span>
<span class="line">        #location ~ \\.php$ {</span>
<span class="line">        #    root           html;</span>
<span class="line">        #    fastcgi_pass   127.0.0.1:9000;</span>
<span class="line">        #    fastcgi_index  index.php;</span>
<span class="line">        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
<span class="line">        #    include        fastcgi_params;</span>
<span class="line">        #}</span>
<span class="line"></span>
<span class="line">        # deny access to .htaccess files, if Apache&#39;s document root</span>
<span class="line">        # concurs with nginx&#39;s one</span>
<span class="line">        #</span>
<span class="line">        #location ~ /\\.ht {</span>
<span class="line">        #    deny  all;</span>
<span class="line">        #}</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    # another virtual host using mix of IP-, name-, and port-based configuration</span>
<span class="line">    #</span>
<span class="line">    #server {</span>
<span class="line">    #    listen       8000;</span>
<span class="line">    #    listen       somename:8080;</span>
<span class="line">    #    server_name  somename  alias  another.alias;</span>
<span class="line"></span>
<span class="line">    #    location / {</span>
<span class="line">    #        root   html;</span>
<span class="line">    #        index  index.html index.htm;</span>
<span class="line">    #    }</span>
<span class="line">    #}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    # HTTPS server</span>
<span class="line">    #</span>
<span class="line">    #server {</span>
<span class="line">    #    listen       443 ssl;</span>
<span class="line">    #    server_name  localhost;</span>
<span class="line"></span>
<span class="line">    #    ssl_certificate      cert.pem;</span>
<span class="line">    #    ssl_certificate_key  cert.key;</span>
<span class="line"></span>
<span class="line">    #    ssl_session_cache    shared:SSL:1m;</span>
<span class="line">    #    ssl_session_timeout  5m;</span>
<span class="line"></span>
<span class="line">    #    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
<span class="line">    #    ssl_prefer_server_ciphers  on;</span>
<span class="line"></span>
<span class="line">    #    location / {</span>
<span class="line">    #        root   html;</span>
<span class="line">    #        index  index.html index.htm;</span>
<span class="line">    #    }</span>
<span class="line">    #}</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-web静态网页" tabindex="-1"><a class="header-anchor" href="#配置-web静态网页"><span>配置 - Web静态网页</span></a></h2><ul><li>配置静态的后台管理系统。</li></ul><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf"><pre><code class="language-conf"><span class="line"># 虚拟主机</span>
<span class="line">server {</span>
<span class="line">    listen 8080;              # 端口号</span>
<span class="line">    server_name localhost;    # 主机名称</span>
<span class="line">    # 资源文件配置</span>
<span class="line">    location / {</span>
<span class="line">        root /home/blog       # 配置根目录</span>
<span class="line">        index index.html index2.html;   # 首页配置，可配置多个首页</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const r=n(l,[["render",c]]),v=JSON.parse('{"path":"/software/Package-Nginx-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html","title":"Package - Nginx - 配置文件","lang":"zh-CN","frontmatter":{"title":"Package - Nginx - 配置文件","author":"魔术桌","cover":"","category":["软件程序/软件包"],"date":"2024-12-08T00:00:00.000Z","tag":["进度-待完善","查询手册"],"description":"文章摘要： 摘要内容。 目录结构 配置文件结构 虚拟机server通过listen和server_name进行区分，若有多个server配置，则listen和server_name不能重复。 listen：监听可以配置成IP或端口或IP+端口 listen 127.0.0.1:8080; listen 127.0.0.1;（端口不写，默认80） lis...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Package - Nginx - 配置文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-08T00:00:00.000Z\\",\\"dateModified\\":\\"2025-06-14T11:32:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"],["meta",{"property":"og:url","content":"https://blog.magictable.ha.cn/software/Package-Nginx-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识仓库"}],["meta",{"property":"og:title","content":"Package - Nginx - 配置文件"}],["meta",{"property":"og:description","content":"文章摘要： 摘要内容。 目录结构 配置文件结构 虚拟机server通过listen和server_name进行区分，若有多个server配置，则listen和server_name不能重复。 listen：监听可以配置成IP或端口或IP+端口 listen 127.0.0.1:8080; listen 127.0.0.1;（端口不写，默认80） lis..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-14T11:32:46.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"查询手册"}],["meta",{"property":"article:tag","content":"进度-待完善"}],["meta",{"property":"article:published_time","content":"2024-12-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-14T11:32:46.000Z"}]]},"git":{"updatedTime":1749900766000,"contributors":[{"name":"MagicTable","username":"","email":"13459588094@163.com","commits":1}],"changelog":[{"hash":"9f294c9a014a76e309c75949ae8a8cdc22b54f10","time":1749900766000,"email":"13459588094@163.com","author":"MagicTable","message":"内容更新"}]},"autoDesc":true,"filePathRelative":"software/Package-Nginx-配置文件.md","excerpt":"<p><strong>文章摘要：</strong> 摘要内容。</p>\\n"}');export{r as comp,v as data};
