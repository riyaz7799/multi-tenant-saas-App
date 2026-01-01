const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");
const taskRoutes = require("./routes/task.routes");
const subscriptionRoutes = require("./routes/subscription.routes"); // ✅ Added

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();

app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/subscription", subscriptionRoutes); // ✅ Added

/* SWAGGER */
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Multi-Tenant SaaS Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});