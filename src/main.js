import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './views/store'
import 'materialize-css/dist/js/materialize.min'
import fireBase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

fireBase.initializeApp = {
  apiKey: "AIzaSyCTdRjeTZ7X37zdq0h44g93aVrI1new5zk",
  authDomain: "needtodo-601b3.firebaseapp.com",
  databaseURL: "https://needtodo-601b3.firebaseio.com",
  projectId: "needtodo-601b3",
  storageBucket: "needtodo-601b3.appspot.com",
  messagingSenderId: "1036757207500",
  appId: "1:1036757207500:web:68654c86ba3359cc0ef569",
  measurementId: "G-DMP4VTK12N"
};