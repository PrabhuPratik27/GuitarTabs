<template>
  <panel title="Video">
    <div class="song">
      <youtube :video-id="youtubeId" ref="youtube" ></youtube>
    </div>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
  .song{
    padding: 20px;
    min-height: 45vh;
    overflow: hidden;
  }
</style>