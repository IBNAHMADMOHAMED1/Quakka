import { createStore } from 'vuex'
import Swal from 'sweetalert2'

export default createStore({
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
    cart: [],
    wishList: [],
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
    cart: (state) => {
      return state.cart;
    },
    wishList: (state) => {
      return state.wishList;
    }
  },
  mutations: {
    toggleSidebar(state) {state.sideBarOpen = !state.sideBarOpen;},
    setUser(state, user) {state.user = user;},
    setProducts(state, products) {state.products = products;},
    setProductCreated(state, productCreated) {state.productCreated = productCreated;},
    setGetProductCreated(state, getProductCreated) {state.getProductCreated = getProductCreated;},
    setProduct(state, product) {state.product = product;},
    setHalls(state, halls) {state.halls = halls;},
    setHall(state, hall) { state.hall = hall; },
    setCart(state, cart) { state.cart = cart; },
    setWishList(state, wishList) { state.wishList = wishList; }
  },
  actions: {
    toggleSidebar(context) {context.commit("toggleSidebar");},
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
    addToCart(context, product) {
      let cart = localStorage.getItem("cart");
      cart = JSON.parse(cart);
      if (cart === null) {
        cart = [];
      }
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      context.commit("setCart", cart);

      window.dispatchEvent(new CustomEvent("cart-updated", {
        detail: {
          cart: cart,
        }
      }));

    },
    addToWishList(context, product) {
      let wishList = localStorage.getItem("wishList");
      wishList = JSON.parse(wishList);
      if (wishList === null) {
        wishList = [];
      }
      wishList.push(product);
      localStorage.setItem("wishList", JSON.stringify(wishList));
      context.commit("setWishList", wishList);

      window.dispatchEvent(new CustomEvent("wishlist-updated", {
        detail: {
          wishList: wishList,
        }
      }));

    },
    googleLogin(context, user) {
      context.commit("setUser", user);
      localStorage.setItem("user", JSON.stringify(user));
     //  CreateUserWithLogin
      
    },
    subscribeEmail(context, email) {
      fetch("http://localhost/QuakkaProject/subscribes/createSubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0] === true) {
            Swal.fire({
              icon: "success",
              title: "Subscribed",
              text: "You have been subscribed to our newsletter",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "You have an error",
            });
          }
        });
    },
    submitPayment(context, payment) {
      fetch("http://localhost/QuakkaProject/payments/createPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0] === true) {
            Swal.fire({
              icon: "success",
              title: "Payment Successful",
              text: "You have successfully paid",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "You have an error",
            });
          }
        });
    }
  },
})
