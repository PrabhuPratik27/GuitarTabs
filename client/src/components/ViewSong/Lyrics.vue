<template>
  <panel title="Lyrics">
    <pre>{{lyrics}}</pre>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'lyrics'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
  pre{
      overflow: auto;
      height: 45vh;
    }
</style>