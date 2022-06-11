<template>
    <Crumbs title="checkout" />

    <div  v-if="isEmpty">
        >
        <div class="error-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="error-content">
                            <h1>
                                Sad
                            </h1>
                            <h2>Oops! you don't have any items in your cart</h2>
                            <p>
                                Please add some items to your cart

                            </p>
                            <div class="button">
                                <button @click="$router.push('/')" class="btn">Back to Products
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section 
    v-else
    class="checkout-wrapper section">

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="checkout-steps-form-style-1">
                        <ul @click="close">
                            <li>
                                <div class="col-md-12"></div>
                                <div v-if="next_step === 'PersonalDetails' && isLoggedIn">
                                    <div class="single-checkbox checkbox-style-3">
                                        <input type="checkbox" v-model="is_same_address" id="checkbox-3" />
                                        <label for="checkbox-3"><span></span></label>
                                        <p>Delivery to other address.</p>
                                    </div>
                                    <div v-if="!is_same_address" class="single-checkbox checkbox-style-3">
                                        <input checked type="checkbox" v-model="is_other_address" id="checkbox-4" />
                                        <label for="checkbox-4"><span></span></label>
                                        <p>My delivery and mailing addresses are the same</p>

                                        <div style="margin-top: 19px">
                                            <h6 class="title collapsed">Shipping ifno</h6>
                                            <form>
                                                <section class="checkout-steps-form-content collapse show"
                                                    id="collapsefive">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="checkout-payment-form">
                                                                <div class="checkout-payment-option">
                                                                    <h6 class="
                                        heading-6
                                        font-weight-400
                                        payment-title
                                      ">
                                                                        Select Delivery Option
                                                                    </h6>
                                                                    <div class="payment-option-wrapper">
                                                                        <div class="single-payment-option">
                                                                            <input type="radio" name="shipping"
                                                                                id="shipping-2" v-model="shipping_name"
                                                                                value="Traghat Shipping" />

                                                                            <label for="shipping-2">
                                                                                <img src="assets/images/shipping/flat-rate.png"
                                                                                    style="width: 100px; height: 50px"
                                                                                    alt="Sipping" />

                                                                                <p style="inline-block">
                                                                                    Traghat Shipping
                                                                                </p>
                                                                                <span class="price">$10.50</span>
                                                                            </label>
                                                                        </div>
                                                                        <div class="single-payment-option">
                                                                            <input type="radio" name="shipping"
                                                                                id="shipping-3" v-model="shipping_name"
                                                                                value="Tarola Shipping" />
                                                                            <label for="shipping-3">
                                                                                <img src="assets/images/shipping/standard-shipping.png"
                                                                                    alt="Sipping"
                                                                                    style="width: 100px; height: 50px" />

                                                                                <p style="inline-block">
                                                                                    Tarola Shipping
                                                                                </p>
                                                                                <span class="price">$10.50</span>
                                                                            </label>
                                                                        </div>
                                                                        <div class="single-payment-option">
                                                                            <input type="radio" name="shipping"
                                                                                id="shipping-4" v-model="shipping_name"
                                                                                value="Express Shipping" />
                                                                            <label for="shipping-4">
                                                                                <img src="assets/images/shipping/standard-shipping.png"
                                                                                    style="width: 100px; height: 50px"
                                                                                    alt="Sipping" />
                                                                                <p style="inline-block">
                                                                                    Express Shipping
                                                                                </p>
                                                                                <span class="price">$10.50</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="single-form form-default button">
                                                                    <button @click.prevent="openPayment" class="btn">
                                                                        pay now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </form>
                                        </div>
                                    </div>
                                    <div style="margin-top: 10px" v-if="is_same_address">
                                        <Shipping :completeStep="completeStep" :idClient="idClient" />
                                    </div>
                                </div>
                                <div v-if="!isLoggedIn && next_step === 'PersonalDetails'">
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>You must be logged in to continue</strong>
                                    </div>
                                    <div class="price-table-btn button">
                                        <button @click="$router.push('/login')" class="btn"
                                            style="background-color: #f07878; color: white">
                                            Go To Login
                                        </button>
                                    </div>
                                </div>
                                <Payment v-if="next_step === 'Payment'" />
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
import Swal from "sweetalert2";
import store from "@/store";
export default {
  name: "checkout",
  components: {
    Payment,
    Crumbs,
    PricingTable,
    Shipping,
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
      idClient: 0,
      isLoggedIn: false,
      is_same_address: false,
      is_other_address: true,
        shipping_name: "",
      isEmpty: false,
    };
  },
  methods: {
    applyCoupon() {
      console.log("apply coupon");
    },
    completeStep() {
      this.next_step = "Payment";
    },
    openPayment() {
          let client = localStorage.getItem("client");
          // convert to json
          client = JSON.parse(client);
            const shipping = {
              client_id: client.id,
              shipping_name: this.shipping_name,
            };
            const newLocal = "http://localhost/QuakkaProject/shippings/createShipping";
        
            fetch(newLocal, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(shipping),
            }).
            then((response) => {
                return response.json();
            }).
            then((data) => {
                console.log(data);
                if (data[0])
                {
                    Swal.fire({
                        title: "Success",
                        text: "Shipping has been added",
                        icon: "success",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                    }).then((result) => {
                        if (result.value) {
                            // this.$router.push("/payment");
                            this.next_step = "Payment";
                            // this.$store.dispatch("submitPayment", data[0]);
                        }
                    });
                }
                else
                {
                    Swal.fire({
                        title: "Error",
                        text: "Something went wrong",
                        icon: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                    }).then((result) => {
                        if (result.value) {
                            this.$router.push("/payment");
                        }
                    });
                }
            }).
            catch((error) => {
                console.log(error);
            });
        }
    
  },

  mounted() {
    if (this.$store.state.isLoggedIn) {
      this.isLoggedIn = true;
      }
      
      let cart = this.$store.state.cart.length
      
      if (
          cart <= 0
     ) {
            this.isEmpty = true;
        }
        else {
            this.isEmpty = false;
        }
      
    
    
  },
};
</script>


<style>

.error-area {
  height: 50vh;
  text-align: center;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  position: relative;
  background-image: url("@/assets/images/error/404-bg.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
