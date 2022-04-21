const router = require("express").Router();
const cervezasController = require("./cervezasController");

router.get("/", (req, res) => cervezasController.list(req, res));
router.post("/", (req, res) => cervezasController.create(req, res));
router.delete("/", (req, res) => cervezasController.remove(req, res));

//exportamos el modulo para poderlo consumir. Es recibido en el index en cervezasRouter
module.exports = router;
