// 需求 如数组中既可以有字符串类型有可以有数字类型

// 联合类型
let arr: (string | number)[] = [1,'s',6,'l']   //注意小括号

// 不加小括号表示 其既要么是string类型的字符串 要么是数字类型的数组
let arr2: string | number[] = 'asd'
let arr3: string | number[] = [1,2,3]
