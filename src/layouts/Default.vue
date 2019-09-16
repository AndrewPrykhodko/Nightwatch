<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
         <!-- The content of the page will be placed here -->
        <slot />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>
