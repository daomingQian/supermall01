<template>
    <div class="tabControl">
        <div class="tabItem" v-for="(item,index) in title">
            <span :class="{active: index===index_tab}"
                  @click="foo($event,index)">
                {{item}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data(){
            return {
                index_tab: 0,
            }
        },
        props: {
            title: {
                type: Array,
                default: []
            }
        },
        methods: {
            foo(e,index){
                this.index_tab = index
                this.$emit("clickTab",index)
            },
        }
    }
</script>

<style scoped lang="less">
    .tabControl{
        position: relative;
        display: flex;
        justify-content: space-around;
        background-color: white;
        padding-bottom: 4px;
        z-index: 10;
        .tabItem{
            flex: 1;
            height: 40px;
            line-height: 40px;
            text-align: center;
            span{
                /*display: block;*/
                padding: 8px;
            }
            .active{
                border-bottom: 4px solid pink;
                color: pink;
            }
        }
    }
</style>