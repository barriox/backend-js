const Cerveza = require("./cervezasModel");
const cervezasController = {};

cervezasController.list = (req, res) =>
  Cerveza.find((err, cervezas) => {
    if (err) {
      return res.status(500).json({
        message: "Error obteniendo la cerveza",
      });
    }
    return res.json(cervezas);
  });

/*cervezasController.create = (req, res) =>
  res.send(
    `Cerveza añadida---> Nombre:${req.body.nombre}  Descripcion:${req.body.descripción}`
  );*/
cervezasController.search = (req, res) => {
  const q = req.query.q;
  Cerveza.find({ $text: { $search: q } }, (err, cervezas) => {
    if (err) {
      return res.status(500).json({
        message: "Error en la búsqueda",
      });
    }
    if (!cervezas.length) {
      return res.status(404).json({
        message: "No hemos encontrado cervezas que cumplan esa query",
      });
    } else {
      return res.json(cervezas);
    }
  });
};
const { ObjectId } = require("mongodb");
cervezasController.show = (req, res) => {
  const id = req.params.id;
  Cerveza.findOne({ _id: id }, (err, cerveza) => {
    if (!ObjectId.isValid(id)) {
      return res.status(404).send();
    }
    if (err) {
      return res.status(500).json({
        message: "Se ha producido un error al obtener la cerveza",
      });
    }
    if (!cerveza) {
      return res.status(404).json({
        message: "No tenemos esta cerveza",
      });
    }
    return res.json(cerveza);
  });
};
cervezasController.create = (req, res) => {
  const cerveza = new Cerveza(req.body);
  cerveza.save((err, cerveza) => {
    if (err) {
      return res.status(400).json({
        message: "Error al guardar la cerveza",
        error: err,
      });
    }
    return res.status(201).json(cerveza);
  });
};
cervezasController.update = (req, res) => {
  const id = req.params.id;
  Cerveza.findOne({ _id: id }, (err, cerveza) => {
    if (!ObjectId.isValid(id)) {
      return res.status(404).send();
    }
    if (err) {
      return res.status(500).json({
        message: "Se ha producido un error al guardar la cerveza",
        error: err,
      });
    }
    if (!ObjectId.isValid(id)) {
      return res.status(404).send();
    }
    if (!cerveza) {
      return res.status(404).json({
        message: "No hemos encontrado la cerveza",
      });
    }

    Object.assign(cerveza, req.body);

    cerveza.save((err, cerveza) => {
      if (err) {
        return res.status(500).json({
          message: "Error al guardar la cerveza",
        });
      }
      if (!cerveza) {
        return res.status(404).json({
          message: "No hemos encontrado la cerveza",
        });
      }
      return res.json(cerveza);
    });
  });
};
cervezasController.remove = (req, res) => {
  const id = req.params.id;

  Cerveza.findOneAndDelete({ _id: id }, (err, cerveza) => {
    if (!ObjectId.isValid(id)) {
      return res.status(404).send();
    }
    if (err) {
      return res.json(500, {
        message: "No hemos encontrado la cerveza",
      });
    }
    if (!cerveza) {
      return res.status(404).json({
        message: "No hemos encontrado la cerveza",
      });
    }
    return res.json(cerveza);
  });
};
module.exports = cervezasController;
