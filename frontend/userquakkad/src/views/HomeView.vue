<template>
  <Main>
    <div>
      <HeroArea />
      <CategoryArea />
      <ProductArea />
      <BannerArea />
      <HallArea />
      <BlogArea />
      <ShippingInfo/>
      </div>
  </Main>
</template>

<script>
import Main from '@/components/Main'
import CategoryArea from '@/components/CategoryArea.vue'
import HeroArea from '@/components/HeroArea.vue'
import ProductArea from '@/components/ProductArea.vue'
import BannerArea from '@/components/BannerArea.vue'
import HallArea from '@/components/HallsArea.vue'
import BlogArea from '@/components/BlogArea.vue'
import ShippingInfo from '@/components/ShippingInfo.vue'
export default {
  name: 'HomeView',
  components: {
    HeroArea, CategoryArea, ProductArea, Main, BannerArea, HallArea, BlogArea, ShippingInfo
  }
}
</script>
