// 接口
// 当一个对象类型被多次调用的时 一般会使用接口(interface) 来描述对象的类型 达到复用的目的
/**
 * 1 使用interface关键字来声明接口
 * 2 接口名称(比如 此处的   IPerson)可以是任意合法的变量名称
 * 3 声明接口后 直接使用接口名称作为变量的类型
 * 4 因为每一行只有一个属性类型 因此 属性类型后没有;(分号)
 */


// 接口
interface IPerson {
    name: string
    age: number
    sayHi(): void
}

let person2: IPerson = {
    name: '刘老师',
    age: 18,
    sayHi(){}
}

// 接口与类型别名type共同点是都可以控制类型
// 不同是 接口只能为对象指定别名 类型别名可以为任意类型指定别名


// 接口继承 extends
interface Point1 {x:number,y:number}
interface Point2 extends Point1 {z:number}

let p2: Point2 = {
    x:1,
    y:2,
    z:3
}