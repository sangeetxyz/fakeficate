"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Staatliches } from "next/font/google";
import { RiMenu4Fill } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import clipboardCopy from "clipboard-copy";
import { toast } from "react-toastify";
const staatliches = Staatliches({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

const Navbar = () => {
  const router = useRouter();
  const handleShare = () => {
    if (navigator.share) {
      // Define the data you want to share
      const shareData = {
        title: "Fakeficate",
        text: "Check out this awesome website!",
        url: "https://fakeficate.vercel.app/",
      };

      navigator.share(shareData);
      // .then(() => {
      //   console.log('Shared successfully');
      // })
      // .catch((error) => {
      //   console.error('Error sharing:', error);
      // });
    } else {
      //   alert('Sharing is not supported in your browser.');
      clipboardCopy("https://fakeficate.vercel.app/")
        .then(() => {
          toast.success("Link copied to Clipboard!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            theme: "dark",
          });
        })
        .catch((error) => {
          toast.error("Something went wrong!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            pauseOnFocusLoss: false,
            theme: "dark",
          });
        });
    }
  };
  return (
    <div className="sticky top-0 z-10 flex h-16 w-full justify-center bg-zinc-900 text-zinc-100">
      <div className="flex w-full max-w-5xl items-center justify-between px-6">
        <div
          onClick={() => {
            router.push("/");
          }}
          className={cn(
            staatliches.className,
            "mt-1.5 cursor-pointer font-mono text-4xl capitalize",
          )}
        >
          fakeficate
        </div>
        <div className="hidden space-x-6 text-sm uppercase md:flex">
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
          <div onClick={handleShare} className="cursor-pointer">
            share
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger className="cursor-pointer" asChild>
              <RiMenu4Fill size={30} />
            </SheetTrigger>
            <SheetContent className="bg-zinc-900">
              <SheetHeader>
                <SheetTitle className="text-zinc-100">Explore Menu</SheetTitle>
                <SheetDescription className="text-zinc-200">
                  Access to more options of Fakeficate and have a great day!
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col items-center space-y-4 py-4 uppercase text-zinc-100">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/create");
                  }}
                >
                  create
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  about
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  contact
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    router.push("/privacy");
                  }}
                >
                  privacy
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    // router.push("/privacy");
                  }}
                >
                  share
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" variant="secondary" size="sm">
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        {/* <div
                  className="flex cursor-pointer items-center"
                  onClick={async () => {
                    await clipboardCopy("https://fakeficate.vercel.app/");
                    toast.success("Link copied to Clipboard!", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      pauseOnFocusLoss: false,
                      theme: "dark",
                    });
                  }}
                >
                  <FiShare2 size={24} />
                </div> */}
      </div>
    </div>
  );
};

export default Navbar;
