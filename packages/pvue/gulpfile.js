const { src, dest, watch } = require('gulp')
const gulpLess = require('gulp-less')
const autoPrefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const fs = require('fs-extra')

// 删除相关文件夹
const clean = async (cb) => {
  fs.removeSync('./dist')
  fs.removeSync('./types')
  cb()
}

// 编译css
function compile() {
  return src('./style/**/*.less').pipe(gulpLess()).pipe(autoPrefixer()).pipe(cleanCss()).pipe(dest('./dist/style'))
}

// 监听文件修改
function serve() {
  compile()
  watch('./style/**/*.less', compile)
}

module.exports = { compile, clean, serve }
