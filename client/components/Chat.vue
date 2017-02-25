<template>
  <div>
    <div>Keilon的小黑屋（{{ count }}）</div>
    <li left v-for="item in messagebox">{{item}}</li>
    <input v-model="textMessage" placeholder="输入你想说的话">
    <button @click="sendMsg">发送</button>
  </div>
</template>

<script>
import socket from '../socket'
export default {
  data() {
    return {
        textMessage: null,
    }
  },
  computed: {
    count() {
      return this.$store.state.chat.totalCount
    },
    messagebox() {
      return this.$store.state.chat.messages
    }
  },
  methods: {
    sendMsg() {
        socket.send(this.textMessage)
    }
  }
}
</script>

<style>
.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
.counter li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: left;
  font-size: 2rem;
  width: 100px;
}
</style>
