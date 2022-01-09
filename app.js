import express from "express"
import routes from  "./routes/routes.js"
import bodyParser from "body-parser"
import cors from "cors";
const app= express();
const tasks= {
  id: 1, name:"idAddress",message:"hello"
}
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(bodyParser.json());
app.set("view engine", 'ejs');
app.use(express.static('public'));
//app.use(bodyParser.urlencoded);
app.get("/", (req, res) =>{
const ipAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
const browserType = req.header("Sec-Ch-Ua");
const os =req.header("Sec-Ch-Ua-Platform");
const  browser =req.headers['content-type'];
const viewp =req.header["Viewport-Width"];
const isIpad = !!req.headers['user-agent'].match(/Mozilla/);


  
    res.render("app", {ip: ipAddress, bt: browserType,os,browser, viewp});
})

app.use("/api/books", routes);

//

app.listen(PORT, () =>{

    console.log(`server strated on port ${PORT}`)
})