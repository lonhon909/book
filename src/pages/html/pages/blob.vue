<template>
    <div>
        <br>
        <input type="file" @change="handleChange($event.target.files[0])">
        <div v-if="src">
            <p>点击下载</p>
            <img class="calc_image" :src="src" alt="">
        </div>
        <br>
        <br>
        <hr>

        <BlobFileMd></BlobFileMd>
    </div>
</template>

<script>
import BlobFileMd from '../md/blob.md';

export default {
    name: 'BlobFile',

    components: {
        BlobFileMd
    },

    data() {
        return {
            src: ''
        };
    },

    mounted() {},

    methods: {
        handleChange(file) {
            console.log('"file instanceof File"', file instanceof File);
            console.log('"file instanceof Blob"', file instanceof Blob);
            // const file = e.target.files[0];

            // const url = URL.createObjectURL(file);

            // this.src = url;

            // const read = new FileReader();

            // read.onload = (e) => {
            //     console.log(e.target.result);
            // };

            // read.readAsDataURL(file);

            // file.text().then(console.log)
        }
    }
}
</script>

<style lang="less" scoped>
.calc_image {
    max-width: 200px;
}
</style>