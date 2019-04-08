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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
