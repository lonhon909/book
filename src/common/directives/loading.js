import Vue from 'vue';
import IviewLoading from './Loading.vue';

const Loading = Vue.extend(IviewLoading);
let vNode = null;

function addLoading(el) {
    el.classList.add('loading-relative');
    vNode = new Loading({
        propsData: {
            loading: true
        },
        destroyed() {
            el.classList.remove('loading-relative');
        }
    });
    el.appendChild(vNode.$mount().$el);
}
function removeLoading() {
    if (vNode) {
        vNode.loading = false;
        vNode = null;
    }
}

export default {
    bind(el) {},
    inserted(el, { value }) {
        if (value) {
            addLoading(el);
        }
    },
    componentUpdated(el, { value }) {
        if (!value) {
            removeLoading(el);
        } else {
            addLoading(el);
        }
    },
    unbind() {}
}