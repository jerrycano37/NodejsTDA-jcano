const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html", { title: "Pagina Principal" });
});

router.get("/contacto", (req, res) => {
  res.render("contacto.html", { title: "Pagina de contacto" });
});

router.get("/acerca", (req, res) => {
  res.render("acerca.html", { title: "Acerca De Nosotros" });
});

module.exports = router;