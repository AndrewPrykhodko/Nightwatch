<template>
  <div>
    <ProductList
        :items="products"
        :headers="headers"
        @destroy="deleteProduct($event)"
    />
    <Confirm ref="confirm" />
  </div>
</template>

<script>
import Confirm from '@/components/base/Confirm'
import ProductList from '@/components/ProductList'

export default {
  name: 'ProductIndex',
  components: {
    Confirm,
    ProductList
  },
  data () {
    return {
      products: JSON.parse(localStorage.getItem('products')) || [],
      headers: [
        { text: 'ID', value: 'id', align: 'left' },
        { text: 'Name', value: 'name' },
        { text: 'Descriprion', value: 'description' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  methods: {
    deleteProduct (productId) {
      this.$refs.confirm.open('Are you sure you want to delete this product?').then(confirm => {
        this.products = this.products.filter(product => product.id !== productId)
        // update localStorage
        localStorage.setItem('products', JSON.stringify(this.products))
        // show success notification
        this.$root.$snackbar.open('The product was succesfully deleted!')
      })
    }
  }
}
</script>
