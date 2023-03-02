import Vue from 'vue';
import { registerMicroApps, start } from 'qiankun';
import router from './router';
import store from './store';
import App from './App';
import subApps from './sub-app';
// import './test';

// import iViewUI from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/style';

import vLoading from './common/directives/loading';
Vue.directive('loading', vLoading);
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload)

// Vue.use(iViewUI);
import iview from './iview';

Object.keys(iview).forEach((item) => Vue.component(item, iview[item]));

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount(document.querySelector('#app'));

registerMicroApps(subApps, {
    beforeLoad() {
        console.log('beforeLoad');
    },
    beforeMount () {
        console.log('beforeMount');
    },
    afterMount () {
        console.log('afterMount');
    },
    beforeUnmount () {
        console.log('beforeUnmount');
    },
    afterUnmount () {
        console.log('afterUnmount');
    },
})

start();