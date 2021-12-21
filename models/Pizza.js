const { Schema, model } = require('mongoose');

// create schema constructor function
const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String,
    default: 'Large'
  },
  toppings: Array
});

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;