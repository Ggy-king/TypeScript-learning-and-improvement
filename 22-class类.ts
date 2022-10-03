// class类 只整不减
// ts支持es2015引入的class关键字，并为其添加了类型注解和其他语法(比如可见性修饰符)

class Person {
    age: number
    gender = '男'  //省略写法
    // gender: string = '男'

    constructor(age:number,gender:string) {
        this.age = age
        this.gender = gender
        // 构造函数不能指定返回值类型
    }
}

// 1 添加类型注解
const p1 = new Person(12,'男')

p1.age


// 实例方法
class Point {
    x = 10
    y = 20

    scale(n:number): void {
        this.x *= n
        this.y *= n
    }
}

const p2 = new Point()
p2.scale(10)
console.log(p2.x,p2.y);


// 类的继承
/**
 * 1 extends继承父类
 * 2 implements实现接口
 */

//  extends
class Animal{
    move(){console.log('Moving alone');
    }
}
class Dog extends Animal{
    bark() {console.log('汪');
    }
}

const dog = new Dog()

// implements
interface Singale {    //interface常见接口
    sing() :void
    name: string
}
class Person2 implements Singale {
    name = 'gao'
    sing(): void {
        console.log('接口，what');
        
    }
}