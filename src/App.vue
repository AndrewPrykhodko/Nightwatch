<template>
  <v-app>
    <BaseLayout>
      <transition name="fade">
        <router-view :key="$route.fullPath" />
      </transition>
    </BaseLayout>
    <Snackbar ref="snackbar" />
  </v-app>
</template>

<script>
import BaseLayout from './layouts/Default'
import Snackbar from '@/components/base/Snackbar'

export default {
  name: 'App',
  components: {
    BaseLayout,
    Snackbar
  },
  mounted () {
    this.$root.$snackbar = this.$refs.snackbar
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
