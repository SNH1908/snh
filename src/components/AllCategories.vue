<template>

  <div style="display: flex;justify-content: space-between;align-items: center;margin-top: 40px;margin-bottom: 40px;">
    <span class="AllCategories_font01" style="width: 100%;">What are you looking for</span>
    <!-- <span class="SeeMoreBox">See all</span> -->
  </div>

  <div class="AllCategoriesComputer">
    <el-container>
      <el-aside width="5%" />
      <el-aside width="90%">
        <el-row :gutter="20" style="width: 100%;">
          <el-col :span="6" v-for="(item, index) in data" :key="index" class="ElCol">
            <el-card style="width: 21vw;margin-bottom: 20px;" shadow="hover">
              <div class="Img-Box-div" @mouseleave="item.hover = false" @mouseover="item.hover = true">
                <el-image class="ElCardImage" :src="item.url" :fit="fit" />
                <div v-if="item.hover" class="Img-Box-If">
                  <h3 class="title Sour_Gummyn_font">{{ item.name }}</h3>
                  <el-button type="info" @click="navigateToProduct(item.name)" round>
                    <p class="Sour_Gummyn_font">SHOP NOW</p>
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-aside>
      <el-aside width="5%" />
    </el-container>
  </div>
  <div class="AllCategoriesMobile">
    <el-container>
      <el-aside width="5%" />
      <el-aside width="90%">
        <el-row :gutter="20" style="width: 100%;margin-left: 0px;">
          <el-col :span="12" v-for="(item, index) in data" :key="index" class="ElCol-M">
            <el-card style="width: 100%;margin-bottom: 20px;" shadow="hover">
              <div class="Img-Box-div" @mouseleave="item.hover = false" @mouseover="item.hover = true">
                <el-image class="ElCardImage-M" :src="item.url" :fit="fit" />
                <div v-if="item.hover" class="Img-Box-If">
                  <h3 class="title Sour_Gummyn_font">{{ item.name }}</h3>
                  <el-button type="info" @click="navigateToProduct(item.name)" round>
                    <p class="Sour_Gummyn_font">SHOP NOW</p>
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-aside>
      <el-aside width="5%" />
    </el-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fit: 'cover',
      data: [
        { hover: false, color: 'rgb(231, 214, 206)', name: 'Bathroom Vanities', url: require('@/assets/BathroomVanitiesCategories.jpeg') },
        { hover: false, color: 'rgb(252, 241, 214)', name: 'Bathtubs', url: require('@/assets/BathtubsCategories.jpeg') },
        { hover: false, color: 'rgb(209, 220, 196)', name: 'Deck Tiles', url: require('@/assets/DeckTilesCategories.jpeg') },
        { hover: false, color: 'rgb(231, 214, 206)', name: 'Decoration', url: require('@/assets/DecorationCategories.jpg') },
        { hover: false, color: 'rgb(252, 241, 214)', name: 'Doors', url: require('@/assets/DoorsCategories.jpg') },
        { hover: false, color: 'rgb(209, 220, 196)', name: 'Flooring', url: require('@/assets/FlooringCategories.jpeg') },
        { hover: false, color: 'rgb(231, 214, 206)', name: 'Painting', url: require('@/assets/PaintingCategories.jpg') },
        { hover: false, color: 'rgb(252, 241, 214)', name: 'Rugs', url: require('@/assets/RugsCategories.jpeg') },
        { hover: false, color: 'rgb(209, 220, 196)', name: 'Staircase and Railings', url: require('@/assets/StaircaseRailingsCategories.jpg') },
        { hover: false, color: 'rgb(231, 214, 206)', name: 'Wall Panels', url: require('@/assets/WallPanelsCategories.jpg') },
      ],

    };
  },
  methods: {
    navigateToProduct(Value) {
      this.isHovering = true;
      this.NotHovering = false;
      this.$router.push({
        name: 'Product',
        query: { productType: Value }
      }).then(() => {
        document.body.scrollTo(0, 0);
      });
    },
  }
}
</script>

<style scoped>
.ElCol-M
.ElCol {
  display: flex;
  justify-content: center;
}

.ElCol-M{
  width: 50%;
  margin: 0px;
}

.ElCardImage {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  margin-bottom: -4px;
}

.ElCardImage-M {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  margin-bottom: -4px;
}

.Img-Box-div {
  position: relative;
}

.SeeMoreBox {
  text-decoration: underline;
  float: right;
  margin-right: 100px;
}

.AllCategories_font01 {
  font-size: 32px;
  font-weight: 800;
  color: rgb(34, 63, 97);
  font-family: Sour_Gummy, sans-serif;
  margin-left: 20px;
}

.Img-Box-If {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transition: opacity 0.3s ease;
}

.AllCategoriesCard {
  max-width: 220px;
  border: white;
  border-radius: 20px;
}

.AllCategoriesImg {
  width: 220px;
  border-radius: 50%;
}


.AllCategoriesImg:hover {
  border: 2px solid blueviolet;
}

.Sour_Gummyn_font {
  font-family: Sour_Gummy, sans-serif;
}

.AllCategoriesBox {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

.el-card :deep(.el-card__body) {
  padding: 0px;
}

.AllCategoriesMobile {
  display: none;
}

.title {
  margin: 0;
  padding: 10px;
  font-size: 1.5em;
}

.action-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #008CBA;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

@media(max-width:1400px) {
  .AllCategoriesComputer {
    display: none;
  }

  .AllCategoriesMobile {
    display: block;
  }

  .AllCategories_font01 {
    font-size: 24px;
    font-weight: 400;
    margin-left: 20px;
  }

  .SeeMoreBox {
    margin-right: 5px;
  }

  .AllCategoriesImg {
    width: 120px;
    border-radius: 50%;
  }

  .AllCategoriesCard {
    border-radius: 0px;
  }
}
@media(max-width:768px){
  .AllCategories_font01 {
    font-size: 18px;
    font-weight: 300;
    margin-left: 20px;
  }
}
</style>