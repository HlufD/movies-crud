import { Router } from "express";
import {
  addMovie,
  deleteMovie,
  editMovie,
  getMovie,
  getMovies,
} from "../controllers/movie.controller.js";

const router = Router();
router.post("/add", addMovie);
router.get("/", getMovies);
router.route("/:id").patch(editMovie).delete(deleteMovie).get(getMovie);

export default router;
