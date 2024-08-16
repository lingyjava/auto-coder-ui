<script setup>
import { ref } from 'vue'

const activeIndex = ref('/')
// const handleSelect = (key, keyPath) => {console.log(key, keyPath)}
const handleSelect = () => { }
</script>

<template>
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false" @select="handleSelect"
        router>
        <img style="width: 170px" src="@/assets/logo.svg" alt="logo" />
        <div class="flex-grow-1" />

        <el-menu-item index="/"> 首页 </el-menu-item>
        <el-menu-item index="/about" disabled> 关于 </el-menu-item>

        <!-- 分割线 -->
        <el-divider direction="vertical" style="height: 60%; margin: auto 10px" />

        <!-- icon -->
        <el-link href="https://github.com/lingyjava/auto-coder" target="_blank" style="margin: 0 15px">
            <img src="@/assets/github.svg" style="width: 25px; height: 25px" alt="github" />
        </el-link>
    </el-menu>
</template>

<style lang="scss" scoped>
.flex-grow-1 {
    flex-grow: 1;
}

.el-menu {
    padding: 0 15%;
}
</style>
