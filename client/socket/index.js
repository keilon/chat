import io from 'socket.io-client'

export default {
    username: null,
    socket: null,
    init: (store, username) => {
        if (!username) {return}

        this.username = username
        this.socket = io.connect('http://localhost:3000')
        this.socket.emit('login', {username:this.username})
        store.commit('USER_LOGIN')

        //监听用户登录
        this.socket.on('user joined', (obj) => {
            store.commit('USER_JOINED', obj)
        })

        //监听用户退出
        this.socket.on('user left', (obj) => {
            store.commit('USER_LEFT', obj)
        })

        //监听用户消息
        this.socket.on('message', (obj) => {
            store.commit('USER_MESSAGE', obj)
        })

    },

    send: (msg) => {
        if (!msg || !this.username || !this.socket) {return}

        if (msg != '') {
            this.socket.emit('message', {username:this.username, msg:msg})
        }
    }
}
