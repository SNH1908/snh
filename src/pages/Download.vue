<template>
    <MainLayout>
        <div class="DownloadBox">
            <el-card class="DownloadCard">
                <template #header>
                    <div class="CardTitle">Snh Instruction Manual</div>
                </template>
                <el-scrollbar height="1000px">
                    <p v-for="(item, index) in PDFFileList" :key="index" class="scrollbar-demo-item">
                        <el-container class="DownloadContainer">
                            <el-main>
                                <p class="DownloadTitle">
                                    <span class="clickable" @click="previewFile(item)">{{ item.Name }}</span>
                                </p>
                                <p class="DownloadTime">{{ item.Time }}</p>
                            </el-main>
                            <el-aside width="80px" class="DownloadAside">
                                <el-button text :icon="Download" @click="downloadFile(item)">PDF</el-button>
                            </el-aside>
                        </el-container>
                        <el-divider />
                    </p>
                    <div v-for="(item, index) in PDFFileList" :key="index" class="scrollbar-demo-item-mobile">
                        <div class="DownloadContainer">
                            <p class="DownloadTitle">
                                <span class="clickable" @click="previewFile(item)">{{ item.Name }}</span>
                            </p>
                            <el-container>
                                <el-aside width="70%">
                                    <p class="DownloadTime">{{ item.Time }}</p>
                                </el-aside>
                                <el-aside width="30%">
                                    <el-button class="DownloadButtonMobile" text :icon="Download"
                                        @click="downloadFile(item)">PDF</el-button>
                                </el-aside>
                            </el-container>
                        </div>
                        <el-divider />
                    </div>
                </el-scrollbar>
            </el-card>

        </div>
    </MainLayout>
</template>
<script setup>
import {
    Download,
} from '@element-plus/icons-vue'
</script>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import { getData } from '@/services/firebaseService';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
    name: "SNH-Dwonload",
    components: {
        MainLayout,
    },
    data() {
        return {
            fit: 'cover',
            storage: getStorage(),
            PDFFileList: [],

        };
    },
    created() {
        this.FetchData();
    },
    methods: {
        async FetchData() {
            const DataPath = 'Download/';
            const DownloadData = await getData(DataPath);
            if (DownloadData) {
                let List = [];
                for (let key in DownloadData) {
                    let Item = DownloadData[key];
                    List.push({
                        Name: Item.name,
                        Path: Item.path,
                        Time: Item.time,
                    });
                }
                this.PDFFileList = List;
            }
        },
        previewFile(value) {
            const storage = this.storage;
            const filePath = value.Path;
            const fileRef = ref(storage, filePath);
            getDownloadURL(fileRef)
                .then((url) => window.open(url, "_blank"))
                .catch((error) => console.error("获取预览链接失败", error));
        },
        async downloadFile(value) {
            try {
                const storage = this.storage;
                const filePath = value.Path;
                const fileRef = ref(storage, filePath);

                const downloadURL = await getDownloadURL(fileRef);
                // 使用fetch获取文件内容
                const response = await fetch(downloadURL);
                const blob = await response.blob();

                // 创建blob URL并触发下载
                const blobUrl = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = blobUrl;
                link.setAttribute('download', 'filename.pdf');
                document.body.appendChild(link);
                link.click();

                // 清理
                document.body.removeChild(link);
                URL.revokeObjectURL(blobUrl);
            } catch (error) {
                console.error("下载文件时出错:", error);
            }
        }
    }
};
</script>

<style scoped>
.el-main {
    padding: 10px;
}

.DownloadCard {
    width: 70%;
    height: 100%;
}

.CardTitle {
    text-align: center;
    font-size: 24px;
}

.clickable {
    cursor: pointer;
}

.clickable:hover {
    text-decoration: underline;
}

.DownloadBox {
    height: auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.DownloadButtonMobile {
    width: 80%;
}

.scrollbar-demo-item {
    border-radius: 10px;
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-top: 20px;
}

.scrollbar-demo-item-mobile {
    border-radius: 10px;
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-top: 20px;
    display: none;
}

.DownloadAside {
    height: 100%;
}

.DownloadContainer {
    height: 100%;
}

.DownloadTitle {
    font-size: 16px;
}

.DownloadTime {
    font-size: 14px;
    margin-top: 15px;
    color: gray;
}

@media (max-width: 1400px) {
    .DownloadCard {
        width: 80%;
    }
}

@media (max-width: 768px) {
    .DownloadCard {
        width: 100%;
    }

    .scrollbar-demo-item {
        display: none;
    }

    .DownloadTime {
        margin-top: 8px;
    }

    .scrollbar-demo-item-mobile {
        display: block;
    }
}
</style>