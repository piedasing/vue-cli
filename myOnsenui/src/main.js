import Vue from 'vue'
import App from './App'
// import router from './router'

// Webpack CSS import
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// import CSS file
import './sass/style.sass'

import 'font-awesome/css/font-awesome.css'

// JS import
import VueOnsen from 'vue-onsenui' // This already imports 'onsenui'

Vue.use(VueOnsen)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
