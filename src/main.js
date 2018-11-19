// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/reset.scss';

import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import ElementUI from 'element-ui';
import storeApp from './store/index.js';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;

Vue.http.options.root = window.config.api_root_url;
Vue.http.headers.common['Authorization'] = `Token ${window.config.guestToken}`;

const store = new Vuex.Store({
    modules: {
        app: storeApp
    },
});

/* eslint-disable no-new */
let app = new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    data: function(){
        return {
            question: [],
        };
    },
    created() {
        this.$store.dispatch('fetchData');
    },
    template: '<App/>',
});

window.app = app;