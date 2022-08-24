const router = require("express").Router()

// WHY WE USE ROUTER.GET INSTED OF APP 

router.get("/" , (req, res) =>{
    res.send("welcome to auth")
} )

module.exports = router