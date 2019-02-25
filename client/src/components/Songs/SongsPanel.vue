<template>
  <div>
    <panel title="Songs">
      <v-btn fab class="cyan accent-2" light medium absolute right middle slot="action" :to="{name: 'songs-create'}">
        <v-icon>add</v-icon>
      </v-btn>
      <div class="song" v-for="song in songs" :key="song.id">
        <v-layout>
          <v-flex xs3 offset-xs3>
            <div class="song-title">{{song.title}}</div>
            <div class="song-artist">{{song.artist}}</div>
            <div class="song-genre">{{song.genre}}</div>
            <v-btn dark class="cyan" :to="{name: 'song',params :{songId: song.id}}">View</v-btn>
          </v-flex>
          <v-flex xs2 offset-xs1>
            <img class="albumImage" :src="song.albumImageUrl">
            <div class="song-album">{{song.album}}</div>
          </v-flex>
        </v-layout>
      </div>
    </panel>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        console.log(value)
        this.songs = (await SongsService.index(value)).data
      }
    }
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
