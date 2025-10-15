import Product from "../models/productmodel.js"


const postproduct = async (req,res) =>{
    try {
        const productinfo = req.body
        if(!productinfo){
            return res.status(400).json({message:"Data is not sent"})
        }
        const info = new Product(productinfo)
        await info.save()
        res.status(201).json({ message: "Product added successfully" });


    } catch (error) {
        res.status(400).json({ message: "Error saving product", error: error.message });
    }
}

export default postproduct