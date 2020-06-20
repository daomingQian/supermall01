<template>
    <div class="detail-nav-bar">
        <nav-bar>
            <template #left>
                <p @click="backHome"> < </p>
            </template>
            <template #middle>
                <div class="m_midd">
                    <span v-for="(item,index) in nav"
                          @click="changeIndex($event,index)"
                          :class="{navItem: index===currentIndex}">
                        {{item}}</span>
                </div>
            </template>
        </nav-bar>
    </div>
</template>

<script>
    export default {
        name: "DetailNavBar",
        data(){
            return {
                nav: ["商品","参数","评论","推荐"],
                currentIndex: 0
            }
        },
        methods: {
            changeIndex(e,index){
                this.currentIndex = index
            },
            backHome(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped lang="less">
    .detail-nav-bar{
        border-bottom: 2px solid #EEEEEE;
        p{
            width: 50%;
            margin: -8px auto 0;
            font-size: 25px;
            font-weight: 700;
            text-align: center;
        }
    }
    .m_midd{
        display: flex;
    }
    span{
        display: block;
        width: 25%;
        text-align: center;
    }
    .navItem{
        color: #FF5778;
    }
</style>