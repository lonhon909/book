<template>
    <div class="css_effect">
        <a href="https://juejin.cn/post/7245316146336563261"></a>
        <div class="container">
            <span class="text">Hello Css</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
    font-size: 80px;
    font-weight: bold;
    line-height: 200px;
    text-align: center;
    background-color: black;
    filter: contrast(15);
}
.text {
    color: #fff;
    animation: showup 1.5s linear forwards;
    filter: blur(4px);
}

@keyframes showup {
    0% {
        filter: blur(10px);
        letter-spacing: -20px;
    }
    100% {
        letter-spacing: 0px;
    }
}
</style>