<template>

<section class="h-screen">
  <div class="container px-6 py-12 h-full ">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="md:w-4/12 lg:w-4/12 mb-12 md:mb-0">
        <img
          src="@/assets/img/reindeer.svg"
          class="w-full"
          alt="Phone image"
        />
      </div>
      <div class=" lg:w-4/12 lg:ml-20 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form @submit.prevent="MessageSent" class="mb-6">
          <!-- Email input -->
          <div class="mb-6">
            <input
              type="email"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
              placeholder="Email address"
              required
            />
          </div>

          <button
            type="submit"
            
            class="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            
            Reset Password
          </button>
            
        </form>
      </div>
    </div>
<Messagesent :showModal="shwoModal" @click ="closeModal" message ='Message Sent Successfully , Please Check Your Email' />
  </div>
</section>

</template>

<script>

import Messagesent from '@/components/modals/Messagesent.vue'

    export default {
        name: 'forgotpasswordd',

        components: {
            Messagesent
        },

        data(){
            return {
                shwoModal: false,
            

            }
        },
        methods: {
           MessageSent(){
            this.shwoModal = true
            console.log(this.shwoModal)
           },
           closeModal(){
            this.shwoModal = false
           }
        }
       
            
  



        
    }

</script>
