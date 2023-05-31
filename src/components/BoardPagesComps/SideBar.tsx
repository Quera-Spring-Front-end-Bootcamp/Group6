import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GoDiffAdded } from "react-icons/go";
import { BiExit } from "react-icons/bi";
import { Button } from "../Button";
import SideItems from "./SideItems";
import User from "../User/User";
export default function SideBar() {
  return (
    <div className="h-[calc(100%-55px)] flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="font-[600] text-[16px] ">ورک‌اسپیس‌ها</span>
          <div className="flex items-center gap-2 [&>*]:stroke-[#323232] ">
            <FiSearch />
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="relative h-[40px] bg-[#F6F7F9] rounded-[4px]">
          <input
            dir="rtl"
            placeholder="جستجو کنید"
            className=" h-full w-full outline-none bg-transparent pr-10 pl-3 placeholder:text-[#AAAAAA] placeholder:font-[500] placeholder:text-[12px]"
          />
          <div className="absolute top-[30%] right-3 [&>*]:storke-[#323232]">
            <FiSearch />
          </div>
        </div>

        <Button>
          <div className="h-[32px] flex items-center justify-center gap-2 bg-[#D3D3D3] rounded-[6px] [&>*]:stroke-[#1E1E1E]">
            <GoDiffAdded />
            <span className="font-[600] text-[12px] text-[#1E1E1E]">
              ساختن اسپیس جدید
            </span>
          </div>
        </Button>
        <SideItems />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <User />
        <Button>
          <div className="flex items-center gap-2 [&>*]:text-[#818181] mr-2">
            <BiExit />
            <span className="font-[400] text-[16px] text-[#818181]">خروج</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
