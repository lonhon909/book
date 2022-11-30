<template>
    <div class="list">{{url}}</div>
</template>

<script>
console.log('*****', process.env.NODE_ENV)
export default {
    name: 'list',

    data() {
        return {
            url: HOST
        }
    }
}
</script>

<style lang="less" scoped>
.list {
    color: red;
}
</style>