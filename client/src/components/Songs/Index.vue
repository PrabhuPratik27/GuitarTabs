<template>
  <div>
    <v-layout justify-center>
      <v-flex xs6>
        <songs-panel class="mr-2" />
      </v-flex>
      <v-flex xs6>
        <songs-search-panel class="ml-2" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearch'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
  .song{
    padding: 20px;
    min-height: 20vh;
    overflow: hidden;
  }
  .song-title{
    font-size: 3em;
  }
  .song-artist{
    font-size: 2em;
  }
  .song-genre{
    font-size: 1em;
  }
  .song-album{
    font-size: 1em;
  }
  .albumImage{
    width: 15vh;
    margin: 0 auto
  }
</style>
