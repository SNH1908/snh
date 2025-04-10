<template>
    <div v-if="loading">
        <el-skeleton style="margin-top: 50px;margin-bottom: 30px;" :rows="20" animated />
    </div>
    <div v-else>

        <div class="EmptyBox" v-if="divider">
            <el-divider border-style="dashed" />
        </div>

        <!--产品筛选器-->
        <div class="ShowFilters">
            <el-container>
                <el-container>
                    <el-aside width="80%">
                        <el-button :icon="Operation" size="large" text>Filters</el-button>
                    </el-aside>
                    <main>
                        <div class="ShowFiltersBox">
                            <span style="font-size: 14px;color: gray;">{{ productnum }} Items | </span>
                            <el-dropdown placement="bottom">
                                <el-button size="large" text> Sort by <el-icon>
                                        <ArrowDown />
                                    </el-icon></el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>Featured Products</el-dropdown-item>
                                        <el-dropdown-item>Release Date (New to old)</el-dropdown-item>
                                        <el-dropdown-item>Price (Low to high)</el-dropdown-item>
                                        <el-dropdown-item>Price (High to low)</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>

                    </main>
                </el-container>

            </el-container>

        </div>

        <div class="ShowFilters-mobile">
            <el-container>
                <el-aside width="50%">
                    <el-button :icon="Operation" size="large" text>Filters</el-button>
                </el-aside>
                <el-aside width="50%">
                    <div class="ShowFiltersBox">
                        <span style="font-size: 14px;color: gray;">{{ productnum }} Items | </span>
                        <el-dropdown placement="bottom">
                            <el-button size="large" text> Sort by <el-icon>
                                    <ArrowDown />
                                </el-icon></el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Featured Products</el-dropdown-item>
                                    <el-dropdown-item>Release Date (New to old)</el-dropdown-item>
                                    <el-dropdown-item>Price (Low to high)</el-dropdown-item>
                                    <el-dropdown-item>Price (High to low)</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>

                </el-aside>
            </el-container>


        </div>

        <!--产品数据-->
        <div class="ProductDataBox">
            <el-row :gutter="20" class="ProductRow">
                <el-col v-for="(item, index) in ProductTableData" :key="index" class="ProductCol" :span="6">
                    <el-card style="max-width: 480px" shadow="hover" @click="navigateToTarget(item)">
                        <el-image class="ProductCardImg" :src="item.Image" :fit="fit" />
                        <template #footer>
                            <div style="height: 45px;">
                                <p class="Sour_Gummyn_font">{{ TruncationStr(item.name, 100) }}</p>
                            </div>
                        </template>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <div class="ProductDataBox-mobile">
            <el-row :gutter="20" class="ProductRow">
                <el-col v-for="(item, index) in ProductTableData" :key="index" class="ProductCol" :span="12">
                    <el-card style="max-width: 480px" shadow="hover" @click="navigateToTarget(item)">
                        <el-image class="ProductCardImg" :src="item.Image" :fit="fit" />
                        <template #footer>
                            <div style="height: 45px;">
                                <p class="Sour_Gummyn_font">{{ TruncationStr(item.name, 40) }}</p>
                            </div>
                        </template>
                    </el-card>
                </el-col>
            </el-row>


        </div>
        <div class="EmptyBox" v-if="EmptyStatus">
            <el-empty :image-size="300" />
        </div>
    </div>
</template>

<script setup>
import { Operation, ArrowDown } from '@element-plus/icons-vue'
</script>

<script>
import { getData } from '@/services/firebaseService';
import { useUserStore } from "@/stores/user";


export default {
    props: {
        PageType: {
            type: String,
            required: true
        },
        SearchValue: {
            type: [String, Object, Array],
            required: true
        },
    },
    watch: {
        SearchValue(newValue) {
            if (newValue) {
                this.ProcessingData(this.PageType);
            }
        }
    },
    data() {
        return {
            loading: true,
            productnum: 0,
            fit: 'cover',
            url: require('@/assets/DataLoding.png'),
            ProductTableData: null,
            AllData: '',
            divider: false,
            EmptyStatus: false,

        };
    },
    created() {
        this.ProcessingData(this.PageType);
    },
    computed: {
        userStore() {
            return useUserStore();
        },
    },
    methods: {
        ProcessingData(Value) {
            switch (Value) {
                case 'Search':
                    this.divider = true;
                    this.SearchData();
                    break;
                case 'Product':
                    this.fetchData();
                    break;
                case 'Viewed':
                    this.divider = true;
                    this.ViewedData();
                    break;
                case 'Lists':
                    this.divider = true;
                    this.ListsData();
                    break;
                default:
                    break;
            }
        },
        TruncationStr(Value, num) {
            if (typeof Value !== 'string') {
                return '';
            }
            if (Value.length >= num) {
                const TrStr = Value.substring(0, num) + '...'
                return TrStr;
            }
            return Value;

        },
        SearchAbout(value) {
            this.productnum = 0;
            let DataList = this.AllData;
            let tableData = [];
            for (let Productkey in DataList) {
                let item = DataList[Productkey], oneImage = '';
                if (!item.Name) {
                    continue;
                }
                let searchWord = value; // 目标字符串

                // 使用 new RegExp 动态创建正则表达式
                let regex = new RegExp(searchWord, "i");
                if (item.Name.search(regex) !== -1) {
                    if (item.isdelete == 'true') {
                        continue;
                    }
                    for (let key in item.Images) {
                        oneImage = item.Images[key];
                        break;
                    }

                    tableData.push({
                        number: tableData.length + 1,
                        name: item.Name || '',
                        ID: item.ID || '',
                        Image: oneImage || '',
                        Specifications: item.Specifications || '',
                        Dimensions: item.Dimensions || '',
                        Description: item.Description || '',
                        About: item.About || '',
                        ProductParent: item.PARENT_ONE || '',
                    });
                    this.productnum++;
                }
            }
            this.ProductTableData = tableData;
            this.loading = false;
            this.EmptyStatus = false;
        },
        async SearchData() {

            if (this.AllData === '') {
                this.fetchDataFromFirebase('SearchData');
                return;
            }
            this.SearchAbout(this.SearchValue);
            let firstLetter = this.SearchValue.substring(0, 1);
            if (this.ProductTableData.length === 0) {
                this.SearchAbout(firstLetter);
            }
            if (this.ProductTableData.length === 0) {
                this.EmptyStatus = true;
            }

        },
        ListsData() {
            this.ViewedData();
        },
        async ViewedData() {
            this.productnum = 0;
            if (this.AllData === '') {
                this.fetchDataFromFirebase('ViewedData');
                return;
            }
            const data = this.AllData;
            const ViewedList = this.SearchValue;

            let tableData = [];
            for (let Productkey in data) {
                let item = data[Productkey], oneImage = '';
                if (item.isdelete == 'true' || item.isdelete == true) {
                    continue;
                }
                for (let key in item.Images) {
                    oneImage = item.Images[key];
                    break;
                }
                for (let key in ViewedList) {
                    if (item.ID == key) {
                        tableData.push({
                            number: tableData.length + 1,
                            name: item.Name || this.SearchValue,
                            ID: item.ID || '',
                            Image: oneImage || '',
                            Specifications: item.Specifications || '',
                            Dimensions: item.Dimensions || '',
                            Description: item.Description || '',
                            About: item.About || '',
                        });
                        this.productnum++;
                    }

                }

            }
            this.ProductTableData = tableData;
            this.loading = false;
        },
        async fetchDataFromFirebase(Value) {
            if (this.userStore.ConfigProductList) {
                this.AllData = this.userStore.ConfigProductList;
                console.log("get old data..-->"+JSON.stringify(this.userStore.ConfigProductList.length));
            } else {
                const data = await getData('Catalog/Products');
                this.userStore.setConfigProductList(data);
                this.AllData = this.userStore.ConfigProductList;
                console.log("get new data..");
            }

            switch (Value) {
                case 'fetchData':
                    this.fetchData();
                    break;
                case 'ViewedData':
                    this.ViewedData();
                    break;
                case 'SearchData':
                    this.SearchData();
                    break;
                default:
                    break;
            }
        },
        async fetchData() {
            this.productnum = 0;

            if (this.AllData === '') {
                this.fetchDataFromFirebase('fetchData');
                return;
            }

            const data = this.AllData;
            if (!data) {
                this.loading = false;
                this.EmptyStatus = true;
                return;
            }

            let tableData = [];
            for (let Productkey in data) {
                let item = data[Productkey], oneImage = '';
                if (item.isdelete == 'true' || item.isdelete == true) {
                    continue;
                }
                for (let key in item.Images) {
                    oneImage = item.Images[key];
                    break;
                }
                if (item.PARENT_ONE == this.SearchValue || item.PARENT_TWO == this.SearchValue) {
                    tableData.push({
                        number: tableData.length + 1,
                        name: item.Name || this.SearchValue,
                        ID: item.ID || '',
                        Image: oneImage || '',
                        Specifications: item.Specifications || '',
                        Dimensions: item.Dimensions || '',
                        Description: item.Description || '',
                        About: item.About || '',
                    });
                    this.productnum++;
                }

            }

            this.ProductTableData = tableData;
            this.loading = false;
        },
        getPath(value) {
            return 'Store/' + value;
        },
        navigateToTarget(item) {
            if (this.IsSearch) {
                this.$router.push({
                    name: 'ProductionInformation',
                    query: { productType: item.ProductParent, productID: item.ID }
                }).then(() => {
                    document.body.scrollTo(0, 0);
                });
            } else {
                this.$router.push({
                    name: 'ProductionInformation',
                    query: { productType: this.SearchValue, productID: item.ID }
                }).then(() => {
                    document.body.scrollTo(0, 0);
                });
            }

        }

    }
}
</script>

<style scoped>
.ShowFilters {
    width: 100%;
    min-height: 5vh;
}

.Sour_Gummyn_font {
    font-family: Sour_Gummy, sans-serif;
}

.SNH_product_font01 {
    font-size: 12px;
    font-family: Josefin Sans, sans-serif;
}

.ShowFilters-mobile {
    width: 100%;
    min-height: 5vh;
    display: none;
}

.ShowFiltersBox {
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
}

.ProductDataBox {
    width: 100%;
}

.ProductDataBox-mobile {
    width: 100%;
    display: none;
}

.ProductCol {
    margin-top: 20px;
}

.ProductRow {
    padding: 0px 20px 20px 20px;
}


.ProductCardImg {
    width: 100%;
    height: 30vh;
}

.el-card :deep(.el-card__body) {
    padding: 20px;
}

@media (max-width: 1200px) {
    .ShowFilters {
        display: none;
    }

    .ShowFilters-mobile {
        display: block;
    }

    .ProductDataBox {
        display: none;
    }

    .ProductDataBox-mobile {
        display: block;
    }

    .el-card :deep(.el-card__body) {
        padding: 0px;
        margin: 0px;
    }

    .el-card :deep(.el-card__footer) {
        padding: 10px;
    }

    .ProductCardImg {
        width: 100%;
        height: 20vh;
        margin-bottom: -5px;
    }

    .ProductRow {
        padding: 0px 15px 15px 15px;
    }
}
</style>