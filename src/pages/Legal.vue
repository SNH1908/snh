<template>
    <MainLayout>
        <div class="MainDiv">
            <div class="LegalPage Josefin-font">
                <div>
                    <div class="text-block-4">LEGAL</div>
                    <img src="@/assets/underline.svg" loading="lazy" alt="" class="underline" />
                </div>

                <div class="demo-collapse">
                    <el-collapse v-model="activeNames">
                        <el-collapse-item title="Privacy Policy" name="1" :icon="CaretRight">
                            <div class="SNH_font01">
                                Privacy Policy
                            </div>
                            <div class="SNH_font03">
                                We are committed to protecting the privacy and personal information of our customers.
                                This Privacy Policy outlines how we collect, use, disclose, and protect your personal
                                information when you use our ecommerce platform to purchase interior design products. By
                                accessing and using our platform, you consent to the practices described in this policy.
                            </div>
                            <div class="SNH_font02">
                                1. Information We Collect:
                            </div>
                            <div class="SNH_font03">
                                a. Personal Information: When you place an order or create an account on our platform,
                                we may collect personal information such as your name, email address, shipping address,
                                billing address, and contact information.

                                b. Payment Information: To process your payment, we collect payment details such as
                                credit card information, billing address, and other payment-related data. However,
                                please note that we do not store or have access to complete payment details, as they are
                                handled securely by our trusted payment processors.

                                c. Communication Information: We may collect information related to your communication
                                with us, including emails, customer support inquiries, and feedback.
                            </div>
                            <div class="SNH_font02">2. Use of Personal Information:</div>
                            <div class="SNH_font03">a. Order Processing and Fulfillment: We use your personal
                                information to process and fulfill your orders, including shipping the products to the
                                provided address and communicating order-related information.

                                b. Customer Support: We may use your personal information to respond to your inquiries,
                                provide customer support, and address any issues or concerns you may have.

                                c. Marketing Communications: With your consent, we may send you promotional emails or
                                newsletters about our products, special offers, or updates. You can opt-out of these
                                communications at any time.

                                d. Legal Obligations: We may use or disclose your personal information as required by
                                law, regulations, legal proceedings, or governmental requests.

                                ‍</div>

                            <div class="SNH_font02">3. Protection of Personal Information:</div>
                            <div class="SNH_font03">a. Data Security: We implement reasonable security measures to
                                protect your personal information from unauthorized access, disclosure, alteration, or
                                destruction.

                                b. Data Retention: We retain your personal information for as long as necessary to
                                fulfill the purposes outlined in this Privacy Policy, unless a longer retention period
                                is required or permitted by law.

                                c.User data deletion
                                If you wish to delete your personal data, please visit the user data deletion page for
                                detailed steps.

                                ‍</div>

                            <div class="SNH_font02">4. Sharing of Personal Information:</div>
                            <div class="SNH_font03">a. Third-Party Service Providers: We may share your personal
                                information with trusted third-party service providers who assist us in operating our
                                platform, processing payments, shipping products, or providing other services. These
                                service providers have access to personal information solely for the purpose of
                                performing their duties and are bound by confidentiality obligations.

                                b. Legal Compliance: We may disclose your personal information to comply with applicable
                                laws, regulations, or legal processes, or to respond to lawful requests from public
                                authorities.

                                ‍</div>

                            <div class="SNH_font02">5. Cookies and Tracking Technologies:</div>
                            <div class="SNH_font03">We may use cookies and similar tracking technologies to enhance your
                                browsing experience, analyze usage patterns, and personalize content. You have the
                                option to disable cookies through your browser settings, but please note that certain
                                features of our platform may not function properly without cookies.

                                ‍</div>

                            <div class="SNH_font02">6. Children's Privacy:</div>
                            <div class="SNH_font03">Our platform is not intended for use by individuals under the age of
                                13. We do not knowingly collect personal information from children. If you are a parent
                                or guardian and believe your child has provided personal information on our platform,
                                please contact us immediately, and we will take steps to remove such information.

                                ‍</div>

                            <div class="SNH_font02">7. Updates to the Privacy Policy:</div>
                            <div class="SNH_font03">We may update this Privacy Policy periodically to reflect changes in
                                our privacy practices or applicable laws. We encourage you to review this policy
                                regularly. Continued use of our platform after any changes to the Privacy Policy
                                constitutes your consent to the revised policy.

                                ‍</div>

                            <div class="SNH_font02">8. Contact Us:</div>
                            <div class="SNH_font03">If you have any questions, concerns, or requests regarding this
                                Privacy Policy or the handling of your personal information, please contact our
                                designated privacy officer at [info@stylenhomes.com].</div>

                        </el-collapse-item>
                        <el-collapse-item title="Payment" name="2" :icon="CaretRight">
                            <div class="SNH_font01">Payment</div>
                            <div class="SNH_font03">When operating an ecommerce platform selling interior design
                                products, it's important to establish clear payment policies to ensure a secure and
                                transparent transaction process for your customers. Our payment policies are as follows:
                            </div>

                            <div class="SNH_font02">1. Accepted Payment Methods</div>
                            <div class="SNH_font03">We accept the following payment methods for purchasing interior
                                design products on our platform:

                                - Credit Cards: Visa, Mastercard, American Express, Discover, etc.

                                - Debit Cards: Visa, Mastercard, American Express, Discover, etc.

                                - PayPal- Other secure payment gateways

                                ‍</div>

                            <div class="SNH_font02">2. Payment Security:</div>
                            <div class="SNH_font03">We prioritize the security of our customers' payment information.
                                All transactions on our platform are encrypted and processed through secure payment
                                gateways. We do not store or have access to your complete payment details, such as
                                credit card numbers or passwords.

                                ‍</div>

                            <div class="SNH_font02">3. Order Confirmation:</div>
                            <div class="SNH_font03">All product prices displayed on our platform are listed in the
                                applicable currency. Prices are subject to change without prior notice. The total order
                                amount will include the product price(s) and any applicable taxes, shipping fees, or
                                handling charges.</div>

                            <div class="SNH_font02">4. Pricing and Currency:</div>
                            <div class="SNH_font03">For written permission, please contact epl@entessa.com. Products
                                derived from the Original Code under the terms of this Derived Work is with you. Should
                                the Work to operate with any other combinations which include the Program is made
                                available by Apple or such Contributor by reason of your rights with two steps: (1)
                                copyright the software, Licensee agrees to defend and indemnify every other Contributor
                                ("Indemnified Contributor") against any party wishing to do so, attach the following
                                disclaimer in the display of characters in the future.

                                ‍</div>

                            <div class="SNH_font02">5. Sales Tax:</div>
                            <div class="SNH_font03">Sales tax or any other applicable taxes will be applied to your
                                order based on the regulations of the jurisdiction to which the product is being
                                shipped. The applicable tax amount will be calculated during the checkout process and
                                included in the final order total.

                                ‍</div>

                            <div class="SNH_font02">6. Payment Verification:</div>
                            <div class="SNH_font03">In some cases, we may need to verify your payment details before
                                processing your order. This verification process is conducted to prevent fraudulent
                                transactions and protect both our customers and our business. We may request additional
                                information or documentation to complete the payment verification process.

                                ‍</div>

                            <div class="SNH_font02">7. Payment Authorization and Capture:</div>
                            <div class="SNH_font03">When you place an order, the payment will be authorized but not
                                immediately captured. Payment capture occurs once your order has been processed and
                                prepared for shipment. If there are any issues with payment authorization or capture, we
                                will contact you to resolve the matter.

                                ‍</div>

                            <div class="SNH_font02">8. Order Cancellation and Refunds:</div>
                            <div class="SNH_font03">If you need to cancel your order, please contact our customer
                                support team as soon as possible. Orders can only be canceled before they have been
                                processed for shipment. Refunds for canceled orders or eligible returns will be issued
                                in accordance with our Returns and Refunds Policy, using the original payment method
                                whenever possible.</div>

                            <div class="SNH_font02">9. Payment Disputes:</div>
                            <div class="SNH_font03">In the event of a payment dispute or suspected fraudulent activity,
                                we reserve the right to suspend or cancel the order until the issue is resolved. We may
                                request additional information or collaborate with the payment processor to investigate
                                the matter and protect the interests of both parties involved.

                                ‍</div>

                            <div class="SNH_font02">10. Currency Conversion:</div>
                            <div class="SNH_font03">For international orders, currency conversion may be required if the
                                transaction is processed in a currency different from the currency of the customer's
                                payment method. Currency conversion rates are determined by the payment processor or
                                financial institution at the time of the transaction.

                                ‍</div>

                        </el-collapse-item>
                        <el-collapse-item title="Terms & Conditions" name="3" :icon="CaretRight">
                            <div class="SNH_font01">Terms & Conditions</div>
                            <div class="SNH_font03">Please read these Terms and Conditions ("Agreement") carefully
                                before using our ecommerce platform ("Platform") for purchasing interior design
                                products. This Agreement sets forth the legally binding terms and conditions for your
                                use of the Platform.</div>

                            <div class="SNH_font02">1. Acceptance of Terms:</div>
                            <div class="SNH_font03">By accessing and using the Platform, you agree to be bound by this
                                Agreement. If you do not agree with any part of the Agreement, you must not use the
                                Platform.</div>

                            <div class="SNH_font02">2. Products and Orders:</div>
                            <div class="SNH_font03">a. Product Listings: The Platform displays interior design products
                                for sale. We strive to provide accurate product descriptions, images, and prices.
                                However, we do not warrant the accuracy, completeness, or reliability of any product
                                information on the Platform.

                                b. Orders: Placing an order on the Platform constitutes an offer to purchase the
                                selected products. We reserve the right to accept or decline any order for any reason.

                                ‍</div>

                            <div class="SNH_font02">3. Pricing and Payments:</div>
                            <div class="SNH_font03">a. Pricing: The prices displayed on the Platform are in the
                                applicable currency and exclude taxes, shipping, and handling fees unless stated
                                otherwise.

                                b. Payment: We accept payment through approved payment methods. By providing your
                                payment information, you represent and warrant that you are authorized to use the chosen
                                payment method.

                                ‍</div>

                            <div class="SNH_font02">4. Shipping and Delivery:</div>
                            <div class="SNH_font03">a. Shipping: We will make reasonable efforts to process and ship
                                orders promptly. However, we do not guarantee delivery times and are not responsible for
                                any delays or damages caused during shipping.

                                b. Delivery: Ownership of the products transfers to you upon delivery. You are
                                responsible for providing accurate shipping information. Any additional costs incurred
                                due to incorrect shipping information will be your responsibility.

                                ‍</div>

                            <div class="SNH_font02">5. Returns and Refunds:</div>
                            <div class="SNH_font03">a. Returns: If you receive a damaged or incorrect product, please
                                contact our customer service within [X] days of delivery for assistance. We may request
                                photographic evidence or return of the product, depending on the situation.

                                b. Refunds: Refunds for eligible returns will be issued within a reasonable time frame
                                using the original payment method. Shipping and handling charges are non-refundable.

                                ‍</div>

                            <div class="SNH_font02">6. Intellectual Property:</div>
                            <div class="SNH_font03">a. Ownership: All intellectual property rights related to the
                                Platform, including logos, trademarks, and content, are owned or licensed by us. You may
                                not use or reproduce them without our prior written consent.

                                b. User Content: By submitting any content to the Platform, including reviews or
                                comments, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license
                                to use, modify, reproduce, and distribute the content.

                                ‍</div>

                            <div class="SNH_font02">7. Privacy and Data Protection:</div>
                            <div class="SNH_font03">We are committed to protecting your privacy and handling your
                                personal data in accordance with applicable laws and our Privacy Policy. By using the
                                Platform, you consent to our collection, use, and disclosure of your personal
                                information as outlined in the Privacy Policy.

                                ‍</div>

                            <div class="SNH_font02">8. Limitation of Liability:</div>
                            <div class="SNH_font03">To the fullest extent permitted by law, we disclaim any liability
                                for any direct, indirect, incidental, consequential, or punitive damages arising out of
                                or relating to your use of the Platform or the products purchased through it.

                                ‍</div>

                            <div class="SNH_font02">9. Modifications and Termination:</div>
                            <div class="SNH_font03">We reserve the right to modify or terminate the Platform or this
                                Agreement at any time without notice. Any changes to the Agreement will be effective
                                upon posting on the Platform.

                                ‍</div>

                            <div class="SNH_font02">10. Governing Law and Dispute Resolution:</div>
                            <div class="SNH_font03">This Agreement shall be governed by and construed in accordance with
                                the laws of [jurisdiction]. Any disputes arising out of or relating to this Agreement
                                shall be resolved through arbitration or the courts of [jurisdiction], as determined by
                                us.

                                ‍</div>

                            <div class="SNH_font02">11. Severability:</div>
                            <div class="SNH_font03">If any provision of this Agreement is found to be unenforceable or
                                invalid, the remaining provisions shall remain in full force and effect.

                                ‍</div>

                            <div class="SNH_font03">By using our ecommerce platform, you acknowledge that you have read,
                                understood, and agreed to the terms and conditions outlined in this Agreement.</div>
                        </el-collapse-item>
                        <el-collapse-item title="Legal Policies" name="4" :icon="CaretRight">
                            <div class="SNH_font01">Legal Policies</div>
                            <div class="SNH_font03">In addition to the Terms and Conditions, an ecommerce platform
                                selling interior design products should also have the following legal policies in place:
                            </div>

                            <div class="SNH_font02">1. Privacy Policy</div>
                            <div class="SNH_font03">a. Collection and Use of Personal Information: Describe what
                                personal information you collect from users and how you use it, including details on
                                data collection, storage, and security measures.

                                b. Cookies and Tracking Technologies: Explain the use of cookies and other tracking
                                technologies on your platform and how users can manage their preferences.

                                c. Third-Party Sharing: Clarify if and how you share personal information with third
                                parties, such as payment processors or shipping providers.

                                d. User Rights: Inform users about their rights regarding their personal information,
                                including the right to access, update, and delete their data.e. Data Retention: Specify
                                how long you retain user data and the procedures for data deletion.

                                ‍</div>

                            <div class="SNH_font02">2. Cookie Policy</div>
                            <div class="SNH_font03">a. Definitions: Explain the meaning and purpose of cookies and other
                                tracking technologies.

                                b. Types of Cookies: Differentiate between different types of cookies used on your
                                platform, such as functional, analytical, and advertising cookies.

                                c. Cookie Consent: Describe how users can provide or withdraw consent for the use of
                                cookies and provide options for managing cookie preferences.

                                ‍</div>

                            <div class="SNH_font02">3. Shipping and Return Policy</div>
                            <div class="SNH_font03">a. Shipping Information: Provide details regarding shipping methods,
                                estimated delivery times, and shipping costs.

                                b. Return and Exchange Procedures: Outline the process for returning or exchanging
                                products, including any conditions or restrictions.

                                c. Refunds and Cancellations: Explain the criteria for refunds and cancellations,
                                including any applicable fees or deductions.

                                d. Damaged or Defective Products: Describe how to report damaged or defective products
                                and the resolution process.

                                ‍</div>

                            <div class="SNH_font02">4. Intellectual Property Policy</div>
                            <div class="SNH_font03">a. Copyright and Trademarks: State that all intellectual property
                                rights on the platform belong to the respective owners and are protected by copyright
                                and trademark laws.

                                b. User Content: Specify the guidelines and restrictions for user-generated content,
                                including the consequences of infringing on intellectual property rights.

                                ‍</div>

                            <div class="SNH_font02">5. Dispute Resolution Policy</div>
                            <div class="SNH_font03">a. Dispute Resolution Methods: Explain the procedures for resolving
                                disputes, such as mediation, arbitration, or court proceedings.

                                b. Jurisdiction: Specify the applicable jurisdiction for resolving disputes and the
                                governing law.

                                ‍</div>

                            <div class="SNH_font02">6. Compliance with Applicable Laws</div>
                            <div class="SNH_font03">a. Legal Compliance: State that users must comply with all
                                applicable laws and regulations when using the platform or purchasing products.

                                b. Prohibited Activities: List activities that are prohibited on the platform, such as
                                fraud, counterfeiting, or illegal activities.

                                ‍</div>

                            <div class="SNH_font02">7. Age Restrictions</div>
                            <div class="SNH_font03">a. Minimum Age: Specify the minimum age required to use the platform
                                and purchase products.

                                b. Parental Consent: Explain the process for obtaining parental consent for users under
                                the minimum age.

                                ‍</div>

                            <div class="SNH_font03">It's important to consult with legal professionals to ensure that
                                your legal policies are comprehensive, up to date, and compliant with relevant laws and
                                regulations in your jurisdiction.</div>
                        </el-collapse-item>
                        <el-collapse-item title="Shipping" name="5" :icon="CaretRight">
                            <div class="SNH_font01">Shipping</div>
                            <div class="SNH_font03">At Style & Homes, we strive to provide a seamless and reliable
                                shipping experience for our customers when purchasing interior design products. Please
                                review the following shipping policies that govern the delivery of your orders:</div>

                            <div class="SNH_font02">1. Shipping Methods and Carriers:</div>
                            <div class="SNH_font03">We offer standard shipping for all orders, fulfilled through
                                reputable shipping carriers such as FedEx, UPS, or DHL.</div>

                            <div class="SNH_font02">2. Shipping Zones and Delivery Areas:</div>
                            <div class="SNH_font03">We currently offer shipping to customers within the continental
                                United States. Unfortunately, we do not ship internationally at this time.</div>

                            <div class="SNH_font02">3. Processing Time:</div>
                            <div class="SNH_font03">Once your order is placed and payment is confirmed, we require a
                                processing time of [X] business days to prepare your order for shipment. Please note
                                that this processing time does not include weekends or holidays.</div>

                            <div class="SNH_font02">4. Shipping Costs:</div>
                            <div class="SNH_font03">Shipping costs are calculated based on the total weight of the order
                                and the destination address. The shipping cost will be displayed during the checkout
                                process before you complete your purchase.</div>

                            <div class="SNH_font02">5. Delivery Timeframes:</div>
                            <div class="SNH_font03">Estimated delivery timeframes vary depending on the destination
                                address and the shipping method selected during checkout. On average, you can expect
                                your order to arrive within 10 to 15 business days after it has been shipped. Please
                                note that these timeframes are estimates and may be subject to unforeseen delays, such
                                as weather conditions or carrier disruptions.</div>

                            <div class="SNH_font02">6. Tracking and Order Status:</div>
                            <div class="SNH_font03">Once your order has been shipped, we will provide you with a
                                tracking number via email. You can use this tracking number to monitor the progress of
                                your shipment. Additionally, you can log in to your account on our website to view the
                                order status and track your package directly from there.</div>

                            <div class="SNH_font02">7. Shipping Notifications and Communication:</div>
                            <div class="SNH_font03">We will send you email notifications at various stages of the
                                shipping process, including when your order is confirmed, when it has been shipped, and
                                when it is out for delivery. If there are any significant delays or issues with your
                                shipment, we will make our best effort to communicate these to you promptly.</div>

                            <div class="SNH_font02">8. Packaging and Handling:</div>
                            <div class="SNH_font03">o ensure the safe delivery of your interior design products, we take
                                great care in packaging them securely. Fragile items will be adequately protected with
                                appropriate packaging materials to minimize the risk of damage during transit.</div>

                            <div class="SNH_font02">9. Multiple Items or Split Shipments:</div>
                            <div class="SNH_font03">If your order includes multiple items, we may ship them together in
                                one shipment or separately, depending on factors such as item availability and size. You
                                will be notified during the checkout process if your order will be split into multiple
                                shipments. Rest assured, you will not incur any additional shipping charges for split
                                shipments.</div>

                            <div class="SNH_font02">10. Returns and Exchanges:</div>
                            <div class="SNH_font03">For information regarding returns and exchanges related to shipping,
                                please refer to our comprehensive Returns and Exchanges Policy. It provides detailed
                                instructions on how to initiate a return or exchange and any associated shipping
                                procedures.</div>

                            <div class="SNH_font02">11. Disclaimers:</div>
                            <div class="SNH_font03">While we make every effort to ensure timely delivery, please note
                                that we are not responsible for any delays, damages, or loss caused by circumstances
                                beyond our control, such as natural disasters, carrier errors, or incorrect shipping
                                information provided by the customer.</div>

                            <div class="SNH_font03">If you have any questions or require further assistance regarding
                                shipping, please feel free to reach out to our customer support team, and we will be
                                happy to assist you.</div>
                        </el-collapse-item>
                        <el-collapse-item title="Data Deletion" name="6" :icon="CaretRight">
                            <div class="SNH_font02">User data deletion request</div>
                            <div class="SNH_font03">We respect your privacy and offer the option to delete your personal
                                data</div>

                            <div class="SNH_font02">How to delete your data:</div>
                            <div class="SNH_font03">If you wish to delete data associated with your Facebook account,
                                please follow these
                                steps:</div>
                            <div class="SNH_font03">Send an email to<strong>(andrew@stylenhomes.com)</strong>Please write
                                'Request to delete data' in the email subject</div>
                            <div class="SNH_font03">Please attach your Facebook user ID in the email so that we can
                                confirm your
                                identity</div>
                            <div class="SNH_font03">We will process your request within 7 working days and notify you
                                after
                                completion</div>
                            <div class="SNH_font03">If you have any questions regarding data deletion, please feel free
                                to contact us at
                                any time</div>

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
    name: "SNH-Legal",
    components: {
        MainLayout,
    },
};
</script>

<script setup>
import { ref } from 'vue'
import { CaretRight } from '@element-plus/icons-vue'
const activeNames = ref('0')
</script>


<style scoped>
.el-collapse :deep(.el-collapse-item__header) {
    line-height: 1;
    /* 标题行高  */
    font-size: 15px;
    text-align: left;
}

.icon-ele {
    margin: 0 8px 0 auto;
    color: #409eff;
}

.demo-collapse {
    width: 100%;
    background-color: rgb(243, 242, 238);
}

.LegalPage {
    width: 80%;
    height: auto;
    color: rgb(34, 63, 97);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>