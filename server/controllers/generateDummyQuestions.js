import Product from "../models/productmodel.js";
import AiResponse from "../models/aiResponseModel.js";

const generateDummyQuestions = async (req, res) => {
  try {
    console.log("✅ Dummy API HIT:", req.body);

    const { id } = req.params;

    // Fetch the product
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "❌ Product not found" });
    }

    // 🧠 Static fallback questions (no AI)
    const questions = [
      { question: "Is the product eco-friendly?", type: "boolean" },
      { question: "What materials are used for packaging?", type: "text" },
      { question: "Is it sourced ethically?", type: "boolean" },
    ];

    // Save to AiResponse collection
    const saved = await AiResponse.create({
      productId: product._id,
      questions,
    });

    // Return response
    res.status(200).json({
      message: "✅ Dummy questions generated successfully",
      productId: product._id,
      productName: product.productName,
      totalQuestions: questions.length,
      questions,
    });
  } catch (error) {
    console.error("❌ Dummy Question Error:", error);
    res.status(500).json({
      message: "Failed to generate dummy questions",
      error: error.message,
    });
  }
};

export default generateDummyQuestions;
