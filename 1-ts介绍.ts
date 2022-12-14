// TypeScript简称ts,是js的超集(js有的ts都有)
//ts = type + js (在js的基础上,为js添加了类型支持)
//ts是微软开发的编程语言 可以在任何运行js的地方运行

// 举例

// ts 明确类型支持
let age1: number = 18

// js
let age2 = 19

/**
 * 1 js代码中大部分的错误都是类型错误
 * 2 从编程语言的动静区分 ts为静态类型 js为动态类型
 * 3 js 需要等到代码真正执行的时候才能发现错误(动态类型)
 * 4 ts 在代码编译的时候就可以发现错误(静态类型)
 * 5 这样ts比js bug更少且更好找到   bb
 */