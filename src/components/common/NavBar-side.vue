<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo"  :collapse="isCollapse">
        <el-menu-item index="1">
            <i class="el-icon-user"></i>
            <span slot="title">登出</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-folder"></i>
            <span slot="title">文件</span>
        </el-menu-item>
        <tool/>
        <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "NavBar-Side",
        data() {
            return {
                isCollapse: true,

            };
        },
        methods: {

        },
        components: {
            tool:() => import('components/common/tool')
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>