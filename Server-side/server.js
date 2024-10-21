import express from 'express';
import mongoose from 'mongoose'
import bookroute from './Routes/BooksRoutes.js';
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors());

app.use("/api/books",bookroute);


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://vicky:test123@cluster0.epdrsry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  console.log("mongodb connected")
}

app.listen(3000,()=>{
    console.log("port connect",3000);
})