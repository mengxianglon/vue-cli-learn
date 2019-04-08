<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      title: 'this is a header line'
    }
  }
}
</script>


<style scoped>
  header  h1{
       color:crimson; 
    }
</style>
