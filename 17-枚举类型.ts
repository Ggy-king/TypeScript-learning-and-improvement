// 枚举
// 枚举的功能类似于字面量类型+联合类型组合的功能 也可以表示一组明确的可选值
// 枚举 定义一组命名常量 他描述一个值 该值可以是这些命名常量中的一个

/**
 * 1 使用enum关键字定义枚举
 * 2 约定枚举名称 枚举中的值以大写字母开头
 * 3 枚举中的多个值之间通过逗号分隔
 * 4 定义好枚举后 直接使用枚举名称作为类型注解
 */

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function changeDirection(direction: Direction) {}
changeDirection(Direction.Up)   //访问枚举成员


//枚举成员的值  鼠标放在上面即可  从0开始自增(默认)

enum Dae {
    Up = 0,
    Left = 2,
    Right = 4,
    Down
}

// 枚举不仅提供类型，而且提供值 对象形式
