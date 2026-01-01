// routes/user.routes.js
router.get("/", authMiddleware, (req, res) => {
  res.json({
    success: true,
    users: [
      { id: 1, email: "test@test.com", role: "admin" }
    ]
  });
});
