<template>
  <div id="app">
    <router-view name="nestedHeader"></router-view>
    <router-view></router-view>
    <router-view name="summaryView"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
</style>
