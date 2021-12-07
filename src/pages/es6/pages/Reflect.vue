<template>
   <div>
       <ReflectMd />
   </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ReflectMd from '../md/Reflect.md';

@Component({
    name: 'ReflectDemo',
    components: {
        ReflectMd
    }
})
export default class ReflectDemo extends Vue {

}
</script>

<style lang="less" scoped>

</style>