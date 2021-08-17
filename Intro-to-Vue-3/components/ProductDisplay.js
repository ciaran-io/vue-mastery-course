app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div>
      <h1>{{ title }}</h1>
      <h1>{{ product }}</h1>
      <a :href="url">
        <img :src="image" width="355" height="390" alt="" />
      </a>
      <div>
        <p>{{ description }}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Sold out</p>
        <p v-if="isOnSale">{{ salesMessage }} </p>
      </div>
      <div>
      <p>Shipping: {{ shipping }} </p>
      </div>
      <div>
        <product-details :productDetails="details"></product-details>
      </div>
    
        <div  v-for="(variant, index) in variants"
        :key="variant.id"
        @mouseover="updateVariant(index)" class="product-container">
          <span class="color-circle" :style="{ backgroundColor: variant.color}">
          </span>
          <span> {{ variant.color }} </span>
          <span> {{ variant.quantity }} </span>
        </div>

      <div>
        <p v-for="size in sizes">{{ size }}</p>
      </div>
      <div>
        <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @updateCart="addToCart" @click="addToCart">Add to cart</button>
        <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">+</button>
        <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="removeFromCart">-</button>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
    </div>
    `,
  data() {
    return {
      description: 'Preimum socks',
      brand: 'Vue Mastery',
      url: './assets/images/socks_blue.jpg',
      product: 'Socks',
      selectedVariant: 0,
      onSale: false,
      salesMessage: '',
      details: ['50% cotton', '30% wool', '20% polyester'],
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
          quantity: 15,
          onSale: false,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
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
      if (this.variants[this.selectedVariant].onSale) return this.salesMessage;
    },
    shipping() {
      // if (this.premium) {
      //   return 'Free';
      // }
      return this.premium ? 'Free' : '$5.00';
    },
  },
});
