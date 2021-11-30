import Vue from 'vue';
import Vuex, { Store } from '../../node_modules/vuex/dist/vuex.common';

Vue.use(Vuex)

const store = new Store({
    state: {
        appName: 'book',
        demoName: 'vuex',
        arr: [],
        age: 1,
        // 缓存
        cachesIncludes: [],
        logo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.wangyunw.com%2Ffile%2F20170324%2Fimages%2F63918611ly1fdoygy62ydj20b40b43yj.jpg&refer=http%3A%2F%2Fimg.wangyunw.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639015074&t=4382d1419c5c9a0389266890bec5045e'
    },
    mutations: {
        addAge(state, age) {
            state.age = age;
        },
        changeArr(state, data) {
            state.arr = data;
        },

        setCache(state, payload) {
            state.cachesIncludes = payload;
        }
    },
    actions: {
        changeAsyncArr(context, params) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const arr = [1, 2, 3];
                    resolve(arr);
                    context.commit('changeArr', arr)
                }, 1000)
            })
        }
    },
    getters: {}
});

export default store;
