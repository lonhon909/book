<template>
    <div>
        <VueCheckedMd />
        <br>
        <VueChecked v-model="checked" />
    </div>
</template>

<script>
import VueChecked from '../components/vue-checked.vue';
import VueCheckedMd from '../md/v-model.md';

export default {
    name: 'VueModal',
    components: {
        VueChecked,
        VueCheckedMd
    },
    data() {
        return {
            checked: true
        }
    },
}
</script>
