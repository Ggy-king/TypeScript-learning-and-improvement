// class类 只整不减
// ts支持es2015引入的class关键字，并为其添加了类型注解和其他语法(比如可见性修饰符)

class Person {
    age: number
    gender = '男'  //省略写法
    // gender: string = '男'
}

// 1 添加类型注解
const p1 = new Person

p1.age
