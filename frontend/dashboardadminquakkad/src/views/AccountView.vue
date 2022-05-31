<template>
  <div class="">
    <div>
      <Main>
        <component :is="child_profile"></component>
      </Main> 
      </div>
  
    <div>
    
    </div>
    <Form/>

  </div>

</template>

<script>

    import Profile from '@/components/Account/Profile.vue';
    import Form from '@/components/Account/Form.vue';
    import Main from '@/components/Main'

    export default {
        name: 'Account',
        components: {Profile,Form,Main},
        data() {
            return {
                child_profile:'Profile',
            }
        }
        }
    

</script>
