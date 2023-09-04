"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {Poiret_One } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poiret_one = Poiret_One({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

const Privacy = () => {
  return (
    <div>
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* navbar */}
        <Navbar />
        {/* hero */}
        <div className="relative h-[500px] w-full">
          <Image
            src={"/privacy.png"}
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
            Privacy Policy
          </div>
        </div>
        {/* body */}
        <div className="flex w-full items-center justify-center p-4 text-zinc-200">
          <div className="my-8 flex w-full max-w-3xl flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                1. introduction
              </div>
              <div>
                Welcome to Fakeficate Privacy Policy. At Fakeficate, we are
                committed to safeguarding your privacy and ensuring the security
                of your personal information. This Privacy Policy outlines how
                we collect, use, and protect your data when you use our web
                application. By using our services, you consent to the practices
                described in this Privacy Policy.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                2. Information We Collect
              </div>
              <div>
                <span className="text-lg font-bold">
                  Personal Information:{" "}
                </span>
                When you make a payment for a certificate, we collect payment
                details, including credit card information, to process your
                transaction securely. We do not store this payment information
                on our servers.
              </div>
              <div>
                <span className="text-lg font-bold">Payment Information: </span>
                We have simplified the certificate-making process, making it
                accessible to anyone. No design or technical skills are
                required. Just follow a few simple steps, and your certificate
                will be ready in minutes.
              </div>
              <div>
                <span className="text-lg font-bold">Certificate Data: </span>
                We generate and store the certificate you create using our web
                application, which may include information such as names, dates,
                and QR codes. This data is used to provide you with your
                customized certificate and for verification purposes.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                3. How We Use Your Information
              </div>
              <div>
                <span className="text-lg font-bold">
                  Certificate Generation:{" "}
                </span>
                We use the information you provide to create your customized
                certificates as per your specifications.
              </div>
              <div>
                <span className="text-lg font-bold">
                  Transaction Processing:
                </span>
                Your payment information is used solely for processing
                transactions related to certificate purchases.
              </div>
              <div>
                <span className="text-lg font-bold">
                  Certificate Verification:
                </span>
                We use QR code technology to provide a certificate verification
                system. When the QR code on a certificate is scanned, it will
                redirect to our platform to verify the authenticity of
                certificates.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                4. Data Security
              </div>
              <div>
                We take data security seriously. We employ industry-standard
                security measures to protect your information from unauthorized
                access, disclosure, alteration, or destruction. This includes
                encryption, regular security audits, and access controls.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                5. Sharing Your Information
              </div>
              <div>
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your data in the following
                circumstances:
              </div>
              <div className="font-bold">
                - With trusted service providers who assist us in delivering our
                services.
              </div>
              <div className="font-bold">
                - To comply with legal requirements or respond to lawful
                requests from government authorities.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                6. Data Retention
              </div>
              <div>
                We retain your certificate data for a limited time, primarily
                for verification purposes. We do not retain payment information
                after a transaction is completed.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                7. Your Choices and Rights
              </div>
              <div>
                As we do not require account creation, you have limited control
                over your data on our platform. If you have concerns about the
                data we hold, please contact us.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">
                8. Changes to Privacy Policy
              </div>
              <div>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the effective date will be
                updated accordingly.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-4xl font-bold capitalize">9. Contact Us</div>
              <div>
                If you have any questions or concerns regarding our Privacy
                Policy or data practices, please contact us at
                fakeficate.vercel.app/contact.
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                Fakeficate is committed to providing a secure and trustworthy
                experience for our users. We are dedicated to protecting your
                privacy and ensuring that our web application is used
                responsibly for educational purposes only.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
