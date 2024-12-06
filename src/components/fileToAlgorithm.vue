<script setup name="fileToAlgorithm">
import { ref } from 'vue'
import Upload from './common/Upload.vue'
import { message, Empty } from 'ant-design-vue';
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;

// 分析按钮loading
const analyLoading = ref(false)

const previewUrl = ref('')
function updateUrl(val) {
    previewUrl.value = val
}

// 开始分析
const analyPhotoUrl = ref('')

// todo 调用算法接口
function analy() {
    try {
        analyLoading.value = true
        if (!previewUrl.value) return message.warning('暂未上传图片～')
        analyPhotoUrl.value = previewUrl.value
    } finally {
        analyLoading.value = false
    }
}
</script>
<template>
    <div class="file-box">
        <a-card title="图片上传" class="card upload-img">
            <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 16 }">
                <a-form-item label="图片上传">
                    <Upload @updateUrl="updateUrl" />
                </a-form-item>
                <a-form-item label="图片预览">
                    <a-image v-if="previewUrl" :width="600" :src="previewUrl" />
                    <div v-else>请先上传图片～</div>
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 2, span: 16 }">
                    <a-button :loading="analyLoading" size="large" type="primary" html-type="submit"
                        @click="analy">开始分析</a-button>
                </a-form-item>
            </a-form>
        </a-card>
        <a-card title="结果输出" class="card">
            <a-image v-if="analyPhotoUrl" :width="800" :src="analyPhotoUrl" />
            <a-empty :image="simpleImage" v-else description="请先上传图片进行分析～" />
        </a-card>
    </div>
</template>
<style lang="less">
.file-box {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .card {
        width: 100%;
    }

    .upload-img {
        margin-right: 16px;
    }
}
</style>