let jwt = require("jsonwebtoken");

const authorizedUser = (parameters) =>
  function (req, res, next) {
    let token = req.headers.authorization.split(" ")[1];
    let payload = jwt.decode(token);
    if (parameters.includes(payload.role)) {
      next();
    } else {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }
  };

module.exports = authorizedUser;
