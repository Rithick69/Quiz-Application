<template>
<fragment>
      <header>
        <div class="col-6">
          <h1>{{title}} </h1>
        </div>
        <div class="col-4">
          <h3>{{userName}} </h3>
        </div>
        <div class="col-2" v-if="userName != null && userName != ''">
          <h2><a @click="logOut">LogOut</a></h2>
        </div>
      </header>
  </fragment>
</template>

<script>
import store from '../../store/store';
import { mapState } from 'vuex';
export default {
    props:['title'],
     methods:{
       logOut(){
          store.dispatch({
            type: 'removeUserDetail',
            userName: null
          });
          this.$router.push({ name: 'login'});
       }
     },
     computed: mapState({
      userName: function(state){
        if(!state.userName){
          return '';
        }
       return state.userName;
     }
    })
}
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
}

header h1 {
  color: white;
  margin: 0;
}
header h3 {
  color: white;
  margin-top: 10px;
  float:right;
}
header h2 {
  color: white;
  margin-top: 10px;
  padding-right:20px;
  float:right;
}
a{
  cursor: pointer;
}
</style>