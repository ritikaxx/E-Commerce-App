const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//config files
dotenv.config({path:"backend/config/config.env"});


//connecting to database
connectDatabase();

app.listen(4000,()=>{
    console.log('server is running on http://localhost:4000')
})