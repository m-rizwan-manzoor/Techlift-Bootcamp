const express = require("express");
const routes = require("./routes/routes");

const app = express();
app.use(express.json());

app.use(routes);
app.listen(8080, () => console.log("Server is listening at port 8080."));
