"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poiret_One } from "next/font/google";
import { useRouter } from "next/navigation";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poiret_one = Poiret_One({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* navbar */}
        <Navbar />
        {/* hero */}
        <div className="relative h-[500px] w-full">
          <Image
            src={"/home.png"}
            width={2000}
            height={1000}
            alt="about"
            className="h-full object-cover"
          />
          <div className="absolute top-0 h-full w-full bg-black opacity-70"></div>
          <div
            className={cn(
              poiret_one.className,
              "absolute top-0 flex h-full w-full flex-col items-center justify-center space-y-4 text-center text-6xl font-bold capitalize",
            )}
          >
            <div>Create your own certificate</div>
            <div
              onClick={() => {
                router.push("/create");
              }}
              className="cursor-pointer rounded-full bg-gradient-to-t from-zinc-800 to-zinc-700 px-4 py-1 text-2xl font-bold capitalize hover:scale-105"
            >
              generate now
            </div>
          </div>
        </div>
        {/* body */}
        <div className="flex w-full items-center justify-center p-6 text-zinc-200">
          <div className="w-full max-w-5xl">
            <div className="font mt-6 text-center font-mono text-3xl">
              Multiple templates to choose from!
            </div>
            <Image
              src="./group.svg"
              width="1000"
              height="1000"
              alt="certificates"
            />
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </Container>
  );
}
