<template>
  <div style="display: flex;justify-content: space-between;align-items: center;margin-top: 40px;margin-bottom: 20px;">
    <span class="ProductRecommendation_font01">The products you might like</span>
  </div>
  <div v-if="loading">
    <el-skeleton style="margin-top: 50px;margin-bottom: 30px;" :rows="5" animated />
  </div>
  <div v-else>
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <p v-for="(item, index) in data" :key="index" class="scrollbar-demo-item">
          <el-card class="ProductCard" shadow="hover" @click="navigateToTarget(item)">

            <el-image class="ProductCardImg" :src="item.ProductImg" :fit="fit" />
            <template #footer>
              <p class="Sour_Gummyn_font">{{ truncateString(item.ProductName) }}</p>
            </template>
          </el-card>

        </p>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { getData } from '@/services/firebaseService';
export default {
  props: {
    RecommendData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      fit: 'cover',
      data: [{ "ProductName": "DORNIER RUGS", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1728631423021_1312%20DORNIER%20RUGS%2001.png?alt=media&token=a7c8d042-9ca7-4a58-8939-0131a614578f", "ProductID": "1312 DORNIER RUGS", "productType": "Rugs" }, { "ProductName": "CRYSTAL VELVET", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1728547634049_1313-2%20ICE%20FLOWER%20VELVET%20RUGS%2001.png?alt=media&token=429f7ccd-936b-4c6f-977d-b8c38d459909", "ProductID": "1313-2 ICE FLOWER VELVET RUGS", "productType": "Rugs" }, { "ProductName": "Acrylic Giraffe Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729063483587_acrylic_giraffe_x900.webp?alt=media&token=464e5c18-cf73-47fb-a712-f997075cbf30", "ProductID": "Acrylic-SNH-09", "productType": "Decoration" }, { "ProductName": "PS Wall Panel", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/Wall%20Panels%2FPS%20Wall%20Panel%2FJC1077%23_01.png?alt=media&token=9bb85ea4-8b2b-4d9d-9182-f67dfc9dfe3e", "ProductID": "JC1077", "productType": "Wall Panels" }, { "ProductName": "Ceramic ornaments", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1728461580051_%E5%9B%BE%E7%89%871.png?alt=media&token=639b3eae-ff80-4ea5-b2aa-dd23b7020e29", "ProductID": "KS312B-SNH-01", "productType": "Decoration" }, { "ProductName": "PVC Wall Panel", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/Wall%20Panels%2FPVC%20Wall%20Panel%2FLuxury%20Stone%20Series8.png?alt=media&token=b9f5f657-1501-445e-af33-cedd243dec50", "ProductID": "Luxury Stone Series", "productType": "Wall Panels" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/XA-063%20(2).jpeg?alt=media&token=1b00da27-e4ff-4d67-bfd5-7728671ded65", "ProductID": "SH23BT063", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/XA-158.jpeg?alt=media&token=4b17ea35-714c-465d-a364-ab36001bb1c4", "ProductID": "SH23BT158", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-7721-3.jpeg?alt=media&token=65fb1009-eab6-4bae-82a6-9f3603833ad7", "ProductID": "SH23BT7721", "productType": "Bathtubs" }],
      url: require('@/assets/DataLoding.png'),
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    getName(value) {
      return value.slice(6);
    },
    truncateString(str) {
      if (typeof str !== 'string') return ''; // 非字符串直接返回空字符串
      return str.length > 50 ? str.substring(0, 50) + '...' : str;
    },
    navigateToTarget(item) {
      this.$router.push({
        name: 'ProductionInformation',
        query: { productType: item.productType, productID: item.ProductID }
      }).then(() => {
        document.body.scrollTo(0, 0);
      });
    },
    async fetchData() {
      try {
        if (this.RecommendData.type === 'All') {
          this.fetchAllData();
        } else {
          this.fetchOneData(this.RecommendData.type);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchAllData() {
      if (this.data) {
        const randomInt = Math.floor(Math.random() * 10);
        if (randomInt >= 8) {
          this.data = [{ "ProductName": "CRYSTAL VELVET", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1728631732053_1313%20VINTAGE%20PERSIAN%20STYLE%2001.png?alt=media&token=8c8348a0-bacd-465c-accf-27eb50efdb03", "ProductID": "1313 VINTAGE PERSIAN STYLE", "productType": "Rugs" }, { "ProductName": "Acrylic Snail Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729067344131_acrylic_snail_purple_a_x900.webp?alt=media&token=59f5d79e-2c53-410f-9ecd-60e990b1877c", "ProductID": "Acrylic-SNH-12", "productType": "Decoration" }, { "ProductName": "MDF Acoustic Wall Panel", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/Wall%20Panels%2FMDF%20Acoustic%20Wall%20Panel%2FJM1114-MBW-23WV%2F%E6%A8%A1%E6%93%AC%E7%B5%90%E6%9E%9C_image%20(1).jpg?alt=media&token=cfcece29-2535-4a33-b032-496645d8f558", "ProductID": "JM1114-MBW-23WV", "productType": "Wall Panels" }, { "ProductName": "MDF Acoustic Wall Panel", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/Wall%20Panels%2FMDF%20Acoustic%20Wall%20Panel%2FJM1114-MBW-26WV%2FJM1114-MBW-26WV(3).jpg?alt=media&token=c6e18674-09eb-49f4-b9c4-3f1c7f5c14ba", "ProductID": "JM1114-MBW-26WV", "productType": "Wall Panels" }, { "ProductName": "Ceramic ornaments", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1728874869254_1.png?alt=media&token=53fbec3b-4a3c-48d4-a3bb-e192d73951e2", "ProductID": "KS334-SNH-01", "productType": "Decoration" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-7676%20(2).jpeg?alt=media&token=5bd19359-dcb1-43f0-ac05-134db7403577", "ProductID": "SH23BT7676", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-7790L-1.jpeg?alt=media&token=e28f60a6-67df-4611-90b8-e00afc011c15", "ProductID": "SH23BT7790", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-8203T%20(3).jpeg?alt=media&token=2ab487dd-fcf2-4060-9f95-1cc8f4cb9510", "ProductID": "SH23BT8203", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/XA-8508T%20(1).jpeg?alt=media&token=b005335f-a304-452f-839c-5dee2b7caaa1", "ProductID": "SH23BT8508", "productType": "Bathtubs" }];
        } else if (randomInt >= 6) {
          this.data = [{ "ProductName": "Acrylic Hippo Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729068077292_acrylic_hippo_a_x900.webp?alt=media&token=5b4b8490-842f-4710-98c0-5a68283445aa", "ProductID": "Acrylic-SNH-17", "productType": "Decoration" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/XA-158.jpeg?alt=media&token=4b17ea35-714c-465d-a364-ab36001bb1c4", "ProductID": "SH23BT158", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-7681%20(1).jpeg?alt=media&token=ac339546-805b-4dba-b22a-ad422aa55455", "ProductID": "SH23BT7681", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-8203T%20(3).jpeg?alt=media&token=2ab487dd-fcf2-4060-9f95-1cc8f4cb9510", "ProductID": "SH23BT8203", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/XA-8866_004.jpeg?alt=media&token=4c1fc560-5405-4b6e-86ec-ffe292582012", "ProductID": "SH23BT8866B", "productType": "Bathtubs" }, { "ProductName": "Wall mounted Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/MD-06-2.jpeg?alt=media&token=ce18d363-b648-4975-8b1d-d19319880f88", "ProductID": "SH23BV06MD", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Dual Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/GD4-2200-1.jpeg?alt=media&token=c70933bf-7d2b-43b0-b75e-70d1dd3b26c6", "ProductID": "SH23BV2200GD4", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Dual Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TG-23-1.jpeg?alt=media&token=94fb4381-39e2-4069-8089-843a4ecf2b95", "ProductID": "SH23BV23TG", "productType": "Bathroom Vanities" }, { "ProductName": "Diagonal Grained PP Deck Tiles DarkGrey", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/VA-619%20dark%20grey%20(2).jpg?alt=media&token=7f9238f4-1979-4d95-b8f8-c3ac234acdb0", "ProductID": "SH23DT319PPDarkGrey", "productType": "Deck Tiles" }];
        } else if (randomInt >= 4) {
          this.data = [{ "ProductName": "CRYSTAL VELVET", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1728631732053_1313%20VINTAGE%20PERSIAN%20STYLE%2001.png?alt=media&token=8c8348a0-bacd-465c-accf-27eb50efdb03", "ProductID": "1313 VINTAGE PERSIAN STYLE", "productType": "Rugs" }, { "ProductName": "MDF Acoustic Wall Panel", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/Wall%20Panels%2FMDF%20Acoustic%20Wall%20Panel%2FJM1114-MBW-26WV%2FJM1114-MBW-26WV(3).jpg?alt=media&token=c6e18674-09eb-49f4-b9c4-3f1c7f5c14ba", "ProductID": "JM1114-MBW-26WV", "productType": "Wall Panels" }, { "ProductName": "MDF Wall Panel", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/Wall%20Panels%2FMDF%20Wall%20Panel%2FJM1321-MBW-1.png?alt=media&token=381db38d-3471-4d93-9ce4-15e42aa89289", "ProductID": "JM1321-MBW", "productType": "Wall Panels" }, { "ProductName": "HOT SELLING PATTERN", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1728632020464_Modern%20Ink%20Style-01.png?alt=media&token=a077346b-a48a-4da1-8bd0-86c825ccd9ae", "ProductID": "Modern Ink Style 01-04", "productType": "Rugs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-8681.jpeg?alt=media&token=4bc278d0-d50c-4191-8153-fbe8b1fcfdcf", "ProductID": "SH23BT8681", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/XA-8862%20(3).jpeg?alt=media&token=eb297b32-69a1-4efb-a968-b66f05a07919", "ProductID": "SH23BT8862", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/XA-8877(1).jpeg?alt=media&token=4d59f6d4-091e-450c-a01d-7e4c5997a457", "ProductID": "SH23BT8877", "productType": "Bathtubs" }, { "ProductName": "Wall mounted Dual Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/NC-04-3.jpeg?alt=media&token=0401ee79-4916-4b7c-8d02-be8f99e12da3", "ProductID": "SH23BV04NC", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/MD-06-2.jpeg?alt=media&token=ce18d363-b648-4975-8b1d-d19319880f88", "ProductID": "SH23BV06MD", "productType": "Bathroom Vanities" }];
        } else if (randomInt >= 2) {
          this.data = [{ "ProductName": "CRYSTAL VELVET", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1728631732053_1313%20VINTAGE%20PERSIAN%20STYLE%2001.png?alt=media&token=8c8348a0-bacd-465c-accf-27eb50efdb03", "ProductID": "1313 VINTAGE PERSIAN STYLE", "productType": "Rugs" }, { "ProductName": "Purple Acrylic Mushroom Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729061550489_Acrylic_Mushroom_Objet_Purple_a_x900.webp?alt=media&token=9dc746d1-e648-4c62-b3b7-ccd175a72fae", "ProductID": "Acrylic-SNH-03", "productType": "Decoration" }, { "ProductName": "PS Wall Panel", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/Wall%20Panels%2FPS%20Wall%20Panel%2FJC1066%23_01.png?alt=media&token=5d8fc48b-2510-437e-aca8-ab73b8c65c75", "ProductID": "JC1066", "productType": "Wall Panels" }, { "ProductName": "PS Wall Panel", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/Wall%20Panels%2FPS%20Wall%20Panel%2FJC971%23_01.png?alt=media&token=3298b833-dae5-430a-b285-d3f423a7f06c", "ProductID": "JC971", "productType": "Wall Panels" }, { "ProductName": "MDF Acoustic Wall Panel", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/Wall%20Panels%2FMDF%20Acoustic%20Wall%20Panel%2FJM1114-MBW-23WV%2F%E6%A8%A1%E6%93%AC%E7%B5%90%E6%9E%9C_image%20(1).jpg?alt=media&token=cfcece29-2535-4a33-b032-496645d8f558", "ProductID": "JM1114-MBW-23WV", "productType": "Wall Panels" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-7111_003.jpeg?alt=media&token=7b8ca397-2729-4277-b7fc-7f47b37ac9b3", "ProductID": "SH23BT7111", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-7708-1500%20(2).jpeg?alt=media&token=6691b1bf-1558-4756-9009-c5637dad78a1", "ProductID": "SH23BT7708", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/TW-7721-3.jpeg?alt=media&token=65fb1009-eab6-4bae-82a6-9f3603833ad7", "ProductID": "SH23BT7721", "productType": "Bathtubs" }, { "ProductName": "Freestanding Surface Bathtub", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/XA-8866_004.jpeg?alt=media&token=4c1fc560-5405-4b6e-86ec-ffe292582012", "ProductID": "SH23BT8866B", "productType": "Bathtubs" }];
        }
        this.loading = false;
        return;
      }
      if (this.data.length > 0) {
        console.log('data.length > 0');
        return;
      }
      const data = await getData('Catalog/Products');

      if (data) {
        let DataList = [], i = 0;
        for (var key in data) {
          let item = data[key];
          const randomInt = Math.floor(Math.random() * 10);// 输出 0 到 9 的整数 
          if (randomInt <= 8) {
            continue;
          }
          if (i <= this.RecommendData.number && i <= 20) {
            let ProductImage;

            for (var Image in item.Images) {
              ProductImage = item.Images[Image];
              break;
            }
            DataList.push({
              ProductName: item.Name,
              ProductImg: ProductImage,
              ProductID: item.ID,
              productType: item.PARENT_ONE,
            });
            i++
          } else {
            break;
          }
        }
        this.data = DataList;
        console.log('this.data:' + JSON.stringify(this.data));
        this.loading = false;
      } else {
        console.log('No data available');
      }
    },
    async fetchOneData(TypeValue) {
      const data = await getData('Catalog/Products');
      if (data) {
        let i = 0, DataList = [];
        for (let key in data) {
          let NowData = data[key], ProductImage, TypeName = TypeValue;
          if (NowData.PARENT_ONE != TypeName) {
            continue;
          }
          if (NowData.isdelete === true) {
            continue;
          }
          if (NowData.Name === '') {
            continue;
          }
          for (var Image in NowData.Images) {
            ProductImage = NowData.Images[Image];
            break;
          }
          if (i <= this.RecommendData.number) {
            DataList.push({
              ProductName: NowData.Name,
              ProductImg: ProductImage,
              ProductID: NowData.ID,
              productType: TypeName
            });

          } else {
            break;
          }

          i++;
        }
        this.data = DataList;
        this.loading = false;
      } else {
        console.log('No data available');
      }

    }
  },
}

</script>

<style scoped>
.ProductCard {
  width: 100%;
}

.ProductCardImg {
  width: 100%;
  height: 180px;
}

.SeeMoreBox {
  text-decoration: underline;
  float: right;
  margin-right: 100px;
}

.Sour_Gummyn_font {
  font-size: 18px;
  height: 60px;
  font-family: Sour_Gummy, sans-serif;
}

.ProductRecommendation_font01 {
  font-size: 32px;
  font-weight: 800;
  color: rgb(34, 63, 97);
  font-family: Sour_Gummy, sans-serif;
  margin-left: 20px;
}

.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 300px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  color: var(--el-color-danger);
}

.el-card :deep(.el-card__body) {
  padding: 0px;
}

@media(max-width:1400px) {
  .ProductRecommendation_font01 {
    font-size: 24px;
    font-weight: 400;
    margin-left: 20px;
  }

  .SeeMoreBox {
    margin-right: 5px;
  }

  .ProductCard {
    max-width: 180px;
    height: 260px;
  }

  .ProductCardImg {
    width: 180px;
    height: 160px;
  }

  .scrollbar-demo-item {
    width: 180px;
    height: 260px;
    margin: 5px;
  }

  .Sour_Gummyn_font {
  font-size: 16px;
}
}
@media(max-width:768px){
  .ProductRecommendation_font01 {
    font-size: 18px;
    font-weight: 300;
    margin-left: 20px;
  }

  .Sour_Gummyn_font {
  font-size: 14px;
}

}
</style>