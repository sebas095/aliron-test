const { RolesHelper } = require("../helpers");

module.exports = (req, res, next) => {
  const { user } = req;

  if (user.role === RolesHelper.ADMIN_ROLE) {
    return next();
  }

  return res.status(401).json({
    status: 401,
    messsage: "Access denied",
  });
};
