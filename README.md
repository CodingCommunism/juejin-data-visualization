# juejin-data-visualization
用于抓取掘金数据，可视化分析掘金前后端文章数据，活跃标签，精品文章分析    
> 作者：寒草  
> 微信：hancao97  
> 介绍：一个不一样的北漂前端工程狮🦁️(工作11个月的年轻程序员)，欢迎加微信批评指正交流技术或者一起玩耍约饭  
> tip:vue3还在实践，代码质量自己都觉得堪忧，会努力加油 

# 前言
## 背景
从接触掘金开始写文章到现在已经整整半年了，最近拉取了我掘金关注者信息制作了一个词云图纪念，后来我也突发奇想，我是不是可以用这些数据去做更多的事情。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/047707a347c34ff39ba740b3c286d53f~tplv-k3u1fbpfcp-watermark.image)

作为一个技术网站，我想那些热度爆表的文章肯定就是我们掘金的`镇站之宝`了，而且通过那些热度极高的文章其实也可以反应出来很多事情，于是我就拉取了掘金八大分类的热度前100名的文章信息，进行了一点点的数据分析，制作了这个网站。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/199b19bf87224d858b54d2c43e48b56b~tplv-k3u1fbpfcp-watermark.image)

掘金的八大文章分类分别是：  
- [前端](https://juejin.cn/frontend)
- [后端](https://juejin.cn/backend)
- [Android](https://juejin.cn/android)
- [阅读](https://juejin.cn/article)
- [ios](https://juejin.cn/ios)
- [开发工具](https://juejin.cn/freebie)
- [代码人生](https://juejin.cn/career)
- [人工智能](https://juejin.cn/ai)

我拉取了这八大分类的top100文章后进行如下统计：  
- **对文章热度按照我自己的规则重新计算Top100排名**

> 即热度值🔥，热度值计算公式是：  
> 🔥 = 阅读数/100 + 点赞数 +1000 * 点赞数/阅读数  
> 我的其中一个指标是 点赞阅读比，我认为点赞数/阅读数的比值越高其实文章的质量更高，也可能是一家之言，狗头保命

- **统计各个分类下文章的标签热度排名**
- **根据阅读量估算掘金各个分类的活跃度排名**
- **所有分类文章的标签热度排名**
> tip：标签热度可以反应从业者更加关注的技术方向
## 代码仓库
> 前端: [juejin-data-visualization](https://github.com/CodingCommunism/juejin-data-visualization)  
> 后端: [juejin-data-visualization-server](https://github.com/CodingCommunism/juejin-data-visualization-server)  
> 技术选择: `vue3`/`vite`/`ts`/`express`/`superagent`...  
> 最近在练习使用vue3所以代码质量不行请多指导

# 前端
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88eb519e6d224135a4dc59da240a8dfb~tplv-k3u1fbpfcp-watermark.image)
## TOP20文章
- [【1 月最新】前端 100 问：能搞懂 80% 的请把简历给我](https://juejin.cn/post/6844903885488783374): **13132热度**🔥
- [中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)](https://juejin.im/post/6844903776512393224): **11479热度**🔥
- [一个合格(优秀)的前端都应该阅读这些文章](https://juejin.im/post/6844903896637259784): **9941热度**🔥
- [30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）](https://juejin.im/post/6844903918753808398): **9116热度**🔥
- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872): **8407热度**🔥
- [一名【合格】前端工程师的自检清单](https://juejin.cn/post/6844903830887366670): **7957热度**🔥
- [2018前端面试总结，看完弄懂，工资少说加3K | 掘金技术征文](https://juejin.im/post/6844903673009553416): **7828热度**🔥
- [一个合格的中级前端工程师需要掌握的 28 个 JavaScript 技巧](https://juejin.cn/post/6844903856489365518): **6875热度**🔥
- [写给初中级前端的高级进阶指南](https://juejin.im/post/6844904103504527374): **6731热度**🔥
- [1.5万字概括ES6全部特性(已更新ES2020)](https://juejin.cn/post/6844903959283367950): **6234热度**🔥
- [近两万字小程序攻略发布了](https://juejin.im/post/6844903670589423623): **6051热度**🔥
- [灵活运用CSS开发技巧](https://juejin.im/post/6844903926110617613): **6032热度**🔥
- [你未必知道的49个CSS知识点](https://juejin.im/post/6844903902123393032): **6013热度**🔥
- [由浅入深，66条JavaScript面试知识点](https://juejin.cn/post/6844904200917221389): **5976热度**🔥
- [字节跳动面试官：请你实现一个大文件上传和断点续传](https://juejin.im/post/6844904046436843527): **5912热度**🔥
- [vue中Axios的封装和API接口的管理](https://juejin.im/post/6844903652881072141): **5763热度**🔥
- [Vue 开发必须知道的 36 个技巧【近1W字】](https://juejin.cn/post/6844903959266590728): **5699热度**🔥
- [前端面试考点多？看这些文章就够了（2019年6月更新版）](https://juejin.im/post/6844903577220349959): **5624热度**🔥
- [前端常用插件、工具类库汇总，不要重复造轮子啦！！！](https://juejin.im/post/6844903683411410951): **5580热度**🔥
- [面试分享：两年工作经验成功面试阿里P6总结](https://juejin.im/post/6844903928442667015): **5476热度**🔥
## TOP10标签

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09af6be085ae42d49f685a800643ae36~tplv-k3u1fbpfcp-watermark.image)
- `Javascript`: 23.21%
- `前端`: 21.88%
- `面试`: 11.61%
- `Vue.js`: 10.27%
- `react.js`: 5.8%
- `CSS`: 4.46%
- `ECMAScript6`: 3.57%
- `Webpack`: 2.23%
- `Nodejs`: 2.23%
- `HTML`: 1.79%

# 后端

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a0c3586609c435e9ba3b81fe50a356c~tplv-k3u1fbpfcp-watermark.image)

## TOP20文章
- [后端架构师技术图谱](https://github.com/xingshaocheng/architect-awesome/blob/master/README.md#数据结构): **4075热度**🔥
- [可能是一份最适合你的后端面试指南（部分内容前端同样适用）| 掘金技术征文](https://juejin.im/post/6844903683658874893): **2721热度**🔥
- [《我们一起进大厂》系列- Redis基础](https://juejin.im/post/6844903982066827277): **2548热度**🔥
- [《我们一起进大厂》系列-秒杀系统设计](https://juejin.im/post/6844903999083151374): **2493热度**🔥
- [《吐血整理》顶级程序员工具集](https://juejin.im/post/6844904004716068871): **2484热度**🔥
- [漫画：什么是红黑树？](https://juejin.im/post/6844903519632228365): **2431热度**🔥
- [Java面试通关要点汇总集](https://juejin.im/post/6844903567338242061): **2131热度**🔥
- [我的阿里之路+Java面经考点](https://juejin.im/post/6844903573747171336): **2123热度**🔥
- [必看！java后端，亮剑诛仙（最全知识点）](https://juejin.im/post/6844903890333204494): **1878热度**🔥
- [跟着动画来学习TCP三次握手和四次挥手](https://juejin.im/post/6844903625513238541): **1867热度**🔥
- [再有人问你分布式事务，把这篇扔给他](https://juejin.im/post/6844903647197806605): **1841热度**🔥
- [数据库两大神器【索引和锁】](https://juejin.im/post/6844903645125820424): **1810热度**🔥
- [超详细！4小时开发一个SpringBoot+vue前后端分离博客项目！！](https://juejin.cn/post/6844903823966732302): **1783热度**🔥
- [数据库面试题(开发者必看)](https://juejin.im/post/6844903569632526343): **1645热度**🔥
- [《我们一起进大厂》系列-缓存雪崩、击穿、穿透](https://juejin.im/post/6844903986475057165): **1634热度**🔥
- [git基本操作，一篇文章就够了！](https://juejin.im/post/6844903598522908686): **1627热度**🔥
- [正则表达式真的很骚，可惜你不会写！！！](https://juejin.im/post/6844903677119954958): **1600热度**🔥
- [一个月面了几家大厂   总结了5W字的后端面经（持续更新）](https://juejin.im/post/6844904161612398600): **1587热度**🔥
- [《我们一起进大厂》系列-Redis哨兵、持久化、主从、手撕LRU](https://juejin.im/post/6844903989184577550): **1546热度**🔥
- [MySQL命令，一篇文章替你全部搞定](https://juejin.im/post/6844903599915401230): **1540热度**🔥
## TOP10标签

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b9f4c03b3b54834bcea5f2f04546fa0~tplv-k3u1fbpfcp-watermark.image)
- `Java`:  25.13%
- `后端`:  17.95%
- `面试`:  9.74%
- `数据库`:  6.15%
- `Redis`:  5.64%
- `服务器`:  4.61%
- `架构`:  4.1%
- `MySQL`:  3.59%
- `前端`:  3.08%
- `Spring`: 3.08%
# Android

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fd7c42ace32480f8a1cd83780522528~tplv-k3u1fbpfcp-watermark.image)

## TOP20文章
- [Flutter完整开发实战详解(一、Dart语言和Flutter基础) | 掘金技术征文](https://juejin.im/post/6844903650704244750): **2644热度**🔥
- [RxJava2 只看这一篇文章就够了](https://juejin.im/post/6844903617124630535): **2619热度**🔥
- [骚年你的屏幕适配方式该升级了!-今日头条适配方案](https://juejin.cn/post/6844903661819133960): **2054热度**🔥
- [面试带你飞：这是一份全面的 计算机网络基础 总结攻略](https://juejin.im/post/6844903592965439501): **1810热度**🔥
- [Android 开发规范（完结版）](https://juejin.im/post/6844903518776590349): **1727热度**🔥,- [我看完掘金上的227篇文章，总结出一份 Flutter 入门教程](https://juejin.cn/post/6844903633448861710): **1715热度**🔥
- [2018年Android面试题整理](https://juejin.im/post/6844903565576634375): **1568热度**🔥
- [【Android珍藏】推荐10个炫酷的开源库](https://juejin.im/post/6844903640927322126): **1459热度**🔥
- [Flutter | 状态管理指南篇——Provider](https://juejin.im/post/6844903864852807694): **1448热度**🔥
- [Android 目前最稳定和高效的UI适配方案](https://juejin.im/post/6844903621855805448): **1442热度**🔥
- [面试官：今日头条启动很快，你觉得可能是做了哪些优化？](https://juejin.im/post/6844903958113157128): **1380热度**🔥
- [【建议收藏】2020年中高级Android大厂面试秘籍，为你保驾护航金三银四，直通大厂](https://juejin.cn/post/6844904079177547789): **1340热度**🔥
- [关注我就能达到大师级水平，这话我终于敢说了](https://juejin.im/post/6844903505430478861): **1325热度**🔥
- [今日头条屏幕适配方案终极版正式发布!](https://juejin.cn/post/6844903697000972295): **1282热度**🔥
- [2018 年初值得关注的 25 个新 Android 库和项目](https://www.oschina.net/translate/25-new-android-libraries-and-projects-2018): **1281热度**🔥
- [Flutter Candies 一桶天下](https://juejin.im/post/6844903986370183175): **1241热度**🔥
- [是让人耳目一新的 Jetpack MVVM 精讲啊！](https://juejin.cn/post/6844903976240939021): **1193热度**🔥
- [Android 组件化最佳实践](https://juejin.im/post/6844903649102004231): **1158热度**🔥
- [Android 知识体系脑图「android篇」](https://fashare2015.github.io/2018/04/24/android-skill-tree[android]/): **1150热度**🔥
- [好用漂亮的Android 表格框架](https://juejin.im/post/6844903549109813255): **1138热度**🔥
## TOP10标签

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e5a87c3fa604f1dbe570947477b26c6~tplv-k3u1fbpfcp-watermark.image)
- `Android`: 40.98% 
- `Flutter`: 12.02%
- `GitHub`:  5.46%
- `面试`: 5.46%
- `前端`:  4.92%
- `Java`:  4.37%
- `Google`: 3.83%
- `iOS`: 2.73%
- `RxJava`: 2.19% 
- `Dart`: 2.19%

# ios

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de7cc8427ead4721bb0e0af843fea366~tplv-k3u1fbpfcp-watermark.image)
## TOP20文章
- [出一套 iOS 高级面试题](https://juejin.im/post/6844903645243260941): **1203热度**🔥
- [2018年 iOS 面试心得](https://juejin.im/post/6844903639270572046): **1112热度**🔥
- [【教你赚钱】5 分钟教你成为会赚钱的独立开发者](https://juejin.im/post/6844903652138696712): **1037热度**🔥
- [(强烈推荐)移动端音视频从零到上手](https://juejin.im/post/6844903889007820813): **996热度**🔥
- [高质量 iOS 博客推荐](https://juejin.im/post/6844903567300493319): **939热度**🔥
- [HTTP和HTTPS详解](https://juejin.im/post/6844903604868874247): **864热度**🔥
- [iOS多线程：『GCD』详尽总结](https://juejin.cn/post/6844903566398717960): **802热度**🔥
- [iOS 13 适配要点总结](https://juejin.im/post/6844903952555704328): **751热度**🔥
- [学习并理解 23 种设计模式](https://juejin.im/post/6844903795017646094): **744热度**🔥
- [面向对象设计的六大设计原则（附 Demo & UML类图）](https://juejin.im/post/6844903673672237063): **718热度**🔥
- [掘金上值得关注的 iOS 开发者](https://juejin.im/post/6844903524812193805): **643热度**🔥
- [iOS 性能优化总结](https://juejin.im/post/6844903590138478600): **615热度**🔥
- [腾讯社招iOS面试记录](https://juejin.im/post/6844903633117528078): **610热度**🔥
- [⚠️2019年iOS面试反思总结--不断更新当中ing⚠️](https://juejin.cn/post/6844903942644563982): **575热度**🔥
- [阿里、字节：一套高效的iOS面试题](https://juejin.im/post/6844904064937902094): **553热度**🔥
- [接手一个负分的 iOS 项目后我做了什么](https://juejin.im/post/6844903549273374733): **546热度**🔥
- [一份传男也传女的 React Native 学习笔记](https://juejin.im/post/6844903605137342477): **538热度**🔥
- [深入分析MVC、MVP、MVVM、VIPER](https://juejin.im/post/6844903508521680909): **536热度**🔥
- [一个渣硕iOS春招总结 | 掘金技术征文](https://juejin.im/post/6844903592084635661): **527热度**🔥
- [iOS Runtime详解](https://juejin.im/post/6844903586216804359): **519热度**🔥

## TOP10标签

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/116cfe89318a46799bae7b874be7a57e~tplv-k3u1fbpfcp-watermark.image)
- `iOS`:  37.17%
- `Apple`: 6.28%
- `Objective-C`:  5.76%
- `Swift`:  5.76%
- `Xcode`:  5.24%
- `Flutter`:  4.71%
- `面试`:  4.19%
- `架构`:  3.67%
- `算法`:  3.14%
- `掘金翻译计划`: 3.14%

# 人工智能

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27bc20b30481426cb69ccb4066a533fa~tplv-k3u1fbpfcp-watermark.image)
## TOP20文章
- [谷歌今日上线基于TensorFlow的机器学习速成课程（免费中文版）](https://juejin.im/post/6844903568424566791): **2387热度**🔥
- [TensorFlow 官方文档中文版发布啦（持续维护）](https://juejin.im/post/6844903582114775054): **1822热度**🔥
- [宅男福音deepfakes开源了](https://juejin.im/post/6844903558110773255): **1025热度**🔥
- [Python 深度学习库 Keras 发布官方中文文档，这里有你需要了解的一切](https://juejin.im/post/6844903570358140935): **1014热度**🔥
- [2018年最常见的Python面试题&答案（上篇）](https://juejin.im/post/6844903654143557646): **795热度**🔥
- [记一次手撕算法面试：字节跳动的面试官把我四连击了](https://juejin.im/post/6844904006775488525): **454热度**🔥
- [从15000个Python开源项目中精选的Top30，Github平均star为3707，赶紧收藏！](https://juejin.im/post/6844903551022399496): **433热度**🔥
- [AI 系统首次实现真正自主编程，完爆初级程序员](https://www.oschina.net/news/89008/ai-starts-programming-by-itself): **426热度**🔥
- [MIT正式发布编程语言Julia 1.0：Python、R、C++三合一](https://juejin.im/post/6844903654881755143): **372热度**🔥
- [入门Python数据分析最好的实战项目（一）](https://juejin.im/post/6844903630437384200): **347热度**🔥
- [Python入门深度学习完整指南](https://juejin.im/post/6844903543325851662): **332热度**🔥
- [谷歌官宣：全面超越人类的最强 NLP 预训练模型 BERT 开源了！](https://juejin.im/post/6844903702948478983): **329热度**🔥
- [如何自学人工智能？](https://juejin.im/post/6844903608987680782): **323热度**🔥
- [盘点一下不到100行的给力代码](https://juejin.im/post/6844903641761972237): **318热度**🔥
- [Transformer 模型的 PyTorch 实现](https://juejin.im/post/6844903680487981069): **313热度**🔥
- [告别动态规划，连刷 40 道题，我总结了这些套路，看不懂你打我（万字长文）](https://juejin.im/post/6844903993429196813): **313热度**🔥
- [这是我看过解释TensorFlow最透彻的文章！](https://juejin.im/post/6844903628990316552): **302热度**🔥
- [302页吴恩达Deeplearning.ai课程笔记，详记基础知识与作业代码](https://juejin.im/post/6844903561503981575): **275热度**🔥
- [资源 | 普通程序员如何自学机器学习？这里有一份指南~](https://juejin.im/post/6844903518868881416): **266热度**🔥
- [二分类、多分类与多标签问题的区别,对应损失函数的选择,你知道吗？](https://juejin.im/post/6844903630479294477): **261热度**🔥

## TOP10标签

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30f294b2162d4d2ca3a43926b476ba52~tplv-k3u1fbpfcp-watermark.image)
- `人工智能`:  20.16%
- `Python`:  12.79%
- `算法`:  11.24%
- `机器学习`:  10.47%
- `TensorFlow`: 6.2% 
- `深度学习`:  6.2%
- `GitHub`:  4.65%
- `掘金翻译计划`:  4.27%
- `神经网络`:  3.88%
- `Google`:  3.10%

# 开发工具

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d978da5150c14a84b5eeeb8450e63b58~tplv-k3u1fbpfcp-watermark.image)
## TOP20文章
- [中国大陆可用API合集](https://microzz.com/2017/02/03/API/): **1735热度**🔥
- [老司机的神兵利器-效率工具](https://juejin.im/post/6844903602817859598): **1581热度**🔥
- [人生苦短，了解一下前端必须明白的http知识点](https://juejin.im/post/6844903629963395079): **1222热度**🔥
- [工具 | 创业公司绝对不会告诉你他们在用的工具们（合集）](https://juejin.im/post/6844903520668237832): **1104热度**🔥
- [Charles 功能介绍和使用教程](https://juejin.im/post/6844903665304600589): **1041热度**🔥
- [三分钟教你同步 Visual Studio Code 设置](https://juejin.im/post/6844903679640731662): **866热度**🔥
- [沸点开源秀：推荐一波优秀的 GitHub 项目合集](https://juejin.im/post/6844903556055564302): **823热度**🔥
- [分享一些好用的网站](https://juejin.im/post/6844903774905958407): **772热度**🔥
- [我采访了同事，让他掏出了每天都会浏览的干货网站...](https://juejin.im/post/6844904023816945678): **619热度**🔥
- [为什么程序员应该有一台Mac个人电脑](https://juejin.im/post/6844903497071067143): **607热度**🔥
- [页面可视化搭建工具前生今世](https://juejin.im/post/6844903608614387720): **586热度**🔥
- [GitHub 上那些免费好用的 Windows 软件](https://sspai.com/post/41563): **585热度**🔥
- [MarkDown 插入数学公式实验大集合](https://juejin.im/post/6844903554575155207): **584热度**🔥
- [史上最强 Charles 抓包](https://juejin.im/post/6844903640272994317): **571热度**🔥
- [你一定需要的20款谷歌插件，让你的浏览器更强大！](https://juejin.im/post/6844903684510351368): **555热度**🔥
- [GitHub 重磅消息！私有存储库从今天起完全免费，开发者期待已久！](https://juejin.im/post/6844903757285687309): **472热度**🔥
- [oh-my-zsh让终端好用到飞起~](https://juejin.cn/post/6844903939121348616): **452热度**🔥
- [超好用的谷歌浏览器、Sublime Text、Phpstorm、油猴插件合集](https://guanguans.cn/2018/03/25/Extended/): **437热度**🔥
- [Python从入门到转行](https://segmentfault.com/a/1190000013011286): **426热度**🔥
- [为 win10 打造 Linux 终端（非 wsl）](https://juejin.im/post/6844903700775845895): **420热度**🔥

## TOP10标签

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7de61f463bbd486290fdab4c26a31a54~tplv-k3u1fbpfcp-watermark.image)
- `前端`:  11.11%
- `Visual Studio Code`:  9.63%
- `GitHub`:  8.15%
- `程序员`:  8.15%
- `Git`:  6.67%
- `Chrome`:  5.93%
- `命令行`:  5.93%
- `macOS`:  5.19%
- `Android`:  4.45%
- `Windows`:  4.45%

# 代码人生

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fa92e41eb5045bca64f25599577d4ca~tplv-k3u1fbpfcp-watermark.image)
## TOP20文章
- [一个前端的2018总结，2019展望 | 掘金年度征文](https://juejin.im/post/6844903760725032973): **2740热度**🔥
- [解密初、中、高级程序员的进化之路（前端）](https://juejin.im/post/6844903897593544718): **2268热度**🔥
- [是时候抛弃Postman了，试试 VS Code 自带神器插件👏👏👏](https://juejin.im/post/6844904049725145095): **1374热度**🔥
- [阮一峰，加油！](https://juejin.im/post/6844903605363802125): **1335热度**🔥
- [前端面试之旅](https://juejin.im/post/6844903889653760007): **1258热度**🔥
- [一位前端 2018 绝地求生记 | 掘金年度征文](https://juejin.im/post/6844903758930018311): **1251热度**🔥
- [如何成为公司独当一面的工程师](https://juejin.im/post/6844904001092206605): **1078热度**🔥
- [起诉书！慕课网你敢抄袭，我就敢起诉你！](https://juejin.cn/post/6978619058899910693): **1050热度**🔥
- [【上班摸鱼系列】文字选择类游戏：《职员默示录 - 启》末日丧尸爆发，你，是什么下场！？](https://juejin.im/post/6844903877976801293): **1006热度**🔥
- [前端：写在 30 岁之前](https://juejin.cn/post/6875606903162929159): **993热度**🔥
- [一个思维习惯，让你成为架构师](https://juejin.im/post/6844903666776801293): **946热度**🔥
- [Java 破解腾讯微信跳一跳（几乎每次命中中心点，目前最高 19844 分）](https://juejin.im/post/6844903544114380807): **867热度**🔥
- [[1024] 老子今天不加班，程序员也需要自由](https://juejin.im/post/6844903505631641607): **807热度**🔥
- [写代码水平的几个发展阶段](https://juejin.im/post/6844903549852188685): **752热度**🔥
- [入职三天，公司给了100块钱叫我走人| 掘金技术征文](https://juejin.im/post/6844903693028950023): **746热度**🔥
- [掘金 2017 年终 Top 10 榜单 | 开发者这一年到底在关心什么？](https://juejin.im/post/6844903560983871495): **685热度**🔥
- [中国十大技术社区你都知道哪些？](https://juejin.im/post/6844903634967199757): **606热度**🔥
- [[译] 如何写一篇杀手级的软件工程师简历](https://juejin.im/post/6844903779662299143): **597热度**🔥
- [开源即责任](https://juejin.im/post/6844903746946744333): **593热度**🔥
- [2018 沉淀 | 年终总结 | 掘金年度征文](https://juejin.im/post/6844903745101234189): **557热度**🔥

## TOP10标签

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a28f35116564cd281b0d92d17d6b8e8~tplv-k3u1fbpfcp-watermark.image)
- `程序员`:  35.03%
- `前端`: 15.25%
- `Java`:  6.21%
- `面试`:  5.08%
- `Android`:  4.52%
- `后端`:  4.52%
- `产品`:  3.39%
- `Python`: 3.39%
- `开源`:  2.82%
- `GitHub`: 2.82%

# 阅读

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04c5e455e76946dfbd1b119304c9f570~tplv-k3u1fbpfcp-watermark.image)
## TOP20文章
- [霖呆呆的近期面试128题汇总(含超详细答案) | 掘金技术征文](https://juejin.im/post/6844904151369908232): **2673热度**🔥
- [22 道高频 JavaScript 手写面试题及答案](https://juejin.im/post/6844903911686406158): **2182热度**🔥
- [2020三元同学春招阿里淘系、阿里云、字节跳动面经 & 个人成长经验分享 | 掘金技术征文](https://juejin.im/post/6844904106537009159): **2070热度**🔥
- [艺术喵 2 年前端面试心路历程（字节跳动、YY、虎牙、BIGO）| 掘金技术征文](https://juejin.im/post/6844904113302568973): **1816热度**🔥
- [前端渣渣唠嗑一下前端中的设计模式（真实场景例子）](https://juejin.cn/post/6844904138707337229): **1789热度**🔥
- [Vue(v2.6.11)万行源码生啃，就硬刚！](https://juejin.im/post/6846687602679119885): **1743热度**🔥
- [go mod 使用](https://juejin.cn/post/6844903798658301960): **1669热度**🔥
- [2019年技术胖的总结 一分钟轻松拿走你的赞| 掘金年度征文](https://juejin.im/post/6844904021707194375): **1595热度**🔥
- [Gos: GO MODULE解决方案 💪](https://juejin.cn/post/6844903848268529672): **1590热度**🔥
- [不如我们从头来过 | 掘金](https://juejin.im/post/6844903715019685896): **1578热度**🔥
- [HTTP----HTTP缓存机制](https://juejin.im/post/6844903517702848526): **1490热度**🔥
- [JS开发必须知道的41个技巧【持续更新】](https://juejin.im/post/6854573212890562573): **1164热度**🔥
- [全面了解Nginx到底能做什么](https://juejin.im/post/6844903670434250759): **1156热度**🔥
- [十大酷炫屌的图像悬停特效](https://juejin.im/post/6844904200602697741): **1135热度**🔥
- [这就是我面了42场得到的方法论！](https://juejin.cn/post/6931150126069055496): **1104热度**🔥
- [面经合集 | 面试不用愁，掘友能解忧，一批大厂面试经验新鲜出炉啦~](https://juejin.im/post/6844904097024311309): **1060热度**🔥
- [vue全家桶开发的一些小技巧和注意事项](https://juejin.im/post/6844903953969184775): **977热度**🔥
- [前端高频面试题整理 前端两年-月入30K | 掘金技术征文](https://juejin.cn/post/6844904148899463175): **897热度**🔥
- [你的 Mac 用对了吗？推荐一些 Mac 上比较好用的软件](https://juejin.im/post/6844903633218174989): **881热度**🔥
- [CSS经典面试题（史上最全，持续更新中...）](https://juejin.cn/post/6844903832552472583): **857热度**🔥

## TOP10标签

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3094d7b39e80482a9c7c508a7652195e~tplv-k3u1fbpfcp-watermark.image)
- `前端`:  20%
- `面试`:  15.86%
- `程序员`:  8.96%
- `JavaScript`:  7.58%
- `后端`:  6.2%
- `Vue.js`:  5.52%
- `掘金社区`:  4.83%
- `Android`:  4.83%
- `iOS`:  3.45%
- `前端框架`: 2.76%

# 全分类信息统计
## 八大分类活跃度排名

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f2f5601983848b78be4749506211dd1~tplv-k3u1fbpfcp-watermark.image)
全站分类活跃度顺序为：  
1. [前端](https://juejin.cn/frontend) : 13205054🔥
2. [后端](https://juejin.cn/backend) : 4524243🔥
3. [Android](https://juejin.cn/android) : 3358398🔥
4. [阅读](https://juejin.cn/article) : 2793658🔥
5. [ios](https://juejin.cn/ios) : 1716422🔥
6. [开发工具](https://juejin.cn/freebie) : 1640501🔥
7. [代码人生](https://juejin.cn/career) : 1607236🔥
8. [人工智能](https://juejin.cn/ai) : 1110507🔥
> 此活跃度单纯从阅读量计算,仅为估计值

## 全分类TOP10标签

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d2c1ad17e194d8fb8fde58f7684e4e1~tplv-k3u1fbpfcp-watermark.image)
- `前端`:  11.98%
- `Android`:  9%
- `面试`:  8.65%
- `程序员`:  8.39%
- `iOS`:  7.69%
- `Java`:  6.82%
- `JavaScript`:  6.47%
- `后端`:  5.33%
- `人工智能`:  4.72%
- `算法`:  4.37%

# 结束语

![WechatIMG11.jpeg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fa3c933d4584a3299829577dd13a8b6~tplv-k3u1fbpfcp-watermark.image)
愿所有梦见过远方的人，心有惊雷，生似静湖  
✨✨✨  
开始努力周更，带来更好更有趣的内容  
感谢阅读  
喜欢我的作品的可以点赞关注～  
我们一周后见哦～

