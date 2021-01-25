const express = require('express')
const cors = require("cors")
const compression = require("compression");

const PORT = process.env.PORT || 8080


const app = express()

const routes = require("./controllers/routes");
app.use(routes);


app.use(cors())
app.use(express.urlencoded({ limit: '200mb',extended: true }));
app.use(express.json({ limit: '200mb',extended: true }));
app.use(compression());

app.use(express.static("public"));

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})