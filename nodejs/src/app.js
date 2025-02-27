import express from "express";
import checkRoutes from "./routes/checkRoutes.js";
import infoRoutes from "./routes/infoRoutes.js";

const app = express();
app.use(express.json());

app.use("/check", checkRoutes);
app.use("/info", infoRoutes);

app.use((req, res, next) => {
  res.status(404).send({ message: "Recurso no encontrado." });
});

export default app;
