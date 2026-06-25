require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Servidor iniciado");
  });
});