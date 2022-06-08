<script>
export default {
    name: "FooterTop",
    data() {
        return {
          email:''
        };
    },
    methods: {
        subscribeEmail() {
            this.$store.dispatch("subscribeEmail", this.email);
        }
    }
}
</script>



<template>
    <div class="footer-top">
        <div class="container">
            <div class="inner-content">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-12">
                        <div class="footer-logo">
                           Quakka Shipping
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 col-12">
                        <div class="footer-newsletter">
                            <h4 class="title">
                                Subscribe to our Newsletter
                                <span>Get all the latest information, Sales and Offers.</span>
                            </h4>
                            <div class="newsletter-form-head">
                                <form class="newsletter-form">
                                    <input name="EMAIL" placeholder="Email address here..." type="email"
                                        required
                                        v-model="email"
                                    >
                                    <div class="button">
                                        <button 
                                        @click.prevent="subscribeEmail"
                                        class="btn">Subscribe<span class="dir-part"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>