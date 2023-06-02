import React from "react";
import { Children } from "../types/Children";
type Variant = {
  variant?: "default" | "blue";
};
export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Variant
> = (props) => {
  return (
    <button
      className={
        props.variant === "blue"
          ? "p-[10px] bg-[#208D8E] rounded-[6px] text-white font-[700] text-[14px]"
          : ""
      }
      {...props}
    >
      {props.children}
    </button>
  );
};
