import { BiDotsHorizontalRounded } from "react-icons/bi";
type SideItemProps = {
  title: string;
  color: string | undefined;
  selected: boolean;
};
export default function SideItem(props: SideItemProps) {
  return (
    <div className="group flex items-center cursor-pointer">
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
        <div className="[&>*]:stroke-[#323232] hidden group-hover:block ml-1  ">
          <BiDotsHorizontalRounded />
        </div>
      </div>
    </div>
  );
}
