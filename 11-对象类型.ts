// 对象类型 
// 个人觉得和函数类型相似

/**
 * 1 对象指定类型时花括号中需用分号分隔
 * 2 对象中函数指定需要带上括号
 * 3 可以直接在对象上指定函数的参数及返回值 
 */
let person:{
    name:string;
    age:number;
    sayHi():void
} = {
    name:'jack',
    age:18,
    sayHi(name?:string) {
        console.log('你好',name);
    }
}

/**
 * 对象可选属性 
 * 
 * 比如Axios
 */

function myAxios(config:{url:string,method?:string}) {}
myAxios({url:'www.aaaaaa'})
