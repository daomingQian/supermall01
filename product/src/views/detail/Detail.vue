<template>
    <div class="detail" v-if="iid">
        <detail-nav-bar></detail-nav-bar>
        <scroll ref="scroll">
            <template>
                <detail-swiper :topImages="topImages"></detail-swiper>
                <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
                <detail-shop-Info :shopInfo="shopInfo"></detail-shop-Info>
                <detail-info :info="info" @loadEnd="loadEnd"></detail-info>
                <detail-item-params :itemParams="itemParams"></detail-item-params>
                <detail-rate :rate="rate"></detail-rate>
                <goods-list :list="recommend" @loadEnd="loadEnd"></goods-list>
            </template>
        </scroll>
    </div>
</template>

<script>
    import DetailNavBar from "./detailNavBar/DetailNavBar";
    import DetailSwiper from "./detailSwiper/DetailSwiper";
    import DetailBaseInfo from "./detailBaseInfo/DetailBaseInfo";
    import DetailScroll from "./detailScroll/DetailScroll";
    import DetailShopInfo from "./detailShopInfo/DetailShopInfo";
    import DetailInfo from "./detailInfo/DetailInfo";
    import DetailItemParams from "./detailItemParams/DetailItemParams";
    import DetailRate from "./detailRate/DetailRate";
    import GoodsList from "components/content/goods/GoodsList";

    import {getDetail,GoodsInfo,getRecommend} from "network/detail.js"
    export default {
        name: "Detail",
        data(){
            return {
                iid: 0,
                topImages: [],
                goodsInfo: {},
                shopInfo: {},
                info: {},
                itemParams: {},
                rate: {},
                recommend: []
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailScroll,
            DetailShopInfo,
            DetailInfo,
            DetailItemParams,
            DetailRate,
            GoodsList
        },
        methods: {
            //每张图片加载结束执行  加上防抖操作  刷新可滑动尺寸
            loadEnd(){
                clearTimeout(this.timer)
                this.timer = setTimeout(()=>{
                    this.$refs.scroll.fresh()
                },100)
            },
            // 请求网路数据
            getDgetDetail(iid){
                getDetail(iid).then(msg=>{
                    this.topImages = msg.data.result.itemInfo.topImages
                    this.goodsInfo = new GoodsInfo(msg.data.result.itemInfo, msg.data.result.columns, msg.data.result.shopInfo.services)
                    this.shopInfo = msg.data.result.shopInfo
                    this.info = msg.data.result.detailInfo
                    this.itemParams = msg.data.result.itemParams
                    if(msg.data.result.rate.cRate>0){
                        this.rate = msg.data.result.rate.list[0]
                    }
                })
            },
            getRecommend(){
                getRecommend().then(msg=>{
                    this.recommend = msg.data.data.list
                    console.log(this.recommend)
                })
            }
        },
        created() {
            this.iid = this.$route.params.iid
            console.log(this.$route.params.iid)
            this.getDgetDetail(this.$route.params.iid)
            this.getRecommend(this.recommend)
        }
    }
</script>

<style scoped lang="less">
    .detail{
        position: relative;
        height: 100vh;
        background-color: #fff;
        z-index: 3;
    }
</style>