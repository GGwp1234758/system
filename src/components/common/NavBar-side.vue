<template>
    <div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
            <router-link to="/profile">
                <el-menu-item index="1">
                    <span slot="title"> 个人</span>
                    <i class="el-icon-user"></i>
                </el-menu-item>
            </router-link>
            <router-link to="/test">
                <el-menu-item index="2">
                    <i class="el-icon-folder"></i>
                    <span slot="title">文件</span>
                </el-menu-item>
            </router-link>

            <tool/>
            <el-menu-item index="4">
                <i class="el-icon-search"></i>
                <span slot="title">筛选</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-s-comment"></i>
                <span slot="title">联系我们</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-suitcase"></i>
                <span slot="title">数据库</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-switch-button"></i>
                <span slot="title">登出</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "NavBar-Side",
        data() {
            return {
                isCollapse: true,
                username: ''
            };
        },
        methods: {},
        created() {
            this.$notify({
                title: '提示',
                message: '非在100%比例下打开将会影响体验',
                type: 'warning',
                duration: 0
            })
        },
        components: {
            tool: () => import('components/common/tool'),
            container: () => import('components/container')
        }
    }
</script>

<style scoped>
    .el-menu {
        border: none;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>