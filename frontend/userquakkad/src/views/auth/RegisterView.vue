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
                    <ul 
                    @click="$router.push('/')"
                    class="breadcrumb-nav">
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
                            <p>Registration takes less than a minute but gives you full control over your orders.</p>
                        </div>
                        <form class="row" method="post">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="reg-fn">First Name</label>
                                    <input 
                                    v-model="first_name"
                                    class="form-control" type="text" id="reg-fn" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="reg-ln">Last Name</label>
                                    <input
                                    v-model="last_name"
                                    class="form-control" type="text" id="reg-ln" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="reg-email">E-mail Address</label>
                                    <input 
                                    v-model="email"
                                    class="form-control" type="email" id="reg-email" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="reg-phone">Phone Number</label>
                                    <input
                                    v-model="phone"
                                    class="form-control" type="text" id="reg-phone" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="reg-pass">Password</label>
                                    <input
                                    v-model="password"
                                    class="form-control" type="password" id="reg-pass" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="reg-pass-confirm">Confirm Password</label>
                                    <input
                                    v-model="password_confirmation"
                                    class="form-control" type="password" id="reg-pass-confirm" required>
                                </div>
                            </div>
                            <div class="button">
                                <button 
                                @click="handleSubmit"
                                class="btn" type="submit">Register</button>
                            </div>
                            <p class="outer-link">Already have an account? <a href="login.html">Login Now</a>
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
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        handleSubmit() {
            const user = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                phone: this.phone,
                password: this.password,
                password_confirmation: this.password_confirmation,
            }
            this.$store.dispatch("Register",{data:user, table:'users'}).then(response => {
                alert(response.data.message)
            })
        }
    }
};
</script>
