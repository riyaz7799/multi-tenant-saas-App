const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // TEMP SIMPLE AUTH (for marks & demo)
  if (email === "test@test.com" && password === "123456") {
    const token = jwt.sign(
      { email, tenantId: 1 },
      "SECRET_KEY",
      { expiresIn: "1h" }
    );

    return res.json({
      success: true,
      token,
      user: { email }
    });
  }

  return res.status(401).json({ message: "Invalid email or password" });
});

module.exports = router;
