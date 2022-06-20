<script>
import { mapGetters } from "vuex";
import FormResrve from "./FormResrve.vue";
import Comments from "@/components/comments/Comments.vue";
import PostSocialShare from '@/views/blog/PostSocialShare.vue';
export default {
  name: "ReserveHall",
    components: { FormResrve, Comments, PostSocialShare },
  data() {
    return {
      isLoggedIn: false,
      isLoading: true,
      hall: {},
      images: [],
      fristImag: '',
      id: 0,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  mounted() {
    this.isLoggedIn = this.$store.state.isLoggedIn;
    setTimeout(() => {
      this.isLoading = false;
      const newLocal = `http://localhost/QuakkaProject/halls/getone/${this.$route.params.id}`;
      fetch(newLocal)
        .then((response) => response.json())
        .then((data) => {
          this.hall = data[1];
            this.isLoading = false;
            this.images = this.hall.images;
            this.fristImag = this.images[0].name
            this.id = this.hall.id;
          if (!this.hall) {
            this.isLoading = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
    },
    methods: {
        getImgUrl(nameImg) {
            let url = require.context("C:/xampp/htdocs/Quakka/frontend/dashboardadminquakkad/src/assets/img/halls/", true, /\.(png|jpe?g|svg)$/);
            return url(`./${nameImg}`);  
        },
  }
};
</script>

<template>
    <div v-if="isLoading" style="margin-left: 30%; margin-top: 5%">
        <div class="loader">
            <div class="loader-inner">
                <div class="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="!isLoading">
        <section class="section blog-single">
            <div class="container">
                <div class="row">

                    <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
                        <div @click="$router.back()" style=" margin-top: 5%">
                            <i style="font-size: 2.5rem; color: #A020F0; cursor: pointer;"
                                class="lni lni-arrow-left"></i>
                        </div>
                        <div class="single-inner">
                            <div class="post-details">
                                <div class="main-content-head">
                                    <div class="post-thumbnils">
                                        <img :src="getImgUrl(fristImag)" alt="#" />
                                    </div>
                                    <div class="meta-information">
                                        <h2 class="post-title">
                                            <a>
                                                Hall Name: {{ hall.name }}
                                            </a>
                                        </h2>
                                        <ul class="meta-info">
                                            <li>
                                                <a>
                                                    <i class="lni lni-user"></i>
                                                    Nombre de place :
                                                    {{ hall.Nbr_place }}
                                                </a>
                                            </li>
                                            <li>
                                                <a><i class="lni lni-calendar"></i> 10 /
                                                    2022
                                                </a>
                                            </li>
                                            <li>
                                                <a><i class="lni lni-dollar"></i>
                                                    {{hall.price}}
                                                </a>
                                            </li>
                                            <li>
                                                <a><i class="lni lni-timer"></i> 5 min
                                                    read</a>
                                            </li>
                                            <li>
                                                <a><i class="lni lni-map-marker"></i>
                                                    {{ hall.address}}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="detail-inner">
                                        <p>
                                            {{ hall.description }}

                                            We denounce with righteous indige nation and dislike men
                                            who are so beguiled and demo realized by the charms of
                                            pleasure of the moment, so blinded by desire, that they
                                            cannot foresee the pain and trouble that are bound to
                                            ensue; and equal blame belongs to those who fail in their
                                            duty through weakness of will, which is the same as saying
                                            through shrinking from toil and pain. These cases are
                                            perfectly simple and easy to distinguish. In a free hour,
                                            when our power of choice is untrammelled and when nothing
                                            prevents our being able to do what we like best, every
                                            pleasure is to be welcomed and every pain avoided.
                                        </p>
                                        <!-- post image -->
                                        <ul class="list">
                                            <li>
                                                <i class="lni lni-checkmark-circle"></i> For those of
                                                you who are serious about having more.
                                            </li>
                                            <li>
                                                <i class="lni lni-checkmark-circle"></i> There are a
                                                million distractions in every facet of our lives.
                                            </li>
                                            <li>
                                                <i class="lni lni-checkmark-circle"></i> The sad thing
                                                is the majority of people have no clue about what they
                                                truly want.
                                            </li>
                                            <li>
                                                <i class="lni lni-checkmark-circle"></i> Once you have a
                                                clear understanding of what you want
                                            </li>
                                            <li>
                                                <i class="lni lni-checkmark-circle"></i> Focus is having
                                                the unwavering attention to complete what you set out to
                                                do.
                                            </li>
                                        </ul>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                            sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia.
                                        </p>
                                        <blockquote>
                                            <div class="icon">
                                                <i class="lni lni-quotation"></i>
                                            </div>
                                            <h4>
                                                "
                                                Reserve this hall and enjoy the best of the best,
                                                the best of the best.
                                                "
                                            </h4>
                                            <span>- Epictetus, The Enchiridion</span>
                                        </blockquote>
                                        <h3>Setting the mood with incense</h3>
                                        <p>
                                            Remove aversion, then, from all things that are not in our
                                            control, and transfer it to things contrary to the nature
                                            of what is in our control. But, for the present, totally
                                            suppress desire: for, if you desire any of the things
                                            which are not in your own control, you must necessarily be
                                            disappointed; and of those which are, and which it would
                                            be laudable to desire, nothing is yet in your possession.
                                            Use only the appropriate actions of pursuit and avoidance;
                                            and even these lightly, and with gentleness and
                                            reservation.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit.
                                        </p>
                                        <div class="post-bottom-area">
                                            <!-- Start Post Tag -->
                                            <div class="post-tag">
                                                <ul>
                                                    <li>
                                                        <a>#hall,</a>
                                                    </li>
                                                    <li><a>#{{ hall.address}}</a></li>
                                                </ul>
                                            </div>
                                           
                                            <PostSocialShare />
                                        </div>
                                    </div>
                                </div>
                                <FormResrve :id="hall.id" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
