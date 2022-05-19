<template>
     <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

      <Sidebar />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <Navbar />

        <div class="p-6 bg-gray-100 mb-20">
          
            <div class="container rounded bg-white mt-5 mb-5">
            <slot>
                
            </slot>
            </div>  
          <router-view />
        </div>  
      </div>
     
    </div>
 
  </div>
</template>

<script>
    import Sidebar from '@/components/base/Sidebar.vue'
    import Navbar from '@/components/base/Navbar.vue'
    export default {
        name: 'Main',
        components: {Sidebar,Navbar},
        props: {
            test: {
                type: String,
                default: 'test'
            },
            data () {
                return {
                    user:localStorage.getItem('user')
                }
            }
            
        }
    }

</script>
