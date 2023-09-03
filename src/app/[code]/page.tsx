"use client";
import { db } from "@/utils/firebase/fire";
import { DocumentSnapshot, doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LuShieldAlert } from "react-icons/lu";
const Page = ({ params }: { params: { code: string } }) => {
  const [data, setData] = useState<DocumentSnapshot | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    const docRef = doc(db, "codes", params.code);
    const docSnap = await getDoc(docRef);
    setData(docSnap);
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return !data?.exists() && isLoading ? (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-100">
      <div className="text-xl capitalize">checking certificate</div>
    </div>
  ) : !data?.exists() && !isLoading ? (
    <div className="min-h-screen bg-zinc-950 font-mono text-zinc-100">
      <div className="flex justify-center py-10">
        <LuShieldAlert size={400} color="red" />
      </div>
      <div className="text-center text-5xl">Fake Certificate!</div>
      <div className="my-10 flex flex-col">
        <div className="text-center text-xl">{`Name: unknown`}</div>
        <div className="text-center text-xl">{`Pronounce: unknown`}</div>
        <div className="text-center text-xl">{`Achievement: unknown`}</div>
        <div className="text-center text-xl">{`Date: unknown`}</div>
      </div>
      <div className="text-center text-5xl">Thank you!</div>
    </div>
  ) : data?.exists() ? (
    <div className="min-h-screen bg-zinc-950 font-mono text-zinc-100">
      <div className="flex justify-center py-10">
        <MdOutlineVerifiedUser size={400} color="#00F700" />
      </div>
      <div className="text-center text-5xl">Certificate Verified!</div>
      <div className="my-10 flex flex-col">
        <div className="text-center text-xl">{`Name: ${data.data()
          ?.name}`}</div>
        <div className="text-center text-xl">{`Pronounce: ${data.data()
          ?.sex}`}</div>
        <div className="text-center text-xl">{`Achievement: ${data.data()
          ?.for}`}</div>
        <div className="text-center text-xl">{`Date: ${data
          .data()
          ?.date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}`}</div>
      </div>
      <div className="text-center text-5xl">Thank you!</div>
    </div>
  ) : (
    <></>
  );
};

export default Page;
