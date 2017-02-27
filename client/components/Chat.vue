<template>
  <div class="chat">
    <div class="title">Keilon的小黑屋（{{ count }}）</div>
    <div class="chatbox">
      <div class="msg-wrap">
        <div class="msg" v-for="item in messagebox">{{item}}</div>
      </div>
    </div>
    <div class="footer">
      <input v-model="textMessage" @keyup.enter="sendMsg" placeholder="输入你想说的话">
      <button @click="sendMsg">发送</button>
    </div>
  </div>
</template>

<script>
import socket from '../socket'
export default {
  data() {
    return {
        textMessage: null
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
        this.textMessage = null
    }
  }
}
</script>

<style>
.chat{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title{
    background-color: #34352c;
    flex-shrink: 0;
    display: flex;
    height: 50px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    color: #fff;
  }
  .chatbox{
    background-color: #f6f6f6;
    height: 100%;
    overflow-y: scroll;
    .msg_wrap{
      padding: 5px 5px 0 5px;
      position: relative;
      .sys_msg{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.05);
        border-radius: 10px;
        min-width: 40%;
        color: #999;
        font-size: 12px;
        padding: 3px;
      }
      .msg{
        background-color: #fff;
        padding: 10px;
        position: relative;
        left: 60px;
        top: -20px;
        border-radius: 6px;
        max-width: ~'calc(100% - 180px)';
        font-size: 16px;
      }
    }
  }
  .footer{
    background-color: #f1f1f1;
    height: 40px;
    flex-shrink: 0;
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
    border-top: solid 1px rgba(0,0,0,0.1);
    input{
      height: 100%;
      width: 80%;
      border-radius: 10px;
      outline: none;
      border: none;
      box-sizing: border-box;
      padding: 5px;
    }
    button{
      display: flex;
      background-color: rgba(0,0,0,0.1);
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 18%;
      border-radius: 10px;
      outline: none;
    }
  }
}
</style>
