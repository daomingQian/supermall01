<template>
    <div class="tab-bar">
        <bar-item path="/home">
            <template #svg>
                <img src="~assets/imgs/tabbar/home.svg" alt="">
            </template>
            <template #svg-active>
                <img src="~assets/imgs/tabbar/home_active.svg" alt="">
            </template>
            <template #key>
                <p>首页</p>
            </template>
        </bar-item>
        <bar-item path="/category">
            <template #svg>
                <img src="~assets/imgs/tabbar/category.svg" alt="">
            </template>
            <template #svg-active>
                <img src="~assets/imgs/tabbar/category_active.svg" alt="">
            </template>
            <template #key>
                <p>分类</p>
            </template>
        </bar-item>
        <bar-item path="/cart">
            <template #svg>
                <img src="~assets/imgs/tabbar/cart.svg" alt="">
            </template>
            <template #svg-active>
                <img src="~assets/imgs/tabbar/cart_active.svg" alt="">
            </template>
            <template #key>
                <p>购物车</p>
            </template>
        </bar-item>
        <bar-item path="/user">
            <template #svg>
                <img src="~assets/imgs/tabbar/profile.svg" alt="">
            </template>
            <template #svg-active>
                <img src="~assets/imgs/tabbar/profile_active.svg" alt="">
            </template>
            <template #key>
                <p>我的</p>
            </template>
        </bar-item>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped lang="less">
    .tab-bar{
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 10px;
        background-color: #F6F6F6;
        font-size: 16px;
        text-align: center;
        z-index: 2;
        img{
            width: 30px;
        }
    }

</style>