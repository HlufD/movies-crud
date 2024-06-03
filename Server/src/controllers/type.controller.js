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

export const addCType = asyncWrapper(async function (req, res) {
  const { name } = req.body;
  const Type = await creatingService(prisma.type, { name }, { name });
  return res.status(201).json({ message: "Type added", success: true, Type });
});

export const getTypes = asyncWrapper(async function (req, res) {
  const Types = await retrievingAllFromDb_Service(prisma.type, {});
  return res.status(200).json({ success: true, Types });
});

export const getType = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const Type = await getSingleRowService(prisma.type, Number(id));
  return res.status(200).json({ success: true, Type });
});

export const editType = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id);
  const oldType = await getSingleRowService(prisma.type, Number(id));
  if (!oldType) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const Type = await updatingRowService(prisma.type, { name }, Number(id));
  return res.status(200).json({ success: true, Type });
});

export const deleteType = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const oldType = await getSingleRowService(prisma.type, Number(id));
  if (!oldType) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const response = await deletingRowService(prisma.type, Number(id));
  return res
    .status(200)
    .json({ message: "Type Removed", success: true, response });
});
