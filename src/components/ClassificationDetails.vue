<template>
    <div class="DetailsMainBox">

        <!--第一部分-->
        <div style="margin-top: -60px;">
            <span class="ClassificationDetails_font01 Sour_Gummyn_font">Enhance Your Space with Style</span>
            <el-image class="Details_Image" :src="url1" :fit="fit" />

            <el-container>
                <el-header>
                    <div
                        style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 40px;width: 100%;">
                        <span class="ClassificationDetails_font01 Sour_Gummyn_font" style="width: 100%;">Everything you
                            need - A gift without
                            speculation</span>
                    </div>
                </el-header>
            </el-container>
            <span class="SeeMoreBox Sour_Gummyn_font" @click="navigateToProduct('Decoration')">See all</span>
            <el-scrollbar>
                <div class="scrollbar-flex-content">
                    <p v-for="(item, index) in DecorationData" :key="index" class="scrollbar-demo-item">
                        <el-card class="ProductCard" shadow="hover" @click="navigateToTarget(item)">
                            <el-image :src="item.ProductImg" class="ProductCardImg" :fit="fit" />
                            <template #footer>
                                <p class="Sour_Gummyn_font">{{ item.ProductName }}</p>
                            </template>
                        </el-card>
                    </p>
                </div>
            </el-scrollbar>
            <div class="SHOPNOW-Btn" style="">
                <el-button size="large" class="Sour_Gummyn_font" @click="navigateToProduct('Decoration')">SHOP
                    NOW</el-button>

            </div>
        </div>
        <!--第二部分-->
        <div>
            <div style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
                <span class="ClassificationDetails_font01 Sour_Gummyn_font" style="width: 100%;">Stylish and Functional
                    Vanities
                    to Elevate
                    Your
                    Bathroom</span>
            </div>
            <el-image class="Details_Image" :src="url2" :fit="fit" />


            <el-container>
                <el-header>
                    <div
                        style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 30px;width: 100%;">
                        <span class="ClassificationDetails_font01 Sour_Gummyn_font" style="width: 100%;">Comfortable and
                            refreshing bathing
                            experience</span>

                    </div>
                </el-header>
            </el-container>
            <span class="SeeMoreBox Sour_Gummyn_font" @click="navigateToProduct('Bathroom Vanities')">See
                all</span>
            <el-scrollbar>
                <div class="scrollbar-flex-content">
                    <p v-for="(item, index) in BathroomVanitiesData" :key="index" class="scrollbar-demo-item">
                        <el-card class="ProductCard" shadow="hover" @click="navigateToTarget(item)">
                            <el-image :src="item.ProductImg" class="ProductCardImg" :fit="fit" />
                            <template #footer>
                                <p class="Sour_Gummyn_font">{{ item.ProductName }}</p>
                            </template>
                        </el-card>
                    </p>
                </div>
            </el-scrollbar>
            <div class="SHOPNOW-Btn" style="">
                <el-button size="large" class="Sour_Gummyn_font" @click="navigateToProduct('Bathroom Vanities')">SHOP
                    NOW</el-button>

            </div>
        </div>
        <!--第三部分-->
        <div>
            <div style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
                <span class="ClassificationDetails_font01 Sour_Gummyn_font" style="width: 100%;">Elegant and Durable
                    Doors for
                    Every
                    Entrance</span>
            </div>
            <el-image class="Details_Image" :src="url4" :fit="fit" />
            <div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 40px;">
                <span class="ClassificationDetails_font01 Sour_Gummyn_font">Unlock Elegance with Our Exquisite
                    Doors</span>
            </div>

            <div class="TheCenteredBox">
                <el-card class="Img-Box-Size">
                    <div class="Img-Box-div" @mouseleave="hover1 = false" @mouseover="hover1 = true">
                        <el-image class="Img-Box-image" :src="url6" :fit="fit" />
                        <div v-if="hover1" class="Img-Box-If">
                            <h3 class="title Sour_Gummyn_font">Garage Doors</h3>
                            <button class="action-button Sour_Gummyn_font" @click="navigateToProduct('Garage Doors')">SHOP
                                NOW</button>
                        </div>
                    </div>
                </el-card>

                <el-card class="Img-Box-Size">
                    <div class="Img-Box-div" @mouseleave="hover2 = false" @mouseover="hover2 = true">
                        <el-image class="Img-Box-image" :src="url7" :fit="fit" />
                        <div v-if="hover2" class="Img-Box-If">
                            <h3 class="title Sour_Gummyn_font">Interior Doors</h3>
                            <button class="action-button Sour_Gummyn_font" @click="navigateToProduct('Interior Doors')">SHOP
                                NOW</button>
                        </div>
                    </div>
                </el-card>

                <el-card class="Img-Box-Size">
                    <div class="Img-Box-div" @mouseleave="hover3 = false" @mouseover="hover3 = true">
                        <el-image class="Img-Box-image" :src="url8" :fit="fit" />
                        <div v-if="hover3" class="Img-Box-If">
                            <h3 class="title Sour_Gummyn_font">Main Doors</h3>
                            <button class="action-button Sour_Gummyn_font" @click="navigateToProduct('Main Doors')">SHOP
                                NOW</button>
                        </div>
                    </div>
                </el-card>

                <el-card class="Img-Box-Size">
                    <div class="Img-Box-div" @mouseleave="hover4 = false" @mouseover="hover4 = true">
                        <el-image class="Img-Box-image" :src="url9" :fit="fit" />
                        <div v-if="hover4" class="Img-Box-If">
                            <h3 class="title Sour_Gummyn_font">Main Gates</h3>
                            <button class="action-button Sour_Gummyn_font" @click="navigateToProduct('Main Gates')">SHOP
                                NOW</button>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="TheCenteredBox3">
                <el-container>
                    <el-aside width="50%">
                        <el-card class="Img-Box-Size">
                            <div class="Img-Box-div" @mouseleave="hover1 = false" @mouseover="hover1 = true">
                                <el-image class="Img-Box-image" :src="url6" :fit="fit" />
                                <div v-if="hover1" class="Img-Box-If">
                                    <h3 class="title Sour_Gummyn_font">Grage Doors</h3>
                                    <button class="action-button Sour_Gummyn_font"
                                        @click="navigateToProduct('Doors')">SHOP
                                        NOW</button>
                                </div>
                            </div>
                        </el-card>
                    </el-aside>
                    <el-aside width="50%">
                        <el-card class="Img-Box-Size">
                            <div class="Img-Box-div" @mouseleave="hover2 = false" @mouseover="hover2 = true">
                                <el-image class="Img-Box-image" :src="url7" :fit="fit" />
                                <div v-if="hover2" class="Img-Box-If">
                                    <h3 class="title Sour_Gummyn_font">Interior Doors</h3>
                                    <button class="action-button Sour_Gummyn_font"
                                        @click="navigateToProduct('Doors')">SHOP
                                        NOW</button>
                                </div>
                            </div>
                        </el-card>
                    </el-aside>
                </el-container>
                <el-container>
                    <el-aside width="50%">
                        <el-card class="Img-Box-Size">
                            <div class="Img-Box-div" @mouseleave="hover3 = false" @mouseover="hover3 = true">
                                <el-image class="Img-Box-image" :src="url8" :fit="fit" />
                                <div v-if="hover3" class="Img-Box-If">
                                    <h3 class="title Sour_Gummyn_font">Main Doors</h3>
                                    <button class="action-button Sour_Gummyn_font"
                                        @click="navigateToProduct('Doors')">SHOP
                                        NOW</button>
                                </div>
                            </div>
                        </el-card>
                    </el-aside>
                    <el-aside width="50%">
                        <el-card class="Img-Box-Size">
                            <div class="Img-Box-div" @mouseleave="hover4 = false" @mouseover="hover4 = true">
                                <el-image class="Img-Box-image" :src="url9" :fit="fit" />
                                <div v-if="hover4" class="Img-Box-If">
                                    <h3 class="title Sour_Gummyn_font">Main Gates</h3>
                                    <button class="action-button Sour_Gummyn_font"
                                        @click="navigateToProduct('Doors')">SHOP
                                        NOW</button>
                                </div>
                            </div>
                        </el-card>
                    </el-aside>
                </el-container>






            </div>
            <div class="TextAside">
                <el-button class="Sour_Gummyn_font" size="large" @click="navigateToProduct('Doors')">
                    <span>Shop The Gallery</span>
                </el-button>

            </div>
        </div>
    </div>
</template>

<script>

import { getData } from '@/services/firebaseService';
export default {
    data() {
        return {
            loading: true,
            url0: require('@/assets/BathtubsDetails.jpeg'),
            url1: require('@/assets/ClassificationDetailsImg01.jpeg'),
            url2: require('@/assets/BathroomVanitiesDetails2.png'),
            url3: require('@/assets/ClassificationDetailsImg03.jpeg'),
            url4: require('@/assets/DoorsMenu.jpg'),
            url6: require('@/assets/overhead_door_courtyard_collection.jpg'),
            url7: require('@/assets/door-doorway-wall-interior-design.jpg'),
            url8: require('@/assets/360_F_300087471_2ADuosSGeCz4sIamHRDW4E9FYK54zbDr.jpg'),
            url9: require('@/assets/Luxury-Beautiful-Residential-High-Quality-Main-Gates-Designs-High-Quality-Aluminum-Gate.jpg'),
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false,
            fit: 'cover',
            DecorationData: [{ "ProductName": "Acrylic Amoeba Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729047929278_acrylic_amoeba_8c4c0b6b-1b31-4e42-9104-7909678b2cce_x900.webp?alt=media&token=dd8ae894-8728-48b8-bf20-1a388a7bd3de", "ProductID": "Acrylic-SNH-01", "productType": "Decoration" }, { "ProductName": "Green Acrylic Mushroom Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729048180217_Acrylic_Mushroom_Objet_Green_a_x900.webp?alt=media&token=3bc3cec6-4307-40f9-9506-7f99dc41d28b", "ProductID": "Acrylic-SNH-02", "productType": "Decoration" }, { "ProductName": "Purple Acrylic Mushroom Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729061550489_Acrylic_Mushroom_Objet_Purple_a_x900.webp?alt=media&token=9dc746d1-e648-4c62-b3b7-ccd175a72fae", "ProductID": "Acrylic-SNH-03", "productType": "Decoration" }, { "ProductName": "Turquoise Acrylic Mushroom Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729061718889_Acrylic_Mushroom_Objet_Turquoise_a_x900.webp?alt=media&token=644ceb48-cd6f-46b3-91b3-af9e112c2f64", "ProductID": "Acrylic-SNH-04", "productType": "Decoration" }, { "ProductName": "Yellow Acrylic Mushroom Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729061874632_Acrylic_Mushroom_Objet_Yellow_a_x900.webp?alt=media&token=73b0556a-d8ec-4153-bc1f-a0de7e06a698", "ProductID": "Acrylic-SNH-05", "productType": "Decoration" }, { "ProductName": "Orange Acrylic Mushroom Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729062099096_Acrylic_Mushroom_Objet_Orange_A_x900.webp?alt=media&token=202deaf4-c58d-4de0-98ac-ca9f39a493ed", "ProductID": "Acrylic-SNH-06", "productType": "Decoration" }, { "ProductName": "Acrylic Frog Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729062447763_acrylic-frog_green_a_456e9050-5b03-49f7-9927-a787fedbdc2d_x900.webp?alt=media&token=0c99bc01-3f7e-4842-8c39-0a57209b3dc3", "ProductID": "Acrylic-SNH-07", "productType": "Decoration" }, { "ProductName": "Acrylic Gorilla Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729062548493_Giant_Acrylic_Gorilla_a_x900.webp?alt=media&token=122e4e22-520e-4152-9d76-6032ba46514d", "ProductID": "Acrylic-SNH-08", "productType": "Decoration" }, { "ProductName": "Acrylic Giraffe Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729063483587_acrylic_giraffe_x900.webp?alt=media&token=464e5c18-cf73-47fb-a712-f997075cbf30", "ProductID": "Acrylic-SNH-09", "productType": "Decoration" }, { "ProductName": "Acrylic Bluebird Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729063618374_acrylic_bluebird_a_x900.webp?alt=media&token=e8d51fd5-3596-4210-a987-0b68d96dcf87", "ProductID": "Acrylic-SNH-10", "productType": "Decoration" }, { "ProductName": "Acrylic Hand Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729063786270_acrylic_hand_a_622003a4-8497-4404-a2ce-0cfd978495fe_x900.webp?alt=media&token=83dbf218-bdc9-4dde-8674-d0d80b3166dd", "ProductID": "Acrylic-SNH-11", "productType": "Decoration" }, { "ProductName": "Acrylic Snail Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729067344131_acrylic_snail_purple_a_x900.webp?alt=media&token=59f5d79e-2c53-410f-9ecd-60e990b1877c", "ProductID": "Acrylic-SNH-12", "productType": "Decoration" }, { "ProductName": "Acrylic Scallop Bowl", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729067494435_Giant_Acrylic_Scallop_b_x900.webp?alt=media&token=6426396e-28d6-4977-a9d9-fefbed30df8d", "ProductID": "Acrylic-SNH-13", "productType": "Decoration" }, { "ProductName": "Acrylic Rabbit Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729067643670_acrylic_rabbit_red_a_x900.webp?alt=media&token=d4e8d563-70e4-47ea-8a6d-fe5c919e0ca0", "ProductID": "Acrylic-SNH-14", "productType": "Decoration" }, { "ProductName": "Acrylic Shark Objet", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/images%2F1729067782692_acrylic_shark_turquoise_a_aa878b94-f70a-49fd-acae-f86decaa6f29_x900.webp?alt=media&token=2c05ced3-9e4e-44e9-8666-fc94aa4de5a0", "ProductID": "Acrylic-SNH-15", "productType": "Decoration" }],
            BathroomVanitiesData: [{ "ProductName": "Free standing Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/NC-01-1.jpeg?alt=media&token=d8965ffd-5b47-4b5a-8795-ca46e7c7ade6", "ProductID": "SH23BV01NC", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/AF-02-3.jpeg?alt=media&token=b2b77c3b-4cce-470c-99e6-f6ad95ceabff", "ProductID": "SH23BV02AF", "productType": "Bathroom Vanities" }, { "ProductName": "Free standing Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/NC-02-1.jpeg?alt=media&token=3ddb1243-a470-4161-8b04-8bf9301d9430", "ProductID": "SH23BV02NC", "productType": "Bathroom Vanities" }, { "ProductName": "Free standing single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/AD-03-5.jpeg?alt=media&token=ab9a7af3-52cb-43da-aed6-9e22e658dd3e", "ProductID": "SH23BV03AD", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Dual Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/GF-03-5.jpeg?alt=media&token=b6ae0126-6cc6-4580-b695-5245f5fed254", "ProductID": "SH23BV03GF", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Dual Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/AF-04-5.jpeg?alt=media&token=4f537c82-dd0b-4687-9873-b165dbd0a3a7", "ProductID": "SH23BV04AF", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Dual Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/GF-04-1.jpeg?alt=media&token=4b1f9c6d-5a66-4836-b357-9762fd851bc3", "ProductID": "SH23BV04GF", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Dual Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/NC-04-3.jpeg?alt=media&token=0401ee79-4916-4b7c-8d02-be8f99e12da3", "ProductID": "SH23BV04NC", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/MD-06-2.jpeg?alt=media&token=ce18d363-b648-4975-8b1d-d19319880f88", "ProductID": "SH23BV06MD", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/GD10-01-1.jpeg?alt=media&token=b2e91291-64d4-497a-8050-591365d48d18", "ProductID": "SH23BV10-01GD", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/GD10-02-2.jpeg?alt=media&token=1e663813-a9e5-4dec-844c-c88cbfb88a96", "ProductID": "SH23BV10-02GD", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Dual Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/GD10-04-2.jpeg?alt=media&token=e7452acf-9799-4afb-b2c9-62295ccd939d", "ProductID": "SH23BV10-04GD", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/GD7-1200-1.jpeg?alt=media&token=6137ce64-dffa-4610-b34a-1ec4923865bd", "ProductID": "SH23BV1200GD7", "productType": "Bathroom Vanities" }, { "ProductName": "Wall mounted Single Bathroom Vanity", "ProductImg": "https://firebasestorage.googleapis.com/v0/b/stylenhomes.appspot.com/o/GD2-1500W-1.jpeg?alt=media&token=616d2709-7827-486d-842c-33867c8728b4", "ProductID": "SH23BV1500WGD2", "productType": "Bathroom Vanities" }],
        };
    },
    created() {

    },
    methods: {
        navigateToTarget(item) {
            this.$router.push({
                name: 'ProductionInformation',
                query: { productType: item.productType, productID: item.ProductID }
            }).then(() => {
                document.body.scrollTo(0, 0);
            });
        },
        navigateToProduct(Value) {
            this.isHovering = true;
            this.NotHovering = false;
            this.$router.push({
                name: 'Product',
                query: { productType: Value }
            }).then(() => {
                document.body.scrollTo(0, 0);
            });
        },
        async fetchData(Value) {
            try {
                const data = await getData('Catalog/Products');
                if (data) {
                    let i = 0;
                    let DataList = [];
                    for (var key in data) {
                        let DataProduct = data[key];
                        if (DataProduct.PARENT_ONE != Value) {
                            continue;
                        }
                        i++;
                        if (i <= 15) {
                            let ProductImage;
                            for (var Image in DataProduct.Images) {
                                ProductImage = DataProduct.Images[Image];
                                break;
                            }
                            DataList.push({
                                ProductName: DataProduct.Name,
                                ProductImg: ProductImage,
                                ProductID: DataProduct.ID,
                                productType: Value
                            });
                        } else {
                            break;
                        }
                    }
                    this.BathroomVanitiesData = DataList;
                    console.log('Bathroom Vanities Data:' + JSON.stringify(this.BathroomVanitiesData));
                    this.loading = false;
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    },
}
</script>

<style scoped>
.TheCenteredBox2Img {
    width: 80%;
    height: auto;
    max-height: 380px;
}

.CenteredBox {
    display: table-cell;
    vertical-align: middle;
    /* 垂直方向居中 */
    text-align: center;
    /* 水平方向居中 */
}

.CategoriesCard .CategoriesCard-Mobile {
    width: 100%;
    display: grid;
    place-items: center;
    /* 同时垂直与水平居中 */
    height: 380px;
    /* 确保 div 有一定的高度以便居中显示 */

}

.CategoriesCard {
    display: none;
}

.PopularCategoriesCard {
    width: 60%;
    height: 360px;
    color: white;
}

.CategoriesCardImg {
    width: 100%;
    height: 360px;
}

.CategoriesCard-Mobile {
    display: none;
}

.TextAside {
    text-align: center;
    margin-top: 10px;
}

.SHOPNOW-Btn {
    text-align: center;
    margin-bottom: 120px;
    margin-top: 40px;
}

.ProductCard {
    max-width: 220px;
    height: 270px;
}

.ProductCardImg {
    width: 220px;
    height: 180px;
}

.Img-Box-Size {
    width: 360px;
    height: 360px;
    margin-right: 10px;
    margin-left: 10px;
}

.Img-Box-image {
    width: 360px;
    height: 360px;
}

.ClassificationDetails_font01 {
    width: 80%;
    font-size: 32px;
    font-weight: 800;
    color: rgb(34, 63, 97);
    margin-left: 20px;
}

.Details_font01 {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 800;
    color: rgb(34, 63, 97);
    font-family: Sour_Gummy, sans-serif;
}

.Details_font02 {
    margin-top: 40px;
    font-size: 16px;
    font-weight: 400;
    font-family: Sour_Gummy, sans-serif;
}



.Details_Image {
    width: 100%;
    height: 700px;
    margin-bottom: 50px;
    margin-top: 30px;
}

.TheCenteredBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 30px;
}

.TheCenteredBox2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 30px;
}

.TheCenteredBox4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-top: 10px;
}

.TheCenteredBox3 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 30px;
    display: none;
}

.scrollbar-flex-content {
    display: flex;
}

.scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 300px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    color: var(--el-color-danger);
}

.Sour_Gummyn_font {
    height: auto;
    font-family: Sour_Gummy, sans-serif;
}

.el-card :deep(.el-card__body) {
    padding: 0px;
}

.DetailsMainBox {
    width: 100%;
    margin-top: 120px;
}

/*   */
.Img-Box-div {
    position: relative;
}

.ClassificationDetailsSpan {
    margin-bottom: 30px;
}

.Img-Box-image {
    transition: all 0.3s ease;
    filter: brightness(100%) blur(0px);
}

.Img-Box-div:hover .Img-Box-image {
    filter: brightness(50%) blur(5px);
}

.Img-Box-If {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    transition: opacity 0.3s ease;
}

.title {
    margin: 0;
    padding: 10px;
    font-size: 1.5em;
}

.action-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #008CBA;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.action-button:hover {
    background-color: #005f7a;
}

.TextAside {
    text-align: center;
    margin-top: 10px;
}

.SeeMoreBox {
    cursor: pointer;
    margin-right: 20px;
    /* 鼠标悬停时变为可点击状态 */
    display: inline-block;
    width: 100%;
    text-align: right;
    padding-right: 20px;
}

@media(max-width:1400px) {
    .Sour_Gummyn_font {
        height: auto;
    }

    .SHOPNOW-Btn {
        margin-bottom: 40px;
        margin-top: 0px;
    }

    .Details_Image {
        height: 300px;
        margin-bottom: 25px;
    }

    .ClassificationDetails_font01 {
        font-size: 24px;
        font-weight: 400;
        margin-left: 20px;
    }


    .ProductCard {
        max-width: 180px;
        height: 260px;
    }

    .ProductCardImg {
        width: 180px;
        height: 160px;
    }

    .scrollbar-demo-item {
        width: 180px;
    }

    .CategoriesCard {
        display: none;
    }

    .CategoriesCard-Mobile {
        display: block;
        height: 400px;
    }

    .PopularCategoriesCard {
        width: 100%;
        height: 400px;
    }

    .TheCenteredBox {
        display: none;
    }

    .TheCenteredBox2Img {
        width: 100%;
    }

    .Details_font01 {
        margin-top: 0px;
    }

    .TheCenteredBox3 {
        display: block;
    }

    .Img-Box-Size {
        width: 100%;
        height: 200px;
        margin-right: 0px;
        margin-left: 0px;
    }

    .TextAsideMain {
        display: none;
    }

    .Img-Box-image {
        width: 100%;
        height: 200px;
    }

    .title {
        padding: 0px;
    }
}
@media(max-width:768px){
    .ClassificationDetails_font01 {
        font-size: 18px;
        font-weight: 300;
        margin-left: 20px;
    }
}
</style>
