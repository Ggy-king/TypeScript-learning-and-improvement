/**
 * 函数兼容性比较复杂 1 参数个数 2 参数类型 3 返回值的类型   
 */

// 1 参数个数 参数多的兼容参数少的 （或者说参数少的可以赋值给参数多的）
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void
// let f1:F1 = function() {}
let f1!: F1   //!表示类型不畏null和undefined
let f2: F2 = f1

// 数组forEach方法   (value:string,index:number,array:string[]) => void


// 2 参数类型 相同位置的参数类型要相同(原始类型)或兼容(对象类型)     （函数少的可以赋值给多的  注意与接口冲突）
type F3 = (a:number) => string
type F4 = (a:number) => string     //对应位置应一致
let f3: F3 = function() {return 'string'}
let f4 :F4 = f3


// 3 返回值类型 只关注返回值本身即可
/**
 * 1 如果是原始类型 正常赋值即可
 * 2 如果是对象类型 此时成员多的可以赋值给成员少的
 */
type F5 = () => {name:string}
type F6 = () => {name:string,age:number}
let f5 !:F5
let f6 !:F6
f5 = f6


// 总结上面 对象类型是多的赋值给少的 函数则相反