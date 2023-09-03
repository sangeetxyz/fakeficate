import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-mon">
      {children}
      <ToastContainer />
    </div>
  );
};

export default Container;
