import { prisma } from "../../script.js";
import { loginService, signupService } from "../services/user.service.js";
import { generateToken } from "../utils/generateToken.js";
import { sendCookie } from "../utils/sendCookie.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import jwt from "jsonwebtoken";
import { CustomError } from "../middlewares/Errors/customError.js";

export const signup = asyncWrapper(async function (req, res) {
  const { username, email, password } = req.body;
  const user = await signupService(username, password, email);
  const token = generateToken(user);
  sendCookie(res, user.id, token);
  return res.json({
    user,
  });
});

export const login = asyncWrapper(async function (req, res) {
  const { username, password } = req.body;
  const user = await loginService(username, password);
  const token = generateToken(user);
  sendCookie(res, user.id, token);
  res.status(200).json({
    success: true,
    user,
  });
});

export const getUser = asyncWrapper(async function (req, res) {
  const user = await prisma.user.findMany();
  return res.json(user);
});

export const logout = asyncWrapper(function (req, res) {
  const { id } = req.body.user;
  console.log(id);
  res.clearCookie(id);
  req.cookies[id] = "";
  return res.status(200).json({ message: "user logout", success: true });
});

// token

export function verifyToken(req, res, next) {
  const cookie = req.headers.cookie;
  if (!cookie) {
    throw new CustomError("no token was found", 404, "Authorization");
  }
  const token = cookie.split("=")[1];
  jwt.verify(token, process.env.jwt_sec, (err, user) => {
    if (err) {
      throw new CustomError("invalid token", 403, "Token validation");
    }
    req.body.user = user;
    next();
  });
}

export function refreshToken(req, res, next) {
  const cookies = req.headers.cookie;
  if (!cookies) {
    throw new CustomError("no token found", 404, "Authorization");
  }
  const prevToken = cookies.split("=")[1];
  jwt.verify(prevToken, process.env.jwt_sec, (err, user) => {
    if (err) {
      throw new CustomError("invalid token", 403, "Token validation");
    }
    const { id, username } = user;
    // clear existing cookie
    res.clearCookie(`${id}`);
    req.cookies[id] = "";
    // new token
    const token = generateToken({ id, username });
    sendCookie(res, id, token);
    req.body.user = { id, username };
    next();
  });
}
