import { prisma } from "../../script.js";
import { CustomError } from "../middlewares/Errors/customError.js";
import {
  creatingService,
  deletingRowService,
  getSingleRowService,
  retrievingAllFromDb_Service,
  updatingRowService,
} from "../services/main.service.js";
import asyncWrapper from "../utils/asyncWrapper.js";

export const addChannel = asyncWrapper(async function (req, res) {
  const { name } = req.body;
  const channel = await creatingService(prisma.channel, { name }, { name });
  return res
    .status(201)
    .json({ message: "channel added", success: true, channel });
});

export const getChannels = asyncWrapper(async function (req, res) {
  const channels = await retrievingAllFromDb_Service(prisma.channel, {});
  return res.status(200).json({ success: true, channels });
});

export const getChannel = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const channel = await getSingleRowService(prisma.channel, Number(id));
  return res.status(200).json({ success: true, channel });
});

export const editChannel = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id);
  const oldChannel = await getSingleRowService(prisma.channel, Number(id));
  if (!oldChannel) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const channel = await updatingRowService(
    prisma.channel,
    { name },
    Number(id)
  );
  return res.status(200).json({ success: true, channel });
});

export const deleteChannel = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const oldChannel = await getSingleRowService(prisma.channel, Number(id));
  if (!oldChannel) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const response = await deletingRowService(prisma.channel, Number(id));
  return res
    .status(200)
    .json({ message: "Channel Removed", success: true, response });
});
