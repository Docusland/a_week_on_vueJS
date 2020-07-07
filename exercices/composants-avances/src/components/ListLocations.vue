<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <LocationListItem v-for="(record, index) in records" :key="index" :locationItem="record"></LocationListItem>
    </div>
  </div>
</template>

<script>
import LocationListItem from './LocationListItem'
export default {
  name: 'ListLocations',
  data () {
    return {
      filepath: 'tournagesdefilmsparis2011.json',
      records:[]
    }
  },
  components: {
    LocationListItem
  },
  props: {
    msg: String
  },
  mounted () {
     fetch(this.filepath)
      .then( (data) => data.json())
      .then( (records) => {
        this.records = records;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
