/**类成员的可见性
 * 1 public 共有的
 * 2 protected 受保护的
 * 3 private 私有的
 */

// 1 public
class Animal2 {
    public move() {
        console.log('这是公开的方法')
    }
}

// 2 protected 受保护的 仅对其声明所在类和子类中(非实例对象)可见  子类中可以通过this来访问父类受保护的成员
class Animal3 {
    protected move2() {
        console.log('这是受保护的方法')
    }
}
class Cat extends Animal3 {
    dark() {
        this.move2
        console.log('喵喵');
        
    }
}

// 3 private 表示私有的 只在当前类中可见 在子类和实例中都是不可见的
class Animal4 {
    private run () {
        console.log('这是一个私有的方法');
    }
    bark () {
        this.run  //只有自己可见
    }
}

class Cata extends Animal4 {
    dark () {
        this.bark
    }
}

// 标记属性为只读 readonly (只能修饰属性不能修饰方法  但用在接口和对象中)   
class Readon {
    readonly age:number = 18  //为默认 
    readonly noAge = '123'   //不声明类型 则后面的内容变成为字面量类型 
}