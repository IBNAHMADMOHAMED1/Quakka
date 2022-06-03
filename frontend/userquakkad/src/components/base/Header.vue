<template>
    <div>
 <header class="header navbar-area">
        <Spinner 
        v-if="spinner"
        />
        <HeaderTopbar />
       
        <HeaderMiddle />
       
        <HeaderBottom />
      
    </header>
    </div>
</template>

<script>
import HeaderTopbar from './header/HeaderTopbar'
import HeaderMiddle from './header/HeaderMiddle'
import HeaderBottom from './header/HeaderBottom'
import Spinner from './Spinner'

export default{
    components: {HeaderTopbar, HeaderMiddle, HeaderBottom, Spinner},
    data() {
        return {
            spinner:true,
        }
    },

    beforeCreate() {
       setTimeout(() => {
        this.spinner = false;
       }, 1000);
    
    }
}

</script>