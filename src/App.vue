<!--1模板:html-->
<template>
  <div id="app">
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<!--2行为：处理逻辑-->
<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<!--样式-->
<style>

</style>
