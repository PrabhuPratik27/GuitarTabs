<template>
   <panel title="Tabs">
      <pre>{{tab}}</pre>
    </panel>
</template>

<script>
export default {
  props: [
    'tab'
  ]
}
</script>

<style scoped>
  pre{
      overflow: auto;
      height: 45vh;
    }
</style>