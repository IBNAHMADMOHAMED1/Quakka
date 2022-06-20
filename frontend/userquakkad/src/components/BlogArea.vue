<template>
  <section class="blog-section section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Our Latest News</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div v-if="isLoading">
        <Loading />
      </div>
      <div v-else class="row">
        <div
          v-for="blog in blogs"
          :key="blog.id"
          class="col-lg-4 col-md-6 col-12"
        >
          <div class="single-blog">
            <div class="blog-img">
              <a>
                <img
                  style="max-height: 256px; height: max-content"
                  :src="getImgUrl(blog.image)"
                  alt="#"
                />
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
              </p>
              <div @click="readBlog(blog)" class="button">
                <a class="btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-40">
        <div class="col-12 section-title">
          <div @click="$router.push('/blog-list')" class="button">
            <a class="btn">More News</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loading from "./base/Loading.vue";
export default {
  name: "BlogArea",
  components: {
    Loading,
  },
  data() {
    return {
      blogs: [],
      isEmpty: false,
      isLoading: true,
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
      let url = require.context(
        "C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/public/assets/img/blog/",
        true,
        /\.(png|jpe?g|svg)$/
      );
      return url("./" + img);
    },
  },
  mounted() {
    this.$store.dispatch("getBlogs");
    setTimeout(() => {
      this.blogs = this.$store.getters.getBlogs;
      this.isLoading = false;
      this.blogs ? this.Blogs : (this.isEmpty = true);
      this.blogs = this.blogs.slice(0, 3);
    }, 1300);
  },
};
</script>
