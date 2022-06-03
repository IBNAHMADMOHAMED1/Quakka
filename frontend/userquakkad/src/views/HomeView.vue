<template>
  <div>
   <HeroArea />
   <CategoryArea />
   <ProductArea />
  </div>
</template>

<script>
import CategoryArea from '@/components/CategoryArea.vue'
import HeroArea from '@/components/HeroArea.vue'
import ProductArea from '@/components/ProductArea.vue'
export default {
  name: 'HomeView',
  components: {
    HeroArea,CategoryArea,ProductArea
  }
}
</script>
