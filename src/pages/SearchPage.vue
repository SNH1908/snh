<template>
    <MainLayout>
        <div class="HomePagebox">
            <h1 class="Home_font01"> Showing results for "{{ SearchStr }}".</h1>
            <!--产品数据-->
            <ProductData :pageProductId=false :SearchStr="SearchStr" />
            
        </div>

    </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import ProductData from "@/components/ProductData.vue";

/*

import ProductTitleImage from "@/components/ProductTitleImage.vue";

<!--产品标题图片-->
<ProductTitleImage :pageProductId="pageProductId" />



ProductTitleImage,
*/
export default {
    name: "SNH-SearchPage",
    components: {
        MainLayout,
        ProductData,
    },
    watch: {
        '$route.query': {
            handler(newQuery, oldQuery) {
                if (newQuery.SearchStr !== oldQuery.SearchStr) {
                    this.SearchStr = this.$route.query.SearchStr;

                }
            },

        }
    },
    data() {
        return {
            SearchStr: '',
            fit: 'cover',
        };
    },
    created() {
        this.SearchStr = this.$route.query.SearchStr;
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

.Home_font01 {
    margin-top: 40px;
    font-size: 32px;
    font-weight: 800;
    font-family: Josefin Sans, sans-serif;
    margin-left: 20px;
    margin-bottom: 100px;
}
</style>