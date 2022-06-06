<script>
export default {
    name: "product-review",

}

</script>

<template>
    <div>
        <div class="col-lg-4 col-12">
            <div class="single-block give-review">
                <h4>4.5 (Overall)</h4>
                <ul>
                    <li>
                        <span>5 stars - 38</span>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                    </li>
                    <li>
                        <span>4 stars - 10</span>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star"></i>
                    </li>
                    <li>
                        <span>3 stars - 3</span>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star"></i>
                        <i class="lni lni-star"></i>
                    </li>
                    <li>
                        <span>2 stars - 1</span>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star"></i>
                        <i class="lni lni-star"></i>
                        <i class="lni lni-star"></i>
                    </li>
                    <li>
                        <span>1 star - 0</span>
                        <i class="lni lni-star-filled"></i>
                        <i class="lni lni-star"></i>
                        <i class="lni lni-star"></i>
                        <i class="lni lni-star"></i>
                        <i class="lni lni-star"></i>
                    </li>
                </ul>
                <!-- Button trigger modal -->
                <button type="button" class="btn review-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Leave a Review
                </button>
            </div>
        </div>
        <div class="col-lg-8 col-12">
            <div class="single-block">
                <div class="reviews">
                    <h4 class="title">Latest Reviews</h4>
                    <!-- Start Single Review -->
                    <div class="single-review">
                        <img src="https://via.placeholder.com/150x150" alt="#">
                        <div class="review-info">
                            <h4>Awesome quality for the price
                                <span>Jacob Hammond
                                </span>
                            </h4>
                            <ul class="stars">
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor...</p>
                        </div>
                    </div>
                    <!-- End Single Review -->
                    <!-- Start Single Review -->
                    <div class="single-review">
                        <img src="https://via.placeholder.com/150x150" alt="#">
                        <div class="review-info">
                            <h4>My husband love his new...
                                <span>Alex Jaza
                                </span>
                            </h4>
                            <ul class="stars">
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star"></i></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor...</p>
                        </div>
                    </div>
                    <div class="single-review">
                        <img src="https://via.placeholder.com/150x150" alt="#">
                        <div class="review-info">
                            <h4>I love the built quality...
                                <span>Jacob Hammond
                                </span>
                            </h4>
                            <ul class="stars">
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                                <li><i class="lni lni-star-filled"></i></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor...</p>
                        </div>
                    </div>
                    <!-- End Single Review -->
                </div>
            </div>
        </div>

    </div>
</template>