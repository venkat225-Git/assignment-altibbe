import mongoose from "mongoose";

const aiResponseSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    questions: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const AiResponse = mongoose.model("AiResponse", aiResponseSchema);
export default AiResponse;
