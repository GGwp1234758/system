<template>
    <div>
        <el-menu-item index="2" @click="drawer = true" type="primary">
            <i class="el-icon-menu"></i>
            <span slot="title">工具</span>
        </el-menu-item>
        <el-drawer
                :visible.sync="drawer"
                :with-header="false"
                size="25%">
            <inner-nav @toolId="getChildTool"></inner-nav>
            <component :is=tool v-if="this.$store.state.showTool"></component>
        </el-drawer>
    </div>

</template>
<script>
    import innerNav from 'views/innerNav'

    import {
        AnalysisRoadDamage,
        ChangeDetectionTool,
        CompositeModelEnhancements,
        customFiltering,
        DifferentialChangeDetection,
        imageCutting,
        ObjectOrientedDamageExtraction,
        textureAnalysis
    } from 'assets/toolsMapper'


    export default {
        data() {
            return {
                drawer: false,
                tool: ''
            };
        },
        methods: {
            getChildTool(toolName) {
                if (typeof (toolName) == 'string')
                    this.tool = toolName
            }

        },
        components: {
            innerNav,
            AnalysisRoadDamage,
            ChangeDetectionTool,
            CompositeModelEnhancements,
            customFiltering,
            DifferentialChangeDetection,
            imageCutting,
            ObjectOrientedDamageExtraction,
            textureAnalysis
        }
    };
</script>


<style scoped>

</style>