<template>
  <div class="page">
    <chat v-if="isLogin"></chat>
    <login v-else></login>
  </div>
</template>

<script>
import Counter from 'components/Counter'
import Chat from 'components/Chat'
import Login from 'components/Login'

export default {
  computed: {
    isLogin() {
      return this.$store.state.chat.login
    }
  },
  components: {
    'counter': Counter,
    'chat': Chat,
    'login': Login
  }

}
</script>
