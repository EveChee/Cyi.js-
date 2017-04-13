# Cyi.js-

Cyi.js 是一个自由实现JS模块化的很简单的框架 
 使用Cyi你可以很容易的实现模块的编程模式  大牛略过 
 例如 Cyi的实现不依赖任何库   可以单独引用 有压缩版和未压缩版  即便他已经很小了  
 接下来你能很快掌握如何使用Cyi.js
 
   现在我们项目结构 大都是这样 
   
   xxx
   --images
   --style
   --static
   --index.html
   
   诸如此类  或者其他的模板之类什么都不重要  这不是重点
   
   重点在于你知道你的JS模块放在static文件夹下
   那么  我们在引入完Cyi.js之后  就得设置初始配置  如下：
   
   Cyi._config._path = 'static/';   对没错 这就是指定了 Cyi加载模块的文件夹
   如果没有指定 则默认为与html文件同级
   
   接下来就是 创建我们的模块  在static下创建demo.js
   xxx
   --images
   --style
   --static
     --demo.js 
   --index.html
   
   内容如下  
   Cyi.add('demo',function(...){
   //模块的名字  不是随意指定的  而是必须与文件名一致 
     你也可以在后面指定这个模块所依赖的其他模块  然后在其中使用
     但是需要注意的是  两个模块之间 不能相互引用  这样会造成死循环
     当然这点常识 大牛略过
    
  },[...])
  
  如此  demo模块我们就创建好了
  
  那么 如何来使用呢
  
  在需要使用模块的地方  我们可以这么做
  
  Cyi.use('demo',function(demo){
    在这里面  你就可以操作demo模块做你想做的任何事 
  })
  
  就是这么简单   后续还会加入更多的功能 
  顺便说一下  为了更好的兼容低版本浏览器  Array的every和indexOf两个方法 我已经做了兼容 
 
  纯粹个人兴趣  开发当中也用的顺手  欢迎各位提出宝贵的意见和BUG
  
  
