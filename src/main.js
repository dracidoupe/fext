import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)

var selectedSkin = localStorage.getItem('ddcz-skin') || 'light'

var store = {
  debug: true,
  state: {
    skin: selectedSkin
  },
  setSkin (skin) {
    // TODO: Validation
    this.state.skin = skin
    localStorage.setItem('ddcz-skin', skin)
    if (this.debug) console.log('skin changed to', skin)

    // TODO: Remove naming duplication
    this.state.currentSkin = skin
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    store: store
  },
  render: h => h(App)
})
