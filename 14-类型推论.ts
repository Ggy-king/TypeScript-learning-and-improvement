// 类型推论
// 在ts中 某些没有明确指出类型的地方 ts的类型推论机制会帮助提供类型

/**
 * 场景 声明变量并立即初始化时可以省略类型声明
 * 场景 函数返回值可以参考参数类型 返回值可省
 */

let aa = 18

function add33(num1: number, num2: number) {
    return num1 + num2
}


// 建议是能省则省
