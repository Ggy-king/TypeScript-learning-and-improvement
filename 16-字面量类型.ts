let str1 = 'Hello Ts'  //str1类型字符串
const str2 = 'Hello Ts'  //str2类型为 Hello Ts

// let 是一个变量命名 他的值可以是任意字符串 类型为string
// const 是一个常量 他的值不变化所以只能是HelloTs

// 而上述的Hello Ts就是一个字面量类型 也就是说某一个特定的字符串也可以作为TS中的类型
// 数值 字符串等都可以作为字面量类型

function changeDirection1(direction: 'up' | 'down' | 'left' | 'right' ) {}   //例子
changeDirection1('down')