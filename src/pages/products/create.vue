<template>
  <div>
    <h1> Create new Product </h1>
    <ProductForm
      :product="product"
      @save="addProduct"
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
      product: new Product()
    }
  },
  methods: {
    goToProductList () {
      this.$router.push({
        name: 'products.index'
      })
    },
    addProduct (product) {
      this.products = [ ...this.products, product ]
      // update localStorage
      localStorage.setItem('products', JSON.stringify(this.products))
      // show success notification
      this.$root.$snackbar.open('The product was succesfully added!')
      // redirect to products table page
      this.goToProductList()
    }
  }
}
</script>
