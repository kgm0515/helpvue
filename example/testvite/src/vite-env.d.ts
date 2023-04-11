/// <reference types="vite/client" />

// 编写环境变量的类型
interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string
  readonly VITE_APP_ENV: string
}
