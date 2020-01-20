<template xmlns:el-col="http://www.w3.org/1999/html">
    <div v-show="showTool">
        <el-form>
            <el-dialog
                    top="9vh"
                    :modal-append-to-body="false"
                    :modal="false"
                    title="组合模型增强"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose"
            >
                <div class="image">
                    <el-image style="width: 350px; height: 300px" :src="url" :fit="fit"></el-image>
                </div>


                <div>
                    <el-row>
                        <el-col>
                            <el-form-item size="mini" label="方法1:" style="margin-top: 5px">
                                <el-select placeholder="请选择">
                                    <el-option>
                                        （基本增強）Equelize
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col>
                            <el-form-item size="mini" label="方法2:" style="margin-top: -10px">
                                <el-select placeholder="请选择">
                                    <el-option>
                                        （卷积增強）Direcetional
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <el-col>
                            <el-form-item size="mini" label="方法3:" style="margin-top: -10px;margin-bottom: 8px">
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option>
                                        （自适应滤波）Lee
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <el-row>
                        <el-col :span="14">
                            <el-form-item label="ADD-BACK:" size="mini">
                                <el-input-number></el-input-number>
                                %
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="方向:" size="mini" >
                                <el-input style="width: 120px"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>


                </div>
                <div style="margin-bottom: -15px">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-button type="primary" size="small">输出文件</el-button>
                        </el-col>
                        <el-col :span="6">
                            <el-button size="small">预览</el-button>
                        </el-col>
                        <el-col :span="6">
                            <el-button size="small">确定</el-button>
                        </el-col>
                        <el-col :span="6">
                            <el-button size="small">取消</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-dialog>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "CompositeModelEnhancements",
        data() {
            return {
                toolID: 31,
                showTool: true,
                id: "CompositeModelEnhancements",
                dialogVisible: true,
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            };
        },
        methods: {
            getToolIndex(data) {
                if (this.id === data) {
                    showTool = !showTool;
                }
            },
            handleClose(done) {
                this.$confirm("确认关闭？")
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            }
        }
    };
</script>

<style scoped>
    .image {
        margin-top: -20px;
        margin-left: 30px;
        height: 300px;
        width: 350px;
        border: #dcdfe6 1.5px solid;
        padding: 5px;
    }

</style>
