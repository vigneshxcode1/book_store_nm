import express from 'express';
import { createbooks, deletebooks, getbooks, getsinglebook, updatebook} from '../controllers/BooksController.js';


const route= express.Router();

route.post("/createbooks",createbooks)
route.get("/getbooks",getbooks);
route.get("/getsinglebook/:id",getsinglebook)
route.put("/updatebooks/:id",updatebook);
route.delete("/deletebooks/:id",deletebooks)


export default route;