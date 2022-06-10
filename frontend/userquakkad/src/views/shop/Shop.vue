<template>
    <Main>
        <Crumbs title="Shop" />
        <section class="product-grids section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-12">

                        <div class="product-sidebar">
                            <div class="single-widget search">
                                <h3>Search Product</h3>
                                <form>
                                    <input @keypress="searchKeyPress" type="text" placeholder="Search Here..."
                                        v-model="search">
                                    <button 
                                    @click.prevent="searchProduct"
                                    type="submit"><i class="lni lni-search-alt"></i></button>
                                </form>
                            </div>
                            <div class="single-widget">
                                <AllCategories />
                            </div>
                            <div class="single-widget range">
                                <PriceRange />
                            </div>
                            <FilterByPrice />
                            <FilterByBrand />
                        </div>
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
                                                <button class="nav-link active" id="nav-grid-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-grid" type="button" role="tab"
                                                    aria-controls="nav-grid" aria-selected="true"><i
                                                        class="lni lni-grid-alt"></i></button>
                                                <button class="nav-link" id="nav-list-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-list" type="button" role="tab"
                                                    aria-controls="nav-list" aria-selected="false"><i
                                                        class="lni lni-list"></i></button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-content" id="nav-tabContent">

                                <div class="tab-pane fade show active" v-if="loading">
                                    <Laoding />
                                </div>
                                <div class="tab-pane fade show active" id="nav-grid" role="tabpanel"
                                    aria-labelledby="nav-grid-tab">
                                    <div v-if="!loading" class="row">
                                        <div v-for="product in products" :key="product.id"
                                            class="col-lg-4 col-md-6 col-12">

                                            <div class="single-product">
                                                <div class="product-image">
                                                    <img style="height:260px;" :src="getImgUrl(product.images)" alt="#">

                                                    <div class="button">
                                                        <button @click="addToCart(product)" class="btn"><i
                                                                class="lni lni-cart"></i> Add to Cart</button>
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
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <Pagination />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                                    <div v-if="!loading" class="row">
                                        <div v-for="product in products" :key="product.id"
                                            class=" col-lg-12 col-md-12 col-12">
                                            <!-- Start Single Product -->
                                            <div class="single-product">
                                                <div class="row align-items-center">
                                                    <div class="col-lg-4 col-md-4 col-12">
                                                        <div class="product-image">
                                                            <img style="
                                                            max-height: 300px;
                                                            " :src="getImgUrl(product.images)" alt="#">
                                                            <div class="button">
                                                                <button @click="addToCart(product)" class="btn"><i
                                                                        class="lni lni-cart"></i> Add to
                                                                    Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div @click="showProduct(product)" style="cursor:pointer"
                                                        class="col-lg-8 col-md-8 col-12">
                                                        <div class="product-info">
                                                            <span class="category"> category:
                                                                {{
                                                                product.category
                                                                ? product.category.name
                                                                : "No category"
                                                                }}</span>
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
                                                                {{product.price}}$
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <Pagination />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Main>
</template>

<script>
import Loader from "@/components/base/Loader.vue";
import store from "@/store";
import Swal from "sweetalert2";
import Crumbs from '@/components/base/Crumbs'
import Main from '@/components/Main'
import AllCategories from './filter/AllCategories.vue'
import PriceRange from './filter/PriceRange.vue'
import FilterByPrice from './filter/FilterByPrice.vue'
import FilterByBrand from './filter/FilterByBrand.vue'
import Pagination from '@/components/base/Pagination.vue'
import Laoding from './filter/Loading.vue'
export default {
    name: 'Shop',
    components: {
        Crumbs, Main, Loader, AllCategories, PriceRange, FilterByPrice, Pagination, FilterByBrand, Laoding
        
    },
    data() {
        return {
            products: [],
            loading: true,
            search:''
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
            this.$router.push({name: "product-details",params: { id: product.product_id}});
        },
        getImgUrl(image) {
            const images = JSON.parse(JSON.stringify(image))
            const imagesArray = Object.values(images)
            let url = require.context('C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/src/assets/img/product/', false, /\.(png|jpe?g|svg)$/);
            return url('./' + imagesArray[0].name)
        },
        get_products() {
            this.products = this.$store.state.products;
        },
        searchKeyPress() {
            if (this.search.length > 0) {
                this.products = this.products.filter((product) => {
                    return product.name.toLowerCase().includes(this.search.toLowerCase());
                });
                if (this.products.length == 0) {
                    Swal.fire({
                        position: "top-end",
                        type: "error",
                        title: "No products found",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            } 
            else {
                this.get_products();
            }
        },
    },


    mounted() {
        // get the product from stor
        store.dispatch("getProducts");
        setTimeout(() => {
            this.products = store.state.products;
            // max products Is 8
            this.products = this.products.slice(0, 8);
            this.loading = false;
        }, 4300);

    },
}
</script>
