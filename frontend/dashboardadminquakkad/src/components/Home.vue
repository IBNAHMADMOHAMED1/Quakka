<template>
 
<main class=":bg-gray-800 bg-white relative overflow-hidden h-screen">
    <header class="h-24 sm:h-32 flex items-center z-30 w-full">
        <div class="container mx-auto px-6 flex items-center justify-between">
             <div class="w-full h-20 border-b flex px-4 items-center mb-8 justify-between">
            <p class="font-semibold text-3xl text-purple-700 pl-4">Quakka</p>
            <router-link to="/dashboard" class="py-2 px-6 flex">
                <div class="w-full flex items-center text-purple-700 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                    <span class="text-gray-700">Login</span>
                </div>
            </router-link>
          </div>
            <div class="flex items-center">
                <button class="lg:hidden flex flex-col ml-4">
                    <span class="w-6 h-1 bg-gray-800 :bg-white mb-1">
                    </span> 
                </button>
            </div>
        </div>
    </header>
    <div class="bg-white :bg-gray-800 flex relative z-20 items-center overflow-hidden ">
        <div class="container  px-16 flex relative py-20">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 :bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none :text-white text-gray-800">
                    Quakka
                    <span class="text-4xl sm:text-7xl">
                        admins
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 :text-white">
                    welcome to the admin panel
                </p>
                <div class="flex mt-8">
                  <router-link to="/dashboard" class="nline-block px-4 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:${this.backgroundColor} hover:shadow-lg focus:${this.backgroundColor} focus:shadow-lg focus:outline-none focus:ring-0 active:${this.backgroundColor} active:shadow-lg transition duration-150 ease-in-out ">
                    Dashboard
                  </router-link>
                
                </div>
            </div>
            <div class=" sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="../assets/img/home.svg" class="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
</main>

</template>

<script>

export default{
    name: "Home",
}

</script>
