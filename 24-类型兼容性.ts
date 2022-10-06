// 类型兼容性

let arr = ['a','b','c']
// 兼容性
arr.forEach(item => {})
arr.forEach((value,index) => {})
arr.forEach((value,index,array) => {})

/**
 * 结构化类型系统  -- ts 关注的值是所具有的形状
 * 标明类型系统
 */

// 演示  -- 成员多的可以兼容成员少的 (父类类型 子类对象)  多的可以赋值给少的 
class Point7 {
    x:number
    y:number
}
class Point2D {
    x:number
    y:number
    z:number
}

const p:Point7 = new Point2D()


/**
 * 接口之间的兼容性 与class相同
 * 接口与class类之间也可以兼容 ***
 */
interface Point1 {
    x:number
    y:number
}
interface Point2 {
    x:number
    y:number
    z:number
}
let q1:Point1
let q2:Point2 = {x:1,y:2,z:3}
q1 = q2

// 接口兼容class
class Point4D {
    x:number
    y:number
    z:number
}
q2 = new Point4D
