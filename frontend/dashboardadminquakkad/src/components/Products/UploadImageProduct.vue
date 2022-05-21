<template>
  <div class="mt-8 w-full">
    <div class="flex justify-center items-center">
      <form class="flex flex-col justify-center">
        <label class="inline-block mb-2 text-gray-500"
          >Upload Image(jpg,png,svg,jpeg)</label
        >
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
          add other image
        </span>

        <div class="m-4 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <!-- input for number images -->

          <div
            v-for="(image, index) in images"
            :key="index"
            class="flex items-center justify-center w-full"
          >
            <div 
            class="indicator  top-0 right-0 m-2 text-gray-500 cursor-pointer"
            @click="removeInputImage(index)"
            >
              <span class="indicator-item badge badge-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                  />
                </svg>
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
              <input type="file" class="opacity-0" ref="file" />
            </label>
          </div>
        </div>
        <div class="flex p-2 space-x-4 justify-end">
          <button class="px-4 py-2 text-white bg-red-'00 rounded shadow-xl">
            Cancel
          </button>
          <button
            type="submit"
            @click="uploadImages"
            class="px-4 py-2 text-white bg-purple-500 rounded shadow-xl"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "UploadImageProduct",
  data() {
    return {
      images: [1, 2],
    };
  },
  props: {
    product_id: {
      type: Number,
      required: true,
    },
  },
    
  methods: {
    uploadImages(e) {
      e.preventDefault();
        
     
        // access the input file
        const file = this.$refs.file[0].files[0];
        
      
        const formData = new FormData();
        for (let i = 0; i <this.images.length; i++) {
          formData.append("images[]"
          , this.$refs.file[i].files[0]);
         
        }
       

        let requestOptions = {
          method: "POST",
            body: formData,
        };
        // send form data to the server use axios
       fetch("http://localhost/QuakkaProject/products/upload_images/2", requestOptions)
          .then((response) => {
            console.log(response);
            
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
  },
};
</script>