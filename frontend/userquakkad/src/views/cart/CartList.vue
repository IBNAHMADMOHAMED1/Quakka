<template>

    <Crumbs title="CartList" />
    <div class="shopping-cart section">
        <div class="container">
            <div class="cart-list-head">
                <!-- Cart List Title -->
                <div class="cart-list-title">
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-12">

                        </div>
                        <div class="col-lg-4 col-md-3 col-12">
                            <p>Product Name</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Quantity</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Subtotal</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>Discount</p>
                        </div>
                        <div class="col-lg-1 col-md-2 col-12">
                            <p>Remove</p>
                        </div>
                    </div>
                </div>
                <!-- End Cart List Title -->
                <!-- Cart Single List list -->
                <div v-for="(item, index) in cart" :key="index" class="cart-single-list">
                    <div class="row align-items-center">
                        <div class="col-lg-1 col-md-1 col-12">
                            <div style="width:100px !important; height:100px !important;"
                                @click="$router.push('product-details/' + item.id)">
                                <img src="assets/images/producs/default.jpg" alt="#"
                                style="
                                width:100% !important;
                                height:100% !important;
                                "
                                    object-fit="cover"

                                >
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-3 col-12">
                            <h5 class="product-name">
                                <div @click="$router.push('product-details/' + item.id)">
                                  {{ item.name }}
                                  </div>
                            </h5>
                            <p class="product-des">
                                <span><em>Type:</em> Mirrorless</span>
                                <span><em>Color:</em> Black</span>
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <div class="count-input">
                              x 1
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>
                                {{ item.price * quantity }}

                            </p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <p>$00.00</p>
                        </div>
                        <div 
                        @click="removeItem(index)"
                        class="col-lg-1 col-md-2 col-12">
                            <div class="remove-item"><i class="lni lni-close"></i></div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-12">

                    <div class="total-amount">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="right">
                                    <PricingTable></PricingTable>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>


<script>
import Payment from "../../components/Pay.vue";
import Crumbs from "@/components/base/Crumbs.vue";
import PricingTable from "./PricingTable.vue";
import Shipping from "./Shipping.vue";
import Swal from "sweetalert2";
export default {
    name: "CartList",
    components: {
        Payment, Crumbs, PricingTable, Shipping
    },
    data() {
        return {
            cart: null,
            isLoggedIn: false,
            isLoading: false,
            quantity: 1,
            newTotal: 0,
        };

    },
    methods: {
        removeItem(index) {
              this.cart.splice(index, 1);
                this.$store.commit('setCart', this.cart);
                localStorage.setItem('cart', JSON.stringify(this.cart));
                // Swal timers
                Swal.fire({
                    title: 'Success',
                    text: 'Item removed from cart',
                    type: 'success',
                    timer: 1000,
                    showConfirmButton: false
                });
        },
        updateCart(id) {
            this.newTotal = this.cart[id].price * this.quantity; 
            this.cart.forEach(item => {
                if (item.id == id) {
                    item.quantity = this.quantity;
                }
                newTotal += item.price * item.quantity;
            });

        }
    },
    mounted() {
        this.isLoggedIn = this.$store.state.isLoggedIn;
        this.cart = this.$store.state.cart;
        console.log(this.cart);
    },


};
</script>
