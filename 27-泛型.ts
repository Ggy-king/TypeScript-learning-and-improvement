// 泛型是可以在保证类型安全的前提下 让函数等与多种类型一起工作 从而实现复用


function id<Type>(value: Type): Type { return value }

/**
 * 1 语法 在函数名称后面添加<>(尖括号) 尖括号中添加类型变量 比如此处的Type
 * 2 类型变量Type 是一种特殊的变量 他处理类型而不是值
 * 3 该类型相当于一个类型容器能够捕获用户提供的类型（具体什么类型由用户调用该函数时指定）
 * 4 因为Type是类型 因此可以将其作为函数参数和返回值类型 表示参数和返回值具有相同的类型
 * 5 类型变量Type 可以是任意合法名称
 */

const id1 = id<number>(10)
const id2 = id<string>('a')

// 调用方法为 函数名<类型>
// 简化： 调用的时候可以省略类型 利用ts类型推断机制
const id3 = id('ll')
const id4 = id(false)

/**
 * 泛型约束 ： 默认情况下 泛型的类型变量可以代表多个类型 这导致其无法访问任何属性 (比如value.length就是错误的写法)
 * 此时 可以添加约束 来收缩类型范围
 * 1 指定更加具体的类型
 * 2 添加约束
 */

 
function idOne<Type> (value:Type[]):Type[] {   //变为数组类型  （指定具体）
    console.log(value.length);
    return value
}

interface ILength {length:number}    //创建描述约束接口ILength 该接口要求提供length属性
function idLen<Type extends ILength>(value:Type):Type {    //通过extends关键字使用该接口 为泛型(类型变量)添加约束
    console.log(value.length);    //该约束表示 传入的类型必须具有length属性
    return  value
    
}