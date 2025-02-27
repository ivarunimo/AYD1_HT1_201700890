import { responseHandler } from "../utils/responseHandler.js";

export const info = (req, res) => {
  const data = {
    Instancia: "Maquina 2",
    Curso: "Seminario De Sistemas 1 A",
    Grupo: "Grupo 9",
  };

  return responseHandler(res, 200, data);
};

export const HelloWorldInfo = (req, res) => {
  return responseHandler(res, 200, { message: "Hello world from info!" });
};