<template>
    <el-container>
        <el-aside></el-aside>
        <el-main>Main

        </el-main>
        <el-footer></el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "container"
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
        background: #ffffff;
        left: 365px;
        top: 0;

    }
</style>