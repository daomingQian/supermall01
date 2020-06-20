<template>
    <div class="scroll" ref="wrap">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Bscroll from "better-scroll";

    export default {
        name: "DetailScroll",
        data(){
            return {
                Bs: null
            }
        },
        mounted() {
            this.Bs = new Bscroll(this.$refs.wrap,{
                //是否可以点击 除input标签外
                click: true,
                //监听类型
                probeType: 3,
                //是否可以上拉
                pullUpLoad: true
            })
        },
        methods: {
            fresh(){
                this.Bs.refresh()
            }
        }
    }
</script>

<style scoped>
    .scroll{
        position: absolute;
        top: 40px;
        bottom: 0px;
        width: 100%;
        background-color: whitesmoke;
        overflow: hidden;

    }
</style>