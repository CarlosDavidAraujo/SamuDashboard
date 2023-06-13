const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const vitimaRoutes = require("./routes/vitima");
const tempoRespostaRoutes = require("./routes/tempoResposta");
const host = process.env.HOST;
const port = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: [`http://${host}:${port}`, `http://localhost:${port}`],
  })
);

app.use(helmet());
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    `default-src 'self'; connect-src 'self' http://${host}:${port}; font-src fonts.gstatic.com; style-src 'self' fonts.googleapis.com 'unsafe-inline'`
  );
  next();
});

app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/vitima", vitimaRoutes);
app.use("/temporesposta", tempoRespostaRoutes);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
