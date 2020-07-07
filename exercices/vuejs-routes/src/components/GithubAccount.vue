<template>
  <div>
    <h2>  Github Account of {{ pseudo}} </h2>
    <div>
      <h3>{{ user.name }}</h3>
      <img :src="user.avatar_url" alt="avatar">
      <p>
        {{ user.bio }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data() {
    return {
      github_path: 'https://api.github.com/users/',
      pseudo:'',
      user: {
        name: '',
        avatar_url: '',
        bio: '',
      }
    }
  },
  mounted(){
    this.pseudo = this.$route.params.pseudo;
    fetch(this.github_path + this.pseudo)
      .then( (data) => data.json())
      .then( (user) => {
        this.user = user;
      });
  }
}
</script>

<style scoped>
</style>
