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

                        <div v-for="blog in blogs" :key="blog.id" class="col-lg-6 col-md-6 col-12">
                            <div class="single-blog">
                                <div class="blog-img">
                                    <a>
                                        <img style="max-height: 256px; height: max-content" :src="getImgUrl(blog.image)"
                                            alt="#" />
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <a class="category">
                                        <span>
                                            {{ blog.category }}
                                        </span>
                                    </a>
                                    <h4>
                                        <a>
                                            {{ blog.title }}
                                        </a>
                                    </h4>
                                    <p style="max-height: 94px; height: 103px">
                                        {{ blog.content }}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    </p>
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
                      
                        <div class="widget categories-widget">
                            <h5 class="widget-title">Top Categories</h5>
                            <ul class="custom">
                                <li style="cursor: pointer">
                                    <a @click="getBlogsByCategory('all')">All</a>
                                </li>
                                <li style="cursor: pointer" v-for="category in categories" :key="category.id">
                                    <a @click="getBlogsByCategory(category)">{{category}}</a>
                                </li>

                            </ul>
                        </div>

                        <div class="widget popular-tag-widget">
                            <h5 class="widget-title">Popular Tags</h5>
                            <div style="cursor: pointer" class="tags" v-for="category in categories" :key="category.id">
                                <a @click="getBlogsByCategory(category)">{{category}}</a>

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
      blogs: [],
      isEmpty: false,
        isLoading: true,
      categories: [],
    };
  },
  methods: {
    readBlog(blog) {
      this.$router.push({
        name: "blog-details",
        params: {
          id: blog.id,
        },
      });
      },
      getImgUrl(img) {
          if (img == null)
              return "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80";
          let url = require.context("C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/public/assets/img/blog/", true, /\.(png|jpe?g|svg)$/);
          return url('./' + img);
      },
      getBlogs()
      {
          this.isLoading = true;
          this.blogs = [];
          setTimeout(() => {
              this.blogs = this.$store.getters.getBlogs;
              this.isLoading = false;
              this.blogs ? this.Blogs : (this.isEmpty = true);
            
          }, 900);
        },
      getBlogsByCategory(category) {
          if (category == 'all') {
              this.getBlogs();
          }
          else {
              this.blogs = [];

              this.isLoading = true;
              setTimeout(() => {
                    this.blogs = this.$store.getters.getBlogs.filter((blog) => {
                        return blog.category == category;
                    });
                    this.isLoading = false;
              }, 900);
          }
      },
  },
  mounted() {
    this.$store.dispatch("getBlogs");
    setTimeout(() => {
      this.blogs = this.$store.getters.getBlogs;
      this.isLoading = false;
        this.blogs ? this.Blogs : (this.isEmpty = true);
        this.blogs.forEach((blog) => {
            this.categories.push(blog.category);
        });
    }, 1300);
  },
};
</script>
