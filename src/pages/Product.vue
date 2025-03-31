<template>
    <MainLayout>
        <div class="HomePagebox">
            <!--产品标题图片-->
            <ProductTitleImage :pageProductId="pageProductId" />
            <!--产品数据-->
            <ProductData :pageProductId="pageProductId" />
        </div>

    </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import ProductData from "@/components/ProductData.vue";
import ProductTitleImage from "@/components/ProductTitleImage.vue";

export default {
    name: "SNH-Product",
    components: {
        MainLayout,
        ProductData,
        ProductTitleImage,
    },
    data() {
        return {
            pageProductId: '',
            fit: 'cover',
        };
    },
    watch: {
        '$route.query': {
            handler(newQuery, oldQuery) {
                if (newQuery.productType !== oldQuery.productType) {
                    this.pageProductId = this.$route.query.productType;
                }
            },

        }
    },
    created() {
        if(this.$route.params.ProductId){
            this.pageProductId = this.$route.params.ProductId;
        }else{
            this.pageProductId = this.$route.query.productType;
        }
    },
    methods: {
        

    }
}
</script>

<style scoped>
.HomePagebox {
    margin-top: 5px;
    min-height: 100vh;
}
</style>