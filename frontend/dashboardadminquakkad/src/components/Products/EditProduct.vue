<template>
  <div>
    <Main>
      <div
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
          bg-black/25
        "
      >
     
        <section
          class="max-w-8xl p-6 bg-gray-50 rounded-md shadow-md :bg-gray-800"
          style="width: 100%; max-width: 800px"
        >
          <h2
            class="text-lg font-semibold text-gray-700 capitalize :text-white"
          >
            Create a new product
          </h2>
          <content-loader
          v-if="isLoading"
    viewBox="0 0 400 200"
    :speed="2"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="9" y="9" rx="3" ry="3" width="105" height="4" /> 
    <rect x="4" y="42" rx="0" ry="0" width="174" height="27" /> 
    <rect x="200" y="42" rx="0" ry="0" width="174" height="26" /> 
    <rect x="3" y="86" rx="0" ry="0" width="174" height="30" /> 
    <rect x="204" y="85" rx="0" ry="0" width="172" height="30" /> 
    <rect x="6" y="126" rx="0" ry="0" width="372" height="85" /> 
    <rect x="128" y="9" rx="3" ry="3" width="105" height="4" /> 
    <rect x="254" y="9" rx="3" ry="3" width="105" height="4" />
         </content-loader>
          <div 
          v-if="!isLoading"
          class="flex items-stretch gap-2">

            <div

              v-for="step in stepsCountWithSuccessPage"
              :key="step"
              class="h-2 w-full rounded text-purple-500 mb-2 mt-3"
              style="border: 1px solid"
              :class="{ 'bg-purple-500 ': step - 1 <= currentStep }"
            ></div>
          </div>

          <form 
          v-if="openUploadImage === 'default' && !isLoading"
          >
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 :text-gray-200" for="username">
                  Product Name
                </label>
                <input
                  id="Product_Name"
                  valdata="required | min:3"
                  v-model="product.name"
                  type="text"
                  class="
                    block
                    w-full
                    px-4
                    py-2
                    mt-2
                    text-gray-700
                    bg-white
                    border border-gray-200
                    rounded-md
                    :bg-gray-800 :text-gray-300 :border-gray-600
                    focus:border-blue-400
                    focus:ring-blue-300
                    focus:ring-opacity-40
                    :focus:border-blue-300
                    focus:outline-none focus:ring
                  "
                />
              </div>

              <div>
                <label class="text-gray-700 :text-gray-200" for="password">
                  Product Price
                </label>
                <input
                  id="password"
                  type="number"
                  v-model="product.price"
                  min="1"
                  class="
                    block
                    w-full
                    px-4
                    py-2
                    mt-2
                    text-gray-700
                    border border-gray-200
                    rounded-md
                    :bg-gray-800 :text-gray-300 :border-gray-600
                    focus:border-blue-400
                    focus:ring-blue-300
                    focus:ring-opacity-40
                    :focus:border-blue-300
                    focus:outline-none focus:ring
                  "
                />
              </div>

              <div>
                <label
                  class="text-gray-700 :text-gray-200"
                  for="Product_Quantity"
                >
                  Product_Quantity
                </label>
                <input
                  id="Product_Quantity"
                  type="number"
                  v-model="product.quantity"
                  min="1"
                  class="
                    block
                    w-full
                    px-4
                    py-2
                    mt-2
                    text-gray-700
                    bg-white
                    border border-gray-200
                    rounded-md
                    :bg-gray-800 :text-gray-300 :border-gray-600
                    focus:border-blue-400
                    focus:ring-blue-300
                    focus:ring-opacity-40
                    :focus:border-blue-300
                    focus:outline-none focus:ring
                  "
                />
              </div>
              <input type="hidden" v-model="product.product_id" />
              <div>
                <label
                  class="text-gray-700 :text-gray-200"
                  for="Product_Quantity"
                >
                  Product Category
                </label>
                <select
                  id="countries"
                  class="
                    bg-white
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-2.5
                    px-4
                    py-2
                    mt-2
                    :bg-gray-700
                    :border-gray-600
                    :placeholder-gray-400
                    :text-white
                    :focus:ring-blue-500
                    :focus:border-blue-500
                  "
                 v-model="product.category"
                >
                
                  <option selected>Choose a Category</option>
                  <option 
                  v-for="category in categorys" :key="category.id"
                  :value="category.category_id"
                  
                  >
                    {{ category.name }}
                  </option>
              
                </select>
              </div>
            </div>

            <div>
              <label class="text-gray-700 :text-gray-200" for="emailAddress">
                Product Description
              </label>

              <textarea
                id="message"
                valdata="required | min:3"
                v-model="product.description"
                rows="4"
                class="
                  block
                  p-2.5
                  w-full
                  text-sm text-gray-900
                  bg-white
                  rounded-lg
                  border border-gray-300
                  focus:ring-blue-500 focus:border-blue-500
                  :bg-gray-700
                  :border-gray-600
                  :placeholder-gray-400
                  :text-white
                  :focus:ring-blue-500
                  :focus:border-blue-500
                "
                placeholder="Your message..."
              ></textarea>
            </div>

            <div 
            class="flex justify-end mt-6 gap-4"
            >
               <button
                @click="cancelCreateProduct"
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
              {{product.name}}
              <button
                @click="handleUpdateProduct"
                class="
                  px-6
                  py-2
                  leading-5
                  text-white
                  transition-colors
                  duration-200
                  transform
                  bg-purple-500
                  rounded-md
                  hover:bg-purple-700
                  focus:outline-none focus:bg-gray-600
                "
              >
                Next
              </button>
             
            </div>
          </form>
          <div v-if="openUploadImage === 'image'">
          
            <UploadImageProduct 
            
            @openProductDone="openProductDone" />
          </div>
          <!-- product done -->
          <div v-if="openUploadImage === 'done'">
            <PageDone
              title="Product Created"
              body="Product created successfully"
            />
          </div>
        </section>
      </div>
    </Main>
  </div>
</template>
<script>
import Main from "../Main.vue";
import UploadImageProduct from "./UploadImageProduct.vue";
import PageDone from "../alert/PageDone";
import store from '@/store';
import { ContentLoader } from "vue-content-loader"


export default {
  name: "FormCreatorProduct",
  components: { Main, UploadImageProduct, PageDone,ContentLoader },

  data() {
    return {
      stepsCountWithSuccessPage: [1, 2, 3],
      productCreated:[],
      is_done: false,
      currentStep: 0,
      categorys: [],
      openUploadImage: "default",
      product: {
        name: "",
        price: "",
        quantity: "",
        description: "",
        category: "",
        product_id: "",
      },
      isLoading: true,
    };
  },
  methods: {
    handleUpdateProduct(e){
         e.preventDefault();
   
       store.dispatch('updateProduct', this.product);
       if (store.state.product) {
       
        this.openUploadImage = "image"
        this.currentStep = 1;
        alert("helow Product Created")
       }
    },
    uploadImages(e, Images) {
      e.preventDefault();
      console.log(Images);
    },
    openProductDone() {
      this.currentStep = 2;
      this.openUploadImage = "done";
    },
    cancelCreateProduct(e) {
      e.preventDefault();
      this.$router.go(-1);
    },
  },
 
  created() {
    fetch("http://localhost/QuakkaProject/categorys/index/")
      .then((response) => response.json())
      .then((data) => {
        this.categorys = data;
      });
    // get the product in the store
  
    
      store.dispatch('getProduct', this.$route.params.productId)
    setTimeout(() => {
      this.product = store.state.product
      this.isLoading = false;
        
    }, 1000);
    
  },
  
};
</script>
