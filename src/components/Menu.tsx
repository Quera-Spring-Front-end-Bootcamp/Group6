import React from "react";
import { Children } from "../types/Children";

const Menu: React.FC<React.AllHTMLAttributes<HTMLUListElement> & Children> = (
  props
) => {
  return (
    <ul
      {...props}
      className="flex flex-col gap-2 p-2 absolute bg-white rounded-[8px] shadow-[0px_4px_16px_rgba(0,0,0,0.16)] font-[400] text-[14px] text-[#1E1E1E] [&>*]:stroke-[#323232] [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:cursor-pointer cursor-default  "
    >
      {props.children}
    </ul>
  );
};
export default Menu;
