<template>
<div
v-if="loading"
>  <Loader />
</div>
 <section 
 v-if="!loading"
 class="trending-product section">

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2>Trending hall</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form.</p>
                            
                    </div>
                </div>
            </div>
            <div class="row"> 
                <div 
                v-for="hall in halls"
                class="col-lg-3 col-md-6 col-12">
                    <!-- Start Single hall -->
                    {{}}
                    <div class="single-product">
                        <div class="product-image">
                            <img 
                            style="height:360px;"
                            :src="getImgUrl(hall.images)"
                             alt="#">
                            <div class="button">
                                <button 
                                @click="addToCart(hall)"
                                class="btn"><i class="lni lni-cart"></i> Add to Cart</button>
                            </div>
                        </div>
                        <div
                        style="
                        cursor:pointer
                        "
                        @click="showhall(hall)"
                        class="product-info">
                            <span class="category">
                                 category:
                              {{
                            hall.category
                              ? hall.category.name
                              : "No category"
                          }}
                            </span>
                            <h4 class="title">
                                <span >
                                    {{hall.name}}
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
                                     {{hall.price}}$
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- End Single hall -->
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
    name: "hallGrids",
    components: {
        Loader
    },
    data() {
        return {
            halls: [],
            loading: true,
        }
    },
    methods: {
        addToCart(hall) {
            store.dispatch("addToCart", hall);
            Swal.fire({
                position: "top-end",
                type: "success",
                title: "Added to cart",
                showConfirmButton: false,
                timer: 1000
            });

        },
        showhall(hall) {
            this.$router.push({
                name: "hall-details",
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
    // get the product from stor
      store.dispatch("gethalls");
    setTimeout(() => {
      this.halls = store.state.halls;
      // max halls Is 8
        this.halls = this.halls.slice(0, 8);
      this.loading = false;
    }, 1300);
    
    },

}

   

</script>