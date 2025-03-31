<template>
    <div class="common-layout">
        <div>
            <el-container>
                <el-aside width="15%" style="margin-left: 70px">
                    <div class="Footer_Titlebox">
                        <div class="Titlebox-Title">About Us</div>
                        <p><span>Forum</span></p>
                        <p><span>About SNH</span></p>
                        <p><span>Project Solution</span></p>
                        <p><span>View sample plan</span></p>
                    </div>
                </el-aside>
                <el-aside width="15%">
                    <div class="Footer_Titlebox">
                        <div class="Titlebox-Title">Support</div>
                        <p><span><a href="/Download">Download</a></span></p>
                        <p><span><a href="/QuestionsAnswers">Common Problem</a></span></p>
                        <p><span>
                                <a href="https://maps.app.goo.gl/TxtiPE5rkJbKgxCf8">Place of Purchase</a></span>
                        </p>
                        <p><span><a href="/legal">Terms & Conditions</a></span></p>
                    </div>
                </el-aside>
                <el-aside width="15%">
                    <div class="Footer_Titlebox">
                        <div class="Titlebox-Title">Customer Service</div>
                        <p><span>My Orders</span></p>
                        <p><span>My Account</span></p>
                        <p><span @click="OrderDialogVisible = true">Track My Order</span></p>
                        <p><span><a href="/legal">Return Policy</a></span></p>
                        <p><span><a href="/legal">Logistics Policy</a></span></p>
                    </div>
                </el-aside>
                <el-aside width="15%">
                    <div class="Footer_Titlebox">
                        <div class="Titlebox-Title">Contact Us</div>
                        <div>
                            <el-button class="Titlebox-btn" type="info" size="large" :icon="Message" round
                                @click="centerDialogVisible = true" plain>
                                Email
                            </el-button>
                        </div>
                        <div>
                            <a href="tel:+1(510)579-7382">
                                <el-button class="Titlebox-btn" type="info" size="large" :icon="Phone" round
                                    plain>Message</el-button>
                            </a>
                        </div>
                        <div>
                            <a href="https://maps.app.goo.gl/TxtiPE5rkJbKgxCf8">
                                <el-button class="Titlebox-btn" type="info" size="large" :icon="Location" round
                                    plain>Location</el-button>
                            </a>
                        </div>
                    </div>
                </el-aside>
                <el-aside width="40%">
                    <div class="Footer_AboutUsBox">
                        <div class="Footer_font01">Subscribe</div>
                        <p class="SNH_font03">Subscribe to our latest news and offers</p>
                        <div>
                            <el-input v-model="SubscribeEmail" class="Footer_input"
                                placeholder="Please enter your email " clearable />
                        </div>
                        <el-button size="large" plain @click="SubmitSubscribe">SUBSCRIBE</el-button>
                    </div>
                </el-aside>
            </el-container>
        </div>
        <div class="Footer_CopyrightInformationBox">
            <el-divider border-style="double" />
            <el-container>
                <el-aside width="50%">
                    <p class="SNH_font03">
                        Privacy Policy | Terms and Conditions | Cookie Policy
                    </p>
                    <div style="margin-top: 20px;">
                        <el-container>
                            <el-aside width="60px" v-for="(item, index) in logolist" :key="index">
                                <el-image class="CursorPointer" style="width: 100%; height: 25px" :src="item.Image"
                                    :fit="fit" @click="openWindow(item.url)" />
                            </el-aside>
                        </el-container>
                    </div>
                </el-aside>
                <el-aside width="50%">
                    <div style="float: right;margin-right: 100px;">
                        <div class="Footer_Endbox">
                            <el-image style="width: 200px; height: 50px" :src="url" :fit="fit" />
                            <p>© 2024 Stylenhomes - All Rights Reserved.</p>
                            <p>Made with ❤️ by Styles&Homes LLC.</p>
                            <div class="Footer-logo"></div>
                        </div>
                    </div>
                </el-aside>
            </el-container>
        </div>
    </div>
    <!-- mobile -->
    <div class="common-layout-mobile">
        <el-divider border-style="double" />
        <div style="
        text-align: center;
        background-color: white;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 25px;
      ">
            <div class="Footer_font01">Subscribe</div>
            <p class="SNH_font03">Subscribe to our latest news and offers</p>
            <div>
                <el-input v-model="SubscribeEmail" class="Footer_input" placeholder="Please enter your email " clearable />
            </div>
            <el-button size="large" plain @click="SubmitSubscribe">SUBSCRIBE</el-button>
        </div>
        <div class="demo-collapse">
            <el-collapse v-model="activeNames">
                <el-collapse-item title="About Us" name="1">
                    <div style="width: 100%;">
                        <p><span>Forum</span></p>
                        <p><span>About SNH</span></p>
                        <p><span>Project Solution</span></p>
                        <p><span>View sample plan</span></p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Support" name="2">
                    <div style="width: 100%;">
                        <p><span><a href="/Download">Download</a></span></p>
                        <p><span><a href="/QuestionsAnswers">Common Problem</a></span></p>
                        <p><span>
                                <a href="https://maps.app.goo.gl/TxtiPE5rkJbKgxCf8">Place of Purchase</a></span>
                        </p>
                        <p><span><a href="/legal">Terms & Conditions</a></span></p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Customer Service" name="3">
                    <div style="width: 100%;">
                        <p><span>My Orders</span></p>
                        <p><span>My Account</span></p>
                        <p><span @click="OrderDialogVisibleM = true">Track My Order</span></p>
                        <p><span><a href="/legal">Return Policy</a></span></p>
                        <p><span><a href="/legal">Logistics Policy</a></span></p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Contact Us" name="4">
                    <div>

                        <el-button class="Titlebox-btn" type="info" size="large" :icon="Message" round
                            @click="centerDialogVisibleM = true" plain>
                            Email
                        </el-button>
                    </div>
                    <div>
                        <a href="tel:+1(510)579-7382">
                            <el-button class="Titlebox-btn" type="info" size="large" :icon="Phone" round
                                plain>Message</el-button>
                        </a>
                    </div>
                    <div>
                        <a href="https://maps.app.goo.gl/TxtiPE5rkJbKgxCf8">
                            <el-button class="Titlebox-btn" type="info" size="large" :icon="Location" round plain>Find
                                US</el-button>
                        </a>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div style="text-align: center;padding-bottom: 30px;">
            <div class="Footer_Endbox">
                <el-image style="width: 200px; height: 50px;margin-top: 20px;" :src="url" :fit="fit" />


                <p style="margin-bottom: 15px;margin-top: 10px;font-size: 12px;">© 2024 Stylenhomes All Rights Reserved.
                </p>
                <p style="font-size: 14px;margin-bottom: 20px;">
                    Privacy Policy | Terms and Conditions | Cookie Policy
                </p>
                <div style="margin-bottom: 30px;">
                    <span style="width: 60px;" v-for="(item, index) in logolist" :key="index">
                        <el-image class="CursorPointer" style="width: 60px; height: 20px" :src="item.Image" :fit="fit"
                            @click="openWindow(item.url)" />
                    </span>
                </div>
                <div class="Footer-logo"></div>
            </div>
        </div>
    </div>
    <el-dialog v-model="OrderDialogVisible" title="Track Order" width="500" align-center>
        <el-container>
            <el-aside width="150px" v-for="(item, index) in TrackOrderList" :key="index">
                <el-image class="CursorPointer" style="width: 100%; height: 50px" :src="item.Image" :fit="fit"
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
    <el-dialog v-model="centerDialogVisible" title="Our Email" width="500" align-center>
        <el-table :data="gridData" @row-click="copyText">
            <el-table-column property="email" label="" width="400" />
        </el-table>
    </el-dialog>
    <el-dialog v-model="centerDialogVisibleM" title="Our Email" width="300" align-center>
        <el-table :data="gridData" @row-click="copyText">
            <el-table-column property="email" label="" width="250" />
        </el-table>
    </el-dialog>
</template>

<script>
import { ElNotification } from 'element-plus'
import { createData } from '@/services/firebaseService';
import { v4 as uuidv4 } from 'uuid';
export default {
    name: "SNH-Footer",
    data() {
        return {
            logolist: [
                { Image: require("@/assets/facebook-logo.png"), url: "https://www.facebook.com/harmeet.anand.374" },
                { Image: require("@/assets/instagram-logo.png"), url: "#" },
                { Image: require("@/assets/linkedin-logo.png"), url: "https://www.linkedin.com/company/stylenhomes/?viewAsMember=true" },
                { Image: require("@/assets/twitter-logo.png"), url: "#" },
                { Image: require("@/assets/youtube-logo.png"), url: "https://www.youtube.com/@Stylesnhomes" },
            ],
            TrackOrderList: [
                { Image: require("@/assets/FedExlogo.png"), url: "https://www.fedex.com.cn/en-ca/tracking.html" },
                { Image: require("@/assets/ups-logo.svg"), url: "https://www.ups.com/track?loc=en_HK&requester=ST/" },
                { Image: require("@/assets/dhl-logo.svg"), url: "https://www.dhl.com/us-en/home.html" },
            ],
            SubscribeEmail: '',
            fit: "contain",
            url: require("@/assets/logo.png"),
            centerDialogVisible: false,
            centerDialogVisibleM: false,
            OrderDialogVisible: false,
            OrderDialogVisibleM: false,
            gridData: [
                { email: 'shcalifornia@yahoo.com' },
                { email: 'sehejbir@stylenhomes.com' },
                { email: 'andrew@stylenhomes.com' },
            ],
        };
    },
    methods: {
        async SubmitSubscribe() {
            if (this.SubscribeEmail == '') {
                ElNotification({
                    message: 'Please enter a valid email address.',
                    duration: 1000,
                })
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.SubscribeEmail)) {
                ElNotification({
                    message: 'Please enter a valid email address.',
                    duration: 1000,
                })
                return;
            }
            const uniqueEmailIDName = `${Date.now()}-${uuidv4()}`;
            const Path = 'Subscribe/' + uniqueEmailIDName;
            let EmailData = { Email: this.SubscribeEmail };
            await createData(Path, EmailData);
            this.SubscribeEmail = '';
            ElNotification({
                message: 'Thanks for subscribing',
                duration: 1000,
            })
        },
        openWindow(value) {
            if (value === '#') {
                return;
            }
            window.open(value, '_blank');
        },
        copyText(value) {
            const textToCopy = value.email;
            // 使用 Clipboard API 复制内容到剪切板
            navigator.clipboard
                .writeText(textToCopy)
                .then(() => {
                    ElNotification({
                        message: 'Copied!',
                        duration: 500,
                    })
                })
                .catch((err) => {
                    console.error("复制失败：", err);
                });
        },
    }
};
</script>

<script setup>
import { ref } from "vue";
import { Phone, Message, Location } from "@element-plus/icons-vue";

const activeNames = ref(["4"]);

</script>


<style scoped>
.CursorPointer {
    cursor: pointer;
}

.Footer_Titlebox span {
    cursor: pointer;
    /* 鼠标悬停时变为可点击状态 */
}

.el-collapse :deep(.el-collapse-item) {
    margin-left: 20px;
    margin-right: 20px;
}

.Footer_font01 {
    margin-top: 40px;
    font-size: 32px;
    font-weight: 800;
    color: rgb(34, 63, 97);
    font-family: Josefin Sans, sans-serif;
}

.SNH_font02 {
    margin-top: 20px;
    font-size: 16px;
    font-family: Josefin Sans, sans-serif;
}

.SNH_font03 {
    font-size: 14px;
    color: gray;
    font-family: Josefin Sans, sans-serif;
}

.Titlebox-btn {
    margin-top: 10px;
}

.Footer_input {
    width: 360px;
    height: 46px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.common-layout {
    width: 100%;
    height: auto;
    margin-bottom: 0px;
    background-color: rgb(245, 245, 245);
}

.common-layout-mobile {
    width: 100%;
    height: auto;
    margin-bottom: 0px;
    background-color: rgb(245, 245, 245);
}

.demo-collapse {
    width: 100%;
    background-color: white;
}

.Footer_Titlebox {
    width: 100%;
    height: 240px;
}

.Footer_Titlebox p {
    margin-top: 10px;
    font-size: 16px;
    color: gray;
    font-family: Josefin Sans, sans-serif;
}

.Footer_Titlebox p span:hover {
    color: black;
}

.Titlebox-Title {
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 800;
    color: rgb(34, 63, 97);
    font-family: Josefin Sans, sans-serif;
}

.Footer_Endbox {
    height: auto;
    text-align: center;
}

.Footer_AboutUsBox {
    width: 100%;
    height: 240px;
}

.Footer_CopyrightInformationBox {
    margin: 0;
    width: 100%;
    height: auto;
    padding: 20px 20px;
}
</style>
