const sendCookie = (res, id, token) => {
  res.cookie(id, token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    expires: new Date(Date.now() + 1000 * 60 * 15),
  });
};

export { sendCookie };
