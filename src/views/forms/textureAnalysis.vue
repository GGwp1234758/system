<template xmlns:el-col="http://www.w3.org/1999/html">
    <el-form v-show=showTool>
        <el-dialog
                :modal="false"
                top="5vh"
                :modal-append-to-body='false'
                title="纹理分析"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <div style="margin-top:-40px">
                <el-divider>
                    <small>输入设置</small>
                </el-divider>
                <el-row class="fix" style="height: 40px">
                    <div class="boderFix">
                        <el-col :span="12">
                            <el-form-item label="输入文件">
                                <el-button size="small" type="primary">上传<i class="el-icon-upload el-icon--right"></i>
                                </el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="选择波段">
                                <el-button size="small" type="primary">选择<i
                                        class="el-icon-s-opportunity el-icon--right"></i>
                                </el-button>
                            </el-form-item>
                        </el-col>
                    </div>
                </el-row>
            </div>
            <div>
                <el-divider>
                    <small>处理范围</small>
                </el-divider>
                <el-row class="boderFix fix" :gutter="20">
                    <el-col :span="12" style="height: 50px">
                        <el-form-item>
                            <el-input size="mini"
                                      placeholder="起始行"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col style="height: 50px" :span="12">
                        <el-form-item>
                            <el-input
                                    size="mini"
                                    placeholder="终止行"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item>
                            <el-input
                                    size="mini"
                                    placeholder="起始列">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item>
                            <el-input
                                    size="mini"
                                    placeholder="终止列">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>


            <el-divider>
                <small>像元类型</small>
            </el-divider>
            <el-row :gutter="20" style="margin-top: -10px">
                <el-col :span="12">
                    <label>输入类型</label>
                    <el-input size="mini" placeholder="8位无符号整型"></el-input>
                </el-col>
                <el-col :span="12">
                    <label>输出类型</label>
                    <el-select size="mini">
                        <el-option>四字节浮点数据</el-option>
                    </el-select>
                </el-col>
            </el-row>
            <div>
                <el-divider>
                    <small>设置参数</small>
                </el-divider>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="灰度级数">
                            <el-select size="small" style="width: 150px">
                                <el-option>压缩到16级</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" class="Statistical">
                        <el-form-item label="统计方式:">
                            <el-radio style="top: -10px" label="自定义方向"></el-radio>
                            <el-radio style="top: -20px" label="四方向平均"></el-radio>
                        </el-form-item>
                    </el-col>
                    <el-col style="margin-top: -65px">
                        <el-form-item label="特征参数">
                            <el-button type="primary" size="small">特征参数选择</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="fixSetting">
                    <el-col :span="12" style="height: 40px;">
                        <el-form-item label="距离插值dx">
                            <el-input size="small" style="width: 100px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" style="height: 40px">
                        <el-form-item label="dy">
                            <el-input size="small" style="width: 120px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="窗口大小 x:">
                            <el-input size="small" style="width: 100px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="y：">
                            <el-input size="small" style="width: 115px"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
            </div>

            <el-row class="boderFix" style="top:-40px;margin-bottom: -80px" :gutter="20">
                <el-divider>
                    <small>输出设置</small>
                </el-divider>
                <div style="margin-top: -15px">
                    <el-col :span="12">
                        <el-form-item label="输出文件">
                            <el-button size="small" type="primary">输出<i
                                    class="el-icon-el-icon--right el-icon-folder"></i></el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="波段对照">
                            <el-button size="small" type="primary">输出<i
                                    class="el-icon-el-icon--right el-icon-folder"></i></el-button>
                        </el-form-item>
                    </el-col>
                </div>
            </el-row>


        </el-dialog>
    </el-form>
</template>

<script>
    export default {
        name: "textureSetting",
        data() {
            return {
                toolID: 33,
                showTool: true,
                id: 'textureSetting',
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
    .el-form {
        position: absolute;
    }

    .fix {
        margin-bottom: -20px;
    }

    .Statistical {
        top: -10px;
        position: relative;
        height: 110px;
    }

    .fixSetting {
        position: relative;
        top: -20px;
    }


</style>
