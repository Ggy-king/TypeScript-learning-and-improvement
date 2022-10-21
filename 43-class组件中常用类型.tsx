// 1 组件的类型 属性 事件
// 2 组件的状态

// 类型
type State = {count:number}
type Props = {message?:string}

class C1 extends React.Component{}    //无props state
class C2 extends React.Component<Props33>{}   //有props 无state
class C3 extends React.Component<{},State>{}   //无props 有state
class C4 extends React.Component<Props33,State>{}   //有props state


// 属性 属性默认值
type PropsClass = {name:string;age?:number}
class Hello extends React.Component<PropsClass> {
    static defaultProps: Partial<PropsClass> ={   //设置为可选默认属性
        age:18
    }
    render() {
        const {name,age} = this.props   //通过this.props拿到值
        return <div>你好</div>
    }
}

// class组件状态(state) 和事件

