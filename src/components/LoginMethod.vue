<template>
    <div class="Login">
        <div v-if="!user">
            <el-container>
                <el-aside width="120px" @click="LoginVisible = true">
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
                <el-aside width="90px" @click="LoginVisible = true">
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
                                    <el-avatar v-if="user.photoURL" :src="user.photoURL" />
                                    <el-avatar v-else> user </el-avatar>
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
                                <el-dropdown-item>
                                    <span class="Sour_Gummyn_font" v-if="user.displayName">Welcome, {{ user.displayName
                                    }}</span>
                                    <span class="Sour_Gummyn_font" v-else>Welcome, {{ user.email }}</span>
                                </el-dropdown-item>
                                <el-dropdown-item :icon="Avatar" divided><span class="Sour_Gummyn_font_text">My
                                        Account</span></el-dropdown-item>
                                <el-dropdown-item :icon="Present" @click="OrderDialogVisible = true"><span
                                        class="Sour_Gummyn_font_text">My
                                        Order</span></el-dropdown-item>
                                <el-dropdown-item :icon="StarFilled"><a @click="goToPage('ListsPage')"><span
                                            class="Sour_Gummyn_font_text">Lists</span></a></el-dropdown-item>
                                <el-dropdown-item :icon="Timer"><a @click="goToPage('Viewed')"><span
                                            class="Sour_Gummyn_font_text">Recently
                                            Viewed</span></a></el-dropdown-item>
                                <el-dropdown-item :icon="WarningFilled"><a href="/QuestionsAnswers"><span
                                            class="Sour_Gummyn_font_text">Help
                                            Contact</span></a></el-dropdown-item>
                                <el-dropdown-item :icon="SwitchButton" @click="Logout" divided><span
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
                                    <p>Cart</p>
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
                <el-aside width="50px" @click="LoginVisible = true">
                    <div class="avatarBox">
                        <el-button circle size="large">
                            <el-icon size="15px">
                                <UserFilled />
                            </el-icon>
                        </el-button>
                    </div>
                </el-aside>
                <el-aside width="50px" @click="LoginVisible = true">
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
                                <el-dropdown-item :icon="SwitchButton" @click="Logout"><span
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
    <el-dialog v-model="LoginVisible" width="500">
        <div class="ButtonContainer">
            <div class="ButtonContainer-el-tabs">
                <el-tabs v-model="activeName" stretch>
                    <el-tab-pane label="Login" name="first" class="EmailLoginFrom">
                        <el-form :model="LoginForm" label-width="auto">
                            <el-form-item label="Email address">
                                <el-input v-model="LoginForm.Email" />
                            </el-form-item>
                            <el-form-item label="Password">
                                <el-input type="password" show-password v-model="LoginForm.Password" />
                            </el-form-item>
                        </el-form>
                        <div class="ButtonContainer">
                            <el-button plain class="LoginButton" color="#626aef"
                                @click="LoginWithEmail">Login</el-button>
                            <span class="ResetPasswordText">Forgot password? Click here to reset password</span>
                        </div>

                    </el-tab-pane>
                    <el-tab-pane label="Register" name="second">
                        <el-form :model="RegisterForm" label-width="auto" class="EmailLoginFrom">
                            <el-form-item label="User name">
                                <el-input v-model="RegisterForm.Name" />
                            </el-form-item>
                            <el-form-item label="Email address">
                                <el-input v-model="RegisterForm.Email" />
                            </el-form-item>
                            <el-form-item label="Password">
                                <el-input type="password" show-password v-model="RegisterForm.Password" />
                            </el-form-item>
                            <el-form-item label="Confirm Password">
                                <el-input type="password" show-password v-model="RegisterForm.ConfirmPassword" />
                            </el-form-item>
                            <el-form-item label="Phone">
                                <el-input v-model="RegisterForm.Phone">
                                    <template #prepend>
                                        <el-select v-model="CountrySelect" placeholder="Select Country"
                                            style="width: 120px">
                                            <el-option v-for="item in countryCodes" :key="item.value"
                                                :label="item.label" :value="item.value" />
                                        </el-select>
                                    </template>
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <div class="ButtonContainer">
                            <el-button plain class="LoginButton" color="rgb(232, 139, 59)"
                                @click="RegisterWithEmail">Register</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <el-divider>
                <p>Log in another method</p>
            </el-divider>
            <div class="ExtraButton">
                <el-button plain circle size="large" v-for="(item, index) in LogoList" :key="index"
                    @click="Login(item.name)">
                    <el-image style="width: 20px; height: 20px" :src="item.icon" :fit="fit" />
                </el-button>
            </div>
        </div>
    </el-dialog>
    <el-dialog v-model="OrderDialogVisible" title="Track Order" width="500" align-center>
        <el-container>
            <el-aside width="150px" v-for="(item, index) in TrackOrderList" :key="index">
                <el-image class="CursorPointer clickable-span" style="width: 100%; height: 50px" :src="item.Image"
                    :fit="fit" @click="openWindow(item.url)" />
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
import { ref } from 'vue'
const activeName = ref('first')


</script>
<script>
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    TwitterAuthProvider,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { auth } from "@/firebase";
import { useUser } from "../auth";
import { ElMessage } from 'element-plus'
import { getData, createData, updateData } from '@/services/firebaseService';

export default {
    name: "SNH-Login",
    data() {
        return {
            LoginForm: {},
            RegisterForm: {},
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
            LogoList: [
                { name: 'Google', icon: require("@/assets/g-logo.png") },
                { name: 'Github', icon: require("@/assets/github-mark.png") },
                { name: 'Twitter', icon: require("@/assets/logo-black.png") },
            ],
            countryCodes: [
                { label: 'Argentina (+54)', value: '+54' },
                { label: 'Australia (+61)', value: '+61' },
                { label: 'Austria (+43)', value: '+43' },
                { label: 'Bangladesh (+880)', value: '+880' },
                { label: 'Belgium (+32)', value: '+32' },
                { label: 'Brazil (+55)', value: '+55' },
                { label: 'Canada (+1)', value: '+1' },
                { label: 'Chile (+56)', value: '+56' },
                { label: 'China (+86)', value: '+86' },
                { label: 'Colombia (+57)', value: '+57' },
                { label: 'Denmark (+45)', value: '+45' },
                { label: 'Egypt (+20)', value: '+20' },
                { label: 'Finland (+358)', value: '+358' },
                { label: 'France (+33)', value: '+33' },
                { label: 'Germany (+49)', value: '+49' },
                { label: 'Greece (+30)', value: '+30' },
                { label: 'India (+91)', value: '+91' },
                { label: 'Indonesia (+62)', value: '+62' },
                { label: 'Ireland (+353)', value: '+353' },
                { label: 'Israel (+972)', value: '+972' },
                { label: 'Italy (+39)', value: '+39' },
                { label: 'Japan (+81)', value: '+81' },
                { label: 'Kenya (+254)', value: '+254' },
                { label: 'Malaysia (+60)', value: '+60' },
                { label: 'Mexico (+52)', value: '+52' },
                { label: 'Netherlands (+31)', value: '+31' },
                { label: 'New Zealand (+64)', value: '+64' },
                { label: 'Nigeria (+234)', value: '+234' },
                { label: 'Norway (+47)', value: '+47' },
                { label: 'Pakistan (+92)', value: '+92' },
                { label: 'Peru (+51)', value: '+51' },
                { label: 'Philippines (+63)', value: '+63' },
                { label: 'Portugal (+351)', value: '+351' },
                { label: 'Russia (+7)', value: '+7' },
                { label: 'Saudi Arabia (+966)', value: '+966' },
                { label: 'Singapore (+65)', value: '+65' },
                { label: 'South Africa (+27)', value: '+27' },
                { label: 'South Korea (+82)', value: '+82' },
                { label: 'Spain (+34)', value: '+34' },
                { label: 'Sweden (+46)', value: '+46' },
                { label: 'Switzerland (+41)', value: '+41' },
                { label: 'Thailand (+66)', value: '+66' },
                { label: 'Turkey (+90)', value: '+90' },
                { label: 'United Arab Emirates (+971)', value: '+971' },
                { label: 'United Kingdom (+44)', value: '+44' },
                { label: 'United States (+1)', value: '+1' },
                { label: 'Vietnam (+84)', value: '+84' }
            ],
            CountrySelect: '',
        };
    },
    created() {
    },
    methods: {
        goToPage(Value) {
            this.activeNames = ['0'];
            this.$router.push({
                name: Value,
            }).then(() => {
                document.body.scrollTo(0, 0);
            });
        },
        async LoginWithEmail() {
            const UserFrom = this.LoginForm;
            const emailInput = UserFrom.Email;
            const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
            const allowedSpecialCharsRegex = /^[a-zA-Z0-9._+-@]+$/;

            if (!emailInput) {
                ElMessage({
                    message: 'Email field cannot be empty.',
                    type: 'warning',
                })
                return;
            } else if (!emailRegex.test(emailInput)) {
                ElMessage({
                    message: 'Invalid email format.',
                    type: 'warning',
                })
                return;
            } else if (!allowedSpecialCharsRegex.test(emailInput)) {
                ElMessage.error('Email contains invalid special characters.')
                return;
            }
            if (!this.LoginForm.Password) {
                ElMessage({
                    message: 'Password field cannot be empty.',
                    type: 'warning',
                })
                return;
            }
            try {
                const userCredential = await signInWithEmailAndPassword(auth, emailInput, UserFrom.Password);

                ElMessage({
                    message: `Welcome! ${userCredential.user.email}`,
                    type: 'success',
                })

                const User = userCredential.user;
                const Path = 'UserData/' + User.uid;
                const Userdata = {
                    metadata: User.metadata,
                };

                if (getData(Path)) {
                    updateData(Path, Userdata);
                } else {
                    createData(Path, Userdata);
                }
                this.LoginVisible = false
            } catch (error) {
                console.error("Login error", error.message);
            }
        },
        async RegisterWithEmail() {
            const UserFrom = this.RegisterForm;
            if (!UserFrom.Name) {
                ElMessage({
                    message: 'Name field cannot be empty.',
                    type: 'warning',
                })
                return;
            }

            const emailInput = UserFrom.Email;
            const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
            const allowedSpecialCharsRegex = /^[a-zA-Z0-9._+-@]+$/;

            if (!emailInput) {
                ElMessage({
                    message: 'Email field cannot be empty.',
                    type: 'warning',
                })
                return;
            } else if (!emailRegex.test(emailInput)) {
                ElMessage({
                    message: 'Invalid email format.',
                    type: 'warning',
                })
                return;
            } else if (!allowedSpecialCharsRegex.test(emailInput)) {
                ElMessage.error('Email contains invalid special characters.')
                return;
            }

            if (!UserFrom.Password) {
                ElMessage({
                    message: 'Password field cannot be empty.',
                    type: 'warning',
                })
                return;
            }

            if (UserFrom.ConfirmPassword != UserFrom.Password) {
                ElMessage.error('The passwords you entered twice do not match')
                return;
            }

            if (!UserFrom.Phone) {
                ElMessage({
                    message: 'Phone field cannot be empty.',
                    type: 'warning',
                })
                return;
            }
            const MergePhone = this.CountrySelect + UserFrom.Phone;
            const phoneNumber = parsePhoneNumberFromString(MergePhone);
            if (!phoneNumber || !phoneNumber.isValid()) {
                ElMessage({
                    message: 'Please enter a valid phone number.',
                    type: 'warning',
                })
                return;
            }

            // await createData(Path, DataForm);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, UserFrom.Email, UserFrom.Password);

                ElMessage({
                    message: 'Register success! ',
                    type: 'success',
                })
                const User = userCredential.user;
                const Path = 'UserData/' + User.uid;
                let UserPhoto = '';
                if (User.photoURL) {
                    UserPhoto = User.photoURL;
                }

                const Userdata = {
                    uid: User.uid,
                    email: User.email,
                    displayName: UserFrom.Name,
                    photoURL: UserPhoto,
                    metadata: User.metadata,
                    phone: UserFrom.Phone,
                };

                if (getData(Path)) {
                    updateData(Path, Userdata);
                } else {
                    createData(Path, Userdata);
                }
                this.LoginVisible = false
            } catch (error) {
                console.error("Register error", error.message);
            }

        },
        openWindow(value) {
            if (value != '#') {
                window.open(value, '_blank');
            }
        },
        async Login(providerType) {
            const googleProvider = new GoogleAuthProvider();
            const githubProvider = new GithubAuthProvider();
            const twitterProvider = new TwitterAuthProvider();

            let provider;
            switch (providerType) {
                case "Google":
                    provider = googleProvider;
                    break;
                case "Github":
                    provider = githubProvider;
                    break;
                case "Twitter":
                    provider = twitterProvider;
                    break;
                default:
                    return;
            }
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
                this.LoginVisible = false;
            } catch (error) {
                console.error("Login error", error.message);

            }
        },
        async GithubLogin() {
            const provider = new GithubAuthProvider();
            provider.setCustomParameters({ prompt: "select_account" });
            try {
                const result = await signInWithPopup(auth, provider);
                const User = result.user;
                console.log("user:" + JSON.stringify(User));
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
                console.error("Github Login error", error.message);

            }
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
        async Logout() {
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
.EmailLoginFrom {
    margin-top: 20px;
    margin-bottom: 10px;
}

.el-tooltip__trigger:focus-visible {
    outline: unset;
}

.ButtonContainer-el-tabs {
    width: 80%;
    height: auto;
}

.ResetPasswordText {
    font-size: 12px;
    color: lightgray;
    margin-top: 5px;
}

.ExtraButton {
    display: flex;
    justify-content: center;
    gap: 10px;
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
    margin: 10px 0px 0px 0px;
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
