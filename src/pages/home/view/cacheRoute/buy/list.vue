<template>
    <div>
        <Button @click="num+=1">{{num}}</Button>
        <Button @click="$router.push({name:'CacheRouteBuyDetail'})">详情页 buy-detail</Button>
        <pre>
            /buy
                list (进入详情页缓存)
                detail
            /shop
                book
                    food (进入详情页缓存)
                    food-detail
                materials
                    metal (进入详情页缓存)
                    metal-detail
        </pre>
    </div>
</template>

<script>
export default {
    name: 'CacheRouteBuy',
    data() {
        return {
            num: 1
        }
    }
}
</script>

<style>

</style>