/**
 * js中的数组其实就是TS中的一个泛型接口
 * 当我们使用数组的时候ts会自动根据数组的不同类型 来自动将类型变量设置为相应的类型
 * 还可以通过ctrl+鼠标左键来查看具体的类型信息
 */

const strArray = ['a', 'a', 'a']
strArray.forEach(item => { })

const numArray = [1, 2, 3, 4]
strArray.forEach(item => { })