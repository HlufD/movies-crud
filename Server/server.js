import express from "express";
import userRouter from "./src/routes/user.route.js";
import channelRouter from "./src/routes/channel.route.js";
import typeRouter from "./src/routes/type.route.js";
import categoryRouter from "./src/routes/category.route.js";
import movieRouter from "./src/routes/movie.route.js";
import userMovieRouter from "./src/routes/userMovie.route.js";

import cookieParser from "cookie-parser";
import cors from "cors";
import { NotFound } from "./src/middlewares/Errors/notFound.js";
import errorHandler from "./src/middlewares/Errors/ErrorHandler.js";
const app = express();

// Use CORS middleware

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

// route handler middlewares
app.use("/api", userRouter);
app.use("/api/channels", channelRouter);
app.use("/api/types", typeRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/movies", movieRouter);
app.use("/api/userMovies", userMovieRouter);

// error handling middlewares
app.use(errorHandler);
app.use(NotFound);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
