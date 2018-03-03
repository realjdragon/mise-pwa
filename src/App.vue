<template>
  <div id="app">
    <router-view name="nestedHeader"></router-view>
    <router-view></router-view>
    <router-view name="summaryView"></router-view>
  </div>
</template>

<script>
  import firebase from 'firebase'

  let config = {
    apiKey: "AIzaSyBJd0zjaJLFyBSJo1D5kCnisOTxG_8JAZs",
    authDomain: "mise-pwa.firebaseapp.com",
    databaseURL: "https://mise-pwa.firebaseio.com",
    projectId: "mise-pwa",
    storageBucket: "mise-pwa.appspot.com",
    messagingSenderId: "187423768034"
  };
  firebase.initializeApp(config);

  export default {
    name: 'app',
  }
</script>

<style>
</style>
