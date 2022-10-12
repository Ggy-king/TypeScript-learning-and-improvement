/**
 * 泛型类 -- class
 * class组件的基类Component就是泛型类 不同的组件有不同的props和state
 * 
 */

// 1 创建泛型类  --- 过时了
class GenericNumber<NumType>{
    defaultValue: NumType
    add: (x: NumType, y: NumType) => NumType

    constructor(value: NumType) {
        this.defaultValue = value
    }
}

// const myNnm = new GenericNumber<number>()   //类型变量可以不传（在class中有参数的传的时候）
// myNnm.defaultValue = 10

const myNnm = new GenericNumber(100)   //自动推断