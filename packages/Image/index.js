// 导入组件，组件必须声明 name
import XImage from './src'
// 为组件提供 install 安装方法，供按需引入
XImage.install = function (Vue) {
  Vue.component(XImage.name, XImage)
}
// 导出组件
export default XImage