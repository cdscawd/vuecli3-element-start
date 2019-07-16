<template>
  <div id="">
    <img alt="Vue logo" src="@/assets/logo.png">
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
  </div>
</template>

<script>

axios.get('http://localhost:8080/')
.then(res => {
  console.log(res)
})
export default {
  name: 'Home',
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
