import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
        if (!user) {
            throw new Error("Incorrect Email or password");
          }
    } catch (error) {
        
    }
}
