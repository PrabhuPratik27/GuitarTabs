<template>
  <div>
    <v-layout justify-center>
      <v-flex xs8>
        <songs-search-panel class="mb-2" />
        <songs-panel class="mt-2" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearch'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  }
}
</script>

<style scoped>
</style>
