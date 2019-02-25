<template>
  <panel title="Lyrics">
    <pre>{{lyrics}}</pre>
  </panel>
</template>

<script>
export default {
  props: [
    'lyrics'
  ]
}
</script>

<style scoped>
  pre{
      overflow: auto;
      height: 45vh;
    }
</style>