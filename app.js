const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const homeRoutes = require("./src/routes/web");

const app = express(); // app express
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//config req.server
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); //for from data

//config template engine
configViewEngine(app);

// khai báo routes
app.use("/", homeRoutes);

app.listen(port, hostname, () => {
  console.log(`Server running at port http://localhost:${port}`);
});
