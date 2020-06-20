<template>
    <div class="recommendView">
        <div class="recommendView_item" v-for="item in recommend">
            <a :href="item.link">
                <img :src="item.image" @load="load">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props: {
            recommend:{
                type: Array,
                require: true
            }
        },
        methods: {
            load(){
                this.$emit("recommendLoad")
            }
        }
    }
</script>

<style scoped lang="less">
    .recommendView{
        display: flex;
        padding: 10px 0 15px;
        margin-top: 40px;
        border-bottom: 15px solid #eee;
        .recommendView_item{
            flex: 1;
            text-align: center;
            img{
                width: 75%;
            }
        }
    }
</style>