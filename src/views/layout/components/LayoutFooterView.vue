<script setup>

</script>

<template>
    <div class="layout-footer-container">
        <el-row class="row-bg" justify="center">
            <el-col :span="10">
                <el-divider />
                <div>
                    <el-text class="mx-1">Copyright © 2024 LingYuan. All rights reserved</el-text>
                    <el-divider direction="vertical" />
                    <el-link href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2024248614号-1</el-link>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang='scss' scoped>
.layout-footer-container {
    /*设置line-height与父级元素的height相等*/
    line-height: 100%;
    /*设置文本水平居中*/
    text-align: center;
    /*防止内容超出容器或者产生自动换行*/
    overflow: hidden;
}

.el-link {
    margin-right: 8px;
}
</style>