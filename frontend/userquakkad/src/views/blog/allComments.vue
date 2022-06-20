<template>
    <div class="post-comments">
        <h3 class="comment-title"><span>Post comments</span></h3>
        <ul class="comments-list">
            <li v-if="loading">
                loading comments
                <div class="loader">
                    <div class="loader-inner">
                        <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                        </div>
                        <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                        </div>
                        <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                        </div>
                        <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                        </div>
                        <div class="loader-line-wrap">
                            <div class="loader-line"></div>
                        </div>
                    </div>
                </div>
            </li>
            <li v-if="comments.length == 0">
                <div class="no-comments">
                    <i class="lni lni-comments-alt"></i>
                    <span>No comments yet</span>
                </div>
            </li>
        </ul>
        <ul class="comments-list">
            

            <div v-for="comment in comments" :key="comment.id"> 
                <li v-if="comment.client_id != id" class="mt-5">
                    <div class="comment-img">
                        <img src="/assets/av-2.png" alt="img" />
                    </div>
                    <div class="comment-desc">
                        <div class="desc-top">
                            <h6>{{ comment.client.username }}</h6>
                            <span class="date">{{
                                date_for_humans(comment.created_at)
                                }}</span>
                            <a @click="reply(comment.client.username)" class="reply-link"><i
                                    class="lni lni-reply"></i>Reply</a>
                        </div>
                        <div v-html="getComment(comment.comment)"></div>
                        <p>
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                        </p>
                    </div>
                </li>
                <div v-if="comment.client_id == id">
                    <li class="children mt-5">
                        <div class="comment-img">
                            <img src="/assets/av-1.png" alt="img" />
                        </div>
                        <div class="comment-desc">
                            <div class="desc-top">
                                <h6>
                                    {{ comment.client.username }}
                                </h6>
                                <span class="date">{{
                                    date_for_humans(comment.created_at)
                                    }}</span>
                                <a @click="deleteComment(comment.id)" class="reply-link"><i
                                        class="lni lni-trash-can"></i>
                                </a>
                            </div>
                            <div v-html="getComment(comment.comment)"></div>
                            <p>
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                            </p>
                        </div>
                    </li>
                </div>
            </div>
        </ul>

    </div>
</template>
<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
export default {
    name: "allComments",
    props: {
 
  },
  data() {
    return {
      comments: [],
      loading: true,
      ClinetCommentLogin: [],
      id: 0,
        comment: "",
        blog_id: this.$route.params.id,
      
    };
  },
  mounted() {
    let clinet = JSON.parse(localStorage.getItem("client"));
      this.id = clinet.id;
    console.log(this.blog_id);
    this.$store.dispatch("getallComments", this.blog_id);
    setTimeout(() => {
      this.loading = false;
      this.comments = this.$store.getters.getComments;
    }, 1300);
  },
  methods: {
    date_for_humans(date) {
      const moment = require("moment");
      return moment(date).fromNow();
    },
    getComments() {
      this.comments = this.$store.getters.getComments;
    },
    reply(username) {
      this.comment = "@" + username + " ";
      this.$store.dispatch("setCommentReply", this.comment);
    },
    getComment(comment) {
      let comment_reply = this.$store.getters.getCommentReply;
      return comment.replace(/@\w+/g, function (match) {
        return '<span class="comment-reply">' + match + "</span>";
      });
      },
      deleteComment(id) {
          const params = { model: "comments", id: id };
          Swal.fire({ title: "Are you sure?", icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Yes, delete it!", })
              .then((result) => {
              if (result.value) {
              this.comments = this.comments.filter((comment) => comment.id != id);
              this.$store.dispatch("delete", params);
              this.getComments();
            }
          });
      }
  },
  computed: {
    ...mapGetters(["getComments"]),
  },
  watch: {
    getComments: function (val) {
      this.comments = val;
    },
    comments: function (val) {
      this.comments = val;
      },
  
      $route: function (val) {
        this.blog_id = val.params.id;
      },
    blog_id: function (val) {
        this.$store.dispatch("getallComments", val);
    }
  },
};
</script>

<style>

.comment-reply {
  color: #ffc107;
  padding-right: 5px;
}

</style>
