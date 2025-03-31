<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="50%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="Style" name="1">
            <div>
              <p><span @click="navigateToTarget('Bathroom Vanities')">Modern</span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Traditional</span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Industrial</span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Farmhouse</span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Rustic</span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Minimalist</span></p>
            </div>

          </el-collapse-item>
          <el-collapse-item title="Size" name="2">
            <div>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Single Vanity </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Double Vanity </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Compact </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Large </span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Material" name="3">
            <div>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Solid Wood </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Engineered Stone </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Wood Composite </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Glass </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Metal </span></p>
            </div>

          </el-collapse-item>
          <el-collapse-item title="Installation Type" name="4">
            <div>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Freestanding </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Wall-Mounted </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Open </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities')">Console </span></p>
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
          <el-collapse-item title="Style" name="1">
            <div>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Modern </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Traditional </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Industrial </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Farmhouse </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Rustic </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Minimalist </span></p>
            </div>

          </el-collapse-item>
          <el-collapse-item title="Size" name="2">
            <div>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Single Vanity </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Double Vanity </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Compact </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Large </span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Material" name="3">
            <div>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Solid Wood </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Engineered Stone </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Wood Composite </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Glass </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Metal </span></p>
            </div>

          </el-collapse-item>
          <el-collapse-item title="Installation Type" name="4">
            <div>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Freestanding </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Wall-Mounted </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Open </span></p>
              <p> <span @click="navigateToTarget('Bathroom Vanities'),$emit('close-drawer')">Console </span></p>
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
      url: require('@/assets/BathroomVanitiesMenu.jpeg'),
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
const activeName = ref('1')
</script>

<style scoped>
.demo-collapse span {
  cursor: pointer; /* 鼠标悬停时变为可点击状态 */
}
</style>