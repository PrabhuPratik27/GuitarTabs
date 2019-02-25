<template>
   <panel title="Tabs">
      <pre>{{tab}}</pre>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'tab'
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