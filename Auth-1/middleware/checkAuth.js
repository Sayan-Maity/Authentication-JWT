const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(400).json({
      errors: [
        {
          msg: "No Token found",
        },
      ],
    });
  }
  try {
    let user = await JWT.verify(token, process.env.JWT_SECRET_KEY);
    req.user = user.email;
    next();
  } catch (err) {
    return res.status(400).json({
      errors: [
        {
          msg: "Token invalid",
        },
      ],
    });
  }
};
