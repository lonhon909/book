<template>
   <div>
       <RequestAnimationFrameDemoMd />
   </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import RequestAnimationFrameDemoMd from '../md/requestAnimationFrame.md';

@Component({
    name: 'RequestAnimationFrameDemo',
    components: {
        RequestAnimationFrameDemoMd
    }
})
export default class RequestAnimationFrameDemo extends Vue {

}
</script>

<style lang="less" scoped>

</style>