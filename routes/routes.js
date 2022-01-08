import express, {Router} from "express";

const route =Router();


route.get("/", (req, res)=>{

    res.json({message: " hello fromthe API routes"})
})
route.post("/", (req, res)=>{
      const book = req.body;
      console.log(book)
    res.json({
        message: " hello fromthe API routes",
        book:book
})
})


export default route;