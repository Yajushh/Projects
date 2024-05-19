import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  return (
    <div className="flex w-full gap-x-3 justify-center items-center">
      <Button variant="outline" className="w-full">
        <FcGoogle className="h-5 w-5 " />
      </Button>
      <Button variant="outline" className="w-full">
        <FaGithub className="h-5 w-5 " />
      </Button>
    </div>
  );
};
