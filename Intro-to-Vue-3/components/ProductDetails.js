app.component('product-details', {
  props: {
    productDetails: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
     <ul>
       <li v-for="productDetail in productDetails">{{ productDetail }}</li>
     </ul>
    `,
});
