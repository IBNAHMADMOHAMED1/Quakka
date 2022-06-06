<template>
  <div>
    <div class="relative mx-auto w-96">
      <div class="mt-3 text-center">
        <div
          class="
            mx-auto
            flex
            items-center
            justify-center
            h-12
            w-12
            rounded-full
            bg-purple-100
          "
        >
          <svg
            class="h-6 w-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlnx="http://www.w.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Successfull</h3>
        <div class="mt-2 px-7 py-3">
          <p class="text-sm text-gray-500">
            Account has been Successfull registered.
          </p>
        </div>
        <div class="items-center px-4 py-3">
          <button
            @click="$router.push('/products')"
            id="ok-btn"
            class="
              px-4
              py-2
              bg-purple-500
              text-white text-base
              font-medium
              rounded-md
              w-full
              shadow-sm
              hover:bg-purple-600
              focus:outline-none focus:ring-2 focus:ring-purple-300
            "
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    title: {
      type: String,
      default: 'Successfull'
    },
    message: {
      type: String,
      default: 'Product has been Successfull Created.'
    },
    okText: {
      type: String,
      default: 'OK'
    }
    
  },
}

</script>
