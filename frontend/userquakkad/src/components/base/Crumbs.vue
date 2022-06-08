<script>
export default {
  name: "Crumbs",
  props: {
    title: {
      type: String,
      default: "Login",
    },
  },
};
</script>


    <template>
    <div>
        <div class="breadcrumbs">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="breadcrumbs-content">
                            <h1 class="page-title">
                                {{ title }}
                            </h1>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <ul @click="$router.push('/')" class="breadcrumb-nav">
                            <li>
                                <i class="lni lni-home"></i>
                               Home
                            </li>
                            <li>
                                {{ title }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>