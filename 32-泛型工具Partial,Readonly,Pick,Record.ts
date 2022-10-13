/**
 * 泛型工具类型  TS中内置了一些常用的工具类型 来以此简化TS中的常见操作
 * 都是基于泛型实现的 且都是内置的
 * 1 Partial<Type>
 * 2 Readonly<Type>
 * 3 Pick<Type,Keys>
 * 4 Record<Keys,Type>
 * 
 */

// 1 Partial<Type>用来构造(创建)一个类型 将Type的所有属性设置成可选的
interface Props {
    id: string
    children: number[]
}

type PartialProps = Partial<Props>   //尖括号内传入你需要承接的接口名  所有属性都变成可选的

let o1: Props = {
    id: 'a',
    children: [1, 2, 3]
}

let o2: PartialProps = {   //承接Props但可选
    id: 'aaa'
}

// 2 Readonly<Type>用来构造一个类型 将Type所有属性都设置为只读
interface OnlyProps {
    id: string
    children: number[]
}
type ReadonlyProps = Readonly<OnlyProps>
let props3: ReadonlyProps = { id: '1', children: [1] }
// props3.id = '2'   //只读属性不可修改


// 3 Pick<Type,Keys>从Type中选择一组属性来构造新类型
interface PProps {
    id: string
    title: string
    children: number[]
}
type PickProps = Pick<PProps, 'id' | 'title'>   //多个属性之间使用 | 来连接  联合类型

/**
 * 1 Pick工具类型有两个类型变量 1 表示选择谁的属性 2 表示选择那几个属性
 * 2 其中第二个变量 如果只选择一个则只传入该属性名即可
 * 3 第二个类型变量传入的属性只能是第一个类型变量中存在的属性
 * 4 上面构造出新的PickProps 只有id和title属性
 */



// 4 Record<Keys,Type>是用来构造一个对象类型，属性键为keys 属性类型为Type
type RecordObj = Record<'a' | 'b' | 'c', string[]>
let ReObj: RecordObj = {
    a: ['1'],
    b: ['s'],
    c: ['55']

}
/**
 * 1 Record工具类型有两个类型变量 1 表示对象有哪些类型变量 2 表示对象属性的类型
 * 2 构建的新对象类型RecordObj表示 这个对象有三个属性分别为abc 属性值的类型都是string[]
 */
