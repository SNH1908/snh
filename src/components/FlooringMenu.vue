<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="50%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Material" name="1">
                <div>
                  <p><span @click="navigateToTarget('Flooring')">Solid Wood Flooring</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Hardwoods</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Softwoods</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Engineered Wood Flooring</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Multi-layer Wood</span></p>
                  <p><span @click="navigateToTarget('Flooring')">WPC (Wood Plastic Composite)</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Style" name="2">
                <div>
                  <p><span @click="navigateToTarget('Flooring')">Modern Style</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Minimalist Design</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Nordic Style</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Traditional Style</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Victorian Style</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Rustic Style</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Hand-scraped</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Reclaimed Look</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Finish" name="3">
                <div>
                  <p><span @click="navigateToTarget('Flooring')">Polished Finish</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Matte Finish</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Brushed Finish</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Applications" name="4">
                <div>
                  <p><span @click="navigateToTarget('Flooring')">Living Room</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Bedroom</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Kitchen</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Commercial Spaces</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Features" name="5">
                <div>
                  <p><span @click="navigateToTarget('Flooring')">Waterproof Flooring</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Wear-resistant Flooring</span></p>
                  <p><span @click="navigateToTarget('Flooring')">Eco-friendly Materials</span></p>
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
              <el-collapse-item title="Material" name="1">
                <div>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Solid Wood Flooring</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Hardwoods</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Softwoods</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Engineered Wood Flooring</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Multi-layer Wood</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">WPC (Wood Plastic Composite)</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Style" name="2">
                <div>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Modern Style</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Minimalist Design</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Nordic Style</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Traditional Style</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Victorian Style</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Rustic Style</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Hand-scraped</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Reclaimed Look</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Finish" name="3">
                <div>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Polished Finish</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Matte Finish</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Brushed Finish</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Applications" name="4">
                <div>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Living Room</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Bedroom</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Kitchen</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Commercial Spaces</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Features" name="5">
                <div>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Waterproof Flooring</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Wear-resistant Flooring</span></p>
                  <p><span @click="navigateToTarget('Flooring'),$emit('close-drawer')">Eco-friendly Materials</span></p>
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
      url: require('@/assets/FlooringMenu.jpeg'),
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
</script>

<style scoped>

</style>