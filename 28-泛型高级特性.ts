/**
 * 高级泛型
 * 泛型的类型变量可以有多个 并且类型变量之间还可以进行约束 （比如第二个类型变量受第一个类型变量约束）
 * 比如创建一个函数来获取对象中的属性
 */

function getProp<Type,Key extends keyof Type> (obj:Type,Key:Key){
    return obj[Key]
}

let personP = {name:'jack',age:18}
getProp(personP,'name')  //第一个参数传入一个对象 第二个参数传入该对象中的键
getProp(18,'toFixed')
getProp('abd',0)

/**
 * 添加第二个类型变量Key 两个变量之间使用逗号分隔
 *  生成其键名称的联合类型
 * 本实例中Keyof Type实际上获取的是person对象中所有键的联合类型 也就是'name'|'age'
 * 类型变量Key受Type约束 可以理解为Key只能是Type所有键中的任意一个 或者说只能访问对象中存在的属性
 */