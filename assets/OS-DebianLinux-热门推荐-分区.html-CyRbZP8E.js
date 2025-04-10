import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as t,b as r,d as l,e as a,f as s,w as p,r as c,o as d}from"./app-C-jtbkLB.js";const m={},h={class:"hint-container info"};function u(f,e){const i=c("RouteLink");return d(),o("div",null,[e[4]||(e[4]=t("p",null,[t("strong",null,"文章摘要："),a(" linux 操作系统分区方案总结。")],-1)),r(" more "),t("div",h,[e[2]||(e[2]=t("p",{class:"hint-container-title"},"相关信息",-1)),e[3]||(e[3]=t("p",null,"内部相关文章",-1)),t("ul",null,[t("li",null,[e[1]||(e[1]=a("磁盘分区：")),s(i,{to:"/hardware/Device-%E6%9C%BA%E6%A2%B0%E7%A1%AC%E7%9B%98-%E7%A3%81%E7%9B%98%E5%88%86%E5%8C%BA.html"},{default:p(()=>e[0]||(e[0]=[a("Device-机械硬盘-磁盘分区")])),_:1})])])]),e[5]||(e[5]=l('<h2 id="磁盘分区" tabindex="-1"><a class="header-anchor" href="#磁盘分区"><span>磁盘分区</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><strong>备份</strong>：在分区之前，确保备份所有重要数据。</li><li><strong>分区大小</strong>：根据实际情况调整分区大小，考虑未来的存储需求。</li><li><strong>LVM</strong>：如果你需要更灵活的分区管理，可以考虑使用LVM（逻辑卷管理）。</li></ul></div><h4 id="a-efi系统分区-boot-efi或-boot" tabindex="-1"><a class="header-anchor" href="#a-efi系统分区-boot-efi或-boot"><span>a. EFI系统分区（/boot/efi或/boot）</span></a></h4><ul><li>大小：通常500MB到1GB足够</li><li>用途：用于EFI启动加载器和内核镜像</li><li>注意：仅当使用UEFI启动模式时才需要</li></ul><h4 id="b-根分区" tabindex="-1"><a class="header-anchor" href="#b-根分区"><span>b. 根分区（/）</span></a></h4><ul><li>大小：至少20GB，推荐至少50GB或更多，取决于你的需求</li><li>用途：存储系统文件和程序</li></ul><h4 id="c-家分区-home" tabindex="-1"><a class="header-anchor" href="#c-家分区-home"><span>c. 家分区（/home）</span></a></h4><ul><li>大小：剩余空间的大部分，取决于个人文件和数据的存储需求</li><li>用途：存储用户数据和个人设置</li></ul><h4 id="d-交换分区-swap" tabindex="-1"><a class="header-anchor" href="#d-交换分区-swap"><span>d. 交换分区（swap）</span></a></h4><ul><li>大小：通常为物理内存的1到2倍，但如果你有足够的物理内存（比如16GB以上），可以设置更小或不需要</li><li>用途：作为虚拟内存使用，当物理内存不足时</li></ul><h4 id="e-临时文件系统-tmp" tabindex="-1"><a class="header-anchor" href="#e-临时文件系统-tmp"><span>e. 临时文件系统（/tmp）</span></a></h4><ul><li>大小：通常5GB到10GB足够</li><li>用途：存储临时文件，可以不单独分区，而是使用tmpfs挂载到内存中</li></ul><h4 id="f-可选分区" tabindex="-1"><a class="header-anchor" href="#f-可选分区"><span>f. 可选分区</span></a></h4><ul><li>/var：用于存储系统日志和缓存文件，可以独立分区，特别是对于服务器</li><li>/opt：用于安装可选的软件包</li><li>/srv：用于存储服务数据</li></ul>',14))])}const x=n(m,[["render",u]]),E=JSON.parse('{"path":"/software/OS-DebianLinux-%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%90-%E5%88%86%E5%8C%BA.html","title":"OS - Debian Linux - 热门推荐 - 分区","lang":"zh-CN","frontmatter":{"title":"OS - Debian Linux - 热门推荐 - 分区","author":"魔术桌","cover":"","category":["软件程序/系统"],"date":"2024-11-21T00:00:00.000Z","tag":["进度-待完善","热门推荐"],"description":"文章摘要： linux 操作系统分区方案总结。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/OS-DebianLinux-%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%90-%E5%88%86%E5%8C%BA.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"OS - Debian Linux - 热门推荐 - 分区"}],["meta",{"property":"og:description","content":"文章摘要： linux 操作系统分区方案总结。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T15:30:56.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-待完善"}],["meta",{"property":"article:tag","content":"热门推荐"}],["meta",{"property":"article:published_time","content":"2024-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T15:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OS - Debian Linux - 热门推荐 - 分区\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-21T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T15:30:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"git":{"createdTime":1742743856000,"updatedTime":1742743856000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"13459588094@163.com","commits":1}]},"readingTime":{"minutes":1.48,"words":444},"filePathRelative":"software/OS-DebianLinux-热门推荐-分区.md","localizedDate":"2024年11月21日","excerpt":"<p><strong>文章摘要：</strong> linux 操作系统分区方案总结。</p>\\n","autoDesc":true}');export{x as comp,E as data};
