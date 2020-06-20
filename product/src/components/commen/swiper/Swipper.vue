<template>
    <div class="swiper" >
        <swiper :options="swiperOption" v-if="banner.length">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in banner">
                <a :href="item.link">
                    <img :src="item.image" @load="load">
                </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
    <!--        <div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--        <div class="swiper-button-next" slot="button-next"></div>-->
    <!--        <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
    </div>
</template>

<script>
    import 'swiper/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Swipper",
        props: {
            banner:{
                type: Array,
                require: true,
                default() {
                    return [];
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
        },
        methods: {
            load(){
                this.$emit("bannerLoad")
            }
        }
    }
</script>

<style scoped lang="less">
    .swiper{
        width: 100%;
        height: 0;
        margin-bottom: 52%;
        img{
            width: 100%;
        }
        /*
            >>> webpack的样式穿透  只支持纯css语法   不支持less  sass
            /deep/webpack的样式穿透的另一种写法    支持less
        */
        & /deep/ .swiper-pagination-bullet-active{
            background-color: red;
        }
    }


</style>