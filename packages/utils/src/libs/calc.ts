/**
 * 两个数字相减
 * @param num1 数字1
 * @param num2 数字2
 * @returns
 */
export const handleMinus = (num1: number, num2: number): number => num1 - num2

/**
 * 数字累加
 * @param arg 数字类型的参数
 * @returns
 */
export const handleAdd = (...arg: number[]): number => {
  return arg.reduce((prev, next) => prev + next, 0)
}
