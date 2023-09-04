"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Container from "@/components/container";
import { FiShare2 } from "react-icons/fi";
import { toast } from "react-toastify";
import clipboardCopy from "clipboard-copy";
import Image from "next/image";
import demo1 from "../../../public/demo1.png";
import demo2 from "../../../public/demo2.png";
import demo3 from "../../../public/demo3.png";
import demo4 from "../../../public/demo4.png";
import demo5 from "../../../public/demo5.png";
import { useRouter } from "next/navigation";
import CertificateMaker from "@/components/certificateMaker";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Create = () => {
  const [canDownload, setCanDownload] = useState(false);
  const [template, setTemplate] = useState("classic");
  const [name, setName] = useState("");
  const [mode, setMode] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState<Date>();
  const [sex, setSex] = useState("him/her");
  const [role1, setRole1] = useState("");
  const [role2, setRole2] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  useEffect(() => {
    setCanDownload(false);
  }, []);

  return (
    <Container>
      <main className="relative min-h-screen">
        <div className="ml-[10000px] h-screen overflow-auto scrollbar-none ">
          <CertificateMaker
            name={name}
            mode={mode}
            reason={reason}
            date={date!}
            sex={sex}
            role1={role1}
            role2={role2}
            discountCode={discountCode}
            template={template}
            canDownload={canDownload}
          />
        </div>
        <div className="hidde absolute top-0 min-h-screen w-full justify-center bg-zinc-950">
          {/* navbar */}
          <Navbar />
          {/* body */}
          <div className="flex w-full justify-center">
            <div className="flex w-full max-w-5xl flex-col items-center px-6">
              <div className="flex flex-col items-start rounded-lg pt-4">
                <div className="text-xl text-zinc-100">Choose Template</div>
                <Tabs
                  defaultValue="classic"
                  className="mt-1 flex flex-col justify-center"
                  onValueChange={setTemplate}
                >
                  <TabsList>
                    <TabsTrigger value="classic">Classic</TabsTrigger>
                    <TabsTrigger value="banana">Banana</TabsTrigger>
                    <TabsTrigger value="marble">Marbel</TabsTrigger>
                    <TabsTrigger value="pesta">Pesta</TabsTrigger>
                    <TabsTrigger value="vintage">Vintage</TabsTrigger>
                  </TabsList>
                  <TabsContent value="classic">
                    <div className="flex justify-center">
                      {/* <img src="./demo1.png" alt="" className="rounded" /> */}
                      <Image
                        src={demo1.src}
                        alt="certificate"
                        height={1}
                        width={900}
                        quality={1}
                        className="w-full rounded"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="banana">
                    <div className="flex justify-center">
                      <Image
                        src={demo2.src}
                        alt="certificate"
                        height={1}
                        width={900}
                        quality={1}
                        className="w-full rounded"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="marble">
                    <div className="flex justify-center">
                      <Image
                        src={demo3.src}
                        alt="certificate"
                        height={1}
                        width={900}
                        quality={1}
                        className="w-full rounded"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="pesta">
                    <div className="flex justify-center">
                      <Image
                        src={demo4.src}
                        alt="certificate"
                        height={1}
                        width={900}
                        quality={1}
                        className="w-full rounded"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="vintage">
                    <div className="flex justify-center">
                      <Image
                        src={demo5.src}
                        alt="certificate"
                        height={1}
                        width={900}
                        quality={1}
                        className="w-full rounded"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="mt-8 text-xl text-zinc-100">Enter Name</div>
                <Input
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  placeholder="Name"
                  className="mt-1"
                />
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-zinc-100"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it capitalized?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It is capitaliazed no matter what you type.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it a full name?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It needs a complete full name to look good on the
                      certificate.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-8 text-xl text-zinc-100">Select Mode</div>
                <Select
                  onValueChange={(value) => {
                    setMode(value);
                  }}
                >
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select a mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Modes</SelectLabel>
                      <SelectItem value="completion">Completion</SelectItem>
                      <SelectItem value="achievement">Achievement</SelectItem>
                      <SelectItem value="appreciation">Appreciation</SelectItem>
                      <SelectItem value="excellence">Excellence</SelectItem>
                      <SelectItem value="participation">
                        Participation
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-zinc-100"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is this?</AccordionTrigger>
                    <AccordionContent>
                      It will be prined on the bellow of CERTIFICATE as the
                      template.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Need of this?</AccordionTrigger>
                    <AccordionContent>
                      It is important to understand how it reflects the meaning
                      of the certificate. You should use appropreate mode as per
                      your need.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Example of this?</AccordionTrigger>
                    <AccordionContent>
                      If you complete a task then you can set the mode to
                      COMPLETION or if you achieve some goal then you can set it
                      to ACHIEVEMENT.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-8 text-xl text-zinc-100">Select Sex</div>
                <Select
                  onValueChange={(value) => {
                    setSex(value);
                  }}
                >
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sex</SelectLabel>
                      <SelectItem value="him">Male</SelectItem>
                      <SelectItem value="her">Female</SelectItem>
                      <SelectItem value="achievement" disabled>
                        LGBTQ+
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="mt-8 text-xl text-zinc-100">Enter Reason</div>
                <Input
                  type="text"
                  maxLength={90}
                  onChange={(event) => {
                    setReason(event.target.value);
                  }}
                  placeholder="Reason"
                  className="mt-1"
                />
                {reason && (
                  <div className="mt-1 w-full text-zinc-100">
                    <div className="w-full text-center">
                      {`This award is given to ${sex} for ${reason}.`}
                    </div>
                  </div>
                )}
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-zinc-100"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is this?</AccordionTrigger>
                    <AccordionContent>
                      This is the reason why you are getting this certificate.
                      It is limited to maximum 90 charactors.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What to write?</AccordionTrigger>
                    <AccordionContent>
                      You have to write after, This award we give to him/her
                      for... in the certificate. The fullstop will be
                      automatically added in the end.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Example of this?</AccordionTrigger>
                    <AccordionContent>
                      attending a one day workshop of OpenAI API. We are really
                      proud of his contributions
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-8 text-xl text-zinc-100">Select Date</div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "mt-1 w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-zinc-100"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is this?</AccordionTrigger>
                    <AccordionContent>
                      It will be the which you want get the certificate on.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-8 text-xl text-zinc-100">Select Roles</div>
                <div className="flex w-full space-x-5">
                  <Select
                    onValueChange={(value) => {
                      setRole1(value);
                    }}
                  >
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select Role 1" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value="head of dept">
                          Head of Dept
                        </SelectItem>
                        <SelectItem value="head of event">
                          Head of Event
                        </SelectItem>
                        <SelectItem value="mentor">Mentor</SelectItem>
                        <SelectItem value="class teacher">
                          Class Teacher
                        </SelectItem>
                        <SelectItem value="principle">Principle</SelectItem>
                        <SelectItem value="executive director">
                          Executive Director
                        </SelectItem>
                        <SelectItem value="representative">
                          Representative
                        </SelectItem>
                        <SelectItem value="coordinator">Coordinator</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select
                    onValueChange={(value) => {
                      setRole2(value);
                    }}
                  >
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select Role 2" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value="head of dept">
                          Head of Dept
                        </SelectItem>
                        <SelectItem value="head of event">
                          Head of Event
                        </SelectItem>
                        <SelectItem value="mentor">Mentor</SelectItem>
                        <SelectItem value="class teacher">
                          Class Teacher
                        </SelectItem>
                        <SelectItem value="principle">Principle</SelectItem>
                        <SelectItem value="executive director">
                          Executive Director
                        </SelectItem>
                        <SelectItem value="representative">
                          Representative
                        </SelectItem>
                        <SelectItem value="coordinator">Coordinator</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-zinc-100"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is this?</AccordionTrigger>
                    <AccordionContent>
                      It will be the people in specific roles who will sign your
                      certificates.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What to select?</AccordionTrigger>
                    <AccordionContent>
                      Select two different roles for two different signs as per
                      your need.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* <div className="mt-8 text-xl text-zinc-100">
                  Discount Code (Optional)
                </div>
                <Input
                  type="text"
                  onChange={(event) => {
                    setDiscountCode(event.target.value);
                  }}
                  placeholder="Code"
                  className="mt-1"
                  disabled
                />
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-zinc-100"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is this?</AccordionTrigger>
                    <AccordionContent>
                      If you have any discount code then enter it here to get a
                      discount.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion> */}
                <Button
                  variant="secondary"
                  className="my-8 w-full"
                  onClick={(event) => {
                    event.preventDefault();
                    if (template.length > 0) {
                      if (name.length > 0) {
                        if (mode.length > 0) {
                          if (sex.length > 0 && sex !== "him/her") {
                            if (reason.length > 0) {
                              if (date) {
                                if (role1.length > 0) {
                                  if (role2.length > 0) {
                                    if (discountCode === "MEAW100") {
                                      setCanDownload(true);
                                      toast.success("Order accepted!", {
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
                                      setTimeout(() => {
                                        setCanDownload(false);
                                      }, 1000);
                                    } else {
                                      // handlePayment(
                                      //   "30",
                                      //   Razorpay,
                                      //   // "gandu singh",
                                      //   // "asjdha@gmail.com",
                                      //   // "+918787878787",
                                      // );
                                      setCanDownload(true);
                                      toast.success("Order accepted!", {
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
                                      setTimeout(() => {
                                        setCanDownload(false);
                                      }, 1000);
                                    }
                                  } else {
                                    toast.error("Enter a alid Role2!", {
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
                                  toast.error("Enter a valid Role1!", {
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
                              toast.error("Enter a valid Reason!", {
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
                            toast.error("Enter a valid Sex!", {
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
                          toast.error("Enter a valid Mode!", {
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
                        toast.error("Enter a valid Name!", {
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
                      toast.error("Enter a valid Template!", {
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

                    // console.log("name - " + name);
                    // console.log("template - " + template);
                    // console.log("mode - " + mode);
                    // console.log("sex - " + sex);
                    // console.log("date - " + date);
                    // console.log("reason - " + reason);
                    // console.log("role1 - " + role1);
                    // console.log("role2 - " + role2);
                  }}
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Create;
