<script>
import TeamSection from "@/components/TeamSection";
import Crumbs from "@/components/base/Crumbs";
export default {
  components: {
    TeamSection, Crumbs
  },
};
</script>











<template>
  <Crumbs title="About"/>
   <section class="about-us section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12 col-12">
          <div class="content-left">
            <img src="assets/images/0P9A2660.jpg" alt="#" />
            <a href="https://www.youtube.com/embed/GvBCnmQRFOo" class="glightbox video"><i class="lni lni-play"></i></a>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <!-- content-1 start -->
          <div class="content-right">
            <h2>Shop Quakka is a new online store for all your needs</h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id purus at risus pellentesque faucibus a quis eros. In eu
              fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi
              vitae est eget dolor consequat aliquam eget quis dolor. Mauris
              rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat
              lectus, ultrices euismod sagittis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eius mod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
    <TeamSection />
</template>


