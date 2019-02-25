<template>
  <v-toolbar fixed class="cyan">
  <v-toolbar-title class="mr-4"><router-link
        class="home"
        tag="span"
        :to="{
          name: 'HelloWorld'
        }">
        TabTracker
      </router-link></v-toolbar-title>
  <v-toolbar-items>
    <v-btn flat dark :to="{name: 'songs'}">Browse</v-btn>
  </v-toolbar-items>

  <v-spacer></v-spacer>

  <v-toolbar-items >
    <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name: 'register'}">
      SignUp
    </v-btn>

    <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name: 'login'}">
      Login
    </v-btn>

    <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
      Logout
    </v-btn>
  </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    cursor: pointer
  }

  .home:hover{
    color: #e9e;
  }
</style>
