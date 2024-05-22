const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            brand: 'Love',
            product: 'Socks',
            selectedVariant: 0,
            activeClass: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 50, onSale: false},
                {id: 2, color: 'green', image: './assets/images/socks_green.jpg', quantity: 0, onSale: true}
            ],
            sizes: ['S', 'M', 'L']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        changeVariant(index) {
            this.selectedVariant = index;
        },
        removeOneFromCart() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0
        },
        onSale() {
            if (this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product + ' is on sale!'
            }
            return 
        }
    }
})
