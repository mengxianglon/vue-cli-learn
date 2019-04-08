<template>
  <footer >
    <h3>{{ Copyright }}</h3>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      Copyright: 'this is a footer'
    }
  }
}
</script>


<style scoped>
   footer h3{
        color: burlywood;
    }
</style>
