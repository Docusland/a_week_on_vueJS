<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ mytext }} </h2>
    <p>
      {{ myage +herage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      'mytext': 'Bonjour les B3',
      'myage' : 13,
      'herage': 26
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
