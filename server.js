const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use(errorHandler);
 
const PORT = process.env.PORT || 3001;

app.use("/api/contacts",require("./routes/contactRoutes"));



app.listen(PORT,()=>{
    console.log(`I'm running on ${PORT}`);
    
})


