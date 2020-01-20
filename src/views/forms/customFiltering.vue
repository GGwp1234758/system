<template xmlns:el-col="http://www.w3.org/1999/html">
    <div v-if=showTool>
        <el-form action="">
            <el-dialog
                    top="15vh"
                    :modal-append-to-body='false'
                    title="自定义滤波"
                    :visible.sync="dialogVisible"
                    width="35%"
                    :modal="false"
                    :before-close="handleClose">
                <div style="margin-top: -40px">
                    <el-divider content-position="left">
                        <small>输入设置</small>
                    </el-divider>
                    <el-row class="borderFix">
                        <el-col :span="12">
                            <el-button size="small" type="primary">输入影像<i class="el-icon-picture el-icon--right"></i>
                            </el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button size="small" type="primary">选择波段<i class="el-icon-tickets el-icon--right"></i>
                            </el-button>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <el-divider content-position="right">
                        <small>输出设置</small>
                    </el-divider>
                    <el-row class="borderFix">
                        <el-col :span="12">
                            <el-button size="small" type="primary" style="margin-top: -3px">结果文件<i
                                    class="el-icon-files el-icon--right"></i></el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-checkbox style="margin-top: 5px">结果添加到地图视图</el-checkbox>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <el-divider content-position="left">
                        <small>滤波范围</small>
                    </el-divider>
                    <el-row :gutter="20" class="borderFix">
                        <el-col :span="12">起始行
                            <el-input
                                    size="mini"
                                    placeholder="请输入内容">
                            </el-input>
                        </el-col>
                        <el-col :span="12">终止行
                            <el-input
                                    size="mini"
                                    placeholder="请输入内容">
                            </el-input>
                        </el-col>
                        <el-col :span="12">起始列
                            <el-input
                                    size="mini"
                                    placeholder="请输入内容">
                            </el-input>
                        </el-col>
                        <el-col :span="12">终止列
                            <el-input
                                    size="mini"
                                    placeholder="请输入内容">
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
                <el-divider content-position="right">
                    <small>像元类型</small>
                </el-divider>
                <el-row :gutter="20" class="borderFix">
                    <el-col :span="12">
                        <label>原影像类型</label>
                        <el-input size="mini" value=""></el-input>
                    </el-col>
                    <el-col :span="12" >
                        <label>结果类型</label>
                        <br/>
                        <el-select size="mini">
                            <el-option>8位无符号整型</el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-divider content-position="left">
                    <small>滤波核</small>
                </el-divider>
                <el-row class="borderFix">
                    <el-col :span="1"><span>X:</span></el-col>
                    <el-col :span="11">
                        <el-input-number size="mini"></el-input-number>
                    </el-col>
                    <el-col :span="1">
                        <span>Y:</span>
                    </el-col>
                    <el-col :span="11">
                        <el-input-number size="mini"></el-input-number>
                    </el-col>
                </el-row>
                <el-divider></el-divider>

                <el-row class="borderFix">
                    <el-col :span="3">
                        <el-button size="small" round>规格</el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-button size="small" round>重置</el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-button size="small" round>导入</el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-button size="small" round>导出</el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-button size="small" round>预览</el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-button size="small" round>原值</el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-button size="small" round type="submit">确定</el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-button size="small" round>关闭</el-button>
                    </el-col>
                </el-row>
            </el-dialog>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "customFiltering",
        data() {
            return {
                toolID: 31,
                showTool: false,
                id: 'customFiltering',
                dialogVisible: true,
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
                        this.showTool = false;
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


</style>
