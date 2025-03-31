<template>
    <div class="common-layout">
        <el-container>

            <el-aside width="25%">
                <div class="centered-container">

                    <el-container>
                        <el-header>
                            <span @click="navigateToTarget('Bathtubs')"
                                class="BathroomMenu_font demo-collapse-span">Bathtubs</span>
                        </el-header>
                        <el-main>
                            <div class="demo-collapse">
                                <el-collapse v-model="activeName" accordion>
                                    <el-collapse-item title="Shapes" name="1">
                                        <div>
                                            <p><span @click="navigateToTarget('Bathtubs')">Round Bathtubs</span></p>
                                            <p><span @click="navigateToTarget('Bathtubs')">Oval Bathtubs</span></p>
                                            <p><span @click="navigateToTarget('Bathtubs')">Rectangular Bathtubs</span>
                                            </p>
                                            <p><span @click="navigateToTarget('Bathtubs')">Corner Bathtubs</span></p>
                                            <p><span @click="navigateToTarget('Bathtubs')">Freestanding Bathtubs</span>
                                            </p>
                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item title="Size" name="2">
                                        <div>
                                            <p><span @click="navigateToTarget('Bathtubs')">Small Bathtubs</span></p>
                                            <p><span @click="navigateToTarget('Bathtubs')">Medium Bathtubs</span></p>
                                            <p><span @click="navigateToTarget('Bathtubs')">Large Bathtubs</span></p>
                                            <p><span @click="navigateToTarget('Bathtubs')">Extra Large Bathtubs</span>
                                            </p>
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
                                            <p><span @click="navigateToTarget('Bathtubs')">Matte Finish Bathtubs</span>
                                            </p>
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </el-main>
                    </el-container>
                </div>

            </el-aside>
            <el-aside width="25%">

                <div class="centered-container">
                    <el-container>
                        <el-header>
                            <span @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')"
                                class="BathroomMenu_font demo-collapse-span">Bathroom Vanities</span>
                        </el-header>
                        <el-main>
                            <div class="demo-collapse">
                                <el-collapse v-model="activeName2" accordion>
                                    <el-collapse-item title="Style" name="1">
                                        <div>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Modern
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Traditional
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Industrial
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Farmhouse
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Rustic
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Minimalist
                                                </span></p>
                                        </div>

                                    </el-collapse-item>
                                    <el-collapse-item title="Size" name="2">
                                        <div>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Single
                                                    Vanity </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Double
                                                    Vanity </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Compact
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Large
                                                </span></p>
                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item title="Material" name="3">
                                        <div>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Solid
                                                    Wood </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Engineered
                                                    Stone </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Wood
                                                    Composite </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Glass
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Metal
                                                </span></p>
                                        </div>

                                    </el-collapse-item>
                                    <el-collapse-item title="Installation Type" name="4">
                                        <div>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Freestanding
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Wall-Mounted
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Open
                                                </span></p>
                                            <p> <span
                                                    @click="navigateToTarget('Bathroom Vanities'), $emit('close-drawer')">Console
                                                </span></p>
                                        </div>

                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </el-main>
                    </el-container>
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


</template>


<script>
import '@/assets/MenuStyle.css'
export default {
    inject: ['closeMainDrawer'],
    data() {
        return {
            url: require('@/assets/BathroomVanitiesDetails2.png'),
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
const activeName2 = ref('1')
</script>

<style scoped>
.demo-collapse-span {
    cursor: pointer;
}

.demo-collapse span {
    cursor: pointer;
    /* 鼠标悬停时变为可点击状态 */
}

.BathroomMenu_font {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: rgb(34, 63, 97);
    margin-left: 20px;
    height: 50px;
    font-family: Sour_Gummy, sans-serif;
}
</style>