<template>
    <div class="productDataBox">
        <!--产品数据-->
        <el-card class="productDataCard">
            <template #header>
                <span class="card_font01">{{ ProductData.Name }}</span>
                <div class="card_font03">product ID:{{ ProductData.ID }}</div>
            </template>
            <h1 class="card_font02">$ Inquiry</h1>
            <p class="card_font03">Eligible for free ground shipping on orders over $150</p>
            <div style="margin: 20px 0px 20px 0px;width: 100%;height: 50px;">
                <el-container>
                    <el-aside width="38.2%">
                        <div class="CenterBox" style="height: 50px;">
                            <el-button-group>
                                <el-button class="GroupButton" color='rgb(34, 63, 97)' plain
                                    @click="ChangeProductNum('up')"><el-icon>
                                        <Plus />
                                    </el-icon></el-button>
                                <el-button class="GroupButton" disabled>
                                    {{ ProductNum }}
                                </el-button>
                                <el-button class="GroupButton" color='rgb(34, 63, 97)' plain
                                    @click="ChangeProductNum('down')"><el-icon>
                                        <Minus />
                                    </el-icon></el-button>
                            </el-button-group>
                        </div>
                    </el-aside>
                    <el-aside width="61.8%">
                        <div style="width: 100%;height: 100%;">
                            <p class="card_font03 CenterBox" style="height: 50px;">In stock and available to ship</p>
                        </div>
                    </el-aside>

                </el-container>
            </div>
            <div style="height: 50px;" class="CenterBox">
                <el-button-group>
                    <el-button color="rgb(34, 63, 97)" class="BuyBtn" style="margin-right: 1px;" size="large">ADD TO
                        CART</el-button>
                    <el-button color="rgb(34, 63, 97)" class="BuyBtnstar" size="large">
                        <el-icon>
                            <StarFilled />
                        </el-icon>
                    </el-button>
                </el-button-group>
            </div>

            <div>
                <el-collapse v-model="activeNames" class="DataCollapse">
                    <el-collapse-item title="Description" name="1">
                        <div class="card_font03">
                            <div v-if="ProductData.Description">
                                <div v-if="isRichText">
                                    <!-- 如果是富文本，渲染 HTML -->
                                    <div v-html="renderedContent"></div>
                                </div>
                                <div v-else>
                                    <!-- 如果是纯文本，正常显示 -->
                                    <div v-if="truncateStatue">
                                        <div>{{ truncateString(ProductData.Description) }}</div>
                                        <el-button v-if="ProductData.Description.length > 500" :key="plain" text link
                                            @click="truncateStatue = false">
                                            See More
                                        </el-button>
                                    </div>
                                    <div v-else>
                                        <div>{{ ProductData.Description }}</div>
                                        <el-button v-if="ProductData.Description.length > 500" :key="plain" text link
                                            @click="truncateStatue = true">
                                            See Less
                                        </el-button>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <p class="card_font03">A detailed description of this product is not available at the
                                    moment. We are
                                    working to update this information soon.</p>
                            </div>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Dimensions" name="2">
                        <div v-if="ProductData.Dimensions">
                            <div v-for="(item, index) in ProductData.Dimensions" :key="index">
                                <p>{{ item }}</p>
                            </div>
                        </div>
                        <div v-else>
                            <p class="card_font03">Can be customized</p>
                        </div>

                    </el-collapse-item>
                    <el-collapse-item title="Shipping & Returns" name="3">
                        <p class="card_font03">This item ships via standard ground delivery. Arrives in 14 business
                            days.</p>
                        <p class="card_font03">This item can be returned within 30 days of receipt.</p>
                    </el-collapse-item>
                    <el-collapse-item title="Specifications" name="4" class="MoreCollapseItem">
                        <div v-if="ProductData.Specifications">
                            <div class="card_font03" v-html="formattedText(ProductData.Specifications)"></div>
                        </div>
                        <div v-else>
                            Specifications are currently unavailable for this product. Please check back later or
                            contact our
                            support team for more details.
                        </div>

                    </el-collapse-item>
                    <el-collapse-item title="About" name="5" class="MoreCollapseItem">
                        <div v-if="ProductData.About">
                            <div class="card_font03" v-html="formattedText(ProductData.About)"></div>
                        </div>
                        <div v-else>
                            Additional details about this product are currently unavailable. Please feel free to explore
                            other
                            products or contact us for assistance.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div>
                <el-image class="ProductLargeImagesa" :src="ImageMobileUrl" :fit="fit" />
            </div>

        </el-card>
    </div>
</template>


<script setup>
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>


<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
    props: {
        ProductData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            fit: 'cover',
            ProductNum: 0,
            ImageMobileUrl: '',
            truncateStatue: true,
        };
    },
    watch: {
        ProductData(newValue) {
            if (newValue) {
                this.CreateUrl();
            }
        }
    },
    computed: {
        // 判断是否为富文本格式（Quill Delta 格式）
        isRichText() {
            try {
                return typeof this.ProductData.Description === "object" && this.ProductData.Description !== null && "ops" in this.ProductData.Description;
            } catch (e) {
                return false; // 解析失败，说明是纯文本
            }
        },
        // 将 Quill Delta 格式转换为 HTML
        
        renderedContent() {
            if (!this.isRichText) return this.ProductData.Description;

            const tempContainer = document.createElement("div"); // 创建一个临时 div
            const quill = new Quill(tempContainer); // 让 Quill 解析
            quill.setContents(this.ProductData.Description);

            return tempContainer.innerHTML; // 取出 HTML
        }
    },
    methods: {
        truncateString(str) {
            if (typeof str !== 'string') return ''; // 非字符串直接返回空字符串
            return str.length > 500 ? str.substring(0, 500) + '...' : str;
        },
        ChangeProductNum(key) {
            switch (key) {
                case 'up':
                    this.ProductNum++;
                    break;
                case 'down':
                    if (this.ProductNum > 0) {
                        this.ProductNum--;
                    }
                    break;

            }

        },
        formattedText(Value) {
            return (Value || "").replace(/\n/g, '<br>').replace(/\\n/g, '<br>').replace('\\n', '<br>');
        },
        CreateUrl() {
            for (let key in this.ProductData.Images) {
                this.ImageMobileUrl = this.ProductData.Images[key];
            }
        },

    }
}
</script>

<style scoped>
.card_font01 {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 800;
    font-family: Josefin Sans, sans-serif;
}



.card_font02 {
    font-size: 20px;
    font-weight: 600;
    font-family: Josefin Sans, sans-serif;
}

.card_font03 {
    font-size: 12px;
    font-weight: 400;
    color: gray;
    font-family: Josefin Sans, sans-serif;
}

.ProductLargeImagesa {
    width: 100%;
    height: 300px;
    display: none;
}

.productDataBox .productDataCard {
    width: 100%;
    min-height: 100vh;
}

.GroupButton {
    width: 3vw;
}

.CenterBox {
    display: flex;
    align-items: center;
    justify-content: center;
}

.DataCollapse {
    width: 100%;
    margin-top: 40px;
}

.BuyBtn {
    margin-right: 1px;
    width: 22.5vw;
}

.BuyBtnstar {
    width: 5vw;
}

.MoreCollapseItem {
    display: none;
}

@media(max-width: 1400px) {
    .card_font01 {
        margin-top: 40px;
        font-size: 18px;
        font-weight: 600;
        font-family: Josefin Sans, sans-serif;
    }

    .card_font02 {
        font-size: 16px;
        font-weight: 400;
        font-family: Josefin Sans, sans-serif;
    }

    .GroupButton {
        width: 40px;
    }

    .BuyBtn {
        margin-right: 5px;
        width: 60vw;
    }

    .BuyBtnstar {
        width: 15vw;
    }

    .MoreCollapseItem {
        display: block;
    }

    .ProductLargeImagesa {
        display: block;
    }
}
</style>