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

export const addUserMovie = asyncWrapper(async function (req, res) {
  const { userId, movieId, status } = req.body;
  const userId_movieId_status = { userId, movieId, status };
  const userMovie = await creatingService(
    prisma.userMovie,
    { userId, movieId, status },
    { userId_movieId_status: userId_movieId_status }
  );
  return res
    .status(201)
    .json({ message: "userMovie added", success: true, userMovie });
});

export const getUserMovies = asyncWrapper(async function (req, res) {
  const categories = await retrievingAllFromDb_Service(prisma.userMovie, {});
  return res.status(200).json({ success: true, categories });
});

export const getUserMovie = asyncWrapper(async function (req, res) {
  const { userId, movieId, status } = req.body;
  const userMovie = await prisma.userMovie.findUnique({
    where: {
      userId_movieId_status: {
        userId,
        movieId,
        status,
      },
    },
  });
  if (!userMovie) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  return res.status(200).json({ success: true, userMovie });
});

export const editUserMovie = asyncWrapper(async function (req, res) {
  const { userId, movieId, status } = req.params;
  const { newStatus } = req.body;
  const oldUserMovie = prisma.userMovie.findUnique({
    where: {
      userId_movieId_status: {
        userId: parseInt(userId),
        movieId: parseInt(movieId),
        status: status,
      },
    },
  });
  if (!oldUserMovie) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const userMovie = await prisma.userMovie.update({
    where: {
      userId_movieId_status: {
        userId: parseInt(userId),
        movieId: parseInt(movieId),
        status: status,
      },
    },
    data: { status: newStatus },
  });
  return res.status(200).json({ success: true, userMovie });
});

export const deleteUserMovie = asyncWrapper(async function (req, res) {
  const { userId, movieId, status } = req.params;
  const oldUserMovie = prisma.userMovie.findUnique({
    where: {
      userId_movieId_status: {
        userId: parseInt(userId),
        movieId: parseInt(movieId),
        status: status,
      },
    },
  });
  if (!oldUserMovie) {
    throw new CustomError("invalid id", 403, "Not Existing");
  }
  const response = await prisma.userMovie.delete({
    where: {
      userId_movieId_status: {
        userId: parseInt(userId),
        movieId: parseInt(movieId),
        status: status,
      },
    },
  });
  return res
    .status(200)
    .json({ message: "userMovie Removed", success: true, response });
});
