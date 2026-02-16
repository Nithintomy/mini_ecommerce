import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = header.split(" ")[1];

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode;
  } catch (error) {
    return res.status(401).json({message:"Invalid token provided"})
  }
};


export default protect