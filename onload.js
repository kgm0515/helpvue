/**
 * 监听全局a链接的点击事件，把a链接路由中的'.'换成'-'
 */
document.addEventListener(
  'click',
  (e) => {
    const allParents = [...e.composedPath().slice(0, -8)]
    const alink = allParents.find((item) => item.nodeName === 'A')
    if (alink) alink.href = alink.href.replace('.', '-')
  },
  true
)
