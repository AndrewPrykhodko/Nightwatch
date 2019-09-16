<template>
  <v-form ref="form" v-model="valid" @submit.native.prevent="save()">

    <!-- name -->
    <v-text-field
      v-model="product.name"
      :counter="counters.name"
      :rules="rules.name"
      label="Name"
      required
    />

    <!-- description -->
    <v-text-field
      v-model="product.description"
      :rules="rules.description"
      :counter="counters.description"
      label="Description"
      required
    />

    <!-- actions -->
    <v-layout justify-end row class="mt-2">
      <v-btn dark @click="cancel()"> Cancel </v-btn>
      <v-btn
        class="mr-0"
        color="success"
        type="submit"
      > Save
      </v-btn>
    </v-layout>

  </v-form>
</template>

<script>
import Product from '@/models/Product'

export default {
  name: 'ProductForm',
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data () {
    return {
      valid: true,
      rules: Product.rules,
      counters: Product.maxLength
    }
  },
  methods: {
    save () {
      // validate the form and if valid emit save event
      if (this.$refs.form.validate()) {
        this.$emit('save', this.product)
      }
    },
    cancel () {
      this.$refs.form.reset() // reset form fields values and validation
      this.$emit('cancel')
    }
  }
}
</script>
