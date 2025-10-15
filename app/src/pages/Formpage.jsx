import React, { useState } from "react";
import "./Formpage.css";

const Formpage = () => {
  const [details, setDetails] = useState({
    productName: "",
    brandName: "",
    category: "",
    description: "",
    imageUrl: "",
    ingredients: "",
    sourceType: "",
    allergens: "",
    certifications: "",
    manufacturedIn: "",
    factoryLocation: "",
    supplyChainTransparency: "",
    sustainabilityPractices: "",
    calories: "",
    sugar: "",
    protein: "",
    fat: "",
    additives: "",
    safetyTestsPassed: "",
    companyId: "",
    submittedBy: "",
    submissionDate: "",
  });

  const [message, setMessage] = useState("");

  // ✅ handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ handle form submission with fetch
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("✅ Product added:", data);
        setMessage("✅ Product added successfully!");
        // Clear all fields
        setDetails({
          productName: "",
          brandName: "",
          category: "",
          description: "",
          imageUrl: "",
          ingredients: "",
          sourceType: "",
          allergens: "",
          certifications: "",
          manufacturedIn: "",
          factoryLocation: "",
          supplyChainTransparency: "",
          sustainabilityPractices: "",
          calories: "",
          sugar: "",
          protein: "",
          fat: "",
          additives: "",
          safetyTestsPassed: "",
          companyId: "",
          submittedBy: "",
          submissionDate: "",
        });
      } else {
        setMessage("❌ Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setMessage("❌ Something went wrong while connecting to the server.");
    }
  };

  return (
    <div className="form-container">
      <h2>Product Transparency Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h3>Basic Info</h3>
          <input type="text" name="productName" placeholder="Product Name" value={details.productName} onChange={handleChange} />
          <input type="text" name="brandName" placeholder="Brand Name" value={details.brandName} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={details.category} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={details.description} onChange={handleChange} />
          <input type="text" name="imageUrl" placeholder="Image URL" value={details.imageUrl} onChange={handleChange} />
        </div>

        <div className="section">
          <h3>Ingredients</h3>
          <input type="text" name="ingredients" placeholder="Ingredients List" value={details.ingredients} onChange={handleChange} />
          <input type="text" name="sourceType" placeholder="Source Type" value={details.sourceType} onChange={handleChange} />
          <input type="text" name="allergens" placeholder="Allergens" value={details.allergens} onChange={handleChange} />
          <input type="text" name="certifications" placeholder="Certifications" value={details.certifications} onChange={handleChange} />
        </div>

        <div className="section">
          <h3>Manufacturing Info</h3>
          <input type="text" name="manufacturedIn" placeholder="Manufactured In" value={details.manufacturedIn} onChange={handleChange} />
          <input type="text" name="factoryLocation" placeholder="Factory Location" value={details.factoryLocation} onChange={handleChange} />
          <input type="text" name="supplyChainTransparency" placeholder="Supply Chain Transparency" value={details.supplyChainTransparency} onChange={handleChange} />
          <input type="text" name="sustainabilityPractices" placeholder="Sustainability Practices" value={details.sustainabilityPractices} onChange={handleChange} />
        </div>

        <div className="section">
          <h3>Health & Safety</h3>
          <input type="text" name="calories" placeholder="Calories" value={details.calories} onChange={handleChange} />
          <input type="text" name="sugar" placeholder="Sugar" value={details.sugar} onChange={handleChange} />
          <input type="text" name="protein" placeholder="Protein" value={details.protein} onChange={handleChange} />
          <input type="text" name="fat" placeholder="Fat" value={details.fat} onChange={handleChange} />
          <input type="text" name="additives" placeholder="Additives" value={details.additives} onChange={handleChange} />
          <input type="text" name="safetyTestsPassed" placeholder="Safety Tests Passed" value={details.safetyTestsPassed} onChange={handleChange} />
        </div>

        <div className="section">
          <h3>Company Info</h3>
          <input type="text" name="companyId" placeholder="Company ID" value={details.companyId} onChange={handleChange} />
          <input type="text" name="submittedBy" placeholder="Submitted By" value={details.submittedBy} onChange={handleChange} />
          <input type="text" name="submissionDate" placeholder="Submission Date" value={details.submissionDate} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {message && <p className="response-message">{message}</p>}
    </div>
  );
};

export default Formpage;

