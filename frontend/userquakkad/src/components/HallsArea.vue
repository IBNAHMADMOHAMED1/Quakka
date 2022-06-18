<template>
    <div v-if="loading">
        <Loader />
    </div>
    <section v-if="!loading" class="trending-product section">

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
                <div v-for="hall in halls" :key="hall.id" class="col-lg-3 col-md-6 col-12" style="width:30%;">
                    <div class="single-product">
                        <div class="product-image">
                            <img style="height:360px;" :src="getImgUrl(hall.images)" alt="#">
                            <div class="button">
                                <button @click="showhall(hall)" class=" btn">
                                    View Details</button>
                            </div>
                        </div>
                        <div style="
                        cursor:pointer
                        " @click="showhall(hall)" class="product-info">
                            <ul style="gap: 10px;" class="meta-info d-flex">
                                <li>
                                    <a>
                                        <i class="lni lni-users"></i>
                    
                                        {{ hall.Nbr_place }}
                                    </a>
                                </li>
                                <li>
                                    <a><i class="lni lni-dollar"></i>
                                        {{hall.price}}/day
                                    </a>
                                </li>
                                <li>
                                    <a><i class="lni lni-map-marker"></i>
                                        {{ hall.address}}
                                    </a>
                                </li>
                            </ul>
                            <h4 class="title">
                                <span>
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
    name: "hallArea",
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
                    id: hall.id
                }
            });
        },
        getImgUrl(Imags) {
            const images = JSON.parse(JSON.stringify(Imags))
            console.log(images[0]);
            if (images[0] == null) {
                return "https://via.placeholder.com/150";
            }
            

            let nameImg = images[0].name;

            let url = require.context("C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/src/assets/img/halls/", true, /\.(png|jpe?g|svg)$/);
            let img = url(`./${nameImg}`);
            return img;

        },
    },
    

    mounted() {
        store.dispatch("getHalls");
    setTimeout(() => {
      this.halls = store.state.halls;
        this.halls = this.halls.slice(0, 8);
      this.loading = false;
    }, 1300);
    
    },

}

   

</script>