const jwt = require("jsonwebtoken")

const superAdminMiddleware = async (req, res, next)=>{
    try {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).json({message:"ro'yhatdan o'tish talab qilinadi."})
    }

    const token = authHeader.split(" ")[1];
    if(!token){
        res.status(404).json({message:"token topilmadi"})
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Noto‘g‘ri yoki eskirgan token" });
            }

            // Token ichidagi userId ni req ga ulab qo‘yamiz
            req.superAdminId = decoded.id; 
            next(); // davom ettiramiz
        });
}
catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

module.exports={superAdminMiddleware}