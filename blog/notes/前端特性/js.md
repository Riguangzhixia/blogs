---
slug: frontEnd/js
title: js!🎈
authors:
- name: Fei Peng
  title: Front-end developer
  url: https://github.com/PENGFEI-CN
  image_url: https://github.com/PENGFEI-CN.png
  tags: [blogs, front-end]
---

## 事件循环机制
所有任务都在主线程上执行，即执行栈(Execution Context Stack)，而JS执行任务的队列可以划分为微任务（ES6中称作PromiseJobs）和宏任务（ES6中称作ScriptJobs）队列，执行顺序可以分为三步

1. 主线程执行所有的初始化同步任务代码
2. 读取并执行微任务队列的全部任务
3. 读取并执行所有的宏任务

- 具体执行顺序可以看作 主程序代码—>process.nextTick—>Promise.then|async await后的语句——>setTimeout|setInterval——>setImmediate——> I/O——>UI rendering
   
    ```javascript
    // 以v8引擎举例
    setImmediate(function() {
        console.log(1);
    });
    
    setTimeout(function() {
        console.log(2);
    }, 0);
    
    new Promise(function(resolve) {
        console.log(3);
        resolve();
        console.log(4);
    }).then(function() {
        console.log(5);
    });
    
    console.log(6);
    
    process.nextTick(function() {
        console.log(7);
    });
    
    async function getData(){
        console.log(8)
    }
    
    async function readData() {
        console.log(9);
        await getData();
        console.log(10);
    }
    
    readData();
    ```
    输出结果为
    ```
    3
    4
    6
    9
    8 // 上面都为主程序执行的同步代码的输出
    7 // process.nextTick
    5 // promise.then
    10 // await后
    1 // setImmediate
    2 // setTimeout
    ```

## 原型链
- 简单来说就是构造函数会有一个prototype属性指向原型对象，而由此函数创建出的实例会有一个隐式的__proto__属性同样指向原型对象，且原型对象中默认带有 constructor 属性指向的是构造函数。
- 当访问实例上没有的属性及方法时，会沿着原型链一直向上遍历原型对象上是否有对应的属性和方法。
- 原型链的顶端是Object的原型对象
- instanceof、isPrototypeOf可以用来检测原型链的继承关系
    ```javascript
    function Person (name) {
        this.name = name;
        this.sayName = function () {
            console.log(this.name)
        }
    }
    
    function Child() {}
    
    let personB = new Person("Banana")
    
    Child.prototype = personB;
    
    let child = new Child()
    
    child.sayName()
    
    let person = new Person("Apple")
    
    person.sayName()
    
    console.log(child.__proto__ === Child.prototype) // 实例的__proto__指向原型对象，prototype一样
    console.log(Child.prototype === personB) // 指向原型对象，
    console.log(Child.prototype.constructor === Person) // constructor指向原型对象new Person("Banana")对应的构造函数也就是Person
    
    console.log(child instanceof Person)
    console.log(child instanceof Object)  // instanceof检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
    
    console.log(Person.prototype.isPrototypeOf(child)) // isPrototypeOf检测一个对象是否存在于另一个对象的原型链
    ```
  
## [关于ES6和CommonJS模块化问题](https://zhuanlan.zhihu.com/p/422704350)
1. * CommonJS 模块是顺序执行的，遇到 require 时，加载并执行对应模块的代码，然后再回来执行当前模块的代码。
   * 在循环引用时，在模块执行前就会创建好对应的模块对象并进行缓存，尽管是一个空对象，但是一般不会导致JS报错。
2. * ES6 模块借助 JS 引擎实现，具体分为连接和评估阶段，从效果上看，子模块先于父模块被执行。
   * ES6 模块的导入导出语句的位置不影响模块代码语句的执行结果。