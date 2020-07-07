<template>
  <div class='flex-between'>
    <div>{{ locationItem.fields.realisateur }}</div>
    <div>{{ locationItem.fields.titre }}</div>
    <div>{{ locationItem.fields.adresse }}</div>
    <div>{{ locationItem.fields.date_debut | toFrenchDateFormat('LL')}}</div>
    <!-- <div>{{locationItem}}</div> -->
  </div>
</template>
<script>
import moment from 'moment';

export default {
  name: 'LocationListItem',
  props: {
    locationItem: Object
  },
  filters:{
    toFrenchDateFormat(date, format='DD/MM/y' ) {
      return moment(date).format(format);
    }
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('before update');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy(){
    console.log('before destroy');
  },
  destroyed() {
    console.log('destroyed');
  },
}
</script>
<style scoped>
  .flex-between {
    display: flex;
    justify-content: space-between;
  }
</style>