const express = require("express");
const cors = require("cors");

const routes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(routes)

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.listen(4000, () => {
    console.log("listening on port 4000")
})