const mongoose = require('mongoose');
const { Objectid } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
  product: {
    type: Objectid,
    ref: 'product'
  },
  name: String,
  count: Number,
  price: Number
});

const orderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {
      type: Number
    },
    address: String,
    updated: Date,
    user: {
      type: Objectid,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const Order = mopngoose.model('Order', orderSchema);
const ProductCart = mopngoose.model('ProductCart', ProductCartSchema);
exports.module = { Order, ProductCart };
