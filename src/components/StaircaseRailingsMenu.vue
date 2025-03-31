<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="25%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="Materials" name="1">
                <div>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Solid Wood</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Metal</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Glass</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Styles" name="2">
                <div>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Modern Style</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Traditional Style</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Industrial Style</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">European Style</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Minimalist Style</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Usage" name="3">
                <div>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Residential</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Commercial</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Garden</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Balcony</span></p>
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
              <el-collapse-item title="Staircases" name="5">
                <div>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Straight Stairs</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Curved Stairs</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Spiral Stairs</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Floating Stairs </span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Railings" name="6">
                <div>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Stair Railings</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Balcony Railings</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings')">Outdoor Railings</span></p>
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
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Solid Wood</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Metal</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Glass</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Styles" name="2">
                <div>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Modern Style</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Traditional Style</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Industrial Style</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">European Style</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Minimalist Style</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Usage" name="3">
                <div>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Residential</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Commercial</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Garden</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Balcony</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Staircases" name="5">
                <div>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Straight Stairs</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Curved Stairs</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Spiral Stairs</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Floating Stairs </span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Railings" name="6">
                <div>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Stair Railings</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Balcony Railings</span></p>
                  <p><span @click="navigateToTarget('Staircase and Railings'),$emit('close-drawer')">Outdoor Railings</span></p>
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
      url: require('@/assets/StaircaseRailingsMenu.jpg'),
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

</style>