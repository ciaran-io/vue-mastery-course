app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    ` 
<div class="review-container">
  <h1>Reviews</h1>
  <ul>
    <li v-for="(review, index) in reviews" :key="index">
      {{ review.name }} gave this {{ review.rating}} stars
      <br />
      " {{ review.review }} "
    </li>
  </ul>
</div>

    `,
});
