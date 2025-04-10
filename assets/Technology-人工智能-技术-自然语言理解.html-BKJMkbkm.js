import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as t,b as i,d as a,e as n,o as r}from"./app-C-jtbkLB.js";const p={};function s(c,l){return r(),e("div",null,[l[0]||(l[0]=t("p",null,[t("strong",null,"文章摘要："),n(" 摘要内容。")],-1)),i(" more "),l[1]||(l[1]=a('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><blockquote><ul><li>NLU</li></ul></blockquote><p>主要功能</p><blockquote><ul><li></li></ul></blockquote><p>注意事项</p><blockquote><ul><li></li></ul></blockquote><p>适用场景</p><blockquote><ul><li><strong>数据分析</strong>：从大量非结构化文本数据中提取有用信息。</li><li><strong>情感分析</strong>：分析社交媒体上的用户反馈，以了解品牌形象和产品评价。</li><li><strong>教育</strong>：智能教育助手，为学生提供学习支持和答疑。</li></ul></blockquote><p>应用层：聊天机器人、翻译</p><p>平台功能：标注工具、AI训练器</p><p>核心算法：分词、情感分析</p><p>其他算法：命名实体识别、关键词分析、词向量、文本相似度</p><p>资源层：基础架构支持、数据中心</p><h2 id="分词" tabindex="-1"><a class="header-anchor" href="#分词"><span>分词</span></a></h2><p>分词，我认为其实是在把字合在一起，而不是一个句子分开。</p><blockquote><ul><li>开始，文本从开始就是单个字符（第一次分词等于没有分词），或者说是字符集（字符编码），</li><li>然后，加入了我们的常用词汇（专有名词），进一步的为文本分词（第二次分词或者合字），</li><li>后续，有加入了句法分析或者篇章分析，可以说是时间线（理解上下文），查看之前的结果来改变之后的分词（第三次分词或根据上下文来改变词库，见人说人话，见鬼说鬼话），</li><li>最后，进行理解每个词的意思，也就是词法分析，或者根据上下文来改变词的意思（理解）。</li><li>最最后，记得保存（存储记忆，供后续使用）。</li></ul></blockquote><p>中文命名实体识别、中文阅读理解、中文句子对分类、中文情绪分析、语言可接受性、多任务学习、命名实体识别、自然语言推论、开放领域问题回答、问答、语义文本相似性、情绪分析</p><h2 id="意图识别" tabindex="-1"><a class="header-anchor" href="#意图识别"><span>意图识别</span></a></h2><p>基于规则：关键字、词典</p><p>基于模型：文本分类、文本相似度</p><p>多酚类模型</p><p>多标签模型</p><h2 id="分析对象粒度" tabindex="-1"><a class="header-anchor" href="#分析对象粒度"><span>分析对象粒度</span></a></h2><blockquote><p>词汇级</p><ul><li>词法分析：中文分词、词性标注、命名实体识别、新词识别</li><li>语义表示：语义表示、语义消歧</li><li>语义关系：语义关系建模、语义关系抽取、语义关系计算</li></ul><p>句子级</p><ul><li>语句变换：同义词替换、语义归一化、省略/纠错</li><li>语句解析：句法结构分析、依存关系分析</li><li>语义表示：语义给i傲视、分本分类</li><li>语句生成：规则模板、知识图例、机器学习</li></ul><p>篇章级</p><ul><li>单文档分析：分章主题、文档分类、文档结构分析、文档语义分析、文档语义表示</li><li>多文档分析：文档主题、文档分类、文档聚类</li></ul></blockquote><h2 id="分析内容特征" tabindex="-1"><a class="header-anchor" href="#分析内容特征"><span>分析内容特征</span></a></h2><blockquote><p>词法分析</p><ul><li>中文分词、实体命名识别、词性标注、新词识别</li></ul><p>语法分析</p><ul><li>句子级：句法结构分析、依存关系分析</li><li>篇章级：文档结构分析</li></ul><p>语义分析</p><ul><li>词汇级：语义表示、语义消歧</li><li>句子及：语义表示、文本分类、意图识别、情感分析</li><li>篇章级：语义表示、文档主题、文档分类、文档聚类、情感分析</li></ul><p>语用分析</p><ul><li>内容分析：意义分析、语境分析</li><li>内容生成：预制模板、知识推理、机器学习</li></ul></blockquote><h2 id="难点" tabindex="-1"><a class="header-anchor" href="#难点"><span>难点</span></a></h2><blockquote><ul><li>语言是没有规律的，或者说规律是错综复杂的。</li><li>语言是可以自由组合的，可以组合复杂的语言表达。</li><li>语言是一个开放集合，我们可以任意的发明创造一些新的表达方式。</li><li>语言需要联系到实践知识，有一定的知识依赖。</li><li>语言的使用要基于环境和上下文。</li></ul></blockquote><blockquote><ul><li><p><strong>分词标准</strong>：根据不同的需求定制不同的分词标准。</p></li><li><p><strong>切分歧义</strong>：对同一个带切分字符串存在多个分词结果。</p></li><li><ul><li><strong>组合型歧义</strong>（细粒度）：分词是有不同的粒度的，指某个词条中的一部分也可以切分为一个独立的词条。比如“中华人民共和国”，粗粒度的分词就是“中华人民共和国”，细粒度的分词可能是“中华/人民/共和国”</li></ul></li><li><ul><li><strong>交集型歧义</strong>：在“郑州天和服装厂”中，“天和”是厂名，是一个专有词，“和服”也是一个词，它们共用了“和”字。</li></ul></li><li><ul><li><strong>真歧义</strong>：本身的语法和语义都没有问题, 即便采用人工切分也会产生同样的歧义，只有通过上下文的语义环境才能给出正确的切分结果。例如：”乒乓球/拍买完了“和”乒乓球拍/买完了“。</li></ul></li><li><ul><li><strong>伪歧义</strong>：语义上只有一种切分结果，若切分错误会明显发现句子语义不对。</li></ul></li><li><p><strong>新词</strong>：也称未被词典收录的词，该问题的解决依赖于人们对分词技术和汉语语言结构的进一步认识。</p></li></ul></blockquote><h2 id="实现方法" tabindex="-1"><a class="header-anchor" href="#实现方法"><span>实现方法</span></a></h2><ol><li>基于词典分词算法</li></ol><blockquote><ul><li>又称字符串匹配分词算法。该算法是按照一定的策略将待匹配的字符串和一个已建立好的“充分大的”词典中的词进行匹配，若找到某个词条，则说明匹配成功，识别了该词。</li><li>常见的基于词典的分词算法分为以下几种：<strong>正向最大匹配法、逆向最大匹配法、双向匹配分词法、全切分路径选择</strong>。</li><li>基于词典的分词算法是应用最广泛、分词速度最快的。很长一段时间内研究者都在对基于字符串匹配方法进行优化，比如最大长度设定、字符串存储和查找方式以及对于词表的组织结构，比如采用TRIE索引树、哈希索引等。</li></ul></blockquote><ol start="2"><li>基于统计的分词算法</li></ol><blockquote><p>这类目前常用的是算法是<strong>HMM、CRF、SVM、深度学习</strong>等算法，比如stanford、Hanlp分词工具是基于CRF算法。以CRF为例，基本思路是对汉字进行标注训练，不仅考虑了词语出现的频率，还考虑上下文，具备较好的学习能力，因此其对歧义词和未登录词的识别都具有良好的效果。</p></blockquote><div class="hint-container note"><p class="hint-container-title">注</p><blockquote><ul><li>Nianwen Xue在其论文《Combining Classifiers for Chinese Word Segmentation》中首次提出对每个字符进行标注，通过机器学习算法训练分类器进行分词，在论文《Chinese word segmentation as character tagging》中较为详细地阐述了基于字标注的分词法。</li><li>常见的分词器都是使用<strong>机器学习算法和词典相结合，一方面能够提高分词准确率，另一方面能够改善领域适应性。</strong></li><li>随着深度学习的兴起，也出现了<strong>基于神经网络的分词器</strong>，例如有人员尝试使用双向LSTM+CRF实现分词器，<strong>其本质上是序列标注</strong>，所以有通用性，命名实体识别等都可以使用该模型，据报道其分词器字符准确率可高达97.5%。算法框架的思路与论文《Neural Architectures for Named Entity Recognition》类似，利用该框架可以实现中文分词。</li></ul></blockquote></div><ol start="3"><li>基于字符串匹配的分词方法</li></ol><blockquote><p>基于字符串匹配的分词是通过构建一个固定的词表，对照这个词表，对输入的问句进行字符串截取和字符串匹配。主要原理是将问句从头开始不断切割成若干个子字符串，当所有的子字符串都能够与词表中的某一个单词匹配时，分词即结束。这种分词方法不需要大规模的语料库进行训练，复杂性相对较小，分词速度较快，但该方法过于依赖性词表的质量，当词表足够大时，该方法的优势明显。相反，词表较小时，分词效果较差，且不能识别未登录词。目前，基于字符串匹配的分词法中有最大正向匹配法、最大逆向匹配法和最小切分法等。</p><ul><li>分词词典</li><li>文本扫描顺序：正向扫描、逆向扫描、双向扫描</li><li>匹配原则：最大匹配、逐词匹配、最佳匹配</li><li>最大匹配：把句子从左向右（或从右向左）遍历一遍，遇到词典里面包含的最长的词就标识出来。</li></ul></blockquote><ol start="4"><li>基于统计</li></ol><blockquote><p>基于统计的分词算法的基本原理是利用统计的方法计算字符串在语料库中的出现频率，通过概率计算，判断字符串是否可以单独成词。这种方法不需要固定的词表，核心思想是当相邻的字符出现的次数越多时，这些字符组成一个词的可信度就越大，对未登录词识别展现了很好的优越性。但需要进行大量的文本训练，算法计算周期长，复杂度较高。</p></blockquote><ol start="5"><li>基于理解</li></ol><blockquote><p>基于理解的分词方法是通过让计算机模拟人对句子的理解，达到识别词的效果。其基本思想就是在分词的同时进行句法、语义分析，利用句法信息和语义信息来处理歧义现象。它通常包括三个部分：分词子系统、句法语义子系统、总控部分。在总控部分的协调下，分词子系统可以获得词、句的句法和语义信息来对分词歧义进行判断，即它模拟了人对句子的理解过程。对未登录词有较强的识别能力，不需要词表和大量语料的训练，但需要使用大量的语言知识和信息、完备的规则库。算法复杂，实现技术难度较大，处理速度较慢，目前还处于实验测试阶段。</p></blockquote><p>中文分词工具</p><blockquote><ul><li>Hanlp</li><li>jieba</li><li>清华THULAC</li></ul></blockquote><p>术语解释</p><blockquote><ul><li><strong>词性标注</strong>：（Part-of-Speech tagging 或POS tagging）是指为自然语言文本中的每个词汇赋予一个词性的过程。例如名词、动词、形容词等。</li><li><strong>命名实体识别</strong>：（Named Entity Recognition 简称NER），即&quot;专名识别&quot;，是指识别自然语言文本中具有特定意义的实体，主要包括人名、地名、机构名、时间日期等。</li></ul></blockquote><h3 id="情感计算" tabindex="-1"><a class="header-anchor" href="#情感计算"><span>情感计算</span></a></h3><p>情感的组成部分</p><ol><li>主感体验</li></ol><blockquote><p>个体对不同情感状态的自我感受。</p></blockquote><ol start="2"><li>外观表现（外显）</li></ol><blockquote><p>在情感状态发生状态时，身体各部分的动作量化形式</p><ul><li>面部表情：面部肌肉变化所组成的模式</li><li>姿态表情：身体其他部分的表情动作</li><li>语调表情：言语的声调、节奏、速度等方面的变化</li></ul></blockquote><ol start="3"><li>生理唤醒（内隐）</li></ol><blockquote><p>情感参数的生理反应，是一种胜利的激活水平，不同的反应模式。</p></blockquote><blockquote><p>情感数据用主观判断分类（范畴观）<br> 情感数据用多个维度形成更详细的情感种类（维度观）<br> 表情与语言的表现的情感不统一，如何解决</p></blockquote><p>情感计算框架</p><p>基于AU（人脸运动单元）的情绪识别方法</p><blockquote><p>常见的表情分为7种：平静、惊讶、愤怒、悲伤、开心、恐惧、厌恶（恶心）</p></blockquote><h3 id="推荐系统" tabindex="-1"><a class="header-anchor" href="#推荐系统"><span>推荐系统</span></a></h3><p>不知道大家现在上网有没有这样的体验，那就是网站会根据你之前浏览过的页面、搜索过的关键字推送给你一些相关的网站内容。这其实就是引擎推荐技术的一种表现。</p><p>Google为什么会做免费搜索引擎，目的就是为了搜集大量的自然搜索数据，丰富他的大数据数据库，为后面的人工智能数据库做准备。</p><p><strong>引擎推荐技术原理：</strong><br> 推荐引擎是基于用户的行为、属性（用户浏览网站产生的数据），通过算法分析和处理，主动发现用户当前或潜在需求，并主动推送信息给用户的信息网络。快速推荐给用户信息，提高浏览效率和转化率。</p>',61))])}const h=o(p,[["render",s]]),d=JSON.parse('{"path":"/task/Technology-%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD-%E6%8A%80%E6%9C%AF-%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%90%86%E8%A7%A3.html","title":"Technology - 人工智能 - 技术 - 自然语言理解","lang":"zh-CN","frontmatter":{"title":"Technology - 人工智能 - 技术 - 自然语言理解","author":"魔术桌","cover":"","category":["任务总结/技术"],"date":"2024-11-19T00:00:00.000Z","tag":["进度-待完善","知识总结"],"description":"文章摘要： 摘要内容。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/task/Technology-%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD-%E6%8A%80%E6%9C%AF-%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%90%86%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"魔术桌的知识库"}],["meta",{"property":"og:title","content":"Technology - 人工智能 - 技术 - 自然语言理解"}],["meta",{"property":"og:description","content":"文章摘要： 摘要内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T15:30:56.000Z"}],["meta",{"property":"article:author","content":"魔术桌"}],["meta",{"property":"article:tag","content":"进度-待完善"}],["meta",{"property":"article:tag","content":"知识总结"}],["meta",{"property":"article:published_time","content":"2024-11-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T15:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Technology - 人工智能 - 技术 - 自然语言理解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-19T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T15:30:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"魔术桌\\"}]}"]]},"git":{"createdTime":1742743856000,"updatedTime":1742743856000,"contributors":[{"name":"MagicTable","username":"MagicTable","email":"13459588094@163.com","commits":1}]},"readingTime":{"minutes":10.31,"words":3094},"filePathRelative":"task/Technology-人工智能-技术-自然语言理解.md","localizedDate":"2024年11月19日","excerpt":"<p><strong>文章摘要：</strong> 摘要内容。</p>\\n","autoDesc":true}');export{h as comp,d as data};
