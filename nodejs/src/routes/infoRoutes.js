import express from "express";
import { info, HelloWorldInfo } from "../controllers/infoController.js";

const router = express.Router();

// Cargando todos los endpoints de la ruta.
router.get("/", info);
router.get("/helloworld", HelloWorldInfo);

export default router;