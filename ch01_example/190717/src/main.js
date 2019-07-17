import Vue from 'vue'
// import TodoList from './components/TodoList.vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
