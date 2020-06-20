<template>
    <div class="det" @click="foo">
        {{det}}
    </div>
</template>

<script>
    export default {
        name: "Det",
        data(){
            return{
                det: 123
            }
        },
        methods: {
            foo(){
                console.log(this.$route)
            }
        }
    }
</script>

<style scoped>

</style>