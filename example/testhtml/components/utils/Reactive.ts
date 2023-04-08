let globalRefreshDeps: any[] = []
let isWaiting = false

// 执行全局刷新
function _handleGlobalRefresh(list) {
  list.forEach(function (dep) {
    if (dep && typeof (dep as any).render === 'function') {
      if (!globalRefreshDeps.includes(dep)) globalRefreshDeps.push(dep)
    }
  })
  _handleDoRefresh()
}
// 执行全局刷新
function _handleDoRefresh() {
  isWaiting = true
  Promise.resolve().then(function () {
    globalRefreshDeps.forEach((dep) => {
      if (typeof (dep as any).render === 'function') {
        ;(dep as any).render()
      }
      globalRefreshDeps = []
      isWaiting = false
      _handleDoRefresh()
    })
  })
}

/**
 * 响应式数据
 * @param refData
 * @returns
 */
export function Ref(refData) {
  let _rawData = refData
  let deps: any[] = []
  return {
    get value() {
      // 当前上下文
      const curContext = (window as any).__curContext__
      const curEffect = (window as any).__curEffect__
      if (curContext) {
        // 组件
        if (!deps.includes(curContext)) deps.push(curContext)
      }
      if (curEffect) {
        // effect函数
        if (!deps.includes(curEffect)) deps.push(curEffect)
      }
      return _rawData
    },
    set value(data) {
      _rawData = data
      _handleGlobalRefresh(deps)
    }
  }
}

/**
 * 响应式数据
 * @param fun Function
 */
export function effect(fun) {
  const _effectObject = {
    __effect__: true,
    render: null
  }
  ;(window as any).__curEffect__ = _effectObject
  if (typeof fun === 'function') {
    _effectObject.render = fun
    ;(_effectObject as any).render()
  } else {
    console.error('effect接收一个函数')
  }
  ;(window as any).__curEffect__ = null
}
