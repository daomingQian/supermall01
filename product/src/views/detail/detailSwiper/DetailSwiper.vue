<template>
        <swiper :options="swiperOption" v-if="topImages.length" class="swiper" >
            <swiper-slide v-for="(item,index) in topImages">
                <img :src="item">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
</template>

<script>
    import Swiper from "swiper";
    export default {
        name: "DetailSwiper",
        props: {
            topImages:{
                type : Array,
                require: true,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false
                    }
                }
            }
        }

    }
</script>

<style scoped lang="less">
    .swiper {
        width: 100%;
        height: 250px;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
</style>