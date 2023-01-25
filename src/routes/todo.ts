import express from "express";
import {Todo} from "../models/todo";
const router = express.Router({mergeParams:true});
var todos:Todo[]=[];
router.get("/",(req,res,next)=>{
    res.send(todos);
})
router.post("/",(req,res,next)=>{
    const {text} =  req.body;
    const todo:Todo ={id:new Date().toISOString(),text};
    todos.push(todo);
    res.status(201).send("success"); 
})
router.put("/:id",(req,res,next)=>{
    const {text} =  req.body;
    const id = req.params.id;
    const idx = todos.findIndex(e=>e.id==id);
    if(idx>=0){
         todos[idx] ={id:todos[idx].id,text:text};
         return res.send("updated")
    }
    res.status(404).send("invalid id"); 
})

router.delete("/:id",(req,res,next)=>{
    const {text} =  req.body;
    const id = req.params.id;
    todos = todos.filter(e=>e.id!=id);
    res.send("deleted");
})

export = router;