<template>
    <div class="header-middle">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3 col-md-3 col-7">
                    <div class="navbar-brand" @click="$router.push('/')">
                        Quakka <span>Shopping</span>
                

                    </div>
                </div>
                <div class="col-lg-5 col-md-7 d-xs-none">
                    <!-- Start Main Menu Search -->
                    <div class="main-menu-search">
                        <!-- navbar search start -->
                        <div class="navbar-search search-style-5">
                            <div class="search-select">
                                <div class="select-position">
                                    <select id="select1">
                                        <option selected>All</option>
                                        <option value="1">option 01</option>
                                        <option value="2">option 02</option>
                                        <option value="3">option 03</option>
                                        <option value="4">option 04</option>
                                        <option value="5">option 05</option>
                                    </select>
                                </div>
                            </div>
                            <div class="search-input">
                                <input type="text" placeholder="Search">
                            </div>
                            <div class="search-btn">
                                <button><i class="lni lni-search-alt"></i></button>
                            </div>
                        </div>
                        <!-- navbar search Ends -->
                    </div>
                    <!-- End Main Menu Search -->
                </div>
                <div class="col-lg-4 col-md-2 col-5">
                    <div class="middle-right-area">
                        <div class="nav-hotline">
                            <i class="lni lni-phone"></i>
                            <h3>Hotline:
                                <span>(+100) 123 456 7890</span>
                            </h3>
                        </div>
                        <div class="navbar-cart" style="
                           display: flex;
                           gap: 10px;
                           ">

                            <div class="cart-items">
                                <a class="main-btn">
                                    <i class="lni lni-heart"></i>
                                    <span class="total-items">
                                        {{WishListTotal}}
                                    </span>
                                </a>
                                <!-- Shopping Item -->
                                <div class="shopping-item">
                                    <div class="dropdown-cart-header">
                                        <span>{{WishListTotal}}</span>
                                        <p type="button" class="" @click="$router.push('/view-cart')">View Cart</p>
                                    </div>
                                    <ul class="shopping-list">
                                        <li v-for="(item, index) in WishList" :key="index">
                                            <p @click="removeLike(index)" class="remove" title="Remove this item"><i
                                                    class="lni lni-close"></i></p>
                                            <div class="cart-img-head">
                                                <div @click="$router.push('/product-details/'+item.product_id)"
                                                    class="cart-img"><img src="/assets/images/producs/default.jpg"
                                                        alt="#"></div>
                                            </div>

                                            <div class="content">
                                                <h4>
                                                    <div @click="$router.push('/product-details/'+item.product_id)">
                                                        {{ item.name }}
                                                    </div>
                                                </h4>
                                                <p class="quantity">1x - <span class="amount">
                                                        {{ item.price }}
                                                    </span></p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="bottom">

                                        <div @click="$router.push('/checkout')" class="button">
                                            <span class="btn animate">Checkout</span>

                                        </div>
                                    </div>
                                </div>
                                <!--/ End Shopping Item -->
                            </div>
                            <div class="cart-items">
                                <a class="main-btn">
                                    <i class="lni lni-cart"></i>
                                    <span class="total-items">{{totalCart}}</span>
                                </a>
                                <!-- Shopping Item -->
                                <div class="shopping-item">
                                    <div class="dropdown-cart-header">
                                        <span>{{totalCart}}</span>
                                        <p type="button" class="" @click="$router.push('/view-cart')">View Cart</p>
                                    </div>
                                    <ul class="shopping-list">
                                        <li v-for="(item, index) in cart">
                                            <p @click="removeItem(index)" class="remove" title="Remove this item"><i
                                                    class="lni lni-close"></i></p>
                                            <div class="cart-img-head">
                                                <div @click="$router.push('/product-details/'+item.product_id)"
                                                    class="cart-img"><img src="/assets/images/producs/default.jpg"
                                                        alt="#"></div>
                                            </div>

                                            <div class="content">
                                                <h4>
                                                    <div @click="$router.push('/product-details/'+item.product_id)">
                                                        {{ item.name }}
                                                    </div>
                                                </h4>
                                                <p class="quantity">1x - <span class="amount">
                                                        {{ item.price }}
                                                    </span></p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="bottom">
                                        <div class="total">
                                            <span>Total</span>
                                            <span class="total-amount">
                                                {{ totalAmount }}
                                            </span>
                                        </div>
                                        <div @click="$router.push('/view-cart')" class="button">
                                            <span class="btn animate">Checkout</span>

                                        </div>
                                    </div>
                                </div>
                                <!--/ End Shopping Item -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderMiddle",
    data() {
        return {
            totalCart: 0,
            cart: [],
            totalAmount: 0,
            WishList: [],
            WishListTotal: 0,
        }
    },
    methods: {
        removeItem(index) {
            this.cart.splice(index, 1);
            this.totalCart--;
            // this.totalAmount -= this.cart[index].price;
            if (this.cart[index]) {

                this.totalAmount -= this.cart[index].price;
                
            }
            console.log(this.cart);
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(this.cart));
            
        },
        removeLike(index) {
            this.WishList.splice(index, 1);
            this.WishListTotal--;
            localStorage.setItem('wishList', JSON.stringify(this.WishList));
        },
       
       
    },
  
  
    created() {
        let cart = localStorage.getItem('cart');
        if (cart) {
                cart = JSON.parse(cart);
       this.totalCart = cart.length;
         this.cart = cart;
            this.totalAmount = this.cart.reduce((total, item) => {
                return total + item.price;
            }, 0);
        }
        

        
             let WishList = localStorage.getItem('wishList');
            if (WishList != null) {
                 WishList = JSON.parse(WishList);
                this.WishList = WishList;
                this.WishListTotal = WishList.length;
            }




    },
    mounted() {
        window.addEventListener('cart-updated', (e) => {
            this.cart = e.detail.cart;
        });
        window.addEventListener('wishlist-updated', (e) => {
            this.WishList = e.detail.wishList;
        });
        

    },


    watch: {
        cart: {
            handler() {
                this.totalAmount = this.cart.reduce((total, item) => {
                    return total + item.price;
                }, 0);
                this.totalCart = this.cart.length;
                    this.cart = localStorage.getItem('cart');
                   this.cart = JSON.parse(this.cart);
            },
            deep: true
        },
        WishList: {
            handler() {
                this.WishListTotal = this.WishList.length;
                this.WishList = localStorage.getItem('wishList');
                this.WishList = JSON.parse(this.WishList);
            },
            deep: true
        }


    },

  
  
}

</script>