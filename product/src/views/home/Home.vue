<template>
  <div class="home">
    <nav-car></nav-car>
    <tab-control :title="title" @clickTab="getIndex" ref="tab1" v-show="isShowTabControl"></tab-control>
    <scroll ref="scroll" :probe="probe" :pullUp="pullUp" @scroll="judgeY" @loadMore="loadMuch">
      <template>
        <swipper :banner="banner" @bannerLoad="bannerLoad"></swipper>
        <recommend-view :recommend="recommends" @recommendLoad="recommendLoad"></recommend-view>
        <feature @featureLoad="featureLoad"></feature>
        <tab-control :title="title" @clickTab="getIndex" ref="tab2"></tab-control>
        <goods-list :list="currentList" @loadEnd="loadEnd"></goods-list>
      </template>
    </scroll>
    <back-top @click.native="top" v-show="isBackTopShow"></back-top>
  </div>
</template>
<script>
import {getHomeData,getHomeType} from "network/home.js"

import NavCar from "./navcar/NavCar";
import RecommendView from "./childComps/RecommendView";
import Feature from "./feature/Feature";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
export default {
    name: 'Home',
    data(){
        return {
            banner: [],
            recommends: [],
            title: ['流行','新款','精选'],
            goods:{
                pop: {page:0,list:[]},
                new: {page:0,list:[]},
                sell: {page:0,list:[]}
            },
            currentGoods: "pop",
            probe: 3,
            pullUp:true,
            isBackTopShow: false,
            timer: null,
            isShowTabControl: false,
            tabControlHeight: 0,
            leaveY: 0
        }
    },
    computed: {
        currentList(){
            return this.goods[this.currentGoods].list
        }
    },
    methods: {
      //请求home数据
      //得到点击第几个选项
      getIndex(index){
          switch (index) {
              case 0: this.currentGoods="pop"
                  break;
              case 1: this.currentGoods="new"
                  break;
              case 2: this.currentGoods="sell"
                  break;
          }
          this.$refs.tab1.index_tab = index
          this.$refs.tab2.index_tab = index
      },
      //点击按钮回到顶部
      top(){
        this.$refs.scroll.backTop(0,0,300)
      },
      //实时监听滑动距离
      judgeY(position){
        //判断是否要隐藏回到顶部按钮
        if(position.y<-1000){
          this.isBackTopShow=true
        }else {
          this.isBackTopShow=false
        }
        //判断滑动了第二个tabControl的$el的offsetTop距离
        if(position.y<-this.tabControlHeight){
          this.isShowTabControl=true
        }else {
          this.isShowTabControl=false
        }
      },
      //上拉加载更多
      loadMuch(){
        this.getHomeType(this.currentGoods)
      },
      //每张图片加载结束执行  加上防抖操作  刷新可滑动尺寸
      loadEnd(){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
          this.$refs.scroll.fresh()
        },100)
      },

      //吸顶效果前的图片加载结束 最后一次赋值给tabControlHeight为准
      bannerLoad(){
        this.tabControlHeight = this.$refs.tab2.$el.offsetTop
      },
      recommendLoad(){
        this.tabControlHeight = this.$refs.tab2.$el.offsetTop
      },
      featureLoad(){
        this.tabControlHeight = this.$refs.tab2.$el.offsetTop
      },
      //请求网络方法
        getHomeData(){
          getHomeData().then(msg=>{
            this.banner = msg.data.data.banner.list
            this.recommends = msg.data.data.recommend.list
          })
        },
        async getHomeType(type){
          const page = this.goods[type].page+1
          await getHomeType(type,page).then(msg=>{
            this.goods[type].page +=1
            this.goods[type].list.push(...msg.data.data.list)
          })
          //完成下一次下拉加载更多
          this.$refs.scroll.finishUp()
        }
    },
    components: {
        RecommendView,
        Feature,
        GoodsList,
        BackTop,
        NavCar
    },
  //创建完成就先从后端获取数据
    created() {
        this.getHomeData()
        this.getHomeType("pop")
        this.getHomeType("new")
        this.getHomeType("sell")
    },
  //将离开时的scroll的y值 赋值给返回时页面scroll的y值 然后刷新一下可滑动区域
    activated() {
      this.$refs.scroll.backTop(0,this.leaveY,0)
      this.$refs.scroll.fresh()
    },
  //记录离开时的scroll的y值
    deactivated() {
      this.leaveY = this.$refs.scroll.getY()
    }
}
</script>
<style scoped lang="less">
  .home{
    height: 100vh;
  }
</style>
