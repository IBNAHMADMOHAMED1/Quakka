<template>
 <div>
  <Main>
     <Dashboard>
     
   </Dashboard>
  </Main>
  
   
 </div>
</template>
<script>
import { mapState } from 'vuex'
import Main from '@/components/Main'



import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'Home',
  data() {
    return {
     user:localStorage.getItem('user')
    }
  },
  computed: {
    ...mapState(['sideBarOpen'])
  },
  components: { Dashboard , Main},
   beforeCreate() {
      console.log(localStorage.getItem('user'))
      if (localStorage.getItem('user') === null) {
        this.$router.push('/login')
      }
      else {this.$router.push('/dashboard')}
    }
}
</script>





   
