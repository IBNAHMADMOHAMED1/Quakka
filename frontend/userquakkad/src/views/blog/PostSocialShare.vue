<template>
    <div class="post-social-media">
        <h5 class="share-title">Share post :</h5>
        <ul>
            <li>
                <a @click="share('facebook')">
                    <i class="lni lni-facebook-filled"></i>
                    <span>facebook</span>
                </a>
            </li>
            <li>
                <a @click="share('twitter')">
                    <i class="lni lni-twitter-original"></i>
                    <span>twitter</span>
                </a>
            </li>
            <li>
                <a @click="share('linkedin')">
                    <i class="lni lni-linkedin-original"></i>
                    <span>linkedin</span>
                </a>
            </li>
            <li>
                <a
                @click="share('pinterest')">
                    <i class="lni lni-pinterest"></i>
                    <span>pinterest</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PostSocialShare",
    methods: {
        share(social)
        {
            switch (social) {
                case 'facebook':
                    window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, 'facebook-share-dialog', 'width=626,height=436');
                    break;
                case 'twitter':
                    window.open('https://twitter.com/share?url=' + window.location.href, 'twitter-share-dialog', 'width=626,height=436');
                    break;
                case 'google':
                    window.open('https://plus.google.com/share?url=' + window.location.href, 'google-share-dialog', 'width=626,height=436');
                    break;
                case 'linkedin':
                    window.open('https://www.linkedin.com/shareArticle?url=' + window.location.href, 'linkedin-share-dialog', 'width=626,height=436');
                    break;
                case 'pinterest':
                    window.open('https://pinterest.com/pin/create/button/?url=' + window.location.href, 'pinterest-share-dialog', 'width=626,height=436');
                    break;
            }
        }
    }
}
</script>