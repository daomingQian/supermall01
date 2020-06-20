<template>
    <div class="slide">
        <transition :name="name">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Slide",
        props: {
            name:{
                type: String,
                require: true
            }
        }
    }
</script>

<style scoped>
    .right-leave-active{
        transform: translateX(0%);
        transition: 1s;
    }
    .right-leave-to{
        transform: translateX(100%);
    }
    .right-enter-active{
        transform: translateX(-100%);
        transition: 1s;
    }
    .right-enter-to{
        transform: translateX(0%);
    }
    .left-leave-active{
        transform: translateX(0%);
        transition: 1s;
    }
    .left-leave-to{
        transform: translateX(-100%);
    }
    .left-enter-active{
        transform: translateX(100%);
        transition: 1s;
    }
    .left-enter-to{
        transform: translateX(0%);
    }
</style>