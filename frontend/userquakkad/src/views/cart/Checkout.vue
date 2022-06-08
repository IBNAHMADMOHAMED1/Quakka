<template>

    <Crumbs title="checkout" />

    <section class="checkout-wrapper section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="checkout-steps-form-style-1">
                        <ul @click="close">

                            <li>
                                <Shipping 
                                v-if="next_step === 'Shipping'" 
                                :completeStep="completeStep" />
                                <div v-if="next_step === 'PersonalDetails' ">
                                    <h6 class="title">
                                        Your Personal Details
                                    </h6>
                                    <form>
                                        <section class="checkout-steps-form-content collapse show" id="collapseThree">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="single-form form-default">
                                                        <label>User Name</label>
                                                        <div class="row">
                                                            <div class="col-md-6 form-input form">
                                                                <input type="text" placeholder="First Name"
                                                                    v-model="first_name" />
                                                            </div>
                                                            <div class="col-md-6 form-input form">
                                                                <input type="text" placeholder="Last Name"
                                                                    v-model="last_name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>Email Address</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Email Address"
                                                                v-model="email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>Phone Number</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Phone Number"
                                                                v-model="phone" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="single-form form-default">
                                                        <label>Mailing Address</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Mailing Address"
                                                                v-model="mailing_address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>City</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="City" v-model="city" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>Post Code</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Post Code"
                                                                v-model="postal_code" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>Country</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Country"
                                                                v-model="country" />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="single-checkbox checkbox-style-3">
                                                        <input type="checkbox" id="checkbox-3" />
                                                        <label for="checkbox-3"><span></span></label>
                                                        <p>My delivery and mailing addresses are the same.</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="single-form button">
                                                        <button @click.prevent="handleCreateUser" class="btn">
                                                            next step
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </form>
                                </div>
                                <Payment 
                                v-if="next_step === 'Payment'"
                                 :completeStep="completeStep" />

                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="checkout-sidebar">
                        <div class="checkout-sidebar-coupon">
                            <p>Appy Coupon to get discount!</p>
                            <form>
                                <div class="single-form form-default">
                                    <div class="form-input form">
                                        <input type="text" placeholder="Not working yet"
                                            style="border: 1px solid #e5e5e5; crursor: no-drop" disabled />
                                    </div>
                                    <div class="button">
                                        <button @click.prevent="applyCoupon" class="btn">
                                            apply
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <PricingTable />
                        <div class="price-table-btn button" style="margin-top:20px;">

                            <button class="btn">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import Payment from "../../components/Pay.vue";
import Crumbs from "@/components/base/Crumbs.vue";
import PricingTable from "./PricingTable.vue";
import Shipping from "./Shipping.vue";
export default {
  name: "checkout",
  components: {
      Payment, Crumbs, PricingTable,Shipping
  },
    data() {
        return {
            client: {
                last_name: "",
                first_name: "",
                email: "",
                phone: "",
                mailing_address: "",
                city: "",
                postal_code: "",
                country: "",
            },
            next_step: "PersonalDetails",


        };

    },
    methods: {
        handleCreateUser()
        {
            console.log(this.client);
            this.next_step = "Shipping";
        },
        applyCoupon()
        {
            console.log("apply coupon");
        },
        completeStep()
        {
            this.next_step ="Payment";
        }
    },
};
</script>
