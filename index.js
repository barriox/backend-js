//importar el modulo que vamos a usar
const express = require("express");
const res = require("express/lib/response");

//modulo instanciado, app será nuestro servidor web, como apache o nginx
const app = express();

//Configurando rutas estáticas, utiles sobretodo para imagenes, ficheros css...
//utilizamos la libreria path del sistema que no es necesario instalar
const path = require("path");
const staticRoute = path.join(__dirname, "public");

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}:${req.method} ${req.rl}`);
  next();
});

//usamos la libreria path
app.use("/static", express.static(staticRoute));
/**Creamos carpeta public con algun fichero para servir de forma estática y la usamos definiendo la ruta publica que queremos, en este caso static */
/**Las llamadas las hacemos desde la URL a los distintos ficheros */

//en localhost:3000/ aparecera "hola world", en localhost:3000/bancos "aqui deberian..."
app.get("/", function (req, res) {
  res.send("hola world");
});
app.get("/bancos", function (req, res) {
  res.send("Aqui deberian salir los bancos");
});
app.listen(3000);

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
