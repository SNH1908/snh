<template>
    <div class="centered-container">
        <div class="demo-collapse">
            <el-collapse accordion>
                <el-collapse-item title="Bathroom Vanities" name="1" @click="DrawerBathroomVanities = true">
                    
                </el-collapse-item>
                <el-collapse-item title="Bathtubs" name="2" @click="DrawerBathtubs = true">

                </el-collapse-item>
                <el-collapse-item title="Deck Tiles" name="3" @click="DrawerDeckTiles = true">

                </el-collapse-item>
                <el-collapse-item title="Decoration" name="4" @click="DrawerDecoration = true">

                </el-collapse-item>

                <el-collapse-item title="Doors" name="5" @click="DrawerDoors = true">

                </el-collapse-item>
                <el-collapse-item title="Flooring" name="6" @click="DrawerFlooring = true">

                </el-collapse-item>
                <el-collapse-item title="Painting" name="7" @click="DrawerPainting = true">

                </el-collapse-item>
                <el-collapse-item title="Rugs" name="8" @click="DrawerRugs = true">

                </el-collapse-item>
                <el-collapse-item title="Staircase and Railings" name="9" @click="DrawerStaircaseRailings = true">

                </el-collapse-item>
                <el-collapse-item title="Wall Panels" name="10" @click="DrawerWallPanels = true">

                </el-collapse-item>
            </el-collapse>

            <el-drawer v-model="DrawerBathroomVanities" :direction="direction" :show-close="false" :size="sizenum">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <BathroomVanitiesMenu/>
            </el-drawer>
            <el-drawer v-model="DrawerBathtubs" :direction="direction" :show-close="false" :size="sizenum" :append-to-body="true">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <BathtubsMenu/>
            </el-drawer>
            <el-drawer v-model="DrawerDeckTiles" :direction="direction" :show-close="false" :size="sizenum" :append-to-body="true">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <DeckTilesMenu/>
            </el-drawer>
            <el-drawer v-model="DrawerDecoration" :direction="direction" :show-close="false" :size="sizenum" :append-to-body="true">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <DecorationMenu/>
            </el-drawer>
            <el-drawer v-model="DrawerDoors" :direction="direction" :show-close="false" :size="sizenum" :append-to-body="true">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <DoorsMenu/>
            </el-drawer>
            <el-drawer v-model="DrawerFlooring" :direction="direction" :show-close="false" :size="sizenum" :append-to-body="true">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <FlooringMenu/>
            </el-drawer>
            <el-drawer v-model="DrawerPainting" :direction="direction" :show-close="false" :size="sizenum" :append-to-body="true">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <PaintingMenu/>
            </el-drawer>
            <el-drawer v-model="DrawerRugs" :direction="direction" :show-close="false" :size="sizenum" :append-to-body="true">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <RugsMenu/>
            </el-drawer>
            <el-drawer v-model="DrawerStaircaseRailings" :direction="direction" :show-close="false" :size="sizenum" :append-to-body="true">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <StaircaseRailingsMenu/>
            </el-drawer>
            <el-drawer v-model="DrawerWallPanels" :direction="direction" :show-close="false" :size="sizenum" :append-to-body="true">
                <template #header="{ close }">
                    <div style="width: 100%;display: flex; justify-content: center;"><img src="@/assets/logo.png"
                            alt="Logo" class="logo"></div>
                    <el-button :icon="CloseBold" size="small" @click="close" circle />
                    
                </template>
                <WallPanelsMenu/>
            </el-drawer>
            
        </div>
    </div>
</template>


<script>

import BathtubsMenu from "@/components/BathtubsMenu.vue";
import DeckTilesMenu from "@/components/DeckTilesMenu.vue";
import DecorationMenu from "@/components/DecorationMenu.vue";
import DoorsMenu from "@/components/DoorsMenu.vue";
import FlooringMenu from "@/components/FlooringMenu.vue";
import PaintingMenu from "@/components/PaintingMenu.vue";
import RugsMenu from "@/components/RugsMenu.vue";
import StaircaseRailingsMenu from "@/components/StaircaseRailingsMenu.vue";
import WallPanelsMenu from "@/components/WallPanelsMenu.vue";
import BathroomVanitiesMenu from "@/components/BathroomVanitiesMenu.vue";

import '@/assets/MenuStyle.css'

export default {
    components: {
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
  },
    data() {
        return {
            url: require('@/assets/RugsMenu.jpeg'),
        };
    }
};
</script>

<script setup>
import { ref } from 'vue'
import { ElButton, ElDrawer } from 'element-plus'
import {
  CloseBold
} from '@element-plus/icons-vue'

const direction = 'ltr'
const DrawerBathroomVanities = ref(false)
const DrawerDeckTiles = ref(false)
const DrawerDecoration = ref(false)
const DrawerDoors = ref(false)
const DrawerFlooring = ref(false)
const DrawerPainting = ref(false)
const DrawerRugs = ref(false)
const DrawerStaircaseRailings = ref(false)
const DrawerWallPanels = ref(false)
const DrawerBathtubs = ref(false)
const sizenum ='100%'
</script>

<style scoped>
.logo {
  height: 40px;
}
</style>