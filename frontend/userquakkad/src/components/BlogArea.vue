<template>
    <section class="blog-section section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2>Our Latest News</h2>
                        <p>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Start Single Blog -->
                    <div class="single-blog">
                        <div class="blog-img">
                            <a>
                                <img src="assets/images/401.webp" alt="#">
                            </a>
                        </div>
                        <div class="blog-content">
                            <a class="category">eCommerce</a>
                            <h4>
                                <a>What information is needed for shipping?</a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                            <div class="button">
                                <a class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <!-- Start Single Blog -->
                    <div class="single-blog">
                        <div class="blog-img">
                            <a>
                                <img src="assets/images/03.webp" alt="#">
                            </a>
                        </div>
                        <div class="blog-content">
                            <a class="category">Widding</a>
                            <h4>
                                <a>
                                    What i need to know about the Wedding Process?

                                </a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                            <div class="button">
                                <a class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="single-blog">
                        <div class="blog-img">
                            <a>
                                <img src="assets/images/23.jpg" alt="#">
                            </a>
                        </div>
                        <div class="blog-content">
                            <a class="category">
                                Accessories
                            </a>
                            <h4>
                                <a>
                                    What is the best way to get a gift to my wife?
                                </a>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                            <div
                            @click="$router.push('/blog/blog-details')"
                            class="button">
                                <a class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogArea',
    components: {
       
    },
    data() {
        return {
           blog: [],
                    
        }
    },
    methods: {
       
    },
    mounted() {
        
    }
}
</script>