const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    plans: [
      { name: "Free", price: "₹0", projects: 3, users: 5 },
      { name: "Pro", price: "₹499", projects: 20, users: 25 },
      { name: "Enterprise", price: "₹1999", projects: "Unlimited", users: "Unlimited" }
    ]
  });
});

module.exports = router;
