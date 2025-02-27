import  app from "./app.js";
// const app = require("./app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `El servidor esta corriendo en el puerto: ${PORT}. http://localhost:${PORT}`
  );
});
