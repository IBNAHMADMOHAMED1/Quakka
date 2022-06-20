<template>
    <div class="comment-form">
        <h3 class="comment-reply-title">Leave a comment</h3>
        <div v-if="!isLoggedIn">
            <p>You must be logged in to send a demand to Reserve.</p>
            <p>
                <router-link to="/login">Login</router-link>
                or
                <router-link to="/register">Register</router-link>
            </p>

        </div>
        <form>
            <div v-if="isLoggedIn" class="row">

                <div class="col-12">
                    <div class="form-box form-group">
                        <textarea name="#" class="form-control form-control-custom" v-model="comment.comment"
                            placeholder="Your Comments"></textarea>
                    </div>
                </div>
                <div class="col-12">
                    <div class="button">
                        <button @click.prevent="createComment" type="submit" class="btn">Post Comment</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
import { mapGetters } from 'vuex'
export default {
    name: 'CommentForm',
    props: {
        id_blog: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            comment: {
                comment: '',
            },
            isLoggedIn: false,
        }
    },
    mounted() {
        if (localStorage.getItem('client') || this.$store.getters.isLoggedIn)
            this.isLoggedIn = true;
        this.$store.dispatch('getallComments', this.id_blog);
    },
    methods: {
        createComment() {
            const client = JSON.parse(localStorage.getItem('client'));
            const data = {
                comment: this.comment.comment,
                blog_id: this.id_blog,
                client_id:client.id,
            }
            if (this.comment.comment === '') 
                Swal.fire({
                    title: 'Error',
                    text: 'Please fill all fields',
                    type: 'error',
                    confirmButtonText: 'OK'
                })
            else 
                this.$store.dispatch('createComment', data)
            this.comment.comment = '';
            
        }
    },
   
    computed: {
       ...mapGetters(['getCommentReply']),
    },
    watch: {
        getCommentReply() {
            this.comment.comment = this.getCommentReply
        }
    },
}

</script>