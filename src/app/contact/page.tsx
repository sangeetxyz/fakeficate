import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poiret_One } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poiret_one = Poiret_One({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* navbar */}
        <Navbar />
        {/* hero */}
        <div className="relative h-[500px] w-full">
          <Image
            src={"/contact.png"}
            width={2000}
            height={1000}
            alt="about"
            className="h-full object-cover"
          />
          <div className="absolute top-0 h-full w-full bg-black opacity-70"></div>
          <div
            className={cn(
              poiret_one.className,
              "absolute top-0 flex h-full w-full items-center justify-center text-center text-6xl font-bold",
            )}
          >
            Get In Touch
          </div>
        </div>
        {/* body */}
        <div className="flex w-full items-center justify-center p-4 text-zinc-200">
          <div className="my-8 flex w-full max-w-3xl flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">Contact Us</div>
              <div>
                We value your feedback and are here to assist you. Please dont
                hesitate to reach out to us if you have any questions, concerns,
                or suggestions. You can contact us using the following methods:
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-3xl font-bold capitalize">Email: </div>
              <div className="text-lg">@ - help@fakeficate.vercel.app</div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-3xl font-bold capitalize">
                Mailing Address: Fakeficate
              </div>
              <div className="text-lg">
                <div>1/2 Pitolpur Lane </div>
                <div>Sonupara, West Bengal, 700786</div>
                <div>India</div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-3xl font-bold capitalize">
                Business Hours:
              </div>
              <div className="text-lg">
                <div>Monday - Friday: 10:00AM - 6:00PM</div>
                <div>Saturday - Sunday: Closed</div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-3xl font-bold capitalize">Social Media:</div>
              <div className="text-lg">
                <div>X - @fakeficate</div>
                <div>Facebook - @fakeficate</div>
                <div>Instagram - @fakeficate</div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                We strive to respond to all inquiries promptly, usually within
                24-48 hours during business days. Your satisfaction is important
                to us, and we appreciate your interest in [Your WebApp Name].
                Thank you for using our services.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
