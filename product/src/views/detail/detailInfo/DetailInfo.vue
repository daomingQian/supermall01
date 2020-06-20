<template>
    <div class="info">
        <section>
            <p class="top"></p>
            <p class="middle" @click="foo">{{info.desc}}</p>
            <p class="bottom"></p>
        </section>
        <section>
            <ul v-for="item in info.detailImage">
                <li>{{item.key}}</li>
                <li v-for="el in item.list">
                    <img :src="el" @load="load">
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "DetailInfo",
        // data(){
        //   return {
        //       list:[],
        //   }
        // },
        props: {
            info: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        methods: {
            foo() {
                console.log(this.info.detailImage)
            },
            load(){
                this.$emit("loadEnd")
            }
        }
    }
</script>

<style scoped lang="less">
    .info{
        section:nth-child(1){
            padding: 8px 10px;
            .top{
                width: 25%;
                border-bottom: 2px solid darkgrey;
                &:after{
                    display: block;
                    content: "";
                    width: 5px;
                    height: 5px;
                    background-color: black;
                }
            }
            .bottom{
                position: relative;
                width: 25%;
                border-bottom: 2px solid darkgrey;
                margin-left: 75%;
                &:before{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    display: block;
                    content: "";
                    width: 5px;
                    height: 5px;
                    background-color: black;
                }
            }
            .middle{
                padding: 8px 0;
                font-size: 12px;
                color: gray;
            }
        }
        section{
            li:nth-child(1){
                text-indent: 10px;
            }
            li{
                img{
                    width: 100%;
                }
            }
        }
    }
</style>