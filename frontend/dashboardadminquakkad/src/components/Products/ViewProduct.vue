<template>
  <Main>
    <div class="overflow-y-hidden">
      <div class="flex justify-center items-center">
        <div
          id="menu"
          class="md:px-6 px-4 py-12 w-full h-full flex justify-center"
        >
          <div
            class="
              2xl:container 2xl:mx-auto
            
              flex
              justify-start
              w-96
              md:w-10/12
              xl:w-11/12
              item-start
              flex-col
              lg:flex-row lg:space-x-8
              py-12
              md:py-16
              lg:py-12
              px-4
              md:px-8
              lg:px-16
              bg-white
            "
          >
            <content-loader
              v-if="loading"
              viewBox="0 0 600 160"
              :speed="1"
              primaryColor="#d8d4d4"
              secondaryColor="#ecebeb"
            >
              <rect x="136" y="18" rx="3" ry="3" width="88" height="6" />
              <rect x="136" y="34" rx="3" ry="3" width="52" height="6" />
              <rect x="136" y="62" rx="3" ry="3" width="410" height="6" />
              <rect x="137" y="79" rx="3" ry="3" width="331" height="5" />
              <rect x="137" y="97" rx="3" ry="3" width="178" height="6" />
              <circle cx="58" cy="245" r="20" />
              <rect x="4" y="15" rx="0" ry="0" width="113" height="113" />
              <rect x="54" y="85" rx="0" ry="0" width="8" height="37" />
              <rect x="144" y="149" rx="0" ry="0" width="45" height="46" />
              <rect x="210" y="148" rx="0" ry="0" width="49" height="13" />
              <rect x="287" y="150" rx="0" ry="0" width="50" height="22" />
            </content-loader>

            <div class="" v-if="!loading && product !== []">
              <div
                class="
                  mt-6
                  md:mt-8
                  lg:mt-0
                  flex
                  justify-start
                  items-start
                  w-full
                  flex-col
                  space-y-6
                "
              >
                <div class="lg:w-7/12 lg:mt-0 mt-8 w-full">
                  <div id="app">
                    <div class="slide">
                      <div
                        class="carousel-inner  overflow-hidden w-full"
                      >
                        <div
                          v-for="(img, i) in imagess"
                          :id="`slide-${i}`"
                          :key="i"
                          :class="`${active === i ? 'active' : 'left-full'}`"
                          class="
                            carousel-item
                            relative
                            w-full
                            transform
                            transition-all
                            duration-500
                            ease-in-out
                          "
                        >
                          <img
                            class="block w-full"
                            style="
                              
                            "
                            :src="img"
                            alt="First slide"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
               
                </div>
              </div>
            </div>
            <div
              v-if="!loading"
              class="
                mt-6
                md:mt-8
                lg:mt-0
                flex
                justify-start
                items-start
                w-full
                flex-col
                space-y-6
              "
            >
              <h2
                class="
                  lg:text-2xl
                  text-xl
                  lg:leading-6
                  leading-5
                  text-gray-800
                  font-semibold
                "
              >
                {{ product.name }}
              </h2>
              <div class="flex justify-start items-center mt-4">
                <p class="font-normal text-lg leading-6 text-gray-600 mr-4">
                  price : {{ product.price }} $
                </p>
                <div class="cursor-pointer flex space-x-2 mr-3">
                  <img
                    class="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_4-svg2.svg"
                    alt="stars"
                  />
                  <img
                    class="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_4-svg2dark.svg"
                    alt="stars"
                  />
                </div>
                <p
                  class="
                    font-normal
                    text-sm
                    leading-3
                    hover:text-gray-700
                    duration-100
                    cursor-pointer
                    text-gray-500
                    underline
                  "
                >
                  18 reviews
                </p>
              </div>

              <p class="mt-4 text-gray-600">
                {{ product.description }}
              </p>
              <div class="mt-10">
                <p
                  id="text"
                  class="font-semibold text-base leading-4 text-gray-800"
                >
                  White
                </p>
                <div class="flex space-x-2 mt-4">
                  <div
                    tabindex="0"
                    @click="selected('White')"
                    class="
                      focus:outline-none
                      ring-1 ring-transparent ring-offset-2
                      focus:ring-gray-800
                      rounded-full
                      cursor-pointer
                      w-8
                      h-8
                      bg-gray-50
                    "
                  ></div>
                  <div
                    tabindex="0"
                    @click="selected('Red')"
                    class="
                      focus:outline-none
                      focus:ring-1
                      focus:ring-offset-2
                      focus:ring-gray-800
                      rounded-full
                      cursor-pointer
                      w-8
                      h-8
                      bg-red-700
                    "
                  ></div>
                  <div
                    tabindex="0"
                    @click="selected('Yellow')"
                    class="
                      focus:outline-none
                      focus:ring-1
                      focus:ring-offset-2
                      focus:ring-gray-800
                      rounded-full
                      cursor-pointer
                      w-8
                      h-8
                      bg-yellow-300
                    "
                  ></div>
                </div>
              </div>
              <div class="mt-10 w-full">
                <div class="flex justify-between">
                  <p class="font-semibold text-base leading-4 text-gray-800">
                    Size
                  </p>
                  <p
                    class="
                      cursor-pointer
                      hover:text-gray-800
                      font-medium
                      text-base
                      leading-4
                      text-gray-500
                      underline
                    "
                  >
                    Size guide
                  </p>
                </div>
                <div
                  class="
                    grid grid-cols-3
                    gap-10
                    sm:flex sm:flex-wrap
                    md:gap-4
                    sm:justify-between
                    lg:justify-start
                    mt-4
                  "
                >
                  <div
                    @click="selectedSize('XSS')"
                    id="XSS"
                    class="
                      font-medium
                      text-base
                      leading-4
                      text-gray-800
                      border border-gray-200
                      py-3
                      w-20
                      text-center
                      cursor-pointer
                      hover:border-gray-800
                      focus:border-gray-800
                    "
                  >
                    XXS
                  </div>
                  <div
                    @click="selectedSize('XS')"
                    id="XS"
                    class="
                      font-medium
                      text-base
                      leading-4
                      text-gray-800
                      border border-gray-200
                      py-3
                      w-20
                      text-center
                      cursor-pointer
                      hover:border-gray-800
                      focus:border-gray-800
                    "
                  >
                    XS
                  </div>
                  <div
                    @click="selectedSize('S')"
                    id="S"
                    class="
                      font-medium
                      text-base
                      leading-4
                      text-gray-800
                      border border-gray-200
                      py-3
                      w-20
                      text-center
                      cursor-pointer
                      hover:border-gray-800
                      focus:border-gray-800
                    "
                  >
                    S
                  </div>
                  <div
                    @click="selectedSize('M')"
                    id="M"
                    class="
                      font-medium
                      text-base
                      leading-4
                      text-gray-800
                      border border-gray-200
                      py-3
                      w-20
                      text-center
                      cursor-pointer
                      hover:border-gray-800
                      focus:border-gray-800
                    "
                  >
                    M
                  </div>
                  <div
                    @click="selectedSize('L')"
                    id="L"
                    class="
                      font-medium
                      text-base
                      leading-4
                      text-gray-800
                      border border-gray-200
                      py-3
                      w-20
                      text-center
                      cursor-pointer
                      hover:border-gray-800
                      focus:border-gray-800
                    "
                  >
                    L
                  </div>
                  <div
                    @click="selectedSize('XL')"
                    id="XL"
                    class="
                      font-medium
                      text-base
                      leading-4
                      text-gray-800
                      border border-gray-200
                      py-3
                      w-20
                      text-center
                      cursor-pointer
                      hover:border-gray-800
                      focus:border-gray-800
                    "
                  >
                    XL
                  </div>
                </div>
              </div>
              <p
                @click="handleUpdateCart"
                class="
                  mt-4
                  font-normal
                  text-sm
                  leading-3
                  text-gray-500
                  hover:text-gray-600
                  duration-100
                  underline
                  cursor-pointer
                "
              >
                Edit product
              </p>

              <div class="flex flex-col w-full space-y-4 mt-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script>
import Main from "@/components/Main.vue";
import { json } from "body-parser";
import { ContentLoader } from "vue-content-loader";
export default {
  name: "QuickView",
  components: { Main, ContentLoader },
  data() {
    return {
      slides: null,
      slideSayisi: null,
      loop: null,
      loading: true,
      product: [],
      images: null,
      pathImg: " ../../assets/img/product/",
      imagess: [
        
      ],
      active: 0,
    };
  },

  methods: {
    getImgUrl(pet) {
      let url = require.context(
        "../../assets/img/product",
        false,
        /\.(png|jpe?g|svg)$/
      );
      return url(`./${pet}`);
    },
  },

  beforeCreate() {
    // let productId = this.$route.params.productId;
    // setTimeout(() => {
    //   fetch(`http://localhost/QuakkaProject/products/getproduct/${productId}`)
    //     .then((response) => response.json())
    //     .then((json) => {
    //       this.product = json[1];
    //       this.loading = false;
    //       this.product.images.forEach((element) => {
    //         this.imagess.push(this.getImgUrl(element.name));
    //       });
    //     });
    // }, 1000);
    // this.imagess = this.product.images.map(img => {
    //   return this.pathImg + img.name;
    // });
  },
  mounted() {
    let i = 0;
    let productId = this.$route.params.productId;
    setInterval(() => {
      if (i > this.imagess.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
      fetch(`http://localhost/QuakkaProject/products/getone/${productId}`)
        .then((response) => response.json())
        .then((json) => {
          this.product = json[1];

          this.loading = false;
          this.product.images.forEach((element) => {
            this.imagess.push(this.getImgUrl(element.name));
          });
        });
    }, 2000);
  },
  // created() {
  //     let productId = this.$route.params.productId;
  //   setTimeout(() => {
  //     this.$store.dispatch("getProduct", productId);
  //     this.product = JSON.parse(JSON.stringify(this.$store.state.product));
  //     this.images = this.product.images;
  //     this.loading = false;
  //   }, 1300);
  // }
};
</script>

<style>
.slider {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.slide-ana {
  height: 539px;
}

.slide-ana > div {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
}
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>