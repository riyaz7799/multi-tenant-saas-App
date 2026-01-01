module.exports = (type) => {
  return (req, res, next) => {
    const tenant = req.tenant;

    if (type === "users" && tenant.current_users >= tenant.max_users) {
      return res.status(403).json({ message: "User limit reached" });
    }

    if (type === "projects" && tenant.current_projects >= tenant.max_projects) {
      return res.status(403).json({ message: "Project limit reached" });
    }

    next();
  };
};
