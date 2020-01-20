<template xmlns:el-col="http://www.w3.org/1999/html">
    <div v-if=showTool>
        <el-form>
            <el-dialog
                    top="5vh"
                    :modal-append-to-body='false'
                    title="灾后道路分析"
                    :visible.sync="dialogVisible"
                    width="40%"
                    :modal="false"
                    :before-close="handleClose">
                <el-row :gutter="20">
                    <el-col :span="11">
                        <div style="margin-top: -40px">

                            <el-divider content-position="left">
                                <small>源数据信息</small>
                            </el-divider>
                            <el-row class="borderFix">
                                <el-select v-model="value" placeholder="选择源服务器" size="mini">
                                    <el-option>1</el-option>
                                    <el-option>2</el-option>
                                    <el-option>3</el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="选择源数据库" size="mini">
                                    <el-option>1</el-option>
                                    <el-option>2</el-option>
                                    <el-option>3</el-option>
                                </el-select>
                                <el-select v-model="value" placeholder="选择源数据" size="mini">
                                    <el-option>1</el-option>
                                    <el-option>2</el-option>
                                    <el-option>3</el-option>
                                </el-select>
                            </el-row>
                        </div>
                        <div>
                            <el-divider content-position="left">
                                <small>目的数据信息</small>
                            </el-divider>
                            <el-select v-model="value" placeholder="选择目的服务器" size="mini">
                                <el-option>1</el-option>
                                <el-option>2</el-option>
                                <el-option>3</el-option>
                            </el-select>
                            <el-select v-model="value" placeholder="选择目的数据库" size="mini">
                                <el-option>1</el-option>
                                <el-option>2</el-option>
                                <el-option>3</el-option>
                            </el-select>
                            <el-input :span="12" size="mini" v-model="input" placeholder="请输入数据名称"
                            ></el-input>

                            <el-row>

                                <el-divider content-position="left">
                                    <small>半径恒定的缓冲分析</small>
                                </el-divider>
                                <el-col>
                                    <el-radio v-model="radio" label="1" size="mini">百分比</el-radio>
                                    <el-radio v-model="radio" label="2" size="mini">值</el-radio>
                                </el-col>
                                <el-input :span="12" size="mini" v-model="input" placeholder="距离"></el-input>
                                <el-input :span="12" size="mini" v-model="input" placeholder="距左侧"></el-input>
                                <el-input :span="12" size="mini" v-model="input" placeholder="距右侧"
                                          style="margin-bottom: -10px"></el-input>
                                <el-divider content-position="left">
                                    <small>可变半径的缓冲分析</small>
                                </el-divider>

                                <el-input :span="12" size="mini" v-model="input" placeholder="属性字段名:" class="boderFix"
                                          style="margin-top: -20px"></el-input>
                                <el-divider content-position="left">
                                    <small>缓冲方法</small>
                                </el-divider>
                                <el-radio>圆头</el-radio>
                                <el-radio>方头</el-radio>
                                <el-radio>光栅法</el-radio>
                                <el-radio>矢量法</el-radio>
                            </el-row>
                        </div>

                    </el-col>

                    <el-col :span="13">
                        <div class="image">
                            <el-image :src="url"></el-image>
                        </div>
                        <el-col :offset="17"><el-button size="mini">执行分析</el-button></el-col>

                    </el-col>
                </el-row>
            </el-dialog>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "AnalysisRoadDamage",
        data() {
            return {
                toolID: 31,
                showTool: true,
                id: 'AnalysisRoadDamage',
                dialogVisible: true,
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
                    })
                    .catch(_ => {
                    });
            }

        }
    }
</script>

<style scoped>
    .borderFix {
        margin-top: -10px;
        margin-bottom: -10px;
    }

    .image {

        width: 300px;
        height: 500px;
        overflow: auto;
        margin-bottom: 10px;
        padding: 4px;
        border: 0.2px #f2f2f2 solid;

    }

    .el-select {
        margin-bottom: 4px;
    }

    .el-input {
        margin-top: 4px;
    }


</style>
