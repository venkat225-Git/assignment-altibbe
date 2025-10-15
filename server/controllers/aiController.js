import dotenv from "dotenv";
import Product from "../models/productmodel.js";
import AiResponse from "../models/aiResponseModel.js";

dotenv.config();

const generateQuestions = async (req, res) => {
  try {
    console.log(" API HIT:", req.body);

    const { id } = req.params; 

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: " Product not found" });
    }

    
    const prompt = `
You are an AI assistant that helps ensure product transparency.

Based on the details below, generate 8 - 12 meaningful and professional follow-up questions about sustainability, sourcing, ethics, and health impact.

Product Details:
- Product Name: ${product.productName}
- Brand Name: ${product.brandName}
- Category: ${product.category}

Return the questions as a numbered list.
`;

    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();


    if (!data.candidates || !data.candidates[0]?.content?.parts) {
      console.error("Invalid Gemini response:", data);
      return res
        .status(500)
        .json({ message: "Gemini API returned invalid response", raw: data });
    }


    const text = data.candidates[0].content.parts[0].text;
    const questions = text
      .split("\n")
      .map((q) => q.replace(/^\d+\.\s*/, "").trim()) 
      .filter((q) => q.length > 0);

    
    const saved = await AiResponse.create({
      productId: product._id,
      questions,
    });

   
    res.status(200).json({
      message: " AI questions generated successfully",
      productId: product._id,
      productName: product.productName,
      totalQuestions: questions.length,
      questions,
    });
  } catch (error) {
    console.error(" Gemini AI Error:", error);
    res.status(500).json({
      message: "Failed to generate AI questions",
      error: error.message,
    });
  }
};

export default generateQuestions