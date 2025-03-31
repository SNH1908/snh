<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="25%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Materials" name="1">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles')">Ceramic</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Marble</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Granite</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Wood-like</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Cement</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Colors" name="2">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles')">Neutral</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Dark Shades</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Bright Tones</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Colorful Patterns</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Sizes" name="3">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles')">Small (30x30 cm)</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Medium (60x60 cm)</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Large (90x90 cm)</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Finish" name="4">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles')">Glossy</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Matte</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Anti-slip</span></p>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>

      </el-aside>
      <el-aside width="25%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName2" accordion>
              <el-collapse-item title="Applications" name="1">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles')">arden</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Balcony</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Sports Field</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Pet Area</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Blade Types" name="2">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles')">Short Blade</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Medium Blade</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Long Blade</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Thickness" name="3">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles')">Thin</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Standard</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Thick</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Maintenance Needs" name="4">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles')">Low Maintenance</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles')">Standard Maintenance</span></p>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-aside>
      <el-aside width="50%">
        <div class="centered-container">
          <div class="demo-image">
              <el-image class="Menu-el-image" :src="url" :fit="fit" />
          </div>
        </div>

      </el-aside>

    </el-container>
  </div>
  <div class="common-layout-mobile">
    <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Materials" name="1">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Ceramic</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Marble</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Granite</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Wood-like</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Cement</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Colors" name="2">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Neutral</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Dark Shades</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Bright Tones</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Colorful Patterns</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Sizes" name="3">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Small (30x30 cm)</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Medium (60x60 cm)</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Large (90x90 cm)</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Finish" name="4">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Glossy</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Matte</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Anti-slip</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Applications" name="5">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">arden</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Balcony</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Sports Field</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Pet Area</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Blade Types" name="6">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Short Blade</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Medium Blade</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Long Blade</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Thickness" name="7">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Thin</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Standard</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Thick</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Maintenance Needs" name="8">
                <div>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Low Maintenance</span></p>
                  <p><span @click="navigateToTarget('Deck Tiles'),$emit('close-drawer')">Standard Maintenance</span></p>
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
      url: require('@/assets/DeckTilesMenu.jpeg'),
    };
  },
  methods:{
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
</script>

<style scoped>
.demo-collapse span {
  cursor: pointer; /* 鼠标悬停时变为可点击状态 */
}
</style>