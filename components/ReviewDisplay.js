app.component('review-display', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{review.name + ' gave ' + '*'.repeat(review.rating)}} 
            <small v-if="review.recommend">
            <br/>
            <strong>This user recommends this product</strong></small>
            <br/>
            "{{review.review}}"
            </li>
        </ul>
    </div>`
})