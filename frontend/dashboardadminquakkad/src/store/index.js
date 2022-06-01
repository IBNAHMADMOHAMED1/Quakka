import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import vuello from './modules/vuello-store'
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
  state: {
    sideBarOpen: false,
    user: {
      name: "",
      email: "",
      password: "",
      avatar: "",
    },
    productCreated: false,
    getProductCreated: {},
    product: [],
    products: [],
    halls: [],
    hall: [],
    hallCreated: false,
  },
  getters: {
    sideBarOpen: (state) => {
      return state.sideBarOpen;
    },
    user: (state) => {
      return state.user;
    },
    products: (state) => {
      return state.products;
    },
    productCreated: (state) => {
      console.log(state.productCreated);
      return state.productCreated;
    },
    getProductCreated: (state) => {
      return state.getProductCreated;
    },
    product: (state) => {
      return state.product;
    },
    halls: (state) => {
      return state.halls;
    },
    hall: (state) => {
      return state.hall;
    }
  },
  mutations: {
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProductCreated(state, productCreated) {
      state.productCreated = productCreated;
    },
    setGetProductCreated(state, getProductCreated) {
      state.getProductCreated = getProductCreated;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setHalls(state, halls) {
      state.halls = halls;
    },
    setHall(state, hall) {state.hall = hall;}
  },
  actions: {
    toggleSidebar(context) {
      context.commit("toggleSidebar");
    },
    getUser(context) {
      return new Promise((resolve, reject) => {
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        if (user) {
          resolve(user);
          context.commit("setUser", user);
        } else {
          reject();
        }
      });
    },
    logout: function (context) {
      localStorage.removeItem("user");
      context.commit("setUser", null);
      console.log("logout");
      router.push("/login");
    },
    createProduct(context, product) {
      const product_data = {
        name: product.Product_Name,
        description: product.Product_Description,
        price: product.Product_Price,
        quantity: product.Product_Quantity,
        category_id: product.Product_Category,
      };
      fetch("http://localhost/QuakkaProject/products/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product_data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            context.commit("setProductCreated", true);

            let products = [];
            products.push(data.product);
            context.commit("setProduct", data.product);
          } else {
            context.commit("setProductCreated", false);
            alert("you have an error");
          }
        });
    },
    getProducts(context) {
      console.log("from getProducts");
      fetch("http://localhost/QuakkaProject/products/getproducts")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setProducts", data[1]);
        });
      },
    getProduct(context, product_id) {
        console.log(product_id);
      fetch(`http://localhost/QuakkaProject/products/getone/${product_id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setProduct", data[1]);
        });
    },
    updateProduct(context, product) {
     
      console.log(product);

      fetch(`http://localhost/QuakkaProject/products/update/${product.product_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            context.commit("setProductCreated", true);
            context.commit("setProduct", data.product);
          } else {
            context.commit("setProductCreated", false);
            alert("you have an error");
          }
        });
    },
    
    createHall(context, hall) {
       

      fetch("http://localhost/QuakkaProject/halls/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hall),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            context.commit("setHallCreated", true);
            console.log(data.hall);
            context.commit("setHall", data.hall);
          } else {
            context.commit("Created", false);
            alert("you have an error");
          }
        });
  

    },
    getHalls(context) {
      fetch("http://localhost/QuakkaProject/halls/gethalls")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setHalls", data[1]);
        });
    },

    delete(context, id, type_table) {
      fetch(`http://localhost/QuakkaProject/${type_table}/delete/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            if (type_table == "halls") {
              context.dispatch("getHalls");
            }
            if (type_table == "products") {
              context.dispatch("getProducts");
            }
          } 
        });

    },
    _getOne(context,defineParam) {
   
      fetch(`http://localhost/QuakkaProject/${defineParam.model}/getone/${defineParam.id}`)
        .then((response) => response.json())
        .then((data) => {
          
           if (defineParam.model == "halls") {
            context.commit("setHall", data[1]);
           }
          if (defineParam.model == "products") {
            context.commit("setProduct", data[1]);
          }
          
        });
    },
    update(context, defineParam) {
      fetch(`http://localhost/QuakkaProject/${defineParam.model}/update/${defineParam.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defineParam.data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (defineParam.model == "halls") {
            context.commit("setHall", data[1]);
          }
          if (defineParam.model == "products") {
            context.commit("setProduct", data[1]);
          }
        });
    }
    
  },
  modules: {
    vuello
  },
  plugins: [createPersistedState()]
});
