import { Router } from "express";
import {
  login,
  signup,
  getUser,
  logout,
  verifyToken,
  refreshToken,
} from "../controllers/user.controller.js";

const router = Router();
router.post("/login", login);
router.post("/signup", signup);
router.get("/users", [verifyToken, getUser]);
router.get("/refresh_token", [refreshToken, verifyToken, getUser]);
router.post("/logout", [verifyToken, logout]);
export default router;
