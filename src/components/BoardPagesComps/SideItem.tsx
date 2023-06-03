import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Button } from "../Button";
import Menu from "../Menu";
import MenuSideItem from "./MenuSideItem";
import useComponentVisible from "../../hooks/useComponentVisible";
type SideItemProps = {
  title: string;
  color: string | undefined;
  selected: boolean;
};
export default function SideItem(props: SideItemProps) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <div ref={ref} className="group flex items-center cursor-pointer">
      <div
        className={`w-[20px] h-[20px] rounded-[4px] ml-2 ${
          props.color !== undefined && `bg-[${props.color}]`
        }`}
      ></div>
      <div
        className={`w-full flex justify-between items-center ${
          props.selected && "bg-[#E9F9FF]"
        } rounded-[4px] pr-2 py-1`}
      >
        <span className="font-[500] text-[16px] text-[#1E1E1E]">
          {props.title}
        </span>
        <Button
          onClick={() => setIsComponentVisible(!isComponentVisible)}
          className={`[&>*]:stroke-[#323232] ${
            !isComponentVisible && "hidden"
          } group-hover:block ml-1  `}
        >
          <BiDotsHorizontalRounded />
          {isComponentVisible && (
            <Menu>
              <MenuSideItem />
            </Menu>
          )}
        </Button>
      </div>
    </div>
  );
}
