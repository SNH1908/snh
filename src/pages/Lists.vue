<template>
    <MainLayout>
        <div class="HomePagebox">
            <h1 class="Home_font01"> Products you added to the list.</h1>
            <!--产品数据-->
            <ProductData PageType="Lists" :SearchValue="SearchValue" />
            
        </div>

    </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import ProductData from "@/components/ProductData.vue";

import { getData } from '@/services/firebaseService';
import { useUserStore } from "@/stores/user";

export default {
    name: "SNH-Lists",
    components: {
        MainLayout,
        ProductData,
    },
    computed: {
        userStore() {
            return useUserStore();
        },
    },
    watch: {
        'userStore.isLoaded'(loaded) {
            if (loaded && this.userStore.currentUser) {
                this.UserData = this.userStore.currentUser;
                this.fetchData();
            }
        },
    },
    data() {
        return {
            SearchValue: '',
            fit: 'cover',
            UserData: '',
        };
    },
    created() {

    },
    methods: {
        async fetchData() {
            const User = this.UserData;
            const Path = 'UserData/' + User.uid + '/lists';
            const UserListsList = await getData(Path);
            this.SearchValue = UserListsList;
        }
    }
}
</script>

<style scoped>
.HomePagebox {
    margin-top: 5px;
    min-height: 100vh;
}

.Home_font01 {
    margin-top: 40px;
    font-size: 32px;
    font-weight: 800;
    font-family: Josefin Sans, sans-serif;
    margin-left: 20px;
    margin-bottom: 100px;
}
</style>