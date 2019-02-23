<template>
  <div>
    <v-layout class="mt-3">
      <v-flex xs12>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action">
            </slot>
          </v-toolbar>

          <div class="pl-4 pr-4 pb-2 pt-2">
            <slot></slot>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
