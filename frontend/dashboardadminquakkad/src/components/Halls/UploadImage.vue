<template>
  <div class="mt-8 w-full">
    <div class="flex justify-center items-center">
      <div v-if="isLoading">
        <div class="lds-dual-ring"></div>
        <div class="text-gray-500">Loading...</div>
      </div>
      <form v-else class="flex flex-col justify-center">
        <label class="inline-block mb-2 text-gray-500"
          >Upload Image(jpg,png,svg,jpeg)</label
        >
        {{ hall }}

        <span
          @click="addInputImage"
          class="
            bg-purple-100
            text-purple-800 text-xs
            font-semibold
            mr-2
            px-2.5
            py-0.5
            rounded
            dark:bg-purple-200 dark:text-purple-900
            flex
            items-center
            cursor-pointer
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
            ></path>
            <line x1="16" y1="5" x2="22" y2="5"></line>
            <line x1="19" y1="2" x2="19" y2="8"></line>
            <circle cx="9" cy="9" r="2"></circle>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
          </svg>
        </span>

        <div class="m-4 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="flex items-center justify-center w-full"
          >
            <div
              class="indicator top-0 right-0 m-2 text-gray-500 cursor-pointer"
              v-if="imageUploaded"
              @click="removeInputImage(index)"
            >
              <span class="indicator-item badge badge-secondary">
                <TrashIcon className="w-5 h-5 text-red-400" />
              </span>
            </div>
            <label
              class="
                flex flex-col
                w-full
                h-32
                border-4 border-dashed
                hover:bg-gray-100 hover:border-gray-300
              "
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
                  class="
                    pt-1
                    text-sm
                    tracking-wider
                    text-gray-400
                    group-hover:text-gray-600
                  "
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
          </div>
        </div>
        <div class="flex p-2 space-x-4 justify-end">
          <button
            type="submit"
            @click="uploadImages"
            class="px-4 py-2 text-white bg-purple-500 rounded"
          >
            Create
          </button>
        </div>
      </form>
      <div class="m-4 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"></div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import TrashIcon from "../icons/TrashIcon.vue";
export default {
  name: "UploadImage",
  components: { TrashIcon },
  data() {
    return {
      images: [1, 2],
      is_done: false,
      Hall: null,
      imageUploaded: false,
      isLoading: true,
      image_uploaded: [],
    };
  },
  methods: {
    uploadImages(e) {
      e.preventDefault();
      const file = this.$refs.file[0].files[0];
      const formData = new FormData();
      for (let i = 0; i < this.images.length; i++) {
        formData.append("images" + i, this.$refs.file[i].files[0]);
      }
      let requestOptions = {
        method: "POST",
        body: formData,
      };
      console.log(store.state.hall.id);
      // const Hall = JSON.parse(this.Hall);
      // console.log(Hall);
      fetch(
        "http://localhost/QuakkaProject/ImagesHall/uploadImage/" + store.state.hall.id,
        requestOptions
      )
        .then((response) => {
          response.json().then((data) => {
            console.log("this is ", data);
            this.openHallDone();
            this.is_done = true;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addInputImage() {
      this.images.push(this.images.length + 1);
    },
    removeInputImage(index) {
      this.images.splice(index, 1);
    },
    openHallDone() {
      this.$emit("openHallDone", this.is_done);
    },
    onFileChange(e) {
      this.imageUploaded = true;
      this.image_uploaded.push(e.target.files[0]);
    },
  },

  beforeCreate() {
    setTimeout(() => {
      this.Hall = store.state.hall;
      console.log(this.Hall);
      this.isLoading = false;
    }, 1000);
  },
};
</script>