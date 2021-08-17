const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    addToCartOne(id) {
      this.cart.push(id);
    },
    removeFromCartOne(id) {
      this.cart.pop(id);
    },
  },
  computed: {},
});
