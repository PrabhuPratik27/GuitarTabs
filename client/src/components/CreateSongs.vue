<template>
  <v-layout row wrap>
    <v-flex xs4>
      <panel title="Create Songs" class="mr-2">
        <form name="create-song" autocomplete="off">
            <v-text-field label="Title*" required v-model="song.title"  :rules="[required]"></v-text-field>
            <br>
            <v-text-field label="Artist*"  v-model="song.artist" required :rules="[required]"></v-text-field>
            <br>
            <v-text-field label="Genre*"  v-model="song.genre" required :rules="[required]"></v-text-field>
            <br>
            <v-text-field label="Album*"  v-model="song.album" required :rules="[required]"></v-text-field>
            <br>
            <v-text-field label="AlbumImageUrl"  v-model="song.albumImageUrl"></v-text-field>
            <br>
            <v-text-field label="YoutubeId"  v-model="song.youtubeId"></v-text-field>
            <br>
            <v-btn dark class="cyan" @click="addsong" :disabled="!song.title ||!song.artist || !song.genre || !song.album || !song.tab">Add Song</v-btn>
          </form>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Tabs and Lyrics" class="ml-2">
        <v-textarea label="Lyrics"  v-model="song.lyrics" ></v-textarea>
        <br>
        <v-textarea label="Tabs*" v-model="song.tab" required :rules="[required]"></v-textarea>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: ''
      },
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async addsong () {
      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
