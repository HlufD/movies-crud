function wrapper(fn) {
  return async function name(req, res, next) {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

export default wrapper;
