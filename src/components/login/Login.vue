<template>
  <div>
    <LoginHeader></LoginHeader>
    <LoginForm></LoginForm>
    <LoginSNS></LoginSNS>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import LoginHeader from './LoginHeader.vue'
import LoginSNS from './LoginSNS.vue'
 
export default {
  components: {
    LoginForm,
    LoginHeader,
    LoginSNS
  }
}
</script>

<style>

</style>
