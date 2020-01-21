<template>
    <div>
        <el-input
                placeholder="搜索"
                prefix-icon="el-icon-search"
                v-model="filterText"
                class="search">
        </el-input>
        <el-tree
                class="filter-tree"
                :data="data"
                :filter-node-method="filterNode"
                ref="tree"
                @node-click="handleNodeClick">
        </el-tree>
    </div>
</template>

<script>
    export default {
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },

        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            handleNodeClick(data) {
                if (typeof (data.id) === "string") {
                    this.$emit('toolId', data.id);
                    this.$store.state.showTool = true
                }
            }

        },

        data() {
            return {
                filterText: '',
                data: [{
                    label: '图像预处理',
                    children: [{
                        id: 10,
                        label: '配准校正'
                    }, {
                        id: 'customFiltering',
                        label: '空间滤波'
                    }, {
                        id: 'CompositeModelEnhancements',
                        label: '图像增强'
                    }, {
                        id: '',
                        label: '图像运算'
                    }, {
                        id: 'imageCutting',
                        label: '图像裁剪'
                    }, {
                        id: 'textureAnalysis',
                        label: '纹理分析'
                    }]
                }, {
                    label: '灾后信息提取',
                    children: [{
                        id: 'AnalysisRoadDamage',
                        label: '道路灾后分析'
                    }, {
                        id: 'ObjectOrientedDamageExtraction',
                        label: '面对对象灾后信息提取'
                    }, {
                        id: 'ChangeDetectionTool',
                        label: '变化检测'
                    }
                    ]
                }],

            };
        }
    }
</script>

<style scoped>
    .search {
        margin: 10px 10px;
        width: auto;
    }


</style>