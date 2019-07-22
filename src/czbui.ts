import Vue from 'vue'
import './style/weui.min.less'

import Toast from './components/toast'
import Loading from './components/loading'
import Dialog from './components/dialog'
import Actionsheet from './components/actionsheet'
import Toolbar from './components/toolbar'
import Infinitescroll from './components/infinitescroll'
import PullDown from './components/pullDown'
import Tab from './components/tab'
import Slider from './components/slider'
import Search from './components/search'
import Checkbox from './components/checkbox'
import Weuiswitch from './components/switch'
import Loadingpro from './components/loadingpro'

const list = [
  Tab,
  Infinitescroll,
  PullDown,
  Toolbar,
  Slider,
  Search,
  Checkbox,
  Weuiswitch,
  Loadingpro
]

const install = (Vue: any) => {
  list.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$toast = Toast
  Vue.prototype.$loading = Loading
  Vue.prototype.$dialog = Dialog
  Vue.prototype.$actionsheet = Actionsheet
}

export default {
  install
}
