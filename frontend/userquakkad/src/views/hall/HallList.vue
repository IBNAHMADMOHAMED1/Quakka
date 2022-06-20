<template>
    <Crumbs title="BlogList" />
    <section class="section blog-section blog-list">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-12">
                    <div class="row">
                        <div v-if="isLoading" class="col-lg-6 col-md-6 col-12">
                            <div style="padding:300px;" class="text-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>

                        <div v-for="blog in halls" :key="blog.id" class="col-lg-6 col-md-6 col-12">
                            <div class="single-blog">
                                <div class="blog-img">
                                    <a>
                                        <img style="max-height: 256px; height: max-content"
                                            :src="getImgUrl(blog.images)" alt="#" />
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <a class="city">
                                        <span>
                                            {{ blog.address }}
                                        </span>
                                    </a>
                                    <h4>
                                        <a>
                                            {{ blog.name }}
                                        </a>
                                    </h4>
                                    <p style="max-height: 94px; height: 103px">
                                        {{ blog.description }}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>
                                    <a class="city">
                                        <span>
                                            {{ blog.price }} $ - day
                                        </span>
                                    </a>
                                    <div @click="readBlog(blog)" class="button">
                                        <a class="btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination left blog-grid-page">
                        <ul class="pagination-list">
                            <li><a>Prev</a></li>
                            <li class="active"><a>2</a></li>
                            <li><a>3</a></li>
                            <li><a>4</a></li>
                            <li><a>Next</a></li>
                        </ul>
                    </div>
                </div>
                <aside class="col-lg-4 col-md-12 col-12">
                    <div class="sidebar blog-grid-page">
                        <div class="widget popular-tag-widget">
                            <h5 class="widget-title">Popular Citys</h5>
                            <div style="cursor: pointer" class="tags" v-for="city in citys" :key="city">
                                <a @click="gethallsBycity(city)">{{city}}</a>

                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>

<script>
import Crumbs from '@/components/base/Crumbs.vue';
export default {
    name: "BlogArea",
    components: { Crumbs },
    data() {
        return {
            halls: [],
            isEmpty: false,
            isLoading: true,
            citys: [],
        };
    },
    methods: {
        readBlog(blog) {
            this.$router.push({
                name: "hall-details",
                params: {
                    id: blog.id,
                },
            });
        },
        getImgUrl(Imags) {
            const images = JSON.parse(JSON.stringify(Imags))
            if (images[0] == null) {
                return "https://via.placeholder.com/150";
            }
            let nameImg = images[0].name;
            let url = require.context("C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/src/assets/img/halls/", true, /\.(png|jpe?g|svg)$/);
            let img = url(`./${nameImg}`);
            return img;
        },
        gethalls() {
            this.isLoading = true;
            this.halls = [];
            setTimeout(() => {
                this.halls = this.$store.getters.halls;
                this.isLoading = false;
                this.halls ? this.halls : (this.isEmpty = true);

            }, 900);
        },
        gethallsBycity(city) {
            if (city == 'all') {
                this.gethalls();
            }
            else {
                this.halls = [];
                this.isLoading = true;
                setTimeout(() => {
                    this.halls = this.$store.getters.halls.filter((blog) => {
                        return blog.address == city;
                    });
                    this.isLoading = false;
                }, 900);
            }
        },
    },
    mounted() {
        this.$store.dispatch("getHalls");
        setTimeout(() => {
            this.halls = this.$store.getters.halls;
            this.isLoading = false;
            this.halls ? this.halls : (this.isEmpty = true);
            this.halls.forEach((blog) => {
                this.citys.push(blog.address);
            });
        }, 1300);
    },
};
</script>
