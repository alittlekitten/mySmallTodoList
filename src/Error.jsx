import "./Error.css";
import React from "react";

const Error = ({ toast, toastOn }) => {
  console.log(toast);
  return <div className={toastOn ? "error on" : "error"}>{toast}</div>;
};

export default Error;
