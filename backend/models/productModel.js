// In this file I have created models for products like name of products and what is requirement of this pructs
// first imported mongooge
import mongoose from "mongoose";

// second create schema of products using new mongoose.Schema used ({})
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestSeller: { type: Boolean },
  date: { type: Number, required: true },
});

// after creating schema need a model of this schema and created in mongoose using mongoose.model("product", name of schema::prodcuSchema)
const productModel =
  mongoose.model.product || mongoose.model("product", productSchema);

export default productModel;
