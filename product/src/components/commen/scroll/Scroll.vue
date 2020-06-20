<template>
    <div class="scroll" ref="wrap">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Bscroll from "better-scroll"
    export default {
        name: "Scroll",
        data(){
            return {
                Bs: null
            }
        },
        props: {
            probe: {
                type: Number
            },
            pullUp: {
                type: Boolean
            }
        },
        //获取节点不能在还没挂载到节点之前 也就是不能在created钩子里获取
        mounted() {
            this.Bs = new Bscroll(this.$refs.wrap,{
                //是否可以点击 除input标签外
                click: true,
                //监听类型
                probeType: this.probe,
                //是否可以上拉
                pullUpLoad: this.pullUp
            })
            //监听全局位置信息
            this.Bs.on("scroll",(position)=>{
                this.$emit("scroll",position)
            })
            //上拉加载更多
            this.Bs.on("pullingUp",()=>{
                this.$emit("loadMore")
            })
        },
        methods: {
            // 回到具体的位置在规定时间内
            backTop(x,y,ms){
                this.Bs.scrollTo(x,y,ms)
            },
            // 可进行下一次上拉加载更多
            finishUp(){
                this.Bs.finishPullUp()
            },
            // 刷新可滑动尺寸
            fresh(){
                this.Bs.refresh()
            },
            // 获取当前的scroll的y位置
            getY(){
                return  this.Bs.y
            }
        }
    }
</script>

<style scoped lang="less">
    //滑动区域的定位以及超出隐藏
    .scroll{
        position: absolute;
        top: 40px;
        bottom: 75px;
        width: 100%;
        overflow: hidden;
    }
</style>