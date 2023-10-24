// Routes.js - Módulo de rutas
const express = require("express");
const router = express.Router();

const mensajes = [];

// Get mensajes
router.get("/", function (req, res) {
  res.json(mensajes);
});

// Post mensaje
router.post("/", function (req, res) {

  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user,
    lat: req.body.lat,
    lng: req.body.lng,
    foto: req.body.foto,
  };

  mensajes.push(mensaje);

  console.log(mensajes);

  res.json({
    ok: true,
    mensaje,
  });
});

module.exports = router;
