/**
 * 以下插件将在不访问文件系统的情况下拦截虚拟模块的任何导入
 *
 * 在rollup.config.js中配置
 * import virtualModule from "./plugins/rollup-plugin-virtual-module.js";
 * plugins: [ virtualModule()],
 *
 * 在代码中使用
 * import virtualModule from "virtual-module";
 * export const getVirtualModule = () => virtualModule;
 * @returns
 */
export default function myExample() {
  return {
    name: "virtual-module", // this name will show up in warnings and errors
    resolveId(source) {
      if (source === "virtual-module") {
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    load(id) {
      if (id === "virtual-module") {
        return 'export default "This is virtual!"'; // the source code for "virtual-module"
      }
      return null; // other ids should be handled as usually
    },
  };
}
