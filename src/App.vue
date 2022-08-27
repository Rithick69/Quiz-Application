<template>
<fragment>
    <the-header title="Learning Guide"></the-header>
    <!-- <login></login> -->
     <router-view/>
</fragment>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
import Login from './components/Login.vue';
export default {
    components : {
    TheHeader,
    Login,
},
  data(){
      return{
          title:'Learning Guide',
  } 
}
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
