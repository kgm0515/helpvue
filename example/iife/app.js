/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-31 18:06:16
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-31 18:20:24
 */
const express = require('express')
const path = require('path')
const app = express()
const port = 9392
// 引入插件
const HelpVueutils = require('@helpvue/utils')

console.log('引入插件', HelpVueutils)

app.use(express.static(path.join(__dirname, 'public')))
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {
  res.render(`index.html`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
