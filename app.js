import express from "express"
import routes from  "./routes/routes.js"
import bodyParser from "body-parser"
import cors from "cors";
const app= express();

const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(bodyParser.json());
app.set("view engine", 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) =>{
const ipAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;

  res.render("app", {ip: ipAddress});
})



app.listen(PORT, () =>{

    console.log(`server strated on port ${PORT}`)
})
