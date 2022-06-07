<template>
    <section class="checkout-wrapper section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="checkout-steps-form-style-1">
                        <ul @click="close" id="accordionExample">
                            <li>
                                <h6 class="title" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                    aria-expanded="true" aria-controls="collapseThree">
                                    Your Personal Details
                                </h6>
                                        <form>
                                <section class="checkout-steps-form-content collapse show" id="collapseThree"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
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
                                                    <input type="text" placeholder="Email Address" v-model="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-default">
                                                <label>Phone Number</label>
                                                <div class="form-input form">
                                                    <input type="text" placeholder="Phone Number" v-model="phone" />
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
                                                    <input type="text" placeholder="Post Code" v-model="postal_code" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-default">
                                                <label>Country</label>
                                                <div class="form-input form">
                                                    <input type="text" placeholder="Country" 
                                                    v-model="country" />
                                                    />
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
                                                <button
                                                @click.prevent="handleCreateUser"
                                                class="btn" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour" aria-expanded="false"
                                                    aria-controls="collapseFour">
                                                    next step
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                        </form>
                            </li>
                            <li>
                                <h6 class="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                    aria-expanded="false" aria-controls="collapseFour">
                                    Shipping Address
                                </h6>
                                <section class="checkout-steps-form-content collapse" id="collapseFour"
                                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="single-form form-default">
                                                <label>User Name</label>
                                                <div class="row">
                                                    <div class="col-md-6 form-input form">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                    <div class="col-md-6 form-input form">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-default">
                                                <label>Email Address</label>
                                                <div class="form-input form">
                                                    <input type="text" placeholder="Email Address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-default">
                                                <label>Phone Number</label>
                                                <div class="form-input form">
                                                    <input type="text" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="single-form form-default">
                                                <label>Mailing Address</label>
                                                <div class="form-input form">
                                                    <input type="text" placeholder="Mailing Address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-default">
                                                <label>City</label>
                                                <div class="form-input form">
                                                    <input type="text" placeholder="City" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-default">
                                                <label>Post Code</label>
                                                <div class="form-input form">
                                                    <input type="text" placeholder="Post Code" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-default">
                                                <label>Country</label>
                                                <div class="form-input form">
                                                    <input type="text" placeholder="Country" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="checkout-payment-option">
                                                <h6 class="heading-6 font-weight-400 payment-title">
                                                    Select Delivery Option
                                                </h6>
                                                <div class="payment-option-wrapper">
                                                    <div class="single-payment-option">
                                                        <input type="radio" name="shipping" checked id="shipping-1" />
                                                        <label for="shipping-1">
                                                            <img src="https://via.placeholder.com/60x32"
                                                                alt="Sipping" />
                                                            <p>Standerd Shipping</p>
                                                            <span class="price">$10.50</span>
                                                        </label>
                                                    </div>
                                                    <div class="single-payment-option">
                                                        <input type="radio" name="shipping" id="shipping-2" />
                                                        <label for="shipping-2">
                                                            <img src="https://via.placeholder.com/60x32"
                                                                alt="Sipping" />
                                                            <p>Standerd Shipping</p>
                                                            <span class="price">$10.50</span>
                                                        </label>
                                                    </div>
                                                    <div class="single-payment-option">
                                                        <input type="radio" name="shipping" id="shipping-3" />
                                                        <label for="shipping-3">
                                                            <img src="https://via.placeholder.com/60x32"
                                                                alt="Sipping" />
                                                            <p>Standerd Shipping</p>
                                                            <span class="price">$10.50</span>
                                                        </label>
                                                    </div>
                                                    <div class="single-payment-option">
                                                        <input type="radio" name="shipping" id="shipping-4" />
                                                        <label for="shipping-4">
                                                            <img src="https://via.placeholder.com/60x32"
                                                                alt="Sipping" />
                                                            <p>Standerd Shipping</p>
                                                            <span class="price">$10.50</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="steps-form-btn button">
                                                <button class="btn" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    previous
                                                </button>
                                                <button class="btn btn-alt" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseFour" aria-expanded="false"
                                                    aria-controls="collapseFour">
                                                    Save & Continue
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </li>
                            <li>
                                <Payment></Payment>
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
                        <div class="checkout-sidebar-price-table mt-30">
                            <h5 class="title">Pricing Table</h5>

                            <div class="sub-total-price">
                                <div class="total-price">
                                    <p class="value">Subotal Price:</p>
                                    <p class="price">$144.00</p>
                                </div>
                                <div class="total-price shipping">
                                    <p class="value">Subotal Price:</p>
                                    <p class="price">$10.50</p>
                                </div>
                                <div class="total-price discount">
                                    <p class="value">Subotal Price:</p>
                                    <p class="price">$10.00</p>
                                </div>
                            </div>

                            <div class="total-payable">
                                <div class="payable-price">
                                    <p class="value">Subotal Price:</p>
                                    <p class="price">$164.50</p>
                                </div>
                            </div>
                            <div class="price-table-btn button">
                                <a href="javascript:void(0)" class="btn btn-alt">Checkout</a>
                                <button class="btn">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import Payment from "../../components/Pay.vue";
export default {
  name: "checkout",
  components: {
    Payment,
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

        };

    },
    methods: {
        handleCreateUser()
        {
            console.log(this.client);
        }
    },
};
</script>
