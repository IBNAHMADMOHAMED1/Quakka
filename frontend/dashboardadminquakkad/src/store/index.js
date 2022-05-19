import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'


export default new Vuex.Store({
    state: {
        sideBarOpen: false,
        user: {
            name: '',
            email: '',
            password: '',
            avatar: '',
        },  
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        },
        user: state => {
            return state.user
        }
    },
    mutations: {
        toggleSidebar (state) {
            state.sideBarOpen = !state.sideBarOpen
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        },
        getUser(context) {
            return new Promise((resolve, reject) => {
                let user = localStorage.getItem('user')
                user = JSON.parse(user)
                if (user) {
                    resolve(user)
                    context.commit('setUser', user)
                }
                else {
                    reject()
                }
            })

        },
        logout: function(context) {
            localStorage.removeItem('user')
            context.commit('setUser', null)
            console.log('logout')
            router.push('/login')
        }

    }
})

 