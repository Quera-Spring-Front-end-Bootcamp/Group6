import { Children } from "../../types/Children";
import Side from "./Side";
import Top from "./Top";
import { useLocation } from "react-router-dom";
export default function MainPagesLayout({ children }: Children) {
  const location = useLocation();
  return (
    <div className="w-screen h-screen flex justify-between px-10 bg-[#FAFBFC]">
      <div dir="rtl" className="w-full h-full flex flex-col px-4">
        <div className="w-full h-[100px] ">
          {!location.pathname.includes("profile") && <Top />}
        </div>
        {children}
      </div>
      <Side />
    </div>
  );
}
