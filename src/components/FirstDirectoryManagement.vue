<template>

  <el-container>
    <el-aside width="70%">
      <div class="DataTitle">一级目录管理 (First Directory Management)</div>
    </el-aside>
    <el-aside width="30%">
      <el-button style="float: right;margin-right: 20px;" :icon="Plus" @click="dialogVisible = true">Add
        Data</el-button>
    </el-aside>
  </el-container>
  <div style="text-align: center;">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="number" label="number" width="90" />
      <el-table-column prop="name" label="name" width="180" />
      <el-table-column label="Background image" width="180">
        <template #default="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.background" :fit="fit" lazy></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="catalog" label="PDF file" width="90">
        <template #default="scope">
          <div v-if="scope.row.catalog">
            <el-button :icon="Link" @click="this.openUrl(scope.row.catalog)" circle />
          </div>
          <div v-else>
            <el-button :icon="Link" disabled circle />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="介绍语(Description)" />
      <el-table-column prop="isdelete" label="状态(status)" width="90" />
      <el-table-column label="操作(Operate)" width="180">
        <el-button :icon="Edit" circle />
        <el-button type="danger" :icon="Delete" circle />
      </el-table-column>
    </el-table>
  </div>

  <div class="NextPageBtn">
    <el-button-group class="ml-4">
      <el-button type="primary" :icon="ArrowLeft" />
      <el-button type="primary">
        <span>第1页,共1页</span>
      </el-button>
      <el-button type="primary" :icon="ArrowRight" />
    </el-button-group>
  </div>




  <el-dialog v-model="dialogVisible" title="Add Data" width="500" :before-close="handleClose">
    <el-form :model="form" label-width="auto" style="max-width: 600px">

      <el-form-item label="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="background image">
        <el-input v-model="form.background" />

      </el-form-item>
      <el-form-item label="catalog">
        <el-input v-model="form.catalog" />
      </el-form-item>
      <el-form-item label="description">
        <el-input v-model="form.description" />
      </el-form-item>
      <el-form-item label="isdelete">
        <el-input v-model="form.isdelete" />
      </el-form-item>

    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import {
  ArrowLeft,
  ArrowRight,
  Link,
  Plus,
  Edit,
  Delete
} from '@element-plus/icons-vue'
</script>

<script>
import { getData } from '@/services/firebaseService';
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'


export default {

  data() {
    return {
      tableData: [],
      fit: 'cover',
      form: {
        name: '',
        background: '',
        catalog: '',
        description: '',
        isdelete: ''
      },
      dialogVisible: ref(false),
      imageUrl: ref('')
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await getData('Store');
      let tableData = [];
      for (let key in data) {
        let item = data[key];
        if (item.classification === 1) {
          let isdelete;
          if (item.isdelete == 'true') {
            isdelete = 'off line'
          } else {
            isdelete = 'on line'
          }
          tableData.push({
            number: tableData.length + 1,
            name: item.Name || key,
            background: item.Background || '',
            catalog: item.Catalog || '',
            description: item.Description || '',
            isdelete: isdelete || 'on line'
          });
        }
      }
      this.tableData = tableData;

    },
    openUrl(Url) {
      window.open(Url, '_blank');
    },
    handleClose(done) {
      ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
          done();
        })
        .catch(() => {
          // handle error if needed
        });
    },
  }
};
</script>

<style scoped>
.DataTitle {
  font-size: 24px;
  font-weight: 600;
  color: rgb(34, 63, 97);
  font-family: Josefin Sans, sans-serif;
  margin-left: 20px;
}

.NextPageBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
</style>
