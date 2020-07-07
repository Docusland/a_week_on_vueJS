<template>
  <div id="app">
    <div class="error" v-if="message"> {{message}} </div>
    <input type="text" v-model="element" @keyup.enter="addToElements">
    <input type="button" value="add" @click='addToElements'>
    <div class='list'>
      <Item v-for='(element, key) in elements' :key="key" @remove="remove(key)">
        {{element}}
      </Item>
    </div>
  </div>
</template>

<script>
import Item from './components/Item.vue'

export default {
  name: 'App',
  data (){
    return {
      element: '',
      minElementLength: 5,
      message: '',
      elements: []
    }
  },
  methods: {
    clearElement() {
      this.element = '';
    },
    addToElements() {
      this.message = '';
      if(this.element.length < this.minElementLength){
        this.message = `Invalid length. Minimum length is ${this.minElementLength} characters.`;
      } else {
        this.elements.push(this.element);
        this.clearElement();
      }
    },
    remove(index) {
      this.elements.splice(index, 1);
    }
  },
  components: {
    Item
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.error {
  color:red;
}
</style>
