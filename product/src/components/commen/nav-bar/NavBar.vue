<template>
    <div class="nav-bar">
        <div class="left-nav-bar">
            <slot name="left"></slot>
        </div>
        <div class="middle-nav-bar">
            <slot name="middle"></slot>
        </div>
        <div class="right-nav-bar">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="less">
    .nav-bar{
        //使用原生滚轮才需要的属性,使用Better-Scroll就不用了
        //因为Better-Scroll 不包裹nav-bar组件
        //因为Better-Scroll底层用的是transform:translateY()
        /*position: fixed;*/
        /*top: 0;*/
        display: flex;
        width: 100%;
        height: 20px;
        padding: 10px 0;
        z-index: 10;
        .left-nav-bar,.right-nav-bar{
            width: 20%;
        }
        .middle-nav-bar{
            width: 60%;
        }
    }
</style>