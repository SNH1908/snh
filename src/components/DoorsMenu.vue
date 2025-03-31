<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="50%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
              
              <el-collapse-item title="Garage Doors" name="1">
                <div>
                  <p><span @click="navigateToTarget('Garage Doors')">Wooden Garage Doors</span></p>
                  <p><span @click="navigateToTarget('Garage Doors')">Modern Garage Doors</span></p>
                  <p><span @click="navigateToTarget('Garage Doors')">Insulated Garage Doors</span></p>
                  <p><span @click="navigateToTarget('Garage Doors')">Rolling Garage Doors</span></p>
                  <p><span @click="navigateToTarget('Garage Doors')">Custom Garage Doors</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Interior Doors" name="2">
                <div>
                  <p><span @click="navigateToTarget('Interior Doors')">Solid Wood Interior Doors</span></p>
                  <p><span @click="navigateToTarget('Interior Doors')">Sliding Interior Doors</span></p>
                  <p><span @click="navigateToTarget('Interior Doors')">French Interior Doors</span></p>
                  <p><span @click="navigateToTarget('Interior Doors')">Pocket Door Systems</span></p>
                  <p><span @click="navigateToTarget('Interior Doors')">Barn-Style Interior Doors</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Main Doors" name="3">
                <div>
                  <p><span @click="navigateToTarget('Main Doors')">Front Entry Doors</span></p>
                  <p><span @click="navigateToTarget('Main Doors')">Security Doors</span></p>
                  <p><span @click="navigateToTarget('Main Doors')">GlassPaneled Main Doors</span></p>
                  <p><span @click="navigateToTarget('Main Doors')">Dutch-Door Designs</span></p>
                  <p><span @click="navigateToTarget('Main Doors')">Double Swing Main Doors</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Main Gates" name="4">
                <div>
                  <p><span @click="navigateToTarget('Main Gates')">Modern Gate Designs</span></p>
                  <p><span @click="navigateToTarget('Main Gates')">Wrought Iron Gates</span></p>
                  <p><span @click="navigateToTarget('Main Gates')">Automated Main Gates</span></p>
                  <p><span @click="navigateToTarget('Main Gates')">Garden Entrance Gates</span></p>
                  <p><span @click="navigateToTarget('Main Gates')">Custom-Made Main Gates</span></p>
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
          <el-collapse-item title="Garage Doors" name="1">
                <div>
                  <p><span @click="navigateToTarget('Garage Doors')">Wooden Garage Doors</span></p>
                  <p><span @click="navigateToTarget('Garage Doors')">Modern Garage Doors</span></p>
                  <p><span @click="navigateToTarget('Garage Doors')">Insulated Garage Doors</span></p>
                  <p><span @click="navigateToTarget('Garage Doors')">Rolling Garage Doors</span></p>
                  <p><span @click="navigateToTarget('Garage Doors')">Custom Garage Doors</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Interior Doors" name="2">
                <div>
                  <p><span @click="navigateToTarget('Interior Doors')">Solid Wood Interior Doors</span></p>
                  <p><span @click="navigateToTarget('Interior Doors')">Sliding Interior Doors</span></p>
                  <p><span @click="navigateToTarget('Interior Doors')">French Interior Doors</span></p>
                  <p><span @click="navigateToTarget('Interior Doors')">Pocket Door Systems</span></p>
                  <p><span @click="navigateToTarget('Interior Doors')">Barn-Style Interior Doors</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Main Doors" name="3">
                <div>
                  <p><span @click="navigateToTarget('Main Doors')">Front Entry Doors</span></p>
                  <p><span @click="navigateToTarget('Main Doors')">Security Doors</span></p>
                  <p><span @click="navigateToTarget('Main Doors')">GlassPaneled Main Doors</span></p>
                  <p><span @click="navigateToTarget('Main Doors')">Dutch-Door Designs</span></p>
                  <p><span @click="navigateToTarget('Main Doors')">Double Swing Main Doors</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Main Gates" name="4">
                <div>
                  <p><span @click="navigateToTarget('Main Gates')">Modern Gate Designs</span></p>
                  <p><span @click="navigateToTarget('Main Gates')">Wrought Iron Gates</span></p>
                  <p><span @click="navigateToTarget('Main Gates')">Automated Main Gates</span></p>
                  <p><span @click="navigateToTarget('Main Gates')">Garden Entrance Gates</span></p>
                  <p><span @click="navigateToTarget('Main Gates')">Custom-Made Main Gates</span></p>
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
      url: require('@/assets/DoorsMenu.jpg'),
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
</script>
