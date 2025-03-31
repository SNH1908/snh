<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
// import { database, storage } from '@/firebase';
// import { ref, onValue } from 'firebase/database';
// import { ref as storageRef, getDownloadURL } from 'firebase/storage';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { database } from "@/firebase";
import { ref } from "firebase/database";
import { get } from "firebase/database";
import '@/assets/TextPaperStyle.css';

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      drawer: false,
      direction: 'ltr',
      menuItemsOnlyOneLevel: [],
      menuItemsOnlyTwoLevel: [
        {
          title: 'Data loading...',
          options: []
        }
      ],
    };
  },
  mounted() {
    this.fetchMenuData();
  },
  methods: {
    convertMenuToOptions(menuData) {
      let options = [];
      menuData.forEach(item => {
        if (item.subMenu) {
          options = options.concat(this.convertMenuToOptions(item.subMenu));
        } else {
          options.push(item.name);
        }
      });
      return options;
    },



    // 获取 Firebase 数据的方法
    async fetchMenuData() {
      try {
        const storeRef = ref(database, 'Directory');
        const snapshot = await get(storeRef);

        const data = snapshot.val();
        let firstLevelMenu = [];
        let secondLevelMenu = [];

        //遍历数据并生成菜单
        for (const key in data) {
          if (data[key].isdelete === 'false' && data[key].classification === 1 && data[key].subordinate === 'false') {
            firstLevelMenu.push({ title: key });
          } else if (data[key].isdelete === 'false' && data[key].classification === 1 && data[key].subordinate === 'true') {
            const secondLevelItem = {
              title: key,
              subordinate: data[key].subordinate,
              options: []
            };

            // 查找二级菜单项
            for (const subKey in data) {
              if (data[subKey].isdelete === 'false' && data[subKey].classification === 2 && data[subKey].Superior === key) {
                secondLevelItem.options.push({ name: subKey });
              }
            }
            // 调用 convertMenuToOptions 函数处理子菜单
            secondLevelItem.options = this.convertMenuToOptions(secondLevelItem.options);
            secondLevelMenu.push(secondLevelItem);
          }
        }

        this.menuItemsOnlyOneLevel = firstLevelMenu;
        this.menuItemsOnlyTwoLevel = secondLevelMenu;

      } catch (error) {
        console.error("获取数据时出错:", error);
      }
    }
  }
};
</script>

<style scoped>
main {
  padding-top: 145px;
  margin: 0px;
}

@media (max-width: 1400px) {
  main {
    padding-top: 0px;
    padding-bottom: 45px;
  }
}
</style>