<template>
    <div class="baseInfo">
        <p>{{goodsInfo.desc}}</p>
        <span class="price">{{goodsInfo.price}}</span>
        <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
        <span class="discount" :class="{bc:goodsInfo.discount}">{{goodsInfo.discount}}</span>
        <ul class="columns">
            <li v-for="item in goodsInfo.columns">{{item}}</li>
        </ul>
        <ul class="service">
            <li v-for="item in goodsInfo.service">
                <img :src="item.icon" alt="">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props: {
            goodsInfo:{
                type: Object,
                require: true,
                default(){
                    return {}
                }
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="less">
    .baseInfo{
        padding: 8px;
        border-bottom: 4px solid #FAFAFA;
        p{
            margin-bottom: 8px;
            font-size: 14px;
        }
        .price{
            font-size: 20px;
            color: #F47293;
        }
        .oldPrice{
            display: inline-block;
            color: darkgrey;
            font-size: 12px;
            margin: 0 5px;
            text-decoration: line-through;
        }
        .bc{
            background-color: #FF6471;
        }
        .discount{
            display: inline-block;
            padding: 2px 4px;
            border-radius: 10px;
            color: whitesmoke;
            font-weight: 700;
        }
        .columns{
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            color: darkgrey;
            font-size: 12px;
        }
        .service{
            display: flex;
            justify-content: space-between;
            padding: 16px 0;
            border-top: 2px solid #FAFAFA;
            li{
                display: flex;
                margin-left: 2px;
                img{
                    width: 12px;
                }
                font-size: 12px;
            }
        }
    }
</style>