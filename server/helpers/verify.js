const jwt = require('jsonwebtoken')
require('dotenv').config()



var	verifyToken = (req, res, next)=>{
		jwt.verify(req.headers.token, process.env.JWT_SECRET, (err, decoded) => {
      if(decoded == undefined){
        res.send(err)
      }else{
        if(decoded) {
          req.decoded = decoded
          next();
        }
        else {
          res.send({msg : "You Cant access this routes"})
        }
       }
    })
	}
module.exports = {
     verifyToken
}
