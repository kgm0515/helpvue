const shell = require('shelljs')

// 检测git是否已经安装，git命令是否存在
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}
// 执行`npm run build`打包命令
if (shell.exec('npm run build').code !== 0) {
  shell.echo('Error: npm run build 打包失败')
  shell.exit(1)
} else {
  shell.echo('Success: npm run build 打包成功...')
}
// 进入文档
shell.cd('packages/doc/public')

// 报错：仓库可能已经被初始化了
if (shell.exec('git init').code !== 0) {
  shell.echo('Error: git init 执行失败')
}
// 报错：当前分支已经在main分支
if (shell.exec('git checkout -b main').code !== 0) {
  shell.echo('Error: git checkout -b main 执行失败')
}
if (shell.exec('git add -A').code !== 0) {
  shell.echo('Error: git add -A 执行失败')
  shell.exit(1)
}
if (shell.exec('git commit -m "deploy"').code !== 0) {
  shell.echo('Error: git commit -m "deploy"  执行失败')
  shell.exit(1)
}
// 把当前代码推送到main:gh-pages分支
if (shell.exec('git push -f git@github.com:kgm0515/helpvue.git main:gh-pages').code !== 0) {
  shell.echo('Error: git push -f git@github.com:kgm0515/helpvue.git main:gh-pages 执行失败')
  shell.exit(1)
}
shell.cd('-')
