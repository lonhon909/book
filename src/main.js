import Vue from 'vue';
import router from './router';
import App from './App';

// import iViewUI from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/style';

import vLoading from './common/directives/loading';
Vue.directive('loading', vLoading);

// Vue.use(iViewUI);
import iview from './iview';

Object.keys(iview).forEach((item) => Vue.component(item, iview[item]));

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
