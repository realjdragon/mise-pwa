<template>
  <div>
    <div>
      <input type="text" v-model="email">
    </div>
    <div>
      <input type="password" v-model="password" v-on:keyup.enter="login">
    </div>
    <div>
      <button v-on:click="login">로그인</button>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        var self = this;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        }).then(function(user){
          self.$router.push({path: '/home'});
        });
      }
    }
  }
</script>

<style>

</style>
