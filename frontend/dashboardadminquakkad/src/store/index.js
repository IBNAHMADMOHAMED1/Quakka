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
        productCreated: false,
        getProductCreated: {
          
        },
        product: [],
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
        },
        productCreated: state => {
            console.log(state.productCreated)
            return state.productCreated
        },
        getProductCreated: state => {
            return state.getProductCreated
        },
        product: state => {
            return state.product
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
        },
        setProductCreated(state, productCreated) {
            state.productCreated = productCreated
        },
        setGetProductCreated(state, getProductCreated) {
            state.getProductCreated = getProductCreated
        },
        setProduct(state, product) {
            state.product = product
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
        createProduct(context, product) {
           
            const product_data = {
                name: product.Product_Name,
                description: product.Product_Description,
                price: product.Product_Price,
                quantity: product.Product_Quantity,
                category_id: product.Product_Category,
            }
            fetch('http://localhost/QuakkaProject/products/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product_data)
            })
                .then(response => response.json())
                .then(data => {
                  if(data.success === true){
                     context.commit('setProductCreated', true)
                    // object to array
                      let products = []
                        products.push(data.product)
                      context.commit('setProduct', products)
                       
                  }
                  else {
                      context.commit('setProductCreated', false)
                      alert('you have an error')
                  }
                })
        },
    }
})


 