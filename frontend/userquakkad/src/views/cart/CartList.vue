<template>

    <Crumbs title="CartList" />
    <section class="product-grids section">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-12">
                    <!-- Start Product Sidebar -->
                    <div class="product-sidebar">
                        <!-- Start Single Widget -->
                        <div class="single-widget search">
                            <h3>Search Product</h3>
                            <form action="">
                                <input type="text" placeholder="Search Here...">
                                <button type="submit"><i class="lni lni-search-alt"></i></button>
                            </form>
                        </div>
                    </div>
                    <PricingTable />
                    <!-- End Product Sidebar -->
                </div>
                <div class="col-lg-9 col-12">
                    <div class="product-grids-head">
                        <div class="product-grid-topbar">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-8 col-12">
                                    <div class="product-sorting">
                                        <label for="sorting">Sort by:</label>
                                        <select class="form-control" id="sorting">
                                            <option>Popularity</option>
                                            <option>Low - High Price</option>
                                            <option>High - Low Price</option>
                                            <option>Average Rating</option>
                                            <option>A - Z Order</option>
                                            <option>Z - A Order</option>
                                        </select>
                                        <h3 class="total-show-product">Showing: <span>1 - 12 items</span></h3>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-4 col-12">
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button class="nav-link " id="nav-grid-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-grid" type="button" role="tab"
                                                aria-controls="nav-grid" aria-selected="true"><i
                                                    class="lni lni-grid-alt"></i></button>
                                            <button class="nav-link active" id="nav-list-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-list" type="button" role="tab"
                                                aria-controls="nav-list" aria-selected="false"><i
                                                    class="lni lni-list"></i></button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                                <div class="row">

                                    <div class="col-lg-4 col-md-6 col-12">
                                        <!-- Start Single Product -->
                                        <div v-for="(item,index) in cart" :key="index" class="single-product">
                                            <div class="product-image">
                                                <img src="assets/images/producs/default.jpg" alt="product-image"
                                                    style="width:335px; height: 335px%;">


                                                <span class="sale-tag">-25%</span>
                                                <div class="button" @click="removeItem(index)">
                                                    <div class="btn">
                                                        <i class="bi bi-trash"></i>
                                                        Remove in Cart
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-info" @click="$router.push('/product-details/'+item.id)"
                                                style="cursor: pointer;">

                                                <span class="category">Speaker</span>
                                                <h4 class="title">
                                                    <div>Bluetooth Speaker</div>
                                                </h4>
                                                <ul class="review">
                                                    <li><i class="lni lni-star-filled"></i></li>
                                                    <li><i class="lni lni-star-filled"></i></li>
                                                    <li><i class="lni lni-star-filled"></i></li>
                                                    <li><i class="lni lni-star-filled"></i></li>
                                                    <li><i class="lni lni-star-filled"></i></li>
                                                    <li><span>5.0 Review(s)</span></li>
                                                </ul>
                                                <div class="price">
                                                    <span>$275.00</span>
                                                    <span class="discount-price">$300.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single Product -->
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <!-- Pagination -->
                                        <div class="pagination left">
                                            <ul class="pagination-list">
                                                <li><a href="javascript:void(0)">1</a></li>
                                                <li class="active"><a href="javascript:void(0)">2</a></li>
                                                <li><a href="javascript:void(0)">3</a></li>
                                                <li><a href="javascript:void(0)">4</a></li>
                                                <li><a href="javascript:void(0)"><i
                                                            class="lni lni-chevron-right"></i></a></li>
                                            </ul>
                                        </div>
                                        <!--/ End Pagination -->
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane show active fade" id="nav-list" role="tabpanel"
                                aria-labelledby="nav-list-tab">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <!-- Start Single Product -->
                                        <div v-for="(item,index) in cart" :key="index" class="single-product">
                                            <div class="row align-items-center">
                                                <div class="col-lg-4 col-md-4 col-12">
                                                    <div class="product-image">
                                                        <img src="assets/images/producs/default.jpg" alt="product-image"
                                                            style="width:335px; height: 335px;">
                                                        <span class="sale-tag">-50%</span>
                                                        <div class="button" @click="removeItem(index)">
                                                            <div class="btn">
                                                                <i class="bi bi-trash"></i>
                                                                Remove in Cart
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-12">
                                                    <div class="product-info" @click="$router.push('/product-details/'+item.id)"
                                                        >
                                                    <span class=" category">Headphones</span>
                                                        <h4 class="title">
                                                            <a>PX7 Wireless Headphones</a>
                                                        </h4>
                                                        <ul class="review">
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star-filled"></i></li>
                                                            <li><i class="lni lni-star"></i></li>
                                                            <li><span>4.0 Review(s)</span></li>
                                                        </ul>
                                                        <div class="price">
                                                            <span>$100.00</span>
                                                            <span class="discount-price">$200.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

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
            cart: [],
            isLoggedIn: false,
            isLoading: false,
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
    },
    mounted() {
        this.isLoggedIn = this.$store.state.isLoggedIn;
        this.cart = this.$store.state.cart;
        console.log(this.cart);
    },

};
</script>
