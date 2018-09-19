<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;

  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    margin-top: 20px;
    border-radius: 4px;
    min-height: 60px;
    margin-bottom: 20px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
</style>
