<template>
  <div @click='removeMe'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Item',
  methods: {
    removeMe() {
      this.$emit('remove')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  cursor: pointer;
}
</style>
