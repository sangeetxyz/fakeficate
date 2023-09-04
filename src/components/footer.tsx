"use client";

import { Staatliches } from "next/font/google";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
const staatliches = Staatliches({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center bg-zinc-900 text-zinc-100">
      <div
        onClick={() => {
          router.push("/");
        }}
        className={cn(
          staatliches.className,
          "mt-1.5 cursor-pointer py-8 font-mono text-5xl capitalize",
        )}
      >
        fakeficate
      </div>
      {/* <div className="flex space-x-4 text-sm uppercase">
            <div
              onClick={() => {
                router.push("/create");
              }}
              className="cursor-pointer"
            >
              create
            </div>
            <div
              onClick={() => {
                router.push("/about");
              }}
              className="cursor-pointer"
            >
              about
            </div>
            <div
              onClick={() => {
                router.push("/contact");
              }}
              className="cursor-pointer"
            >
              contact
            </div>
            <div
              onClick={() => {
                router.push("/privacy");
              }}
              className="cursor-pointer"
            >
              privacy
            </div>
            <div
              onClick={() => {
                // router.push("/s");
              }}
              className="cursor-pointer"
            >
              share
            </div>
          </div> */}
      <div className="mb-8 flex">
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/privacy");
          }}
        >
          Privacy Policy
        </div>
        <div className="mx-2">|</div>
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/about");
          }}
        >
          About Us
        </div>
        <div className="mx-2">|</div>
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/contact");
          }}
        >
          Contact Us
        </div>
      </div>
      <div className="text-sm">
        Copyright ©2023 Fakeficate. All rights reserved.
      </div>
      <div className="mb-8 text-sm">For Educational Purposes Only</div>
    </div>
  );
};

export default Footer;
