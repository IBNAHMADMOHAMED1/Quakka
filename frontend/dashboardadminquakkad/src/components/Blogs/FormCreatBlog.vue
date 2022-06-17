<template>
  <div>
    <Main>
      <div
        class="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-black/25"
      >
        <section
          class="max-w-8xl p-6 bg-gray-50 rounded-md shadow-md :bg-gray-800"
          style="width: 100%; max-width: 800px"
        >
          <h2
            class="text-lg font-semibold text-gray-700 capitalize :text-white"
          >
            Create a new Blog
          </h2>

          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 :text-gray-200" for="username">
                  Blog title
                </label>
                <input
                  id="Product_Name"
                  valdata="required | min:3"
                  v-model="Blog.title"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md :bg-gray-800 :text-gray-300 :border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 :focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-gray-700 :text-gray-200" for="password">
                  Blog category
                </label>
                <input
                  id="password"
                  type="text"
                  v-model="Blog.category"
                  min="1"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md :bg-gray-800 :text-gray-300 :border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 :focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div>
              <label class="text-gray-700 :text-gray-200" for="emailAddress">
                Blog Description
              </label>

              <textarea
                id="message"
                valdata="required | min:3"
                v-model="Blog.description"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
           
              <label
                class="flex flex-col w-full h-32 border-4 border-dashed mt-4 hover:bg-gray-100 hover:border-gray-300"
              >
                <div
                  class="flex flex-col items-center justify-center pt-8 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p
                    class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600"
                  >
                    Select a photo
                  </p>
                </div>
                <input
                  @change="onFileChange"
                  type="file"
                  class="opacity-0"
                  ref="file"
                />
              </label>
            
            <div class="flex justify-end mt-6 gap-4">
              <button
                @click="cancelcreateBlog"
                class="ml-3 inline-block justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                @click="createBlog"
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-gray-600"
              >
                Next
              </button>
            </div>
          </form>
        </section>
      </div>
    </Main>
  </div>
</template>
<script>
import Main from "../Main.vue";
import PageDone from "../alert/PageDone";
import store from "@/store";
import Swal from "sweetalert2";

export default {
  name: "FormCreatBlog",
  components: { Main, PageDone },

  data() {
    return {
      stepsCountWithSuccessPage: [1, 2, 3],
      productCreated: [],
      is_done: false,
      currentStep: 0,
      openUploadImage: "default",

      Blog: {
          title: "",
          category: "",
          description: "",
          image: "",
      },
    };
  },
  methods: {
      createBlog(e) {
          e.preventDefault();
          if (!(this.Blog.title && this.Blog.category && this.Blog.description)) {
              Swal.fire({
                  title: "Error",
                  text: "Please fill all fields",
                  type: "error",
                  confirmButtonText: "Ok"
              });
              return;
          }
          const image = this.$refs.file.files[0];
          console.log(image);
          if (!image) {
              Swal.fire({
                  title: "Error",
                  text: "Please select an image",
                  type: "error",
                  confirmButtonText: "Ok"
              });
              return;
          }
          const data = {
              title: this.Blog.title,
              category: this.Blog.category,
              content: this.Blog.description,
              image: image,
          };
          this.$store.dispatch("createBlog", data)
          .then(() => {
              this.$router.push("/blogs");
          })
          
  
    },
    cancelcreateBlog() {
      this.$router.push("/blogs");
    },
  },
};
</script>
