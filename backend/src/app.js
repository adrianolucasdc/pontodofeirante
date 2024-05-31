require("dotenv").config();
const express = require("express");
const cors = require("cors");


const routes = require("./routes/routes");


const app = express();

app.use(cors({origin: process.env.FRONTEND, credentials: true, methods: "GET, POST",}));
app.use(express.json());
app.use(routes);



app.listen(4000, () => {
    console.log("listening on port 4000")
})