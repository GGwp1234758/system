<template xmlns:el-col="http://www.w3.org/1999/html">
    <div v-show=showTool>
        <el-dialog
                top="9vh"
                :modal-append-to-body='false'
                title="差分法变化检测"
                :visible.sync="dialogVisible"
                width="35%"
                :modal="false"
                :before-close="handleClose">
            <div style="margin-top: -40px">
                <el-divider content-position="left">
                    <small>输入设置</small>
                </el-divider>
                <el-row class="borderFix">
                    <el-row :span="12">
                        <el-button size="small" type="primary">前一时相影像<i class="el-icon-picture el-icon--right"></i>
                        </el-button>
                        <el-select size=small width=50px style="margin-left: 50px" v-model="value" placeholder="请选择">
                            <el-option>1</el-option>
                            <el-option>2</el-option>
                            <el-option>3</el-option>
                        </el-select>
                    </el-row>
                    <el-col> .</el-col>

                    <el-row :span="12">
                        <el-button size="small" type="primary">后一时相影像<i class="el-icon-picture el-icon--right"></i>
                        </el-button>
                        <el-select size=small style="margin-left: 50px" v-model="value" placeholder="请选择">
                            <el-option>1</el-option>
                            <el-option>2</el-option>
                            <el-option>3</el-option>
                        </el-select>
                    </el-row>
                </el-row>
            </div>
            <div>
                <el-divider content-position="left">
                    <small>变化值设置</small>
                </el-divider>
                <el-row class="">
                    <el-radio v-model="radio" label="1">百分比</el-radio>
                    <el-radio v-model="radio" label="2">值</el-radio>
                </el-row>
                <el-row class="">

                    <el-divider content-position="left">
                        <small>像元值减小< =</small>
                    </el-divider>

                    <el-row class="borderFix">
                        <el-col :span="1"><span>%:</span></el-col>
                        <el-col :span="11">
                            <el-input-number size="mini"></el-input-number>
                        </el-col>

                    </el-row>
                    <el-divider content-position="left">
                        <small>像元值增大> =</small>
                    </el-divider>

                    <el-row class="borderFix">
                        <el-col :span="1"><span>%:</span></el-col>
                        <el-col :span="11">
                            <el-input-number size="mini"></el-input-number>
                        </el-col>
                    </el-row>
                </el-row>
            </div>
            <div>
                <el-divider>
                    <small>颜色设置</small>
                </el-divider>
                <el-row>
                    <el-button size="small" type="primary" plain>减小颜色（=1）</el-button>
                    <el-button size="small" type="primary" plain>未变颜色（=3）</el-button>
                    <el-button size="small" type="primary" plain>增大颜色（=5）</el-button>
                </el-row>

            </div>
            <div>
                <el-divider content-position="right">
                    <small>输出设置</small>
                </el-divider>
                <el-row class="borderFix">
                    <el-col :span="12">
                        <el-button size="small" type="primary" style="margin-top: -3px">变化检测影像<i
                                class="el-icon-files el-icon--right"></i></el-button>
                    </el-col>
                    <el-col :span="12">
                        <el-checkbox style="margin-top: 5px">差分影像</el-checkbox>
                    </el-col>
                </el-row>
            </div>
            <el-divider>
                <small></small>
            </el-divider>
            <div>
                <el-row class="borderFix">
                    <el-col :span="5">
                        <el-button>确定</el-button>
                    </el-col>
                    <el-col :span="5">
                        <el-button>关闭</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "DifferentialChangeDetection",
        data() {
            return {
                toolID: 32,
                showTool: true,
                id: 'DifferentialChangeDetection',
                dialogVisible: true
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


</style>
