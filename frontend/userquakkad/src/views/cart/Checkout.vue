<template>

    <Crumbs title="checkout" />

    <section class="checkout-wrapper section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="checkout-steps-form-style-1">
                        <ul @click="close">

                            <li>
                                <Shipping v-if="next_step === 'Shipping'" :completeStep="completeStep"
                                    :idClient="idClient" />
                                <div v-if="next_step === 'PersonalDetails' && isLoggedIn  ">
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
                                                                    v-model="client.first_name" />
                                                            </div>
                                                            <div class="col-md-6 form-input form">
                                                                <input type="text" placeholder="Last Name"
                                                                    v-model="client.last_name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>Email Address</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Email Address"
                                                                v-model="client.email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>Phone Number</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Phone Number"
                                                                v-model="client.phone" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="single-form form-default">
                                                        <label>Mailing Address</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Mailing Address"
                                                                v-model="client.mailing_address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>City</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="City"
                                                                v-model="client.city" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>Post Code</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Post Code"
                                                                v-model="client.postal_code" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-form form-default">
                                                        <label>Country</label>
                                                        <div class="form-input form">
                                                            <input type="text" placeholder="Country"
                                                                v-model="client.country" />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="single-checkbox checkbox-style-3">
                                                        <input type="checkbox" id="checkbox-3"
                                                            v-model="client.is_same_address" />
                                                        />
                                                        <label for="checkbox-3"><span></span></label>
                                                        <p>My delivery and mailing addresses are the same.</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="single-form button">
                                                        <button @click.prevent="handleCreateClinet" class="btn">
                                                            next step
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </form>
                                </div>
                                <div v-if="!isLoggedIn && next_step === 'PersonalDetails'">

                                    <div class="alert alert-danger alert-dismissible fade show" role="alert" >
                                        <strong>You must be logged in to continue</strong>
                                    </div>
                                    <div class="price-table-btn button">
                                        <button 
                                        @click="$router.push('/login')"
                                        class="btn" style="
                                            background-color: #f07878;
                                             color: white;"> Go To Login</button>
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
                is_same_address: false
            },
            next_step: "PersonalDetails",
            idClient: 0,
            isLoggedIn: false,
          


        };

    },
    methods: {
        handleCreateClinet()
        {
            console.log(this.client);
            fetch("http://localhost/QuakkaProject/clients/createClient", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",

                },
                body: JSON.stringify(this.client)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data[0]);
                    if (data[0])
                    {

                        this.idClient = data[1].id;
                        if (this.client.is_same_address) {  
                            this.next_step = "Payment";
                        }
                        else {
                            this.next_step = "Shipping";
                        }
                        Swal.fire({
                            title: 'Success',
                            text: 'Client Created',
                            type: 'success',
                            confirmButtonText: 'OK'
                        });
                    }
                    else
                    {
                        Swal.fire({
                            title: 'Error',
                            text: 'You have to fill all fields',
                            type: 'error',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
               
            
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

    mounted() {
        if (this.$store.state.isLoggedIn) {
            this.isLoggedIn = true;
        }
    }
};
</script>
