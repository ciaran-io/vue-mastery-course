const app = Vue.createApp({
  data() {
    return {
      description: 'Cotton socks',
      image: './assets/images/socks_blue.jpg',
      url: './assets/images/socks_blue.jpg',
      product: 'Socks',
    };
  },
});
app.mount('#app');
