<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="50%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="Shapes" name="1">
            <div>
              <p><span @click="navigateToTarget('Bathtubs')">Round Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Oval Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Rectangular Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Corner Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Freestanding Bathtubs</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Size" name="2">
            <div>
              <p><span @click="navigateToTarget('Bathtubs')">Small Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Medium Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Large Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Extra Large Bathtubs</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Material" name="3">
            <div>
              <p><span @click="navigateToTarget('Bathtubs')">Cast Iron Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Acrylic Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Copper Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Marble Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Stone Bathtubs</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Colors" name="4">
            <div>
              <p><span @click="navigateToTarget('Bathtubs')">White Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Black Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Colored Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Metallic Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs')">Matte Finish Bathtubs</span></p>
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
          <el-collapse-item title="Shapes" name="1">
            <div>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Round Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Oval Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Rectangular Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Corner Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Freestanding Bathtubs</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Size" name="2">
            <div>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Small Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Medium Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Large Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Extra Large Bathtubs</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Material" name="3">
            <div>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Cast Iron Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Acrylic Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Copper Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Marble Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Stone Bathtubs</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Colors" name="4">
            <div>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">White Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Black Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Colored Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Metallic Bathtubs</span></p>
              <p><span @click="navigateToTarget('Bathtubs'),$emit('close-drawer')">Matte Finish Bathtubs</span></p>
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
  inject: ['closeMainDrawer'],
  data() {
    return {
      url: require('@/assets/BathtubsMenu.jpeg'),
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
.demo-collapse span {
  cursor: pointer; /* 鼠标悬停时变为可点击状态 */
}
</style>