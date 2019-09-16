<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :pagination.sync="pagination"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-left" v-for="header in headers" :key="header.value">
          <div v-if="header.value === 'actions' ">
            <v-btn color="primary" small :to="{ name: 'products.update', params: { id: props.item.id } }">Update</v-btn>
            <v-btn color="error" small @click="destroy(props.item.id)">Delete</v-btn>
          </div>
          <div v-else v-text="props.item[header.value]"></div>
        </td>
      </template>
    </v-data-table>
    <div class="text-xs-right">
      <v-btn color="success" dark class="mt-3" :to="{ name: 'products.create' }">Create</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    headers: {
      type: Array,
      required: true,
      default: () => []
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      // to show newly added items on top of the table
      pagination: {
        sortBy: 'id',
        descending: true
      }
    }
  },
  methods: {
    destroy (id) {
      this.$emit('destroy', id)
    }
  }
}
</script>
