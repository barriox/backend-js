const cervezasController = {};

cervezasController.list = (req, res) => res.send("Lista de cervezas");

cervezasController.create = (req, res) =>
  res.send(
    `Cerveza añadida---> Nombre:${req.body.nombre}  Descripcion:${req.body.descripción}`
  );

cervezasController.remove = (req, res) => res.send("Cerveza eliminada");

module.exports = cervezasController;
