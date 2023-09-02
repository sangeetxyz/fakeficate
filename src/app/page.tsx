"use client";

import { useState, useEffect } from "react";
import CertificateMaker from "../components/certificateMaker";
import Marquee from "react-fast-marquee";
import { DatePicker, Select } from "antd";
import { toast } from "react-toastify";
import Container from "@/components/container";
export default function Home() {
  const [canDownload, setCanDownload] = useState(false);
  const [name, setName] = useState("");
  const [mode, setMode] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [sex, setSex] = useState("");
  useEffect(() => {
    setCanDownload(false);
  }, []);
  return (
    <>
      <Container>
        <main className="relative min-h-screen text-zinc-100">
          <div className="ml-[10000px] h-screen overflow-hidden">
            <CertificateMaker
              name={name}
              mode={mode}
              for={text}
              date={date}
              sex={sex}
              canDownload={canDownload}
            />
          </div>
          <div className="absolute top-0 min-h-screen w-full bg-slate-950 font-mono">
            <div className="flex h-16 items-center bg-slate-800">
              <div className="ml-5 text-2xl">meaw!</div>
            </div>
            <div className="bg-slate-900 text-center text-[16vw] uppercase">
              Fakeficate
            </div>
            <Marquee
              style={{
                fontSize: "26px",
                backgroundColor: "#1E293B",
              }}
            >
              Fakeficate provides you a QR code protected certificate to use
              anywhere! Get your certificate now!
            </Marquee>
            {/* <div className="my-2 text-center text-[4vw] capitalize">
            get a certificate like this now!
          </div>
          <div className="relative overflow-x-hidden px-4 backdrop-blur-sm sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-[32rem]">
            <img
              src="../component.png"
              alt=""
              className="rounded-lg object-cover"
            />
            <div className="bg-slate-5 absolute top-0 h-full max-w-6xl backdrop-blur-[1px] text-transparent backdrop-brightness-50">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <div className="bg-slate-5 absolute bottom-0 right-0 h-full max-w-3xl backdrop-blur-sm"></div>
          </div>
          <div className="my-2 text-center text-[4vw] capitalize">
            Fully customizable!
          </div> */}
            <div className="mt-8 flex w-full flex-col items-center space-y-4 px-4">
              <div className="w-full max-w-lg">
                <div className="text-xl capitalize">name</div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Select"
                  className="h-8 w-full rounded-lg px-3 font-sans text-black placeholder:text-sm placeholder:text-zinc-800 focus:outline-none"
                />
              </div>
              <div className="w-full max-w-lg">
                <div className="text-xl capitalize">mode</div>
                <Select
                  defaultValue="Select"
                  style={{ width: "100%" }}
                  onChange={(value) => {
                    setMode(value);
                  }}
                  size="middle"
                  options={[
                    {
                      value: "Completion",
                      label: "Completion",
                    },
                    {
                      value: "appreciation",
                      label: "Appreciation",
                    },
                    {
                      value: "achievement",
                      label: "Achievement",
                    },
                    {
                      value: "excellence",
                      label: "Excellence",
                    },
                    {
                      value: "participation",
                      label: "Participation",
                    },
                  ]}
                />
              </div>
              <div className="w-full max-w-lg">
                <div className="text-xl capitalize">for</div>
                <input
                  type="text"
                  value={text}
                  maxLength={90}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Select"
                  className="h-8 w-full rounded-lg px-3 font-sans text-black placeholder:text-sm placeholder:text-zinc-800 focus:outline-none"
                />
              </div>
              <div className="w-full max-w-lg">
                <div className="text-xl capitalize">sex</div>
                <Select
                  defaultValue="Select"
                  style={{ width: "100%" }}
                  onChange={(value) => {
                    setSex(value);
                  }}
                  size="middle"
                  options={[
                    {
                      value: "him",
                      label: "Male",
                    },
                    {
                      value: "her",
                      label: "Female",
                    },
                    {
                      value: "this braindead",
                      label: "Email",
                    },
                    {
                      value: "hm",
                      label: "LGBTQ+",
                      disabled: true,
                    },
                  ]}
                />
              </div>
              <div className="w-full max-w-lg">
                <div className="text-xl capitalize">date</div>
                <DatePicker
                  placeholder="Select"
                  className="text-black"
                  onChange={(value) => {
                    setDate(value!.format("DD MMMM YYYY"));
                  }}
                  size="middle"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <div
              onClick={() => {
                if (name !== "") {
                  if (mode !== "") {
                    if (text !== "") {
                      if (sex !== "") {
                        if (date !== "") {
                          setCanDownload(true);
                          setTimeout(() => {
                            setCanDownload(false);
                          }, 1000);
                        } else {
                          toast.error("Enter a valid date!", {
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
                        }
                      } else {
                        toast.error("Enter a valid sex!", {
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
                      }
                    } else {
                      toast.error("Enter a valid for!", {
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
                    }
                  } else {
                    toast.error("Enter a valid mode!", {
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
                  }
                } else {
                  toast.error("Enter a valid name!", {
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
                }
              }}
              className="my-10 flex w-full justify-center px-4"
            >
              <div className="flex h-8 w-full max-w-lg cursor-pointer items-center justify-center rounded-md bg-zinc-100 text-center text-lg capitalize text-zinc-900">
                download
              </div>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
