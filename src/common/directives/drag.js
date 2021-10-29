
function dragMouse(el) {
    let posX = 0;
    let posY = 0;
    const maxWidth = document.documentElement.clientWidth;
    const maxHeight = document.documentElement.clientHeight;
    const elWidth = el.offsetWidth;
    const elHeight = el.offsetHeight;
    el.onmousedown = (e) => {
        posX = e.pageX - el.offsetLeft;
        posY = e.pageY - el.offsetTop;

        document.onmousemove = (e) => {
            let left = e.pageX - posX;
            let top = e.pageY - posY;
            if (left < 0) {
                left = 0;
            }
            if (left > maxWidth - elWidth) {
                left = maxWidth - elWidth;
            }
            if (top < 0) {
                top = 0;
            }
            if (top > maxHeight - elHeight) {
                top = maxHeight - elHeight;
            }
            el.style.left = left + 'px';
            el.style.top = top + 'px';
        }

        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}

export default {
    /**
     * 
     * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM
     * @param {*} binding 参数对象
     * @param {*} vnode Vue 编译生成的虚拟节点
     * @param {*} oldVnode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
     */
    bind(el, binding, vnode, oldVnode) {
        console.log(binding);
    },
    inserted(el, { value }) {
        if (value) {
            dragMouse(el);
        }
    },
    componentUpdated(el, { value }) {
        if (!value) {
            el.onmousedown = null;
        } else {
            dragMouse(el);
        }
    },
    unbind() {
        console.log('unbind');
    }
}