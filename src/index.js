const express = require("express");
const app = express();
const path = require("path");

//Configuraciones
app.set("port", 3000);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Rutas
app.use(require("./routes/"));

//Archivos Estaticos
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log("Escuchando en el puerto", app.get("port"));
});
