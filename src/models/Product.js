/* ============
 * Product Model
 * ============
 *
 * The model for the Product.
 */

class Product {
  constructor (product = {}) {
    this.id = this.id ? this.id : `f${(+new Date()).toString(16)}`
    this.name = this.name ? this.name : ''
    this.description = this.description ? this.description : ''
  }

  // returns all product fields maxlengthes
  static get maxLength () {
    return {
      name: 50,
      description: 250
    }
  }

  // validation rules
  static get rules () {
    return {
      name: [
        v => !!v || 'Name is required',
        v => (v && v.length <= Product.maxLength.name) || 'Name must be less than 50 characters'
      ],
      description: [
        v => !!v || 'Description is required',
        v => (v && v.length <= Product.maxLength.description) || 'Name must be less than 250 characters'
      ]
    }
  }
}

export default Product
