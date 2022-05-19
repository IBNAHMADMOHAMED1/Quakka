<template>

  <div class="relative inline-block overflow-hidden">
    <input
      type="file"
      accept="image/* "
      class="hidden"
      :value="File"
      ref="file"
      @change="change"
    />
    <img :src="src" alt="Avatar" class="h-full w-full object-cover" />
    <div
      class="absolute top-0 h-full w-full bg-black bg-opacity-25 flex items-center justify-center"
    >
      <button
        type="button"
        @click="browse()"
        class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none text-white transition duration-200"
      >
        <Icon name="camera" class="h-6 w-6"></Icon>
      </button>
      <button
        type="button"
        v-if="value"
        @click="remove()"
        class="rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none text-white transition duration-200"
      >
        <Icon name="x" class="h-6 w-6"></Icon>
      </button>
    </div>
    
  </div>
</template>

<script>
import Icon from "@/components/icons/IconCamera.vue";

export default {
  props: {
    value: File,
    defaultSrc: String,
    getAvatar: Function
  },
  
  data() {
    return {
      src: this.defaultSrc,
    };
  },
  methods: {  
    browse() {
      this.$refs.file.click();
    },
    remove() {
      this.$emit("getAvatar", null);
    },
    change() {
      this.$emit("getAvatar", this.$refs.file.files[0]);
    },
    
  },
  components: {Icon,},
};
</script>