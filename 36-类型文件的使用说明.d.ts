/**
 * 使用已有的类型声明文件
 * 1 内置类型声明文件： TS为JS运行时可用的所有标准化内置API都提供了声明文件  都会有相应的代码提示及类型提示
 * 2 第三方库的类型声明文件 ： （库自带类型声明文件||由DefinitelyTyped提供）
 */


// (method) Array<number>.forEach(callbackfn:(value:number,index:number,array:number[])=>void,thisArg?:any):void

// DefinitelyType是一个github仓库(很多库几乎都有) 用来提供高质量TS类型声明 (用npm/yarn安装)
// 说明 在实际开发中 如果你使用的第三方库没有自带声明文件 vs会给出提示 比如有三个点 或标红色下划线(引入库的代码行)



/**
 * 创建自己的类型声明文件
 * 1 项目内共享类型  如果多个ts文件用到同一个类型 此时可以创建.d.ts文件提供类型文件 实现类型共享
 * 2 为已有js文件提供类型声明
 *
 */

// 1 创建index.d.ts文件
// 2 创建需要共享的类型 并使用export导出(ts中的类型也可以使用import/export实现模块化功能)
// 3 在需要使用共享类型的.ts文件中 并通过import导入即可 (.d.ts后缀导入时 直接省略)

// 1 在将js项目迁移到ts中时 让已有的js文件有类型声明
// 2 成为库作者 创建库给其他人使用

/**
 * 类型声明文件的编写与模块化方式有关 不同的模块化方式有不同的方式(AMD COMMONJS UMD ESModule等) 但ts都支持 所以又多又杂
 * 演示 ESModule
 */
