<script setup>
import LayoutHeaderView from './components/LayoutHeaderView.vue'
import LayoutContentView from './components/LayoutContentView.vue'
import LayoutFooterView from './components/LayoutFooterView.vue'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <LayoutHeaderView />
            </el-header>
            <el-main>
                <LayoutContentView />
            </el-main>
            <el-footer>
                <LayoutFooterView />
            </el-footer>
        </el-container>
    </div>
</template>

<style lang='scss' scoped></style>