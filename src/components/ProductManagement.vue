<template>

  <el-container>
    <el-aside width="70%">
      <div class="DataTitle">产品管理 (Product Management)</div>
    </el-aside>
    <el-aside width="30%">
      <el-button class="BtnStyle" :icon="Plus" @click="OpenAddDataDrawer()">Add Data</el-button>
      <el-button class="BtnStyle" :icon="Refresh" @click="fetchData()">Refresh</el-button>
    </el-aside>
  </el-container>
  <el-divider border-style="dashed" />
  <div v-if="IsEmpty" class="EmptyBox">
    <el-empty :image-size="200" />
  </div>
  <div v-else class="EmptyBox">
    <!-- 分类下拉列表 -->
    <div style="margin-bottom: 5px;">
      <el-dropdown trigger="click">
        <el-button style="min-width: 200px;">
          {{ CatalogName }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="SwitchList('All')">All</el-dropdown-item>
            <el-dropdown-item v-for="(item, index) in CategoriesList" :key="index"
              @click="SwitchList(item.Categorie)">{{ item.Categorie }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <div style="float: right;">
        <el-button text>{{ ProductQuantity }} Product</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" border stripe max-height="700" style="width: 100%">

      <el-table-column fixed property="number" label="Number" width="90" />
      <el-table-column property="ID" label="Commodity ID" width="150" />
      <el-table-column property="name" label="Name" width="240" />

      <el-table-column property="Images" label="Images" width="480">
        <template #default="scope">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item, index) in scope.row.Images" :key="index">
              <el-image style="width: 100px; height: 100px" :src="item" :fit="fit" />
            </el-col>
          </el-row>
        </template>
      </el-table-column>

      <el-table-column property="Dimensions" label="尺寸(Dimensions)" width="240">
        <template #default="scope">
          <div v-for="(item, index) in scope.row.Dimensions" :key="index">{{ item }}</div>
        </template>
      </el-table-column>

      <el-table-column property="Specifications" label="规格(Specifications)" width="240">
        <template #default="scope">
          <div v-html="truncateString(formattedText(scope.row.Specifications))"></div>
        </template>
      </el-table-column>
      <el-table-column property="Description" label="描述(Description)" width="240">
        <template #default="scope">
          <div v-if="isDeltaFormat(scope.row.Description)">
            <p>渲染后的 HTML:</p>
            <div v-html="renderedHtml" style="width: 100%;"></div>
          </div>

          <div v-else>
            <div v-html="truncateString(scope.row.Description)"></div>
          </div>

        </template>
      </el-table-column>
      <el-table-column property="About" label="关于此产品(About this product)" width="240">
        <template #default="scope">
          <div v-html="truncateString(formattedText(scope.row.About))"></div>
        </template>
      </el-table-column>

      <el-table-column property="isdelete" label="状态(status)" width="120" />

      <el-table-column fixed="right" label="Operations" min-width="150">
        <template #default="scope">
          <el-button type="warning" round :icon="Edit" plain @click="OpenUpDataDrawer(scope.row)">Edit</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>


  <!-- 添加数据表单 -->
  <el-drawer v-model="drawer" title="Add Data" :direction="direction" size="100%"
    style="background-color: rgb(245, 245, 245);">

    <el-form :inline="true" :model="DataForm" :label-position="labelPosition">
      <el-form-item label="Superior" :label-position="itemLabelPosition" style="width: 100%;">

        <el-dropdown trigger="click">
          <el-button style="min-width: 200px;">
            {{ DataForm.PARENT_ONE }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="(item, index) in CategoriesList" :key="index"
                @click="SwitchFormCategorie(item.Categorie)">{{ item.Categorie }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-input v-model="DataForm.PARENT_ONE" style="display: none;" />

        <el-button :icon="Refresh" @click="fetchCategories()" plain style="display: none;" />
      </el-form-item>
      <el-form-item label="Name" :label-position="itemLabelPosition" class="FormItem">
        <el-input v-model="DataForm.Name" />
      </el-form-item>
      <el-form-item label="ID" :label-position="itemLabelPosition" class="FormItem">
        <span style="width: 93%;"><el-input v-model="DataForm.ID" disabled /></span>
        <span v-if="!IsUpdate"><el-button :icon="Refresh" @click="UpDataID()"></el-button></span>
      </el-form-item>

      <el-form-item label="尺寸(Dimensions)" :label-position="itemLabelPosition" class="FormItem">
        <!-- <el-input v-model="DataForm.Dimensions" /> -->
        <div v-for="(input, index) in DataForm.Dimensions" :key="index" style="width: 100%;">
          <el-input v-model="DataForm.Dimensions[index]" placeholder="Please enter the size" style="width: 90%;" />
          <el-button type="danger" :icon="Delete" @click="removeInput(index, 'Dimensions')" plain
            style="width: 8%;"></el-button>
        </div>
        <el-button :icon="Plus" @click="addInput('Dimensions')">Add</el-button>
      </el-form-item>

      <el-form-item label="规格(Specifications)" :label-position="itemLabelPosition" class="FormItem">
        <el-input v-model="DataForm.Specifications" :rows="15" type="textarea"
          placeholder="Please input Specifications" />
      </el-form-item>
      <el-form-item label="描述(Description)" :label-position="itemLabelPosition" class="FormItem">
        <!-- <div v-if="IsUpdate"></div> -->
        <span>Style extension : </span><el-switch v-model="IsRichText" />
        <el-input v-if="!IsRichText" v-model="DataForm.Description" :rows="15" type="textarea"
          placeholder="Please input Description" />

        <div v-if="IsRichText">
          <quill-editor v-model:content="content" :options="editorOptions" ref="editor"
            style="width: 100%; "></quill-editor>

          <el-button :icon="Plus" @click="contentToDescription">Update Preview</el-button>

          <div style="display: block;width: 100%;">
            <p>Style Preview:</p>
            <div v-html="renderedHtml" style="width: 100%;border: 1px solid lightgray;min-height: 100px;"></div>
          </div>
        </div>

        <div style="display: none;">
          <el-button :icon="Plus" @click="ConsoleSomeThing">检查</el-button>
          <el-button :icon="Plus" @click="CleanQuill">清空</el-button>
          <el-button :icon="Plus" @click="DescriptionTocontent">回调</el-button>
        </div>
      </el-form-item>
      <el-form-item label="About" :label-position="itemLabelPosition" class="FormItem">
        <el-input v-model="DataForm.About" :rows="15" type="textarea" placeholder="Please input About" />
      </el-form-item>

      <el-form-item label="Status" :label-position="itemLabelPosition" class="FormItem">
        <el-switch v-model="DataForm.isdelete" inline-prompt active-text="off line" inactive-text="on line"
          style="--el-switch-on-color: #ff4949; --el-switch-off-color: #13ce66" size="large" />

      </el-form-item>
      <el-form-item label="Images" :label-position="itemLabelPosition" class="FormItem">
        <div v-for="(input, index) in DataForm.Images" :key="index" style="width: auto;">
          <el-card style="max-width: 120px" shadow="never">
            <el-image style="width: 120px; height: 120px" :src="DataForm.Images[index]" :fit="fit" />
            <el-input v-model="DataForm.Images[index]" style="display: none;" />
            <template #footer>
              <el-container>
                <el-aside width="35px">
                  <el-upload v-model:file-list="fileList" class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple
                    :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :before-remove="beforeRemove"
                    :on-exceed="handleExceed" :before-upload="handleBeforeUpload" :show-file-list="false"
                    :http-request="(option) => handleUploadToFirebase(option, index)">
                    <el-button :icon="Upload" circle />
                  </el-upload>
                </el-aside>
                <el-aside width="36px">
                  <div class="upload-demo">
                    <el-button type="warning" :icon="DArrowLeft" @click="moveToTop(index)" plain circle
                      class="upload-Delete-btn" />
                  </div>
                </el-aside>
                <el-aside width="34px">
                  <!-- 新增置顶按钮 -->
                  <div class="upload-demo">
                    <el-button type="danger" :icon="Delete" @click="removeInput(index, 'Images')" plain circle
                      class="upload-Delete-btn" />
                  </div>

                </el-aside>
              </el-container>
            </template>
          </el-card>
        </div>
        <div style="width: 100%;">
          <el-button :icon="Plus" @click="addInput('Images')">Add</el-button>
        </div>
      </el-form-item>

    </el-form>

    <el-button size="large" @click="drawer = false" round>Cancel</el-button>
    <el-button type="primary" size="large" round @click="SubmitData()" v-if="!IsUpdate">Submit</el-button>
    <el-button type="warning" size="large" round @click="UpdateData()" v-if="IsUpdate">Update</el-button>

  </el-drawer>

  <!-- 图片预览对话框 -->
  <el-dialog v-model="dialogVisible">
    <img class="preview-image" :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup>
import {
  Plus,
  Refresh,
  Delete,
  Upload,
  Edit,
  DArrowLeft
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

</script>
<script>
import Quill from "quill";
import { getData, createData, updateData } from '@/services/firebaseService';
import { defineComponent, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid';
import { ref as firebaseRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase"; // 引入 Firebase 配置
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { QuillEditor } from "@vueup/vue-quill";
import "quill/dist/quill.snow.css";

import Sortable from 'sortablejs';
export default defineComponent({
  components: {
    QuillEditor,
  },
  computed: {
    // 解析 Delta 数据并转换为 HTML
    renderedHtml() {
      if (!this.DataForm.Description || typeof this.DataForm.Description !== "object") return "";
      const converter = new QuillDeltaToHtmlConverter(this.DataForm.Description.ops, {
        inlineStyles: true, // 让 Quill 直接生成可内联的 CSS
      });
      return converter.convert();
    },
  },
  data() {
    return {
      items: [
        { id: 1, name: "项目 1" },
        { id: 2, name: "项目 2" },
        { id: 3, name: "项目 3" },
      ],
      content: "",
      IsRichText: false,
      quill: null,
      editorOptions: {
        theme: "snow",
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗、斜体、下划线、删除线
            [{ 'header': 1 }, { 'header': 2 }], // 标题
            [{ 'script': 'sub' }, { 'script': 'super' }], // 上标、下标
            [{ 'indent': '-1' }, { 'indent': '+1' }], // 缩进
            [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ 'color': [] }, { 'background': [] }], // 字体颜色、背景颜色
            [{ 'font': [] }], // 字体
            [{ 'align': [] }], // 对齐方式
            ['clean'] // 清除格式
          ]
        },
      },
      IsUpdate: false,
      fileList: [], // 图片上传列表
      dialogImageUrl: "", // 预览图片的 URL
      dialogVisible: false, // 预览对话框可见状态
      drawer: false,
      direction: 'ttb',
      IsEmpty: true,
      AllData: [],
      tableData: [],
      CategoriesList: '',
      fit: 'cover',
      labelPosition: 'top',
      CatalogName: 'catalog List',
      ProductQuantity: 0,
      DataForm: {
        Name: '',
        ID: '',
        Images: [],
        Specifications: '',
        Dimensions: [],
        Description: '',
        About: '',
        isdelete: 'false',
        PARENT_ONE: 'catalog List',
      },
      imageUrl: ref(''),

    };
  },
  created() {
    this.fetchCategories();
  },
  watch: {
    // 监听抽屉打开的变化
    drawer(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.initSortable();
        });
      }
    },
  },

  methods: {
    moveToTop(index) {
      if (index > 0) {
        // 从数组中移除该图片路径
        const [item] = this.DataForm.Images.splice(index, 1);
        // 将该图片路径插入到数组的首位
        this.DataForm.Images.unshift(item);
      }
    },
    CheckImages() {
      console.log("test data:" + JSON.stringify(this.DataForm.Images));
    },
    initSortable() {
      const el = this.$refs.imageList;
      if (el) {
        new Sortable(el, {
          onEnd: (evt) => {
            const { oldIndex, newIndex } = evt;
            this.swapArrayElements(this.DataForm.Images, oldIndex, newIndex);
          },
        });
      }
    },
    swapArrayElements(arr, fromIndex, toIndex) {
      const temp = arr[fromIndex];
      arr[fromIndex] = arr[toIndex];
      arr[toIndex] = temp;
    },
    truncateString(str) {
      if (typeof str !== 'string') return ''; // 非字符串直接返回空字符串
      return str.length > 150 ? str.substring(0, 150) + '...' : str;
    },
    ReverseFormatText(Value) {
      if (typeof Value !== "object") {
        return this.formattedText(Value).replace(/<br>/g, "\n");
      } else {
        return Value;
      }

    },
    formattedText(Value) {
      if (typeof Value !== "object") {
        return (Value || "").replace(/\n/g, '<br>').replace(/\\n/g, '<br>').replace('\\n', '<br>');
      } else {
        return Value;
      }
    },
    handlePreview(uploadFile) {
      console.log(uploadFile);
    },
    contentToDescription() {
      // this.DataForm.Description = JSON.stringify(this.content);
      this.DataForm.Description = this.content;
    },
    DescriptionTocontent() {
      // this.$refs.editor.quill = new Quill(this.$refs.editor.$el, { theme: "snow" });
      // const delta = JSON.parse(this.DataForm.Description);
      // this.$refs.editor.quill.setContents(delta);
      this.content = this.DataForm.Description;
    },
    CleanQuill() {

      this.$nextTick(() => {
        if (!this.quill) {
          this.quill = new Quill(this.$refs.editor, { /* 配置 */ });
        }
      });
      if (this.quill) {
        this.quill.setContents([]); // 清空内容
      }
    },
    ConsoleSomeThing() {
      console.log("DataForm.Description数据:" + JSON.stringify(this.DataForm.Description));
      // console.log('value:' + JSON.stringify(this.content));
    },
    beforeRemove(uploadFile, uploadFiles) {
      console.log(uploadFile, uploadFiles);

    },
    isDeltaFormat(data) {
      return typeof data === "object" && data !== null && Array.isArray(data.ops);// 判断数据是否为 Delta 格式
    },


    OpenUpDataDrawer(Item) {
      // console.log('Item:' + JSON.stringify(Item));
      let isdelete;
      if (Item.isdelete === 'on line') {
        isdelete = false;
      } else if (Item.isdelete === 'off line') {
        isdelete = true;
      }

      const DataForm = {
        Name: Item.name,
        ID: Item.ID,
        Images: Item.Images,
        Specifications: this.ReverseFormatText(Item.Specifications),
        Dimensions: Item.Dimensions,
        Description: Item.Description,
        About: this.ReverseFormatText(Item.About),
        isdelete: isdelete,
        PARENT_ONE: Item.PARENT_ONE,
      };

      this.CleanForm();
      this.IsUpdate = true;
      this.DataForm = DataForm;
      this.IsRichText = false;
      this.drawer = true;


    },
    OpenAddDataDrawer() {
      this.CleanForm();
      this.IsUpdate = false;
      this.drawer = true;
      this.IsRichText = false;
      this.UpDataID();
    },
    UpDataID() {
      this.DataForm.ID = this.generateUniqueId();
    },
    CleanForm() {
      const DataForm = {
        Name: '',
        ID: '',
        Images: [
        ],
        Specifications: '',
        Dimensions: [],
        Description: '',
        About: '',
        isdelete: 'false',
        PARENT_ONE: 'catalog List',
      }
      this.DataForm = DataForm;
    },
    async UpdateData() {
      const DataForm = this.DataForm;

      if (DataForm.PARENT_ONE.length === 0 || DataForm.PARENT_ONE === 'catalog List') {
        ElMessage({
          showClose: true,
          message: 'Please select the catalog!!!',
          type: 'warning',
        })
        return;
      }

      if (DataForm.Name.length === 0) {
        ElMessage({
          showClose: true,
          message: 'Please enter the Name!!!',
          type: 'warning',
        })
        return;
      }

      if (DataForm.ID.length === 0) {
        ElMessage({
          showClose: true,
          message: 'Please enter the ID!!!',
          type: 'warning',
        })
        return;
      }

      if (DataForm.Images.length === 0) {
        ElMessage({
          showClose: true,
          message: 'Please upload the photos!!!',
          type: 'warning',
        })
        return;
      }

      const Path = 'Catalog/Products/' + DataForm.ID;
      const ProductsData = await getData(Path);
      if (!ProductsData) {
        ElMessage({
          showClose: true,
          message: 'Project not found !!!',
          type: 'error',
        })
        return;
      }
      //更新数据
      updateData(Path, DataForm);

      //清除表单数据
      this.CleanForm();

      this.drawer = false;

      ElMessage({
        showClose: true,
        message: 'Product updated successfully.',
        type: 'success',
      })

    },
    generateUniqueId() {
      return crypto.randomUUID(); // 生成唯一 UUID
    },
    async SubmitData() {
      let DataForm = this.DataForm;

      if (DataForm.PARENT_ONE.length === 0 || DataForm.PARENT_ONE === 'catalog List') {
        ElMessage({
          showClose: true,
          message: 'Please select the catalog!!!',
          type: 'warning',
        })
        return;
      }

      if (DataForm.Name.length === 0) {
        ElMessage({
          showClose: true,
          message: 'Please enter the Name!!!',
          type: 'warning',
        })
        return;
      }

      if (DataForm.ID.length === 0) {
        ElMessage({
          showClose: true,
          message: 'Please enter the ID!!!',
          type: 'warning',
        })
        return;
      }

      if (DataForm.Images.length === 0) {
        ElMessage({
          showClose: true,
          message: 'Please upload the photos!!!',
          type: 'warning',
        })
        return;
      }

      const Path = 'Catalog/Products/' + DataForm.ID;
      const ProductsData = await getData(Path);
      if (ProductsData) {
        ElMessage({
          showClose: true,
          message: 'The project already exists !!!',
          type: 'error',
        })
        return;
      }

      //新增数据
      await createData(Path, DataForm);

      //清除表单数据
      this.CleanForm();

      this.drawer = false;

      ElMessage({
        showClose: true,
        message: 'Product added successfully.',
        type: 'success',
      })
    },
    // 图片预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 删除图片
    handleRemove(file, files) {

      console.log("Removed file:", file, files);
      console.log("after Remove fileList:" + JSON.stringify(this.fileList));
    },

    // 上传前校验
    handleBeforeUpload(file) {
      const isImage = file.type.startsWith("image/");
      const isSizeValid = file.size / 1024 / 1024 < 5; // 限制图片小于5MB
      if (!isImage) {
        this.$message.error("上传的文件必须是图片");
      }
      if (!isSizeValid) {
        this.$message.error("图片大小不能超过5MB");
      }
      return isImage && isSizeValid; // 返回 true 表示校验通过
    },

    // 上传到 Firebase Storage
    async handleUploadToFirebase(options, index) {
      const { file, onSuccess } = options;
      try {
        const uniqueFileName = `${Date.now()}-${uuidv4()}-${file.name}`; // 生成唯一文件名
        const storageRef = firebaseRef(storage, `uploads/${uniqueFileName}`);// 设置 Firebase 存储路径
        const snapshot = await uploadBytes(storageRef, file); // 上传文件到 Firebase
        const downloadURL = await getDownloadURL(snapshot.ref); // 获取下载 URL
        // 更新到 fileList 
        this.DataForm.Images[index] = downloadURL;
        onSuccess(); // 通知上传成功
        console.log("DataForm:" + JSON.stringify(downloadURL));
      } catch (error) {
        console.error("Upload to Firebase failed:", error);
      }
    },

    addInput(value) {
      if (value === 'Dimensions') {
        this.DataForm.Dimensions.push("");
      } else if (value === 'Images') {
        this.DataForm.Images.push("");
      }
    },
    removeInput(index, value) {
      if (value === 'Dimensions') {
        this.DataForm.Dimensions.splice(index, 1);
      } else if (value === 'Images') {
        this.DataForm.Images.splice(index, 1);
      }
    },
    SwitchFormCategorie(value) {
      this.DataForm.PARENT_ONE = value;
    },
    async fetchData() {
      const data = await getData('Catalog/Products');
      let tableData = [], i = 0;

      for (let key in data) {
        let item = data[key], isdelete;
        if (item.isdelete == 'true' || item.isdelete == true) {
          isdelete = 'off line'
        } else {
          isdelete = 'on line'
        }
        tableData.push({
          number: tableData.length + 1,
          name: item.Name || key,
          ID: item.ID || '',
          Images: item.Images || '',
          Specifications: item.Specifications || '',
          Dimensions: item.Dimensions || '',
          Description: item.Description || '',
          About: item.About || '',
          isdelete: isdelete || 'on line',
          PARENT_ONE: item.PARENT_ONE,
        });
        i++;
      }
      this.tableData = tableData;
      this.AllData = data;
      this.IsEmpty = false;
      this.ProductQuantity = i;
      this.CatalogName = 'catalog List';
    },
    async fetchCategories() {
      const data = await getData('Catalog/Categories/LEVEL_ONE');
      let CategoriesList = [];
      for (let key in data) {
        CategoriesList.push({
          Categorie: key
        });

      }
      this.CategoriesList = CategoriesList;

    },
    SwitchList(value) {
      if (!this.AllData) {
        this.fetchData();
      }
      let tableData = [], data = this.AllData, i = 0;

      for (let key in data) {
        let item = data[key], isdelete;
        if (item.isdelete == 'true' || item.isdelete == true) {
          isdelete = 'off line'
        } else {
          isdelete = 'on line'
        }
        if (value === 'All') {
          tableData.push({
            number: tableData.length + 1,
            name: item.Name || key,
            ID: item.ID || '',
            Images: item.Images || '',
            Specifications: item.Specifications || '',
            Dimensions: item.Dimensions || '',
            Description: item.Description || '',
            About: item.About || '',
            isdelete: isdelete || 'on line',
            PARENT_ONE: item.PARENT_ONE,
          });
          i++;
        } else if (item.PARENT_ONE === value) {
          tableData.push({
            number: tableData.length + 1,
            name: item.Name || key,
            ID: item.ID || '',
            Images: item.Images || '',
            Specifications: item.Specifications || '',
            Dimensions: item.Dimensions || '',
            Description: item.Description || '',
            About: item.About || '',
            isdelete: isdelete || 'on line',
            PARENT_ONE: item.PARENT_ONE,
          });
          i++;
        }

      }
      this.tableData = tableData;
      this.CatalogName = value;
      this.ProductQuantity = i;
    },
    openUrl(Url) {
      window.open(Url, '_blank');
    },
    handleClose(done) {

      console.log(done);
    },
  }
});
</script>

<style scoped>
.DataTitle {
  font-size: 24px;
  font-weight: 600;
  color: rgb(34, 63, 97);
  font-family: Josefin Sans, sans-serif;
  margin-left: 20px;
}

.draggable-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.drag-handle {
  position: absolute;
  top: -8px;
  left: -8px;
  z-index: 1;
  cursor: move;
  background: var(--el-color-primary);
  border-radius: 50%;
  padding: 4px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.drag-handle:hover {
  background: var(--el-color-primary-light-3);
}

.quill-content {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.quill-editor {
  height: 300px;
  /* 固定高度 */
  width: 100%;
  /* 默认宽度 */
  overflow-y: auto;
  /* 添加垂直滚动条 */
  border: 1px solid #ccc;
  /* 边框 */
  border-radius: 4px;
  /* 圆角 */
}

.NextPageBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}

.BtnStyle {
  float: right;
  margin-right: 20px;
}

.FormItem {
  width: 45%;
}

.EmptyBox {
  max-height: 750px;
}

.container {
  padding: 0;
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: right;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}

.el-card :deep(.el-card__body) {
  padding: 0px;
}

.el-card :deep(.el-card__footer) {
  padding: 5px;
}

.upload-demo {
  width: 34px;
}

.upload-Delete-btn {
  width: 33px;
  float: right;
}

.description-cell {
  white-space: pre-line;
  /* 支持换行 */
}
</style>