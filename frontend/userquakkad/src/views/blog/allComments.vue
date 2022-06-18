<template>
    <div class="post-comments">
        {{ comments }}\\\\\\\\\
        {{ ClinetCommentLogin }}
        <h3 class="comment-title"><span>Post comments</span></h3>
        <ul class="comments-list">
            <li v-if="loading ">
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
        </ul>
        <ul class="comments-list">
            <div v-for="comment in comments" :key="comment.id">
                <li v-if="!loading" class="mt-5">
                    <div class="comment-img">
                        <img src="/assets/av-2.png" alt="img">
                    </div>
                    <div class="comment-desc">
                        <div class="desc-top">
                            <h6> {{ comment.client.username }}</h6>
                            <span class="date">{{ date_for_humans(comment.created_at)}}</span>
                            <a class="reply-link"><i class="lni lni-reply"></i>Reply</a>
                        </div>
                        <p>
                            {{ comment.comment }}
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                        </p>
                    </div>
                </li>
            </div>
            <div v-for="comment in ClinetCommentLogin" :key="comment.id">
                <li v-if="!loading" class="children mt-5">
                    <div class="comment-img">
                        <img src="/assets/av-1.png" alt="img">
                    </div>
                    <div class="comment-desc">
                        <div class="desc-top">
                            <h6>
                                {{ comment.client.username }}
                            </h6>
                            <span class="date">{{ date_for_humans(comment.created_at)}}</span>
                            <a href="javascript:void(0)" class="reply-link"><i class="lni lni-reply"></i>Reply</a>
                        </div>
                        <p>
                            {{ comment.comment }}
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                        </p>
                    </div>
                </li>
            </div>
        </ul>
    </div>
</template>
<script>
export default {
    name: "allComments",
    data()
    {
        return {
            comments: [],
            loading: true,
            ClinetCommentLogin:[]  
        }
    },
    mounted() {
      let  clinet = JSON.parse(localStorage.getItem('client'))
        this.$store.dispatch("getallComments", this.$route.params.id)
        setTimeout(() => {
            this.loading = false;
            const comments = this.$store.getters.getComments;
            // this.ClinetCommentLogin = comments.map(comment => {
            //     return comment.client
            // })
            this.ClinetCommentLogin = this.$store.getters.getComments.filter(comment => {
                return comment.client_id == clinet.id
            })   
            this.comments = this.$store.getters.getComments.filter(comment => {
                return comment.client_id != clinet.id
            })       
        
        }, 1300);
            console.log(this.ClinetCommentLogin);
    
    }, 
    methods: {
        date_for_humans(date) {
            const moment = require("moment");
            return moment(date).fromNow();
        },
    }
}
</script>