<template>
  <div class="webpack-html">
    <WebpackInstall></WebpackInstall>
  </div>
</template>

<script>
import WebpackInstall from '../md/install.md';

export default {
    components: {
        WebpackInstall
    }
}
</script>

<style>
.webpack-html {
    padding: 10px;
}
</style>