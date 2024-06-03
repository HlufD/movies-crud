import { Router } from "express";
import {
  addChannel,
  deleteChannel,
  editChannel,
  getChannel,
  getChannels,
} from "../controllers/channel.controller.js";

const router = Router();
router.post("/add", addChannel);
router.get("/", getChannels);
router.route("/:id").patch(editChannel).delete(deleteChannel).get(getChannel);

export default router;
