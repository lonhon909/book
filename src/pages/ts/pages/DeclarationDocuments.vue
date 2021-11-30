<template>
    <div>
        <DeclarationDocumentsMd />
        <p id="p"></p>
        <Button @click="add">btn--{{num}}</Button>
    </div>
</template>

<script lang="ts">
import type { Route } from 'vue-router';
import { Vue, Component } from 'vue-property-decorator';
import DeclarationDocumentsMd from '../md/DeclarationDocuments.md';

import text from './declare.txt';

Component.registerHooks([
    'beforeRouteLeave',
    'activated'
])

@Component({
    components: {
        DeclarationDocumentsMd
    },
})
export default class DeclarationDocuments extends Vue {
    title: string = ''
    num: number = 1
    mounted() {
        this.title = __isMobile__ ? 'mobile' : 'pc';
        this.$nextTick(() => {
            $('#p').text(text);

            const p = new Person('小心', 18);
            console.log(p, Target.value.age);
            console.log(Target.init());
            const vp = new Target.Person('张三');
            console.log(vp);

            const f: Observable = {
                name: ''
            }
        })
    }
    add() {
        this.num += 1
    }
}

</script>

<style>

</style>