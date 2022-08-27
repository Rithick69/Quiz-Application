<template>
  <div class="vue-tempalte">
    <!-- <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div> -->
<div class="alert alert-danger" role="alert" v-if="showErrorMessage">
  {{errorMessage}}
</div>

        <h3>Sign In</h3>

        <div class="form-group">
          <label>Usen Id</label>
          <input type="text" class="form-control form-control-lg" @keypress="resetError" v-model="loginInfo.email" />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control form-control-lg" @keypress="resetError" v-model="loginInfo.password"/>
        </div>
         <base-button  :mode="bottonClass"  @click="submitLoginInfo()">Login</base-button>

  </div>
</template>

<script>
import loginDetails from '@/assets/model/LoginDetails'
import store from '../store/store';
import { mapState } from 'vuex';
export default {
  
  data() {
    return {
      count:0,
      loginInfo: new loginDetails(),
      showErrorMessage:false,
      errorMessage:'',
      // in real senarion we will get this data from api call
      validUserCredentials:[
          {"username": "tcs@tcs.com","password":"tcs",},
          {"username": "tcs2@tcs.com","password":"Tcs1"},
          {"username": "1","password":"1"}
      ],
    };
  },
   computed:{
        bottonClass(){
                return null;
        },
    },
  methods:{
     submitLoginInfo(){
      this.resetError();
      let userId = this.loginInfo.email.trim().toLowerCase();
      let password = this.loginInfo.password.trim();
      let findUserDetails = this.validUserCredentials.find(aa => aa.username == userId && aa.password == password);
      if(findUserDetails){
        store.dispatch({
            type: 'addUserDetail',
            userName: findUserDetails.username
          });
        this.$router.push({ name: 'dashboard'});
      }
      else{
        this.showError('Invalid User!!!');
      }
    },
    resetError(){
         this.showErrorMessage = false;
         this.errorMessage = '';
    },
    showError(errorMessage){
         this.showErrorMessage = true;
         this.errorMessage = errorMessage;
    },
    
  }
};
</script>
