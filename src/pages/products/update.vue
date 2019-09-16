<template>
  <div>
    <h1> Update Product {{ product.id }} </h1>
    <ProductForm
      :product="product"
      @save="updateProduct"
      @cancel="goToProductList"
    />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm'
import Product from '@/models/Product'

export default {
  name: 'ProductCreate',
  components: {
    ProductForm
  },
  data () {
    return {
      products: JSON.parse(localStorage.getItem('products')) || [],
      productId: this.$route.params.id,
      product: new Product({ id: this.$route.params.id })
    }
  },
  mounted () {
    const foundProduct = this.getProductById(this.productId)
    // if such product exists update product data, else - redirect to 404 page
    if (foundProduct) {
      this.product = foundProduct
    } else {
      this.$router.push({
        name: 'not-found'
      })
    }
  },
  methods: {
    getProductById (id) {
      return this.products.find(product => product.id === id)
    },
    goToProductList () {
      this.$router.push({
        name: 'products.index'
      })
    },
    updateProduct (product) {
      // map through existing products find one by id and update its value
      this.products = this.products.map(item => {
        if (item.id === product.id) { return Object.assign({}, product) }
        return item
      })
      // update localStorage
      localStorage.setItem('products', JSON.stringify(this.products))
      // show success notification
      this.$root.$snackbar.open('The product was succesfully updated!')
      // redirect to products table page
      this.goToProductList()
    }
  }
}
</script>
