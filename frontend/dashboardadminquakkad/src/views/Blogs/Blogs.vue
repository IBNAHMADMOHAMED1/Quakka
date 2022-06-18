<template>
    <div>
        <Main>

            <BreadCrumb :items="['Dashboard','Blogs']" />
            <div class="container mx-auto py-6 px-4" x-data="datatables()" x-cloak>
                <h1 class="text-3xl py-4 border-b mb-10">Blogs List</h1>
                <input type="search" v-model="search" 
                @keypress="searchKeyPress"
                @keyup="searchKeyUp"
                class="
                  w-full
                  pl-10
                  pr-4
                  py-2
                  
                  shadow
                  focus:outline-none focus:shadow-outline
                  text-gray-600
                  font-medium
                " placeholder="Search..." />
                <div v-if="loading">
                    <Loading />
                </div>
                <section class="text-gray-700 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div v-if ="!loading" class="flex flex-wrap -m-4">
                        <div v-if="isEmpty == true && Blogs.length == 0" class="flex flex-col items-center justify-center">
                            <div class="flex flex-col items-center justify-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-24 h-24 text-gray-400">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-8.707a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clip-rule="evenodd" />
                                </svg>
                                <p class="text-gray-500 text-center text-sm">No results found</p>
                            </div>
                        </div>
                            <div v-for="(blog,index) in Blogs" :key="index" class="p-4 md:w-1/3">
                                <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                                        :src="getImgUrl(blog.image)" alt="photo" />
                                    <div class="p-6">
                                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                            {{blog.category}}

                                        </h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                                            {{blog.title}}
                                        </h1>
                                        <p class="leading-relaxed mb-3">
                                            {{blog.content}}
                                            jianbing microdosing tousled waistcoat.</p>
                                        <div class="flex items-center flex-wrap ">
                                            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                {{ date_for_humans(blog.created_at) }}

                                            </a>
                                            <span @click="editBlog(blog)" 
                                                class="text-green-600 cursor-pointer mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                                                
                                                <EditIcon />
                                            </span>
                                            <span @click="delete_blog(blog.id)"
                                                class="text-red-500 cursor-pointer inline-flex items-center leading-none text-sm">
                                                <TrashIcon />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </Main>
    </div>
</template>

<script>
import store from "@/store";
import Main from "@/components/Main.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import LinkIcon from "@/components/icons/LinkIcon.vue";
import Loading from "./Loading.vue";
import BreadCrumb from "@/components/base/BreadCrummb.vue";
import Swal from "sweetalert2";

export default {
    name: "createProduct",
    components: { Main, EditIcon, TrashIcon, LinkIcon, Loading, BreadCrumb },

    data() {
        return {
            Blogs: [],
            loading: true,
            open_modal: false,
            search: "",
            searchIsLoading: false,
            items: [],
            isEmpty: false,
        };
    },
    methods: {
        creat_status(value) {
            if (value) {
                this.creat_status_class = "text-green-500";
                return "Available";
            }
            else {
                this.creat_status_class = "text-red-500";
                return "Not available";
            }
        },
        date_for_humans(date) {
            const moment = require("moment");
            return moment(date).fromNow();
        },
      
        editBlog(blog) {
            blog = JSON.parse(JSON.stringify(blog));
            this.$router.push({name: "edit-blog",  params: { blogId: blog.id,}});
        },
        delete_blog(id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    let isDelete = false;
                    let params = {id: id, model: "blogs",}
                    this.$store.dispatch("delete", params);
                    this.Blogs = this.Blogs.filter(
                        (blog) => blog.id !== id
                    );
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire("Cancelled", "Your blog is safe :)", "error");
                }
            });
        },
        get_Blogs() {
            this.Blogs = this.$store.state.blogs;
        },
        searchKeyPress() {
            if (this.search.length == 0) 
                return this.Blogs = this.$store.state.blogs;
            this.loading = true;
            this.searchIsLoading = true;
            setTimeout(() => {
                this.items = this.Blogs.filter((item) => {
                    return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                });
                this.Blogs = this.items;
                if (this.search.length == 0) {
                    this.Blogs = this.$store.state.blogs;
                    this.isEmpty = false;
                }
                if (this.Blogs.length == 0) {
                    return this.isEmpty = true;
                }
                this.loading = false;
                this.searchIsLoading = false;
            }, 1000);
        },
        searchKeyUp() {
            if (this.search.length == 0) {
                return this.Blogs = this.$store.state.blogs;
            }
            this.loading = true;
            setTimeout(() => {
                this.items = this.Blogs.filter((item) => {
                    return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                });
                this.Blogs = this.items;
                if (this.search.length == 0) {
                    this.Blogs = this.$store.state.blogs;
                    this.isEmpty = false;
                }
                this.loading = false;
            }, 1000);
        },
        getImgUrl(img) {
            if (img == null)
                return "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80";
            let url = require.context("C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/public/assets/img/blog/", true, /\.(png|jpe?g|svg)$/);
            return url('./' + img);
        }
    },
    mounted() {
        const params = { model: "blogs"};
        store.dispatch("getAll", params);
        setTimeout(() => {
            this.Blogs = store.state.blogs;
            this.loading = false;
            this.Blogs ? this.Blogs : this.isEmpty = true;
        }, 1300);

    },
};
</script>
