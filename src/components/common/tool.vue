<template>
    <div>
        <el-menu-item index="2" @click="drawer = true" type="primary" >
            <i class="el-icon-menu"></i>
            <span slot="title">工具</span>
        </el-menu-item>
        <el-drawer
                :visible.sync="drawer"
                :with-header="false"
                size="25%">
            <inner-nav @toolId="getChildTool"></inner-nav>
            <component :is=tool  v-if="hackReset"></component>
        </el-drawer>
    </div>

</template>
    <script>
        import innerNav from 'views/innerNav'
        import customFiltering from 'views/forms/customFiltering'



        export default {
            data() {
                return {
                    drawer: false,
                    tool:  '',
                    hackReset: true,
                };
            },
            methods: {
                getChildTool(toolName){
                   if(typeof(toolName)=='string')
                    this.tool = toolName
                },

            },
            components: {
                innerNav,
                customFiltering,
            }
        };
    </script>



<style scoped>

</style>