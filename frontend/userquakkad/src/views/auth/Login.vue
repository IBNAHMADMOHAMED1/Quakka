<template>
  <div>
    <div class="breadcrumbs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">Login</h1>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul @click="$router.push('/')" class="breadcrumb-nav">
              <li><i class="lni lni-home"></i> Home</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- End Breadcrumbs -->

    <!-- Start Account Login Area -->
    <div class="account-login section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
            <form class="card login-form" method="post">
              <div class="card-body">
                <div class="title">
                  <h3>Login Now</h3>
                  <p>
                    You can login using your social media account or email
                    address.
                  </p>
                </div>
                <div class="social-login">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                      <a class="btn facebook-btn" href="javascript:void(0)"><i class="lni lni-facebook-filled"></i>
                        Facebook
                        login</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                      <a class="btn twitter-btn" href="javascript:void(0)"><i class="lni lni-twitter-original"></i>
                        Twitter
                        login</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">

                      <div @click="CreateUserWithLogin" class="btn google-btn"><i
                          class="lni lni-google"></i> Google login</div>
                    </div>
                  </div>
                </div>
                <div class="alt-option">
                  <span>Or</span>
                </div>
                <div class="form-group input-group">
                  <label for="reg-fn">Email</label>
                  <input v-model="user.email" class="form-control" type="email" id="reg-email" required />
                </div>
                <div class="form-group input-group">
                  <label for="reg-fn">Password</label>
                  <input v-model="user.password" class="form-control" type="password" id="reg-pass" required />
                </div>
                <div class="d-flex flex-wrap justify-content-between bottom-content">
                  <div class="form-check">
                    <input v-model="user.remember" type="checkbox" class="form-check-input width-auto"
                      id="exampleCheck1" />
                    <label class="form-check-label">Remember me</label>
                  </div>
                  <a class="lost-pass" href="account-password-recovery.html">Forgot password?</a>
                </div>
                <div class="button">
                  <button @click="handleSubmit" class="btn" type="submit">Login</button>
                </div>
                <p class="outer-link">
                  Don't have an account?
                  <button>Register here </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Crumbs from '@/components/base/Crumbs'
// import GoogleAuth from '@/config/google.js'
import Swal from 'sweetalert2'
export default {
  name: "Login",
    data() {
        return {
        user: {
            email: "",
            password: "",
            remember: false
        }
        };
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch("login", this.user);
        },
        GoogleLogin() {
            this.$store.dispatch("googleLogin");
        },
        CreateUserWithLogin() {
            // coming soon
            Swal.fire({
                title: 'Coming Soon',
                text: 'This feature is coming soon',
                type: 'info',
                confirmButtonText: 'OK'
            })  
        }
    }
};
</script>
