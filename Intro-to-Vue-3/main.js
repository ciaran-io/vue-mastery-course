const app = Vue.createApp({
  data() {
    return {
      description: 'Preimum socks',
      image: './assets/images/socks_blue.jpg',
      url: './assets/images/socks_blue.jpg',
      product: 'Socks',
      inventory: 20,
      onSale: true,
      details: ['50% cotton', '30% woool'],
      sizes: ['small', 'medium'],
      variants: [
        {
          id: 244,
          color: 'green',
          image: './assets/images/socks_green.jpg',
        },
        {
          id: 744,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
        },
      ],
    };
  },
});
const storeApp = app.mount('#app');
