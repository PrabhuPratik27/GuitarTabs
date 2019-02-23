<template>
  <div>
    <v-layout justify-center>
      <v-flex xs8>
        <panel title="Register">
          <form name="tab-tracker-form" autocomplete="off">
              <v-text-field label="Email" v-model="email"></v-text-field>
              <br>
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
                autocomplete="new-password"
              ></v-text-field>
            </form>
            <br>
            <div class="danger-alert" v-html="error"/>
            <br>
            <v-btn dark class="cyan" @click="register">Register</v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger-alert {
  color: red;
}

.cont{
  width: 50vw;
}
</style>
