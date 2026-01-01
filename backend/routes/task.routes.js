const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const tenantMiddleware = require("../middleware/tenant.middleware");

router.get(
  "/",
  authMiddleware,
  tenantMiddleware,
  (req, res) => {
    res.json({
      success: true,
      tenant: req.tenantId,
      tasks: [
        { id: 1, title: "Demo Task 1" },
        { id: 2, title: "Demo Task 2" }
      ]
    });
  }
);

module.exports = router;
