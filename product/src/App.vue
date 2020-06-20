<template>
  <div id="app">
    <tab-bar></tab-bar>
<!--      <slide :name="name">-->
        <keep-alive exclude="Detail">
            <router-view class="center"></router-view>
        </keep-alive>
<!--      </slide>-->

  </div>
</template>

<script>
  export default {
    name: "APP",
    data(){
      return {
        name: ""
      }
    },
    watch: {
      $route(to,from){
        if(to.meta.index>from.meta.index){
          this.name = "left"
        } else if(to.meta.index<from.meta.index){
          this.name = "right"
        }
      }
    }
  }
</script>
<style scoped lang="less">
#app {
  .center{
    float: left;
    position: relative;
    width: 100%;
      background-color: #fff;
  }
}
</style>
