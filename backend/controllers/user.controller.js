import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const secretKey = "secretkey";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      throw new Error("Please provide all required field");
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      throw new Error("User alrready exist");
    }

    const hashedPassword = bcrypt.hashSync(password);

    await UserModel.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    res.status(200).json({
      status_code: 200,
      message: " User resistred successfully.",
    });
  } catch (error) {
    res.json({
      status_code: 400,
      message: error.message,
    });
  }
};

export const login =async(req, res) => {
    try {
        const {email, password, role} =req.body;
        if(!email, !password, !role){
            throw new Error("provide all required field")
        }
        const user = await UserModel.findOne({ email });
        if(!user) {
            throw new Error("Incorrect Email or password");
          }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
          throw new Error("Incorrect Email or password")
        }
        if(role !== user.role){
          throw new Error("Account doesn't exist with current role")
        }
    
        const token = jwt.sign({userId:user._id}, "secretKey", {expiresIn:'1h'})
        
        res.status(200).cookie("token", token, {maxAge:1*24*60*60*100, httpsOnly:true, sameSite:'strict'}).json({
          status_code: 200,
          message: "Welcome back.",
          data: {
            _id: user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role: user.role,
            profile:user.profile,
            token,
          }
          });
    } catch (error) {
      res.json({
        status_code: 400,
        message: error.message,
      });
    }
}

export const logout = async(req,res) =>{
  try {
    return res.status(200).cookie("token", "", {maxAge:0}).json({
      message:"Logged out successfully.",
      success:true
    })
  } catch (error) {
    res.json({
      status_code: 400,
      message: error.message,
    });
  }
}

export const UpdateProfile = async (req,res) =>{
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const profileId = req.params.id;
    let skillsArray;
    if(skills){
      skillsArray = skills.split(",");
    }
    let user =await UserModel.findByIdAndUpdate(profileId,{
      fullname,
      email,
      phoneNumber,
      bio,
      skills: skillsArray
    });
    if(!user){
      throw new Error("User not found.")
    }
    return res.status(200).json({
      success:true,
      message:"Profile updated successfully.",
      data:user
    })
  } catch (error) {
    console.error(error)
   return res.json({
      status_code: 400,
      success: false,
      message: error.message,
    });
  }
}