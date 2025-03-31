import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Legal from '@/pages/Legal.vue';
import QuestionsAnswers from '@/pages/QuestionsAnswers.vue';
import AdministratorManagement from '@/pages/AdministratorManagement.vue';
import Product from '@/pages/Product.vue';
import ProductionInformation from '@/pages/ProductionInformation.vue';
import SearchPage from '@/pages/SearchPage.vue';
import DownloadPage from '@/pages/Download.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'stylenhomes',
      favicon: require('@/assets/favicon.png'),
    },
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal,
    meta: {
      title: 'Legal',
      favicon: require('@/assets/favicon.png'),
    },
  },
  {
    path: '/QuestionsAnswers',
    name: 'QuestionsAnswers',
    component: QuestionsAnswers,
    meta: {
      title: 'Questions Answers',
      favicon: require('@/assets/favicon.png'),
    },
  },
  {
    path: '/AdministratorManagement',
    name: 'AdministratorManagement',
    component: AdministratorManagement,
    meta: {
      title: 'Management',
      favicon: require('@/assets/favicon.png'),
    },
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product,
    meta: {
      title: 'Product',
      favicon: require('@/assets/favicon.png'),
    },
  },
  {
    path: '/ProductionInformation',
    name: 'ProductionInformation',
    component: ProductionInformation,
    meta: {
      title: 'Production',
      favicon: require('@/assets/favicon.png'),
    },
    props: true
  },
  {
    path: '/Search',
    name: 'SearchPage',
    component: SearchPage,
    meta: {
      title: 'Search',
      favicon: require('@/assets/favicon.png'),
    },
    props: true
  },
  {
    path: '/Download',
    name: 'DownloadPage',
    component: DownloadPage,
    meta: {
      title: 'Download',
      favicon: require('@/assets/favicon.png'),
    },
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.path !== from.path || JSON.stringify(to.query) !== JSON.stringify(from.query)) {
      return { x: 0, y: 0 }; // 当路径或查询参数变化时滚动到顶部
    }
    return false; // 保持默认行为
  }
});
// 修改标题和favicon的函数
function setFavicon(iconUrl) {
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = iconUrl;
  } else {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.href = iconUrl;
    document.head.appendChild(newLink);
  }
}



// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }

  // 设置favicon
  if (to.meta.favicon) {
    setFavicon(to.meta.favicon);
  }

  next(); // 继续导航
});

export default router;
