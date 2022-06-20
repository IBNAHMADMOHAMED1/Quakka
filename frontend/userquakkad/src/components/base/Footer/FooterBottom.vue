<template>
    <div class="footer-bottom">
        <div class="container">
            <div class="inner-content">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-12">
                        <div class="payment-gateway">
                            <span>We Accept:</span>
                            <img src="assets/images/footer/credit-cards-footer.png" alt="#">
                        </div>
                    </div>
                    <div class="col-lg-4 col-12">
                        <div class="copyright">
                            <p>Designed and Developed by<a href="https://ibnahmadmohamed.vercel.app/" rel="nofollow"
                                    target="_blank">
                                    Ibnahmad Mohamed
                                </a></p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12">
                        <ul class="socila">
                          <Social />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Social from '@/components/base/Social.vue'
export default {
    name: "FooterBottom",
    components: {
        Social
    }

}
</script>