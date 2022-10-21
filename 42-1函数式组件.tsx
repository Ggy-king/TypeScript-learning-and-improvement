// import {FC} from 'react'

// react是组件化开发
/**
 * 函数式组件
 * 1 组件的类型
 * 2 组件的属性
 * 3 组件属性的默认值
 * 4 事件绑定和事件对象
 */

// 类型及属性
type Props = {
    name:string;
    age?:number
}

// const Hello:FC<Props> = ({name,age}) => (    //FC是一个react提供的函数  FC约定返回一个结构(标签)
//     <div>你好，我叫:{name}，我{age}岁了</div>
// )
// <Hello name='jack'>

// 上述写法可以简化直接去掉FC  完全按照函数在TS中的写法
const Hello = ({name,age}:Props) => (
    <div>你好，我叫:{name}，我{age}岁了</div>
)



// 函数组件的默认值(defaultProps)
// const Hello: FC<Props> = ({name,age}) => (
//     <div>你好，我叫:{name}，我{age}岁了</div>
// )
Hello.defaultProps = {      //可选
    age:15
}
// 简化 完全按照ts
const Hello = ({name,age = 18}:Props) => (
    <div>你好，我叫:{name}，我{age}岁了</div>
)

//事件绑定和事件对象
{/* <button onClick={onClick}>点赞</button> */}
// const onClick(e:React.MouseEvent<HTMLButtonElement>) = () =>{}

{/* <input onChange={onChange}/>
const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {} */}

// 技巧: 鼠标放在e上