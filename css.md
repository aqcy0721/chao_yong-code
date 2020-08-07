
# CSS编码规范


## 1 代码风格

### 1.1 注释

### [强制] 注释统一用`'/* */'`（scss中也不要用`'//'`）

```css
/* Modal header */
.comment {
    line-height: 1.5;
}
```

### 1.2 文件

### [强制] 使用`@charset "utf-8";`声明css文件页面编码为UTF-8；防止css注释出现乱码

#### [建议] `CSS` 文件使用无 `BOM` 的 `UTF-8` 编码。


### 1.3 缩进


#### [强制] 使用 `4` 个空格做为一个缩进层级，不允许使用 `2` 个空格 或 `tab` 字符。


示例：

```css
.selector {
    margin: 0;
    padding: 0;
}
```

### 1.4 空格


#### [强制] `选择器` 与 `{` 之间必须包含空格。

示例：

```css
.selector {
}
```

#### [强制] `属性名` 与之后的 `:` 之间不允许包含空格， `:` 与 `属性值` 之间必须包含空格。

示例：

```css
margin: 0;
```


### 1.5 选择器


#### [强制] `>`、`+`、`~` 选择器的两边各保留一个空格。

示例：

```css
main > nav {
    padding: 10px;
}

label + input {
    margin-left: 5px;
}

input:checked ~ button {
    background-color: #69C;
}

/* bad */
main>nav {
    padding: 10px;
}

label+input {
    margin-left: 5px;
}

input:checked~button {
    background-color: #69C;
}
```

#### [强制] 属性选择器中的值必须用双引号包围。

解释：

不允许使用单引号，不允许不使用引号。


示例：

```css
/* good */
article[character="juliet"] {
    voice-family: "Vivien Leigh", victoria, female
}

/* bad */
article[character='juliet'] {
    voice-family: "Vivien Leigh", victoria, female
}
```

### 1.6 属性


#### [强制] 属性定义必须另起一行。

示例：

```css
/* good */
.selector {
    margin: 0;
    padding: 0;
}

/* bad */
.selector { margin: 0; padding: 0; }
```



## 2 通用


### 2.1 属性缩写


#### [建议] 在可以使用缩写的情况下，尽量使用属性缩写。

示例：

```css
/* good */
.post {
    font: 12px/1.5 arial, sans-serif;
}

/* bad */
.post {
    font-family: arial, sans-serif;
    font-size: 12px;
    line-height: 1.5;
}
```




## 3 值与单位


### 3.1 文本


#### [强制] 文本内容必须用双引号包围。

解释：

文本类型的内容可能在选择器、属性值等内容中。


示例：

```css
/* good */
html[lang|="zh"] q:before {
    font-family: "Microsoft YaHei", sans-serif;
    content: "“";
}

html[lang|="zh"] q:after {
    font-family: "Microsoft YaHei", sans-serif;
    content: "”";
}

/* bad */
html[lang|=zh] q:before {
    font-family: 'Microsoft YaHei', sans-serif;
    content: '“';
}

html[lang|=zh] q:after {
    font-family: "Microsoft YaHei", sans-serif;
    content: "”";
}
```

### 3.2 数值


#### [强制] 当数值为 0 - 1 之间的小数时，省略整数部分的 `0`。

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

### 3.3 url()


#### [强制] `url()` 函数中的路径不加引号。

示例：

```css
body {
    background: url(bg.png);
}
```


#### [建议] `url()` 函数中的绝对路径可省去协议名。


示例：

```css
body {
    background: url(//baidu.com/img/bg.png) no-repeat 0 0;
}
```


### 3.4 长度


#### [强制] 长度为 `0` 时须省略单位。 (也只有长度单位可省)

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


### 3.5 颜色



#### [强制] 颜色值可以缩写时，必须使用缩写形式。

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

#### [强制] 颜色值不允许使用命名色值。

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

#### [建议] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。


示例：

```css
/* good */
.success {
    background-color: #aca;
    color: #90ee90;
}

/* good */
.success {
    background-color: #ACA;
    color: #90EE90;
}

/* bad */
.success {
    background-color: #ACA;
    color: #90ee90;
}
```


### 3.6 2D 位置


#### [强制] 必须同时给出水平和垂直方向的位置。

解释：

2D 位置初始值为 `0% 0%`，但在只有一个方向的值时，另一个方向的值会被解析为 center。为避免理解上的困扰，应同时给出两个方向的值。[background-position属性值的定义](http://www.w3.org/TR/CSS21/colors.html#propdef-background-position)


示例：

```css
/* good */
body {
    background-position: center top; /* 50% 0% */
}

/* bad */
body {
    background-position: top; /* 50% 0% */
}
```





## 4 文本编排


### 4.1 字号


#### [强制] 需要在 Windows 平台显示的中文内容，其字号应不小于 `12px`。

解释：

由于 Windows 的字体渲染机制，小于 12px 的文字显示效果极差、难以辨认。


### 4.2 字重


#### [强制] `font-weight` 属性必须使用数值方式描述。

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

### 4.3 行高


#### [建议] `line-height` 在定义文本段落时，应使用数值。

解释：

将 line-height 设置为数值，浏览器会基于当前元素设置的 font-size 进行再次计算。在不同字号的文本段落组合中，能达到较为舒适的行间间隔效果，避免在每个设置了 font-size 都需要设置 line-height。

当 line-height 用于控制垂直居中时，还是应该设置成与容器高度一致。


示例：

```css
.container {
    line-height: 1.5;
}
```



## 5 变换与动画



#### [强制] 使用 `transition` 时应指定 `transition-property`。

示例：

```css
/* good */
.box {
    transition: color 1s, border-color 1s;
}

/* bad */
.box {
    transition: all 1s;
}
```


## 6 兼容性


### 6.1 属性前缀


#### [强制] 带私有前缀的属性由长到短排列，按冒号位置对齐。

解释：

标准属性放在最后，按冒号对齐方便阅读，也便于在编辑器内进行多行编辑。


示例：

```css
.box {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
```


### 6.2 Hack


#### [建议] 需要添加 `hack` 时应尽可能考虑是否可以采用其他方式解决。

解释：

如果能通过合理的 HTML 结构或使用其他的 CSS 定义达到理想的样式，则不应该使用 hack 手段解决问题。通常 hack 会导致维护成本的增加。

#### [建议] 尽量使用 `选择器 hack` 处理兼容性，而非 `属性 hack`。

解释：

尽量使用符合 CSS 语法的 selector hack，可以避免一些第三方库无法识别 hack 语法的问题。


示例：

```css
/* IE 7 */
*:first-child + html #header {
    margin-top: 3px;
    padding: 5px;
}

/* IE 6 */
* html #header {
    margin-top: 5px;
    padding: 4px;
}
```


#### PC端重置CSS
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


