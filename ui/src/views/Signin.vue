<template>
  <div class="container">
    <div class="box">
      <form @submit.prevent="logIn">
        <input type="text">
        <input type="text">
        <button type="submit"></button>      
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logIn: function () {
      console.log('log in')
    }
  }  
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background:grey;
  height: 100vh;
}

.box {
  margin: auto;
}

</style>