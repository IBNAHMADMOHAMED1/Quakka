<template>

    <Crumbs title="Singleblog" />

    <section class="section blog-single">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-12">
                    <div class="single-inner">
                        <div class="post-details">
                            <div class="main-content-head">
                                <div class="post-thumbnils">
                                    <img :src="getImgUrl(blog.image)" alt="#">
                                </div>
                                <div class="meta-information">
                                    <h2 class="post-title">
                                        <a>
                                            {{blog.title}}
                                        </a>
                                    </h2>
                                    <ul class="meta-info">

                                        <li>
                                            <a><i class="lni lni-calendar"></i> {{ date_for_humans(blog.created_at) }}
                                            </a>
                                        </li>
                                        <li>
                                            <a><i class="lni lni-tag"></i>
                                                {{blog.category}}</a>

                                        </li>
                                        <li>
                                            <a><i class="lni lni-timer"></i> 5 min read</a>
                                        </li>
                                    </ul>
                                    <!-- End Meta Info -->
                                </div>
                                <div class="detail-inner">
                                    <p>
                                        {{blog.content}}
                                        realized by the charms of pleasure of the moment, so blinded by desire, that
                                        they
                                        cannot
                                        foresee the pain and trouble that are bound to ensue; and equal blame belongs to
                                        those
                                        who fail in their duty through weakness of will, which is the same as saying
                                        through
                                        shrinking from toil and pain. These cases are perfectly simple and easy to
                                        distinguish.
                                        In a free hour, when our power of choice is untrammelled and when nothing
                                        prevents
                                        our
                                        being able to do what we like best, every pleasure is to be welcomed and every
                                        pain
                                        avoided.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
                                    <!-- post quote -->

                                    <h3>Setting the mood with incense</h3>
                                    <p>Remove aversion, then, from all things that are not in our control, and transfer
                                        it
                                        to
                                        things contrary to the nature of what is in our control. But, for the present,
                                        totally
                                        suppress desire: for, if you desire any of the things which are not in your own
                                        control,
                                        you must necessarily be disappointed; and of those which are, and which it would
                                        be
                                        laudable to desire, nothing is yet in your possession. Use only the appropriate
                                        actions
                                        of pursuit and avoidance; and even these lightly, and with gentleness and
                                        reservation.
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure
                                        dolor in reprehenderit. </p>
                                    <div class="post-bottom-area">
                                        <!-- Start Post Tag -->
                                        <div class="post-tag">
                                            <ul>
                                                <li><a>#{{blog.category}}</a></li>

                                            </ul>
                                        </div>
                                        <!-- End Post Tag -->
                                        <PostSocialShare />


                                    </div>
                                </div>
                            </div>
                            <!-- Comments -->
                            <allComments />
                             <!-- Comments -->
                            <Comments :id_blog="blog.id" />

                        </div>
                    </div>
                </div>
                <aside class="col-lg-4 col-md-12 col-12">
                    <div class="sidebar blog-grid-page">
                        <!-- Start Single Widget -->
                        <div class="widget search-widget">
                            <h5 class="widget-title">Search This Site</h5>
                            <form action="#">
                                <input type="text" placeholder="Search Here...">
                                <button type="submit"><i class="lni lni-search-alt"></i></button>
                            </form>
                        </div>

                        <SingleWidget />

                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>

<script>
import Comments  from './CommentsForm'
import SingleWidget  from './SingleWidget'
import Crumbs from '@/components/base/Crumbs.vue'
import PostSocialShare from './PostSocialShare.vue'
import allComments from './allComments.vue'
import Swal from 'sweetalert2'
import { watch } from '@vue/runtime-core'
export default {
    name: 'BlogSingle',
    components: {
        Comments, Crumbs, SingleWidget, PostSocialShare, allComments
    },
    data() {
        return {
            blog: [],
        }
    },
    methods: {
        getImgUrl(img) {
            if (img == null)
                return "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80";
            let url = require.context("C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/public/assets/img/blog/", true, /\.(png|jpe?g|svg)$/);
            return url('./' + img);
        },
        date_for_humans(date) {
            const moment = require("moment");
            return moment(date).fromNow();
        },
       
    },
    mounted() {
        const id = this.$route.params.id
        const newLocal = "http://localhost/QuakkaProject/blogs/_oneBlog/" + this.$route.params.id;
        fetch(newLocal)
            .then((response) => response.json())
            .then((data) => {
                if (data[0]) {
                   this.blog = data[1];
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "You have an error",
                    });
                }
            });
    },
    
    watch: {
        $route: function () {
            const id = this.$route.params.id
            const newLocal = "http://localhost/QuakkaProject/blogs/_oneBlog/" + this.$route.params.id;
            fetch(newLocal)
                .then((response) => response.json())
                .then((data) => {
                    if (data[0]) {
                        this.blog = data[1];
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "You have an error",
                        });
                    }
                });
        }
    }

   
}
</script>