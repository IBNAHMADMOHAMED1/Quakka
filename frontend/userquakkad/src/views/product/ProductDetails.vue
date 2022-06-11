<template>

<section class="item-details section">
  <div
  v-if="loading"
  style="height: 100vh;"
  >

      <Loading 
       
       :Seconds="MSeconds"
       />
  </div>
        <div
        v-if="!loading"
        class="container">
            <div class="top-area">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="product-images">
                            <main id="gallery">
                                <div class="main-img">
                                    <img src="https://img.freepik.com/photos-gratuite/mannequin-beau-visage-corps-parfait-vetue-robe-mode-tenant-sac-main-cuir-marron-toute-longueur_273443-3991.jpg?w=1060&t=st=1654457115~exp=1654457715~hmac=3097e782a415be8907de0e85b54fc29d9f8d845ed6eff54a6b57060fd0390478" id="current" alt="#">
                                </div>
                                <div
                                 class="images">
                                    <div
                                        v-for="(image, index) in product.images">
                                        <img :src="getImgUrl(image.name)" class="img" alt="#">
                                        </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="product-info">
                            <h2 class="title">
                                <span>{{product.name}}</span>
                            </h2>
                            <p class="category"><i class="lni lni-tag"></i> Drones:
                            {{product.category.name}}
                            </p>
                            <h3 class="price">
                                {{product.price}}
                                <span>
                                    {{product.price-product.price*0.2}}
                                </span></h3>
                            <p class="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt
                                ut labore et dolore magna aliqua.
                                
                                {{product.description}}
                                
                                
                                </p>
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-12">
                                    <div class="form-group color-option">
                                        <label class="title-label" for="size">Choose color</label>
                                        <div class="single-checkbox checkbox-style-1">
                                            <input type="checkbox" id="checkbox-1" checked>
                                            <label for="checkbox-1"><span></span></label>
                                        </div>
                                        <div class="single-checkbox checkbox-style-2">
                                            <input type="checkbox" id="checkbox-2">
                                            <label for="checkbox-2"><span></span></label>
                                        </div>
                                        <div class="single-checkbox checkbox-style-3">
                                            <input type="checkbox" id="checkbox-3">
                                            <label for="checkbox-3"><span></span></label>
                                        </div>
                                        <div class="single-checkbox checkbox-style-4">
                                            <input type="checkbox" id="checkbox-4">
                                            <label for="checkbox-4"><span></span></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-12">
                                    <div class="form-group">
                                        <label for="color">Battery capacity</label>
                                        <select class="form-control" id="color">
                                            <option>5100 mAh</option>
                                            <option>6200 mAh</option>
                                            <option>8000 mAh</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-12">
                                    <div class="form-group quantity">
                                        <label for="color">Quantity</label>
                                        <input class="form-control" 
                                        :max="product.quantity"
                                        min="1"
                                        type="number" value="1">

                                    </div>
                                </div>
                            </div>
                            <div class="bottom-content">
                                <div class="row align-items-end">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="button cart-button">
                                            <button class="btn" style="width: 100%;">Add to Cart</button>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="wish-button">
                                            <button class="btn"><i class="lni lni-reload"></i> Compare</button>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="wish-button">
                                            <button 
                                            @click="addToWishList"
                                            class="btn"><i class="lni lni-heart"></i> To Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-details-info">
                <Details />
                <div class="row">
                  <ProductReview/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductReview from './ProductReview.vue'
import Details from './Details.vue'
import Loading from './Loading.vue'
import Swal from 'sweetalert2'
export default {
    name:'product-details',
    components: {
        ProductReview,Details,Loading
    },
    data(){
        return{
            product:{},
            loading:true,
            imagess:[],
            MSeconds:0,
        }
    },
    
    methods: {
        getImgUrl(nameImg){
            let url = require.context("C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/src/assets/img/product", true, /\.(png|jpe?g|svg)$/);
            return url (`./${nameImg}`);
        },
        addToWishList(){
            this.$store.dispatch('addToWishList',this.product);
            Swal.fire({
                title: 'Success',
                text: 'Product added to wishlist',
                type: 'success',
                confirmButtonText: 'OK'
            })
        },
    },
    beforeCreate() {
        let productId = this.$route.params.id;
        setTimeout(() => {
           fetch(`http://localhost/QuakkaProject/products/getone/${productId}`)
        .then((response) => response.json())
        .then((json) => {
          this.product = json[1];

          this.loading = false;
          this.product.images.forEach((element) => {
            this.imagess.push(this.getImgUrl(element.name));
            this.MSeconds = new Date().getTime();
          });
        });
    }, 2000)
    }
    
}

</script>

<style>


</style>