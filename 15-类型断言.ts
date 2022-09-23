// 当你想要更精确一个类型的时候 可以使用类型断言来指定 

const aLink = document.getElementById('link')
aLink.href  //无法访问

/**
 * 1 getElementById方法指定返回值的类型是HTMLElement,该类型只包含所有标签公共的属性或方法 不包含深入的属性
 * 2 类型宽泛不便于操作 比如无法操作href等属性和方法
 * 3 使用关键字as实现类型断言
 * 4 关键字as后面的类型是一个更加具体的类型
 * 5 通过类型断言使某一属性变得更加具体 这样可以访问特有深入的属性和方法
 */

const aLink2 = document.getElementById('Link') as HTMLAnchorElement
aLink2.href   //可以访问

// 标签的类型可以在浏览琴中查看使用console.dir($0) 
