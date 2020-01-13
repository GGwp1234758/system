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
            handleNodeClick(data){
                this.$emit('toolId',data.id)
            }

        },

        data() {
            return {
                filterText: '',
                data: [{
                    id: 1,
                    label: '图像预处理',
                    children: [{
                        id: 21,
                        label: '空间滤波',
                        children: [{
                            id: 'customFiltering',
                            label: '自定义滤波'
                        }, {
                            id: 32,
                            label: '常规滤波'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        }
    }
</script>

<style scoped>
.search{
    margin: 10px 10px ;
    width: auto;
}


</style>