import SideItem from "./SideItem";

export default function SideItems() {
  return (
    <div className="h-[300px] overflow-y-auto flex flex-col gap-4">
      <SideItem title="درس مدیریت پروژه" color={"#EAF562"} selected={true} />
      <SideItem title="درس مدیریت پروژه" color={"#EAF562"} selected={false} />
      <SideItem title="درس مدیریت پروژه" color={"#EAF562"} selected={false} />
      <SideItem title="درس مدیریت پروژه" color={"#EAF562"} selected={false} />
    </div>
  );
}
