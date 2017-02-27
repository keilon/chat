<template>
  <div class="login-wrapper">
    <div class="body">
      <div class="-title">欢迎来到Keilon的小黑屋</div>
      <div class="-name"><input v-model="username" @keyup.enter="login" placeholder="请输入你的名字"></div>
      <div class="-login"><button @click="login">登录</button></div>
    </div>
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
.login-wrapper{
  background-color: #fff;
  .body{
    display: flex;
    flex-direction: column;
    padding: 20px;
    .-title{
      height: 80px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bolder;
      color: #999;
    }
    .-name{
      display: flex;
      height: 40px;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #999;
      border-top: solid 1px rgba(0,0,0,0.05);
      input{
        box-sizing: border-box;
        height: 25px;
        border: none;
        outline: none;
        padding: 5px;
        color: #666;
        background-color: rgba(0,0,0,0.02);
      }
    }
    .-login{
      display: flex;
      height: 80px;
      align-items: center;
      font-size: 16px;
      color: #999;
      button{
        background-color: #3CAF36;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 40px;
        margin: 10px auto;
        color: #fff;
        font-weight: bolder;
      }
    }
  }
}
</style>
