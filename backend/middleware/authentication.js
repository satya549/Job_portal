import jwt from "jsonwebtoken";

const secretKey = "secretkey";

export const tokenValidator = (req, res, next) => {
  try {
    const token =  req.cookies.token;           //req.headers['authorization'];
      if (!token) throw new Error("User not authenticated");
     // const authToken = token.split(" ")
       
    const decoded = jwt.verify(token, secretKey); 
    if(!decoded){
      throw new Error("Invalid Token")
    }
    req.id = decoded.userId;
    next();
  } catch (error) {
    return res.json({
        status_code: 401,
        success: false,
        message: error.message,
      });
  }
};
