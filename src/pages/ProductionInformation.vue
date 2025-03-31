<template>
    <MainLayout>
        <div class="HomePagebox">
            <el-container>
                <el-aside width="61.8%">
                    <div class="productDataBox">
                        <InformationPageImage :ProductData="this.tableData" :productType="this.productType" />
                    </div>
                </el-aside>
                <el-aside width="38.2%">
                    <InformationPageData :ProductData="this.tableData" />
                </el-aside>
            </el-container>
            <div style="width: 100%;">
                <MoreInformationCard :ProductData="this.tableData" />
            </div>
            <div style="width: 100%;">
                <ProductRecommendation :RecommendData="RecommendData" />
            </div>

        </div>
        <div class="HomePagebox-mobile">
            <InformationPageImage :ProductData="this.tableData" :productType="this.productType" />
            <InformationPageData :ProductData="this.tableData" />
            <div style="width: 100%;">
                <ProductRecommendation :RecommendData="RecommendData" />
            </div>
        </div>
    </MainLayout>
</template>



<script>
import MainLayout from "@/layouts/MainLayout.vue";
import { getData } from '@/services/firebaseService';
import InformationPageData from "@/components/InformationPageData.vue";
import InformationPageImage from "@/components/InformationPageImage.vue";
import MoreInformationCard from "@/components/MoreInformationCard.vue";
import ProductRecommendation from "@/components/ProductRecommendation.vue";
export default {
    name: "SNH-Product",
    components: {
        MainLayout,
        InformationPageData,
        InformationPageImage,
        MoreInformationCard,
        ProductRecommendation,
    },
    data() {
        return {
            tableData: '',
            fit: 'cover',
            Path: '',
            ProductNum: 0,
            productType: '',
            RecommendData: {
                type: 'All',
                number: 8,
            },
        };
    },
    watch: {
        '$route.query': {
            handler(newQuery, oldQuery) {
                if (newQuery.productType !== oldQuery.productType || newQuery.productID !== oldQuery.productID) {
                    this.productType = this.$route.query.productType;
                    this.Path = this.getPath(this.productType) + '/Products/' + this.$route.query.productID;

                    this.RecommendData.type = this.getPath(this.productType);
                    this.fetchData(this.Path);
                }
            },

        }
    },
    created() {
        window.scrollTo(0, 0);
        this.productType = this.$route.query.productType;
        this.RecommendData.type = this.productType;
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const data = await getData('Catalog/Products/'+ this.$route.query.productID);
            this.tableData = data;
        },
        getPath(value) {
            return 'Store/'+value;
        },


    }
}
</script>

<style scoped>
.HomePagebox {
    margin-top: 5px;
    min-height: 100vh;
    padding-left: 9.55vw;
    padding-right: 9.55vw;
}

.HomePagebox-mobile {
    min-height: 100vh;
    display: none;
}

.CenterBox {
    display: flex;
    align-items: center;
    justify-content: center;
}

.productDataBox .productDataCard {
    width: 100%;
    min-height: 100vh;

}

@media (max-width: 1400px) {
    .HomePagebox {
        display: none;
    }

    .HomePagebox-mobile {
        display: block;
    }
}
</style>