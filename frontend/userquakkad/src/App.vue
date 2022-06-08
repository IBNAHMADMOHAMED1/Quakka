<template>
<Main/>
 <Footer/>
  <a href="#" class="scroll-top">
        <i class="lni lni-chevron-up"></i>
    </a>
</template>

<script>

import Main from './components/Main.vue'
import Footer from '@/components/base/Footer.vue'


export default {

  components: {
    Main,Footer
  },
  
  beforeCreate() { 
    this.$store.commit('setCart', JSON.parse(localStorage.getItem('cart')));
  
  }

  
}
</script>

<style lang="scss">
@import '@/assets/scss/_about.scss';
@import '@/assets/scss/main.scss';
@import '@/assets/scss/_header.scss';
@import '@/assets/scss/_hero.scss';
@import '@/assets/scss/_footer.scss';
@import '@/assets/scss/_banner.scss';
@import '@/assets/scss/_faq.scss';
@import '@/assets/scss/_contact.scss';
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");



</style>