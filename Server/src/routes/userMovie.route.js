import { Router } from "express";
import {
  addUserMovie,
  deleteUserMovie,
  editUserMovie,
  getUserMovie,
  getUserMovies,
} from "../controllers/userMovie.controller.js";

const router = Router();
router.post("/add", addUserMovie);
router.get("/", getUserMovies);
router
  .route("/:userId/:movieId/:status")
  .patch(editUserMovie)
  .delete(deleteUserMovie);
router.get("/userMovie", getUserMovie);
export default router;
