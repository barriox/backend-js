//*******DEPENDENCIAS******* */
//importar el modulo que vamos a usar
const express = require("express");
//modulo instanciado, app será nuestro servidor web, como apache o nginx
const app = express();
const { route } = require("express/lib/application");
const res = require("express/lib/response");
//Configurando rutas estáticas, utiles sobretodo para imagenes, ficheros css...
//utilizamos la libreria path del sistema que no es necesario instalar
/**Creamos carpeta public con algun fichero para servir de forma estática y la usamos definiendo la ruta publica que queremos, en este caso static */
/**Las llamadas las hacemos desde la URL a los distintos ficheros */
const path = require("path");
const staticRoute = path.join(__dirname, "public");
//Enrutador, cada vez que haya una peticion a algo que empiece por /cervezas se redigira al fichero cervezas.js
const cervezasRouter = require("./cervezasRouter.js");
const bodyParser = require("body-parser");
require("./db");
const Cerveza = require("./cervezasModel.js");

//*******MIDDLEWARES******* */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//*******RUTAS******* */
app.use("/api/cervezas", cervezasRouter); //actua como middleware y cuando encuentra una ruta de ese tipo a la que responde el segundo parametro

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}:${req.method} ${req.rl}`);
  next();
});

//usamos la libreria path
app.use("/static", express.static(staticRoute));

//en localhost:3000/ aparecera "hola world", en localhost:3000/bancos "aqui deberian..."
app.get("/", function (req, res) {
  res.send("hola world");
});
app.get("/bancos", function (req, res) {
  res.send("Aqui deberian salir los bancos");
});

/*app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});*/

app.use((req, res, next) => {
  next(); //para ir al siguiente middleware o a la ruta
  //tambien podriamos hacer un send() y cortar
  //la cola de middlewares, por ej en un contro de permisos
});

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}:${req.method} ${req.rl}`;
  console.log(log);
  fs.appendFile("server.log");
});

/*AÑADIR CERVEZA A LA BASE DE DATOS
const miCerveza = new Cerveza({
  nombre: "Ambar",
  descripción: "La cerveza de nuestra tierra",
  graduación: "4,8º",
  envase: "Botella de 75cl",
  precio: "3333€",
});
miCerveza.save((err, miCerveza) => {
  if (err) return console.error(err);
  console.log(`Guardada en bbdd ${miCerveza.nombre}`);
});
*/
