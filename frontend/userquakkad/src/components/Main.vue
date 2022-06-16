<template>
  
<slot>
  <Header>
  </header>

</slot>

  <router-view/>
</template>

<script>

import Header from './base/Header.vue'

export default {

  components: {
    Header
  },
  
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