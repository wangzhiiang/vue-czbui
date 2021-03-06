import Vue from 'vue'
import Toast from './Toast.vue'

const install = (opts: { msg: string; type: string; timeout: object }) => {
  const Constructor = Vue.extend(Toast)
  const Instance = new Constructor({
    data () {
      return {
        msg: opts.msg,
        type: opts.type,
        timeout: opts.timeout
      }
    },
    methods: {}
  })
  const toast = Instance.$mount()
  document.body.appendChild(toast.$el)
}

export default install
