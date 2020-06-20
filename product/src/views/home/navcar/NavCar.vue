<template>
    <div class="nav-car">
        <nav-bar>
            <template #middle><span>购物街</span></template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../../components/commen/nav-bar/NavBar";
    export default {
        name: "NavCar",
        components: {
            NavBar
        }
    }
</script>

<style scoped lang="less">
    .nav-car{
        background-color: pink;
    }
    span{
        display: block;
        font-weight: bolder;
        font-size: 16px;
        text-align: center;
        color: whitesmoke;
    }
</style>