<template>
    <div class="checkout-sidebar-price-table mt-30">
        <h5 class="title">Pricing Table</h5>
        {{total}}
        <div class="sub-total-price">
            <div v-for="(item,index) in cart" :key="index" class="total-price" style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            ">
                <div class="total-price-item">
                    <p class="payable-pric">
                        <span class="value">{{item.name}} :</span>
                        <span class="price"> ${{item.price}}</span>
                    </p>
                </div>
                <span @click="removeItem(index)">
                    <i class="lni lni-close"></i>
                </span>
            </div>

        </div>

        <div class="total-payable">
            <div class="payable-price">
                <p class="value">Subotal Price:</p>
                <p class="price">${{total}}</p>
            </div>
        </div>
        <div
        @click="$router.push('/checkout')"
        class="price-table-btn button" style="margin-top:20px;">

            <button class="btn">Checkout</button>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapSetters } from 'vuex'

export default {
    name: "PricingTable",
    data() {
        return {
            cart: JSON.parse(localStorage.getItem('cart')),
            total: 0,
        };
    },
  
    mounted() {
        this.cart = this.$store.state.cart;
        this.total = this.cart.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
    },
    computed: {
        cart() {
            this.cart = this.$store.state.cart;
            this.total = this.cart.reduce((acc, item) => {
                return acc + item.price;
            }, 0);
            return this.$store.state.cart;
        },
    },
    watch: {
        cart() {
            this.cart = this.$store.state.cart;
            this.total = this.cart.reduce((acc, item) => {
                return acc + item.price;
            }, 0);
        },
    
    },
    methods: {
       
        removeItem(index) {
            this.cart.splice(index, 1);
            this.$store.commit('setCart', this.cart);
            // set localStorage cart
            this.total = this.cart.reduce((acc, item) => {
                return acc + item.price;
            }, 0);
            localStorage.setItem('cart', JSON.stringify(this.cart));

        },
    },
}
</script>