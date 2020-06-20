<template>
    <div class="itemParams" v-if="itemParams.rule">
        <table class="top" v-for="index in itemParams.rule.tables">
            <tr v-for="indey in index">
                <td v-for="indez in indey">{{indez}}</td>
            </tr>
        </table>
        <table class="bottom" v-if="itemParams.info">
            <tr v-for="item in itemParams.info.set">
                <td>{{item.key}}</td>
                <td class="last">{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "DetailItemParams",
        data(){
            return {
            }
        },
        props: {
            itemParams: {
                type: Object,
                default(){
                    return {rule:{}}
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .itemParams{
        font-size: 12px;
        color: gray;
        padding: 8px 10px;
        border-bottom: 4px solid #FAFAFA;
        .top{
            width: 100%;
            tr{
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 10px 0;
                border-bottom: 1px solid darkgrey;
                font-size: 12px;
                td{
                    margin-right: 20px;
                }
            }
        }
        .bottom{
            width: 100%;
            tr{
                width: 100%;
                border-bottom: 1px solid darkgrey;
                td{
                    width: 55px;
                    padding: 10px 0;
                }
                .last{
                    margin-right: 60px;
                    color: #FF5778;
                }
            }
        }
    }
</style>