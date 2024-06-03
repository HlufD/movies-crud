import { Router } from "express";
import {
  addCType,
  deleteType,
  editType,
  getType,
  getTypes,
} from "../controllers/type.controller.js";

const router = Router();
router.post("/add", addCType);
router.get("/", getTypes);
router.route("/:id").patch(editType).delete(deleteType).get(getType);

export default router;
