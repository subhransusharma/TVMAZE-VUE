import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// https://stackoverflow.com/questions/64925926/error-postcss-plugin-tailwindcss-requires-postcss-8#comment115414546_64958600
// npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat  postcss@^7 autoprefixer@^9
import '@/assets/css/tailwind.css'
import routes from './routes.js'

new Vue({
  router: routes,
  render: h => h(App),
}).$mount('#app')


