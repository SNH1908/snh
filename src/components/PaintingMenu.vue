<template>
  <div class="common-layout">
    <el-container>

      <el-aside width="50%">
        <div class="centered-container">
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
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
              <el-collapse-item title="Artistic Styles" name="1">
                <div>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Abstract Art</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Impressionism</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Realism</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Classicism</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Modernism</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Themes" name="2">
                <div>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Nature Scenes</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Portraits</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Flowers</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Food</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Cityscapes</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Medium" name="3">
                <div>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Oil Paintings</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Watercolors</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Acrylic Paintings</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Drawings</span></p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Settings" name="4">
                <div>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Home Decor</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Living Room</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Bedroom</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Office Decor</span></p>
                  <p><span @click="navigateToTarget('Painting'),$emit('close-drawer')">Public Spaces</span></p>
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
      url: require('@/assets/PaintingMenu.jpg'),
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