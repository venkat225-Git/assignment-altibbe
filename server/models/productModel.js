import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  productName: { type: String, required: true },
  brandName: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  imageURL: { type: String },

  
  ingredientsList: { type: String },
  sourceType: { type: String },
  allergens: { type: String },
  certifications: { type: String },

  manufacturedIn: { type: String },
  factoryLocation: { type: String },
  supplyChainTransparency: { type: String },
  sustainabilityPractices: { type: String },

  
  calories: { type: String },
  sugar: { type: String },
  protein: { type: String },
  fat: { type: String },
  additives: { type: String },
  safetyTestsPassed: { type: String },

  
  companyID: { type: String },
  submittedBy: { type: String },
  submissionDate: { type: Date, default: Date.now }
},
{ timestamps: true } 
);


const Product = mongoose.model("Product", productSchema);
export default Product;
