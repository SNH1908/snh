<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="50%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Materials" name="1">
                <div>
                  <p><span @click="navigateToTarget('Wall Panels')">Wood</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Solid Wood</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Marble</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Limestone</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Metal</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Styles" name="2">
                <div>
                  <p><span @click="navigateToTarget('Wall Panels')">Modern Style</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Minimalist</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Traditional Style</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Classic</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Artistic Style</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Usage" name="3">
                <div>
                  <p><span @click="navigateToTarget('Wall Panels')">Living Room Panels</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Bedroom Panels</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Kitchen Panels</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Bathroom Panels</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Sizes" name="4">
                <div>
                  <p><span @click="navigateToTarget('Wall Panels')">Peel and Stick</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Tongue and Groove</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Hanging System</span></p>
                  <p><span @click="navigateToTarget('Wall Panels')">Hidden Fasteners</span></p>
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
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Wood</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Solid Wood</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Marble</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Limestone</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Metal</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Styles" name="2">
                <div>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Modern Style</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Minimalist</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Traditional Style</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Classic</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Artistic Style</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Usage" name="3">
                <div>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Living Room Panels</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Bedroom Panels</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Kitchen Panels</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Bathroom Panels</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Sizes" name="4">
                <div>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Peel and Stick</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Tongue and Groove</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Hanging System</span></p>
                  <p><span @click="navigateToTarget('Wall Panels'),$emit('close-drawer')">Hidden Fasteners</span></p>
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
      url: require('@/assets/WallPanelsMenu.jpg'),
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