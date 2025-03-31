<template>

  <div style="display: flex;justify-content: space-between;align-items: center;margin-top: 40px;margin-bottom: 40px;">
    <span class="PopularCategories_font01">Our best-selling products</span>
    <!-- <span class="SeeMoreBox">See all</span> -->
  </div>
  <div class="CategoriesCard">
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <p v-for="(item, index) in ImageData" :key="index" class="scrollbar-demo-item">
          <el-card style="width: 400px; height: 600px">
            <el-image style="width: 400px; height: 600px" :src="item.url" :fit="fit" />
          </el-card>
        </p>
      </div>
    </el-scrollbar>
  </div>
  <div class="scrollbar-flex-content-mobile">
    <swiper :modules="[Pagination, Navigation]" :pagination="{ clickable: true }" loop>
      <swiper-slide v-for="(item, index) in ImageData" :key="index">
        <el-image class="ProductDataImages" :src="item.url" :fit="fit" />
      </swiper-slide>
    </swiper>
  </div>

</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

</script>
<script>
export default {
  data() {
    return {
      fit: 'cover',
      ImageData: [
        { url: require('@/assets/Popular categories 1.jpg') },
        { url: require('@/assets/Popular categories 2.jpg') },
        { url: require('@/assets/Popular categories 3.jpg') },
        { url: require('@/assets/Popular categories 4.jpg') },
        { url: require('@/assets/Popular categories 5.jpg') },
        { url: require('@/assets/Popular categories 6.jpg') },
      ],
    };
  },
}
</script>

<style scoped>
.TextAside {
  text-align: center;
  margin-top: 10px;
}

.CategoriesCardImg {
  width: 100%;
  height: 220px;
}

.CenteredBox {
  display: table-cell;
  vertical-align: middle;
  /* 垂直方向居中 */
  text-align: center;
  /* 水平方向居中 */
  height: 200px;
}

.SeeMoreBox {
  text-decoration: underline;
  float: right;
  margin-right: 100px;
}

.Sour_Gummyn_font {
  font-family: Sour_Gummy, sans-serif;
}

.scrollbar-flex-content {
  display: flex;
}

.scrollbar-flex-content-mobile {
  display: none;
}

.CategoriesCard-Mobile {
  width: 100%;
  display: grid;
  place-items: center;
  /* 同时垂直与水平居中 */
  height: 240px;
  /* 确保 div 有一定的高度以便居中显示 */
}

.PopularCategoriesCard-Mobile {
  width: 95%;
  height: 220px;
  color: white;
}

.scrollbar-demo-item {
  margin-right: 10px;
  margin-bottom: 20px;
}

.PopularCategories_font01 {
  font-size: 32px;
  font-weight: 800;
  color: rgb(34, 63, 97);
  font-family: Sour_Gummy, sans-serif;
  margin-left: 20px;
}

.PopularCategoriesBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
}

.PopularCategoriesCard {
  width: 462px;
  height: 778px;
}

.PopularCategoriesCard :hover {
  transform: scale(1.01);
}

.el-card :deep(.el-card__body) {
  padding: 0px;
}

@media(max-width:1400px){
  .PopularCategories_font01 {
    font-size: 24px;
    font-weight: 400;
    margin-left: 20px;
  }
}

@media(max-width:768px) {

  .scrollbar-flex-content {
    display: none;
  }

  .scrollbar-flex-content-mobile {
    display: block;
  }

  .PopularCategories_font01 {
    font-size: 18px;
    font-weight: 300;
    margin-left: 20px;
  }

  .SeeMoreBox {
    margin-right: 5px;
  }


}
</style>