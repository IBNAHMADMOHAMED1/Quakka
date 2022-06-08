<template>
    <h6 class="title collapsed">Payment Info</h6>
    <section class="checkout-steps-form-content collapse show">
        <div class="row">
            <form>
            <div class="col-12">
                <div class="checkout-payment-form">
                    <div class="single-form form-default">
                        <label>Cardholder Name</label>
                        <div class="form-input form">
                            <input type="text" placeholder="Cardholder Name"
                            required
                            v-model="payment_details.cardholder_name"
                            >
                        </div>
                    </div>
                    <div class="single-form form-default">
                        <label>Card Number</label>
                        <div class="form-input form">
                            <input id="credit-input" type="text" placeholder="0000 0000 0000 0000"
                            required 
                            v-model="payment_details.card_number"
                            >
                            <img src="assets/images/payment/card.png" alt="card">
                        </div>
                    </div>
                    <div class="payment-card-info">
                        <div class="single-form form-default mm-yy">
                            <label>Expiration</label>
                            <div class="expiration d-flex">
                                <div class="form-input form">
                                    <input type="text" placeholder="MM"
                                    required
                                    v-model="payment_details.expiration_month"
                                    >
                                </div>
                                <div class="form-input form">
                                    <input type="text" placeholder="YYYY"
                                    required
                                    v-model="payment_details.expiration_year"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="single-form form-default">
                            <label>CVC/CVV <span><i class="mdi mdi-alert-circle"></i></span></label>
                            <div class="form-input form">
                                <input type="text" placeholder="***"
                                required
                                v-model="payment_details.cvc"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="single-form form-default button">
                        <button 
                        @click.prevent="submitPayment"
                        class="btn">pay now</button>
                    </div>
                </div>
            </div>
        </form>
        </div>
    </section>
</template>

<script>
export default {
    name: "Payment",
    data() {
        return {
            payment_details: {
                cardholder_name: '',
                card_number: '',
                expiration_month: '',
                expiration_year: '',
                cvc: '',
            },
          
        }
    },
    methods: {
        submitPayment() {
            this.$store.dispatch('submitPayment', this.payment_details)
        }
    },
}
</script>

<style>

</style>