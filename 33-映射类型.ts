// 映射类型 ： 基于旧类型创建新类型(对象类型) 减少重复操作
// 根据联合类型创建新类型
type PropKeys = 'x'|'y'|'z'
type Type1 = {x:number;y:number;z:number}
// 简化
type Type2 = {[Key in PropKeys]:number}   //映射类型

 /**
  * 1 映射类型是基于索引签名类型的 所以 该语法类似索引签名类型 也是用了[]
  * 2 key in PropsKeys表示Key可以是PopsKeys联合类型中的任意一个 类似于forin(lt k in obj)
  * 3 使用映射类型创建的新对象类型Type2和类型Type1结构完全相同
  * 4 注意 映射类型只能在类型别名中使用 不能在类型接口中使用
  */


// 根据对象类型创建新类型  -- keyof
type PropsO = {a:number;b:string;c:boolean}
type Type3 = {[Key in keyof PropsO]:number}
