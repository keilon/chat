<template>
  <div>
    <div>欢迎来到Keilon的小黑屋</div>
    <input v-model="username" placeholder="请输入你的名字">
    <button @click="login">登录</button>
  </div>
</template>

<script>
import socket from '../socket'
export default {
  data() {
    return {
        username: null
    }
　},
  methods: {
    login() {
        socket.init(this.$store, this.username)
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
