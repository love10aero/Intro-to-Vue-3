const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            image: './assets/images/socks_blue.jpg',
            product: 'Socks',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'blue', image: './assets/images/socks_blue.jpg'},
                {id: 2, color: 'green', image: './assets/images/socks_green.jpg',}
            ],
            sizes: ['S', 'M', 'L']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        changeImage(imageVariant) {
            this.image = imageVariant;
        },
        removeOneFromCart() {
            this.cart -= 1
        }
    }
})
