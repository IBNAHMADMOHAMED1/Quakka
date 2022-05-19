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
        <form @submit.prevent="login" class="mb-6">
       
          <div class="mb-6">
            <input
              v-model="email"
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>

          <div class="mb-6">
            <input
              v-model="password"

              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            
            class="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>

        </form>
        <div class="flex justify-between items-center mb-10">
            <div class="form-group form-check ">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck3"
                
              />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                >Remember me</label
              >
            </div>
            <router-link
              to ="/forgot-password"
              class="text-purple-600 hover:text-purple-700 focus:text-purple-700 active:text-purple-800 duration-200 transition ease-in-out cursor-pointer" 
              >Forgot password?</router-link
            >
          </div>
  <Messagesent :showModal="shwoModal" @click ="closeModal"  backgroundColor="bg-red-500" message="Your email or password is incorrect" :typeIcon="typeIcon" />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Messagesent from '@/components/modals/Messagesent.vue'
import axios from 'axios'
export default {
    name:'login',
    components: {
        Messagesent
    
    },
    data(){
        return{
           show: false,
          email: '',
          password: '',
          shwoModal: false,
          typeIcon:'Error',
          
        }
    },
    

    methods:{
        closeModal(){
          this.shwoModal = false
        },
        login(){
          const admin = {
            email: this.email,
            password: this.password,
          }
          console.log(admin)
          fetch('http://localhost/QuakkaProject/admins/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(admin),
          })
          .then(res => res.json())  //parses the response into a useable format
          .then(data => {
            console.log(data)
            if (data[0]===200)
            {
             
              localStorage.setItem('user', JSON.stringify(data[1]))
              this.$router.push('/dashboard')
              // use vuex to store the user data
              this.$store.commit('setUser', data[1])
              

            
            }
            if (data[1]==='Invalid credentials')
            {
              this.shwoModal = true;
            }
          })
          
        },

        },
        
        beforeCreate() {
          if (localStorage.getItem('user')) {
            this.$router.push('/dashboard')
          }
          else {
            this.$router.push('/login')
          }
        },
        provide() {
          return {
            login: this.login,
            user: this.user,
          }
        },
       
         
    }


</script>