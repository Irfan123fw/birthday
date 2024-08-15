"use client"
import { Boxes } from "@/components/ui/background-boxes";
import { AnimatedModalDemo } from "./components/modal";
import { useEffect } from "react";

export default function Home() {

  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Klik Dibawah ini yaaa 
      </h1> */}
      <AnimatedModalDemo/>
    </div>
  );
}
