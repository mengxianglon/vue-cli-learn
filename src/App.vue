<!--1模板:html-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <users></users>
  </div>
</template>

<!--2行为：处理逻辑-->
<script>
import HelloWorld from './components/HelloWorld'
import Users from './components/Users'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Users
  }
}
</script>

<!--样式-->
<style>

</style>
