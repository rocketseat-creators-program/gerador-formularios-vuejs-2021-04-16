import Vue from 'vue';
import './plugins/vee-validate';
import vuetify from './plugins/vuetify';

import store from './store';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	store,
	vuetify,
	render: h => h(App),
}).$mount('#root');
