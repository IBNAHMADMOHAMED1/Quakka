
<script>
export default {
  name: "Shipping",
  props: { completeStep: Function },
    data (){
      return {
        shipping_methods: [
          {

            name: 'Flat Rate',
            price: '10.00',
            src: 'assets/images/shipping/flat-rate.png',
          },
          {
            name: 'Standard Shipping',
            price: '8.00',
            src: 'assets/images/shipping/standard-shipping.png',
          },
          {
            name: 'Express Shipping',
            price: '12.00',
            src: 'assets/images/shipping/express-shipping.png',
          },
        ],
        
        is_step_completed: false,
        shipping_details: {
          email: '',
          phone: '',
          mailing_address: '',
          city: '',
          postal_code: '',
          state: '',
          country: '',
          selected_shipping_method: '',
        },
        
      }
    },
    methods: {
        submitShipping()
        {  
        console.log(this.shipping_details);
        this.completeStep();
        },
        completeStep()
        {
          this.is_step_completed = true;
          this.$emit('completeStep', this.is_step_completed);
            
        },
    }
}
</script>
<template>
  <h6 class="title collapsed">
    Shipping Address
  </h6>
  <section class="checkout-steps-form-content collapse show" id="collapseThree">
    <form>
      <div class="row">
        <div class="col-md-12">

        </div>
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
              <div class="single-payment-option" v-for="(shipping, index) in shipping_methods" :key="index">
                <input type="radio" name="shipping" checked id="shipping-1"
                  v-model="shipping_details.selected_shipping_method" :value="shipping.name" />
                <label for="shipping-1">
                  <img :src="shipping.src" alt="Sipping" style="height: 40px; " />
                  <p>
                    {{ shipping.name }}
                  </p>
                  <span class="price">{{ shipping.price }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="steps-form-btn button">
            <button class="btn" disabled style="cursor: not-allowed;">
              previous
            </button>
            <button @click.prevent="submitShipping" class="btn btn-alt">
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>