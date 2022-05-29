<template>
  <!-- product -->
  <div class="container">
    <div class="product">
      <div class="image">
        <img :src="image" />
      </div>
      <div class="content">
        <h1>{{ title }}</h1>
        <div class="stockInfo">
          <span class="green" v-if="inventory > 10">In Stock</span>
          <span class="amber" v-else-if="inventory <= 10 && inventory > 0">
            Only few left
          </span>
          <span class="red" v-else>Out of Stock</span>
        </div>
        <ul class="features">
          <li v-for="(feature, index) in features" :key="index">
            {{ feature }}
          </li>
        </ul>
        <div class="variants">
          <span
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            @mouseover="updateImage(index)"
            class="colorBox"
            :style="{ backgroundColor: variant.variantColor }"
          >
          </span>
        </div>
        <div class="shipping">Shipping: {{ shipping }}</div>
        <div class="addCart">
          <button
            @click="addToCart"
            :disabled="inventory <= 0"
            :class="{ disabledState: inventory <= 0 }"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <product-tabs :reviews="reviews"></product-tabs>
  </div>
</template>

<script>
import ProductTabs from './Product-tabs.vue';
import { eventBus } from '../main.js';
export default {
  name: "Product",
  components: {
    ProductTabs
  },
  props: {
    member: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      brand: "Nike",
      product: "Air Force",
      selectedVariant: 0,
      features: ["Durable leather", "Secure lace up", "Padded ankle collar"],
      variants: [
        {
          variantId: 1,
          variantColor: "red",
          variantImage: require("../assets/images/nike-red.jpg"),
          variantQty: 20,
        },
        {
          variantId: 2,
          variantColor: "white",
          variantImage: require("../assets/images/nike-white.jpg"),
          variantQty: 5,
        },
        {
          variantId: 3,
          variantColor: "Black",
          variantImage: require("../assets/images/nike-black.jpg"),
          variantQty: 0,
        },
      ],
      reviews: []
    };
  },
  methods: {
    addToCart() {
      this.$emit("addtocart", this.variants[this.selectedVariant].variantId);
    },
    updateImage(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inventory() {
      return this.variants[this.selectedVariant].variantQty;
    },
    shipping() {
      if(this.member) {
        return 'FREE'
      }
      return '£' + 2.99
    }
  },
  mounted() {
    eventBus.$on('review-submitted', productReview => {
      this.reviews.push(productReview)
    })
  }
};
</script>