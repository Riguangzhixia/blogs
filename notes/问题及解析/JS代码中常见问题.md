## 代码常见问题及知识点

1. this指向得改变，以及箭头函数和合理使用。[JavaScript 的 this 指向问题深度解析]("https://segmentfault.com/a/1190000008400124")

   * this一般指向得是函数运行时所在的环境对象，所以用箭头函数的时候，this有时候会获取不到页面中触发事件的dom。如下输出得就会是undefined获取不到dom内容。setTimeout中得this会指向全局对象window，也可以用箭头函数避免。
   * 在箭头函数出现之前，每个新定义的函数都有它自己的 this值（在构造函数的情况下是一个新对象，在严格模式的函数调用中为 undefined，如果该函数被作为“对象方法”调用则为基础对象等）。

   ```-js
   <div class="test">
       wdwdaawd
   </div>
   <script type="text/javascript">
   $(function () {
       $(".test").on("click",()=>{
       console.log($(this).html());
       })
   })
   </script>
   ```

2. 变量定义

   * var变量声明会提前是，而let不会，const必须要初始化。
   * 尽量不使用var，变量定义不加前缀的话就会变成全局变量。
   * const定义常量，但是定义引用类型例如对象或者数组时可以改变里面内容。

   ```-JS
   const car = {type:"Fiat", model:"500", color:"white"};
   car.color = "red";
   ```

3. 类型转换注意

    * 如果parseInt没有提供第二个参数，则前缀为 ’0x’ 的字符串会被当作十六进制，前缀为 ’0′ 的字符串被当作八进制。所有其它字符串都被当作是十进制的。

4. eval使用得安全问题

   * [关于eval的劫持操作]("http://www.vuln.cn/8007")

5. [js的运行机制](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)

   * 同步任务-主线程，异步任务-任务队列，主线程空闲时从任务队列中读取事件，event loop;简单例子如下：

    ```-JS
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000);
    }
    //输出为等待1s之后同时输出3 3 3，当然若采用let则会同时输出0 1 2
    ```

6. 模板字符串做参数

   * 第一个参数的值始终是字符串值的数组。 其余参数获取传递到模板字符串中的表达式的值

    ```-JS
    function getPersonInfo(one, two, three) {
      console.log(one);
      console.log(two);
      console.log(three);
    }
    const person = "Lydia";
    const age = 21;
    getPersonInfo`${person} is ${age} years old`;
     //输出：
     //["", "is", "years old"]
     //Lydia
     //21
    ```

7. 引用类型比较

   * 和原始类型不同，引用类型比较的是引用对象是否相同。

    ```-JS
    function age(){
        if(age === {age:18}){
            console.log('Y1');
        } else if(age == {age:18}){
            console.log('Y2');
        } else {
            console.log('N');
        }
    }
    age({age:18});
    //输出N
    ```

8. 扩展运算符

   * 字符串是可迭代的。 扩展运算符将迭代的每个字符映射到一个元素。
   * 扩展运算符作为参数，返回一个带参数的数组

    ```-JS
    function getAge(...args) {
      console.log(args);
      console.log(typeof args);
    }
    getAge(21,11);
    //[21,11]
    //object
    ```

    ```-JS
    console.log([..."wdnmd"])
    //['w','d','n','m','d']
    ```
    
    [...运算符解析](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    * 1.做为剩余参数，类似于apply方法

    ```-javascript
    function test(length, ...numbers) {
        console.log(Object.prototype.toString.call(numbers))
        console.log(numbers)
    }
    test(4,1,2,3,4)
    test.apply(null, [4,1,2,3,4])
    ```
    输出结果都是
    ```
    [object Array]
    [1, 2, 3, 4]
    ```
    
    * 2.spread展开(浅拷贝)，类似于数组方法slice()和对象方法Object.assign()
    ```-javascript
    let obj = {a: 1, b: [1,2]}
    let copy = {...obj}
    obj.a = 2
    obj.b[0] = 2
    console.log(obj)
    console.log(copy)
    ```
    输出结果: 复制后a未被修改，而数组属性b仍收到影响
    ```
    {a: 2, b: Array(2)}
    a: 2
    b: (2) [2, 2]
    
    {a: 1, b: Array(2)}
    a: 1
    b: (2) [2, 2]
    ```

9. Set和Map结构

   * Set的结构：键集合，不重复
      WeakSet: 因为不算引用考虑垃圾回收的不确定性所以 WeakSet 不可遍历。（WeakSet 的一个用处，是储存 DOM 节点）
          1. 成员只能是对象
          2. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
   * Map结构：键值对集合，比对象更自由

10. 性能瓶颈：[参考](https://juejin.im/post/5c6e064c51882562eb50fc18)

    * 减少对dom的操作，经常使用的dom变量预先使用变量存储
    * 利用事件冒泡对事件父级元素进行事件委托，减少事件的绑定和遍历dom元素时重绘dom消耗的时间
    * parseInt并不是很好的选择，例子[性能](https://jsperf.com/coercion-vs-casting/3)
    * 拼接字符串尽量不使用+，es6可以用字符串模板

11. 深拷贝实现 递归赋值

12. 对象属性

    * Object.getOwnPropertyDescriptor(obj，prop) 返回指定对象上一个自有属性对应的属性描述
    * Object.getOwnPropertyDescriptors(obj)
    * Object.defineProperties(obj,{属性们}) 修改指定对象上一个自有属性对应的属性描述
    * Object.create(原始对象)
    * Object.keys(所有属性，仅自身)
    * for in (所有属性，包括原型链)
    * 
13. 监听对象或者数组得变化: [参考1](https://www.cnblogs.com/yayaxuping/p/10951738.html),[参考2](https://www.jb51.net/article/162584.htm)
14. JS基本类型的临时包装和基本类型的方法继承
    * 基本包装类型的实例只会存在于一行代码执行的一瞬间，然后就会被立即销毁
    ```javascript
    let str = 'test';
    console.log(str instanceof String) // false
    console.log(String.prototype.isPrototypeOf(str)) // false
    console.log(str.__proto__ === String.prototype) // true
    ```
15. History.replaceState()干掉带token得链接
16. 闭包中this的指向： 指向window/null
17. 多维数组的toString方法
    ```-JS
    [1,[2,[3,4,[4]]]].toString()
    //结果是"1,2,3,4"
    ```

18. JS中函数内部参数详解
    按值传递，参数作为临时变量在函数作用域内
