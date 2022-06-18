<template>
    <div>
        <Main>
            <div class="
          fixed
          top-0
          left-0
          z-10
          flex
          h-screen
          w-screen
          items-center
          justify-center
          overflow-y-auto overflow-x-hidden
          bg-black/25
        ">

                <section class="max-w-8xl p-6 bg-gray-50 rounded-md shadow-md :bg-gray-800"
                    style="width: 100%; max-width: 800px">
                    <h2 class="text-lg font-semibold text-gray-700 capitalize :text-white">
                        Update a blog
                    </h2>
                    <content-loader v-if="isLoading" viewBox="0 0 400 200" :speed="2" primaryColor="#f3f3f3"
                        secondaryColor="#ecebeb">
                        <rect x="9" y="9" rx="3" ry="3" width="105" height="4" />
                        <rect x="4" y="42" rx="0" ry="0" width="174" height="27" />
                        <rect x="200" y="42" rx="0" ry="0" width="174" height="26" />
                        <rect x="3" y="86" rx="0" ry="0" width="174" height="30" />
                        <rect x="204" y="85" rx="0" ry="0" width="172" height="30" />
                        <rect x="6" y="126" rx="0" ry="0" width="372" height="85" />
                        <rect x="128" y="9" rx="3" ry="3" width="105" height="4" />
                        <rect x="254" y="9" rx="3" ry="3" width="105" height="4" />
                    </content-loader>
                    <div v-if="!isLoading" class="flex items-stretch gap-2">

                        <div v-for="step in stepsCountWithSuccessPage" :key="step"
                            class="h-2 w-full rounded text-purple-500 mb-2 mt-3" style="border: 1px solid"
                            :class="{ 'bg-purple-500 ': step - 1 <= currentStep }"></div>
                    </div>


                    <div v-if="openUploadImage === 'default' && !isLoading">
                        <form>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 :text-gray-200" for="username">
                                        Blog title
                                    </label>
                                    <input id="Product_Name" valdata="required | min:3" v-model="Blog.title" type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md :bg-gray-800 :text-gray-300 :border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 :focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 :text-gray-200" for="password">
                                        Blog category
                                    </label>
                                    <input id="password" type="text" v-model="Blog.category" min="1"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md :bg-gray-800 :text-gray-300 :border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 :focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div>
                                <label class="text-gray-700 :text-gray-200" for="emailAddress">
                                    Blog Description
                                </label>

                                <textarea id="message" valdata="required | min:3" v-model="Blog.content" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                                    placeholder="Your message..."></textarea>
                            </div>
                            <div>

                                <label class="text-gray-700 :text-gray-200" for="emailAddress">
                                    Blog Image
                                </label>
                                <img
                                style="width: 200px; height: 150px;"
                                :src="getImgUrl(Blog.image)" alt="blog image"
                                    class=" h-auto rounded-lg shadow-md">
                            </div>

                            <label
                                class="flex flex-col w-full h-32 border-4 border-dashed mt-4 hover:bg-gray-100 hover:border-gray-300">
                                <div class="flex flex-col items-center justify-center pt-8 w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Select a photo
                                    </p>
                                </div>
                                <input @change="onFileChange" type="file" class="opacity-0" ref="file" />
                            </label>

                            <div class="flex justify-end mt-6 gap-4">
                                <button @click="cancelcreateBlog"
                                    class="ml-3 inline-block justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    Cancel
                                </button>
                                <button @click.prevent="handleUpdate"
                                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-gray-600">
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                    <div v-if="openUploadImage === 'done'">
                        <PageDone title="Product Created" body="Product created successfully" />
                    </div>
                </section>
            </div>
        </Main>
    </div>
</template>
<script>
import Main from "@/components/Main.vue";
import PageDone from "@/components/alert/PageDone";
import store from '@/store';
import { ContentLoader } from "vue-content-loader"
import Swal from 'sweetalert2'


export default {
    name: "FormCreatorProduct",
    components: { Main, PageDone, ContentLoader },

    data() {
        return {
            stepsCountWithSuccessPage: [1, 2],
            productCreated: [],
            is_done: false,
            currentStep: 0,
            openUploadImage: "default",
            Blog: {
                id: null,
                title: "",
                content: "",
                category: "",
                image: "",
            },
            isLoading: true,
        };
    },
    methods: {
        handleUpdate() {
            if (!this.validateForm()) {
                Swal.fire({
                    title: "Error",
                    text: "Please fill all fields",
                    icon: "error",
                    confirmButtonText: "OK"
                });
                return;
            }
            const image = this.$refs.file.files[0];
            const data = {
                title: this.Blog.title,
                content: this.Blog.content,
                category: this.Blog.category,
                image: image,
                id: this.Blog.id
            }

            store.dispatch('updateBlog', data).then(() => {
                const params = { model: "blogs", };
                this.$store.dispatch("getAll", params);
                this.$router.push("/blogs");
            })
        },
        validateForm() {
            if (this.Blog.title.length > 0 && this.Blog.content.length > 0 && this.Blog.category.length > 0 && this.$refs.file.files.length > 0) {
                return true;
            }
            return false;
        },
        uploadImages(e, Images) {
            e.preventDefault();
            console.log(Images);
        },
        cancelcreateBlog(e) {
            e.preventDefault();
            this.$router.push("/blogs");
        },
        getImgUrl(img) {
            if (img == null)
                return "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80";
            let url = require.context("C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/public/assets/img/blog/", true, /\.(png|jpe?g|svg)$/);
            return url('./' + img);
        }
    },
    mounted() {
       this.$store.dispatch('_getOne', { id: this.$route.params.blogId, model: 'blogs' });
        setTimeout(() => {
            this.isLoading = false;
            this.Blog = this.$store.getters.blog;
        }, 1300);


    },

};
</script>
