<template>
     <div class="h-32 md:h-auto md:w-1/2">
     
            <img
              class="object-cover w-full h-full"
              src="../../assets/img/reg.jpg"
              alt="img"
            />
    </div>
</template>

<script>
export default {
    name: 'Image',
    props: {
        image: {
            type: String,
            required: true
        }
    }
}


</script>

       