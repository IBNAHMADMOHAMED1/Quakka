
<script>
import Swal from "sweetalert2";
export default {
  name: "Shipping",
  props: {
    completeStep: Function,
    idClient: Number,
  },
  data() {
    return {
      shipping_methods: [
        {
          name: "Flat Rate",
          price: "10.00",
          src: "assets/images/shipping/flat-rate.png",
        },
        {
          name: "Standard Shipping",
          price: "8.00",
          src: "assets/images/shipping/standard-shipping.png",
        },
        {
          name: "Express Shipping",
          price: "12.00",
          src: "assets/images/shipping/express-shipping.png",
        },
      ],

      is_step_completed: false,
      shipping_details: {
        email: "",
        phone: "",
        mailing_address: "",
        city: "",
        postal_code: "",
        country: "",
        shipping_name: "",
      },
    };
  },
  methods: {
    submitShipping() {
      // check if shipping details are valid to serve as a shipping method
      if (
        this.shipping_details.email &&
        this.shipping_details.phone &&
        this.shipping_details.mailing_address &&
        this.shipping_details.city &&
        this.shipping_details.postal_code &&
        this.shipping_details.country &&
        this.shipping_details.shipping_name
      ) {
        fetch(
          "http://localhost/QuakkaProject/shippings/createShippingOtherDetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(this.shipping_details),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data[0]) {
              this.is_step_completed = true;
              Swal.fire({
                title: "Shipping Details Saved",
                text: "You can now choose a shipping method",
                type: "success",
                confirmButtonText: "OK",
              });
              this.completeStep();
            } else {
              Swal.fire({
                title: "Error",
                text: "Something went wrong, please try again",
                type: "error",
                confirmButtonText: "Ok",
              });
            }
          });
      } else {
        Swal.fire({
          title: "Error",
          text: "Please fill in all the fields",
          type: "error",
          confirmButtonText: "Ok",
        });
      }
    },
    completeStep() {
      this.is_step_completed = true;
      this.$emit("completeStep", this.is_step_completed);
    },
  },
};
</script>
<template>
  <h6 class="title collapsed">Shipping Address</h6>
  <section class="checkout-steps-form-content collapse show" id="collapseThree">
    <form>
      <div class="row">
        <div class="col-md-12"></div>
        <div class="col-md-6">
          <div class="single-form form-default">
            <label>Email Address</label>
            <div class="form-input form">
              <input type="text" placeholder="Email Address" v-model="shipping_details.email" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-form form-default">
            <label>Phone Number</label>
            <div class="form-input form">
              <input type="text" placeholder="Phone Number" v-model="shipping_details.phone" />
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="single-form form-default">
            <label>Mailing Address</label>
            <div class="form-input form">
              <input type="text" placeholder="Mailing Address" v-model="shipping_details.mailing_address" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-form form-default">
            <label>City</label>
            <div class="form-input form">
              <input type="text" placeholder="City" v-model="shipping_details.city" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-form form-default">
            <label>Post Code</label>
            <div class="form-input form">
              <input type="text" placeholder="Post Code" v-model="shipping_details.postal_code" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-form form-default">
            <label>Country</label>
            <div class="form-input form">
              <input type="text" placeholder="Country" v-model="shipping_details.country" />
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
                <input type="radio" name="shipping" id="shipping-2" v-model="shipping_details.shipping_name"
                  value="Traghat Shipping" />

                <label for="shipping-2">
                  <img src="assets/images/shipping/flat-rate.png" alt="Sipping" />
                  <p>Traghat Shipping</p>
                  <span class="price">$10.50</span>
                </label>
              </div>
              <div class="single-payment-option">
                <input type="radio" name="shipping" id="shipping-3" v-model="shipping_details.shipping_name"
                  value="Tarola Shipping" />
                <label for="shipping-3">
                  <img src="assets/images/shipping/standard-shipping.png" alt="Sipping" />
                  <p>Tarola Shipping</p>
                  <span class="price">$10.50</span>
                </label>
              </div>
              <div class="single-payment-option">
                <input type="radio" name="shipping" id="shipping-4" v-model="shipping_details.shipping_name"
                  value="Express Shipping" />
                <label for="shipping-4">
                  <img src="assets/images/shipping/standard-shipping.png" alt="Sipping" />
                  <p>
                    Express Shipping
                  </p>
                  <span class="price">$10.50</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="steps-form-btn button">
            <button @click.prevent="submitShipping" class="btn btn-alt">
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>