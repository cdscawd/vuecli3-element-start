import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from './utils/axios'
import moment from 'moment'

// https://github.com/ElemeFE/element/blob/master/components.json
import {
  Button,
} from 'element-ui'
Vue.use(Button)
Vue.prototype.$ELEMENT = { size: 'mini' }

Vue.config.productionTip = false
axios
Vue.prototype.$moment = moment
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
