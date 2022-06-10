<template>
    <div class="topbar">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="top-left">
                        <ul class="menu-top-link">
                            <li>
                                <div class="select-position">
                                    <select id="select4">
                                        <option value="0" selected>$ USD</option>
                                        <option value="1">€ EURO</option>
                                        <option value="2">$ CAD</option>
                                        <option value="3">₹ INR</option>
                                        <option value="4">¥ CNY</option>
                                        <option value="5">৳ BDT</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div class="select-position">
                                    <select id="select5">
                                        <option value="0" selected>English</option>
                                        <option value="1">Español</option>
                                        <option value="2">Filipino</option>
                                        <option value="3">Français</option>
                                        <option value="4">العربية</option>
                                        <option value="5">हिन्दी</option>
                                        <option value="6">বাংলা</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="top-middle">
                        <ul class="useful-links">
                            <li @click="$router.push('/')" style="cursor: pointer;">
                                ><a>Home</a></li>
                            <li style="cursor: pointer;" @click="$router.push('/about')"><a>About Us</a></li>
                            <li style="cursor: pointer;"
                            @click=" $router.push('/contact')"><a>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="top-end">
                        <div v-if="isLoggedIn" class="user">
                            <i class="lni lni-user"></i>
                            Hello
                        </div>
                        <ul class="user-login " style="cursor: pointer;">
                            <li v-if="!isLoggedIn" @click="$router.push('/login')">
                                <span>Sign In</span>
                            </li>
                            <li v-if="!isLoggedIn" @click="$router.push('/register')">
                                <span>Register</span>
                            </li>
                            <li @click="Logout" v-if="isLoggedIn">
                                <span>
                                    Logout
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'HeaderTopbar',
    data() {
        return {
            isLoggedIn: false,
        }
    },
    methods: {
        Logout() {
            this.$store.dispatch('logout');
        }
    },

    mounted() {
        this.isLoggedIn = this.$store.state.isLoggedIn
    },

    watch: {
        isLoggedIn() {
            this.isLoggedIn = this.$store.state.isLoggedIn
        }
    },
    // watch localStorage client side
    computed: {
        isLoggedIn() {
            this.isLoggedIn = this.$store.state.isLoggedIn
            return this.$store.state.isLoggedIn
       }
    },
}


</script>
