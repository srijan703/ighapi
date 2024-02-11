import mongoose from "mongoose";

const taglineSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please enter tagline"],
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
  },
});
const addonSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please enter tagline"],
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
  },
});

const priceSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Please enter heading"],
  },
  taglines: [taglineSchema], // Array of taglines with text and price
});

const productSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  slug: {
    type: String,
    required: [true, "Please enter product slug"],
    unique: true,
  },

  shortDescription: {
    type: String,
    required: [true, "Please enter product short description"],
  },
  features: {
    type: String,
  },
  termsAndConditions: {
    type: String,
  },
  productDescriptions: {
    type: String,
  },
  image:{
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",

  },
  
  startPrice: {
    type: Number,
    required: false,
  },
  prices: [priceSchema], // Array of prices with headings, taglines, and prices
  addons: [addonSchema], // Array of addons with text and price
 
  category: {
    type: String,
    default: "Other Services",
    enum: {
      values: [
        "Website Development",
        "Social Media Marketing",
        "Video Production Services",
        "Web Hosting Solutions",
        "Chatbot Development",
        "UI/UX Design",
        "Content Management Systems ",
        "Digital Marketing Services",
        "Graphics Designing",
        "Other Services",
      ],
      message: "Please select correct category",
    },
  },
  seller: {
    type: String,
    required: false,
  },
  stock: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", productSchema);

export default Post;