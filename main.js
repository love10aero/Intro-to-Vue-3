const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'blue'},
                {id: 2, color: 'red'}
            ],
            sizes: ['S', 'M', 'L']
        }
    }
})
