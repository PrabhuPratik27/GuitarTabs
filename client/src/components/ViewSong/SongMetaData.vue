<template>
  <panel :title="song.title">
    <div class="song">
      <v-layout>
        <v-flex xs3 offset-xs3>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-genre">{{song.genre}}</div>
        </v-flex>
        <v-flex xs2 offset-xs1>
          <img class="albumImage" :src="song.albumImageUrl">
          <div class="song-album">{{song.album}}</div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <br>
          <v-btn dark class="cyan" :to="{name: 'song-edit', params() {return {songId: song.id}}}">Edit Song</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
export default {
  props: ['song']
}
</script>

<style scoped>
.song {
  padding: 20px;
  min-height: 45vh;
  overflow: hidden;
}
.song-title {
  font-size: 3em;
}
.song-artist {
  font-size: 2em;
}
.song-genre {
  font-size: 1em;
}
.song-album {
  font-size: 1em;
}
.albumImage {
  width: 15vh;
  margin: 0 auto;
}
</style>