<template>
    <div class="common-layout">
        <el-container>

            <el-aside width="50%">
                <div class="centered-container">
                    <div class="demo-collapse">
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item title="Ceiling Lights" name="1">
                                <div>
                                    <p><span @click="navigateToTarget('Lighting')">Chandeliers</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Pendant Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Flush + Semi-Flushmounts</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Linear Suspension</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Recessed Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Track + Monorail</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">LED Ceiling Lights</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Design Ceiling Lights</span></p>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Wall Lights" name="2">
                                <div>
                                    <p><span @click="navigateToTarget('Lighting')">Wall Sconces</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Bath + Vanity Lights</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Picture Lights</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Undercabinet Lights</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Accent Lights</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Lighted Mirrors</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">LED Wall Lights</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Design Wall Lights</span></p>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Floor + Table Lamps" name="3">
                                <div>
                                    <p><span @click="navigateToTarget('Lighting')">Floor Lamps</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Table Lamps</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Desk + Task Lamps</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Cordless Lamps</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">LED Floor + Table Lamps</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Design Floor + Table Lamps</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Accessories</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Light Bulbs</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Dimmers, Switches + Outlets</span>
                                    </p>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Lighting by Room" name="4">
                                <div>
                                    <p><span @click="navigateToTarget('Lighting')">Bathroom Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Bedroom Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Dining Room Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Entry + Foyer Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Hallway Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Kitchen Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Living Room Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Office Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Outdoor Lighting</span></p>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Shop Lighting by" name="5">
                                <div>
                                    <p><span @click="navigateToTarget('Lighting')">New Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Design Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Exclusive to Lumens Lighting</span>
                                    </p>
                                    <p><span @click="navigateToTarget('Lighting')">Lighting In Stock + Ready to
                                            Ship</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Sustainable Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">LED Lighting</span></p>
                                    <p><span @click="navigateToTarget('Lighting')">Lighting On Sale</span></p>
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
                    <el-collapse-item title="Ceiling Lights" name="1">
                        <div>
                            <p><span @click="navigateToTarget('Lighting')">Chandeliers</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Pendant Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Flush + Semi-Flushmounts</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Linear Suspension</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Recessed Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Track + Monorail</span></p>
                            <p><span @click="navigateToTarget('Lighting')">LED Ceiling Lights</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Design Ceiling Lights</span></p>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Wall Lights" name="2">
                        <div>
                            <p><span @click="navigateToTarget('Lighting')">Wall Sconces</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Bath + Vanity Lights</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Picture Lights</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Undercabinet Lights</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Accent Lights</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Lighted Mirrors</span></p>
                            <p><span @click="navigateToTarget('Lighting')">LED Wall Lights</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Design Wall Lights</span></p>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Floor + Table Lamps" name="3">
                        <div>
                            <p><span @click="navigateToTarget('Lighting')">Floor Lamps</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Table Lamps</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Desk + Task Lamps</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Cordless Lamps</span></p>
                            <p><span @click="navigateToTarget('Lighting')">LED Floor + Table Lamps</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Design Floor + Table Lamps</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Accessories</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Light Bulbs</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Dimmers, Switches + Outlets</span>
                            </p>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Lighting by Room" name="4">
                        <div>
                            <p><span @click="navigateToTarget('Lighting')">Bathroom Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Bedroom Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Dining Room Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Entry + Foyer Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Hallway Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Kitchen Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Living Room Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Office Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Outdoor Lighting</span></p>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Shop Lighting by" name="5">
                        <div>
                            <p><span @click="navigateToTarget('Lighting')">New Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Design Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Exclusive to Lumens Lighting</span>
                            </p>
                            <p><span @click="navigateToTarget('Lighting')">Lighting In Stock + Ready to
                                    Ship</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Sustainable Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">LED Lighting</span></p>
                            <p><span @click="navigateToTarget('Lighting')">Lighting On Sale</span></p>
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
            url: require('@/assets/LightingMenu.png'),
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

<style scoped>
.demo-collapse span {
    cursor: pointer;
    /* 鼠标悬停时变为可点击状态 */
}
</style>