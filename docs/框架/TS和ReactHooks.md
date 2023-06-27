---
slug: /Ts和ReactHooks
title: Ts和ReactHooks相关知识
authors:
- name: Riguangzhixia
  title: Front-end developer
  url: https://github.com/Riguangzhixia
  image_url: https://github.com/Riguangzhixia.png
keywords: [blogs, questions]
tags:
- 代码问题
---

## TypeScript回顾

### type和interface
+ interface 可跨模块使用
+ interface 多次重复声明会合并
+ type 只在当前模块内生效
+ type 可以定义基本类型别名，可以声明元组类型
+ type 可以声明联合类型
+ type 
### 基本类型 
boolean、string、number、void、never、any、tuple（元组）、enum（枚举）、array、object
### 泛型
  + 泛型名称：
    + T：Type的缩写，类型
    + K、V：key和value的缩写，键值对
    + E：Element的缩写，元素
    + O：Object的缩写，对象
  + 泛型应用
    + 泛型接口(可以有泛型默认值)
    ```Typescript
    interface Info<T> {
      name: T
    }
    const info1: Info<string> = {
      name: "zs"
    }
    const info2: Info<number> = {
      name: 1
    }
    // 默认值
    interface Age<T=number> {
      age: T
    }
    const age: Age = { age: 18 }
    ```
    + 泛型函数
    ```Typescript
    function fun<T1, T2>(arg1: T1, arg2: T2) {
      console.log(arg1, arg2)
    }
    fun<number, string>(1, '1')
    ```
    + 泛型数组\类
    ```Typescript
    // 数组
    const arr: Array<string> = ["a", "b", "c"]
    // 类
    class Info<T> {
      x: T
      constructor(x:T) {
        this.x = x;
      }
    }
    const info = new Info<number>(1);
    ```
    + 泛型约束
    ```Typescript
    interface Ilength {
      length: number
    }
    function getLen<T extends Ilength>(args: T) {

    } 
    const arr: Array<Ilength> = [[]];
    const arr2: Array<Ilength> = [{length: 1}];
    ```
### TS 内置类型
+  ReadOnly 接口
+  Partial 类型
+  Pick 类型
+  Record 类型
### 模块
```Typescript

```
## React Hooks复习
+ useState
+ useEffect\useLayoutEffect
+ useCallback\useMemo
+ useContext
+ useTransition