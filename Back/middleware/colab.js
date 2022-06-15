const colab = (req, res, next) => {
    if (req.user && req.user.profile.include("Colab")) {
      next();
    } else {
      res.status(401);
      throw new Error("Not authorized as an colab");
    }
  };
  module.exports = colab;
