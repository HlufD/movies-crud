import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategories,
  getCategory,
} from "../controllers/category.controller.js";

const router = Router();
router.post("/add", [addCategory]);
router.get("/", getCategories);
router
  .route("/:id")
  .patch(editCategory)
  .delete(deleteCategory)
  .get(getCategory);

export default router;
