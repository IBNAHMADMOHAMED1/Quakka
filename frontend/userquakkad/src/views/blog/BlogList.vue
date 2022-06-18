<template>
    <Crumbs title="BlogList" />
    <section class="section blog-section blog-list">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <!-- Start Single Blog -->
                            <div class="single-blog">
                                <div class="blog-img">
                                    <a href="blog-single-sidebar.html">
                                        <img src="https://via.placeholder.com/370x215" alt="#">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <a class="category">eCommerce</a>
                                    <h4>
                                        <a href="blog-single-sidebar.html">What information is needed for shipping?</a>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt.</p>
                                    <div class="button">
                                        <a class="btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Blog -->
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <!-- Start Single Blog -->
                            <div class="single-blog">
                                <div class="blog-img">
                                    <a href="blog-single-sidebar.html">
                                        <img src="https://via.placeholder.com/370x215" alt="#">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <a class="category">Gaming</a>
                                    <h4>
                                        <a href="blog-single-sidebar.html">Interesting fact about gaming consoles</a>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt.</p>
                                    <div class="button">
                                        <a class="btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Blog -->
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <!-- Start Single Blog -->
                            <div class="single-blog">
                                <div class="blog-img">
                                    <a href="blog-single-sidebar.html">
                                        <img src="https://via.placeholder.com/370x215" alt="#">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <a class="category">Electronic</a>
                                    <h4>
                                        <a href="blog-single-sidebar.html">Electronics, instrumentation & control
                                            engineering
                                        </a>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt.</p>
                                    <div class="button">
                                        <a class="btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Blog -->
                        </div>
                    
                        
                        <div class="col-lg-6 col-md-6 col-12">
                            <!-- Start Single Blog -->
                            <div class="single-blog">
                                <div class="blog-img">
                                    <a href="blog-single-sidebar.html">
                                        <img src="https://via.placeholder.com/370x215" alt="#">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <a class="category">Electronic</a>
                                    <h4>
                                        <a href="blog-single-sidebar.html">Electronics, instrumentation & control
                                            engineering
                                        </a>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt.</p>
                                    <div class="button">
                                        <a class="btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Blog -->
                        </div>
                    </div>
                    <!-- Pagination -->
                    <div class="pagination left blog-grid-page">
                        <ul class="pagination-list">
                            <li><a>Prev</a></li>
                            <li class="active"><a>2</a></li>
                            <li><a>3</a></li>
                            <li><a>4</a></li>
                            <li><a>Next</a></li>
                        </ul>
                    </div>
                    <!--/ End Pagination -->
                </div>
                <aside class="col-lg-4 col-md-12 col-12">
                    <div class="sidebar blog-grid-page">
                        <!-- Start Single Widget -->
                        <div class="widget search-widget">
                            <h5 class="widget-title">Search This Site</h5>
                            <form action="#">
                                <input type="text" placeholder="Search Here...">
                                <button type="submit"><i class="lni lni-search-alt"></i></button>
                            </form>
                        </div>
                        <!-- End Single Widget -->
                        <!-- Start Single Widget -->
                        

                        <div class="widget categories-widget">
                            <h5 class="widget-title">Top Categories</h5>
                            <ul class="custom">
                                <li>
                                    <a>Editor's Choice</a><span>(24)</span>
                                </li>
                                <li>
                                    <a>Electronics</a><span>(12)</span>
                                </li>
                                <li>
                                    <a>Industrial Design</a><span>(5)</span>
                                </li>
                                <li>
                                    <a>Secure Payments Online</a><span>(15)</span>
                                </li>
                                <li>
                                    <a>Online Shopping</a><span>(7)</span>
                                </li>
                            </ul>
                        </div>

                        <div class="widget popular-tag-widget">
                            <h5 class="widget-title">Popular Tags</h5>
                            <div class="tags">
                                <a>#electronics</a>
                                <a>#cpu</a>
                                <a>#gadgets</a>
                                <a>#wearables</a>
                                <a>#smartphones</a>
                            </div>
                        </div>>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Blog-List',
    data() {
        return {
            blog: [],
            loading: true,
        }
    },
    mounted() {
        this.$store.dispatch('getBlogs');
        setTimeout(() => {
            this.blog = this.$store.state.blog;
            this.loading = false;
        }, 1000);
    }
    
}
</script>