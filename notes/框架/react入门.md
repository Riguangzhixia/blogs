# React入门

## 学习的概念

Virtual DOM、Diff算法、JSX、props、state、数据不可变性、class、export default&export&import|modules.export&exports&require的定义、react中key的作用（对比vue）

## 详细
* JSX：（JavaScript 的语法扩展）可以使用js中的变量以及函数。因为 JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 camelCase 小驼峰命名！ 来定义属性的名称，而不是使用 HTML 的属性名称。
* 组件props：组件名称必须以大写字母开头
* 函数定义 无状态
* class定义 有状态
* props（组件的参数）不能修改props只能当成纯函数的参数使用！
 propTypes验证器，限制props参数的类型或者使用正则限制参数，错误则返回error对象 MyComponent.propTypes = {data:React.PropTypes.filter}
* state （组件的状态）自顶向下或单向数据流,可修改。
* extends 和 super： ES5 的继承，采用原型链继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，使用extends，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
* 事件处理：onClick={activateLasers}，绑定属性的命名采用驼峰式写法，传入一个函数并加大括号作为事件处理函数。
  * this的绑定问题： click事件时，this绑定到执行的上下文中而不是定义的上下文，即div支撑实例而不是class的实例，因此会出现问题。
  * 解决方案:  bind绑定/匿名箭头回调函数重复渲染子组件问题/属性初始化语法
* 性能优化
  * 生命周期函数shouldComponentUpdate: 它是在重新渲染过程开始前触发,重写此函数，比如根据props或status的部分数据改变时才重新渲染更新DOM。
  * 组件继承React.PureComponent相当于在shouldComponentUpdate中定义了浅比较。但这种浅比较会忽略属性或状态突变的情况。  
* [不可变性](https://www.reactjscn.com/tutorial/tutorial.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%8F%AF%E5%8F%98%E6%80%A7%E5%9C%A8React%E5%BD%93%E4%B8%AD%E9%9D%9E%E5%B8%B8%E9%87%8D%E8%A6%81)
  * 深拷贝 递归遍历赋值;
  * 浅拷贝 [Object.assign(target,source)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
* 条件渲染
  * 大括号里js表达式结合JSX实现，三元表达式
  * &&与运算表达式
  * 根据条件判断修改render返回值，render返回null即不渲染  
* 高阶组件：高级函数/函数式编程
* 第三方库：refs的使用，空的 </div>，react不会更新它
* 受控组件与非受控组件的选择
