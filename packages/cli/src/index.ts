#!/usr/bin/env node
import { Command } from 'commander'
import { createComponent } from './commands/create'
import { createSymlink } from './commands/symlink'
import { CLI_PKG } from './shared/const'
import logger from './shared/logger'

const program = new Command()

program.version(`helpvue ${CLI_PKG.version}`).usage(`<command> [options]`)

program
  .command('example <mainCommand>')
  .description('这是example命令')
  .option('-w, --watch', '是否监听文件变化')
  .option('-c, --component <componentName>', '创建一个组件??')
  .action((mainCommand, options) => {
    console.log(mainCommand, options)
  })

// program.command('create <componentName>').description('在当前目录的src目录下创建一个组件目录').action(createComponent)

program.command('symlink <from> <to>').description('在当前目录的src目录下创建一个组件目录').action(createSymlink)

program.on('command:*', ([cmd]: any[]) => {
  program.outputHelp()
  logger.error(`\n未知命令 ${cmd}.\n`)
  process.exitCode = 1
})

program.parse(process.argv)
