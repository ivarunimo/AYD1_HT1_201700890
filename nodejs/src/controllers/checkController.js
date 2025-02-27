import { responseHandler } from "../utils/responseHandler.js";

export const check = (req, res) => {
  return responseHandler(res, 200, null);
};

export const HelloWorldCheck = (req, res) => {
  return responseHandler(res, 200, {message: "Hello world from check!"});
}
