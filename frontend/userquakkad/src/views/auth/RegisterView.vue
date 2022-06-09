<template>
    <div>
        <div>
            <div class="breadcrumbs">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="breadcrumbs-content">
                                <h1 class="page-title">Registration</h1>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <ul @click="$router.push('/')" class="breadcrumb-nav">
                                <li><i class="lni lni-home"></i> Home</li>
                                <li>Registration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="account-login section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                        <div class="register-form">
                            <div class="title">
                                <h3>No Account? Register</h3>
                                <p>Registration takes less than a minute but gives you full control over your orders.
                                </p>
                            </div>
                            <form class="row" method="post">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="reg-fn">First Name</label>
                                        <input v-model="username" class="form-control" type="text" id="reg-fn" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="reg-email">E-mail Address</label>
                                        <input v-model="email" class="form-control" type="email" id="reg-email"
                                            required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="reg-ln">Address</label>
                                        <input v-model="mailing_address" class="form-control" type="text" id="reg-ln"
                                            required>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="reg-phone">Phone Number</label>
                                        <input v-model="phoneNumber" class="form-control" type="text" id="reg-phone"
                                            required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="reg-pass">Password</label>
                                        <input v-model="password" class="form-control" type="password" id="reg-pass"
                                            required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="reg-pass-confirm">city</label>
                                        <select class="form-control" v-model="city">
                                            <option value="" disabled>Select City</option>
                                            <option v-for="city in cities" :key="city" :value="city.name">{{ city.name
                                            }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="button">
                                    <button @click.prevent="handleSubmit" class="btn" type="submit">Register</button>
                                </div>
                                <p class="outer-link">Already have an account?
                                    <span>
                                        <router-link to="/login">Login Now</router-link>
                                    </span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Crumbs from '@/components/base/Crumbs'


export default {
  name: "RegisterView",
  component: {Crumbs},
    data() {
        return {
            cities: [
                { id:1, name: 'Rabat'},{id:2, name: 'Marrakesh'},{id:3, name: 'Casablanca'},{id:4, name: 'Fes'},{id:5, name: 'Tanger'},{id:6, name: 'Tetouan'},{id:7, name: 'Oujda'},{id:8, name: 'Meknes'},{id:9, name: 'Taza'},{id:10, name: 'Tiznit'},{id:11, name: 'Kenitra'},{id:12, name: 'Safi'},{id:13, name: 'Agadir'},{id:14, name: 'El Jadida'},{id:15, name: 'Ouarzazate'},{id:16, name: 'Tetouan'},{id:17, name: 'Tanger'},{id:18, name: 'Oriental'},{id:19, name: 'Sidi Kacem'},{id:20, name: 'Sidi Slimane'},{id:21, name: 'Sidi Bouzid'},{id:22, name: 'Settat'},{id:23, name: 'Sidi Ifni'},{id:24, name: 'Sidi Kacem'},{id:25, name: 'Sidi Slimane'},{id:26, name: 'Sidi Bouzid'},{id:27, name: 'Settat'},{id:28, name: 'Sidi Ifni'},{id:29, name: 'Sidi Kacem'},{id:30, name: 'Sidi Slimane'},{id:31, name: 'Sidi Bouzid'},{id:32, name: 'Settat'},{id:33, name: 'Sidi Ifni'},{id:34, name: 'Sidi Kacem'},{id:35, name: 'Sidi Slimane'},{id:36, name: 'Sidi Bouzid'},{id:37, name: 'Settat'},{id:38, name: 'Sidi Ifni'},
            ],
            username: '',
            email: '',
            phoneNumber: '',
            mailing_address: '',
            city: '',
            password: '',
            
        }
    },
    methods: {
        handleSubmit() {
            let user = {
                username: this.username,
                email: this.email,
                phoneNumber: this.phoneNumber,
                mailing_address: this.mailing_address,
                city: this.city,
                password: this.password,
            }
            console.log(user)
            this.$store.dispatch("Register", user)
        }
    }
};
</script>
