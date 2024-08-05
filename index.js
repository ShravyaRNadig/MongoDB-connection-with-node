const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err));

app.use("/posts", require("./routes/posts"));
app.listen(process.env.PORT,()=>console.log("Server is running"))