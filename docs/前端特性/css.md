---
slug: /frontEnd/css
title: css
authors:
- name: Fei Peng
  title: Front-end developer
  url: https://github.com/PENGFEI-CN
  image_url: https://github.com/PENGFEI-CN.png
  tags: [docs, front-end]
---

## 1. CSS特性
### 动画
* transition 过渡
  * transition-property 过渡属性名称
    transition-duration 持续时间
    transition-timing-function 时间曲线
    transition-delay 开始时间
* animation & @keyframe
  * animation-name 关键帧动画名称
    animation-duration 持续时间
    animation-timing-function 时间曲线
    animation-delay 开始时间
    animation-iteration-count 动画次数
    animation-direction 是否反向播放
  * keyframe定义属性变化 from to
* will-change通知浏览器元素即将发生变化，从而对动效进行优化
* animation step参数逐帧动画

### chrome字体限制
* font-size<12 chrome都会当作12px处理并显示，所以调试移动端界面时会有溢出问题

### 层叠上下文比较概念
* 同层级已z-index属性及其先后顺序决定上下关系
* 在不同层叠上下文通过“父级元素层叠级别”来决定上下关系

### 重绘和回流，性能优化
* 重绘: 不会影响布局的操作如改变元素的外观、风格等（如color相关属性）
* 回流：会影响到布局的操作如改变元素规模尺寸、布局、隐藏等
  * 除开改变元素尺寸布局外一些需要注意的会引起回流的操作
    - 改变内嵌的style属性
    - 读取offset、client、scroll等属性
    - 添加或者删除“可见”的DOM元素
* 相应的可以注意或者进行的性能优化
  - 减少对可见DOM的操作次数
    - 如使用documentFragment缓存操作待结束后append到body中
    - 或者将要操作的dom先display none隐藏掉
  - 用变量预先缓存用到的属性，从而避免在循环中读取比如offsetWidth等属性
  - 复杂动画效果,使用绝对定位让其脱离文档流。
    - 复杂动画会频繁触发回流，脱离文档流可以减少对其他元素的影响
  - 使用[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)更加精细的控制动画渲染
* transform和position的区别
  * position结合top属性的改变会导致回流，由此制作动画效果卡顿
  * 而transform 动画由GPU控制，支持硬件加速，带有transform、z-index、opacity、filter的元素或者3D、video、canvas元素都会创建独立的新的复合图层，整个复合图层动画的执行由GPU的复合器操纵（3D会在渲染前创建独立图层，2D则会在动画开始再前创建图层用于GPU渲染）

### position:fixed属性
* fixed是相对于 viewport 定位，但是也有特殊情况: 当元素祖先的 transform 属性非 none 时，相对定位的容器由视口改为该祖先

## 2. CSS效果实现
### 文本移除省略号
* 单行文本 统一css：
  ```
  overflow: hidden;//溢出隐藏
  white-space: nowrap;//空间溢出换行
  text-overflow: ellipsis;//文本移除省略号替代
  ```
* webkit内核浏览器处理
  ```
  display: -webkit-box;
  -webkit-line-clamp: 3;
  ```
* 其他内核浏览器处理方案：
    用js通过字体大小和line-height以及盒子得height限制来实现溢出添加省略号，伪类添加省略号图片或者替换掉最后几个文字为省略号等方法

### 翻转卡片动画实现
* 3D视角设置背面不可见设置动画并旋转正反面即可实现
  ```-css
  transform-style: preserve-3d; // 设置为3D
  perspective: 5000px; // 3D 视角距离
  perspective-origin: 50% 50%; // 观察者的位置
  .front {
  z-index: 3;
  transform: rotateY(0deg);
  }
  .back {
  z-index: 2;
  transform: rotateY(180deg);
  }
  ```

### 渐变色略过效果
* 按钮白光掠过效果即可用如下渐变白色光条设置translate旋转一下并通过动画实现移动即可实现
  ```-js
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .3) 50%, rgba(255, 255, 255, 0) 100%);
  ```

### text-shadow实现复制文字
* 利用阴影效果实现文字的复制
  ```-js
  text-shadow: .5em 0, 1em 0, 1.5em 0;
  ```

### grid布局
* [grid二维网格布局](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)