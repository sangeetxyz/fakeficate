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
  console.log(data?.data()?.date);
  const originalDate = new Date(data?.data()?.date.toDate());
  const formattedDate = originalDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const [realDate, setRealDate] = useState("");
  useEffect(() => {
    getData();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    setRealDate(formattedDate);
  }, [data]);
  return !data?.exists() && isLoading ? (
    <div className="flex h-screen items-center justify-center bg-zinc-900 text-zinc-100">
      <div className="text-xl capitalize">checking certificate</div>
    </div>
  ) : !data?.exists() && !isLoading ? (
    <div className="min-h-screen bg-zinc-900 font-mono text-zinc-100">
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
    </div>
  ) : data?.exists() ? (
    <div className="flex h-screen flex-col justify-around bg-zinc-900 font-mono text-zinc-100">
      <div>
        <div className="flex justify-center py-10">
          <MdOutlineVerifiedUser size={200} color="#00F700" />
        </div>
        <div className="text-center text-4xl">Certificate Verified!</div>
        <div className="my-10 flex flex-col">
          <div className="text-center text-xl">{`Name: ${data.data()
            ?.name}`}</div>
          <div className="text-center text-xl">{`Pronounce: ${data.data()
            ?.sex}`}</div>
          <div className="text-center text-xl">{`Achievement: ${data.data()
            ?.for}`}</div>
          <div className="text-center text-xl">{`Date: ${realDate}`}</div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Page;
