<template>
    <div class="bar-item" @click="foo">
        <div v-show="!active">
            <slot name="svg"></slot>
        </div>
        <div v-show="active">
            <slot name="svg-active"></slot>
        </div>
        <div :style="color">
            <slot name="key"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BarItem",
        props: {
            path:{
                type: String,
                require: true
            }
        },
        methods: {
            foo(){
                if(this.path===this.$route.path)return
                this.$router.replace(this.path)
            }
        },
        computed: {
            active(){
                return (this.path===this.$route.path  || this.path===this.$route.path+"home")
            },
            color(){
                return this.active? {color:"pink"}:{}
            }
        }
    }
</script>

<style scoped>

</style>