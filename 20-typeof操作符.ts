// typeof  js能做的ts都能做

// 功能一 获取值属性
console.log(typeof "Hello world");

// 功能二 可以在上下文中引用变量或属性的类型 (根据已有变量的值，获取该值的类型，来简化书写)

let p = {x:1,y:2}
let num: typeof p.x   //num类型为number

// function formatPoint(point:{x:number,y:number}) {}
// formatPoint(p)

// 等价与
function formatPoint(point:typeof p) {}
formatPoint(p)

/**
 * 1 使用操作符来获取变量p的类型，结果与第一种(对象字面量形式相同)
 * 2 typeof出现在类型注解的位置(参数的名称的冒号后面)所处的环境就在类型上下文
 * 3 注意typeof只能用来查询变量或属性的类型，无法查询其他形式的类型(比如函数调用的类型)
 */

function add(num1:number,num2:number) {
    return num1 + num2
    
}
// let ret: typeof add(1,2)   //不能查询调用