const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")


dotenv.config()

const app = express()

// what to ask about this from "u" why we use this praser


mongoose.connect(process.env.MONGO_URL,  { useNewUrlParser: true, useUnifiedTopology: true }, ()=> {
    console.log("Connected to Mongo");
});

// Middleware we use while doing POST method to give our Option 

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.get("/" , (req, res)=>{
    res.send("welcome to Home Page")
})


// calling Routersss
app.use("/api/users" , userRoute )
app.use("/api/auth" , authRoute )



app.listen(8800 ,  () => {
    console.log("Listening on port 8000");
})