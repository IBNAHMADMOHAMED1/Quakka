<template>
    <section class="blog-section section">
        
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2>Our Latest News</h2>
                        <p>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div v-if="isLoading">
                <Loading />
            </div>
            <div v-else class="row">


                <div 
                v-for="blog in blogs" :key="blog.id"
                class="col-lg-4 col-md-6 col-12">
                    <div class="single-blog">
                        <div class="blog-img">
                            <a>
                                <img src="assets/images/23.jpg" alt="#">
                            </a>
                        </div>
                        <div class="blog-content">
                            <a class="category">
                                <span>
                                    {{blog.category}}
                                </span>
                            </a>
                            <h4>
                                <a>
                                    {{blog.title}}
                                </a>
                            </h4>
                            <p>
                                {{blog.content}}
                            </p>
                            <div @click="readBlog(blog)" class="button">
                                <a class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Loading from './base/Loading.vue';
export default {
    name: 'BlogArea',
    components: {
    Loading
},
    data() {
        return {
           blogs: [],
            isEmpty: false,
            isLoading: true,
        }
    },
    methods: {
        readBlog(blog) {
            this.$router.push({
                name: 'blog-details',
                params: {
                    id: blog.id
                }
            })
        }
       
    },
    mounted() {
      this.$store.dispatch("getBlogs");
        setTimeout(() => {
            this.blogs =this.$store.getters.getBlogs;
            this.isLoading = false;
            this.blogs ? this.Blogs : this.isEmpty = true;
        }, 1300);

    },
}
</script>