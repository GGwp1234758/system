<template>
    <el-container>
        <el-aside></el-aside>
        <el-main>
            <router-view :name="this.$route.path.slice(1)"></router-view>
        </el-main>
        <el-footer></el-footer>
    </el-container>
</template>

<script>


    export default {
        name: "container",
        data() {
            return {

            }
        },
        methods: {
            pathChange(){
            }

        },



    }
</script>

<style scoped>
    .el-aside {
        background-color: #F9F9F9;
        text-align: center;
        height: 100%;
        position: fixed;
        left: 65px;
        top: 0;
        border: #dcdfe6 solid 0.1px;
    }

    .el-main {
        position: absolute;
        left: 365px;
        top: 0;
        height: 100%;
    }
</style>