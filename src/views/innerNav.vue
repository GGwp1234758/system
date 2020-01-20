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
                :props="defaultProps"
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
                this.$emit('toolId', data.id)
            }

        },

        data() {
            return {
                filterText: '',
                data: [{
                    id: 1,
                    label: '图像预处理',
                    children: [{
                        id: 10,
                        label: '配准校正'
                    }, {
                        id: 11,
                        label: '空间滤波'
                    }, {
                        id: 12,
                        label: '图像增强'
                    }, {
                        id: 13,
                        label: '图像运算'
                    }, {
                        id: 14,
                        label: '图像裁剪'
                    }, {
                        id: 15,
                        label: '纹理分析'
                    }]
                },{
                    id: 2,
                    label: '灾后信息提取',
                    children: [{
                        id: 20,
                        label: '灾后道路提取'
                    },{
                        id: 21,
                        label: '面对对象灾后信息提取'
                    },{
                        id: 22,
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