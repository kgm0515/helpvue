import type { App, Component, ComputedOptions, MethodOptions } from 'vue'

// 从外部传入的配置对象
export const appConfig = { prefix: 'pvue' }

// 从外部传入的配置对象类型
export interface IAppConfig {
  prefix?: string
  [p: string]: any
}

/**
 * 创建组件通用的install方法
 * @param app vue实例
 * @param config 配置对象
 * @param comps 某一个组件
 * @returns
 */
export function compInstall(app: App, config: IAppConfig, comps: Component<any, any, any, ComputedOptions, MethodOptions>) {
  Object.assign(appConfig, config || {}) // 修改appConfig的值
  let name = comps.name
  if (!(name && typeof name === 'string')) {
    throw new Error('组件必须有name属性')
  }
  name = name.toLocaleLowerCase()
  // 前缀
  const prefix = config && config.hasOwnProperty('prefix') ? config?.prefix || '' : 'pvue'
  const upperPrefix = prefix.slice(0, 1).toUpperCase() + prefix.slice(1)
  // 大写的名字
  const upperName = name
    .split('-')
    .filter((item: string) => !!item)
    .map((str: string) => {
      return str.slice(0, 1).toUpperCase() + str.slice(1)
    })
    .join('')
  const nameList = [`${prefix}-${name}`, `${upperPrefix}${upperName}`]
  nameList.forEach((str) => app.component(str, comps))
  return app
}
