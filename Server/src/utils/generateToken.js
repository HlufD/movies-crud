import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(user, process.env.jwt_sec, {
    expiresIn: "15m",
  });
};

export { generateToken };
