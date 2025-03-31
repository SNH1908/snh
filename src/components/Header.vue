<template>
  <div class="header">
    <div class="header-top">
      <div class="box3in1">
        <a href="/"><img src="@/assets/logo.png" alt="Logo" class="logo"></a>

      </div>
      <div class="box3in1" style="display: flex; justify-content: center;">
        <el-input v-model="inputStr" class="search-box" size="large" placeholder="Type something" :prefix-icon="Search"
          @keyup.enter="GoSearch" />
      </div>
      <div class="box3in1" style="display: flex;justify-content: flex-end;">
        <LoginMethod />
      </div>
    </div>
    <div class="header-menu" v-if="isHovering">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" @mouseleave="onMouseEnter()">Bathroom</el-menu-item>
        <el-menu-item index="2" @click="navigateToTarget('Deck Tiles')" @mouseleave="onMouseEnter()">Deck
          Tiles</el-menu-item>
        <el-menu-item index="3" @mouseleave="onMouseEnter()">Decoration</el-menu-item>
        <el-menu-item index="4" @click="navigateToTarget('Doors')" @mouseleave="onMouseEnter()">Doors</el-menu-item>
        <el-menu-item index="5" @click="navigateToTarget('Flooring')"
          @mouseleave="onMouseEnter()">Flooring</el-menu-item>
        <el-menu-item index="6" @click="navigateToTarget('Rugs')" @mouseleave="onMouseEnter()">Rugs</el-menu-item>
        <el-menu-item index="7" @click="navigateToTarget('Staircase and Railings')"
          @mouseleave="onMouseEnter()">Staircase
          and Railings</el-menu-item>
        <el-menu-item index="8" @click="navigateToTarget('Wall Panels')" @mouseleave="onMouseEnter()">Wall
          Panels</el-menu-item>
        <el-menu-item index="9" @click="navigateToTarget('Lighting')"
          @mouseleave="onMouseEnter()">Lighting</el-menu-item>
      </el-menu>
    </div>
    <div class="header-menu" v-if="!isHovering">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">

        <el-sub-menu index="1" :popper-offset="0">
          <template #title><span>Bathroom</span></template>
          <div class="header-menu-details">
            <BathroomMenu />
          </div>
        </el-sub-menu>

        <el-sub-menu index="2" :popper-offset="0" @click="navigateToTarget('Deck Tiles')">
          <template #title><span>Deck Tiles</span></template>
          <div class="header-menu-details">
            <DeckTilesMenu />
          </div>
        </el-sub-menu>

        <el-sub-menu index="3" :popper-offset="0">
          <template #title><span>Decoration</span></template>
          <div class="header-menu-details">
            <DecorationMenu />
          </div>
        </el-sub-menu>

        <el-sub-menu index="4" :popper-offset="0" @click="navigateToTarget('Doors')">
          <template #title><span>Doors</span></template>
          <div class="header-menu-details">
            <DoorsMenu />
          </div>
        </el-sub-menu>

        <el-sub-menu index="5" :popper-offset="0" @click="navigateToTarget('Flooring')">
          <template #title><span>Flooring</span></template>
          <div class="header-menu-details">
            <FlooringMenu />
          </div>
        </el-sub-menu>

        <el-sub-menu index="6" :popper-offset="0" @click="navigateToTarget('Rugs')">
          <template #title><span>Rugs</span></template>
          <div class="header-menu-details">
            <RugsMenu />
          </div>
        </el-sub-menu>

        <el-sub-menu index="7" :popper-offset="0" @click="navigateToTarget('Staircase and Railings')">
          <template #title><span>Staircase and Railings</span></template>
          <div class="header-menu-details">
            <StaircaseRailingsMenu />
          </div>
        </el-sub-menu>

        <el-sub-menu index="8" :popper-offset="0" @click="navigateToTarget('Wall Panels')">
          <template #title><span>Wall Panels</span></template>
          <div class="header-menu-details">
            <WallPanelsMenu />
          </div>
        </el-sub-menu>

        <el-sub-menu index="9" :popper-offset="0" @click="navigateToTarget('Lighting')">
          <template #title><span>Lighting</span></template>
          <div class="header-menu-details">
            <LightingMenu />
          </div>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
  <div class="header_mobile">
    <div class="header-top">
      <div class="box3in1">
        <el-button :icon="MoreFilled" style="margin-left: 2vw;" size="large" @click="OpenDrawer" circle />
      </div>
      <div class="box3in1" style="display: flex; justify-content: center;">
        <a href="/"><img src="@/assets/logo.png" alt="Logo" class="logo"></a>
      </div>
      <div class="box3in1" style="display: flex;justify-content: flex-end;">
        <LoginMethod />
      </div>
    </div>
    <div class="header-top" style="justify-content: center;">
      <el-input v-model="input" class="search-box" style="width: 95%;" size="large" placeholder="Type something"
        :prefix-icon="Search" />
    </div>
  </div>
  <el-drawer v-model="drawer" :direction="direction" :show-close="false" :size="sizenum">
    <template #header="{ close }">
      <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
          class="logo"></div>
      <el-button :icon="CloseBold" size="small" @click="close" circle />
    </template>
    <!-- MobileMenu -->

    <div class="centered-container">
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="Bathroom" name="1">
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Bathroom Vanities')">Bathroom Vanities</el-button>
            </div>
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Bathtubs')">Bathtubs</el-button>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Deck Tiles" name="2" @click="navigateToTarget('Deck Tiles')">

          </el-collapse-item>
          <el-collapse-item title="Decoration" name="3">
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Figurines')">Figurines</el-button>
            </div>
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Painting')">Painting</el-button>
            </div>
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Fireplace')">Fireplace</el-button>
            </div>
          </el-collapse-item>

          <el-collapse-item title="Doors" name="4">
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Doors')">All Doors</el-button>
            </div>
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Garage Doors')">Garage Doors</el-button>
            </div>
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Interior Doors')">Interior Doors</el-button>
            </div>
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Main Doors')">Main Doors</el-button>
            </div>
            <div class="demo-collapse-btn">
              <el-button key="plain" text @click="navigateToTarget('Main Gates')">Main Gates</el-button>
            </div>
          </el-collapse-item>
          <el-collapse-item title="Flooring" name="5" @click="navigateToTarget('Flooring')">

          </el-collapse-item>
          <el-collapse-item title="Rugs" name="6" @click="navigateToTarget('Rugs')">

          </el-collapse-item>
          <el-collapse-item title="Staircase and Railings" name="7" @click="navigateToTarget('Staircase and Railings')">

          </el-collapse-item>
          <el-collapse-item title="Wall Panels" name="8" @click="navigateToTarget('Wall Panels')">

          </el-collapse-item>
          <el-collapse-item title="Lighting" name="9" @click="navigateToTarget('Lighting')">

          </el-collapse-item>
        </el-collapse>

        <el-drawer v-model="DrawerBathroomVanities" :direction="direction" :show-close="false" :size="sizenum">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <BathroomVanitiesMenu @close-drawer="closeMainDrawer('BathroomVanitiesMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerBathtubs" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <BathtubsMenu @close-drawer="closeMainDrawer('BathtubsMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerDeckTiles" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <DeckTilesMenu @close-drawer="closeMainDrawer('DeckTilesMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerDecoration" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <DecorationMenu @close-drawer="closeMainDrawer('DecorationMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerDoors" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <DoorsMenu @close-drawer="closeMainDrawer('DoorsMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerFlooring" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <FlooringMenu @close-drawer="closeMainDrawer('FlooringMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerPainting" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <PaintingMenu @close-drawer="closeMainDrawer('PaintingMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerRugs" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <RugsMenu @close-drawer="closeMainDrawer('RugsMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerStaircaseRailings" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <StaircaseRailingsMenu @close-drawer="closeMainDrawer('StaircaseRailingsMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerWallPanels" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <WallPanelsMenu @close-drawer="closeMainDrawer('WallPanelsMenu')" />
        </el-drawer>
        <el-drawer v-model="DrawerLighting" :direction="direction" :show-close="false" :size="sizenum"
          :append-to-body="true">
          <template #header="{ close }">
            <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png" alt="Logo"
                class="logo"></div>
            <el-button :icon="CloseBold" size="small" @click="close" circle />

          </template>
          <LightingMenu @close-drawer="closeMainDrawer('LightingMenu')" />
        </el-drawer>
      </div>
    </div>


  </el-drawer>
  

</template>

<script>
import BathroomMenu from "@/components/BathroomMenu.vue";
import BathroomVanitiesMenu from "@/components/BathroomVanitiesMenu.vue";
import BathtubsMenu from "@/components/BathtubsMenu.vue";
import DeckTilesMenu from "@/components/DeckTilesMenu.vue";
import DecorationMenu from "@/components/DecorationMenu.vue";
import DoorsMenu from "@/components/DoorsMenu.vue";
import FlooringMenu from "@/components/FlooringMenu.vue";
import PaintingMenu from "@/components/PaintingMenu.vue";
import RugsMenu from "@/components/RugsMenu.vue";
import StaircaseRailingsMenu from "@/components/StaircaseRailingsMenu.vue";
import WallPanelsMenu from "@/components/WallPanelsMenu.vue";
import LightingMenu from "@/components/LightingMenu.vue";
import LoginMethod from "@/components/LoginMethod.vue";




export default {
  name: "SNH-Header",
  components: {
    BathroomMenu,
    BathroomVanitiesMenu,
    BathtubsMenu,
    DeckTilesMenu,
    DecorationMenu,
    DoorsMenu,
    FlooringMenu,
    PaintingMenu,
    RugsMenu,
    StaircaseRailingsMenu,
    WallPanelsMenu,
    LightingMenu,
    LoginMethod
  },
  data() {
    return {
      activeNames: ['0'],
      DrawerBathroomVanities: false,
      DrawerDeckTiles: false,
      DrawerDecoration: false,
      DrawerDoors: false,
      DrawerFlooring: false,
      DrawerPainting: false,
      DrawerRugs: false,
      DrawerStaircaseRailings: false,
      DrawerWallPanels: false,
      DrawerBathtubs: false,
      DrawerLighting: false,
      direction: 'ltr',
      activeIndex: '',
      input: '',
      sizenum: '100%',
      drawer: false,
      isHovering: true,
      NotHovering: false,
      currentMenu: null,
      inputStr: '',
      // User: {
      //   photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocLdDf068Ifbf-Hf2Y9-j_lzDuWXSA6S8LcdkPw4VbecVEmnUQ=s96-c',
      //   displayName: 'pimon'
      // },
      fit: "contain",
    };
  },
  methods: {

    OpenDrawer() {
      this.drawer = true;
      this.activeNames = ['0'];
    },
    onMouseEnter() {
      this.isHovering = false;
      this.NotHovering = true;
    },
    GoSearch() {
      this.$router.push({
        name: 'SearchPage',
        query: { SearchStr: this.inputStr }
      }).then(() => {
        document.body.scrollTo(0, 0);
      });
    },
    navigateToTarget(Value) {
      this.drawer = false;
      this.activeNames = ['0'];
      this.$router.push({
        name: 'Product',
        query: { productType: Value }
      }).then(() => {
        document.body.scrollTo(0, 0);
      });
    },
    closeMainDrawer(Value) {
      switch (Value) {
        case 'BathroomVanitiesMenu':
          this.DrawerBathroomVanities = false;
          this.drawer = false;
          return;
        case 'BathtubsMenu':
          this.DrawerBathtubs = false;
          this.drawer = false;
          return;
        case 'DeckTilesMenu':
          this.DrawerDeckTiles = false;
          this.drawer = false;
          return;
        case 'DecorationMenu':
          this.DrawerDecoration = false;
          this.drawer = false;
          return;
        case 'DoorsMenu':
          this.DrawerDoors = false;
          this.drawer = false;
          return;
        case 'FlooringMenu':
          this.DrawerFlooring = false;
          this.drawer = false;
          return;
        case 'PaintingMenu':
          this.DrawerPainting = false;
          this.drawer = false;
          return;
        case 'RugsMenu':
          this.DrawerRugs = false;
          this.drawer = false;
          return;
        case 'StaircaseRailingsMenu':
          this.DrawerStaircaseRailings = false;
          this.drawer = false;
          return;
        case 'WallPanelsMenu':
          this.DrawerWallPanels = false;
          this.drawer = false;
          return;
      }
    }
  }
}
</script>

<script setup>
import {
  Search,
  MoreFilled,
  CloseBold,
} from '@element-plus/icons-vue'
import { ElButton, ElDrawer } from 'element-plus'



</script>

<style>
.el-menu {
  transform: translateX(-5px);
}
</style>

<style scoped>

.demo-collapse-btn {
  width: 100%;
}

.CursorPointer {
  cursor: pointer;
}

.demo-collapse {
  margin-top: 50px;
}

.header {
  width: 100vw;
}

.logo {
  height: 40px;
}

.header_mobile {
  width: 100vw;
  display: none;
}

.box3in1 {
  margin: 0;
  padding: 0;
  width: 33%;
}

.header-top {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
}

.logo {
  height: 40px;
}

.search-box {
  /* flex-grow: 1;
  margin: 0 20px; */
  width: 500px;
}

.header-menu {
  background-color: #fff;
  border-top: 1px solid #ddd;
}

.header-menu-details {
  height: 60vh;
  width: 100vw;
}

.el-menu-demo {
  display: flex;
  /* 使用 flexbox 布局 */
  justify-content: center;
  /* 水平居中菜单项 */
  align-items: center;
  /* 垂直居中菜单项 */
}

.el-menu-demo .el-menu-item {
  margin: 0 5px;
  /* 控制菜单项之间的间隔 */
}

@media (max-width: 1400px) {
  .header {
    display: none;
  }

  .header_mobile {
    display: block;

  }
}
</style>