<template>
    <div class="Login">
        <div v-if="!user">
            <el-container>
                <!-- <el-aside width="120px" @click="LoginVisible=true"> -->
                <el-aside width="120px" @click="GoogleLogin">
                    <el-container>
                        <el-aside width="50px">
                            <div class="avatarBox">
                                <el-button circle size="large">
                                    <el-icon size="20px">
                                        <UserFilled />
                                    </el-icon>
                                </el-button>
                            </div>
                        </el-aside>

                        <el-aside width="70px">
                            <div class="container Sour_Gummyn_font clickable-span">
                                <p>Sign In</p>
                            </div>
                        </el-aside>

                    </el-container>
                </el-aside>
                <el-aside width="20px"></el-aside>
                <el-aside width="90px" @click="GoogleLogin">
                    <div class="">
                        <el-container>
                            <el-aside width="50px">
                                <div class="avatarBox">
                                    <el-button circle size="large">
                                        <el-icon size="23px">
                                            <ShoppingCartFull />
                                        </el-icon>
                                    </el-button>
                                </div>
                            </el-aside>
                            <el-aside width="40px">
                                <div class="container Sour_Gummyn_font clickable-span">
                                    <p>Cart</p>
                                </div>
                            </el-aside>
                        </el-container>
                    </div>

                </el-aside>
            </el-container>


        </div>
        <div v-else>

            <el-container>
                <el-aside width="120px">
                    <el-dropdown placement="bottom" size="large">
                        <el-container>

                            <el-aside width="50px">
                                <div class="avatarBox">
                                    <el-avatar :src="user.photoURL" />
                                </div>
                            </el-aside>

                            <el-aside width="70px">
                                <div class="container Sour_Gummyn_font">
                                    <p>Account</p>
                                </div>
                            </el-aside>

                        </el-container>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item><span class="Sour_Gummyn_font">Welcome, {{ user.displayName
                                }}</span></el-dropdown-item>
                                <el-dropdown-item :icon="Avatar" divided><span class="Sour_Gummyn_font_text">My
                                        Account</span></el-dropdown-item>
                                <el-dropdown-item :icon="Present" @click="OrderDialogVisible = true"><span
                                        class="Sour_Gummyn_font_text">My
                                        Order</span></el-dropdown-item>
                                <el-dropdown-item :icon="StarFilled"><span
                                        class="Sour_Gummyn_font_text">List</span></el-dropdown-item>
                                <el-dropdown-item :icon="Timer"><span class="Sour_Gummyn_font_text">Recently
                                        Viewed</span></el-dropdown-item>
                                <el-dropdown-item :icon="WarningFilled"><a href="/QuestionsAnswers"><span
                                            class="Sour_Gummyn_font_text">Help
                                            Contact</span></a></el-dropdown-item>
                                <el-dropdown-item :icon="SwitchButton" @click="GoogleLogout" divided><span
                                        class="Sour_Gummyn_font_text">Sign
                                        Out</span></el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-aside>

                <el-aside width="20px"></el-aside>
                <el-aside width="90px">
                    <div class="">
                        <el-container>
                            <el-aside width="50px">
                                <div class="avatarBox">
                                    <el-button circle size="large">
                                        <el-icon size="23px">
                                            <ShoppingCartFull />
                                        </el-icon>
                                    </el-button>
                                </div>
                            </el-aside>
                            <el-aside width="40px">
                                <div class="container Sour_Gummyn_font">
                                    <p @click="GetUser">Cart</p>
                                </div>
                            </el-aside>
                        </el-container>
                    </div>

                </el-aside>

            </el-container>
        </div>
    </div>
    <div class="LoginMobile">
        <div v-if="!user">
            <el-container>
                <el-aside width="50px" @click="GoogleLogin">
                    <div class="avatarBox">
                        <el-button circle size="large">
                            <el-icon size="15px">
                                <UserFilled />
                            </el-icon>
                        </el-button>
                    </div>
                </el-aside>
                <el-aside width="50px" @click="GoogleLogin">
                    <div class="avatarBox">
                        <el-button circle size="large">
                            <el-icon size="15px">
                                <ShoppingCartFull />
                            </el-icon>
                        </el-button>
                    </div>
                </el-aside>
            </el-container>


        </div>
        <div v-else>

            <el-container>
                <el-aside width="50px">
                    <el-dropdown placement="bottom" size="large" trigger="click">


                        <div class="avatarBox">
                            <el-avatar :src="user.photoURL" />
                        </div>



                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item><span class="Sour_Gummyn_font">Welcome, {{ user.displayName
                                }}</span></el-dropdown-item>
                                <el-dropdown-item :icon="Avatar" divided><span class="Sour_Gummyn_font_text">My
                                        Account</span></el-dropdown-item>
                                <el-dropdown-item :icon="Present" @click="OrderDialogVisibleM = true"><span
                                        class="Sour_Gummyn_font_text">My
                                        Order</span></el-dropdown-item>
                                <el-dropdown-item :icon="StarFilled"><span
                                        class="Sour_Gummyn_font_text">List</span></el-dropdown-item>
                                <el-dropdown-item :icon="Timer"><span class="Sour_Gummyn_font_text">Recently
                                        Viewed</span></el-dropdown-item>
                                <el-dropdown-item :icon="WarningFilled"><a href="/QuestionsAnswers"><span
                                            class="Sour_Gummyn_font_text">Help
                                            Contact</span></a></el-dropdown-item>
                                <el-dropdown-item :icon="SwitchButton" @click="GoogleLogout"><span
                                        class="Sour_Gummyn_font_text">Sign
                                        Out</span></el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-aside>

                <el-aside width="50px">
                    <div class="avatarBox">
                        <el-button circle size="large">
                            <el-icon size="23px">
                                <ShoppingCartFull />
                            </el-icon>
                        </el-button>
                    </div>

                </el-aside>

            </el-container>
        </div>
    </div>
    <el-dialog v-model="LoginVisible" title="Login" width="500">
        <div class="ButtonContainer">
            <el-button plain @click="GoogleLogin" class="LoginButton">Google</el-button>
            <el-button plain @click="GitHubLogin" class="LoginButton">GitHub</el-button>
        </div>
    </el-dialog>
    <el-dialog v-model="OrderDialogVisible" title="Track Order" width="500" align-center>
        <el-container>
            <el-aside width="150px" v-for="(item, index) in TrackOrderList" :key="index">
                <el-image class="CursorPointer clickable-span" style="width: 100%; height: 50px" :src="item.Image" :fit="fit"
                    @click="openWindow(item.url)" />
            </el-aside>

        </el-container>
    </el-dialog>
    <el-dialog v-model="OrderDialogVisibleM" title="Track Order" width="300" align-center>
        <el-container>
            <el-aside width="33%" v-for="(item, index) in TrackOrderList" :key="index">
                <el-image class="CursorPointer" style="width: 100%; height: 50px" :src="item.Image" :fit="fit"
                    @click="openWindow(item.url)" />
            </el-aside>
        </el-container>
    </el-dialog>
</template>
<script setup>
import {
    UserFilled,
    ShoppingCartFull,
    Avatar,
    Present,
    StarFilled,
    WarningFilled,
    Timer,
    SwitchButton
} from '@element-plus/icons-vue'
import { ElButton } from 'element-plus'



</script>
<script>
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useUser } from "../auth";

import { getData, createData, updateData } from '@/services/firebaseService';
export default {
    name: "SNH-Login",
    data() {
        return {
            user: useUser(),
            LoginVisible: false,
            OrderDialogVisible: false,
            OrderDialogVisibleM: false,
            fit: "contain",
            TrackOrderList: [
                { Image: require("@/assets/FedExlogo.png"), url: "https://www.fedex.com.cn/en-ca/tracking.html" },
                { Image: require("@/assets/ups-logo.svg"), url: "https://www.ups.com/track?loc=en_HK&requester=ST/" },
                { Image: require("@/assets/dhl-logo.svg"), url: "https://www.dhl.com/us-en/home.html" },
            ],

        };
    },
    methods: {
        GetUser() {
            console.log('user:' + JSON.stringify(this.user));
        },
        openWindow(value) {
            if (value != '#') {
                window.open(value, '_blank');
            }
        },
        GitHubLogin(){

        },
        async GoogleLogin() {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({ prompt: "select_account" });
            try {
                const result = await signInWithPopup(auth, provider);
                const User = result.user;
                const Path = 'UserData/' + User.uid;
                const Userdata = {
                    uid: User.uid,
                    email: User.email,
                    displayName: User.displayName,
                    photoURL: User.photoURL,
                    metadata: User.metadata,
                };

                if (getData(Path)) {
                    updateData(Path, Userdata);
                } else {
                    createData(Path, Userdata);
                }

            } catch (error) {
                console.error("Google Login error", error.message);

            }
        },
        async GoogleLogout() {
            try {
                await signOut(auth);
            } catch (error) {
                console.error("Google Logout error", error.message);
            }
        },
    }
};
</script>

<style scoped>
.el-tooltip__trigger:focus-visible {
    outline: unset;
}

.ButtonContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.clickable-span {
    cursor: pointer;
    /* 鼠标悬停时变为可点击状态 */
}

.Sour_Gummyn_font {
    font-size: 16px;
    font-family: Josefin Sans, sans-serif;
}

.Sour_Gummyn_font :hover {
    color: rgb(230, 162, 60);
}

.avatarBox {
    width: 50px;
    height: 50px;
    padding: 5px;
}

.LoginButton {
    width: 300px;
    padding: 0;
    margin: 0;
}

.container {
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    height: 50px;
    /* 必须有高度来实现垂直居中 */
    padding: 0;
}

.LoginMobile {
    display: none;
}

@media (max-width: 768px) {
    .Login {
        display: none;
    }

    .LoginMobile {
        display: block;
    }
}
</style>