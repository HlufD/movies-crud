import bcrypt from "bcrypt";
import { prisma } from "../../script.js";
import { CustomError } from "../middlewares/Errors/customError.js";

export async function signupService(username, password, email) {
  const user = await prisma.user.findUnique({ where: { username: username } });
  if (user) {
    throw new CustomError("Email already in use", 400, "Authentication");
  }
  const hashedPwd = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: { username, password: hashedPwd, email },
  });
  return newUser;
}

export async function loginService(username, password) {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    throw new CustomError("No user found", 404, "Authentication");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new CustomError(
      "username or password is incorrect",
      404,
      "Authentication"
    );
  }
  return user;
}
