<template xmlns:el-col="http://www.w3.org/1999/html">
    <div v-show=showTool>
        <el-form>
            <el-dialog
                    top="9vh"
                    :modal-append-to-body='false'
                    title="面对对象震害信息提取"
                    :visible.sync="dialogVisible"
                    width="35%"
                    :modal="false"
                    :before-close="handleClose">
                <div style="margin-top: -40px">
                    <el-divider content-position="left">
                        <small>输入设置</small>
                    </el-divider>
                    <el-row class="borderFix">
                        <el-row>
                            <el-button size="mini" type="primary">打开文件<i class="el-icon-picture el-icon--right"></i>
                            </el-button>
                        </el-row>
                    </el-row>
                </div>
                <div style="margin-bottom: -10px">
                    <el-divider content-position="left">
                        <small>模式设置</small>
                    </el-divider>
                    <el-row class="">
                        <el-radio v-model="radio" label="1">建筑物提取</el-radio>
                        <el-radio v-model="radio" label="2">道路提取</el-radio>
                    </el-row>
                    <el-row>
                        <el-divider content-position="left">
                            <small>尺度</small>
                        </el-divider>
                        <div>
                            <span class="demonstration">分割尺度</span>
                            <el-slider v-model="value1"></el-slider>
                        </div>
                        <div>
                            <span class="demonstration">合并尺度</span>
                            <el-slider v-model="value1"></el-slider>
                        </div>
                        <el-button type="success" size="mini" round>预览</el-button>
                    </el-row>
                </div>
                <el-divider></el-divider>
                <div class="fix">
                    <el-row>
                        <el-button size="mini" type="primary">打开规则<i class="el-icon-picture el-icon--right"></i>
                        </el-button>
                    </el-row>
                </div>
                <el-divider>
                </el-divider>
                <div class="fix">
                    <el-row>
                        <el-button size="mini" type="primary">输出栅格<i class="el-icon-picture el-icon--right"></i>
                        </el-button>
                    </el-row>
                </div>
                <el-divider></el-divider>
                <div class="fix">
                    <el-row>
                        <el-button size="mini" type="primary">输出矢量<i class="el-icon-picture el-icon--right"></i>
                        </el-button>
                    </el-row>
                </div>
                <el-divider></el-divider>
                <div>
                    <el-row class="borderFix">
                        <el-col :span="20">
                            <el-button size="small">确定</el-button>
                        </el-col>
                        <el-col :span="4">
                            <el-button size="small">关闭</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-dialog>
        </el-form>
    </div>

</template>

<script>
    export default {
        name: 'Object-orientedDamageExtraction',
        data() {
            return {
                id: 'Object-orientedDamageExtraction',
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
                        this.$store.state.showTool = false
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

    .fix {
        height: 20px;
        margin-top: -10px
    }


</style>
