<template>
  <div class="hello">
    <h1>{{ msg.trim() }}, {{firstname.toUpperCase()}} </h1>
    <!-- Découverte du props -->
    <!-- Découverte du data -->
    <p>
      You are {{ age }} and you live {{ city }}
    </p>
    <!-- Découverte du v-if -->
    <p v-if="age < 20 ">Vous êtes jeunes et avez toute la vie devant vous</p>
    <p v-else-if="age > 60">Wow, trop tard pour apprendre à coder cher personne de {{ age }} ans </p>
    <p v-else> Vous êtes vivants à {{age}} ans, c'est déjà le principal</p>
    <div>
      <!-- Découverte du v-for -->
      <ul>
        <li v-for="(friend , index) of friends" :key="index">
        {{ friend }}
        </li>
      </ul>
    </div>
    <input type="text" v-model="firstname"/>
    <button @click="mymethod">Click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      age: 70,
      city: 'Lyon',
      friends: ['riri', 'fifi', 'loulou'],
      firstname:'toto'
    }
  },
  methods: {
    mymethod(event) {
      console.log(event);
      this.age++;

    }
  },
  props: {
    msg: String,
    age2: {
      type: Number,
      default: 10
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
