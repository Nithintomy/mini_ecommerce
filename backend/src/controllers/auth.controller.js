import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User is Already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      token: generateToken(user),
    });
  } catch (error) {
    next(error)
  }
};
export const login = async (req, res, next) => {
    try {

        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message:"Invalid email"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
             return res.status(400).json({message:"Invalid Password"})
        }

        res.json({
            token: generateToken(user),
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role: user.role

            }
        })
        
    } catch (error) {
        next(error)
        
    }

};
