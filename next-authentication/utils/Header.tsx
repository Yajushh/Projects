import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface headerLabel {
  label: string;
}

export const Header = ({ label }: headerLabel) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4">
      <div className={cn("font-semibold text-3xl", font.className)}>
        🔒Signin
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
