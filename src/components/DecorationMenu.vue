<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="20%">
        <div class="centered-container">
          <el-container>
            <el-header>
              <span @click="navigateToTarget('Figurines')"
                class="DecorationMenu_font demo-collapse-span">Figurines</span>
            </el-header>
            <el-main>
              <div class="demo-collapse">
                <el-collapse v-model="activeName" accordion>
                  <el-collapse-item title="Vases" name="1">
                    <div>
                      <p><span @click="navigateToTarget('Figurines')">Colorful Vases</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Modern Vases</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Traditional Vases</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Sculptures" name="2">
                    <div>
                      <p><span @click="navigateToTarget('Figurines')">Abstract Sculptures</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Animal Sculptures</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Figurative Sculptures</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Decorative Plates" name="3">
                    <div>
                      <p><span @click="navigateToTarget('Figurines')">Wall Plates</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Display Plates</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Transparent Art" name="4">
                    <div>
                      <p><span @click="navigateToTarget('Figurines')">Three-dimensional Art</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Tabletop Pieces</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Wall Art</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Seasonal" name="5">
                    <div>
                      <p><span @click="navigateToTarget('Figurines')">Spring</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Summer</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Autumn</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Winter</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Holiday" name="6">
                    <div>
                      <p><span @click="navigateToTarget('Figurines')">Christmas</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Halloween</span></p>
                      <p><span @click="navigateToTarget('Figurines')">Easter</span></p>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-main>
          </el-container>
        </div>

      </el-aside>
      <el-aside width="20%">
        <div class="centered-container">
          <el-container>
            <el-header>
              <span @click="navigateToTarget('Painting')" class="DecorationMenu_font demo-collapse-span">Painting</span>
            </el-header>
            <el-main>
              <div class="demo-collapse">
                <el-collapse v-model="activeName2" accordion>
                  <el-collapse-item title="Artistic Styles" name="1">
                    <div>
                      <p><span @click="navigateToTarget('Painting')">Abstract Art</span></p>
                      <p><span @click="navigateToTarget('Painting')">Impressionism</span></p>
                      <p><span @click="navigateToTarget('Painting')">Realism</span></p>
                      <p><span @click="navigateToTarget('Painting')">Classicism</span></p>
                      <p><span @click="navigateToTarget('Painting')">Modernism</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Themes" name="2">
                    <div>
                      <p><span @click="navigateToTarget('Painting')">Nature Scenes</span></p>
                      <p><span @click="navigateToTarget('Painting')">Portraits</span></p>
                      <p><span @click="navigateToTarget('Painting')">Flowers</span></p>
                      <p><span @click="navigateToTarget('Painting')">Food</span></p>
                      <p><span @click="navigateToTarget('Painting')">Cityscapes</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Medium" name="3">
                    <div>
                      <p><span @click="navigateToTarget('Painting')">Oil Paintings</span></p>
                      <p><span @click="navigateToTarget('Painting')">Watercolors</span></p>
                      <p><span @click="navigateToTarget('Painting')">Acrylic Paintings</span></p>
                      <p><span @click="navigateToTarget('Painting')">Drawings</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Settings" name="4">
                    <div>
                      <p><span @click="navigateToTarget('Painting')">Home Decor</span></p>
                      <p><span @click="navigateToTarget('Painting')">Living Room</span></p>
                      <p><span @click="navigateToTarget('Painting')">Bedroom</span></p>
                      <p><span @click="navigateToTarget('Painting')">Office Decor</span></p>
                      <p><span @click="navigateToTarget('Painting')">Public Spaces</span></p>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-main>
          </el-container>
        </div>
      </el-aside>
      <el-aside width="20%">
        <div class="centered-container">
          <el-container>
            <el-header>
              <span @click="navigateToTarget('Fireplace')" class="DecorationMenu_font demo-collapse-span">Fireplace</span>
            </el-header>
            <el-main>
              <div class="demo-collapse">
                <el-collapse v-model="activeName3" accordion>
                  <el-collapse-item title="Electric Fireplaces" name="1">
                    <div>
                      <p><span @click="navigateToTarget('Fireplace')">Wall-Mounted Electric Fireplaces</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Freestanding Electric Fireplaces</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Electric Fireplace Inserts</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Portable Electric Fireplaces</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Gas Fireplaces" name="2">
                    <div>
                      <p><span @click="navigateToTarget('Fireplace')">Direct Vent Gas Fireplaces</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Vent-Free Gas Fireplaces</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Built-In Gas Fireplaces</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Gas Fireplace Inserts</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Wood-Burning Fireplaces" name="3">
                    <div>
                      <p><span @click="navigateToTarget('Fireplace')">Traditional Wood Fireplaces</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Outdoor Wood Fireplaces</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">High-Efficiency Wood Fireplaces</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Wood Fireplace Inserts</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Fireplace Mantels" name="4">
                    <div>
                      <p><span @click="navigateToTarget('Fireplace')">Mantel Packages</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Custom Mantels</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Floating Shelves Mantels</span></p>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Accessories" name="5">
                    <div>
                      <p><span @click="navigateToTarget('Fireplace')">Fireplace Screens</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Firewood Holders</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Ash Tools & Cleaners</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Remote Controls & Thermostats</span></p>
                      <p><span @click="navigateToTarget('Fireplace')">Decorative Logs & Stones</span></p>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-main>
          </el-container>
        </div>
      </el-aside>
      <el-aside width="40%">
        <div class="centered-container">
          <div class="demo-image">
            <el-image class="Menu-el-image-Decoration" :src="url" :fit="fit" />
          </div>
        </div>

      </el-aside>
    </el-container>
  </div>

  <div class="common-layout-mobile">
    <div class="centered-container">
      <div class="demo-collapse">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="Vases" name="1">
            <div>
              <p><span @click="navigateToTarget('Figurines')">Colorful Vases</span></p>
              <p><span @click="navigateToTarget('Figurines')">Modern Vases</span></p>
              <p><span @click="navigateToTarget('Figurines')">Traditional Vases</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Sculptures" name="2">
            <div>
              <p><span @click="navigateToTarget('Figurines')">Abstract Sculptures</span></p>
              <p><span @click="navigateToTarget('Figurines')">Animal Sculptures</span></p>
              <p><span @click="navigateToTarget('Figurines')">Figurative Sculptures</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Decorative Plates" name="3">
            <div>
              <p><span @click="navigateToTarget('Figurines')">Wall Plates</span></p>
              <p><span @click="navigateToTarget('Figurines')">Display Plates</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Transparent Art" name="4">
            <div>
              <p><span @click="navigateToTarget('Figurines')">Three-dimensional Art</span></p>
              <p><span @click="navigateToTarget('Figurines')">Tabletop Pieces</span></p>
              <p><span @click="navigateToTarget('Figurines')">Wall Art</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Seasonal" name="5">
            <div>
              <p><span @click="navigateToTarget('Figurines')">Spring</span></p>
              <p><span @click="navigateToTarget('Figurines')">Summer</span></p>
              <p><span @click="navigateToTarget('Figurines')">Autumn</span></p>
              <p><span @click="navigateToTarget('Figurines')">Winter</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Holiday" name="6">
            <div>
              <p><span @click="navigateToTarget('Figurines')">Christmas</span></p>
              <p><span @click="navigateToTarget('Figurines')">Halloween</span></p>
              <p><span @click="navigateToTarget('Figurines')">Easter</span></p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="centered-container">
      <div class="demo-image">
        <div class="block">
          <el-image style="width: 360px; height: 240px" :src="url" :fit="fit" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import '@/assets/MenuStyle.css'
export default {
  data() {
    return {
      url: require('@/assets/FireplaceMenu.jpg'),
    };
  },
  methods: {
    navigateToTarget(Value) {
      this.isHovering = true;
      this.NotHovering = false;
      this.$router.push({
        name: 'Product',
        query: { productType: Value }
      }).then(() => {
        document.body.scrollTo(0, 0);
      });
    }
  }
};
</script>


<script setup>
import { ref } from 'vue'
const fit = 'cover'
const activeName = ref('1')
const activeName2 = ref('1')
const activeName3 = ref('1')
</script>

<style scoped>
.demo-collapse-span {
  cursor: pointer;
}

.demo-collapse span {
  cursor: pointer;
  /* 鼠标悬停时变为可点击状态 */
}

.Menu-el-image-Decoration {
  width: 95%;
  height: 450px;
}

.DecorationMenu_font {
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: rgb(34, 63, 97);
  margin-left: 20px;
  height: 50px;
  font-family: Sour_Gummy, sans-serif;
}
</style>