import './public-path';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
// import './test';

// import iViewUI from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/style';

import vLoading from './common/directives/loading';
Vue.directive('loading', vLoading);

// Vue.use(iViewUI);
import iview from './iview';

Object.keys(iview).forEach((item) => Vue.component(item, iview[item]));

Vue.mixin({
    beforeMount() {
        if (this.$route.meta?.keepAlive) {
            const cache = this.$store.state.cachesIncludes;
            if (!cache.includes(this.$route.name)) {
                cache.push(this.$route.name)
            }
            this.$store.commit('setCache', cache.slice());
        }
    }
})

let app = null;

export async function bootstrap() {
    console.log('bootstrap')
}

export async function mount(props) {
    app = new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount(props.container.querySelector('#app'));
}

export async function unmount() {
    app.$destroy();
    app.$el.innerHTML = '';
    app = null;
}

if (!window.__POWERED_BY_QIANKUN__) {
    new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    });
}