<template>
    <div class="widget popular-feeds">
        <h5 class="widget-title">Featured Posts</h5>
        <div class="popular-feed-loop">
            <div v-for="blog in blogs" :key="blog.id" class="single-popular-feed">
                <div style="cursor:pointer;" @click="readBlog(blog)" class="feed-desc">
                    <a class="feed-img">
                        <img :src="getImgUrl(blog.image)">
                    </a>
                    <h6 class="post-title"><a>{{blog.title}}</a></h6>
                    <span class="time"><i class="lni lni-calendar"></i>
                        {{
                        date_for_humans(blog.created_at)
                        }}
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogArea',
    
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
        },
        date_for_humans(date) {
            const moment = require("moment");
            return moment(date).format("DDth MMM YYYY");
        },
        getImgUrl(img) {
            if (img == null)
                return "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80";
            let url = require.context("C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/public/assets/img/blog/", true, /\.(png|jpe?g|svg)$/);
            return url('./' + img);
        }
    },
    mounted() {
        this.$store.dispatch("getBlogs");
        setTimeout(() => {
            this.blogs = this.$store.getters.getBlogs;
            this.blogs = this.blogs.slice(0, 3);

        }, 1000);
    }
}
</script>