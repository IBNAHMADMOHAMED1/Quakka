
<template>


  <div aria-label="cards" class="bg-white :bg-gray-800 shadow rounded">
    <div class="relative">
      
      <img
        tabindex="0"
        class="
          focus:outline-none
          h-56
          shadow
          rounded-t
          w-full
          object-cover object-center
        "
       :src="pathImg + user.cover_photo"
        alt="mountains cover"
      />
      
      <div
        class="
          inset-0
          m-auto
          w-24
          h-24
          absolute
          bottom-0
          -mb-12
          xl:ml-10
          rounded
          border-2
          shadow
          border-white
        "
      >
        <img
          tabindex="0"
          class="
            focus:outline-none
            w-full
            h-full
            overflow-hidden
            object-cover
            rounded
          "
          :src="pathImg + user.avatar"
          alt="person"
        />
      </div>
    </div>
    <div class="px-5 xl:px-10 pb-10">
      <div class="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
        <div
          tabindex="0"
          aria-label="4 stars"
          role="img"
          class="focus:outline-none flex items-center"
        ></div>
      </div>
      <div
        class="
          pt-3
          xl:pt-5
          flex flex-col
          xl:flex-row
          items-start
          xl:items-center
          justify-evenly
        "
      >
        <div class="xl:pr-16 w-full xl:w-2/3 mb-2">
          <div
            class="
              text-center
              xl:text-left
              mb-3
              xl:mb-0
              flex flex-col
              xl:flex-row
              items-center
              justify-between
              xl:justify-start
            "
          >
            <a
              tabindex="0"
              class="text-gray-800 :text-gray-100 focus:outline-none mt-6"
              ><h2
                class="
                  mb-3
                  xl:mb-0 xl:mr-4
                  text-2xl
                  font-medium
                  tracking-normal
                "
              >
               {{ user.name }}
              </h2></a
            >
          </div>
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-center
              xl:text-left
              mt-2
              text-sm
              tracking-normal
              text-gray-600
              :text-gray-400
              leading-5
            "
          >
            Hi, I'm {{ user.name }}  Admin of Quakka company <br>
            Email: {{ user.email }}
            
          </p>
        </div>
        <div
          class="
            w-full
            xl:w-2/3
            flex-col
            md:flex-row
            justify-center
            xl:justify-end
            flex
            md:pl-6
          "
        >
        <div class="flex gap-5 md:flex-row">
          <button
            @click="handleUpdate"
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
            <EditIcon  />
            <span>Update</span>

          </button>
           <button
            @click="Logout"
            class="
              bg-red-500
              hover:bg-red-300
              text-white
              font-bold
              py-2
              px-4
              rounded
              inline-flex
              items-center
            "
          >
            <Logout  />
            <span>Logout</span>
          </button>
          </div>
        </div>
      </div>
    </div>


  </div>
  <UpadeAccount
    :showModal="shwoModal"
   @updateUser="updateUser"
    message="Your email or password is incorrect"
    :typeIcon="typeIcon"
    @closeModal="closeModal"
    :user="user"
  />
  
</template>

<script>

import store from '../../store'

import team2 from "../../assets/img/team-2-800x800.jpg";
import EditIcon from "@/components/icons/EditIcon.vue";
import UpadeAccount from "@/components/modals/UpadeAccount.vue";
import Logout from "@/components/icons/Logout.vue";

export default {
  data() {
    return {
      team2,
      shwoModal: false,
      user: '',
      pathImg: '../../assets/img/Admin/',
    };
  },
  components: {EditIcon,UpadeAccount,Logout},

  methods: {
    handleUpdate() {
      this.shwoModal = true;
    },
    closeModal()     {this.shwoModal = false;},
    updateUser(user) {this.user = user;},
    Logout() {store.dispatch('logout');}
  },

  created() {
      store.dispatch('getUser').then(() => {
      this.user = store.state.user;
    });
  },

};
</script>


        
