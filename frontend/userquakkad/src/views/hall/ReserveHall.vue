<script>
import { mapGetters } from "vuex";
import { ContentLoader } from "vue-content-loader";
export default {
  name: "ReserveHall",
  components: {
    ContentLoader,
  },
  data() {
    return {
      isLoggedIn: false,
      isLoading: true,
        hall: {},
        images: [],
      fristImag:'',
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
            let img = url(`./${nameImg}`);
            return img;            

        },
  }
};
</script>

<template>
    <div v-if="isLoading" style="margin-left: 30%; margin-top: 5%">
        <ContentLoader viewBox="0 0 1300 500">
            <rect x="20" y="15" rx="20" ry="20" width="300" height="320" />
            <rect x="92" y="347" rx="5" ry="5" width="45" height="45" />
            <rect x="148" y="347" rx="5" ry="5" width="45" height="45" />
            <rect x="205" y="347" rx="5" ry="5" width="45" height="45" />
            <rect x="361" y="17" rx="10" ry="10" width="420" height="33" />
            <rect x="361" y="71" rx="10" ry="10" width="315" height="33" />
            <rect x="361" y="125" rx="10" ry="10" width="233" height="20" />
            <rect x="361" y="216" rx="5" ry="5" width="195" height="13" />
            <rect x="361" y="251" rx="5" ry="5" width="195" height="13" />
            <rect x="367" y="311" rx="8" ry="8" width="130" height="38" />
            <rect x="515" y="311" rx="8" ry="8" width="130" height="38" />
        </ContentLoader>
    </div>
    <div v-if="!isLoading">
        <section class="section blog-single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
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
                                        <!-- End Meta Info -->
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
                                        <!-- post quote -->
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
                                            <!-- End Post Tag -->
                                            <!-- Post Social Share -->
                                            <div class="post-social-media">
                                                <h5 class="share-title">Share post :</h5>
                                                <ul>
                                                    <li>
                                                        <a>
                                                            <i class="lni lni-facebook-filled"></i>
                                                            <span>facebook</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <i class="lni lni-twitter-original"></i>
                                                            <span>twitter</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <i class="lni lni-google"></i>
                                                            <span>google+</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <i class="lni lni-linkedin-original"></i>
                                                            <span>linkedin</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <i class="lni lni-pinterest"></i>
                                                            <span>pinterest</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!-- Post Social Share -->
                                        </div>
                                    </div>
                                </div>
                                <!-- Comments -->
                                <div class="post-comments">
                                    <h3 class="comment-title"><span>Post comments</span></h3>
                                    <ul class="comments-list">
                                        <li>
                                            <div class="comment-img">
                                                <img src="http://localhost:8080/assets/images/01.jpg" alt="img" />
                                            </div>
                                            <div class="comment-desc">
                                                <div class="desc-top">
                                                    <h6>Arista Williamson</h6>
                                                    <span class="date">19th May 2023</span>
                                                    <a class="reply-link"><i class="lni lni-reply"></i>Reply</a>
                                                </div>
                                                <p>
                                                    Donec aliquam ex ut odio dictum, ut consequat leo
                                                    interdum. Aenean nunc ipsum, blandit eu enim sed,
                                                    facilisis convallis orci. Etiam commodo lectus quis
                                                    vulputate tincidunt. Mauris tristique velit eu magna
                                                    maximus condimentum.
                                                </p>
                                            </div>
                                        </li>
                                        <li class="children">
                                            <div class="comment-img">
                                                <img src="http://localhost:8080/assets/images/01.jpg" alt="img" />
                                            </div>
                                            <div class="comment-desc">
                                                <div class="desc-top">
                                                    <h6>Rosalina Kelian</h6>
                                                    <span class="date">15th May 2023</span>
                                                    <a class="reply-link"><i class="lni lni-reply"></i>Reply</a>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="comment-img">
                                                <img src="http://localhost:8080/assets/images/01.jpg" alt="img" />
                                            </div>
                                            <div class="comment-desc">
                                                <div class="desc-top">
                                                    <h6>Alex Jemmi</h6>
                                                    <span class="date">12th May 2023</span>
                                                    <a class="reply-link"><i class="lni lni-reply"></i>Reply</a>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
