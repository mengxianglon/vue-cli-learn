<template>
  <div class="users">
      <ul>
          <li v-for="(value,key) in users">
              {{value}}...{{key}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: ['Welcome','to','Your','Vue.js','App']
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    list-style-type: none;
  } 
</style>
