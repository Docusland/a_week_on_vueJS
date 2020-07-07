<template>
  <div>
    Hi, this is home.
    <select name="" id="" @change="seeGithubAccount" v-model="account">
      <option v-for="(account,index) in accounts" :key="index" :value="account">{{ account }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      account: '',
      accounts: ['gokaygurcan', 'yyx990803', 'Rich-Harris']
    }
  },
  methods: {
    seeGithubAccount() {
      this.$router.push({ name: 'Github', params: { pseudo: this.account } })
    }
  }
}
</script>

<style scoped>
</style>
