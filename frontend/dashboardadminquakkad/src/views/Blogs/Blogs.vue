<template>
    <div>
        <Main>

            <BreadCrumb :items="['Dashboard','Blogs']" />
            <div class="container mx-auto py-6 px-4" x-data="datatables()" x-cloak>
                <h1 class="text-3xl py-4 border-b mb-10">Blogs List</h1>

                <div v-if="loading">
                    <Loading />
                </div>
                <section class="text-gray-700 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div v-for="(blog,index) in Blogs" :key="index" class="p-4 md:w-1/3">
                                <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
                                        alt="blog">
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
                                            <span
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
// import ViewBlogs from "@/components/Blogs/ViewBlogs.vue";
// import EditProduct from "@/components/Blogs/EditProduct.vue";
import Swal from "sweetalert2";

export default {
    name: "createProduct",
    components: { Main, EditIcon, TrashIcon, LinkIcon, Loading, BreadCrumb },

    data() {
        return {
            Blogs: [],
            loading: true,
            open_modal: false,

            default_ClassName:
                " px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200",
            sourceImages: "../../assets/img/product/",
          
            Blogs: [],
            creat_status_class: "",
            images: [],
            search: "",
            searchIsLoading: false,
            items: [],
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
            //  time a go
            return moment(date).fromNow();
        },
        view_blog(blog) {
            blog = JSON.parse(JSON.stringify(blog));
            this.$router.push({
                name: "view-blog",
                params: { blogId: blog.id },
            });
        },
        edit_blog(blog) {
            blog = JSON.parse(JSON.stringify(blog));
            this.$router.push({
                name: "editblog",
                params: {
                    blogId: blog.id,
                },
            });
        },
        delete_blog(id) {
            console.log(id);

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
                    let params = {
                        id: id,
                        model: "blogs",
                    }
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
            this.Blogs = this.$store.state.Blogs;
        },
        searchKeyPress() {
            if (this.search.length > 0) {
                this.Blogs = this.Blogs.filter((blog) => {
                    return blog.name.toLowerCase().includes(this.search.toLowerCase());
                });
            } else {
                this.get_Blogs();
            }
            if (this.search.length > 0 && event.keyCode == 8) {
                this.Blogs = this.Blogs.filter((blog) => {
                    return blog.name.toLowerCase().includes(this.search.toLowerCase());
                });
            }
        },
    },
    mounted() {
        const params = {
            model: "blogs",
        };
        store.dispatch("getAll", params);
        setTimeout(() => {
            this.Blogs = store.state.blogs;
            this.loading = false;


        }, 1300);

    },
};
</script>
