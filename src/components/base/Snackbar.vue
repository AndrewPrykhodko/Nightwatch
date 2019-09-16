<template>
    <v-snackbar
      v-model="snackbar"
      :bottom="options.y === 'bottom'"
      :left="options.x === 'left'"
      :multi-line="options.mode === 'multi-line'"
      :right="options.x === 'right'"
      :timeout="options.timeout"
      :top="options.y === 'top'"
      :vertical="options.mode === 'vertical'"
      :color="options.color"
    >
      {{ message }}
      <v-btn
        color="grey darken-1"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>

<script>
/**
   * Vuetify Snackbar component
   *
   * Insert component where you want to use it:
   * <snackbar ref="snackbar"></snackbar>
   *
   * Call it:
   * this.$refs.snackbar.open('Are you sure?').then((snackbar) => {})
   *
   * Alternatively you can place it in main App component and access it globally via this.$root.$snackbar
   * <template>
   *   <v-app>
   *     ...
   *     <snackbar ref="snackbar"></snackbar>
   *   </v-app>
   * </template>
   *
   * mounted() {
   *   this.$root.$snackbar = this.$refs.snackbar.open
   * }
   */

export default {
  data () {
    return {
      snackbar: false,
      message: null,
      options: {
        y: 'top',
        x: null,
        mode: '',
        timeout: 3000,
        color: 'success'
      }
    }
  },
  methods: {
    open (message, options) {
      this.snackbar = true
      this.message = message
      this.options = Object.assign(this.options, options)
    //   return new Promise((resolve, reject) => {
    //     this.resolve = resolve
    //     this.reject = reject
    //   })
    }
  }
}
</script>
