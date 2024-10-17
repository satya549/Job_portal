import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/contant";
import { toast } from "sonner";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]:e.target.value });
  };
  const changefileHandler = (e) => {
    setInput({ ...input, file: e.target.file?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname)
    formData.append("email", input.email)
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("password", input.password)
    formData.append("role", input.role)
    if (input.file) {
      formData.append("file", input.file)
    }
     try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      })
      if (res.data.success) {
        navigate("/login")
        toast.success(res.data.message);
      }
     } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);

     }
  };
  return (
    <div>
      <Navbar />
      <div className="bg-white fixed top-16 left-0 w-full z-10 flex justify-center">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Full Name"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="email"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="Phone No"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="text"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changefileHandler}
                className="cursor-pointer" />
            </div>
          </div>
          <Button type="submit" className="w-full my-4"> Signup</Button>
          <span className="text-sm"> Already have an account?{" "} <Link to="/login" className="text-blue-600"> Login </Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
