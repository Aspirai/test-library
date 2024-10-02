**1\. 直接修改svg文件中fill属性**

**2\. 使用css修改svg图标的fill属性**

仅对内联svg有效

**3\. 使用currentColor**

只对html中内联的svg有效，包括symbol和use，对background中svg无效

修改svg文件中的fill属性为currentColor，在父级使用color改颜色，或者 使用 css样式 svg {fill:red} 修改svg图标颜色

**4\. 使用css变量**

同样只对内联的svg有效

在svg文件，修改fill和stroke为css变量，设置标签style中的css变量即可

**5\. 使用mask**

对内联和背景图标均有效，推荐

.icon {
    color: red;
    background-color: currentColor;
    mask-image: url(icon.svg);
}

**6\. 使用drop-shadow, 多重彩色影分身**

移动图标位置，使得影分身覆盖原图标位置，只是覆盖位置，原图标也同时移走了，所以未覆盖原图标。

父元素overflow:hidden, 就只显示影分身了。

在老版chrome里，父元素overflow:hidden，影分身会同时隐藏，使用 透明border占据位置，不隐藏，但是不可见，这样可解决

在新版chrome里，父元素overflow:hidden，影分身不会隐藏，透明border已经不需要了

但是在safari里，父元素overflow:hidden，影分身还是会隐藏

<i class="icon"><i class="icon icon-del"></i></i>

.icon > .icon {
    position: relative;
    left: -20px;
    border-right: 20px solid transparent;
    filter: drop-shadow(red 20px 0px);
}

或者 (用绝对定位麻烦, img标签不妥)

<div style\="position: relative; width: 20px; height: 20px; overflow: hidden;"\>
    <img src\="icon.svg" style\="position:absolute; left: -20px; filter: drop-shadow(20px 0 #32bb65)"/>
</div\>

**7\. 使用滤镜**

简单的纯黑或纯白图标

/\* 图标变黑色 \*/
.black {
    filter: brightness(0);
}
/\* 图标变白色 \*/
.white {
    filter: brightness(100);
}

其他颜色的图标也可以使用多个滤镜进行模拟，具体可参考  [图标变色为任意指定颜色](https://www.zhangxinxu.com/wordpress/2018/11/css-change-icon-color/)

**8\. svg多色图标**

使用css变量进行穿透，可以穿透use标签的shadow DOM

<svg xmlns\="http://www.w3.org/2000/svg" style\="display: none"\>
    <symbol id\="my-first-icon" viewBox\="0 0 20 20"\>
        <title\>my-first-icon</title\>
        <path fill\="var(--color-1)" d\="..." />
        <path fill\="var(--color-2)" d\="..." />
        <path fill\="var(--color-3)" d\="..." />
    </symbol\>
</svg\>

<svg class\="icon icon-colors"\>
    <use xlink:href\="#my-first-icon" />
</svg\>
.icon-colors {
    --color-1: #c13127;
    --color-2: #ef5b49;
    --color-3: #cacaea;
}

**9\. svg使用渐变色**

只能使用svg定义的渐变色对象，不能使用css的渐变属性，写起来比较冗长，支持css变量

<svg width\="0" height\="0"\>
    <defs\>
        <linearGradient id\="gradient1"\>
            <stop offset\="0%" stop-color\="var(--color1)" />
            <stop offset\="50%" stop-color\="var(--color2)" />
            <stop offset\="100%" stop-color\="var(--color3)" />
        </linearGradient\>
    </defs\>
</svg\>

#gradient1 {
    --color1: #a770ef;
    --color2: #cf8bf3;
    --color3: #fdb99b;
}

svg { fill: url(#gradient1); }

**10\. svg图标变色使用background-blend-mode**

详细 [mix-blend-mode和background-blend-mode应用场景](https://www.cnblogs.com/mengff/p/17492081.html)

**11. svg图标转义**

svg图标转换为base64，体积会比较大，直接在DataURI中使用反而提交比较小，而且还能实时的修改颜色。  
但是不能内联在DataURI中，需要进行转义，解决方法如下

function encodeSvg(svg: string) {
  return svg.replace('<svg', (~svg.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"'))
    .replace(/"/g, '\\'')
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
}

const dataUri \= \`data:image/svg+xml;utf8,${encodeSvg(svg)}\`

**12. svg图标支持缩放和变色的方案**

// 如果 SVG 的图标包含 \`currentColor\` 的值
// 它大概率是一个单色图标
const mode = svg.includes('currentColor')
  ? 'mask'
  : 'background-img'

const uri \= \`url("data:image/svg+xml;utf8,${encodeSvg(svg)}")\`

// 单色图标 父元素color控制currentColor改变图标颜色，父元素font-size改变em大小
if (mode === 'mask') {
  return {
    'mask': \`${uri} no-repeat center/100% 100%\`,
    'background-color': 'currentColor',
    'height': '1em',
    'width': '1em',
  }
}
// 彩色图标 直接使用背景图，彩色图标无需改变颜色，只需改变大小
else {
    return {
        'background': \`#000 ${uri} no-repeat center/100% 100%\`,
        'height': '1em',
        'width': '1em',
    }
}

参考：[PNG格式小图标的CSS任意颜色赋色技术](https://www.zhangxinxu.com/wordpress/2016/06/png-icon-change-color-by-css/)  
         [svg图片改色都不会](https://juejin.cn/post/7120895248665935902)  
         [聊聊纯 CSS 图标](https://zhuanlan.zhihu.com/p/430423521)

本文转自 <https://www.cnblogs.com/mengff/p/17490650.html>，如有侵权，请联系删除。