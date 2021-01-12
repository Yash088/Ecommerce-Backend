const mongoose = require('mongoose');

const { Objectid } = mongoose.Schema;
const productSchema = new mongoose.Schema(
  {
    name: {
      type: 'String',
      trim: true,
      required: true
    },
    description: {
      type: 'String',
      trim: true,
      required: true
    },
    price: {
      type: 'Number',
      trim: true,
      required: true
    },
    category: {
      type: Objectid,
      ref: 'Category',
      required: true
    },
    stock: {
      type: Number
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String
    }
  },
  { timestamps: true }
);
exports.module = mongoose.model('Product', productSchema);
