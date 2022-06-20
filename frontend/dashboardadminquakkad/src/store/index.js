import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import vuello from './modules/vuello-store'
import createPersistedState from 'vuex-persistedstate'
import Swal from "sweetalert2";

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
    commands: [],
    command: [],
    orders: [],
    listOfProducts: [],
    list: [],
    blogs: [],
    blog: [],
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
    },
    hallCreated: (state) => {
      return state.hallCreated;
    },
    commands: (state) => {return state.commands;},
    command: (state) => {
      return state.command;
    },
    orders: (state) => {
      return state.orders;
    },
    listOfProducts: (state) => { return state.listOfProducts},
    list: (state) => { return state.list},
    blogs: (state) => { return state.blogs },
    blog: (state) => { return state.blog}


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
    setHall(state, hall) { state.hall = hall; },
    setHallCreated(state, hallCreated) {
      state.hallCreated = hallCreated;
    },
    setCommands(state, commands) {
      state.commands = commands;
    },
    setCommand(state, command) {
      state.command = command;
    },
    setOrders(state, orders) {
      state.orders = orders;
    },
    setListOfProducts(state, listOfProducts) {
      state.listOfProducts = listOfProducts;
    },
    setList(state, list) {
      state.list = list;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setBlog(state, blog) { state.blog = blog }

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
          }
        });
  

    },
    delete(context, defineParam) {
     let  type_table = defineParam.model;
     let  id = defineParam.id;
      fetch(`http://localhost/QuakkaProject/${type_table}/delete/${id}`, {
        method: "POST",
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
            if (type_table == "commands") {
              context.dispatch("getCommands");
            }
            if (type_table == "orders") {
              context.dispatch("getOrders");
            }
            if (type_table == "blogs") {

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
          if (defineParam.model == "commands") {
            context.commit("setCommand", data[1]);
          }
          if (defineParam.model == "orders") {
            context.commit("setOrder", data[1]);
          }
          if (defineParam.model == "blogs") {
            context.commit("setBlog", data[1]);
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
          if (defineParam.model == "blogs") {
            context.commit("setBlog", data[1]);
            this.$router.push("/blogs");
          }
        });
    },
    updateSatus(context, defineParam) {
      fetch(`http://localhost/QuakkaProject/commands/updatestatus/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defineParam.data),
      })
        .then((response) => response.json())
        .then((data) => {
          
           
          const params = { model: "commands", };
          context.dispatch("getAll", params);
          
          
        });
    },
    sendMail(context, defineParam) {
      fetch(`http://localhost/QuakkaProject/${defineParam.model}/sendMail/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defineParam.data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    getAll(context, defineParam) {
      fetch(`http://localhost/QuakkaProject/${defineParam.model}/getall/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defineParam.data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (defineParam.model == "halls") {
             context.commit("setHalls", data[1]);
          }
          if (defineParam.model == "products") {
            context.commit("setProducts", data[1]);
          }
          if (defineParam.model == "commands") {
            context.commit("setCommands", data[1]);
          }
          if (defineParam.model == "orders") {
            context.commit("setOrders", data);
          }
          if (defineParam.model == "blogs") 
            context.commit("setBlogs", data[1]);
          
        });
    },
    getListOfProducts(context, data) {
      fetch(`http://localhost/QuakkaProject/orders/getlistofproducts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          context.commit("setList", data);
          
          
        });
    },
    createBlog(context, data) {
      const formData = new FormData();
          formData.append("image", data.image);
          formData.append("title", data.title);
          formData.append("category", data.category);
          formData.append("content", data.content);
       fetch("http://localhost/QuakkaProject/blogs/create", {
        method: "POST",
         body: formData,
       }).then(response => 
       response.text()
       )
         .then(data => {
           data = JSON.parse(data);
           console.log(data);
          if (data[0] === true) {
            context.commit("setBlogCreated", true);
            context.commit("setBlog", data[1]);
            Swal.fire({
              title: "Success",
              text: "Blog created successfully",
              icon: "success",
              confirmButtonText: "OK"
            });
            this.$router.push("blogs");
            
          }
       
        });
    },
    updateBlog(context, data) {
      console.log(data);
      const formData = new FormData();
          formData.append("image", data.image);
          formData.append("title", data.title);
          formData.append("category", data.category);
          formData.append("content", data.content);
       fetch("http://localhost/QuakkaProject/blogs/update/"+data.id, {
        method: "POST",
         body: formData,
       }).then(response => 
       response.json()
       )
         .then(data => {
           console.log(data);
          if (data[0] == true) {
            context.commit("setBlogCreated", true);
            context.commit("setBlog", data[1]);
        
            Swal.fire({
              title: "Success",
              text: "Blog updated successfully",
              icon: "success",
              confirmButtonText: "OK"
            });
            
          }
        
         });
    }

    
  },
  modules: {
    vuello
  },
  plugins: [createPersistedState()]
});
