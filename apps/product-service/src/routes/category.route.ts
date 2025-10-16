import { Router } from "express";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getCategories,
} from "../controllers/category.controller";

const router: Router = Router();

// Create a new category
router.post("/", createCategory);

// Get all categories
router.get("/", getCategories);

// Update a category by ID
router.put("/:id", updateCategory);

// Delete a category by ID
router.delete("/:id", deleteCategory);

export default router;
