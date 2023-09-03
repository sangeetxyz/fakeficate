import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-mon overflow-y-auto scrollbar-none selection:bg-yellow-500 selection:text-zinc-800">
      {children}
      <ToastContainer />
    </div>
  );
};

export default Container;
