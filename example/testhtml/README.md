# 原生组件开发

## 命令

```sh
npm run dev:comps # 打包全组件并监听文件修改
npm run build:comps # 执行打包组件
```

## 目录说明

- 在`components`目录中编写组件
- 打包后的打包文件在`.comps`目录中

## 组件使用

在`**.html`文件中引入，引入完成后可以在浏览器全局读取`Copms`对象

关于`Copms`对象说明

```js
window.Copms = {
   // 所有我们定义的组件都需要继承这个基础组件
   BaseComponent: class f, // 基础组件，基本不需要用到
   Ref: ƒ d(l), // 定义响应式数据（接受一个普通对象）
   effect: ƒ u(l), // 副作用函数（接受一个函数）
}
```

## 案例

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Simple template</title>
    <link rel="stylesheet" href="./.comps/style.css" />
    <script src="./.comps/index.iife.js"></script>
  </head>
  <body>
    <h3>简单的水果案例</h3>
    <div>
      <show-list datalist="datalist"></show-list>
      <div id="operate">
        <button onclick="featchData()">请求数据</button>
        <button onclick="handleAdd()">添加水果</button>
        <button onclick="handleDelete(0)">删除第一个</button>
        <button onclick="handleDelete()">删除全部</button>
      </div>
    </div>
    <script defer>
      /** 定义响应式数据 */
      var datalist = Comps.Ref(null) // 水果列表数据
      var btnVisible = Comps.Ref(false) // 是否显示操作栏

      /** 副作用函数，监听datalist数据的变化*/
      Comps.effect(function () {
        console.log(`副作用函数执行了`)
        if (datalist.value) {
          btnVisible.value = true
        } else {
          btnVisible.value = false
        }
        // 如果datalist就隐藏操作按钮（operate是直接通过id获取的）
        operate.style.display = btnVisible.value ? 'block' : 'none'
      })
      // 请求远程数据
      function featchData() {
        datalist.value = null
        setTimeout(() => {
          datalist.value = [
            { label: '水果：苹果', value: 12 },
            { label: '水果：梨子', value: 65 }
          ]
        }, 500)
      }
      // 添加水果
      function handleAdd() {
        console.log('添加水果-接收参数：', arguments)
        var tempItem = { label: `水果：${parseInt(Math.random() * 100)}`, value: parseInt(Math.random() * 89 + 10) }
        datalist.value = [...datalist.value, tempItem]
      }
      // 删除水果
      function handleDelete(index) {
        console.log('删除水果-接收参数：', arguments)
        if (typeof index === 'number') {
          debugger
          if (!datalist.value && datalist.value.length <= 0) {
            alert('无法删除当前元素')
          } else {
            datalist.value.splice(index, 1)
            datalist.value = [...datalist.value]
          }
        } else {
          datalist.value = []
        }
      }

      // 初始化请求数据
      featchData()
    </script>
  </body>
</html>
```
