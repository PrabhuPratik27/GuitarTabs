<template>
  <div>
    <v-layout justify-center>
      <v-flex xs6 class="mr-2">
        <SongMetaData :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6 class="mr-2">
        <tabs :tab="song.tab" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :lyrics="song.lyrics" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// eslint-disable-next-line
import SongService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetaData from './SongMetaData'
import YouTube from './YoutubeView'
import Lyrics from './Lyrics'
import Tabs from './Tabs'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
  },
  components: {
    Panel,
    SongMetaData,
    YouTube,
    Lyrics,
    Tabs
  }
}
</script>

<style scoped>
.song{
    padding: 20px;
    min-height: 30vh;
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
  pre{
    overflow: auto;
    height: 45vh;
  }
</style>
