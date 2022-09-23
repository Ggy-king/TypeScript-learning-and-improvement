/**
 * 函数的类型实际上是指 函数的参数和返回值的类型
 * 
 * 两种指定的参数 1 单独指定 2 同时指定
 */

// 1 单独指定
function add(num1:number,num2:number):number {    //括号内指定参数 括号外返回值
    let addResult = num1 + num2
    return addResult
}

console.log(add(1,2))

// 函数表达式表示
const add2 = (num1:number,num2:number):number => {
    let addResult = num1 + num2
    return addResult
}
console.log(add2(3,4))

// 2 同时指定   注意这种形式只适用于函数表达式
// 由
// const add3 = (num1,num2) => {
//     return num1 + num2
// }   ==>>
// 到
const add3:(num1:number,num2:number) => number = (num1,num2) => {
    return num1 + num2
}


/**
 * void类型
 * 
 * 如果函数没有返回值 那么 函数返回值类型为void
 */

function greet(name:string):void {
    console.log('name',name);
}

greet('gaoguangyuan')


/**
 * 可选参数
 * 
 * 使用函数实现某个功能时 参数可传可不传 结合参数指定类型后使用可选参数? (在参数后添加?即可，可选参数后不能出现必选参数)
 */

function mySlice(start?: number,end?: number): void {
    console.log('起始索引',start,'结束索引',end);
    
}
mySlice(2)

