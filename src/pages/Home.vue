<template>
  <MainLayout>
    <div class="HomePagebox">
      <!--轮播图 -->
      <CarouselImage />

      <!--产品推荐区 -->
      <ProductRecommendation :RecommendData="RecommendData" />

      <!--热门类别展示 -->
      <PopularCategories />

      <!--单类别介绍区域 -->
      <ClassificationDetails />

      <!--所有类别展示 -->
      <AllCategories />

      <ChatWindowAffix/>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import CarouselImage from "@/components/CarouselImage.vue";
import ProductRecommendation from "@/components/ProductRecommendation.vue";
import PopularCategories from "@/components/PopularCategories.vue";
import AllCategories from "@/components/AllCategories.vue";
import ClassificationDetails from "@/components/ClassificationDetails.vue";
import ChatWindowAffix from "@/components/ChatWindowAffix.vue";
export default {
  name: "SNH-Home",
  components: {
    MainLayout,
    CarouselImage,
    ProductRecommendation,
    PopularCategories,
    AllCategories,
    ClassificationDetails,
    ChatWindowAffix
  },
  data() {
    return {
      RecommendData: {
        type: 'All',
        number: 8,
      },
      fit: 'cover',
      ChatCart: false,
      ChatInput: '',
    };
  },
};
</script>
<style scoped>
.Home_font01 {
  margin-top: 40px;
  font-size: 32px;
  font-weight: 800;
  color: rgb(34, 63, 97);
  font-family: Josefin Sans, sans-serif;
  margin-left: 20px;
}

.SNH_font02 {
  margin-top: 20px;
  font-size: 16px;
  font-family: Josefin Sans, sans-serif;
}

.SNH_font03 {
  font-size: 14px;
  color: gray;
  font-family: Josefin Sans, sans-serif;
}

.Josefin-font {
  font-family: Josefin Sans, sans-serif;
  color: rgb(34, 63, 97);
}

.HomePagebox {
  min-height: 100vw;
  padding-bottom: 145px;
}
</style>