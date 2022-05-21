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
        products: [],
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        },
        user: state => {
            return state.user
        },
        products: state => {
            return state.products
        }
    },
    mutations: {
        toggleSidebar (state) {
            state.sideBarOpen = !state.sideBarOpen
        },
        setUser(state, user) {
            state.user = user
        },
        setProducts(state, products) {
            state.products = products
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
        },
        getProducts(context) {
            return new Promise((resolve, reject) => {
                let products = localStorage.getItem('products')
                products = JSON.parse(products)
                if (products) {
                    resolve(products)
                    context.commit('setProducts', products)
                }
                else {
                    reject()
                }
            })
        },
        addProduct(context, product) {
            let products = localStorage.getItem('products')
            products = JSON.parse(products)
            if (products) {
                products.push(product)
            }
            else {
                products = []
                products.push(product)
            }
            localStorage.setItem('products', JSON.stringify(products))
            context.commit('setProducts', products)
        },
        


    }
})

 