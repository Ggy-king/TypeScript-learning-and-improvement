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