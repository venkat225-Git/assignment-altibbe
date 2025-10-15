import express from "express";
import generateQuestions from "../controllers/aiController.js";
import generateDummyQuestions from "../controllers/generateDummyQuestions.js";

const router = express.Router();

router.post("/generate/:id",generateQuestions);
router.post("/generate-dummy/:id", generateDummyQuestions);


export default router;
