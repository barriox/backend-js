const mongoose = require("mongoose");

const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb://root:password@localhost:15001/Cervezas?authSource=admin";
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log(`Conectado a la base de datos: ${MONGO_URL}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`Error al conectar a la base de datos: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Desconectado de la base de datos");
});

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Desconectado de la base de datos al terminar la app");
    process.exit(0);
  });
});
