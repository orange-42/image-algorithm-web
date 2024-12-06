<script setup name="fileToAlgorithm">
import { ref } from 'vue'
import Upload from './common/Upload.vue'

// 分析按钮loading
const analyLoading = ref(false)
</script>
<template>
    <div class="file-box">
        <a-card title="图片上传" class="card upload-img">
            <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 16 }">
                <a-form-item label="图片上传">
                    <Upload />
                </a-form-item>
                <a-form-item label="图片预览">
                    <a-image :width="600"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 2, span: 16 }">
                    <a-button :loading="analyLoading" size="large" type="primary" html-type="submit">开始分析</a-button>
                </a-form-item>
            </a-form>
        </a-card>
        <a-card title="结果输出" class="card">
            <a-image :width="800" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
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