import { createStore } from "vuex";
import Swal from "sweetalert2";
import router from "@/router";
import emailjs from "@emailjs/browser";

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
    isLoggedIn: false,
    orderCreated: false,
    ShippingId: 1,
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
    },
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    orderCreated: (state) => {
      return state.orderCreated;
    },
    ShippingId: (state) => {
      return state.ShippingId;
    },
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
    setHall(state, hall) {
      state.hall = hall;
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    setWishList(state, wishList) {
      state.wishList = wishList;
    },
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setOrderCreated(state, orderCreated) {
      state.orderCreated = orderCreated;
    },
    setShippingId(state, ShippingId) {
      state.ShippingId = ShippingId;
    },
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
      fetch("http://localhost/QuakkaProject/products/getall")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setProducts", data[1]);
        });
    },
    _getOne(context, defineParam) {
      fetch(
        `http://localhost/QuakkaProject/${defineParam.model}/getone/${defineParam.id}`
      )
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
      // add cart to

      window.dispatchEvent(
        new CustomEvent("cart-updated", {
          detail: {
            cart: cart,
          },
        })
      );
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

      window.dispatchEvent(
        new CustomEvent("wishlist-updated", {
          detail: {
            wishList: wishList,
          },
        })
      );
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
      const order = this.dispatch("createOrder", this.state.cart);
      console.log(this.state.orderCreated);
      if (this.state.orderCreated) {
        const payment_data = {};
        localStorage.setItem("cart", JSON.stringify([]));
        context.commit("setCart", []);
        // swal processing success 2s
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your order has been placed",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    },
    loginUser(context, user) {
      console.log(JSON.stringify(user));
      fetch("http://localhost/QuakkaProject/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0] === true) {
            context.commit("setUser", data[1]);
            localStorage.setItem("client", JSON.stringify(data[1]));
            context.commit("setIsLoggedIn", true);

            Swal.fire({
              icon: "success",
              title: "Login Successful",
              text: "You have successfully logged in",
            });
            router.push("/");
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "You have an error",
            });
          }
        });
    },
    Register(context, user) {
      const newLocal = "http://localhost/QuakkaProject/users/create";
      // console.log( JSON.stringify(user));
      fetch(newLocal, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0] === true) {
            Swal.fire({
              icon: "success",
              title: "Registration Successful",
              text: "You have successfully registered",
            });
            router.push("/login");
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "You have an error",
            });
          }
        });
    },
    logout(context) {
      context.commit("setIsLoggedIn", false);
      localStorage.removeItem("client");
      router.push("/");
    },
    createOrder(context, cart) {
      let client = JSON.parse(localStorage.getItem("client"));
      let products = [];
      let id_list = '';
      cart.forEach((product) => {
        products.push({
          product_id: product.product_id,
          quantity: cart.length,
          client_id: client.id,
        });
      });
      fetch("http://localhost/QuakkaProject/orders/createListOfProducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0] === true) {
            context.commit("setOrderCreated", true);
            id_list = data[1]
            const order = {
              client_id: client.id,
              shipping_id: this.state.ShippingId,
              total_amount: this.state.cart.reduce((a, b) => a + b.price, 0),
              list_of_products: id_list,
            };
            fetch("http://localhost/QuakkaProject/orders/createOrder", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(order),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data[0] === true) {
                  this.state.orderCreated = true;
                  context.commit("setOrderCreated", true);
                  localStorage.setItem("cart", JSON.stringify([]));
                  context.commit("setCart", []);
    
                  Swal.fire({
                    icon: "success",
                    title: "Payment Successful",
                    text: "Your order has been placed",
                    showConfirmButton: true,
                  });
                  router.push("/shop");
                  const mail = {
                    to: "M.ibnahmad@student.youcode.ma",
                    subject: "Order Confirmation",
                    body: `Hello ${client.first_name} ${client.last_name},
                    Your order has been placed successfully.
                    Your order number is ${data[1].id}
                    Thank you for shopping with us.`,
                    from: "ibnahmadmohamed8@gmail.com",
                  };
                  this.dispatch("sendMail", mail);
                  router.go(-1);
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "You have an error",
                  });
                  context.commit(" setOrderCreated", true);
                }
              });

          } else {
            context.commit("setOrderCreated", false);
          }
        });
    },
    createListOfProducts(context, products) {
      fetch("http://localhost/QuakkaProject/orders/createListOfProducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0] === true) {
            return data;
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "You have an error",
            });
            return null;
          }
        });
    },
    sendMail(context, mail) {
      const newLocal = "http://localhost/QuakkaProject/mails/sendMail";
      fetch(newLocal, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(mail),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    createShippingClient(context, shipping) {
      const newLocal = "http://localhost/QuakkaProject/shipping/createShipping";
    },
    getHalls(context) {
      const newLocal = "http://localhost/QuakkaProject/halls/getall";
      fetch(newLocal)
        .then((response) => response.json())
        .then((data) => {
          if (data[0] === 200) {
            context.commit("setHalls", data[1]);
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "You have an error",
            });
          }
        }
      );
    },
    createReserve(context, reserve) {
      const newLocal = "http://localhost/QuakkaProject/commands/create";
      fetch(newLocal, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", },
        body: JSON.stringify(reserve),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0] === true) {
            Swal.fire({
              icon: "success",
              title: "Reservation Successful",
              text: "You have successfully reserved",
            });
            router.push("/");
          }
        });
    },
    createMessage(context, message) {
      const newLocal = "http://localhost/QuakkaProject/messages/createMessage";
      fetch(newLocal, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", },
        body: JSON.stringify(message),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0] === true) {
            Swal.fire({
              icon: "success",
              title: "Message Successful",
              text: "You have successfully sent a message",
            });
          }
        });
    }

  },
});
