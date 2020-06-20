<template>
    <div class="goodsList">
        <goods-item v-for="item in list">
            <template #images>
                <img :src="showImg(item)" @load="onload" @click="skip($event,item.iid)">
                <p>{{item.title}}</p>
                <section>
                    <span>{{item.price}}￥</span>
                    <img :src="img">
                    <span>{{item.cfav}}</span>
                </section>
            </template>
        </goods-item>
    </div>
</template>

<script>
    import GoodsItem from "./GoodsItem";
    export default {
        name: "GoodsList",
        data(){
            return {
                img: require('@/assets/imgs/home/collect.svg')
            }
        },
        computed: {
          showImg(item){
              return function (item) {
                  return  item.show? item.show.img : item.image
              }
          }
        },
        components: {
            GoodsItem
        },
        props: {
            list:{
                type: Array,
                default: []
            }
        },
        methods:{
            onload(){
                this.$emit("loadEnd")
            },
            skip(e,iid){
                this.$router.push("detail/"+`${iid}`)
            }
        }
    }
</script>

<style scoped lang="less">
    .goodsList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0 2px;
        .goodsItem{
            width: 48%;
            margin-bottom: 5px;
            & > img{
                width: 100%;
            }
            p{
                width: 100%;
                height: 20px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            section{
                display: flex;
                justify-content: center;
                span:nth-child(1){
                    color: red;
                }
                img{
                    width: 20px;
                    margin: 0 2px;
                }
            }
        }
    }
</style>