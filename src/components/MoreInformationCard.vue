<template>
    <el-card class="productDataCard" shadow="never">
        <el-container>
            <el-aside width="50%">
                <div style="padding-left: 2vw;">
                    <h1 class="card_font01">More About This Style</h1>
                    <el-divider />

                    <el-container>
                        <el-aside width="30%">
                            <h1 class="card_font02">Specifications</h1>
                        </el-aside>
                        <el-aside width="70%">

                            <div v-if="ProductData.Specifications">
                                <div v-if="truncateStatue">
                                    <div class="card_font03" v-html="formattedText(truncateString(ProductData.Specifications))"></div>
                                    <el-button v-if="ProductData.Specifications.length > 500" :key="plain" text link
                                        @click="truncateStatue = false">
                                        See More
                                    </el-button>
                                </div>
                                <div v-else>
                                    <div class="card_font03" v-html="formattedText(ProductData.Specifications)"></div>
                                    <el-button v-if="ProductData.Specifications.length > 500" :key="plain" text link
                                        @click="truncateStatue = true">
                                        See Less
                                    </el-button>
                                </div>
                                
                            </div>
                            <div v-else>
                                Specifications are currently unavailable for this product. Please check back later or
                                contact our
                                support team for more details.
                            </div>
                        </el-aside>
                    </el-container>
                    <el-divider />

                    <el-container>
                        <el-aside width="30%">
                            <h1 class="card_font02">About</h1>
                        </el-aside>
                        <el-aside width="70%">
                            <div v-if="ProductData.About">
                                <div class="card_font03" v-html="formattedText(ProductData.About)"></div>
                            </div>
                            <div v-else>
                                Additional details about this product are currently unavailable. Please feel free to
                                explore
                                other
                                products or contact us for assistance.
                            </div>
                        </el-aside>
                    </el-container>
                    <el-divider />
                </div>
            </el-aside>
            <el-aside width="50%">
                <div class="CenterBox">
                    <el-image class="ProductLargeImages" :src="this.ImageUrl" :fit="fit" />
                </div>
            </el-aside>
        </el-container>
    </el-card>
</template>


<script>
export default {
    props: {
        ProductData: {
            type: Object,
            required: true
        }
    },
    watch: {
        ProductData(newValue) {
            if (newValue) {
                this.CreateUrl();
            }
        }
    },
    data() {
        return {
            fit: 'cover',
            ImageUrl: '',
            truncateStatue: true,
        };
    },
    created() {
        this.CreateUrl();
    },
    methods: {
        formattedText(Value) {
            return (Value || "").replace(/\n/g, '<br>').replace(/\\n/g, '<br>').replace('\\n', '<br>');
        },
        truncateString(str) {
            if (typeof str !== 'string') return ''; // 非字符串直接返回空字符串
            return str.length > 500 ? str.substring(0, 500) + '...' : str;
        },
        CreateUrl() {
            for (let key in this.ProductData.Images) {
                this.ImageUrl = this.ProductData.Images[key];
            }
        }
    }
}
</script>

<style scoped>
.card_font01 {
    font-size: 20px;
    font-weight: 600;
    font-family: Josefin Sans, sans-serif;
}

.card_font02 {
    font-size: 16px;
    font-weight: 600;
    font-family: Josefin Sans, sans-serif;
}

.card_font03 {
    font-size: 16px;
    font-weight: 400;
    font-family: Josefin Sans, sans-serif;
}

.productDataBox .productDataCard {
    width: 100%;
    min-height: 70vh;
}

.DataCollapse {
    width: 100%;
}

.ProductLargeImages {
    width: 30vw;
    height: 30vw;
}

.CenterBox {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>