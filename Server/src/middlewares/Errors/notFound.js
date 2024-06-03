export const NotFound = function (req, res) {
  return res.status(404).json({ message: "404 Not Found!" });
};
