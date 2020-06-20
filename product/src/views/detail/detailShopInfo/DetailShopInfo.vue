<template>
    <section class="shopInfo">
        <div>
            <p><img :src="shopInfo.shopLogo" alt=""></p>
            <div>{{shopInfo.name}}</div>
        </div>
        <article>
            <div class="left">
                <p>{{shopInfo.cSells | cSells}}</p>
                <p>总销量</p>
            </div>
            <div class="right">
                <p>{{shopInfo.cGoods}}</p>
                <p>全部宝贝</p>
            </div>
            <ul>
                <li v-for="item in shopInfo.score">
                    <p>{{item.name}}</p>
                    <p class="pMiddle">{{item.score}}</p>
                    <p class="pRight" :class="{isBetter:item.isBetter}">{{item.isBetter | isBetter}}</p>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
    export default {
        name: "DetailShopInfo",
        props:{
            shopInfo:{
                type: Object,
                default(){
                    return {}
                }
            }
        },
        filters:{
            cSells(item){
                let result = item
                if(item>=10000){
                    return (item/10000).toFixed(1)+"万"
                }
                return  result
            },
            isBetter(item){
                let result = "低"
                if(item){
                    result = "高"
                }
                return result
            }
        }
    }
</script>

<style scoped lang="less">
    .shopInfo{
        padding: 8px;
        border-bottom: 4px solid #FAFAFA;
        & > div{
            display: flex;
            p{
                width: 40px;
                height: 40px;
                img{
                    height: 100%;
                    border-radius: 50%;
                }
            }
            div{
                flex: 1;
                height: 40px;
                margin-left: 8px;
                line-height: 40px;
                font-size: 16px;
                color: #BBBBBB;
            }
        }
        & > article{
            display: flex;
            font-size: 12px;
            div{
                width: 25%;
                margin: auto;
                p{
                    margin: auto;
                    text-align: center;
                }
            }
            .right{
                border-right: 2px solid gainsboro;
            }
            ul{
                flex: 1;
                padding: 0 25px;
                li{
                    display: flex;
                    justify-content: space-between;
                    margin: 5px 0;
                    p{
                        text-align: center;
                    }
                    .pMiddle{
                        color: #E14934;
                    }
                    .pRight{
                        background-color: #096;
                        color: white;
                    }
                    .isBetter{
                        background-color: #E14934;
                    }
                }
            }
        }
    }
</style>