"use client";

import React, { useEffect, useRef, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase/fire";
import { CertificateMakerProps } from "@/utils/types/types";
import QRCode from "react-qr-code";

const CertificateMaker: React.FC<CertificateMakerProps> = (props) => {
  let exportComponentAsPNG: any;
  if (typeof window !== "undefined") {
    exportComponentAsPNG =
      require("react-component-export-image").exportComponentAsPNG;
  }
  const [qrLink, setQrLink] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const certificateRef = useRef<null | HTMLDivElement>(null);
  const downloadCertificate = async () => {
    exportComponentAsPNG(certificateRef);
    const data = {
      name: props.name,
      mode: props.mode,
      for: props.for,
      sex: props.sex,
      date: props.date,
    };
    await setDoc(doc(db, "codes", secretCode), data);
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
    setQrLink(process.env.NEXT_PUBLIC_URL + secretKey);
    setSecretCode(secretKey);
  }, [props.for, props.date, props.name, props.sex, props.mode]);

  useEffect(() => {
    if (props.canDownload === true) {
      downloadCertificate();
    }
  }, [props.canDownload]);

  return (
    <div
      className="relative w-[2000px] shrink-0 text-[#555553]"
      ref={certificateRef}
    >
      <img
        src="../cer6.png"
        alt="certificate"
        className="w-[2000px] object-contain"
      />
      <div className="absolute top-[29%] flex w-full justify-center">
        <div className="font-mer text-3xl font-extrabold uppercase tracking-widest text-[#555553]">
          {`of ${props.mode}`}
        </div>
      </div>
      <div className="absolute top-[41%] flex w-full justify-center">
        <div className="font-mer text-3xl font-extrabold uppercase tracking-widest text-[#555553]">
          proudly present to
        </div>
      </div>
      <div className="absolute top-[42.5%] w-full text-center font-gre text-[170px] capitalize text-[#55553]">
        {props.name}
      </div>
      <div className="absolute top-[60%] flex w-full justify-center">
        <div className="w-[1100px] text-center font-mer text-[30px] font-bold italic text-[#434341]">
          {`This award is given to ${props.sex} for ${props.for}`}
        </div>
      </div>
      <div className="absolute top-[67%] flex w-full justify-center">
        <div className="font-mer text-[30px] font-bold uppercase italic text-[#555553]">
          {props.date}
        </div>
      </div>
      <div className="absolute top-[75.4%] flex w-full justify-center">
        <QRCode
          size={135}
          style={{}}
          fgColor="#555553"
          value={qrLink}
          // viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default CertificateMaker;
