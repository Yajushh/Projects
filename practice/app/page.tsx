import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col h-full justify-center items-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200  to-gray-800">
      <Button variant="link">
        <Link href="/auth/register"> Authentication🔐</Link>
      </Button>
    </main>
  );
}
