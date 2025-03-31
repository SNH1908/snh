<template>
    <el-affix :offset="10" style="position: fixed; bottom: 50px; right: 20px;z-index: 10;">
        <div style="display: flex; flex-direction: column; align-items: flex-end;">
            <el-card class="CharCard" v-if="ChatCart">
                <template #header>
                    <el-container>
                        <el-aside width="90%">
                            <h1 style="font-size: 32px;">Help</h1>
                        </el-aside>
                        <el-aside width="50px">
                            <el-button type="info" circle size="large" plain @click="OpenDialog">
                                <el-icon :size="20">
                                    <ZoomIn />
                                </el-icon>
                            </el-button></el-aside>
                    </el-container>
                </template>
                <div style="height: 400px;">
                    <el-scrollbar class="CharCardScrollbar">
                        <h3>We're here to help.</h3>

                        <div class="Charbox" v-for="(item, index) in ChatList" :key="index">
                            <el-container v-if="!item.isUser">
                                <el-aside width="50px"><el-avatar :fit="fit" :src="SNHICON"> SNH </el-avatar></el-aside>
                                <el-aside width="250px">
                                    <div class="UserChatBox">
                                        <span>{{ item.response }}</span>
                                    </div>
                                </el-aside>
                                <el-aside width="50px"></el-aside>
                            </el-container>
                            <el-container v-if="item.isUser">
                                <el-aside width="50px"></el-aside>
                                <el-aside width="250px">
                                    <div class="AiChatBox">
                                        <span>{{ item.response }}</span>
                                    </div>
                                </el-aside>
                                <el-aside width="50px"><el-avatar> user </el-avatar></el-aside>
                            </el-container>
                        </div>
                        <div class="Charbox">
                            <el-container v-if="ResponseLoading" style="margin-top: 10px;">
                                <el-aside width="50px"><el-avatar :fit="fit" :src="SNHICON"> SNH </el-avatar></el-aside>
                                <el-aside width="250px">
                                    <div class="UserChatBox">
                                        <span>{{ LoadingText }}</span>
                                    </div>
                                </el-aside>
                                <el-aside width="50px"></el-aside>
                            </el-container>
                        </div>

                    </el-scrollbar>
                </div>

                <template #footer>
                    <el-input v-model="ChatInput" style="max-width: 70%" placeholder="Type a message"
                        @keyup.enter="fetchCompletion" />

                    <el-button type="info" plain @click="fetchCompletion">
                        <span>Send</span>
                        <el-icon :size="20">
                            <Top />
                        </el-icon>
                    </el-button>

                </template>

            </el-card>
            <el-button type="warning" plain circle class="affix-button" @click="OpenChat">
                <el-icon :size="30" v-if="!ChatCart">
                    <ChatDotSquare />
                </el-icon>
                <el-icon :size="30" v-if="ChatCart">
                    <Close />
                </el-icon>
            </el-button>
            <el-button type="warning" plain circle class="affix-button-mobile" @click="OpenDrawer">
                <el-icon :size="20" v-if="!ChatCart">
                    <ChatDotSquare />
                </el-icon>
                <el-icon :size="20" v-if="ChatCart">
                    <Close />
                </el-icon>
            </el-button>
        </div>
        <!-- Big Char Card -->
        <el-dialog v-model="dialogCharCardVisible" title="Shipping address" width="50vw" :show-close="false"
            align-center style="z-index: 11;">




            <template #header="{ titleId, titleClass }">
                <el-container>
                    <el-aside width="90%">
                        <h1 :id="titleId" :class="titleClass" style="font-size: 32px;">Help</h1>
                    </el-aside>
                    <el-aside width="10%">
                        <el-button type="info" circle size="large" plain @click="OpenDialog" style="float: right;">
                            <el-icon :size="20">
                                <ZoomOut />
                            </el-icon>
                        </el-button>
                    </el-aside>
                </el-container>
            </template>

            <el-container>
                <el-main>
                    <el-scrollbar class="CharCardScrollbar-Large">
                        <h3>We're here to help.</h3>

                        <div class="Charbox-Large" v-for="(item, index) in ChatList" :key="index">
                            <el-container v-if="!item.isUser">
                                <el-aside width="10%"><el-avatar :fit="fit" :src="SNHICON" style="float: right;"> SNH
                                    </el-avatar></el-aside>
                                <el-aside width="80%">
                                    <div class="UserChatBox-Large">
                                        <span>{{ item.response }}</span>
                                    </div>
                                </el-aside>
                                <el-aside width="10%"></el-aside>
                            </el-container>
                            <el-container v-if="item.isUser">
                                <el-aside width="10%"></el-aside>
                                <el-aside width="80%">
                                    <div class="AiChatBox-Large">
                                        <span>{{ item.response }}</span>
                                    </div>
                                </el-aside>
                                <el-aside width="10%"><el-avatar> user </el-avatar></el-aside>
                            </el-container>
                        </div>
                        <div class="Charbox-Large">
                            <el-container v-if="ResponseLoading" style="margin-top: 10px;">
                                <el-aside width="10%"><el-avatar style="float: right;" :fit="fit" :src="SNHICON"> SNH
                                    </el-avatar></el-aside>
                                <el-aside width="80%">
                                    <div class="UserChatBox-Large">
                                        <span>{{ LoadingText }}</span>
                                    </div>
                                </el-aside>
                                <el-aside width="10%"></el-aside>
                            </el-container>
                        </div>

                    </el-scrollbar>
                </el-main>
                <el-footer>
                    <el-scrollbar class="CharCardScrollbar-footer">
                        <div>
                            <el-input v-model="ChatInput" style="max-width: 100%" placeholder="Type a message" :rows="3"
                                type="textarea" @keydown.enter.prevent="handleEnter" />
                        </div>
                        <el-button type="info" plain @click="fetchCompletion" style="float: right;margin-top: 5px;">
                            <span>Send</span>
                            <el-icon :size="20">
                                <Top />
                            </el-icon>
                        </el-button>
                    </el-scrollbar>
                </el-footer>
            </el-container>


        </el-dialog>
    </el-affix>
    <!-- mobile -->
    <el-drawer v-model="AffixDrawer" title="Help" :direction="direction" :before-close="handleClose" size="100%">
        <el-scrollbar class="CharCardScrollbar-mobiler">
            <h3>We're here to help.</h3>

            <div class="Charbox-mobile" v-for="(item, index) in ChatList" :key="index">
                <el-container v-if="!item.isUser">
                    <el-aside width="15%"><el-avatar :fit="fit" :src="SNHICON"> SNH </el-avatar></el-aside>
                    <el-aside width="70%">
                        <div class="UserChatBox">
                            <span>{{ item.response }}</span>
                        </div>
                    </el-aside>
                    <el-aside width="15%"></el-aside>
                </el-container>
                <el-container v-if="item.isUser">
                    <el-aside width="15%"></el-aside>
                    <el-aside width="70%">
                        <div class="AiChatBox">
                            <span>{{ item.response }}</span>
                        </div>
                    </el-aside>
                    <el-aside width="15%"><el-avatar> user </el-avatar></el-aside>
                </el-container>
            </div>
            <div class="Charbox-mobile">
                <el-container v-if="ResponseLoading" style="margin-top: 10px;">
                    <el-aside width="15%"><el-avatar :fit="fit" :src="SNHICON"> SNH </el-avatar></el-aside>
                    <el-aside width="70%">
                        <div class="UserChatBox">
                            <span>{{ LoadingText }}</span>
                        </div>
                    </el-aside>
                    <el-aside width="15%"></el-aside>
                </el-container>
            </div>
        </el-scrollbar>
        <el-scrollbar class="CharCardScrollbar-footer">
            <div>
                <el-input v-model="ChatInput" style="max-width: 100%" placeholder="Type a message" :rows="4"
                    type="textarea" @keydown.enter.prevent="handleEnter" />
            </div>
            <el-button type="info" plain @click="fetchCompletion" style="float: right;margin-top: 5px;">
                <span>Send</span>
                <el-icon :size="20">
                    <Top />
                </el-icon>
            </el-button>
        </el-scrollbar>
    </el-drawer>
</template>


<script>
import '@/assets/MenuStyle.css'
import { getCompletion } from '@/assets/openai.js';
export default {
    data() {
        return {
            ChatInput: '',
            url: require('@/assets/RugsMenu.jpeg'),
            fit: 'cover',
            ChatCart: false,
            ResponseLoading: false,
            LoadingText: '',
            error: '',
            ChatList: [
                { isUser: false, response: 'Welcome to Stylenhomes! \n\nI’m your smart home advisor, here to cure your home design indecision.\n\nWant minimalism, luxury, or the ‘I want it all’ style?\n\nNo worries, I’ve got some solid recommendations for you! ' },

            ],
            dialogCharCardVisible: false,
            direction: 'ltr',
            AffixDrawer: false,
            SNHICON: require('@/assets/webcliplogo.png'),
        };
    },
    methods: {
        handleEnter(event) {
            if (event.shiftKey) {
                // Shift + Enter 让输入框换行
                this.ChatInput += "\n";
            } else {
                // 仅 Enter 提交
                this.fetchCompletion();
            }
        },
        OpenChat() {
            this.ChatCart = !this.ChatCart;
        },
        OpenDrawer() {
            this.ChatCart = false;
            this.dialogCharCardVisible = false;
            this.AffixDrawer = !this.AffixDrawer;
        },
        OpenDialog() {
            this.dialogCharCardVisible = !this.dialogCharCardVisible;
        },
        GetLoadingText() {
            const LoadingTextList = [
                '🤖 Thinking… Please wait.',
                '💭 Our AI assistant is processing your request…',
                '🚀 Working on it, hang tight!',
                '🧐 My brain is working at full speed… Just a moment!',
                '🤓 Let me think… A great answer is on the way!',
                '⏳ Double-checking to give you the best response!',
                '🏗️ Building the perfect answer for you… Almost there!',
                '🧩 Piecing together the best response…',
                '🏃‍♂️ Rushing to bring you the answer… Hang on!',
            ];
            const randomElement = LoadingTextList[Math.floor(Math.random() * LoadingTextList.length)];
            this.LoadingText = randomElement;
        },
        async fetchCompletion() {
            let ChatList = this.ChatList;
            const ChatInput = this.ChatInput;
            this.ChatInput = '';
            ChatList.push({
                isUser: true,
                response: ChatInput,
            });
            this.GetLoadingText();
            this.ResponseLoading = true;
            try {
                const response = await getCompletion(ChatInput);
                ChatList.push({
                    isUser: false,
                    response: response,
                });
            } catch (error) {
                console.log('error:'+error);
                this.error = 'Unable to answer your question.';
                ChatList.push({
                    isUser: false,
                    response: this.error,
                });
            }
            this.ChatList = ChatList;
            this.ResponseLoading = false;
        },

    }
};
</script>

<script setup>
import {
    ChatDotSquare,
    Top,
    Close,
    ZoomIn,
    ZoomOut
} from '@element-plus/icons-vue'
</script>

<style scoped>
.affix {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
}

.CharCardScrollbar {
    width: 350px;
    height: 400px;
}

.CharCardScrollbar-mobiler {
    width: 100%;
    height: 650px;
}

.CharCardScrollbar-footer {
    width: 100%;
    height: 150px;
    border-top: 1px solid rgb(192, 196, 204);
    padding-top: 10px;
}

.CharCardScrollbar-Large {
    width: 100%;
    height: 360px;
}

.CharCardDialog {
    height: 400px;
    border: 1px solid black;
}

.CharCard {
    width: 400px;
    margin-bottom: 10px;
    margin-right: 35px;
}

.affix-button {
    margin-right: 50px;
    width: 60px;
    height: 60px;
}

.affix-button-mobile {
    width: 40px;
    height: 40px;
    display: none;
}

.el-header,
.el-footer {
    min-height: 60px;
    /* 默认高度 */
    height: auto;
    /* 允许高度随着内容增长 */
}

.Charbox {
    width: 100%;
    padding: 0;
    margin-top: 10px;
    max-width: 300px;
}

.Charbox-mobile {
    width: 100%;
    padding: 0;
    margin-top: 10px;
}

.Charbox-Large {
    width: 100%;
    padding: 0;
    margin-top: 10px;
}

.UserChatBox {
    max-width: 240px;
    min-width: 200px;
    min-height: 60px;
    border: 1px solid lightgray;
    border-radius: 0px 20px 20px 20px;
    padding: 10px;
    float: left;
    white-space: pre-wrap;
}

.UserChatBox-Large {
    max-width: 540px;
    min-width: 200px;
    min-height: 60px;
    border: 1px solid lightgray;
    border-radius: 0px 20px 20px 20px;
    padding: 10px;
    float: left;
    margin-left: 10px;
    white-space: pre-wrap;
}

.AiChatBox {
    min-width: 200px;
    max-width: 240px;
    min-height: 60px;
    border: 1px solid lightgray;
    background-color: rgb(217, 253, 211);
    border-radius: 20px 0px 20px 20px;
    padding: 10px;
    margin-right: 10px;
    float: right;
}

.AiChatBox-Large {
    min-width: 200px;
    max-width: 540px;
    min-height: 60px;
    border: 1px solid lightgray;
    background-color: rgb(217, 253, 211);
    border-radius: 20px 0px 20px 20px;
    padding: 10px;
    margin-right: 10px;
    float: right;
}

@media (max-width: 1000px) {
    .affix-button {
        display: none;
    }

    .affix-button-mobile {
        display: block;
    }
}
</style>