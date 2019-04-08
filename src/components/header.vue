<template>
  <header>
    <h1 v-show="see">{{ title }}</h1>
    <button v-on:click="see=!see">click this button</button>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      see:true,
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
