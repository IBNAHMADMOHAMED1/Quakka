<template>
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
</template>

<script>
export default {
    name:"Comments",
}
</script>