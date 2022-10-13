// 索引签名类型
// 使用场景 dang 无法确定对象中有哪些属性(或者说对象中可以出现任意多个属性) 此时就用到了索引签名类型

interface AnyObject {
    [Key: string]: number   //[Key:string]这个写法就是索引签名类型
}

let AnyObj: AnyObject = {
    a: 1,
    b: 12
}

/**
 * 1 使用[Key:string]来约束接口中允许出现的属性名称 表示只要是string类型就可以出现在对象中
 * 2 这样AnyObj中就可以出现任意多个属性(比如abc)
 * 3 Key只是一个占位符 可以换成任意变量名称
 * 4 隐藏的前置知识 js对象({})的键是string类型的
 */

// 数组
// 在js中数组是一类特殊的对象 特殊在数组的键是(索引)是数值类型 并且数组中也可以出现多个元素

interface MyNumArray<T> {
    [n: number]: T
}

let arrayNu: MyNumArray<string> = ['1', '2']

/**
 * 1 MyNumArray接口模拟原生是数组接口 并使用[n:number]作为索引签名类型
 * 2 该索引类型表示 只要是number类型的键(索引)都可以出现在数组中 或者说数组中可以有多个元素
 * 3 同时也符合数组索引是number类型这一前提
 */

