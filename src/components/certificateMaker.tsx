"use client";

import React, { useEffect, useRef, useState } from "react";
import { CertificateMakerProps } from "@/utils/types/types";
import QRCode from "react-qr-code";
import { Great_Vibes, Merriweather } from "next/font/google";
import { cn } from "@/lib/utils";
import { getRandomNamePair, uploadToFirebase } from "@/utils/helpers/functions";
import { namePairs } from "@/utils/helpers/data";

const greate_vibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const merri_weather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
});
const CertificateMaker: React.FC<CertificateMakerProps> = (props) => {
  let exportComponentAsPNG: any;
  if (typeof window !== "undefined") {
    exportComponentAsPNG =
      require("react-component-export-image").exportComponentAsPNG;
  }
  const [qrLink, setQrLink] = useState("");
  const [fakeNames, setFakeNames] = useState<{ name1: string; name2: string }>({
    name1: "null",
    name2: "null",
  });
  const [secretCode, setSecretCode] = useState("");
  const certificateRef = useRef<null | HTMLDivElement>(null);
  const downloadCertificate = async () => {
    exportComponentAsPNG(certificateRef, { fileName: "certificate" });
    const now: Date = new Date();

    uploadToFirebase(
      {
        name: props.name,
        mode: props.mode,
        reason: props.reason,
        sex: props.sex,
        date: props.date,
        role1: props.role1,
        role2: props.role2,
        discountCode: props.discountCode,
        createdAt: now,
      },
      secretCode,
    );
  };
  function generateRandomString(length: number) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz"; // Characters to use in the random string
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  useEffect(() => {
    const secretKey = generateRandomString(20);
    setQrLink(process.env.NEXT_PUBLIC_URL + "/verify" + secretKey);
    setSecretCode(secretKey);
  }, [props.reason, props.date, props.name, props.sex, props.mode]);

  useEffect(() => {
    if (props.canDownload === true) {
      downloadCertificate();
    }
  }, [props.canDownload]);

  useEffect(() => {
    setFakeNames(getRandomNamePair(namePairs));
  }, [props]);

  return (
    <div
      className="relative w-[2000px] shrink-0 text-[#555553]"
      ref={certificateRef}
    >
      <img
        src={
          props.template === "classic"
            ? "./temp1.png"
            : props.template === "banana"
            ? "./temp2.png"
            : props.template === "marbel"
            ? "./temp3.png"
            : props.template === "pesta"
            ? "./temp4.png"
            : props.template === "vintage"
            ? "./temp5.png"
            : "./temp1.png"
        }
        alt="certificate"
        className="w-[2000px] object-contain"
      />

      <div className="absolute top-[29%] flex w-full justify-center">
        <div
          className={cn(
            merri_weather.className,
            "font-mer text-3xl font-extrabold uppercase tracking-widest text-[#555553]",
          )}
        >
          {`of ${props.mode}`}
        </div>
      </div>
      <div className="absolute top-[41%] flex w-full justify-center">
        <div
          className={cn(
            merri_weather.className,
            "text-3xl font-extrabold uppercase tracking-widest text-[#555553]",
          )}
        >
          proudly present to
        </div>
      </div>
      <div
        className={cn(
          greate_vibes.className,
          "absolute top-[42.5%] w-full text-center text-[170px] capitalize text-[#55553]",
        )}
      >
        {props.name.toLowerCase()}
      </div>
      <div className="absolute top-[60%] flex w-full justify-center">
        <div
          className={cn(
            merri_weather.className,
            "font-mer w-[1100px] text-center text-3xl font-bold italic text-[#434341]",
          )}
        >
          {`This award is given to ${props.sex} for ${props.reason}.`}
        </div>
      </div>
      <div className="absolute top-[67%] flex w-full justify-center">
        <div
          className={cn(
            merri_weather.className,
            "text-3xl font-bold italic text-[#555553]",
          )}
        >
          {props.date?.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
      <div className="absolute top-[75.7%] flex w-full justify-center">
        <QRCode
          size={135}
          style={{}}
          fgColor="#555553"
          value={qrLink}
          // viewBox={`0 0 256 256`}
        />
      </div>
      <div
        className={cn(
          merri_weather.className,
          "absolute top-[81%] flex w-full justify-between px-24 text-2xl font-bold text-zinc-800",
        )}
      >
        <div className="flex w-full flex-col items-center justify-center">
          <div className="capitalize">{fakeNames.name1}</div>
          <div className="capitalize">{props.role1}</div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="capitalize">{fakeNames.name2}</div>
          <div className="capitalize">{props.role2}</div>
        </div>
      </div>
    </div>
  );
};

export default CertificateMaker;
