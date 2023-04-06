import path from 'path'
import fs from 'fs'

/**
 * 创建软连接
 * @param from
 */
export const createSymlink = (from: string, to: string) => {
  fs.symlink(path.resolve(process.cwd(), from), path.resolve(process.cwd(), to), (err) => {
    console.log(err, `创建软连接出错， ${JSON.stringify({ from, to })}`)
  })
}
