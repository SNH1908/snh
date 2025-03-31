<template>
  <div class="DataTitle">Data Migration</div>
  <div class="DataBox">
    <el-container>
      <el-aside width="60%" style="height: 90vh;">
        <div class="DataShowBox">
          <h1 style="text-align: center;">DataShow</h1>
          <el-tree style="max-width: 100%" :data="tabledata" :props="defaultProps" @node-click="handleNodeClick" />
        </div>
      </el-aside>
      <el-aside width="40%">
        <div class="ControlBox">

          <div class="DataTitle ControlBoxs">Data movement(数据移动)</div>

          <div class="ControlBoxs">
            <el-form :model="form" label-width="auto" style="max-width: 600px">
              <el-form-item label="sourcePath(源路径)">
                <el-input v-model="sourcePath" style="width: 300px;" />
                <el-button @click="chooseSource">choose</el-button>
              </el-form-item>
              <el-form-item label="product(具体产品)">
                <el-input v-model="productId" style="width: 300px;" />
                <el-button @click="recordSource">record</el-button>
              </el-form-item>
              <el-form-item label="targetPath(目标路径)">
                <el-input v-model="targetPath" style="width: 300px;" />
                <el-button @click="chooseTarget">choose</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="ControlBoxs">
            <el-button size="large" @click="RefreshData">Refresh</el-button>
            <el-button size="large" @click="moveData('Copy')">Copy</el-button>
            <el-button size="large" @click="moveData('Move')">Move</el-button>
            <el-button size="large" @click="cleanRecord">clean</el-button>
          </div>
          <el-divider />
          <div>selectedType(选择类型):{{ selectedType }}</div>
          <div v-for="(item, index) in recordList" :key="index">
            <el-divider />
            <p>record num:{{ index }}</p>
            <p><span>(sourcePath: {{ item.sourcePath }})</span><span>(productId: {{ item.productId }})</span></p>

          </div>

        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
</script>

<script>
import { ref, get, set, remove, onValue } from 'firebase/database'; // 导入需要的函数
import { database } from '@/firebase'; // 引入你的 firebase 配置文件

export default {

  data() {
    return {
      fit: 'cover',
      recordList: [],
      recordState: false,
      sourcePath: '',
      targetPath: '',
      productId: '',
      sourceData: '',   // 源路径数据
      currentTree: {}, // 当前展示的节点
      selectedType: '', // 'source' 或 'target'
      showTree: false, // 是否展示树状结构
      tabledata: [],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  methods: {
    async getProductData(path) {
      try {
        const snapshot = await get(ref(database, path));
        const data = snapshot.val();
        if (data === null) {
          ElMessage.error('路径' + path + '没有数据。');
        }
        return data;
      } catch (error) {
        ElMessage.error('获取数据失败: ' + error.message);
      }
    },
    cleanRecord() {
      this.recordList = [];
      ElMessage('clean succes.');
    },
    async moveData(type) {
      if (this.sourcePath === '') {
        ElMessage.error('不支持此类型操作!');
        return;
      }
      if (this.recordState) {
        console.log('this.recordList:' + JSON.stringify(this.recordList));
        let recordList = this.recordList;
        for(let key in recordList){
          this.moveDataRun(recordList[key].sourcePath, this.targetPath, recordList[key].productId, type);
        }
        this.recordList = [];
        this.recordState = false;
      } else {
        this.moveDataRun(this.sourcePath, this.targetPath, this.productId, type);
      }

    },

    async moveDataRun(sourcePath, targetPath, productId, type) {
      if (sourcePath && targetPath && productId) {
        try {
          // 1. 获取源路径下的产品数据
          const productData = await this.getProductData(`${sourcePath}/${productId}`);
          if (!productData) {
            ElMessage.error('产品' + productId + '不存在于源路径!')
            return;
          }

          // 2. 获取目标路径的数据（确保不覆盖目标路径已有的产品）
          const targetSnapshot = await get(ref(database, targetPath));
          const targetData = targetSnapshot.val();

          // 3. 如果目标路径已有产品，则不覆盖，添加产品到目标路径
          let updatedTargetData;
          if (targetData === null) {
            updatedTargetData = {
              [productId]: productData
            };
          } else {
            updatedTargetData = {
              ...targetData,
              [productId]: productData
            };
          }

          // 4. 将产品数据添加到目标路径
          await set(ref(database, `${targetPath}/${productId}`), updatedTargetData[productId]);

          // 5. 从源路径删除该产品
          if (type === 'Move')
            await remove(ref(database, `${sourcePath}/${productId}`));

          ElMessage({
            message: '数据操作成功。',
            type: 'success',
          });
        } catch (error) {
          ElMessage.error('数据操作失败: ' + error.message)
        }
      } else {
        ElMessage.error('源路径、目标路径和产品ID不能为空!')
      }
    },
    // 选择源路径或目标路径
    chooseSource() {
      this.selectedType = 'source';
    },
    chooseTarget() {
      this.selectedType = 'target';
    },
    RefreshData() {
      this.fetchTree('/');
    },
    // 获取 Firebase 数据并生成树
    fetchTree(path) {
      this.selectedType = 'none';
      const dbRef = ref(database, path);
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        this.tabledata = this.DataControl(data);

      });
    },
    recordSource() {
      let recordListnow = this.recordList;
      recordListnow.push({
        sourcePath: this.sourcePath,
        productId: this.productId
      });
      this.recordList = recordListnow;
      this.recordState = true;
      ElMessage('record succes.');
    },
    DataControl(data, parentpath) {
      let currentTree = [];
      if (typeof data === 'object') {
        for (let key in data) {
          let Nowpath, ParentPath;
          if (parentpath) {
            Nowpath = parentpath + '/' + key;
            ParentPath = parentpath;
          } else {
            Nowpath = key;
            ParentPath = '';
          }

          let ChildrenCurrentTree = this.DataControl(data[key], Nowpath);
          currentTree.push({
            label: key,
            children: ChildrenCurrentTree,
            path: Nowpath,
            parentpath: ParentPath,
          });
        }
      }
      return currentTree;
    },
    // 点击节点时的处理
    handleNodeClick(data) {
      switch (this.selectedType) {
        case 'source':
          this.sourcePath = data.parentpath;
          this.productId = data.label;
          break;
        case 'target':
          this.targetPath = data.path;
          break;
      }
      let datapath = data.path;
      console.log('data path:' + JSON.stringify(datapath));
    },
  },
};
</script>

<style scoped>
.DataTitle {
  font-size: 24px;
  font-weight: 600;
  color: rgb(34, 63, 97);
  font-family: Josefin Sans, sans-serif;
  margin-left: 0px;
}

.DataBox {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.DataShowBox {
  width: 100%;
  min-height: 800px;
  border: 1px solid black;
}

.ControlBox {
  width: 100%;
  min-height: 800px;
  border: 1px solid black;
  padding-top: 100px;
}

.ControlBoxs {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
