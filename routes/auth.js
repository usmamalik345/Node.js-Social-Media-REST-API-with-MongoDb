const router = require("express").Router()
const User = require("../models/user")


// WHY WE USE ROUTER.GET INSTED OF APP 

router.get("/registor",   (req, res) => {

    const user =  new  User({
        username: "Usama Shahid",
        email: "usmammalik346@gmail.com",
        password: "123456",
    })
      user.save().then(resp =>{
         res.send("welcome to auth")
     })

} )

module.exports = router