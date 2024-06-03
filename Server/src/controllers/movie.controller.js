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

export const addMovie = asyncWrapper(async function (req, res) {
  const {
    title,
    duration,
    description,
    videoUrl,
    channelId,
    typeId,
    categoryId,
    thumbnail,
  } = req.body;
  const movie = await creatingService(
    prisma.movie,
    {
      title,
      duration,
      videoUrl,
      channelId,
      typeId,
      categoryId,
      thumbnail,
      description,
    },
    { title }
  );
  return res.status(201).json({ message: "movie added", success: true, movie });
});

export const getMovies = asyncWrapper(async function (req, res) {
  const categories = await retrievingAllFromDb_Service(prisma.movie, {});
  return res.status(200).json({ success: true, categories });
});

export const getMovie = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const movie = await getSingleRowService(prisma.movie, Number(id));
  return res.status(200).json({ success: true, movie });
});

export const editMovie = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const oldMovie = await getSingleRowService(prisma.movie, Number(id));
  if (!oldMovie) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const movie = await updatingRowService(prisma.movie, req.body, Number(id));
  return res.status(200).json({ success: true, movie });
});

export const deleteMovie = asyncWrapper(async function (req, res) {
  const { id } = req.params;
  const oldMovie = await getSingleRowService(prisma.movie, Number(id));
  if (!oldMovie) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const response = await deletingRowService(prisma.movie, Number(id));
  return res
    .status(200)
    .json({ message: "movie Removed", success: true, response });
});
