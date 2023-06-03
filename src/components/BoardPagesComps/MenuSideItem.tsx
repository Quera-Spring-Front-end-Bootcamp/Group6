import { AiOutlinePlus } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiLink } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Button } from "../Button";
export default function MenuSideItem() {
  return (
    <>
      <li>
        <AiOutlinePlus />
        <span>ساختن تسک جدید</span>
      </li>
      <li>
        <BiEdit />
        <span>ویرایش نام ورک‌اسپیس</span>
      </li>
      <li>
        <IoColorPaletteOutline />
        <span>ویرایش رنگ</span>
      </li>
      <li>
        <BiLink />
        <span>کپی لینک</span>
      </li>
      <li className="text-red-600 [&>*]:stroke-[red]">
        <BsTrash />
        <span>حذف</span>
      </li>
      <li>
        <Button variant="blue">
          <div className="w-full flex items-center gap-1">
            <AiOutlineShareAlt />
            <span className="font-[600] text-[12px]">اشتراک‌گذاری</span>
          </div>
        </Button>
      </li>
    </>
  );
}
