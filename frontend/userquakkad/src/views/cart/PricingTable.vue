<template>
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
      
    </div>
</template>

<script>
export default {
    name: "PricingTable",
    data() {
        return {
            cart: [],
        };
    },
    methods: {
        getCart() {
            this.$store.dispatch("getCart");
        },
    },
}
</script>