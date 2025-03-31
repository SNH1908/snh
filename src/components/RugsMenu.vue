<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="50%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Materials" name="1">
                <div>
                  <p><span @click="navigateToTarget('Rugs')">Wool</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Cotton</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Silk</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Synthetic Fibers</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Styles" name="2">
                <div>
                  <p><span @click="navigateToTarget('Rugs')">Traditional Style</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Modern Style</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Minimalist Design</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Abstract Patterns</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Usage" name="3">
                <div>
                  <p><span @click="navigateToTarget('Rugs')">Living Room Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Bedroom Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Kids' Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Outdoor Rugs</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Sizes" name="4">
                <div>
                  <p><span @click="navigateToTarget('Rugs')">Small Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Medium Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Large Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs')">Custom Sizes</span></p>
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
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Wool</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Cotton</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Silk</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Synthetic Fibers</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Styles" name="2">
                <div>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Traditional Style</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Modern Style</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Minimalist Design</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Abstract Patterns</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Usage" name="3">
                <div>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Living Room Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Bedroom Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Kids' Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Outdoor Rugs</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Sizes" name="4">
                <div>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Small Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Medium Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Large Rugs</span></p>
                  <p><span @click="navigateToTarget('Rugs'),$emit('close-drawer')">Custom Sizes</span></p>
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
      url: require('@/assets/RugsMenu.jpeg'),
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