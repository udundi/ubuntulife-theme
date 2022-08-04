const productController = Vue.createApp({
  delimiters: ['{', '}'],
  data() {
    return {
      options: {},
      quantity: 1,
    }
  },

  computed: {
    product: function() {
      let product = window.ud_product;
      return product;
    },

    selectedVariant: function() {
      let variants = this.product.variants;
      let options = [];

      for (const [key, value] of Object.entries(this.options)) {
        options.push(value);
      }


      let variant = variants.find((variant) => {
        let variantOptions = variant.title.split(' / ');
        
        if(variantOptions.length == options.length && variantOptions.every(x => options.includes(x))) {
          return variant;
        }
      });

      return variant;
    },
  },

  watch: {
    selectedVariant: function() {
      if(this.carousel && this.selectedVariant.featured_media !== undefined) {
        this.carousel.slideTo(this.product.media.map(x => x.id).indexOf(this.selectedVariant.featured_media.id));
      }

      if (window.history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set('variant', this.selectedVariant.id);
        
        let newPath = window.location.pathname + '?' + searchParams.toString() + window.location.hash;
        window.history.pushState(null, '', newPath);
      }
    }
  },

  methods: {
    updateQuantity(amount) {
      let quantity = this.quantity + amount;

      this.quantity = quantity <= 0 ? 1 : quantity;
    },

    formatMoney(value) {
      return Shopify.formatMoney(value);
    },

    imageSize(src, size) {
      return src.replace(/\.jpg|\.png|\.gif|\.jpeg/g, function(match) {
        return '_'+size+match;
      });
    },
  },

  created() {
    let searchParams = new URLSearchParams(window.location.search);
    let selectedVariant = this.product.variants.find(x => x.id == searchParams.get('variant'));

    if(selectedVariant !== undefined) {
      this.product.options.forEach((option, index) => {
        this.options[option.name] = selectedVariant.options[index];
      });
    } else {
      this.product.options.forEach((option, index) => {
        this.options[option.name] = option.values[0];
      });
    }
  },

  mounted() {
    this.carousel = new Swiper(this.$refs.carousel, {
      grabCursor: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
      },

      spaceBetween: 10,
      observer: true,
      observeSlideChildren: true,
      observeParents: true,
    });

    if(this.carousel && this.selectedVariant.featured_media !== undefined) {
      this.carousel.slideTo(this.product.media.map(x => x.id).indexOf(this.selectedVariant.featured_media.id), 0);
    }
  }
}).mount("#udProductView");