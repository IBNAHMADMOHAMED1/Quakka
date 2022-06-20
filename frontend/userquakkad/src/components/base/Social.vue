<template>
    <ul>
        <li>
            <a @click="share('facebook')"><i class="lni lni-facebook-filled"></i></a>
        </li>
        <li>
            <a @click="share('twitter')">
                <i class="lni lni-twitter-original"></i></a>
        </li>
        <li>
            <a @click="share('instagram')">
                <i class="lni lni-instagram"></i></a>
        </li>
    </ul>
</template>
<script>
export default {
    name: "Social",
    methods: {
        share(social) {
            switch (social) {
                case 'facebook':
                    window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, 'facebook-share-dialog', 'width=626,height=436');
                    break;
                case 'twitter':
                    window.open('https://twitter.com/share?url=' + window.location.href, 'twitter-share-dialog', 'width=626,height=436');
                    break;
                case 'instagram':
                    window.open('https://www.instagram.com/', 'instagram-share-dialog', 'width=626,height=436');
                    break;
            }
        }

    }
}
</script>