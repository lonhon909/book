var Toast = {

    init(value, type = 'info') {
        let message, duration;
        if (typeof value === 'string') {
            message = value;
            duration = 1500
        } else if (Object.prototype.toString.call(value) === '[object Object]') {
            message = value.message;
            duration = value.duration || 1500
        }
        if (!message) {
            throw new Error('参数错误')
        }

        const div = document.createElement('div');

        div.innerText = message;

        div.classList.add('global_toast')
        div.classList.add(type)

        document.body.appendChild(div);

        setTimeout(() => {
            div.classList.add('v-enter-to');
        })

        setTimeout(() => {
            div.classList.remove('v-enter-to');
            div.classList.add('v-leave-to');

            setTimeout(() => {
                div.remove()
            }, 300)
        }, duration)
    },

    success(value) {
        this.init(value, 'success')
    },

    error(value) {
        this.init(value, 'error')
    },

    info(value) {
        this.init(value)
    }
}