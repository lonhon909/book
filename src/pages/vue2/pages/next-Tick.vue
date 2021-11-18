<template>
  <div>
    <NextTickMd />
    <br>
    <p id="p" @click="add">{{name}}</p>
  </div>
</template>

<script>
import NextTickMd from '../md/next-Tick.md';

export default {
    components: {
        NextTickMd
    },
    data() {
        return {
            name: 1
        }
    },
    methods: {
        add() {
            this.name += 1;
            this.$nextTick(() => {
                console.log(1, document.getElementById('p').innerText)
            })
            console.log(2, document.getElementById('p').innerText)
            this.$nextTick(() => {
                console.log(3, document.getElementById('p').innerText)
            })
        }
    }
}
</script>

<style>

</style>