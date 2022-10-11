/**
 * 泛型接口：接口可以配合泛型来使用 以增加其灵活性 增加其复用性
 * 
 * 1 在接口名称的后面添加<类型变量>,那么 这个接口就变成了泛型接口
 * 2 接口的类型变量 对接口中的其他成员可见 也就是接口中所有成员都可以使用类型变量
 * 3 使用泛型接口时 需要显示指定具体的类型(比如 此处的idFunc<number>)
 * 4 此时 id方法的参数和返回值类型都是number ids方法的返回值类型是number[]
 */

interface idFunc<Type> {
    id:(value:Type) => Type
    ids:() => Type[]
}

let obj:idFunc<number> = {      //显示指定Type类型
    id(value) {return value},
    ids() {return [1,2,3]}
}