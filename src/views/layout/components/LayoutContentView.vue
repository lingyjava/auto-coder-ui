<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div>
        <el-row justify="center">
            <el-col :span="16">
                <RouterView />
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped></style>
