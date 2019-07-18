<template>
  <div id="">
    <ul>
      <li><router-link to="login">login</router-link></li>
      <li><router-link to="home">home</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
    
  },
  mounted() {
    console.log(this.$moment('2018-09-19T05:54:32.767Z').format("YYYY-DD-MM"))
  }
}
</script>

<style>
 button {
   font-size: 14px;
 }
</style>
