    <script>
    import FooterTop from '@/components/base/Footer/FooterTop.vue'
    import FooterBottom from '@/components/base/Footer/FooterBottom.vue'
    import FooterMiddle from '@/components/base/Footer/FooterMiddle.vue'
    
    export default {
        name: 'Footer',
        components: {
            FooterTop,
            FooterBottom,
            FooterMiddle
        }
    }
    </script>
<template>

<footer class="footer">
    <FooterTop />
    <FooterMiddle />
    <FooterBottom />
    </footer>
</template>
