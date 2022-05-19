<template>

  <router-view/>
</template>

<script>

  export default {
    name: 'App',


    watch ()
    {
       fetch('http://localhost/QuakkaProject/admins/profile/1'
        , {
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data'
                
            }
            
        }).
        then(response => response.json())
        .then(data => {
            
            this.username = data.nom;
            this.email = data.email;
            this.password = data.password;
            this.picture_admin = data.avatar;

            // update the localStorage user
            localStorage.setItem('user', JSON.stringify(data));
        })
    
    
    },
    provide() {
      return {
       //update user in localStorage
       
      }
      

    },

}
</script>



