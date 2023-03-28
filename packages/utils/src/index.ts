export { handleMinus } from './libs/minus'

/**
 * 打招呼
 * @param {string} name 某人的姓名
 * @returns
 */
export const hello = (name: string): string => `hello ${name || 'world'}`

/**
 * 数字累加
 * @param arg 数字类型的参数
 * @returns
 */
export const handleAdd = (...arg: number[]): number => {
  return arg.reduce((prev, next) => prev + next, 0)
}
