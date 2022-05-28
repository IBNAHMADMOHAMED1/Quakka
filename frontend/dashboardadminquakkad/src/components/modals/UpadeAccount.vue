<template>

  <transition
    v-if="showModal"
    @click="show"
    class="
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
       inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block
    "
  >
    <div
      id="popup-modal"
      tabindex="-1"
      class="
        fixed
        w-full
        top-0
        left-0
        right-0
        z-50
        md:inset-0
        h-modal
        md:h-full
        min-w-[400px]
        px-4
      "
    >
      <div class="p-4 w-full h-full flex items-center justify-center">
        <div>
          <form>
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div>
                    <label class="block px-4 py-2 hover:bg-gray-200">
                      Name
                    </label>
                    
                    <input
                      id="username"
                      type="text"
                      v-model="username"
                      
                      class="
                        block
                        w-full
                        px-4
                        py-2
                        mt-2
                        bg-white
                        border
                        rounded-md
                        text-gray-700
                        border-gray-600
                        focus:border-blue-400
                        focus:ring-blue-300
                        focus:ring-opacity-40
                        focus:outline-none
                        focus:ring
                      "
                    />
                  </div>

                  <div>
                    <label class="block px-4 py-2 hover:bg-gray-200">
                      Email
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      v-model="email"
                      required
                      class="
                        block
                        w-full
                        px-4
                        py-2
                        mt-2
                        bg-white
                        border
                        rounded-md
                        text-gray-700
                        border-gray-600
                        focus:border-blue-400
                        focus:ring-blue-300
                        focus:ring-opacity-40
                        focus:outline-none
                        focus:ring
                      "
                    />
                  </div>

                  <div>
                    <label class="block px-4 py-2 hover:bg-gray-200">
                      Password
                    </label>
                    <input
                      id="emailAddress"
                      type="password"
                      v-model="password"
                      required
                      class="
                        block
                        w-full
                        px-4
                        py-2
                        mt-2
                        bg-white
                        border
                        rounded-md
                        text-gray-700
                        border-gray-600
                        focus:border-blue-400
                        focus:ring-blue-300
                        focus:ring-opacity-40
                        focus:outline-none
                        focus:ring
                      "
                    />
                  </div>
                </div>

                <div>
                  <label class="block px-4 py-2 hover:bg-gray-200">
                    Photo
                  </label>
                  <div class="mt-1 flex items-center ">
                    <InputAvatar
                      @getAvatar ="getAvatar"

                      ref="cover_photo"
                      class="h-16 w-16 rounded-full"
                       v-model="cover_photo"
                      :default-src="pathImg+user.avatar"
                    />
                  </div>
                </div>
                <div>
                  <label class="block px-4 py-2 hover:bg-gray-200">
                   
                    Cover photo
                  </label>
                  <div
                    class="
                      mt-1
                      flex
                      justify-center
                      px-6
                      pt-5
                      pb-6
                      border-2 border-gray-300 border-dashed
                      rounded-md
                    "
                  >
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="
                            relative
                            cursor-pointer
                            bg-white
                            rounded-md
                            font-medium
                            text-indigo-600
                            hover:text-indigo-500
                            focus-within:outline-none
                            focus-within:ring-2
                            focus-within:ring-offset-2
                            focus-within:ring-indigo-500
                          "
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            v-on:change="handleFileUpload()"
                            ref="file"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end ">
                <button
                  @click.prevent="handleSubmitUpdate"
                  type="submit"
                  class="
                    bg-purple-600
              hover:bg-purple-500
              text-white
              font-bold
              py-2
              px-4
              rounded
              inline-flex
              items-center
                  "
                >
                  Save
                </button>
          <button
            @click="closeModal"
            class="
              ml-3
              inline-block
              justify-center
              py-2
              px-4
              border border-gray-300
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-gray-700
              bg-white
              hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-gray-500
            "
          >
            Cancel
          </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>


import ButtonPrimary from "@/components/base/ButtonPrimary.vue";
import CheckCircle from "@/components/icons/CheckCircle.vue";
import SadFace from "@/components/icons/SadFace.vue";
import InputAvatar from "@/components/forms/InputAvatar.vue";
import { watch } from "@vue/runtime-core";

export default {
  name: "UpadeAccount",

  props: {
    backgroundColor: {
      type: String,
      default: "bg-purple-600",
    },
    showModal: {
      type: Boolean,
      default: true,
    },
    message: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    typeIcon: {
      type: String,
      default: "none",
    },
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { CheckCircle, ButtonPrimary, SadFace, InputAvatar },
  data() {
    return {
      username: this.user.nom,
      email:'',
      password: "",
      file: null,
      cover_photo: null,
      pathImg: '../../assets/img/Admin/',
    
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
    },
    handleSubmitUpdate() {
      var formdata = new FormData();
      formdata.append(
        "cover_photo",
        this.$refs.file.files[0],
        this.$refs.file.files[0].name,

      );
      formdata.append("avatar", this.avatar, this.avatar.name);
      formdata.append("nom", this.username);
      formdata.append("email", this.email);
      formdata.append("password", this.password);

      var requestOptions = {
        method: "POST",
        body: formdata,
      };
     
     fetch("http://localhost/QuakkaProject/admins/update/1", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result[0] == true) {
            localStorage.setItem(
              "user",
              JSON.stringify({
                id: result[1].id,
                name: result[1].nom,
                email: result[1].email,
                password: result[1].password,
                avatar: result[1].avatar,
                cover_photo: result[1].cover_photo,
              })
            );
            this.closeModal();
            this.$emit("updateUser", result[1]);
            alert("updated successfully");
          }
        })
        .catch((error) => console.log("error", error));
    },
    handleFileUpload() {
      const file = this.$refs.file.files[0];
      this.picture_admin = file;
    },
    closeModal() {this.$emit("closeModal");},
    getAvatar(payload) {
      this.avatar = payload;
      console.log(this.avatar.name);
    },
  
  
  },
};
</script>
