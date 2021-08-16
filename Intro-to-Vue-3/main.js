const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      description: 'Preimum socks',
      brand: 'Vue Mastery',
      url: './assets/images/socks_blue.jpg',
      product: 'Socks',
      selectedVariant: 0,
      onSale: false,
      salesMessage: '',
      details: ['50% cotton', '30% woool'],
      sizes: ['small', 'medium'],
      variants: [
        {
          id: 244,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 20,
          onSale: true,
        },
        {
          id: 744,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0,
          onSale: false,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    isOnSale() {
      this.salesMessage = this.brand + this.product + ' is on sale';
      if (this.variants[this.selectedVariant].onSale) 
      return this.salesMessage
    },
  },
});
const storeApp = app.mount('#app');
