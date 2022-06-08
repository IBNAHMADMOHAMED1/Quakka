<template>
    <h6 class="title collapsed" >Payment Info</h6>
    <section class="checkout-steps-form-content collapse" id="collapsefive">
        <div class="row">
            <div class="col-12">
                <div class="checkout-payment-form">
                    <div class="single-form form-default">
                        <label>Cardholder Name</label>
                        <div class="form-input form">
                            <input type="text" placeholder="Cardholder Name">
                        </div>
                    </div>
                    <div class="single-form form-default">
                        <label>Card Number</label>
                        <div class="form-input form">
                            <input id="credit-input" type="text" placeholder="0000 0000 0000 0000">
                            <img src="assets/images/payment/card.png" alt="card">
                        </div>
                    </div>
                    <div class="payment-card-info">
                        <div class="single-form form-default mm-yy">
                            <label>Expiration</label>
                            <div class="expiration d-flex">
                                <div class="form-input form">
                                    <input type="text" placeholder="MM">
                                </div>
                                <div class="form-input form">
                                    <input type="text" placeholder="YYYY">
                                </div>
                            </div>
                        </div>
                        <div class="single-form form-default">
                            <label>CVC/CVV <span><i class="mdi mdi-alert-circle"></i></span></label>
                            <div class="form-input form">
                                <input type="text" placeholder="***">
                            </div>
                        </div>
                    </div>
                    <div class="single-form form-default button">
                        <button class="btn">pay now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
        name: "Payment",
}
</script>

<style>

</style>