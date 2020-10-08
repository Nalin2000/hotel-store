<template>
  <div id="app">
    <v-row justify="center" align="center">
      <v-col cols="12" lg="8" md="6">
        <Forms></Forms>

        <show></show>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Forms from '@/pages/from'
export default {
  components: {
    Forms,
  },
}
</script>

<style>
#app {
  font-family: 'Prompt', sans-serif;
}
</style>
