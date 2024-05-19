import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const OAuth = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button variant="outline" className="w-full" size="lg">
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button variant="outline" className="w-full" size="lg">
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
