// stores/user.js
import { defineStore } from "pinia";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: null,
    isLoaded: false, // 状态是否初始化完成（用于页面加载前判断）
    ConfigUserName: null,
    ConfigPhotoURL: null,
    ConfigProductList: null,
    ConfigUserData: null,
  }),

  actions: {
    setConfigUserName(value) {
      this.ConfigUserName = value;
    },

    setConfigPhotoURL(value) {
      this.ConfigPhotoURL = value;
    },

    setConfigProductList(value) {
      this.ConfigProductList = value;
    },

    setConfigUserData(value) {
      this.ConfigUserData = value;
    },

    setUser(user) {
      this.currentUser = user;
    },

    clearUser() {
      this.currentUser = null;
    },

    // 初始化监听
    initAuthListener() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.setUser(user);
        } else {
          this.clearUser();
        }
        this.isLoaded = true;
      });
    },
  },
});
