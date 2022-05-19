<template>
    <button 
          @click="closeModal"
       data-modal-toggle="popup-modal" 
       :type="type.type">
          {{text}}          
    </button>

</template>

<script>

export default {
    name: 'ButtonPrimary',
    props: {
        className: String,
        type: {
            type: String,
            default: 'button',
        },
        text: {
            type: String,
            default: '',
        },
    }

}
</script>
