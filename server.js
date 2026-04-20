const dotenv = require("dotenv")
dotenv.config()

const connectDB = require("./src/db/db")

const app = require("./src/app")

connectDB()
app.listen(3000,(req,res)=>{
    console.log("Server is running on http://localhost:3000")
})