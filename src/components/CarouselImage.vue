<template>
  <div class="carousel-wrapper">
    <div class="carousel-title Sour_Gummyn_font">
      WE BUILD WHAT <span style="color: rgb(232, 139, 59);">YOU DREAM</span>
    </div>

    <el-carousel height="70vh" class="elCarouselImg">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item.imageUrl" :fit="fit" />
      </el-carousel-item>
    </el-carousel>

  </div>
  <div class="carousel-wrapper-Ipad">
    
    <div class="carousel-title Sour_Gummyn_font">
      WE BUILD WHAT <span style="color: rgb(232, 139, 59);">YOU DREAM</span>
    </div>

    <el-carousel height="45vh" class="elCarouselImg">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item.imageUrl" :fit="fit" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="carousel-wrapper-mobile">
    
    <div class="carousel-title Sour_Gummyn_font">
      WE BUILD WHAT <span style="color: rgb(232, 139, 59);">YOU DREAM</span>
    </div>

    <el-carousel height="35vh" class="elCarouselImg">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item.imageUrl" :fit="fit" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {

      fit: 'cover',
      bannerList: [
        {
          id: 1,
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/1%2F%E4%B8%BB%E9%A1%B5%E8%BD%AE%E6%92%AD%E5%9B%BE%2Ffrezja_9_9-1920x810.png?alt=media&token=3f0add67-de58-4f31-93a4-257e1d36ba4c',
          title: 'Banner 1',
          linkUrl: '#'
        },
        {
          id: 2,
          imageUrl: require('@/assets/LightingMenu.png'),
          title: 'Banner 2',
          linkUrl: '#'
        },
        {
          id: 3,
          imageUrl: require('@/assets/slider.webp'),
          title: 'Banner 3',
          linkUrl: '#'  
        },
        {
          id: 4,
          imageUrl: require('@/assets/csm_SWK_Startseite_Flooring_6d26a8e801.webp'),
          title: 'Banner 4',
          linkUrl: '#'
        },
        {
          id: 5,
          imageUrl: require('@/assets/23-LPD_S22_SOHO_BLONDE_OAK_EST_F01.jpg'),
          title: 'Banner 5',
          linkUrl: '#'
        },
      ],
    };
  },
}
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 70vh;
}
.carousel-wrapper-Ipad {
  position: relative;
  width: 100%;
  height: 45vh;
  display: none;
}
.carousel-wrapper-mobile {
  position: relative;
  width: 100%;
  height: 35vh;
  display: none;
}

.Sour_Gummyn_font {
  font-family: Sour_Gummy, sans-serif;
}

.carousel-title-small {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-size: 2.4vw;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-size: 3.2vw;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 1400px) {
  .carousel-title{
    top: 45%;
    font-size: 5vw;
    width: 80%;
    left: 55%;
  }
  .carousel-title-small{
    font-size: 5vw;
    top: 60%;
    left: 33%;
  }
  .carousel-wrapper-mobile{
    display: none;
  }
  .carousel-wrapper {
    display: none;
  }

  .carousel-wrapper-Ipad {
    display: block;
  }

  .carousel-title-small {
    display: block;
  }

  .carousel-title {
    display: block;
  }
}

@media (max-width: 768px){
  .carousel-wrapper-Ipad{
    display: none;
  }
  .carousel-wrapper {
    display: none;
  }

  .carousel-wrapper-mobile {
    display: block;
  }
}
</style>