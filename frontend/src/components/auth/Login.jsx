import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup } from "../ui/radio-group";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white fixed top-16 left-0 w-full z-10 flex justify-center">
        <form action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="email" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="text" placeholder="password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="student" className="cursor-pointer"/>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input type="radio" name="role" value="recruiter" className="cursor-pointer"/>
              <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full my-4">Login</Button>
          <span className="text-sm">Do not have an account? <Link to="/signup" className="text-blue-600">Signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
