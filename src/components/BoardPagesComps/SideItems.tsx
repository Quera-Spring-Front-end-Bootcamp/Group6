import SideItem from "./SideItem";

export default function SideItems() {
  return (
    <div className="h-[300px] overflow-y-auto flex flex-col gap-4">
      <SideItem title="درس مدیریت پروژه" color={"#71FDA9"} selected={true} />
      <SideItem title="درس مدیریت پروژه" color={"#71FDA9"} selected={false} />
      <SideItem title="درس مدیریت پروژه" color={"#71FDA9"} selected={false} />
      <SideItem title="درس مدیریت پروژه" color={"#71FDA9"} selected={false} />
    </div>
  );
}
