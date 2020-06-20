<template>
    <div class="rate">
        <article>
            <span>用户评价</span>
            <span>更多</span>
        </article>
        <div class="left" v-if="rate.user">
            <p><img :src="rate.user.avatar" alt=""></p>
            <p>{{rate.user.uname}}</p>
        </div>
        <p class="p1">
            {{rate.content}}
        </p>
        <section>
            <span>{{rate.created | time(rate.created)}}</span>
            <span>{{rate.style}}</span>
        </section>
        <p class="p2" v-if="rate.images">
            <img :src="item" alt="" v-for="item in rate.images">
        </p>
    </div>
</template>

<script>
    import {formate} from "components/commen/utils/index.js"
    export default {
        name: "DetailRate",
        props: {
            rate: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        filters: {
            time(date){
                return formate(date)
            }
        }
    }
</script>

<style scoped lang="less">
    .rate{
        padding: 8px 10px;
        border-bottom: 4px solid #FAFAFA;
        article{
            padding: 8px 0;
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid darkgrey;
        }
        .left{
            padding: 8px 0;
            height: 30px;
            display: flex;
            p{
                height: 30px;
                line-height: 30px;
                padding-right: 5px;
                img{
                    height: 100%;
                }
            }
        }
        .p1{
            padding: 8px 0;
            font-size: 12px;
            color: gray;
        }
        section{
            display: flex;
            padding: 8px 0;
            font-size: 12px;
            color: gray;
            span{
                padding-right: 5px;
            }
        }
        .p2{
            img{
                width: 24%;
                margin-right: 1%;
            }
        }
    }
</style>