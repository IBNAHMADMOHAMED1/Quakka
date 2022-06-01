<template>
  <Main>
    <body class="overflow-y-hidden">
      <div
        class="
          mx-auto
          container
          flex
          justify-center
          items-center
          py-12
          px-4
          sm:px-6
          2xl:px-0
        "
      >
        <content-loader
          viewBox="0 0 400 200"
          :speed="1.5"
          primaryColor="#f3f3f3"
          secondaryColor="#8080c0"
          :animation="true"
          v-if="isLoading"
        >
          <rect x="13" y="49" rx="3" ry="3" width="105" height="4" />
          <rect x="10" y="131" rx="0" ry="0" width="58" height="6" />
          <rect x="313" y="31" rx="0" ry="0" width="71" height="30" />
          <rect x="13" y="64" rx="3" ry="3" width="148" height="6" />
          <rect x="12" y="81" rx="3" ry="3" width="172" height="6" />
          <rect x="312" y="94" rx="0" ry="0" width="71" height="30" />
          <rect x="230" y="31" rx="0" ry="0" width="71" height="80" />
        </content-loader>

        <div
          v-else
          class="
            flex flex-col
            lg:flex-row
            justify-center
            items-center
            space-y-6
            lg:space-y-0
          "
        >
          <div class="w-80 sm:w-auto flex flex-col justify-start items-start">
            <div>
              <p
                class="
                  text-3xl
                  xl:text-4xl
                  font-semibold
                  leading-9
                  text-gray-800
                "
              >
                {{ hall.name }}
              </p>
            </div>
            <div class="mt-4 lg:w-4/5 xl:w-3/5">
              <p class="text-base leading-6 text-gray-600">
                {{ hall.description }}
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <p class="text-base leading-6 text-gray-600 mt-2">
                created at
                {{ date_for_humans(hall.created_at) }}
              </p>
            </div>
            <div class="mt-16 w-full">
              <button
                class="
                  px-4
                  bg-gray-900
                  flex
                  justify-between
                  items-center
                  w-full
                  lg:w-72
                  h-14
                  text-white
                  hover:bg-gray-700
                  focus:ring-2
                  outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
                "
              >
                <p class="text-xl font-medium leading-5">Go to Edit</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 16H25.3333"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 10.6667L25.3333 16"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            v-if="hall.images.length > 0"
            class="
              flex flex-col
              sm:flex-row
              jusitfy-center
              items-center
              sm:space-x-5
              xl:space-x-8
              space-y-4
              sm:space-y-0
            "
          >
            <div class="">
              <img class="w-80 sm:w-auto" :src="getImgUrl(Image1)" alt="sofa" />
            </div>
            <div
              class="
                flex flex-col
                justify-center
                items-center
                space-y-4
                sm:space-y-0 sm:space-y-5
                lg:space-y-5
                xl:space-y-8
              "
            >
              <div v-for="image in hall.images" :key="image.id">
                <img
                  class="w-80 sm:w-auto"
                  :src="getImgUrl(image.name)"
                  alt="sofa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </Main>
</template>

<script>
import Main from "../../components/Main.vue";
import { ContentLoader } from "vue-content-loader";
export default {
  name: "ViewHalls",
  components: { Main, ContentLoader },
  data() {
    return {
      hall: [],
      hall_images: [],
      idHall: "",
      isLoading: true,
      Image1: "",
    };
  },
  methods: {
    date_for_humans(date) {
      const moment = require("moment");
      return moment(date).format("MMMM Do YYYY, h:mm a");
    },
    getImgUrl(name) {
      console.log(name);
      if (name) {
        let url = require.context(
          "../../assets/img/halls",
          true,
          /\.(png|jpe?g|svg)$/
        );
        return url("./" + name);
      } else {
        return "http://via.placeholder.com/400x300";
      }
    },
  },
  mounted() {
    this.idHall = this.$route.params.hallId;
    this.$store.dispatch("_getOne", { id: this.idHall,model: "halls"});
    setTimeout(() => {
      this.hall = this.$store.state.hall;
      this.Image1 = this.hall.images[0].name;
      this.hall.images.shift();
      this.isLoading = false;
    }, 1300);
  },
};
</script>