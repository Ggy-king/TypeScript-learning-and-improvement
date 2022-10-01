// any类型
// 原则:不推荐使用any类型 这会让ts变成anyScript
// 因为当值为any时 可以对该值进行任意操作 并且不会有代码提示

let objAny: any = { x: 0 }

objAny.bar = 100
objAny()
const n: number = objAny
// 上述操作不会有任何提示(即使有错误)

/**
 * 1 可以使用临时any来“避免”书写很长，很复杂的类型
 * 2 其他隐式具有any类型的情况：1 声明变量不提供类型也不提供默认值 2 函数参数不加类型
 */

let a

function addAny(num1,num2) {}