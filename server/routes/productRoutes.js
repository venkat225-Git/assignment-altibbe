import express from "express"
import postproduct from "../controllers/productController.js";

const router = express.Router()

router.post('/product',postproduct)

export default router  