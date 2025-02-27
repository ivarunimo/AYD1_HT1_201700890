import express from "express";
import { check, HelloWorldCheck } from "../controllers/checkController.js";

const router = express.Router();

// Cargando todos los endopoints de la ruta
router.get("/", check);
router.get("/helloworld", HelloWorldCheck);

export default router;
