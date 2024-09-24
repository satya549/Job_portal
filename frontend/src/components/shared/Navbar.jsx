import {
  PopoverContent,
  PopoverTrigger,
  Popover,
} from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            SatyaJob<span className="text-[#f83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-mediam items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex gap-4 space-y-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">@Satya Developer</h4>
                  <p className="text-sn text-muted-foreground">
                    Lorem ipsum dolor sit consectetur.
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-gray-600">
              <div className="flex w-fit items-center gap-2 cursor-pointer">
                <Button variant="link">View Profile</Button>
              </div>
              <div className="flex w-fit items-center gap-2 cursor-pointer">
                <Button variant="link">Logout</Button>
              </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
