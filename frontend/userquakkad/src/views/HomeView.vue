<template>
<Main>
  <div>
   <HeroArea />
   <CategoryArea />
   <ProductArea />

  </div>
 </Main> 
</template>

<script>
import Main from '@/components/Main'
import CategoryArea from '@/components/CategoryArea.vue'
import HeroArea from '@/components/HeroArea.vue'
import ProductArea from '@/components/ProductArea.vue'
export default {
  name: 'HomeView',
  components: {
    HeroArea,CategoryArea,ProductArea,Main
  }
}
</script>
