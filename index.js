import express from 'express';


const PORT = 3636;

const app = express();

app.set("view engine","ejs");

app.listen(PORT,()=>console.log(`Server is running in port${PORT}`));