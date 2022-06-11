<template>

    <section class="trending-product section">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2>Trending Product</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form.</p>

                    </div>
                </div>
            </div>
            <div v-if="loading">
                <Loader />
            </div>
            <div v-if="!loading" class="row">
                <div v-for="product in products" :key="product.id" class="col-lg-3 col-md-6 col-12">

                    <div class="single-product">
                        <div class="product-image">
                            <img style="height:360px;" :src="getImgUrl(product.images)" alt="#">
                            <div class="button">
                                <button :disabled="product.quantity <= 0" @click="addToCart(product)" class="btn"><i
                                        class="lni lni-cart"></i> Add to
                                    Cart</button>
                            </div>
                        </div>
                        <div style="
                        cursor:pointer
                        " @click="showProduct(product)" class="product-info">
                            <span class="category">
                                category:
                                {{
                                product.category
                                ? product.category.name
                                : "No category"
                                }}
                            </span>
                            <span v-if="product.quantity <=0" class="badge badge-danger" style="color:red;">Out ofStock</span>
                            <span v-else class="badge badge-success"  style="color:green;">In Stock</span>
                            <h4 class="title">
                                <span>
                                    {{product.name}}
                                </span>
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
                                <span>
                                    {{product.price}}$
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Product -->
                </div>

            </div>
        </div>
    </section>

</template>

<script>
import Loader from "@/components/base/Loader.vue";
import store from "@/store";

import Swal from "sweetalert2";

export default {
    name: "ProductGrids",
    components: {
        Loader
    },
    data() {
        return {
            products: [],
            loading: true,
        }
    },
    methods: {
        addToCart(product) {
            store.dispatch("addToCart", product);
            Swal.fire({
                position: "top-end",
                type: "success",
                title: "Added to cart",
                showConfirmButton: false,
                timer: 1000
            });

        },
        showProduct(product) {
            this.$router.push({
                name: "product-details",
                params: {
                    id: product.product_id
                }
            });
        },
        getImgUrl(image) {
            const images = JSON.parse(JSON.stringify(image))
            const imagesArray = Object.values(images)  
            console.log(imagesArray[0].name)
            let url = require.context('C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/src/assets/img/product/', false, /\.(png|jpe?g|svg)$/);
            return url('./' + imagesArray[0].name)
           
            
        }
    },
    mounted() {
      store.dispatch("getProducts");
    setTimeout(() => {
      this.products = store.state.products;
        this.products = this.products.slice(0, 8);
      this.loading = false;
    }, 1300);
    
    },

}

   

</script>