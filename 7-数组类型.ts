// 对象类型: object(包括数组 对象 函数等对象)

// 特点 对象类型 在ts中更加细化 每一个具体的对象都有自己的类型语法

// 数组类型的两种写法 (推荐使用number[]写法)

let numbera: number[] = [1,2,3]   //数值类型的数组

let numberb: Array<number> = [1,2,3]  //数值类型的数组 写法二不建议

let boo: boolean[] = [true,false]  //布尔类型的数组

let strArr: string[] = ['a','b']  //字符串类型的数组