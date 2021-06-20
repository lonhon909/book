import Vue from 'vue';
import router from './router';
import App from './App';

import iViewUI from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/style';

Vue.use(iViewUI);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
