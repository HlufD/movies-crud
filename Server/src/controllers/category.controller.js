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

export const addCategory = asyncWrapper(async function (req, res) {
  const { name } = req.body;
  const category = await creatingService(prisma.category, { name }, { name });
  return res
    .status(201)
    .json({ message: "category added", success: true, category });
});

export const getCategories = asyncWrapper(async function (req, res) {
  const categories = await retrievingAllFromDb_Service(prisma.category, {});
  return res.status(200).json({ success: true, categories });
});

export const getCategory = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const category = await getSingleRowService(prisma.category, Number(id));
  return res.status(200).json({ success: true, category });
});

export const editCategory = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id);
  const oldCategory = await getSingleRowService(prisma.category, Number(id));
  if (!oldCategory) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const category = await updatingRowService(
    prisma.category,
    { name },
    Number(id)
  );
  return res.status(200).json({ success: true, category });
});

export const deleteCategory = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const oldCategory = await getSingleRowService(prisma.category, Number(id));
  if (!oldCategory) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const response = await deletingRowService(prisma.category, Number(id));
  return res
    .status(200)
    .json({ message: "category Removed", success: true, response });
});
