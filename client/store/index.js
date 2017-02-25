import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  chat: {
      login: false,
      totalCount: 0,
      messages: []
  }
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  },
  USER_LOGIN(state) {
    state.chat.login = true
  },
  USER_JOINED(state, obj) {
    console.log(obj.username + "加入聊天室")
    state.chat.totalCount = obj.totalCount
    state.chat.messages.push(obj.username + "加入聊天室")
  },
  USER_LEFT(state, obj) {
    console.log(obj.username + "离开聊天室")
    state.chat.totalCount = obj.totalCount
    state.chat.messages.push(obj.username + "离开聊天室")
  },
  USER_MESSAGE(state, obj) {
    console.log(obj.username + '说：' + obj.msg)
    state.chat.messages.push(obj.username + '说：' + obj.msg)
  }
}

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }

}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
