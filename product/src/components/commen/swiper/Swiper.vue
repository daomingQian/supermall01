<template>
    <div class="swiper">
        2134qwerqw
            <ul :style="ulStyle">
                <li v-for="item in banner">
                    <a href="../qianjin/">
                        <img :src="item.image" @load="load">
                    </a>
                </li>
            </ul>
            <section class=".sec">
                <span ref="span"></span>
                <span></span>
                <span></span>
                <span></span>
            </section>
    </div>
</template>

<script>
    export default {
        name: 'Swiper',
        props: {
            banner:{
                type: Array,
                require: true
            }
        },
        data(){
            return {
                index: 0,
                left:"0",
                width: window.screen.availWidth
            }
        },
        computed: {
            ulStyle(){
                return {
                    marginLeft: this.left,
                    transition: "0.5s",
                }
            }
        },
        methods: {
            load(){
                this.$emit("bannerLoad")
            }
        },
        created() {
            setTimeout(()=>{
                this.$refs.span.style.backgroundColor = "pink"
            },10)
            setInterval(()=>{
                this.index++
                if(this.index===4){
                    this.index=0
                }
                this.i = this.index
                this.left=`${this.index*-this.width}px`

                let span = document.querySelectorAll("section span")
                span.forEach((item,index)=>{
                    item.style.backgroundColor = "white"
                    if(index===this.index){
                        item.style.backgroundColor = "pink"
                    }
                })
            },3000)
        }
    }
</script>

<style scoped lang="less">
    .swiper{
        position: relative;
        width: 100%;
        height: 195px;
        padding: 50px;
        /*overflow: hidden;*/
        ul{
            width: 400%;
            height: 100%;
            li{
                width: 25%;
                height: 100%;
                float: left;
                img{
                    width: 100%;
                }
            }
        }
        section{
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            display: flex;
            justify-content: space-around;
            bottom: 5px;
            width: 50%;
            padding: 10px 0;
            span{
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: white;
            }
        }
    }
</style>
