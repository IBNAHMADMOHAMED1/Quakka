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
            Create a new Hall
          </h2>
          <div class="flex items-stretch gap-2">
            <div
              v-for="step in stepsCountWithSuccessPage"
              :key="step"
              class="h-2 w-full rounded text-purple-500 mb-2 mt-3"
              style="border: 1px solid"
              :class="{ 'bg-purple-500 ': step - 1 <= currentStep }"
            ></div>
          </div>

          <form v-if="openUploadImage === 'default'">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 :text-gray-200" for="username">
                  Hall Name
                </label>
                <input
                  id="Product_Name"
                  valdata="required | min:3"
                  v-model="hall.name"
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
                  Hall Price
                </label>
                <input
                  id="password"
                  type="number"
                  v-model="hall.price"
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
                <label class="text-gray-700 :text-gray-200" for="password">
                  Hall local
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
                  v-model="hall.address"
                >
                  <option selected disabled>Choose a city</option>
                  <option v-for="city in cities" :key="city.id">
                    {{ city.name }}
                  </option>
                </select>
              </div>
              <div>
                <label
                  class="text-gray-700 :text-gray-200"
                  for="Product_Quantity"
                >
                  Hall Capacity
                </label>
                <input
                  id="Product_Quantity"
                  type="number"
                  v-model="hall.Nbr_place"
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
              <div></div>
            </div>

            <div>
              <label class="text-gray-700 :text-gray-200" for="emailAddress">
                Hall Description
              </label>

              <textarea
                id="message"
                valdata="required | min:3"
                v-model="hall.description"
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

            <div class="flex justify-end mt-6 gap-4">
              <button
                @click="cancelcreateHall"
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
              <button
                @click="createHall"
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
            <UploadImage @openHallDone="openHallDone" />
          </div>
          <div v-if="openUploadImage === 'done'">
            <PageDone title="Hall Created" body="Hall created successfully" />
          </div>
        </section>
      </div>
    </Main>
  </div>
</template>
<script>
import Main from "../Main.vue";
import UploadImage from "./UploadImage.vue";
import PageDone from "../alert/PageDone";
import store from "@/store";
import Swal from "sweetalert2";

export default {
  name: "FormCreatHall",
  components: { Main, UploadImage, PageDone },

  data() {
    return {
      stepsCountWithSuccessPage: [1, 2, 3],
      productCreated: [],
      is_done: false,
      currentStep: 0,
      openUploadImage: "default",
      cities: [
        { id: 1, name: "Casablanca" },
        { id: 2, name: "Rabat" },
        { id: 3, name: "Fes" },
        { id: 4, name: "Marrakech" },
        { id: 5, name: "Tanger" },
        { id: 6, name: "Meknes" },
        { id: 7, name: "Oujda" },
        { id: 8, name: "Tetouan" },
        { id: 9, name: "Taza" },
        { id: 10, name: "El Jadida" },
        { id: 11, name: "Safi" },
        { id: 12, name: "Ouarzazate" },
        { id: 13, name: "Tiznit" },
        { id: 14, name: "Kenitra" },
        { id: 15, name: "Settat" },
        { id: 16, name: "Khouribga" },
        { id: 17, name: "Sidi Kacem" },
        { id: 18, name: "Sefrou" },
        { id: 19, name: "Berkane" },
        { id: 20, name: "Tetouan" },
        { id: 21, name: "Oujda" },
        { id: 22, name: "Tanger" },
        { id: 23, name: "Oriental" },
        { id: 24, name: "Taza" },
        { id: 25, name: "Tetouan" },
        { id: 26, name: "Oriental" },
        { id: 27, name: "Tanger" },
        { id: 28, name: "Oriental" },
        { id: 29, name: "Tanger" },
        { id: 30, name: "Oriental" },
        { id: 31, name: "Tanger" },
        { id: 32, name: "Oriental" },
        { id: 33, name: "Tanger" },
        { id: 34, name: "Oriental" },
        { id: 35, name: "Tanger" },
        { id: 36, name: "Oriental" },
        { id: 37, name: "Tanger" },
        { id: 38, name: "Oriental" },
        { id: 39, name: "Tanger" },
        { id: 40, name: "Oriental" },
        { id: 41, name: "Tanger" },
        { id: 42, name: "Oriental" },
        { id: 43, name: "Tanger" },
      ],
      hall: {
        name: "",
        address: "",
        Nbr_place: "",
        description: "",
        price: "",
      },
    };
  },
  methods: {
    createHall(e) {
      e.preventDefault();
      console.log(this.hall);
      store.dispatch("createHall", this.hall);
      if (store.state.hall) {
        this.openUploadImage = "image";
        this.currentStep = 1;
        Swal.fire({
          title: "Hall Created",
          text: "Hall created successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        
      }
    },
    uploadImages(e, Images) {
      e.preventDefault();
      console.log(Images);
    },
    openHallDone() {
      this.currentStep = 2;
      this.openUploadImage = "done";
    },
    cancelcreateHall(e) {
      e.preventDefault();
      this.$router.push("/halls");
    },
  },
};
</script>
