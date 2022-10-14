// 分析partial泛型工具的实现
type Partial2<T> = {
    [P in keyof T]?: T[P]
}

type Props2 = {
    a: number; b: string; c: boolean
}
type PartialProps = Partial2<Props2>

/**
 * 1 keyof T 即 keyof Props 表示获取Props的所有键 也就是'a'|'b'|'c'
 * 2 在[]后添加? 表示这些属性都变为可选的 来一以此实现partial的功能
 * 3 冒号后面T[P]表示获取T中每个键对应的类型
 * 4 最终 新类型PartialProps2和旧类型Props2结构完全相同 只是让所有类型都变成可选了
*/