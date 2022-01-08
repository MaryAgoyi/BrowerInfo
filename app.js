import express from "express"
import routes from  "./routes/routes.js"
import bodyParser from "body-parser"
const app= express();
const PORT = process.env.PORT || 5500;

app.use(bodyParser.json());
app.get("/", (req, res) =>{
   const idAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;

    res.json({"Your IPadrress": idAddress });
})

app.use("/api/books", routes);

//app.use(bodyParser.urlencoded);

app.listen(PORT, () =>{

    console.log(`server strated on port ${PORT}`)
})