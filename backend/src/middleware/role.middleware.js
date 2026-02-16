export const authorize =(roles)=>{
    return (req,res,next)=>{
        if(!req.user){
            return res.status(401).json({message:"unauthorized"})
        }

        if(!roles.include(req.user.role)){
            return res.status(401).json({message:"Invalid Role"})
        }
    }
}