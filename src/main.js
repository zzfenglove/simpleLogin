import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.prototype.$http = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

router.beforeEach(function (to, from, next) { 
	console.log(to); 
	if(to.meta.requireAuth){
		if(window.localStorage.getItem('usertoken')!=""){
			next();
		}else{
			router.push({name: 'login'});  
		}
	}
    next();  
});  
