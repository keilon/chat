<template>
  <div>
    <chat v-if="isLogin"></chat>
    <login v-else></login>
  </div>
</template>

<script>
import Chat from 'components/Chat'
import Login from 'components/Login'

export default {
  computed: {
    isLogin() {
      return this.$store.state.chat.login
    }
  },
  components: {
    'chat': Chat,
    'login': Login
  }
}
</script>
