import Image from "next/image";
import { cn } from "@/lib/utils";
import { Staatliches, Poiret_One } from "next/font/google";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const staatliches = Staatliches({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const poiret_one = Poiret_One({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* navbar */}
        <Navbar />
        {/* hero */}
        <div className="relative h-[500px] w-full">
          <Image
            src={"/about.png"}
            width={2000}
            height={1000}
            alt="about"
            className="h-full object-cover"
          />
          <div className="absolute top-0 h-full w-full bg-black opacity-70"></div>
          <div
            className={cn(
              poiret_one.className,
              "absolute top-0 mx-8 flex h-full w-full items-center justify-center text-center text-6xl font-bold",
            )}
          >
            Team of Fakeficate
          </div>
        </div>
        {/* body */}
        <div className="flex w-full items-center justify-center p-4 text-zinc-200">
          <div className="my-8 flex w-full max-w-3xl flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">who we are</div>
              <div>
                At fakeficate, we empower individuals to create customized
                certificates tailored to their specific needs. Our user-friendly
                web application is designed to make the certificate-making
                process quick and effortless.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">our mission</div>
              <div>
                Our mission is to provide a platform where users can easily
                generate modified certificates to suit their unique
                requirements. We understand that sometimes, people need
                certificates that are not meant to deceive but simply to serve a
                specific purpose.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">what we offer</div>
              <div>
                <span className="text-lg font-bold">
                  Customizable Certificates:{" "}
                </span>
                Customizable Certificates: Our web app allows users to create
                certificates with ease, offering a wide range of templates and
                customization options. You can design certificates for personal
                achievements, training courses, or any other purpose.
              </div>
              <div>
                <span className="text-lg font-bold">
                  Effortless Certificate Creation:{" "}
                </span>
                We have simplified the certificate-making process, making it
                accessible to anyone. No design or technical skills are
                required. Just follow a few simple steps, and your certificate
                will be ready in minutes.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                A Note on Authenticity
              </div>
              <div>
                It is important to emphasize that the certificates generated
                through our platform are intended for personal use or specific
                non-official purposes only. These certificates are not genuine
                and should not be used to deceive or commit fraud. We do not
                endorse any form of misrepresentation.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                Ease of Submission
              </div>
              <div>
                While our platform makes it easy to create certificates, it is
                crucial to remember that using fake certificates on official or
                legal platforms can have severe consequences. We strongly
                discourage any illegal activities related to our service.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                Certificates: More Than Just Paper
              </div>
              <div>
                Certificates, whether real or generated through our platform,
                represent achievements and milestones in an individual life.
                While we offer a convenient way to create certificates, we
                encourage our users to value the real accomplishments that these
                certificates may symbolize. Authenticity and honesty remain
                essential values in all aspects of life.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                At Fakeficate, we aim to provide a useful tool for those seeking
                customized certificates for specific personal or non-official
                purposes. We promote responsible use of our platform and
                encourage our users to uphold the highest standards of ethics
                and integrity in all their endeavors.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
