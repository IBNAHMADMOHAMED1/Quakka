<template>
  <div class="sticky top-0 z-40">
    <div
      class="
        w-full
        h-20
        px-6
        bg-gray-100
        border-b
        flex
        items-center
        justify-between
      "
    >
      <div class="flex">
        <div class="inline-block lg:hidden flex items-center mr-4">
          <button
            class="
              :text-blue-500 :border-white
              focus:outline-none
              navbar-burger
            "
            @click="toggleSidebar()"
          >
            <svg
              class="h-5 w-5"
              v-bind:style="{ fill: 'black' }"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <!-- search bar -->
        <div class="relative text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Search products..."
            class="
              bg-white
              h-10
              w-full
              xl:w-64
              px-5
              rounded-lg
              border
              text-sm
              focus:outline-none
            "
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <Search />
          </button>
        </div>
      </div>

      <!-- right navbar -->
      <div class="flex items-center relative">
        <Noftication />
        <img
          :src="getImgUrl(user.avatar)"
          class="w-12 h-12 rounded-full shadow-lg"
          @click="dropDownOpen = !dropDownOpen"
        />
      </div>
    </div>

    <!-- dropdown menu -->
    <div
      class="
        absolute
        bg-gray-100
        border border-t-0
        shadow-xl
        text-gray-700
        rounded-b-lg
        w-48
        right-0
      "
      :class="dropDownOpen ? '' : 'hidden'"
    >
      <router-link to="/account" class="block px-4 py-2 :bg-gray-200"
        >Account</router-link
      >
      <router-link to="/" class="block px-4 py-2 :bg-gray-200"
        >Settings</router-link
      >

      <button @click="logout" class="block px-4 py-2 :bg-gray-200">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Noftication from "../icons/Noftication.vue";
import Search from "../icons/Search.vue";
import store from "../../store";

export default {
  components: { Noftication, Search },
  name: "Navbar",
  computed: {
    ...mapState(["sideBarOpen"]),
  },
  data() {
    return {
      dropDownOpen: false,
      user: localStorage.getItem("user"),
      pathImg: "../../assets/img/Admin/",
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("toggleSidebar");
    },
    logout() {
      this.$store.dispatch("logout");
    },
    getImgUrl(pet) {
      if (pet) {
        let url = require.context(
          "../../assets/img/Admin/",
          false,
          /\.(png|jpe?g|svg)$/
        );
        return url(`./${pet}`);
      }
    },
  },
  created() {
    store.dispatch("getUser").then(() => {
      this.user = store.state.user;
    });
  },
};
</script>