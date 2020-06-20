<template>
    <div class="feature">
        <a href="https://act.mogujie.com/zzlx67">
            <img src="~assets/imgs/home/popular.jpg" @load="load">
        </a>
    </div>
</template>

<script>
    export default {
        name: "Feature",
        methods: {
            load(){
                this.$emit("featureLoad")
            }
        }
    }
</script>

<style scoped lang="less">
    .feature{
        img{
            width: 100%;
        }
    }
</style>