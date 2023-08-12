/**
 * 常量：作者的姓名
 */
export const AUTHOR_NAME = 'kuangguangmiao'

/**
 * 季节的类型：1-(春)，2-(夏)，3-(秋)，4-(冬天)
 */
export type SeasonType = 1 | 2 | 3 | 4

/**
 * 这是一个描绘动物的接口
 */
export interface Animal {
  /** 动物的年纪 */
  age: number
  /** 动物的名字 */
  name: string
  /** 动物的种类 */
  type: string
  /**
   * 对动物奔跑的描述
   * @param status 动物的状态
   */
  run(status: string): string
}

/**
 * 获取某一个动物的信息
 * @param animal 动物对象
 * @param seasonType 当前的季节类型
 * @returns
 */
export function genAnimalInfo(animal: Animal, seasonType: SeasonType) {
  const seasonOptions = { 1: '春', 2: '夏', 3: '秋', 4: '冬' }
  return `这是一只${animal.type},名字叫${animal.name},今年${animal.age}。在这个${seasonOptions[seasonType]}季，它很${animal.run('快')}`
}

/** 这是一个创建人的类 */
export class Person {
  /**
   * 当前对象的类型
   */
  classType = 'Person'

  /**
   * 类的构造函数
   * @param name 当前对象的姓名
   * @param age 当前对象的年龄
   */
  constructor(public name: string, public age: number) {
    // 做一些操作
  }

  /**
   * 类的静态方法
   * @param param 参数，字符串列表
   * @returns 返回 Promise 对象
   */
  static staticMethod(param: string[]) {
    return Promise.resolve(param)
  }

  /**
   * 获取当前对象的姓氏
   */
  get familyName() {
    return this.name.slice(0, 1)
  }

  /**
   * 私有方法，获取用户信息
   * @returns 返回用户信息
   */
  private getInfo() {
    return `我是${this.name}, 今年${this.age}岁！`
  }

  /**
   * 公共方法，获取父亲的年龄
   * @param parentAge 父亲的年纪
   * @returns 返回用户父亲的年纪
   */
  getParentAge(parentAge: number) {
    return `${this.getInfo()}我爸爸今年${parentAge > this.age + 14 ? parentAge : this.age + 25}岁！`
  }
}
