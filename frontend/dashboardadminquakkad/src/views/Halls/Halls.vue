<template>
  <div>
    <Main>

       <BreadCrumb
       :items="['Dashboard','Halls']"
       />
      <div class="container mx-auto py-6 px-4" x-data="datatables()" x-cloak>
        <h1 class="text-3xl py-4 border-b mb-10">halls List</h1>
        <!-- give animat for title -->
        
        
        <div v-if="loading">
          <Loading />
        </div>
        <div v-else class="mb-4 flex justify-between items-center">
          <div class="flex-1 pr-4">
            <div class="relative md:w-1/3">
              <input
                type="search"
                v-model="search"
                @keypress="searchKeyPress"
                class="
                  w-full
                  pl-10
                  pr-4
                  py-2
                  rounded-lg
                  shadow
                  focus:outline-none focus:shadow-outline
                  text-gray-600
                  font-medium
                "
                placeholder="Search..."
              />
              <div class="absolute top-0 left-0 inline-flex items-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-400"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div
          v-if="!loading"
          class="overflow-x-auto rounded-lg shadow overflow-y-auto relative"
        >
          <div class="flex flex-col mt-8">
            <div
              class="
                py-2
                -my-2
                overflow-x-auto
                sm:-mx-6 sm:px-6
                lg:-mx-8 lg:px-8
              "
            >
              <div
                class="
                  inline-block
                  min-w-full
                  overflow-hidden
                  align-middle
                  border-b border-gray-200
                  shadow
                  sm:rounded-lg
                "
              >
                <table class="min-w-full">
                  <thead>
                    <tr>
                      <th
                        v-for="(header, index) in th_table"
                        :key="index"
                        class="
                          px-6
                          py-3
                          text-xs
                          font-medium
                          leading-4
                          tracking-wider
                          text-left text-gray-500
                          uppercase
                          border-b border-gray-200
                          bg-gray-50
                        "
                      >
                        {{ header.name }}
                      </th>
                    </tr>
                  

                    <tbody
                      v-if="halls.length == 0 && !searchIsLoading"
                      class="
                      text-center
                       p-5
                       w-1/2
                       "
                    >
                      <div class="text-gray-600">
                        No data
                        <div class="text-gray-600">
                          <Loading />
                        </div>
                      </div>
                    </tbody>
                    </thead>
                  <tbody class="bg-white">
                    
                    <tr v-for="(hall, index) in halls" :key="index">
                      <td :class="`cursor-pointer ${default_ClassName}`">
                        <div class="text-sm leading-5 text-gray-900">
                          {{ hall.name }}
                        </div>
                      </td>

                      <td :class="` ${default_ClassName}`">
                        <div class="text-sm leading-5 text-gray-500">
                          {{ hall.price }}$
                        </div>
                      </td>

                      <td :class="`${default_ClassName}`">
                        <span
                          :class="` inline-flex px-2 text-xs font-semibold leading-5   ${creat_status_class}`"
                        >
                          {{ creat_status(hall.status) }}
                        
                        </span>
                      </td>
                      <td :class="`${default_ClassName}`">
                        <div class="text-sm leading-5 text-gray-500">
                          {{
                            hall.address
                          }}
                        </div>
                      </td>
                      <td :class="` ${default_ClassName}`">
                        <div class="
                            text-sm
                            leading-5
                            whitespace-no-wrap
                            text-gray-500"
                        >
                          {{ date_for_humans(hall.created_at) }}
                        </div>
                      </td>

                      <td
                        @click="view_hall(hall)"
                        :class="`cursor-pointer ${default_ClassName}`"
                      >
                        <LinkIcon className="w-5 h-5 text-blue-400" />
                      </td>
                      <td
                        @click="edit_hall(hall)"
                        :class="`cursor-pointer ${default_ClassName}`"
                      >
                        <EditIcon className="w-5 h-5 text-blue-400" />
                      </td>
                      <td
                        :class="`cursor-pointer ${default_ClassName}`"
                        @click="delete_hall(hall.id)"
                      >
                        <TrashIcon className="w-5 h-5 text-red-400" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
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
import Loading from "@/components/base/Loading.vue";
import BreadCrumb from "@/components/base/BreadCrummb.vue";
// import ViewHalls from "@/components/halls/ViewHalls.vue";
// import EditProduct from "@/components/halls/EditProduct.vue";
import Swal from "sweetalert2";

export default {
  name: "createProduct",
  components: { Main, EditIcon, TrashIcon, LinkIcon, Loading,BreadCrumb },

  data() {
    return {
      halls: [],
      loading: true,
      open_modal: false,

      default_ClassName:
        " px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200",
      sourceImages: "../../assets/img/product/",
      th_table: [
        { name: "Name" },
        { name: "Price" },
        { name: "Status" },
        { name: "Adrress" },
        { name: "Created at" },
        { name: "View" },
        { name: "Edit" },
        { name: "Delete" }
      ],
      halls: [],
      creat_status_class: "",
      images: [],
      search: "",
      searchIsLoading: false,
      items: [],
    };
  },
  methods: {
    creat_status(value) {
      if (value)
      {
          this.creat_status_class = "text-green-500";
          return "Available";
      }
        else
        {
            this.creat_status_class = "text-red-500";
            return "Not available";
        }

},
    date_for_humans(date) {
      const moment = require("moment");
      return moment(date).format("MMMM Do YYYY, h:mm a");
    },
   view_hall(hall) {
      hall = JSON.parse(JSON.stringify(hall));
      this.$router.push({
        name: "viewHall",
        params: { hallId: hall.id },
      });
    },
    edit_hall(hall) {
      hall = JSON.parse(JSON.stringify(hall));
      this.$router.push({
        name: "editHall",
        params: {
          hallId: hall.id,
        },
      });
    },
    delete_hall(id) {
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
            let params ={
            id: id,
            model: "halls",
          }
          this.$store.dispatch("delete",params);
          this.halls = this.halls.filter(
            (hall) => hall.id !== id
          );
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your hall is safe :)", "error");
        }
      });
    },
    get_halls() {
      this.halls = this.$store.state.halls;
    },
    searchKeyPress() {
      if (this.search.length > 0) {
        this.halls = this.halls.filter((hall) => {
          return hall.name.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        this.get_halls();
      }
      if (this.search.length > 0 && event.keyCode == 8) {
        this.halls = this.halls.filter((hall) => {
          return hall.name.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
  },
  mounted() {
    const params = {
      model: "halls",
    };
    store.dispatch("getAll", params);
    setTimeout(() => {
      this.halls = store.state.halls;
      this.loading = false;


    }, 1300);

  },
};
</script>
