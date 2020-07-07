<template>
  <div>
    Bar is the way to go for id {{ id }} !
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data() {
    return {
      id: 0
    }
  },
  methods: {
    setId() {
      this.id = this.$route.params.id;
    }
  },
  mounted() {
    this.setId(this.$route.params.id);
    // ici on fait face à un souci. 
    // Le component n'est pas recréé lors d'un passage de bar/1 à bar/15. 
    // le router n'a pas compris qu'il s'agissait d'un nouveau component à monter.
    // rajouter ceci sur le router-view :key="$route.fullPath"
    // https://stackoverflow.com/questions/43461882/update-vuejs-component-on-route-change
  }
}
</script>

<style scoped>
</style>
