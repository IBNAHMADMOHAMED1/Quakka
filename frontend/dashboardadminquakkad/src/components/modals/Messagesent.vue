<template>


<div v-if="showModal" class="fixed top-0  left-0 z-10 flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-black/25">    
    <div id="popup-modal"  tabindex="-1" class="fixed w-full top-0 left-0 right-0 z-50  md:inset-0 h-modal md:h-full min-w-[400px] px-4">
        <div class="p-4 w-full h-full flex items-center justify-center">
            <div class="bg-white rounded-lg shadow :bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center :hover:bg-gray-800 :hover:text-white" data-modal-toggle="popup-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="p-6 text-center">
                 <div v-if="typeIcon =='Error'">
                     <SadFace  />
                 </div>
                 <div v-else>
                 <CheckCircle />
                    </div>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 :text-gray-400">{{message}}</h3>
                    <ButtonPrimary 
                    @click="closeModal"
                    text="ok"
                    :class="`inline-block px-4 py-3 ${this.backgroundColor} text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:${this.backgroundColor} hover:shadow-lg focus:${this.backgroundColor} focus:shadow-lg focus:outline-none focus:ring-0 active:${this.backgroundColor} active:shadow-lg transition duration-150 ease-in-out w-full`"/>
                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script>

 import ButtonPrimary from  '@/components/base/ButtonPrimary.vue'
 import CheckCircle from '@/components/icons/CheckCircle.vue'
 import SadFace from '@/components/icons/SadFace.vue'

export default ({
    name: 'Modal',

 
    props: {
        backgroundColor: {
            type: String,
            default: 'bg-green-500'
        },
        showModal: {
            type: Boolean,
            default: true,
        },
        message: {
            type: String,
            default: '',
        },
        className: {
            type: String,
            default: '',	
        },
        typeIcon: {
            type: String,
            default: 'none',
        }
    },
    
    components: {
        CheckCircle,
        ButtonPrimary,
        SadFace,
    },
    
   
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    }
})
   

</script>
