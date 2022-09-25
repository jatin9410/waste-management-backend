const express = require("express");
const dotenv=require("dotenv");
const app = express();
const connectDB = require("./config/db");
var cors = require("cors");
const { send } = require("process");

dotenv.config({path:"config/config.env"});
//connect database
connectDB();
app.get('/',(req,res)=>{
    res.send("fefeff");
})
app.use("/users", require("./routes/users"));
//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

//run the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));