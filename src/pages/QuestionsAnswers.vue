<template>
    <MainLayout>
        <div class="MainDiv">
            <div class="QuestionsAnswersPage Josefin-font">
                <div>
                    <div class="text-block-4">Questions Answers</div>
                    <img src="@/assets/underline.svg" loading="lazy" alt="" class="underline" />
                    <div class="SNH_font03" style="margin-bottom: 50px;">
                        If you have any further questions or need assistance, please don't hesitate to contact our
                        customer support team. We are here to help!
                    </div>
                </div>

                <div class="demo-collapse">
                    <el-collapse v-model="activeNames" accordion>
                        <el-collapse-item title="How can I place an order?" name="1" :icon="CaretRight">
                            <div class="SNH_font03">
                                To place an order, simply browse our selection of interior design products and add your
                                desired items to your cart. Proceed to the checkout page, enter your shipping and
                                payment information, and confirm your order.
                            </div>
                        </el-collapse-item>

                        <el-collapse-item title="What payment methods do you accept?" name="2" :icon="CaretRight">
                            <div class="SNH_font03">We accept major credit cards, such as Visa, Mastercard, American
                                Express, and Discover. We also offer payment options through PayPal and other secure
                                payment gateways.</div>
                        </el-collapse-item>

                        <el-collapse-item title="Do you offer international shipping?" name="3" :icon="CaretRight">
                            <div class="SNH_font03">At the moment, we only offer shipping within the continental United
                                States. We do not currently ship internationally.</div>
                        </el-collapse-item>

                        <el-collapse-item title="How long does it take to process and ship an order?" name="4"
                            :icon="CaretRight">
                            <div class="SNH_font03">We typically require business days to process and prepare your order
                                for shipment. Please note that this does not include weekends or holidays. Once your
                                order has been shipped, you will receive a confirmation email with tracking information.
                            </div>
                        </el-collapse-item>

                        <el-collapse-item title="How much does shipping cost?" name="5" :icon="CaretRight">
                            <div class="SNH_font03">Shipping costs are calculated based on the total weight of your
                                order and the destination address. The shipping cost will be displayed during the
                                checkout process before you complete your purchase.</div>
                        </el-collapse-item>

                        <el-collapse-item title="Can I track my order?" name="6" :icon="CaretRight">
                            <div class="SNH_font03">Yes, you can track your order using the tracking number provided in
                                the shipping confirmation email. Simply click on the tracking link or enter the tracking
                                number on the carrier's website to view the status and location of your package.</div>
                        </el-collapse-item>

                        <el-collapse-item title="What is your return policy?" name="7" :icon="CaretRight">
                            <div class="SNH_font03">We want you to be completely satisfied with your purchase. If for
                                any reason you are not, we offer a [X]-day return policy. Please refer to our Returns
                                and Exchanges Policy for detailed instructions on how to initiate a return, eligibility
                                criteria, and any associated fees.</div>
                        </el-collapse-item>

                        <el-collapse-item title="Are returns free?" name="8" :icon="CaretRight">
                            <div class="SNH_font03">In most cases, customers are responsible for return shipping costs
                                unless the return is due to a mistake on our part or a defective product. Please review
                                our Returns and Exchanges Policy for further details.</div>
                        </el-collapse-item>

                        <el-collapse-item title="Can I cancel or modify my order?" name="9" :icon="CaretRight">
                            <div class="SNH_font03">We strive to process and ship orders as quickly as possible. If you
                                need to cancel or modify your order, please contact our customer support team
                                immediately. We will do our best to accommodate your request, but we cannot guarantee
                                changes once an order has been processed.</div>
                        </el-collapse-item>

                        <el-collapse-item title="What if I receive a damaged or defective product?" name="10"
                            :icon="CaretRight">
                            <div class="SNH_font03">We take great care in packaging and shipping our products, but if
                                you receive a damaged or defective item, please contact us within [X] days of delivery.
                                We will guide you through the return and exchange process and work towards a
                                satisfactory resolution.</div>
                        </el-collapse-item>

                        <el-collapse-item title="Can I request a specific delivery date or time?" name="11"
                            :icon="CaretRight">
                            <div class="SNH_font03">Unfortunately, we cannot guarantee specific delivery dates or times
                                as they are subject to the shipping carrier's schedule and other external factors.
                                However, you can track your shipment using the provided tracking number to get an
                                estimated delivery window.</div>
                        </el-collapse-item>

                        <el-collapse-item title="Do you offer installation services for your interior design products?"
                            name="12" :icon="CaretRight">
                            <div class="SNH_font03">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
                                posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In
                                dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,</div>
                        </el-collapse-item>

                        <el-collapse-item title="have other questions?" name="13" :icon="CaretRight">
                            <div class="SNH_font01">
                                Tell us your question
                            </div>
                            <div class="QuestionBox">
                                <el-input v-model="textarea" style="width: 600px" :autosize="{ minRows: 5, maxRows: 10 }"
                                type="textarea" placeholder="Please input your questions." />
                            </div>
                            <div class="QuestionBox">
                                <el-button class="QuestionBtn" plain>Submit</el-button>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>

    </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import "@/assets/TextPaperStyle.css";


export default {
    name: "SNH-QuestionsAnswers",
    components: {
        MainLayout,
    },
};
</script>

<script setup>
import { ref } from 'vue'
import { CaretRight } from '@element-plus/icons-vue'
const activeNames = ref('0')
const textarea = ref('')
</script>

<style>
/* 调整标题文字大小、行高 */
.el-collapse-item__header {
  line-height: 1;  /* 标题行高 */
  font-size: 15px;
  text-align: left;
}
</style>

<style scoped>
.icon-ele {
    margin: 0 8px 0 auto;
    color: #409eff;
}

.demo-collapse {
    width: 100%;
    background-color: rgb(243, 242, 238);
    margin-bottom: 150px;
}

.QuestionBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.QuestionBtn{
    margin-top: 20px;
    width: 150px;
}
.QuestionsAnswersPage {
    width: 80%;
    height: auto;
    color: rgb(34, 63, 97);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>