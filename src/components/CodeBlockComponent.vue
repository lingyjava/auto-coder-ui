<script setup>
import { onMounted, ref, watch } from 'vue';
import Clipboard from 'clipboard'
import { CopyDocument, DocumentChecked } from '@element-plus/icons-vue'

const props = defineProps(['code',])

const copyBtnState = ref(false)
const clickCopyBtn = () => {
    copyBtnState.value = true
}

onMounted(async () => {
    const clipboard = new Clipboard('.copyBtn');
    clipboard.on("success", (e) => {
        console.log("复制成功", e.text);
        e.clearSelection();
    });
    clipboard.on("error", (e) => {
        console.log("复制失败", e);
    });
})

watch(() => props.code, async () => {
    copyBtnState.value = false
})
</script>

<template>
    <div>
        <el-tooltip placement="bottom" trigger="click" content="copied!" :auto-close="1000">
            <el-button v-if="!copyBtnState" class="copyBtn" type="info" :data-clipboard-text="props.code"
                :icon="CopyDocument" @click="clickCopyBtn" />
            <el-button v-else class="copyBtn" type="success" :data-clipboard-text="props.code" :icon="DocumentChecked"
                @click="clickCopyBtn" />
        </el-tooltip>
        <highlightjs autodetect :code="props.code" class=".highlightjs-container" />
    </div>
</template>



<style scoped>
.highlightjs-container {
    min-height: 20%;
}

.copyBtn {
    position: absolute;
    left: 92%;
}
</style>
