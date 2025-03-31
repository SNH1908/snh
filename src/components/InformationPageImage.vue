<template>
    <el-card class="productDataCard">
        <div style="margin-bottom: 40px;">
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                <el-breadcrumb-item><span v-if="productType">{{ getTranslate(productType) }}</span></el-breadcrumb-item>
                <el-breadcrumb-item><span v-if="ProductData.ID">{{ ProductData.ID }}</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-container>
            <el-aside width="15%">
                <el-scrollbar height="36vw">
                    <p v-for="(item, index) in ProductData.Images" :key="index" class="scrollbar-demo-item">
                        <el-image class="ProductDataImages" @click="ChangeUrl(item)" :src="item" :fit="fit" />
                    </p>
                </el-scrollbar>
            </el-aside>
            <el-aside width="85%">
                <el-image class="ProductLargeImages" :src="largeUrl" :fit="fit" />
            </el-aside>
        </el-container>
    </el-card>

    <div class="productDataCard-mobile">
        <swiper :modules="[Pagination, Navigation]" :pagination="{ clickable: true }" loop>
            <swiper-slide v-for="(item, index) in ProductData.Images" :key="index">
                <el-image class="ProductDataImages" :src="item" :fit="fit" />
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


</script>
<script>

export default {
    props: {
        ProductData: {
            type: Object,
            required: true
        },
        productType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            largeUrl: '',
            fit: 'cover',
        };
    },
    watch: {
        ProductData(newValue) {
            if (newValue) {
                this.CreateUrl();
            }
        }
    },
    created() {
    },
    methods: {
        ChangeUrl(Value) {
            this.largeUrl = Value;
        },
        CreateUrl() {
            for (let key in this.ProductData.Images) {
                this.ChangeUrl(this.ProductData.Images[key]);
                break;
            }
        },
        getTranslate(value) {
            switch (value) {
                case 'BathroomVanities':
                    return 'Bathroom Vanities';
                case 'Bathtubs':
                    return 'Bathtubs';
                case 'DeckTiles':
                    return 'DeckTiles';
                case 'Decoration':
                    return 'Decoration';
                case 'Doors':
                    return 'Doors';
                case 'Flooring':
                    return 'Flooring';
                case 'Painting':
                    return 'Painting';
                case 'Rugs':
                    return 'Rugs';
                case 'StaircasenRailings':
                    return 'Staircase and Railings';
                case 'WallPanels':
                    return 'Wall Panels';
                default:
                    return value;
            }
        },
    }
}
</script>

<style scoped>
.swiper-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.productDataBox .productDataCard {
    width: 100%;
    min-height: 100vh;
    height: 100%;
}

.productDataCard-mobile {
    width: 100%;
    display: none;
}

.ProductDataImages {
    width: 4.5vw;
    height: 4.5vw;
}

.ProductLargeImages {
    width: 36vw;
    height: 36vw;
}

.ProductDataImages :hover {
    border: 1px solid rgb(34, 63, 97);
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
}

@media(max-width: 1400px) {
    .productDataCard {
        display: none;
    }

    .productDataCard-mobile {
        display: block;
    }

    .ProductDataImages {
        width: 22vw;
        height: 22vw;
    }

    .ProductDataImages {
        width: 100%;
        height: 300px;
    }

    .ProductLargeImages {
        width: 90vw;
        height: 90vw;
    }

    .ProductDataImages :hover {
        border: 0px;
    }
}
</style>