const app = Vue.createApp({
  data() {
    return {
      description: 'Cotton socks',
      image: './assets/images/socks_blue.jpg',
      url: './assets/images/socks_blue.jpg',
      product: 'Socks',
      inventory: 20,
      onSale: true,
    };
  },
});
const storeApp = app.mount('#app');
