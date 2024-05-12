const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())
app.use("/api", require("./routes/user"));

app.listen(3200, function(){
    console.log("server running in port 3200");
});