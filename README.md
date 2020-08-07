## 规范说明  

此为前端开发团队遵循和约定的代码书写规范，意在提高代码的规范性和可维护性。  
此规范为参考规范，不全是硬性要求，部分硬性约定见下一条[书写规范](#2)，统一团队编码规范和风格。让所有代码都是有规可循的，并且能够得到沉淀，减少重复劳动。  


# 项目命名规范


## 1 文件命名规则


文件名称统一用小写的英文字母、数字和下划线的组合,其中不得包含汉字、空格和特殊字符；命名原则的指导思想一是使得你自己和工作组的每一个成员能够方便的理解每一个文件的意义,二是当我们在文件夹中使用“按名称排例”的命令时,同一种大类的文件能够排列在一起,以便我们查找、修改、替换等操作。

## 2 项目命名

全部采用小写方式， 以下划线分隔。

例：my_project_name


## 3 目录命名

参照项目命名规则,有复数结构时，要采用复数命名法。

例：scripts, styles, images

## 4 HTML 命名

HTML的命名原则引文件统一使用index.htm index.html index.asp文件名(小写)，各子页命名的原则首先应该以栏目名的英语翻译取单一单词为名称。

例如: 关于我们 / aboutus 信息反馈 / feedback 产 品 / product

## 5 CSS 命名

参照项目命名规则；

1. 为JavaScript预留钩子的命名, 请以 js_ 起始, 比如: js_hide, js_show;
2. class与id命名: 大的框架命名比如header/footer/wrapper/left/right之类的在2中由统一命名.其他样式名称由 小写英文 &; 数字 &; _ 来组合命名, 如i_comment, fontred, width200; 避免使用中文拼音, 尽量使用简易的单词组合; 总之, 命名要语义化, 简明化。
3. 样式表中中文字体名, 请务必转码成unicode码, 以避免编码错误时乱码;
4. 样式命名如下：
	- **头:header**
	- **内容:content/container**
	- **尾:footer**
	- **导航:nav**
	- **侧栏:sidebar**
	- **栏目:column**
	- **页面外围控制整体布局宽度:wrapper**
	- **左右中:left right center**
	- **登录条:loginbar**
	- **标志:logo**
	- **广告:banner**
	- **页面主体:main**
	- **热点:hot**
	- **新闻:news**
	- **下载:download**
	- **子导航:subnav**
	- **菜单:menu**
	- **子菜单:submenu**
	- **搜索:search**
	- **友情链接:friendlink**
	- **页脚:footer**
	- **版权:copyright**
	- **滚动:scroll**
	- **内容:content**
	- **标签页:tab**
	- **文章列表:list**
	- **提示信息:msg**
	- **小技巧:tips**
	- **栏目标题:title**
	- **加入:joinus**
	- **指南:guild**
	- **服务:service**
	- **注册:regsiter**
	- **状态:status**
	- **投票:vote**
	- **合作伙伴:partner**
	- **容器: container**
	- **页头:header**
	- **内容:content/container**
	- **页面主体:main**
	- **页尾:footer**
	- **导航:nav**
	- **侧栏:sidebar**
	- **栏目:column**
	- **页面外围控制整体布局宽度:wrapper**
	- **左右中:left right center**
	- **主导航:mainbav**
	- **子导航:subnav**
	- **顶导航:topnav**
	- **边导航:sidebar**
	- **左导航:leftsidebar**
	- **右导航:rightsidebar**
	- **菜单:menu**
	- **子菜单:submenu**
	- **标题: title**
	- **摘要: summary**
	- **标志:logo**
	- **广告:banner**
	- **登陆:login**
	- **登录条:loginbar**
	- **注册:regsiter**
	- **搜索:search**
	- **功能区:shop**
	- **标题:title**
	- **加入:joinus**
	- **状态:status**
	- **按钮:btn**
	- **滚动:scroll**
	- **标签页:tab**
	- **文章列表:list**
	- **提示信息:msg**
	- **当前的: current**
	- **小技巧:tips**
	- **图标: icon**
	- **注释:note**
	- **指南:guild**
	- **服务:service**
	- **热点:hot**
	- **新闻:news**
	- **下载:download**
	- **投票:vote**
	- **合作伙伴:partner**
	- **友情链接:link**
	- **版权:copyright**


## 6 JS 命名

参照项目命名规则。

例：about_animate.js

## 7 图片命名
参照项目命名规则,有复数结构时，要采用复数命名法。

1. 图片的名称分为头尾两部分，用下划线隔开，头部分表示此图片的大类性质，例如：广告、标志、菜单、按钮等等 
2. 常规命名
	- 放置在页面顶部的广告、装饰图案等长方形的图片取名：banner
	- 标志性的图片取名为：logo
	- 在页面位置不固定并且带有链接的小图片我们取名：button
	- 在页面上某一个位置连续出现，性质相同的链接栏目的图片我们取名：menu
	- 装饰用的照片我们取名：pic
	- 不带链接表示标题的图片我们取名：title
3. 范例
	- banner_sohu.gif
	- banner_sina.gif
	- menu_aboutus.gif
	- menu_job.gif
	- title_news.gif
	- logo_police.gif


# 2 项目结构  
    --- 
     |---- index.html             入口页    
     |---- js/                    JS //具体见JS细化结构                 
     |---- css/                   CSS //具体见CSS细化结构


## 2.1 格式&编码
* 文本文件： `.xxx` UTF-8_\(无BOM\)_ 编码
* 图片文件： `.png` _(PNG-24)_ `.jpg` _(压缩率8-12)_
* 动态图片： `.gif`
* 压缩文件： `.tar.gz` `.zip`


## 3 CSS 规范

### 3.1 CSS 文件结构
    --- ../css/
     |---- css/libs/reset.css                  CSS reset文件
     |---- … … 
     |---- css/images/                         主 CSS-sprite 图片     
     |---- css/style.css                       主 CSS 样式表
     |---- … … 
     |---- css/images/xxx/sprite.png           xxx 的 CSS-sprite 图片
     |---- css/xxx-style.css                   xxx 的 样式表


### 3.2 CSS 注释格式约定  
    /*
    @name: Drop Down Menu
    @description: Style of top bar drop down menu.
    @require: reset.css
    @author: Andy Huang(andyahung@geekpark.net)
    */

_其中，@require为可选项_ 

### 3.3 CSS书写规范

#### 3.3.1 [强制] 勿格式化，保留下面这种格式，增加可读性和可维护性，后期后台程序(如：PHP/Python)会将CSS压缩成 **一行** 输出：
.box{
  /* 勿格式化，增加可读性 */
  background: none repeat scroll 0 0 transparent;
  bottom: 11px;
  position: relative;
  width: 22px;
  z-index: 33;
}

#### 3.3.2 [强制] 使用`@charset "utf-8";`声明css文件页面编码为UTF-8；防止css注释出现乱码

#### 3.3.3 [强制] 当数值为 0 - 1 之间的小数时，省略整数部分的 `0`。

示例：

```css
/* good */
panel {
    opacity: .8
}

/* bad */
panel {
    opacity: 0.8
}
```

#### 3.3.4 [强制] 长度为 `0` 时须省略单位。 (也只有长度单位可省)

示例：

```css
/* good */
body {
    padding: 0 5px;
}

/* bad */
body {
    padding: 0px 5px;
}
```
#### 3.3.5 [强制] 颜色值可以缩写时，必须使用缩写形式。

示例：

```css
/* good */
.success {
    background-color: #aca;
}

/* bad */
.success {
    background-color: #aaccaa;
}
```

#### 3.3.6 [强制] 颜色值不允许使用命名色值。

示例：

```css
/* good */
.success {
    color: #90ee90;
}

/* bad */
.success {
    color: lightgreen;
}
```
#### 3.3.7 [强制] 需要在 Windows 平台显示的中文内容，其字号应不小于 `12px`。

#### 3.3.7 [强制] `font-weight` 属性必须使用数值方式描述。

解释：

CSS 的字重分 100 – 900 共九档，但目前受字体本身质量和浏览器的限制，实际上支持 400 和 700 两档，分别等价于关键词 normal 和 bold。

浏览器本身使用一系列[启发式规则](http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight)来进行匹配，在 <700 时一般匹配字体的 Regular 字重，>=700 时匹配 Bold 字重。

但已有浏览器开始支持 =600 时匹配 Semibold 字重 (见[此表](http://justineo.github.io/slideshows/font/#/3/15))，故使用数值描述增加了灵活性，也更简短。

示例：

```css
/* good */
h1 {
    font-weight: 700;
}

/* bad */
h1 {
    font-weight: bold;
}
```

#### 3.3.8 reset.css
```
html,body,h1,h2,h3,h4,h5,h6,hr,p,iframe,dl,dt,dd,ul,ol,li,pre,form,button,input,textarea,th,td{margin:0;padding:0;}

body,th,td,button,input,select,textarea{font:14px/1.6  "Microsoft YaHei",Arial,Tahoma, Helvetica,sans-serif; -webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;resize: none;}

html,body{*position:static;height:100%;width:100%; }

html{font-family: sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}

ul,ol,li,dl{list-style-type:none;}

label{cursor:pointer;}

fieldset,img {  border:0;}

button,h1,h2,h3,h4,h5,h6,input,select,textarea{font-size:100%;}

a{text-decoration:none;cursor:pointer;}
a:hover,a:active,a:focus{text-decoration:none;outline:none;}

img{border:0;vertical-align:middle;}

i{ display: inline-block; font-style: normal; } 

.fl{ float: left;}

.fr{ float: right;}

.clear{zoom:1;}

.clear:after{content:'';display:block;clear:both;}

i,s,b,em{ font-weight:normal;font-style:normal; }
   
textarea.resize{resize:both !important;}

input { border-radius: 0;}

input,button,textarea,select,optgroup,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;}

input,button{overflow: visible;vertical-align:middle;outline:none;}

button,input[type="button"], input[type="submit"] {line-height:normal !important;cursor:pointer;}

textarea,
input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="text"]{-webkit-appearance: none;}

button::-moz-focus-inner,
input::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner { border: 0; padding: 0;}

input[type=tel],
input[type=text] {-webkit-tap-highlight-color: rgba(0,0,0,0);}

input[type=button],
input[type=reset],
input[type=submit] {-webkit-appearance: none; border-radius: 0;}

/* 去掉number输入框右边点击上下的小三角 */
input::-webkit-inner-spin-button{ -webkit-appearance: none; } 
input::-webkit-outer-spin-button{ -webkit-appearance: none; }

/*placeholder 文字颜色设置*/
input::-moz-placeholder,
input::-ms-input-placeholder,
input::-webkit-input-placeholder,
textarea::-moz-placeholder,
textarea::-ms-input-placeholder,
textarea::-webkit-input-placeholder { color: #999; }

/* Chrome浏览器会在输入控制聚集的时候添加一个蓝色的outline*/
input:focus, textarea:focus, select:focus{ outline: none; }

/* 去掉select的默认样式 */ 
select{ -webkit-appearance: none; }
 
/* 如果有输入内容IE会给输入框右边加一个大大的X */ 
input::-ms-clear{ display: none; width: 0; height: 0; } 
```


## 4 JS规范

### 4.1 JS 文件结构
    ---/js/
    |---- /libs/plugin-1/       使用到的js插件1  
    |---- /libs/plugin-2/       使用到的js插件2  
    |---- /libs/plugin-3/       使用到的js插件3  
    |---- script.js             单独书写的js  
    |---- plugins.js            调用的plugins汇总  
    |---- jquery-1.9.x.min.js   调用jq库文件  
    

### 4.2 JS 书写规范

#### 4.2.1 [强制] 必须独占一行。// 后跟一个空格，缩进与下一行被注释说明的代码一致。

#### 4.2.2 强制] 变量 使用 Camel命名法。
示例：

```javascript
var loadingModules = {};
```

##### 4.2.3 [强制] `常量` 使用 `全部字母大写，单词间下划线分隔` 的命名方式。

示例：

```javascript
var HTML_ENTITY = {};
```

##### 4.2.4 [强制] `函数` 使用 `Camel命名法`。

示例：

```javascript
function stringFormat(source) {
}
```

##### 4.2.5 [强制] 变量在使用前必须通过 `var` 定义。

解释：

不通过 var 定义变量将导致变量污染全局环境。


示例：

```javascript
// good
var name = 'MyName';

// bad
name = 'MyName';
```
##### 4.2.6 [强制] 每个 `var` 只能声明一个变量。

解释：

一个 var 声明多个变量，容易导致较长的行长度，并且在修改时容易造成逗号和分号的混淆。


示例：

```javascript
// good
var hangModules = [];
var missModules = [];
var visited = {};

// bad
var hangModules = [],
    missModules = [],
    visited = {};
```    

##### 4.2.7 [强制] 在 Equality Expression 中使用类型严格的 `===`。仅当判断 null 或 undefined 时，允许使用 `== null`。

解释：

使用 === 可以避免等于判断中隐式的类型转换。


示例：

```javascript
// good
if (age === 30) {
    // ......
}

// bad
if (age == 30) {
    // ......
}
```

#### 3.4.1 类型检测


##### [建议] 类型检测优先使用 `typeof`。对象类型检测使用 `instanceof`。`null` 或 `undefined` 的检测使用 `== null`。

示例：

```javascript
// string
typeof variable === 'string'

// number
typeof variable === 'number'

// boolean
typeof variable === 'boolean'

// Function
typeof variable === 'function'

// Object
typeof variable === 'object'

// RegExp
variable instanceof RegExp

// Array
variable instanceof Array

// null
variable === null

// null or undefined
variable == null

// undefined
typeof variable === 'undefined'
```


#### 3.4.2 类型转换


##### [建议] 转换成 `string` 时，使用 `+ ''`。

示例：

```javascript
// good
num + '';

// bad
new String(num);
num.toString();
String(num);
```

##### [建议] 转换成 `number` 时，通常使用 `+`。

示例：

```javascript
// good
+str;

// bad
Number(str);
```

##### [建议] `string` 转换成 `number`，要转换的字符串结尾包含非数字并期望忽略时，使用 `parseInt`。

示例：

```javascript
var width = '200px';
parseInt(width, 10);
```

##### [强制] 使用 `parseInt` 时，必须指定进制。

示例：

```javascript
// good
parseInt(str, 10);

// bad
parseInt(str);
```

##### [建议] 转换成 `boolean` 时，使用 `!!`。

示例：

```javascript
var num = 3.14;
!!num;
```

##### [建议] `number` 去除小数点，使用 `Math.floor / Math.round / Math.ceil`，不使用 `parseInt`。

示例：

```javascript
// good
var num = 3.14;
Math.ceil(num);

// bad
var num = 3.14;
parseInt(num, 10);
```

### 3.4.3 对象


##### [强制] 使用对象字面量 `{}` 创建新 `Object`。

示例： 

```javascript
// good
var obj = {};

// bad
var obj = new Object();
```

##### [强制] 对象创建时，如果一个对象的所有 `属性` 均可以不添加引号，则所有 `属性` 不得添加引号。

示例： 

```javascript
var info = {
    name: 'someone',
    age: 28
};
```

##### [强制] 对象创建时，如果任何一个 `属性` 需要添加引号，则所有 `属性` 必须添加 `'`。

解释：

如果属性不符合 Identifier 和 NumberLiteral 的形式，就需要以 StringLiteral 的形式提供。


示例： 

```javascript
// good
var info = {
    'name': 'someone',
    'age': 28,
    'more-info': '...'
};

// bad
var info = {
    name: 'someone',
    age: 28,
    'more-info': '...'
};
```

##### [建议] `for in` 遍历对象时, 使用 `hasOwnProperty` 过滤掉原型中的属性。

示例：

```javascript
var newInfo = {};
for (var key in info) {
    if (info.hasOwnProperty(key)) {
        newInfo[key] = info[key];
    }
}
```
### 3.4.4 数组


##### [强制] 使用数组字面量 `[]` 创建新数组，除非想要创建的是指定长度的数组。

示例：

```javascript
// good
var arr = [];

// bad
var arr = new Array();
```

##### [强制] 遍历数组不使用 `for in`。

解释：

数组对象可能存在数字以外的属性, 这种情况下 for in 不会得到正确结果.

示例：

```javascript
var arr = ['a', 'b', 'c'];
arr.other = 'other things'; // 这里仅作演示, 实际中应使用Object类型

// 正确的遍历方式
for (var i = 0, len = arr.length; i < len; i++) {
    console.log(i);
}

// 错误的遍历方式
for (i in arr) {
    console.log(i);
}
```

##### [建议] 不因为性能的原因自己实现数组排序功能，尽量使用数组的 `sort` 方法。

解释：

自己实现的常规排序算法，在性能上并不优于数组默认的 sort 方法。以下两种场景可以自己实现排序：

1. 需要稳定的排序算法，达到严格一致的排序结果。
2. 数据特点鲜明，适合使用桶排。

##### [建议] 清空数组使用 `.length = 0`。    
    
#### 3.4.5 DOM 操作


##### [建议] 操作 `DOM` 时，尽量减少页面 `reflow`。

解释：

页面 reflow 是非常耗时的行为，非常容易导致性能瓶颈。下面一些场景会触发浏览器的reflow：

- DOM元素的添加、修改（内容）、删除。
- 应用新的样式或者修改任何影响元素布局的属性。
- Resize浏览器窗口、滚动页面。
- 读取元素的某些属性（offsetLeft、offsetTop、offsetHeight、offsetWidth、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle()、currentStyle(in IE)) 。


##### [建议] 尽量减少 `DOM` 操作。

解释：

DOM 操作也是非常耗时的一种操作，减少 DOM 操作有助于提高性能。举一个简单的例子，构建一个列表。我们可以用两种方式：

1. 在循环体中 createElement 并 append 到父元素中。
2. 在循环体中拼接 HTML 字符串，循环结束后写父元素的 innerHTML。

第一种方法看起来比较标准，但是每次循环都会对 DOM 进行操作，性能极低。在这里推荐使用第二种方法。    
    
    
  
##### 2.7.1.1 前端相关工具(Mac)

* 编辑器：[Sublime Text 2] / [TextMate 2] / [Vim] / [Intellij IDEA]
* 命令行：[iTerm2]
* 浏览器调试环境：[Chrome] / [Firefox] + [Firebug]
* 移动设备调试环境：[Mozilla Fennec]
* 兼容性测试：[VirtualBox] + Win XP（IE 8）
* 版本控制工具：[GitHub for Mac] / [Versions] / [SourceTree]
* FTP工具：[Filezilla] / [ForkLift]
* HTTP抓包及Post/Get模拟：[Charles]
* PHP集成环境：[XAMPP for Mac] / [MAMP]
* SQL数据库管理：[Sequel Pro]
* 标注工具：[Mark Man] / [xScope]
* 取色拾色器： [Frank DeLoupe] / [Sip] / [Snip] / [xScope]
* MarkDown编辑器：[Mou]
* 浏览器免刷新开发环境：[LiveReLoad] / [CodeKit]
* CSS Sprite切图工具：[SpriteRight]
* Less -> CSS 编译：[CodeKit] / [LiveReLoad] / [Less]
* 配色方案工具：[ColorSchemer Studio]
* 多浏览器Cookie管理：[Cookie]
* 图片素材收集：[Sparkbox] / [Pixa]

##### 2.7.1.2 其他效率工具

* 快速启动及切换app：[Alfred]
* 剪切板历史记录：[Alfred]*(Fretures -> Clipboard)*
* 笔记：[Evernote]
* 轻量级GTD：[Clear]
* 压缩解压：[The Unarchiver] / [Keka] / [iPack]
* 语言文档和快捷词扩展：[Dash]
* 时间中断提醒：[BreakTime]

##### 2.7.2.1 前端相关工具(Windows)

* 编辑器：[Sublime Text 2] / [Vim] / [Intellij IDEA]
* 命令行：[Putty]
* 浏览器调试环境：[Chrome] / [Firefox]
* 移动设备调试环境：[Chrome Remote USB Debugging]
* 版本控制：[Subversion] / [Github for Windows]
* FTP工具：[Filezilla]
* 抓包工具：[Fiddler2]
* MarkDown：[MarkdownPad]
* 浏览器免刷新开发环境：[LiveReLoad] / [F5]
* Less -> CSS编译：[less.org]*(nodejs环境下编译)*
* Haml -> Html编译：[haml.info]*(Gem下编译)*
* 响应式设计查看工具：[Firefox Responsive Design View]

##### 2.7.2.2 其他效率工具(Windows)

* 笔记：[Evernote]
* 压缩解压：[7z]

#### 2.7.3 其他收集
* Firefox 扩展收藏集 -> [Firefox Add-ons collections]
* Chrome 扩展 -> 待添加
* Sublime Text 2 技巧  -> [ST2 资源技巧汇总]

### 2.8 相关技巧
[Wiki page index]

* [各浏览器的缓存清除方法]  
* [测试技巧Gmail 添加词缀 .+ 获得多个邮件的方法]  
* [关于Mac Win Linux跨系统传文件，文件名乱码的解决方案]  
* [技术团队"路由代理"解决方案和使用须知]



[Sublime Text 2]:http://www.sublimetext.com/2
[TextMate 2]:https://github.com/textmate/textmate
[Intellij IDEA]:http://www.jetbrains.com/idea/
[Vim]:http://macvim.org/
[Chrome]:http://www.google.com/chrome
[Firefox]:http://www.mozilla.org/
[Firebug]:http://getfirebug.com/
[VirtualBox]:https://www.virtualbox.org/
[Versions]:http://versionsapp.com/
[GitHub for Mac]:http://mac.github.com/
[SourceTree]:http://www.sourcetreeapp.com/
[Filezilla]:http://filezilla-project.org/
[ForkLift]:http://itunes.apple.com/us/app/forklift/id412448059?mt=12
[Charles]:http://www.charlesproxy.com/
[XAMPP for Mac]:http://www.apachefriends.org/en/xampp-macosx.html
[MAMP]:http://http://mamp.info/
[Mark Man]:http://www.getmarkman.com/
[xScope]:http://itunes.apple.com/us/app/xscope/id447661441?mt=12
[Sip]:http://itunes.apple.com/app/sip/id507257563?mt=12
[Snip]:http://itunes.apple.com/us/app/snip/id512505421?mt=12
[Mou]:http://mouapp.com/
[LiveReLoad]:http://http://livereload.com/
[Cookie]:http://itunes.apple.com/us/app/cookie/id415585910?mt=12
[ColorSchemer Studio]:http://itunes.apple.com/us/app/colorschemer-studio/id417896628?mt=12
[Less]:http://incident57.com/less/
[CodeKit]: http://incident57.com/codekit/
[SpriteRight]:http://itunes.apple.com/us/app/spriteright/id488584662?mt=12
[iTerm2]: http://www.iterm2.com/
[Mozilla Fennec]: http://www.mozilla.org/projects/fennec
[Sequel Pro]: http://www.sequelpro.com/
[Sparkbox]: http://seesparkbox.com/
[Pixa]: http://www.pixa-app.com/
[Alfred]: http://www.alfredapp.com/
[Evernote]: http://www.evernote.com/
[The Unarchiver]: https://itunes.apple.com/hk/app/the-unarchiver/id425424353?mt=12
[Keka]: https://itunes.apple.com/us/app/keka/id470158793?mt=12
[iPack]: https://itunes.apple.com/us/app/ipack/id433386677?mt=12
[Frank DeLoupe]: http://www.jumpzero.com/frank/
[Dash]: http://kapeli.com/
[BreakTime]: http://itunes.apple.com/cn/app/breaktime/id427475982?mt=12
[Clear]: http://itunes.apple.com/cn/app/breaktime/id427475982?mt=12

[Chrome Remote USB Debugging]: https://developers.google.com/chrome/mobile/docs/debugging
[Fiddler2]: http://www.fiddler2.com/fiddler2/
[Subversion]: http://subversion.apache.org/
[Putty]: http://www.putty.org/
[MarkdownPad]: http://markdownpad.com/
[F5]: http://www.getf5.com/
[less.org]: http://lesscss.org/
[haml.info]: http://haml.info/
[Github for Windows]: http://windows.github.com/
[Firefox Responsive Design View]: https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_View/
[7z]: http://www.7-zip.org/

[temp.im]: http://temp.im/ "Placehold image"
[placehold.us]: http://placehold.us/

[Firefox Add-ons collections]: https://addons.mozilla.org/en-US/firefox/collections/hzlzh/hzlzh/
[ST2 资源技巧汇总]: http://www.douban.com/group/topic/28027863/
[Wiki page index]: https://github.com/GeekPark/Doc/wiki/_pages

[12 Killer Tips and Tricks for Building HTML Email]: http://www.queness.com/post/8784/12-killer-tips-and-tricks-for-building-html-email
[Coding HTML Newsletters (EDM)]: http://www.web-ed.com.au/2011/05/coding-html-newsletters-edms-quick-guide/

[MIT License]: http://en.wikipedia.org/wiki/MIT_License


