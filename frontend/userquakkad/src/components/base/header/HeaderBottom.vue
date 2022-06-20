<template>

    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-8 col-md-6 col-12">
                <div class="nav-inner">
                    <div class="mega-category-menu">
                        <span class="cat-button"><i class="lni lni-menu"></i>All Categories</span>
                        <ul class="sub-category">
                            <li @click="getCategory(1)">
                                Coming soon
                            </li>
                            <li @click="getCategory(2)">
                                Coming soon
                            </li>
                            <li @click="getCategory(3)">
                                Coming soon
                            </li>
                            <li @click="getCategory(3)">
                                Coming soon
                            </li>
                            <li @click="getCategory(3)">
                                Coming soon
                            </li>

                        </ul>
                    </div>
                    <!-- End Mega Category Menu -->
                    <!-- Start Navbar -->
                    <nav class="navbar navbar-expand-lg">
                        <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                            <ul id="nav" class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <router-link to="/" class="active" aria-label="Toggle navigation">Home
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <a class="dd-menu collapsed" data-bs-toggle="collapse" data-bs-target="#submenu-1-2"
                                        aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">Pages</a>
                                    <ul class="sub-menu collapse" id="submenu-1-2">
                                        <li class="nav-item">
                                            <router-link to="/commands" class="active" aria-label="Toggle navigation">
                                                commands
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link to="/faq" class="active" aria-label="Toggle navigation">FAQ
                                            </router-link>

                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/login" class="active" aria-label="Toggle navigation">Login
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/register" class="active" aria-label="Toggle navigation">
                                                Register</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="dd-menu collapsed" data-bs-toggle="collapse" data-bs-target="#submenu-1-3"
                                        aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">Shop</a>
                                    <ul class="sub-menu collapse" id="submenu-1-3">
                                        <li class="nav-item">
                                            <router-link to="/shop" class="active" aria-label="Toggle navigation">Shop
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/halls" class="active" aria-label="Toggle navigation">
                                                Halls</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/checkout" class="active" aria-label="Toggle navigation">
                                                checkout</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="dd-menu collapsed" data-bs-toggle="collapse" data-bs-target="#submenu-1-4"
                                        aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">Blog</a>
                                    <ul class="sub-menu collapse" id="submenu-1-4">
                                        <li class="nav-item">
                                            <router-link to="/blog-list" class="active" aria-label="Toggle navigation">
                                                Blog
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/blog-details" class="active"
                                                aria-label="Toggle navigation">Blog Details</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/hall-list" class="active" aria-label="Toggle navigation">Halls
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
                <div class="nav-social">
                    <h5 class="title">Follow Us:</h5>
                  <Social /> 
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import Social from '@/components/base/Social.vue'
export default{
    name: "headerBottom",
    components: {
        Social
    },
}
</script>