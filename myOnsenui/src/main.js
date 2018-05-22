import Vue from 'vue'
import App from './App'
import router from './router'

// Webpack CSS import
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// import CSS file
import './sass/style.sass'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

// JS import
import VueOnsen from 'vue-onsenui' // This already imports 'onsenui'

Vue.use(VueOnsen)

Vue.config.productionTip = false

fontawesome.library.add(solid) // Use any icon from the Solid style
fontawesome.library.add(regular)
fontawesome.library.add(brands)

Vue.component('font-awesome-icon', FontAwesomeIcon)

window.$ = window.jQuery = require('jquery')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
