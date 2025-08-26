import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { LogIn } from "lucide-react";
import FileUpload from "@/components/ui/FileUpload";

export default async function Home() {
  const { userId } = await auth();
  // !! means convert to bool if truthy (not null)
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-radial from-teal-100 to-rose-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="text-5xl font-semibold">ChatPDF</h1>
            <UserButton />
          </div>

          <div className="flex mt-2">
            {isAuth &&
              <Button>Go to Chats →</Button>}
          </div>

          <p className="max-w-xl mt-2 text-lg text-slate-500">Join many users all around the world to understand and answer questions in the form of PDF inputs with AI!</p>
          <div className="w-full mt-4">
            {isAuth ? (<FileUpload />) : (<Link href="/sign-in">
              <Button>Login to get started! <LogIn className="w-4 h-4 ml-2" /></Button>
            </Link>)}
          </div>
        </div>
      </div>
    </div>
  );
}
