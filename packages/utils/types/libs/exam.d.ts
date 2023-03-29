/**
 * 确认某件事
 * @param {string} eventName 确认某件事
 * @returns
 */
export declare const isOk: (eventName: string) => string;
/**
 * 常量：我的姓名
 */
export declare const myName = "kgm";
/** 类型 */
export type MyType = 1 | 2 | 3 | 4;
/** 接口 */
export interface MyInterface {
    /** 属性1 */
    key1: number;
    /** 属性2 */
    key2: string;
}
/** 类 */
export declare class MyClass {
    /** 类的属性 */
    prop1: number;
    /** 构造函数 */
    constructor();
    /**
     * 静态方法
     * @param param 参数，字符串列表
     * @returns 返回 Promise 对象
     */
    static staticMethod1(param: string[]): Promise<string[]>;
    /**
     * 私有方法
     * @param param1 第一个参数
     * @param param2 第二个参数
     * @returns 两数之和
     */
    private privateMethod1;
    /** 公共方法 */
    publicMethod(param1: number, param2: number): number;
}
/**
 * 这是一个函数函数
 * @param param 参数
 */
export declare function myFunction(param: MyInterface): MyInterface;
