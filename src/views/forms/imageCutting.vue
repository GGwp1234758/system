<template xmlns:el-col="http://www.w3.org/1999/html">
    <div>
        <el-dialog
                top="8vh"
                :modal-append-to-body="false"
                title="影像的裁剪与取子集"
                :visible.sync="dialogVisible"
                width="41%"
                :before-close="handleClose"
                :modal="false"
        >
            <el-form class="image-cut">

                <div style="margin-bottom: -5px">
                    <el-divider>文件</el-divider>
                    <el-row>
                        <el-col :span="6">
                            <el-button size="small" type="primary">
                                上传文件
                                <i class="el-icon-upload el-icon--right"></i>
                            </el-button>
                        </el-col>
                        <el-col :span="6">
                            <el-button size="small" type="primary">
                                选择波段
                                <i class="el-icon-upload el-icon--right"></i>
                            </el-button>
                        </el-col>
                        <el-col :span="6">
                            <el-button size="small" type="primary">输出文件</el-button>
                        </el-col>
                        <el-col :span="6">
                            <el-checkbox>输出多幅影像</el-checkbox>
                        </el-col>
                    </el-row>
                </div>

                <el-divider>设定裁剪区域</el-divider>
                <div>
                    <el-row :gutter="40">
                        <el-col :span="12">
                            <el-form-item label="裁剪模式:" style="margin-bottom: 0">
                                <el-select placeholder="请选择" size="mini" style="width: 192px">
                                    <el-option>用户输入坐标</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="坐标类型:" style="margin-bottom: 0">
                                <el-select placeholder="请选择" size="mini" style="width: 165px">
                                    <el-option>栅格范围</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="左上(行)">
                                <el-input size="mini" style="width: 200px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="(列)">
                                <el-input size="mini" style="width: 200px"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="12">
                            <el-form-item label="右下(行)" style="margin-top: -25px">
                                <el-input size="mini" style="width: 200px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="(列)" style="margin-top: -25px">
                                <el-input size="mini" style="width: 200px"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="12">
                            <el-form-item label="重置(行)" style="margin-top: -25px">
                                <el-input size="mini" style="width: 200px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="(列)" style="margin-top: -25px">
                                <el-input size="mini" style="width: 200px"></el-input>
                            </el-form-item>
                        </el-col>


                    </el-row>
                </div>


                <div class="image">
                    <div class="demo-image">
                        <el-image class="el-im" :src="url"></el-image>
                    </div>
                    <div class="btn-image">
                        <el-row>
                            <el-col :offset="19" style="margin-bottom: 5px">
                                <el-button size="mini">整景</el-button>
                            </el-col>
                            <el-col :offset="19" style="margin-bottom: 5px">
                                <el-button size="mini">正方形</el-button>
                            </el-col>
                            <el-col :offset="19" style="margin-bottom: 15px">
                                <el-button size="mini">对开</el-button>
                            </el-col>

                            <el-col :offset="20" style="margin-bottom: 5px">
                                <el-button size="mini" circle>上</el-button>
                            </el-col>
                            <el-col :offset="19" style="margin-bottom: 5px">
                                <el-button size="mini" circle style="margin-left: -15px">左</el-button>
                                <el-button size="mini" circle>中</el-button>
                                <el-button size="mini" circle>右</el-button>
                            </el-col>
                            <el-col :offset="20" style="margin-bottom: 35px">
                                <el-button size="mini" circle>下</el-button>
                            </el-col>
                            <el-col :offset="19" style="margin-bottom: 5px;margin-top: -20px">
                                <el-button size="mini">导入AOI区</el-button>
                            </el-col>
                            <el-col :offset="19" style="margin-bottom: 15px">
                                <el-button size="mini">简单要素区</el-button>
                            </el-col>
                            <el-col :offset="19" style="margin-bottom: 5px">
                                <el-button size="mini">确定</el-button>
                            </el-col>
                            <el-col :offset="19" style="margin-bottom: 5px">
                                <el-button size="mini">应用</el-button>
                            </el-col>
                            <el-col :offset="19" style="margin-bottom: 5px">
                                <el-button size="mini">关闭</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>

            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "imageCutting",
        data() {
            return {
                id: "imageCutting",
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                dialogVisible: true
            };
        },
        methods: {

            handleClose(done) {
                this.$confirm("确认关闭？")
                    .then(_ => {
                        done();
                        this.$store.state.showTool = false
                    })
                    .catch(_ => {
                    });
            }
        }
    };
</script>

<style scoped>
    .image {
        width: 555px;
        flex: 1;
        border: #dcdfe6 1px solid;
        padding: 3px 5px;
        margin-top: -15px;
        margin-bottom: -15px;
        margin-left: -2px;
        border-right: none;
    }

    .el-im {
        width: 400px;
        height: 380px;
        padding: 4px;
        border: #dcdfe6 0.5px solid;

    }

    .btn-image {
        margin-top: -400px;
    }

    .image-cut {
        height: 550px;
        overflow: auto;
        overflow-x: hidden;
        border-bottom: #dcdfe6 0.2px solid;
        margin-top: -40px;


    }
</style>
