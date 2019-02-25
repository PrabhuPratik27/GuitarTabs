<template>
  <panel title="Video">
    <div class="song">
      <youtube :video-id="youtubeId" ref="youtube" ></youtube>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
  .song{
    padding: 20px;
    min-height: 45vh;
    overflow: hidden;
  }
</style>