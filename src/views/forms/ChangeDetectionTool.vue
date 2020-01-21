<template xmlns:el-col="http://www.w3.org/1999/html">
    <div>
        <el-form>
            <el-dialog
                    top="5vh"
                    :modal-append-to-body='false'
                    title="变化检测流程"
                    :visible.sync="dialogVisible"
                    width="45%"
                    :modal="false"
                    :before-close="handleClose">

                <el-steps :active="activeName" align-center simple style="margin-top: -30px" :finish-status="status">
                    <el-step title="数据源" name="1"></el-step>
                    <el-step title="区域裁剪" name="2"></el-step>
                    <el-step title="变化检测" name="'3"></el-step>
                </el-steps>


                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="step1 数据源" name="1">

                    </el-tab-pane>
                    <el-tab-pane label="step2 区域裁剪" name="2">

                    </el-tab-pane>
                    <el-tab-pane label="step3 变化检测" name="3">
                        <el-row>
                            <el-col :span="12">
                                <label>震前影像:</label>
                                <div class="image">
                                    <el-image :src="url"></el-image>
                                </div>

                                <el-divider></el-divider>
                                <div class="image" style="height: 300px">
                                    <el-image :src="url"></el-image>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <label>震后影像:</label>
                                <div class="image">
                                    <el-image
                                            :src="url"></el-image>
                                </div>

                                <el-divider></el-divider>

                                <el-row style="margin-top: -20px">
                                    <el-form-item label="1、选择变化检测波段">
                                        <el-select placeholder="波段列表" size="small">
                                            <el-option>1</el-option>
                                            <el-option>2</el-option>
                                            <el-option>3</el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-row>

                                <el-form-item label="2、自动变化检测（阈值调整）" style="margin-top: -10px">
                                    <el-row>
                                        <el-col :offset="1">
                                            <el-form-item size="mini">
                                                最大值
                                                <el-slider
                                                        show-input
                                                        style="width: 270px">
                                                </el-slider>
                                                最小值
                                                <el-slider
                                                        show-input
                                                        style="width: 270px">
                                                </el-slider>
                                                <el-button type="primary" round>预览</el-button>
                                            </el-form-item>
                                            <el-form-item label="3、目标判读调整" class="boderFix"
                                                          style="margin-bottom: -15px">
                                                <el-button type="primary" size="small" round>运行</el-button>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-form-item>


                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>


            </el-dialog>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "ChangeDetectionTool",
        data() {
            return {
                toolID: 31,
                showTool: true,
                id: 'ChangeDetectionTool',
                dialogVisible: true,
                activeName: '1',
                status: '',
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        },
        methods: {
            getToolIndex(data) {
                if (this.id === data) {
                    showTool = !showTool;
                }
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                        this.$store.state.showTool = false
                    })
                    .catch(_ => {
                    });
            }

        }
    }
</script>

<style scoped>
    .image {
        width: 300px;
        height: 270px;
        padding: 3px;
        border: #dcdfe6 1px solid;
        display: flex;
    }

    .el-tab-pane {
        height: 470px;
        overflow: auto;
        overflow-x: hidden;
        border-bottom: #dcdfe6 0.5px solid;
    }

    .judge {

    }
</style>
