<template>
    
    <div class="DataTitle">Data Management Page</div>

    <el-tabs v-model="activeName" type="card" class="demo-tabs">
        <el-tab-pane label="Product" name="1"><ProductManagement /></el-tab-pane>
        <el-tab-pane label="Data Migration" name="2"><DataMigrationManagement /></el-tab-pane>
    </el-tabs>

</template>
<script>

import ProductManagement from "@/components/ProductManagement.vue";
import DataMigrationManagement from "@/components/DataMigrationManagement.vue";

export default {
    name: "SNH-ManagementPage",
    components: {
        ProductManagement,
        DataMigrationManagement,
    },
    data() {
        return {
            fit: 'cover'
        };
    },
    methods:{
        
    }

};
</script>

<script setup>
import { ref } from 'vue'

const activeName = ref('1')
</script>

<style scoped>
.DataTitle{
    text-align: center;
    font-size: 32px;
    font-weight: 800;
    color: rgb(34, 63, 97);
    font-family: Josefin Sans, sans-serif;
    margin-left: 20px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>