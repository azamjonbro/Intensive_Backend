const roleMiddleware = (req, res,next)=>{
    try {
        if(!req.user){
          return  res.status(403).json({message:"Unauthorized"})
        }
        if(req.user.role!=="admin" || req.user.role!=="seller" || req.user.role!=="user" ){
           return res.status(401).json({message:"birodar boladigan ishshi qilib tokennni qaytarib joyiga qoyib qoying."})
        }
        next()
    } catch (error) {
        res.status(500).json({message:"role tekshiruvida hatolik."})
    }
}
module.exports = {
    roleMiddleware
}