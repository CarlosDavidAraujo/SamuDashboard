const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const vitimaRoutes = require("./routes/vitima");
const tempoRespostaRoutes = require("./routes/tempoResposta");

const app = express();

app.use(cors({ origin: "*" }));

app.use(helmet());

app.use(express.json());

app.use(morgan("dev"));

//app.use(express.static(path.join(__dirname, "build")));

/* app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; connect-src 'self' http://172.21.13.82:3001 ws://172.21.13.82:3001"
  );
  next();
}); */

app.use("/vitima", vitimaRoutes);
app.use("/temporesposta", tempoRespostaRoutes);

/* app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
}); */

module.exports = app;
